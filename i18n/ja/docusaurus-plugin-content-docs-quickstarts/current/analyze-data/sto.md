---
sidebar_position: 4
id: sto
title: Vantage でスクリプトを実行する方法
author: Adam Tworkiewicz
email: adam.tworkiewicz@teradata.com
page_last_update: 2021 年 9 月 7 日
description: Teradataでのアプリケーションの実行:スクリプト テーブル演算子を使用して、データを移動せずにデータに対してアプリケーションを実行します。
keywords: [data warehouses, compute storage separation, teradata, vantage, script table operator, cloud data platform, object storage, business intelligence, enterprise analytics]
---

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'
import CommunityLink from '../_partials/community_link.mdx'

# Vantage でスクリプトを実行する方法

## 概要

場合によっては、SQL では簡単に表現できない複雑なロジックをデータに適用する必要があります。1 つの方法は、ロジックをユーザー定義関数 (UDF) でラップすることです。このロジックが UDF でサポートされていない言語で既にコード化されている場合はどうすればよいでしょうか。スクリプト テーブル演算子は、ロジックをデータに持ち込んで Vantage で実行できるようにする Vantage の機能です。このアプローチの利点は、操作するために Vantage からデータを取得する必要がないことです。また、データ アプリケーションを Vantage で実行することで、その並列性を活用できます。アプリケーションの拡張方法を考える必要はありません。Vantage に任せることができます。

## 前提条件

Teradata Vantageインスタンスへのアクセス。

<ClearscapeDocsNote />

## Hello World

まずは簡単なところから始めましょう。データベースに「Hello World」と出力させたいとしたらどうでしょうか?

```sql
SELECT *
FROM
  SCRIPT(
    SCRIPT_COMMAND('echo Hello World!')
    RETURNS ('Message varchar(512)'));
```

以下のとおりです。
```sql
Message
------------
Hello World!
Hello World!
```

ここで何が起こったのか分析してみましょう。SQL には `echo Hello World!`が含まれています。これは Bash コマンドです。これで、Bash コマンドの実行方法がわかりました。しかし、なぜ 1 行ではなく 2 行が返されたのでしょうか。これは、この単純なスクリプトが各 AMP で 1 回実行され、たまたま AMP が 2 つあるためです。

```sql
-- Teradata magic that returns the number of AMPs in a system
SELECT hashamp()+1 AS number_of_amps;
```

戻り値:
```sql
number_of_amps
--------------
             2
```

このシンプルなスクリプトは、スクリプト テーブル オペレータ (STO) の背後にある考え方を示しています。スクリプトを提供すると、データベースはそれを AMP ごとに 1 回並列で実行します。これは、スクリプトに変換ロジックがあり、処理するデータが大量にある場合に適したモデルです。通常は、アプリケーションに同時実行性を組み込む必要があります。STO にそれを実行させることで、Teradata がデータに適切な同時実行レベルを選択できるようになります。

## サポートされている言語

さて、Bash で `echo` を実行しましたが、Bash は複雑なロジックを表現するのに適した環境とは言えません。では、他にどのような言語がサポートされているのでしょうか。幸いなことに、Vantage ノードで実行できるバイナリはすべて STO で使用できます。バイナリとそのすべての依存関係は、すべての Vantage ノードにインストールする必要があることに注意してください。実際には、管理者がサーバー上で維持する意思と能力があるものだけが選択肢になります。Python は非常に人気のある選択肢です。

## スクリプトをアップロードする

はい、Hello World はとてもエキサイティングですが、既存のロジックが大きなファイルにある場合はどうなるでしょうか。SQL クエリーでスクリプト全体を貼り付けて引用符をエスケープするのは、おそらく望ましくないでしょう。スクリプトのアップロードの問題は、ユーザー インストール ファイル (UIF) 機能で解決します。

以下の内容の  `helloworld.py`スクリプトがあるとします。

```bash
print("Hello World!")
```

スクリプトが  `/tmp/helloworld.py` のローカルマシンにあると仮定します。

まず、Vantage で権限を設定する必要があります。クリーンな状態を保つために、新しいデータベースを使用してこれを実行します。

```sql
-- Create a new database called sto
CREATE DATABASE STO
AS PERMANENT = 60e6, -- 60MB
    SPOOL = 120e6; -- 120MB

-- Allow dbc user to create scripts in database STO
GRANT CREATE EXTERNAL PROCEDURE ON STO to dbc;
```

以下のプロシージャ コールを使用して、スクリプトを Vantage にアップロードできます。

```python
call SYSUIF.install_file('helloworld',
                         'helloworld.py', 'cz!/tmp/helloworld.py');
```

スクリプトがアップロードされたので、以下のように呼び出すことができます。

```sql
-- We switch to STO database
DATABASE STO

-- We tell Vantage where to look for the script. This can be
-- any string and it will create a symbolic link to the directory
-- where our script got uploaded. By convention, we use the
-- database name.
SET SESSION SEARCHUIFDBPATH = sto;

-- We now call the script. Note, how we use a relative path that
-- starts with `./sto/`, which is where SEARCHUIFDBPATH
-- is pointing.
SELECT *
FROM SCRIPT(
  SCRIPT_COMMAND('python3 ./sto/helloworld.py')
  RETURNS ('Message varchar(512)'));
```

最後の呼び出しでは次が返されます。
```sql
Message
------------
Hello World!
Hello World!
```

大変な作業でしたが、まだ Hello World の状態です。 `SCRIPT`にデータを渡してみましょう。

## Vantage に保存されているデータを SCRIPT に渡す

これまでは、スタンドアロン スクリプトを実行するために `SCRIPT` 演算子を使用してきました。しかし、Vantage でスクリプトを実行する主な目的は、Vantage にあるデータを処理することです。Vantage からデータを取得して `SCRIPT`に渡す方法を見てみましょう。

まず、数行のテーブルを作成します。

```sql
-- Switch to STO database.
DATABASE STO

-- Create a table with a few urls
CREATE TABLE urls(url varchar(10000));
INS urls('https://www.google.com/finance?q=NYSE:TDC');
INS urls('http://www.ebay.com/sch/i.html?_trksid=p2050601.m570.l1313.TR0.TRC0.H0.Xteradata+merchandise&_nkw=teradata+merchandise&_sacat=0&_from=R40');
INS urls('https://www.youtube.com/results?search_query=teradata%20commercial&sm=3');
INS urls('https://www.contrivedexample.com/example?mylist=1&mylist=2&mylist=...testing');
```

以下のスクリプトを使用してクエリーパラメータを解析します。

```python
from urllib.parse import urlparse
from urllib.parse import parse_qsl
import sys

for line in sys.stdin:
    # remove leading and trailing whitespace
    url = line.strip()
    parsed_url = urlparse(url)
    query_params = parse_qsl(parsed_url.query)

    for element in query_params:
        print("\t".join(element))
```

スクリプトでは、URL が `stdin` に 1 行ずつ 1 つずつ入力されることを想定していることに注意してください。また、タブ文字を値の区切り文字として使用して、結果を 1 行ずつ印刷することにも注意してください。

スクリプトをインストールしましょう。ここでは、スクリプト ファイルがローカル マシンの `/tmp/urlparser.py` にあると想定します。
```python
CALL SYSUIF.install_file('urlparser',
	'urlparser.py', 'cz!/tmp/urlparser.py');
```

スクリプトがインストールされたら、 `urls` テーブルからデータを取得し、それをスクリプトに入力してクエリーパラメータを取得します。
```sql
-- We inform Vantage to create a symbolic link from the UIF directory to ./sto/
SET SESSION SEARCHUIFDBPATH = sto ;

SELECT *
  FROM SCRIPT(
    ON(SELECT url FROM urls)
    SCRIPT_COMMAND('python3 ./sto/urlparser.py')
    RETURNS ('param_key varchar(512)', 'param_value varchar(512)'));
```

その結果、クエリーパラメータとその値が取得されます。行数はキー/値のペアの数だけあります。また、スクリプトでキーと値の出力の間にタブを挿入したため、STO から 2 つの列が取得されます。
```sql
param_key   |param_value
-----------------------------------------------------------------
q           |NYSE:TDC
_trksid     |p2050601.m570.l1313.TR0.TRC0.H0.Xteradata merchandise
search_query|teradata commercial
_nkw        |teradata merchandise
sm          |3
_sacat      |0
mylist      |1
_from       |R40
mylist      |2
mylist      |...testing
```

## SCRIPT出力をテーブルに挿入する

Vantage からデータを取得し、それをスクリプトに渡して出力を得る方法を学びました。この出力をテーブルに保存する簡単な方法はありますか? もちろんあります。上記の選択を `CREATE TABLE` ステートメントと組み合わせることができます。

```sql
-- We inform Vantage to create a symbolic link from the UIF directory to ./sto/
SET SESSION SEARCHUIFDBPATH = sto ;

CREATE MULTISET TABLE
    url_params(param_key, param_value)
AS (
    SELECT *
    FROM SCRIPT(
      ON(SELECT url FROM urls)
      SCRIPT_COMMAND('python3 ./sto/urlparser.py')
      RETURNS ('param_key varchar(512)', 'param_value varchar(512)'))
) WITH DATA
NO PRIMARY INDEX;
```

では、`url_params`テーブルの内容を検査してみましょう。

```sql
SELECT * FROM url_params;
```

以下の出力が表示されるはずです。
```sql
param_key   |param_value
------------+-----------------------------------------------------
q           |NYSE:TDC
_trksid     |p2050601.m570.l1313.TR0.TRC0.H0.Xteradata merchandise
search_query|teradata commercial
_nkw        |teradata merchandise
sm          |3
_sacat      |0
mylist      |1
_from       |R40
mylist      |2
mylist      |...testing
```

## まとめ

このクイック スタートでは、Vantage のデータに対してスクリプトを実行する方法を学習しました。スクリプト テーブル オペレーター (STO) を使用してスクリプトを実行しました。このオペレーターを使用すると、データにロジックを適用できます。AMP ごとに 1 つのスクリプトを並列実行することで、同時実行の考慮事項をデータベースにオフロードします。必要なのはスクリプトを提供するだけで、データベースはそれを並列で実行します。

## さらに詳しく
* [Teradata Vantage™ - SQL オペレータとユーザー定義関数 - SCRIPT](https://docs.teradata.com/r/9VmItX3V2Ni9Ts70HbDzVg/CBAaRxUyOdF0t1SQIuXeug)
* [SCRIPT テーブルオペレータを使用した R および Python 分析](https://docs.teradata.com/v/u/Orange-Book/R-and-Python-Analytics-with-SCRIPT-Table-Operator-Orange-Book-4.3.1)

<CommunityLink />
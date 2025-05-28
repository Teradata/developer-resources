---
sidebar_position: 20
author: Adam Tworkiewicz
email: adam.tworkiewicz@teradata.com
page_last_update: 2022年4月6日
description: Fastload を使用して大規模なバルクロードを効率的に実行する方法
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics, Fastload]
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Fastload を使用して大規模なバルクロードを効率的に実行する方法

## 廃止のお知らせ
:::important
このハウツーでは、`Fastload` ユーティリティについて説明しています。このユーティリティは廃止されました。新しい実装では、[Teradata Parallel Transporter(TPT)](https://docs.teradata.com/search/documents?query=Teradata+Parallel+Transporter+Quick+Start+Guide&sort=last_update&virtual-field=title_only&content-lang=en-US) の使用を検討してください。
:::

## 概要

Vantageに大量のデータを移動させるニーズはよくあります。Teradataは、大量のデータをTeradata Vantageに効率的にロードできる `Fastload` ユーティリティを提供します 。このハウツーでは、`Fastload` の使用方法を説明します。このシナリオでは30万件以上のレコードをもつ40MB以上のデータを数秒でロードします。

## 前提条件

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'

* Teradata Vantageインスタンスへのアクセス。
  <ClearscapeDocsNote />
* Teradata Tools and Utilities (TTU) をダウンロード -   サポートされているプラットフォーム: [Windows](https://downloads.teradata.com/download/tools/teradata-tools-and-utilities-windows-installation-package), [MacOS](https://downloads.teradata.com/download/tools/teradata-tools-and-utilities-macos-installation-package), [Linux](https://downloads.teradata.com/download/tools/teradata-tools-and-utilities-linux-installation-package-0) (登録が必要です)。



## TTUのインストール
   <Tabs>
   <TabItem value="Windows" label="Windows">
    ダウンロードしたファイルを解凍し、`setup.exe` を実行します。
   </TabItem>
   <TabItem value="MacOS" label="MacOS">
    ダウンロードしたファイルを解凍し、`TeradataToolsAndUtilitiesXX.XX.XX.pkg` を実行します。
   </TabItem>
   <TabItem value="Linux" label="Linux">
    ダウンロードしたファイルを解凍し、解凍したディレクトリに移動して次のコマンドを実行します。
    ```bash 
    ./setup.sh a
    ```
   </TabItem>
   </Tabs>


## サンプルデータを入手する

非営利団体の米国税務申告を扱います。非営利の納税申告は公開データです。アメリカ内国歳入庁は、これらを S3 バケットで公開します。2020 年の提出書類のまとめを見てみましょう: `https://s3.amazonaws.com/irs-form-990/index_2020.csv`。ブラウザ、`wget`、または `curl` を使用して、ファイルをローカルに保存できます。

## データベースを作成する

Vantageでデータベースを作成しましょう。お気に入りの SQL ツールを使用して、以下のクエリーを実行します。

```sql
CREATE DATABASE irs
AS PERMANENT = 120e6, -- 120MB
    SPOOL = 120e6; -- 120MB
```

## Fastloadを実行する

これから `Fastload` を実行する。`Fastload` は、大量のデータを Vantage にアップロードする際に非常に効率的なコマンドラインツールです。`Fastload` は、高速にするためにいくつかの制限が設けられています。空のテーブルのみを設定でき、すでに設定されているテーブルへの挿入はサポートされていません。セカンダリ インデックスを持つテーブルはサポートされません。また、テーブルが `MULTISET` テーブルであっても、重複レコードは挿入されない。 制限の完全なリストについては、 [Teradata®  `Fastload`リファレンス](https://docs.teradata.com/r/hBBrRBhRY0MFN4~xApbUqw/root) を参照してください。

Fastload には独自のスクリプト言語があります。この言語を使用すると、任意の SQLコマンドを使用してデータベースを準備し、入力ソースを宣言し、Vantage にデータを挿入する方法を定義できます。このツールは対話型モードとバッチ モードの両方をサポートしています。このセクションでは、対話型モードを使用します。

対話型モードで `Fastload` を開始しましょう:

```bash
fastload
```

まず、Vantageデータベースにログインします。Vantage Express をローカルで実行しているので、ホスト名として `localhost` を使用し、ユーザー名とパスワードとして `dbc` を使用します。

```bash
LOGON localhost/dbc,dbc;
```

ログインできたので、データベースを準備します。 `irs` データベースに切り替えて、ターゲット テーブル `irs_returns` とエラー テーブル (エラー テーブルについては後で詳しく説明します) が存在しないことを確認します。

```sql
DATABASE irs;
DROP TABLE irs_returns;
DROP TABLE irs_returns_err1;
DROP TABLE irs_returns_err2;
```

次に、csv ファイルのデータ要素を保持できる空のテーブルを作成します。

```sql
CREATE MULTISET TABLE irs_returns (
    return_id INT,
    filing_type VARCHAR(5) CHARACTER SET LATIN NOT CASESPECIFIC,
    ein INT,
    tax_period INT,
    sub_date VARCHAR(100) CHARACTER SET LATIN NOT CASESPECIFIC,
    taxpayer_name VARCHAR(100) CHARACTER SET LATIN NOT CASESPECIFIC,
    return_type VARCHAR(5) CHARACTER SET LATIN NOT CASESPECIFIC,
    dln BIGINT,
    object_id BIGINT
)
PRIMARY INDEX ( return_id );
```

ターゲット テーブルが準備できたので、データのロードを開始できます。`ERRORFILES` ディレクティブはエラー ファイルを定義します。エラーファイルは、実際には `Fastload` が作成するテーブルです。 最初のテーブルには、データ変換とその他の問題に関する情報が含まれています。2 番目のテーブルは、主キー違反などのデータの固有性の問題を追跡します。

```sql
BEGIN LOADING irs_returns
    ERRORFILES irs_returns_err1, irs_returns_err2;
```

`Fastload` に 10k 行ごとにチェックポイントを保存するように指示します。ジョブを再開する必要がある場合に便利です。最後のチェックポイントから再開できるようになります。


```sql
    CHECKPOINT 10000;
```

また、CSV ファイルの最初の行をレコード 2 からスキップするように `Fastload` に指示する必要があります。これは、最初の行には列ヘッダーが含まれているためです。

```sql
    RECORD 2;
```

`Fastload` また、それがカンマ区切りファイルであることも認識する必要があります。

```sql
    SET RECORD VARTEXT ",";
```

`DEFINE` ブロックは、どの列を期待するかを指定します。

```sql
    DEFINE in_return_id (VARCHAR(19)),
    in_filing_type (VARCHAR(5)),
    in_ein (VARCHAR(19)),
    in_tax_period (VARCHAR(19)),
    in_sub_date (VARCHAR(22)),
    in_taxpayer_name (VARCHAR(100)),
    in_return_type (VARCHAR(5)),
    in_dln (VARCHAR(19)),
    in_object_id (VARCHAR(19)),
```

`DEFINE`ブロックには、データが含まれるファイルを指す `FILE` 属性もあります。 `FILE = /tmp/index_2020.csv;` を `index_2020.csv` ファイルの格納場所に置き換えます。

```sql
    FILE = /tmp/index_2020.csv;
```

最後に、データベースにデータを入れる INSERT 文を定義し、`LOADING` ブロックを閉じます。 

```sql
    INSERT INTO irs_returns (
        return_id,
        filing_type,
        ein,
        tax_period,
        sub_date,
        taxpayer_name,
        return_type,
        dln,
        object_id
    ) VALUES (
        :in_return_id,
        :in_filing_type,
        :in_ein,
        :in_tax_period,
        :in_sub_date,
        :in_taxpayer_name,
        :in_return_type,
        :in_dln,
        :in_object_id
    );
END LOADING;
```
ジョブが終了したら、データベースからログオフしてクリーンアップする。

```sql
LOGOFF;
```

スクリプト全体は以下のようになります。
```sql
LOGON localhost/dbc,dbc;

DATABASE irs;
DROP TABLE irs_returns;
DROP TABLE irs_returns_err1;
DROP TABLE irs_returns_err2;

CREATE MULTISET TABLE irs_returns (
    return_id INT,
    filing_type VARCHAR(5) CHARACTER SET LATIN NOT CASESPECIFIC,
    ein INT,
    tax_period INT,
    sub_date VARCHAR(100) CHARACTER SET LATIN NOT CASESPECIFIC,
    taxpayer_name VARCHAR(100) CHARACTER SET LATIN NOT CASESPECIFIC,
    return_type VARCHAR(5) CHARACTER SET LATIN NOT CASESPECIFIC,
    dln BIGINT,
    object_id BIGINT
)
PRIMARY INDEX ( return_id );

BEGIN LOADING irs_returns
  ERRORFILES irs_returns_err1, irs_returns_err2;
  CHECKPOINT 10000;
  RECORD 2;
  SET RECORD VARTEXT ",";

  DEFINE in_return_id (VARCHAR(19)),
    in_filing_type (VARCHAR(5)),
    in_ein (VARCHAR(19)),
    in_tax_period (VARCHAR(19)),
    in_sub_date (VARCHAR(22)),
    in_taxpayer_name (VARCHAR(100)),
    in_return_type (VARCHAR(5)),
    in_dln (VARCHAR(19)),
    in_object_id (VARCHAR(19)),
    FILE = /tmp/index_2020.csv;

  INSERT INTO irs_returns (
      return_id,
      filing_type,
      ein,
      tax_period,
      sub_date,
      taxpayer_name,
      return_type,
      dln,
      object_id
  ) VALUES (
      :in_return_id,
      :in_filing_type,
      :in_ein,
      :in_tax_period,
      :in_sub_date,
      :in_taxpayer_name,
      :in_return_type,
      :in_dln,
      :in_object_id
  );
END LOADING;

LOGOFF;
```

## Batch mode

この例をバッチモードで実行するには、すべての命令を1つのファイルに保存して実行するだけです。

```bash
fastload < file_with_instruction.fastload
```

## `Fastload` vs. NOS

この例では、ファイルは S3 バケット内にあります。つまり、Native Object Storage (NOS) を使用してデータを取り込むことができます。

```sql
-- create an S3-backed foreign table
CREATE FOREIGN TABLE irs_returns_nos
    USING ( LOCATION('/s3/s3.amazonaws.com/irs-form-990/index_2020.csv') );

-- load the data into a native table
CREATE MULTISET TABLE irs_returns_nos_native
    (RETURN_ID, FILING_TYPE, EIN, TAX_PERIOD, SUB_DATE, TAXPAYER_NAME)
AS (
    SELECT RETURN_ID, FILING_TYPE, EIN, TAX_PERIOD, SUB_DATE, TAXPAYER_NAME FROM irs_returns_nos
) WITH DATA
NO PRIMARY INDEX;
```

NOS ソリューションは追加のツールに依存しないため便利です。SQLのみで実装可能です。NOS タスクが AMP に委任され、並行して実行されるため、特に多数の AMP を備えた Vantage デプロイメント環境では良好なパフォーマンスを発揮します。また、オブジェクト ストレージ内のデータを複数のファイルに分割すると、パフォーマンスがさらに向上する可能性があります。

## まとめ
このハウツーでは、大量のデータを Vantage に取り込む方法を説明しました。`Fastload` を使用して、数十万のレコードを Vantage に数秒でロードしました。

## さらに詳しく

* [Teradata® `Fastload` リファレンス](https://docs.teradata.com/r/hBBrRBhRY0MFN4~xApbUqw/root)
* [オブジェクトストレージに保存されたクエリーデータ](../manage-data/nos.md)

import CommunityLinkPartial from '../_partials/community_link.mdx';

<CommunityLinkPartial />
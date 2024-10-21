---
sidebar_position: 1
id: jupyter
title: Jupyter NotebookからVantageを利用する方法
author: Adam Tworkiewicz
email: adam.tworkiewicz@teradata.com
page_last_update: 2022 年 11 月 10 日
description: Jupyter Notebookから Teradata Vantage を使用する
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, JDBC, java applications, business intelligence, enterprise analytics, jupyter, teradatasql, ipython-sql, teradatasqlalchemy]
---

import ClearscapeJyupiter from '../_partials/jupyter_notebook_clearscape_analytics_note.mdx'
import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'
import CommunityLink from '../_partials/community_link.mdx'

# Jupyter NotebookからVantageを利用する方法

<ClearscapeJyupiter />

## 概要
このハウツーでは、Jupyter Notebookから Teradata Vantage に接続する手順を説明します。

<ClearscapeDocsNote />

## オプション

Jupyter Notebook から Vantage に接続するには、いくつかの方法があります。

1. [通常のPython/RカーネルノートブックでPythonまたはRライブラリを使用する](#teradata-libraries) - このオプションは、独自の Docker イメージを生成できない制限された環境にいる場合に適しています。また、ノートブックで SQL と Python/R を混在させる必要がある従来のデータサイエンス シナリオでも役立ちます。Jupyter に精通していて、好みのライブラリと拡張機能のセットがある場合は、このオプションから始めてください。
2. [Teradata Jupyter Dockerイメージの使用](#teradata-jupyter-docker-image) - Teradata Jupyter Docker イメージには、Teradata SQL カーネル (詳細は後述)、 `teradataml` および `tdplyr` ライブラリ、Python および R ドライバがバンドルされています。また、Teradata 接続の管理や Vantage データベース内のオブジェクトの探索を可能にする Jupyter 拡張機能も含まれています。SQL を頻繁に使用するときや、視覚的なナビゲーターが役立つと感じるときに便利です。Jupyter を初めて使用するときや、ライブラリと拡張機能の厳選されたアセンブリを入手したい場合は、このオプションから始めてください。

### Teradata ライブラリ

このオプションでは、通常の Jupyter Lab ノートブックを使用します。Teradata Python ドライバをロードして Python コードから使用する方法について説明します。また、SQL のみのセルのサポートを追加する `ipython-sql` 拡張機能についても説明します。

1. ここでは Dockerを使用していますが、Jupyter Hub、Google Cloud AI Platform Notebooks、AWS SageMaker Notebooks、Azure ML Notebooks など、Notebookを起動する任意のメソッドを使用できます。

```bash
docker run --rm -p 8888:8888 -e JUPYTER_ENABLE_LAB=yes \
  -v "${PWD}":/home/jovyan/work jupyter/datascience-notebook
```

2. まず、単純な Jupyter Lab ノートブックから始めます。
```bash
Entered start.sh with args: jupyter lab
Executing the command: jupyter lab
....
To access the server, open this file in a browser:
    file:///home/jovyan/.local/share/jupyter/runtime/jpserver-7-open.html
Or copy and paste one of these URLs:
    http://d5c2323ae5db:8888/lab?token=5fb43e674367c6895e8c2404188aa550b5c7bdf96f5b4a3a
  or http://127.0.0.1:8888/lab?token=5fb43e674367c6895e8c2404188aa550b5c7bdf96f5b4a3a
```

3. 新しいノートブックを開き、必要なライブラリをインストールするためのセルを作成します。
:::note
以下に説明するすべてのセルを含むノートブックを GitHub に公開しました: https://github.com/Teradata/quickstarts/blob/main/modules/ROOT/attachments/vantage-with-python-libraries.ipynb
:::

```bash
import sys
!{sys.executable} -m pip install teradatasqlalchemy
```

4. ここで、 `Pandas` をインポートし、Teradata に接続するための接続文字列を定義します。ノートブックをローカル マシン上の Docker で実行しており、ローカルの Vantage Express VM に接続したいので、マシンの IP を参照するために Docker によって提供される `host.docker.internal` DNS 名を使用しています。

```bash
import pandas as pd
# Define the db connection string. Pandas uses SQLAlchemy connection strings.
# For Teradata Vantage, it's teradatasql://username:password@host/database_name .
# See https://pypi.org/project/teradatasqlalchemy/ for details.
db_connection_string = "teradatasql://dbc:dbc@host.docker.internal/dbc"
```

5. これで、Pandas を呼び出して Vantage をクエリーし、結果を Pandas データフレームに移動できるようになりました。
```bash
pd.read_sql("SELECT * FROM dbc.dbcinfo", con = db_connection_string)
```

6. 上記の構文は簡潔ですが、Vantage でデータを調べるだけの場合は面倒になることがあります。 `ipython-sql` とその `%%sql` マジックを使用して、SQL のみのセルを作成します。必要なライブラリをインポートすることから始めます。
```bash
import sys
!{sys.executable} -m pip install ipython-sql teradatasqlalchemy
```

7. `ipython-sql` をロードし、db接続文字列を定義します。
```bash
%load_ext sql
# Define the db connection string. The sql magic uses SQLAlchemy connection strings.
# For Teradata Vantage, it's teradatasql://username:password@host/database_name .
# See https://pypi.org/project/teradatasqlalchemy/ for details.
%sql teradatasql://dbc:dbc@host.docker.internal/dbc
```

8. これで、 `%sql` と `%%sql` のマジックが使えるようになりました。テーブル内のデータを調べたいとします。次のようなセルを作成できます。
```sql
%%sql
SELECT * FROM dbc.dbcinfo
```

9. データを Pandas フレームに移動したい場合は、以下のように言えます。
```sql
result = %sql SELECT * FROM dbc.dbcinfo
result.DataFrame()
```

ipython-sql には、変数置換、`matplotlib` によるプロット、ローカル CSV ファイルへの結果の書き込みやデータベースへの結果の書き込みなど、他にも多くの機能があります。例については [デモノートブック](https://github.com/Teradata/quickstarts/blob/main/modules/ROOT/attachments/vantage-with-python-libraries.ipynb) を、完全なリファレンスについては [ipython-sql github リポジトリ](https://github.com/catherinedevlin/ipython-sql/) を参照してください。

### Teradata Jupyter Dockerイメージ

Teradata Jupyter Docker イメージは、 `jupyter/datascience-notebook` Docker イメージ上に構築されています。Teradata SQL カーネル、Teradata Python および R ライブラリ、Jupyter 拡張機能が追加され、Teradata Vantage を操作する際の生産性が向上します。このイメージには、SQL カーネルと Teradata ライブラリの使用方法を示すサンプル ノートブックも含まれています。

SQL カーネルと Teradata Jupyter 拡張機能は、SQL インターフェイスに多くの時間を費やすユーザーにとって便利です。多くの場合、Teradata Studio を使用するよりも便利なノートブック エクスペリエンスとして考えてください。Teradata Jupyter Docker イメージは、Teradata Studio を置き換えるものではありません。すべての機能を備えているわけではありません。軽量の Web ベースのインターフェイスを必要とし、ノートブック UI を楽しむユーザー向けに設計されています。

Teradata Jupyter Docker イメージは、Jupyter をローカルで実行する場合、またはカスタム Jupyter Docker イメージを実行できる場所がある場合に使用できます。以下の手順では、イメージをローカルで使用する方法を示します。

1. イメージを実行します:

:::note
 `-e "accept_license=Y` を渡すと、Teradata Jupyter Extensions の [ライセンス契約](https://github.com/Teradata/jupyterextensions/blob/master/licensefiles/license.txt) を受け入れることになります。
:::

```bash
docker volume create notebooks
docker run -e "accept_license=Y" -p :8888:8888 \
  -v notebooks:/home/jovyan/JupyterLabRoot \
  teradata/jupyterlab-extensions
```

2. Docker ログには、アクセスする必要のある URL が表示されます。たとえば、次のような内容が表示されます。
```bash
Starting JupyterLab ...
Docker Build ID = 3.2.0-ec02012022
Using unencrypted HTTP

Enter this URL in your browser:  http://localhost:8888?token=96a3ab874a03779c400966bf492fe270c2221cdcc74b61ed

* Or enter this token when prompted by Jupyter: 96a3ab874a03779c400966bf492fe270c2221cdcc74b61ed
* If you used a different port to run your Docker, replace 8888 with your port number
```

3. URL を開き、ファイル エクスプローラを使用してNotebook `jupyterextensions -> notebooks -> sql -> GettingStartedDemo.ipynb`を開きます。
4. Teradata SQL カーネルのデモを確認してください。

![GettingStartedDemo.ipynb ](../images/gettingstarteddemo.ipynb.png)

## まとめ

このクイック スタートでは、Jupyter Notebook から Teradata Vantage に接続するためのさまざまなオプションについて説明しました。複数の Teradata Python および R ライブラリをバンドルした Teradata Jupyter Docker イメージについて学習しました。また、SQL カーネル、データベース オブジェクト エクスプローラー、接続管理も提供します。これらの機能は、SQL インターフェイスに多くの時間を費やす場合に便利です。より伝統的なデータ サイエンスのシナリオについては、スタンドアロンの Teradata Python ドライバと、ipython sql 拡張機能による統合について検討しました。

## さらに詳しく
* [ Teradata Jupyter 拡張機能 Web サイト](https://teradata.github.io/jupyterextensions)
* [ Jupyter用Teradata Vantage™モジュールインストールガイド](https://docs.teradata.com/r/KQLs1kPXZ02rGWaS9Ktoww/root)
* [ Python用Teradata®パッケージユーザガイド](https://docs.teradata.com/r/1YKutX2ODdO9ppo_fnguTA/root)

<CommunityLink />
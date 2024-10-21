---
id: ubuntu
title: Ubuntu
sidebar_position: 1
author: Adam Tworkiewicz
email: adam.tworkiewicz@teradata.com
page_last_update: 2022 年 1 月 5 日
description: UbuntuからのODBCによるVantageへの接続
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics, odbc, ubuntu]
---

import ClearscapeDocsNote from '../../_partials/vantage_clearscape_analytics.mdx'
import CommunityLink from '../../_partials/community_link.mdx'

# UbuntuからのODBCによるVantageへの接続

## 概要

このハウツーでは、Ubuntu上のTeradata VantageでODBCドライバを使用する方法を説明します。

## 前提条件

* Teradata Vantageインスタンスへのアクセス。
    <ClearscapeDocsNote/>
* Ubuntu マシンへのルートアクセス。

## インストール

* 依存関係をインストールします:

```bash
apt update && DEBIAN_FRONTEND=noninteractive apt install -y wget unixodbc unixodbc-dev iodbc python3-pip
```

* Ubuntu 用の Teradata ODBC ドライバをインストールします。
```bash
wget https://downloads.teradata.com/download/cdn/connectivity/odbc/17.10.x.x/tdodbc1710__ubuntu_x8664.17.10.00.14-1.tar.gz \
    && tar -xzf tdodbc1710__ubuntu_x8664.17.10.00.14-1.tar.gz \
    && dpkg -i tdodbc1710/tdodbc1710-17.10.00.14-1.x86_64.deb
```

* ODBCの設定は、`/etc/odbcinst.ini` を作成して、以下の内容で行います。
```bash
[ODBC Drivers]
Teradata Database ODBC Driver 17.10=Installed

[Teradata Database ODBC Driver 17.10]
Description=Teradata Database ODBC Driver 17.10
Driver=/opt/teradata/client/17.10/odbc_64/lib/tdataodbc_sb64.so
```

## ODBCを使用する

サンプルの Python アプリケーションを使用してインストールを検証します。次の内容の `test.py` ファイルを作成します。
`DBCName=192.168.86.33;UID=dbc;PWD=dbc` を Teradata Vantage インスタンスの IP アドレス、ユーザー名、およびパスワードに置き換えます。

```python
import pyodbc

print(pyodbc.drivers())

cnxn = pyodbc.connect('DRIVER={Teradata Database ODBC Driver 17.10};DBCName=192.168.86.33;UID=dbc;PWD=dbc;')
cursor = cnxn.cursor()

cursor.execute("SELECT CURRENT_DATE")
for row in cursor.fetchall():
    print(row)
EOF
```

テストアプリケーションを実行します。

```python
python3 test.py
```

以下のような出力が得られるはずです。

```python
['ODBC Drivers', 'Teradata Database ODBC Driver 17.10']
(datetime.date(2022, 1, 5), )
```

## まとめ

このハウツーでは、Ubuntu 上の Teradata Vantage で ODBC を使用する方法を説明します。このハウツーでは、ODBC Teradata ドライバと依存関係をインストールする方法を示します。次に、ODBC を構成し、簡単な Python アプリケーションを使用して接続を検証する方法を示します。

## さらに詳しく
* [ODBC Driver for Teradata® ユーザー ガイド](https://docs.teradata.com/search/all?query=ODBC+Driver+for+Teradata+User+Guide&filters=ft%3AisBook~%22true%22&sort=last_update)

<CommunityLink />
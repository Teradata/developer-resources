---
sidebar_position: 2
id: teradatasql
author: Krutik Pathak
email: krutik.pathak@teradata.com
page_last_update: 2023 年 8 月 2 日
description: teradatasql Python データベース ドライバを使用して Teradata Vantage に接続する方法
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, teradatasql, Python アプリケーション, business intelligence, enterprise analytics]
---

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'
import CommunityLink from '../_partials/community_link.mdx'

# Python を使用して Vantage に接続する方法

## 概要

このハウツーでは、 [teradatasql](https://github.com/Teradata/python-driver) Python データベース ドライバを使用して Teradata Vantage に接続する方法を説明しました。

## 前提条件

* 64 ビット Python 3.4 以降。

* `teradatasql` システムにインストールされているドライバ:
```
pip install teradatasql
```

:::note
`teradatasql` パッケージは、Windows、macOS (10.14 Mojave 以降)、Linux で実行されます。Linux の場合、現在 Linux x86-64 アーキテクチャのみがサポートされています。  
:::

* Teradata Vantage インスタンスへのアクセス。現在、ドライバは Teradata Database 16.10 以降のリリースでの使用がサポートされています。

<ClearscapeDocsNote />

## クエリーを送信するコード

これは `teradatasql`を使用して Teradata Vantage に接続するためのシンプルな Python コードです。あとは、接続と認証のパラメータを渡してクエリーを実行するだけです。

```python
import teradatasql

DB_URL = ""                                 #Add Host
USER = ""                                   #Add Username
PASS = ""                                   #Add Password

try:
    # Establish a connection to the Teradata database
    with teradatasql.connect(host=DB_URL, user=USER, password=PASS) as con:
        # Create a cursor to execute queries
        with con.cursor() as cur:
            try:
                # Creating the table SampleEmployee
                cur.execute (f"CREATE SET TABLE {USER}.SampleEmployee \
                            (Associate_Id     INTEGER, \
                            Associate_Name   CHAR(25), \
                            Job_Title        VARCHAR(25)) \
                            UNIQUE PRIMARY INDEX (Associate_Id);")
                
                print(f"Sample table {USER}.SampleEmployee created.")

                # Adding sample data into SampleEmployee table
                cur.execute (f"INSERT INTO {USER}.SampleEmployee VALUES (1, 'Richard Hendricks','CEO')")
                cur.execute (f"INSERT INTO {USER}.SampleEmployee VALUES (2, 'Jared Dunn','CFO')")
                cur.execute (f"INSERT INTO {USER}.SampleEmployee VALUES (3, 'Jian Yang','Intern')")

                print(f"Sample data added to table {USER}.SampleEmployee.")

                # Execute the SELECT query to get the results from SampleEmployee table 
                cur.execute(f"SELECT * FROM {USER}.SampleEmployee")

                # Extract data from the result set and print it
                for row in cur:
                    print(f"Associate ID: {row[0]}, Associate_Name: {row[1]}, Job_Title:{row[2]}")

                

            except teradatasql.DatabaseError as db_err:
                # Handle any errors that occur during query execution
                print("Error while executing the query:", db_err)

except teradatasql.DatabaseError as db_err:
    # Handle any errors that occur during the database connection
    print("Error while connecting to the Teradata database:", db_err)
```

## まとめ

このハウツーでは、 `teradatasql` Python データベース ドライバを使用して Teradata Vantage に接続する方法を示しました。 `teradatasql`を使用して SQL クエリーを Teradata Vantage に送信するサンプル Python コードについて説明しました。

## さらに詳しく
* [teradatasql Python ドライバ リファレンス](https://github.com/Teradata/python-driver)

<CommunityLink />

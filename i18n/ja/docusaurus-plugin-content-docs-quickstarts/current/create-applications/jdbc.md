---
sidebar_position: 1
id: jdbc
author: Adam Tworkiewicz
email: adam.tworkiewicz@teradata.com
page_last_update: 2022 年 11 月 14 日
description: JDBCでVantageに接続する方法
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, ODBC ドライバ, Java アプリケーション, business intelligence, enterprise analytics]
---

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'
import CommunityLink from '../_partials/community_link.mdx'

# JDBC を使用して Vantage に接続する方法

## 概要

このハウツーでは、サンプル Java アプリケーション [GitHub JDBC](https://github.com/Teradata/jdbc-sample-app)を使用して、JDBC を使用して Teradata Vantage に接続する方法を説明します。

## 前提条件

* Teradata Vantageインスタンスへのアクセス。

<ClearscapeDocsNote />

* JDK
* Maven

## Maven プロジェクトに依存関係を追加する

Teradata JDBC ドライバを依存関係として Maven POM XML ファイルに追加します。


```xml
<dependency>
  <groupId>com.teradata.jdbc</groupId>
  <artifactId>terajdbc</artifactId>
  <version>20.00.00.06</version>
</dependency>
```
## クエリーを送信するコード

:::note
この手順では、Vantage データベースが `localhost` のポート `1025`で使用可能であることを前提としています。ラップトップで Vantage Express を実行している場合は、VM からホスト マシンにポートを公開する必要があります。ポート転送の方法については、仮想化ソフトウェアのドキュメントを参照してください。
:::

プロジェクトがセットアップされました。残っているのは、ドライバをロードし、接続パラメータと認証パラメータを渡し、クエリーを実行することだけです。

```java
package com.teradata.app;

import java.sql.*;

public class App {
    static final String DB_URL = "jdbc:teradata://localhost";
    static final String USER = "dbc";
    static final String PASS = "dbc";
    static final String QUERY = "SELECT * FROM dbc.dbcinfo";

    public static void main(String[] args) {
        App app = new App();
        app.query();
    }

    public void query() {
        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;

        // Open a connection
        try {
            conn = DriverManager.getConnection(DB_URL, USER, PASS);
            stmt = conn.createStatement();
            rs = stmt.executeQuery(QUERY);

            // Extract data from result set
            while (rs.next()) {
                System.out.println(String.format("setting: %s, value: %s", rs.getString(1), rs.getString(2)));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            if (rs != null) {
                try {
                    rs.close();
                } catch (SQLException e) { /* Ignored */}
            }
            if (stmt != null) {
                try {
                    stmt.close();
                } catch (SQLException e) { /* Ignored */}
            }
            if (conn != null) {
                try {
                    conn.close();
                } catch (SQLException e) { /* Ignored */}
            }
        }
    }
}
```

### テストを実行する

テストを実行する。
```
mvn test
```

## まとめ

このハウツーでは、JDBC を使用して Teradata Vantage に接続する方法を示しました。また、Maven をビルド ツールとして使用し、Teradata JDBC ドライバを使用して SQL クエリーを Teradata Vantage に送信するサンプル Java アプリケーションについて説明しました。

## さらに詳しく
* [Teradata JDBC Driver リファレンス](https://teradata-docs.s3.amazonaws.com/doc/connectivity/jdbc/reference/current/frameset.html)

<CommunityLink />
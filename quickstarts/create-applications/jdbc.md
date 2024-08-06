---
sidebar_position: 1
id: jdbc
author: Adam Tworkiewicz
email: adam.tworkiewicz@teradata.com
page_last_update: November 14th, 2022
description: How to connect to Teradata Vantage using JDBC.
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, JDBC, java applications, business intelligence, enterprise analytics]
---

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'
import CommunityLink from '../_partials/community_link.mdx'

# Connect to Vantage using JDBC

## Overview

This how-to demonstrates how to connect to Teradata Vantage using JDBC using a sample Java application: [GitHub JDBC](https://github.com/Teradata/jdbc-sample-app).

## Prerequisites

* Access to a Teradata Vantage instance.

<ClearscapeDocsNote />

* JDK
* Maven

## Add dependency to your maven project

Add the Teradata JDBC driver as a dependency to your Maven POM XML file:


```xml
<dependency>
  <groupId>com.teradata.jdbc</groupId>
  <artifactId>terajdbc</artifactId>
  <version>20.00.00.06</version>
</dependency>
```
## Code to send a query

:::note
This step assumes that your Vantage database is available on `localhost` on port `1025`. If you are running Vantage Express on your laptop, you need to expose the port from the VM to the host machine. Refer to your virtualization software documentation how to forward ports.
:::

The project is set up. All that is left, is to load the driver, pass connection and authentication parameters and run a query:

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

### Run the tests

Run the tests:
```
mvn test
```

## Summary

This how-to demonstrated how to connect to Teradata Vantage using JDBC. It described a sample Java application with Maven as the build tool that uses the Teradata JDBC driver to send SQL queries to Teradata Vantage.

## Further reading
* [Teradata JDBC Driver Reference](https://teradata-docs.s3.amazonaws.com/doc/connectivity/jdbc/reference/current/frameset.html)

<CommunityLink />
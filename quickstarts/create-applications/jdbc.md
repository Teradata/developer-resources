---
sidebar_position: 1
id: jdbc
author: Adam Tworkiewicz, Daniel Herrera
email: developer.relations@teradata.com
page_last_update: June 9th, 2026
description: How to connect to Teradata Database using JDBC.
keywords: [data warehouses, compute storage separation, teradata, teradata database, cloud data platform, JDBC, java applications, business intelligence, enterprise analytics]
---

import TrialDocsNote from '../_partials/teradata_trial.mdx'

# Connect to Teradata Database using JDBC

## Overview

This how-to demonstrates how to connect to Teradata Database using JDBC using a sample Java application.

## Prerequisites

* Access to a Teradata Database instance.

<TrialDocsNote />

* JDK 11+
* Maven

:::tip Installing Maven
If Maven is not installed on your system:
- **macOS:** `brew install maven`
- **Windows:** `winget install ApacheMaven` or `choco install maven`
- **Linux (Debian/Ubuntu):** `sudo apt install maven`
- **All platforms:** [Download from maven.apache.org](https://maven.apache.org/download.cgi)
:::

## Create a Maven project

Create a new Maven project using the standard quickstart archetype:

```bash
mvn archetype:generate \
  -DgroupId=com.teradata.app \
  -DartifactId=jdbc-sample-app \
  -DarchetypeArtifactId=maven-archetype-quickstart \
  -DarchetypeVersion=1.4 \
  -DinteractiveMode=false
cd jdbc-sample-app
```

## Add dependency to your maven project

Replace the contents of `pom.xml` with the following. This adds the Teradata JDBC driver and sets the compiler to Java 11:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
                             http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>com.teradata.app</groupId>
  <artifactId>jdbc-sample-app</artifactId>
  <version>1.0-SNAPSHOT</version>

  <properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <maven.compiler.release>11</maven.compiler.release>
  </properties>

  <dependencies>
    <dependency>
      <groupId>com.teradata.jdbc</groupId>
      <artifactId>terajdbc</artifactId>
      <version>20.00.00.06</version>
    </dependency>
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>4.13.2</version>
      <scope>test</scope>
    </dependency>
  </dependencies>
</project>
```

## Code to send a query

:::note
Replace `<host>`, `<user>`, and `<password>` with your Teradata environment credentials. If you are running Vantage Express, the default host is `localhost`, user is `dbc`, and password is `dbc`. You may need to expose port `1025` from your VM to the host machine — refer to your virtualization software documentation on how to forward ports.
:::

Replace `src/main/java/com/teradata/app/App.java` with the following:

```java
package com.teradata.app;

import java.sql.*;

public class App {
    static final String DB_URL = "jdbc:teradata://<host>";
    static final String USER = "<user>";
    static final String PASS = "<password>";
    static final String QUERY = "SELECT * FROM dbc.dbcinfo";

    public static void main(String[] args) {
        new App().query();
    }

    public void query() {
        try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(QUERY)) {

            while (rs.next()) {
                System.out.println(String.format("setting: %s, value: %s",
                    rs.getString(1), rs.getString(2)));
            }
        } catch (SQLException e) {
            throw new RuntimeException("Failed to connect or query Teradata", e);
        }
    }
}
```

## Add a test

Replace `src/test/java/com/teradata/app/AppTest.java` with the following:

:::note
The test connects to your live Teradata Database instance, so it requires the credentials you set in `App.java` to be valid and the instance to be reachable.
:::

```java
package com.teradata.app;

import org.junit.Test;

public class AppTest {
    @Test
    public void shouldConnectAndQueryTeradata() {
        new App().query();
    }
}
```

### Run the tests

```bash
mvn test
```

You should see output similar to:

```
setting: VERSION, value: 20.00.xx.xx
setting: LANGUAGE SUPPORT MODE, value: Standard
setting: RELEASE, value: 20.00.xx.xx
[INFO] Tests run: 1, Failures: 0, Errors: 0, Skipped: 0
[INFO] BUILD SUCCESS
```

## Summary

This how-to demonstrated how to connect to Teradata Database using JDBC. It described a sample Java application with Maven as the build tool that uses the Teradata JDBC driver to send SQL queries to Teradata Database.

## Further reading
* [Teradata JDBC Driver Reference](https://teradata-docs.s3.amazonaws.com/doc/connectivity/jdbc/reference/current/frameset.html)
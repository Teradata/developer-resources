---
sidebar_position: 1
id: jdbc
author: Adán Tworkiewicz
email: adam.tworkiewicz@teradata.com
page_last_update: November 14th, 2022
description: Cómo conectarse a Teradata Vantage mediante JDBC
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, JDBC, java applications, business intelligence, enterprise analytics]
---

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'
import CommunityLink from '../_partials/community_link.mdx'

# Conectarse a Vantage mediante JDBC

## Información general

Este tutorial demuestra cómo conectarse a Teradata Vantage mediante JDBC usando una aplicación Java de muestra: [JDBC de GitHub](https://github.com/Teradata/jdbc-sample-app).

## Prerrequisitos

* Acceso a una instancia de Teradata Vantage.

<ClearscapeDocsNote />

* JDK
* Maven

## Agregar dependencia a su proyecto maven

Agregue el controlador JDBC de Teradata como dependencia a su archivo Maven POM XML:


```xml
<dependency>
  <groupId>com.teradata.jdbc</groupId>
  <artifactId>terajdbc</artifactId>
  <version>20.00.00.06</version>
</dependency>
```
## Código para enviar una consulta

:::note
Este paso supone que su base de datos Vantage está disponible en `localhost` en el puerto `1025`. Si está ejecutando Vantage Express en su portátil, debe exponer el puerto de la máquina virtual a la máquina host. Consulte la documentación de su software de virtualización sobre cómo reenviar puertos.
:::

El proyecto está configurado. Todo lo que queda es cargar el controlador, pasar los parámetros de conexión y autenticación y ejecutar una consulta:

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

### Ejecutar las pruebas

Ejecutar las pruebas
```
mvn test
```

## Resumen

Este tutorial demuestra cómo conectarse a Teradata Vantage mediante JDBC. Describió una aplicación Java de muestra con Maven como herramienta de compilación que utiliza el controlador JDBC de Teradata para enviar consultas SQL a Teradata Vantage.

## Lectura adicional
* [Referencia del controlador JDBC de Teradata](https://teradata-docs.s3.amazonaws.com/doc/connectivity/jdbc/reference/current/frameset.html)

<CommunityLink />
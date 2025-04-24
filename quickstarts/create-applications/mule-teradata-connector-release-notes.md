---
sidebar_position: 8
author: Tan Nguyen
email: tan.nguyen@teradata.com
page_last_update: February 13th, 2023
description: Release Notes for Teradata Connector for MuleSoft's Anypoint Studio.
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics, mule, mulesoft, teradata connector, anypoint studio.]
---


# Teradata Connector Release Notes - Mule 4

Anypoint Connector for Teradata (Teradata Connector) establishes communication between your Mule app and a Teradata Vantage database, enabling you to connect with your Teradata Vantage instance to load data and run SQL queries in Teradata Vantage tables.

## 1.0.1
Date: April 22, 2025

### What’s New
- This connector is now compatible with Java 17.

### Features
The version is based and extended on MuleSoft's [Database Connector - Mule 4](https://docs.mulesoft.com/db-connector/1.14/). This version supports the list of features:

- Perform predefined queries, dynamically constructed queries, and template queries that are self-sufficient and customizable.
- Use a source listener operation to read from a database in the data source section of a flow.
- Execute other operations to read and write to a database anywhere in the process section.
- Run a single bulk update to perform multiple SQL requests.
- Make Data Definition Language (DDL) requests.
- Execute stored procedures and SQL scripts.
- Support pooling profile configuration for database connection
- Support auto reconnect to database

### Compatibility
| Software | Version         |
|----------|-----------------|
| Mule | 4.3.0 and later |
| Anypoint Studio | 7.3 and later   |
| OpenJDK | 8, 11, and 17   |

### Fixed Issues
- Commons-IO is upgraded to version 2.14.0 to address reported security vulnerabilities.
- ObjectStore Connector is upgraded to version 1.2.2 to be compatible with Java 17.



## 1.0.0
Date: February 8, 2023

### Features
The initial version is based and extended on MuleSoft's [Database Connector - Mule 4](https://docs.mulesoft.com/db-connector/1.14/). This version supports the list of features:

- Perform predefined queries, dynamically constructed queries, and template queries that are self-sufficient and customizable.
- Use a source listener operation to read from a database in the data source section of a flow.
- Execute other operations to read and write to a database anywhere in the process section.
- Run a single bulk update to perform multiple SQL requests.
- Make Data Definition Language (DDL) requests.
- Execute stored procedures and SQL scripts.
- Support pooling profile configuration for database connection
- Support auto reconnect to database

### Compatibility
| Software | Version    |
|----------|------------|
| Mule | 4.3.0 and later|
| Anypoint Studio | 7.3 and later|
| OpenJDK | 8 and 11|



## See Also

- [MuleSoft Help Center](https://help.mulesoft.com)
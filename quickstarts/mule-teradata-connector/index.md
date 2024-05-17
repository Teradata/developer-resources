---
author: Tan Nguyen
email: tan.nguyen@teradata.com
last_update: February 10th, 2023
description: Use Teradata Connector for MuleSoft's Anypoint Studio.
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics, mule, mulesoft, teradata connector, anypoint studio]
---

# Teradata Connector - Mule 4

Anypoint Connector for Teradata (Teradata Connector) establishes communication between your Mule app and a Teradata Vantage database, enabling you to connect with your Teradata Vantage instance to load data and run SQL queries in Teradata Vantage tables.

Reference: [Teradata Connector Reference](./reference.md)

Release Notes: [Teradata Connector Release Notes](./release-notes.md)

## Before You Begin

To use this connector, you must be familiar with:

* Teradata Vantage SQL
* Anypoint Connectors
* Mule runtime engine (Mule)
* Elements and global elements in a Mule flow
* Anypoint Studio (Studio)

Before creating an app, you must have:

* Anypoint Studio version 7.5 or later
* Credentials to access the Teradata Vantage target resource

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.md'

<ClearscapeDocsNote />

## Common Use Cases for the Connector

Teradata Connector enables you to:

* Perform predefined queries, dynamically constructed queries, and template queries that are self-sufficient and customizable.
* Use a source listener operation to read from a database in the data source section of a flow.
* Execute other operations to read and write to a database anywhere in the process section.
* Run a single bulk update to perform multiple SQL requests.
* Make Data Definition Language (DDL) requests.
* Execute stored procedures and SQL scripts.

The Teradata Connector supports:

* Connection pooling
* Auto reconnects after timeouts

## Examples

After you complete the prerequisites, you can try the examples and configure the connector using Anypoint Studio.

* [Query Teradata Vantage from a Mule service](https://quickstarts.teradata.com/mule.jdbc.example.html)
* [Using Anypoint Studio to Configure Teradata Connector](./examples-configuration.md)

## See Also
[MuleSoft Help Center](https://help.mulesoft.com)

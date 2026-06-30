---
sidebar_position: 7
author: Tan Nguyen, Vidhan Bhonsle
email: developer.relations@teradata.com
page_last_update: June 22nd, 2026
description:  Use Teradata Connector for MuleSoft's Anypoint Studio.
keywords: [data warehouses, compute storage separation, teradata, teradata database, teradata connector, object storage, business intelligence, enterprise analytics, mule, mulesoft, anypoint studio.]
---

import TrialDocsNote from '../_partials/teradata_trial.mdx'

# Teradata Connector - Mule 4

Anypoint Connector for Teradata (Teradata Connector) establishes communication between your Mule app and a Teradata database, enabling you to connect with your Teradata instance to load data and run SQL queries in Teradata tables.

Reference: [Teradata Connector Reference](./teradata-connector-mule4-reference.md) 


## Before You Begin

To use this connector, you must be familiar with:

- Teradata SQL
- Anypoint Connectors
- Mule runtime engine (Mule)
- Elements and global elements in a Mule flow
- Anypoint Studio (Studio)

Before creating an app, you must have:

- Anypoint Studio version 7.5 or later
- Credentials to access the Teradata target resource

<TrialDocsNote/>

## Common Use Cases for the Connector

Teradata Connector enables you to:

- Perform predefined queries, dynamically constructed queries, and template queries that are self-sufficient and customizable.
- Use a source listener operation to read from a database in the data source section of a flow.
- Execute other operations to read and write to a database anywhere in the process section.
- Run a single bulk update to perform multiple SQL requests.
- Make Data Definition Language (DDL) requests.
- Execute stored procedures and SQL scripts.

The Teradata Connector supports:

- Connection pooling
- Auto reconnects after timeouts

## Examples

After you complete the prerequisites, you can try the examples and configure the connector using Anypoint Studio.

- [Query Teradata from a Mule service](https://quickstarts.teradata.com/mule.jdbc.example.html)
- [Using Anypoint Studio to Configure Teradata Connector](./examples-configuration.md) 

## See Also
- [MuleSoft Help Center](https://help.mulesoft.com)

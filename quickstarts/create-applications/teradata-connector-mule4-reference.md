---
sidebar_position: 6
author: Tan Nguyen
email: tan.nguyen@teradata.com
page_last_update: February 10th, 2023
description: Technical Reference for Teradata Connector for MuleSoft's Anypoint Studio.
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics, mule, mulesoft, teradata connector, anypoint studio.]
---

# Teradata Connector Reference - Mule 4
 

Release Notes: [Teradata Connector Release Notes](./mule-teradata-connector-release-notes.md)

## Configurations
---
### Default Configuration

Use these parameters to configure the default configuration.

#### Parameters

| **Name**              | **Type**   | **Description** | **Default Value** | **Required** |
|-----------------------|------------|-----------------|-------------------|--------------|
| **Name**              | String | The name for this configuration. Connectors reference the configuration with this name. | | x |
| **Connection**        | <li>[Data Source Reference Connection](#data-source-reference-connection)</li> <li>[Teradata Connection](#teradata-connection)</li> | The connection types to provide to this configuration. | | x  
| **Expiration Policy** | [Expiration Policy](#redelivery-policy) |  Configures the minimum amount of time that a dynamic configuration instance can remain idle before Mule considers it eligible for expiration. This does not mean that the platform expires the instance at the exact moment that it becomes eligible. Mule purges the instances as appropriate. |  

#### Connection Types

##### Data Source Reference Connection

Configure the connection provider implementation that creates database connections from a referenced data source. 

When you use a _provider's custom type_ in a Data Source Reference Connection, define the type inside the **Column Types** form of the Advanced section in the Database config. 

###### Parameters
 
| **Name** | **Type** | **Description** | **Default Value** | **Required**
|-----------------------|------------|-----------------|-------------------|--------------|
| **Pooling Profile** | [Pooling Profile](#pooling-profile) |  Provides a way to configure database connection pooling |  |
| **Column Types** | Array of [Column Type](#column-type) |  Specifies non-standard column types |  |
| **Reconnection** | [Reconnection](#reconnection) |  When the application is deployed, a connectivity test is performed on all connectors. If set to `true`, deployment fails if the test doesn't pass after exhausting the associated reconnection strategy. |  |


 
##### Teradata Connection

###### Parameters
 
| **Name** | **Type** | **Description** | **Default Value** | **Required**
|-----------------------|------------|-----------------|-------------------|--------------|
| **Pooling Profile**|  [Pooling Profile](#pooling-profile) |  Provides a way to configure database connection pooling |  |
| **Column Types**| Array of [Column Type](#column-type) |  Specifies non-standard column types |  |
| **Transaction Isolation a**| Enumeration, one of:<br/><li>NONE</li><br/><li>READ_COMMITTED</li><br/><li>READ_UNCOMMITTED</li><br/><li>REPEATABLE_READ</li><br/><li>SERIALIZABLE</li><br/><li>NOT_CONFIGURED</li> |  The transaction isolation level to set on the driver when connecting the database |  `NOT_CONFIGURED` |
| **Use XA Transactions**| Boolean |  Indicates whether or not the created datasource must support XA transactions |  `false` |
| **URL** | String |  JDBC URL to use to connect to the database |  | x
| **User** | String |  Database username |  |
| **Password** | String |  Database password |  |
| **Reconnection** | [Reconnection](#reconnection) |  When the application is deployed, a connectivity test is performed on all connectors. If set to `true`, deployment fails if the test doesn't pass after exhausting the associated reconnection strategy. |  |
 

## Operations

:::note
To specify an SQL function in an SQL query in an operation, specify the SQL function in the `{fn function()}` format. For example, the SQL function `CURRENT_TIMESTAMP` is specified as `{fn CURRENT_TIMESTAMP()}`.
:::

- [Bulk Delete](#bulk-delete)
- [Bulk Insert](#bulk-insert) 
- [Bulk Update](#bulk-update) 
- [Delete](#delete) 
- [Execute DDL](#execute-ddl) 
- [Execute Script](#execute-script) 
- [Insert](#insert) 
- [Select](#select) 
- [Query Single](#query-single) 
- [Stored Procedure](#stored-procedure) 
- [Update](#update) 


## Associated Sources
- [On Table Row](#on-table-row)


### Bulk Delete
`<db:bulk-delete>`


This operation allows delete operations to execute at various times using different parameter bindings and a single database statement. This improves performance compared to executing a single delete operation at various times.


#### Parameters
 
| **Name** | **Type** | **Description** | **Default Value** | **Required** |
|------|------|-------------|---------------|----------|
| **Configuration** | String | The name of the configuration to use | | x
| **Input Parameters** | Array of Object |  Specifies a list of maps, which contain the parameter names as keys and the value the parameter is bound to, and in which every list item represents a row to insert. |  `#[payload]` |
| **Transactional Action**| Enumeration, one of: <br/>ALWAYS_JOIN <br/>JOIN_IF_POSSIBLE <br/>NOT_SUPPORTED |  The type of joining action that operations can take regarding transactions |  `JOIN_IF_POSSIBLE` |
| **Query Timeout** | Number |  Indicates the minimum amount of time before the JDBC driver attempts to cancel a running statement. By default, no timeout is used. |  `0` |
| **Query Timeout Unit** | Enumeration, one of: <br/>NANOSECONDS <br/> MICROSECONDS<br/> MILLISECONDS<br/> SECONDS<br/> MINUTES<br/> HOURS<br/> DAYS |  A time unit that qualifies the `#queryTimeout`. Values specified in nanoseconds, microseconds, or milliseconds are rounded to seconds. | `SECONDS` |
| Fetch Size a| Number |  Indicates how many rows to fetch from the database when rows are read from a ResultSet. This property is required when streaming is true, in which case a default value of `10` is used. |  |
| **Max Rows** | Number |  Sets the limit for the maximum number of rows that any ResultSet object generated by this message processor can contain for the given number. If the limit is exceeded, the excess rows are silently dropped. |  |
| **SQL Query Text** | String |  The text of the SQL query to execute |  | x
| **Parameter Types** | Array of [Parameter Type](#parameter-type) | This parameter allows you to optionally specify the type of one or more of the parameters in the query. If a value is provided, you're not required to reference all of the parameters; but you cannot reference a parameter that is not present in the input values. |  |
| **Target Variable** | String |  The name of a variable to store the operation's output |  |
| **Target Value** | String |  An expression to evaluate against the operation's output and store the expression outcome in the target variable |  `#[payload]` |
| **Reconnection Strategy** | [Reconnect](#reconnect)<br/> [Reconnect Forever](#reconnect-forever) |  A retry strategy in case of connectivity errors |  |


#### Output
| Type | Array of Number |
| ---- | ---- |
 


### For Configurations
* [Default Configuration](#default-configuration)

#### Throws

* DB:CONNECTIVITY
* DB:QUERY_EXECUTION
* DB:RETRY_EXHAUSTED
* DB:BAD_SQL_SYNTAX



### Bulk Insert
`<db:bulk-insert>`


This operation allows inserts to execute at various times using different parameter bindings and a single database statement. This improves performance compared to executing a single insert operation at various times.


#### Parameters
 
| **Name** | **Type** | **Description** | **Default Value** | **Required** |
|------|------|-------------|---------------|----------|
| **Configuration** | String | The name of the configuration to use | | x
| **Input Parameters** | Array of Object |  A list of maps in which every list item represents a row to be inserted, and the map contains the parameter names as keys and the value the parameter is bound to. |  `#[payload]` |
| **Transactional Action** | Enumeration, one of: <br/> ALWAYS_JOIN <br/> JOIN_IF_POSSIBLE <br/> NOT_SUPPORTED |  The type of joining action that operations can take regarding transactions. |  JOIN_IF_POSSIBLE |
| **Query Timeout**| Number |  Indicates the minimum amount of time before the JDBC driver attempts to cancel a running statement. No timeout is used by default. |  0 |
| **Query Timeout Unit** | Enumeration, one of: <br/> NANOSECONDS <br/> MICROSECONDS <br/> MILLISECONDS <br/> SECONDS <br/> MINUTES <br/> HOURS <br/> DAYS |  A TimeUnit that qualifies the `#queryTimeout`. Values specified in nanoseconds, microseconds, or milliseconds are rounded to seconds. |  `SECONDS` |
| **Fetch Size** | Number |  Indicates how many rows to fetch from the database when rows are read from a resultSet. This property is required when streaming is true; in that case a default value (10) is used. |  |
| **Max Rows** | Number |  Sets the limit for the maximum number of rows that any ResultSet object generated by this message processor can contain for the given number. If the limit is exceeded, the excess rows are silently dropped. |  |
| **SQL Query Text** | String |  The text of the SQL query to execute |  | x
| **Parameter Types** | Array of [Parameter Type](#parameter-type) |  Allows you to optionally specify the type of one or more of the parameters in the query. If provided, you're not required to reference all of the parameters, but you cannot reference a parameter not present in the input values |  |
| **Target Variable** | String |  The name of a variable to store the operation's output. |  |
| **Target Value** | String |  An expression to evaluate against the operation's output and store the expression outcome in the target variable |  `#[payload]` |
| **Reconnection Strategy** |  [Reconnect](#reconnect) <br/> [Reconnect Forever](#reconnect-forever) |  A retry strategy in case of connectivity errors. |  |
 

#### Output
 
|Type | Array of Number |
| ---- | ---- |
 

#### For Configurations
* [Default Configuration](#default-configuration)

#### Throws

* DB:CONNECTIVITY
* DB:QUERY_EXECUTION
* DB:RETRY_EXHAUSTED
* DB:BAD_SQL_SYNTAX


[[bulkUpdate]]
### Bulk Update
`<db:bulk-update>`


This operation allows updates to execute at various times using different parameter bindings and a single database statement. This improves performance compared to executing one single update operation at various times.


#### Parameters
 

| **Name** | **Type** | **Description** | **Default Value** | **Required** |
|------|------|-------------|---------------|----------|
| **Configuration** | String | The name of the configuration to use | | x
| **Input Parameters** | Array of Object |  Specifies a list of maps, which contain the parameter names as keys and the value the parameter is bound to, and in which every list item represents a row to insert. |  `#[payload]` |
| **Transactional Action** | Enumeration, one of: <br/> ALWAYS_JOIN <br/> JOIN_IF_POSSIBLE <br/> NOT_SUPPORTED |  The type of joining action that operations can take regarding transactions. |  JOIN_IF_POSSIBLE |
| **Query Timeout**  Number |  Indicates the minimum amount of time before the JDBC driver attempts to cancel a running statement. By default, no timeout is used. |  `0` |
| **Query Timeout Unit** | Enumeration, one of: <br/> NANOSECONDS <br/> MICROSECONDS <br/> MILLISECONDS <br/> SECONDS <br/> MINUTES <br/> HOURS <br/> DAYS |  A time unit that qualifies the `#queryTimeout`. Values specified in nanoseconds, microseconds, or milliseconds are rounded to seconds. | `SECONDS` |
| **Fetch Size** | Number |  Indicates how many rows to fetch from the database when rows are read from a ResultSet. | 10 |
| **Max Rows** | Number |  Sets the limit for the maximum number of rows that any ResultSet object generated by this message processor can contain for the given number. If the limit is exceeded, the excess rows are silently dropped. |  |
| **SQL Query Text** | String |  The text of the SQL query to execute |  | x
| **Parameter Types** | Array of [Parameter Type](#parameter-type) |  Allows you to optionally specify the type of one or more of the parameters in the query. If provided, you're not required to reference all of the parameters; but you cannot reference a parameter that is not present in the input values. |  |
| **Target Variable** | String |  The name of a variable to store the operation's output |  |
| **Target Value** | String |  An expression to evaluate against the operation's output and store the expression outcome in the target variable |  `#[payload]` |
| **Reconnection Strategy** | [Reconnect](#reconnect) <br/> [Reconnect Forever](#reconnect-forever) |  A retry strategy in case of connectivity errors |  |
 

#### Output
|Type | Array of Number |
|----------|----------|

### For Configurations
* [Default Configuration](#default-configuration)

#### Throws

* DB:CONNECTIVITY
* DB:QUERY_EXECUTION
* DB:RETRY_EXHAUSTED
* DB:BAD_SQL_SYNTAX



### Delete
`<db:delete>`


This operation deletes data in a database.


#### Parameters
| **Name** | **Type** | **Description** | **Default Value** | **Required** |
|------|------|-------------|---------------|----------|
| **Configuration** | String | The name of the configuration to use | | x |
| **Transactional Action** | Enumeration, one of: <br/> ALWAYS_JOIN <br/> JOIN_IF_POSSIBLE <br/> NOT_SUPPORTED |  The type of joining action that operations can take regarding transactions |  `JOIN_IF_POSSIBLE` |
| **Query Timeout** | Number |  Indicates the minimum amount of time before the JDBC driver attempts to cancel a running statement. By default, no timeout is used. |  `0` |
| **Query Timeout Unit** | Enumeration, one of: NANOSECONDS <br/>  MICROSECONDS <br/> MILLISECONDS <br/> SECONDS <br/> MINUTES <br/>  HOURS <br/>  DAYS |  A time unit that qualifies the `#queryTimeout`. Values specified in nanoseconds, microseconds, or milliseconds are rounded to seconds. | `SECONDS` |
| **Fetch Size** | Number |  Indicates how many rows to fetch from the database when rows are read from a ResultSet. | 10 |
| **Max Rows** | Number |  Sets the limit for the maximum number of rows that any ResultSet object generated by this message processor can contain for the given number. If the limit is exceeded, the excess rows are silently dropped. |  |
| **SQL Query Text** | String |  The text of the SQL query to execute |  | x
| **Parameter Types** | Array of [Parameter Type](#parameter-type) |  Allows you to optionally specify the type of one or more of the parameters in the query. If a value is provided, you're not required to reference all of the parameters; but you cannot reference a parameter that is not present in the input values. |  |
| **Input Parameters** | Object |  A map in which keys are the name of an input parameter to set on the JDBC prepared statement. Each parameter should be referenced in the SQL text using a colon prefix (for example, `where id = :myParamName`).  The map's values contain the actual assignation for each parameter. |  |
| **Target Variable** | String |  The name of a variable to store the operation's output |  |
| **Target Value** | String |  An expression to evaluate against the operation's output and store the expression outcome in the target variable |  `#[payload]` |
| **Reconnection Strategy**| [Reconnect](#reconnect) <br/> [Reconnect Forever](#reconnect-forever) |  A retry strategy in case of connectivity errors |  |
 

#### Output
 
|Type |Number|
|----|---|
 

### For Configurations
* [Default Configuration](#default-configuration)

#### Throws

* DB:CONNECTIVITY
* DB:QUERY_EXECUTION
* DB:RETRY_EXHAUSTED
* DB:BAD_SQL_SYNTAX


 
### Execute DDL
`<db:execute-ddl>`


This operation allows execution of DDL queries against a database.


#### Parameters

| **Name** | **Type** | **Description** | **Default Value** | **Required** |
|------|------|-------------|---------------|----------|
| **Configuration** | String | The name of the configuration to use | | x
| **SQL Query Text** | String |  The text of the SQL query to execute |  | x
| **Transactional Action** | Enumeration, one of: <br/>ALWAYS_JOIN<br/>JOIN_IF_POSSIBLE<br/>NOT_SUPPORTED |  The type of joining action that operations can take regarding transactions |  `JOIN_IF_POSSIBLE` |
| **Query Timeout** | Number |  Indicates the minimum amount of time before the JDBC driver attempts to cancel a running statement. By default, no timeout is used. | `0` |
| **Query Timeout Unit** | Enumeration, one of: <br/> NANOSECONDS <br/> MICROSECONDS <br/> MILLISECONDS <br/> SECONDS <br/> MINUTES <br/> HOURS DAYS |  A time unit that qualifies the `#queryTimeout`. Values specified in nanoseconds, microseconds, or milliseconds are rounded to seconds. | `SECONDS` |
| **Fetch Size** | Number |  Indicates how many rows to fetch from the database when rows are read from a ResultSet. | 10 |
| **Max Rows** | Number |  Sets the limit for the maximum number of rows that any ResultSet object generated by this message processor can contain for the given number. If the limit is exceeded, the excess rows are silently dropped. |  |
| **Target Variable** | String |  The name of a variable to store the operation's output |  |
| **Target Value** | String |  An expression to evaluate against the operation's output and store the expression outcome in the target variable |  `#[payload]` |
| **Reconnection Strategy** | [Reconnect](#reconnect) <br/> [Reconnect Forever](#reconnect-forever) |  A retry strategy in case of connectivity errors |  |
 

#### Output
 
|Type |Number|
|-----|-----|

#### For Configurations
* [Default Configuration](#default-configuration)

#### Throws

* DB:CONNECTIVITY
* DB:QUERY_EXECUTION
* DB:RETRY_EXHAUSTED
* DB:BAD_SQL_SYNTAX


[[executeScript]]
### Execute Script
`<db:execute-script>`


This operation executes an SQL script in a single database statement. The script is executed as provided by the user, without any parameter binding.


#### Parameters
| **Name** | **Type** | **Description** | **Default Value** | **Required** |
|------|------|-------------|---------------|----------|
| **Configuration** | String | The name of the configuration to use | | x
| **Transactional Action** | Enumeration, one of: <br/> ALWAYS_JOIN JOIN_IF_POSSIBLE NOT_SUPPORTED |  The type of joining action that operations can take for transactions. |  `JOIN_IF_POSSIBLE` |
| **SQL Query Text** | String |  The text of the SQL query to execute |  |
| **Script Path** | String |  Specifies the location of a file to load. The file can point to a resource on the classpath, or on a disk. |  |
| **Query Timeout** | Number |  Indicates the minimum amount of time before the JDBC driver attempts to cancel a running statement. By default, no timeout is used. |  `0` |
| **Query Timeout Unit** | Enumeration, one of: <br/> NANOSECONDS <br/> MICROSECONDS <br/> MILLISECONDS <br/> SECONDS <br/> MINUTES <br/> HOURS <br/> DAYS |  A time unit that qualifies the `#queryTimeout`. Values specified in nanoseconds, microseconds, or milliseconds are rounded to seconds. | `SECONDS` |
| **Fetch Size** | Number |  Indicates how many rows to fetch from the database when rows are read from a ResultSet. | 10 |
| **Max Rows** | Number |  Sets the limit for the maximum number of rows that any ResultSet object generated by this message processor can contain for the given number. If the limit is exceeded, the excess rows are silently dropped. |  |
| **Target Variable** | String |  The name of a variable to store the operation's output |  |
| **Target Value** | String |  An expression to evaluate against the operation's output and store the expression outcome in the target variable |  `#[payload]` |
| **Reconnection Strategy** | [Reconnect](#reconnect) <br/> [Reconnect Forever](#reconnect-forever) |  A retry strategy in case of connectivity errors |  |
 
#### Output

|Type |Array of Number|
|----|-----|
 

### For Configurations
* [Default Configuration](#default-configuration)

#### Throws

* DB:CONNECTIVITY
* DB:QUERY_EXECUTION
* DB:RETRY_EXHAUSTED
* DB:BAD_SQL_SYNTAX


 
### Insert
`<db:insert>`


This operation inserts data into a database.


#### Parameters
| **Name** | **Type** | **Description** | **Default Value** | **Required** |
|------|------|-------------|---------------|----------|
| **Configuration** | String | The name of the configuration to use | | x
| Transactional Action a| Enumeration, one of: <br/> ALWAYS_JOIN <br/> JOIN_IF_POSSIBLE <br/> NOT_SUPPORTED |  The type of joining action that operations can take regarding transactions |  `JOIN_IF_POSSIBLE` |
| **Query Timeout** | Number |  Indicates the minimum amount of time before the JDBC driver attempts to cancel a running statement. By default, no timeout is used. |  `0` |
| **Query Timeout Unit** | Enumeration, one of:<br/> NANOSECONDS <br/> MICROSECONDS <br/> MILLISECONDS <br/> SECONDS <br/> MINUTES <br/> HOURS <br/> DAYS |  A time unit that qualifies the `#queryTimeout`. Values specified in nanoseconds, microseconds, or milliseconds are rounded to seconds. |  `SECONDS` |
| **Fetch Size** | Number |  Indicates how many rows to fetch from the database when rows are read from a ResultSet. | 10 |
| **Max Rows** | Number |  Sets the limit for the maximum number of rows that any ResultSet object generated by this message processor can contain for the given number. If the limit is exceeded, the excess rows are silently dropped. |  |
| **SQL Query Text** | String |  The text of the SQL query to execute |  | x
| **Parameter Types** | Array of [Parameter Type](#parameter-type) |  Allows you to optionally specify the type of one or more of the parameters in the query. If provided, you're not required to reference all of the parameters; but you cannot reference a parameter that is not present in the input values. |  |
| **Input Parameters** | Object |  A map in which keys are the name of an input parameter to be set on the JDBC prepared statement. Each parameter should be referenced in the SQL text using a colon prefix (E.g: where id = :myParamName).  The map's values contain the actual assignation for each parameter. |  |
| **Auto Generate Keys** | Boolean |  Indicates when to make auto-generated keys available for retrieval. |  `false` |
| **Auto Generated Keys Column Indexes** | Array of Number |  List of column indexes that indicates which auto-generated keys to make available for retrieval |  |
| **Auto Generated Keys Column Names** | Array of String |  List of column names that indicates which auto-generated keys to make available for retrieval |  |
| **Target Variable** | String |  The name of a variable to store the operation's output |  |
| **Target Value** | String |  An expression to evaluate against the operation's output and store the expression outcome in the target variable |  `#[payload]` |
| **Reconnection Strategy** |  [Reconnect](#reconnect) <br/> [Reconnect Forever](#reconnect-forever) |  A retry strategy in case of connectivity errors |  |
 

#### Output
|Type |[Statement Result](#statement-result)|
|-----|------|

### For Configurations
* [Default Configuration](#default-configuration)

#### Throws

* DB:CONNECTIVITY
* DB:QUERY_EXECUTION
* DB:RETRY_EXHAUSTED
* DB:BAD_SQL_SYNTAX


### Select
`<db:select>`

This operation queries data from a database. To prevent loading all the results at once, which can lead to performance and memory issues, results are automatically streamed. This means that pages of _fetchSize_ rows are loaded when needed. If this operation is performed inside a transaction (that is, within a **Try** scope component) and that transaction is closed before consuming the data, accessing the results that haven't been loaded will fail.

#### Parameters

| **Name** | **Type** | **Description** | **Default Value** | **Required** |
|------|------|-------------|---------------|----------|
| **Configuration** | String | The name of the configuration to use | | x
| **Transactional Action** | Enumeration, one of: <br/> ALWAYS_JOIN <br/> JOIN_IF_POSSIBLE <br/> NOT_SUPPORTED |  The type of joining action that operations can take regarding transactions |  `JOIN_IF_POSSIBLE` |   | 
**Streaming Strategy** | [Repeatable In Memory Iterable](#repeatable-in-memory-iterable) <br/> [Repeatable File Store Iterable](#repeatable-file-store-iterable) <br/> non-repeatable-iterable |  Configure to use repeatable streams |  |
| **Query Timeout** a| Number |  Indicates the minimum amount of time before the JDBC driver attempts to cancel a running statement. By default, no timeout is used. |  `0` |
| **Query Timeout Unit** a| Enumeration, one of:<br/> NANOSECONDS<br/> MICROSECONDS<br/> MILLISECONDS<br/> SECONDS<br/> MINUTES<br/> HOURS<br/> DAYS |  A time unit that qualifies the `#queryTimeout`. Values specified in nanoseconds, microseconds, or milliseconds are rounded to seconds. |  `SECONDS` |
| **Fetch Size** a| Number |  Indicates how many rows to fetch from the database when rows are read from a ResultSet. | 10 |
| **Max Rows** a| Number |  Sets the limit for the maximum number of rows that any ResultSet object generated by this message processor can contain for the given number. If the limit is exceeded, the excess rows are silently dropped. |  |
| **SQL Query Text** a| String |  The text of the SQL query to execute |  | x
| **Parameter Types** a| Array of [Parameter Type](#parameter-type) |  Allows you to optionally specify the type of one or more of the parameters in the query. If provided, you're not required to reference all of the parameters; but you cannot reference a parameter that is not present in the input values. |  |
| **Input Parameters** a| Object |  A map in which keys are the name of an input parameter to be set on the JDBC prepared statement. Each parameter should be referenced in the SQL text using a colon prefix (for example: where id = :myParamName).  The map's values will contain the actual assignation for each parameter. |  |
| **Target Variable** | String |  The name of a variable to store the operation's output. |  |
| **Target Value** | String |  An expression to evaluate against the operation's output and store the expression outcome in the target variable |  `#[payload]` |
| **Reconnection Strategy** |  [Reconnect](#reconnect) <br/> [Reconnect Forever](#reconnect-forever) |  A retry strategy in case of connectivity errors. |  ||


|Type |Array of Object|
|----|------|

### For Configurations
* [Default Configuration](#default-configuration)

### Working with Pooling Profiles
When working with pooling profiles and the **Select** operation, the connection remains open until one of the following occurs:

* The flow execution ends
* The content of the streams are consumed completely
* The connection is the transaction key.

:::note
Because LOBs are treated as streams, the connection remains open until the flow execution ends, or until the content is consumed before the flow completes, in which case the best approach is taken to close the related connection.
:::

This behavior occurs because the result set the operation generates can have a stream or be part of an ongoing transaction.


#### Throws

* DB:BAD_SQL_SYNTAX
* DB:CONNECTIVITY
* DB:QUERY_EXECUTION

### Query Single
`<db:query-single>`


This operation selects a single data record from a database. If you provide an SQL query that returns more than one row, then only the first record is processed and returned. This operation does not use streaming, which means that immediately after performing the Query Single operation, the complete content of the selected record is loaded into memory.

#### Parameters
| **Name** | **Type** | **Description** | **Default Value** | **Required** |
|------|------|-------------|---------------|----------|
| **Configuration** | String | The name of the configuration to use | | x
| **Transactional Action** | Enumeration, one of:  <br/> ALWAYS_JOIN  <br/> JOIN_IF_POSSIBLE <br/> NOT_SUPPORTED |  The type of join action that operations can take regarding transactions |  `JOIN_IF_POSSIBLE` |
| **Streaming Strategy** | [Repeatable In Memory Iterable](#repeatable-in-memory-iterable) <br/> [Repeatable File Store Iterable](#repeatable-file-store-iterable)  <br/> non-repeatable-iterable |  Configure to use repeatable streams |  |
| Query Timeout a| Number |  Indicates the minimum amount of time before the JDBC driver attempts to cancel a running statement. By default, no timeout is used. |  `0` |
| Query Timeout Unit a| Enumeration, one of: <br/>NANOSECONDS MICROSECONDS <br/> MILLISECONDS <br/> SECONDS <br/> MINUTES <br/> HOURS <br/> DAYS |  A time unit that qualifies the `#queryTimeout`. Values specified in nanoseconds, microseconds, or milliseconds are rounded to seconds. |  `SECONDS` |
| **Fetch Size** | Number |  Indicates how many rows to fetch from the database when rows are read from a ResultSet. | 10 |
| **Max Rows** | Number |  The maximum number of rows that any ResultSet object generated by this message processor can contain. If the limit is exceeded, the excess rows are silently dropped. |  |
| **SQL Query Text** | String |  The text of the SQL query to execute |  | x
| **Parameter Types** | Array of [Parameter Type](#parameter-type) |  Enables you to optionally specify the type of one or more of the parameters in the query. If provided, you're not required to reference all of the parameters; but you cannot reference a parameter that is not present in the input values. |  |
| **Input Parameters** | Object |  A map in which keys are the name of an input parameter to be set on the JDBC prepared statement. Each parameter should be referenced in the SQL text using a colon prefix (for example: where id = :myParamName).  The map's values will contain the actual assignation for each parameter. |  |
| **Target Variable** | String |  Name of the variable in which to store the operation's output |  |
| **Target Value** | String |  Expression that evaluates the operation's output. The expression outcome is stored in the target variable. |  `#[payload]` |
| **Reconnection Strategy** | [Reconnect](#reconnect) <br/> [Reconnect Forever](#reconnect-forever) |  A retry strategy in case of connectivity errors. |  ||
#### Output
|Type | Object|
|----|-----|

### For Configurations
* [Default Configuration](#default-configuration)

### Working with Pooling Profiles
When working with pooling profiles and the Query Single operation, the connection returns to the pool immediately after the operation is performed.

#### Throws

* DB:BAD_SQL_SYNTAX
* DB:CONNECTIVITY
* DB:QUERY_EXECUTION


### Stored Procedure
`<db:stored-procedure>`


Invokes a stored procedure on the database.  When the stored procedure returns one or more ResultSet instances, results are not read all at once. Instead, results are automatically streamed to prevent performance and memory issues. This behavior means that pages of `_fetchSize_` rows are loaded lazily when needed. If the **Stored procedure** operation is performed inside a transaction (for example, in a **Try** scope component), and that transaction is closed before consuming the data, accessing the results that haven't been loaded will fail.


#### Parameters
| **Name** | **Type** | **Description** | **Default Value** | **Required** |
|------|------|-------------|---------------|----------|
| **Configuration** | String | The name of the configuration to use. | | x
| **Transactional Action** | Enumeration, one of: <br/> ALWAYS_JOIN<br/> JOIN_IF_POSSIBLE<br/> NOT_SUPPORTED |  The type of joining action that operations can take regarding transactions. |  JOIN_IF_POSSIBLE || 
**Streaming Strategy** | [Repeatable In Memory Iterable](#repeatable-in-memory-iterable)<br/> [Repeatable File Store Iterable](#repeatable-file-store-iterable)<br/> non-repeatable-iterable |  Configure to use repeatable streams  |  |
| Query Timeout a| Number |  Indicates the minimum amount of time before the JDBC driver attempts to cancel a running statement. No timeout is used by default. |  0 |
| **Query Timeout Unit** | Enumeration, one of:<br/> NANOSECONDS<br/> MICROSECONDS<br/> MILLISECONDS<br/> SECONDS<br/> MINUTES<br/> HOURS<br/> DAYS |  A time unit that qualifies the `#queryTimeout`. Values specified in nanoseconds, microseconds, or milliseconds are rounded to seconds. |  `SECONDS` |
| **Fetch Size** | Number |  Indicates how many rows to fetch from the database when rows are read from a resultSet. This property is required when streaming is true; in that case a default value (10) is used. |  |
| **Max Rows** | Number |  Sets the limit for the maximum number of rows that any ResultSet object generated by this message processor can contain for the given number. If the limit is exceeded, the excess rows are silently dropped. |  |
| **SQL Query Text** | String |  The text of the SQL query to execute |  | x
| **Parameter Types** | Array of [Parameter Type](#parameter-type) |  Allows to optionally specify the type of one or more of the parameters in the query. If provided, you're not even required to reference all of the parameters, but you cannot reference a parameter not present in the input values |  |
| **Input Parameters** | Object |  A map in which keys are the name of an input parameter to be set on the JDBC prepared statement. Each parameter should be referenced in the SQL text using a colon prefix (for example: where id = :myParamName).  The map's values will contain the actual assignation for each parameter. |  |
| **Input - Output Parameters** | Object |  A map in which keys are the name of a parameter to be set on the JDBC prepared statement which is both input and output.  Each parameter should be referenced in the SQL text using a colon prefix (for example: where id = :myParamName).  The map's values will contain the actual assignation for each parameter. |  |
| **Output Parameters** | Array of [Output Parameter](#output-parameter) |  A list of output parameters to be set on the JDBC prepared statement. Each parameter should be referenced in the SQL text using a colon prefix (for example: call multiply(:value, :result)) |  |
| **Auto Generate Keys** | Boolean |  Indicates when to make auto-generated keys available for retrieval. |  `false` |
| **Auto Generated Keys Column Indexes** | Array of Number |  List of column indexes that indicates which auto-generated keys to make available for retrieval. |  |
| **Auto Generated Keys Column Names** | Array of String |  List of column names that indicates which auto-generated keys should be made available for retrieval. |  |
| **Target Variable** | String |  The name of a variable to store the operation's output. |  |
| **Target Value** | String |  An expression to evaluate against the operation's output and store the expression outcome in the target variable |  `#[payload]` |
| **Reconnection Strategy** | [Reconnect](#reconnect)<br/> [Reconnect Forever](#reconnect-forever) |  A retry strategy in case of connectivity errors |  ||

#### Output
|Type |Object|
|----|----|

### For Configurations
* [Default Configuration](#default-configuration)

### Working with Pooling Profiles

When working with pooling profiles and the **Stored procedure** operation, the connection remains open until the flow execution ends or the content of the streams are consumed completely, or if the connection is the transaction key. This behavior occurs because the resultset the operation generates can have a stream or be part of an ongoing transaction.

Starting with Database Connector 1.8.3, the connections on the **Stored procedure** operation are released if they are not part of a stream or transaction.



#### Throws

* DB:BAD_SQL_SYNTAX
* DB:CONNECTIVITY
* DB:QUERY_EXECUTION
* DB:RETRY_EXHAUSTED


### Update
`<db:update>`


Updates data in a database.


#### Parameters
| **Name** | **Type** | **Description** | **Default Value** | **Required** |
|------|------|-------------|---------------|----------|
| **Configuration** | String | The name of the configuration to use | | x |
| **Transactional Action** | Enumeration, one of: <br/> ALWAYS_JOIN<br/> JOIN_IF_POSSIBLE<br/> NOT_SUPPORTED |  The type of joining action that operations can take for transactions |  `JOIN_IF_POSSIBLE` |
| **Query Timeout** | Number |  Indicates the minimum amount of time before the JDBC driver attempts to cancel a running statement. By default, no timeout is used. | `0` |
| **Query Timeout Unit** | Enumeration, one of:<br/> NANOSECONDS<br/> MICROSECONDS<br/> MILLISECONDS<br/> SECONDS<br/> MINUTES<br/> HOURS
** DAYS |  A time unit that qualifies the `#queryTimeout`. Values specified in nanoseconds, microseconds, or milliseconds are rounded to seconds. | `SECONDS` |
| **Fetch Size** | Number |  Indicates how many rows to fetch from the database when rows are read from a ResultSet. | 10 |
| **Max Rows** | Number |  Sets the limit for the maximum number of rows that any ResultSet object generated by this message processor can contain for the given number. If the limit is exceeded, the excess rows are silently dropped. |  |
| **SQL Query Text** | String |  The text of the SQL query to execute |  | x
| **Parameter Types** | Array of [Parameter Type](#parameter-type) |  Allows you to optionally specify the type of one or more of the parameters in the query. If provided, you're not required to reference all of the parameters; but you cannot reference a parameter that is not present in the input values. |  |
| **Input Parameters** | Object |  A map in which keys are the name of an input parameter to set on the JDBC prepared statement. Each parameter should be referenced in the SQL text using a colon prefix (for example: where id = :myParamName).  The map's values contain the actual assignation for each parameter. |  |
| **Auto Generate Keys** | Boolean |  Indicates when to make auto-generated keys available for retrieval |  `false` |
| **Auto Generated Keys Column Indexes** | Array of Number |  List of column indexes that indicates which auto-generated keys to make available for retrieval |  |
| **Auto Generated Keys Column Names** | Array of String |  List of column names that indicates which auto-generated keys should be made available for retrieval |  |
| **Target Variable** | String |  The name of a variable to store the operation's output |  |
| **Target Value** | String |  An expression to evaluate against the operation's output and store the expression outcome in the target variable |  `#[payload]` |
| **Reconnection Strategy** | [Reconnect](#reconnect) <br/> [Reconnect Forever](#reconnect-forever)|  A retry strategy in case of connectivity errors |  |
 

#### Output
|Type |[Statement Result](#statement-result)|
|----|-----|

### For Configurations
* [Default Configuration](#default-configuration)

#### Throws

* DB:BAD_SQL_SYNTAX
* DB:CONNECTIVITY
* DB:QUERY_EXECUTION
* DB:RETRY_EXHAUSTED


## Sources

### On Table Row
`<db:listener>`


This operation selects from a table at a regular interval and generates one message per obtained row.  Optionally, you can provide watermark and ID columns. If a watermark column is provided, the values taken from that column are used to filter the contents of the next poll, so that only rows with a greater watermark value are returned. If an ID column is provided, this component automatically verifies that the same row is not picked twice by concurrent polls.

This operation does not support streaming, meaning that there is no need to perform additional transformations to the payload in order to access the operation results. This behavior is identical to the **Query Single** operation released in version 1.9.

#### Parameters
 
| **Name** | **Type** | **Description** | **Default Value** | **Required** |
|------|------|-------------|---------------|----------|
| **Configuration** | String | The name of the configuration to use | | x
| **Table** | String |  The name of the table to select from |  | x
| **Watermark Column** | String |  The name of the column to use for a watermark. Values taken from this column are used to filter the contents of the next poll, so that only rows with a greater watermark value are processed. |  |
| **Id Column** | String |  The name of the column to consider as the row ID. If provided, this component makes sure that the same row is not processed twice by concurrent polls. |  |
| **Transactional Action** | Enumeration, one of:<br/>  ALWAYS_BEGIN<br/> NONE |  The type of beginning action that sources can take regarding transactions |  `NONE` |
| **Transaction Type** | Enumeration, one of:<br/> LOCAL<br/> XA |  The type of transaction to create. Availability depends on the runtime version. |  `LOCAL` |
| **Primary Node Only** | Boolean |  Whether this source should be executed only on the primary node when running in a cluster |  |
| **Scheduling Strategy** | scheduling-strategy |  Configures the scheduler that triggers the polling |  | x
| **Redelivery Policy** | [Redelivery Policy](#redelivery-policy) |  Defines a policy for processing the redelivery of the same message |  |
| **Query Timeout** | Number |  Indicates the minimum amount of time before the JDBC driver attempts to cancel a running statement. By default, no timeout is used. | `0` |
| **Query Timeout Unit** | Enumeration, one of:<br/> NANOSECONDS<br/> MICROSECONDS<br/> MILLISECONDS<br/> SECONDS<br/> MINUTES<br/> HOURS<br/> DAYS |  A time unit that qualifies the `#queryTimeout`. Values specified in nanoseconds, microseconds, or milliseconds are rounded to seconds. |  `SECONDS` |
| **Fetch Size** | Number |  Indicates how many rows to fetch from the database when rows are read from a ResultSet. | 10 |
| **Max Rows** | Number |  Sets the limit for the maximum number of rows that any ResultSet object generated by this message processor can contain for the given number. If the limit is exceeded, the excess rows are silently dropped. |  |
| **Reconnection Strategy** | [Reconnect](#reconnect)<br/> [Reconnect Forever](#reconnect-forever) |  A retry strategy in case of connectivity errors. |  | |

#### Output
|Type |Object|
|----|-----|


### For Configurations
* [Default Configuration](#default-configuration)



## Types
 
### Pooling Profile

| **Field** | **Type** | **Description** | **Default Value** | **Required**|
|------|------|-------------|---------------|----------|
| **Max Pool Size** | Number | Maximum number of connections a pool maintains at any given time | `5` |
| **Min Pool Size** | Number | Minimum number of connections a pool maintains at any given time | `0` |
| **Acquire Increment** | Number | Determines how many connections at a time to try to acquire when the pool is exhausted | `1` |
| **Prepared Statement Cache Size**  Number | Determines how many statements are cached per pooled connection. Setting this to zero disables statement caching. | `5` |
| **Max Wait** | Number | The amount of time a client trying to obtain a connection waits for it to be acquired when the pool is exhausted. Setting this value to zero (default) means wait indefinitely. This is equivalent to `checkoutTimeout` and cannot be overridden in additional-properties. | `0` |
| **Max Wait Unit** | Enumeration, one of:<br/> NANOSECONDS<br/> MICROSECONDS<br/> MILLISECONDS<br/> SECONDS<br/> MINUTES<br/> HOURS<br/> DAYS | A #maxWait. | SECONDS |
| **Max Idle Time** | Number | Determines how many seconds a connection can remain pooled but unused before being discarded. Setting this value to zero (default) means idle connections never expire. | `0` |
| **Additional Properties** | Object |  A map in which keys are the name of a pooling profile configuration property. Does not support the use of expressions. These properties cannot be used to override any of the previously specified properties (like Max Pool Size or Min Pool Size), the main property prevails if an attempt is made to override it.  The map's values contain the actual assignation for each parameter. |  |
| **Max Statement** | Number | Defines the total number PreparedStatements a DataSource will cache. The pool destroys the least-recently-used PreparedStatement when it reaches the specified limit. When set to `0`, statement caching is turned off |  |
| **Test connection on checkout** | Boolean | Disables connection testing on checkout to improve performance. If set to `true`, an operation is performed at every connection checkout to verify that the connection is valid. A better choice is to verify connections periodically using `c3p0.idleConnectionTestPeriod`. To improve performance, set this property to `false`. | `true` ||

 
### Column Type


| **Field** | **Type** | **Description** | **Default Value** | **Required**|
|------|------|-------------|---------------|----------|
| **Id** | Number | Type identifier used by the JDBC driver |  | x
| **Type Name** | String | Name of the data type used by the JDBC driver |  | x
| **Class Name** | String | Indicates which Java class must be used to map the database type |  ||

### Reconnection


| **Field** | **Type** | **Description** | **Default Value** | **Required**|
|------|------|-------------|---------------|----------|
| **Fails Deployment** | Boolean | When the application is deployed, a connectivity test is performed on all connectors. If set to `true`, deployment fails if the test doesn't pass after exhausting the associated reconnection strategy. |  |
| **Reconnection Strategy** |  [Reconnect](#reconnect) <br/> [Reconnect Forever](#reconnect-forever) | The reconnection strategy to use |  ||


### Reconnect


| **Field** | **Type** | **Description** | **Default Value** | **Required**|
|------|------|-------------|---------------|----------|
| **Frequency** | Number | How often to reconnect (in milliseconds) | |
| **Count** | Number | The number of reconnection attempts to make | |
| **blocking** |Boolean | If set to `false`, the reconnection strategy runs in a separate, non-blocking thread | `true` ||

### Reconnect Forever


| **Field** | **Type** | **Description** | **Default Value** | **Required**|
|------|------|-------------|---------------|----------|
| **Frequency** | Number | How often in milliseconds to reconnect | |
| **blocking** |Boolean | If set to `false`, the reconnection strategy runs in a separate, non-blocking thread | `true` ||

### Tls

| **Field** | **Type** | **Description** | **Default Value** | **Required**|
|------|------|-------------|---------------|----------|
| **Enabled Protocols** | String | A comma-separated list of protocols enabled for this context. |  |
| **Enabled Cipher Suites** | String | A comma-separated list of cipher suites enabled for this context. |  |
| **Trust Store** | [Trust Store](#trust-store) |  |  |
| **Key Store** | [Key Store](#key-store)  |  |  |
| **Revocation Check** | [Standard Revocation Check](#standard-revocation-check) <br/> [Custom Ocsp Responder](#custom-ocsp-responder)<br/> [Crl File](#crl-file) |  |  | |

 
### Trust Store

 
| **Field** | **Type** | **Description** | **Default Value** | **Required** |
|------|------|-------------|---------------|----------|
| **Path** | String | The location (which will be resolved relative to the current classpath and file system, if possible) of the trust store. |  |
| **Password** | String | The password used to protect the trust store. |  |
| **Type** | String | The type of store used. |  |
| **Algorithm** | String | The algorithm used by the trust store. |  |
| **Insecure** | Boolean | If true, no certificate validations will be performed, rendering connections vulnerable to attacks. Use at your own risk. |  || 

 
### Key Store
 
| **Field** | **Type** | **Description** | **Default Value** | **Required**|
|------|------|-------------|---------------|----------|
| **Path** | String | The location (which will be resolved relative to the current classpath and file system, if possible) of the key store. |  |
| **Type** | String | The type of store used. |  |
| **Alias** | String | When the key store contains many private keys, this attribute indicates the alias of the key that should be used. If not defined, the first key in the file will be used by default. |  |
| **Key Password** | String | The password used to protect the private key. |  |
| **Password** | String | The password used to protect the key store. |  |
| **Algorithm** | String | The algorithm used by the key store. |  | |

 
### Standard Revocation Check


| **Field** | **Type** | **Description** | **Default Value** | **Required**|
|------|------|-------------|---------------|----------|
| **Only End Entities** | Boolean | Only verify the last element of the certificate chain. |  |
| **Prefer Crls** | Boolean | Try CRL instead of OCSP first. |  |
| **No Fallback** | Boolean | Do not use the secondary checking method (the one not selected before). |  |
| **Soft Fail** | Boolean | Avoid verification failure when the revocation server can not be reached or is busy. |  ||

 
### Custom Ocsp Responder


| **Field** | **Type** | **Description** | **Default Value** | **Required**|
|------|------|-------------|---------------|----------|
| **Url** | String | The URL of the OCSP responder. |  |
| **Cert Alias** | String | Alias of the signing certificate for the OCSP response (must be in the trust store), if present. |  ||

 
### Crl File

| **Field** | **Type** | **Description** | **Default Value** | **Required**|
|------|------|-------------|---------------|----------|
| **Path** | String | The path to the CRL file. |  ||


### Expiration Policy


| **Field** | **Type** | **Description** | **Default Value** | **Required**|
|------|------|-------------|---------------|----------|
| **Max Idle Time** | Number | A scalar time value for the maximum amount of time a dynamic configuration instance should be allowed to be idle before it's considered eligible for expiration |  |
| **Time Unit** | Enumeration, one of:<br/> NANOSECONDS<br/> MICROSECONDS<br/> MILLISECONDS<br/> SECONDS<br/> MINUTES<br/> HOURS<br/> DAYS | A time unit that qualifies the `maxIdleTime` attribute |  | |

 
### Redelivery Policy


| **Field** | **Type** | **Description** | **Default Value** | **Required**|
|------|------|-------------|---------------|----------|
| **Max Redelivery Count** | Number | The maximum number of times a message can be redelivered and processed unsuccessfully before triggering a process-failed-message |  |
| **Use Secure Hash** | Boolean | Whether to use a secure hash algorithm to identify a redelivered message. |  |
| **Message Digest Algorithm** | String | The secure hashing algorithm to use. If this is not set, the default is SHA-256. | `SHA-256` |
| **Id Expression** | String | Defines one or more expressions to use to determine when a message has been redelivered. This property can be set only if **Use secure hash** is set to `false`. |  |
| **Object Store** | Object Store | The object store where the redelivery counter for each message is stored |  | |

 
### Parameter Type


| **Field** | **Type** | **Description** | **Default Value** | **Required**|
|------|------|-------------|---------------|----------|
| **Key** | String | The name of the input parameter |  | x
| **Type Classifier** | [Type Classifier](#type-classifier) |  |  | x |

### Type Classifier

| **Field** | **Type** | **Description** | **Default Value** | **Required**|
|------|------|-------------|---------------|----------|
| **Type** | Enumeration, one of:   <br/> BIT <br/> TINYINT<br/> SMALLINT<br/> INTEGER<br/> BIGINT<br/> FLOAT<br/> REAL<br/> DOUBLE <br/> NUMERIC<br/> DECIMAL<br/> CHAR<br/> VARCHAR<br/> LONGVARCHAR<br/> DATE<br/> TIME<br/> TIMESTAMP<br/> BINARY<br/> VARBINARY<br/> LONGVARBINARY<br/> NULL<br/> OTHER<br/> JAVA_OBJECT<br/> DISTINCT<br/> STRUCT<br/> ARRAY<br/> BLOB<br/> CLOB<br/> REF<br/> DATALINK<br/> BOOLEAN<br/> ROWID<br/>* NCHAR<br/> NVARCHAR<br/> LONGNVARCHAR<br/> NCLOB<br/> SQLXML<br/> UNKNOWN |  |  |
| **Custom Type** | String |  |  ||

### Statement Result

| **Field** | **Type** | **Description** | **Default Value** | **Required** |
|------|------|-------------|---------------|----------|
| **Affected Rows** | Number |  |  |
| **Generated Keys** | Object |  |  ||

 
### Repeatable In Memory Iterable

 
| **Field** | **Type** | **Description** | **Default Value** | **Required** |
|------|------|-------------|---------------|----------|
| **Initial Buffer Size** | Number | The number of instances that are initially allowed to be kept in memory to consume the stream and provide random access to it. If the stream contains more data than can fit into this buffer, then the buffer expands according to the **Buffer size increment** attribute, with an upper limit of **Max in memory size**. The default value is 100 instances. | `100`  |
| **Buffer Size Increment** | Number | Specifies by how much the buffer size expands if it exceeds its initial size. Setting a value of zero or lower means that the buffer should not expand, in which case a `STREAM_MAXIMUM_SIZE_EXCEEDED` error is raised when the buffer gets full. The default value is 100 instances. | `100`  |
| **Max Buffer Size** | Number | The maximum amount of memory to use. If more than the specified maximum amount of memory is used, then a `STREAM_MAXIMUM_SIZE_EXCEEDE`D error is raised. A value lower than, or equal to, zero means no limit. |  |
|

### Repeatable File Store Iterable

| **Field** | **Type** | **Description** | **Default Value** | **Required** |
|------|------|-------------|---------------|----------|
| **In Memory Objects** | Number | The maximum number of instances to keep in memory. If more than the specified maximum is required, then content starts to buffer on disk. |  |
| **Buffer Unit** | Enumeration, one of:<br/> BYTE<br/> KB<br/> MB<br/> GB | The unit in which maxInMemorySize is expressed |  | |

### Repeatable In Memory Stream
| **Field** | **Type** | **Description** | **Default Value** | **Required** |
|------|------|-------------|---------------|----------|
| **Initial Buffer Size** | Number | The number of instances that are initially allowed to be kept in memory to consume the stream and provide random access to it. If the stream contains more data than can fit into this buffer, then the buffer expands according to the **Buffer size increment** attribute, with an upper limit of **Max in memory size** |  |
| **Buffer Size Increment** | Number | Specifies by how much the buffer size expands if it exceeds its initial size. Setting a value of zero or lower means that the buffer should not expand, in which case a `STREAM_MAXIMUM_SIZE_EXCEEDED` error is raised when the buffer gets full |  |
| **Max Buffer Size** | Number | The maximum amount of memory to use. If more than the specified maximum amount of memory is used, then a `STREAM_MAXIMUM_SIZE_EXCEEDED` error is raised. A value lower than, or equal to, zero means no limit. |  |
| **Buffer Unit** | Enumeration, one of: <br/> BYTE<br/> KB<br/> MB<br/> GB | The unit in which all these attributes are expressed |  ||
### Repeatable File Store Stream

| **Field** | **Type** | **Description** | **Default Value** | **Required** |
|------|------|-------------|---------------|----------|
| **In Memory Size** | Number | Defines the maximum memory that the stream should use to keep data in memory. If more than that is consumed content on the disk is buffered. |  |
| **Buffer Unit** | Enumeration, one of: <br/> BYTE<br/> KB<br/> MB<br/> GB | The unit in which **Max in memory size** is expressed |  | |

### Output Parameter

| **Field** | **Type** | **Description** | **Default Value** | **Required** |
|-------|-------|-------|-------|-------|
| **Key** | String | The name of the input parameter |  | x |
| **Type Classifier** | [Type Classifier](#type-classifier) |  |  | x |


## See Also

- [MuleSoft Help Center](https://help.mulesoft.com)
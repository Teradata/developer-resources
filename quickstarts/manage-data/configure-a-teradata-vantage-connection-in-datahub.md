---
sidebar_position: 18
author: Paul Ibberson
email: paul.ibberson2@teradata.com, developer.relations@teradata.com
page_last_update: July 07 2026
description: Configure a Teradata connection in DataHub.
keywords: [data warehouses, compute storage separation, teradata, cloud data platform, object storage, business intelligence, enterprise analytics, datahub, data catalog, data lineage]
---

# Configure a Teradata connection in DataHub

## Overview

This how-to demonstrates how to create a connection to Teradata with DataHub, and ingest metadata about tables and views, along with usage and lineage information.

## Prerequisites

import TrialDocsNote from '../_partials/teradata_trial.mdx'

* Access to a Teradata instance.
  <TrialDocsNote />
* DataHub installed. See [DataHub Quickstart Guide](https://datahubproject.io/docs/quickstart)

## Setup DataHub

* Install the Teradata plugin for DataHub in the environment where you have DataHub installed

``` bash
pip install 'acryl-datahub[teradata]'
```

* Setup a Teradata user and set privileges to allow that user to read the dictionary tables

``` sql
CREATE USER datahub FROM <database> AS PASSWORD = <password> PERM = 20000000;

GRANT SELECT ON DBC.DatabasesV TO datahub;
GRANT SELECT ON DBC.TablesV TO datahub;
GRANT SELECT ON DBC.ColumnsV TO datahub;
GRANT SELECT ON DBC.IndicesV TO datahub;
GRANT SELECT ON dbc.TableTextV TO datahub;
GRANT SELECT ON DBC.All_RI_ChildrenV TO datahub;
   
-- if lineage or usage extraction is enabled
GRANT SELECT ON dbc.dbqlogtbl TO datahub; 
GRANT SELECT ON dbc.QryLogV TO datahub;
GRANT SELECT ON dbc.QryLogSqlV TO datahub;
```

* If you want to run profiling, you need to grant select permission on all the tables you want to profile.

* If you want to extract lineage or usage metadata, query logging must be enabled and it is set to size which will fit for your queries (the default query text size Teradata captures is max 200 chars) An example how you can set it for all users:

``` sql
-- set up query logging on all
REPLACE QUERY LOGGING WITH SQL LIMIT SQLTEXT=2000 ON ALL;
```
Learn more about query logging in this document:
[https://docs.teradata.com/r/Teradata-VantageCloud-Lake/Database-Reference/Database-Administration/Tracking-Query-Behavior-with-Database-Query-Logging-Operational-DBAs](https://docs.teradata.com/r/Teradata-VantageCloud-Lake/Database-Reference/Database-Administration/Tracking-Query-Behavior-with-Database-Query-Logging-Operational-DBAs)



## Add a Teradata connection to DataHub
With DataHub running, open the DataHub GUI and login.  In this example this is running at localhost:9002 

* Start the new connection wizard by clicking on the ingestion plug icon and then selecting "Create new source" 
  
![Create New Source](../other-integrations/images/configure-a-teradata-connection-in-datahub/create-new-source.png)

* Scroll the list of available sources and select Custom Source.  This will allow you to paste in a recipe to configure the connection to Teradata. 
![Select Source](../other-integrations/images/configure-a-teradata-connection-in-datahub/select-other-source.png)

* A recipe is needed to configure the connection to Teradata and define the options required such as whether to capture table and column lineage, profile the data or retrieve usage statistics.  Below is a simple recipe to get you started. The host, username and password should be changed to match your environment.

``` yaml
pipeline_name: my-teradata-ingestion-pipeline
source:
  type: teradata
  config:
    host_port: "myteradatainstance.teradata.com:1025"
    username: myuser
    password: mypassword
    #database_pattern:
    #  allow:
    #    - "my_database"
    #  ignoreCase: true
    include_table_lineage: true
    include_usage_statistics: false
    stateful_ingestion:
      enabled: true
```

Pasting the recipe into the window should look like this: 
![New Ingestion Source](../other-integrations/images/configure-a-teradata-connection-in-datahub/new-ingestion-source.png)

* Click Next and then setup the required schedule. 
![Set Schedule](../other-integrations/images/configure-a-teradata-connection-in-datahub/set-schedule.png)

* Click Next to Finish Up and give the connection a name. Click Advanced so that the correct CLI version can be set. Set this CLI value to same as the DataHub version which you can find by typing datahub version in the command line.  In this example the DataHub version is 1.6.0 and so the CLI value is set to 1.6.0.
* Click Save & Run to save the new source and run it immediately.  You can also click Save to save the source and run it later.
  

![Finish up](../other-integrations/images/configure-a-teradata-connection-in-datahub/finish-up.png)


Clicking on "Success" after a sucessful execution will bring up a dialogue similar to this one where you can see the Databases, Tables and Views that have been ingested into DataHub.  
![Ingestion Result](../other-integrations/images/configure-a-teradata-connection-in-datahub/ingestion-result.png)

* The metadata can now be explored in the GUI by browsing:
  * DataSets provides a list of the datasets (tables and views) loaded
![datasets](../other-integrations/images/configure-a-teradata-connection-in-datahub/datasets.png)
  * Entities captured from the database
![Entities](../other-integrations/images/configure-a-teradata-connection-in-datahub/entities-list.png)
  * Schema of an entity showing column/field names, data types and usage if it has been captured
![Schema display](../other-integrations/images/configure-a-teradata-connection-in-datahub/schema.png)
  * Lineage providing a visual representation of how data is linked between tables and views
![Lineage picture](../other-integrations/images/configure-a-teradata-connection-in-datahub/lineage-example.png)

## Summary

This how-to demonstrated how to create a connection to Teradata with DataHub in order to capture metadata of tables, views along with lineage and usage statistics.

## Further reading
* [Integrate DataHub with Teradata](https://datahubproject.io/docs/generated/ingestion/sources/teradata)
* [DataHub Integration Options for Recipes](https://datahubproject.io/docs/metadata-ingestion/#recipes)
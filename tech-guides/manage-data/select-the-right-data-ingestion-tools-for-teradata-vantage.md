---
id: select-the-right-data-ingestion-tools-for-teradata
sidebar_position: 2
author: Krutik Pathak, Vidhan Bhonsle
email: developer.relations@teradata.com
ft:lastEdition: "2026-06-23"
description: Recommendation of data ingestion tools to be used in different use cases for Teradata
keywords: [data ingestion, teradata, nos, tpt, bteq, teradata fabric, airbyte, object store, saas, teradata database, apache, spark, presto, oracle, Flow]
---

# Select the right data ingestion solution for Teradata
## Overview

This article outlines different use cases involving data ingestion. It lists available solutions and recommends the optimal solution for each use case.

### High-volume ingestion, including streaming
Available solutions:

* Use [Teradata Parallel Transporter API](https://docs.teradata.com/r/Enterprise_IntelliFlex_Lake_VMware/Teradata-Parallel-Transporter-Application-Programming-Interface-Programmer-Guide-20.00)
* Stream data to object storage and then ingest using [Teradata Native Object Store (NOS)](https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Native-Object-Store-Getting-Started-Guide).
* Use the [Teradata Parallel Transporter (TPT)](https://docs.teradata.com/r/Enterprise_IntelliFlex_Lake_VMware/Teradata-Parallel-Transporter-User-Guide-20.00) command line utility.
* Use [Teradata Query Service](https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Teradata-Query-Service-Installation-Configuration-and-Usage-Guide-for-Customers-4.01.03.01-4.01.07.00) - REST API to execute SQL statements in the database.
* Use Teradata database drivers such as JDBC (Java), teradatasql (Python), Node.js driver, ODBC, .NET Data Provider.


Teradata Parallel Transport API is usually the most performant solution which offers high throughput and minimum latency. Use it if you need to ingest tens of thousands of rows per second and if you are comfortable using C language. 

Use the Teradata database drivers when the number of events is in thousands per second. Consider using the Fastload protocol that is available in the most popular drivers e.g. JDBC, Python.

If you don't want to manage the dependency on the driver libraries, use Query Service. Since Query Service uses the regular driver protocol to communicate to the database, the throughput of this solution is similar to the throughput offered by database drivers such as JDBC. If you are a vendor and are looking to integrate your product with Teradata, please be aware that not all Teradata customers have Query Service enabled in their sites.

If your solution can accept higher latency, a good option is to stream events to object storage and then read the data using NOS. This solution usually requires the least amount of effort.

### Ingest data from object storage

Available solutions:

* [Teradata Native Object Store (NOS)](https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Native-Object-Store-Getting-Started-Guide)
* [Teradata Parallel Transporter (TPT)](https://docs.teradata.com/r/Enterprise_IntelliFlex_Lake_VMware/Teradata-Parallel-Transporter-User-Guide-20.00)

Teradata NOS is the recommended option for ingesting data from object storage. NOS can leverage all Teradata nodes to perform parallel ingestion, making it suitable for scalable data movement from cloud object stores. Teradata Parallel Transporter (TPT) runs on the client side and can be used when NOS cannot connect to object storage.

### Ingest data from local files
Available solutions:

* [Teradata Parallel Transporter (TPT)](https://docs.teradata.com/r/Enterprise_IntelliFlex_Lake_VMware/Teradata-Parallel-Transporter-User-Guide-20.00)
* [BTEQ](https://docs.teradata.com/r/Enterprise_IntelliFlex_Lake_VMware/Basic-Teradata-Query-Reference-20.00)

TPT is the recommended option to load data from local files. TPT is optimized for scalability and parallelism, thus it has the best throughput of all available options. BTEQ can be used when an ingestion process requires scripting. It also makes sense to continue using BTEQ if all your other ingestion pipelines run in BTEQ.

### Ingest data from SaaS applications
Available solutions:

* Multiple 3rd party tools such as [Airbyte](https://airbyte.com/), [Precog](https://precog.com/), [Nexla](https://nexla.com/), [Fivetran](https://fivetran.com/)
* Export from SaaS apps to local files and then ingest using [Teradata Parallel Transporter (TPT)](https://docs.teradata.com/r/Enterprise_IntelliFlex_Lake_VMware/Teradata-Parallel-Transporter-User-Guide-20.00)
* Export from SaaS apps to object storage and then ingest using [Teradata Native Object Store (NOS)](https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Native-Object-Store-Getting-Started-Guide).

3rd party tools are usually a better option to move data from SaaS applications to Teradata. They offer broad support for data sources and eliminate the need to manage intermediate steps such as exporting and storing exported datasets.

### Use data stored in other databases for unified query processing
Available solutions:

* [Teradata Fabric](https://docs.teradata.com/r/Enterprise_IntelliFlex_Lake_VMware/QueryGrid-Installation-and-User-Guide-3.10)
* Export from other databases to local files and then ingest using [Teradata Parallel Transporter (TPT)](https://docs.teradata.com/r/Enterprise_IntelliFlex_Lake_VMware/Teradata-Parallel-Transporter-User-Guide-20.00)
* Export from other databases to object storage and then ingest using [Teradata Native Object Store (NOS)](https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Native-Object-Store-Getting-Started-Guide).

Teradata Fabric is the recommended option to move limited quantities of data between different systems/platforms. This includes movement within Teradata instances, Apache Spark, Oracle, Presto, etc. It is especially suited to situations when what needs to be synced is described by complex conditions that can be expressed in SQL. 

## Summary
In this article, we explored various data ingestion use cases, provided a list of available tools for each use case, and identified the recommended options for different scenarios.

## Further Reading

* [Query data stored in object storage using NOS](nos.md)

* [Run large bulkloads efficiently with Teradata Parallel Transporter](./run-bulkloads-efficiently-with-teradata-parallel-transporter.md)

* [Teradata Fabric](https://docs.teradata.com/r/Enterprise_IntelliFlex_Lake_VMware/QueryGrid-Installation-and-User-Guide-3.10)

* [Use Airbyte to load data from external sources to Teradata](./use-airbyte-to-load-data-from-external-sources-to-teradata.md)
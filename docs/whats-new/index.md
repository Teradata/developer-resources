---
id: whats-new
title: What's new
description: Find out what's new in the latest AI Unlimited release.
sidebar_label: What's new
sidebar_position: 1
pagination_prev: null
pagination_next: null
---

# What's new

See what's in this release and what's coming.


## Paid public preview (launch) - May 2024

Includes everything you need to start exploring, analyzing, and experimenting:

- AI/ML engine v0.14.3 with [ClearScape Analytics™](https://docs.teradata.com/access/sources/dita/topic?dita:mapPath=phg1621910019905.ditamap&dita:ditavalPath=pny1626732985837.ditaval&dita:topicPath=gma1702668333653.dita) functions
- Support for AWS and Azure
- [AI Unlimited Jupyter Kernel](https://downloads.teradata.com/download/tools/teradata-ai-unlimited-jupyter-kernel)
    - Python Client Libraries
      - teradataml 20.0.0.0
      - teradatamlwidgets 20.0.0.2
	  - teradatasql 20.0.0.12
	  - teradatasqlalchemy 20.0.0.2
	  - tdapiclient 1.4.0.1
- [AI Unlimited GitHub repository](https://github.com/Teradata/ai-unlimited), with template, parameter, and policy files for installing AI Unlimited
- AI Unlimited [community](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa) for getting support from Teradata and sharing ideas
- Support for these Teradata Vantage™ **(1. Ok to say Vantage? It's the first/only mention on the doc site. But it might come up in the use case descriptions, on this site, which are TBD.)** features:
  - Native Object Store (NOS) 20.00.17.08
  - Open Table Format (OTF) 20.00.17.07
    - Iceberg with AWS Glue, Hive, and Databricks Unity Catalog
    - Delta Lake with Databricks Unity Catalog
  - Bring Your Own Model 05.00.00.01
    - PMMLPredict
	- H20Predict
  - **(2. Long list of teradataml functions. Could do an expandable section. Is it necessary to list them? Aren't they covered by link to ClearScape functions doc?)**

:::Note
See the [release notes](/docs/release-notes.md) for known issue and features not currently supported.
:::


## What's coming

**(3. OK to include anticipated month?)**

- **Open Table Format**
  - Update and Delete with predicates for Open Table Format (OTF) queries - June

- **User Defined Functions (UDF)**
  - Fix for first invocation of Java UDFs failing
  - API_Request UDF
  
- **Unbounded Array Framework (UAF)**
  - SQL supporting UAF - June 
  - Teradataml supporting UAF

- **teradataml**
  - Fix for UAF functions failing if database name has special characters - June
  - Fix for SQLE and UAF functions failing to run due to issues with volatile table creation - June
  - automl and openml functions - June
  - map_row and map_partition functions
  
- **Vantage Analytics Library (VAL)**

**(4. Exclude these? They are in my head, not on wiki.)**
- ("New manager user interface for improved usability"?)
- ("Project monitoring in the manager"?)
- ("Support for Google Cloud Platform (GCP)"?)


**5. Deal with relationship between What's Coming (here) and Not Supported (in RNs.) Verify we need both.**





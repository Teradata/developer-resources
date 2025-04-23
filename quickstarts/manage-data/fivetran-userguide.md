---
sidebar_position: 4
id: fivetran
author: Satish Chinthanippu
email: satish.chinthanippu@teradata.com
page_last_update: April 08th, 2025
description: Use Fivetran with Teradata Vantage.
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics, elt, fivetran.]
---

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'
import CommunityLink from '../_partials/community_link.mdx'

# Use Fivetran to load data from external sources to Teradata Vantage

## Overview
This quickstart demonstrates how to use Fivetran to transfer data from different sources like `Google Sheets`, `PostgreSQL` and `Amazon S3` into `Teradata Vantage`.

## Load data from Google Sheets to Teradata Vantage


### Before You Begin

Make sure you:

- Have access to a Google account with edit access to the relevant Google Sheet.
- Have an available named range defined in the Google Sheet.
- Have connection credentials to a Teradata ClearScape instance.

### Prerequisites
* Active [Fivetran Account](https://fivetran.com/login?_gl=1*9knhuy*_gcl_aw*R0NMLjE3NDM3NDI1MjguQ2p3S0NBanc0N2lfQmhCVEVpd0FhSmZQcHRGNDZmVVFqcnFaMGFiS0VpbVBkSUY3b3lQdTdicDdTZ1R2X3RHZTFGR253OFNYRnI0Nlp4b0MteXdRQXZEX0J3RQ..*_gcl_au*MTg1ODQxODI2LjE3MzgxMzM1Nzg.*_ga*MzM3MDk5MDc3LjE3MzgxMzM1Nzg.*_ga_NE72Z5F3GB*MTc0NDExMjU0MC4xOS4wLjE3NDQxMTI1NDAuNjAuMC4w*_ga_MD1R8Y04Z3*MTc0NDExMjU0MC40LjAuMTc0NDExMjU0MC42MC4wLjA)
* Access to a Teradata Vantage instance.
   
   <ClearscapeDocsNote />

### Setup Google Sheets
Refer to the [Google Sheets Setup Guide](https://fivetran.com/docs/connectors/files/google-sheets/google-sheets-setup-guide) to configure sharing permissions and named ranges for data transfer using Fivetran.


### Fivetran Setup: Sync from Google Sheets to Teradata

#### Configure Teradata as Destination
1. Login to [Fivetran Dashboard](https://fivetran.com/login?_gl=1*9knhuy*_gcl_aw*R0NMLjE3NDM3NDI1MjguQ2p3S0NBanc0N2lfQmhCVEVpd0FhSmZQcHRGNDZmVVFqcnFaMGFiS0VpbVBkSUY3b3lQdTdicDdTZ1R2X3RHZTFGR253OFNYRnI0Nlp4b0MteXdRQXZEX0J3RQ..*_gcl_au*MTg1ODQxODI2LjE3MzgxMzM1Nzg.*_ga*MzM3MDk5MDc3LjE3MzgxMzM1Nzg.*_ga_NE72Z5F3GB*MTc0NDExMjU0MC4xOS4wLjE3NDQxMTI1NDAuNjAuMC4w*_ga_MD1R8Y04Z3*MTc0NDExMjU0MC40LjAuMTc0NDExMjU0MC42MC4wLjA) with valid credentials.
2. Navigate to `Destinations` from the left menu.
3. Click on `Add destination`.
   ![fivetran_add_destination.png](..%2Fimages%2Ffivetran_add_destination.png)
4. Search for and select `Teradata`.
5. Provide a name for the destination and Click `Add`.
6. Enter the required connection details.
   - `Host`: Provide Teradata ClearScape instance hostname
   - `Logon Mechanism`: TD2
   - `Username`: Teradata ClearScape username
   - `Password`: Teradata ClearScape password
   - `Database`: Target Database Name
   
   ##### Optional Connection Parameters
   You can provide additional JDBC or destination-specific parameters to customize the connection. These fields are optional and may not be required for all environments:
   
   ##### `SSL Mode:`  Controls the SSL encryption level. Common values:
     - `DISABLE`: No SSL
     - `ALLOW`: SSL if available
     - `REQUIRE`: Enforce SSL
     - `VERIFY_CA`: Enforce SSL and validate certificate authority
     - `VERIFY_FULL`: Enforce SSL, validate certificate authority, and perform hostname verification
   ##### `Transaction Mode:` Defines how transactions are handled:
       - `ANSI`: Enables ANSI-compliant transaction behavior
      - `TERADATA`: Uses Teradata's native transaction mode
   ##### `JDBC Parameters:` For example:
     - `CHARSET=UTF8`: Sets the character encoding.
     - `ENCRYPTDATA=TRUE`: Enables data encryption in transit.
     - Refer to [Teradata JDBC Driver](https://teradata-docs.s3.amazonaws.com/doc/connectivity/jdbc/reference/current/jdbcug_chapter_2.html) Documentation for a full list of supported options.
     ![fivetran_setup_teradata.png](..%2Fimages%2Ffivetran_setup_teradata.png)
7. Click `Save and Test`. Ensure the connection test is successful before proceeding.

#### Setup Connection with Source as Google Sheets
1. Go to `Connections` in the Fivetran Dashboard.
2. Click `Add connection`.
3. Search and select `Google Sheets`.
4. Click `Setup`.
5. Choose the `Teradata destination` configured in the previous step.
6. Fill in the Google Sheets source details.
   - `Destination schema`
   - `Destination table`
   - `Authentication Method` - Refer [Google Sheets Setup Guide](https://fivetran.com/docs/connectors/files/google-sheets/google-sheets-setup-guide) to choose appropriate Authentication Method.
   - `Sheet URL`
   - `Select Named Range`
   ![fivetran_add_google_sheets.png](..%2Fimages%2Ffivetran_add_google_sheets.png)
7. Click `Save & Test` and confirm the connection success.
8. Click on `Continue` to begin the initial data load. Wait until the sync status changes to `Initial sync complete`. 

#### Verify Data in Teradata Vantage

Once the sync is complete, connect to your `Teradata Vantage` instance using a client like `Teradata Studio`:

- Open Teradata Studio and create a new connection.
- Enter the Teradata hostname, username, and password used during Fivetran setup.
- Test the connection and click Finish.
- Navigate to the database 
- Run `SELECT` query to verify the data from Google Sheets is present.


## Load data from PostgreSQL to Teradata Vantage

### Prerequisites
* Access to a Postgres Instance.
* Access to a Teradata Vantage instance.

   <ClearscapeDocsNote />

### Setup PostgreSQL
Refer to the [Postgres Setup Guide](https://fivetran.com/docs/connectors/databases/postgresql/setup-guide) to configure postgres on Fivetran.

### Fivetran Setup: Sync from Posgtres to Teradata

#### Configure Teradata as Destination
1. Login to [Fivetran Dashboard](https://fivetran.com/login?_gl=1*9knhuy*_gcl_aw*R0NMLjE3NDM3NDI1MjguQ2p3S0NBanc0N2lfQmhCVEVpd0FhSmZQcHRGNDZmVVFqcnFaMGFiS0VpbVBkSUY3b3lQdTdicDdTZ1R2X3RHZTFGR253OFNYRnI0Nlp4b0MteXdRQXZEX0J3RQ..*_gcl_au*MTg1ODQxODI2LjE3MzgxMzM1Nzg.*_ga*MzM3MDk5MDc3LjE3MzgxMzM1Nzg.*_ga_NE72Z5F3GB*MTc0NDExMjU0MC4xOS4wLjE3NDQxMTI1NDAuNjAuMC4w*_ga_MD1R8Y04Z3*MTc0NDExMjU0MC40LjAuMTc0NDExMjU0MC42MC4wLjA) with valid credentials.
2. Navigate to `Destinations` from the left menu.
3. Click on `Add destination`.
   ![fivetran_add_destination.png](..%2Fimages%2Ffivetran_add_destination.png)
4. Search for and select `Teradata`.
5. Provide a name for the destination and Click `Add`.
6. Enter the required connection details.
   - `Host`: Provide Teradata ClearScape instance hostname
   - `Logon Mechanism`: TD2
   - `Username`: Teradata ClearScape username
   - `Password`: Teradata ClearScape password
   - `Database`: Target Database Name

   ##### Optional Connection Parameters
   You can provide additional JDBC or destination-specific parameters to customize the connection. These fields are optional and may not be required for all environments:

   ##### `SSL Mode:`  Controls the SSL encryption level. Common values:
   - `DISABLE`: No SSL
   - `ALLOW`: SSL if available
   - `REQUIRE`: Enforce SSL
   - `VERIFY_CA`: Enforce SSL and validate certificate authority
   - `VERIFY_FULL`: Enforce SSL, validate certificate authority, and perform hostname verification
   ##### `Transaction Mode:` Defines how transactions are handled:
       - `ANSI`: Enables ANSI-compliant transaction behavior
   - `TERADATA`: Uses Teradata's native transaction mode
   ##### `JDBC Parameters:` For example:
   - `CHARSET=UTF8`: Sets the character encoding.
   - `ENCRYPTDATA=TRUE`: Enables data encryption in transit.
   - Refer to [Teradata JDBC Driver](https://teradata-docs.s3.amazonaws.com/doc/connectivity/jdbc/reference/current/jdbcug_chapter_2.html) Documentation for a full list of supported options.
     ![fivetran_setup_teradata.png](..%2Fimages%2Ffivetran_setup_teradata.png)
7. Click `Save and Test`. Ensure the connection test is successful before proceeding.

#### Setup Connection with Source as Postgres
1. Go to `Connections` in the Fivetran Dashboard.
2. Click `Add connection`.
3. Search and select `Postgres`.
4. Click `Setup`.
5. Choose the `Teradata destination` configured in the previous step.
6. Fill in the Google Sheets source details.
7. Enter the required connection details.
   - `Host`: Provide Postgres instance hostname
   - `Port`: Provide Port Number
   - `User`: Postgres instance username
   - `Password`: Postgres instance password
   - `Database`: Target Database Name
   - `Connection method`: Choose Connection Method based on your postgres setup. Refer [PostgreSQL Setup instructions](https://fivetran.com/docs/connectors/databases/postgresql/setup-guide#setupinstructions) for more details on different connection methods setup.
     This guide uses `Connect directly` connection method.
   - `Update Method`: Choose your incremental sync method. This guide uses `Logical Replication` sync method.
     ![fivetran_add_posgres_as_source.png](..%2Fimages%2Ffivetran_add_posgres_as_source.png)
8. Click `Save & Test` and confirm the connection success.
9. Click on `Continue` to begin the initial data load. Wait until the sync status changes to `Initial sync complete`.

#### Verify Data in Teradata Vantage

Once the sync is complete, connect to your `Teradata Vantage` instance using a client like `Teradata Studio`:

- Open Teradata Studio and create a new connection.
- Enter the Teradata hostname, username, and password used during Fivetran setup.
- Test the connection and click Finish.
- Navigate to the database
- Run `SELECT` query to verify the data from Google Sheets is present.


## Load data from Amazon S3 to Teradata Vantage

### Prerequisites
* Access to Amazon S3.
* Access to a Teradata Vantage instance.

   <ClearscapeDocsNote />

### Setup Amazon S3
Refer to the [Amazon S3 Setup Guide](https://fivetran.com/docs/connectors/files/amazon-s3/setup-guide-new) to configure postgres on Fivetran.

### Fivetran Setup: Sync from Amazon S3 to Teradata

#### Configure Teradata as Destination
1. Login to [Fivetran Dashboard](https://fivetran.com/login?_gl=1*9knhuy*_gcl_aw*R0NMLjE3NDM3NDI1MjguQ2p3S0NBanc0N2lfQmhCVEVpd0FhSmZQcHRGNDZmVVFqcnFaMGFiS0VpbVBkSUY3b3lQdTdicDdTZ1R2X3RHZTFGR253OFNYRnI0Nlp4b0MteXdRQXZEX0J3RQ..*_gcl_au*MTg1ODQxODI2LjE3MzgxMzM1Nzg.*_ga*MzM3MDk5MDc3LjE3MzgxMzM1Nzg.*_ga_NE72Z5F3GB*MTc0NDExMjU0MC4xOS4wLjE3NDQxMTI1NDAuNjAuMC4w*_ga_MD1R8Y04Z3*MTc0NDExMjU0MC40LjAuMTc0NDExMjU0MC42MC4wLjA) with valid credentials.
2. Navigate to `Destinations` from the left menu.
3. Click on `Add destination`.
   ![fivetran_add_destination.png](..%2Fimages%2Ffivetran_add_destination.png)
4. Search for and select `Teradata`.
5. Provide a name for the destination and Click `Add`.
6. Enter the required connection details.
   - `Host`: Provide Teradata ClearScape instance hostname
   - `Logon Mechanism`: TD2
   - `Username`: Teradata ClearScape username
   - `Password`: Teradata ClearScape password
   - `Database`: Target Database Name

   ##### Optional Connection Parameters
   You can provide additional JDBC or destination-specific parameters to customize the connection. These fields are optional and may not be required for all environments:

   ##### `SSL Mode:`  Controls the SSL encryption level. Common values:
   - `DISABLE`: No SSL
   - `ALLOW`: SSL if available
   - `REQUIRE`: Enforce SSL
   - `VERIFY_CA`: Enforce SSL and validate certificate authority
   - `VERIFY_FULL`: Enforce SSL, validate certificate authority, and perform hostname verification
   ##### `Transaction Mode:` Defines how transactions are handled:
       - `ANSI`: Enables ANSI-compliant transaction behavior
   - `TERADATA`: Uses Teradata's native transaction mode
   ##### `JDBC Parameters:` For example:
   - `CHARSET=UTF8`: Sets the character encoding.
   - `ENCRYPTDATA=TRUE`: Enables data encryption in transit.
   - Refer to [Teradata JDBC Driver](https://teradata-docs.s3.amazonaws.com/doc/connectivity/jdbc/reference/current/jdbcug_chapter_2.html) Documentation for a full list of supported options.
     ![fivetran_setup_teradata.png](..%2Fimages%2Ffivetran_setup_teradata.png)
7. Click `Save and Test`. Ensure the connection test is successful before proceeding.

#### Setup Connection with Source as Amazon S3
1. Go to `Connections` in the Fivetran Dashboard.
2. Click `Add connection`.
3. Search and select `Amazon S3`.
4. Click `Setup`.
5. Choose the `Teradata destination` configured in the previous step.
6. Fill in the Google Sheets source details.
7. Enter the required connection details.
   - `Destination schema`: 
   - `Destination table`: 
   - `Connect`
     - `Bucket`: S3 Bucket Name
     - `Access approach` : Choose Access Key and Secret
     - `Access Key ID`: Access Key ID of your IAM user. 
     - `Access Key Secret`: Secret Access Key of your IAM user.
   - `Compression`: Select zip
   - `Format`
     - `File Type`: csv

  ![fivetran_setup_teradata.png](..%2Fimages%2Ffivetran_add_s3.png)
   
8. Click `Save & Test` and confirm the connection success.
   9Click on `Continue` to begin the initial data load. Wait until the sync status changes to `Initial sync complete`.

#### Verify Data in Teradata Vantage

Once the sync is complete, connect to your `Teradata Vantage` instance using a client like `Teradata Studio`:

- Open Teradata Studio and create a new connection.
- Enter the Teradata hostname, username, and password used during Fivetran setup.
- Test the connection and click Finish.
- Navigate to the database
- Run `SELECT` query to verify the data from Google Sheets is present.


## Try More Use Cases
Fivetran supports many source and destination combinations. After completing this example, consider:
- Replicating data from Oracle, Salesforce, or Fivetran supported source to Teradata.

## Summary

In this guide, you:
- Set up different sources like Google Sheets, PostgreSQL and Amazon S3
- Configured Fivetran to sync data from different sources like Google Sheets, PostgreSQL and Amazon S3 to Teradata Vantage
- Verified the sync through Teradata Studio

## Further reading

- [Teradata Vantage Documentation](https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Database-Introduction/Introduction-Teradata-Vantage)
- [Fivetran Documentation](https://fivetran.com/docs/getting-started/quickstart)
- [Teradata Studio](https://docs.teradata.com/r/Teradata-StudioTM-User-Guide/October-2023/Getting-Started-With-Studio/Welcome-to-Teradata-Studio)


<CommunityLink />


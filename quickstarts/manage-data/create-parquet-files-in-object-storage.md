---
sidebar_position: 12
ft:originId: create-parquet-files-in-object-storage
author: Obed Vega, Vidhan Bhonsle
email: developer.relations@teradata.com
ft:lastEdition: "2026-07-06"
ft:description: Use Teradata Native Object Storage to read from and write to object storage using a unified SQL interface for Teradata and object storage.
keywords: [data warehouses, compute storage separation, Teradata, cloud data platform, object storage, business intelligence, enterprise analytics, parquet, create parquet files]
---

import TrialDocsNote from '../_partials/teradata_trial.mdx';

# Create Parquet files in object storage

## Overview
Native Object Storage (NOS) is a feature of Teradata that allows you to query data stored in external object storage, including CSV, JSON, and Parquet files.

These datasets can be located in external object storage such as Amazon S3, Google Cloud Storage, Azure Blob Storage, or on-premises object storage.

NOS is useful when you want to explore external data without first building a data pipeline to load it into Teradata. This tutorial demonstrates how to export data from Teradata to object storage in Parquet format.

## Prerequisites

You need access to a Teradata instance. NOS is available in Teradata editions starting from version 17.10.

!!! info
    This tutorial uses Amazon S3 object storage. To complete the tutorial, you need an S3 bucket with write permissions.

<TrialDocsNote />

## Create a Parquet file with WRITE_NOS function

`WRITE_NOS` allows you to extract selected or all columns from a database table or query results and write them to external object storage, such as Amazon S3, Azure Blob Storage, Azure Data Lake Storage Gen2, and Google Cloud Storage. This functionality writes data in Parquet format.

You can find more documentation about the `WRITE_NOS` functionality in the [NOS documentation](https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Native-Object-Store-Getting-Started-Guide/Writing-Data-to-External-Object-Store).

You need access to a database where you can execute the `WRITE_NOS` function. If you don't have such a database, run the following commands:

``` sql
CREATE USER db AS PERM=10e7, PASSWORD=db;

-- Don't forget to give the proper access rights
GRANT EXECUTE FUNCTION on TD_SYSFNLIB.READ_NOS to db;
GRANT EXECUTE FUNCTION on TD_SYSFNLIB.WRITE_NOS to db;
```

!!! note
    If you would like to learn more about setting up users and their privileges, check out the [NOS documentation](https://docs.teradata.com/r/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide/June-2022/Setting-Up-Access/Setting-Access-Privileges).


1. First create a table on your Teradata instance:

```sql
CREATE SET TABLE db.parquet_table ,FALLBACK ,
     NO BEFORE JOURNAL,
     NO AFTER JOURNAL,
     CHECKSUM = DEFAULT,
     DEFAULT MERGEBLOCKRATIO,
     MAP = TD_MAP1
     (
      column1 SMALLINT NOT NULL,
      column2 DATE FORMAT 'YY/MM/DD' NOT NULL,
      column3 DECIMAL(10,2))
PRIMARY INDEX ( column1 );
```

2. Populate your table with example data:
```sql
INSERT INTO db.parquet_table (1,'2022/01/01',1.1);
INSERT INTO db.parquet_table (2,'2022/01/02',2.2);
INSERT INTO db.parquet_table (3,'2022/01/03',3.3);
```

Your table should now look like this:

```sql
column1   column2       column3
-------  --------  ------------
      1  22/01/01          1.10
      2  22/01/02          2.20
      3  22/01/03          3.30
```

3. Create the Parquet file with `WRITE_NOS`. Replace `<BUCKET_NAME>` with the name of your S3 bucket. Also, replace `<YOUR-ACCESS-KEY-ID>` and `<YOUR-SECRET-ACCESS-KEY>` with your access key and secret.

!!! note
    Check your cloud provider documentation to learn how to create credentials to access object storage. For example, for AWS check out [How do I create an AWS access key?](https://aws.amazon.com/premiumsupport/knowledge-center/create-access-key/)

```sql
SELECT * FROM WRITE_NOS (
ON ( SELECT * FROM db.parquet_table)
USING
LOCATION('/s3/<BUCKET_NAME>.s3.amazonaws.com/parquet_file_on_NOS/')
AUTHORIZATION('{"ACCESS_ID":"<YOUR-ACCESS-KEY-ID>",
"ACCESS_KEY":"<YOUR-SECRET-ACCESS-KEY>"}')
STOREDAS('PARQUET')
MAXOBJECTSIZE('16MB')
COMPRESSION('SNAPPY')
INCLUDE_ORDERING('TRUE')
INCLUDE_HASHBY('TRUE')
) as d;
```

!!! note
    If you are using temporary AWS credentials, include the session token in the `AUTHORIZATION` string:

    ```sql
    AUTHORIZATION('{"ACCESS_ID":"<YOUR-ACCESS-KEY-ID>",
    "ACCESS_KEY":"<YOUR-SECRET-ACCESS-KEY>",
    "SESSION_TOKEN":"<YOUR-SESSION-TOKEN>"}')
    ```

Now you have created a Parquet files in your object storage bucket. To query the files, follow step 4.

4. Create an authorization object. Replace `<YOUR-ACCESS-KEY-ID>` and `<YOUR-SECRET-ACCESS-KEY>` with your access key and secret:

```sql
CREATE AUTHORIZATION MyAuthObj
USER '<YOUR-ACCESS-KEY-ID>'
PASSWORD '<YOUR-SECRET-ACCESS-KEY>';
```

5. Create a NOS-backed foreign table. Replace `<BUCKET_NAME>` with the name of your S3 bucket:

```sql
CREATE MULTISET FOREIGN TABLE parquet_table_to_read_file_on_NOS,
EXTERNAL SECURITY MyAuthObj,
MAP = TD_MAP1
(
  Location VARCHAR(2048) CHARACTER SET UNICODE CASESPECIFIC,
  column1 SMALLINT,
  column2 DATE,
  column3 DECIMAL(10,2)
)
USING (
    LOCATION ('/s3/<BUCKET_NAME>.s3.amazonaws.com/parquet_file_on_NOS/')
    STOREDAS ('PARQUET')
)
NO PRIMARY INDEX;
```

6. Query the Parquet files on NOS:

```sql
SELECT column1, column2, column3 FROM parquet_table_to_read_file_on_NOS;
```

The data returned from the query should look something like this:

```sql
column1   column2       column3
-------  --------  ------------
      1  22/01/01          1.10
      2  22/01/02          2.20
      3  22/01/03          3.30
```

## Summary

In this tutorial, you learned how to export data from Teradata to object storage in Parquet format using Native Object Storage (NOS). NOS supports reading data stored in CSV, JSON, and Parquet formats. NOS can also export data from Teradata to object storage.

## Further reading
* [Native Object Storage - Writing Data to External Object Store](https://docs.teradata.com/r/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide/June-2022/Writing-Data-to-External-Object-Store)
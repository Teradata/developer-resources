---
sidebar_position: 20
author: Adam Tworkiewicz
email: adam.tworkiewicz@teradata.com
page_last_update: April 6th, 2022
description: Run large bulkloads efficiently with Fastload
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics, Fastload]
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Run large bulkloads efficiently with Fastload

## Deprecation notice
:::important
This how-to describes `Fastload` utility. The utility has been deprecated. For new implementations consider using [Teradata Parallel Transporter (TPT)](https://docs.teradata.com/search/documents?query=Teradata+Parallel+Transporter+Quick+Start+Guide&sort=last_update&virtual-field=title_only&content-lang=en-US).
:::

## Overview

We often have a need to move large volumes of data into Vantage. Teradata offers `Fastload` utility that can efficiently load large amounts of data into Teradata Vantage. This how-to demonstrates how to use `Fastload`. In this scenario, we will load over 300k records, over 40MB of data, in a couple of seconds.


## Prerequisites

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'

* Access to a Teradata Vantage instance
  <ClearscapeDocsNote />
* Download Teradata Tools and Utilities (TTU) -  supported platforms: [Windows](https://downloads.teradata.com/download/tools/teradata-tools-and-utilities-windows-installation-package), [MacOS](https://downloads.teradata.com/download/tools/teradata-tools-and-utilities-macos-installation-package), [Linux](https://downloads.teradata.com/download/tools/teradata-tools-and-utilities-linux-installation-package-0) (requires registration).

## Install TTU
   <Tabs>
   <TabItem value="Windows" label="Windows">
    Unzip the downloaded file and run `setup.exe`.
   </TabItem>
   <TabItem value="MacOS" label="MacOS">
    Unzip the downloaded file and run `TeradataToolsAndUtilitiesXX.XX.XX.pkg`.
   </TabItem>
   <TabItem value="Linux" label="Linux">
    Unzip the downloaded file, go to the unzipped directory and run:
    ```bash 
    ./setup.sh a
    ```
   </TabItem>
   </Tabs>


## Get Sample data

We will be working with the US tax fillings for nonprofit organizations. Nonprofit tax filings are public data. The US Internal Revenue Service publishes them in S3 bucket. Let's grab a summary of filings for 2020: `https://s3.amazonaws.com/irs-form-990/index_2020.csv`. You can use your browser, `wget` or `curl` to save the file locally.

## Create a database

Lets's create a database in Vantage. Use your favorite SQL tool to run the following query:

```sql
CREATE DATABASE irs
AS PERMANENT = 120e6, -- 120MB
    SPOOL = 120e6; -- 120MB
```

## Run Fastload

We will now run `Fastload`. `Fastload` is a command-line tool that is very efficient in uploading large amounts of data into Vantage. `Fastload`, in order to be fast, has several restrictions in place. It can only populate empty tables, no inserts to already populated tables are supported. It doesn't support tables with secondary indices. Also, it won't insert duplicate records, even if a table is a `MULTISET` table. For the full list of restrictions check out [Teradata® `Fastload` Reference](https://docs.teradata.com/r/hBBrRBhRY0MFN4~xApbUqw/root).

Fastload has its own scripting language. The language allows you to prepare the database with arbitrary SQL commands, declare the input source and define how the data should be inserted into Vantage. The tool supports both interactive and batch mode. In this section, we are going to use the interactive mode.

Let's start `Fastload` in the interactive mode:

```bash
fastload
```

First, let's log in to a Vantage database. I've a Vantage Express running locally, so I'll use `localhost` as the hostname and `dbc` for username and password:

```bash
LOGON localhost/dbc,dbc;
```

Now, that we are logged in, I'm going to prepare the database. I'm switching to `irs` database and making sure that the target table `irs_returns` and error tables (more about error tables later) do not exist:

```sql
DATABASE irs;
DROP TABLE irs_returns;
DROP TABLE irs_returns_err1;
DROP TABLE irs_returns_err2;
```

I'll now create an empty table that can hold the data elements from the csv file.

```sql
CREATE MULTISET TABLE irs_returns (
    return_id INT,
    filing_type VARCHAR(5) CHARACTER SET LATIN NOT CASESPECIFIC,
    ein INT,
    tax_period INT,
    sub_date VARCHAR(100) CHARACTER SET LATIN NOT CASESPECIFIC,
    taxpayer_name VARCHAR(100) CHARACTER SET LATIN NOT CASESPECIFIC,
    return_type VARCHAR(5) CHARACTER SET LATIN NOT CASESPECIFIC,
    dln BIGINT,
    object_id BIGINT
)
PRIMARY INDEX ( return_id );
```

Now, that the target table has been prepared, we can start loading the data. `ERRORFILES` directive defines error files. The error files are really tables that `Fastload` creates. The first table contains information about data conversion and other issues. The second table keeps track of data uniqueness issues, e.g. primary key violations.

```sql
BEGIN LOADING irs_returns
    ERRORFILES irs_returns_err1, irs_returns_err2;
```

We instruct `Fastload` to save a checkpoint every 10k rows. It's useful in case we have to restart our job. It will be able to resume from the last checkpoint.


```sql
    CHECKPOINT 10000;
```

We also need to tell `Fastload` to skip the first row in the CSV file as start at record 2. That's because the first row contains column headers.

```sql
    RECORD 2;
```

`Fastload` also needs to know that it's a comma-separated file:

```sql
    SET RECORD VARTEXT ",";
```

`DEFINE` block specifies what columns we should expect:

```sql
    DEFINE in_return_id (VARCHAR(19)),
    in_filing_type (VARCHAR(5)),
    in_ein (VARCHAR(19)),
    in_tax_period (VARCHAR(19)),
    in_sub_date (VARCHAR(22)),
    in_taxpayer_name (VARCHAR(100)),
    in_return_type (VARCHAR(5)),
    in_dln (VARCHAR(19)),
    in_object_id (VARCHAR(19)),
```

`DEFINE` block also has `FILE` attribute that points to the file with the data. Replace `FILE = /tmp/index_2020.csv;` with your location of `index_2020.csv` file:

```sql
    FILE = /tmp/index_2020.csv;
```

Finally, we define the INSERT statement that will put data into the database and we close off `LOADING` block:

```sql
    INSERT INTO irs_returns (
        return_id,
        filing_type,
        ein,
        tax_period,
        sub_date,
        taxpayer_name,
        return_type,
        dln,
        object_id
    ) VALUES (
        :in_return_id,
        :in_filing_type,
        :in_ein,
        :in_tax_period,
        :in_sub_date,
        :in_taxpayer_name,
        :in_return_type,
        :in_dln,
        :in_object_id
    );
END LOADING;
```
Once the job has finished, we are logging off from the database to clean things up.

```sql
LOGOFF;
```

Here is what the entire script looks like:
```sql
LOGON localhost/dbc,dbc;

DATABASE irs;
DROP TABLE irs_returns;
DROP TABLE irs_returns_err1;
DROP TABLE irs_returns_err2;

CREATE MULTISET TABLE irs_returns (
    return_id INT,
    filing_type VARCHAR(5) CHARACTER SET LATIN NOT CASESPECIFIC,
    ein INT,
    tax_period INT,
    sub_date VARCHAR(100) CHARACTER SET LATIN NOT CASESPECIFIC,
    taxpayer_name VARCHAR(100) CHARACTER SET LATIN NOT CASESPECIFIC,
    return_type VARCHAR(5) CHARACTER SET LATIN NOT CASESPECIFIC,
    dln BIGINT,
    object_id BIGINT
)
PRIMARY INDEX ( return_id );

BEGIN LOADING irs_returns
  ERRORFILES irs_returns_err1, irs_returns_err2;
  CHECKPOINT 10000;
  RECORD 2;
  SET RECORD VARTEXT ",";

  DEFINE in_return_id (VARCHAR(19)),
    in_filing_type (VARCHAR(5)),
    in_ein (VARCHAR(19)),
    in_tax_period (VARCHAR(19)),
    in_sub_date (VARCHAR(22)),
    in_taxpayer_name (VARCHAR(100)),
    in_return_type (VARCHAR(5)),
    in_dln (VARCHAR(19)),
    in_object_id (VARCHAR(19)),
    FILE = /tmp/index_2020.csv;

  INSERT INTO irs_returns (
      return_id,
      filing_type,
      ein,
      tax_period,
      sub_date,
      taxpayer_name,
      return_type,
      dln,
      object_id
  ) VALUES (
      :in_return_id,
      :in_filing_type,
      :in_ein,
      :in_tax_period,
      :in_sub_date,
      :in_taxpayer_name,
      :in_return_type,
      :in_dln,
      :in_object_id
  );
END LOADING;

LOGOFF;
```

## Batch mode

To run our example in batch mode, simply save all instructions in a single file and run:


```bash
fastload < file_with_instruction.fastload
```

## `Fastload` vs. NOS

In our case, the file is in an S3 bucket. That means, that we can use Native Object Storage (NOS) to ingest the data:

```sql
-- create an S3-backed foreign table
CREATE FOREIGN TABLE irs_returns_nos
    USING ( LOCATION('/s3/s3.amazonaws.com/irs-form-990/index_2020.csv') );

-- load the data into a native table
CREATE MULTISET TABLE irs_returns_nos_native
    (RETURN_ID, FILING_TYPE, EIN, TAX_PERIOD, SUB_DATE, TAXPAYER_NAME)
AS (
    SELECT RETURN_ID, FILING_TYPE, EIN, TAX_PERIOD, SUB_DATE, TAXPAYER_NAME FROM irs_returns_nos
) WITH DATA
NO PRIMARY INDEX;
```

The NOS solution is convenient as it doesn't depend on additional tools. It can be implemented using only SQL. It performs well, especially for Vantage deployments with a high number of AMPs as NOS tasks are delegated to AMPs and run in parallel. Also, splitting the data in object storage into multiple files may further improve performance.

## Summary

This how-to demonstrated how to ingest large amounts of data into Vantage. We loaded hundreds of thousands or records into Vantage in a couple of seconds using `Fastload`.

## Further reading

* [Teradata® `Fastload` Reference](https://docs.teradata.com/r/hBBrRBhRY0MFN4~xApbUqw/root)
* [Query data stored in object storage](../manage-data/nos.md)

import CommunityLinkPartial from '../_partials/community_link.mdx';

<CommunityLinkPartial />
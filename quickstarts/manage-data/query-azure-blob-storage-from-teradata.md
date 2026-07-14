---
sidebar_position: 16
author: Daniel Herrera
email: developer.relations@teradata.com
page_last_update: July 13, 2026
description: Query Azure Blob Storage from Teradata using Native Object Store (NOS).
keywords: [data warehouses, compute storage separation, Teradata, Teradata, cloud data platform, object storage, Azure Blob Storage, NOS, native object store, Parquet, external data]
---

import TrialDocsNote from '../_partials/teradata_trial.mdx'

# Query Azure Blob Storage from Teradata

### Overview

This guide explains how to query data stored in Azure Blob Storage directly from Teradata using Native Object Store (NOS) — no ETL pipeline or data movement required. You will learn how to explore the schema of an object store dataset, query it with standard SQL, and optionally load it into Teradata for repeated use.

### About Teradata NOS

Native Object Store (NOS) is a Teradata capability that lets you query data stored in external object stores — such as Azure Blob Storage, Azure Data Lake Storage Gen2, AWS S3, and Google Cloud Storage — using standard Teradata SQL. NOS supports CSV, JSON, and Parquet formats.

NOS is enabled out of the box on all Teradata editions from Teradata Express through TeradataCloud Lake, starting from version 17.10.

For full NOS documentation see the [Teradata NOS Getting Started Guide](https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Native-Object-Store-Getting-Started-Guide).

### Prerequisites

* A **Teradata** instance.

<TrialDocsNote />

* An Azure Blob Storage container with data. For private containers you will need a Storage Account Name and either an Access Key or SAS Token.

### Location String Format

NOS uses the `/az/` prefix for Azure Blob Storage locations. The format is:

```
/az/<storage_account_name>.blob.core.windows.net/<container_name>/<optional_path>/
```

For Azure Data Lake Storage Gen2 (ADLS Gen2), the same format applies as long as the URL includes `.blob.` — both storage types are functionally identical from a NOS perspective.

### Step 1: Configure Access

#### Public containers

For publicly accessible containers, no authorization object is needed. You can query directly using `READ_NOS` or a foreign table without any credentials. An empty authorization object (see below), might be needed on some Teradata editions.

#### Private containers

For private containers, create an `AUTHORIZATION` object with your storage account credentials:

```sql
CREATE AUTHORIZATION MyAzureAuth
AS DEFINER TRUSTED
USER 'mystorageaccount'       -- Storage Account Name
PASSWORD '*****************'; -- Access Key or SAS Token
```

### Step 2: Explore the Schema

Before querying data, use `RETURNTYPE ('NOSREAD_SCHEMA')` to inspect the column names and types inferred from the Parquet files:

```sql
SELECT *
FROM READ_NOS (
    USING
        LOCATION ('/az/azureopendatastorage.blob.core.windows.net/nyctlc/yellow/puYear=2016/puMonth=6/')
        RETURNTYPE ('NOSREAD_SCHEMA')
        STOREDAS ('PARQUET')
) AS d;
```

To list the files at a given location, use `RETURNTYPE ('NOSREAD_KEYS')`:

```sql
SELECT location(CHAR(200)), ObjectLength
FROM READ_NOS (
    USING
        LOCATION ('/az/azureopendatastorage.blob.core.windows.net/nyctlc/yellow/puYear=2016/puMonth=6/')
        RETURNTYPE ('NOSREAD_KEYS')
        STOREDAS ('PARQUET')
) AS d
ORDER BY 1;
```

### Step 3: Query Data with READ_NOS

To read actual rows, omit the `RETURNTYPE` clause entirely. NOS will return the data directly.

The example below queries the publicly available [Azure Open Datasets](https://azure.microsoft.com/en-us/products/open-datasets) NYC Taxi dataset — no Azure account or credentials required:

```sql
SELECT
    vendorID,
    tpepPickupDateTime,
    tpepDropoffDateTime,
    passengerCount,
    tripDistance,
    puLocationId,
    doLocationId,
    rateCodeId,
    paymentType,
    fareAmount,
    tipAmount,
    tollsAmount,
    totalAmount
FROM READ_NOS (
    USING
        LOCATION ('/az/azureopendatastorage.blob.core.windows.net/nyctlc/yellow/puYear=2016/puMonth=6/')
        STOREDAS ('PARQUET')
) AS d
SAMPLE 10;
```

:::tip Partition pruning
Scoping the `LOCATION` path to a specific partition (e.g. `puYear=2016/puMonth=6/`) significantly reduces the data NOS needs to scan. Always filter by partition columns in the path rather than in the `WHERE` clause when possible.
:::

For private containers, add the `AUTHORIZATION` clause:

```sql
FROM READ_NOS (
    USING
        LOCATION ('/az/mystorageaccount.blob.core.windows.net/mycontainer/mypath/')
        STOREDAS ('PARQUET')
        AUTHORIZATION (MyAzureAuth)
) AS d
```

### Step 4: Create a Foreign Table (Optional)

For repeated queries against the same dataset, a foreign table definition avoids repeating the `READ_NOS` clause every time and makes the data feel like a native Teradata table:

```sql
CREATE FOREIGN TABLE nyc_yellow_taxi
    EXTERNAL SECURITY DEFINER TRUSTED MyAzureAuth
USING (
    LOCATION ('/az/azureopendatastorage.blob.core.windows.net/nyctlc/yellow/')
    STOREDAS ('PARQUET')
);

-- Query it like any other table
SELECT *
FROM nyc_yellow_taxi
SAMPLE 10;
```

:::note
Foreign tables are always created as No Primary Index (NoPI) tables. Each query against a foreign table fetches data live from the object store — NOS does not cache results automatically.
:::

### Step 5: Load Data into Teradata (Optional)

If you expect to query the same dataset repeatedly, loading it into Teradata avoids repeated object store reads and potential egress charges. Use `CREATE TABLE AS ... WITH DATA`:

```sql
CREATE MULTISET TABLE nyc_yellow_taxi_june2016 AS (
    SELECT *
    FROM READ_NOS (
        USING
            LOCATION ('/az/azureopendatastorage.blob.core.windows.net/nyctlc/yellow/puYear=2016/puMonth=6/')
            STOREDAS ('PARQUET')
    ) AS d
)
WITH DATA
NO PRIMARY INDEX;
```

### About Azure Open Datasets

Microsoft hosts several public datasets on `azureopendatastorage.blob.core.windows.net` with anonymous read access — no Azure account needed. These are useful for testing NOS connectivity or exploring data before building a pipeline.

| Dataset | Location Path |
|---|---|
| NYC Yellow Taxi | `/az/azureopendatastorage.blob.core.windows.net/nyctlc/yellow/` |
| NYC Green Taxi | `/az/azureopendatastorage.blob.core.windows.net/nyctlc/green/` |
| Public Holidays | `/az/azureopendatastorage.blob.core.windows.net/holidaydatacontainer/Processed/` |
| ISD Weather | `/az/azureopendatastorage.blob.core.windows.net/isdweatherdatacontainer/ISDWeather/` |

All datasets are stored in Parquet format and partitioned by year and month where applicable.

:::note Azure Data Share
Data shared via [Azure Data Share](https://docs.microsoft.com/en-us/azure/data-share/overview) lands in an Azure Blob Storage container on the consumer side. Once received, it can be queried from Teradata using NOS in exactly the same way as any other Blob Storage dataset — simply point the `LOCATION` clause at the container where the share was delivered and provide the appropriate `AUTHORIZATION` object.
:::

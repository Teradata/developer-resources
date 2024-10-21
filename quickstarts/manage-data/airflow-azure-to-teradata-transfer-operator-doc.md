---
sidebar_position: 4
author: Satish Chinthanippu
email: satish.chinthanippu@teradata.com
page_last_update: July 24th, 2024
description: Transferring CSV, JSON, and Parquet data from Azure Blob Storage to Teradata Vantage with Airflow's Azure Cloud Transfer Operator
keywords: [data warehouses, teradata, vantage, transfer, cloud data platform, object storage, business intelligence, enterprise analytics, airflow, airflow teradata provider, microsoft azure blob storage]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'

# Data Transfer from Azure Blob to Teradata Vantage Using Apache Airflow

## Overview

This document provides instructions and guidance for transferring data in CSV, JSON and Parquet formats from Microsoft Azure Blob Storage to Teradata Vantage using the Airflow Teradata Provider and the [Azure Cloud Transfer Operator](https://airflow.apache.org/docs/apache-airflow-providers-teradata/stable/operators/azure_blob_to_teradata.html). It outlines the setup, configuration and execution steps required to establish a seamless data transfer pipeline between these platforms.

:::note
Use [The Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install) on `Windows` to try this quickstart example.
:::

## Prerequisites
* Access to a Teradata Vantage instance, version 17.10 or higher.
    <ClearscapeDocsNote />
* Python 3.8, 3.9, 3.10 or 3.11 and python3-env, python3-pip installed.
    <Tabs>
    <TabItem value="linux" label="Linux">
    ```bash
    sudo apt install -y python3-venv python3-pip
    ```
    </TabItem>
    <TabItem value="wsl" label="WSL">
    ```bash
    sudo apt install -y python3-venv python3-pip
    ```
    </TabItem>
    <TabItem value="macos" label="macOS">
    ```bash
    brew install python
    ```
    Refer [Installation Guide](https://docs.python-guide.org/starting/install3/osx/) if you face any issues.
    </TabItem>
    </Tabs>

## Install Apache Airflow
1. Create a new python environment to manage airflow and its dependencies. Activate the environment.

    ``` bash
    python3 -m venv airflow_env
    source airflow_env/bin/activate
    AIRFLOW_VERSION=2.9.3
    PYTHON_VERSION="$(python3 --version | cut -d " " -f 2 | cut -d "." -f 1-2)"
    CONSTRAINT_URL="https://raw.githubusercontent.com/apache/airflow/constraints-${AIRFLOW_VERSION}/constraints-${PYTHON_VERSION}.txt"
    pip install "apache-airflow##${AIRFLOW_VERSION}" --constraint "${CONSTRAINT_URL}"
    ```

2. Install the Apache Airflow Teradata provider package and the Microsoft Azure provider package.

    ``` bash
    pip install "apache-airflow-providers-teradata[microsoft.azure]"
    ```
3. Set the AIRFLOW_HOME environment variable.

    ``` bash
    export AIRFLOW_HOME=~/airflow
    ```

## Configure Apache Airflow
1. Switch to the virtual environment where Apache Airflow was installed at [Install Apache Airflow](./airflow-azure-to-teradata-transfer-operator-doc.md)

    ``` bash
    source airflow_env/bin/activate
    ```

2. Configure the listed environment variables to activate the test connection button, preventing the loading of sample DAGs and default connections in the Airflow UI.

    ``` bash
    export AIRFLOW__CORE__TEST_CONNECTION=Enabled
    export AIRFLOW__CORE__LOAD_EXAMPLES=false
    export AIRFLOW__CORE__LOAD_DEFAULT_CONNECTIONS=false
    ```
## Start the Apache Airflow web server
1. Run airflow's web server

    ``` bash
    airflow standalone
    ```

2. Access the airflow UI. Visit https://localhost:8080 in the browser and log in with the admin account details shown in the terminal.

    ![Airflow Password](../images/airflow-console-password.png)

## Define the Apache Airflow connection to Vantage

1. Click on Admin - Connections
2. Click on + to define a new connection to a Teradata Vantage instance.
3. Assign the new connection the id `teradata_default` with Teradata Vantage instance details.
    * Connection Id: teradata_default
    * Connection Type: Teradata
    * Database Server URL (required): Teradata Vantage instance hostname to connect to.
    * Database: database name
    * Login (required): database user
    * Password (required): database user password

Refer [Teradata Connection](https://airflow.apache.org/docs/apache-airflow-providers-teradata/stable/connections/teradata.html) for more details.

## Define DAG in Apache Airflow
DAGs in airflow are defined as python files. The DAG below transfers data from Teradata-supplied public blob containers to a Teradata Vantage instance. Copy the python code below and save it as `airflow-azure-to-teradata-transfer-operator-demo.py` under the directory $AIRFLOW_HOME/dags.

This DAG is a very simple example that covers:

- Droping the destination table if it exists
- Transfer of the data stored in object storage
- Get the number of transferred records
- Write the number of transferred records to the log

Refer [Azure Blob Storage To Teradata Operator](https://airflow.apache.org/docs/apache-airflow-providers-teradata/stable/_api/airflow/providers/teradata/transfers/azure_blob_to_teradata/index.html) for more information on `Azure Blob Storage to Teradata` Transfer Operator.

``` python

from __future__ import annotations

import datetime

from airflow import DAG
from airflow.operators.bash import BashOperator
from airflow.providers.teradata.operators.teradata import TeradataOperator
from airflow.providers.teradata.transfers.azure_blob_to_teradata import AzureBlobStorageToTeradataOperator

DAG_ID = "example_azure_blob_to_teradata_transfer_operator"
CONN_ID = "teradata_default"
with DAG(
    dag_id=DAG_ID,
    start_date=datetime.datetime(2020, 2, 2),
    schedule="@once",
    catchup=False,
    default_args={"teradata_conn_id": CONN_ID},
) as dag:
    # Drop table if it exists
    drop_table_if_exists = TeradataOperator(
        task_id="drop_table_if_exists",
        sql="DROP table example_blob_teradata_csv;",
    )
    # Transfer data from Azure blob storage to Teradata Vantage instance
    transfer_data_csv = AzureBlobStorageToTeradataOperator(
        task_id="transfer_data_blob_to_teradata_csv",
        blob_source_key="/az/akiaxox5jikeotfww4ul.blob.core.windows.net/td-usgs/CSVDATA/09380000/2018/06/",
        public_bucket=True,
        teradata_table="example_blob_teradata_csv",
        teradata_conn_id="teradata_default",
        trigger_rule="always",
    )
    # Get the number of records transferred from azure blob to teradata table
    read_data_table_csv = TeradataOperator(
        task_id="read_data_table_csv",
        sql="SELECT count(1) from example_blob_teradata_csv;",
    )
    # Print number of records in table
    print_number_of_records = BashOperator(
    task_id='print_number_of_records',
    bash_command="echo {{ ti.xcom_pull(task_ids='read_data_table_csv') }}",
    )
    (
       drop_table_if_exists
        >> transfer_data_csv
        >> read_data_table_csv
        >> print_number_of_records
    )
```

## Load DAG

When the DAG file is copied to $AIRFLOW_HOME/dags, Apache Airflow displays the DAG in the UI under the DAGs section. It will take 2 to 3 minutes to load the DAG in the Apache Airflow UI.

## Run DAG

Run the dag as shown in the image below.

![Run dag](../images/dag.png)

## Transfer data from Private Blob Storage Container to Teradata instance
To successfully transfer data from a Private Blob Storage Container to a Teradata instance, the following prerequisites are necessary.

* An Azure account. You can start with a [free account](https://azure.microsoft.com/free/).
* Create an [Azure storage account](https://docs.microsoft.com/en-us/azure/storage/common/storage-quickstart-create-account?tabs=azure-portal)
* Create a [blob container](https://learn.microsoft.com/en-us/azure/storage/blobs/blob-containers-portal) under Azure storage account
* [Upload](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-portal) CSV/JSON/Parquest format files to blob container
* Create a Teradata Authorization object with the Azure Blob Storage Account and the Account Secret Key

    ``` sql
    CREATE AUTHORIZATION azure_authorization USER 'azuretestquickstart' PASSWORD 'AZURE_BLOB_ACCOUNT_SECRET_KEY'
    ```

    :::note
    Replace `AZURE_BLOB_ACCOUNT_SECRET_KEY` with Azure storage account `azuretestquickstart`  [access key](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?toc=%2Fazure%2Fstorage%2Fblobs%2Ftoc.json&bc=%2Fazure%2Fstorage%2Fblobs%2Fbreadcrumb%2Ftoc.json&tabs=azure-portal)
    :::
* Modify `blob_source_key` with YOUR-PRIVATE-OBJECT-STORE-URI in `transfer_data_csv` task and add `teradata_authorization_name` field with Teradata Authorization Object name


    ``` python
    transfer_data_csv = AzureBlobStorageToTeradataOperator(
            task_id="transfer_data_blob_to_teradata_csv",
            blob_source_key="YOUR-OBJECT-STORE-URI",
            teradata_table="example_blob_teradata_csv",
            teradata_conn_id="teradata_default",
            teradata_authorization_name="azure_authorization",
            trigger_rule="always",
        )
    ```


## Summary
This guide details the utilization of the Airflow Teradata Provider’s Azure Cloud Transfer Operator to seamlessly transfer CSV, JSON, and Parquet data from Microsoft Azure Blob Storage to Teradata Vantage, facilitating streamlined data operations between these platforms.

## Further reading
* [Apache Airflow DAGs reference](https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/dags.html)
* [Teradata Authorization](https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/SQL-Data-Definition-Language-Syntax-and-Examples/Authorization-Statements-for-External-Routines/CREATE-AUTHORIZATION-and-REPLACE-AUTHORIZATION)
* [Install WSL on windows](https://learn.microsoft.com/en-us/windows/wsl/install)

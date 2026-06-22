---
sidebar_position: 3
id: airflow
author: Satish Chinthanippu, Daniel Herrera
email: developer.relations@teradata.com
page_last_update: June 22nd, 2026
description: Use Apache Airflow with Teradata Database.
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics, elt, airflow, workflow.]
---

import TrialDocsNote from '../_partials/teradata_trial.mdx'

# Use Apache Airflow with Teradata Database

## Overview
This quickstart demonstrates how to use airflow with Teradata Database. Airflow will be installed on a Ubuntu System.

## Prerequisites
* Ubuntu 22.x (Or Windows System for Linux WSL)
* Access to a Teradata Database instance.
    <TrialDocsNote />
* Python **3.9**, **3.10**, **3.11** or **3.12** installed.
* uv



## Install Apache Airflow

1. Set the `AIRFLOW_HOME` environment variable. Airflow requires a home directory and uses `~/airflow` by default, but you can set a different location if you prefer. The `AIRFLOW_HOME` environment variable is used to inform Airflow of the desired location.
    ```bash
    export AIRFLOW_HOME=~/airflow
    ```

2. Install `apache-airflow` stable version 3.2.2 from PyPI repository:
    ```bash
    AIRFLOW_VERSION=3.2.2
    uv pip install "apache-airflow==${AIRFLOW_VERSION}"
    ```

3. Install the Airflow Teradata provider stable version from PyPI repository:
    ```bash
    uv pip install "apache-airflow-providers-teradata"
    ```

    :::note
    For security reasons, the test connection functionality is disabled by default across Airflow UI, API and CLI.
    The availability of the functionality can be controlled by the test_connection flag in the core section of the Airflow configuration (`$AIRFLOW_HOME/airflow.cfg`) or define below environment variable before starting airflow server:
        ```bash
        export AIRFLOW__CORE__TEST_CONNECTION=Enabled
        ```
    :::    

## Start Airflow Standalone

:::note
If you have a previous Airflow installation, run `airflow db migrate` before starting `airflow standalone` to ensure your configuration file is up to date for the installed version.
:::

1. Run Airflow Standalone
    ```bash
    airflow standalone
    ```
2. Access the Airflow UI. Visit http://localhost:8080 in the browser and log in with the admin account details shown in the terminal.


Teradata connections may be defined in Airflow in the following ways:

1. Using the Airflow CLI
2. Using an Environment Variable

## Define a Teradata connection using the Airflow CLI

Use the `airflow connections add` command to register a connection directly from the terminal. Replace the placeholder values with your actual Teradata host, login, and password.

```bash
airflow connections add Teradata_TestConn \
    --conn-type teradata \
    --conn-host <host> \
    --conn-login <user> \
    --conn-password <password> \
    --conn-schema <schema>
```

Verify the connection was created:

```bash
airflow connections get Teradata_TestConn
```

Refer [Teradata Hook](https://airflow.apache.org/docs/apache-airflow-providers-teradata/stable/connections/teradata.html) for the full list of supported connection parameters.

## Define a Teradata connection in Environment Variable
Airflow connections may be defined in environment variables in either of one below formats.

1. JSON format
2. URI format

    :::note
    The naming convention is AIRFLOW_CONN_CONN_ID, all uppercase (note the single underscores surrounding CONN).
    So if your connection id is teradata_conn_id then the variable name should be AIRFLOW_CONN_TERADATA_CONN_ID
    :::


## JSON format example


```bash
export AIRFLOW_CONN_TERADATA_CONN_ID='{
    "conn_type": "teradata",
    "login": "teradata_user",
    "password": "my-password",
    "host": "my-host",
    "schema": "my-schema",
    "extra": {
        "tmode": "TERA",
        "sslmode": "verify-ca"
    }
}'
```

## URI format example

```bash
export AIRFLOW_CONN_TERADATA_CONN_ID='teradata://teradata_user:my-password@my-host/my-schema?tmode=TERA&sslmode=verify-ca'
```

Refer [Teradata Hook](https://airflow.apache.org/docs/apache-airflow-providers-teradata/stable/connections/teradata.html) for detailed information on Teradata Connection in Airflow.

## Define a DAG in Airflow

Create a DAG as a python file like sample.py under `DAG_FOLDER` - `$AIRFLOW_HOME/dags` directory.

```python
from datetime import datetime
from airflow import DAG
from airflow.providers.teradata.operators.teradata import TeradataOperator
CONN_ID = "Teradata_TestConn"
with DAG(
    dag_id="example_teradata_operator",
    max_active_runs=1,
    max_active_tasks=3,
    catchup=False,
    start_date=datetime(2023, 1, 1),
) as dag:
    create = TeradataOperator(
        task_id="table_create",
        teradata_conn_id=CONN_ID,
        sql="""
            CREATE TABLE my_users,
            FALLBACK (
                user_id decimal(10,0) NOT NULL GENERATED ALWAYS AS IDENTITY (
                    START WITH 1
                    INCREMENT BY 1
                    MINVALUE 1
                    MAXVALUE 2147483647
                    NO CYCLE),
                user_name VARCHAR(30)
            ) PRIMARY INDEX (user_id);
        """,
    )
```

## Load DAG

Airflow loads DAGs from Python source files, which it looks for inside its configured `DAG_FOLDER` - `$AIRFLOW_HOME/dags` directory.

## Run DAG
DAGs will run in one of two ways:

1. When they are triggered either manually or via the API
2. On a defined schedule, which is defined as part of the DAG
`example_teradata_operator` is defined to trigger as manually. To define a schedule, any valid [crontab](https://en.wikipedia.org/wiki/Cron) schedule value can be passed to the schedule argument.
 
```python
with DAG(
  dag_id="my_daily_dag",
  schedule="0 0 * * *"
  ) as dag:
```

## Summary

This quickstart demonstrated how to use Airflow and the Airflow Teradata provider with a Teradata Database instance. The example DAG provided creates `my_users` table in the Teradata Database instance defined via the Airflow CLI connection.

## Further reading
* [airflow documentation](https://airflow.apache.org/docs/apache-airflow/stable/start.html)
* [airflow DAGs](https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/dags.html)

---
sidebar_position: 7
author: Satish Chinthanippu
email: satish.chinthanippu@teradata.com
page_last_update: July 11th, 2024
description: Manage VantageCloud Lake compute clusters with Apache Airflow
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, business intelligence, enterprise analytics, airflow, workflow, teradatasql, ipython-sql, cloud computing, machine learning, vantagecloud, vantagecloud lake, lake]
---

import VantageCloudLakeRequest from './_partials/vantagecloud-lake-request.md';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Manage VantageCloud Lake Compute Clusters with Apache Airflow

## Overview

This tutorial demonstrates the process of utilizing the [Teradata Airflow Compute Cluster Operators](https://airflow.apache.org/docs/apache-airflow-providers-teradata/stable/operators/index.html) to manage VantageCloud Lake compute clusters. The objective is to execute dbt transformations defined on [jaffle_shop](https://github.com/Teradata/jaffle_shop-dev.git) dbt project through VantageCloud Lake compute clusters.

:::note
Use [The Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install) on `Windows` to try this quickstart example.
:::

## Prerequisites
* Ensure you have the necessary credentials and access rights to use Teradata VantageCloud Lake.
    <VantageCloudLakeRequest />
* Python 3.8, 3.9, 3.10 or 3.11 and python3-env, python3-pip installed.

```mdx-code-block
<Tabs>
  <TabItem value="Linux" label="Linux" default>
    Run in Powershell:
    ```bash
    sudo apt install -y python3-venv python3-pip
    ```
  </TabItem>
  <TabItem value="WSL" label="WSL">
    ```bash
    sudo apt install -y python3-venv python3-pip
    ```
  </TabItem>
  <TabItem value="macOS" label="macOS">
    ```bash
    brew install python
    ```
    Refer [Installation Guide](https://docs.python-guide.org/starting/install3/osx/) if you face any issues.
  </TabItem>
</Tabs>
```

## Install Apache Airflow and Astronomer Cosmos
1. Create a new python environment to manage airflow and its dependencies. Activate the environment:
    :::note
    This will install Apache Airflow as well.
    :::

    ```bash
    python3 -m venv airflow_env
    source airflow_env/bin/activate
    pip install "astronomer-cosmos"
    ```

2. Install the Apache Airflow Teradata provider
    ```bash
    pip install "apache-airflow-providers-teradata"
    ```

3. Set the AIRFLOW_HOME environment variable.
    ```bash
    export AIRFLOW_HOME=~/airflow
    ```

## Install dbt
1. Create a new python environment to manage dbt and its dependencies. Activate the environment:
    ```bash
    python3 -m venv dbt_env
    source dbt_env/bin/activate
    ```

2. Install `dbt-teradata` and `dbt-core` modules:
    ```bash
    pip install dbt-teradata dbt-core
    ```

## Create a database

:::note
A database client connected to VantageCloud Lake is needed to execute SQL statements. [Vantage Editor Desktop](https://downloads.teradata.com/download/tools/vantage-editor-desktop), or [dbeaver](https://quickstarts.teradata.com/other-integrations/configure-a-teradata-vantage-connection-in-dbeaver.html) can be used for this purpose.
:::

Let's create the `jaffle_shop` database in the VantageCloud Lake instance with TD_OFSSTORAGE as default.

```sql
CREATE DATABASE jaffle_shop
AS DEFAULT STORAGE = TD_OFSSTORAGE OVERRIDE ON ERROR,
PERMANENT = 120e6, -- 120MB
    SPOOL = 120e6; -- 120MB
```

## Create a database user

:::note
A database client connected to VantageCloud Lake is needed to execute SQL statements. [Vantage Editor Desktop](https://downloads.teradata.com/download/tools/vantage-editor-desktop), or [dbeaver](https://quickstarts.teradata.com/other-integrations/configure-a-teradata-vantage-connection-in-dbeaver.html) can be used to execute `CREATE USER` query.
:::

Let's create a `lake_user` user in the VantageCloud Lake instance.

```sql
CREATE USER lake_user
AS PERMANENT = 1000000,
PASSWORD = lake_user,
SPOOL = 1200000,
DEFAULT DATABASE = jaffle_shop;
```

## Grant access to user
:::note
A database client connected to VantageCloud Lake is needed to execute SQL statements. [Vantage Editor Desktop](https://downloads.teradata.com/download/tools/vantage-editor-desktop), or [dbeaver](https://quickstarts.teradata.com/other-integrations/configure-a-teradata-vantage-connection-in-dbeaver.html) can be used to execute `GRANT ACCESS` queries.
:::

Let's provide the required privileges to the user `lake_user` to manage compute clusters.

```sql
GRANT CREATE COMPUTE GROUP To lake_user;
GRANT DROP COMPUTE GROUP TO lake_user;
GRANT CREATE COMPUTE PROFILE To lake_user;
GRANT DROP COMPUTE PROFILE TO lake_user;
GRANT SELECT ON DBC TO lake_user;
GRANT ALL ON jaffle_shop TO lake_user;
```

## Setup dbt project

1. Clone the jaffle_shop repository and cd into the project directory:
    ```bash
    git clone https://github.com/Teradata/jaffle_shop-dev.git jaffle_shop
    ```
2. Make a new folder, dbt, inside $AIRFLOW_HOME/dags folder. Then, copy/paste jaffle_shop dbt project into $AIRFLOW_HOME/dags/dbt directory
    ```bash
    mkdir -p $AIRFLOW_HOME/dags/dbt/
    cp -r jaffle_shop $AIRFLOW_HOME/dags/dbt/
    ```

## Configure Apache Airflow
1. Switch to virtual environment where Apache Airflow was installed at [Install Apache Airflow and Astronomer Cosmos](#install-apache-airflow-and-astronomer-cosmos)
    ```bash
    source airflow_env/bin/activate
    ```

2. Configure the listed environment variables to activate the test connection button, preventing the loading of sample DAGs and default connections in Airflow UI.
    ```bash
    export AIRFLOW__CORE__TEST_CONNECTION=Enabled
    export AIRFLOW__CORE__LOAD_EXAMPLES=false
    export AIRFLOW__CORE__LOAD_DEFAULT_CONNECTIONS=false
    ```

3. Define the path of jaffle_shop project as an environment variable `dbt_project_home_dir`.
    ```bash
    export dbt_project_home_dir=$AIRFLOW_HOME/dags/dbt/jaffle_shop
    ```

4. Define the path to the virtual environment where dbt-teradata was installed as an environment variable `dbt_venv_dir`.
    ```bash
    export dbt_venv_dir=/../../dbt_env/bin/dbt
    ```
    :::note
    You might need to change `/../../` to the specific path where the `dbt_env` virtual environment is located.
    :::

## Start Apache Airflow web server
1. Run airflow web server
    ```
    airflow standalone
    ```
2. Access the airflow UI. Visit https://localhost:8080 in the browser and log in with the admin account details shown in the terminal.
    ![Airflow Password](../images/airflow-console-password.png)

## Define a connection to VantageCloud Lake in Apache Airflow

1. Click on Admin - Connections
2. Click on + to define new connection to Teradata VantageCloud Lake instance.
3. Define new connection with id `teradata_lake` with Teradata VantageCloud Lake instance details.
    * Connection Id: teradata_lake
    * Connection Type: Teradata
    * Database Server URL (required): Teradata VantageCloud Lake instance hostname  or IP to connect to.
    * Database: jaffle_shop
    * Login (required): lake_user
    * Password (required): lake_user

## Define DAG in Apache Airflow
Dags in airflow are defined as python files. The dag below runs the dbt transformations defined in the `jaffle_shop` dbt project using VantageCloud Lake compute clusters. Copy the python code below and save it as `airflow-vcl-compute-clusters-manage.py` under the directory $AIRFLOW_HOME/files/dags.

```python
from datetime import datetime
from airflow import DAG
from airflow.providers.teradata.operators.teradata_compute_cluster import (
        TeradataComputeClusterDecommissionOperator,
        TeradataComputeClusterProvisionOperator,
        TeradataComputeClusterResumeOperator,
        TeradataComputeClusterSuspendOperator,
    )
from airflow.providers.teradata.operators.teradata import TeradataOperator
from cosmos import DbtTaskGroup, ProjectConfig, ProfileConfig, ExecutionConfig
from cosmos.profiles import TeradataUserPasswordProfileMapping

import os

PATH_TO_DBT_VENV = f"{os.environ['dbt_venv_dir']}"
PATH_TO_DBT_PROJECT = f"{os.environ['dbt_project_home_dir']}"

execution_config = ExecutionConfig(
    dbt_executable_path=PATH_TO_DBT_VENV,
)
profile_config = ProfileConfig(
    profile_name="generated_profile",
    target_name="dev",
    profile_mapping=TeradataUserPasswordProfileMapping(
        conn_id="teradata_lake",
    ),
)
with DAG(
    dag_id="explore_airflow_compute_cluster_operator",
    max_active_runs=1,
    max_active_tasks=10,
    catchup=False,
    start_date=datetime(2024, 1, 1),
    default_args={"teradata_conn_id": "teradata_lake"},

) as dag:
    # provision compute cluster with given configuration
    compute_cluster_provision_operation = TeradataComputeClusterProvisionOperator(
        task_id="compute_cluster_provision_operation",
        compute_profile_name="dbt_transformation_profile",
        compute_group_name="dbt_transformation_group",
        timeout=20,
        query_strategy="STANDARD",
        compute_map="TD_COMPUTE_XSMALL",
        compute_attribute="MIN_COMPUTE_COUNT(1) MAX_COMPUTE_COUNT(5) INITIALLY_SUSPENDED('FALSE')",
    )
    # assign dbt_transformation_group as default group to lake_user
    assign_compute_group_user = TeradataOperator(
        task_id="assign_compute_group_user",
        sql=r"""
        MODIFY USER lake_user
        AS COMPUTE GROUP = dbt_transformation_group;
        """,
    )

    # run dbt transformation defined in dbt jaffle_shop project
    transform_data = DbtTaskGroup(
          group_id="transform_data",
          project_config=ProjectConfig(PATH_TO_DBT_PROJECT),
          profile_config=profile_config,
          execution_config=execution_config,
          default_args={"retries": 2},
      )
    # decommission compute cluster
    compute_cluster_decommission_operation = TeradataComputeClusterDecommissionOperator(
        task_id="compute_cluster_decommission_operation",
        compute_profile_name="dbt_transformation_profile",
        compute_group_name="dbt_transformation_group",
        delete_compute_group=True,
    )
    # remove compute group for user
    remove_compute_group_from_user = TeradataOperator(
        task_id="remove_compute_group_from_user",
        sql=r"""
        MODIFY USER lake_user
        AS COMPUTE GROUP = NULL
        """,
    )

    (
        compute_cluster_provision_operation
        >> assign_compute_group_user
        >> transform_data
        >> compute_cluster_decommission_operation
        >> remove_compute_group_from_user
    )
```

## Load DAG

When the dag file is copied to $AIRFLOW_HOME/dags, Apache Airflow displays the dag in UI under DAGs section. It will take 2 to 3 minutes to load DAG in Apache Airflow UI.

## Run DAG

Run the dag as shown in the image below.
![Run dag](../images/airflow-dag-run.png)

## Summary

In this quick start guide, we explored how to utilize Teradata VantageCloud Lake compute clusters to execute dbt transformations using Teradata compute cluster operators for Airflow.

## Further reading
* [Apache Airflow DAGs reference](https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/dags.html)
* [Teradata VantageCloud Lake Compute Clusters](https://docs.teradata.com/r/Teradata-VantageCloud-Lake/Managing-Compute-Resources/Compute-Clusters)
* [Airflow Teradata Compute Cluster Operators](https://airflow.apache.org/docs/apache-airflow-providers-teradata/stable/operators/index.html)



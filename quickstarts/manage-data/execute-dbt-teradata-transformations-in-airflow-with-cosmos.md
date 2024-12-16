---
sidebar_position: 3.5
title: Apache Airflow using Astronomer Cosmos
author: Satish Chinthanippu
email: satish.chinthanippu@teradata.com
page_last_update: July 15th, 2024
description: Execute dbt teradata transformation jobs in Apache Airflow using Astronomer Cosmos library
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics, airflow, queries, dbt, cosmos, astronomer]
---

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Execute dbt teradata transformation jobs in Apache Airflow using Astronomer Cosmos library

## Overview

This tutorial demonstrates how to install Apache Airflow on a local machine, configure the workflow to use dbt teradata to run dbt transformations using the astronomer cosmos library, and run it against a Teradata Vantage database. Apache Airflow is a task scheduling tool that is typically used to build data pipelines to process and load data. [Astronomer cosmos](https://astronomer.github.io/astronomer-cosmos/) library simplifies orchestrating dbt data transformations in Apache Airflow. Using Cosmos, allows running dbt Core projects as Apache Airflow DAGs and Task Groups with a few lines of code.
In this example, we will explain how to use astronomer cosmos to run dbt transformations in airflow against Teradata Vantage database.

:::note
Use [The Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install) on `Windows` to try this quickstart example.
:::

## Prerequisites
* Access to a Teradata Vantage instance, version 17.10 or higher.

<ClearscapeDocsNote />

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

    ```python
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
    ```
    python3 -m venv dbt_env
    source dbt_env/bin/activate
    ```
2. Install `dbt-teradata` and `dbt-core` modules:
    ```
    pip install dbt-teradata dbt-core
    ```

## Setup dbt project

1. Clone the jaffle_shop repository and cd into the project directory:
    ```
    git clone https://github.com/Teradata/jaffle_shop-dev.git jaffle_shop
    ```

2. Make a new folder, dbt, inside $AIRFLOW_HOME/dags folder. Then, copy/paste jaffle_shop dbt project into $AIRFLOW_HOME/dags/dbt directory
    ```
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
    export AIRFLOW__CORE_LOAD_DEFAULT_CONNECTIONS=false
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
    ```bash
    airflow standalone
    ```
2. Access the airflow UI. Visit https://localhost:8080 in the browser and log in with the admin account details shown in the terminal.
    ![Airflow Password](../images/execute-dbt-teradata-cosmos-airflow.png)

## Define Apache Airflow connection to Vantage

1. Click on Admin - Connections
2. Click on + to define new connection to Teradata Vantage instance.
3. Define new connection with id `teradata_default` with Teradata Vantage instance details.
    * Connection Id: teradata_default
    * Connection Type: Teradata
    * Database Server URL (required): Teradata Vantage instance hostname to connect to.
    * Database: jaffle_shop
    * Login (required): database user
    * Password (required): database user password

## Define DAG in Apache Airflow
Dags in airflow are defined as python files. The dag below runs the dbt transformations defined in the `jaffle_shop` dbt project on a Teradata Vantage system using cosmos.Copy the python code below and save it as `airflow-cosmos-dbt-teradata-integration.py` under the directory $AIRFLOW_HOME/dags.


```python
import os
from datetime import datetime

from airflow import DAG
from cosmos import DbtTaskGroup, ProjectConfig, ProfileConfig, ExecutionConfig
from cosmos.profiles import TeradataUserPasswordProfileMapping

PATH_TO_DBT_VENV = f"{os.environ['dbt_venv_dir']}"
PATH_TO_DBT_PROJECT = f"{os.environ['dbt_project_home_dir']}"


execution_config = ExecutionConfig(
    dbt_executable_path=PATH_TO_DBT_VENV,
)
profile_config = ProfileConfig(
    profile_name="generated_profile",
    target_name="dev",
    profile_mapping=TeradataUserPasswordProfileMapping(
        conn_id="teradata_default",
    ),
)
with DAG(
    dag_id="execute_dbt_transformations_with_cosmos",
    max_active_runs=1,
    max_active_tasks=10,
    catchup=False,
    start_date=datetime(2024, 1, 1),

) as dag:
      transform_data = DbtTaskGroup(
          group_id="transform_data",
          project_config=ProjectConfig(PATH_TO_DBT_PROJECT),
          profile_config=profile_config,
          execution_config=execution_config,
          default_args={"retries": 2},
      )
```

## Load DAG

When the dag file is copied to $AIRFLOW_HOME/dags, Apache Airflow displays the dag in UI under DAGs section. It will take 2 to 3 minutes to load DAG in Apache Airflow UI.

## Run DAG

Run the dag as shown in the image below.

![Run dag](../images/airflow-dag.png)

## Summary

In this quick start guide, we explored how to utilize Astronomer Cosmos library in Apache Airflow to execute `dbt transformations` against a Teradata Vantage instance.

## Further reading
* [Apache Airflow DAGs reference](https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/dags.html)
* [Benefits of Cosmos](https://astronomer.github.io/astronomer-cosmos/)
* [Teradata Cosmos Profile](https://astronomer.github.io/astronomer-cosmos/profiles/TeradataUserPassword.html)
* [Install WSL on windows](https://learn.microsoft.com/en-us/windows/wsl/install)


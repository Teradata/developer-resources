---
id: run-sample-workload
title: Run a Sample Workload
description: Run a simple workflow and learn how to use Teradata AI Unlimited.
sidebar_position: 1
tags:
  - Install AI Unlimited
  - Install using Docker
  - Load Docker Image
---

# Run a sample workload

**TA: Do we require to chunk this section? This is a simple workflow and wouldn't it be easier for users to quickly run a use case without having to navigate through multiple pages? If we are introducing connecting to an external data source, make sense to split this into smaller chunks. Examples:https://docs.databricks.com/en/getting-started/etl-quick-start.html**

**MEM: Agree--it works well as 1 topic.**

This document walks you through a simple workflow where you can use AI Unlimited and JupyterLab to:

* Deploy on-demand, scalable compute
* Connect to your external data source
* Run the workload
* Suspend the compute

## Before you begin

- Deploy and configure Teradata AI Unlimited Workspaces and JupyterLab. See xref::install-ai-unlimited-workspaces-docker.adoc[] and xref::install-ai-unlimited-interface-docker.adoc[].

- Copy and retain the following:

  - CSP environment variables from your Console. See [Environment Variables](https://docs.aws.amazon.com/sdkref/latest/guide/environment-variables.html).
  - API Key from the workspace service.

## Run your first workload

Run `%help` or `%help <command>` for details on any magic command. See xref::ai-unlimited-magic-reference.adoc[] for more details.

1. Connect to JupyterLab using the URL: http://localhost:8888 and enter the token when prompted.
2. Connect to the workspace service using the API Key.
    ```bash
    %workspaces_config host=<ip_or_hostname>, apikey=<API_Key>, withtls=F
    ```
3. Create a new project.
    :::note
    Currently, Teradata AI Unlimited supports AWS and Azure.
    :::
    ```bash
    %project_create project=<Project_Name>, env=<CSP>, team=<Project_Team>
    ```
4. **`[Optional]`** Create an authorization object to store the CSP credentials.
    Replace `ACCESS_KEY_ID`, `SECRET_ACCESS_KEY`, and `REGION` with your values.
    ```bash
    %project_auth_create name=<Auth_Name>, project=<Project_Name>, key=<ACCESS_KEY_ID>, secret=<SECRET_ACCESS_KEy>, region=<REGION>
    ```
5. Deploy an engine for the project.

    Replace the `Project_Name` to a name of your choice. The size parameter value can be small, medium, large, or extralarge. The default size is small.
    ```bash
    %project_engine_deploy name=<Project_Name>, size=<Size_of_Engine>
    ```
    The deployment process takes a few minutes to complete. On successful deployment, a password is generated.
6. Establish a connection to your project.
    ```bash
    %connect <Project_Name>
    ```
    When a connection is established, the interface prompts you for a password. Enter the password generated in the previous step.

7. Run the sample workload.
    :::note
    Make sure that you do not have tables named SalesCenter or SalesDemo in the selected database.
    ::::
    a. Create a table to store the sales center data.
      
        First, drop the table if it already exists. The command fails if the table does not exist.
    ```sql
    DROP TABLE SalesCenter;
    CREATE MULTISET TABLE SalesCenter ,NO FALLBACK ,
         NO BEFORE JOURNAL,
         NO AFTER JOURNAL,
         CHECKSUM = DEFAULT,
         DEFAULT MERGEBLOCKRATIO
         (
          Sales_Center_id INTEGER NOT NULL,
          Sales_Center_Name VARCHAR(255) CHARACTER SET LATIN NOT CASESPECIFIC)
    NO PRIMARY INDEX ;
    ```
    b. Load data into the SalesCenter table using the `%dataload` magic command.
    ```bash
    %dataload DATABASE=<roject_Name>, TABLE=SalesCenter, FILEPATH=notebooks/sql/data/salescenter.csv
    ```
    :::note
    Unable to locate the salescenter.csv file? Download the file from [GitHub Demo: Charting and Visualization Data](https://github.com/Teradata/jupyter-demos/tree/main/Getting_Started/Charting_and_Visualization/data).
    :::
    Verify that the data was inserted.
    ```sql
    SELECT * FROM SalesCenter ORDER BY 1
    ```
    c. Create a table with the sales demo data.
    ```sql
    DROP TABLE SalesDemo;
    CREATE MULTISET TABLE SalesDemo ,NO FALLBACK ,
         NO BEFORE JOURNAL,
         NO AFTER JOURNAL,
         CHECKSUM = DEFAULT,
         DEFAULT MERGEBLOCKRATIO
         (
          Sales_Center_ID INTEGER NOT NULL,
          UNITS DECIMAL(15,4),
          SALES DECIMAL(15,2),
          COST DECIMAL(15,2))
    NO PRIMARY INDEX ;
    ```
    d. Load data into the SalesDemo table using the `%dataload` magic command.
    ```bash
    %dataload DATABASE=`Project_Name`, TABLE=SalesDemo, FILEPATH=notebooks/sql/data/salesdemo.csv
    ```
    :::note
    Unable to locate the salesdemo.csv file? Download the file from [GitHub Demo: Charting and Visualization Data](https://github.com/Teradata/jupyter-demos/tree/main/Getting_Started/Charting_and_Visualization/data).
    :::
    Verify that the sales demo data was inserted successfully.
    ```sql
    SELECT * FROM SalesDemo ORDER BY sales
    ```
    Open the Navigator for your connection and verify that the tables were created. Run a row count on the tables to verify that the data was loaded.
    e. Use charting magic to visualize the result.
    Provide X and Y axes for your chart.
    ```bash
    %chart sales_center_name, sales, title=Sales Data
    ```
    f.	Drop the tables.
    ```sql
    DROP TABLE SalesCenter;
    DROP TABLE SalesDemo;
    ```
8. Back up your project metadata and object definitions in your GitHub repository.

    ```bash
    %project_backup project=<Project_Name>
    ```
9. Suspend the engine.
    ```bash
    %project_engine_suspend project=<Project_Name>
    ```

Congrats! You've successfully run your first use case in JupyterLab.

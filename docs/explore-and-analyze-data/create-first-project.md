---
id: create-first-project
title: Create your first project
description: Run a simple workflow from a Jupyter notebook.
sidebar_label: Create your first project
sidebar_position: 2
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create your first project

A project is a means to explore and analyze data from a Jupyter notebook. 

:::note
Each project has a Git repository. [Learn why](../glossary.md#project-repository).
:::

For your first project, using data we provide, you'll complete this simple workflow:

- Create the project
- Deploy the engine
- Connect to the data and run a workload
- Suspend the engine


## Before you begin

- Your AI Unlimited owner is the person at your organization who set up AI Unlimited. From your admin, get these items:

  - The IP address or  hostname of the [AI Unlimited manager](../glossary.md#ai-unlimited-manager).

  - These environment variables:   
    <Tabs>
    <TabItem value="aws" label="AWS" default>
    `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, and `AWS_SESSION_TOKEN`

    </TabItem>
    <TabItem value="azure" label="Azure">
    `ARM_SUBSCRIPTION_ID`, `ARM_CLIENT_ID`, and `ARM_CLIENT_SECRET`

    </TabItem>
    </Tabs> 

- From your profile, [get your API key](./get-api-key.md).

- To run the sample workload, you'll need the `salescenter.csv` file. Download the file from the [AI Unlimited GitHub repository](https://github.com/Teradata/ai-unlimited/tree/develop/examples/GetStarted/data), and upload it to your Amazon Simple Storage Service (S3) or Azure Blob Storage location. Or if you're using your own file, modify the example accordingly.


## Connect, and run your first workload

:::tip
Run `%help` for details on all the magic commands available in your notebook. Run `%help <command>` for details on one of them. 

Or learn about the [magic commands](./magic-commands.md) specific to AI Unlimited. 
:::

1. Connect to JupyterLab, open a notebook, and select the AI Unlimited kernel.

2. Connect to the manager.
    ```bash
    %workspaces_config host=<ip_or_hostname>, apikey=<API_Key>, withtls=T 	
    ```

3. Create the project.
    ```bash
    %project_create project=<Project_Name>, env=<Cloud_Service_Provider>
    ```
		
4. Create an object store authorization to store the cloud service provider credentials. 

    Replace `ACCESS_KEY_ID`, `SECRET_ACCESS_KEY`, and `REGION` with your values.

    ```bash
    %project_auth_create name=<Authorization_Name>, project=<Project_Name>, key=<ACCESS_KEY_ID>, secret=<SECRET_ACCESS_KEY>, region=<REGION>
    ```

5. Deploy the engine.

    The size can be small, medium, large, or extralarge. The default is small. See [AWS](http://aws.amazon.com/marketplace/pp/prodview-2srvuo3mwqlig) or [Azure](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/teradata.ai-unlimited?tab=Overview) pricing information.
    ```bash
    %project_engine_deploy name=<Project_Name>, size=<Size_of_Engine>
    ```
    The deployment process takes a few minutes. It generates a password.

6. Connect to the project.
    ```bash
    %connect <Project_Name>
    ```
    When the connection is made, provide the generated password.

7. Run the sample workload.

    :::note
    Make sure you do not have tables named SalesCenter or SalesDemo in the selected database. Replace `Authorization_Name` and the `salescenter.csv_file_location` values in the following example with your own values.
    ::::

    a. Create a table to store the sales center data. 
    ```sql
    DROP FOREIGN TABLE SalesCenter;

    CREATE MULTISET FOREIGN TABLE SalesCenter ,
    EXTERNAL SECURITY DEFINER TRUSTED <Authorization_Name>
    (
        Sales_Center_id INTEGER NOT NULL,
        Sales_Center_Name VARCHAR(255) CHARACTER SET LATIN NOT CASESPECIFIC
    )
    USING
    (
        LOCATION ('<salescenter.csv_file_location>')
        MANIFEST ('FALSE')
        ROWFORMAT  ('{"field_delimiter":",","record_delimiter":"\n","character_set":"LATIN"}')
        STOREDAS ('TEXTFILE')
        HEADER ('TRUE')
        STRIP_EXTERIOR_SPACES ('FALSE')
        STRIP_ENCLOSING_CHAR ('NONE')
    )
    NO PRIMARY INDEX;

    ```
     b. Verify that the data was inserted.
    ```sql
    SELECT * FROM SalesCenter ORDER BY 1
    ```
    c. Create a table with the sales demo data.
    ```sql
    DROP FOREIGN TABLE SalesDemo;
    CREATE MULTISET FOREIGN TABLE SalesDemo ,
    EXTERNAL SECURITY DEFINER TRUSTED <Authorization_Name>
    (
        Sales_Center_ID INTEGER NOT NULL,
        UNITS DECIMAL(15,4),
        SALES DECIMAL(15,2),
        "COST" DECIMAL(15,2)
    )
   USING
   (
       LOCATION ('<salescenter.csv_file_location>')
       MANIFEST ('FALSE')
       ROWFORMAT  ('{"field_delimiter":",","record_delimiter":"\n","character_set":"LATIN"}')
       STOREDAS ('TEXTFILE')
       HEADER ('FALSE')
       STRIP_EXTERIOR_SPACES ('FALSE')
       STRIP_ENCLOSING_CHAR ('"')
   )
   NO PRIMARY INDEX;
    ```
	d. Verify that the sales demo data was inserted successfully.
	
    ```sql
    SELECT * FROM SalesDemo ORDER BY sales
    ```
    Open the Navigator for your connection and verify that the tables were created. Run a row count on the tables to verify that the data was loaded.
	
	e. Chart the data to visualize the result.
	
    Provide X and Y axes for your chart.
	
    ```bash
    %chart sales_center_name, sales, title=Sales Data
    ```
    f.	Drop the tables.
    ```sql
    DROP TABLE SalesCenter;
    DROP TABLE SalesDemo;
    ```
	
8. Back up your project metadata and object definitions (the schema) in your Git repository.
	```bash
	%project_backup project=<Project_Name>
	```
   This backs up your project, but it does not suspend the engine.
   
9. Suspend the engine to avoid paying for unneeded engine resources.
    ```bash
    %project_engine_suspend project=<Project_Name>
    ```
   This backs up your project and suspends the engine. Typically you will not use `%project_backup` immediately followed by `%project_engine_suspend`.

Congratulations! You've run your first workload.
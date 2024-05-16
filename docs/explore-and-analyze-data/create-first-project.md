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

You'll complete this simple workflow from a Jupyter notebook:

- Deploy the engine
- Connect to your data
- Run an analytics workload
- Suspend the project

## Before you begin

Your AI Unlimited admin is the person at your organization who set up AI Unlimited.

- From your admin, get these items:

  - The IP address or  host name of the [AI Unlimited manager](/docs/glossary.md#glo-manager).

  - These environment variables:   
    <Tabs>
    <TabItem value="aws" label="AWS" default>
    `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, and `AWS_SESSION_TOKEN`

    </TabItem>
    <TabItem value="azure" label="Azure">
    `ARM_SUBSCRIPTION_ID`, `ARM_CLIENT_ID`, and `ARM_CLIENT_SECRET`

    </TabItem>
    </Tabs> 

- From your AI Unlimited profile, [get your API key](/docs/explore-and-analyze-data/get-api-key.md).

- Connect to JupyterLab, open a notebook, and select the AI Unlimited kernel.

:::note
If you don't yet have JupyterLab or the AI Unlimited kernel, see [JupyterLab installation options](/docs/advanced/jupyterlab).
:::

## Connect, and run your first workload

:::tip
Run `%help` for details on all magic commands. Run `%help <command>` for details on one of them. 

Or learn about the [magic commands](/docs/explore-and-analyze-data/magic-commands.md) specific to AI Unlimited. 
:::

1. Configure the connection to the engine.
    ```bash
    %workspaces_config host=<ip_or_hostname>, apikey=<API_Key>, withtls=T 	
	
    ```

2. Create a new project.
    ```bash
    %project_create project=<Project_Name>, env=<Cloud_Service_Provider>
    ```
		
3. Create an object store authorization to store the cloud service provider credentials. 

    Replace `ACCESS_KEY_ID`, `SECRET_ACCESS_KEY`, and `REGION` with your values.
    ```bash
    %project_auth_create name=<Authorization_Name>, project=<Project_Name>, key=<ACCESS_KEY_ID>, secret=<SECRET_ACCESS_KEY>, region=<REGION>
    ```

4. Deploy the engine.

    Replace `Project_Name`. The size can be small, medium, large, or extralarge. The default is small. **(add link to marketplace listing for pricing info)**
    ```bash
    %project_engine_deploy name=<Project_Name>, size=<Size_of_Engine>
    ```
    The deployment process takes a few minutes. It generates a password.

5. Connect to the project.
    ```bash
    %connect <Project_Name>
    ```
    When the connection is made, provide the generated password.

6. Run the sample workload.

    :::note
    Make sure you do not have tables named SalesCenter or SalesDemo in the selected database. Replace auth1 and the location values in the following example with your own values.
    ::::

    a. Create a table to store the sales center data.
      
    ```sql
    DROP FOREIGN TABLE SalesCenter;

    CREATE MULTISET FOREIGN TABLE SalesCenter ,
    EXTERNAL SECURITY DEFINER TRUSTED auth1
    (
        Sales_Center_id INTEGER NOT NULL,
        Sales_Center_Name VARCHAR(255) CHARACTER SET LATIN NOT CASESPECIFIC
    )
    USING
    (
        LOCATION ('/s3/s3.amazonaws.com/tioce/data/salescenter.csv')
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
    EXTERNAL SECURITY DEFINER TRUSTED auth1
    (
        Sales_Center_ID INTEGER NOT NULL,
        UNITS DECIMAL(15,4),
        SALES DECIMAL(15,2),
        "COST" DECIMAL(15,2)
    )
   USING
   (
       LOCATION ('/s3/s3.amazonaws.com/tioce/data/salesdemo.csv')
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
	
7. Back up your project metadata and object definitions in your Git repository.

	```bash
	%project_backup project=<Project_Name>
	```

8. Suspend the engine to avoid paying for unneeded engine resources.
    ```bash
    %project_engine_suspend project=<Project_Name>
    ```

You're done! You've run your first workload.
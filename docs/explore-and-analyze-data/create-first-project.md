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

***this page is WIP***

You'll complete this simple workflow:

- Deploy the engine
- Connect to your data
- Run an analytics workload
- Suspend the project

## Before you begin

- From your AI Unlimited admin, get these items:

	- The ip or host name for the AI Unlimited manager

	- These [AWS](https://docs.aws.amazon.com/sdkref/latest/guide/environment-variables.html) or [Azure](https://github.com/paulbouwer/terraform-azure-quickstarts-samples/blob/master/README.md#azure-authentication) environment variables 

  <Tabs>
    <TabItem value="aws" label="AWS" default>
    `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, and `AWS_SESSION_TOKEN`

  </TabItem>
    <TabItem value="azure" label="Azure">
    `ARM_SUBSCRIPTION_ID`, `ARM_CLIENT_ID`, and `ARM_CLIENT_SECRET`

  </TabItem>
    </Tabs> 

- Access the AI Unlimited manager and get your API key. 

	***we can include the how-to here for getting the api key - will probably also have a separate topic or put instrucs on the parent page***

- Connect to JupyterLab, open a notebook, and select the AI Unlimited kernel.

:::note
If you don't have JupyterLab or the AI Unlimited kernel, see [Jupyter installaton options](/docs/advanced/jupyterlab).
:::

## Connect, and run your first workload

:::tip
Run `%help` or `%help <command>` for details on all magic commands or any one of them. Or learn about the [magic commands](/docs/explore-and-analyze-data/magic-commands.md) provided by the AI Unlimited kernel specifically. 
:::

1. Connect to the [AI Unlimited manager](/docs/glossary.md#glo-manager).
    ```bash
    %workspaces_config host=<ip_or_hostname>, apikey=<API_Key>, withtls=F 	
    ```
	***we are aware of the horizonal scroll bar vs. copy icon issue - styles are being tweaked***
	
	***Assume no TLS for the sake of this sample workflow? But tell them what it means (very briefly).*** **TA: the workflow section need not provide details of the variables as they are explained in detail in the magic commands**
	
2. Create a new project.
    ```bash
    %project_create project=<Project_Name>, env=<CSP>, team=<Project_Team>
    ```
	
	***They can name it what they want.***
	
	***Would be good to have text that spells out CSP.***
	
	***But what about the project team in this simple workflow? Do we expect a team to use it? But... I still need to learn about the "team" concept.***
	
	***Maybe we can say this creates a repository in their Git provider account.***
	
3. Optionally, create an object store authorization to store the [CSP](/docs/glossary.md#glo-cloud-service-provider) credentials. 

	***Normally they create a shared authorization or one for a single user. In this sample workflow, maybe this is not optional? Otherwise, they'd have to use SQL to create an authoriation for themselves?***
    **TA: Auth is required only for external connectivity, in this example as there is no external connection, this step is optional**


    Replace `ACCESS_KEY_ID`, `SECRET_ACCESS_KEY`, and `REGION` with your values.
    ```bash
    %project_auth_create name=<Auth_Name>, project=<Project_Name>, key=<ACCESS_KEY_ID>, secret=<SECRET_ACCESS_KEy>, region=<REGION>
    ```
	
	***These look like AWS. Do AWS-Azure tabs?***
	
4. Deploy the engine.

    Replace the `Project_Name`. ***(didn't they already name it?)*** The size can be small, medium, large, or extralarge. The default is small.
    ```bash
    %project_engine_deploy name=<Project_Name>, size=<Size_of_Engine>
    ```
    The deployment process takes a few minutes. It generates a password.
6. Connect to the project.
    ```bash
    %connect <Project_Name>
    ```
    When the connection is made, provide the generated password. ***how?***

7. Run the sample workload.

    **TA: this example will change**
	***I don't yet understand all this, where the data comes from, etc.***
    **TA: Idea is to create a table and then load data from an Excel file or from the sample repo within Jupyter (FILEPATH=notebooks/sql/data/salescenter.csv)**
    ***when did they select a DB in their data lake? something to do with the object authorization magic command?***
	**TA: No, this is data load from an Excel***
	***is the idea that they might coincidentally happen to have tables with those names in their DB - or maybe someone in their org ran this sample workload prior?***
    ***TA: idea is to create new tables, users can create by themselves**
    :::note
    Make sure you do not have tables named SalesCenter or SalesDemo in the selected database. 
    ::::
    a. Create a table to store the sales center data.
      
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
    %dataload DATABASE=<Project_Name>, TABLE=SalesCenter, FILEPATH=notebooks/sql/data/salescenter.csv
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
	
	***safe to assume they know how? probably not our job to teach them***
    
    e. Use charting magic to visualize the result.
	
	***safe to assume they know how? probably not our job to teach them***
	
    Provide X and Y axes for your chart.
	
    ```bash
    %chart sales_center_name, sales, title=Sales Data
    ```
	
    f.	Drop the tables.
	
    ```sql
    DROP TABLE SalesCenter;
    DROP TABLE SalesDemo;
    ```
	
8. Back up your project metadata and object definitions in your Git repository.

	***Is "metadata" too ENG-ish for a new data scientist? Should we say "data object definitions"?***

	```bash
	%project_backup project=<Project_Name>
	```

9. Suspend the engine to avoid incurring charges for unneeded engine resources.
    ```bash
    %project_engine_suspend project=<Project_Name>
    ```

You're done! You've run your first workload.
---
sidebar_position: 3
author: Janeth Graziani
email: Janeth.graziani@teradata.com
page_last_update: January 11, 2024
description: Learn how to run VantageCloud Lake Demos using Jupyter notebooks in Visual Studio Code. 
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, business intelligence, enterprise analytics, jupyter, teradatasql, ipython-sql, teradatasqlalchemy, vantagecloud, vantagecloud lake, public internet, visual studio code, IDE, data analytics, data science]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TabsMDX from '../_partials/tabs.mdx';

# Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Visual Studio Code

## Overview
Visual Studio Code is a popular open-source code editor compatible with Windows, MacOs, and Linux. Developers use this Integrated Development Environment (IDE) for coding, debugging, building, and deploying applications. In this quickstart guide, we launch VantageCloud Lake Jupyter notebook demos within Visual Studio Code. 

![vscode.png](./images/vantagecloud-lake-demos-visual-studio-code/vscode.png)

## Prerequisites
Before you begin, ensure you have the following prerequisites in place:

* [Docker Desktop](https://www.docker.com/products/docker-desktop) installed
* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) installed
  * Required to download git repo from https://github.com/Teradata/lake-demos.git
* [Visual Studio Code](https://code.visualstudio.com/download) installed
* A Teradata VantageCloud Lake account with organization URL and login details from the Teradata welcome letter
  * Once logged in follow these [instructions](getting-started-with-vantagecloud-lake.md#create-an-environment) to create a VantageCloud Lake Enviorment

## Clone VantageCloud Lake Demo repository 
Begin by cloning the GitHub repository and navigating to the project directory:

``` bash
git clone https://github.com/Teradata/lake-demos.git
cd lake-demos
```

## Start a Jupyterlab docker container with Teradata Jupyter Exensions
To launch Teradata VantageCloud Lake demos, we need the [Teradata Jupyter Extensions for Docker](https://hub.docker.com/r/teradata/jupyterlab-extensions). These extensions provide the SQL ipython kernel, utilities to manage connections to Teradata, and the database object explorer to make you productive while interacting with the Teradata database.   

Next, start a container and bind it to the existing lake-demos directory. Choose the appropriate command based on your operating system: 

:::note
For Windows, run the docker command in PowerShell.
:::


<TabsMDX />

 

Take note of the resulting URL and token; you’ll need them to establish the connection from Visual Studio Code.
![terminal.png](./images/vantagecloud-lake-demos-visual-studio-code/terminal.png)



## Visual Studio Code Configuration
Open `lake-demos` project directory in Visual Studio Code. The repository contains the following project tree: 

LAKE_DEMOS

* [UseCases](https://github.com/Teradata/lake-demos/tree/main/UseCases)
  * [0_Demo_Environment_Setup.ipynb](https://github.com/Teradata/lake-demos/blob/main/0_Demo_Environment_Setup.ipynb)
  * [1_Load_Base_Demo_Data.ipynb](https://github.com/Teradata/lake-demos/blob/main/1_Load_Base_Demo_Data.ipynb)
  * [Data_Engineering_Exploration.ipynb](https://github.com/Teradata/lake-demos/blob/main/Data_Engineering_Exploration.ipynb)
  * [Data_Science_OAF.ipynb](https://github.com/Teradata/lake-demos/blob/main/Data_Science_OAF.ipynb)
  * [Demo_Admin.ipynb](https://github.com/Teradata/lake-demos/blob/main/Demo_Admin.ipynb)
* [vars.json file](https://github.com/Teradata/lake-demos/blob/main/vars.json)




### Edit vars.json file 
Edit the [**vars.json**](https://github.com/Teradata/lake-demos/blob/main/vars.json) file to include the required credentials to run the demos 


| **Variable** | **Value** |
|--------------|-----------|
| **"host"**     | Public IP value from your VantageCloud Lake environment |
| **"UES_URI"**  | Open Analytics from your VantageCloud Lake environment |
| **"dbc"**      | The master password of your VantageCloud Lake environment. |



To retrieve a Public IP address and Open Analytics Endpoint follow these [instructions](getting-started-with-vantagecloud-lake.md#create-an-environment)

:::info
Change passwords in the vars.json file. You'll see that in the sample vars.json, the passwords of all users are defaulted to "password", this is just for matters of the sample file, you should change all of these password fields to strong passwords, secure them as necessary and follow other password management best practices.
:::

### Modify path to vars.json in UseCases directory

In the UseCases directory, all .ipynb files use the path ../../vars.json to load the variables from the JSON file when working from Jupyterlab. To work directly from Visual Studio Code, update the code in each .ipynb to point to vars.json.

The quickest way to make these changes is via search feature on the left vertical  menu. Search for 

```bash
'../../vars.json'
```

and replace with:

```bash
'vars.json'
```

![search](./images/vantagecloud-lake-demos-visual-studio-code/search.png)

![replace](./images/vantagecloud-lake-demos-visual-studio-code/replace.png)

### Configuring Jupyter Kernels
Open **0_Demo_Environment_Setup.ipynb** and click on Select Kernel at the top right corner of Visual Studio Code. 

If you have not installed Jupyter and Python extensions, Visual Studio Code will prompt you to install them. These extensions are necessary for Visual Studio Code to detect Kernels. To install them, select 'Install/Enable suggested extensions for Python and Jupyter.'

![select.kernel.png](./images/vantagecloud-lake-demos-visual-studio-code/select.kernel.png)

Once you've installed the necessary extensions, you'll find options in the drop-down menu. Choose **Existing Jupyter Kernel**.

![existing.kernel.png](./images/vantagecloud-lake-demos-visual-studio-code/existing.kernel.png)

Enter the URL of the running Jupyter Server and press enter.
```bash
http://localhost:8888
```
![server.url.png](./images/vantagecloud-lake-demos-visual-studio-code/server.url.png)

Enter the token found in your terminal when mounting files to the Docker container and press Enter.

![server.password.png](./images/vantagecloud-lake-demos-visual-studio-code/server.password.png)

Change Server Display Name (Leave Blank To Use URL)

![server.display.name.png](./images/vantagecloud-lake-demos-visual-studio-code/server.display.name.png)

You now have access to all the Teradata Vantage extension kernels. Select Python 3 (ipykernel) from the running Jupyter server.

![python.kernel.png](./images/vantagecloud-lake-demos-visual-studio-code/python.kernel.png)

### Run demos
Execute all the cells in *0_Demo_Environment_Setup.ipynb* to setup your environment. Followed by *1_Demo_Setup_Base_Data.ipynb* to load the base data required for demo.
To learn more about the demo notebooks, go to [Teradata Lake demos](https://github.com/Teradata/lake-demos) page on GitHub.

![demoenvsetup.png](./images/vantagecloud-lake-demos-visual-studio-code/demoenvsetup.png)

## Summary 
In this quickstart guide, we configured Visual Studio Code to access VantageCloud Lake demos using Jupyter notebooks. 

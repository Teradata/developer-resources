---
id: collaborate-project
title: Collaborate on a project
description: Learn how to access a project as a collaborator
sidebar_position: 3
sidebar_label: Collaborate on a project
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Collaborate on a project

A project is a means to explore and analyze data from a Jupyter notebook. 

:::note
Each project has a Git repository. [Learn why](/docs/glossary.md#project-repository).
:::

A project owner might [add you to a project](../manage-ai-unlimited/add-collaborators.md) as a collaborator. To contribute, you'll need to access the project from a Jupyter notebook.


## Before you begin

- From the project owner, get these items:
  - The IP address or  hostname of the [AI Unlimited manager](/docs/glossary.md#ai-unlimited-manager)
  - The project name

- From your profile, [get your API key](/docs/explore-and-analyze-data/get-api-key.md). 

:::tip
Run `%help` for details on all the magic commands available in your notebook. Run `%help <command>` for details on one of them. 

Or learn about the [magic commands](/docs/explore-and-analyze-data/magic-commands.md) specific to AI Unlimited. 
:::


## Access the project

1. Connect to JupyterLab, open a notebook, and select the AI Unlimited kernel.

2. Connect to the manager.
    ```bash 
    %workspaces_config host=<ip_or_hostname>, apikey=<API_Key>, withtls=<T|F>
    ```

3. Find out if the engine is deployed.
    ```bash 
    %project_engine_list project=<Project_Name>
    ```

4. If the engine is not deployed, deploy it.
    <Tabs>
    <TabItem value="aws1" label="AWS">

    ```bash 
    %project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore-<true|false>, prefixlist=<Prefix_List>, securitygroups=<Security_Group>, cidrs=<CIDR>, tags=<Tags>, iamrole=<IAM_Role>, roleprefix=<Role_Prefix>, permissionboundary=<Permission_Boundary>
    ```

    </TabItem>
    <TabItem value="azure" label="Azure">

    ```bash 
    %project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore=<true|false>, network=<Network>, keyvault=<Key_Vault>, keyvaultresourcegroup=<>, networkresourcegroup=<>
    ```
    </TabItem>
    </Tabs>

	If you don't specify the number of nodes, one node will be deployed.

5. Get your password for the engine
    ```bash
    %project_user_list project=<Project_Name>
    ```

6. Refresh the connection to include your notebook.
    ```bash 
    %project_connection_add project=<Project_Name>
    ```

7. Connect to the project, and provide your password.
    ```bash
    %connect <Project_Name>
    ```

You're all set! Now you can contribute to the project.



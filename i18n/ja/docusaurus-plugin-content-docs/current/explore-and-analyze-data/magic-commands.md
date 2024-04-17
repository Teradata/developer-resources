---
id: magic-commands
title: Magic commands 
description: Learn about the AI Unlimited magic commands you can use in your project in your Jupyter notebook.
sidebar_label: Magic commands
sidebar_position: 5
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 魔法のコマンド

***Keep, per Jack, even though command descriptions are in the notebook. In the notebook, the general commands and AI Unlimited commands are all together. So it's good for users to see a list of AI-Unlimited-specific ones. The kernel is in dev. Need to update this topic.***

AI Unlimited JupyterLab supports these magic commands in addition to the existing Teradata SQL Kernel magic commands. See [Teradata JupyterLab Getting Started Guide](https://github.com/Teradata/jupyterextensions/blob/master/notebooks/sql/GettingStarted.ipynb). ***Probably don't want to refer to that kernel, wrong product.***

## %workspaces_config

**Description**: One-time configuration to bind with the workspace service.

**Usage**:
```bash 
%workspaces_config host=<RPC_Service_URL>, apikey=<Workspace_API_Key>, withtls=<T|F>
```
Where:

- host:  Name or IP address of the engine service.

- apikey: API Key value from the workspace service **Profile** page.

- **`[Optional]`** withTLS: If False (F), the default client-server communication does not use TLS.

Output:
```
Workspace configured for host=<RPC_Service_URL>
```

## %project_create

**Description**: Create a new project. This command also creates a new repository with the project name in your GitHub account. The configurations are stored in the **engine.yml** file.

**Usage**:
```bash
%project_create project=<Project_Name>, env=<CSP>, team=<Project_Team>
```
Where:

- project: Name of the project to be created.

- env: Cloud environment where the project is hosted. The value can be aws, azure, gcp, or vsphere. For the current release, AWS and Azure are supported.

- **`[Optional]`** team: Name of the team collaborating on the project.

**Output**:
```
Project `Project_Name` created
```

## %project_delete

**Description**: Delete a project.

:::warning
Running this command removes the GitHub repository containing the objects created using Teradata AI Unlimited.
:::

**Usage**:
```bash 
%project_delete project=<Project_Name>, team=<Project_Team>
```

Where:

- project: Name of the project to be deleted.

- **`[Optional]`** team: Name of the team collaborating on the project.

**Output**:
```Project `Project_Name` deleted```

## %project_list

**Description**: List the details of the projects.

Use the project parameter to get the details of a specific project. All the projects are listed if you run the command without any parameters.

**Usage**:
```bash
%project_list project=<Project_Name>
```
Where:

- project: Name of the project to be listed.

**Output**:
```
Insert Code
```

## %project_auth_create

**Description**: Create an authorization object to store object store credentials.

You must create the authorization object before deploying the engine. The authorization details are retained and are included while redeploying the project. Optionally, you can create authorizations manually using the `CREATE AUTHORIZATION` SQL command after deploying the engine. In this case, the authorization details are not retained.

**Usage**:
```bash 
%project_auth_create project=<Project_Name>, name=<Auth_Name>, key=<Auth_Key>, secret=<Auth_Secret>, region=<ObjectStore_Region>, token=<Session_Token>, role=<Role>, ExternalID=<External_ID>
```
Where:

- project: Name of the project.

- name:	Authorization name for the object store.

- key: Authorization key of the object store.

- secret: Authorization secret access ID of the object store.

- region: Region of the object store; local for the local object store.

- **`[Optional]`** token: Session token for the object store access.

- **`[Optional]`** role: IAM users or service account to access AWS resources from an AWS account by assuming a role and its entitlements. The owner of the AWS resource defines the role. For example: arn:aws:iam::00000:role/STSAssumeRole.

- ExternalID: External ID used to access object store.

**Output**:
```
Authorization 'name' created
```

## %project_auth_update

**Description**: Update an object store authorization.

**Usage**:

```bash 
%project_auth_update project=<Project_Name>, name=<Auth_Name>, key=<Auth_Key>, secret=<Auth_Secret>, region=<ObjectStore_Region>, token=<Session_Token>, role=<Role>, ExternalID=<External_ID>

```
Where:

- project: Name of the project.
- name: Authorization name for the object store.
- key: Authorization key of the object store.
- **`[Optional]`** secret: Authorization secret access ID of the object store.
- **`[Optional]`**region: Region of the object store; local for the local object store.
- **`[Optional]`** token: Session token for the object store access.
- **`[Optional]`** role: IAM users or service account to access AWS resources from an AWS account by assuming a role and its entitlements. The owner of the AWS resource defines the role. For example: arn:aws:iam::00000:role/STSAssumeRole.
- ExternalID: External ID used to access object store.

**Output**:
```
Authorization 'name' updated
```

## %project_auth_delete

**Description**: Remove an object store authorization.

**Usage**:
```bash
%project_auth_delete project=<Project_Name>, name=<Auth_Name>
```
Where:

- project: Name of the project.
- name:	Authorization name for the object store.

**Output**:
```
Authorization 'name' deleted
```

## %project_auth_list

**Description**: List object store authorizations that are created for a project.

**Usage**:
```bash 
%project_auth_list project=<Project_Name>

```
Where:

- project: Name of the project.

**Output**:
```Insert Code Snippet```

## %project_engine_deploy

**Description**: Deploy an engine for the project. The deployment process takes a few minutes to complete. On successful deployment, a password is generated.

**Usage**:
```bash 
%project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, secgroups=<Security_Group>, cidrs=<CIDR>
```
Where:

- project:	Name of the project.
- size: Size of the engine. The value can be:

  - small
  - medium
  - large
  - extralarge

- **`[Optional]`** node: Number of engine nodes to be deployed. The default value is 1.
- **`[Optional]`** subnet: Subnet used for the engine if there are no default values from the service.
- **`[Optional]`** region: Region used for the engine if there are no default values from service.
- **`[Optional]`** secgroups: List of security groups for the VPC in each region. If you don't specify a security group, the engine is automatically associated with the default security group for the VPC.
- **`[Optional]`** cidr: List of CIDR addresses used for the engine.

**Output**:
```
Started deploying.
Success: Compute Engine setup, look at the connection manager
```

## %project_engine_suspend

**Description**: Stop the engine after you're done with your work.

**Usage**:
```bash 
%project_engine_suspend <Project_Name>
```
Where:

- project: Name of the project.

**Output**:
```
Started suspend. Success: connection removed
Success: Suspending Compute Engine
```

## %project_engine_list

**Description**: View the list of engines deployed for your project.

**Usage**:
```bash 
%project_engine_list project=<Project_Name>
```
Where:

- project: Name of the project.

**Output**:
```Insert Code Snippet```

## %project_user_list

**Description**: View the list of collaborators assigned to the project.

**Usage**:
```bash
%project_user_list project=<Project_Name>
```

Where:

- `*[Optional]*` project: Name of the project.

**Output**:
```Insert Code Snippet```

## %project_backup

**Description**: Back up your project metadata and object definition inside the engine.

**Usage**:
```bash
%project_backup project=<Project_Name>
```
Where:

- project:	Name of the project.

**Output**:
```
Backup of the object definitions created
```

## %project_restore

**Description**: Restore your project metadata and object definition from your GitHub or GitLab repository.

**Usage**:
```bash 
%project_restore project=<Project_Name>, gitref=<Git_Reference>
```
Where:

- project:	Name of the project.
- `*[Optional]*` gitref: Git reference.

**Output**:
```
Restore of the object definitions done
```

## %help

**Description**: View the list of magics provided with AI-Unlimited-Teradata SQL CE Kernel.

**Usage**:
```bash
%help
```
Additionally, you can see detailed help messages per command.

**Usage**:
```bash 
%help `command`
```
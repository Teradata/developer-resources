---
id: magic-commands
title: Magic commands 
description: Learn about the AI Unlimited magic commands (**%magic_command**) asdf you can use in your project in your Jupyter notebook.
sidebar_label: Magic commands
sidebar_position: 5
pagination_prev: null
pagination_next: null
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Magic commands

JupyterLab with the AI Unlimited kernel supports these magic commands in addition to the existing Teradata SQL kernel magic commands. 

## %workspaces_config

**Description**: Create configuration for the AI Unlimited engine connectivity.

**Usage**:
```bash 
%workspaces_config host=<ip_or_hostname>, apikey=<API_Key>, withtls=<T|F>
```
Where:

- host:  Name or IP address of the engine service.

- apikey: API Key value from the AI Unlimited setup **Profile** page.

- **`[Optional]`** withTLS: If False (F), the default client-server communication does not use TLS.

Output:
```
Workspace configured for host=<ip_or_hostname>
```

## %project_create

**Description**: Create a new project. This command also creates a new repository with the project name in your Git account. The configurations are stored in the **engine.yml** file.

**Usage**:
```bash
%project_create project=<Project_Name>, env=<Cloud_Service_Provider>, team=<Project_Team>
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
Running this command removes the Git repository containing the objects created using AI Unlimited.
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

**Description**: List the details of a project.

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
%project_auth_create project=<Project_Name>, name=<Authorization_Name>, key=<Authorization_Key>, secret=<Authorization_Secret>, region=<ObjectStore_Region>, token=<Session_Token>
```
Where:

- project: Name of the project.

- name:	Authorization name for the object store.

- key: Authorization key of the object store.

- **`[Optional]`** secret: Authorization secret access ID of the object store.

- **`[Optional]`** region: Region of the object store; local for the local object store.

- **`[Optional]`** token: Session token for the object store access.

- **`[Optional-AWS Only]`** role: IAM users or service account to access AWS resources from an AWS account by assuming a role and its entitlements. The owner of the AWS resource defines the role. For example: arn:aws:iam::00000:role/STSAssumeRole.

- **`[Optional-AWS Only]`** ExternalID: External ID used to access object store. This parameter is required when using the `role` parameter.

**Output**:
```
Authorization 'name' created
```

## %project_auth_update

**Description**: Update an object store authorization.

**Usage**:

```bash 
%project_auth_update project=<Project_Name>, name=<Authorization_Name>, key=<Authorization_Key>, secret=<Authorization_Secret>, region=<ObjectStore_Region>, token=<Session_Token>

```
Where:

- project: Name of the project.

- name: Authorization name for the object store.

- key: Authorization key of the object store.

- **`[Optional]`** secret: Authorization secret access ID of the object store.

- **`[Optional]`** region: Region of the object store; local for the local object store.

- **`[Optional]`** token: Session token for the object store access.

- **`[Optional-AWS Only]`** role: IAM users or service account to access AWS or Azure resources from a CSP account by assuming a role and its entitlements. The owner of the AWS or Azure resource defines the role. For example: arn:aws:iam::00000:role/STSAssumeRole.

- **`[Optional-AWS Only]`** ExternalID: External ID used to access object store. This parameter is required when using the `role` parameter.

**Output**:
```
Authorization 'name' updated
```

## %project_auth_delete

**Description**: Remove an object store authorization.

**Usage**:
```bash
%project_auth_delete project=<Project_Name>, name=<Authorization_Name>
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
```bash
| AUTH NAME           | ACCESS KEY  | SECRET  | 
|---------------------|-------------|---------|
| <Authorization_Name>| <ACCESS_KEY>| <SECRET>| 
```

## %project_engine_deploy

**TA:The syntax doesn't list Subnet, region, and restore. What are the possible values for the restore param? Also, could you help with the Azure-Param: keyvaultresourcegroup and networkresourcegroup? Couldn't find much info in the Azure doc set.**

**Description**: Deploy an engine for the project. The deployment process takes a few minutes to complete. On successful deployment, a password is generated.

**Usage**:

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

<Tabs>
<TabItem value="aws1" label="AWS">

- **`[Optional]`** prefixlist: The collection of CIDR blocks that define a set of IP address ranges that require the same policy enforcement. It is used to specify which IP addresses can communicate with an engine.

- **`[Optional]`** securitygroups: List of security groups for the VPC in each region. If you don't specify a security group, the engine is automatically associated with the default security group for the VPC.

- **`[Optional]`** cidrs: List of CIDR addresses used for the engine.

- **`[Optional]`** tags: The key-value pairs that are assigned to the engine for quick identification.

- **`[Optional]`** iamrole: The IAM Role used for the engine.

- **`[Optional]`** roleprefix: The string appended to the beginning of the IAM role assigned to the engine.

- **`[Optional]`** permissionboundary: The ARN of the IAM permissions boundary to associate with the IAM role assigned to the engine. The permissions boundary defines the maximum permissions that the role can have.

</TabItem>
<TabItem value="azure" label="Azure">

- **`[Optional]`** network: The network to which you want to deploy the engine.

- **`[Optional]`** keyvault: The Key Vault used by the engine where sensitive information such as passwords can be securely stored.

- **`[Optional]`** keyvaultresourcegroup: 

- **`[Optional]`** networkresourcegroup: 

</TabItem>
</Tabs>

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
```bash
| IP   | STATE   | REGION  | SIZE             | NODE             |
|------|---------|---------|------------------|------------------|
| <IP> | Deployed| <Region>| <Size_of_Engine> | <Number_of_Nodes>|
```

## %project_user_list

**Description**: View the list of collaborators assigned to the project in the Git repository.

**Usage**:
```bash
%project_user_list project=<Project_Name>
```

Where:

- `*[Optional]*` project: Name of the project.

**Output**:
```bash
| PROJECT ID   | USER  | PASSWORD  |
|--------------|-------|-----------|
| <Project_ID> | <User>| <Password>| 
```

## %project_backup

**Description**: Back up your project information and object definition inside the engine.

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

**Description**: Restore your project information and object definition from your Git repository.

**Usage**:
```bash 
%project_restore project=<Project_Name>, gitref=<Git_Reference>
```
Where:

- project:	Name of the project.
- `*[Optional]*` gitref: Git reference. **TA: what is the value I should provide here**

**Output**:
```
Restore of the object definitions done
```
## %project_engine_update_users

**Description**: Update users on the deployed engine. If users are added as collaborators to the Git repository after the engine is deployed, you can use this command to update and create new users for the deployed engine.

**Usage**:
```bash 
%project_engine_update_users project=<Project_Name>
```
Where:

- project:	Name of the project.

**Output**:
```
Need input
```
## %project_engine_update_auth

**Description**: Update or add new authorizations on the deployed engine without having to suspend and redeploy the engine.

**Usage**:
```bash 
%project_engine_update_auth project=<Project_Name>
```
Where:

- project:	Name of the project.


**Output**:
```
Require input
```
## %project_connection_add

**Description**: Refresh the connection for the deployed engine. Use this command to connect to the engine from another notebook without having to create a new connection manually.

**Usage**:
```bash 
%project_connection_add project=<Project_Name>
```
Where:

- project:	Name of the project.


**Output**:
```
Require input
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
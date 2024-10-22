---
id: suspend-and-restore-project
title: Suspend and restore a project
description: How to suspend and restore projects to manage costs.
sidebar_position: 3
sidebar_label: Suspend and restore a project
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Suspend and restore a project

You can suspend and restore a project as needed.


## Suspend

To avoid incurring charges for unneeded engine resources, suspend projects you're not working on.

User authorizations, object store authorizations, and data objects are saved. When you restore and redeploy the project, you can pick up where you left off.

In your notebook, run this magic command:

```bash 
%project_engine_suspend <Project_Name>
```


## Restore (redeploy)

In your notebook, run this magic command: 

<Tabs>
<TabItem value="aws1" label="AWS">

```bash 
%project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore-<true|false>, prefixlist=<Prefix_List>, securitygroups=<Security_Group>, cidrs=<CIDR>, tags=<Tags>, iamrole=<IAM_Role>, roleprefix=<Role_Prefix>, permissionboundary=<Permission_Boundary>
```
</TabItem>
<TabItem value="azure" label="Azure">

```bash 
%project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore=<true|false>, network=<Network>, keyvault=<Key_Vault>, keyvaultresourcegroup=<Key_Vault_Resource_Group>, networkresourcegroup=<Network_Resource_Group>
```
</TabItem>
</Tabs>

If you don't specify the number of nodes, one node will be deployed. 

For the restore parameter, leave the default value of true. This restores the project to the state of the latest Git commmit.

Each time the engine is deployed, a new password for connecting to the engine is generated for each user.

:::tip
Learn more about AI Unlimited [magic commands](../explore-and-analyze-data/magic-commands.md).
:::


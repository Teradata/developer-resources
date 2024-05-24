---
id: azure-account-requirements
title: Azure account requirements
description: How to prepare your Azure account for AI Unlimited installation
sidebar_label: Azure account requirements
sidebar_position: 2
pagination_prev: null
pagination_next: null
---

# Azure account requirements

Before you install AI Unlimited, address these items.


## Prepare your Azure account

- Work with your cloud admin to ensure your Azure account has the permissions needed to create the cloud resources defined in the [AI Unlimited template](https://github.com/Teradata/ai-unlimited/tree/develop/deployments/azure/templates/arm/ai-unlimited). 

- Networking requirements: Your Azure [resource group](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal) must have an [Azure Virtual Network (VNet)](https://learn.microsoft.com/en-us/azure/virtual-network/quick-create-portal) configured with a [subnet](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-subnet?tabs=azure-portal). Use an existing VNet or subnet, or create your own, depending on your account permissions. 

- If you'll need to access the manager instance to run commands or debug, you can use a [key pair](https://learn.microsoft.com/en-us/azure/virtual-machines/ssh-keys-portal) that you generate to securely connect using Secure Shell (SSH). You'll need the key pair when you [specify the instance details](/docs/install-ai-unlimited/prod-azure-portal-deploy-manager.md#specify-instance-details).


## Create the role for the manager

The manager needs a role that allows it to do the following:
- Deploy the engine.
- Create a new role for the engine (each time it deploys the engine) that allows the engine's nodes to communicate.

The `deployments` folder in the [AI Unlimited GitHub repository](https://github.com/Teradata/ai-unlimited) provided by Teradata includes a manager role ARM template and a policy sample.

	Open a terminal window, and clone the repository.

    ``` bash
    git clone https://github.com/Teradata/ai-unlimited
	```

Or use the links that follow to download what you need.

Create the role:

- If you have the permissions needed to create roles, create the role for the manager using the [role-policy](https://github.com/Teradata/ai-unlimited/tree/develop/deployments/azure/templates/arm/init/role-policy.json) ARM template. See [Create or update Azure custom roles using an ARM template](https://learn.microsoft.com/en-us/azure/role-based-access-control/custom-roles-template).

- Or share the [ai-unlimited.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/azure/policies/ai-unlimited.json) policy, which contains the permissions the manager needs, with your cloud admin so they can create the role for you.

You'll need the `RoleDefinitionId` when you [specify the instance details](/docs/install-ai-unlimited/prod-azure-portal-deploy-manager.md#specify-instance-details). 









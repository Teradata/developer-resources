---
id: azure-account-requirements
title: Azure account requirements
description: How to prepare your Azure account for AI Unlimited installation
sidebar_label: Azure account requirements
sidebar_position: 3
pagination_prev: null
pagination_next: null
---

# Azure account requirements

***(This topic is still being worked - please disregard for now.)***

- Work with your cloud admin to ensure your Azure account has permissions to create the cloud resources definined in the [AI Unlimited template](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/azure/ai-unlimited.json).

- Networking requirements: Your Azure [resource group](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal) must have an [Azure Virtual Network (VNet)](https://learn.microsoft.com/en-us/azure/virtual-network/quick-create-portal) configured with a [subnet](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-subnet?tabs=azure-portal). Use an existing VNet or subnet, or create your own, depending on your account permissions. 

***(This roll link was included, how does it fit with the context? [role](https://learn.microsoft.com/en-us/azure/role-based-access-control/custom-roles))***

- If you'll need to access the manager instance, after it is installed, to run commands or debug, you can use a [key pair](https://learn.microsoft.com/en-us/azure/virtual-machines/linux/mac-create-ssh-keys) to securely connect using Secure Shell (SSH). You'll need the key pair when you [specify the manager's stack details](/docs/install-ai-unlimited/prod-azure-portal-deploy-manager.md#azure-parms).


## Create the role required by the manager

The manager's role allows it to deploy the engine. Each time the manager deploys the engine, AI Unlimited creates a new role for the engine to enable its nodes to communicate.

***(Jack is looking into whether we provide the role or if the user has to provide it.)***

If you have the permissions needed to create roles, create the role for the manager using the [role-policy](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/azure/role-policy.json) template. (with the [ai-unlimited.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/azure/policies/ai-unlimited.json) policy?)

See [Create or update Azure custom roles using the Azure portal](https://learn.microsoft.com/en-us/azure/role-based-access-control/custom-roles-portal) for details.

You'll need the `RoleDefinitionId` when you [specify the manager's stack details](/docs/install-ai-unlimited/prod-azure-portal-deploy-manager.md#azure-parms). 

Optionally, you can share the [ai-unlimited.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/azure/policies/ai-unlimited.json) file with your cloud admin to create the custom role for you.








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

- Work with your cloud admin to ensure you have [Azure role-based access control (RBAC)](https://learn.microsoft.com/en-us/azure/role-based-access-control/overview) permissions to deploy cloud resources.

- Networking requirements: Your resource group must have an Azure Virtual Network (VNet) configured with a subnet. 
- [Resource Group](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal)
- [Vnet](https://learn.microsoft.com/en-us/azure/virtual-network/quick-create-portal)
- [Subnet](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-subnet?tabs=azure-portal)
- [role](https://learn.microsoft.com/en-us/azure/role-based-access-control/custom-roles) 

You can use your existing VNet and subnets or create your own, depending on your account permissions. 

- If you will need to access the manager instance, after it is installed, to run commands or debug, you can connect to it one of these ways:
	- Generate a [key pair](https://learn.microsoft.com/en-us/azure/virtual-machines/linux/mac-create-ssh-keys) now to securely connect using Secure Shell (SSH). You will need the key pair when you [specify the manager's stack details](/docs/install-ai-unlimited/prod-azure-portal-deploy-manager.md#azure-parms).


## Create a role with the required permissions	

***Grabbed this from the Azure Demo installation before we removed it. True for the full installation too?***

If the roles defined by your organization cannot deploy AI Unlimited ***(needs better wording--roles don't deploy)***, use the [role-policy](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/azure/role-policy.json) ARM template. This template contains permissions to create an AI Unlimited instance and grants AI Unlimited permissions to create specific IAM ***[RBAC?]*** roles and policies for the AI Unlimited engines it deploys. Optionally, you can share the [ai-unlimited](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/azure/policies/ai-unlimited.json) file with your cloud admin to create the custom role on your behalf. This file contains the subscription-level permissions required for AI Unlimited to deploy AI Unlimited engine instances within your resource groups.

***Need to look at the template - any readme.***

If you have the permissions needed to create roles, [configure the custom roles and policies](https://learn.microsoft.com/en-us/azure/role-based-access-control/custom-roles-portal) on the **Access control (IAM)** page ***(AWS term)*** from the Azure portal.

To deploy the role-policy ARM template, do the following: ***This is "documenting a third-party UI" which we are not really supposed to do.***

1. Sign in your [Azure portal](https://portal.azure.com) and select the **deploy a custom template** option. 

2. Select **Build your own template in the editor** and load the [role-policy](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/azure/role-policy.json) template.

3. When the file contents appear in the editor, select **Save**. 

4. On the **Custom deployment** page, fill in the details in the following fields: 

    - **Subscription**: The Azure subscription that you want to use. 

    - **Region**: The geographic location where you can deploy your resources. Use the location that’s closest to your working location. 

    - **Name**: The name for the role for use with the AI Unlimited instance.

5. Select **Review + Create**, and then **Create**. The template proceeds to deploy a simple network in a few minutes.  

You can view the deployment status in **Notifications**.

The **Output** tab shows the network names and `RoleDefinitionId`. You'll need these when you install AI Unlimited. 





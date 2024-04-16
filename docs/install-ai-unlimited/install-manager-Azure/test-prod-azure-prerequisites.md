---
id: test-prod-azure-prerequisites
title: Teradata - AI Unlimited - Full installation - Azure - Prerequisites
description: Learn the prerequisites for installing AI Unlimited on AWS.
sidebar_label: Before you begin
sidebar_position: 2
---

# Before you begin

## Prerequisites

Make sure you have the following: 

Make sure you have the following: 

- [Azure account](https://azure.microsoft.com) with an active subscription (Subscription ID). If you don't have an Azure subscription, create a free account. You cannot deploy AI Unlimited using an Azure Free Trial Subscription. If you have a free account, go to your profile and change your subscription to pay-as-you-go. Then, remove the spending limit, and request a quota increase for vCPUs in your region. 

- Optionally, the [Azure command-line interface (CLI)](https://learn.microsoft.com/en-us/cli/azure/get-started-with-azure-cli) if you prefer working with Azure CLI.

- [GitHub](https://github.com) or [GitLab](https://gitlab.com) account for user authentication and storing project information.

- Clone [AI Unlimited GitHub repository](https://github.com/Teradata/ai-unlimited). The **deployments** folder in the repository contains template, parameter, and policy files for deploying AI Unlimited and JupyterLab on AWS. 

Open a terminal window, and clone the repository. 

    ``` bash
    git clone https://github.com/Teradata/ai-unlimited
    ```

## Prepare your Azure account

Work with your admin to prepare your Azure account.

-  Azure account requirements 

    - Rights ***(Permissions?)*** to create Azure resources. Make sure the account deploying AI Unlimited has sufficient permissions to [create the roles](/docs/install-ai-unlimited/production/Azure/before-you-begin/prod-azure-create-custom-role.md).
	
	***Is "the account" the user who's reading this or the Azure account's ability to allow the installation of the AI Unlimited service?*** 

    - Owner permissions on the Azure subscription that you would like to use. 

- Networking requirements 

    - The resource group must have an Azure Virtual Network (VNet) configured with a subnet. You can use your existing VNet and subnets or create your own [Resource Group](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal), [Vnet](https://learn.microsoft.com/en-us/azure/virtual-network/quick-create-portal), [Subnet](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-subnet?tabs=azure-portal), and [role](https://learn.microsoft.com/en-us/azure/role-based-access-control/custom-roles) depending on your account permissions.  

- Secure shell (SSH) key pair ***Need to explain why***

    Generate a [key pair](https://learn.microsoft.com/en-us/azure/virtual-machines/linux/mac-create-ssh-keys) to securely connect to the AI Unlimited instance ***("engine"?)*** using SSH.

***For Azure, do we need equivalent content that's in AWS for 1. how to be able to more closely manage the engine and 2. load balancers?*** ***TA: Load balancer template options are not available for Azure, so Will wait for input from Jack***

***TA: For AWS, Jack had mentioned Route53 for DNS, for Azure, not sure.***

### Create a role with the required permissions	

If the roles defined by your organization cannot deploy AI Unlimited ***(needs better wording--roles don't deploy)***, use the [role-policy](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/azure/role-policy.json) ARM template. This template contains permissions to create an AI Unlimited instance and grants AI Unlimited permissions to create specific IAM ***[RBAC?]*** roles and policies for the AI Unlimited engines it deploys. Optionally, you can share the [ai-unlimited](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/azure/policies/ai-unlimited.json) file with your organization administrator to create the custom role on your behalf. This file contains the subscription-level permissions required for AI Unlimited to deploy AI Unlimited engine instances within your resource groups.

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


## Get deployment details

When you install AI Unlimited on Azure, you'll use an Azure Resource Manager (ARM) template, and you'll provide network and security details. 

If you want to, you can copy this template and send it to an admin who knows these details&mdash;to get them ahead of time. Or, get them from the Azure Portal. ***(is the portal sentence correct?)***

***These are the parms required by Azure, but the customer's org may require more. Thinking about best way to help them get those ahead of time. Can't put a table (of the full set) in a code block.***
  
	```bash
Subscription: 
Region: 
Network:
Subnet: 
Security Group:
	```

***I also see "Public Key" (would go after Region) and "Role Definition Id" (would be last). "Security Group" is not marked as required on the UI, but maybe we require it.*** ***TA: security group is important ***

***If they install JupyterLab on Azure using our template, will the values for these parms be the same?***

## Subscribe to AI Unlimited

Subscribe to AI Unlimited on your CSP's marketplace:
- Azure (link)
 
***Maybe be specific about what they're subscribing to--it's the engine image but "feels like" more than that.***
 
***What do we really need to say about this task? We should not repeat what's on the Marketplace or provide self-evident steps--unless there's a good reason to.***
 
***If they have trouble subscribing, should they contact the CSP?***
  
***Where can they see their hours consumed or upcoming bills? Anything like that to point out?***
 
***Might they want to talk with us for help selecting an instance size? Can we point them to a blog entry or the Community--for any topics related to subscribing?***
 
## Create a GitHub or GitLab OAuth app

import MyPartial from '/docs/_partials/_create-oauth-app.mdx';

<MyPartial />


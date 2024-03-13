---
id: azure-create-custom-role
title: Teradata - AI Unlimited - Create a custom role in Azure
description: Learn deploy AI Unlimited using Azure ARM from the Azure portal.
sidebar_label: Create a custom role with the required permissions	
sidebar_position: 5
tags:
  - Install AI Unlimited
  - Install on Azure
  - Demo
---
# Step 4: Create a custom role with the required permissions	

:::note
Skip this step if you have already deployed a simple resource group, role with permissions policy, and virtual network using the [resources.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/azure/resources.json) template.
:::
 
If the roles defined by your organization cannot deploy AI Unlimited, you can use the [role-policy](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/azure/role-policy.json) ARM template. This template contains permissions to create an AI Unlimited instance and grants AI Unlimited the permissions to create specific IAM roles and policies for the AI Unlimited engines it deploys. Optionally, you can share the [ai-unlimited](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/azure/policies/ai-unlimited.json) file with your organization administrator to create the custom role on your behalf. 

You can configure the custom roles and policies on the **Access control (IAM)** page from the Azure portal. For detailed instructions, see [Create or update Azure custom roles using the Azure portal](https://learn.microsoft.com/en-us/azure/role-based-access-control/custom-roles-portal).

To deploy the role-policy ARM template, do the following:

1. Log into your [Azure portal](https://portal.azure.com) and select the **deploy a custom template** option. 

2. Select **Build your own template in the editor** and load the [role-policy](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/azure/role-policy.json) template.

3. When the file contents appear in the editor, select **Save**. 

4. On the **Custom deployment** page, fill in the details in the following fields: 

    - **Subscription**: The Azure subscription that you want to use. 

    - **Region**: The geographic location where you can deploy your resources. Use the location that’s closest to your working location. 

    - **Name**: The name for the role for use with the AI Unlimited instance.

5. Select **Review + Create**, and then **Create**. The template proceeds to deploy a simple network in a few minutes.  

You can view the deployment status in **Notifications**. After the template is deployed, select the **Output** tab and note the network names and the `RoleDefinitionId`. You require these values during the AI Unlimited deployment steps. 



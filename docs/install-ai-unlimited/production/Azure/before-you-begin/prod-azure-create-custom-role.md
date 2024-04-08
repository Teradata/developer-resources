---
id: prod-azure-create-custom-role
title: Teradata - AI Unlimited - Full installation - Azure - Create a custom role
description: Learn how to create the role AI Unlimited needs to deploy the engine.
sidebar_label: Create a custom role with the required permissions	
sidebar_position: 6
---
# Create a role with the required permissions	

***Grabbed this from the Azure Demo installation before we removed it. True for the full installation too?***

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



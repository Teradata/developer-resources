---
id: azure-create-custom-role
title: Teradata - AI Unlimited - Create a custom role in Azure
description: Learn deploy AI Unlimited using Azure ARM from the Azure portal.
sidebar_label: Step 4-Create a custom role with the required permissions	
sidebar_position: 4
tags:
  - Install AI Unlimited
  - Install on Azure
  - Production
---
# Step 4: Create a custom role with the required permissions	
 
If the roles defined by your organization cannot deploy AI Unlimited and JupyterLab, you can use the [role-policy] (https://github.com/Teradata/ai-unlimited/blob/develop/deployments/azure/role-policy.json) template. The template includes the permissions needed to create an AI Unlimited instance and grants AI Unlimited the permissions to create specific IAM roles and policies for the AI Unlimited engines it deploys. 

Configure these policies in the Azure portal in the **Access control (IAM)** page. For detailed instructions, see [Create or update Azure custom roles using the Azure portal](hhttps://learn.microsoft.com/en-us/azure/role-based-access-control/custom-roles-portal).
---
id: create-azure-network
title: Teradata - AI Unlimited - Create an Azure Network using Azure ARM
description: Learn deploy AI Unlimited using Azure ARM from the Azure portal.
sidebar_label: Step 3-Create an Azure Network using ARM custom template
sidebar_position: 3
tags:
  - Install AI Unlimited
  - Install on Azure
  - Production
---

# Step 3: Create a Resource Group, Network, and Role using ARM Custom Template 

Before you can deploy an AI Unlimited and JupyterLab instances on Azure, you need to create an Azure resource group and virtual network (VNet) in which your AI Unlimited engine will run. If the required account and network prerequisites are not met, you can use the [resources.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/azure/resources.json) template to deploy a simple resource group, role with permissions policy, and virtual network. 

1. Log into your [Azure portal](https://portal.azure.com). 

2. From the Azure portal search bar, search for **deploy a custom template** and select it from the available options. 

3. Select **Build your own template in the editor**. 

4. In the bar above the editor, select **Load file** and then select the **[Resources Template](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/azure/resources.json)**. 

5. When the file contents appear in the editor, select **Save**. 

6. On the **Custom deployment** page, fill in the details in the following fields: 

    - **Subscription**: The Azure subscription that you want to use. 

    - **Region**: The geographic location where you can deploy your resources. Use the location that’s closest to your working location. 

    - **Name**: The name to use for the resources (resource group, network, subnet, and role uses this value as their name). To view naming rules and restrictions, see https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/resource-name-rules. 

    - **Location**: The location to deploy the resources in. Use the location closest to your working location. 

    - **Network Cidr**: The address range to use for the network represented in CIDR notation. The CIDR range must be between /16 and /24. The default value in the template is “10.0.0.0/16”. 

    - **Subnet Cidr**: The subnet’s address range represented in CIDR notation. The default value in the template is “10.0.0.0/24” and provides a single usable IP address in the subnet. 

7. Select **Review + Create**, and then **Create**. The template proceeds to deploy a simple network in a few minutes.  

You can view the deployment status in **Notifications**. After the template is deployed, select the **Output** tab and note the network names and the `RoleDefinitionId`. You require these values during the AI Unlimited deployment steps. 


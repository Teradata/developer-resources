---
id: create-azure-network
title: Teradata - AI Unlimited - Create an Azure Network using Azure ARM
description: Steps to create a Resource Group, Network, and Role deploy AI Unlimited in a demo environment. 
sidebar_label: Create a Resource Group, Network, and Role using ARM template
sidebar_position: 4
tags:
  - Install AI Unlimited
  - Install on Azure
  - Demo
---

# Create a Resource Group, Network, and Role using ARM Template 

Before you can deploy an AI Unlimited and JupyterLab instances on Azure, you must create an Azure resource group and virtual network (VNet) in which your AI Unlimited engine will run. If the required account and network prerequisites are not met, you can use the [resources.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/azure/resources.json) template to deploy a simple resource group, role with permissions policy, and virtual network. 

To deploy the resources.json ARM template, do the following:

**TA: I've cut short the steps **

1. Log into your [Azure portal](https://portal.azure.com) and select the **deploy a custom template** option.

2. Select **Build your own template in the editor** and load the **[Resources Template](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/azure/resources.json)**. 

3. When the file contents appear in the editor, select **Save**. 

4. On the **Custom deployment** page, fill in the details in the following fields: 

    - **Subscription**: The Azure subscription that you want to use. 

    - **Region**: The geographic location where you can deploy your resources. Use the location that’s closest to your working location. 

    - **Name**: The name to use for the resources (resource group, network, subnet, and role uses this value as their name). To view naming rules and restrictions, see https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/resource-name-rules. 

    - **Location**: The location to deploy the resources in. Use the location closest to your working location. 

    - **Network Cidr**: The address range to use for the network represented in CIDR notation. The CIDR range must be between /16 and /24. The default value in the template is “10.0.0.0/16”. 

    - **Subnet Cidr**: The subnet’s address range represented in CIDR notation. The default value in the template is “10.0.0.0/24” and provides a single usable IP address in the subnet. 

5. Select **Review + Create**, and then **Create**. The template proceeds to deploy a simple network in a few minutes.  

You can view the deployment status in **Notifications**. After the template is deployed, select the **Output** tab and note the network names and the `RoleDefinitionId`. You require these values during the AI Unlimited deployment steps. 

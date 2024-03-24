---
id: demo-azure-prepare-your-account
title: Prepare your Azure account
description: Learn about the account, networking, and DNS requirements before deploying AI Unlimited on Azure. 
sidebar_label: Prepare your AWS account 
sidebar_position: 2
---

# Prepare your Azure account

:::note
Contact your organization administrator if your account doesn’t have the required account or network permissions. 
:::

-  Azure account requirements 

    - Rights to create Azure resources. Make sure the account deploying AI Unlimited has sufficient permissions to create the roles. See [Roles and Permissions for AI Unlimited](/docs/install-ai-unlimited/demo/Azure/azure-create-custom-role.md).

    - Owner permissions on the Azure subscription that you would like to use. 

- Networking requirements 

    - The resource group must have an Azure Virtual Network (VNet) configured with a subnet. You can use your existing VNet and subnets or create your own [Resource Group](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal), [Vnet](https://learn.microsoft.com/en-us/azure/virtual-network/quick-create-portal), [Subnet](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-subnet?tabs=azure-portal), and [role](https://learn.microsoft.com/en-us/azure/role-based-access-control/custom-roles) depending on your account permissions.  




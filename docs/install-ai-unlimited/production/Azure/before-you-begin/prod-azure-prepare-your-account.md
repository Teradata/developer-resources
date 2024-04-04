---
id: prod-azure-prepare-your-account
title: Teradata - AI Unlimited - Full installation - Prepare your Azure account
description: Learn about the account, networking, and DNS requirements before deploying AI Unlimited on Azure. 
sidebar_label: Prepare your Azure account 
sidebar_position: 5
---

# Prepare your Azure account

Work with your organization administrator to make sure your Azure account is ready to install AI Unlimited.

-  Azure account requirements 

    - Rights to create Azure resources. Make sure the account deploying AI Unlimited has sufficient permissions to create the roles. See [Roles and Permissions for AI Unlimited](/docs/install-ai-unlimited/production/Azure/before-you-begin/prod-azure-create-custom-role.md).

    - Owner permissions on the Azure subscription that you would like to use. 

- Networking requirements 

    - The resource group must have an Azure Virtual Network (VNet) configured with a subnet. You can use your existing VNet and subnets or create your own [Resource Group](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal), [Vnet](https://learn.microsoft.com/en-us/azure/virtual-network/quick-create-portal), [Subnet](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-subnet?tabs=azure-portal), and [role](https://learn.microsoft.com/en-us/azure/role-based-access-control/custom-roles) depending on your account permissions.  

- Secure shell (SSH) key pair

    Generate a [key pair](https://learn.microsoft.com/en-us/azure/virtual-machines/linux/mac-create-ssh-keys) to securely connect to AI Unlimited instance using SSH.

***Search result description mentions DNS requirements--will investigate what that means.***
***TA: domain name. For AWS, Jack had mentioned Route53 for DNS, for Azure, not sure. ***


---
id: prod-azure-prepare-your-account
title: Full installation - Prepare your Azure account
description: Learn about the account, networking, and DNS requirements before deploying AI Unlimited on Azure. 
sidebar_label: Prepare your Azure account 
sidebar_position: 5
---

# Prepare your Azure account

Work with your admin to prepare your Azure account.

-  Azure account requirements 

    - Rights ***(Permissions?)*** to create Azure resources. Make sure the account deploying AI Unlimited has sufficient permissions to [create the roles](/docs/install-ai-unlimited/production/Azure/before-you-begin/prod-azure-create-custom-role.md).
	
	***Is "the account" the user who's reading this or the Azure account's ability to allow the installation of the AI Unlimited service?*** 

    - Owner permissions on the Azure subscription that you would like to use. 

- Networking requirements 

    - The resource group must have an Azure Virtual Network (VNet) configured with a subnet. You can use your existing VNet and subnets or create your own [Resource Group](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal), [Vnet](https://learn.microsoft.com/en-us/azure/virtual-network/quick-create-portal), [Subnet](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-subnet?tabs=azure-portal), and [role](https://learn.microsoft.com/en-us/azure/role-based-access-control/custom-roles) depending on your account permissions.  

- Secure shell (SSH) key pair ***Need to explain why***

    Generate a [key pair](https://learn.microsoft.com/en-us/azure/virtual-machines/linux/mac-create-ssh-keys) to securely connect to the AI Unlimited instance ***("engine"?)*** using SSH.

***For Azure, do we need equivalent content that's in AWS for 1. how to be able to more closely manage the engine and 2. load balancers?***

***TA: For AWS, Jack had mentioned Route53 for DNS, for Azure, not sure.***


---
id: prod-azure-before-you-begin
title: Before you begin
description: Learn about the prerequisites for deploying AI Unlimited on Azure.
sidebar_label: Before you begin 
sidebar_position: 1
tags:
  - Install AI Unlimited
  - Install on Azure
  - Production
---

# Before you begin

Make sure you have the following:

- Azure account: An account with an active subscription (Subscription ID). If you are an Azure Enterprise user, contact your organization administrator for access. 

   - Optionally, install and set up the [Azure Command Line Interface (CLI)](https://learn.microsoft.com/en-us/cli/azure/get-started-with-azure-cli). 

import MyPartial from '/docs/_partials/_csp-before-you-start.mdx';

<MyPartial />

- Collect Azure deployment information from your organization administrator: When deploying AI Unlimited in Azure, you need to specify details about the virtual network. Use the following template to collect the information from your organization administrator:

    ```bash
    Subscription ID: 
    Resource Group:
    Azure Region: 
    Virtual Network (VNet): 
    Subnet: 
    Network Security Group:
    Load Balancer (ALB/NLB/Not Applicable):
    RoleDefinitionId: 
    ```

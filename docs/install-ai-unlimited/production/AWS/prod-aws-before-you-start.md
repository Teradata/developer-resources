---
id: prod-aws-before-you-begin
title: Teradata - AI Unlimited - Before you begin
description: Learn about the prerequisites for deploying AI Unlimited on AWS in a production environment.
sidebar_label: Before you begin 
sidebar_position: 1
tags:
  - Install AI Unlimited
  - Install on AWS
  - Demo
---
# Before you begin

Make sure you have the following:

**TA: I don't think, we need to talk about free account in the production environment.**

- AWS account: Contact your organization administrator for access. 

import MyPartial from '/docs/_partials/_csp-before-you-start.mdx';

<MyPartial />

- Get AWS deployment information from your organization administrator: When deploying AI Unlimited in Azure, you need to specify details about the virtual network. Use the following template to collect the information from your organization administrator:

    ```bash
    Subscription ID: 
    Resource Group:
    AWS Region: 
    Virtual Network (VNet): 
    Subnet: 
    Network Security Group:
    Load Balancer (ALB/NLB/Not Applicable):
    RoleDefinitionId: 
    ```

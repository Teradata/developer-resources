---
id: demo-aws-before-you-begin
title: Before you begin
description: Learn about the prerequisites for deploying AI Unlimited on AWS.
sidebar_label: Before you begin 
sidebar_position: 1
tags:
  - Install AI Unlimited
  - Install on AWS
  - Demo
---
# Before you begin

Make sure you have the following:

- AWS account: If you don't already have an [AWS account](https://aws.amazon.com), create one by following the on-screen instructions.
    
    - If you are an AWS Enterprise user, contact your organization administrator for access. 

import MyPartial from '/docs/_partials/_csp-before-you-start.mdx';

<MyPartial />

- Collect AWS deployment information from your organization administrator: When deploying AI Unlimited in Azure, you need to specify details about the virtual network. Use the following template to collect the information from your organization administrator:

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
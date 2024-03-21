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

- AWS account:
	- If your organization doesn't already have an account, you can sign up for an [AWS Free Tier](https://aws.amazon.com/free) account.
	- Optionally, install and set up the [AWS Command-Line Interface (AWS CLI)](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html).  
     
    ***There’s content about the AWS account in Prepare your CSP account too.***
    ** TA: Removed it from Preparing your account***

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
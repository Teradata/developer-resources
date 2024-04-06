---
id: prod-aws-deployment-details
title: Teradata - AI Unlimited - Full installation - AWS - Get deployment details
description: Get some details now for quicker setup later.
sidebar_label: Get deployment details 
sidebar_position: 4
---
# Get deployment details

When you install AI Unlimited on AWS, you'll use a CloudFormation template (CFT), and you'll provide network and security details. You can get them ahead of time from your admin or the AWS Management Console.

***These are the parms required by AWS, but the customer's org may require more. Thinking about best way to help them get those ahead of time. Can't put a table (of the full set) in a code block.***

	```bash
    Subscription ID: 
    Resource Group:
    AWS Region: 
    Virtual Network (VNet): 
    Subnet: 
    Network Security Group:
    Load Balancer (ALB/NLB/Not Applicable):
    RoleDefinition Id: 
	```

***If they install JupyterLab on AWS using our template, will the values for these parms be the same?***
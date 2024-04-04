---
id: prod-aws-deployment-details
title: Teradata - AI Unlimited - Full installation - AWS - Get deployment details
description: Get some details now for quicker setup later.
sidebar_label: Get deployment details 
sidebar_position: 4
---
# Get deployment details

When you install AI Unlimited on AWS, you'll use a CloudFormation template (CFT), and you'll provide network and security details.

Copy these parameter names to get their values from someone on your organization's cloud neworking and security team. ***What is the best way to describe this team to this audience? "Cloud IT team?" "Cloud operations team"?*** 

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

Or, get these details from the AWS Management Console.

***If they install JupyterLab on AWS using our template, will the values for these parms be the same?***
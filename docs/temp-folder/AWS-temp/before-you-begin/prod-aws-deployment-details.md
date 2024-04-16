---
id: prod-aws-deployment-details
title: Teradata - AI Unlimited - Full installation - AWS - Get deployment details
description: Get some details now for quicker setup later.
sidebar_label: Get deployment details 
sidebar_position: 4
---
# Get deployment details

When you install AI Unlimited on AWS, you'll use a CloudFormation template (CFT), and you'll provide network and security details. 

If you want to, you can copy this template and send it to an admin who knows these details&mdash;to get them ahead of time. Or, get them from the AWS Management Console. ***(is the console sentence correct?)***

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
	
***I need to go back and compare these to the UI.***

***If they install JupyterLab on AWS using our template, will the values for these parms be the same?***
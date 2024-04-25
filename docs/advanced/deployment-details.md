---
id: deployment-details
title: Cloud deployment details
description: Deployment details to get ahead of time
sidebar_label: Get cloud deployment details
sidebar_position: 5
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Get cloud deployment details

***WIP***

## Get deployment details

<Tabs>
<TabItem value="aws1" label="AWS">
When you install the manager using the CloudFormation template, you provide account and network details. 

You can copy this template to get these details from an admin. Or, get them from the AWS Management Console.

	```bash
    Subscription ID: 
    Resource Group:
    AWS Region: 
    Virtual Network (VNet): 
    Subnet: 
    Network Security Group:
    RoleDefinition Id: 
	```

</TabItem>
<TabItem value="azure" label="Azure">

When you install the manager using the Azure Resource Manager (ARM) template, and you provide network and security details. 

You can copy this template to get these details from an admin. Or, get them from the Azure Portal.

	```bash
Subscription: 
Region: 
Network:
Subnet: 
Security Group:
	```

***I also see "Public Key" (would go after Region) and "Role Definition Id" (would be last). There's a slack comment.***

</TabItem>
</Tabs>


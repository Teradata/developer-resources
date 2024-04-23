---
id: before-you-begin
title: Before you begin installation
description: After you have the prerequisites, here's what to do next.
sidebar_label: Title TBD
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Title TBD

Once you have the [prerequisites](/docs/install-ai-unlimited/index.md#prerequisites), prepare for the installation.


## Subscribe to AI Unlimited

Subscribe on the [AWS Marketplace](https://aws.amazon.com/marketplace) ***replace w/link to listing***

Then return to this documentation site and continue.


## Prepare your CSP account

<Tabs>
<TabItem value="aws1" label="AWS">

- Your AWS account must have the required permissions needed to deploy the resources in the CloudFormation template. Work with your cloud administrator to set up the account with the required permissions. See [Create an IAM role and attach policies](/docs/advanced/roles-and-policies/prod-aws-permissions-policies.md).

- If you need to access or manage the AI Unlimited instance to run commands or debug, you can connect to it using one of the following methods:
	- Generate a [key pair](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) to securely connect using Secure Shell (SSH).
	- Use AWS Session Manager to connect. To enable this, when you [create the IAM role and policies](/docs/install-ai-unlimited/production/AWS/before-you-begin/prod-aws-permissions-policies.md), attach the [session-manager.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/session-manager.json) policy to the IAM role.

- If you’re using an [Application Load Balancer (ALB)](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancer-getting-started.html) or [Network Load Balancer (NLB)](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancer-getting-started.html), make sure you have permission to manage these AWS services:
	- [AWS Certificate Manager](https://docs.aws.amazon.com/acm/)&mdash;to issue a new certificate for the hosted zone ID in Route 53.
	- [AWS Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html)&mdash;to configure a custom domain name and route DNS queries to your load balancer.


</TabItem>
<TabItem value="azure" label="Azure">

-  Azure account requirements 

    - Rights ***(Permissions?)*** to create Azure resources. Make sure the account deploying AI Unlimited has sufficient permissions to [create the roles](/docs/advanced/roles-and-policies/prod-azure-create-custom-role.md).
	
    - Owner permissions on the Azure subscription that you would like to use. 

- Networking requirements 

    - The resource group must have an Azure Virtual Network (VNet) configured with a subnet. You can use your existing VNet and subnets or create your own [Resource Group](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal), [Vnet](https://learn.microsoft.com/en-us/azure/virtual-network/quick-create-portal), [Subnet](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-subnet?tabs=azure-portal), and [role](https://learn.microsoft.com/en-us/azure/role-based-access-control/custom-roles) depending on your account permissions.  

- Secure shell (SSH) key pair to access or manage the AI Unlimited instance for running commands or debugging.

    Generate a [key pair](https://learn.microsoft.com/en-us/azure/virtual-machines/linux/mac-create-ssh-keys) to securely connect to the AI Unlimited instance ***("engine"?)*** using SSH.

</TabItem>
</Tabs>


## Clone the provided repository

Clone the [AI Unlimited GitHub repository](https://github.com/Teradata/ai-unlimited). The `deployments` folder in the repository contains template, parameter, and policy files for installing AI Unlimited. 

	Open a terminal window, and clone the repository.

    ``` bash
    git clone https://github.com/Teradata/ai-unlimited
    ```


## Create a GitHub or GitLab OAuth app

import MyPartial from '/docs/_partials/_create-oauth-app.mdx';

<MyPartial />


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





---
id: prepare-csp-account
title: Prepare your Cloud Service Provider account
description: To be added.
sidebar_position: 2
tags:
  - Install AI Unlimited
  - Install on AWS
  - Install on Azure
  - Prerequisites to install AI Unlimited
  - Getting started
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Prepare your Cloud Service Provider account

:::note
Contact your organization administrator if your account doesn’t have the required account or network permissions. 
:::

<Tabs>
<TabItem value="aws" label="AWS" default>

- An [AWS account](https://aws.amazon.com). If you don't already have one, create one. at  by following the on-screen instructions.  

- The account deploying workspace service must have sufficient IAM permissions to create IAM roles or IAM policies. See xref::ai-unlimited-aws-permissions-policies.adoc[to be updated].

- Use the region selector in the navigation bar to choose the AWS region where you want to deploy the Teradata AI Unlimited. 

- Generate a [key pair](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) to connect securely to your workspace service instance using SSH after it launches.
    :::note
    Alternatively, you can use AWS Session Manager to connect to the workspace service instances, in which case, you must attach the session-manager.json policy to the IAM role. See xref::ai-unlimited-aws-permissions-policies.adoc[to be updated]. If you don't require host OS access, you can choose not to use either of these connection methods.
    :::

</TabItem>
<TabItem value="azure" label="Azure">

-  Azure account requirements 

    - An Azure account with an active subscription (Subscription ID). If you don’t have an Azure subscription, create an [Azure free account](https://azure.microsoft.com/en-us/free).  

    - If you have a free account, go to your profile and change your subscription to pay-as-you-go. Then, remove the spending limit and request a quota increase in your region.  in your region.  

    - Rights to create Azure resources. Make sure the account deploying AI Unlimited has sufficient permissions to create the roles. 

    - Owner permissions on the Azure subscription that you would like to use. 

- Tools 

    - [Optional] Azure CLI 

- Networking requirements 

    - The resource group must have an Azure Virtual Network (VNet) configured with a subnet. You can use your existing VNet and subnets or create your own [Resource Group](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal), [Vnet](https://learn.microsoft.com/en-us/azure/virtual-network/quick-create-portal), [Subnet](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-subnet?tabs=azure-portal), and [role](https://learn.microsoft.com/en-us/azure/role-based-access-control/custom-roles) depending on your account permissions.  

    - Determine your load balancer option: 

      - Public: Public frontend IPs 

      - Private (internal): Only accessible through private IPs 

</TabItem>
</Tabs>
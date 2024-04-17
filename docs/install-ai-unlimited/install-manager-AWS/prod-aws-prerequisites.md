---
id: prod-aws-prerequisites
title: Installation - AWS - Prerequisites
description: Learn the prerequisites for installing AI Unlimited Manager on AWS.
sidebar_label: Before you begin
sidebar_position: 1
---

# Before you begin

Prepare for installing AI Unlimited on AWS.

## Prerequisites

Make sure you have the following: 

- [AWS account](https://aws.amazon.com). You cannot deploy AI Unlimited using an AWS Free Tier subscription. If you have a free account, go to your profile and change your subscription to pay-as-you-go. 

- Optionally, download and set up the [AWS command-line interface (CLI)](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html) if you prefer working with AWS CLI.

***We can remove the CLI bullet for now, b/c we won't include CLI installation content yet. When we add the CLI content to Advanced topics, sometime after May 31, we might bring the bullet back.***

- [GitHub](https://github.com) or [GitLab](https://gitlab.com) account for user authentication and storing project information.

- Clone [AI Unlimited GitHub repository](https://github.com/Teradata/ai-unlimited). The **deployments** folder in the repository contains template, parameter, and policy files for deploying AI Unlimited and JupyterLab on AWS. 

	Open a terminal window, and clone the repository.

    ``` bash
    git clone https://github.com/Teradata/ai-unlimited
    ```

## Prepare your AWS account

- Your AWS account must have the required permissions needed to deploy the resources in the CloudFormation template. Work with your cloud administrator to set up the account with the required permissions. See [Create an IAM role and attach policies](link).

- If you need to access or manage the AI Unlimited instance to run commands or debug, you can connect to it using one of the following methods:
	- Generate a [key pair](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) to securely connect using Secure Shell (SSH).
	- Use AWS Session Manager to connect. To enable this, when you [create the IAM role and policies](/docs/install-ai-unlimited/production/AWS/before-you-begin/prod-aws-permissions-policies.md), attach the [session-manager.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/session-manager.json) policy to the IAM role.

- If you’re using an [Application Load Balancer (ALB)](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancer-getting-started.html) or [Network Load Balancer (NLB)](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancer-getting-started.html), make sure you have permission to manage these AWS services:
	- [AWS Certificate Manager](https://docs.aws.amazon.com/acm/)&mdash;to issue a new certificate for the hosted zone ID in Route 53.
	- [AWS Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html)&mdash;to configure a custom domain name and route DNS queries to your load balancer.

### Create an IAM role and attach policies

Use IAM roles and policies to grant AI Unlimited permissions to deploy and access AWS resources. 

You have the option to either let the CloudFormation template create a new role along with the necessary policies, or you can use an existing role and attach the required policy to it. If you have the permission to create IAM resources, the CloudFormation template can create the roles and policies for AI Unlimited. Otherwise, you can utilize an existing role and attach required policies based on your permissions and specific needs.

AI Unlimited can pass the role and policies that you provide to the cluster.

See [Creating roles and attaching policies (console)](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_job-functions_create-policies.html). 

***Holding on to this next sentence as is for the time being, but we have to be careful about documenting a third-pary UI:*** 

Configure these policies in the AWS Management Console in **Security & Identity** > **Identity & Access Management** > **Create Policy**.

Use these JSON samples to create the policies you need, and attach them to the role: 

- [ai-unlimited-workspaces.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces.json): Includes permissions to create engine instances, and grants AI Unlimited permissions to create a cluster-specific role and policies.

- [ai-unlimited-without-iam-role-permissions.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces-without-iam-role-permissions.json): Includes permissions to create engine instances, but not those needed for AI Unlimited to create cluster-specific roles and policies. Use this, and **ai-unlimited-engine.jason**, if your AWS account has restrictions that won't allow AI Unlimited to create roles and policies.

- [ai-unlimited-engine.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json): Allows AI Unlimited to pass the role to the cluster each time the engine is deployed. Use this with **ai-unlimited-without-iam-role-permissions.json**. Modify the policy with your your account details.

    If AI Unlimited creates cluster-specific policies, they are restricted as follows:

    ```bash
    "Resource": ["arn:aws:secretsmanager:`REGION`:`ACCOUNT_ID`:secret:compute-engine/`CLUSTER_NAME`/`SECRET_NAME`"]
    ```

    For the role you provide, you can't predict the cluster name, so use a wildcard in the policy ***(which one?)***.

    ``` bash
    "arn:aws:secretsmanager:`REGION`:`ACCOUNT_ID`:secret:compute-engine/*"
    or
    "arn:aws:secretsmanager:`REGION`:111111111111:secret:compute-engine/*"
    or
    "arn:aws:secretsmanager:us-west-2:111111111111:secret:compute-engine/*"
    ```

- [session-manager.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/session-manager.json): Includes permissions to interact with the AWS Session Manager. Use this if you plan to use Session Manager to connect to the engine to closely manage it.

## Get deployment details

When you install AI Unlimited using a CloudFormation template, you'll provide account and network details. 

If you want to, you can copy this template and send it to an admin who knows these details&mdash;to get them ahead of time. Or, get them from the AWS Management Console. ***(is the console sentence correct?)***

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

## Subscribe to AI Unlimited

Subscribe to AI Unlimited on your CSP's marketplace:
- AWS (link)
 
***Maybe be specific about what they're subscribing to--it's the engine image but "feels like" more than that.***
 
***What do we really need to say about this task? We should not repeat what's on the Marketplace or provide self-evident steps--unless there's a good reason to.***
 
***If they have trouble subscribing, should they contact the CSP?***
  
***Where can they see their hours consumed or upcoming bills? Anything like that to point out?***
 
***Might they want to talk with us for help selecting an instance size? Can we point them to a blog entry or the Community--for any topics related to subscribing?***
 
## Create a GitHub or GitLab OAuth app

import MyPartial from '/docs/_partials/_create-oauth-app.mdx';

<MyPartial />


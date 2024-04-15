---
id: test-prod-aws-prerequisites
title: Teradata - AI Unlimited - Full installation - AWS - Prerequisites
description: Learn the prerequisites for installing AI Unlimited on AWS.
sidebar_label: Test-Prerequisites
sidebar_position: 1
---

# Prerequisites

Make sure you have the following: 

- [AWS account](https://aws.amazon.com)

- Optionally, the [AWS command-line interface (CLI)](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html)

- [GitHub](https://github.com) or [GitLab](https://gitlab.com) account

- Clone [AI Unlimited GitHub repository](https://github.com/Teradata/ai-unlimited). The **deployments** folder in the repository contains template, parameter, and policy files for deploying AI Unlimited and JupyterLab on AWS. 

Open a terminal window, and clone the repository. 

    ``` bash
    git clone https://github.com/Teradata/ai-unlimited
    ```

## Prepare your AWS account

- Your AWS account must have the required permissions needed to deploy the resources in the CloudFormation template. Work with your cloud administrator to set up the account with the required permissions.

- If you need to access or manage the AI Unlimited instance to run commands or debug, you can connect to it using one of the following methods:
	- Generate a [key pair](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) to securely connect using Secure Shell (SSH).
	- Use AWS Session Manager to connect. To enable this, when you [create the IAM role and policies](/docs/install-ai-unlimited/production/AWS/before-you-begin/prod-aws-permissions-policies.md), attach the [session-manager.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/session-manager.json) policy to the IAM role.

- If you’re using an [Application Load Balancer (ALB)](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancer-getting-started.html) or [Network Load Balancer (NLB)](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancer-getting-started.html), make sure you have permission to manage these AWS services:
	- [AWS Certificate Manager](https://docs.aws.amazon.com/acm/)&mdash;to issue a new certificate for the hosted zone ID in Route 53.
	- [AWS Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html)&mdash;to configure a custom domain name and route DNS queries to your load balancer.

## Get deployment details

When you install AI Unlimited using a CloudFormation template (CFT), you'll provide account and network details. 

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


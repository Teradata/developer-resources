---
id: demo-aws-prepare-your-account
title: Prepare your AWS account
description: Learn about the account, networking, and DNS requirements before deploying AI Unlimited on Azure. 
sidebar_label: Prepare your AWS account 
sidebar_position: 3
---

# Prepare your AWS account

- Your AWS account must have sufficient IAM permissions ***(I found iam:CreateRole and iam: PutRolePolicy. They are for users/roles, not the account. Should the sentence say "You must have" instead of "Your AWS account must have"?)*** to create [custom IAM roles and policies](../../demo/AWS/demo-aws-permissions-policies.md). 

:::note 
If your AWS account does not have sufficient IAM permissions to create IAM roles and policies, your cloud administrator can define the roles and policies and pass them to the CloudFormation template. 
:::

- In the AWS Management Console, choose the AWS region in which to deploy AI Unlimited. ***Maybe this was part of a task that we no longer have.***

- If you will need to closely manage the AI Unlimited server instance after it is launches ***(Why might they want to?)***, you can connect to it within its host operating system (OS) two ways:
    - After it launches, generate a [key pair](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) to securely connect using Secure Shell (SSH).
    - After it launches, use AWS Session Manager to connect. To enable this, you must attach the [session-manager.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/session-manager.json) policy to the IAM role. See [Control AWS access and permissions using custom permissions and policies](/docs/install-ai-unlimited/production/AWS/aws-permissions-policies.md). ***(This topic is "Prepare," but attaching policies to the role is done in the other topic. Is there a reason to introduce it here?)***

- If you’re using load balancers, make sure you have permission to manage these AWS services:
    - [AWS Certificate Manager](https://docs.aws.amazon.com/acm/) to issue a new certificate for the hosted zone ID in Route 53.
    - [AWS Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html) to configure a custom domain name and route DNS queries to your load balancer.

    For details on AWS load balancers, see [Getting started with Network Load Balancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancer-getting-started.html) and [Getting started with Application Load Balancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancer-getting-started.html).

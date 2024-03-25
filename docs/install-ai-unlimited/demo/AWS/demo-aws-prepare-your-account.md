---
id: demo-aws-prepare-your-account
title: Prepare your AWS account
description: Learn about the account, networking, and DNS requirements before deploying AI Unlimited on Azure. 
sidebar_label: Prepare your AWS account 
sidebar_position: 2
---

# Prepare your AWS account

- Your AWS account must have sufficient IAM permissions to create [custom IAM roles and policies](../../demo/AWS/demo-aws-permissions-policies.md).

- In the AWS Management Console, choose the AWS region in which to deploy AI Unlimited. 

- If you need access to your AI Unlimited server instance host operating system (OS), you can connect these ways:
    - Generate a [key pair](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) to securely connect to your AI Unlimited instance using Secure Shell (SSH) after it launches.
    - Use AWS Session Manager to connect to the AI Unlimited instance. In this case, you must attach the [session-manager.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/session-manager.json) policy to the IAM role. See [Control AWS access and permissions using custom permissions and policies](/docs/install-ai-unlimited/production/AWS/aws-permissions-policies.md). 

- If you’re using load balancers, make sure you have permission to manage these AWS services:
    - [AWS Certificate Manager](https://docs.aws.amazon.com/acm/) to issue a new certificate for the hosted zone ID in Route 53.
    - [AWS Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html) to configure a custom domain name and route DNS queries to your load balancer.

    For details on AWS load balancers, see [Getting started with Network Load Balancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancer-getting-started.html) and [Getting started with Application Load Balancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancer-getting-started.html).

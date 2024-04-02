---
id: demo-aws-prepare-your-account
title: Teradata - AI Unlimited - Demo - Prepare your AWS account
description: Learn what to do before installing AI Unlimited on AWS.
sidebar_label: Prepare your AWS account 
sidebar_position: 3
---

# Prepare your AWS account

- Your AWS account must have the permissions needed to deploy a CloudFormation template. See [[new name of topic on roles and policies]](/docs/install-ai-unlimited/demo/AWS/demo-aws-permissions-policies.md).

***Instead of "Your AWS account" say "As an IAM user, you must have the permissions needed to..."?***

- If you will need to closely manage the AI Unlimited ***(engine?)*** server instance ***(why might need want to?)***, after it launches you can connect to it within its host operating system (OS) two ways: ***verify wording***
	- Generate a [key pair](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) to securely connect using Secure Shell (SSH).
	- Use AWS Session Manager to connect. To enable this, when you [create the IAM role and policies](/docs/install-ai-unlimited/demo/AWS/demo-aws-permissions-policies.md), attach the [session-manager.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/session-manager.json) policy to the IAM role.

- If you’re using load balancers, make sure you have permission to manage these AWS services:
	- [AWS Certificate Manager](https://docs.aws.amazon.com/acm/)&mdash;to issue a new certificate for the hosted zone ID in Route 53.
	- [AWS Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html)&mdash;to configure a custom domain name and route DNS queries to your load balancer.

    For details on AWS load balancers, see [Getting started with Network Load Balancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancer-getting-started.html) and [Getting started with Application Load Balancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancer-getting-started.html).

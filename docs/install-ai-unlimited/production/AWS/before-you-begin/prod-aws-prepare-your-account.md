---
id: prod-aws-prepare-your-account
title: Teradata - AI Unlimited - Full installation - Prepare your AWS account
description: Learn about permissions, optional host operating system (OS) access, and load balancer options before installing AI Unlimited on AWS.
sidebar_label: Prepare your AWS account 
sidebar_position: 5
---

# Prepare your AWS account

- Your AWS account must have the IAM permissions needed to create roles and policies. See [Create IAM roles and policies](/docs/install-ai-unlimited/production/AWS/before-you-begin/prod-aws-permissions-policies.md).

***Does this refer to the user creating the role in the next topic? Or to AI Unlim, which might create the role each time a user deploys the engine? Instead of saying "Your AWS account" say "As an IAM user, you must have the permissions needed to..."?***

- Your AWS account must have the permissions needed to deploy a CloudFormation template. 

***Does this "account" = the user? Or might it be the corporate account that has many users? Say something like "You must have..."? Also, what are the permissions and how to get them?***

- If you will need to closely manage the AI Unlimited ***(engine?)*** server instance ***(why might need want to?)***, after it launches you can connect to it within its host operating system (OS) two ways: ***verify wording***
	- Generate a [key pair](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) to securely connect using Secure Shell (SSH).
	- Use AWS Session Manager to connect. To enable this, when you [create the IAM role and policies](/docs/install-ai-unlimited/production/AWS/before-you-begin/prod-aws-permissions-policies.md), attach the [session-manager.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/session-manager.json) policy to the IAM role.

- Decide on your load balancer option: ***I need to understand this better, then will make the intro phrase more informative. FWIW, this bullet wasn't in the demo install.***
	- Application Load Balancer (ALB): At least two subnets across Availability Zones 
	- Network Load Balancer (NLB): At least one subnet
	- No load balancer
	  
- If you’re using load balancers, make sure you have permission to manage these AWS services:
	- [AWS Certificate Manager](https://docs.aws.amazon.com/acm/)&mdash;to issue a new certificate for the hosted zone ID in Route 53.
	- [AWS Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html)&mdash;to configure a custom domain name and route DNS queries to your load balancer.

    For details on AWS load balancers, see [Getting started with Network Load Balancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancer-getting-started.html) and [Getting started with Application Load Balancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancer-getting-started.html).

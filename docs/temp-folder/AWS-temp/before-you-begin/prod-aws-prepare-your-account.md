---
id: prod-aws-prepare-your-account
title: Teradata - AI Unlimited - Full installation - Prepare your AWS account
description: Learn about permissions, optional host operating system (OS) access, and load balancer options before installing AI Unlimited on AWS.
sidebar_label: Prepare your AWS account 
sidebar_position: 5
---

# Prepare your AWS account

- Your AWS account must have the IAM permissions needed to [create roles and policies](/docs/install-ai-unlimited/production/AWS/before-you-begin/prod-aws-permissions-policies.md).

***Does this refer to the person creating the role in the next topic? Or to AI Unlim, which might create the role each time a user deploys the engine? If it's the person, instead of saying "Your AWS account" could say "Make sure you have...***

- Your AWS account must have the ***(IAM?)*** permissions needed to deploy a CloudFormation template. 

***Does this "account" = the user? Or might it be the corporate account that has many users? Could say "Make sure you have..."?***

***For both of those bullets, if they don't have the permissions, should we tell them to contact their admin?***

***Maybe we can combine the first 2 bullets.***

- If you will need to closely manage the AI Unlimited ***(the engine's?)*** server instance ***(why might need want to?)***, after it launches you can connect to it within its host operating system (OS) ***(verify wording)*** two ways:
	- Generate a [key pair](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) to securely connect using Secure Shell (SSH).
	- Use AWS Session Manager to connect. To enable this, when you [create the IAM role and policies](/docs/install-ai-unlimited/production/AWS/before-you-begin/prod-aws-permissions-policies.md), attach the [session-manager.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/session-manager.json) policy to the IAM role.

- Choose a load balancer option:
	- [Application Load Balancer (ALB)](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancer-getting-started.html)&mdash;at least two subnets across Availability Zones. 
	- [Network Load Balancer (NLB)](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancer-getting-started.html)&mdash;at least one subnet.
	- No load balancer.
	
- If you’re using load balancers, make sure you have permission to manage these AWS services:
	- [AWS Certificate Manager](https://docs.aws.amazon.com/acm/)&mdash;to issue a new certificate for the hosted zone ID in Route 53.
	- [AWS Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html)&mdash;to configure a custom domain name and route DNS queries to your load balancer.



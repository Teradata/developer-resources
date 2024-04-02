---
id: demo-aws-prepare-your-account
title: Prepare your AWS account
description: Learn about the account, networking, and DNS requirements before deploying AI Unlimited on Azure. 
sidebar_label: Prepare your AWS account 
sidebar_position: 3
---

# Prepare your AWS account

***There's overlap between this topic and the Create role topic. The only thing that's not overlapping is the load balancer content. Maybe we don't really need this topic. Maybe the last bullet could go in the Create role topic as well? Not ideal, but having it here by itself doesn't feel right.***

- Your AWS account must have sufficient IAM permissions ***(I found iam:CreateRole and iam: PutRolePolicy. They are for users/roles, not the account. Should the sentence say "You must have" instead of "Your AWS account must have"?)*** to [create custom IAM roles and policies](../../demo/AWS/demo-aws-permissions-policies.md). **TA: The IAM User which is tied to a specific user should have sufficient permission, the intend was to showcase IAM User and not IAM role. The user needs to have sufficient permission to do perform activities on the Console. For example, user "thriptiaravind" doesn't have the required permissions to do any activity on IAM User page***

:::note 
If your AWS account does not have these permissions, your cloud administrator can define the roles and policies and pass them to the CloudFormation template. ***I will revisit this after working through the install topic--where this must take place.***
:::

***Do we need this first bullet, if this is addressed in the Create a custom IAM role and policies topic?***
***TA: I think we should retain***

- In the AWS Management Console, choose the AWS region in which to deploy AI Unlimited. ***Seems out of place here. Is it just something they do when they create the role and permissions?*** ***No, to select region where resources are hosted, standard step with no relation to policies***

- If you will need to closely manage the AI Unlimited ***(the engine?)*** server instance ***(why might they want to?)***, after it launches you can connect to it within its host operating system (OS) two ways:
    - Generate a [key pair](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) to securely connect using Secure Shell (SSH).
    - Use AWS Session Manager to connect. To enable this, when you [create custom IAM roles and policies](/docs/install-ai-unlimited/demo/AWS/demo-aws-permissions-policies.md), attach the [session-manager.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/session-manager.json) policy to the IAM role. ***(This is done in the other topic. Is there a reason to introduce it here?)******TA: This should be presented to the user before they start working on roles and policies.***

- If you’re using load balancers, make sure you have permission to manage these AWS services:
    - [AWS Certificate Manager](https://docs.aws.amazon.com/acm/)&mdash;to issue a new certificate for the hosted zone ID in Route 53.
    - [AWS Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html)&mdash;to configure a custom domain name and route DNS queries to your load balancer.

    For details on AWS load balancers, see [Getting started with Network Load Balancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancer-getting-started.html) and [Getting started with Application Load Balancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancer-getting-started.html).


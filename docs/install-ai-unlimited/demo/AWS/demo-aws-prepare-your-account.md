---
id: demo-aws-prepare-your-account
title: Prepare your AWS account
description: Learn about the account, networking, and DNS requirements before deploying AI Unlimited on Azure. 
sidebar_label: Prepare your AWS account 
sidebar_position: 2
tags:
  - Install AI Unlimited
  - Install on AWS
  - Demo
---

# Prepare your AWS account

***Just noting that I put comments in “Before you begin” that’s in Prod. That content should work for demo and prod.***

:::note
Contact your organization administrator if your account doesn’t have the required account or network permissions. 
:::

***Does this note refer to the same thing as the permissions bullet on each tab? If so, remove the note. Or add some of it to the bullet on the tab.***

***The content on the tabs is currently a mix of named requirements and actions to take--at least on each tab, we should have parallel types of items, meaning, a list of things they need or a list of things to do.***

- Your AWS account must have sufficient IAM permissions to create IAM roles or IAM policies. See [Control AWS access and permissions using custom permissions and policies](../../production/AWS/aws-permissions-policies.md).

- In your AWS console, choose the AWS region where you want to deploy AI Unlimited. 

***This assumes they are in AWS. They might be, or they might not be. Depending on when they created their account or got access to an existing account. And they might have left their account, talked with someone about permissions, and then come back to this content the next day--anything like that. So we should add something like "In your AWS account,"  I almost wonder if it's enough to say "In your AWS account, select the region."? I hate to use terms like "navigation bar" and "region selector"--sounds more internal, like a UI design discussion. But... is it hard to find this in the UI?***

- If you need access to your AI Unlimited instance host operating system (OS), you can connect in the following ways:

    - Generate a [key pair](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) to securely connect to your AI Unlimited instance using Secure Shell (SSH) after it launches.
    - Use AWS Session Manager to connect to the AI Unlimited instance. In this case, you must attach the [session-manager.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/session-manager.json) policy to the IAM role. See [Control AWS access and permissions using custom permissions and policies](/docs/install-ai-unlimited/production/AWS/aws-permissions-policies.md). 

	
***Sounds like they have 3 choices: key pair, session manager, or neither. We could say something like “If you (precisely who, their organization?) require host operating system (OS) access (Why would they or wouldn’t they need this? Something to do with using the CLI?) **TA: to manage the instance**, set up your connection one of these ways:” Then a bullet for key pair, and a bullet for session manager. (This way, they decide whether or not they need this at the beginning.)***


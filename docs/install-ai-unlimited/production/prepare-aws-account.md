---
id: prepare-aws-account
title: Prepare your AWS account
description: To be added.
sidebar_position: 3
tags:
  - Install AI Unlimited
  - Install on AWS
  - Prerequisites to install AI Unlimited
  - Getting started
---

# Prepare your AWS account

1. If you don't already have an AWS account, create one at https://aws.amazon.com by following the on-screen instructions.  
2. Make sure the account deploying workspace service has sufficient IAM permissions to create IAM roles or IAM policies. Contact your organization administrator if your account doesn't have the required permission. See xref::ai-unlimited-aws-permissions-policies.adoc[to be updated].
3. Use the region selector in the navigation bar to choose the AWS region where you want to deploy the Teradata AI Unlimited workspace service. 
4. Generate a key pair to connect securely to your workspace service instance using SSH after it launches. See [Amazon EC2 key pairs and Linux instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html).
    :::note
    Alternatively, you can use AWS Session Manager to connect to the workspace service instances, in which case, you must attach the session-manager.json policy to the IAM role. See xref::ai-unlimited-aws-permissions-policies.adoc[to be updated]. If you don't require host OS access, you can choose not to use either of these connection methods.
    :::

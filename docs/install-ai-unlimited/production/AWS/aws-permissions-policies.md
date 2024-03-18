---
id: aws-permissions-policies
title: Teradata - AI Unlimited - Create custom IAM roles and policies
description: Learn how AWS IAM roles and policies impact the Teradata AI Unlimited deployment.
sidebar_position: 4
tags:
  - Install AI Unlimited
  - Install on AWS
  - Prerequisites to install AI Unlimited
  - Getting started
---

# Control AWS access and permissions using custom permissions and policies

Configure policies with the necessary permissions to provide access to the AWS resources. If the account deploying AI Unlimited does not have sufficient IAM permissions to create IAM roles or IAM policies, your organization administrator can define the roles and policies and pass them to the AI Unlimited template. 

The following IAM policies are required for a new IAM role:

Configure these policies in the AWS console in **Security & Identity** > **Identity & Access Management** > **Create Policy**. For detailed instructions, see [Creating roles and attaching policies (console) - AWS Identity and Access Management](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_job-functions_create-policies.html).

- [ai-unlimited-with-iam-role-permissions.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-with-iam-role-permissions.json): This JSON sample includes permissions needed to create AI Unlimited instances and grants AI Unlimited the permissions to create cluster-specific IAM roles and policies for the engine.

- [ai-unlimited-without-iam-role-permissions.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-without-iam-role-permissions.json): This JSON sample includes the permissions needed to create AI Unlimited instances. If your account restrictions do not allow AI Unlimited to create IAM roles and policies, then you must provide an IAM role with a policy to pass to the engine. In this case, you can use this modified policy, which does not include permissions to create IAM roles or IAM policies.

- [session-manager.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/session-manager.json): This JSON sample includes the permissions needed to interact with the AWS Session Manager. If you use AWS Session Manager to connect to the instance, you must attach this policy to the IAM role.

- [ai-unlimited-engine.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json): If you pass the AI Unlimited IAM role to a new engine instead of allowing AI Unlimited to create the cluster-specific role, you can use this JSON sample as a starting point to create your policy.

When AI Unlimited creates policies for the engine, they are restricted as follows:

```bash
"Resource": ["arn:aws:secretsmanager:`REGION`:`ACCOUNT_ID`:secret:compute-engine/`CLUSTER_NAME`/`SECRET_NAME`"]
```

If you provide an IAM role and policy, then you can't predict the cluster name, and to avoid the situation, you can use wildcarding in the replacement policy, such as:

``` bash
"arn:aws:secretsmanager:`REGION`:`ACCOUNT_ID`:secret:compute-engine/*"
or
"arn:aws:secretsmanager:`REGION`:111111111111:secret:compute-engine/*"
or
"arn:aws:secretsmanager:us-west-2:111111111111:secret:compute-engine/*"
```


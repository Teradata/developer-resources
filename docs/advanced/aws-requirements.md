---
id: aws-account-requirements
title: AWS account requirements
description: How to prepare your AWS account for AI Unlimited installation
sidebar_label: AWS account requirements
sidebar_position: 1
pagination_prev: null
pagination_next: null
---

# Prepare your AWS account

***WIP***

Make sure your account is ready.***find better words***


## Permissions for installing the manager

To deploy the manager's cloud resources, you'll need appropriate IAM permissions. Work with your admin to get them one of two ways:

- The identity you use to sign in to the AWS Management console can have the permissions.
- A role you provide to the CloudFormation template can have the permissions. 


## Role for deploying the engine

***associate this with the setup UI***

The manager needs a role that allows it to deploy or remove the engine. The manager can get this role two ways:

- You can allow AI Unlimited to create a new role each time the engine is deployed. ***(or removed?)***. ***(will look at the setup content--maybe can remove 
"cluster")***
- If your organization's policies don't allow that, you can use an existing role, or create a new role, with the necesssary policy attached. ***maybe add sentence about it needing to be broad enough***

	If you have the permissions to create IAM resources, when you install the manager, the CloudFormation template can create the role and policy. ***must be the default value in the role's name field***Otherwise, use an existing role and attach required policies based on your permissions and needs. ***(revisit)***


## Optionally, create the engine deployment role

See [Creating roles and attaching policies (console)](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_job-functions_create-policies.html). 

Use these JSON samples to create the policies you need, and attach them to the role: 

***pick up from here***

- [ai-unlimited-workspaces.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces.json): Includes permissions to create engine instances, and grants AI Unlimited permissions to create a cluster-specific role and policies.

- [ai-unlimited-without-iam-role-permissions.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces-without-iam-role-permissions.json): Includes permissions to create engine instances, but not those needed for AI Unlimited to create cluster-specific roles and policies. Use this, and **ai-unlimited-engine.jason**, if your AWS account has restrictions that won't allow AI Unlimited to create roles and policies.

- [ai-unlimited-engine.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json): Allows AI Unlimited to pass the role to the cluster each time the engine is deployed. Use this with **ai-unlimited-without-iam-role-permissions.json**. Modify the policy with your your account details.

    If AI Unlimited creates cluster-specific policies, they are restricted as follows:

    ```bash
    "Resource": ["arn:aws:secretsmanager:`REGION`:`ACCOUNT_ID`:secret:compute-engine/`CLUSTER_NAME`/`SECRET_NAME`"]
    ```

    For the role you provide, you can't predict the cluster name, so use a wildcard in the policy ***(which one?)***.

    ``` bash
    "arn:aws:secretsmanager:`REGION`:`ACCOUNT_ID`:secret:compute-engine/*"
    or
    "arn:aws:secretsmanager:`REGION`:111111111111:secret:compute-engine/*"
    or
    "arn:aws:secretsmanager:us-west-2:111111111111:secret:compute-engine/*"
    ```

- [session-manager.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/session-manager.json): Includes permissions to interact with the AWS Session Manager. Use this if you plan to use Session Manager to connect to the engine to closely manage it.
	

**TA: I think we can remove the below section***

How the engine cluster gets the role


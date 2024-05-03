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

As needed, work with your cloud admin ***(final term TBD)*** to ensure that you have the necessary IAM permissions.


## Permissions for installing the manager

You can get the permissions needed to deploy the cloud resources for the manager two ways:

- (1) The IAM identity you use to sign in to the AWS Management Console can have the permissions.
- (2) Or when you install the manager, you can provide the name of a role, that has the permissions, to the CloudFormation template. You do this when you configure stack options before deploying the template.


## Role for deploying the engine

(3 - WRONG  b/c creating/destroying cloud resources for the engine is not the same as deploying/suspending/restoring the engine)

The manager needs a role that allows it to deploy and remove the engine. The manager can get this role one of two ways:

- If you don't have permissions to create IAM resources, allow AI Unlimited to create a new role each time it deploys the engine.
	:::note
	Leave the **Default IAM role** field blank when you set up AI Unlimited.
	:::

- Or create a new role, or use an existing one in your AWS account, and attach the necessary policies. When you install the manager, and provide values for template parameters, you'll use the `IamRole` and `IamRoleName` parameters to indicate this role. 
	:::note
	Add the role to the **Default IAM role** field when you [set up AI Unlimited](/docs/install-ai-unlimited/setup-ai-unlimited.md).
	:::


### Provide an engine deployment role

See [Creating roles and attaching policies (console)](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_job-functions_create-policies.html) for details. 

Use these JSON samples to create the policies you need. Then attach them to a new or existing role. 

- [ai-unlimited-workspaces.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces.json): Includes permissions to create engine instances, and grants AI Unlimited permissions to create cluster-specific roles and policies.<br/>

	If AI Unlimited creates cluster-specific policies, they are restricted as follows:
	
	***(we are working on the type size issue in code blocks)***

    ```bash
    "Resource": ["arn:aws:secretsmanager:`REGION`:`ACCOUNT_ID`:secret:compute-engine/`CLUSTER_NAME`/`SECRET_NAME`"]
    ```

- [ai-unlimited-without-iam-role-permissions.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces-without-iam-role-permissions.json): Includes permissions to create engine instances, but not those needed for AI Unlimited to create cluster-specific roles and policies. Use this with **ai-unlimited-engine.jason**.

- [ai-unlimited-engine.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json): Allows AI Unlimited to pass the role you're providing to the cluster each time the engine is deployed. Use this with **ai-unlimited-without-iam-role-permissions.json**.<br/>

	Modify the policy with your your account details. You can't predict the cluster name, so use a wildcard.
	
    ``` bash
    "arn:aws:secretsmanager:`REGION`:`ACCOUNT_ID`:secret:compute-engine/*"
    or
    "arn:aws:secretsmanager:`REGION`:111111111111:secret:compute-engine/*"
    or
    "arn:aws:secretsmanager:us-west-2:111111111111:secret:compute-engine/*"
    ```

- [session-manager.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/session-manager.json): Includes permissions for the engine to interact with the [AWS Session Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html). Use this if you plan to use Session Manager to connect to the engine to closely manage it.






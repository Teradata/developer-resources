---
id: aws-account-requirements
title: AWS account requirements
description: How to prepare your AWS account for AI Unlimited installation
sidebar_label: AWS account requirements
sidebar_position: 1
pagination_prev: null
pagination_next: null
---

# AWS account requirements


## Permissions to deploy cloud resources

Work with your cloud admin to ensure you have the [Identity and Access Management (IAM)](https://aws.amazon.com/iam/) permissions to deploy cloud resources.


***(To simplify, will put the happy path, which assumes their security allows AI Unlim to create roles, first--for the manager and engine roles. Will follow with what to do if your security requires that you create your own roles.)***


## Manager role

This role enables the manager to deploy the engine.

Let AI Unlimited create this role for you. When you [install the manager](/docs/install-ai-unlimited/prod-aws-console-ai-unlimited.md), provide these values for these parameters:
    - `IamRole`: **New**
    - `IamRoleName`: the default, **ai-unlimited-iam-role**
	
If your security does not allow AI Unlimited to create roles, provide the manager role:
- If you have permissions to create IAM resources, create the role:
  - Attach a policy that includes the JSON that meets your needs. See [Sample JSON](#json-samples).
  - When you [specify the manager's stack details](/docs/install-ai-unlimited/prod-aws-console-ai-unlimited.md#aws-parms), use these parameter values:
    - `IamRole`: **New**
	 - `IamRoleName`: the new role's name
- If you don't have permissions to create IAM resources, work with your cloud admin to use an existing role:
  - Attach a policy that includes the JSON that meets your needs. See [Sample JSON](#json-samples).
  - When you [specify the manager's stack details](/docs/install-ai-unlimited/prod-aws-console-ai-unlimited.md#aws-parms), use these parameter values:
  - `IamRole`: **Existing**
  - `IamRoleName`: the existing role's name
  
  
<a id="json-samples"></a>
### Sample JSON

If you provide the manager's role, include the appropriate JSON in an attached policy: 

- Allow AI Unlimited to create the engine role. Include [ai-unlimited-workspaces.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces.json). It includes permissions to create engine instances, and grants AI Unlimited permissions to create cluster-specific roles and policies.

- If your security does not allow AI Unlimited to create roles, include [ai-unlimited-without-iam-role-permissions.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces-without-iam-role-permissions.json). It includes permissions to create engine instances, but not those needed for AI Unlimited to create cluster-specific roles and policies. 
 
  :::note
  If you use **ai-unlimited-without-iam-role-permissions.json**, attach [ai-unlimited-engine.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json) to the engine role's policy.
  :::

- Optionally, include [session-manager.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/session-manager.json): It includes permissions for the engine to interact with the [AWS Session Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html). Use this if you plan to use Session Manager to connect to the engine to closely manage it.


## Engine role

This role enables the engine nodes to communicate.

**Let  AI Unlimited create it**

Allow AI Unlimited create the engine's role. AI Unlimited creates a new role for the cluster that deploys the engine each time the engine is deployed. 

The cluster-specific policies AI Unlimited creates are restricted this way:	
  
  ***(we are working on the type size issue in code blocks)***

  ```bash
  "Resource": ["arn:aws:secretsmanager:`REGION`:`ACCOUNT_ID`:secret:compute-engine/`CLUSTER_NAME`/`SECRET_NAME`"]
	
  ```

When you [set up AI Unlimited](/docs/install-ai-unlimited/setup-ai-unlimited), leave the **Default IAM role** field blank. 

**Provide your own**

If your security does not allow AI Unlimited to create roles, provide a role:

- To the role, attach a policy that includes [ai-unlimited-engine.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json), which allows AI Unlimited to pass the role to the cluster each time the engine is deployed. 

- Add your account details to the policy. You can't predict the cluster name, so use a wildcard.
	
  ``` bash
  "arn:aws:secretsmanager:`REGION`:`ACCOUNT_ID`:secret:compute-engine/*"
  or
  "arn:aws:secretsmanager:`REGION`:111111111111:secret:compute-engine/*"
  or
  "arn:aws:secretsmanager:us-west-2:111111111111:secret:compute-engine/*"
  
  ```
- In the policy for the manager's role, use  [ai-unlimited-without-iam-role-permissions.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces-without-iam-role-permissions.json).

- Put the role's name in the **Default IAM role** field during setup.










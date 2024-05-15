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

- Work with your cloud admin to ensure you have the [IAM](https://aws.amazon.com/iam/) permissions you need to create the cloud resources defined in the [AI Unlimited template](https://github.com/Teradata/ai-unlimited/tree/develop/deployments/aws/templates/ai-unlimited).

- If you'll need to access the manager instance to run commands or debug, you can connect to it one of these ways:
	- Use a [key pair](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) that you generate to securely connect using Secure Shell (SSH). You will need the key pair when you [specify the stack details](/docs/install-ai-unlimited/prod-aws-console-deploy-ai-unlimited.md#aws-parms).
	- Use AWS Session Manager to connect. To enable this, attach the [session-manager.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/session-manager.json) policy to a [role you provide](#provide-roles) to the manager.
  
- If you plan to use an [Application Load Balancer (ALB)](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancer-getting-started.html) or [Network Load Balancer (NLB)](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancer-getting-started.html), make sure you have permission to manage these AWS services:
	- [AWS Certificate Manager](https://docs.aws.amazon.com/acm/)&mdash;to issue a new certificate for the hosted zone ID in Route 53.
	- [AWS Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html)&mdash;to configure a custom domain name and route DNS queries to your load balancer.


## Allow AI Unlimited to create roles

The manager needs a role that allows it to deploy the engine. The engine needs a role that allows the engine nodes to communicate. You can let AI Unlimited create both of these roles.

:::note
If your security does not allow AI Unlimited to create roles, [create the roles](#provide-roles) yourself or with the help of your cloud admin.
::: 

### Role for the manager

To let AI Unlimited create this role for you, when you [specify the stack details](/docs/install-ai-unlimited/prod-aws-console-deploy-ai-unlimited.md#aws-parms), provide these values for these parameters:
    - `IamRole`: **New**
    - `IamRoleName`: leave blank
	
### Role for the engine
	
AI Unlimited can create a new role for the engine each time the engine is deployed. 

The engine-specific policies AI Unlimited creates are restricted this way:	
  
  ```bash
  "Resource": ["arn:aws:secretsmanager:`REGION`:`ACCOUNT_ID`:secret:compute-engine/`CLUSTER_NAME`/`SECRET_NAME`"]
  ```

To allow AI Unlimited to create a new role for each engine deployment, when you configure the [cloud integration](/docs/install-ai-unlimited/setup-ai-unlimited#setup-fields) as part of [AI Unlimited setup](/docs/install-ai-unlimited/setup-ai-unlimited), leave the **Default IAM role** field blank.


<a id="provide-roles"></a>	
## Provide roles created by your organization

If your security does not allow AI Unlimited to create roles, provide them.


### Role for the manager

- If you have permissions to create IAM resources, create the role:
  - Attach a policy that includes the JSON that meets your needs. See the JSON samples that follow.
  - When you [specify the stack details](/docs/install-ai-unlimited/prod-aws-console-deploy-ai-unlimited.md#aws-parms), use these parameter values:
    - `IamRole`: **New**
	 - `IamRoleName`: the new role's name
- If you don't have permissions to create IAM resources, work with your cloud admin to use an existing role:
  - Attach a policy that includes the JSON that meets your needs. See the JSON samples that follow.
  - When you [specify the stack details](/docs/install-ai-unlimited/prod-aws-console-deploy-ai-unlimited.md#aws-parms), use these parameter values:
  - `IamRole`: **Existing**
  - `IamRoleName`: the existing role's name
  
#### JSON samples

Use these samples, as needed, in a policy attached to the manager's role:

- Allow AI Unlimited to create the engine role. Include [ai-unlimited-workspaces.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces.json). It includes permissions to create engine instances, and grants AI Unlimited permissions to create cluster-specific roles and policies.

- If your security does not allow AI Unlimited to create roles, include [ai-unlimited-without-iam-role-permissions.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces-without-iam-role-permissions.json). It includes permissions to create engine instances, but not those needed for AI Unlimited to create cluster-specific roles and policies. 
 
  :::note
  If you use [ai-unlimited-without-iam-role-permissions.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces-without-iam-role-permissions.json) for the manager's role, use  [ai-unlimited-engine.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json) for the engine's role.
  :::

- Optionally, include [session-manager.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/session-manager.json): It includes permissions for the engine to interact with the [AWS Session Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html). Use this if you plan to use Session Manager to connect to the engine to closely manage it.


### Role for the engine

- To the role you provide for the engine, attach a policy that includes [ai-unlimited-engine.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json). This allows AI Unlimited to pass the role to the cluster each time the engine is deployed. 

- Add your account details to the policy. You can't predict the cluster name, so use a wildcard.
	
  ``` bash
  "arn:aws:secretsmanager:`REGION`:`ACCOUNT_ID`:secret:compute-engine/*"
  or
  "arn:aws:secretsmanager:`REGION`:111111111111:secret:compute-engine/*"
  or
  "arn:aws:secretsmanager:us-west-2:111111111111:secret:compute-engine/*"
  
  ```
  
:::note
If you use [ai-unlimited-engine.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json) for the engine's role, use  [ai-unlimited-without-iam-role-permissions.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces-without-iam-role-permissions.json) for the manager's role.
:::

- When you configure the [cloud integration](/docs/install-ai-unlimited/setup-ai-unlimited#setup-fields) as part of [AI Unlimited setup](/docs/install-ai-unlimited/setup-ai-unlimited), put the role name in the **Default IAM role** field.







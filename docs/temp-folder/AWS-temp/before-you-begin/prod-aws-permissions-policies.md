---
id: prod-aws-permissions
title: Teradata - AI Unlimited - Full Installation - AWS - IAM roles and policies
description: Learn what roles and policies are needed for accessing AWS resources.
sidebar_label: Create an IAM role and policies
sidebar_position: 6
---

# Create an IAM role and policies

***Jack will write up how this all works--AI Unlim service vs. engine, etc. This topic needs work.***

Use IAM roles and policies to grant AI Unlimited permissions to deploy and access AWS resources. 

You have the option to either let the CloudFormation template create a new role along with the necessary policies, or you can use an existing role and attach the required policy to it. If you have the permission to create IAM resources, the CloudFormation template can create the roles and policies for AI Unlimited. Otherwise, you can utilize an existing role and attach required policies based on your permissions and specific needs.

AI Unlimited can pass the role and policies that you provide to the cluster.

See [Creating roles and attaching policies (console)](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_job-functions_create-policies.html). 

***Holding on to this next sentence as is for the time being, but we have to be careful about documenting a third-pary UI:*** 

Configure these policies in the AWS Management Console in **Security & Identity** > **Identity & Access Management** > **Create Policy**.

Use these JSON samples to create the policies you need, and attach them to the role: 

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

***TA: User needs to provide IAM role and policies to deploy AI Unlimited. This value is what we provide in the CloudFormation Template***

***TA: This is what we define in the AI Unlimited UI*** Each time a user deploys the engine from their Jupyter notebook, the engine's cluster needs the role and policies. It gets them one of two ways:

***TA: We can avoid using cluster and just use engine***

***But doesn't the role get assigned to the cluster? to allow it to deploy the engine?***

- AI Unlimited can create a cluster-specific role with policies based on the role and policies you provide&mdash;if your AWS account allows this. ***(Is this allowed via ai-unlimited-workspaces.json, simple as that, or is "if your AWS account allows this" referring to something else?)***




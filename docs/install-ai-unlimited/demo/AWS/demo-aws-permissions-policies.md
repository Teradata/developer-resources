---
id: demo-aws-permissions-policies
title: Teradata - AI Unlimited - Demo - AWS - Create custom IAM roles and policies
description: Learn what IAM roles and policies are needed to  deployment.
sidebar_label: Create custom IAM roles and policies
sidebar_position: 5
---

# Create custom IAM roles and policies

***Looks like they create 1 role, then create 1 or more policies to attach to it. We provde the JSON for creating the policies. So the title could be "Create a custom IAM role and policies."***

***To whom/what is this role assigned? The AI Unlimited service?***

***The policies they attach depend on their needs. At the least, they will attach one of the first two, correct?***

***So the role is for creating engine instances and, optionally, for specifying that AI Unlimited can create a new role each time the engine deploys for the cluster on which it deploys?***

***The role, then, is for AI Unlimited and also for the cluster on which the engine gets deployed? They both need the same role? At the end of the day, is the role really for the cluster? It's just that the cluster can get it 2 different ways?***

***I am assuming the role is for launching the engine. Need to specify that up front.***

***Maybe need to explain up front that AI Unlimited (which gets the role, correct?) passes the role to the engine every time the engine is deployed OR AI Unlimited creates a new role for the engine each time it deploys the engine. Is that correct?***

***Permissions to create roles and policies seem to be granted to a user/role, not an AWS account--so I'm confused about that.***

If you ***(the user, not their AWS account, right?)*** have the necessary IAM permissions ***(iam:CreateRole & iam: PutRolePolicy? Wondering if we should mention them.)***, create IAM roles ***("an IAM role")*** and policies to provide AI Unlimited with access to AWS resources ***(add "for deploying the engine"?)***. 

:::note 
If you ***(the AWS account?)*** don't have the necessary IAM permissions, your cloud administrator can define the IAM roles ***("role")*** and policies and pass them to the CloudFormation template, which you'll use to install AI Unlimited and JupyterLab. ***(Should they do something now to get that started?)***
:::

To create the role and policies yourself, see [Creating roles and attaching policies (console)](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_job-functions_create-policies.html).

Attach these policies to the role: 

- [ai-unlimited-workspaces.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces.json): Includes the permissions needed to create AI Unlimited instances ***(engine instances?)***, and grants AI Unlimited permissions to create cluster-specific roles and policies for the engine.

***Would it be accurate to just say "Includes the permissions needed to create engine instances and cluster-specific roles and policies for the engine."? I am confused about what the cluster-specific roles and policies are for, though.***

- [ai-unlimited-without-iam-role-permissions.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-without-iam-role-permissions.json): Includes the permissions needed to create AI Unlimited instances ***(engine instances?)***. If your AWS account has restrictions that don't allow AI Unlimited  to create roles and policies ***(can we just say "If you don't have permissions to create roles and policies"?)***, then you must provide a role with a policy to pass to the engine ***(Is this what the cloud admin can provide for the CFT, as in the note at the top of this topic?)***. In this case, use this policy, which does not include permissions to create IAM roles or IAM policies.

- [session-manager.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/session-manager.json): This JSON sample includes the permissions needed to interact with the AWS Session Manager. If you will use AWS Session Manager to connect to the instance, you must attach this policy to the IAM role. ***(So this ties back to the bullet in the Prepare topic.)***

- [ai-unlimited-engine.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json): If you pass the AI Unlimited IAM role to a new engine instead of allowing AI Unlimited to create the cluster-specific role, you can use this JSON sample as a starting point to create your policy.

When AI Unlimited creates policies for the engine ***[But the topic says the user creates the policies. And, if they are for the engine, does that mean they grant the engine access to the AWS resources (see first para).]***, they are restricted as follows: 
***TA: AI Unlimited can pass its own role and policies to the engine or can create new ones for the engine. The last policy is related to how AI Unlimited passes the policies to engine, and hence the statement when AI Unlimited creates policies for engine.... Other ones are about creating AI Unlimited instances.***

```bash
"Resource": ["arn:aws:secretsmanager:`REGION`:`ACCOUNT_ID`:secret:compute-engine/`CLUSTER_NAME`/`SECRET_NAME`"]
```

If you provide an IAM role and policy, then you can't predict the cluster name, and to avoid the situation, you can use wildcarding in the replacement policy, such as:

***So this is for

``` bash
"arn:aws:secretsmanager:`REGION`:`ACCOUNT_ID`:secret:compute-engine/*"
or
"arn:aws:secretsmanager:`REGION`:111111111111:secret:compute-engine/*"
or
"arn:aws:secretsmanager:us-west-2:111111111111:secret:compute-engine/*"
```
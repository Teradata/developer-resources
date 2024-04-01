---
id: demo-aws-permissions
title: Teradata - AI Unlimited - Demo - AWS permissions
description: Learn what IAM roles and policies are needed to deploy the engine.
sidebar_label: Manage AWS permissions
sidebar_position: 5
---

# Manage AWS permissions

Create a custom IAM role and policies. And, if applicable, prepare for the use of load balancers.

## Custom IAM role and policies

Provide an IAM role and policies to allow AI Unlimited to deploy the AI Unlimited compute engine on AWS resources. 

If you have the necessary permissions, create the role and policies yourself. If you don't, your cloud administrator can define the role and polices and pass them to the CloudFormation template you'll use to install AI Unlimited. ***(Does the latter option have anything to do with allowing AI Unlim to pass the role to the engine cluster? I'm assuming no.)***


### Learn how the engine cluster gets the role

Each time a user deploys the engine from their Jupyter notebook, the engine's cluster needs the role and policies. It gets them one of two ways:

- AI Unlimited can create a cluster-specific role with policies based on the role and policies you provide&mdash;if your AWS account allows this. ***(Is this allowed via ai-unlimited-workspaces.json, simple as that, or is this bullet referring to other restrictions they can't control?)***
- AI Unlimited can pass the role and policies, that you provide, to the cluster.

If AI Unlimited creates cluster-specific policies, they are restricted as follows:

```bash
"Resource": ["arn:aws:secretsmanager:`REGION`:`ACCOUNT_ID`:secret:compute-engine/`CLUSTER_NAME`/`SECRET_NAME`"]
```

For the role you provide, you can't predict the cluster name, so use a wildcard in the policy ***("policies"?)***.

``` bash
"arn:aws:secretsmanager:`REGION`:`ACCOUNT_ID`:secret:compute-engine/*"
or
"arn:aws:secretsmanager:`REGION`:111111111111:secret:compute-engine/*"
or
"arn:aws:secretsmanager:us-west-2:111111111111:secret:compute-engine/*"
```

### Create the role and policies

See [Creating roles and attaching policies (console)](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_job-functions_create-policies.html). 

Use these JSON samples to create the policies you need, and attach them to the role: 

- [ai-unlimited-workspaces.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces.json): Includes permissions to create engine instances, and grants AI Unlimited permissions to create a cluster-specific role and policies.

- [ai-unlimited-without-iam-role-permissions.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces-without-iam-role-permissions.json): Includes permissions to create engine instances, but not those needed to create cluster-specific roles and policies. Use this if your AWS account has restrictions that won't allow AI Unlimited to create roles and policies.


- [ai-unlimited-engine.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json): Allows AI Unlimited to pass the role to the cluster each time the engine is deployed. Use this if your AWS account has restrictions that won't allow AI Unlimited to create roles and policies.

- [session-manager.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/session-manager.json): Includes permissions to interact with the AWS Session Manager. Use this if you will use Session Manager to connect to the engine.

	:::note
	If you need to closely manage the engine instance ***(why might they need to?)***, after it launches, you can connect to it in its host operating system (OS) two ways:
    - Generate a [key pair](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) to securely connect using Secure Shell (SSH).
    - Use AWS Session Manager to connect.
	:::

## Load balancers

If you’re using load balancers, make sure you have permission to manage these AWS services:
    - [AWS Certificate Manager](https://docs.aws.amazon.com/acm/)&mdash;to issue a new certificate for the hosted zone ID in Route 53.
    - [AWS Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html)&mdash;to configure a custom domain name and route DNS queries to your load balancer.

    For details on AWS load balancers, see [Getting started with Network Load Balancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancer-getting-started.html) and [Getting started with Application Load Balancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancer-getting-started.html).
	

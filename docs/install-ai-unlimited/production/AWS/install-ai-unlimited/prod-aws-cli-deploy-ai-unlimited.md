---
id: prod-aws-cli-deploy-ai-unlimited
title: Teradata - AI Unlimited - Deploy AI Unlimited from the AWS CLI
description: Learn how to deploy AI Unlimited using the AWS Cloudformation Template from the AWS CLI.
sidebar_label: AWS CLI
sidebar_position: 2
---

# Deploy the template from the CLI

The CloudFormation template deploys a server instance with the AI Unlimited manager running in a container controlled by [systemd](/docs/glossary.md#glo-systemd).


## Decide which template to use

import MyPartial from '/docs/_partials/_choose-aws-template.mdx';

<MyPartial />


## Create a stack

Run this command:

***TA: Jack to review***

```bash
 # Create the stack using all-in-one.yaml
aws cloudformation create-stack --stack-name ai-unlimited-without-lb \
  --template-body file://ai-unlimited-without-lb.yaml \
  --parameters file://test_parameters/ai-unlimited-without-lb.json \
  --tags Key=ThisIsAKey,Value=AndThisIsAValue \
  --capabilities CAPABILITY_IAM CAPABILITY_NAMED_IAM

 # Create the stack using jupyter.yaml
aws cloudformation create-stack --stack-name jupyter-without-lb \
  --template-body file://jupyter-without-lb.yaml \
  --parameters file://test_parameters/jupyter-without-lb.json \
  --tags AnotherKey=AnotherValue \
  --capabilities CAPABILITY_IAM CAPABILITY_NAMED_IAM
```

***The first block looks like a mix of the all-in-one and the no load balancer. I guess we need a block for each of the 3 full install templates?***

***This topic is not about Jupyter. There's a separate CLI topic for that which needs to be fleshed out.***

:::note 
- CAPABILITY_IAM is required if IamRole is set to New.
- CAPABILITY_NAMED_IAM is required if IamRole is set to New and IamRoleName is given a value.
:::

To use an existing role, see Control AWS Access and Permissions using Permissions and Policies. ***Is this to be an external link?***


## Delete a stack

***I need to learn about the CLI, but why would they delete the stack now? This topic is for installing. If they want to eventually remove it, and are CLI users, maybe they know how to run "delete-stack"? I think originally this topic as a reference, not an installation task topic.***

Run this command:

```bash
aws cloudformation delete-stack --stack-name <stackname> 
```

## Get stack information

***Why is delete-stack in the first line of code?***

Run this command:

```bash
aws cloudformation delete-stack --stack-name <stackname>
aws cloudformation describe-stacks --stack-name <stackname> 
aws cloudformation describe-stack-events --stack-name <stackname> 
aws cloudformation describe-stack-instance --stack-name <stackname> 
aws cloudformation describe-stack-resource --stack-name <stackname> 
aws cloudformation describe-stack-resources --stack-name <stackname>
```

***How do they provide/update the parameters? Are there options to consider, like what's in the console topic? This topic needs to get them through those steps.***
 
## Get stack outputs

Run this command:

```bash
aws cloudformation describe-stacks --stack-name <stackname>  --query 'Stacks[0].Outputs' --output table
```

***Tell them what they'll need when they connect to the manager from a notebook. Like what's now at the end of the console topic. Do they get that from "describe-stacks"?***
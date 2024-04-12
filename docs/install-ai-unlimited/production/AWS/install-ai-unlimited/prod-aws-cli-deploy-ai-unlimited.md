---
id: prod-aws-cli-deploy-ai-unlimited
title: Teradata - AI Unlimited - Deploy AI Unlimited from the AWS CLI
description: Learn how to deploy AI Unlimited using the AWS Cloudformation Template from the AWS CLI.
sidebar_label: AWS CLI
sidebar_position: 2
---

# Deploy the template from the CLI

The CloudFormation template deploys a server instance with the AI Unlimited manager running in a container controlled by [systemd](/docs/glossary.md#glo-systemd).

:::note

You can deploy the stack using the `aws cloudformation create-stack` or `aws cloudformation deploy` commands. This example uses `aws cloudformation create-stack`. See [AWS CLI Command Reference](https://docs.aws.amazon.com/cli/latest/reference/cloudformation/#cli-aws-cloudformation) for the syntax differences.
:::


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

:::note 
- CAPABILITY_IAM is required if IamRole is set to New.
- CAPABILITY_NAMED_IAM is required if IamRole is set to New and IamRoleName is given a value.
:::

***Do they add/change values to the parm JSON file before they create the stack? Seems like we need a section for the parms, like what's in the console topic - we could use a partial. So that would go before the Create the stack section.***

***The console topic tells them they can "Configure stack options." How do they set those options if they use the CLI?***

***Seems we need a block for each of the 3 full install templates.***

***This topic is not about Jupyter. There's a separate CLI topic for that.***

***Looking in the repo, looks like you can remove "test_" from the parm file path?***

To use an existing role, see Control AWS Access and Permissions using Permissions and Policies. ***Is this to be an external link?***


## Delete a stack

***Why would they delete the stack now? This topic is for installing. If they want to eventually remove it, as CLI users maybe they know how to run "delete-stack"? Maybe originally this topic was a reference, not an installation task topic.***

Run this command:

```bash
aws cloudformation delete-stack --stack-name <stackname> 
```

## Get stack information

***Can we tell them what sort of information or why they do this? Is this something they normally do after creating a stack?***

***Delete-stack is in the first line of code--probably there by mistake.***

***The second one is also in the last section.***

Run this command:

```bash
aws cloudformation delete-stack --stack-name <stackname>
aws cloudformation describe-stacks --stack-name <stackname> 
aws cloudformation describe-stack-events --stack-name <stackname> 
aws cloudformation describe-stack-instance --stack-name <stackname> 
aws cloudformation describe-stack-resource --stack-name <stackname> 
aws cloudformation describe-stack-resources --stack-name <stackname>
```

## Get stack outputs

Run this command:

```bash
aws cloudformation describe-stacks --stack-name <stackname>  --query 'Stacks[0].Outputs' --output table
```

***Tell them what they'll need when they connect to the manager from a notebook. 

***Like what's at the end of the console topic: You'll need the host (the IP address or hostname) (verify wording) when you connect to the manager from a Jupyter notebook.*** 

***Do they get that from "describe-stacks"?***
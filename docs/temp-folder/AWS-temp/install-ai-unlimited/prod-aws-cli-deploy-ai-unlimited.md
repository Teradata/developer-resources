---
id: prod-aws-cli-deploy-ai-unlimited
title: Deploy AI Unlimited from the AWS CLI
description: Learn how to deploy AI Unlimited using the AWS Cloudformation template from the AWS CLI.
sidebar_label: AWS CLI
sidebar_position: 2
---

# Deploy the template from the AWS CLI

***Maybe we'll use more partials. Not sure yet.***

The CloudFormation template deploys a server instance with the AI Unlimited manager running in a container controlled by [systemd](/docs/glossary.md#glo-systemd).


## Decide which template to use

import MyPartial from '/docs/_partials/_choose-aws-manager-template.mdx';

<MyPartial />

***If using the console, they need to download the template. If using the CLI, they don't need to download it--they just reference it.***


## New section?

The manager template's parameter file is here: '/deployments/aws/parameters/'.

***Do they add/change values to the parm JSON file? Seems like we need a section for the parms, like what's in the console topic - we could use a partial that works for the console manager topic and this CLI manager topic.***

***Related... the console topic tells them they can configure stack options. How do they set those options if they use the CLI? Looks like that's "tags" and "capabilities" in the code below. Maybe link to AWS doc about that? Compare that part of the AWS console to what's in the code here. For the console do we need to point out anything in particular on the UI page that follows the parms?***


## Create a stack

:::note
You can deploy the stack using the `aws cloudformation create-stack` or `aws cloudformation deploy` commands. This example uses `aws cloudformation create-stack`. See [AWS CLI Command Reference](https://docs.aws.amazon.com/cli/latest/reference/cloudformation/#cli-aws-cloudformation) for the syntax differences.
:::

Run the command that matches the template you're using:

***The user has already cloned the repo. For the CLI (not the concole), seems they can reference the local template file and don't need to download it. Maybe we need to include the paths to the template and parm files starting with /deployments/ in the code below? How does this work?***

```bash
 # Create the stack using ai-unlimited-with-alb.yaml
aws cloudformation create-stack --stack-name ai-unlimited-alb \
  --template-body file://templates/ai-unlimited-with-alb.yaml \
  --parameters file://parameters/ai-unlimited-with-alb.json \
  --tags AnotherKey=AnotherValue \
  --capabilities CAPABILITY_IAM CAPABILITY_NAMED_IAM
```

```bash
 # Create the stack using ai-unlimited-with-nlb.yaml
aws cloudformation create-stack --stack-name ai-unlimited-with-nlb \
  --template-body file://templates/ai-unlimited-with-nlb.yaml \
  --parameters file://parameters/ai-unlimited-with-nlb.json \
  --tags AnotherKey=AnotherValue \
  --capabilities CAPABILITY_IAM CAPABILITY_NAMED_IAM
```

```bash
 # Create the stack using ai-unlimited-without-lb.yaml
aws cloudformation create-stack --stack-name ai-unlimited-without-lb \
  --template-body file://templates/ai-unlimited-without-lb.yaml \
  --parameters file://parameters/ai-unlimited-without-lb.json \
  --tags AnotherKey=AnotherValue \
  --capabilities CAPABILITY_IAM CAPABILITY_NAMED_IAM
```

:::note 
- CAPABILITY_IAM is required if IamRole is set to New.
- CAPABILITY_NAMED_IAM is required if IamRole is set to New and IamRoleName is given a value.
:::

To use an existing role, see Control AWS Access and Permissions using Permissions and Policies. ***Is this to be an external link--or our topic that's WIP?***


## Delete a stack

***Let's remove. This topic is for installing. If they want to eventually remove the stack, as CLI users maybe they know how to run "delete-stack"? Maybe originally this topic was a reference, not an installation task topic.***

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
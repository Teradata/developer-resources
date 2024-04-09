---
id: prod-aws-cli-deploy-ai-unlimited
title: Teradata - AI Unlimited - Deploy AI Unlimited from the AWS CLI
description: Learn how to deploy AI Unlimited using the AWS Cloudformation Template from the AWS CLI.
sidebar_label: AWS CLI
sidebar_position: 2
---

# Deploy the template from the CLI

***AWS has a CFT user guide with info about using the CLI. Will read it and come back to editing this.***

The CloudFormation template deploys a server instance with AI Unlimited running in a container controlled by [systemd](/docs/glossary.md#glo-systemd).

## Create a stack

Run this command: ***Do we need to keep saying "run this command"? Maybe there's a way to put that meaning in the intro.***

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

***The first one is for the demo (removed). Looks like we need to introduce the 3 templates and explain why they would use each one (like in the console topic). Then, show the code block for each?***

***This topic is not about Jupyter. There's a separate CLI topic for that which needs to be fleshed out. Reason: There are 4 Jupyter options: 1. add the kernel to an existing Jupyter 2. Console 3. CLI 4. Docker.***

:::note 
- CAPABILITY_IAM is required if IamRole is set to New.
- CAPABILITY_NAMED_IAM is required if IamRole is set to New and IamRoleName is given a value.
:::

To use an existing role, see Control AWS Access and Permissions using Permissions and Policies. ***Is this to be an external link?***

## Delete a stack

***I need to learn about the CLI, but why would they delete the stack now? This topic is for installing. If they want to eventually remove it, and are CLI users, maybe they know how to run "delete-stack"?***

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
 
## Get stack outputs

Run this command:

```bash
aws cloudformation describe-stacks --stack-name <stackname>  --query 'Stacks[0].Outputs' --output table
```

***Tell them what they need when they create a project. Needs a segway.***
---
id: prod-aws-cli-deploy-ai-unlimited
title: Teradata - AI Unlimited - Production - Install on AWS - CLI
description: Learn how to deploy the AI Unlimited CloudFormation Template from the AWS CLI.
sidebar_label: AWS CLI
sidebar_position: 2
---

# Deploy the AI Unlimited template from the AWS CLI

You can deploy a stack using the `aws cloudformation create-stack` or `aws cloudformation deploy` commands from the AWS CLI. The example in this section uses the create-stack command. See [AWS CLI Command Reference](https://docs.aws.amazon.com/cli/latest/reference/cloudformation/#cli-aws-cloudformation) documentation for the syntax differences between the `create-stack` and `deploy` commands.

## Create a stack
Run the following command on the AWS CLI:

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

To use an existing role, see Control AWS Access and Permissions using Permissions and Policies.

## Delete a stack

Run the following command on the AWS CLI:

```bash
aws cloudformation delete-stack --stack-name <stackname> 
```

## Get stack information

Run the following command on the AWS CLI:

```bash
aws cloudformation delete-stack --stack-name <stackname> 
aws cloudformation describe-stacks --stack-name <stackname> 
aws cloudformation describe-stack-events --stack-name <stackname> 
aws cloudformation describe-stack-instance --stack-name <stackname> 
aws cloudformation describe-stack-resource --stack-name <stackname> 
aws cloudformation describe-stack-resources --stack-name <stackname>
```
 
## Get stack outputs

Run the following command on the AWS CLI:

```bash
aws cloudformation describe-stacks --stack-name <stackname>  --query 'Stacks[0].Outputs' --output table
```

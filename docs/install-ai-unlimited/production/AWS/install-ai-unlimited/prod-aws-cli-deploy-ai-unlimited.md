---
id: prod-aws-cli-deploy-ai-unlimited
title: Teradata - AI Unlimited - Deploy AI Unlimited from the AWS CLI
description: Learn how to deploy AI Unlimited using the AWS Cloudformation Template from the AWS CLI.
sidebar_label: AWS CLI
sidebar_position: 2
---

# Deploy the AI Unimited template from the CLI

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

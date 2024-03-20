---
id: deploy-cli-ai-unlimited-jupyter
title: CloudFormation template from the AWS CLI
description: Learn how to deploy Teradata AI Unlimited CloudFormation Template from AWS CLI.
sidebar_position: 6
tags:
  - Install AI Unlimited
  - Install on AWS
  - Prerequisites to install AI Unlimited
  - Getting started
---

# Deploy CloudFormation Template from the AWS CLI

You can deploy a stack using the `aws cloudformation create-stack` or `aws cloudformation deploy` commands from the AWS CLI. The example in this section uses the create-stack command. See [AWS CLI Command Reference](https://docs.aws.amazon.com/cli/latest/reference/cloudformation/#cli-aws-cloudformation) documentation for the syntax differences between the `create-stack` and `deploy` commands.

## Create a stack
Run the following command on the AWS CLI:

```bash
aws cloudformation create-stack --stack-name all-in-one \
  --template-body file://all-in-one.yaml \
  --parameters file://test_parameters/all-in-one.json \
  --tags Key=ThisIsAKey,Value=AndThisIsAValue \
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

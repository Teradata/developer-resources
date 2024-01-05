---
id: docker-before-you-begin
title: Before you begin
description: Review the set of instructions and prerequisites before installing Teradata AI Unlimited.
sidebar_position: 1
tags:
  - Install AI Unlimited
  - Install AI Unlimited using Docker
  - Prerequisites to install AI Unlimited
  - Getting started
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Before you begin

Make sure you have the following:

- GitHub account: If you don't already have a GitHub account, create one at https://github.com/.
***TEST EDIT My understanding is that they can also use a GitLab account.This seems to be the url for getting one: https://gitlab.com/users/sign_up.So how about: "GitHub or GitLab account: If you don't already have one, create a GitHub account at https://github.com/ or a GitLab account at https://gitlab.com/.***
- CSP account: You can host the engine on AWS or Azure. 


  <Tabs>
  <TabItem value="aws" label="AWS" default>
    - Sign up for an AWS Free Tier account at https://aws.amazon.com/free/.
    
    - Set up AWS CLI. See https://docs.aws.amazon.com/cli/latest/userguide/getting-started-quickstart.html.
    
  </TabItem>
  <TabItem value="azure" label="Azure">
   - Sign up for an Azure free account at https://azure.microsoft.com/en-us/free. 
   
   - Install Azure CLI and configure the credentials on the machine running workspace service. See https://learn.microsoft.com/en-us/cli/azure/get-started-with-azure-cli.
  </TabItem>
  </Tabs>

- Docker: Download and install Docker. See https://docs.docker.com/docker-for-windows/install/.

---
id: prod-before-you-start
title: Before you begin
description: Review the set of instructions and prerequisites before installing Teradata AI Unlimited in production environment.
sidebar_position: 1
tags:
  - Install AI Unlimited
  - Install on AWS
  - Install on Azure
  - Prerequisites to install AI Unlimited
  - Getting started
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Before you begin

Make sure you have the following:

- GitHub or GitLab account: If you don't already have an account, create a GitHub account at https://github.com/ or a GitLab account at https://gitlab.com/.

- Open a terminal window and clone the [Teradata AI Unlimited GitHub repository](https://github.com/Teradata/ai-unlimited). This repository includes sample CloudFormation templates to deploy the workspace service and JupyterLab.

   ```bash
    git clone https://github.com/Teradata/ai-unlimited
   ```
- Cloud Service Provider (CSP) account: You can host the AI Unlimited engine on AWS or Azure. 
    <Tabs>
    <TabItem value="aws" label="AWS" default>
    Contact your organization administrator for AWS Enterprise access. 
    </TabItem>

  <TabItem value="azure" label="Azure">
   Contact your organization administrator for Azure Enterprise access.
   </TabItem>
    </Tabs>



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

***MEM: They can also use a GitLab account, I think. How about: "GitHub or GitLab account: If you don't already have one, create a GitHub account at https://github.com/ or a GitLab account at https://gitlab.com/."*** 

***(Unless, as GitLab is a whole devops solution, maybe it's unlikely they'd get an account for it during this workflow? We can ask.)***

- CSP account: You can host the engine on AWS or Azure. 

***MEM: Let's use "Cloud service provider (CSP) account" for this first occurrence.***

***MEM: Let's use "AI Unlimited engine" to reinforce that it's not an ordinary engine and help with branding.***

***MEM: Possible to pull the tabs up closer to the bullet above them? When all the comments are gone, this will make more sense.***
  <Tabs>
  <TabItem value="aws" label="AWS" default>
    - Sign up for an AWS Free Tier account at https://aws.amazon.com/free/.
    
    - Set up AWS CLI. See https://docs.aws.amazon.com/cli/latest/userguide/getting-started-quickstart.html.

***MEM: Let's use "the AWS command line interface (CLI)" for this first occurrence.***

***MEM: Do they have to download the AWS CLI before they set it up? https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html***
    
  </TabItem>
  <TabItem value="azure" label="Azure">
   - Sign up for an Azure free account at https://azure.microsoft.com/en-us/free. 
   
   - Install Azure CLI and configure the credentials on the machine running ***the*** workspace service. See https://learn.microsoft.com/en-us/cli/azure/get-started-with-azure-cli. 

***MEM: Let's use "the Azure command line interface (CLI)" at least for this first occurrence..***

***MEM: We'll introduce the concept of the workspace service in the Quickstart parent topic--so that will help their understanding here. Thinking... for this install type, the machine running the workspace service is always going to be their local machine, I think--so let's revisit the phrasing after we work through more content.***

***MEM: Wondering if this is a better link: https://learn.microsoft.com/en-us/cli/azure/install-azure-cli? Not yet sure.***

***MEM: Thinking more... do they even need the AWS or Azure CLI if they are installing W and J via Docker?***

  </TabItem>
  </Tabs>



- Docker: Download and install Docker. See https://docs.docker.com/docker-for-windows/install/.

***MEM: Maybe some users would install it on a Mac? Let's use this link instead, which gets them to the download more directly, and they can choose the download and doc for their OS: https://www.docker.com/get-started/.***

---
id: docker-before-you-begin
title: Before you begin
description: Prerequisites for installing Teradata AI Unlimited using Docker.
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

- GitHub or GitLab account: If you don't already have an account, create a GitHub account at https://github.com/ or a GitLab account at https://gitlab.com/.

  ***MEM: (Unless, as GitLab is a whole devops solution, maybe it's unlikely they'd get an account for it during this workflow? We can ask.)***

- Cloud Service Provider (CSP) account: You can host the AI Unlimited engine on AWS or Azure. 
    <Tabs>
    <TabItem value="aws" label="AWS" default>
      - Sign up for an AWS Free Tier account at https://aws.amazon.com/free/.
    
      - Download and set up the AWS Command Line Interface (CLI). See https://docs.aws.amazon.com/cli/latest/userguide/getting-started-quickstart.html.

     ***MEM: Do they have to download the AWS CLI before they set it up? https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html***
    
    </TabItem>

  <TabItem value="azure" label="Azure">
   - Sign up for an Azure free account at https://azure.microsoft.com/en-us/free. 
   
   - Install Azure Command Line Interface (CLI) and configure the credentials on the machine running the workspace service. See https://learn.microsoft.com/en-us/cli/azure/get-started-with-azure-cli. 

   ***MEM: We'll introduce the concept of the workspace service in the Quickstart parent topic--so that will help their understanding here. Thinking... for this install type, the machine running the workspace service is always going to be their local machine, I think--so let's revisit the phrasing after we work through more content.***

   ***MEM: Wondering if this is a better link: https://learn.microsoft.com/en-us/cli/azure/install-azure-cli? Not yet sure.***

   ***MEM: Thinking more... do they even need the AWS or Azure CLI if they are installing W and J via Docker?***

  </TabItem>
    </Tabs>

- Docker: Download and install Docker. See https://www.docker.com/get-started/.

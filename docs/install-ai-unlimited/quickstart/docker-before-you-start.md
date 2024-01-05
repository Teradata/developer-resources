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
***MEM: They can also use a GitLab account. This seems to be the url: https://gitlab.com/users/sign_up. How about: "GitHub or GitLab account: If you don't already have one, create a GitHub account at https://github.com/ or a GitLab account at https://gitlab.com/." Granted, as GitLab is a whole devops solution, it seems unlikely they'd get an account for it in this workflow, themselves. We can ask if it makes sense to include it here.***
- CSP account: You can host the engine on AWS or Azure. ***Let's use "Cloud service provider (CSP)" for this first occurrence, at least (and then see how it goes).***

***let's use "AI Unlimited engine" to reinforce that it's not an ordinary one and help with branding***


  <Tabs>***Possible to pull the tabs up closer to the bullet above them?***
  <TabItem value="aws" label="AWS" default>
    - Sign up for an AWS Free Tier account at https://aws.amazon.com/free/.
    
    - Set up AWS CLI. See https://docs.aws.amazon.com/cli/latest/userguide/getting-started-quickstart.html.
***let's use "the AWS command line interface (CLI) at least for this first occurrence.***
***Do they have to download the AWS CLI first? https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html***
    
  </TabItem>
  <TabItem value="azure" label="Azure">
   - Sign up for an Azure free account at https://azure.microsoft.com/en-us/free. 
   
   - Install Azure CLI and configure the credentials on the machine running ***the*** workspace service. See https://learn.microsoft.com/en-us/cli/azure/get-started-with-azure-cli. ***Let's use "the Azure command line interface (CLI)" at least for this first occurrence.***
***We'll introduce the concept of the workspace service in the Quickstart parent topic--so that will help their understanding here. Thinking... for this install type, the machine running the workspace service is going to be their local machine, I think--so let's revisit the phrasing here after we work through more content.***
***Wondering if this is a better link: https://learn.microsoft.com/en-us/cli/azure/install-azure-cli? Not yet sure.***
  </TabItem>
  </Tabs>

***Thinking more... do they even need the AWS or Azure CLI if they are installing W and J via Docker?***

- Docker: Download and install Docker. See https://docs.docker.com/docker-for-windows/install/.***Maybe some users would install it on a Mac? Let's use this link instead, which gets them to the download more directly, and they can choose the doc to read for their OS.***

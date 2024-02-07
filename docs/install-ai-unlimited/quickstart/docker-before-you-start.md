---
id: docker-before-you-begin
title: Before you begin
description: Prerequisites for installing Teradata AI Unlimited using Docker.
sidebar_position: 2
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

- GitHub or GitLab account: If you don't already have one, create a [GitHub](https://github.com) or [GitLab](https://gitlab.com) account.

- Cloud Service Provider (CSP) account: You can host the AI Unlimited engine on AWS or Azure. 
    <Tabs>
    <TabItem value="aws" label="AWS" default>
      - Sign up for an [AWS Free Tier](https://aws.amazon.com/free) account.
    
      - Download and set up the [AWS Command Line Interface (CLI)](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html).
	
	 ***MEM: Should we add "Optionally," before the AWS CLI bullet?***

   ***TA: Actually, yes, it is an optional step. Will confirm with Jack***
	 
	 ***MEM: Mention credentials, like what's on the Azure tab?*** 
   ***TA: Need to check if the credential part is speciific to Azure***
    
    </TabItem>

  <TabItem value="azure" label="Azure">
   - Sign up for an [Azure](https://azure.microsoft.com/en-us/free) free account . 
   
   - Download and set up the [Azure Command Line Interface (CLI)](https://learn.microsoft.com/en-us/cli/azure/get-started-with-azure-cli). 

 
   ***MEM: Should we add "Optionally," before the Azure CLI bullet?***
   ***TA: Ideally, yes, but let's ask Jack.***
   
   ***MEM: And does "configure the credentials" refer to the section called "How to sign into the Azure CLI"? Wondering if we can align the language, b/c the word "credentials" seems to occur only once and is burried.***  
   
   ***TA: Need to research, will get back on this.*** 
   ***TA (2/7: Configuring credentials is not mandatory. Can confirm with Jack)
  
  </TabItem>
    </Tabs>

- Docker: Download and install [Docker](https://www.docker.com/get-started/). 

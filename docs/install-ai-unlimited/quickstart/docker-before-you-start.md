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

***MEM: Can be "Cloud service provider" (lowercase s and p) because it's not a proper noun - it's generic.***
    <Tabs>
    <TabItem value="aws" label="AWS" default>
      - If you don’t already have an account, you can sign up for an [AWS Free Tier](https://aws.amazon.com/free) account.
    
      - Optionally, install and set up the [AWS Command Line Interface (CLI)](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html).
	  
	  ***MEM: For Jack - so installing and setting up the CLI is just a convenience--a way to make their credentials available (to themselves, I guess). How would you word an additional sentence for the 2nd bullet--to explain "why would I do this?"***
	
  
    </TabItem>

  <TabItem value="azure" label="Azure">
   - If you don’t already have an account, you can sign up for an [Azure free account](https://azure.microsoft.com/en-us/free). 
   
   - Optionally, install and set up the [Azure Command Line Interface (CLI)](https://learn.microsoft.com/en-us/cli/azure/get-started-with-azure-cli). 

   
  </TabItem>
    </Tabs>

- Docker: Install [Docker](https://www.docker.com/get-started/) on your machine. 

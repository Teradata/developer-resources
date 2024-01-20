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
  
  ***MEM: The first bullet can be even shorter: "GitHub or GitLab account: If you don't already have one, create a [GitHub](https://github.com/) or [GitLab](https://gitlab.com/) account."***

- Cloud Service Provider (CSP) account: You can host the AI Unlimited engine on AWS or Azure. 
    <Tabs>
    <TabItem value="aws" label="AWS" default>
      - Sign up for an AWS Free Tier account at https://aws.amazon.com/free/.
    
      - Download and set up the AWS Command Line Interface (CLI). See https://docs.aws.amazon.com/cli/latest/userguide/getting-started-quickstart.html.
	
	 ***MEM: The link text can be regular words. It's ok not to show the urls. The bullets can be simply: "Sign up for an [AWS Free Tier](https://aws.amazon.com/free/) account." and "Download and set up the [AWS Command Line Interface (CLI)](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-quickstart.html)."***
	 
	 ***MEM: Is this a better link? The other one goes straight to setup, but I assume they have to download first? https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html***
	 
	 ***MEM: Should we add "Optionally," before the AWS CLI bullet?***
	 
	 ***MEM: Mention credentials, like what's on the Azure tab?*** 
    
    </TabItem>

  <TabItem value="azure" label="Azure">
   - Sign up for an Azure free account at https://azure.microsoft.com/en-us/free. 
   
   - Install Azure Command Line Interface (CLI) and configure the credentials on the machine running the workspace service. See https://learn.microsoft.com/en-us/cli/azure/get-started-with-azure-cli. 

   ***MEM: See comments on the AWS tab about not showing the urls, as a way to shorten content.***
	
   ***MEM: Add "the" before "Azure Command Line Interface (CLI)"***
   
   ***MEM: Should we add "Optionally," before the Azure CLI bullet?***
   
   ***MEM: We'll introduce the concept of the workspace service in the overall Welcome topic--so that will help their understanding here, hopefully. Thinking... for this install type, the machine running the workspace service is always going to be their local machine, I think. Better to say "your machine"? Or just end the sentence with "the credentials"?***
   
   ***MEM: And does "configure the credentials" refer to the section called "How to sign into the Azure CLI"? Wondering if we can align the language, b/c the word "credentials" seems to occur only once and is burried.***   
  

  

  </TabItem>
    </Tabs>

- Docker: Download and install Docker. See https://www.docker.com/get-started/.

***MEM: In the last bulet, the second "Docker" can be the link text.***

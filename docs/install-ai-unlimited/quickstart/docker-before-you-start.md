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

- GitHub or GitLab account: If you don't already have an account, you can create a free [GitHub](https://github.com) or [GitLab](https://gitlab.com) account.

- Custom GitHub or GitLab App: Connect your GitHub or GitLab identity to AI Unlimited using OAuth 2.0 authentication. See [Create a GitHub or GitLab OAuth app](/docs/install-ai-unlimited/quickstart/create-github-oauth-app.md)

***Seems that GitHub/GitLab apps and OAuth apps are not the same thing? (https://docs.github.com/en/apps/using-github-apps/about-using-github-apps). We could just say "GitHub or GitLab OAuth app: Create one." ("Create one" links to the topic.) I think it's ok to remove the sentence that begins with "Connect your..." and rely on the "Create a GitHub or GitLab account" topic to explain.***

- [Cloud service provider (CSP)](/docs/glossary.md#glo-csp) account: AWS or Azure. 

    <Tabs>
    <TabItem value="aws" label="AWS" default>
      - If you don’t already have an account, you can sign up for an [AWS Free Tier](https://aws.amazon.com/free) account.
    
      - Optionally, install and set up the [AWS Command Line Interface (CLI)](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html).
      </TabItem>

  <TabItem value="azure" label="Azure">
   - If you don’t already have an account, you can sign up for an [Azure free account](https://azure.microsoft.com/en-us/free). 
   
   - Optionally, install and set up the [Azure Command Line Interface (CLI)](https://learn.microsoft.com/en-us/cli/azure/get-started-with-azure-cli). 

   
  </TabItem>
    </Tabs>

- Docker: Install [Docker](https://www.docker.com/get-started/) on your machine. 

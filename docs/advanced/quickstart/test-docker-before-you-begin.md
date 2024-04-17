---
id: docker-before-you-begin
title: QuickStart - Before you begin
description: Learn what to do before you run the AI Unlimited manager and JupyterLab using Docker.
sidebar_label: Before you begin
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Before you begin

Prepare for installing the QuickStart.

## Prerequisites

***Will add more details as to why each prereq is needed.***

Make sure you have the following: 

- [Cloud service provider (CSP)](/docs/glossary.md#glo-csp) account: [AWS](https://aws.amazon.com) or [Azure](https://azure.microsoft.com) 

- Optionally, your CSP's command-line interface (CLI): [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html) or [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/get-started-with-azure-cli)

- [GitHub](https://github.com) or [GitLab](https://gitlab.com) account

- Install [Docker](https://www.docker.com/get-started/) on your machine

## Subscribe to AI Unlimited

Subscribe to AI Unlimited on your CSP's marketplace:
- AWS (link)
- Azure (link)

Then return to this documentation site to continue.
 
***What do we really need to say about this task? We should not repeat what's on the Marketplace or provide self-evident steps--unless there's a good reason to.***
 
***We can add tabs for AWS/Azure if needed.***
 
***If they have trouble subscribing, should they contact the CSP?***
  
***Where can they see their hours consumed or upcoming bills? Anything like that to point out?***
 
***Might they want to talk with us for help selecting an instance size? Can we point them to a blog entry or the Community--for any topics related to subscribing?***
 
## Create a GitHub or GitLab OAuth app

import MyPartial from '/docs/_partials/_create-oauth-app.mdx';

<MyPartial />

## Get engine deployment details

***A version of this for the old UI and new UI?***
  
When you [set up AI Unlimited](/docs/install-ai-unlimited/quickstart/docker-setup-b.md), you'll provide details for deploying the engine on your CSP. 

Copy this template to get these details from someone on your organization's cloud neworking and security team. ***What is the best way to describe this team to this audience? "Cloud IT team?" "Cloud operations team"?*** 
<Tabs>
<TabItem value="aws" label="AWS">
```bash
Default region:
Default subnet:
Default security groups: 
```
</TabItem>

<TabItem value="azure" label="Azure">
	```bash
	Default region:
    Default security groups: 
	```
</TabItem>
</Tabs> 

Or, get these details from your CSP's console.
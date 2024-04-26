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

Get ready for the QuickStart.

## Prerequisites

In addition to the standard [AI Unlimited prerequisites](/docs/install-ai-unlimited/#gs-prerequisties), make sure you have [Docker](https://www.docker.com/get-started/) installed on your machine.


## Get engine deployment details

***Any changes to make for the old UI? Keep both files - old (PPP, initially) and new (longer-term)***

***Come back to this after finishing setup.***

When you [set up AI Unlimited](/docs/install-ai-unlimited/quickstart/docker-setup-b.md), you'll complete fields to provide details about deploying the engine. 

You can get the values from your cloud service provider's console. Or, copy the fields shown here, and ask an admin for their values. 

<Tabs>
<TabItem value="aws" label="AWS">
```bash
Default region
Default subnet
Default security group
```
</TabItem>

<TabItem value="azure" label="Azure">
	```bash
	Default region
    Default security group
	```
</TabItem>
</Tabs> 


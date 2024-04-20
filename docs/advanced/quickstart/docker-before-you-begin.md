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

***Depending on how the BYB ends up (AWS & Azure combo?), and depending on the deployment details discussion (although, could have 3 tabs), on the QS parent page, we could tell them to install Docker. Then, we'd have just the 1 BYB for all 3. Minor wrinkle: For the QS the CSP is only for the engine, but for the full install, it's for the engine and manager.That's fine b/c we are treating the QS as an exception to the normal install--and it's content makes clear how it's different.)***

## Prerequisites

Make sure you have the following: 

- A pay-as-you-go [AWS](https://aws.amazon.com) or [Azure](https://azure.microsoft.com) account for deploying the engine

- A [GitHub](https://github.com) or [GitLab](https://gitlab.com) account for user authentication and storing project information

- [Docker](https://www.docker.com/get-started/) installed on your machine


## Create a GitHub or GitLab OAuth app

import MyPartial from '/docs/_partials/_create-oauth-app.mdx';

<MyPartial />


## Get engine deployment details

***Any changes to make for the old UI? Keep both files - old (PPP, initially) and new (longer-term)***

***Come back to this after finishing setup.***
  
When you [set up AI Unlimited](/docs/install-ai-unlimited/quickstart/docker-setup-b.md), you'll provide details for deploying the engine. 

You can copy this template to get these details from your admin. Or, get them from your cloud service provider console or portal.

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


## Subscribe to AI Unlimited

Subscribe on your cloud service provider's marketplace:
- AWS ***(link)***
- Azure ***(link)***


## Next step

[Install the manager and JupyterLab](/docs/advanced/quickstart/docker-install-ai-unlimited-jupyter.md).
---
id: setup-ai-unlimited
title: Set up AI Unlimited
description: Steps to setup AI Unlimited.
sidebar_position: 5
tags:
  - Install AI Unlimited
  - Install using Docker
  - Load Docker Image
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Set up AI Unlimited

Access AI Unlimited setup:

- **http://localhost:3000** (if you are using the [QuickStart](/docs/install-ai-unlimited/quickstart/index.md))

- **http://[ip_or_hostname]:[port]** (for a [demo](/docs/install-ai-unlimited/demo/index.md) or [production](/docs/install-ai-unlimited/production/index.md) installation)

:::note
For a demo or production installation, the url might or might not include a port.
:::

Complete the setup. For additional information, click a section below. 

***The content here is a reference--for when the information users need is too lengthly for the UI. So some (just some) fields will have a "Learn more" link that takes users here.***

***This topic will be re-used across the 3 install types.***

***Any field that appears on this page has a "Learn more" link on the Setup UI.***


<details>

<summary>Step 1: The basics</summary>

**TLS**

</details>


<details>

<summary>Step 2: Git integration</summary>

**OAuth app**

(Brief explanation of what it is, and link to the Git article and the our topic on creating the app. But make the UI more self-evident first.)

(Then brief explanation of the authentication process--what's happening.)

</details>


<details>

<summary>Step 3: Cloud integration</summary>

<Tabs>
<TabItem value="aws1" label="AWS">

**Network type** [will be moved here on the UI]
**Public** and **private** refer to the engine's IP address. Indicate whether AI Unlimited should communicate with the engine at a public or private IP address. [Is the type of network determined during the setting of the cloud parms? Tell them where/when they chose it and where to see it.]

**IAM role**
If AI Unlimited creates this [IAM role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create.html), it creates it for the AWS [cluster](/docs/glossary.md#glo-cluster) that deploys the engine&mdash;each time you deploy the engine. If your organization creates the role, it must be broad enough for all the clusters that might deploy the engine.


</TabItem>
<TabItem value="azure" label="Azure">

**Network type** [will be moved here on the UI]

**IAM role**


[add any Azure-specific fields that have "Learn more"s]
  
</TabItem>
</Tabs>

</details>




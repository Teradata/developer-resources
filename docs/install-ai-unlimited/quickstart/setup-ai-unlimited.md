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

***This topic will be re-used across the 3 install types.***

Access AI Unlimited setup:

- **http://localhost:3000** (if you are using the [QuickStart](/docs/install-ai-unlimited/quickstart/index.md))

- **http://[ip_or_hostname]:[port]** (for a [demo](/docs/install-ai-unlimited/demo/index.md) or [production](/docs/install-ai-unlimited/production/index.md) installation)

Complete the setup in AI Unlimited. To learn more about certain fields, click a section below. 

<details>

<summary>Step 1: The basics</summary>

**TLS**

Use [Transport Layer Security (TLS)](/docs/glossary.md#glo-tls) to secure connections to the AI Unlimited service and safeguard your data in transit.


**Certificates**

If you have a certificate issued by a trusted Certificate Authority (CA), you can provide it and its key. You'll be responsible for managing the certificate lifecycle, including renewal and validation. If you have specific requirements or need more control over your certificates, bringing your own is a good option.

Or use a Teradata system-generated certificate. It automatically renews before it expires.

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

**Public** or **Private** refers to how AI Unlimited should communicate with the engine. The engine might have a public IP address, a private IP address, or both. Indicate the type of IP address to which AI Unlimited should connect. [Is it determined by a cloud parm? Tell them where/when they chose it and where to see it?]


**IAM role**

If AI Unlimited creates this [IAM role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create.html), it creates it for the AWS [cluster](/docs/glossary.md#glo-cluster) that deploys the engine&mdash;each time you deploy the engine. If your organization creates the role, it must be broad enough for all the clusters that might deploy the engine.


</TabItem>
<TabItem value="azure" label="Azure">


**Network type** [will be moved here on the UI]

[potentially different for AWS vs. Azure if this relates to a cloud parm?]

</TabItem>
</Tabs>

</details>




---
id: setup-ai-unlimited
title: Set up AI Unlimited
description: Steps to setup AI Unlimited.
sidebar_position: 5
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Set up AI Unlimited

Access AI Unlimited setup:

- **http://localhost:3000** (if you are using the [QuickStart](/install-ai-unlimited/quickstart/index.md))

- **http://[ip_or_hostname]:[port]** (for a [demo](/install-ai-unlimited/demo/index.md) or [production](/install-ai-unlimited/production/index.md) installation)

Complete the setup in AI Unlimited. To learn more about certain fields, click a section below. 

<details>

<summary>Step 1: The basics</summary>

**TLS**

Use [Transport Layer Security (TLS)](/glossary.md#glo-tls) to secure connections to the AI Unlimited service and safeguard your data in transit.


**Certificates**

If you have a certificate issued by a trusted Certificate Authority (CA), you can provide it and its key. You'll be responsible for managing the certificate lifecycle, including renewal and validation. If you have specific requirements or need more control over your certificates, bringing your own is a good option.

Or use a Teradata system-generated certificate. It automatically renews before it expires.

</details>


<details>

<summary>Step 2: Git integration</summary>

**OAuth app**

An OAuth app allows a user to grant access to their account on one website or service to their account on another, without sharing their password. 

AI Unlimited uses the OAuth app you, or someone at your organization, created to authorize access to your GitHub or GitLab account. This allows AI Unlimited to store user and project information there. 

Selecting **Authenticate** establishes the access and returns you to AI Unlimited to complete the setup.

[Create a Git OAuth app](/install-ai-unlimited/quickstart/create-github-oauth-app) (QuickStart)\
[Create a Git OAuth app](/install-ai-unlimited/demo) (Demo installation)\
[Create a Git OAuth app](/install-ai-unlimited/production) (Production installation)

</details>


<details>

<summary>Step 3: Cloud integration</summary>

<Tabs>
<TabItem value="aws1" label="AWS">


**Network type**

Public or Private refers to how AI Unlimited should communicate with the engine. The engine might have a public IP address, a private IP address, or both. Indicate the type of IP address to which AI Unlimited should connect. ***Is it determined by a cloud parm? Tell them where/when they chose it and where to see it? Potentially different for AWS vs. Azure.***


**IAM role**

If AI Unlimited creates the [IAM role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create.html), it creates it for the AWS [cluster](/glossary.md#glo-cluster) that deploys the engine&mdash;each time you deploy the engine. If your organization creates the role, it must be broad enough to include all the clusters that might deploy the engine.


</TabItem>
<TabItem value="azure" label="Azure">


**Network type**

Public or Private refers to how AI Unlimited should communicate with the engine. The engine might have a public IP address, a private IP address, or both. Indicate the type of IP address to which AI Unlimited should connect. ***Is it determined by a cloud parm? Tell them where/when they chose it and where to see it? Potentially different for AWS vs. Azure.***

</TabItem>
</Tabs>

</details>




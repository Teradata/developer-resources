---
id: setup
title: Help with post-installation setup
description: Find additional information about some of the setup fields.
sidebar_label: Set up AI Unlimited (new ui - post ppp)
sidebar_position: 4
pagination_prev: null
pagination_next: null
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Set up AI Unlimited (new UI - post ppp)

After you install the manager, access it using the URL you received at the end of the installation process: `http://[ip_or_hostname]:[port]`.

Or for the QuickStart, use `http://localhost:3000`.

***(remove reference to QuickStart?)***

In the manager, complete the three steps to set up AI Unlimited. You'll find additional information about some of the fields here. 

:::note
Make sure you have values for the minimum configuration of the cloud integration: **Region**, **Subnet**, and **("Security group names" is not required & there are other fields for limiting inbound traffic - none look to be required)**. If you are unsure of them, or any other setup details, we recommend that you reach out to your admin.
:::

<details>

<summary>Step 1: Git integration</summary>

**OAuth app**

An OAuth app allows a user to grant access to their account on one website or service to their account on another, without sharing their password. 

AI Unlimited uses your [OAuth app](/docs/advanced/git-requirements#oauth.md) to authorize access to your GitHub or GitLab account. This allows AI Unlimited to store user and project information there. 

Selecting **Authenticate** establishes this access and returns you to the setup.

<Tabs>
<TabItem value="gitlab" label="GitLab">

**Group access**

Two groups in your GitLab account can help with user and repository management and access control. 

Any member of the **authorizing group** can sign in to the AI Unlimited manager with their GitLab credentials and authentiate themselves. ***If they don't put a group here, can any GitLab account user sign in and authenticate?***

The **repository group** is the group in which all AI Unlimited project repositories are stored. ***What happens if they don't use this field?***

</TabItem>

<TabItem value="github" label="GitHub">

**Organization access**

Two organizations in your GitHub account can help with user and repository management and access control. 

Any member of the **authorizing organization** can sign in to the AI Unlimited manager with their GitHub credentials and authentiate themselves. **If they don't put a group here, can any GitLab account user sign in and authenticate?***

The **repository organization** is the organizaion in which all AI Unlimited project repositories are stored. ***What happens if they don't use this field?***

</TabItem>
</Tabs>

</details>


<details>

<summary>Step 2: The basics</summary>

**TLS**

Use [Transport Layer Security (TLS)](/docs/glossary.md#glo-tls) to secure connections to the AI Unlimited service and safeguard your data in transit.


**Certificates**

If you have a certificate issued by a trusted Certificate Authority (CA), you can provide it and its key. You'll be responsible for managing the certificate lifecycle, including renewal and validation. If you have specific requirements or need more control over your certificates, bringing your own is a good option.

Or use a Teradata system-generated certificate. It automatically renews before it expires.

</details>


<details>

<summary>Step 3: Cloud integration</summary>

You can modify cloud integration parameters ***(which ones?)*** from a Jupyter notebook when you connect to the AI Unlimited engine. 

<Tabs>
<TabItem value="aws1" label="AWS">

**IAM role**

If AI Unlimited creates the [IAM role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create.html), it creates it for the AWS [cluster](/docs/glossary.md#glo-cluster) that deploys the engine&mdash;each time you deploy the engine. If your organization creates the role, it must be broad enough to include all the clusters that might deploy the engine.

***This content should probably link to the Create Role topic, which refers to the policy. But on the figma, looks like there's a plan to add a copy icon for the policy. right on the UI. Revisit after working on the AWS role topic.***

</TabItem>

<TabItem value="azure" label="Azure">

</TabItem>
</Tabs>

**Network type**

Public or Private refers to how AI Unlimited should communicate with the engine. The engine might have a public IP address, a private IP address, or both. Indicate the type of IP address to which AI Unlimited should connect.

</details>


## What's next

In a Jupyter notebook, start [exploring and analyzing data](/docs/explore-and-analyze-data/).

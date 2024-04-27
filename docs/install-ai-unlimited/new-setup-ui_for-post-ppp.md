---
id: setup
title: Help with post-installation setup
description: Find additional information about some of the setup fields.
sidebar_label: Set up AI Unlimited (test - new ui)
sidebar_position: 4
pagination_prev: null
pagination_next: null
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Set up AI Unlimited (test - new UI)

After you install the manager, access it using the url provided at the end of the installation process.

Sign in with your GitHub or GitLab credentials, then complete the setup. ***re-watch recording***

To learn more about certain fields, click a section below. 

***Need to figure out how to marry "manager" with just "AI Unlimited". Possible for "manager" to be used only in installation content and after that, from setup onward, it's just "AI Unlimited"? Make it so.***

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

An OAuth app allows a user to grant access to their account on one website or service to their account on another, without sharing their password. 

AI Unlimited uses your [OAuth app](/docs/advanced/git-requirements#oauth.md) to authorize access to your GitHub or GitLab account. This allows AI Unlimited to store user and project information there. 

Selecting **Authenticate** establishes the access and returns you to the setup. ***add something about how all users will be authenticated***

**Group access**

Something about Groups in general--tie group concept to repository concept and authorization (not authentication?) concept.

</details>


<details>

<summary>Step 3: Cloud integration</summary>

<Tabs>
<TabItem value="aws1" label="AWS">

**IAM role**

If AI Unlimited creates the [IAM role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create.html), it creates it for the AWS [cluster](/docs/glossary.md#glo-cluster) that deploys the engine&mdash;each time you deploy the engine. If your organization creates the role, it must be broad enough to include all the clusters that might deploy the engine. ***come back to this - in the doc, find the policy to which the UI refers ("create an IAM role using this policy")***

***Inbound security - Permission boundaries is new***

**Network type**

Public or Private refers to how AI Unlimited should communicate with the engine. The engine might have a public IP address, a private IP address, or both. Indicate the type of IP address to which AI Unlimited should connect. ***Is it determined by a cloud parm? Tell them where/when they chose it and where to see it?***

</TabItem>

<TabItem value="azure" label="Azure">

**Network type**

Public or private refers to how AI Unlimited should communicate with the engine. The engine might have a public IP address, a private IP address, or both. Indicate the type of IP address to which AI Unlimited should connect. ***Is it determined by a cloud parm? Tell them where/when they chose it and where to see it?***

</TabItem>
</Tabs>

</details>




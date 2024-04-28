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

After you install the manager, access it using the URL you received by deploying its cloud resources: `http://[ip_or_hostname]:[port]`.

Then, in the manager, complete the three setup steps to set up AI Unlimited. 

You'll find additional information about some of the fields here. 

:::note
If you installed the manager yourself, some setup details will be familiar from the cloud template. If you did not install the manager yourself, or you need guideance, you might reach out to an admin.
:::

<details>

<summary>Step 1: Git integration</summary>

<Tabs>
<TabItem value="gitlab" label="GitLab">

**OAuth app**

An OAuth app allows a user to grant access to their account on one website or service to their account on another, without sharing their password. 

AI Unlimited uses your [OAuth app](/docs/advanced/git-requirements#oauth.md) to authorize access to your GitHub or GitLab account. This allows AI Unlimited to store user and project information there. 

Selecting **Authenticate** establishes this access and returns you to the setup.

**Group access**

xxxxx

Something about Groups in general--tie group concept to repository concept and authorization (not authentication?) concept.

</TabItem>

<TabItem value="github" label="GitHub">

**OAuth app**

An OAuth app allows a user to grant access to their account on one website or service to their account on another, without sharing their password. 

AI Unlimited uses your [OAuth app](/docs/advanced/git-requirements#oauth.md) to authorize access to your GitHub or GitLab account. This allows AI Unlimited to store user and project information there. 

Selecting **Authenticate** establishes this access and returns you to the setup.

**Organization access**

xxxx

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

<Tabs>
<TabItem value="aws1" label="AWS">

**IAM role**

If AI Unlimited creates the [IAM role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create.html), it creates it for the AWS [cluster](/docs/glossary.md#glo-cluster) that deploys the engine&mdash;each time you deploy the engine. If your organization creates the role, it must be broad enough to include all the clusters that might deploy the engine.

***This content should probably link to the Create Role topic, which refers to the policy. But on the figma, looks like there's a plan to add a copy icon for the policy. right on the UI. Revisit after working on the AWS role topic.***


**Network type**

Public or Private refers to how AI Unlimited should communicate with the engine. The engine might have a public IP address, a private IP address, or both. Indicate the type of IP address to which AI Unlimited should connect.

</TabItem>

<TabItem value="azure" label="Azure">

**Network type**

Public or private refers to how AI Unlimited should communicate with the engine. The engine might have a public IP address, a private IP address, or both. Indicate the type of IP address to which AI Unlimited should connect.

</TabItem>
</Tabs>

</details>


## What's next

In a Jupyter notebook, start [exploring and analyzing data](/docs/explore-and-analyze-data/).



github

**Authorizing Organization**: Restricts AI Unlimited access to users belonging to a specific organization on GitHub. If left blank, any user with a GitHub account can authorize and access AI Unlimited.

**Repository Organization**: Create projects within the repository. If left blank, your projects are located in your personal GitHub space. Teradata recommends specifying this value to collaborate and centralize projects within a specific group.


gitlab

**Authorizing Group ID**: The unique identifier assigned to a group within GitLab that has the authorization to access AI Unlimited. 

**Repository Group ID**: The unique identifier assigned to the repository where the AI Unlimited projects are to be stored. Use this field to organize repositories into logical groups, allowing for easier management and access control.
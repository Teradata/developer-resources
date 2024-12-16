---
id: setup-ai-unlimited
title: Set up AI Unlimited
description: Learn about the setup details.
sidebar_label: Set up AI Unlimited
sidebar_position: 4
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Set up AI Unlimited

After you install the [manager](../glossary.md#ai-unlimited-manager), access the AI Unlimited setup using the URL you received at the end of the installation process: `http://[ip_or_hostname]:[port]`. 

:::note
By setting up AI Unlimited, you become the AI Unlimited owner at your organization.
:::

:::tip
For setup help, email the <a href="mailto:aiunlimited.support@Teradata.com">support team</a> or ask the [community](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa).
:::

<a id="setup-fields"></a>	
## Complete steps 1-3 in the manager

Find additional information here.

<details>

<summary>Step 1: Git integration</summary>

**OAuth app**

An OAuth app allows a user to grant access to their account on one website or service to their account on another, without sharing their password. 

AI Unlimited uses your [OAuth app](./create-oauth-app.md) to authorize access to your GitLab or GitHub account. This allows AI Unlimited to store user and project information there. 

GitLab or GitHub uses the authorization callback URL, after authenticating a user, to redirect back to the manager. 

Selecting **Authenticate**, and signing in, establishes this access and returns you to the setup. 

:::warning
To allow the authentication window to appear, make sure that in your browser settings popups are enabled for the manager site.
:::

<Tabs>
<TabItem value="gitlab" label="GitLab">

**Group access**

Two groups in your GitLab account can help with access control and project repository management. 

Members of the **Authorizing group** can sign in to the AI Unlimited manager with their GitLab credentials and authenticate themselves. If you leave this field blank, only you, the admin user, can sign in and authenticate yourself. No other user will be able to sign in to the manager.

The **Repository group** is the group in which all AI Unlimited project repositories are stored. If you leave this field blank, projects are stored in your personal GitLab space.

</TabItem>

<TabItem value="github" label="GitHub">

**Organization access**

Two organizations in your GitHub account can help with access control and project repository management. 

Members of the **Authorizing organization** can sign in to the AI Unlimited manager with their GitHub credentials and authenticate themselves. If you leave this field blank, only you, the admin user, can sign in and authenticate yourself. No other user will be able to sign in to the manager.

The **Repository organization** is the organization in which all AI Unlimited project repositories are stored. If you leave this field blank, projects are stored in your personal GitHub space.

</TabItem>
</Tabs>

</details>


<details>

<summary>Step 2: Cloud setup</summary>

Some of these fields are for default values. Later, when you deploy the engine from a Jupyter notebook, you can specify values, different from the defaults, for that deployment.

<Tabs>
<TabItem value="aws1" label="AWS">

**IAM role**

If AI Unlimited creates the IAM role for the engine, it creates it for the AWS [cluster](../glossary.md#cluster) that deploys the engine&mdash;each time you deploy the engine. If [your organization creates the role](../resources/aws-requirements.md#provide-roles-created-by-your-organization) for the engine, it must be broad enough to include all the clusters that might deploy the engine.

**Inbound security: Security group names**

If you deploy the engine in the same Virtual Private Cloud as AI Unlimited, include the AI Unlimited security group to ensure that AI Unlimited can communicate with the engine.

</TabItem>

<TabItem value="azure" label="Azure">

**Inbound security: Application security group names**

If you deploy the engine in the same Virtual Private Cloud as AI Unlimited, include the AI Unlimited application security group to ensure that AI Unlimited can communicate with the engine.

</TabItem>
</Tabs>

**Network type: Public** or **Private** 

This refers to how AI Unlimited should communicate with the engine. The engine might have a public IP address, a private IP address, or both. Indicate the type of IP address to which AI Unlimited should connect.

</details>


<details>

<summary>Step 3: Application settings</summary>

**TLS**

Use [Transport Layer Security (TLS)](../glossary.md#transport-layer-security) to secure connections to the AI Unlimited service and safeguard your data in transit.

**Certificates**

If you have a certificate issued by a trusted Certificate Authority (CA), you can provide it and its key. You'll be responsible for managing the certificate lifecycle, including renewal and validation. If you have specific requirements or need more control over your certificates, bringing your own is a good option.

Or use a Teradata system-generated certificate. It automatically renews before it expires.

</details>


## Before you leave

1. On your **Profile**, copy your API key.
    You'll use it when you connect to the engine from a Jupyter notebook.

2. If you enabled TLS, you'll see a restart message. Select **Restart now**. This restarts the AI Unlimited service with TLS in place. 

:::note
If you return to the setup and change any TLS setting (enable TLS, disable TLS, or change the certificate), you'll need to restart AI Unlimited again.
:::

Congratulations! AI Unlimited setup is now complete.


:::note
Because you are the AI Unlimited owner you can return to the setup anytime to [change any settings](../manage-ai-unlimited/change-settings.md). 
:::


## What's next

In a Jupyter notebook, start [exploring and analyzing data](../explore-and-analyze-data/index.md).













 








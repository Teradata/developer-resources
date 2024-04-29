---
id: setup-ai-unlimited
title: Setup 
description: Get more information about certain fields in the AI Unlimited setup.
sidebar_label: Set up AI Unlimited
sidebar_position: 3
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Set up AI Unlimited

After you install the manager, access it using the URL you received at the end of the installation process: `http://[ip_or_hostname]:[port]`. 

Or for the QuickStart, use `http://localhost:3000`.


:::note
***(verifying)*** Make sure you have values for the minimum configuration for the cloud integration: **Default region**, **Default subnet**, and **Default security group**. If you are unsure of them, or any other setup details, we recommend that you reach out to your admin.
:::


<details>

<summary>Initial setup</summary>

**Base URL**

The URL you used to access this setup. This is the AI Unlimited URL you received when you installed the manager.


**Engine IP Network Type**

Select **Private** if you're deploying the engine in the same Virtual Private Cloud as AI Unlimited.

Public or Private refers to how AI Unlimited should communicate with the engine. The engine might have a public IP address, a private IP address, or both. Indicate the type of IP address to which AI Unlimited should connect.


**Service TLS Certificate** and **Service TLS Certificate Key**

We recommend that you use [Transport Layer Security (TLS)](/docs/glossary.md#glo-tls) to secure connections to the AI Unlimited service and safeguard your data in transit.

If you have a certificate issued by a trusted Certificate Authority (CA), you can provide it and its key. You'll be responsible for managing the certificate lifecycle, including renewal and validation. If you have specific requirements or need more control over your certificates, bringing your own is a good option.

Or select **Generate Certs** to use a Teradata system-generated certificate. It automatically renews before it expires.

Select **Save Changes**.

</details>

<details>

<summary>Cloud integration</summary>

You can modify these parameters **(all of them?)** from a Jupyter notebook when you connect to the AI Unlimited engine.

<Tabs>
<TabItem value="aws1" label="AWS">

**Default region**

The AWS region in which to deploy the engine. We recommend choosing the region closest to your primary work location.

**Default subnet ID**

The [AWS subnet](https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html) in which to deploy the engine. The AWS Management Console shows the subnets in the region.

**Default IAM role**

The [IAM role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create.html) for the AWS resources that deploy the engine. Leave blank to let AI Unlimited create the role&mdash;if your security allows this. Otherwise, create an IAM using this policy **(add link)**.

If AI Unlimited creates the IAM role, it creates it for the AWS [cluster](/docs/glossary.md#glo-cluster) that deploys the engine&mdash;each time you deploy the engine. If your organization creates the role, it must be broad enough to include all the clusters that might deploy the engine.

**Resource tags**

You can [tag](https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html) the AWS resources that deploy the engine to make them easier to manage.

**Inbound security**

Use these fields to allow source traffic to reach the engine:

- [CIDRs](/docs/glossary.md#glo-cidr)
- [Security groups](https://docs.aws.amazon.com/vpc/latest/userguide/working-with-security-groups.html)
***asking about: "make sure the default security group is the same as the one in the template to ensure AI Unlimited can communicate with the engine"***
- Role prefix ***(link)(change to "prefix list name"?)***
- [Permissions boundary](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html)

Select **Save Changes**.

</TabItem>

<TabItem value="azure" label="Azure"> 

***Smit to add Azure to the figma***

**Default region**

The Azure region in which to deploy the engine. We recommend choosing the region closest to your primary work location.

**Resource tags**

You can [tag](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources) the Azure resources that deploy the engine to make them easier to manage.

Use these fields to allow source traffic to reach the engine:
- [CIDRs](/docs/glossary.md#glo-cidr)
- [Network security groups](https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview) ***once I see the Azure UI, make sure the name is correct there.***

Select **Save Changes**.

</TabItem>
</Tabs>

</details>



<details>

<summary>Git integration</summary>

<Tabs>

<TabItem value="github" label="GitHub">

**GitHub client ID** and **GitHub client secret**

The credentials received from GitHub when your [OAuth app was created](/docs/install-ai-unlimited/git-requirements.md).

**Authorizing organization** and **Repository organization**

Two organizations in your GitHub account can help with user and repository management and access control.

Members of the authorizing organization will be able to sign in and authenticate themselves in AI Unlimited. If you don't specify a group, any GutHub account user can sign in and authenticate.

All project repositories will be created in the repository organization. If you don't specify a group, the projects will all be in your personal GitHub space.

</TabItem>

<TabItem value="gitlab" label="GitLab">

***need to see GitLab UI**

**GitLab client ID** and **GitLab client secret**

The credentials received from GitLab when your [OAuth app was created](/docs/install-ai-unlimited/git-requirements.md).

**Authorizing organization** and **Repository organization**

Two organizations in your GitLab account can help with user and repository management and access control.

Members of the authorizing organization will be able to sign in and authenticate themselves in AI Unlimited. If you don't specify a group, any GutLab account user can sign in and authenticate.

All project repositories will be created in the repository organization. If you don't specify a group, the projects will all be in your personal GitLab space.


**GitLab base URL**

The URL for your GitLaB account.

Select **Authenticate**, then sign in using your GitHub credentials.

</TabItem>
</Tabs>

</details>

Go to your **Profile**, and copy your API key. You'll use it when you connect to the engine from a Jupyter notebook.

If you enabled TLS, select **Restart** to restart the AI Unlimited service and apply the change. ***Only if returning to change the TLS setting?***



## What's next

In a Jupyter notebook, start [exploring and analyzing data](/docs/explore-and-analyze-data/).

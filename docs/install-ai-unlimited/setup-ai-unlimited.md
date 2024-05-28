---
id: setup-ai-unlimited
title: Set up AI Unlimited
description: Learn about the setup details.
sidebar_label: Set up AI Unlimited
sidebar_position: 3
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Set up AI Unlimited

After you install the [manager](/docs/glossary.md#ai-unlimited-manager), access the AI Unlimited setup using the URL you received at the end of the installation process: `http://[ip_or_hostname]:[port]`. 

:::note
By setting up AI Unlimited, you become the AI Unlimited admin at your organization.
:::

:::tip
For setup support, ask the [community](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa).
:::

<a id="setup-fields"></a>	
## Complete the fields

Find information about each group of fields here.

<details>

<summary>Basic setup</summary>

<br />
**AI Unlimited base URL**&mdash;The URL you used to access the setup. You received it when you installed the manager.


**Git provider**&mdash;GitHub or GitLab.

**AI Unlimited log level**&mdash;The level of detail to see in AI Unlimited logs.

**Engine IP network type**

Select **Private** if you deploy the engine in the same Virtual Private Cloud as AI Unlimited.

**Public** or **Private** refers to how AI Unlimited should communicate with the engine. The engine might have a public IP address, a private IP address, or both. Indicate the type of IP address to which AI Unlimited should connect.

**Use TLS**

We recommend that you use [Transport Layer Security (TLS)](/docs/glossary.md#transport-layer-security) to secure connections to AI Unlimited and safeguard your data in transit.

- If you are using an [application load balancer (ALB)](/docs/glossary.md#application-load-balancer), with certification termination enabled, select **False**.

- If you are using a [network load balancer (NLB)](/docs/glossary.md#network-load-balancer) or no load balancer, select **True.**

	- **AI Unlimited TLS certificate** and **AI Unlimited TLS certificate key**&mdash;If you have a certificate issued by a trusted Certificate Authority (CA), you can provide it and its key. You'll be responsible for managing the certificate lifecycle, including renewal and validation. If you have specific requirements or need more control over your certificates, bringing your own is a good option.

	- Or select **Generate Certs** to use a Teradata system-generated certificate. It automatically renews before it expires.

Select **Update**.

</details>


<details>

<summary>Cloud integration</summary>
<br />
Some of these fields are for default values. Later, when you deploy the engine from a Jupyter notebook, you can specify values, different from the defaults, for that deployment.

<Tabs>
<TabItem value="aws1" label="AWS">
<br />
**Default region**&mdash;The AWS region in which to deploy the engine. We recommend choosing the region closest to your data lake.

**Default subnet ID**&mdash;The [AWS subnet](https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html) to which to deploy the engine. The AWS console shows the subnets in the region.

**Default IAM role**

- The [IAM role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create.html) for the engine. Leave blank to let AI Unlimited create the role&mdash;if your security allows this. Otherwise, create a role using this policy: [ai-unlimited-engine.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json).
- If AI Unlimited creates the role, it creates it for the AWS [cluster](/docs/glossary.md#cluster) that deploys the engine&mdash;each time you deploy the engine. If your organization creates the role, it must accommodate any cluster that might deploy the engine.
		
**Resource tags**&mdash;You can [tag](https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html) the AWS resources that deploy the engine to make them easier to manage.

**Inbound security**

Use these fields to allow source traffic to reach the engine:
- **Default [CIDRs](/docs/glossary.md#classless-inter-domain-routing)**
- **Default [security group](https://docs.aws.amazon.com/vpc/latest/userguide/working-with-security-groups.html) IDs**&mdash;If you deploy the engine in the same Virtual Private Cloud as AI Unlimited, include the AI Unlimited security group in this field to ensure that AI Unlimited can communicate with the engine.
- **Default [prefix list](https://docs.aws.amazon.com/vpc/latest/userguide/managed-prefix-lists.html) names**

**Role prefix**&mdash;If AI Unlimited creates the role, this prefix is added to the role name.

**[Permissions boundary](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html) ARN**&mdash;If your IAM entities require a boundary, you can provide one here.   

Select **Update**.

</TabItem>

<TabItem value="azure" label="Azure"> 

<br />

**Default region**&mdash;The Azure region in which to deploy the engine. We recommend choosing the region closest to your data lake.

Learn more about [Azure virtual networks](https://learn.microsoft.com/en-us/azure/virtual-network/concepts-and-best-practices).


**Default network resource group**&mdash;The resource group that contains the network.

**Default network**&mdash;The network to which to deploy the engine.

**Default subnet**&mdash;The subnet to which to deploy the engine.

**Default key vault**&mdash;The key vault, used by the engine, in which sensitive information such as passwords can be securely stored.

**Default key vault resource group**&mdash;The resource group that contains the key vault.

**Inbound security**

Use these fields to allow source traffic to reach the engine:

- **Default [CIDRs](/docs/glossary.md#classless-inter-domain-routing)**
 
- **Default [application security group](https://learn.microsoft.com/en-us/azure/virtual-network/application-security-groups) names**&mdash; If you deploy the engine in the same Virtual Private Cloud as AI Unlimited, include the AI Unlimited application security group in this field to ensure that AI Unlimited can communicate with the engine.

**Resource tags**&mdash;You can [tag](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources) the Azure resources that deploy the engine to make them easier to manage.

Select **Update**.

</TabItem>
</Tabs>

</details>


<details>

<summary>Git integration</summary>

<Tabs>

<TabItem value="github" label="GitHub">

<br />

**GitHub callback URL**&mdash;After authenticating a user, GitHub uses this URL to redirect back to the manager. This was provided to the OAuth app [when it was created](docs/resources/create-oauth-app.md).

**GitHub base URL**&mdash;The URL for your GitHub instance.

**GitHub client ID** and **GitHub client secret**&mdash;The credentials received from GitHub when your [OAuth app was created](/docs/resources/create-oauth-app.md).

**Organization access**

Two organizations in your GitHub account can help with access control and repository management:

- Members of the **Authorizing organization** are able to sign in and authenticate themselves in AI Unlimited. If you don't specify an organization, any GitHub account user can sign in and authenticate.

- Project repositories are created in the **Repository organization**. If you don't specify an organization, projects will be in your personal GitHub space.

Select **Update**.

Select **Sign In**. Then, if prompted, sign in.

</TabItem>

<TabItem value="gitlab" label="GitLab">

<br />

**GitLab callback URL**&mdash;After authenticating a user, GitLab uses this URL to redirect back to the manager. This was provided to the OAuth app [when it was created](docs/resources/create-oauth-app.md).

**GitLab base URL**&mdash;The URL for your GitLab instance.

**GitLab client ID** and **GitLab client secret**&mdash;The credentials received from GitLab when your [OAuth app was created](/docs/resources/create-oauth-app.md).

**Group access**

Two groups in your GitLab account can help with access control and repository management:

- Members of the **Authorizing group** are able to sign in and authenticate themselves in AI Unlimited. If you don't specify a group, any GitLab account user can sign in and authenticate.

- All project repositories are created in the **Repository group**. If you don't specify a group, projects will be in your personal GitLab space.

Select **Update**.

Select **Sign In**. Then, if prompted, sign in.

</TabItem>
</Tabs>

</details>


## Before you leave

1. On your **Profile**, copy your API key.
    You'll use it when you connect to the engine from a Jupyter notebook.

2. If you enabled TLS, select **Restart**. This restarts the AI Unlimited service with TLS in place.

Congratulations! AI Unlimited setup is now complete.


:::note
Because you are the AI Unlimited admin, you can return to the setup anytime to [change any settings](/docs/manage-ai-unlimited/change-settings.md). 
:::


## What's next

In a Jupyter notebook, start [exploring and analyzing data](/docs/explore-and-analyze-data/).


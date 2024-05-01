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

After you install the manager, access the AI Unlimited setup using the URL you received at the end of the installation process: `http://[ip_or_hostname]:[port]`. 


## Complete the fields

You'll find information about each section here.


<details>

<summary>Initial setup</summary>

<br />
**AI Unlimited base URL**&mdash;The URL you used to access the setup. You received it when you installed the manager.

- **Note:** We've used the term "manager" to refer to the AI Unlimited component you installed. Now that it's installed, its user interface and underlying service are simply "AI Unlimited."  

<br />
**Git provider**&mdash;GitHub or GitLab.

<br />
**Service log level**&mdash;The level of detail to see in AI Unlimited logs.

<br />
**Engine IP network type**

Select **Private** if you deploy the engine in the same Virtual Private Cloud as AI Unlimited.

**Public** or **Private** refers to how AI Unlimited should communicate with the engine. The engine might have a public IP address, a private IP address, or both. Indicate the type of IP address to which AI Unlimited should connect.

<br />
**Use TLS**

We recommend that you use [Transport Layer Security (TLS)](/docs/glossary.md#glo-tls) to secure connections to AI Unlimited and safeguard your data in transit.

- If you are using an [application load balancer (ALB)](/docs/glossary.md#glo-alb), with certification termination enabled, select **False**.

- If you are using a [network load balancer (NLB)](/docs/glossary.md#glo-nlb) or no load balancer, select **True.**

	- **Service TLS certificate** and **Service TLS certificate key**&mdash;If you have a certificate issued by a trusted Certificate Authority (CA), you can provide it and its key. You'll be responsible for managing the certificate lifecycle, including renewal and validation. If you have specific requirements or need more control over your certificates, bringing your own is a good option.

	- Or select **Generate Certs** to use a Teradata system-generated certificate. It automatically renews before it expires.

<br />
Select **Save Changes**.

</details>


<details>

<summary>Cloud integration</summary>

<Tabs>
<TabItem value="aws1" label="AWS">
<br />
**Default region**

- The AWS region in which to deploy the engine. We recommend choosing the region closest to your primary work location. 
- When you connect to the engine from a Jupyter notebook, you can specify a different region.

<br />
**Default subnet ID**

- The [AWS subnet](https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html) in which to deploy the engine. The AWS console shows the subnets in the region.
- When you connect to the engine from a Jupyter notebook, you can specify a different region.

<br />
**Default IAM role**

	The [IAM role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create.html) for the AWS resources that deploy the engine. Leave blank to let AI Unlimited create the role&mdash;if your security allows this. Otherwise, create an IAM role using this policy **(add link after working through the role content)**.

	If AI Unlimited creates the role, it creates it for the AWS [cluster](/docs/glossary.md#glo-cluster) that deploys the engine&mdash;each time you deploy the engine. If your organization creates the role, it must be broad enough to include all the clusters that might deploy the engine.

<br />
**Resource tags**&mdash;You can [tag](https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html) the AWS resources that deploy the engine to make them easier to manage.

<br />
**Inbound security**

Use these fields to allow source traffic to reach the engine:
- **Default [CIDRs](/docs/glossary.md#glo-cidr)**
- **[Security group](https://docs.aws.amazon.com/vpc/latest/userguide/working-with-security-groups.html) names**&mdash;If you deploy the engine in the same Virtual Private Cloud as AI Unlimited, include AI Unlimited's security group in this field to ensure that AI Unlimited can communicate with the engine.
- **[Prefx list names](https://docs.aws.amazon.com/vpc/latest/userguide/managed-prefix-lists.html)**

<br />
**Role prefix**&mdash;If AI Unlimited creates the role, this prefix is added to the role name.

<br />
**[Permissions boundary](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html) ARN**&mdash;If your IAM entities require a boundary, you can provide one here.   

<br />
Select **Save Changes**.

</TabItem>

<TabItem value="azure" label="Azure"> 

<br />
**Default region**
- The Azure region in which to deploy the engine. We recommend choosing the region closest to your primary work location.
- When you connect to the engine from a Jupyter notebook, you can specify a different region.

<br />
**Inbound security**

Use these fields to allow source traffic to reach the engine:

- **Default [CIDRs](/docs/glossary.md#glo-cidr)**

- **[Application security groups](https://learn.microsoft.com/en-us/azure/virtual-network/application-security-groups)**&mdash;If you deploy the engine in the same Virtual Private Cloud as AI Unlimited, include AI Unlimited's application security group in this field to ensure that AI Unlimited can communicate with the engine.

<br />
**Resource tags**&mdash;You can [tag](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources) the Azure resources that deploy the engine to make them easier to manage.

<br />
Select **Save Changes**.

</TabItem>
</Tabs>

</details>


<details>

<summary>Git integration</summary>

<Tabs>

<TabItem value="github" label="GitHub">

<br />
**GitHub base URL**&mdash;The URL for your GitHub account.

<br />
**GitHub client ID** and **GitHub client secret**&mdash;The credentials received from GitHub when your [OAuth app was created](/docs/install-ai-unlimited/git-requirements.md).

<br />
**Organization access**

Two organizations in your GitHub account can help with access control and repository management:

- Members of the **Authorizing organization** are able to sign in and authenticate themselves in AI Unlimited. If you don't specify an organization, any GutHub account user can sign in and authenticate.

- Project repositories are created in the **Repository organization**. If you don't specify an organization, projects will be in your personal GitHub space.

<br />
Select **Authenticate**. Then, if prompted, sign in.

</TabItem>

<TabItem value="gitlab" label="GitLab">

<br />
**GitLab base URL**&mdash;The URL for your GitLab account.

<br />
**GitLab client ID** and **GitLab client secret**&mdash;The credentials received from GitLab when your [OAuth app was created](/docs/install-ai-unlimited/git-requirements.md).

<br />
**Group access**

Two groups in your GitLab account can help with access control and repository management:

- Members of the **Authorizing group** are able to sign in and authenticate themselves in AI Unlimited. If you don't specify a group, any GitLab account user can sign in and authenticate.

- All project repositories are created in the **Repository group**. If you don't specify a group, projects will be in your personal GitLab space.

<br/>
Select **Authenticate**. Then, if prompted, sign in.

</TabItem>
</Tabs>

</details>


## Before you leave

1. Go to your **Profile**, and copy your API key.<br />
You'll use it when you connect to the engine from a Jupyter notebook.

2. If you enabled TLS, select **Restart**. This restarts the AI Unlimited service with TLS in place.

***(ok to get their API key before restarting, if they enabled TLS, that is)***

AI Unlimited setup is now complete.


## What's next

In a Jupyter notebook, start [exploring and analyzing data](/docs/explore-and-analyze-data/).

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

:::note
Before you start, make sure you have all the necessary details to update the cloud integration section. You must have the minimum configuration values, including **Default region**, **Default subnet**, and **Default security groups**. If you are unsure, Teradata recommends reaching out to your cloud administrator for guidance.
:::

Access AI Unlimited setup:

- **http://localhost:3000** (if you are using the [QuickStart](/docs/install-ai-unlimited/quickstart/index.md))

- **http://[ip_or_hostname]:[port]** (for a [full](/docs/install-ai-unlimited/production/index.md) installation)

Are you an AI Unlimited user or administrator? Choose your path: 

***This topic (which will be for both the QS and the full install) is meant only for the user doing the installation. For the QuickStart, that user is also a general user. For the full installation, that is less likely to be the case. But either way, it's in the installation flow--so should not descibe the other uses. There will be other topics for an admin to change settings under "manage" in the TOC, and for a general user to get their API key (under "explore and analyze data" in the TOC.***
**TA: If it is general user, then this topic is not valid, as they will never see the setup, they can grab their key from the profile page and then work on their task**

- If you're an AI Unlimited user, AI Unlimited is set up and ready to use. Authorize using your Git provider credentials. This authorizes the AI Unlimited to authenticate the user and access your Git repo. Copy the API Key [Glossary] from your **Profile** page and then proceed to [running your first workload](/docs/explore-and-analyze-data/example-projects.md) on AI Unlimited.

- If you're an AI Unlimited administrator, complete the setup. To learn more about specific fields, click a section below. 

- If you're a returning AI Unlimited administrator looking to modify the setup information, authorize using your GitHub credentials and select **SETUP**.


<details>

<summary>Step 1: The basics</summary>

* **Service base URL**: The root URL of the service. This value determines the URL you’ll be redirected to after successful Git authorization and varies depending on the type of installation. 

    * QuickStart: **http://localhost:3000** 
    * Full install: **http://[ip_or_hostname]:[port]**

* **Git provider**: The Git provider used to store project details. 
* **Service log levels**: Defines the level of detail recorded in the log files. The default is **Info**; however, Teradata recommends selecting **Debug**. This option captures fine-grained informational events that could help you debug errors.

* **Engine IP network type**: The type of network assigned to an engine instance that would allow AI Unlimited to communicate with the engine. Select **Private** if you're deploying the engine in the same VPC as AI Unlimited. Select **Public** if AI Unlimited is running on a local container.

* **Use TLS**: Indicates if [Transport Layer Security (TLS)](/docs/glossary.md#glo-tls) support is enabled to secure communication to AI Unlimited. If you use a self-hosted AI Unlimited instance without a load balancer, Teradata recommends setting this option to **True** and uploading or generating TLS certificates. For enterprise users employing a load balancer, set this option to **False**, as the load balancer manages TLS certificates.
    
    If you have a certificate issued by a trusted Certificate Authority (CA), you can provide it and its key. You'll be responsible for managing the certificate lifecycle, including renewal and validation. If you have specific requirements or need more control over your certificates, bringing your own is a good option. You can also select **GENERATE TLS** to use a Teradata system-generated certificate. It automatically renews before it expires.

After you've filled in all the details, select **Update**.

</details>

<details>

<summary>Step 2: Cloud integration</summary>
:::note
You can modify these parameters directly from the Jupyter notebook while connecting to the AI Unlimited engine.
::: 

<Tabs>
<TabItem value="aws1" label="AWS">

- **Default region**: The region where you want to deploy the engine. Teradata recommends choosing the region closest to your primary work location.
- **Default subnet**: The subnet that provides the engine instance with a route to an internet gateway. If you don't specify a subnet, the engine is automatically associated with the default subnet.
- **Default IAM role**: The default IAM identity that provides the required permissions to deploy the engine instance. When a default IAM role is assigned to a user or resource, the user or resource automatically assumes the role and gains the permissions granted to the role. If AI Unlimited creates the [IAM role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create.html), it creates it for the AWS [cluster](/docs/glossary.md#glo-cluster) that deploys the engine&mdash;each time you deploy the engine. If your organization creates the role, it must be broad enough to include all the clusters that might deploy the engine.
- **Resource tags**: The key-value pair applied to a resource to hold metadata about that resource. With a resource tag, you can quickly identify, organize, and manage the AI Unlimited resources you use in your environment.
- **Default CIDRs**: The list of Classless Inter-Domain Routing (CIDR) network addresses that can be allocated to the engine. Use CIDR to allocate IP addresses flexibly and efficiently in your network. If you don't specify a CIDR, the engine is automatically associated with the default CIDR.
- **Default security groups**: The list of security groups for the VPC in each region. Security group is a virtual firewall that contains rules to monitor and filter the incoming and outgoing traffic for the VPC in each region. If you don't specify a security group, the engine is automatically associated with the default security group for the VPC. If you're deploying AI Unlimited using the CloudFormation template or ARM template, make sure the default security group is the same as the one in the template to ensure AI Unlimited can communicate with the AI Unlimited engine.
- **Role Prefix**: The string of characters prepended to the name of a role. You can use a role prefix to organize and manage roles and to enforce naming conventions.
- **Permission Boundary**: The maximum permissions an IAM entity can have regardless of the permissions defined in the identity-based policy. You can define and manage the user permissions and roles and enforce compliance requirements.

After you've filled-in all the details, select **Update**.

</TabItem>
<TabItem value="azure" label="Azure">

- **Default region**: A single Azure environment corresponds to a single VNet located in a specific region, and all the resources deployed by AI Unlimited on Azure are deployed into that VNet. Teradata recommends selecting a region closest to your primary work location or the region where your data is located.
- **Default CIDRs**: The address range to define the range of private IPs for VM instances provisioned into the subnets. The CIDR range must be between /16 and /24. The default is 10.0.0.0/16, however you can modify the value based on your organizational policy.
- **Default security group**: Controls inbound and outbound traffic to and from Azure resources within a specified network. Use this field to allow users from your organization access to the resources.
- **Resource tags**: The key-value pair that helps you identify resources based on settings that are relevant to your organization. Use the ai-unlimited tag to quickly identify, organize, and manage the resources you use in your environment.

After you've filled in all the details, select **Update**.

</TabItem>
</Tabs>

</details>

<details>

<summary>Step 3: Git integration</summary>

- **Application URL**: The default URL of your Git provider account. If you're using an Enterprise account, Teradata recommends updating this value to match your hosted private URL by modifying the **Base URL**.

- **Callback URL**: The URL to redirect to after you authorize using the Git provider. 

- **Base URL**: The base URL of your Git provider account. The URL may vary based on your account type. For example, https://github.company.com/ for a GitHub Enterprise account. To change the **Application URL**, update this value.

- **Client ID**: The Client ID you received from the Git provider on creating your OAuth App.

- **Client Secret**: The Client secret ID you received from the Git provider on creating your OAuth App. 

** Configure GitHub Organization Access**

<Tabs>
<TabItem value="github" label="GitHub">

- **Authorizing Organization**: Restricts AI Unlimited access to users belonging to a specific organization on GitHub. If left blank, any user with a GitHub account can authorize and access AI Unlimited.

- **Repository Organization**: Create projects within the repository. If left blank, your projects are located in your personal GitHub space. Teradata recommends specifying this value to collaborate and centralize projects within a specific group.

</TabItem>

<TabItem value="gitlab" label="GitLab">

- **Authorizing Group ID**: The unique identifier assigned to a group within GitLab that has the authorization to access AI Unlimited. 

- **Repository Group ID**: The unique identifier assigned to the repository where the AI Unlimited projects are to be stored. Use this field to organize repositories into logical groups, allowing for easier management and access control.

</TabItem>
</Tabs>

Select **Update** and then **Login**. 
</details>

If you're an AI Unlimited administrator, go to the **Profile** page to copy your API Key. If you've enabled TLS, select **Restart** to restart the service and apply the changes.

Now you can start using AI Unlimited to [explore and analyze data](/docs/explore-and-analyze-data).


## What's next

In a Jupyter notebook, start [exploring and analyzing data](/docs/explore-and-analyze-data/).

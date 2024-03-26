---
id: test-quickstart-setup
title: Teradata - AI Unlimited - QuickStart - Setup 
description: Get more information about certain fields in the setup.
sidebar_label: Test-Set up AI Unlimited	
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Set up AI Unlimited

Access AI Unlimited setup:

- **http://localhost:3000** (if you are using the [QuickStart](/docs/install-ai-unlimited/quickstart/index.md))

- **http://[ip_or_hostname]:[port]** (for a [demo](/docs/install-ai-unlimited/demo/index.md) or [production](/docs/install-ai-unlimited/production/index.md) installation)

Complete the setup in AI Unlimited. To learn more about certain fields, click a section below. 

<details>

<summary>Step 1: The basics</summary>

* **Service base URL**: [Non-Editable] The root URL of the service. The value can vary depending on the type of installation.

* **Git provider**: The Git provider used to store project details. Currently, Teradata AI Unlimited supports GitHub and GitLab.

* **Service log levels**: Teradata recommends selecting the **Debug** option. This option captures fine-grained informational events that could help users debug errors.

* **Engine IP network type**: The type of network assigned to an engine instance, which can be either public or private. Select the **Private** option if you're deploying the engine in the same VPC as AI Unlimited.

* **Use TLS**: Indicates if TLS support is enabled. If your instance is only accessible from within a private network and to trusted users, you can ignore the default value. Teradata recommends enabling the TLS option for sensitive data, and public networks.

* **Service TLS Certificate and Key**: Upload a TLS certificate and key pair to authenticate and secure communication to your server.

2. To use a self-signed certificate for **Service Base URL**, select **GENERATE TLS**. A certificate and private key are generated and displayed in the respective fields.

3. Select **Update**.

Base URL

Git Provider

Service Log Level

**TLS**

Use [Transport Layer Security (TLS)](/docs/glossary.md#glo-tls) to secure connections to the AI Unlimited service and safeguard your data in transit.


**Certificates**

If you have a certificate issued by a trusted Certificate Authority (CA), you can provide it and its key. You'll be responsible for managing the certificate lifecycle, including renewal and validation. If you have specific requirements or need more control over your certificates, bringing your own is a good option.

Or use a Teradata system-generated certificate. It automatically renews before it expires.

</details>

Before you start, verify that your CSP account has all the resources required by the AI Unlimited engine and that your organization administrator has adequate permissions to configure the resources and services in your CSP.

<details>

<summary>Step 2: Cloud integration</summary>
:::note
You can modify these parameters directly from the Jupyter notebook while connecting to the AI Unlimited engine.
::: 

<Tabs>
<TabItem value="aws1" label="AWS">

- **Default region**: The region where you want to deploy the engine. Teradata recommends choosing the region closest to your primary work location.
- **Default subnet**: The subnet that provides the engine instance with a route to an internet gateway. If you don't specify a subnet, the engine is automatically associated with the default subnet.
- **Default IAM role**: The default IAM identity that provides the required permissions to deploy the engine instance. When a default IAM role is assigned to a user or resource, the user or resource automatically assumes the role and gains the permissions granted to the role.
- **Resource tags**: The key-value pair applied to a resource to hold metadata about that resource. With a resource tag, you can quickly identify, organize, and manage the AI Unlimited resources you use in your environment.
- **Default CIDRs**: The list of Classless Inter-Domain Routing (CIDR) network addresses that can be allocated to the engine. Use CIDR to allocate IP addresses flexibly and efficiently in your network. If you don't specify a CIDR, the engine is automatically associated with the default CIDR.
- **Default security groups**: The list of security groups for the VPC in each region. Security group is a virtual firewall that contains rules to monitor and filter the incoming and outgoing traffic for the VPC in each region. If you don't specify a security group, the engine is automatically associated with the default security group for the VPC.
- **Role Prefix**: The string of characters prepended to the name of a role. You can use a role prefix to organize and manage roles and to enforce naming conventions.
- **Permission Boundary**: The maximum permissions an IAM entity can have regardless of the permissions defined in the identity-based policy. You can define and manage the user permissions and roles and enforce compliance requirements.

**IAM role**

If AI Unlimited creates the [IAM role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create.html), it creates it for the AWS [cluster](/docs/glossary.md#glo-cluster) that deploys the engine&mdash;each time you deploy the engine. If your organization creates the role, it must be broad enough to include all the clusters that might deploy the engine.


</TabItem>
<TabItem value="azure" label="Azure">

- **Default region**: A single Azure environment corresponds to a single VNet located in a specific region, and all the resources deployed by AI Unlimited on Azure are deployed into that VNet. Teradata recommends selecting a region closest to your primary work location or the region where your data is located.
- **Default CIDRs**: The address range to define the range of private IPs for VM instances provisioned into the subnets. The CIDR range must be between /16 and /24. The default is 10.0.0.0/16.
- **Default security group**: Controls inbound and outbound traffic to and from Azure resources within a specified network. Use this field to allow users from your organization access to the resources.
- **Resource tags**: The key-value pair that helps you identify resources based on settings that are relevant to your organization. Use the ai-unlimited tag to quickly identify, organize, and manage the resources you use in your environment.

</TabItem>
</Tabs>

</details>

<details>

<summary>Step 3: Git integration</summary>

On the **Configure Git** page, enter the details in the fields, and then select **Authenticate**. You are redirected to GitHub or GitLab based on your choice of Git provider in Step 1. Use your credentials to log in. This authorizes the AI Unlimited to authenticate the user and access your Git repo.

After you are redirected back to AI Unlimited, you can see that an API key was generated for you. 
**TA: Don't users need to fill in the Step 3 details to view API key?**
***MEM: That's a good question. I think the demo I was watching was recorded when steps 2 and 3 were flip-flopped.***

You'll use your API key whenever you create a project in a Jupyter notebook. When a new user logs in to the AI Unlimited UI, an API key is generated for that user. 

**OAuth app**

An OAuth app allows a user to grant access to their account on one website or service to their account on another, without sharing their password. 

AI Unlimited uses the OAuth app you, or someone at your organization, created to authorize access to your GitHub or GitLab account. This allows AI Unlimited to store user and project information there. 

Selecting **Authenticate** establishes the access and returns you to AI Unlimited to complete the setup.

[Create a Git OAuth app](/docs/install-ai-unlimited/quickstart/create-github-oauth-app) (QuickStart)\
[Create a Git OAuth app](/docs/install-ai-unlimited/demo) (Demo installation)\
[Create a Git OAuth app](/docs/install-ai-unlimited/production) (Production installation)

</details>








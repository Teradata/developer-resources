---
id: setup-ai-unlimited
title: Set up AI Unlimited
description: Steps to setup AI Unlimited.
sidebar_position: 6
tags:
  - Install AI Unlimited
  - Install using Docker
  - Load Docker Image
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Set up AI Unlimited

Access the AI Unlimited UI using the URL **http://[ip_or_hostname]:3000/** if you installed AI Unlimited using Docker or the URL from your CSP console.

In the AI Unlimited UI, complete the setup steps. 

<details>

<summary>Step 1: Service setup</summary>

1. Fill in the details for the following fields:

* **Service base URL**: [Non-Editable] The root URL of the service. The value can vary depending on the type of installation.

* **Git provider**: The Git provider used to store project details. Currently, Teradata AI Unlimited supports GitHub and GitLab.

* **Service log levels**: Teradata recommends selecting the **Debug** option. This option ensures fine-grained informational events are captured that could help users debug any errors.

* **Engine IP network type**: The type of network assigned to an engine instance, which can be either public or private. Select the **Private** option if you're deploying the engine in the same VPC as AI Unlimited.

* **Use TLS**: Indicates if TLS support is enabled. If your instance is only accessible from within a private network and to trusted users, you can ignore the default value. Teradata recommends enabling the TLS option for sensitive data, and public networks.

* **Service TLS Certificate and Key**: Upload a TLS certificate and key pair to authenticate and secure communication to your server.

2. To use a self-signed certificate for **Service Base URL**, select **GENERATE TLS**. A certificate and private key are generated and displayed in the respective fields.

3. Select **Next**.

</details>

<details>

<summary>Step 2: Git integration</summary>

On the **Configure Git** page, enter the details in the fields, and then select **Authenticate**. You are redirected to GitHub or GitLab based on your choice of Git provider in Step 1. Use your credentials to log in. This authorizes the AI Unlimited to authenticate the user and access your Git repo.

After you are redirected back to AI Unlimited, you can see that an API key was generated for you. 
**TA: Don't users need to fill in the Step 3 details to view API key?**

You'll use your API key whenever you create a project in a Jupyter notebook. When a new user logs in to [name of workspace service IU], an API key is generated for that user. 

</details>

<details>

<summary>Step 3: Cloud integration</summary>

Fill in your CSP parameters in the following fields. Before you start with this section, verify that your CSP account has all the resources required by the AI Unlimited engine and that your organization administrator has adequate permissions to configure the resources and services in your CSP.

:::note
You can modify these parameters directly from the Jupyter notebook while connecting to the AI Unlimited engine.
::: 

<Tabs>
<TabItem value="aws1" label="AWS">
- **Default region**: The region where you want to deploy the engine. Teradata recommends choosing the region closest to your primary work location.
- **Default subnet**: The subnet that provides the engine instance with a route to an internet gateway. If you don't specify a subnet, the engine is automatically associated with the default subnet.
- **Default IAM role**: The default IAM identity that determines what a user can and cannot do in AWS. When a default IAM role is assigned to a user or resource, the user or resource automatically assumes the role and gains the permissions granted to the role.
- **Resource tags**: The key-value pair applied to a resource to hold metadata about that resource. With a resource tag, you can quickly identify, organize, and manage the resources you use in your environment.
- **Default CIDRs**: The list of Classless Inter-Domain Routing (CIDR) addresses used for the engine. Use CIDR to allocate IP addresses flexibly and efficiently in your network. If you don't specify a CIDR, the engine is automatically associated with the default CIDR.
- **Default security groups**: The list of security groups for the VPC in each region. If you don't specify a security group, the engine is automatically associated with the default security group for the VPC.

</TabItem>
<TabItem value="azure" label="Azure">
- **Default region**: A single Azure environment corresponds to a single VNet located in a specific region, and all the resources deployed by AI Unlimited on Azure are deployed into that VNet. Teradata recommends selecting a region closest to your primary work location or the region where your data is located.
- **Default CIDRs**: The address range to define the range of private IPs for VM instances provisioned into the subnets. The CIDR range must be between /16 and /24. The default is 10.0.0.0/16.
- **Default security group**: Controls inbound and outbound traffic to and from Azure resources within a specified network. Use this field to allow users from your organization access to the resources.
- **Resouce tags**: The key-value pairs that help you identify resources based on settings that are relevant to your organization. Use tag ai-unlimited to your resources for effective resource and cost management.
  
</TabItem>
</Tabs>

</details>




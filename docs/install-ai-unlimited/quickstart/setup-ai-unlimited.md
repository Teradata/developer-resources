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

***MEM: I'm playing with how to make the above sentence quicker to grasp. It will help when we have the "final" demo and production install content--so we can dovetail that with this. But for now, we could try:*** 

Access the AI Unlimited setup one of these ways:

- **http://[needs further discussion]:3000/** ([QuickStart](/docs/install-ai-unlimited/quickstart/index.md) installation)

- **http://[best way to represent the URL]/** ([demo](/docs/install-ai-unlimited/demo/index.md) or [production](/docs/install-ai-unlimited/production/index.md) installation)

Complete the setup. For additional information, click a section below. 

***MEM: The content in the sections does not need to say anything about "completing fields," "clicking next," etc. We don't need to tell users how to use the UI. The UI makes itself clear on that level. "Step x" in each section's summary is to help users know where to find any additional info for the step they are on.***

***MEM: The content here is a reference--for when the information users need is too much to be directly on the UI. So some (just some) fields will have a "Learn more" link that takes users here. If a field is straighforward, no need to include it here.***

***MEM: Unfortunately, I don't *think* we can include anchor links so that the Learn more links go to the right step in this topic.(That's just based on a little experimenting I did for the glossary--tried to put anchors, which require headings, in the summary of expandable text. Didn't work. But there's probably a way.) We can at least get them to this topic. The content itself is much more important. We can address certain luxury design items in the future. :-)***

***MEM: For step 1, candidates to include might just be Engine IP network type and the TLS fields (and button).***

***MEM: For step 2, I think the content on the UI will make all the fields clear. I was thinking about helping users understand the authentication that is taking place. Something like "After you complete the fields and authenticate, the authentication process redirects you to your Git provider. Signing in to your GitHub or GitLab account [they know which one they are using, no need to tie it back to step 1] authorizes AI Unlimited to authenticate you as a user and access your Git repo. [Do they get redirected back to the AI Unlimited UI or has that changed since the demo I watched was recorded?]***

***MEM: For step 3... I get the feeling that the fields are still somewhat in flux. But looking at the figma and my (unfinished) comments on it for the field descriptions, it seems that the Default IAM role description is too long for the UI. So that can be a short description on the UI with a Learn more link. Maybe default CIDRs too.***

***MEM: Bottom line... I started to work on the field descriptions for the UI and got sidetracked. That's essential for figuring out which fields need to be in this topic and what to say about them. I will work on them on Wednesday, as tomorrow is the Learning Day. But I'm sure we'll make changes as time goes on. We'll get the QS out for review with tentative content for the Setup topic - so show intent and show how this topic is an extension of the field descriptions on the UI.***

***Step 1 is "The basics" (part of removing "service" from the UI)***


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
***MEM: That's a good question. I think the demo I was watching was recorded when steps 2 and 3 were flip-flopped.***

You'll use your API key whenever you create a project in a Jupyter notebook. When a new user logs in to the AI Unlimited UI, an API key is generated for that user. 

</details>

<details>

<summary>Step 3: Cloud integration</summary>

Fill in your CSP parameters in the following fields. Before you start, verify that your CSP account has all the resources required by the AI Unlimited engine and that your organization administrator has adequate permissions to configure the resources and services in your CSP.

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
- **Resouce tags**: The key-value pair that help you identify resources based on settings that are relevant to your organization. Use the ai-unlimited tag for effective resource and cost management.
  
</TabItem>
</Tabs>

</details>




---
id: setup-workspace-service
title: Set up the workspace service
description: Steps to setup workspace service
sidebar_position: 5
tags:
  - Install AI Unlimited
  - Install using Docker
  - Load Docker Image
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Set up the workspace service

1. Access the workspace service using this URL: http://*`ip_or_hostname`*:3000/.

    Insert image
	
	***MEM: In this context, we don't need the screenshot. They'll be looking at the screen. We can use screenshots when justified, for instance, if something is hard to find on the screen and we want to call it out. You might know this, but just in case... when we include screenshots... for each language, Yoichi or his colleague has to find the screen in the UI set to the right language, take a new screenshot, and add it to the translated file. (He likes folks to let him know how to get to the screen and show the right data.) Sometimes, a screenshot makes all the difference. Other times, it's just more scrolling.***
	
	***MEM: *Maybe*, after more discussion, we'll be able to say "Access AI Unlimited setup" instead of "Access the workspace service." Or something like that, at least in management topics (after the installation is done). A service is really something users should not have to be concerned about. So far at least, it seems necessary to speak of it, at least, in the installation topics. Once the content is all here, we can look at it fresh.***
	
	***MEM: We'll end up removing much of the content in this topic--so we don't repeat what's on the UI for no good reason.***
	
	***MEM: For now at least, let's just say "Access the workspace service at http://*`ip_or_hostname`*:3000/, and complete the setup steps." Bold the url.***
	
	***MEM: Then: "In step 2, Git integration [bold "Git integration"], after you select Authenticate [bold], you are redirected to GitHub or GitLab. 1. Log in to complete the authentication. 2. You are redirected to the workspace service Profile [bold] page. 3. On the Profile page, note the API key. Each time you connect to the workspace service [should we add, "by going to the Profile page?"], a new API key is gen erated. You will need the API key to start a project... what else?]***
	
	***MEM: Third para: "To change settings later, go to Setup [bold] in the workspace service user interface."***
	
	***MEM: Current Figma shows it's not really on the Profile page.***
	
	***MEM to MEM: Reminder to re-watch the demo. What's the best way to say what's happening?***
	
	***MEM: How do they connect to the workspace service after the install phase? Or do they go back to step 2 on the UI? UPDATE: they just log in to the workspace service UI with GitHub or GitLab.***
	
	***MEM: What about users who don't use the workspace service UI at all? Maybe not relevant in this topic, as an admin types do the install. But I want to understand better how non-admins get the API key other then the admin giving it to them (do they just use the same for a while--project stays active, and don't reconnect to the workspace service themselves?). Maybe that should be explained here. UPDATE: they just log in to the workspace service UI and copy their key***
	
	


2. Apply the following general service configuration under **Setup**.

    | Setting | Description | Required? |
    |---------|-------------|-----------|
    | Service Base URL | **`[Non-Editable]`** The root URL of the service. | Yes |
    | Git Provider | The provider for Git integration. Currently, Teradata AI Unlimited supports GitHub and GitLab. | Yes |
    | Service Log Lev | The level of logging.| Yes|
    | Engine IP Network Type | The type of network assigned to an engine instance, which can be either public or private. Select the **Private** option if you're deploying the engine in the same VPC as the workspace service.| Yes |
    | Use TLS | Indicates if TLS support is enabled. If your instance is only accessible from within a private network and to trusted users, you can ignore the default value. Teradata recommends enabling the TLS option for sensitive data, public networks, and compliance requirements. | Yes |
    | Service TLS Certification | The server certificate to authenticate the server identity. | No |
    | Service TLS Certificate Key | The server certificate key. | No |

3. To use a self-signed certificate for **Service Base URL**, select **GENERATE TLS**. A certificate and private key are generated and displayed in the respective fields.

4. Select **Save Changes**.

5. Apply the following settings under your choice of **Cloud Integrations: CSP**.

    | Setting | Description | Required? |
    |---------|-------------|-----------|
    | Default Region | The region where you want to deploy the engine. Teradata recommends choosing the region closest to your primary work location. | Yes |
    | Default Subnet | The subnet that provides the engine instance with a route to an internet gateway. If you don't specify a subnet, the engine is automatically associated with the default subnet. | Yes |
    | Default IAM Role | The default IAM identity that determines what a user can and cannot do in AWS. When a default IAM role is assigned to a user or resource, the user or resource automatically assumes the role and gains the permissions granted to the role. | No |
    | Resource Tag | The key-value pair applied to a resource to hold metadata about that resource. With a resource tag, you can quickly identify, organize, and manage the resources you use in your environment. | No |
    | Default CIDRs | The list of Classless Inter-Domain Routing (CIDR) addresses used for the engine. Use CIDR to allocate IP addresses flexibly and efficiently in your network. If you don't specify a CIDR, the engine is automatically associated with the default CIDR. | No |
    | Default Security Groups | The list of security groups for the VPC in each region. If you don't specify a security group, the engine is automatically associated with the default security group for the VPC. | No |
    | Role Prefix | The string of characters prepended to the name of a role. You can use a role prefix to organize and manage roles and to enforce naming conventions. | No |
    | Permission Boundary | The maximum permissions an IAM entity can have regardless of the permissions defined in the identity-based policy. You can define and manage the user permissions and roles and enforce compliance requirements. | No |

6. Select **Save Changes**.
7. Apply the following settings under **Git Integrations**.

    | Setting | Description | Required? |
    |---------|-------------|-----------|
    | GitHub Client ID | The Client ID you received from GitHub on creating your OAuth App. | Yes |
    |GitHub Client Secret | The Client secret ID you received from GitHub on creating your OAuth App. | Yes |
    | Auth Organization | The name of the GitHub organization account that you use to collaborate with your team. | No |
    | GitHub Base URL | The base URL of your GitHub account. The URL may vary based on your account type. For example, https://github.company.com/ for GitHub Enterprise account. | No |

8.	Select **Authenticate**. You are redirected to GitHub.

9.	Log on with your GitHub credentials to authorize workspace service.

    After authentication, you are redirected to the Workspace service **Profile** page, and an API Key is generated. You can use the API Key to make requests to the workspace service.

:::note
 A new API Key is generated each time you connect to workspace service.
:::

***MEM: We can remove the note. See messages in regulus_ie_ui_dev_sync Slack channel.***

***Based on working on the UI's inline content, these fields will probably need supporting content in this topic: Default IAM role (in step 3 on UI), what else...***

***Stab at what to put in the doc for Default IAM role [needs Jack’s input]:***

The default IAM role for the cluster that deploys the engine. Typically, you can leave this field blank to allow the workspace service to try to create an IAM role for the cluster. But if the environment’s security does not allow the workspace service to create IAM roles [how will they know?], indicate the role.

See [Example IAM Policies](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/README.md#workspaces-without-iam-role-permissions.json) and this [policy](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/workspaces-without-iam-role-permissions.json).

Allowing the workspace service to create an IAM role is preferable, because the cluster secret is more secure. [Do we want to say that?]

---
id: setup-workspace-service
title: Set up the workspace service
description: Steps to setup workspace service
sidebar_position: 6
tags:
  - Install AI Unlimited
  - Install using Docker
  - Load Docker Image
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Set up the workspace service

***MEM: I suggested a structure for this topic. See NEW START below the initial comments and existing content.***

1. Access the workspace service using this URL: http://*`ip_or_hostname`*:3000/.

    Insert image
	
	***MEM: In this context, we don't need the screenshot. They'll be looking at the screen. We can use screenshots when justified, for instance, if something is hard to find on the screen and we want to call it out. You might know this, but just in case... when we include screenshots... for each language, Yoichi or his colleague has to find the screen in the UI set to the right language, take a new screenshot, and add it to the translated file. (He likes folks to let him know how to get to the screen and show the right data.) Sometimes, a screenshot makes all the difference. Other times, it's just more scrolling.***
	
	***MEM: *Maybe*, after more discussion, we'll be able to say "Access AI Unlimited setup" instead of "Access the workspace service." Or something like that. A service is something users should not have to be concerned about. So far at least, it seems necessary to speak of it, at least, in the installation topics. Once the content is all here, we can look at it fresh. UPDATE: Smit has some direction from Jenn that he's working with.***
	
	***MEM: We'll end up removing much of the content in this topic--so we don't repeat what's on the UI.***
	
	***MEM: As you noted, this UI has changed.***
	

2. Apply the following general service configuration under **Setup**.

    | Setting | Description | Required? |
    |---------|-------------|-----------|
    | Service Base URL | **`[Non-Editable]`** The root URL of the service. | Yes |
	
	***MEM: The user does have to enter the URL--confirmed w/Smit, so not sure about "non-editable"***
	
    | Git Provider | The provider for Git integration. Currently, Teradata AI Unlimited supports GitHub and GitLab. | Yes |
    | Service Log Lev | The level of logging.| Yes|
		
	***MEM: This is a great example of what we don't need to say. :-) We don't have to account for fields. We just need to make clear what the UI cannot.*** 
		
    | Engine IP Network Type | The type of network assigned to an engine instance, which can be either public or private. 
	
	***MEM: no need to say what they see in the list of options*** 
	
	Select the **Private** option if you're deploying the engine in the same VPC as the workspace service.| Yes | 
	
	***MEM: But this second sentence is truly helpful***
	
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

***Based on working on the UI's inline content, these fields will probably need supporting content, so far... Default IAM role (in step 3 on UI), what else...***

***Stab at what to put in the doc for Default IAM role [needs Jack’s input]:***

The default IAM role for the cluster that deploys the engine. Typically, you can leave this field blank to allow the workspace service to try to create an IAM role for the cluster. But if the environment’s security does not allow the workspace service to create IAM roles [how will they know?], indicate the role.

See [Example IAM Policies](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/README.md#workspaces-without-iam-role-permissions.json) and this [policy](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/workspaces-without-iam-role-permissions.json).

Allowing the workspace service to create an IAM role is preferable, because then the cluster secret is more secure. [Do we want to say that?]



***NEW START***

Access the [hoping for new name for the workspace service UI], using the url you received when you installed it.

[we might want to be more specific - I put a question about the url in the team slack channel]

[Jack says for workspaces in Docker it's always http://localhost:3000/. On AWS or Azure, he says it's the "connection string from your template outputs" which is interesting. Maybe "url" does not apply for workspaces on AWS/Azure?]

In the [name for workspace service UI], complete the setup steps. 

[Something about the fact that these are defaults that they can change in a notebook? Which settings exactly? And that they can change these default setting later.]

[maybe a little redundant to say "In the blah," but we want to be clear about where this work is done, considering they've already done work elsewhere - not sure it's necessary though] 

For help, select a step below. [not sure yet if we'll really need info for each step (working to get the UI as self-explanatory as possible), but might look silly to omit any of the 3]

[maybe these could be expandable text?]

**Step 1: Service setup** [step name might change]

[anything to say about logging level? suggestion to start with detailed log info until they have used AI Unlim for a bit? Actually, I remembered we'll have a whole topic on logging levels - need to figure out the user flow - link to that other topic from the field in the UI, but mention the advice for the initial set up here, as well, and link there? (users could come here from the UI or just from exploring the doc]

[more info about TLS? we want them to use it - maybe info on the edge cases for why they wouldn't? - private network with trusted users? - they do have a choice - what did Jack say about that...]

**Step 2: Git integration**

[this should all be pretty smooth - do they want to understand what's really happening though? not sure - if we think yes, could say this:]

After you complete the fields, and select **Authenticate**, you are redirected to GitHub or GitLab. You log in. This authorizes the workspace service [can we just say AI Unlimited?] to access your Git repo.

After you are redirected back to [name of workspace service UI], you can see that an API key was generated for you. 

You'll use your API key whenever you create a project in a Jupyter notebook. When a new user logs in to [name of workspace service IU], an API key is generated for that user. 

[is there more to it? is creating a project really the only time they'll need it? when they resume a suspended project do they need it? so the API key must connect the notebook to the workspace service, and accordingly, the engine and their Git provider--but pretty sure it has nothing to do with their connection to their data lake--is that right?]


**Step 3: Cloud integration**

[As you said, this has several fields for which we have existing content (from the tech preview), but we'll need to make more clear what those fields mean for AI Unlimited (as opposed to describing network/security concepts in general)].

[I put field description ideas on the Figma
(https://www.figma.com/file/rN0xsSfOzxUxspvsAAqnBC/(IN-PROGRESS)-AVCD-E-15%3A-AI-Unlimited-workspace-service---UX-enhancements?type=design&node-id=4%3A18&mode=design&t=nQIYNRMtN4dYrlnb-1). Sounds like the step 3 UI will change more--field names and placement. Anyway, will need to harmonize the field names/descriptions there with additional details here - trying to avoid redundancy. "Ugh. Why did they say to click this link? I already see this info on the UI!" If in a sour mood, they might also think: "Geez, doesn't Teradata know my time is precious? I'm so tired. And hungry." :-)]. 

[then not in the expandable text...] As the [name for workspace service] administator, you can always change these settings later. [all of them? any restrictions?]
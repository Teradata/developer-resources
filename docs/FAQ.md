---
id: faq
title: FAQ
description: Find answers to your AI Unlimited questions here.
sidebar_label: FAQ
sidebar_position: 7
pagination_prev: null
pagination_next: null
---

# FAQ


## General

### What cloud service providers (CSPs) does AI Unlimited support?
Currently, AWS and Azure.

### What analytics functions can I use?
[ClearScape Analytics™](https://docs.teradata.com/access/sources/dita/topic?dita:mapPath=phg1621910019905.ditamap&dita:ditavalPath=pny1626732985837.ditaval&dita:topicPath=gma1702668333653.dita) functions. See the [release notes](./whats-new/august-2024-rn.md) for any functions not currently supported.

### How do I pay for AI Unlimited?
You pay your cloud service provider for the hours that AI/ML engine resources are running. The charges depend on instance size and number of instances.

### If I get errors or have problems I can't resolve, what should I do?
Email the <a href="mailto:aiunlimited.support@Teradata.com">support team</a>. Also, the [AI Unlimited community](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa) is ready to help you. Go there to ask questions, get troubleshooting advice, and share ideas.


## Projects

### What is a project?
A project is a means to explore and analyze data from a Jupyter notebook. Each project has a repository in your GitLab or GitHub account.

### How do I use a project?
In a Jupyter notebook, you  create a project, which automatically creates its Git repository. Then you authorize access to your data store, deploy the project's AI/ML engine, and run analytic workloads. You can suspend the project (and engine) anytime, then restore it, to pay only for the hours you need.

### What's my API key for?
You use your API key to connect your Jupyter notebook to the AI Unlimited manager. This is the first thing you do when you open a new notebook to create or access a project.

### What's in a project's repository?
The project owner (the user who created the project) adds project collaborators to the Git repository. From there, each time the engine is deployed, AI Unlimited derives the users authorized to connect to and use the engine. 

But, if the engine is already deployed, the project owner must update the engine to add those users so they can connect to and use the engine during that deployment.

:::note
Each time the engine is deployed, a new password is generated for each project user.
:::

Each time you, or another user, suspends a project, its schema is backed up in the repository. AI Unlimited uses the stored schema to bring the project back when it's restored.


## Users

### What are the AI Unlimited user types?
AI Unlimited owner, project owners, and collaborators:
- The AI Unlimited owner is the user who sets up AI Unlimited for your organization. 
- The user who creates a project is the project's owner. 
- Additional users of a project are collaborators.

### I'm the AI Unlimited owner. After the initial setup, can I go back and change settings?
Yes, sign back in to the setup, and make any changes.

### I'm a project owner. How do I add collaborators to a project?
First, add them to the project's Git repository. 

If you do this before the engine is deployed, when you deploy the engine, the new collaborators are added to it automatically. 

If you add collaborators to the repository after the engine is deployed, you'll need to add them to the engine manually so they can connect to and use the engine during that deployment.


## Suspending and restoring 

### What happens when I suspend a project?
All project information, including user and object store authorizations and data objects, is saved.

### What happens when I restore a project?
The saved project information is there. You can pick up right where you left off.


## The manager

### What is the manager?
The manager is the AI Unlimited component that orchestrates the deployment of the AI/ML engine on your cloud service provider. 

It also provides a web-based user interface from which the AI Unlimited owner sets up AI Unlimited after installing it, and changes settings later as needed. 

From their user profile in the manager, all users get their API key for connecting a Jupyter notebook to the manager.

:::tip
Don't see your question? Ask it in the [community](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa)
:::




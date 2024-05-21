---
id: faq
title: FAQ
description: Find answers to your AI Unlimited questions here.
sidebar_label: FAQ
sidebar_position: 6
pagination_prev: null
pagination_next: null
---

# FAQ


## General

### What cloud service providers (CSPs) does AI Unlimited support?
Currently, AWS and Azure.

### What analytics functions can I use?
[ClearScape Analytics™](https://docs.teradata.com/access/sources/dita/topic?dita:mapPath=phg1621910019905.ditamap&dita:ditavalPath=pny1626732985837.ditaval&dita:topicPath=gma1702668333653.dita) functions. See the [release notes](/docs/release-notes) for any functions not currently supported.

### How do I pay for AI Unlimited?
You pay your cloud service provider for the hours that AI/ML engine resources are running. The charges depend on instance size and number of instances.

### If I get errors or have any problems, what should I do?

The [community](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa) is ready to help you. Go there to ask questions, get troubleshooting advice, and share ideas.


## Projects

### What is a project?

A project is a means to explore and analyze data from a Jupyter notebook. Each project has a Git repository for storing project information. 

### How do I use a project?

In a Jupyter notebook, you  create a project, which automatically creates its repository. Then you authorize access to your data store, deploy the project's AI/ML engine, and run analytic workloads. You can suspend the project (and engine) anytime, then restore it, to pay only for the hours you need.

### What's my API key for?
You use your API key to connect your Jupyter notebook to the engine. The first thing you do in a Jupyter notebook, before you create or access a project, is configure a connection to the engine using your API key.

### What's in a project repository?

The project owner adds collaborators to the repository. From the repository, the next time the engine is deployed, the manager derives the users authorized to connect to and use the engine. If the engine is already deployed, the project owner updates the engine to add those users. 

A password for connecting to the engine is generated for each user for each engine deployment.

All commits to the project's schema are stored in the repository. When you suspend a project, then restore it, AI Unlimited uses the stored schema to bring the project back.


## Users

### What are the AI Unlimited user types?
Admins, project owners, and collaborators:
- The admin is the user who sets up AI Unlimited for your organization. 
- The user who creates a project is the project's owner. 
- Additional users of a project are collaborators.

### I'm an admin. After the initial setup, can I go back and change settings?
Yes, sign back in to the setup, and make any changes.


### Can an admin add other admins?
No, AI Unlimited supports one admin.

### I'm a project owner. How do I add collaborators to a project?
First, add them to the project's Git repository. 

If you do this before the engine is deployed, when you deploy the engine, the new collaborators are added to it automatically. 

If you add the collaborators to the repository after the engine is deployed, you'll need to add them to the engine manually.


## Suspending and restoring 

### What happens when I suspend a project?
All project information, including user authorizations, object store authorizations, and data objects, are saved.

### What happens when I restore a project?
The saved project information is there. You can pick up right where you left off.


## The manager

### What is the manager?
The manager is the AI Unlimited component that orchestrates the deployment of the AI/ML engine on your cloud service provider. 

It also provides a web-based user interface from which the AI Unlimited admin sets up AI Unlimited after installing it, and changes settings later as needed. From the manager, all users get their API key for connecting to the engine from a Jupyter notebook.


:::tip
Didn't see your question? Ask it in the [community](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa)
:::




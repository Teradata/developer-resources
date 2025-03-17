---
id: glossary
title: Glossary
description: Terminology for the installation and use of AI Unlimited.
sidebar_label: Glossary
sidebar_position: 8
pagination_prev: null
pagination_next: null
---

# Glossary


## A

### AI Unlimited manager

The manager is the AI Unlimited component that orchestrates the deployment of the AI/ML [engine](#engine) on your [cloud service provider](#cloud-service-provider). It also provides a web-based user interface from which the AI Unlimited owner sets up AI Unlimited after installing it, and changes settings later as needed. From the manager, all users get their API key.

### API key

Your Application Programming Interface (API) key enables you to connect your Jupyter notebook to the manager. This is the first thing you do in a new Jupyter notebook before you create or access a project.


## C

### Classless Inter-domain Routing

Classless Inter-domain Routing (CIDR) is an IP address allocation method for data routing efficiency on the internet. Every computer that connects to the internet has a unique number called an IP address. IP addresses enable computers to find each other and communicate. A CIDR block is a range of IP addresses.

### cloud service provider

A cloud service provider (CSP) is a company that delivers computing resources over the internet, on demand. These resources can include Infrastructure as a Service (IaaS), Platform as a Service (PaaS), or Software as a Service (SaaS). The [AI Unlimited manager](#ai-unlimited-manager) and [engine](#engine) run on your CSP.

### cluster

A group of interconnected computers (also called nodes) that work together as a single system for enhanced processing power, scalability, and reliability. The AI Unlimited engine is deployed on a cluster on your CSP. Each node is a [virtual machine (VM)](#virtual-machine).


## D

### data lake

A central repository of data for data analytics, machine learning, and data exploration. A data lake is typically built on [object storage](#object-storage) and is designed for data accessibility for future data analysis.  


## E

### engine

In cloud computing, a compute engine is an example of Infrastructure as a Service (IaaS). It enables you to create and run [virtual machines (VMs)](#virtual-machine) on your cloud service provider's infrastructure. When you deploy the AI Unlimited AI/ML compute engine from a Jupyter notebook, the [AI Unlimited manager](#ai-unlimited-manager) provisions VMs.


## I

### IAM role

An [Identity and Access Management (IAM) role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html) is a role that you or a cloud admin at your organization can create in your organization's AWS account. It has one or more attached permissions policies that determine what an entity with that role can and cannot do in AWS.

 
## K

### kernel

A Jupyter kernel is a language-specific program that processes the code you write in a Jupyter notebook and communicates the results back to your notebook for you to see. 


## L

### load balancer 

A load balancer distributes incoming traffic evenly across servers, which improves performance, reliability, and scalability. If your organization does not allow its resources to use public IP addresses, you can use a load balancer to expose the AI Unlimited manager and engine to the public IP network. 


## M

### mounting volumes 

A concept in containerized platforms such as Docker. You can map a directory on the machine running the containers (the host) to a directory in a container to share data and files between the host and container.


## N

### network load balancer

Load balancers distribute incoming traffic across servers. A network load balancer does not inspect traffic content. It bases routing decisions on factors such as ports and IP addresses. You can use a network load balancer as a way to expose AI Unlimited and its engine to the public IP network.


## O

### OAuth app

An OAuth app allows a user to grant access to their account on one website or service to another, without sharing their password. 

An OAuth app, that you or someone at your organization creates, allows AI Unlimited to use GitLab or GitHub authentication to manage each [project repository](#project-repository) and, each time the engine is deployed, derive the engine users from the collaborators that have been added to the repository.

### object storage
A scalable, highly effective way to store large amounts of structured, semi-structured, or unstructured data in the cloud. Amazon S3 is object storage on AWS. Azure Blob Storage is object storage on Azure. Object storage is the basis for a [data lake](#data-lake).


## P

### project

A project is a means to explore and analyze data from a Jupyter notebook. Each project has a repository in your GitLab or GitHub account.

### project repository

The project owner (the user who created the project) adds project collaborators to the Git repository. From there, each time the engine is deployed, AI Unlimited derives the users authorized to connect to and use the engine. 

But, if the engine is already deployed, the project owner must update the engine to add those users so they can connect to and use the engine during that deployment.

:::note
Each time the engine is deployed, a new password is generated for each project user.
:::

Each time you, or another user, suspends a project, its schema is backed up in the repository. AI Unlimited uses the stored schema to bring the project back when it's restored.


## S

### systemd

Linux foundational software for system and service management. The AI Unlimited manager runs on a server instance in a container controlled by systemd.


## T

### Transport Layer Security

Transport Layer Security (TLS) is a protocol that creates a secure connection between two parties communicating over the internet. TLS encrypts data during transmission, making it unreadable to anyone who intercepts it, and it verifies the identities of both parties. 


## V

### virtual machine
A virtual machine (VM) is a software emulation of a physical computer. Each VM operates as its own computer within a [cloud service provider's](#cloud-service-provider) infrastructure. VMs enable scalability, flexibility, easier management, and a pay-as-you-go model.
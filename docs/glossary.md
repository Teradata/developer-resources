---
id: glossary
title: Glossary
description: Terminology for the installation and use of AI Unlimited.
sidebar_label: Glossary
sidebar_position: 7
pagination_prev: null
pagination_next: null
---

# Glossary


## A

<a id="glo-manager"></a>
### AI Unlimited manager

The manager is the AI Unlimited component that orchestrates the deployment of the AI/ML [engine](#glo-engine) on your [cloud service provider](#glo-csp). It also provides a web-based user interface from which the AI Unlimited admin sets up AI Unlimited after installing it, and changes settings later as needed. From the manager, all users get their API key for connecting to the engine from a Jupyter notebook.

<a id="glo-api-key"></a>
### API key

Your Application Programming Interface (API) key enables you to connect your Jupyter notebook to the engine. The first thing you do in a Jupyter notebook, before you create or access a project, is configure a connection to the engine using your API key.

<a id="glo-alb"></a>
### application load balancer

Load balancers distribute incoming traffic across servers. An application load balancer inspects incoming traffic content, such as HTTP headers and paths, to make routing decisions. You can use an application load balancer as a way to expose AI Unlimited manager and the engine to the public IP network.


## C

<a id="glo-cidr"></a>
### Classless Inter-Domain Routing (CIDR)

An IP address allocation method for data routing efficiency on the internet. Every computer that connects to the internet has a unique number called an IP address. IP addresses enable computers find each other and communicate. A CIDR block is a range of IP addresses.

<a id="glo-csp"></a>
### cloud service provider (CSP) 

A company that delivers computing resources over the internet, on demand. These resources can include Infrastructure as a Service (IaaS), Platform as a Service (PaaS), or Software as a Service (SaaS). The [AI Unlimited manager](#glo-manager) and [engine](#glo-engine) run on your CSP.

<a id="glo-cluster"></a>
### cluster

A group of interconnected computers (also called nodes) that work together as a single system for enhanced processing power, scalability, and reliability. The AI Unlimited engine is deployed on a cluster on your CSP. Each node is a [virtual machine (VM)](#glo-vm).


## D

<a id="glo-data-lake"></a>
### data lake

A central repository of data for data analytics, machine learning, and data exploration. A data lake is typically built on [object storage](#glo-object-storage) and is designed for data accessibility for future data analysis.  


## E

<a id="glo-engine"></a>
### engine

In cloud computing, a compute engine is an example of Infrastructure as a Service (IaaS). It enables you to create and run [virtual machines (VMs)](#glo-vm) on your cloud service provider's infrastructure. When you deploy the AI Unlimited AI/ML compute engine from a Jupyter notebook, the [AI Unlimited manager](#glo-manager) provisions VMs.


## I

<a id="glo-iam-role"></a>
### IAM role

An [Identity and Access Management (IAM) role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html) is an identity you can create in your AWS account. It has permissions policies that determine what it can and cannot do in AWS. An IAM user is unique to one user, but an IAM role can be shared by users.

 
## K

<a id="glo-kernel"></a>
### kernel

A Jupyter kernel is a language-specific program that processes the code you write in a Jupyter notebook and communicates the results back to your notebook for you to see. 


## L

<a id="glo-load-balancer"></a>
### load balancer 

A load balancer distributes incoming traffic evenly across servers, which improves performance, reliability, and scalability. If your organization does not allow its resources to use public IP addresses, you can use a load balancer to expose the AI Unlimited manager and engine to the public IP network. 


## M

<a id="glo-mounting-volumes"></a>
### mounting volumes 

A concept in containerized platforms such as Docker. You can map a directory on the machine running the containers (the host) to a directory in a container to share data and files between the host and container.


## N

<a id="glo-nlb"></a>
### network load balancer

Load balancers distribute incoming traffic across servers. A network load balancer does not inspect traffic content. It bases routing decisions on factors such as ports and IP addresses. You can use a network load balancer as a way to expose AI Unlimited and its engine to the public IP network.


## O

<a id="glo-oauth-app"></a>
### OAuth app

An OAuth app allows a user to grant access to their account on one website or service to another, without sharing their password. AI Unlimited uses an OAuth app, created by your organization, to authorize access to your GitHub or GitLab account for storing user and project information.

<a id="glo-object-storage"></a>
### object storage
A scalable, highly effective way to store large amounts of structured, semi-structured, or unstructured data in the cloud. Amazon S3 is object storage on AWS. Azure Blob Storage is object storage on Azure. Object storage is the basis for a [data lake](#glo-data-lake).


## P

<a id="glo-project"></a>
### project

A project is a means to explore and analyze data from a Jupyter notebook. Each project has a Git repository for storing project information. 

<a id="glo-project-repo"></a>
### project repository

The project owner adds collaborators to the repository. From the repository, the next time the engine is deployed, the manager derives the users authorized to connect to and use the engine. If the engine is already deployed, the project owner updates the engine to add those users. 

A password for connecting to the engine is generated for each user for each engine deployment.

All commits to the project's schema are stored in the repository. When you suspend a project, then restore it, AI Unlimited uses the stored schema to bring the project back.


## S

<a id="glo-systemd"></a>
### systemd

Linux foundational software for system and service management. The AI Unlimited manager runs on a server instance in a container controlled by systemd.


## T

<a id="glo-tls"></a>
### Transport Layer Security (TLS) 

A protocol that creates a secure connection between two parties communicating over the internet. TLS encrypts data during transmission, making it unreadable to anyone who intercepts it, and it verifies the identities of both parties. 


## V

<a id="glo-vm"></a>
## virtual machine (VM)
A software emulation of a physical computer. Each VM operates as its own computer within a CSP's infrastructure. VMs enable scalability, flexibility, easier management, and a pay-as-you-go model.
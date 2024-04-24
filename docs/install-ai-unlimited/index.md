---
id: get-started
title: Get started
description: Learn how to get started with a self-service, on-demand AI/ML engine.
sidebar_label: Get started
sidebar_position: 1
pagination_next: null
---

# Get started

***testing ideas from 4/22 JR & Rob meeting***

## !BEFORE!

Learn how to deploy and use the [AI Unlimited](https://www.teradata.com/platform/ai-unlimited) AI/ML engine in the cloud.

With AI Unlimited, data scientists and data engineers can explore and analyze large datasets in a [Jupyter](https://jupyter.org/) notebook using ***x-many*** [ClearScape Analytics<sup>TM</sup>](https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Database-Analytic-Functions/Introduction-to-Analytics-Database-Analytic-Functions/Analytics-Database-Analytic-Function-Categories) ***(possible to make TM smaller?)*** functions&mdash;on a self-service, on-demand basis.


## How it works

You connect your notebook to the AI/ML engine on AWS or Azure, and connect the engine to your data lake. You can suspend and resume your analytics project anytime, and pay only for the hours you use.

In all, AI Unlimited comprises these elements:
- The AI/ML engine, that you deploy on your AWS or Azure account
- Jupyter notebooks, with the [AI Unlimited Jupyter Kernel](https://downloads.teradata.com/download/tools/teradata-ai-unlimited-jupyter-kernel), for running your workloads
- Your [object storage](/docs/install-ai-unlimited/glossary.md#glo-object-storage), where your [Amazon S3](https://aws.amazon.com/pm/serv-s3/?gclid=Cj0KCQjwlZixBhCoARIsAIC745AmyEzPaBnrARQxyUW_un0BjgTxlHygMScf4ZbX-7dTeznc-psOFlwaAkjmEALw_wcB&trk=fecf68c9-3874-4ae2-a7ed-72b6d19c8034&sc_channel=ps&ef_id=Cj0KCQjwlZixBhCoARIsAIC745AmyEzPaBnrARQxyUW_un0BjgTxlHygMScf4ZbX-7dTeznc-psOFlwaAkjmEALw_wcB:G:s&s_kwcid=AL!4422!3!536452728638!e!!g!!amazon%20s3!11204620052!112938567994) or [ADLS Gen2](https://learn.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction) data lake data resides
- Your Git repository, for authenticating users and storing project information
- A manager, which orchestrates the engine's deployment&mdash;and includes a web-based user interface for monitoring projects

:::note
With AI Unlimited you can collaborate on projects with other users. 

If you prefer a simpler, single-user approach, try the [QuickStart](/docs/advanced/quickstart) which runs the manager and JupyterLab in Docker containers on your computer.
:::


<a id="prerequisites"></a>
## Prerequisites

- A pay-as-you-go [AWS](https://aws.amazon.com) or [Azure](https://azure.microsoft.com) account on which to provision compute resources
- A [GitHub](https://github.com) or [GitLab](https://gitlab.com) account for hosting your AI Unlimited project repository


## What's next

[Prepare](/docs/install-ai-unlimited/before-you-begin.md) to install and set up AI Unlimited.


## !TEST!

Learn how to deploy and use the [AI Unlimited](https://www.teradata.com/platform/ai-unlimited) AI/ML engine in the cloud.

With AI Unlimited, data scientists and data engineers can explore and analyze large datasets in a [Jupyter](https://jupyter.org/) notebook using ***x-many*** [ClearScape Analytics<sup>TM</sup>](https://docs.teradata.com/access/sources/dita/topic?dita:topicPath=gma1702668333653.dita) functions&mdash;on a self-service, on-demand basis. 

***(make TM smaller)*** 

***(need to discuss doc link w/team)***

***(it will actually go to the lastest published doc--be it the Lake version or the 17.20 version - but we can make it always go to one or the other)***

## How it works

You connect your notebook to the AI/ML engine on AWS or Azure, and connect the engine to your [Amazon S3](https://aws.amazon.com/pm/serv-s3/?gclid=Cj0KCQjwlZixBhCoARIsAIC745AmyEzPaBnrARQxyUW_un0BjgTxlHygMScf4ZbX-7dTeznc-psOFlwaAkjmEALw_wcB&trk=fecf68c9-3874-4ae2-a7ed-72b6d19c8034&sc_channel=ps&ef_id=Cj0KCQjwlZixBhCoARIsAIC745AmyEzPaBnrARQxyUW_un0BjgTxlHygMScf4ZbX-7dTeznc-psOFlwaAkjmEALw_wcB:G:s&s_kwcid=AL!4422!3!536452728638!e!!g!!amazon%20s3!11204620052!112938567994) or [ADLS Gen2](https://learn.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction) data lake. You can suspend and resume your analytics project anytime, and pay only for the hours you use.


## Included in AI Unlimited
- An AI/ML engine that you deploy on AWS or Azure
- A manager, which orchestrates the engine's deployment&mdash;and includes a web-based user interface for monitoring projects
- The [AI Unlimited Jupyter Kernel](https://downloads.teradata.com/download/tools/teradata-ai-unlimited-jupyter-kernel) for managing projects in notebooks


## Subscribe

Subscribe to AI Unlimited on the [AWS Marketplace] ***(link to listing)*** or [Azure Marketplace] ***(link to listing)***.


## Prerequisites
- A pay-as-you-go [AWS](https://aws.amazon.com/) or [Azure](https://azure.microsoft.com/en-us) account (see requirements) ***(link to content in "Other resources")*** on which to provision compute resources
- A [GitHub](https://github.com) or [GitLab](https://gitlab.com) account (see requirements) ***(link to content in "Other resources")*** to host your repository for authenticating users and storing project information 
- Your object storage, where your Amazon or ADLS Gen2 data lake resides
- JupyterLab

:::note
With AI Unlimited you can collaborate on projects with other users. 

If you prefer a simpler, single-user approach, try the [QuickStart](/docs/advanced/quickstart) which runs the manager and JupyterLab in Docker containers on your computer.
:::


### Get some depoyment details






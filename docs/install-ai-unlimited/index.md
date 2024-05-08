---
id: get-started
title: Get started
description: Learn how to get started with a self-service, on-demand AI/ML engine.
sidebar_label: Get started
sidebar_position: 2
pagination_prev: null
pagination_next: null
---

# Get started

Learn how to install and use the [AI Unlimited](https://www.teradata.com/platform/ai-unlimited) AI/ML engine in the cloud.

With AI Unlimited, data scientists and data engineers can explore and analyze large datasets in a [Jupyter](https://jupyter.org/) notebook using [ClearScape Analytics™](https://docs.teradata.com/access/sources/dita/topic?dita:mapPath=phg1621910019905.ditamap&dita:ditavalPath=pny1626732985837.ditaval&dita:topicPath=gma1702668333653.dita) functions&mdash;on a self-service, on-demand basis. 


## How it works

You connect your notebook to the AI/ML engine on [AWS](https://aws.amazon.com/) or [Azure](https://azure.microsoft.com/en-us), and connect the engine to your [Amazon S3](https://aws.amazon.com/pm/serv-s3/?gclid=Cj0KCQjwlZixBhCoARIsAIC745AmyEzPaBnrARQxyUW_un0BjgTxlHygMScf4ZbX-7dTeznc-psOFlwaAkjmEALw_wcB&trk=fecf68c9-3874-4ae2-a7ed-72b6d19c8034&sc_channel=ps&ef_id=Cj0KCQjwlZixBhCoARIsAIC745AmyEzPaBnrARQxyUW_un0BjgTxlHygMScf4ZbX-7dTeznc-psOFlwaAkjmEALw_wcB:G:s&s_kwcid=AL!4422!3!536452728638!e!!g!!amazon%20s3!11204620052!112938567994) or [ADLS Gen2](https://learn.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction) data lake. You can suspend and resume your analytics project anytime, and pay only for the hours you use.

:::note
If AI Unlimited has already been installed and set up by someone at your organization, you can go straight to [Explore and Analyze Data](/docs/explore-and-analyze-data) to get started.
:::


## Included in AI Unlimited

- An AI/ML engine that you deploy on AWS or Azure
- The AI Unlimited manager, which orchestrates the engine's deployment&mdash;and includes a web-based user interface for monitoring projects
- The [AI Unlimited Jupyter Kernel](https://downloads.teradata.com/download/tools/teradata-ai-unlimited-jupyter-kernel) for managing projects in notebooks


## Prerequisites

- A pay-as-you-go AWS or Azure account on which to provision compute resources
	- Account requirements&mdash;[AWS](/docs/resources/aws-requirements.md) or [Azure](/docs/resources/azure-requirements.md)
- A [GitHub](https://github.com) or [GitLab](https://gitlab.com) account to host each project repository for authenticating users and storing project information
	- Other [Git requirements](/docs/resources/git-requirements.md)
- Your object storage, where your Amazon or ADLS Gen2 data lake resides
- JupyterLab

:::tip
When you install the manager, you'll provide values for some cloud deployment details. See the [AWS details](/docs/install-ai-unlimited/prod-aws-console-deploy-ai-unlimited.md#aws-parms) or [Azure details](/docs/install-ai-unlimited/prod-azure-portal-deploy-manager.md#azure-parms)&mdash;if you want to work with a cloud admin to get the values ahead of time.
:::

:::note
With AI Unlimited you can collaborate on projects with other users. 

If you prefer a simpler, single-user approach, try the [QuickStart](/docs/resources/quickstart) which runs the manager and JupyterLab in Docker containers on your computer.
:::


## Subscribe

Subscribe to AI Unlimited on the [AWS Marketplace] ***(link to listing)*** or [Azure Marketplace] ***(link to listing)***.

After subscribing, return to this documentation site and continue with **What's next**.


## What's next

Now you're ready to install AI Unlimited on [AWS](/docs/install-ai-unlimited/prod-aws-console-deploy-ai-unlimited.md) or [Azure](/docs/install-ai-unlimited/prod-azure-portal-deploy-manager.md).









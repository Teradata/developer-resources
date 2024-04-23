---
id: get-started
title: Get started
description: Learn how to get started with a self-service, on-demand AI/ML engine.
sidebar_label: Get started
sidebar_position: 1
pagination_next: null
---

# Get started

Learn how to deploy and use the [AI Unlimited](https://www.teradata.com/platform/ai-unlimited) AI/ML engine in the cloud.

With AI Unlimited, data scientists and data engineers can explore and analyze large datasets in a [Jupyter](https://jupyter.org/) notebook using ClearScape Analytics<sup>TM</sup> ***(possible to make TM smaller?)*** functions&mdash;on a self-service, on-demand basis. See the ***x-many*** functions. ***(link to doc, but challenges with that)***

## How it works

You connect your notebook to the AI/ML engine on AWS or Azure, and connect the engine to your [Amazon S3](https://aws.amazon.com/pm/serv-s3/?gclid=Cj0KCQjwlZixBhCoARIsAIC745AmyEzPaBnrARQxyUW_un0BjgTxlHygMScf4ZbX-7dTeznc-psOFlwaAkjmEALw_wcB&trk=fecf68c9-3874-4ae2-a7ed-72b6d19c8034&sc_channel=ps&ef_id=Cj0KCQjwlZixBhCoARIsAIC745AmyEzPaBnrARQxyUW_un0BjgTxlHygMScf4ZbX-7dTeznc-psOFlwaAkjmEALw_wcB:G:s&s_kwcid=AL!4422!3!536452728638!e!!g!!amazon%20s3!11204620052!112938567994) or [ADLS Gen2](https://learn.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction) data lake. You can suspend and resume your analytics project anytime, and pay only for the hours you use.

AI Unlimited comprises these elements:
- The AI/ML engine, deployed on your AWS or Azure account
- Jupyter notebooks, with the [AI Unlimited Jupyter Kernel](https://downloads.teradata.com/download/tools/teradata-ai-unlimited-jupyter-kernel), for running your workloads
- Your [object storage](/docs/install-ai-unlimited/glossary.md#glo-object-storage), where your S3 or ADLS Gen2 data lake data resides.
- Your Git repository, for authenticating users and storing project information
- A manager, which orchestrates the AI/ML engine's deployment&mdash;and includes a web-based user interface for monitoring projects

***TEST of splitting up the elements list. NOT YET DONE--JUST PLAYING.***

AI Unlimited comprises several elements.

Teradata makes available: ***would say "provides" but that sounds free***
- The AI/ML engine that you deploy on AWS or Azure
- A manager, which orchestrates the AI/ML engine's deployment&mdash;and includes a web-based user interface from which AI Unlimited admins can monitor projects
- The [AI Unlimited Jupyter Kernel](https://downloads.teradata.com/download/tools/teradata-ai-unlimited-jupyter-kernel)

You organization provides:
- A pay-as-you-go AWS or Azure account with [required permissions] ***link to "prep your account"***.
- A GitHub or GitLab account
- JupyterLab

:::note
With AI Unlimited you can collaborate on projects with other users. 

If you prefer a simpler, single-user approach, try the [QuickStart](/docs/advanced/quickstart) which runs the manager and JupyterLab in Docker containers on your computer.
:::


***Then we would not have this prerequisites section***
<a id="prerequisites"></a>
## Prerequisites

- A pay-as-you-go [AWS](https://aws.amazon.com) or [Azure](https://azure.microsoft.com) account on which to provision compute resources
- A [GitHub](https://github.com) or [GitLab](https://gitlab.com) account for hosting your AI Unlimited project repository


***Just noting that we should make sure this page makes sense to a general user - installing users will be the minority (even if not by much?).***


## Subscribe

Subscribe to AI Unlimited on the marketplace ***words TBD***


## What's next

[Prepare](/docs/install-ai-unlimited/before-you-begin.md) for the installation.

***Instead of the one link to preparation (formerly, Before you Begin), have these links to pages in "Other resources"***

- AWS and Azure account requirements
- GitHub or GitLab account requirements
- Get cloud deployment details




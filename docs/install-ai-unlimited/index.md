---
id: get-started
title: Get started
description: Learn how to get started with self-service, on-demand AI/ML engine.
sidebar_label: Get started
sidebar_position: 1
pagination_next: null
---

import DocCardList from '@theme/DocCardList';

# Get started

Learn how to install, set up, and use AI Unlimited. 

With AI Unlimited, you can explore and analyze large datasets in a Jupyter notebook using the [ClearScape Analytics](https://www.teradata.com/platform/clearscape-analytics)&mdash;on a self-service, on-demand basis. 

As a data scientist or data engineer, you'll connect your notebook to the AI Unlimited AI/ML engine on AWS or Azure, and connect the engine to your data lake. You can suspend and resume your analytics project anytime, and pay only for the hours you use.

The AI Unlimited elements:
- The AI/ML engine, on your [cloud service provider (CSP)](/docs/glossary.md#glo-csp)
- Jupyter notebooks, with the AI Unlimited Jupyter Kernel, for running your workloads
- Your object storage, on your [CSP](/docs/glossary.md#glo-csp)
- Your GitHub or GitLab repository, for user authentication and storing project information
- The manager, which orchestrates the AI Unlimited elements&mdash;and includes a web-based user interface for monitoring projects (for admins) and retrieving your API key to connect to the engine

<DocCardList items={[
  {
    type: 'link',
    label: 'AWS',
    href: './install-manager-AWS',
    description: 'Install AI Unlimited on AWS',
  },
  {
    type: 'link',
    label: 'Azure',
    href: './install-manager-Azure',
    description: 'Install AI Unlimited on Azure',
    items: [],
  },
]} />

If you prefer a simpler, single-user approach, a [QuickStart](/docs/advanced/quickstart) is available.






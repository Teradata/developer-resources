---
id: suspend-and-restore-project
title: Suspend and restore a project
description: How to suspend and restore projects to manage costs.
sidebar_position: 2
sidebar_label: Suspend and restore a project
pagination_prev: null
pagination_next: null
---

# Suspend and restore a project

To avoid incurring charges for unneeded engine resources, suspend projects you're not working on.

The project information, including user and object store authorizations and data objects, is saved. When you restore the project, you can pick up where you left off.

## Suspend

In your notebook, run this magic command:

```bash 
%project_engine_suspend <Project_Name>
```


## Restore

In your notebook, run this magic command: 

```bash 
%project_restore project=<Project_Name>, gitref=<Git_Reference>
```

Each time a project is restored, a new password for connecting to the engine is generated for each user.

:::note
Learn more about AI Unlimited [magic commands](/docs/explore-and-analyze-data/magic-commands.md).
:::


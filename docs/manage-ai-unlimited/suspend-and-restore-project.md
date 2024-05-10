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

All project information, including user and object store authorizations and data objects, are saved. When you restore the project, you can pick up where you left off.

## Suspend

In the project, run this:

```bash 
%project_engine_suspend <Project_Name>
```

## Restore

In the project, run this: 

```bash 
%project_restore project=<Project_Name>, gitref=<Git_Reference>
```


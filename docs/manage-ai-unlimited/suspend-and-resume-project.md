---
id: suspend-resume-project
sidebar_position: 2
pagination_prev: null
pagination_next: null
---

# Suspend and resume a project

To avoid incurring charges for unneeded engine resources, suspend projects you're not working on. 

All project information, including user and object store authorizations and data objects, are saved. When you restore the project, you can pick up where you left off.

In your project notebook, run this:

```bash 
%project_engine_suspend <Project_Name>
```

Restore the project anytime by running this: 

```bash 
%project_restore project=<Project_Name>, gitref=<Git_Reference>
```


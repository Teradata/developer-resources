---
id: add-collaborators
title: Add collaborators
description: Learn how to add collaborators to a project.
sidebar_label: Add project collaborators
sidebar_position: 1
pagination_prev: null
pagination_next: null
---

# Add project collaborators

If you are the project owner, you can add collaborators to your project. The steps depend on whether or not the engine is deployed.


## Before the engine is deployed

In GitHub or GitLab, add users to the project repository. ***(might add more info about this)*** When you deploy the engine from your JupyterLab notebook, the users are added to the engine automatically.


## After the engine is deployed

1. In GitHub or GitLab, add users to the project repository.<br/>
2. In your JupyterLab notebook, run the magic command `%project_engine_update_users` to add the users to the engine.


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

If you are the project owner, you can add collaborators to your project. The steps depend on whether you do this before or after the engine is deployed.


## Before the engine is deployed

1. In GitHub or GitLab, add users to the project repository.<br/>
See details about adding repo users for [GitHub](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository) or [GitLab](https://docs.gitlab.com/ee/user/project/members/#add-users-to-a-project).

2. When you deploy the engine from your Jupyter notebook, the users are added to the engine automatically.


## After the engine is deployed

1. In GitHub or GitLab, add users to the project repository.<br/>
See details about adding repo users for [GitHub](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository) or [GitLab](https://docs.gitlab.com/ee/user/project/members/#add-users-to-a-project).
2. In your Jupyter notebook, run the magic command `%project_engine_update_users` to add the users to the engine.


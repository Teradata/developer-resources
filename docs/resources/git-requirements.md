---
id: git-requirements
title: Git requirements
description: Get the Teradata-provided repository and create an OAuth app.
sidebar_label: Git requirements
sidebar_position: 4
pagination_prev: null
pagination_next: null
---

# Git requirements

Make sure you have a GitHub or GitLab account. And complete these two tasks.


## Clone the provided repository

The `deployments` folder in the [AI Unlimited GitHub repository](https://github.com/Teradata/ai-unlimited) contains template, parameter, and policy files for installing AI Unlimited.

	Open a terminal window, and clone the repository.

    ``` bash
    git clone https://github.com/Teradata/ai-unlimited
    ```


## Create a GitHub or GitLab OAuth app

An OAuth app allows a user to grant access to their account on one website or service to their account on another, without sharing their password.

Create an [OAuth](https://oauth.net/2/) app so that AI Unlimited can authorize your GitHub or GitLab account to store user and project information. 

1. Sign in to your GitHub or GitLab account. 

2. Create an OAuth app. See [GitHub: Create an OAuth app](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app) or [GitLab: Create an OAuth app](https://docs.gitlab.com/ee/integration/oauth_provider.html).
  
    While registering the OAuth app, use these URLs.
 
    - Homepage URL: `http://[ip_or_hostname]:[port]`
 
    - Authorization callback URL: `[Homepage URL]/auth/github/callback`
    
    For GitLab, select the appropriate OAuth **Scopes** as defined in [Authorized Applications](https://docs.gitlab.com/ee/integration/oauth_provider.html#view-all-authorized-applications).

3.	Copy and keep the **Client ID** and **Client secret**. You'll use them when you [set up AI Unlimited](/docs/install-ai-unlimited/setup-ai-unlimited.md).

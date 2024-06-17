---
id: create-oauth-app
title: Create an OAuth app
description: It will allow AI Unlimited to use your Git provider's authentication to manage project repositories.
sidebar_label: Create an OAuth app
sidebar_position: 4
pagination_prev: null
pagination_next: null
---

# Create a GitHub or GitLab OAuth app

An OAuth app allows a user to grant access to their account on one website or service to their account on another, without sharing their password.

Create an [OAuth](https://oauth.net/2/) app so that AI Unlimited can use GitHub or GitLab authentication to manage each [project repository](/docs/glossary.md#project-repository) and, each time the engine is deployed, derive the engine users from the collaborators you have added to the repository.

1. Sign in to your GitHub or GitLab account. 

2. Create an OAuth app. See [GitHub: Create an OAuth app](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app) or [GitLab: Create an OAuth app](https://docs.gitlab.com/ee/integration/oauth_provider.html).
  
    While registering the OAuth app, use these URLs.
 
    - Homepage URL: `http://[ip_or_hostname]:[port]`<br/>
      :::note
      This is the manager URL that you received at the end of the installation process.
      :::
 
    - Authorization callback URL: `[Homepage URL]/auth/github/callback`
    
    For GitLab, select the appropriate OAuth **Scopes** as defined in [Authorized Applications](https://docs.gitlab.com/ee/integration/oauth_provider.html#view-all-authorized-applications).

3.	Copy and keep the **Client ID** and **Client secret**, which you'll need to set up AI Unlimited. 

Now you're ready to [set up AI Unlimited](/docs/install-ai-unlimited/setup-ai-unlimited.md).



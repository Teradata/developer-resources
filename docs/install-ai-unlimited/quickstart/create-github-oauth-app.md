---
id: create-github-oauth-app
title: Create a Git OAuth app
description: Steps to create a Git OAuth app and authorize users.
sidebar_position: 6
tags:
  - Install AI Unlimited
  - Install using Docker
  - Create GitHub OAuth App
---

# Create a GitHub or GitLab OAuth app

AI Unlimited uses the GitHub or GitLab OAuth app to authorize users and manage the project state. It then stores this information in your Git repository.

1. Log in to your Git repository.
2. Create an OAuth app. See [GitHub: Create an OAuth app](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app) or [GitLab: Create an OAuth app](https://docs.gitlab.com/ee/integration/oauth_provider.html).
  
    While registering the OAuth app, use these URLs:
  
    * **Homepage URL**: **http://[ip_or_hostname]:3000/**
    * **Authorization callback URL**: **http://[ip_or_hostname]:3000/auth/github/callback**
    
    For GitLab, select the appropriate OAuth **Scopes** as defined in [Authorized Applications](https://docs.gitlab.com/ee/integration/oauth_provider.html#view-all-authorized-applications).

3.	Copy and retain the **Client ID** and **Client secret**. You'll use them to authorize AI Unlimited to save user and project information.


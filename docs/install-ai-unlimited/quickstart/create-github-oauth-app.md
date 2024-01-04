---
id: create-github-oauth-app
title: Create GitHub OAuth App
description: Steps to create GitHub OAuth App.
sidebar_position: 4
tags:
  - Install AI Unlimited
  - Install using Docker
  - Create OAuth App
---

# Create GitHub OAuth App

Workspace service uses the GitHub OAuth App to authorize users and manage the project state. To authorize the workspace service to save your project instance configuration, use the Client ID and Client secret key generated during the GitHub OAuth App registration. The project instance configuration values are maintained in your GitHub repositories and you can view them on the Workspace service **Profile** page.

First-time users must complete the following steps before proceeding. If you are unsure about your VPC configuration or permissions, contact your organization administrator.

1.	Log on to your GitHub account and create an OAuth App. See [GitHub Documentation](link:https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app).
While registering the OAuth App, type the following workspace service URLs in the URL fields:

    * **Homepage URL**: http://ip_or_hostname:3000/
    * **Authorization callback URL**: http://ip_or_hostname:3000/auth/github/callback

2.	Copy and retain the **Client ID** and **Client secret key**.
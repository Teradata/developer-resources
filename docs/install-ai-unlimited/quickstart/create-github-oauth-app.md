---
id: create-github-oauth-app
title: Create a GitHub OAuth app
description: Steps to create a GitHub OAuth app and authorize users.
sidebar_position: 4
tags:
  - Install AI Unlimited
  - Install using Docker
  - Create GitHub OAuth App
---

# Create a GitHub OAuth app

The workspace service uses the GitHub OAuth App to authorize users and manage the project state, and it stores this information in your GitHub repository.

1.	Log in to your GitHub account.
2. Create an OAuth App. See [GitHub Documentation](link:https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app).
  While registering the OAuth App, type the following workspace service URLs in the URL fields:

    * **Homepage URL**: http://ip_or_hostname:3000/
    * **Authorization callback URL**: http://ip_or_hostname:3000/auth/github/callback

2.	Copy and retain the **Client ID** and **Client secret key**. You'll use them to authorize the workspace service to save user and project information.

***MEM: They don't yet know what the **Profile** page is--and don't need to know yet.***

***MEM: Does "first-time user" mean anything other than a user who is doing the QuickStart install? If that's the case, no need to call out the user.***

**TA: This is a one-time effort, shouldn't we let the users know that they can skip the workflow the next time they need to deploy the workspace service using Docker? As a user, one needs to register the workspace service, once the registartion is complete, user can skip this workflow and directly connect to GitHub from the Profile page.**

***MEM: I wonder if we should add something about not using a GutHub App, assuming they should not use one? So they can skim through the intro in the GitHub doc faster.***

***MEM: I wonder if they should select Enable Device Flow? My wild guess is that they should not. Will they know?***
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

***MEM: In the title, let's use "GitHub or GitLab OAuth app." And adjust the rest of the topic to include GitLab. Can probably use "Git repository" where appropriate.***

The workspace service uses the GitHub OAuth App to authorize users and manage the project state, and it stores this information in your GitHub repository.

  ***MEM: Can be lowercase "app." Sigh... their site is inconsistent, though. Can revisit this. But let's go with lowercase.***

1.	Log in to your GitHub account.
2. Create an OAuth App. See [GitHub Documentation](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app).

***MEM: The link text can be "Create an OAuth app"***

***MEM: Is there also a link for GitLab?"***

  While registering the OAuth App, type the following workspace service URLs in the URL fields:
  
    * **Homepage URL**: http://ip_or_hostname:3000/
    * **Authorization callback URL**: http://ip_or_hostname:3000/auth/github/callback
	
2.	Copy and retain the **Client ID** and **Client secret key**. You'll use them to authorize the workspace service to save user and project information.

***MEM: Does "first-time user" mean anything other than a user who is doing the QuickStart install? If that's the case, no need to call out the user.***

**TA: This is a one-time effort, shouldn't we let the users know that they can skip the workflow the next time they need to deploy the workspace service using Docker? As a user, one needs to register the workspace service, once the registartion is complete, user can skip this workflow and directly connect to GitHub from the Profile page.**

***MEM: I'm seeing all the install topics as one-time tasks. My thinking (which is is often wrong! :-)): They do the install (any of the 3 types), then every time they run a workload (start a project), they 1. get their environment variables from the CSP, 2. get the API key from the Profile page, 3. go to a notebook. And 1-3 is addressed in topics under "Explore and analyze data" on the doc site. But, if they aren't an admin, and they don't use the workspace service UI... well I need to understand that flow better.***

***MEM: I wonder if we should add something about not using a GitHub App, assuming they should not use one? So they can skim through the intro in the GitHub doc faster.***

***MEM: I wonder if they should select Enable Device Flow? My wild guess is that they should not. Will they know?***
---
id: create-github-oauth-app
title: Create a GitHub OAuth app
description: Steps to create a GitHub OAuth app.
sidebar_position: 4
tags:
  - Install AI Unlimited
  - Install using Docker
  - Create OAuth App
---

# Create a GitHub OAuth app

Workspace service uses the GitHub OAuth App to authorize users and manage the project state. To authorize the workspace service to save your project instance configuration, use the Client ID and Client secret key generated during the GitHub OAuth App registration. The project instance configuration values are maintained in your GitHub repositories and you can view them on the Workspace service **Profile** page.

First-time users must complete the following steps before proceeding. If you are unsure about your VPC configuration or permissions, contact your organization administrator.

1.	Log on to your GitHub account and create an OAuth App. See [GitHub Documentation](link:https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app).
While registering the OAuth App, type the following workspace service URLs in the URL fields:

    * **Homepage URL**: http://ip_or_hostname:3000/
    * **Authorization callback URL**: http://ip_or_hostname:3000/auth/github/callback

2.	Copy and retain the **Client ID** and **Client secret key**.




MEM: Here's my suggestion for tightening this topic (see comments below for the reasoning): 

"The workspace service uses the GitHub OAuth App to authorize users and manage the project state, and it stores this information in your GitHub repository.

1. Log in to your GitHub account.
2. Create an OAuth App (that can be the link text for https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app), using these URLs:
    * **Homepage URL**: http://ip_or_hostname:3000/
    * **Authorization callback URL**: http://ip_or_hostname:3000/auth/github/callback
3. Copy and retain the **Client ID** and **Client secret key**. You'll use them to authorize the workspace service to save user and project information."


MEM: They don't yet know what the **Profile** page is--and don't need to know yet.

MEM: Does "first-time user" mean anything other than a user who is doing the QuickStart install? If that's the case, no need to call out the user.  

MEM: Since the topic is in a sequence of topics, we don't need to say "complete the following steps before proceeding." 

MEM: I chose "log in" over "log on." I asked Bard and got some great info about those options. Log in is more current and applies better to accessing individual accounts. Log on is used less these days, and applies more to accessing networks or servers. Pretty sure docs.td is inconsistent, and the CDUG, overall, needs to be updated. Anyway, let's go with "log in." We can set precedents for the AI Unlimited site. 

MEM: I wonder if we should add something about not using a GutHub App, assuming they should not use one? So they can skim through the intro in the GitHub doc faster.

MEM: I wonder if they should select Enable Device Flow? My wild guess is that they should not. Will they know? 

MEM: Saving this for the next topic: "If you are unsure about your VPC configuration or permissions, contact your organization administrator." ("Organization administrator," coincidentally, is a user role in VantageCloud Lake. I wonder if it's the right term here. Let's spell out Virtual Private Cloud (VPC) at least at its first occurrence.)
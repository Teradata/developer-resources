---
id: prod-before-you-start
title: Before you begin
description: Review the set of instructions and prerequisites before installing Teradata AI Unlimited in production environment.
sidebar_position: 1
tags:
  - Install AI Unlimited
  - Install on AWS
  - Install on Azure
  - Prerequisites to install AI Unlimited
  - Getting started
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Before you begin

***MEM: Getting some content from the QS version of this topic will add editorial improvements—like the GH/GL links.***

Make sure you have the following:

- GitHub or GitLab account: If you don't already have an account, create a free GitHub account at https://github.com/ or a GitLab account at https://gitlab.com/.

***Second bullet was a duplicate of the clone repo bullet – I removed it***

- Cloud Service Provider (CSP) account: You can host the AI Unlimited engine on AWS or Azure. 
    <Tabs>
    <TabItem value="aws" label="AWS" default>
    Contact your organization administrator for AWS Enterprise access. 
    </TabItem>

  <TabItem value="azure" label="Azure">
   Contact your organization administrator for Azure Enterprise access.
   </TabItem>
    </Tabs>
	
***With that little bit of info for each CSP, we don't need tabs. It could be “Cloud service provider (CSP) account: Ask your organization administrator (is that the right role?) for access to your organization's AWS or Azure enterprise account." [But "organization" might be a loaded term in the AWS world--need to dig deeper to find out.] Keep the tabs for now. Need to understand better what we really need to tell them. There’s content about a free Azure account in Prepare your CSP account. Would be good to have the basics about getting/accessing the account all in one place.***

***For the repo bullet, can remove “access.” We don’t have to repeat “AI Unlimited GitHub repository” before and after the colon (:). Can say “and clone it.” Let’s put the sentence about what it includes before the sentence about cloning. Then they can go straight to the code.***

***Pretty sure “for deploying” is more grammatically accurate in this case. At the least, it sounds better to my ear (will research someday).*** 

- AI Unlimited GitHub repository access: Open a terminal window, and clone the [Teradata AI Unlimited GitHub](https://github.com/Teradata/ai-unlimited) repository. It includes templates to deploy AI Unlimited and JupyterLab on your CSP.

``` bash
git clone https://github.com/Teradata/ai-unlimited
```

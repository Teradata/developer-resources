---
id: setup-workspace-service
title: Set up AI Unlimited
description: Steps to setup workspace service
sidebar_position: 6
tags:
  - Install AI Unlimited
  - Install using Docker
  - Load Docker Image
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Set up AI Unlimited

Access the the workspace service UI using the url **http://[ip_or_hostname]:3000/** if you installed the workspace service using Docker or using the URL from your CSP console.

[Jack says for workspaces in Docker it's always http://localhost:3000/. On AWS or Azure, he says it's the "connection string from your template outputs" which is interesting. Maybe "url" does not apply for workspaces on AWS/Azure?]

TA: The URL applies to AWS and Azure. As this is a shared topic, will need to be generic. 

In the [name for workspace service UI], complete the setup steps. 

[Something about the fact that these are defaults that they can change in a notebook? Which settings exactly? And that they can change these default setting later.]

[maybe a little redundant to say "In the blah," but we want to be clear about where this work is done, considering they've already done work elsewhere - not sure it's necessary though] 
TA: We have already told the user to access the UI, in which case 'In the UI' seems reduntant.

For help, select a step below. [not sure yet if we'll really need info for each step (working to get the UI as self-explanatory as possible), but might look silly to omit any of the 3]

[maybe these could be expandable text?]

**Step 1: Service setup** [step name might change]

[anything to say about logging level? suggestion to start with detailed log info until they have used AI Unlim for a bit? Actually, I remembered we'll have a whole topic on logging levels - need to figure out the user flow - link to that other topic from the field in the UI, but mention the advice for the initial set up here, as well, and link there? (users could come here from the UI or just from exploring the doc)

[more info about TLS? we want them to use it - maybe info on the edge cases for why they wouldn't? - private network with trusted users? - they do have a choice - what did Jack say about that...]

**Step 2: Git integration**

[this should all be pretty smooth - do they want to understand what's really happening though? not sure - if we think yes, could say this:]

After you enter the details in the fields, select **Authenticate** and you are redirected to GitHub or GitLab. Use your credentials to log in. This authorizes the workspace service [can we just say AI Unlimited?] to access your Git repo.

After you are redirected back to [name of workspace service UI], you can see that an API key was generated for you. 

You'll use your API key whenever you create a project in a Jupyter notebook. When a new user logs in to [name of workspace service IU], an API key is generated for that user. 

[is there more to it? is creating a project really the only time they'll need it? when they resume a suspended project do they need it? so the API key must connect the notebook to the workspace service, and accordingly, the engine and their Git provider--but pretty sure it has nothing to do with their connection to their data lake--is that right?]


**Step 3: Cloud integration**

[As you said, this has several fields for which we have existing content (from the tech preview), but we'll need to make more clear what those fields mean for AI Unlimited (as opposed to describing network/security concepts in general)].

[I put field description ideas on the Figma
(https://www.figma.com/file/rN0xsSfOzxUxspvsAAqnBC/(IN-PROGRESS)-AVCD-E-15%3A-AI-Unlimited-workspace-service---UX-enhancements?type=design&node-id=4%3A18&mode=design&t=nQIYNRMtN4dYrlnb-1). Sounds like the step 3 UI will change more--field names and placement. Anyway, will need to harmonize the field names/descriptions there with additional details here - trying to avoid redundancy. "Ugh. Why did they say to click this link? I already see this info on the UI!" If in a sour mood, they might also think: "Geez, doesn't Teradata know my time is precious? I'm so tired. And hungry." :-)]. 

[then not in the expandable text...] As the [name for workspace service] administator, you can always change these settings later. [all of them? any restrictions?]
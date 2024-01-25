---
sidebar_position: 1
---

# Getting started with AI Unlimited

***MEM: I just threw this content here. Is it what we need? Should be in context. What is the user thinking, feeling, and doing when they first arrive here? How did they get here?***

***MEM: Should we include an introductory video here?***

***MEM: Should this be the topic from which they choose 1 of the 3 install types? Then remove the (out-of-the-box) category page for them.***

***MEM: The Figma shows similar content on the workspace service UI. How much should go there? Be aware of syncing content between there and here.***

AI Unlimited is a self-service, on-demand platform that enables you to deploy a compute engine and connect it to your data lake. It includes Teradata’s AI Unlimited compute engine running on the public cloud. AI Unlimited stores no permanent data, which frees you from database management.

***MEM: I feel like we should say something like "Unlike x," at the beginning of the no-permanent-data sentence, but what should x be? "Unlike other analytics solutions,"? This makes the point more distingishing and helps the flow.***

You initiate each interaction with AI Unlimited. Meaning, you deploy the engine only as needed for an analytics project. In a JupyterLab notebook, you use Teradata's [ClearScape Analytics](https://www.teradata.com/platform/clearscape-analytics?) functions to explore and analyze large-scale datasets. You can then suspend your project, then restore it, whenever you want to pay only for the compute resources you actually use.

The AI Unlimited platform has these elements:
- The engine, on your cloud service provider (CSP)
- Jupyter notebooks, with the AI Unlimited Jupyter Kernel, for running analytic workloads
- Your object storage, on your CSP
- Your GitHub or GitLab repository, for storing user and project information 
- A web-based user interface and command line interface (CLI) for the AI Unlimited workspace service, which orchestrates the platform’s elements and supports project management tasks 

***MEM: Trying to get away from "service" - users care about what they can do, not what makes the product go - UI naming will hopefully change***

***MEM: We might want to add explicit content about what's the same/different among the 3 interfaces: 1. notebook, 2. workspace UI, 3. workspace CLI. #3 is for developers/automation work. Might users assume that the workspace UI and workspace CLI have the same functionality? They don't.***

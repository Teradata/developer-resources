---
id: load-docker-image
title: Load the Docker image and prepare the environment
description: Steps to load the AI Unlimited Docker image and set the environment.
sidebar_position: 4
tags:
  - Install AI Unlimited
  - Install AI Unlimited using Docker
  - Load Docker image
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get the workspace service Docker image and prepare the environment

***MEM: 1/25/24 - the more I think about it, the more I think we can combine this topic with the workspace install topic - both topics are shrinking and they really belong together - gets rid of the long title challenge - and we'll have parallelism with the Jupyter Docker install topic ("Install the workspace service [new name?] using Docker" and "Install JupyterLab using Docker')***

***TA: Agree, it will be easier for user to get the image and install in one-go. We can take a decision based on how UI evolves.***

The Docker image is an executable package that includes everything you need to run AI Unlimited in a Docker container. The AI Unlimited UI orchestrates the AI Unlimited elements and supports project management tasks.

***MEM: Let's add a sentence that defines the workspace service--in simple terms. You could grab that from the Welcome topic (not that it won't change of course).***

***TA: Have added for now. If we need to talk about the image, maybe we can check what items are bundled with the docker image? For example, Jupyter image might have the kernel, Python packages, and SQL all bunded as a single executable. Is the one-liner required? This is a quickstart, and mostly the user might have landed on this page after reading the previous topic (they cannot start the installation process from this topic, so they have no option but to go to prior topics)***

1. Open a terminal window and pull the Docker image from [Docker Hub](https://hub.docker.com/r/teradata/ai-unlimited-workspaces). 

    ```bash
    docker pull teradata/ai-unlimited-workspaces
    ```

***MEM: Later, let's look (throughout the topics) at how/when to tell them to open a terminal window. Maybe make it a separate step.***

***TA: Opening a terminal is a basic step for devs, do you think we should explain the basic step?***

***MEM: new on 1/9 - Interesting that the icon for copying code appears only when you hover over the code block. Do you know if it's possible to make it appear always? Seems it should always appear, for all code blocks. UPDATE: I asked Smit. He said it's fine as is and seems to be a widely used convention.***

***TA: Yes, the option is displayed only on hover, for most companies, however, Google documents have the copy option enabled by default.***

2. Set the environment variable `WORKSPACES_HOME` to the directory where the configuration and data files are located. Make sure the directory exists, and that appropriate permission is granted. The default location is **./volumes/workspaces**.

    | Local Location | Container Location | Usage |
    |----------------|--------------------|-------|
    | $WORKSPACES_HOME | /etc/td | Stores data and configuration |
    | $WORKSPACES_HOME/tls | /etc/td/tls | Stores certificate files |
  
 
  ***MEM: Should "etc" be replaced with a more standard way of showing unkown directories in a path? Or is that the actual path?***

  ***TA: etc is actual path and a standard representation within the dev community. We can ask Jack for better understanding***
  
  ***MEM: So the first step is in the terminal, the second step is in the CSP console/CLI, and the third step assumes they are still in the console/CLI. Step 1 is for one thing, steps 2 and 3 for something else. For at-a-glance clarity, let's add "In the CSP console," or "In the CSP console or CLI," to the beginning of step 2 as well.***

  ***TA: Users need the copy the CSP environment variable before running the docker run command. The problem with the environment variables is that they are short term, if you copy and retain it at the beginning of the process, most likely they will expire by the time you run the command. Step 3 has no relation to CSP, the workspace Home variable is for Docker configuration. You can run your commands without setting that, however, there are chances you may encounter errors, mostly when you're using CLI.***

3. Copy and retain these CSP environment variables from your CSP console or using CLI. 

    <Tabs>
    <TabItem value="aws" label="AWS" default>
    `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, and `AWS_SESSION_TOKEN`

    Learn about AWS [environment variables](https://docs.aws.amazon.com/sdkref/latest/guide/environment-variables.html).
	
	***MEM to MEM: Gain knowledge and come back to this. Same for Azure.***

    </TabItem>
    <TabItem value="azure" label="Azure">
    `ARM_SUBSCRIPTION_ID`, `ARM_CLIENT_ID`, and `ARM_CLIENT_SECRET`

    Learn about Azure [environment variables](https://github.com/paulbouwer/terraform-azure-quickstarts-samples/blob/master/README.md#azure-authentication).
	
		***MEM: I'm not familiar with Terraform, but Bard says "Terraform is an open-source, infrastructure-as-code (IaC) platform created by HashiCorp. It provides a way to define, provision, and manage infrastructure on various cloud platforms and on-premises data centers in a human-readable and declarative way." Do they have to use Terraform? Is there an Azure doc site link that's more appropriate?***

    ***TA: Yes, the link is appropriate as it was shared by Jack. He mentioned that the article is the easiest wasy to lean about Azure environment variables.***

		***MEM: Is this specifically to help Azure CLI users find the variables or is it to provide info about the variables more generally--which is how it seems on the AWS tab? What I'm going for is parallelism between the tabs, if possible. So we'd have "Learn about Azure environment variables." with only "environment variables" as the link text.***

    </TabItem>
    </Tabs>



---
id: load-docker-image
title: Load the Docker image and prepare the environment
description: Steps to load the AI Unlimited Docker image and set the environment.
sidebar_position: 2
tags:
  - Install AI Unlimited
  - Install AI Unlimited using Docker
  - Load Docker image
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Load the Docker image and prepare the environment

***MEM: For the title, let's say "Get the Docker image for the workspace service and prepare the cloud environment" 1. so it's not confused with the Jupyter Docker image, 2. to make clear they're not actually installing it yet, 3. to make it more personalble ("you").***

***TA: We are not preparing the cloud environment, the environment term is used for setting the environment variable". How about: Get the workspace service Docker image (or Docker image for workspace service : is it too long for a heading?) and prepare the environment?***

The Docker image is an executable package that includes everything you need to run the workspace service in a Docker container.

***MEM: To make it more personable, let's replace "needed" with "you need."***

***MEM: Let's add a sentence that defines the workspace service--in simple terms. You could grab that from the Welcome topic (not that it won't change of course).***

1. Open a terminal window and pull the Docker image from [Docker Hub](https://hub.docker.com/r/teradata/ai-unlimited-workspaces). 

    ```bash
    docker pull teradata/ai-unlimited-workspaces
    ```

***MEM: Later, let's look (throughout the topics) at how/when to tell them to open a terminal window. Maybe make it a separate step.***

***MEM: new on 1/9 - Interesting that the icon for copying code appears only when you hover over the code block. Do you know if it's possible to make it appear always? Seems it should always appear, for all code blocks.***

2. In the CSP console, copy and retain these CSP environment variables. 

***MEM: I guess some users will use the CSP CLI. Should we say "In the CSP console or CLI,"?***
***TA: The CLI step to retrieve the variable is different. Based on your comment, I need to add that code***

    <Tabs>
    <TabItem value="aws" label="AWS" default>
    `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, and `AWS_SESSION_TOKEN`

    See [AWS Environment variables](https://docs.aws.amazon.com/sdkref/latest/guide/environment-variables.html).
	
	***MEM to MEM: Gain knowledge and come back to this. Same for Azure.***
	
	***MEM: UPDATE - Let's use "Learn about AWS environment variables." And have the link text be only "environment variables" (both words lowercase). This might end up working on the Azure tab too.***

    </TabItem>
    <TabItem value="azure" label="Azure">
    `ARM_SUBSCRIPTION_ID`, `ARM_CLIENT_ID`, and `ARM_CLIENT_SECRET`

    To learn how to get these environment variables using the Azure CLI, see [Azure authentication](https://github.com/paulbouwer/terraform-azure-quickstarts-samples/blob/master/README.md#azure-authentication).
	
		***MEM: I'm not familiar with Terraform, but Bard says "Terraform is an open-source, infrastructure-as-code (IaC) platform created by HashiCorp. It provides a way to define, provision, and manage infrastructure on various cloud platforms and on-premises data centers in a human-readable and declarative way." Do they have to use Terraform? Is there an Azure doc site link that's more appropriate?***

		***MEM: Is this specifically to help Azure CLI users find the variables or is it to provide info about the variables more generally--which is how it seems on the AWS tab? What I'm going for is parallelism between the tabs, if possible. So we'd have "Learn about Azure environment variables." with only "environment variables" as the link text.***

    </TabItem>
    </Tabs>

3. Set the environment variable `WORKSPACES_HOME` to the directory where the configuration and data files are located. Make sure the directory exists, and that appropriate permission is granted. The default location is **./volumes/workspaces**.


  | Local Location | Container Location | Usage |
  |----------------|--------------------|-------|
  | $WORKSPACES_HOME | /etc/td | Stores data and configuration |
  | $WORKSPACES_HOME/tls | /etc/td/tls | Stores certificate files |
  
 
  ***MEM: Should "etc" be replaced with a more standard way of showing unkown directories in a path? Or is that the actual path?***
  
  ***MEM: So the first step is in the terminal, the second step is in the CSP console/CLI, and the third step assumes they are still in the console/CLI. Step 1 is for one thing, steps 2 and 3 for something else. For at-a-glance clarity, let's add "In the CSP console," or "In the CSP console or CLI," to the beginning of step 2 as well.***




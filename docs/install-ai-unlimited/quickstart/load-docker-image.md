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

***MEM: For the title, let's say "Get the Docker image for the workspace service and prepre your environment" 1. so it's not confused with the Jupyter Docker image, 2. to make clear they're not actually installing it yet, 3. to make it more personalble ("you").***

The Docker image is an executable package that includes everything needed to run the workspace service in a Docker container.

***MEM: To make it more personable, let's replace "needed" with "you need."***

1. Open a terminal window and pull the Docker image for the workspace service from [Docker Hub](https://hub.docker.com/r/teradata/ai-unlimited-workspaces). 
    ```bash
    docker pull teradata/ai-unlimited-workspaces
    ```
***MEM: In step 1, let's remove "for the workspace service" b/c it's now mentioned twice, the link takes them to the right image, and it's in the code they copy.***

***MEM: new on 1/9 - Interesting that the icon for copying code appears only when you hover over the code block. Do you know if it's possible to make it appear always? Seems it should always appear, for all code blocks.***

2. In the CSP console, copy and retain these CSP environment variables. 

    <Tabs>
    <TabItem value="aws" label="AWS" default>
    `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, and `AWS_SESSION_TOKEN`

    See [AWS Environment variables](https://docs.aws.amazon.com/sdkref/latest/guide/environment-variables.html).
	
	***MEM to MEM: Gain knowledge and come back to this. Same for Azure.***
	
	***MEM: Let's change the link text to "Environment variables" (lowercase v) so it more closely matches what they see after they click it (and it matches the left nav item).***

    </TabItem>
    <TabItem value="azure" label="Azure">
    `ARM_SUBSCRIPTION_ID`, `ARM_CLIENT_ID`, and `ARM_CLIENT_SECRET`

    To learn how to get these environment variables using the Azure CLI, see [Azure authentication](https://github.com/paulbouwer/terraform-azure-quickstarts-samples/blob/master/README.md#azure-authentication).
	
		***MEM: I'm not familiar with Terraform, but Bard says "Terraform is an open-source, infrastructure-as-code (IaC) platform created by HashiCorp. It provides a way to define, provision, and manage infrastructure on various cloud platforms and on-premises data centers in a human-readable and declarative way." Do they have to use Terraform? Is there an Azure doc site link that's more appropriate?***

		***MEM: On the AWS tab, there's no explanation of why they might want to go to the linked article, but that seems OK. Would that be OK here too--especially if we use an Azure doc site link--or am I not understanding?***
    </TabItem>
    </Tabs>

3. Set the environment variable `WORKSPACES_HOME` to the directory where the configuration and data files are located. Make sure the directory exists, and that appropriate permission is granted. The default location is **./volumes/workspaces**.

***MEM: Do they do this last part in the CSP console as well? I'm not understanding this step yet, but I think that's just my lack of knowledge. I think there's a recording of this install type I'll re-watch.***

  | Local Location | Container Location | Usage |
  |----------------|--------------------|-------|
  | $WORKSPACES_HOME | /etc/td | Stores data and configuration |
  | $WORKSPACES_HOME/tls | /etc/td/tls | Stores certificate files |
  
 
  ***MEM: Should "etc" be replaced with a more standard way of showing unkown directories in a path? Or is that the actual path?***




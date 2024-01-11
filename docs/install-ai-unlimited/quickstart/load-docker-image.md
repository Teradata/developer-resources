---
id: load-docker-image
title: Load Docker image and prepare environment
description: Steps to load AI Unlimited Docker image and set the environment.
sidebar_position: 2
tags:
  - Install AI Unlimited
  - Install AI Unlimited using Docker
  - Load Docker image
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Load the Docker image and prepare the environment

The Docker image is an executable package that includes everything needed to run the workspace service in a Docker container.

1. Open a terminal window and pull the Docker image for the workspace service from [Docker Hub](https://hub.docker.com/r/teradata/ai-unlimited-workspaces). 
    ```bash
    docker pull teradata/ai-unlimited-workspaces
    ```
MEM: new on 1/9 - Interesting that the icon for copying code appears only when you hover over the code block. Do you know if it's possible to make it appear always? Seems it should always appear, for all code blocks.

2. In the CSP console, copy and retain these CSP environment variables. 

    <Tabs>
    <TabItem value="aws" label="AWS" default>
    `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, and `AWS_SESSION_TOKEN`

    See [AWS Environment variables](https://docs.aws.amazon.com/sdkref/latest/guide/environment-variables.html).
	
	MEM to MEM: Gain knowledge and come back to this. Same for Azure.
	
	MEM: Let's change the link text to "Environment variables" (lowercase v) so it more closely matches what they see after they click it (and it matches the left nav item).

    </TabItem>
    <TabItem value="azure" label="Azure">
    `ARM_SUBSCRIPTION_ID`, `ARM_CLIENT_ID`, and `ARM_CLIENT_SECRET`

    To learn how to get these environment variables using the Azure CLI, see [Azure authentication](https://github.com/paulbouwer/terraform-azure-quickstarts-samples/blob/master/README.md#azure-authentication).
	
		MEM: I'm not familiar with Terraform, but Bard says "Terraform is an open-source, infrastructure-as-code (IaC) platform created by HashiCorp. It provides a way to define, provision, and manage infrastructure on various cloud platforms and on-premises data centers in a human-readable and declarative way." Do they have to use Terraform?
    </TabItem>
    </Tabs>

3. Set the environment variable `WORKSPACES_HOME` to the directory where the configuration and data files are located. Make sure the directory exists, and that appropriate permission is granted. The default location is **./volumes/workspaces**.

MEM: Do they do this last part in the CSP console as well? I'm not understanding this step yet, but I think that's just my lack of knowledge. I think there's a recording of this install type I'll re-watch.

  | Local Location | Container Location | Usage |
  |----------------|--------------------|-------|
  | $WORKSPACES_HOME | /etc/td | Stores data and configuration |
  | $WORKSPACES_HOME/tls | /etc/td/tls | Stores certificate files |
  
 
  MEM: Should "etc" be replaced with a more standard way of showing unkown directories in a path? Or is that the actual path?




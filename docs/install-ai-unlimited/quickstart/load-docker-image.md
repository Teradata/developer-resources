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

MEM: Added "the" before "image" and "environment" for grammar and readability.

The Docker image is a monolithic image of the workspace service running the necessary services in a single container.

MEM: "Monolithic" is accurate, but I wonder if everyone reading this will understand its software-architecture-specific meaning. I asked Bard and ChatGPT and came up with this sentence which seems more complete: "A Docker image is an executable package that includes everything needed to run a piece of software in a Docker container." Let's try that.

Pull the Docker image for the AI Unlimited workspace service from [Docker Hub](https://hub.docker.com/r/teradata/ai-unlimited-workspaces). 
```bash title="Docker Pull Command"
docker pull teradata/ai-unlimited-workspaces
```
Before proceeding, make sure to:

MEM: For machine translation reasons, we can't use an intro phrase that relies on its bullets to make it a complete sentence (because different languages have different grammar and syntax). But something like "Before proceeding, do the following" is ok, because grammatically it stands on its own as a sentence. 

MEM: That said, could we just have steps 1, 2, and 3? 1 pull the image, 2 copy and retain the variables, and 3 set the environment variable? Being sequential, then there's no need to say anything like "before continuing."

MEM: So I guess they are doing this from some sort of terminal window. Should we tell them to open one?

- Copy and retain the CSP environment variables from your console. 

MEM: Are there other CSP environment variables that they don't need to copy? If so, say "these" instead of "the."

MEM: We could replace "your console" with "the CSP console" for clarity. Or, better yet, "In the CSP console, copy and retain..." There's something to be said for starting out with where they need to be. Easier for them to grasp the rest of the sentence.

  <Tabs>
  <TabItem value="aws" label="AWS" default>
    `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, and `AWS_SESSION_TOKEN`

    See [AWS Environment Variables](https://docs.aws.amazon.com/sdkref/latest/guide/environment-variables.html).
	
	MEM: Let's change the link text to "Environment variables" (lowercase v) so it more closely matches what they see after they click it (and it matches the left nav item).

  </TabItem>
  <TabItem value="azure" label="Azure">
    `ARM_SUBSCRIPTION_ID`, `ARM_CLIENT_ID`, and `ARM_CLIENT_SECRET`

    For information on obtaining environment variables using Azure CLI, see [Azure Authentication](https://github.com/paulbouwer/terraform-azure-quickstarts-samples/blob/master/README.md#azure-authentication).
	
	MEM: This is a little more concise and friendly: "To learn how to get these variables using the Azure CLI, see...."
	
	MEM: I'm not familiar with Terraform, but Bard says "Terraform is an open-source, infrastructure-as-code (IaC) platform created by HashiCorp. It provides a way to define, provision, and manage infrastructure on various cloud platforms and on-premises data centers in a human-readable and declarative way." Do they have to use Terraform?
  </TabItem>
  </Tabs>

- Set the environment variable `WORKSPACES_HOME` to the directory where the configuration and data files are located. Make sure the directory exists, and that appropriate permission is granted. If you don't set `WORKSPACES_HOME`, the default location is **./volumes/workspaces**.

MEM: The last sentence can simply be "The default location is **./volumes/workspaces**."

MEM: Do they do this last part in the CSP console as well? I'm not understanding this step yet, but I think that's just my lack of knowledge. I think there's a recording of this install type I'll re-watch.

  | Local Location | Container Location | Usage |
  |----------------|--------------------|-------|
  | $WORKSPACES_HOME | /etc/td | Stores data and configuration |
  | $WORKSPACES_HOME/tls | /etc/td/tls | Stores cert files |
  
  MEM: Let's spell out "certificate."
  
  MEM: Should "etc" be replaced with a more standard way of showing unkown directories in a path? Or is that the actual path?




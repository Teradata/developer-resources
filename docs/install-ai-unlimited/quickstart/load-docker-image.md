---
id: load-docker-image
title: Load Docker image and prepare environment
description: Steps to load AI Unlimited Docker image and set the environment
sidebar_position: 2
tags:
  - Install AI Unlimited
  - Install using Docker
  - Load Docker Image
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Load Docker image and prepare environment

The Docker image is a monolithic image of the workspace service running the necessary services in a single container.

Pull the docker image from Docker Hub: https://hub.docker.com/r/teradata/ai-unlimited-workspaces.

```bash title="Docker Pull Command"
docker pull teradata/ai-unlimited-workspaces
```
Before proceeding, make sure to:

- Copy and retain the CSP environment variables from your AWS Console. 

  <Tabs>
  <TabItem value="aws" label="AWS" default>
    `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, and `AWS_SESSION_TOKEN`

    See AWS Environment Variables: https://docs.aws.amazon.com/sdkref/latest/guide/environment-variables.html.

  </TabItem>
  <TabItem value="azure" label="Azure">
    `ARM_SUBSCRIPTION_ID`, `ARM_CLIENT_ID`, and `ARM_CLIENT_SECRET`

    For information on obtaining environment variables using Azure CLI, see Azure Authentication: https://github.com/paulbouwer/terraform-azure-quickstarts-samples/blob/master/README.md#azure-authentication.
  </TabItem>
  </Tabs>

- Set the environment variable, `WORKSPACES_HOME`, to the directory where the configuration and data files are located. Make sure that the directory exists, and that appropriate permission is granted. If you don't set `WORKSPACES_HOME`, the default location is **./volumes/workspaces**.

| Local Location | Container Location | Usage |
|----------------|--------------------|-------|
| $WORKSPACES_HOME | /etc/td | Stores data and configuration |
| $WORKSPACES_HOME/tls | /etc/td/tls | Stores cert files |




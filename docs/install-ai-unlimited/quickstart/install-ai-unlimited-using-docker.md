---
id: install-ai-unlimited-using-docker
title: Install AI Unlimited using Docker
description: Steps to load AI Unlimited Docker image, set the environment, and install AI Unlimited using Docker Compose.
sidebar_position: 4
tags:
  - Install AI Unlimited
  - Install AI Unlimited using Docker
  - Load Docker image
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Install AI Unlimited using Docker

Use [Docker Compose](https://docs.docker.com/compose/) to install AI Unlimited. With Docker Compose, you can easily configure, install, and upgrade your Docker-based AI Unlimited installation.

1. Open a terminal window and pull the Docker image from [Docker Hub](https://hub.docker.com/r/teradata/ai-unlimited-workspaces). 

```bash
docker pull teradata/ai-unlimited-workspaces
```
2. Set the environment variable `WORKSPACES_HOME` to the directory where the configuration and data files are located. Make sure the directory exists, and that appropriate permission is granted. The default location is **./volumes/workspaces**.

    | **Local location** | **Container location** | **Usage** |
    |----------------|--------------------|-------|
    | $WORKSPACES_HOME | /etc/td | Stores data and configuration |
    | $WORKSPACES_HOME/tls | /etc/td/tls | Stores certificate files |
  
3. Copy and retain these CSP environment variables from your CSP console or using CLI. 

    <Tabs>
    <TabItem value="aws" label="AWS" default>
    `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, and `AWS_SESSION_TOKEN`

    Learn about AWS [environment variables](https://docs.aws.amazon.com/sdkref/latest/guide/environment-variables.html).
	
    </TabItem>
    <TabItem value="azure" label="Azure">
    `ARM_SUBSCRIPTION_ID`, `ARM_CLIENT_ID`, and `ARM_CLIENT_SECRET`

    Learn about Azure [environment variables](https://github.com/paulbouwer/terraform-azure-quickstarts-samples/blob/master/README.md#azure-authentication).
	
    </TabItem>
    </Tabs>

4. Install [Docker Compose](https://docs.docker.com/compose/install/). 

5.	Create a **workspaces.yml** file and copy the code in the tab.

:::note 
The following example uses a local volume to store your CSP credentials. You can create a separate YML file containing CSP environment variables, and run the Docker Compose file. For other options, see [AI Unlimited GitHub: Install AI Unlimited Using Docker Compose](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/docker/README.md).
:::


   <Tabs>
   <TabItem value="aws1" label="AWS">
   
   ```bash title="AWS Docker Compose"
version: "3.9"

services:
  workspaces:
    deploy:
      replicas: 1
    platform: linux/amd64
    container_name: workspaces
    image: ${WORKSPACES_IMAGE_NAME:-teradata/ai-unlimited-workspaces}:${WORKSPACES_IMAGE_TAG:-latest}
    command: workspaces serve -v
    restart: unless-stopped
    ports:
      - "443:443/tcp"
      - "3000:3000/tcp"
      - "3282:3282/tcp"
    environment:
      accept_license: "Y"
      TZ: ${WS_TZ:-UTC}
    volumes:
    - ${WORKSPACES_HOME:-./volumes/workspaces}:/etc/td
    - ${WORKSPACES_AWS_CONFIG:-~/.aws}:/root/.aws

    networks:
      - td-ai-unlimited
   
   ```
   </TabItem>
   <TabItem value="azure" label="Azure">

   ```bash title="Azure Docker Compose"
version: "3.9"

services:
  workspaces:
    deploy:
      replicas: 1
    platform: linux/amd64
    container_name: workspaces
    image: ${WORKSPACES_IMAGE_NAME:-teradata/ai-unlimited-workspaces}:${WORKSPACES_IMAGE_TAG:-latest}
    command: workspaces serve -v
    restart: unless-stopped
    ports:
      - "443:443/tcp"
      - "3000:3000/tcp"
      - "3282:3282/tcp"
    environment:
      accept_license: "Y"
      TZ: ${WS_TZ:-UTC}
    volumes:
      - ${WORKSPACES_HOME:-./volumes/workspaces}:/etc/td
      - ${WS_HOME:-~/.azure}:/root/.azure

    networks:
      - td-ai-unlimited
   
   ```
   </TabItem>
   </Tabs>
   
6.	Go to the directory where the **workspaces.yml** file is located and start the workspace service.

```bash title="Docker Compose Run"
docker compose -f workspaces.yaml
```
When the AI Unlimited UI is ready, you can access it at **http://[ip_or_hostname]:3000/**.


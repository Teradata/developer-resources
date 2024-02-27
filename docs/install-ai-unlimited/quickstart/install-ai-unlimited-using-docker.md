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

Use [Docker Compose](https://docs.docker.com/compose/) to install AI Unlimited. 

1. Open a terminal window, and pull the Docker image from [Docker Hub](https://hub.docker.com/r/teradata/ai-unlimited-workspaces). 

    ```bash
    docker pull teradata/ai-unlimited-workspaces
    ```
	
***MEM: Jack, will the Docker image be renamed "ai-unlimited"?***	
	
2. [Optional] Set the environment variable `AI_UNLIMITED_HOME` to the directory where the configuration and data files are located. Make sure the directory exists, and that appropriate permission is granted. The default location is **./volumes/ai-unlimited**.

    | **Local location** | **Container location** | **Usage** |
    |----------------|--------------------|-------|
    | $AI_UNLIMITED_HOME | /etc/td | Stores data and configuration |
    | $AI_UNLIMITED_HOME/tls | /etc/td/tls | Stores certificate files |
	
3. Copy and retain these CSP environment variables from your CSP console or using the CLI. 

***MEM: For Jack - not sure "or using the CLI" is even appropriate here, based on slack Q&A***
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

5. Create an **ai-unlimited.yml** file containing the code for your CSP.

:::note 
The following example uses a local volume to store your CSP credentials. You can create a separate YML file containing CSP environment variables, and run the Docker Compose file. For other options, see [AI Unlimited GitHub: Deploy with Docker Compose](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/docker/README.md).
:::

   <Tabs>
   <TabItem value="aws1" label="AWS">
   
   ```bash title="AWS Docker Compose"
version: "3.9"

services:
  ai-unlimited:
    deploy:
      replicas: 1
    platform: linux/amd64
    container_name: ai-unlimited-workspaces
    image: ${AI_UNLIMITED_IMAGE_NAME:-teradata/ai-unlimited-workspaces}:${AI_UNLIMITED_IMAGE_TAG:-latest}
    command: workspaces serve -v
    restart: unless-stopped
    ports:
      - "443:443/tcp"
      - "3000:3000/tcp"
      - "3282:3282/tcp"
    environment:
      accept_license: "Y"
      TZ: ${AI_UNLIMITED_TZ:-UTC}
    volumes:
    - ${AI_UNLIMITED_HOME:-./volumes/ai-unlimited-workspaces}:/etc/td
    - ${AI_UNLIMITED_AWS_CONFIG:-~/.aws}:/root/.aws

    networks:
      - td-ai-unlimited
   
   ```
   </TabItem>
   <TabItem value="azure" label="Azure">

   ```bash title="Azure Docker Compose"
version: "3.9"

services:
  ai-unlimited:
    deploy:
      replicas: 1
    platform: linux/amd64
    container_name: ai-unlimited-workspaces
    image: ${AI_UNLIMITED_IMAGE_NAME:-teradata/ai-unlimited-workspaces}:${AI_UNLIMITED_IMAGE_TAG:-latest}
    command: workspaces serve -v
    restart: unless-stopped
    ports:
      - "443:443/tcp"
      - "3000:3000/tcp"
      - "3282:3282/tcp"
    environment:
      accept_license: "Y"
      TZ: ${AI_UNLIMITED_TZ:-UTC}
    volumes:
      - ${AI_UNLIMITED_HOME:-./volumes/ai-unlimited-workspaces}:/etc/td
      - ${AI_UNLIMITED_AZURE_CONFIG:-~/.azure}:/root/.azure

    networks:
      - td-ai-unlimited
   
   ```
   </TabItem>
   </Tabs>
   
6.	Go to the directory where the **ai-unlimited.yml** file is located, and start AI Unlimited.

```bash title="Docker Compose Run"
docker compose -f ai-unlimited.yaml
```
When AI Unlimited is ready, you can access it at **http://localhost:3000**.




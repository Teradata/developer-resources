---
id: deploy-workspace-service-docker
title: Deploy workspace service using Docker
description: Steps to deploy AI Unlimited using Docker Engine and Docker Compose.
sidebar_position: 3
tags:
  - Install AI Unlimited
  - Install using Docker
  - Load Docker Image
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Deploy workspace service using Docker

You can install the workspace service using:

- Docker Engine: Text insert
- Docker Compose: With Docker Compose, you can easily configure, install, and upgrade your Docker-based workspace service installation. 


:::note 
For Azure, Teradata recommends deploying workspace service using Docker Compose.
:::

To use Teradata AI Unlimited with the workspace client, see Use Teradata AI Unlimited With Workspace Client[*Insert link*].

Run the Docker image once you've set the `WORKSPACES_HOME` variable.

<Tabs>
  <TabItem value="Engine" label="Docker Engine" default>

:::info
 Modify the directories based on your requirements.
 :::

   ```bash title="Docker Engine Run"
    docker run -detach \
  --env accept_license="Y" \
  --env AWS_ACCESS_KEY_ID="${AWS_ACCESS_KEY_ID}" \
  --env AWS_SECRET_ACCESS_KEY="${AWS_SECRET_ACCESS_KEY}" \
  --env AWS_SESSION_TOKEN="${AWS_SESSION_TOKEN}" \
  --publish 3000:3000 \
  --publish 3282:3282 \
  --volume ${WORKSPACES_HOME}:/etc/td \
  teradata/ai-unlimited-workspaces:latest
   ```
  The command downloads and starts a workspace service container and publishes the ports needed to access it. Once the workspace service server is initialized and started, you can access it using the URL: http://ip_or_hostname:3000/.

  </TabItem>
  <TabItem value="Compose" label="Docker Compose">
   
1. Install Docker Compose. See https://docs.docker.com/compose/install/.

2.	Create a **workspaces.yml** file.

:::note 
The following example uses a local volume to store your CSP credentials. You can create a separate YAML file containing CSP environment variables and run the Docker Compose file. For other options, see [AI Unlimited GitHub: Install AI Unlimited Using Docker Compose](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/docker/README.md).
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
   3.	Go to the directory where the **workspaces.yml** file is located and start the workspace service.

```bash title="Docker Compose Run"
docker compose -f workspaces.yaml
```
Once the workspace service server is initialized and started, you can access it using the URL: http://ip_or_hostname:3000/.
  </TabItem>
  </Tabs>





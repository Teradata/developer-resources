---
id: deploy-workspace-service-docker
title: Install the workspace service using Docker
description: Steps to deploy AI Unlimited using Docker Engine and Docker Compose.
sidebar_position: 4
tags:
  - Install AI Unlimited
  - Install using Docker
  - Load Docker Image
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Install the workspace service using Docker

Use [Docker Compose](https://docs.docker.com/compose/) to install the workspace service. With Docker Compose, you can easily configure, install, and upgrade your Docker-based workspace service installation.

***MEM: Link "workspace service" to the glossary term. Possible to add anchors?***
  
1. Install [Docker Compose](https://docs.docker.com/compose/install/). 

2.	Create a **workspaces.yml** file and copy the code in the tab.

:::note 
The following example uses a local volume to store your CSP credentials. You can create a separate YML file containing CSP environment variables, and run the Docker Compose file. For other options, see [AI Unlimited GitHub: Install AI Unlimited Using Docker Compose](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/docker/README.md).
:::

***MEM: Do "CSP credentials" = "CSP environment variables"? Does the "YAML file" = "the Docker Compose file"? Adding "Instead," at the beginning of the second sentence might help, if that's accurate. If we changed "and run the Docker Compose file" to "and run it using Docker Compose" would the sentence still be correct?***

***MEM: Should the link text be "Deploy with Docker Compose" followed by "in the AI Unlimited GitHub repository"? so they know they ended up in the right place? Or, the link text could be "this README" followed by "in the AI Unlimited GitHub repository." We'll have to make sure they don't confuse that repo with their own.*** 

***MEM: Not sure I'm loving sending them to the repo for this. Maybe the "other options" could be in expandable text?***

***TA: There are multiple options. Would it be an ideal path for a quickstart?***

***MEM: Do they copy the code on a tab and put that in the workspaces.yml file? Should we make that more explicit? Something like: "2. Create a workspaces.yml file containing the code for your CSP." That way, there's a lead-in to the tabs.***

***MEM: In the AWS and Azure code, do users need to change anything? The platform? Or "etc" in the directory path? So then step 2 would be "Create a workspaces.yml file containing the code for your CSP, modifying the platform and WORKSPACES_HOME directories as needed." (Anything else to modify?) Maybe there's a convention for this sort of thing we can find and follow.***


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
When the workspace service UI is ready, you can access it at **http://[ip_or_hostname]:3000/**.


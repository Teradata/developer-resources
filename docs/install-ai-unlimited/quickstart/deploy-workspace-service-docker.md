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

# Deploy the workspace service using Docker

MEM: I added "the" before "workspace" for grammar and readability.

You can install the workspace service using:

- Docker Engine: Text insert
- Docker Compose: With Docker Compose, you can easily configure, install, and upgrade your Docker-based workspace service installation. 

MEM: Let's use these links: https://docs.docker.com/engine/ and https://docs.docker.com/compose/. 

MEM: What I learned: Engine seems to be for building and running individual containers, while Compose is a higher-level tool for managing multi-container applications. Let's ask Jack if there's a simple way to say why (AWS) users might prefer one over the other.

MEM: Just noting we'll have to re-write so the bullets don't complete the sentence (see comment about that in the previous topic). (But we might not end up with bullets afterall--due to rewriting for why they would chooose one over the other. We'll see.)

:::note 
For Azure, Teradata recommends deploying workspace service using Docker Compose.
:::

MEM: In the note, you can remove "deploying workspace service" because the context makes that clear.

To use Teradata AI Unlimited with the workspace client, see Use Teradata AI Unlimited With Workspace Client[*Insert link*].

MEM: Let's remove this reference to the workspace service CLI. It's just for a portion of the overall audience and needs more explanation than I think we want to include in this workflow (for instance, that it's for developers working on automation, etc.). Was good to get that clarification from Jack on 1/9--he explained that to me previously, and I forgot!

Run the Docker image once you've set the `WORKSPACES_HOME` variable.

MEM: Because setting WORKSPACES_HOME is addressed in the previous topic, we don't need to repeat it. (Unless this refers to something else?) Generally, we can assume they do what we tell them to do. Otherwise we'd have lots of repetition, and they might wonder whether or not it's the same thing they already did. We don't want them to have to wonder. So you can end the sentence with "image."


<Tabs>
  <TabItem value="Engine" label="Docker Engine" default>

:::info
 Modify the directories based on your requirements.
 :::
 
 MEM: Maybe telling them to modify the directories doesn't really qualify as an "INFO" admonition? It doesn't seem like additional info, expanding on a point, a reminder to do something later, a best practice, etc. It just tells them to do something now. I see the benefit of emphasizing it, though. And, WARNING is too strong... I'll probably run this by the UX designers.

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
  MEM: Do they need to install Docker Engine before they run the command?
  
  MEM: Same question as in the previous topic about "etc" in the directory path--I bet there's a standard.
  
  The command downloads and starts a workspace service container, and publishes the ports needed to access it. Once the workspace service server is initialized and started, you can access it using this URL: http://ip_or_hostname:3000/.
  

  </TabItem>
  <TabItem value="Compose" label="Docker Compose">
   
1. Install Docker Compose. See https://docs.docker.com/compose/install/.

MEM: The words "Install Docker Compose" can be the link text (followed by the period).

2.	Create a **workspaces.yml** file.

:::note 
The following example uses a local volume to store your CSP credentials. You can create a separate YAML file containing CSP environment variables, and run the Docker Compose file. For other options, see [AI Unlimited GitHub: Install AI Unlimited Using Docker Compose](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/docker/README.md).
:::

MEM to MEM: Reminder to come back to this note. I need to gain some knowledge. What is the relationship between the first and second sentences?

MEM: In the note, should the link text be "Deploy with Docker Compose" followed by "in the AI Unlimited GitHub repository"? so they know they ended up in the right place? Or, the link text could be "this README" followed by "in the AI Unlimited GitHub repository." 

MEM: Not sure I'm loving sending them to the repo. Do you know if the content in the readme is likely to change or grow--a syncing challenge? Maybe the other options could be expandable text?

MEM: Do they copy the code on a tab and put that in the workspaces.yml file? Should we make that more explicit? Something like: "2. Create a workspaces.yml file containing the appropriate code for your CSP." That way, there's a lead-in to the tabs.

MEM: In the AWS and Azure code, do users need to change anything? The platform? Or "etc" in the directory path? If so, it's ok to use the INFO admonition--until we figure out our standard.


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

MEM: For my understanding... isn't the workspace service running locally in the Docker container? "Server" is throwing me off a bit, because it sounds like a separate "computer."
  </TabItem>
  </Tabs>





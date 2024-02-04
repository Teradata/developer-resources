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

Use [Docker Engine](https://docs.docker.com/engine/) or [Docker Compose](https://docs.docker.com/compose/) to install the workspace service.

- Docker Engine: Text insert
- Docker Compose: With Docker Compose, you can easily configure, install, and upgrade your Docker-based workspace service installation. 

***MEM: UPDATED It seems that Engine is for single-container applications, and Compose is for multi-container applications. And Compose adds efficiency to managing multi-container applications. Workspaces has a single container, so Compose might not add efficiency. But maybe some users just like Compose--personal preference. If that's all true (ask Jack), let's not try to explain why they might choose one over the other.***

***MEM: Link "workspace service" to the glossary term. Possible to add anchors?***

:::note 
For Azure, Teradata recommends installing workspace service using Docker Compose.
:::

***MEM: Let's remove this reference to the workspace service CLI. It's just for a portion of the overall audience and needs more explanation than I think we want to include in this workflow (for instance, that it's for developers working on automation, etc.). Was good to get that clarification from Jack on 1/9--he explained that to me previously, and I forgot!***

Run the Docker image.

***MEM: Because setting WORKSPACES_HOME is addressed in the previous topic, we don't need to repeat it. (Unless this refers to something else?) Generally, we can assume they do what we tell them to do. Otherwise we'd have lots of repetition, and they might wonder whether or not it's the same thing they already did. We don't want them to have to wonder. So you can end the sentence with "image." Actually, you can remove the whole sentence. Running the image is addressed on the tabs.***

***TA: I feel, we need to retain 'Run the Docker image'. Else, users are directly taken to the tab,

<Tabs>
  <TabItem value="Engine" label="Docker Engine" default>

:::note
 Modify the directories based on your requirements.
 :::
 
 ***MEM: Maybe telling them to modify the directories doesn't really qualify as an "INFO" admonition? It doesn't seem like additional info, expanding on a point, a reminder to do something later, a best practice, etc. It just tells them to do something now. I see the benefit of emphasizing it, though. And, WARNING is too strong.***

 ***TA: there are some variables in the following code that users need to replace.***

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
  ***MEM: Do they need to install Docker Engine (https://docs.docker.com/engine/install/) before they run the command? Is that step 1, like in Compose?***

  ***TA: No, we have already installed Docker is before you begin. That is enough to run the command.***
  
  ***MEM: Then step 2 could be "Run Docker Engine, modifying the WORKSPACES_HOME directories as needed."***
  
  ***MEM: For the code, same question as in the previous topic about "etc" in the directory path--I bet there's a standard.***
  
  The command downloads and starts a workspace service container, and publishes the ports needed to access it. Once the workspace service server is initialized and started, you can access it using this URL: http://ip_or_hostname:3000/.
  

  </TabItem>
  <TabItem value="Compose" label="Docker Compose">
   
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
Once the workspace service server is initialized and started, you can access it using the URL: http://ip_or_hostname:3000/.

***MEM: For my understanding... isn't the workspace service running locally in the Docker container? "Server" is throwing me off a bit, because it sounds like a separate computer. Can we delete "server"? Learned more: a "server" can run locally. Simpler language could work here: "When the [name for workspace servier UI] is ready [does it take some time?], you can access it at [url - and I put a question about the url in the slack channel]***

***We should probably bold the url.***
  </TabItem>
  </Tabs>





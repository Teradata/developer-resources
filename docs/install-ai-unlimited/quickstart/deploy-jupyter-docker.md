---
id: deploy-jupyter-docker
title: Deploy JupyterLab using Docker
description: Steps to deploy JupyterLab using Docker Engine and Compose file.
sidebar_position: 6
tags:
  - Install AI Unlimited
  - Deploy JupyterLab
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Deploy JupyterLab using Docker

This article outlines the steps for deploying and setting up a Teradata AI Unlimited interface using Docker. You can use JupyterLab or workspace client as your Teradata AI Unlimited interface.

***MEM: Generally, we can avoid sentences like the first one. The topic's context and title aleady convey that meaning.***

***MEM: Instead, dive into why users should care. How about "You start analytics projects, manage them, and run them in Jupyter notebooks that use the AI Unlimited Jupyter Kernel."***

***MEM: Let's not mention the workspaces CLI here. See related comment in the workspaces Docker topic.***

You can deploy JupyterLab using: ***MEM: Let's say "JupyterLab for AI Unlimited..." 

- Docker Engine: With Docker Engine, you can facilitate uniform and efficient Docker-based JupyterLab installation.
- Docker Compose: With Docker Compose, you can easily configure, install, and upgrade your Docker-based JupyterLab installation.

***MEM: I'm trying to figure out what facts are the same for Engine and Compose, and what facts are different. Is the difference that they can use Compose to configure and upgrade--but they can't do that using Engine? Let's get to the heart of why they would choose one or the other--maybe ask Jack. See my comment in the workspace Docker topic***

***MEM: For translation, rewrite so the bullets don't finish the sentence. The intro has to stand on its own as a complete thought/sentence.***

For information about workspace client, see **insert link**.

***MEM: Can remove the "For information..." sentence.***

<Tabs>
  <TabItem value="Engine" label="Docker Engine" default>
  1. Pull the Docker image from the [DockerHub](https://hub.docker.com/r/teradata/ai-unlimited-jupyter).
   
  2. Set the `JUPYTER_HOME` variable and run the Docker image.
  
  ***MEM: In step 1, I lean toward removing "the" before "DockerHub" as DockerHub is the whole site. Otherwise, it's like "buy the [thing] from the Amazon."***
    
:::note
Modify the directories based on your requirements.
:::

   ```bash title="Docker Engine Run"
docker run -detach \
  --env “accept_license=Y” \
  --publish 8888:8888 \
  --volume ${JUPYTER_HOME}:/home/jovyan/JupyterLabRoot \
  teradata/ai-unlimited-jupyter:latest
   
   ```
  The command downloads and starts a JupyterLab container and publishes the ports needed to access it.

  Connect to JupyterLab using the URL: http://localhost:8888 and enter the token when prompted. For detailed instructions, see [Teradata Vantage™ Modules for Jupyter Installation Guide](https://docs.teradata.com/r/Teradata-VantageTM-Modules-for-Jupyter-Installation-Guide/Teradata-Vantage-Modules-for-Jupyter/Teradata-Vantage-Modules-for-Jupyter) or [Use Vantage from a Jupyter Notebook](https://quickstarts.teradata.com/jupyter.html).


  </TabItem>
  <TabItem value="Compose" label="Docker Compose">
   
1. Install Docker Compose. See https://docs.docker.com/compose/install/.

2.	Create a **jupyter.yml** file.

```bash title="Jupyter Docker Compose"

    version: "3.9"

services:
  jupyter:
    deploy:
      replicas: 1
    platform: linux/amd64
    container_name: jupyter
    image: ${JUPYTER_IMAGE_NAME:-teradata/ai-unlimited-jupyter}:${JUPYTER_IMAGE_TAG:-latest}
    environment:
      accept_license: "Y"
    ports:
      - 8888:8888
    volumes:
      - ${JUPYTER_HOME:-./volumes/jupyter}:/home/jovyan/JupyterLabRoot/userdata
    networks:
      - td-ai-unlimited

networks:
  td-ai-unlimited:

```
   
3. Go to the directory where the **jupyter.yml** file is located and start JupyterLab.

```bash title="Docker Compose Run
docker compose -f jupyter.yml up
```
Once the JupyterLab server is initialized and started, you can connect to JupyterLab using the URL: http://localhost:8888 and enter the token when prompted. 

For detailed instructions, see [Teradata Vantage™ Modules for Jupyter Installation Guide](https://docs.teradata.com/r/Teradata-VantageTM-Modules-for-Jupyter-Installation-Guide/Teradata-Vantage-Modules-for-Jupyter/Teradata-Vantage-Modules-for-Jupyter) or [Use Vantage from a Jupyter Notebook](https://quickstarts.teradata.com/jupyter.html).

  </TabItem>
  </Tabs>


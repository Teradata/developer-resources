---
id: install-jupyter-docker
title: Install JupyterLab for AI Unlimited using Docker
description: Steps to install JupyterLab using Docker Engine and Compose file.
sidebar_position: 8
tags:
  - Install AI Unlimited
  - Deploy JupyterLab
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Install JupyterLab for AI Unlimited using Docker

Create, run, and manage your analytics projects in Jupyter notebooks that use the AI Unlimited Jupyter Kernel. The JupyterLab for AI Unlimited Docker image includes the kernel. 

Use [Docker Compose](https://docs.docker.com/compose/) to install JupyterLab for AI Unlimited. 

1. Open a terminal window, and pull the Docker image from [DockerHub](https://hub.docker.com/r/teradata/ai-unlimited-jupyter).

```bash
docker pull teradata/ai-unlimited-jupyter
```
   
2. Set the `JUPYTER_HOME` variable.

***MEM: Gemini says JUPYTER_HOME "defines the location where JupyterLab stores essential data and configuration files. This includes blah blah blah..." So maybe we say "Set the JUPYTER_HOME variable to the directory for storing the JupyterLab data and configuration files." Something like that? Can it be any directory?***

3. Install [Docker Compose](https://docs.docker.com/compose/install/).

4. Create a **jupyter.yml** file containing the following code.

 :::note
Modify the directories as needed.
:::

```bash 

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
5. Go to the directory where the **jupyter.yml** file is located and start JupyterLab.

```bash 
docker compose -f jupyter.yml up
```
The command downloads and starts a JupyterLab container and publishes the port and token needed to access it. You can then access JupyterLab at http://localhost:8888 and enter the token when prompted. 

---
id: deploy-jupyter-docker
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

***MEM: Let's try moving this topic to before the OAuth topic. Then all install types will go from setting up workspaces to next steps.***

***TA: To set up workspace, won't user need to create OAuth app first?***

***MEM: Also in the title, I'm now thinking we can delete "for AI Unlimited." Yes, that's part of the official, long name, but it ends up looking like just extra words--users know they are installing it for AI Unlimited.***

***TA: JupyterLab for AI Unlimited is different from the normal version available. Won't users need to differentiate between the two versions available?***

Create, run, and manage your analytics projects in Jupyter notebooks that use the AI Unlimited Jupyter Kernel. You can use Docker Compose to install JupyterLab for AI Unlimited. 

***MEM: Let's add a note here: "Administrators can manage projects through the workspace service interface. Jupyter notebook users can manage a project in its notebook." (This will have to be refined, discussed with Artur/Jack.)***

To load your Docker image and prepare your environment, do the following:

1. Open a terminal window and pull the Docker image from [DockerHub](https://hub.docker.com/r/teradata/ai-unlimited-jupyter).
   
2. Set the `JUPYTER_HOME` variable.

3. Install Docker Compose. See https://docs.docker.com/compose/install/.

4. Create a **jupyter.yml** file.
 :::note
Modify the directories based on your requirements.
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
When the JupyterLab server is ready, you can access it at http://localhost:8888 and enter the token when prompted. 

For detailed instructions, see [Teradata Vantage™ Modules for Jupyter Installation Guide](https://docs.teradata.com/r/Teradata-VantageTM-Modules-for-Jupyter-Installation-Guide/Teradata-Vantage-Modules-for-Jupyter/Teradata-Vantage-Modules-for-Jupyter) or [Use Vantage from a Jupyter Notebook](https://quickstarts.teradata.com/jupyter.html).

***MEM: Because the 2 docs linked to are for Vantage, not sure Artur/Jack will want us to link to them. My understanding is that they don't want AI Unlimited confused with Vantage. Of course, it will help sell Vantage, but that's different. Are there details in those docs that users need?***

***TA: I found the resources super detailed and useful when trying JupyterLab. The book has detailed explanations of magic commands and other finer aspects. These are useful, but let's hear from Jack and Artur.***
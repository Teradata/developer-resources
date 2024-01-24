---
id: deploy-jupyter-docker
title: Deploy JupyterLab for AI Unlimited using Docker
description: Steps to deploy JupyterLab using Docker Engine and Compose file.
sidebar_position: 6
tags:
  - Install AI Unlimited
  - Deploy JupyterLab
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Deploy JupyterLab for AI Unlimited using Docker

***MEM: Let's try moving this topic to before the OAuth topic. Then all install types will go from setting up workspaces to next steps.***

***TA: To set up workspace, won't user need to create OAuth app first?***

***MEM: In the title, let's say "Install" instead of "Deploy" as the latter sounds like a bigger effort, and to use plain language.***

***TA: Install gives a sense of placing software to a machine/system where as deploy is widely used  for cloud environment?***

***MEM: Also in the title, I'm now thinking we can delete "for AI Unlimited." Yes, that's part of the official, long name, but it ends up looking like just extra words--users know they are installing it for AI Unlimited.***

***TA: JupyterLab for AI Unlimited is different from the normal version available. Won't users need to differentiate between the two versions available?***

This article outlines the steps for deploying and setting up a Teradata AI Unlimited interface using Docker. You can use JupyterLab or workspace client as your Teradata AI Unlimited interface.

***MEM: Generally, we can avoid sentences like the first one. The topic's context and title aleady convey that meaning.***

***MEM: Instead, dive into why users should care... "You create analytics projects, run them, and manage them in Jupyter notebooks that use the AI Unlimited Jupyter Kernel."***

***TA: with a tinge of marketing language: Leverage the AI Unlimited Kernel within the JupyterLab Notebook to write and run data projects, connect to the Teradata systems, and visualize data.*** 

***MEM: Let's add a note here: "Administrators can manage projects through the workspace service interface. Jupyter notebook users can manage a project in its notebook." (This will have to be refined, discussed with Artur/Jack.)***

***MEM: Let's not mention the workspaces service CLI in this topic, as that's not for running analytics and seems to not be the usual way to manage projects That will go with the management topics, or maybe in its own developer section--for users developing automation.***

You can deploy JupyterLab for AI Unlimited using the following: 

***MEM: In the sentence above, it seems good to keep the long name. It's just nice to have the topic's title be shorter--easier to skim the left nav. And we can replace "deploy" with "install."***

- Docker Engine: With Docker Engine, you can facilitate uniform and efficient Docker-based JupyterLab installation.
- Docker Compose: With Docker Compose, you can easily configure, install, and upgrade your Docker-based JupyterLab installation.

To load your Docker image and prepare your environment, do the following:

  1. Open a terminal window and pull the Docker image from [DockerHub](https://hub.docker.com/r/teradata/ai-unlimited-jupyter).
   
  2. Set the `JUPYTER_HOME` variable.

***MEM: See comments in the install workspace service topic--let's handle Engine vs. Compose the same way.***

***MEM: Are pulling the Docker image and setting JUPYTER_HOME things they do whether they use Engine or Compose (like in the workspace service flow)? Or, is the Docker image for Engine only? Trying to make sure we have the right stuff on the tabs and the right stuff before the tabs--for this topic and for the workspace service install.***
***TA: Yes, the image is require whether the user runs the command via Engine or Compose. I will correct this section and align it.***

***Just noting that, for the workspace service flow, we might end with 1. getting the image, 2. doing the variables, and 3. using Engine/Compose all in the same topic afterall (like how it is for Jupyter, to be consistent)--it's just hard for me to see that clearly now. I'll stop marking this topic, and let's see how things look after you've made changes.***

<Tabs>
  <TabItem value="Engine" label="Docker Engine" default>
  Run the Docker image once you’ve set the `JUPYTER_HOME` variable.
    
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

  </TabItem>
  </Tabs>

Once the JupyterLab server is initialized and started, you can connect to JupyterLab using the URL: http://localhost:8888 and enter the token when prompted. 

For detailed instructions, see [Teradata Vantage™ Modules for Jupyter Installation Guide](https://docs.teradata.com/r/Teradata-VantageTM-Modules-for-Jupyter-Installation-Guide/Teradata-Vantage-Modules-for-Jupyter/Teradata-Vantage-Modules-for-Jupyter) or [Use Vantage from a Jupyter Notebook](https://quickstarts.teradata.com/jupyter.html).

***MEM: Because the 2 docs linked to are for Vantage, not sure Artur/Jack will want us to link to them. My understanding is that they don't want AI Unlimited confused with Vantage. Of course, it will help sell Vantage, but that's different. Are there details in those docs that users need?***

***TA: I found the resources super detailed and useful when trying JupyterLab. The book has detailed explanations of magic commands and other finer aspects. These are useful, but let's hear from Jack and Artur.***
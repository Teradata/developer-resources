---
id: test-install-ai-unlimited-jupyter-docker
title: Teradata - AI Unlimited - test deploy AI Unlimited and JupyterLab using Docker
description: Learn how to install AI Unlimited and JupyterLab using Docker.
sidebar_label: Install AI Unlimited and JupyterLab using Docker 
sidebar_position: 8
tags:
  - Install AI Unlimited
  - Install using Docker
  - Production
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Install AI Unlimited and JupyterLab using Docker

***MEM: Based on a review comment from Jack about the word "install" not applying well to the Quick Start, maybe we should call this topic "Set up a local environment for AI Unlimited and JupyterLab"***

Use [Docker Compose](https://docs.docker.com/compose/) to install AI Unlimited and JupyterLab. 

***MEM: The first sentence could then be "Use Docker Compose to set up a containerized environment in which to run AI Unlimited and JupyterLab, with the AI Unlimited Jupyter Kernel." Think that would work?***

1. Open a terminal window and clone the Teradata AI Unlimited GitHub repository. This repository includes sample YAML files to install AI Unlimited and JupyterLab.

***MEM: Should we tell them to first go to the directory where they want to put the repo, and then clone?***

***MEM: At the beginning of the second sentence, let's replace "This respository" with "It"--the reference is clear.***

``` bash
git clone https://github.com/Teradata/ai-unlimited
```
2. [Optional] Set the environment variable `AI_UNLIMITED_HOME` to the directory where the configuration and data files are located. Make sure the directory exists, and that appropriate permission is granted. The default location is **./volumes/ai-unlimited**.

***MEM: How about "the directory where you want the configuration and data files to be located"? Because those things are not there yet, and it helps reinforce that this is an alternative to the default.***

    | **Local location** | **Container location** | **Usage** |
    |----------------|--------------------|-------|
    | $AI_UNLIMITED_HOME | /etc/td | Stores data and configuration |
    | $AI_UNLIMITED_HOME/tls | /etc/td/tls | Stores certificate files |

3. [Optional] Set the `JUPYTER_HOME` variable for JupyterLab.

***MEM: In steps 2 and 3, let's say "Optionally, set..." [Optional] is a long-time IE convention, but it's a little awkward. Let's go for readability.***

***MEM: In step 3, should we include language like what's in step 2 regarding what to set the variable to--and to make sure the directory exists, etc.? Should we give them the default location?***

4. Copy these environment variables from your [CSP](/docs/glossary.md#glo-csp) console or use the CLI. 

***How about saying "...environment variables for storing your CSP credentials..." so they don't have to infer that from reading the variables on the tabs or click the more-info link--so they can know right away.***

***So this is how they get the variable values, but they are hidden, right?***

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

:::note 
You can provide the CSP environment variables to Docker Compose by either [mounting them as volumes](/docs/glossary.md#glo-mounting-volumes) or using an environment variable file. This quickstart uses a YAML file that contains the CSP environment variables to store your CSP credentials. For other options, see [AI Unlimited GitHub: Deploy with Docker Compose](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/docker/README.md).
:::

***MEM: I'm thinking we can just say "...provide the environment variables..." There's enough context that makes clear they are for the CSP. Can remove the first "CSP" in the second sentence as well.***

5. In the cloned Teradata AI Unlimited GitHub repository, open the [CSP]-credentials-env-vars.yaml file for your CSP and update the [CSP](/docs/glossary.md#glo-csp) environment variable values.

***MEM: It's probably ok to remove "for your CSP" because [CSP] is in the filename. And can probably remove "CSP" before "environment variable values" as it's clear what they are at this point.***

***MEM: They don't actually see the values, correct?***

6. Go to the directory where the **ai-unlimited.yaml** and **jupyter.yaml** files are located, and start AI Unlimited and JupyterLab.

  <Tabs>
    <TabItem value="aws" label="AWS" default>

:::note
Teradata recommends running Docker Compose in detached mode (-d) so that the command doesn't block the terminal window.
:::

***MEM: I'm thinking that putting the note before the tabs would work. Then, users can trust the tabs to contain only the information that is unique per CSP. Hopefully, that approach will throughout the whole site.***

```bash title="Run Docker Compose file on the background "
docker compose -f ai-unlimited.yaml -f aws-credentials-env-vars.yaml -f jupyter.yaml -d up 
```
***MEM: heading: "Run the Docker Compose file in the background"***

In detached mode, the Jupyter token is not displayed on the terminal window. To retrieve the Jupyter token, do the following:

***MEM: Second sentence can be "Retrieve the Jupyter token:"***

***MEM: Wondering if the sentence about the token not automatically appearing is necessary. Even if they are surprised about not seeing the token, right away they'll see "Retrive the token:" and the steps. What do you think?***

a. List the currently running containers, and identify the name of the JupyterLab container.

```bash
docker ps 
```
b. Search for occurrences of the string 'Token' in the logs of the specific container.

***MEM: "in the container's logs"***

```bash
docker logs <container_name> | grep 'Token'
```

```bash title="Run Docker Compose file on the foreground "
docker compose -f ai-unlimited.yaml -f aws-credentials-env-vars.yaml -f jupyter.yaml up 
```

***MEM: So this is if they choose not to use detached mode? I guess I'm confused about the flow. Looks like we're asking them to do it both ways, background, then foreground. But I might be misunderstanding. Might this be a case for tabs within tabs? Or too messy? AWS tab, with backgroud and foreground tabs, and same for Azure.*** 

***MEM: heading: "Run the Docker Compose file in the foreground"***

 ```bash title="Stop the containers and remove networks, volumes, and images"
docker-compose -f ai-unlimited.yaml -f azure-credentials-env-vars.yaml -f jupyter.yaml down
  ```
  
  ***MEM: Above block is for Azure. I don't think we had this "down" code block before. Does it belong in a new/different topic? Or maybe it needs explanation?***
</TabItem>
    <TabItem value="azure" label="Azure">
	
***MEM: Same comments as for AWS, as applicable.***

:::note
Teradata recommends running Docker Compose in detached mode (-d) so that the command doesn't block the terminal window.
:::

  ```bash title="Run Docker Compose file on the background "
docker compose -f ai-unlimited.yaml -f azure-credentials-env-vars.yaml -f jupyter.yaml -d up
```

In detached mode, the Jupyter token is not displayed on the terminal window. To retrieve the Jupyter token, do the following:

a. List the currently running containers, and identify the name of the JupyterLab container.

```bash
docker ps 
```
b. Search for occurrences of the string 'Token' in the logs of the specific container.

```bash
docker logs <container_name> | grep 'Token'
```

  ```bash title="Run Docker Compose file on the foreground "
docker compose -f ai-unlimited.yaml -f azure-credentials-env-vars.yaml -f jupyter.yaml up 
```

  ```bash title="Stop the containers and remove networks, volumes, and images"
docker-compose -f ai-unlimited.yaml -f azure-credentials-env-vars.yaml -f jupyter.yaml down
  ```
 </TabItem>
    </Tabs>

The command downloads and starts JupyterLab and AI Unlimited containers and publishes the port and token needed to access it. You can then access JupyterLab at **http://localhost:8888** and enter the token when prompted. When AI Unlimited is ready, you can access it at **http://localhost:3000**.

***MEM: Maybe..."The command downloads and starts AI Unlimited and JupyterLab containers. When AI Unlimited is ready, you can access it at http://localhost:3000. When JupyterLab is ready, you can access it at http://localhost:8888 and enter the token." (Maybe we can say that more economically....)***

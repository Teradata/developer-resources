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

Use [Docker Compose](https://docs.docker.com/compose/) to install AI Unlimited and JupyterLab. 

1. Open a terminal window and clone the Teradata AI Unlimited GitHub repository. This repository includes sample YAML files to install AI Unlimited and JupyterLab.

``` bash
git clone https://github.com/Teradata/ai-unlimited
```
2. [Optional] Set the environment variable `AI_UNLIMITED_HOME` to the directory where the configuration and data files are located. Make sure the directory exists, and that appropriate permission is granted. The default location is **./volumes/ai-unlimited**.

    | **Local location** | **Container location** | **Usage** |
    |----------------|--------------------|-------|
    | $AI_UNLIMITED_HOME | /etc/td | Stores data and configuration |
    | $AI_UNLIMITED_HOME/tls | /etc/td/tls | Stores certificate files |

3. [Optional] Set the `JUPYTER_HOME` variable for JupyterLab.

4. Copy these [CSP](/docs/glossary.md#glo-csp) environment variables from your [CSP](/docs/glossary.md#glo-csp) console or use the CLI. 

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
You can provide the CSP environment variables to Docker Compose by either mounting them as volumes or using an environment variable file. This quickstart uses a YAML file that contains the CSP environment variables to store your CSP credentials. For other options, see [AI Unlimited GitHub: Deploy with Docker Compose](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/docker/README.md).
:::

5. From the cloned Teradata AI Unlimited GitHub repository, open the [CSP]-credentials-env-vars.yaml file for your CSP and update the [CSP](/docs/glossary.md#glo-csp) environment variable values.

6. Go to the directory where the **ai-unlimited.yaml** and **jupyter.yaml** files are located, and start AI Unlimited and JupyterLab.

  <Tabs>
    <TabItem value="aws" label="AWS" default>

:::note
Teradata recommends running Docker Compose in detached mode (-d) so that the command doesn't block the terminal window.
:::
```bash title="Run Docker Compose file on the background "
docker compose -f ai-unlimited.yaml -f aws-credentials-env-vars.yaml -f jupyter.yaml -d up 
```
In detached mode, the Jupyter token is not displayed on the terminal window. To retrieve the Jupyter token, do the following:

a. List the currently running containers and identify the name of the JupyterLab container.

```bash
docker ps 
```
b. Search for occurrences of the string 'Token' in the logs of the specific container.
```bash
docker logs <container_name> | grep 'Token'
```

```bash title="Run Docker Compose file on the foreground "
docker compose -f ai-unlimited.yaml -f aws-credentials-env-vars.yaml -f jupyter.yaml up 
```
 ```bash title="Stop the containers and remove networks, volumes, and images"
docker-compose -f ai-unlimited.yaml -f azure-credentials-env-vars.yaml -f jupyter.yaml down
  ```
</TabItem>
    <TabItem value="azure" label="Azure">

:::note
Teradata recommends running Docker Compose in detached mode (-d) so that the command doesn't block the terminal window.
:::

  ```bash title="Run Docker Compose file on the background "
docker compose -f ai-unlimited.yaml -f azure-credentials-env-vars.yaml -f jupyter.yaml -d up
```
In detached mode, the Jupyter token is not displayed on the terminal window. To retrieve the Jupyter token, do the following:

a. List the currently running containers and identify the name of the JupyterLab container.

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

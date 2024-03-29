---
id: test-quickstart-new-structure
title: Teradata - AI Unlimited - Deploy AI Unlimited and JupyterLab using Docker
description: Learn how to run AI Unlimited and JupyterLab using Docker.
sidebar_label: Run AI Unlimited and JupyterLab using Docker 
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Run AI Unlimited and JupyterLab using Docker

Use [Docker Compose](https://docs.docker.com/compose/) to run AI Unlimited and JupyterLab, with the AI Unlimited Jupyter Kernel, locally in containers. 

## Clone the AI Unlimited GitHub repository

Open a terminal window, and clone the Teradata AI Unlimited GitHub repository. It includes sample YAML files to run AI Unlimited and JupyterLab.

``` bash
git clone https://github.com/Teradata/ai-unlimited
```
## Set AI Unlimited environment variables

1. Optionally, set the environment variable `AI_UNLIMITED_HOME` to the directory where you want the configuration and data files to be located. Make sure the directory exists, and that appropriate permission is granted. The default location is **./volumes/ai-unlimited**.

    | **Local location** | **Container location** | **Usage** |
    |----------------|--------------------|-------|
    | $AI_UNLIMITED_HOME | /etc/td | Stores data and configuration |
    | $AI_UNLIMITED_HOME/tls | /etc/td/tls | Stores certificate files |

2. Optionally, set the `JUPYTER_HOME` variable to the directory where you want the JupyterLab configuration files to be located. The default location is **~/.jupyter**.

## Provide environment variables

1. Copy these environment variables from your [CSP](/docs/glossary.md#glo-csp) console or use the CLI. 

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
	You can provide your CSP credentials to Docker Compose two ways:
	- You can use a YAML file that contains environment varibles for storing your CSP credentials. This QuickStart assumes you are using this method.
	- You can use a local volume containing your CSP credentials. 
	
	See both methods in the **Jupyter and AI Unlimited** section of [Deploy with Docker Compose](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/docker/README.md) in the Teradata AI Unlimited GitHub repository.
	:::

2. In the cloned Teradata AI Unlimited GitHub repository, open the **[CSP]-credentials-env-vars.yaml** file and update the environment variable values.

## Start AI Unlimited and JupyterLab

1. Go to the directory where the **ai-unlimited.yaml** and **jupyter.yaml** files are located, and start AI Unlimited and JupyterLab.

	<Tabs>
		<TabItem value="aws" label="AWS" default>
		```bash title="Run the Docker Compose file in the background "
		docker compose -f ai-unlimited.yaml -f aws-credentials-env-vars.yaml -f jupyter.yaml -d up 
		```
		</TabItem>
		<TabItem value="azure" label="Azure">
		```bash title="Run the Docker Compose file in the background "
		docker compose -f ai-unlimited.yaml -f azure-credentials-env-vars.yaml -f jupyter.yaml -d up
		```
		</TabItem>
	</Tabs>
	
	The command downloads and starts AI Unlimited and JupyterLab containers.

2. To retrieve the Jupyter token, list the currently running containers, and identify the name of the JupyterLab container.

	```bash
	docker ps 
	```
	Then search for occurrences of the string 'Token' in the container's logs.

	```bash
	docker logs <container_name> | grep 'Token'
	```

## Verify access to AI Unlimited and JupyterLab

When AI Unlimited is ready, you can access it at **http://localhost:3000**. When JupyterLab is ready, you can access it at **http://localhost:8888**, and enter the token. 

After you [set up AI Unlimited](/docs/install-ai-unlimited/quickstart/setup-ai-unlimited.md), you'll be able to create a project in JupyterLab. 


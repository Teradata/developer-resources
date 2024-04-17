---
id: run-jupyter-docker
title: Teradata - AI Unlimited - Run JupyterLab locally using Docker
description: Learn how to run JupyterLab with the AI Unlimited Jupyter Kernel on your computer.
sidebar_label: Docker
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Run JupyterLab locally

Use [Docker Compose](https://docs.docker.com/compose/) to run JupyterLab, with the AI Unlimited Jupyter Kernel, locally in a container. 

## Set environment variables

1. Optionally, in a terminal window, set the `JUPYTER_HOME` variable to the directory where you want the JupyterLab configuration files to be located. The default location is **~/.jupyter**.

## Provide environment variables

***For Jupyter alone (not with AI Unlimited), I see only this option in the readme: `docker compose -f jupyter.yaml up`. Does that mean they don't need to provide environment variables for Jupyter?***

***I need to better understand what "environment variables" means in the 2 steps, "set" and "provide."***

1. Copy these environment variables from your [CSP](/docs/glossary.md#glo-csp) console or use the CLI. **Do these enable Jupyter to talk to the engine?**

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
	
	See both methods in the **Jupyter** section of [Deploy with Docker Compose](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/docker/README.md) in the Teradata AI Unlimited GitHub repository. ***Neither method is there for Jupyter (without AI Unlim).***
	:::

2. In the cloned Teradata AI Unlimited GitHub repository, open the **[CSP]-credentials-env-vars.yaml** file and update the environment variable values. **Applicable?**

## Start JupyterLab

1. Go to the directory where the **jupyter.yaml** file is located, and start JupyterLab.

	<Tabs>
		<TabItem value="aws" label="AWS" default>
		```bash title="Run the Docker Compose file in the background "
		docker compose -f aws-credentials-env-vars.yaml -f jupyter.yaml -d up 
		```
		</TabItem>
		<TabItem value="azure" label="Azure">
		```bash title="Run the Docker Compose file in the background "
		docker compose -f azure-credentials-env-vars.yaml -f jupyter.yaml -d up
		```
		</TabItem>
	</Tabs>
	
	**Probably should be `docker compose -f jupyter.yaml up`? If so, will remove tabs. What is the -d? It's not in the code in the readme.**
	
	The command downloads and starts the JupyterLab container.

2. To retrieve the Jupyter token, list the currently running containers, and identify the name of the JupyterLab container.

	```bash
	docker ps 
	```
	Then search for occurrences of the string 'Token' in the container's logs.

	```bash
	docker logs <container_name> | grep 'Token'
	```

## Verify access to JupyterLab

When JupyterLab is ready, you can access it at `http://localhost:8888`, and enter the token. 

After you [set up AI Unlimited](/docs/install-ai-unlimited/quickstart/docker-setup-b.md), you'll be able to create a project in JupyterLab. 





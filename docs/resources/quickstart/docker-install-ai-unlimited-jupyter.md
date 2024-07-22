---
id: run-ai-unlimited-jupyterlab-docker
title: Run the manager and JupyterLab locally
description: Learn how to run the AI Unlimited manager and JupyterLab using Docker.
sidebar_label: Run the manager and JupyterLab using Docker 
sidebar_position: 3
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Run the manager and JupyterLab using Docker

The AI Unlimited manager orchestrates the engine's deployment and includes a web-based user interface for monitoring projects. And the manager is where you'll set up AI Unlimited. 

You'll use JupyterLab to explore and analyze data.

You'll use [Docker Compose](https://docs.docker.com/compose/) to run the AI Unlimited manager and JupyterLab, with the AI Unlimited Jupyter Kernel, locally in containers. 

:::tip
For installation support, email the <a href="mailto:aiunlimited.support@Teradata.com">support team</a> or ask the [community](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa).
:::

## Prerequisites

- A pay-as-you-go AWS or Azure account on which to deploy the engine from a Jupyter notebook
- A [GitLab](https://gitlab.com) or [GitHub](https://github.com) account to host each project repository for authenticating users and storing project information
- Your object storage, where your Amazon or ADLS Gen2 data lake resides
- [Docker](https://www.docker.com/get-started/) installed on your computer


## Set configuration file locations

1. Optionally, set the `AI_UNLIMITED_HOME` environment variable to the directory in which to store the manager's configuration and data files. Make sure the directory exists, and that appropriate permission is granted. The default location is `./volumes/ai-unlimited`.

    | **Local location** | **Container location** | **Usage** |
    |----------------|--------------------|-------|
    | $AI_UNLIMITED_HOME | /etc/td | Stores data and configuration |
	
	:::tip
	Learn about [AWS](https://docs.aws.amazon.com/sdkref/latest/guide/environment-variables.html) or [Azure](https://github.com/paulbouwer/terraform-azure-quickstarts-samples/blob/master/README.md#azure-authentication) environment variables.
	:::
	
2. Optionally, set the `JUPYTER_HOME` environment variable to the directory in which to store the JupyterLab configuration files. The default location is `~/.jupyter`.


## Clone the repository

The `deployments/docker` folder in the [AI Unlimited GitHub repository](https://github.com/Teradata/ai-unlimited) provided by Teradata includes these files that you'll need to run the manager and JupyterLab:
- `[AWS or Azure]-credentials-env-vars.yaml`
- `ai-unlimited.yaml`
- `jupyter.yaml` 

Clone the repository.

    ``` bash
    git clone https://github.com/Teradata/ai-unlimited
	```


## Pass your cloud service provider credentials to Docker

:::note 
You can pass the credentials two ways:
- Use `[AWS or Azure]-credentials-env-vars.yaml`, which contains environment variables for storing your credentials.
- Use a local volume containing your credentials. 
	
See both methods in the **Jupyter and AI Unlimited** section of [Deploy with Docker Compose](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/docker/README.md) in the Teradata AI Unlimited GitHub repository.

This QuickStart uses the first method.
:::

1. Copy these environment variables from your cloud service provider's console.

	<Tabs>
		<TabItem value="aws" label="AWS" default>
		`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, and `AWS_SESSION_TOKEN`
		</TabItem>
		
		<TabItem value="azure" label="Azure">
		`ARM_SUBSCRIPTION_ID`, `ARM_CLIENT_ID`, and `ARM_CLIENT_SECRET`
		</TabItem>
	</Tabs>

2. Go to the directory where `[AWS or Azure]-credentials-env-vars.yaml` is located and update the file's environment variable values.


## Start the manager and JupyterLab

1. From the directory where `[AWS or Azure]-credentials-env-vars.yaml`, `ai-unlimited.yaml`, and `jupyter.yaml` are located, start the manager and JupyterLab.
	
	:::note
	The `-d` flag in the command is optional.
	:::

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
	
	The command downloads and starts the manager and JupyterLab containers.

2. To retrieve the Jupyter token, list the currently running containers.

	```bash
	docker ps 
	```
	And identify the name of the JupyterLab container.
	
	Then search for occurrences of the string 'Token' in the container's logs.

	```bash
	docker logs <container_name> | grep 'Token'
	```

## Verify access

When the manager is ready, you can access it at `http://localhost:3000`. 

When JupyterLab is ready, you can access it at `http://localhost:8888`, and enter the token. 


## What's next

[Create an OAuth app](../../install-ai-unlimited/create-oauth-app.md) to allow authentication between AI Unlimited and your Git provider account.



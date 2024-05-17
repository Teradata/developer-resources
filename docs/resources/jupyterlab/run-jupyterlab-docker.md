---
id: run-jupyter-docker
title: Run JupyterLab locally using Docker
description: Learn how to run JupyterLab with the AI Unlimited Jupyter Kernel on your computer.
sidebar_label: Run locally using Docker
sidebar_position: 3
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Run JupyterLab locally using Docker

You'll use [Docker Compose](https://docs.docker.com/compose/) to run JupyterLab, with the AI Unlimited Jupyter Kernel, locally in a container.

:::tip
For installation support, ask the [community](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa).
:::


## Set a location for JupyterLab configuration files

Optionally, set the `JUPYTER_HOME` environment variable to the directory in which to store the JupyterLab configuration files. The default location is `~/.jupyter`.

:::tip
Learn about [AWS](https://docs.aws.amazon.com/sdkref/latest/guide/environment-variables.html) or [Azure](https://github.com/paulbouwer/terraform-azure-quickstarts-samples/blob/master/README.md#azure-authentication) environment variables.
:::


## Clone the respository

The `deployments/docker/` folder in the [AI Unlimited GitHub repository](https://github.com/Teradata/ai-unlimited) provided by Teradata includes the [jupyter.yaml](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/docker/jupyter.yaml) file you need to run JupyterLab. 

Clone the repository.

    ``` bash
    git clone https://github.com/Teradata/ai-unlimited
	```


## Start JupyterLab

1. Go to the directory where `jupyter.yaml` is located, and start JupyterLab.

	```bash title="Run the Docker Compose file in the background "
	docker compose -f jupyter.yaml -d up 
	```
	The command downloads and starts the JupyterLab container.

2. To retrieve the Jupyter token, list the currently running containers.

	```bash
	docker ps 
	```
	
	And identify the name of the JupyterLab container.
	
	Then search for occurrences of the string 'Token' in the container's logs.

	```bash
	docker logs <container_name> | grep 'Token'
	```

## Verify access to JupyterLab

When JupyterLab is ready, you can access it at `http://localhost:8888`, and enter the token. 




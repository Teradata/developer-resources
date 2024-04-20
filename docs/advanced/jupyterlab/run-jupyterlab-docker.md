---
id: run-jupyter-docker
title: Run JupyterLab locally using Docker
description: Learn how to run JupyterLab with the AI Unlimited Jupyter Kernel on your computer.
sidebar_label: Docker
sidebar_position: 3
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Run JupyterLab locally

Use [Docker Compose](https://docs.docker.com/compose/) to run JupyterLab, with the AI Unlimited Jupyter Kernel, locally in a container.
 

## Clone the AI Unlimited GitHub repository

import MyPartial from '/docs/_partials/_clone-repo.mdx';

<MyPartial />


## Set a location for JupyterLab configuration files

:::tip
Learn about [AWS](https://docs.aws.amazon.com/sdkref/latest/guide/environment-variables.html) or [Azure](https://github.com/paulbouwer/terraform-azure-quickstarts-samples/blob/master/README.md#azure-authentication) environment variables.
:::

Optionally, set the `JUPYTER_HOME` environment variable to the directory in which to store the JupyterLab configuration files. The default location is `~/.jupyter`.


## Start JupyterLab

1. Go to the directory where `jupyter.yaml` is located, and start JupyterLab.

```bash title="Run the Docker Compose file in the background "
docker compose -f jupyter.yaml -d up 
```
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





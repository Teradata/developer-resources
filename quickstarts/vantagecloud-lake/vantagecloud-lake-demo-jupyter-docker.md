---
sidebar_position: 2
author: Vidhan Bhonsle
email: vidhan.bhonsle@teradata.com
page_last_update: January 10th, 2024
description: Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Docker
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, business intelligence, enterprise analytics, jupyter, teradatasql, ipython-sql, docker, container, vantagecloud, vantagecloud lake, lake]
---

# Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Docker

## Overview
In this how-to we will go through the steps for connecting to Teradata VantageCloud Lake and run demos from a Jupyter notebook in Docker. 

## Prerequisites
* [Docker Desktop](https://www.docker.com/products/docker-desktop) installed
* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) installed
** Required to download git repo from https://github.com/Teradata/lake-demos.git
* A Teradata VantageCloud Lake account login
** Organization URL and login details from Teradata welcome letter
* IDE of your choice

## Create VantageCloud Lake environment
Follow the instructions from the [VantageCloud Lake getting started](https://quickstarts.teradata.com/getting-started-with-vantagecloud-lake.html) to create your own environment. +
Once created, go to *SETTINGS* tab and provide your public IP address to [access the environment](https://quickstarts.teradata.com/getting-started-with-vantagecloud-lake.html#_access_environment_from_public_internet).

:::note
You can find your IP address from [WhatIsMyIp.com](https://www.whatismyip.com) website. Take note of the IPv4 address.
:::

![IP whitelisting](./images/vantagecloud-lake-demo-jupyter-docker/lake_ip_addresses.png)

Your environment card should show *Public internet* access now.

![Public internet card view](./images/vantagecloud-lake-demo-jupyter-docker/lake_public_internet_cv.png)

From *OVERVIEW* tab, copy:

* Public IP and
* Open Analytics Endpoint

These values are required to access VantageCloud Lake from the Docker.

![Environment Overview page](./images/vantagecloud-lake-demo-jupyter-docker/lake_overview_page.png)

## Clone VantageCloud Lake Demo repository
Clone VantageCloud Lake Demo repository in your local machine:

``` bash
git clone https://github.com/Teradata/lake-demos.git
cd lake-demos
```

The repository contains different files and folders, the important ones are:

* Jupyter Notebooks
** [0_Demo_Environment_Setup.ipynb](https://github.com/Teradata/lake-demos/blob/main/0_Demo_Environment_Setup.ipynb)
** [1_Load_Base_Demo_Data.ipynb](https://github.com/Teradata/lake-demos/blob/main/1_Load_Base_Demo_Data.ipynb)
** [Data_Engineering_Exploration.ipynb](https://github.com/Teradata/lake-demos/blob/main/Data_Engineering_Exploration.ipynb)
** [Data_Science_OAF.ipynb](https://github.com/Teradata/lake-demos/blob/main/Data_Science_OAF.ipynb)
** [Demo_Admin.ipynb](https://github.com/Teradata/lake-demos/blob/main/Demo_Admin.ipynb)
* [vars.json file](https://github.com/Teradata/lake-demos/blob/main/vars.json)

## Edit vars.json file
To connect Jupyter notebooks with VantageCloud Lake, you need to edit [vars.json file](https://github.com/Teradata/lake-demos/blob/main/vars.json) and provide:

[cols="1,1"]
|====
| *Variable* | *Value*

| *"host"* 
| Public IP value from *OVERVIEW* section (see above)

| *"UES_URI"* 
| Open Analytics Endpoint value from *OVERVIEW* section (see above)

| *"dbc"* 
| The master password of your VantageCloud Lake environment

|====

:::info
In the sample vars.json, the passwords of all users are defaulted to "password", this is just for illustration purposes. You should change all of these password fields to strong passwords, secure them as necessary, and follow other password management best practices.
:::

## Mount files within Docker
To run VantageCloud Lake demos, we need the [Teradata Jupyter Extensions for Docker](https://hub.docker.com/r/teradata/jupyterlab-extensions). The extensions provide the SQL ipython kernel, utilities to manage connections to Teradata, and the database object explorer to make you productive while interacting with the Teradata database.  

:::info
Make sure that you are running all the commands in the same folder where you have cloned the demo repository.   
:::

Start a container and bind it to the existing lake-demos directory. Choose the appropriate command based on your operating system:

:::note
For Windows, run the docker command in PowerShell.
:::

[tabs, id="docker_tab_mount", role="emits-gtm-events"]
====
Windows::
+
``` bash
docker run -e "accept_license=Y" -p 127.0.0.1:8888:8888 -v ${PWD}:/home/jovyan/JupyterLabRoot teradata/jupyterlab-extensions
```

macOS::
+
``` bash
docker run -e "accept_license=Y" -p 127.0.0.1:8888:8888 -v $PWD:/home/jovyan/JupyterLabRoot teradata/jupyterlab-extensions
```

Linux::
+
``` bash
docker run -e "accept_license=Y" -p 127.0.0.1:8888:8888 -v $PWD:/home/jovyan/JupyterLabRoot teradata/jupyterlab-extensions
```
====

![docker logs](./images/vantagecloud-lake-demo-jupyter-docker/lake_docker_url.png)

Click on the URL in docker logs to open Jupyter notebook in your browser.

![Jupyter Notebook](./images/vantagecloud-lake-demo-jupyter-docker/lake_jupyter_notebook.png)

## Run demos
Open and execute all the cells in *0_Demo_Environment_Setup.ipynb* to setup your environment, followed by *1_Demo_Setup_Base_Data.ipynb* to load the base data required for the demos. +

![Environment setup Jupyter Notebook](./images/vantagecloud-lake-demo-jupyter-docker/lake_0_setup.png)

To learn more about the demo notebooks, go to [Teradata Lake demos](https://github.com/Teradata/lake-demos) page on GitHub.

## Summary

In this quick start we learned how to run Teradata VantageCloud Lake demos from Jupyter Notebook in Docker.

## Further reading

* [Teradata VantageCloud Lake documentation](https://docs.teradata.com/r/Teradata-VantageCloud-Lake/Getting-Started-First-Sign-On-by-Organization-Admin)
* [Use Vantage from a Jupyter notebook](https://quickstarts.teradata.com/jupyter.html)

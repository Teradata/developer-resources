---
draft: true
author: Daniel Herrera
email: daniel.herrera2@teradata.com
page_last_update: January 16th, 2024
description: Run Teradata Jupyter Notebook Demos for VantageCloud Lake in SageMaker
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, business intelligence, enterprise analytics, jupyter, teradatasql, ipython-sql, cloud computing, machine learning, sagemaker, vantagecloud, vantagecloud lake, lake]
---

# Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Amazon SageMaker

## Overview
This quickstart details the process for running the [Teradata Jupyter Notebook Demos for VantageCloud Lake](https://github.com/Teradata/lake-demos), on Amazon SageMaker, the AI/ML platform from AWS.

## Prerequisites
* Teradata modules for Jupyter (download [here](https://downloads.teradata.com/download/tools/vantage-modules-for-jupyter), registration required)
* AWS account with access to S3 and SageMaker
* [Access to a VantageCloud Lake environment](https://quickstarts.teradata.com/getting-started-with-vantagecloud-lake.html)

## AWS environment set-up
In this section we will cover in detail each of the steps below:

* Upload the Teradata modules for Jupyter to a S3 bucket
* Create an IAM role for your Jupyter notebook instance
* Create a lifecycle configuration for your Jupyter notebook instance
* Create Jupyter notebook instance
* Find the IP CIDR of your Jupyter notebook instance

### Upload the Teradata modules for Jupyter to an S3 bucket
* On AWS S3 create a bucket and keep note of the assigned name
* Default options are appropiate for this bucket
* In the created bucket upload the Teradata modules for Jupyter 

![Load modules in S3 bucket](./images/vantagecloud-lake-demo-jupyter-sagemaker/sagemaker-bucket-upload.png)

### Create an IAM role for your Jupyter Notebooks instance
* On SageMaker navigate to the role manager 

![New role creation](./images/vantagecloud-lake-demo-jupyter-sagemaker/sagemaker-iam-role-0.PNG)
* Create a new role (if not already defined)
* For purposes of this guide the role created is assigned the data scientist persona 

![Role name and persona](./images/vantagecloud-lake-demo-jupyter-sagemaker/sagemaker-iam-role-1.PNG)
* On the settings, it is appropiate to keep the defaults
* In the corresponding screen define the bucket where you uploaded the Teradata Jupyter modules

![S3 bucket](./images/vantagecloud-lake-demo-jupyter-sagemaker/sagemaker-iam-role-2.PNG)
* In the next configuration we add the corresponding policies for access to the S3 bucket  

![S3 bucket permissions](./images/vantagecloud-lake-demo-jupyter-sagemaker/sagemaker-iam-role-3.PNG)

### Create lifecycle configuration for your Jupyter Notebooks instance
* On SageMaker navigate to lifecycle configurations and click on create 

![Create lifecycle configuration](./images/vantagecloud-lake-demo-jupyter-sagemaker/sagemaker-config-1.PNG)
* Define a lifecycle configuration with the following scripts
** When working from a Windows environment, we recommend copying the scripts into the lifecycle configuration editor line by line. Press 'Enter' after each line directly in the editor to avoid copying issues. This approach helps prevent carriage return errors that can occur due to encoding differences between Windows and Linux. Such errors often manifest as "/bin/bash^M: bad interpreter" and can disrupt script execution.

![Create lifecycle configuration](./images/vantagecloud-lake-demo-jupyter-sagemaker/sagemaker-config-2.PNG)

** On create script: 
+
``` bash , id="sagemaker_first_config", role="content-editable emits-gtm-events"
#!/bin/bash
 
set -e
 
# This script installs a custom, persistent installation of conda on the Notebook Instance's EBS volume, and ensures
# that these custom environments are available as kernels in Jupyter.
 
 
sudo -u ec2-user -i <<'EOF'
unset SUDO_UID
# Install a separate conda installation via Miniconda
WORKING_DIR=/home/ec2-user/SageMaker/custom-miniconda
mkdir -p "$WORKING_DIR"
wget https://repo.anaconda.com/miniconda/Miniconda3-4.6.14-Linux-x86_64.sh -O "$WORKING_DIR/miniconda.sh"
bash "$WORKING_DIR/miniconda.sh" -b -u -p "$WORKING_DIR/miniconda"
rm -rf "$WORKING_DIR/miniconda.sh"
# Create a custom conda environment
source "$WORKING_DIR/miniconda/bin/activate"
KERNEL_NAME="teradatasql"
 
PYTHON="3.8"
conda create --yes --name "$KERNEL_NAME" python="$PYTHON"
conda activate "$KERNEL_NAME"
pip install --quiet ipykernel
 
EOF
```

** On start script (In this script substitute name of your bucket and confirm version of Jupyter modules)
+
``` bash , role="content-editable emits-gtm-events"
#!/bin/bash
 
set -e
 
# This script installs Teradata Jupyter kernel and extensions.
 
 
sudo -u ec2-user -i <<'EOF'
unset SUDO_UID
 
WORKING_DIR=/home/ec2-user/SageMaker/custom-miniconda
 
source "$WORKING_DIR/miniconda/bin/activate" teradatasql

# Install teradatasql, teradataml, and pandas in the teradatasql environment
pip install teradataml
pip install pandas

# fetch Teradata Jupyter extensions package from S3 and unzip it
mkdir -p "$WORKING_DIR/teradata"
aws s3 cp s3://resources-jp-extensions/teradatasqllinux_3.4.1-d05242023.zip "$WORKING_DIR/teradata"
cd "$WORKING_DIR/teradata"
unzip -o teradatasqllinux_3.4.1-d05242023
cp teradatakernel /home/ec2-user/anaconda3/condabin
jupyter kernelspec install --user ./teradatasql
source /home/ec2-user/anaconda3/bin/activate JupyterSystemEnv

# Install other Teradata-related packages
pip install teradata_connection_manager_prebuilt-3.4.1.tar.gz
pip install teradata_database_explorer_prebuilt-3.4.1.tar.gz
pip install teradata_preferences_prebuilt-3.4.1.tar.gz
pip install teradata_resultset_renderer_prebuilt-3.4.1.tar.gz
pip install teradata_sqlhighlighter_prebuilt-3.4.1.tar.gz

conda deactivate
EOF
```

### Create Jupyter Notebooks instance
* On SageMaker navigate Notebooks, Notebook instances, create notebook instance
* Choose a name for your notebook instance, define size (for demos the smaller available instance is enough)
* Click in additional configurations and assign the recently created lifecycle configuration 

![Create notebook instance](./images/vantagecloud-lake-demo-jupyter-sagemaker/sagemaker-create-notebook-1.PNG)
* Click in additional configurations and assign the recently created lifecycle configuration
* Assign the recently created IAM role to the notebook instance 

![Assign IAM role to notebook instance](./images/vantagecloud-lake-demo-jupyter-sagemaker/sagemaker-create-notebook-2.PNG)

* Paste the following link https://github.com/Teradata/lake-demos as the default github repository for the notebook instance

![Assign default repository for the notebook instance](./images/vantagecloud-lake-demo-jupyter-sagemaker/sagemaker-create-notebook-3.PNG)

## Find the IP CIDR of your Jupyter Notebooks instance
* Once the instance is running click on open JupyterLab 

![Initiate JupyterLab](./images/vantagecloud-lake-demo-jupyter-sagemaker/sagemaker-create-notebook-4.PNG)

![Loaded JupyterLab](./images/vantagecloud-lake-demo-jupyter-sagemaker/sagemaker-create-loaded-env.PNG)

* On JupyterLab open a notebook with Teradata Python kernel and run the following command for finding your notebook instance IP address.
** We will whitelist this IP in your VantageCloud Lake environment in order to allow the connection.
** This is for purposes of this guide and the notebooks demos. For production environments, a configuration of VPCs, Subnets and Security Groups might need to be configured and whitelisted.

``` python , role="content-editable"
import requests
def get_public_ip():
    try:
        response # requests.get('https://api.ipify.org')
        return response.text
    except requests.RequestException as e:
        return "Error: " + str(e)
my_public_ip = get_public_ip()
print("My Public IP is:", my_public_ip)
```

## VantageCloud Lake Configuration
* In the VantageCloud Lake environment, under settings, add the IP of your notebook instance

![Initiate JupyterLab](./images/vantagecloud-lake-demo-jupyter-sagemaker/sagemaker-lake.PNG)

## Jupyter Notebook Demos for VantageCloud Lake

### Configurations
* The file [vars.json file](https://github.com/Teradata/lake-demos/blob/main/vars.json) should be edited to match the configuration of your VantageCloud Lake environment +

![Initiate JupyterLab](./images/vantagecloud-lake-demo-jupyter-sagemaker/sagemaker-vars.PNG)

* Especifically the following values should be added 

+
[cols="1,1"]
|====
| *Variable* | *Value*

| *"host"* 
| Public IP value from your VantageCloud Lake environment

| *"UES_URI"* 
| Open Analytics from your VantageCloud Lake environment
| *"dbc"*
| The master password of your VantageCloud Lake environment
|====

+
:::info
Remember to change all passwords in the vars.json file.
:::

* You'll see that in the sample vars.json, the passwords of all users are defaulted to "password", this is just for illustration purposes, you should change all of these password fields to strong passwords, secure them as necessary, and follow other password management best practices.

## Run demos
Open and execute all the cells in *0_Demo_Environment_Setup.ipynb* to setup your environment. Followed by *1_Demo_Setup_Base_Data.ipynb* to load the base data required for demo.

To learn more about the demo notebooks, go to [Teradata Lake demos](https://github.com/Teradata/lake-demos) page on GitHub.

## Summary

In this quick start we learned how to run Jupyter notebook demos for VantageCloud Lake in Amazon SageMaker.

## Further reading

* [Teradata VantageCloud Lake documentation](https://docs.teradata.com/r/Teradata-VantageCloud-Lake/Getting-Started-First-Sign-On-by-Organization-Admin)
* [Use Vantage from a Jupyter notebook](https://quickstarts.teradata.com/jupyter.html)
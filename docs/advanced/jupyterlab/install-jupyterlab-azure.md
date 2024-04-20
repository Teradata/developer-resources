---
id: deploy-jupyter-azure-portal
title: Deploy JupyterLab from the Azure Portal
description: Learn how to deploy JupyterLab using an ARM template.
sidebar_label: Azure 
sidebar_position: 2
---

# Deploy the template from the Azure Portal

The Azure Resource Manager (ARM) template deploys a server instance with JupyterLab, and the AI Unlimited kernel, running in a container controlled by [systemd](/docs/glossary.md#glo-systemd).

:::note
References to the Azure Portal are accurate as of April 14, 2024.
::: 


## Download the Jupyter template

Download the template (`/deployments/azure/jupyter.json`) from the AI Unlimited GitHub repository you cloned.

## Load the template

1. Sign in to the [Azure Portal](https://portal.azure.com).
2. Search for **custom deployment**, then select **Deploy a custom template**.
3. Select **Build your own template in the editor**, then **Load file**.
4. Choose the template file you downloaded, and select **Save**.  


## Specify instance details

Review the parameters. Provide values for the required ones. Your organization might require others.

<details>

<summary>Azure and JupyterLab parameters</summary>

| Parameter | Description | Required? | Default | Notes
|---------|-------------|-----------|-----------|-----------|
| Subscription | The Azure subscription you want to use for deploying AI Unlimited. | Required | - | Teradata recommends using an account that is not a Free Trial. |
| Region | The region where you want to deploy AI Unlimited. | Required | - | Select the Azure region closest to your work location and the data resources to use with AI Unlimited. |
| Resource Group Name | The name of the container that groups together related AI Unlimited resources. | Required | ai-unlimited-workspace | - |
| OS Version  | The versions of the operating systems that are available in the current subscription. | Optional  with default | Ubuntu-2004 | - |
| Instance Type | The instance type that you want to use for AI Unlimited. | Optional | STANDARD_D2_V3 | Teradata recommends using the default instance type to save costs. The default instance type is the standard Dv3 series with 2 vCPUs and 8.0 GiB of memory.|
| Network | The name of the network to which you want to deploy the AI Unlimited instance. | Optional | - | - | 
| Subnet | The subnetwork to which you want to deploy the AI Unlimited instance. | Required | - | The subnet must reside in the selected availability zone. |
| Security Group | The virtual firewall that controls inbound and outbound traffic to the instance. | Optional | - | Security Group is implemented as a set of rules that specify which protocols, ports, and IP addresses or CIDR blocks are allowed to access the instance. Define at least one of Access CIDR, or Security Group to allow inbound traffic unless you create custom security group ingress rules. |
| Access CIDR | The CIDR IP address range that is permitted to access the instance. | Optional | - | Teradata recommends setting this value to a trusted IP range. Define at least one of Access CIDR, or Security Group to allow inbound traffic unless you create custom security group ingress rules. |
| Source App Sec Groups (ASG) | The source application security groups that have permission to connect to the AI Unlimited instance. ASGs let you organize your virtual machines (VMs) based on their specific network security policies. These security policies determine what traffic is or is not permissible on your virtual machine. | Optional | - | Select an application security group in the same region as the network interface. |
| Destination App Sec Groups | The destination application security Groups that have permission to connect to the AI Unlimited instance. | Optional | - | Select an application security group in the same region as the network interface.  |
| Role Definition ID | The ID of the role to use with AI Unlimited. | Required | - | Use Azure CLI command- Get-AzRoleDefinition command to get your Role Definition ID. |
| Allow Public SSH | Specifies whether you can use secure shell (SSH) keys to connect to VMs in Azure. | Optional | - |  - |
| Public Key | The public SSH Key that you can use to connect to a VM over SSH. | Optional | - | This value must start with “ssh-rsa”.  |
| Use Persistent Volume | Specifies whether you want to use persistent volume to store data. | Optional with default | None | Supported options are: new persistent volume, an existing one, or none, depending on your use case. |
| Persistent Volume Size | The size of the persistent volume that you can attach to the instance, in GB. | Optional | 8 | Supports values between 8  and 1000. |
| Existing Persistent Volume | The ID of the existing persistent volume that you can attach to the instance. | Required if UsePersistentVolume is set to Existing. | - | The persistent volume must be in the same availability zone as the AI Unlimited instance. |
| JupyterHttpPort | The port to access the JupyterLab service UI | Required with default | 8888 | - |
| JupyterVersion | The version of JupyterLab you want to deploy. | Required with default | latest | The value is a container version tag, for example, latest. |
| JupyterToken | The token or password used to access JupyterLab from the UI | Required |- | The token must begin with a letter and contain only alphanumeric characters. The allowed pattern is ^[a-zA-Z][a-zA-Z0-9-]*. |

</details>

## Create the instance

1. Select **Review + Create**, then **Create**. 
2. Monitor the deployment status on the **Notifications** page. 

After the template is deployed, you'll find the JupyterLab connection parameters in **Outputs**. 



---
id: deploy-manager-azure-portal
title: Deploy the manager using the Azure Portal
description: Learn how to deploy the manager using an Azure Resource Manager (ARM) template.
sidebar_label: Install on Azure
sidebar_position: 2
pagination_prev: null
pagination_next: null
---

# Install the manager on Azure

The AI Unlimited manager orchestrates the engine's deployment and includes a web-based user interface for monitoring projects. You'll also use it to set up AI Unlimited.
 
You'll use an Azure Resource Manager (ARM) template provided by Teradata to install the manager from the Azure Portal. This deploys a server instance, with the manager running in a container controlled by systemd. 

:::tip
For installation support, ask the [community](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa).
:::

:::note
References to the Azure Portal are accurate as of April 14, 2024.
::: 


## Download the manager template

Download the template (`/deployments/azure/ai-unlimited.json`) from the AI Unlimited GitHub repository you cloned.


## Load the template

1. Sign in to the [Azure Portal](https://portal.azure.com). 
2. Search for **custom deployment**, then select **Deploy a custom template**.
3. Select **Build your own template in the editor** and then **Load file**.
4. Choose the template file you downloaded, and click **Save**.  

## Specify instance details

Review the parameters. Provide values for the required parameters. Your organization might require others.

***We are working on the table/scrollbar issues.***

<details>

<summary>Azure and AI Unlimited parameters</summary>

| Parameter | Description | Required? | Default | Notes
|---------|-------------|-----------|-----------|-----------|
| Subscription | The Azure subscription you want to use for deploying AI Unlimited. | Required | - | This must be a pay-as-you-go account.  |
| Region | The region where you want to deploy AI Unlimited. | Required | - | Select the Azure region closest to your work location and the data resources to use with AI Unlimited. |
| Resource Group Name | The name of the container that groups together related AI Unlimited resources. | Required | ai-unlimited-workspace | - |
| AI Unlimited Name| Unique name given to AI Unlimited. | Required | - |- | 
| Public Key | The public SSH Key that you can use to connect to a VM over SSH. | Required | - | This value must start with “ssh-rsa”. |
| OS Version  | The versions of the operating systems that are available in the current subscription. | Optional  with default | Ubuntu-2004 | - |
| Instance Type | The instance type that you want to use for AI Unlimited. | Optional | STANDARD_D2_V3 | We recommend using the default instance type to save costs. The default instance type is the standard Dv3 series with 2 vCPUs and 8.0 GiB of memory.|
| Network | The name of the network to which you want to deploy the AI Unlimited instance. | Optional | - | - | 
| Subnet | The subnetwork to which you want to deploy the AI Unlimited instance. | Required | - | The subnet must reside in the selected availability zone. |
| Security Group | The virtual firewall that controls inbound and outbound traffic to the instance. | Optional | - | Security Group is implemented as a set of rules that specify which protocols, ports, and IP addresses or CIDR blocks are allowed to access the instance. Define at least one of Access CIDR, or Security Group to allow inbound traffic unless you create custom security group ingress rules. |
| Access CIDR | The CIDR IP address range that is permitted to access the instance. | Optional | - | We recommend setting this value to a trusted IP range. Define at least one of Access CIDR, or Security Group to allow inbound traffic unless you create custom security group ingress rules. |
| AI Unlimited HTTP Port | The port to access the AI Unlimited UI. | Required with default | 3000 | - |
| AI Unlimited GRPC Port | The port to access the AI Unlimited API. | Required with default | 3282 | - | 
| Source App Sec Groups (ASG) | The source application security groups that have permission to connect to the AI Unlimited instance. ASGs let you organize your virtual machines (VMs) based on their specific network security policies. These security policies determine what traffic is or is not permissible on your virtual machine. | Optional | - | Select an application security group in the same region as the network interface. |
| Destination App Sec Groups | The destination application security groups that have permission to connect to the AI Unlimited instance. | Optional | - | Select an application security group in the same region as the network interface.  |
| Role Definition ID | The ID of the role to use with AI Unlimited. | Required | - | Use Azure CLI command- Get-AzRoleDefinition command to get your Role Definition ID. |
| Allow Public SSH | Specifies whether you can use secure shell (SSH) keys to connect to VMs in Azure. | Optional | - |  - |
| Use Key Vault | Specifies whether to use Key Vault to retrieve the secured password during a deployment.  |Optional |New | |
| Persistent Volume Size | The size of the persistent volume that you can attach to the instance, in GB. | Optional | 8 | Supports values between 8  and 1000. |
| Existing Persistent Volume | The ID of the existing persistent volume that you can attach to the instance. | Required if UsePersistentVolume is set to Existing. | - | The persistent volume must be in the same availability zone as the AI Unlimited instance. |
| AI Unlimited Version | The version of the AI Unlimited you want to deploy. | Required with default | latest | The value is a container version tag. |
|Use NLB| Specifies whether the instance is accessed using a Network Load Balancer.|Required with default |false||
| Tags | The key-value pairs that are assigned to the resources for quick identification.| Optional| |   

</details>


## Create the instance

1. Select **Review + create**, then **Create**. 
2. Monitor the deployment status on the **Notifications** page. 

You'll see connection parameters for the manager in **Outputs.** 

You'll need the host (the IP address or hostname) when you connect to the manager from a Jupyter notebook.

***Haven't actually seen what happens after clicking Create. Is there really a "Notifications" page? Is Outputs just another section that appears?***

## What's next

In the manager, [set up AI Unlimited](/docs/install-ai-unlimited/setup-ai-unlimited.md).

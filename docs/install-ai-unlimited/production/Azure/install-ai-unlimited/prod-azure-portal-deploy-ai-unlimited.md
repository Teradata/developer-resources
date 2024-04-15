---
id: deploy-manager-azure-portal
title: Teradata - AI Unlimited - Deploy the manager using the Azure Portal
description: Learn how to deploy the AI Unlimited manager using the ARM template.
sidebar_label: Azure Portal
sidebar_position: 1
---

# Deploy the template from the portal

The Azure Resource Manager (ARM) template deploys a single instance with the AI Unlimited manager running in a container controlled by systemd. 

:::note
References to the Azure Portal are accurate as of April 14, 2024.
::: 


## Download the manager template

Download the template (`/deployments/azure/ai-unlimited.json`) from the AI Unlimited GitHub repository you cloned.

***No load balancer templates for Azure? The terms seem to be "Application Gateway" (like ALB) and "Azure Load Balancer (like NLB)."***

***In the repo, what are the templates that end in ".cloudinit" and ".service"?***


## Load the template

1. Sign in to the [Azure portal](https://portal.azure.com). 

2. Search for **custom deployment**, then select **Deploy a custom template**.

3. Select **Build your own template in the editor**. 

4. Select **Load file**.

5. Choose the template file you downloaded, and click **Save**.  


## Specify instance details

Review the parameters. Provide values for the required ones. Your organization might require others.

<details>

<summary>AI Unlimited parameters</summary>

| Parameter | Description | Required? | Default | Notes
|---------|-------------|-----------|-----------|-----------|
| AI Unlimited Name | Unique name given to AI Unlimited. | Required | - |- |
| AI Unlimited HTTP Port | The port to access the AI Unlimited UI. | Required with default | 3000 | - |
| AI Unlimited GRPC Port | The port to access the AI Unlimited API. | Required with default | 3282 | - | 
| AI Unlimited Version | The version of the AI Unlimited you want to deploy. | Required with default | latest | The value is a container version tag. |

</details>

<details>

<summary>Azure network and resource group parameters</summary>

| Parameter | Description | Required? | Default | Notes
|---------|-------------|-----------|-----------|-----------|
| Subscription | The Azure subscription you want to use for deploying AI Unlimited. | Required | - | Teradata recommends using an account that is not a Free Trial. ***Should this be a stronger message? They can't use a free account. |
| Region | The region where you want to deploy AI Unlimited. | Required | - | Select the Azure region closest to your work location and the data resources to use with AI Unlimited. |
| Resource Group Name | The name of the container that groups together related AI Unlimited resources. | Required | ai-unlimited-workspace | - |
| Public Key | The public SSH Key that you can use to connect to a VM over SSH. | Required | - | This value must start with “ssh-rsa”. |
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
| Use Persistent Volume | Specifies whether you want to use persistent volume to store data. | Optional with default | None | Supported options are: new persistent volume, an existing one, or none, depending on your use case. |
| Persistent Volume Size | The size of the persistent volume that you can attach to the instance, in GB. | Optional | 8 | Supports values between 8  and 1000. |
| Existing Persistent Volume | The ID of the existing persistent volume that you can attach to the instance. | Required if UsePersistentVolume is set to Existing. | - | The persistent volume must be in the same availability zone as the AI Unlimited instance. |

</details>

***My comments in the AWS manager (console) topic about the tables apply to this topic too.***

***Verify all parms. So far, I moved "Public key" up in our list and changed Optional to Required, based on what I see on the Azure UI. Looks like "Use NLB" and "Tags" and "Use Key Vault" are new too.***

***Persistent volume parms are in the table. Do we need a section in this topic for more info about persistent volumes (from the readme - and like what's in the tech review content)? If we can slim that down and put it in the Notes column of the table, that would be best.***

## Create the instance

Select **Review + create**, then **Create**. 

Deployment takes a few minutes.  ***safe to say that?***

***This is as far as I could get. Need someone who can actually create resources to test what happens next.***

You can monitor the deployment status on the **Notifications** page. 

You'll use the connection parameters on the **Output** tab when you connect to the manager from a Jupyter notebook. **verify wording**



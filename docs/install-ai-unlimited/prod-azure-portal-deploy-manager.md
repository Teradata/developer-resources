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

Before you begin, make sure you have the [prerequisites](/docs/install-ai-unlimited/#gs-prerequisties).

The AI Unlimited manager orchestrates the engine's deployment and includes a web-based user interface for monitoring projects. And the manager is where you'll set up AI Unlimited. 

You'll deploy a server instance, on which the manager runs in a container controlled by [systemd](/docs/glossary.md#glo-systemd)
 
:::tip
For installation support, ask the [community](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa).
:::


## Download the manager template

Download the Azure Resource Manager (ARM) template (`/deployments/azure/ai-unlimited.json`) from the AI Unlimited GitHub repository you cloned.


## Load the template

1. Sign in to the [Azure Portal](https://portal.azure.com). 
   :::note
   References to the Azure Portal are accurate as of April 14, 2024.
   ::: 
2. Select **Deploy a custom template**.
3. Select **Build your own template in the editor**, then **Load file**.
4. Choose the template file you downloaded, then select **Save**.

<a id="azure-parms"></a>
## Specify instance details

Review the parameters. Provide values for the required parameters. Your organization might require others.

<details>
<summary>Azure and AI Unlimited parameters</summary>

| Parameter | Description | Notes |
|---------|-------------|-----------|
| Subscription | The Azure subscription you want to use for deploying AI Unlimited.<br/>**Required**<br/>**Default: NA**| This must be a pay-as-you-go account.  |
| Region | The region where you want to deploy AI Unlimited.<br/>**Required**<br/>**Default: NA**| Select the Azure region closest to your work location and the data resources to use with AI Unlimited. |
| Resource Group Name | The name of the container that groups together related AI Unlimited resources.<br/>**Required**<br/>**Default: ai-unlimited-workspace** | - |
| AI Unlimited Name| Unique name given to AI Unlimited.<br/>**Required**<br/>**Default: NA** |- | 
| Public Key | The public SSH Key that you can use to connect to a VM over SSH.<br/>**Required**<br/>**Default: NA** | This value must start with “ssh-rsa”. |
| OS Version  | The versions of the operating systems that are available in the current subscription.<br/>**Optional  with default**<br/>**Default: Ubuntu-2004** | - |
| Instance Type | The instance type that you want to use for AI Unlimited.<br/>**Optional**<br/>**Default: STANDARD_D2_V3** | We recommend using the default instance type to save costs. The default instance type is the standard Dv3 series with 2 vCPUs and 8.0 GiB of memory.|
| Network | The name of the network to which you want to deploy the AI Unlimited instance.<br/>**Optional**<br/>**Default: NA** | - | 
| Subnet | The subnetwork to which you want to deploy the AI Unlimited instance.<br/>**Required**<br/>**Default: NA** | The subnet must reside in the selected availability zone. |
| Security Group | The virtual firewall that controls inbound and outbound traffic to the instance.<br/>**Optional**<br/>**Default: NA** | Security Group is implemented as a set of rules that specify which protocols, ports, and IP addresses or CIDR blocks are allowed to access the instance. Define at least one of Access CIDR, or Security Group to allow inbound traffic unless you create custom security group ingress rules. |
| Access CIDR | The CIDR IP address range that is permitted to access the instance.<br/>**Optional**<br/>**Default: NA** | We recommend setting this value to a trusted IP range. Define at least one of Access CIDR, or Security Group to allow inbound traffic unless you create custom security group ingress rules. |
| AI Unlimited HTTP Port | The port to access the AI Unlimited UI.<br/>**Required with default**<br/>**Default: 3000** | - |
| AI Unlimited GRPC Port | The port to access the AI Unlimited API<br/>**Required with default**<br/>**Default: 3282** | - | 
| Source App Sec Groups | The source application security groups (ASG) that have permission to connect to the AI Unlimited instance. ASGs let you organize your virtual machines (VMs) based on their specific network security policies. These security policies determine what traffic is or is not permissible on your virtual machine.<br/>**Optional**<br/>**Default: NA** | Select an application security group in the same region as the network interface. |
| Destination App Sec Groups | The destination application security groups that have permission to connect to the AI Unlimited instance.<br/>**Optional**<br/>**Default: NA** | Select an application security group in the same region as the network interface.  |
| Role Definition ID | The ID of the role to use with AI Unlimited.<br/>**Required**<br/>**Default: NA** | Use Azure CLI command- Get-AzRoleDefinition command to get your Role Definition ID. |
| Allow Public SSH | Specifies whether you can use secure shell (SSH) keys to connect to VMs in Azure.<br/>**Optional**<br/>**Default: NA** |  - |
| Use Key Vault | Specifies whether to use Key Vault to retrieve the secured password during a deployment.<br/>**Optional**<br/>**Default: New** | |
| Use Persistent Volume | Specifies whether you want to use a persistent volume to store data.<br/>**Optional with default**<br/>**Default: None** | Supported options: new persistent volume, an existing one, or none, depending on your use case. |
| Persistent Volume Size | The size of the persistent volume that you can attach to the instance, in GB.<br/>**Optional**<br/>**Default: 8** | Supports values between 8  and 1000. |
| Existing Persistent Volume | The ID of the existing persistent volume that you can attach to the instance.<br/>**Required if UsePersistentVolume is set to Existing.**<br/>**Default: NA** | The persistent volume must be in the same availability zone as the AI Unlimited instance. |
| AI Unlimited Version | The version of the AI Unlimited you want to deploy.<br/>**Required with default**<br/>**Default: latest** | The value is a container version tag. |
|Use NLB| Specifies whether the instance is accessed using a Network Load Balancer.<br/>**Required with default**<br/>**Default: false**||
| Tags | The key-value pairs that are assigned to the resources for quick identification.<br/>**Optional**<br/>**Default:NA**| |   

</details>


## Create the instance

***Can a tester please provide a screen recording so we can verify these steps?***

1. Select **Review + create**.
2. Select **Create**.<br />
On the **Notifications** page, you can monitor progress. ***(accurate?)***

When deployment is complete, the **Outputs** page shows values generated for the created resources.

You'll need the URL to access the manager and set up AI Unlimited.


## What's next

Now you're ready to [set up AI Unlimited](/docs/install-ai-unlimited/setup-ai-unlimited.md).

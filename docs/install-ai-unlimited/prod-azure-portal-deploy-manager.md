---
id: deploy-manager-azure-portal
title: Install on Azure
description: Learn how to deploy the manager using an Azure Resource Manager (ARM) template.
sidebar_label: Install on Azure
sidebar_position: 2
pagination_prev: null
pagination_next: null
---

# Install the manager on Azure

Before you begin, make sure you have the [prerequisites](./index.md#prerequisites) and your Azure account meets [the requirements](../resources/azure-requirements.md).

The AI Unlimited manager orchestrates the engine's deployment and includes a web-based user interface for setup.

You'll use an Azure Resource Manager (ARM) template provided by Teradata to install the manager from the Azure Portal. You'll deploy a server instance, on which the manager runs in a container controlled by [systemd](../glossary.md#systemd).
 
:::tip
For installation help, email the <a href="mailto:aiunlimited.support@Teradata.com">support team</a> or ask the [community](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa).
:::


## Clone the repository

import MyPartial from '../_partials/_clone-repo.mdx';

<MyPartial />


## Locate the manager template

ARM templates for the manager are here in the AI Unlimited GitHub repository:

`deployments/azure/templates/arm/ai-unlimited`

Choose a template based on whether you intend to use a [load balancer](../glossary.md#load-balancer).
:::note
You might want to ask a cloud admin at your organization for guidance.
:::
    - `ai-unlimited-with-nlb.json`&mdash;Hosts the manager behind a [network load balancer](../glossary.md#network-load-balancer)
    - `ai-unlimited-without-lb.json`&mdash;No load balancer. If you're unsure about which template to use, we recommend this one.


## Load the template

1. Sign in to the [Azure Portal](https://portal.azure.com). 
   :::note
   References to Azure Portal are up-to-date as of May 29, 2024.
   ::: 
2. Search for **custom deployment**, then select **Deploy a custom template**.
3. Select **Build your own template in the editor**, then **Load file**.
4. Select the template file you chose to use, then select **Save**.

<a id="azure-parms"></a>


## Specify instance details

Review the parameters. Provide values for the required parameters. Your organization might require others.

<details>
<summary>Azure and AI Unlimited parameters</summary>

| Parameter | Description | Notes |
|---------|-------------|-----------|
| Subscription | The Azure subscription you want to use for deploying AI Unlimited.| Required<br/>Default: NA <br/>This must be a pay-as-you-go account.  |
| Region | The region where you want to deploy AI Unlimited.| Required<br/>Default: NA<br/>Select the Azure region closest to your work location and the data resources to use with AI Unlimited. |
| Resource Group Name | The name of the container that groups together related AI Unlimited resources.| Required<br/>Default: ai-unlimited-workspace |
| AI Unlimited Name| Unique name given to AI Unlimited.| Required<br/>Default: NA | 
| Public Key | The public SSH Key that you can use to connect to a VM over SSH.| Required<br/>Default: NA<br/>This value must start with “ssh-rsa”. |
| OS Version  | The versions of the operating systems that are available in the current subscription. | Optional  with default<br/>Default: Ubuntu-2004 |
| Instance Type | The instance type that you want to use for AI Unlimited. | Optional<br/>Default: STANDARD_D2_V3<br/>We recommend using the default instance type to save costs. The default instance type is the standard Dv3 series with 2 vCPUs and 8.0 GiB of memory.|
| Network | The name of the network to which you want to deploy the AI Unlimited instance.| <br/>Optional<br/>Default: NA | 
| Subnet | The subnetwork to which you want to deploy the AI Unlimited instance. | Required<br/>Default: NA<br/>The subnet must reside in the selected availability zone. |
| Security Group | The virtual firewall that controls inbound and outbound traffic to the instance. | Optional<br/>Default: AiUnlimitedSecurityGroup<br/>Security Group is implemented as a set of rules that specify which protocols, ports, and IP addresses or CIDR blocks are allowed to access the instance. Define at least one of Access CIDR, or Security Group to allow inbound traffic unless you create custom security group ingress rules. |
| Access CIDR | The CIDR IP address range that is permitted to access the instance. | Optional<br/>Default: 0.0.0.0/0<br/>We recommend setting this value to a trusted IP range. Define at least one of Access CIDR, or Security Group to allow inbound traffic unless you create custom security group ingress rules. |
| AI Unlimited HTTP Port | The port to access the AI Unlimited UI.| Required with default<br/>Default: 3000 |
| AI Unlimited GRPC Port | The port to access the AI Unlimited API. | Required with default<br/>Default: 3282 | 
| Source App Sec Groups | The source application security groups (ASG) that have permission to connect to the AI Unlimited instance. ASGs let you organize your virtual machines (VMs) based on their specific network security policies. These security policies determine what traffic is or is not permissible on your virtual machine. |Optional<br/>Default: NA<br/> Select an application security group in the same region as the network interface. |
| Destination App Sec Groups | The destination application security groups that have permission to connect to the AI Unlimited instance. | Optional<br/>Default: NA<br/>Select an application security group in the same region as the network interface.  |
| Role Definition ID | The ID of the role to use with AI Unlimited.| Required<br/>Default: NA<br/>Use Azure CLI command- Get-AzRoleDefinition to get your Role Definition ID. |
| Allow Public SSH | Specifies whether you can use secure shell (SSH) keys to connect to VMs in Azure.|  Optional<br/>Default: true |
| Use Key Vault | Specifies whether to use Key Vault to retrieve the secured password during a deployment. | Optional<br/>Default: New |
| Use Persistent Volume | Specifies whether you want to use a new or existing persistent volume to store data. See *Learn more: Using a persistent volume* below the parameters section. | Optional with default<br/>Default: New <br/>Supported options: New or Existing, depending on your use case. |
| Persistent Volume Size | The size of the persistent volume that you can attach to the instance, in GB. | Optional<br/>Default: 100 |
| Existing Persistent Volume | <br/>The ID of the existing persistent volume that you can attach to the instance.| Required if UsePersistentVolume is set to Existing.<br/>Default: None<br/>The persistent volume must be in the same availability zone as the AI Unlimited instance. |
| AI Unlimited Version | The version of the AI Unlimited you want to deploy. | Required with default<br/>Default: latest<br/>The value is a container version tag. |
|Use NLB| Specifies whether the instance is accessed using a Network Load Balancer.|Required with default<br/>Default: false|
| Tags | The key-value pairs that are assigned to the resources for quick identification.| Optional<br/>Default:NA |   

</details>

<details>

<summary>Learn more: Using a persistent volume</summary>

The manager instance runs in a container and saves its configuration data in a database in the root volume of the instance. This data persists if you shut down, restart, or snapshot and relaunch the instance. 

A persistent volume stores data for a containerized application beyond the lifetime of the container, pod, or node in which it runs. 

**Without a persistent volume**

If the container, pod, or node crashes or terminates, you lose the manager's configuration data. You can deploy a new manager instance, but not to the same state as the one that was lost.

**With a persistent volume**

If the container, pod, or node crashes or terminates, and the manager's configuration data is stored in a persistent volume, you can deploy a new manager instance that has the same configuration as the one that was lost.

**Example**

1. Deploy the manager, and set the `Use Persistent Volume` parameter to **New**.
2. After you create the stack, on the **Outputs** page, note the `volume-id`.
3. Use AI Unlimited.
4. If the manager instance is lost, deploy the manager again, and include these parameters:
   - `Use Persistent Volume`: **New**
   - `Existing Persistent Volume`: the value you noted in step 2
   
The new manager instance has the same configuration as the one that was lost.

</details>


## Create the instance

1. Select **Review + create**.
2. Select **Create**.<br />
On the **Notifications** page, you can monitor progress.

When deployment is complete, the **Outputs** page shows values generated for the created resources.

You'll need the URL to access the manager and set up AI Unlimited.


## What's next

[Create an OAuth app](./create-oauth-app.md) to allow authentication between AI Unlimited and your Git provider account.

---
id: deploy-jupyter-azure-portal
title: Install JupyterLab on Azure
description: Learn how to deploy JupyterLab using an ARM template.
sidebar_label: Install on Azure 
sidebar_position: 2
pagination_prev: null
pagination_next: null
---

# Install JupyterLab on Azure

You'll use an  Azure Resource Manager (ARM) template provided by Teradata to install JupyterLab, and the AI Unlimited kernel, from the Azure Portal. 

This deploys a server instance, with JupyterLab running in a container controlled by [systemd](../../glossary.md#systemd).

:::tip
For installation support, email the <a href="mailto:aiunlimited.support@Teradata.com">support team</a> or ask the [community](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa).
:::


## Prepare your Azure account

- Work with your cloud admin to ensure your Azure account has the permissions needed to create the cloud resources defined in the [JupyterLab template](https://github.com/Teradata/ai-unlimited/tree/develop/deployments/azure/templates/arm/jupyter).

- Networking requirements: Your Azure [resource group](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal) must have an [Azure Virtual Network (VNet)](https://learn.microsoft.com/en-us/azure/virtual-network/quick-create-portal) configured with a [subnet](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-subnet?tabs=azure-portal). Use an existing VNet or subnet, or create your own, depending on your account permissions. 

- If you'll need to access the JupyterLab instance to run commands or debug, you can use a [key pair](https://learn.microsoft.com/en-us/azure/virtual-machines/linux/mac-create-ssh-keys) to securely connect using Secure Shell (SSH). You'll need the key pair when you [specify the instance details](#specify-instance-details).


## Clone the repository

import MyPartial from '../../_partials/_clone-repo.mdx';

<MyPartial />


## Locate the Jupyter template

ARM templates for JupyterLab are here in the AI Unlimited GitHub repository:

`deployments/azure/templates/arm/jupyter`

Choose a template based on whether you intend to use a [load balancer](../../glossary.md#load-balancer) and what type.
:::note
You might want to ask a cloud admin at your organization for guidance.
:::
    - `jupyter-with-nlb.json`&mdash;Hosts JupyterLab behind a [network load balancer](../../glossary.md#network-load-balancer)
    - `jupyter-without-lb.json`&mdash;No load balancer

## Load the template

1. Sign in to the [Azure Portal](https://portal.azure.com).
   :::note
   References to Azure Portal are up-to-date as of May 29, 2024.
   ::: 
2. Search for **custom deployment**, then select **Deploy a custom template**.
3. Select **Build your own template in the editor**, then **Load file**.
4. Select the template file you chose to use, and select **Save**.  


## Specify instance details

Review the parameters. Provide values for the required ones. Your organization might require others.

<details>

<summary>Azure and JupyterLab parameters</summary>

| Parameter | Description | Notes 
|---------|-------------|-----------|
| Subscription | The Azure subscription you want to use for deploying AI Unlimited. | Required<br/>Default: NA<br/>We recommend using an account that is not a Free Trial. |
| Region | The region where you want to deploy AI Unlimited. | Required<br/>Default: NA<br/>Select the Azure region closest to your work location and the data resources to use with AI Unlimited. |
| Resource Group Name | The name of the container that groups together related AI Unlimited resources. | Required<br/>Default: ai-unlimited-jupyter |
| OS Version  | The versions of the operating systems that are available in the current subscription.| Optional  with default<br/>Default: Ubuntu-2004 |
| Instance Type | The instance type that you want to use for AI Unlimited.| Optional<br/>Default: STANDARD_D2_V3<br/>We recommend using the default instance type to save costs. The default instance type is the standard Dv3 series with 2 vCPUs and 8.0 GiB of memory.|
| Network | The name of the network to which you want to deploy the AI Unlimited instance.| Optional<br/>Default: NA| 
| Subnet | The subnetwork to which you want to deploy the AI Unlimited instance.| Required<br/>Default: NA<br/>The subnet must reside in the selected availability zone. |
| Security Group | The virtual firewall that controls inbound and outbound traffic to the instance. | Optional<br/>Default: JupyterSecurityGroup<br/>Security Group is implemented as a set of rules that specify which protocols, ports, and IP addresses or CIDR blocks are allowed to access the instance. Define at least one of Access CIDR, or Security Group to allow inbound traffic unless you create custom security group ingress rules. |
| Access CIDR | The CIDR IP address range that is permitted to access the instance. | Optional<br/>Default: 0.0.0.0/0<br/>We recommend setting this value to a trusted IP range. Define at least one of Access CIDR, or Security Group to allow inbound traffic unless you create custom security group ingress rules. |
| Source App Sec Groups (ASG) | The source application security groups that have permission to connect to the AI Unlimited instance. ASGs let you organize your virtual machines (VMs) based on their specific network security policies. These security policies determine what traffic is or is not permissible on your virtual machine. | Optional<br/>Default: NA<br/>Select an application security group in the same region as the network interface. |
| Destination App Sec Groups | The destination application security Groups that have permission to connect to the AI Unlimited instance. | Optional<br/>Default: NA<br/>Select an application security group in the same region as the network interface. |
| Role Definition ID | The ID of the role to use with AI Unlimited. | Required<br/>Default: NA<br/>Use Azure CLI command- `Get-AzRoleDefinition` command to get your Role Definition ID. |
| Allow Public SSH | Specifies whether you can use secure shell (SSH) keys to connect to VMs in Azure. |  Optional<br/>Default: true |
| Public Key | The public SSH Key that you can use to connect to a VM over SSH. | Optional<br/>Default: NA<br/>This value must start with `ssh-rsa`.  |
| Use Persistent Volume | Specifies whether you want to use a new or existing persistent volume to store data. See *Learn more: Using a persistent volume* below the parameters section. | Optional with default<br/>Default: New<br/>Supported options are a new persistent volume or an existing one, depending on your use case. |
| Persistent Volume Size | The size of the persistent volume that you can attach to the instance, in GB. | Optional<br/>Default: 100<br/>Supports values between 8  and 1000. |
| Existing Persistent Volume | The ID of the existing persistent volume that you can attach to the instance.| Required if Use Persistent Volume is set to Existing<br/>Default: NA<br/>The persistent volume must be in the same availability zone as the AI Unlimited instance. |
| JupyterHttpPort | The port to access the JupyterLab service UI. | Required with default<br/>Default: 8888 |
| JupyterVersion | The version of JupyterLab you want to deploy. | Required with default<br/>Default: latest<br/>The value is a container version tag, for example, latest. |
| JupyterToken | The token or password used to access JupyterLab from the UI.| Required<br/>Default: NA<br/>The token must begin with a letter and contain only alphanumeric characters. The allowed pattern is ^[a-zA-Z][a-zA-Z0-9-]*. |

</details>

<details>

<summary>Learn more: Using a persistent volume</summary>

The JupyterLab instance runs in a container and saves its configuration data in a database in the root volume of the instance. This data persists if you shut down, restart, or snapshot and relaunch the instance. 

But a persistent volume stores data for a containerized application beyond the lifetime of the container, pod, or node in which it runs. 

**Without a persistent volume**

If the container, pod, or node crashes or terminates, you lose the JupyterLab configuration data. You can deploy a new JupyterLab instance, but not to the same state as the one that was lost.

**With a persistent volume**

If the container, pod, or node crashes or terminates, and the JupyterLab configuration data is stored in a persistent volume, you can deploy a new JupyterLab instance that has the same configuration as the one that was lost.

**Example**

1. Deploy JupyterLab, and include these parameters:
   - `UsePersistentVolume`: **New**
2. After you create the stack, on the **Outputs** tab, note the `volume-id`.
3. Use JupyterLab.
4. If the JupyterLab instance is lost, deploy JupyterLab again, and include these parameters:
   - `UsePersistentVolume`: **New**
   - `ExistingPersistentVolumeId`: the value you noted in step 2
   
The new JupyterLab instance has the same configuration as the one that was lost.

</details>


## Create the instance

1. Select **Review + create**.
2. Select **Create**.<br />
On the **Notifications** page, you can monitor progress.

When deployment is complete, the **Outputs** page shows the URL for accessing JupyterLab.
 





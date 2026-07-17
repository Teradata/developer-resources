---
sidebar_position: 3
id: run-vantage-express-on-utm
title: Run Vantage Express on UTM
author: Adam Tworkiewicz, Janeth Graziani
email: adam.tworkiewicz@teradata.com
page_last_update: July 16, 2026
description: Run Vantage Express on your Mac using UTM
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics]

---
import GettingStartedIntro from '../../_partials/getting-started-intro.mdx';
import RunVantage from '../../_partials/run-vantage.mdx';
import GettingStartedSummary from '../../_partials/getting-started-summary.mdx';

# Run Vantage Express on UTM

<GettingStartedIntro />

## Prerequisites

1. A Mac computer. Both Intel and M1/M2/M3 chips are supported.

:::note
Vantage Express runs on x86 architecture. When you run the VM on M1/M2/M3 chips, UTM has to emulate x86. This is significantly slower then virtualization. If you determine that Vantage Express on M1/M2 is too slow for your needs, consider running Vantage Express in the cloud: [AWS](../on-your-cloud-infrastructure/run-vantage-express-on-aws.md), [Azure](../on-your-cloud-infrastructure/run-vantage-express-on-microsoft-azure.md), [Google Cloud](../on-your-cloud-infrastructure/vantage-express-gcp.md).
:::

2. 30GB of disk space and enough CPU and RAM to be able to dedicate at least one core and 4GB RAM to the virtual machine.
3. Admin rights to be able to install and run the software.

:::note
No admin rights on your local machine? Have a look at how to run Vantage Express in [AWS](../on-your-cloud-infrastructure/run-vantage-express-on-aws.md), [Azure](../on-your-cloud-infrastructure/run-vantage-express-on-microsoft-azure.md), [Google Cloud](../on-your-cloud-infrastructure/vantage-express-gcp.md).
:::

## Installation

### Download required software

1. The latest version of [Vantage Express](https://downloads.teradata.com/download/database/teradata-express-for-vmware-player). If you have not used the Teradata downloads website before, you will need to register.
2. The latest version of [UTM](https://mac.getutm.app).

### Run UTM installer

1. Install UTM by running the installer and accepting the default values.

### Run Vantage Express

1. Go to the directory where you downloaded Vantage Express and unzip the downloaded file.
2. Start UTM, click on the `+` sign and select `Create a New Virtual Machine`.
3. Select `Virtualize` (Intel Macs) or `Emulate` (M1/M2/M3 Macs).
4. On `Operating System` screen select `Other`.
5. On `Hardware` screen allocate at least 4GB of RAM and at least 1 CPU core. We recommend 10GB RAM and 2 CPUs.

    ![UTM Hardware](../../images/utm.hardware.png)
6. On the **Other** screen, set **Boot Device** to **None** and uncheck **UEFI Boot**, then click **Continue**.
7. On `Storage` screen accept the defaults by clicking `Next`.
8. On `Shared Directory` screen click `Continue`.
9. On `Summary` screen check `Open VM Settings` and click `Save`.
10. Go through the setup wizard. You only need to adjust the following tabs:
    - In the **QEMU** tab, verify that **UEFI Boot** is unchecked. No other changes are needed.
    - In the **Network** tab, set **Network Mode** to **Emulated VLAN**.
      Then click **Port Forward** in the left sidebar and click **New** to add the following port forwarding rules:

      | Protocol | Guest Address | Guest Port | Host Address | Host Port |
      |----------|---------------|------------|--------------|-----------|
      | TCP      |               | 22         |              | 22        |
      | TCP      |               | 1025       |              | 1025      |

11. Map drives:
    * Delete the default `IDE Drive`.
    * Map the 3 Vantage Express drives by importing the disk files from the downloaded VM zip file. Make sure you map them in the right order, `-disk1`, `-disk2`, `-disk3` . The first disk is bootable and contains the database itself. Disks 2 and 3 are so called `pdisks` and contain data. As you import the files UTM will automatically convert them from `vmdk` into `qcow2` format. Make sure that each disk is configured using the `IDE` interface:

    ![UTM Drives](../../images/utm.drives.png)

    * Once you are done mapping all 3 drives, your configuration should look like this:

    ![UTM Drives Final](../../images/utm.final.png)

12. Save the configuration and start the VM.

    :::note
    Initial boot on Apple Silicon (M1/M2/M3) via emulation can take 5-15 minutes. Do not force quit the VM.
    :::

    ![UTM Booting](../../images/utm.booting.png)


<RunVantage />


In this guide we have covered how to quickly create a working Teradata Vantage environment on Apple Mac M1/M2/M3. We used Teradata Vantage Express in a VM running on UTM. We installed all software locally and didn't have to pay for cloud resources.

## Next steps
* [Query data stored in object storage](../../manage-data/nos.md)

## Further reading
* [Teradata® Studio™ and Studio™ Express Installation Guide](https://docs.teradata.com/r/Teradata-StudioTM-and-StudioTM-Express-Installation-Guide-17.20)

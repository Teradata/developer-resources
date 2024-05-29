---
sidebar_position: 2
author: Adam Tworkiewicz
email: adam.tworkiewicz@teradata.com
page_last_update: January 9th, 2023
description: Run Vantage Express on your laptop using VMware.
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics]
---
import GettingStartedIntro from '../../_partials/getting-started-intro.mdx';
import RunVantage from '../../_partials/run-vantage.mdx';
import RunSimpleQueries from '../../_partials/running-sample-queries.mdx';
import GettingStartedSummary from '../../_partials/getting-started-summary.mdx';
import CommunityLink from '../../_partials/community_link.mdx';

# Run Vantage Express on VirtualBox

<GettingStartedIntro />

## Prerequisites

1. A computer using one of the following operating systems: Windows 10, Linux or Intel-based MacOS.

:::note
For M1/M2 MacOS systems, see xref:getting.started.utm.adoc[].
:::

2. 30GB of disk space and enough CPU and RAM to be able to dedicate at least one core and 6GB RAM to the virtual machine.
3. Admin rights to be able to install and run the software.


## Installation

### Download required software

1. The latest version of [Vantage Express VirtualBox Open Virtual Appliance (OVA)](https://downloads.teradata.com/download/database/teradata-express-for-vmware-player).

:::note
If you have not used the Teradata Downloads website before, you will need to register first.
:::

2. [VirtualBox](https://www.virtualbox.org/wiki/Downloads), version 6.1.

:::note
You can also install VirtualBox using `brew` and other package managers.
:::

### Run installers

1. Install VirtualBox by running the installer and accepting the default values.

:::note
VirtualBox includes functionality that requires elevated privileges. When you start VirtualBox for the first time, you will be asked to confirm this elevated access. You may also need to reboot your machine to activate the VirtualBox kernel plugin.
:::

### Run Vantage Express

1. Start VirtualBox.
2. Go to `File -> Import Appliance...` menu.
3. In `File` field, select the downloaded OVA file.
4. On the next screen, accept the defaults and click on `Import`.
5. Back in the main VirtualBox panel, start the Vantage Express appliance double clicking on VM `Vantage 17.20`.

![Start VM](../../images/getting-started-vbox/start-vm.png)

<RunVantage />

<RunSimpleQueries />

## Updating VirtualBox Guest Extensions

VirtualBox Guest Extensions is a piece of software that runs in a VM. It makes the VM run faster on VirtualBox. It also improves the resolution of the VM screen and its responsiveness to resizing. It implements two-way clipboard, and drag and drop between the host and the guest. VirtualBox Guest Extensions in the VM needs to match the version of your VirtualBox install. You will likely have to update VirtualBox Guest Extensions for optimal performance.

To update VirtualBox Guest Extensions:

. Insert the VirtualBox Guest Extensions DVD by clicking on `SATA Port 3: [Optical Drive]` in `Storage` section:

![Insert Guest Additions DVD](../../images/insert-guest-additions-dvd.png)

. Back in the VM window, start the `Gnome Terminal` application.
. Run the following command in the terminal:

```
mount /dev/cdrom /media/dvd; /media/dvd/VBoxLinuxAdditions.run
```

<GettingStartedSummary />

## Next steps
* [Query data stored in object storage](../../manage-data/nos.md)

## Further reading
* [Teradata® Studio™ and Studio™ Express Installation Guide](https://docs.teradata.com/r/Teradata-StudioTM-and-StudioTM-Express-Installation-Guide-17.20)

<CommunityLink />
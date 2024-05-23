---
sidebar_position: 1
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

# Run Vantage Express on VMware

<GettingStartedIntro />
 
## Prerequisites

1. A computer using one of the following operating systems: Windows, Linux or Intel-based MacOS.
:::note
For M1/M2 MacOS systems, see [Run Vantage Express on UTM.](./getting-started-utm.md).
:::
2. 30GB of disk space and enough CPU and RAM to be able to dedicate at least one core and 6GB RAM to the virtual machine.
3. Admin rights to be able to install and run the software.

## Installation

### Download required software

* The latest version of [Vantage Express](https://downloads.teradata.com/download/database/teradata-express-for-vmware-player). If you have not used the Teradata downloads website before, you will need to register.
* [VMware Workstation Player](https://www.vmware.com/products/workstation-player.html).

:::important 
Commercial organizations require commercial licenses to use VMware Workstation Player. If you don't want to acquire VMware licenses you can run Vantage Express on [VirtualBox](xref:getting.started.vbox.adoc).
:::

:::important 
VMware doesn't offer VMware Workstation Player for MacOS. If you are on a Mac, you will need to install [VMware Fusion](https://www.vmware.com/products/fusion/fusion-evaluation.html) instead. It's a paid product but VMware offers a free 30-day trial. Alternatively, you can run Vantage Express on [VirtualBox](./getting-started-vbox.md) or [UTM](./getting-started-utm.md).
:::
* On Windows, you will also need [7zip](https://www.7-zip.org/download.html) to unzip Vantage Express.

### Run installers

1. Install VMware Player or VMware Fusion by running the installer and accepting the default values.
2. If on Windows, install `7zip`.

### Run Vantage Express

1. Go to the directory where you downloaded Vantage Express and unzip the downloaded file.
2. Double-click on the `.vmx` file. This will start the VM image in VMware Player/Fusion.
3. Press <kbd>ENTER</kbd> to select the highlighted `LINUX` boot partition.

<RunVantage />

<RunSimpleQueries />

<GettingStartedSummary />

## Next steps
* [Query data stored in object storage](./nos.md)

## Further reading
* [Teradata® Studio™ and Studio™ Express Installation Guide](https://docs.teradata.com/r/Teradata-StudioTM-and-StudioTM-Express-Installation-Guide-17.20)

<CommunityLink />
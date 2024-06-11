---
sidebar_position: 2
author: Adam Tworkiewicz
email: adam.tworkiewicz@teradata.com
page_last_update: August 23rd, 2022
description: Run Vantage Express on Google Cloud.
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics]
---

import UseCase from '../../_partials/use-csae.mdx';
import CommunityLink from '../../_partials/community_link.mdx';
import InstallVeInPublic from '../../_partials/install-ve-in-public.mdx';
import Tabs from '../../_partials/tabsGCP.mdx';

# Run Vantage Express on Google Cloud

<UseCase />

## Overview

This how-to demonstrates how to run Vantage Express in Google Cloud Platform. Vantage Express contains a fully functional Teradata SQL Engine.

:::note
If do not wish to pay for cloud usage you can install Vantage Express locally using [VMware](../on-your-local/getting-started-vmware.md), [VirtualBox](../on-your-local/getting-started-vbox.md), [UTM](../on-your-local/getting-started-utm.md).
:::

## Prerequisites

* A Google Cloud account.
* `gcloud` command line utility installed on your machine. You can find installation instructions here: https://cloud.google.com/sdk/docs/install.

## Installation
1. Create a Ubuntu VM with 4 CPU's and 8GB of RAM, a 70GB balanced disk. The following command creates a VM in `us-central1` region. For best performance, replace the  region with one that is the closest to you. For the list of supported regions see [Google Cloud regions documentation](https://cloud.google.com/compute/docs/regions-zones).

<Tabs />


2. ssh to your VM:
```
gcloud compute ssh teradata-vantage-express --zone=us-central1-a
```
3. Switch to `root` user:
```
sudo -i
```
4. Prepare the download directory for Vantage Express:
```
mkdir /opt/downloads
cd /opt/downloads
```

<InstallVeInPublic />

* If you would like to connect to Vantage Express from the Internet, you will need to open up firewall holes to your VM. You should also change the default password to `dbc` user:
* To change the password for `dbc` user go to your VM and start 

bteq:

```
bteq
```

* Login to your database using `dbc` as username and password:
```
.logon localhost/dbc
```
* Change the password for `dbc` user:
```
MODIFY USER dbc AS PASSWORD = new_password;
```

* You can now open up port 1025 to the internet using gcloud command:
```
gcloud compute firewall-rules create vantage-express --allow=tcp:1025 --direction=IN --target-tags=ve
```

## Cleanup

To stop incurring charges, delete the VM:
```
gcloud compute instances delete teradata-vantage-express --zone=us-central1-a
```

Also, remember to remove any firewall rules that you have added, e.g.:
```
gcloud compute firewall-rules delete vantage-express
```

## Next steps
* [Query data stored in object storage](../../manage-data/nos.md)

## Further reading
* [Teradata® Studio™ and Studio™ Express Installation Guide](https://docs.teradata.com/r/Teradata-StudioTM-and-StudioTM-Express-Installation-Guide-17.20)
* [Introduction to BTEQ](https://docs.teradata.com/r/jmAxXLdiDu6NiyjT6hhk7g/root)

<CommunityLink/>

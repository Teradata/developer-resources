---
sidebar_position: 3
author: Adam Tworkiewicz
email: adam.tworkiewicz@teradata.com
page_last_update: August 23rd, 2022
description: Run Vantage Express on Microsoft Azure.
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics]
---

import UseCase from '../../_partials/use-csae.mdx';
import Tabs from '../../_partials/tabsAzure.mdx';
import InstallVeInPublic from '../../_partials/install-ve-in-public.mdx';
import CommunityLink from '../../_partials/community_link.mdx';

# Run Vantage Express on Azure

<UseCase />

## Overview

This how-to demonstrates how to run Vantage Express in Microsoft Azure. Vantage Express contains a fully functional Teradata SQL Engine.

## Prerequisites

* An Azure account. You can create one here: https://azure.microsoft.com/en-us/free/
* `az` command line utility installed on your machine. You can find installation instructions here: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli.

## Installation

* Setup the default region to the closest region to you (to list locations run `az account list-locations -o table`):

```
az config set defaults.location=<location>
```

* Create a new resource group called `tdve-resource-group` and add it to defaults:
````
az group create -n tdve-resource-group
az config set defaults.group=tdve-resource-group
````

* To create a VM you will need an ssh key pair. If you don't have it already, create one:
````
az sshkey create --name vantage-ssh-key
````

* Restrict access to the private key. Replace `<path_to_private_key_file>` with the private key path returned by the previous command:
````
chmod 600 <path_to_private_key_file>
````

* Create a Ubuntu VM with 4 CPU's and 8GB of RAM, a 30GB os disk and a 60GB data disk.

<Tabs />

* ssh to your VM. Replace `<path_to_private_key_file>` and `<vm_ip>` with values that match your environment:
```
ssh -i <path_to_private_key_file> azureuser@<vm_ip>
```

* Once in the VM, switch to `root` user:
```
sudo -i
```

* Prepare the download directory for Vantage Express:
```
mkdir /opt/downloads
cd /opt/downloads
```

* Mount the data disk:
```
parted /dev/sdc --script mklabel gpt mkpart xfspart xfs 0% 100%
mkfs.xfs /dev/sdc1
partprobe /dev/sdc1
export DISK_UUID=$(blkid | grep sdc1 | cut -d"\"" -f2)
echo "UUID=$DISK_UUID  /opt/downloads   xfs   defaults,nofail   1   2" >> /etc/fstab
```

<InstallVeInPublic />

* If you would like to connect to Vantage Express from the Internet, you will need to open up firewall holes to your VM. You should also change the default password to `dbc` user:
* To change the password for `dbc` user go to your VM and start bteq:
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
az vm open-port --name teradata-vantage-express --port 1025
```

To stop incurring charges, delete all the resources associated with the resource group:
```
az group delete --no-wait -n tdve-resource-group
```

## Next steps
* [Query data stored in object storage](../../manage-data/nos.md)

## Further reading
* [Teradata® Studio™ and Studio™ Express Installation Guide](https://docs.teradata.com/r/Teradata-StudioTM-and-StudioTM-Express-Installation-Guide-17.20)
* [Introduction to BTEQ](https://docs.teradata.com/r/jmAxXLdiDu6NiyjT6hhk7g/root)

<CommunityLink/>

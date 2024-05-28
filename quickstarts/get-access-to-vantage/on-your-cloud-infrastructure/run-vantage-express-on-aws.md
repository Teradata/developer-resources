---
sidebar_position: 1
author: Adam Tworkiewicz
email: adam.tworkiewicz@teradata.com
page_last_update: December 12th, 2022
description: Run Vantage Express on AWS.
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics, AWS]
---

import UseCase from '../../_partials/use-csae.mdx';
import CommunityLink from '../../_partials/community_link.mdx';

# Run Vantage Express on AWS

<UseCase />

## Overview

This how-to demonstrates how to run Vantage Express on AWS. Vantage Express is a small footprint configuration that contains a fully functional Teradata SQL Engine.


:::important
<b>Cloud charges</b>

Vantage Express is distributed as a virtual machine image. This how-to uses the EC2 `c5n.metal` instance type. It's a bare metal instance that costs over $3/h.

If you want a cheaper option, try [Google Cloud](./vantage-express-gcp.md) and [Azure](run-vantage-express-on-microsoft-azure.md) which support nested virtualization and can run Vantage Express on cheap VM's.

If you do not wish to pay for cloud usage, you can get a free hosted instance of Vantage at [](https://clearscape.teradata.com/). Alternatively, you install Vantage Express locally using xref:getting.started.vmware.adoc[VMware], [VirtualBox](../on-your-local/getting-started-vbox.md), or [UTM](../on-your-local/getting-started-utm.md).
:::

## Prerequisites

. An AWS account. If you need to create a new account follow [the official AWS instructions](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/).
. `awscli` command line utility installed and configured on your machine. You can find installation instructions here: [](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).

## Installation


. You will need a VPC with an Internet-facing subnet. If you don't have one available, here is how you can create it:



## Next steps
* [Query data stored in object storage](../../manage-data/nos.md)

## Further reading
* [](https://docs.teradata.com/r/Teradata-StudioTM-and-StudioTM-Express-Installation-Guide-17.20)
* [Introduction to BTEQ](https://docs.teradata.com/r/jmAxXLdiDu6NiyjT6hhk7g/root)

<CommunityLink />



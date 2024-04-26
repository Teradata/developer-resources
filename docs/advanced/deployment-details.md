---
id: deployment-details
title: Cloud deployment details
description: Deployment details to get ahead of time
sidebar_label: Get deployment details
sidebar_position: 5
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Get deployment details

:::note
These details do not apply to the QuickStart.
:::

When you install the AI Unlimited manager from your cloud service provider's console, you'll provide values for required parameters. 

You can get the values from your cloud service provider's console. Or, copy the parameter names shown here, and ask an admin for their values.

<Tabs>
<TabItem value="aws1" label="AWS">

	```bash
	Subscription ID: 
    Resource Group:
    AWS Region: 
    Virtual Network (VNet): 
    Subnet: 
    Network Security Group:
    RoleDefinition Id: 
	```

</TabItem>
<TabItem value="azure" label="Azure">

	```bash
Subscription: 
Region: 
Network:
Subnet: 
Security Group:
	```

***I also see "Public Key" (would go after Region) and "Role Definition Id" (would be last). There's a slack comment.***

</TabItem>
</Tabs>


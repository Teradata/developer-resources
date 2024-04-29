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
These details do not apply to the [QuickStart](/docs/advanced/quickstart).
:::

When you install the AI Unlimited manager on [AWS](/docs/install-ai-unlimited/prod-aws-console-deploy-ai-unlimited.md) or [Azure](/docs/install-ai-unlimited/prod-azure-portal-deploy-manager.md), you'll provide values for cloud parameters. 

You can get these values from the AWS or Azure console. Or, copy the parameter names shown here, and ask an admin for their values.

***Need to make clear the relationship between the parms here and all the parms. Are these the "minimum required configuration"?***

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

***"Public Key" (would go after Region) and "Role Definition Id" (would be last) are also required. There's a slack comment. Will revisit after working through Azure account reqs.***

</TabItem>
</Tabs>


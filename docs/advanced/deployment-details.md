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
	Account ID: 
    Region: 
    Virtual Private Cloud (VPC): 
    Subnet: 
    Security Group:
	```

</TabItem>
<TabItem value="azure" label="Azure">

	```bash
    Subscription: 
    Region: 
    Public Key:
    If your organization administrator created the custom role on your behalf, get the following parameters as well:
    Network:
    Subnet: 
    Role Definition Id:
	```

</TabItem>
</Tabs>


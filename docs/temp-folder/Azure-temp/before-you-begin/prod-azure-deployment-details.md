---
id: prod-azure-deployment-details
title: Teradata - AI Unlimited - Full installation - Azure - Get deployment details
description: Get some details now for quicker setup later.
sidebar_label: Get deployment details 
sidebar_position: 4
---
# Get deployment details

When you install AI Unlimited on Azure, you'll use an Azure Resource Manager (ARM) template, and you'll provide network and security details. 

If you want to, you can copy this template and send it to an admin who knows these details&mdash;to get them ahead of time. Or, get them from the Azure Portal. ***(is the portal sentence correct?)***

***These are the parms required by Azure, but the customer's org may require more. Thinking about best way to help them get those ahead of time. Can't put a table (of the full set) in a code block.***
  
	```bash
Subscription: 
Region: 
Network:
Subnet: 
Security Group:
	```

***I also see "Public Key" (would go after Region) and "Role Definition Id" (would be last). "Security Group" is not marked as required on the UI, but maybe we require it.***

***If they install JupyterLab on Azure using our template, will the values for these parms be the same?***


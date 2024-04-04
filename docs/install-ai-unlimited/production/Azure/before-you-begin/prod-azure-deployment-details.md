---
id: prod-azure-deployment-details
title: Teradata - AI Unlimited - Full installation - Azure - Get deployment details
description: Get some details now for quicker setup later.
sidebar_label: Get deployment details 
sidebar_position: 4
---
# Get deployment details

***A version of this for the old UI and new UI?***
***TA: Users would require parameters in two different places, 1. When using ARM template (fill details for AI Unlimited instance), next while setting up AI Unlimited (details for engine), the first half of the follwoing sentence can be tweaked : when you deploy the ARM template and set up AI Unlimited,....**
  
When you [set up AI Unlimited](/docs/install-ai-unlimited/production/Azure/prod-azure-setup.md), you'll provide details for deploying AI Unlimited, and potentially JupyterHub, on Azure. 

Copy this template to get these details from someone on your organization's cloud neworking and security team. ***What is the best way to describe this team to this audience? "Cloud IT team?" "Cloud operations team"?*** 

	```bash
Subscription: 
Region: 
Network:
Subnet: 
Security group:
	```

Or, get these details from the Azure Portal.
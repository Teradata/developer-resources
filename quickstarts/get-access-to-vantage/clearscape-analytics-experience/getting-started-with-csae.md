---
sidebar_position: 1
author: Vidhan Bhonsle, Janeth Graziani
email: developer.relations@teradata.com
page_last_update: June 18th, 2026
description: Getting started with Teradata Trial
keywords: [data warehouses, compute storage separation, teradata, cloud data platform, business intelligence, enterprise analytics, jupyter, teradatasql, ipython-sql, teradata trial, autonomous knowledge platform]
---

# Getting started with Teradata Trial

## Overview

[Teradata Trial](https://www.teradata.com/try) is a free, non-production environment that gives you hands-on access to the [Teradata Autonomous Knowledge Platform](https://www.teradata.com/platform), including the advanced analytics capabilities built into Teradata Database. Use it to explore demos, run queries, and experience how Teradata activates enterprise intelligence across a wide range of industries and use cases.

In this guide, we walk through the steps for creating an environment in Teradata Trial and accessing the included demos.

![Teradata Autonomous Knowledge Platform](../../images/Autonomous_ai_knowledge_platform.svg)
  
## Create a Teradata Trial account

Head over to [Teradata Trial](https://www.teradata.com/try) and create a free account.

![Register](../../images/teradata_trial_register.png)

Sign in to your [Teradata Trial](https://trial.teradata.com/#/sign-in) to create an environment and access demos.

![Sign in](../../images/teradata_trial_sign_in.png)

## Create an Environment

Once signed in, click on **CREATE +**

![Create environment](../../images/trial_no_env.png)

You will need to provide:

| Variable             | Value                                                                 |
|----------------------|-----------------------------------------------------------------------|
| **environment name** | A name for your environment, e.g. "demo"                              |
| **database password**| A password of your choice, this password will be assigned to `dbc` and `demo_user` users |
| **Region**           | Select a region from the dropdown                                     |


:::info
Note down the database password. You will need it to connect to the database.
:::

![Environment params](../../images/trial_env_params.png)

Click on *CREATE* button to complete the creation of your environment and now, you can see details of your environment.

![Environment details](../../images/trial_env_details.png)

## Access demos

The Teradata Trial environment includes a variety of demos showing how analytics capabilities in Teradata Database can solve real business problems across many industries.

To access the demos, click **RUN DEMOS USING JUPYTER**. A Jupyter environment opens in a new browser tab.

:::note
You can find all the detail of demos on the demo index page.
:::

![Usecases folder](../../images/trial_notebooks.png)


## Summary

In this quick start, we learned how to create an environment in Teradata Trial and access demos.

## Further reading

* [Teradata Trial API documentation](https://api.clearscape.teradata.com/api-docs/)
* [Teradata Documentation](https://docs.teradata.com/)


---
sidebar_position: 1
author: Vidhan Bhonsle
email: vidhan.bhonsle@teradata.com
page_last_update: February 9th, 2024
description: Getting started with ClearScape Analytics Experience
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, business intelligence, enterprise analytics, jupyter, teradatasql, ipython-sql, clearscape, csae]
---

# Getting started with ClearScape Analytics Experience

## Overview

[ClearScape Analytics<sup>TM</sup>](https://www.teradata.com/platform/clearscape-analytics) is a powerful analytics engine in [Teradata VantageCloud](https://www.teradata.com/platform/vantagecloud). It delivers breakthrough performance, value, and growth across the enterprise with the most powerful, open and connected AI/ML capabilities on the market. You can experience ClearClearScape Analytics<sup>TM</sup> and Teradata Vantage, in a non-production setting, through [ClearScape Analytics Experience](https://www.teradata.com/experience).

In this how-to we will go through the steps for creating an environment in ClearScape Analytics Experience and access demos.

![VantageCloud](../../images/VantageCloud.png)
  
## Create a ClearScape Analytics Experience account

Head over to [ClearScape Analytics Experience](https://www.teradata.com/experience) and create a free account.

![Register](../../images/csae_register.png)

Sign in to your [ClearScape Analytics account](https://clearscape.teradata.com/sign-in) to create an environment and access demos.

![Sign in](../../images/csae_signin.png)

## Create an Environment

Once signed in, click on **CREATE ENVIRONMENT**

![Create environment](../../images/csae_create_env.png)

You will need to provide:

| Variable             | Value                                                                 |
|----------------------|-----------------------------------------------------------------------|
| **environment name** | A name for your environment, e.g. "demo"                              |
| **database password**| A password of your choice, this password will be assigned to `dbc` and `demo_user` users |
| **Region**           | Select a region from the dropdown                                     |


:::important
Note down the database password. You will need it to connect to the database.
:::

![Environment params](../../images/csae_env_params.png)

Click on *CREATE* button to complete the creation of your environment and now, you can see details of your environment.

![Environment details](../../images/csae_env_details.png)

## Access demos

The ClearScape Analytics Experience environment includes a variety of demos that showcase how to use analytics to solve business problems across many industries. 

To access demos, click on **RUN DEMOS USING JUPYTER** button. It will open a Jupyter environment in a new tab of your browser. 

:::note
You can find all the detail of demos on the demo index page.
:::

![Usecases folder](../../images/csae_jupyter.png)


## Summary

In this quick start, we learned how to create an environment in ClearScape Analytics Experience and access demos.

## Further reading

* [ClearScape Analytics Experience API documentation](https://api.clearscape.teradata.com/api-docs/)
* [Teradata Documentation](https://docs.teradata.com/)


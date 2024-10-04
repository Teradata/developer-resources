---
id: use-dbt-cloud-with-teradata-vantage
sidebar_position: 4.4
author: Mohan Talla
email: mohan.talla@teradata.com
description: Use dbt Cloud (data build tool) with Teradata Vantage.
keywords: [dbt Cloud, data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics, elt, dbt.]
---

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'

# dbt Cloud with Teradata Vantage

This tutorial demonstrates how to use dbt Cloud with Teradata Vantage. It's based on the original [dbt Jaffle Shop tutorial](https://github.com/Teradata/jaffle_shop-dev). A couple of models have been adjusted to the SQL dialect supported by Vantage.

## Prerequisites

* You have a [dbt Cloud account](https://www.getdbt.com/signup/).
* Access to a Teradata Vantage instance.

    <ClearscapeDocsNote />

### About the Jaffle Shop warehouse

`jaffle_shop` is a fictional e-commerce store. This dbt project transforms raw data from an app database into a dimensional model with customer and order data ready for analytics.

The raw data from the app consists of customers, orders, and payments, with the following entity-relationship diagram:

![](../images/dbt1.svg)

dbt takes these raw data table and builds the following dimensional model, which is more suitable for analytics tools:

![](../images/dbt2.svg)

## Creating a project in dbt Cloud and connect to a Teradata environment
1.	Create a new project in dbt Cloud. 
    * Click on your account 
    * On ‘Settings’ select ‘Projects’ 
    * Click ‘+ New Project’.

    ![](../images/dbt-cloud/dbt-cloud1.png)

2. Enter a project name and click ‘Continue’.

    ![](../images/dbt-cloud/dbt-cloud2.png)

3.	In ‘Configure your development environment’, click “Add new connection”

    ![](../images/dbt-cloud/dbt-cloud3.png)

4.	Select "Teradata," fill in all the required details in the "Settings" section and test the connection.

    ![](../images/dbt-cloud/dbt-cloud4.png)
    ![](../images/dbt-cloud/dbt-cloud5.png)

5.	Once the Teradata connection is ready, provide “Development Credentials” in the project setup page

    ![](../images/dbt-cloud/dbt-cloud6.png)

6.	Click Test Connection. This verifies that dbt Cloud can access your Teradata database. If the connection test succeeds, click Next. If it fails, you may need to check your Teradata settings and credentials. If the connection fails, verify your Teradata settings and credentials. If the issue persists, reach out to Teradata support at support.teradata.com. For dbt-teradata related issues, start a discussion on the dbt-teradata GitHub at https://github.com/Teradata/dbt-teradata.

## Import a sample dbt project to dbt Cloud

Use Git Clone to import tha sample project repo: 
```
git@github.com:Teradata/jaffle_shop-dev.git
```

![](../images/dbt-cloud/dbt-cloud7.png)

This will generate a deploy key that needs to be added to GitHub. Once the keys are deployed, the project will be ready for further development.

![img.png](../images/dbt-cloud/dbt-cloud8.png)

## Visualize the project on dbt Cloud IDE

Select 'Start developing in the IDE'. You will be redirected to the development page of the dbt Cloud IDE.

![](../images/dbt-cloud/dbt-cloud9.png)
In the “File explorer” section, you can browse through the project.

## Create an environment for managing staging and production workflows for the project 

### Create a dbt Cloud environment

Before deploying the project, an environment must be created.
* Determine the project's stage of development and select one of the deployment options: General, Staging, or Production.
* From the drop-down menu, choose the previously configured connection.
* Select "Versionless" as the dbt version from the available options.

![](../images/dbt-cloud/dbt-cloud10.png)

Provide the Deployment credentials for the connection and test the connection.
Once the connection is successful, save this environment.

![](../images/dbt-cloud/dbt-cloud11.png)

Now we have successfully created the environment for creating jobs.

![](../images/dbt-cloud/dbt-cloud12.png)

### The next step is to create the jobs

On clicking “Create job” button it will direct you to the deploy job configuration page. Start by adding a job name to identify the job. Next, select the environment from the drop-down menu, and then choose the job to run, such as 'dbt build,' 'dbt seed,' etc.

You can schedule these jobs using the provided checkbox and enable source freshness from the same section. Additionally, advanced configurations such as threads and target name can be adjusted based on the project’s requirements

![](../images/dbt-cloud/dbt-cloud13.png)

![](../images/dbt-cloud/dbt-cloud14.png)

After the job completes, you will be able to view the following:
1.	Run summary – Displays the various stages of the job along with their run times. Expanding these summaries provides access to console and debug logs, which can be downloaded.
2.	Lineage – Selecting the 'Lineage' option at the top displays a graph representing the data flow in your project.
3.	Model timing – Shows the execution times of models and tests.
4.	Artifacts – Artifacts from your runs, such as the manifest.json file, are saved by dbt Cloud, with download links provided."

![](../images/dbt-cloud/dbt-cloud15.png)

## Summary

This tutorial demonstrates how to use dbt Cloud with Teradata Vantage, adapting the dbt Jaffle Shop example. It covers steps for project creation, environment configuration, and job setup in dbt Cloud with Teradata.

## Further reading
- Learn more with [dbt Learn courses](https://learn.getdbt.com)
- [How we provision Teradata Clearscape Vantage instance](https://developers.teradata.com/quickstarts/get-access-to-vantage/clearscape-analytics-experience/getting-started-with-csae/)
- [CI jobs](/docs/deploy/continuous-integration)
- [Deploy jobs](/docs/deploy/deploy-jobs)
- [Job notifications](/docs/deploy/job-notifications)
- [Source freshness](/docs/deploy/source-freshness)
  
  
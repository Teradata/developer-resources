---
id: use-cases
title: Sample use cases
description: Here are just some of the workloads you can run using AI Unlimited.
sidebar_position: 4
sidebar_label: Sample use cases
pagination_prev: null
pagination_next: null
---

# Sample use cases

Explore some of the ways you can experiment with AI/ML analytics on large datasets, before scaling, applying the results to other use cases, or operationalizing your models.

:::tip
Discuss these and share ideas for other use cases in the [community](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa).
:::


## Understand the customer journey

Customers engage with financial institutions through various marketing touchpoints including websites, in-branch interactions with employees, email, and call centers. Understanding the overall customer journey is critical for enhancing it and increasing customer acquisition and adoption.

For this use case, we provide data from customer interactions in an AWS Glue catalog in Iceberg format. After you access and inspect the data, you'll use attribution modeling, channel analysis, and pathing to understand the customer behavior over time.

[Try it out](https://github.com/Teradata/ai-unlimited-demos/blob/main/UseCases/Financial_Customer_Journey_SQL.ipynb)


## Segment customers *(more detail as to why)*
 
**(This is WIP.)**

(business case... what you'll do... what you'll achieve...)

Segment customers by purchase volume and value.

Use k-means clustering and data preparation pipelines.

For this use case, we provide online purchase history data in an AWS Glue catalog in Iceberg format. **(Just like the other 2?)**


[Try it out](https://github.com/Teradata/ai-unlimited-demos/blob/main/UseCases/Native_Data_Prep_Transformation_Pipelines-SQL.ipynb)


## Find the ideal number of customer segments

Marketing to the ideal number of customer segments means you benefit from segmentation without having too many segments to manage. You can derive the ideal number of segments from comments from customer purchase history.

For this use case, we provide customer comment data in an AWS Glue catalog in Iceberg format. After you access and inspect the data, you'll use an LLM to create a vector table, and then find the ideal k-means model and number of segments.

[Try it out](https://github.com/Teradata/ai-unlimited-demos/blob/main/UseCases/Segmentation_With_Vector_Embedding-SQL.ipynb)






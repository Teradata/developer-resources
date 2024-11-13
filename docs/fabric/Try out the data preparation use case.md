---
id: first-use-case
title: Try out the data preparation use case
description: Now that you've prepared your notebook, try out the data preparation use case.
sidebar_label: Try out the use case
sidebar_position: 4
pagination_prev: null
pagination_next: null
displayed_sidebar: fabricSidebar
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Try out the use case


The sample notebook has information about applying the AI Unlimited in-database functions to different stages of data preparation for a hypothetical use case. The other sample notebooks, financial customer journey and user segmentation, do the same thing. We will not cover those details here and will instead let you discover that through the notebook itself.  By default, the sample notebooks create tables in memory that are destroyed when the notebook is closed or disconnected. In this section we will look at how to:
- Select tables from the Lakehouse explorer as an easy, optional way to find data
- Write to the lakehouse 
- Find data between sessions

##Evaluate a table in the notebook

Scroll down to section 2.1

In this section, the sample notebook demonstrates modifying a dataset that is unique in one dimension (“invoiceno”) to be unique by the desired dimension for analysis (“customerid”). 

The “drop table” cell simply clears the table from memory in case the user has already run the following cell with the “SUM(quantity)” expression.

![ImgSection21](./section2-1.svg)
---
id: release-notes
title: Release notes
description: See details about the paid public preview's initial launch.
sidebar_label: Release notes
sidebar_position: 8
pagination_prev: null
pagination_next: null
---

# Release notes (WIP)

As we continue to enhance AI Unlimited and ensure you are successful in getting started with AI Unlimited, it’s important to understand the limitations. The following features are not supported for this release. Keep an eye on the What's New page for feature enhancements.

- **AI Unlimited Manager**

  ***Insert Content***

- **Open Table Format (OTF)**

  Update and Delete with predicates are not supported for OTF queries.

- **User Defined Functions (UDF)**

  The first invocation of Java UDFs fails with the error `Failure 7583 The secure mode processes had a set up error`.

- **Unbounded Array Framework (UAF)**

  UAF functions are not supported in SQL and teradataml.

- **teradataml**

    - UAF functions fail to run if the database name has special characters, such as hypen (-). 

    - Some SQLE and UAF functions fail to run due to issues with volatile table creation. The framework creates a volatile table if the keyword argument `Volatile` is set to **True**. However, volatile tables can not be created on other schemas.

    - The following function are not supported:
      
        - automl 

        - openml  

	    - map_row 

       -  map_parition

       - H2OPredict 

       - ONNXPredict 

- **API_Request UDF**

- **Vantage Analytic Library (VAL)**



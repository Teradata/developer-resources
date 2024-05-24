---
id: release-notes
title: Release notes
description: See details about the paid public preview's initial launch.
sidebar_label: Release notes
sidebar_position: 8
pagination_prev: null
pagination_next: null
---

# Release notes

As we continue to enhance AI Unlimited, please be aware of known issues and features not currently supported. 

For the latest features and updates, keep an eye on [What's new](/docs/whats-new/).

**(Separate into "Known issues" and "Not curently supported"?)**

- **Open Table Format (OTF)**

  Update and Delete with predicates are not supported for OTF queries.
  
 - **User Defined Functions (UDF)**

	The first invocation of Java UDFs fails with this error: `Failure 7583 The secure mode processes had a set up error`.

- **Unbounded Array Framework (UAF)**

  UAF functions are not supported in SQL and teradataml.

- **teradataml**

    - UAF functions fail to run if the database name has special characters, such as hyphen (-). 

    - Some SQLE and UAF functions fail to run due to issues with volatile table creation. The framework creates a volatile table if the keyword argument `Volatile` is set to **True**. However, volatile tables can not be created on other schemas.

    - The following functions are not supported:
      
        - automl 

        - openml  

	    - map_row 

        - map_partition

        - H2OPredict 

        - ONNXPredict 

- **API_Request UDF**

- **Vantage Analytic Library (VAL)**



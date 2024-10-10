---
id: may-2024-rn
title: May 2024 release notes
description: See details about the initial release of the paid public preview.
sidebar_label: May 2024 release notes
sidebar_position: 4
pagination_prev: null
pagination_next: null
---

# May 2024 | Release notes

See what's not currently supported and learn about known issues.

### Not supported

- Update and Delete with predicates for Open Table Format (OTF) queries
  
- Unbounded Array Framework (UAF) functions in SQL and teradataml
  
- These teradataml functions:
  - automl 
  - openml  
  - map_row 
  - map_partition

- API_Request User Defined Function (UDF)

- Vantage Analytics Library (VAL)

### Known issues

- The first invocation of Java User Defined Functions (UDFs) fails with this error: `Failure 7583 The secure mode processes had a set up error`.
	
- teradataml
  - Unbounded Array Framework (UAF) functions fail to run if the database name has special characters, such as a hyphen (-). 
  - Some SQLE and UAF functions fail to run due to issues with volatile table creation. The framework creates a volatile table if the keyword argument `Volatile` is set to True. However, volatile tables can not be created on other schemas.
  - H2OPredict - One case for model type DAI failed with error: `H2OPredict failed in contract: 'license' column is missing from model input table. This column is required to score driverless AI models.`
  - ONNXPredict failed with error: `E teradatasql.OperationalError: [Version 20.0.0.12] [Session 2078] [Teradata Database] [Error 7825] in UDF/XSP/UDM mldb.ONNXPredict: SQLSTATE [38U01] ONNXPredict failed with error:no onnxruntime in java.library.path: [/usr/pde/lib, /usr/tdbms/lib]`
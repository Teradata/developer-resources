---
id: whats-new
title: What's new
description: Find out what's in the latest AI Unlimited release.
sidebar_label: What's new
sidebar_position: 5
pagination_prev: null
pagination_next: null
---

# What's new

See what's in this release and what's coming.


## Paid public preview (launch) - May 2024

Everything you need to start exploring, analyzing, and experimenting: 

- AI/ML engine v0.14.3 with [ClearScape Analytics™](https://docs.teradata.com/access/sources/dita/topic?dita:mapPath=phg1621910019905.ditamap&dita:ditavalPath=pny1626732985837.ditaval&dita:topicPath=gma1702668333653.dita) functions
- Support for AWS and Azure
- [AI Unlimited Jupyter Kernel](https://downloads.teradata.com/download/tools/teradata-ai-unlimited-jupyter-kernel)
    - Python Client Libraries
      - teradataml 20.0.0.0
      - teradatamlwidgets 20.0.0.2
	  - teradatasql 20.0.0.12
	  - teradatasqlalchemy 20.0.0.2
	  - tdapiclient 1.4.0.1
- Support for GitHub and GitLab for project creation and database schema backup
- AI Unlimited manager v0.2.15

<details>
<summary>Supported Teradata Vantage™ features</summary>
- Native Object Store (NOS) 20.00.17.08
- Open Table Format (OTF) 20.00.17.07
  - Iceberg with AWS Glue, Hive, and Databricks Unity Catalog
  - Delta Lake with Databricks Unity Catalog
- Bring Your Own Model 05.00.00.01
  - PMMLPredict
  - H20Predict
</details>  

<details>
<summary>Supported teradataml functions</summary>
- Antiselect
- Attribution
- BincodeFit
- BincodeTransform
- CategoricalSummary
- ChiSq
- ClassificationEvaluator
- ColumnSummary
- ColumnTransformer
- DecisionForest
- DecisionForestPredict
- FillRowId
- Fit
- FTest
- GetFutileColumns
- GetRowsWithMissingValues
- GetRowsWithoutMissingValues
- GLM
- GLMPredict
- Histogram
- KMeans
- KMeansPredict
- KNN
- MovingAverage
- NaiveBayesPredict
- NaiveBayesTextClassifierPredict
- NaiveBayesTextClassifierTrainer
- NGramSplitter
- NonLinearCombineFit
- NonLinearCombineTransform
- NPath
- NumApply
- OneHotEncodingFit
- OneHotEncodingTransform
- OrdinalEncodingFit
- OrdinalEncodingTransform
- OutlierFilterFit
- OutlierFilterTransform
- Pack
- PolynomialFeaturesFit
- PolynomialFeaturesTransform
- QQNorm
- RandomProjectionFit
- RandomProjectionMinComponents
- RandomProjectionTransform
- RegressionEvaluator
- ROC
- RoundColumns
- RowNormalizeFit
- RowNormalizeTransform
- ScaleFit
- ScaleTransform
- SentimentExtractor
- Sessionize
- Silhouette
- SimpleImputeFit
- SimpleImputeTransform
- StrApply
- StringSimilarity
- SVMSparsePredict
- TextParser
- Transform
- UnivariateStatistics
- Unpack
- VectorDistance
- WhichMax
- WhichMin
- ZTest
- delete_byom
- retrieve_byom
- list_byom
- save_byom
- get_license
- set_license
</details>

:::note
See the [release notes](/docs/whats-new/release-notes.md) for known issues and features not currently supported.
:::


## What's coming

- Support for Update and Delete with predicates for Open Table Format (OTF) queries - June

- User Defined Functions (UDF)
  - Fix for first invocation of Java UDFs failing - future
  - Support for API_Request UDF - future
  
- Unbounded Array Framework (UAF)
  - SQL supporting UAF - June 
  - teradataml supporting UAF - future

- teradataml
  - Fix for UAF functions failing if database name has special characters - June
  - Fix for SQLE and UAF functions failing to run due to issues with volatile table creation - June
  - automl and openml functions - June
  - map_row and map_partition functions - future
  
- Vantage Analytics Library (VAL) - future



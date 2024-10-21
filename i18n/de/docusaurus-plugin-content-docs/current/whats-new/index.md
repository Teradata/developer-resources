---
id: whats-new
title: Was ist neu
description: Finden Sie heraus, was die neueste Version von AI Unlimited enthält.
sidebar_label: Was ist neu
sidebar_position: 5
pagination_prev: null
pagination_next: null
---

# Was ist neu

Sehen Sie, was diese Version enthält und was noch kommt.


## Kostenpflichtige öffentliche Vorschau (Start) – Mai 2024

Alles, was Sie zum Erkunden, Analysieren und Experimentieren benötigen: 

- KI/ML-Engine v0.14.3 mit [ClearScape Analytics™](https://docs.teradata.com/access/sources/dita/topic?dita:mapPath=phg1621910019905.ditamap&dita:ditavalPath=pny1626732985837.ditaval&dita:topicPath=gma1702668333653.dita)-Funktionen
- Unterstützung für AWS und Azure
- [AI Unlimited Jupyter Kernel](https://downloads.teradata.com/download/tools/teradata-ai-unlimited-jupyter-kernel)
    - Python-Clientbibliotheken
      - teradataml 20.0.0.0
      - teradatamlwidgets 20.0.0.2
	  \- teradatasql 20.0.0.12
	  \- teradatasqlalchemy 20.0.0.2
	  \- tdapiclient 1.4.0.1
- Unterstützung für GitHub und GitLab zur Projekterstellung und Datenbankschemasicherung
- AI Unlimited Manager v0.2.15

<details>
<summary>Unterstützte Teradata Vantage&trade;-Funktionen</summary>
- Nativer Objektspeicher (NOS) 20.00.17.08
- Open Table Format (OTF) 20.00.17.07
  - Iceberg mit AWS Glue, Hive und Databricks Unity Catalog
  - Delta Lake mit Databricks Unity Catalog
- Bringen Sie Ihr eigenes Modell mit 05.00.00.01
  - PMMLPredict
  - H20Predict
</details>  

<details>
<summary>Unterstützte Teradataml-Funktionen</summary>
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
Informationen zu bekannten Problemen und derzeit nicht unterstützten Funktionen finden Sie in den [Versionshinweisen](./release-notes.md).
:::


## Darauf dürfen Sie sich freuen

- Unterstützung für „Update“ und „Delete“ mit Prädikaten für Open Table Format (OTF)-Abfragen – Juni

- Benutzerdefinierte Funktionen (User Defined Functions, UDF)
  - Fehlerbehebung für den fehlgeschlagenen ersten Aufruf von Java-UDFs – künftig
  - Unterstützung für API_Request UDF – künftig
  
- Unbounded Array Framework (UAF)
  - SQL unterstützt UAF – Juni 
  - teradataml unterstützt UAF – künftig

- teradataml
  - Fehlerbehebung für fehlgeschlagene UAF-Funktionen, wenn der Datenbankname Sonderzeichen enthält – Juni
  - Fehlerbehebung für SQLE- und UAF-Funktionen, die aufgrund von Problemen mit der Erstellung volatiler Tabellen nicht ausgeführt werden konnten – Juni
  - AutoML- und OpenML-Funktionen – Juni
  - map_row- und map_partition-Funktionen – Zukunft
  
- Vantage Analytics Library (VAL) – Zukunft



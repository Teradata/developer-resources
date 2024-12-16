---
id: whats-new
title: Novedades
description: Descubra qué incluye la última versión de AI Unlimited.
sidebar_label: Novedades
sidebar_position: 5
pagination_prev: null
pagination_next: null
---

# Novedades

Vea lo que incluye esta versión y lo que viene.


## Vista previa pública paga (lanzamiento): mayo de 2024

Todo lo que necesita para empezar a explorar, analizar y experimentar: 

- Motor de AI/ML v0.14.3 con funciones de [ClearScape Analytics™](https://docs.teradata.com/access/sources/dita/topic?dita:mapPath=phg1621910019905.ditamap&dita:ditavalPath=pny1626732985837.ditaval&dita:topicPath=gma1702668333653.dita)
- Compatibilidad con AWS y Azure
- [AI Unlimited Jupyter Kernel](https://downloads.teradata.com/download/tools/teradata-ai-unlimited-jupyter-kernel)
    - Bibliotecas de cliente de Python
      - teradataml 20.0.0.0
      - teradatamlwidgets 20.0.0.2
	  \- teradatasql 20.0.0.12
	  \- teradatasqlalchemy 20.0.0.2
	  \- tdapiclient 1.4.0.1
- Compatibilidad con GitHub y GitLab para la creación de proyectos y la copia de seguridad del esquema de la base de datos
- Administrador de AI Unlimited v0.2.15

<details>
<summary>Funciones compatibles con Teradata Vantage&trade;</summary>
- Almacén de objetos nativos (NOS) 20.00.17.08
- Open Table Format (OTF) 20.00.17.07
  - Iceberg con AWS Glue, Hive y el catálogo de Unity de Databricks
  - Delta Lake con catálogo de Unity de Databricks
- Traiga su propio modelo 05.00.00.01
  - PMMLPredict
  - H20Predict
</details>  

<details>
<summary>Funciones de teradataml compatibles</summary>
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
-KNN
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
Consulte las [notas de la versión](./release-notes.md) para conocer los problemas conocidos y las funciones que no son compatibles actualmente.
:::


## Lo que viene

- Compatibilidad con actualizaciones y eliminaciones con predicados para consultas de formato de Open Table Format (OTF)  (junio)

- Funciones definidas por el usuario (UDF)
  - Solución para el error en la primera invocación de las UDF de Java (futuro)
  - Compatibilidad con la UDF API_Request (futuro)
  
- Unbounded Array Framework (UAF)
  - UAF compatible con SQL (junio) 
  - UAF compatible con teradataml (futuro)

- teradataml
  - Corrección de errores en las funciones UAF si el nombre de la base de datos tiene caracteres especiales (junio)
  - Corrección del error de ejecución de las funciones SQLE y UAF debido a problemas con la creación de tablas volátiles (junio)
  - Funciones de automl y openml (junio)
  - Funciones map_row y map_partition (futuro)
  
- Vantage Analytics Library (VAL) (futuro)



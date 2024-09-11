---
id: whats-new
title: Nouveautés
description: Découvrez le contenu de la dernière version d'AI Unlimited.
sidebar_label: Nouveautés
sidebar_position: 5
pagination_prev: null
pagination_next: null
---

# Nouveautés

Découvrez ce que contient cette version et ce qui est à venir.


## Préversion publique payante (lancement) - mai 2024

Tout ce dont vous avez besoin pour commencer à explorer, analyser et expérimenter : 

- Moteur AI/ML v0.14.3 avec les fonctions [ClearScape Analytics™](https://docs.teradata.com/access/sources/dita/topic?dita:mapPath=phg1621910019905.ditamap&dita:ditavalPath=pny1626732985837.ditaval&dita:topicPath=gma1702668333653.dita) 
- Prise en charge d'AWS et d'Azure
- [AI Unlimited Jupyter Kernel](https://downloads.teradata.com/download/tools/teradata-ai-unlimited-jupyter-kernel)
    - Bibliothèques clientes Python
      - teradataml 20.0.0.0
      - teradatamlwidgets 20.0.0.2
	  \- teradatasql 20.0.0.12
	  \- teradatasqlalchemy 20.0.0.2
	  \- tdapiclient 1.4.0.1
- Prise en charge de GitHub et GitLab pour la création de projets et la sauvegarde du schéma de base de données
- Gestionnaire AI Unlimited v0.2.15

<details>
<summary>Fonctionnalités prises en charge par Teradata Vantage&trade;</summary>
- Stockage d'objets natifs (NOS)&nbsp;20.00.17.08
- Open Table Format (OTF)&nbsp;20.00.17.07
  - Iceberg avec AWS Glue, Hive et Databricks Unity Catalog
  - Delta Lake avec Databricks Unity Catalog
- Bring Your Own Model&nbsp;05.00.00.01
  - PMMLPredict
  - H20Predict
</details>  

<details>
<summary>Fonctions Teradataml prises en charge</summary>
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
- Histogramme
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
Consultez les [notes de publication](./release-notes.md) pour connaître les problèmes connus et les fonctionnalités actuellement non prises en charge.
:::


## À venir

- Prise en charge de la mise à jour et de la suppression avec des prédicats pour les requêtes Open Table Format (OTF) - juin

- Fonctions définies par l'utilisateur (UDF)
  - Correction de l'échec du premier appel des UDF Java - futur
  - Prise en charge d'API_Request UDF - futur
  
- Unbounded Array Framework (UAF)
  - SQL prenant en charge UAF - juin 
  - Teradataml prend en charge UAF - futur

- teradataml
  - Correction des fonctions UAF qui échouent si le nom de la base de données contient des caractères spéciaux - juin
  - Correction pour les fonctions SQLE et UAF qui ne s'exécutent pas en raison de problèmes de création de tables volatiles - juin
  - Fonctions automl et openml - juin
  - Fonctions map_row et map_partition - futur
  
- Vantage Analytics Library (VAL) - futur



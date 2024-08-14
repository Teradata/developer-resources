---
id: whats-new
title: 新着情報
description: 最新の AI Unlimited リリースの内容をご確認ください。
sidebar_label: 新着情報
sidebar_position: 5
pagination_prev: null
pagination_next: null
---

# 新着情報

このリリースの内容と今後の予定を確認してください。


## 有料パブリックプレビュー（リリース） - 2024 年 5 月

探索、分析、実験を始めるために必要なものはすべて揃っています。 

- [ClearScape Analytics™](https://docs.teradata.com/access/sources/dita/topic?dita:mapPath=phg1621910019905.ditamap&dita:ditavalPath=pny1626732985837.ditaval&dita:topicPath=gma1702668333653.dita) 関数を備えた AI/ML engine v0.14.3 
- AWSとAzureのサポート
- [AI Unlimited Jupyter Kernel](https://downloads.teradata.com/download/tools/teradata-ai-unlimited-jupyter-kernel)
    - Python Client Libraries
      - teradataml 20.0.0.0
      - teradatamlwidgets 20.0.0.2
	  - teradatasql 20.0.0.12
	  - teradatasqlalchemy 20.0.0.2
	  - tdapiclient 1.4.0.1
- プロジェクト作成とデータベーススキーマのバックアップのためのGitHubとGitLabのサポート
- AI Unlimited manager v0.2.15

<details>
<summary>サポートされている Teradata Vantage&trade; 機能</summary>
- Native Object Store (NOS) 20.00.17.08
- Open Table Format (OTF) 20.00.17.07
  - AWS Glue、Hive、Databricks を使用した Iceberg Unity Catalog
  - Databricks を使用した Databricks Unity Catalog
- Bring Your Own Model 05.00.00.01
  - PMMLPredict
  - H20Predict
</details>  

<details>
<summary>サポートされているteradataml関数</summary>
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
既知の問題と現在サポートされていない機能については 、[リリースノート](./release-notes.md)を参照してください。
:::


## 今後の予定

- Open Table Format (OTF) クエリーの述部による更新と削除のサポート - 6 月

- ユーザー定義関数 (UDF)
  - Java UDFの最初の呼び出しが失敗する問題を修正 - 予定
  - API_Request UDFのサポート - 予定
  
- Unbounded Array Framework (UAF)
  - UAFをサポートするSQL - 6 月 
  - UAFをサポートするteradataml - 予定

- teradataml
  - データベース名に特殊文字が含まれている場合に UAF 関数が失敗する問題を修正 - 6 月
  - 揮発テーブルの作成に関する問題により SQLE および UAF 関数が実行できない問題を修正 - 6 月
  - automlとopenml 関数 - 6 月
  - map_rowおよびmap_partition 関数 - 予定
  
- Vantage Analytics Library (VAL)  - 予定



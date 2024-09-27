---
id: whats-new
title: 새로운 소식
description: 최신 AI Unlimited 릴리스에 무엇이 있는지 확인합니다.
sidebar_label: 새로운 소식
sidebar_position: 5
pagination_prev: null
pagination_next: null
---

# 새로운 소식

이번 릴리스에 포함된 내용과 앞으로 추가될 내용을 확인하십시오.


## 유료 공개 미리보기(출시) - 2024년 5월

탐색, 분석, 실험을 시작하는 데 필요한 모든 것: 

- [ClearScape Analytics™](https://docs.teradata.com/access/sources/dita/topic?dita:mapPath=phg1621910019905.ditamap&dita:ditavalPath=pny1626732985837.ditaval&dita:topicPath=gma1702668333653.dita) 기능이 있는 AI/ML 엔진 v0.14.3
- AWS 및 Azure 지원
- [AI Unlimited Jupyter Kernel](https://downloads.teradata.com/download/tools/teradata-ai-unlimited-jupyter-kernel)
    - Python 클라이언트 라이브러리
      - teradataml 20.0.0.0
      - teradatamlwidgets 20.0.0.2
	  \- teradatasql 20.0.0.12
	  \- teradatasqlalchemy 20.0.0.2
	  \- tdapiclient 1.4.0.1
- 프로젝트 생성 및 데이터베이스 스키마 백업을 위한 GitHub 및 GitLab 지원
- AI Unlimited 관리자 v0.2.15

<details>
<summary>지원되는 Teradata Vantage&trade; 기능</summary>
- NOS(Native Object Store) 20.00.17.08
- OTF(Open Table Format) 20.00.17.07
  - AWS Glue, Hive 및 Databricks Unity Catalog를 사용한 Iceberg
  - Databricks Unity Catalog가 있는 Delta Lake
- Bring Your Own Model 05.00.00.01
  - PMMLPredict
  - H20Predict
</details>  

<details>
<summary>지원되는 teradataml 함수</summary>
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
현재 지원되지 않는 알려진 문제 및 기능은 [릴리스 정보](./release-notes.md)를 참조하십시오.
:::


## 새로운 소식

- OTF(Open Table Format) 쿼리에 대한 조건자를 사용한 업데이트 및 삭제 지원 - 6월

- UDF(사용자 정의 함수)
  - Java UDF의 첫 번째 호출 실패에 대한 수정 - 향후
  - API_Request UDF 지원 - 향후
  
- UAF(Unbounded Array Framework)
  - UAF를 지원하는 SQL - 6월 
  - UAF를 지원하는 teradataml - 향후

- teradataml
  - 데이터베이스 이름에 특수 문자가 있는 경우 UAF 기능이 실패하는 문제에 대한 수정 - 6월
  - 휘발성 테이블 생성 문제로 인해 SQLE 및 UAF 함수가 실행되지 않는 문제에 대한 수정 - 6월
  - automl 및 openml 함수 - 6월
  - map_row 및 map_partition 함수 - 향후
  
- VAL(Vantage Analytics Library) - 향후



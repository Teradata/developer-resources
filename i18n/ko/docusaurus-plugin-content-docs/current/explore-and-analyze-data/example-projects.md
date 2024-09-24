---
id: use-cases
title: 샘플 사용 사례
description: AI Unlimited를 사용하여 실행할 수 있는 워크로드는 다음과 같습니다.
sidebar_position: 4
sidebar_label: 샘플 사용 사례
pagination_prev: null
pagination_next: null
---

# 샘플 사용 사례

확장하고, 결과를 다른 사용 사례에 적용하거나, 모델을 운영하기 전에 대규모 데이터 세트에서 AI/ML 분석을 실험할 수 있는 몇 가지 방법을 살펴보십시오.

:::tip

이러한 사용 사례에 대한 도움이 필요하면 <a href="mailto:aiunlimited.support@Teradata.com">지원 팀</a>에 이메일을 보내거나 [커뮤니티](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa)에 문의하십시오.
:::


## 시작하기 전에 

- [프로젝트 관리 노트북](https://github.com/Teradata/ai-unlimited-demos/blob/main/Notebooks/Project%20Administration.ipynb)을 사용하여 프로젝트를 준비합니다.

- 기존 AWS Glue 카탈로그를 사용하고 [샘플 데이터](https://github.com/Teradata/ai-unlimited-demos/tree/main/UseCases/Data)를 업로드합니다. 또는 제공된 OTF(Open Table Format) 예제를 사용하기 위해 새 카탈로그를 만듭니다.


## 고객 여정 이해

고객은 웹사이트, 직원과의 지점 내 상호작용, 이메일, 콜센터 등 다양한 마케팅 접점을 통해 금융 기관과 소통합니다. 

전반적인 고객 여정을 이해하는 것은 고객 여정을 개선하고 고객 확보와 채택을 늘리는 데 매우 중요합니다.

데이터에 액세스하여 검토한 후에는 귀속 모델링, 채널 분석, 경로 지정을 활용하여 시간 경과에 따른 고객 행동을 파악하게 됩니다.

[시도해보세요](https://github.com/Teradata/ai-unlimited-demos/blob/main/UseCases/Financial_Customer_Journey_SQL.ipynb)(SQL)

[시도해보세요](https://github.com/Teradata/ai-unlimited-demos/blob/main/UseCases/Financial_Customer_Journey_SQL_Python.ipynb)(SQL-Python)


## 과거 구매를 기준으로 고객 세분화

구매 내역은 고객을 세분화하는 데 강력한 요소가 될 수 있습니다. 예를 들어, 구매량과 금액에 따라 세그먼트를 만들 수 있습니다.

데이터를 준비한 후에는 k-평균 클러스터링과 데이터 준비 파이프라인을 사용하여 고객 세그먼트를 결정합니다.

[시도해보세요](https://github.com/Teradata/ai-unlimited-demos/blob/main/UseCases/Native_Data_Prep_Transformation_Pipelines-SQL.ipynb)(SQL)

[시도해보세요](https://github.com/Teradata/ai-unlimited-demos/blob/main/UseCases/Native_Data_Prep_Transformation_Pipelines-SQL_Python.ipynb)(SQL-Python)


## 고객 세그먼트의 이상적인 수를 찾으세요

이상적인 수의 고객 세그먼트에 마케팅한다는 것은 관리할 세그먼트가 너무 많지 않아도 세분화의 이점을 누릴 수 있다는 것을 의미합니다. 고객 구매 내역의 코멘트에서 이상적인 세그먼트 수를 도출할 수 있습니다.

데이터에 액세스하여 검사한 후에는 LLM(대규모 언어 모델)을 사용하여 벡터 테이블을 만든 다음 이상적인 k-평균 모델과 세그먼트 수를 찾습니다.

[시도해보세요](https://github.com/Teradata/ai-unlimited-demos/blob/main/UseCases/Segmentation_With_Vector_Embedding-SQL.ipynb)(SQL)

[시도해보세요](https://github.com/Teradata/ai-unlimited-demos/blob/main/UseCases/Segmentation_With_Vector_Embedding-SQL_Python.ipynb)(SQL-Python)


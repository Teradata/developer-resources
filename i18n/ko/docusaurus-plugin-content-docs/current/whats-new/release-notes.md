---
id: release-notes
title: 릴리스 정보
description: 유료 공개 미리보기의 최초 출시에 대한 자세한 내용을 확인하십시오.
sidebar_label: 릴리스 정보
sidebar_position: 8
pagination_prev: null
pagination_next: null
---

# 릴리스 정보

AI Unlimited를 지속적으로 개선해 나가므로 현재 지원되지 않는 기능과 알려진 문제에 유의하십시오. 

최신 기능 및 업데이트는 [새로운 소식](./index.md)을 참조하십시오.


## 유료 공개 미리보기(출시) - 2024년 5월

### 지원되지 않음

- OTF(Open Table Format) 쿼리에 대한 조건자를 사용한 업데이트 및 삭제
  
- SQL 및 teradataml의 UAF(Unbounded Array Framework) 함수
  
- 이러한 teradataml 함수는 다음과 같습니다.
  - automl 
  - openml  
  - map_row 
  - map_partition

- API_Request UDF(사용자 정의 함수)

- VAL(Vantage Analytics Library)

### 알려진 문제

- Java UDF(사용자 정의 함수)를 처음 호출하면 다음 오류가 발생하여 실패합니다. `Failure 7583 The secure mode processes had a set up error`.

- teradataml
  - 데이터베이스 이름에 하이픈(-)과 같은 특수 문자가 포함되어 있으면 UAF(Unbounded Array Framework) 함수가 실행되지 않습니다. 
  - 일부 SQLE 및 UAF 함수는 휘발성 테이블 생성 문제로 인해 실행되지 않습니다. 프레임워크는 키워드 인수 `Volatile`가 True로 설정된 경우 휘발성 테이블을 생성합니다. 그러나 다른 스키마에서는 휘발성 테이블을 생성할 수 없습니다.
  - H2OPredict - 모델 유형 DAI에 대한 한 가지 사례가 다음 오류로 인해 실패했습니다. `H2OPredict failed in contract: 'license' column is missing from model input table. This column is required to score driverless AI models.`
  - ONNXPredict가 다음 오류로 인해 실패했습니다. `E teradatasql.OperationalError: [Version 20.0.0.12] [Session 2078] [Teradata Database] [Error 7825] in UDF/XSP/UDM mldb.ONNXPredict: SQLSTATE [38U01] ONNXPredict failed with error:no onnxruntime in java.library.path: [/usr/pde/lib, /usr/tdbms/lib]`
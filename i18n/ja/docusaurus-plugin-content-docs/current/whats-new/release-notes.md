---
id: release-notes
title: リリースノート
description: 有料パブリックプレビューの最初のリリースに関する詳細をご覧ください。
sidebar_label: リリースノート
sidebar_position: 8
pagination_prev: null
pagination_next: null
---

# リリースノート

AI Unlimited の強化を継続する中で、現在サポートされていない機能や既知の問題に注意してください。 

最新の機能とアップデートについては、 [新着情報](./index.md)をご覧ください。


## 有料パブリックプレビュー（リリース） - 2024 年 5 月

### サポートされていません

- Open Table Format (OTF) クエリーの述部を使用した更新と削除
  
- SQL および Teradataml のUnbounded Array Framework (UAF) 関数
  
- これらの teradataml 関数:
  - automl 
  - openml  
  - map_row 
  - map_partition

- API_Request ユーザー定義関数 (UDF)

- Vantage Analytics Library (VAL)

### 既知の問題点

- Java ユーザー定義関数 (UDF) の最初の呼び出しは、次のエラーで失敗します: `Failure 7583 The secure mode processes had a set up error`。

- teradataml
  - データベース名にハイフン (-) などの特殊文字が含まれている場合、Unbounded Array Framework (UAF) 関数は実行されません。 
  - 一部の SQLE および UAF 関数は、揮発テーブルの作成に関する問題により実行に失敗します。キーワード引数 `Volatile` が True に設定されている場合、フレームワークは揮発テーブルを作成します。ただし、揮発テーブルは他のスキーマでは作成できません。
  - H2OPredict - モデル タイプ DAI の 1 つのケースが次のエラーで失敗しました。 `H2OPredict failed in contract: 'license' column is missing from model input table. This column is required to score driverless AI models.`
  - ONNXPredict は次のエラーで失敗しました。 `E teradatasql.OperationalError: [Version 20.0.0.12] [Session 2078] [Teradata Database] [Error 7825] in UDF/XSP/UDM mldb.ONNXPredict: SQLSTATE [38U01] ONNXPredict failed with error:no onnxruntime in java.library.path: [/usr/pde/lib, /usr/tdbms/lib]`
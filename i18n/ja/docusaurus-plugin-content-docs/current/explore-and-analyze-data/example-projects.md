---
id: use-cases
title: サンプル ユースケース
description: 以下は、AI Unlimited を使用して実行できるワークロードの一部です。
sidebar_position: 4
sidebar_label: サンプル ユースケース
pagination_prev: null
pagination_next: null
---

# サンプル ユースケース

スケーリング、他のユースケースへの結果の適用、モデルの運用化を行う前に、大規模なデータセットで AI/ML 分析を試す方法をいくつか紹介します。

:::tip

これらのユースケースに関するサポートが必要な場合は、 <a href="mailto:aiunlimited.support@Teradata.com">サポート チーム</a> にメールを送信するか、 [コミュニティに質問してください](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa)にお問い合わせください。
:::


## 始める前に 

- [プロジェクト管理ノートブック](https://github.com/Teradata/ai-unlimited-demos/blob/main/Notebooks/Project%20Administration.ipynb) を使用してプロジェクトを準備します。

- 既存の AWS Glue カタログを使用して、 [サンプル データ](https://github.com/Teradata/ai-unlimited-demos/tree/main/UseCases/Data)をアップロードします。または、提供されている Open Table Format (OTF) の例を使用するために新しいカタログを作成します。


## 顧客の行動を理解する

顧客は、Web サイト、支店での従業員とのやり取り、電子メール、コール センターなど、さまざまなマーケティング タッチポイントを通じて金融機関と関わります。 

全体的なカスタマー ジャーニーを理解することは、カスタマー ジャーニーを強化し、顧客の獲得と採用を増やすために重要です。

データにアクセスして検査した後、アトリビューション モデリング、チャネル分析、パスを使用して、時間の経過に伴う顧客の行動を把握します。

[試してみる](https://github.com/Teradata/ai-unlimited-demos/blob/main/UseCases/Financial_Customer_Journey_SQL.ipynb) (SQL)

[試してみる](https://github.com/Teradata/ai-unlimited-demos/blob/main/UseCases/Financial_Customer_Journey_SQL_Python.ipynb) (SQL-Python)


## 過去の購入履歴に基づいて顧客をセグメント化する

購入履歴は、顧客をセグメント化する上で強力な要素となります。たとえば、購入量や購入額に基づいてセグメントを作成できます。

データを準備したら、K 平均法クラスタリングとデータ準備パイプラインを使用して顧客セグメントを決定します。

[試してみる](https://github.com/Teradata/ai-unlimited-demos/blob/main/UseCases/Native_Data_Prep_Transformation_Pipelines-SQL.ipynb) (SQL)

[試してみる](https://github.com/Teradata/ai-unlimited-demos/blob/main/UseCases/Native_Data_Prep_Transformation_Pipelines-SQL_Python.ipynb) (SQL-Python)


## 理想的な顧客セグメント数を見つける

理想的な数の顧客セグメントにマーケティングを行うということは、管理するセグメントが多すぎることなく、セグメンテーションのメリットを享受できることを意味します。顧客の購入履歴のコメントから、理想的なセグメント数を導き出すことができます。

データにアクセスして検査した後、大規模言語モデル (LLM) を使用してベクター テーブルを作成し、理想的な k-means モデルとセグメントの数を見つけます。

[試してみる](https://github.com/Teradata/ai-unlimited-demos/blob/main/UseCases/Segmentation_With_Vector_Embedding-SQL.ipynb) (SQL)

[試してみる](https://github.com/Teradata/ai-unlimited-demos/blob/main/UseCases/Segmentation_With_Vector_Embedding-SQL_Python.ipynb) (SQL-Python)


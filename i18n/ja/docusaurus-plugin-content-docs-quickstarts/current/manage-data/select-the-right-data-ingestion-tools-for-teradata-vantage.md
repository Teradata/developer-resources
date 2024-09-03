---
id: select-the-right-data-ingestion-tools-for-teradata-vantage
sidebar_position: 2
author: Krutik Pathak
email: krutik.pathak@teradata.com
page_last_update: 2024 年 2 月 29 日
description: Teradata Vantage のさまざまなユースケースで使用するデータ インジェスト ツールの推奨事項
keywords: [data ingestion, teradata, nos, tpt, bteq, querygrid, airbyte, object store, saas, vantage, apache, spark, presto, oracle, Flow]
---

# Teradata Vantageに適したデータ取り込みソリューションを選択する

## 概要

この記事では、データ取り込みに関するさまざまなユースケースの概要を説明します。利用可能なソリューションをリストし、各ユースケースに最適なソリューションを推奨します。

### ストリーミングを含む大量の取り込み
利用可能なソリューション:

* [Teradata Parallel Transporter API](https://docs.teradata.com/r/Teradata-Parallel-Transporter-Application-Programming-Interface-Programmer-Guide-17.20)を使用する
* データをオブジェクト ストレージにストリーミングし、 [Teradata Native Object Store (NOS)](https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide-17.20/Welcome-to-Native-Object-Store)を使用して取り込みます。
*  [Teradata Parallel Transporter (TPT)](https://docs.teradata.com/r/Teradata-Parallel-Transporter-User-Guide/June-2022/Introduction-to-Teradata-PT) コマンドラインユーティリティを使用します。
*  [Teradata Query Service](https://docs.teradata.com/r/Teradata-Query-Service-Installation-Configuration-and-Usage-Guide-for-Customers/April-2022/Using-the-Query-Service-APIs/Getting-Started) - REST API を使用して、データベース内で SQL ステートメントを実行します。
* JDBC (Java)、teradatasql (Python)、Node.js ドライバ、ODBC、.NET データ プロバイダなどの Teradata データベース ドライバを使用する。


Teradata Parallel Transport API は通常、高スループットと最小のレイテンシを提供する最もパフォーマンスの高いソリューションです。1 秒あたり数万行を取り込む必要があり、C 言語の使用に慣れている場合は、この API を使用してください。 

イベント数が 1 秒あたり数千単位の場合は、Teradata データベース ドライバを使用します。JDBC、Python などの最も一般的なドライバで使用できる Fastload プロトコルの使用を検討してください。

ドライバ ライブラリへの依存関係を管理したくない場合は、Query Service を使用します。Query Service はデータベースとの通信に通常のドライバ プロトコルを使用するため、このソリューションのスループットは、JDBC などのデータベース ドライバが提供するスループットと同等です。ベンダーであり、製品を Teradata と統合することを検討している場合は、すべての Teradata の顧客がサイトで Query Service を有効にしているわけではないことに注意してください。

ソリューションがより高いレイテンシを許容できる場合、イベントをオブジェクト ストレージにストリーミングし、NOS を使用してデータを読み取ることが適切なオプションです。このソリューションでは、通常、最小限の労力しか必要ありません。

### オブジェクトストレージからデータを取り込む

利用可能なソリューション:

* [フロー (VantageCloud Lake のみ)](https://docs.teradata.com/r/Teradata-VantageCloud-Lake/Loading-Data/Introduction-to-Flow)
* [Teradata ネイティブ オブジェクト ストア (NOS)](https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide-17.20/Welcome-to-Native-Object-Store)
* [Teradata Parallel Transporter (TPT)](https://docs.teradata.com/r/Teradata-Parallel-Transporter-User-Guide/June-2022/Introduction-to-Teradata-PT)

Flow は、オブジェクト ストレージから VantageCloud Lake にデータを取り込むための推奨される取り込みメカニズムです。他のすべての Teradata Vantage エディションでは、Teradata NOS が推奨されるオプションです。NOS は、すべての Teradata ノードを活用して取り込みを実行できます。Teradata Parallel Transporter (TPT) はクライアント側で実行されます。NOS からオブジェクト ストレージへの接続がない場合に使用できます。

### ローカルファイルからデータを取り込む
利用可能なソリューション:

* [Teradata Parallel Transporter (TPT)](https://docs.teradata.com/r/Teradata-Parallel-Transporter-User-Guide/June-2022/Introduction-to-Teradata-PT)
* [BTEQ](https://docs.teradata.com/r/Enterprise_IntelliFlex_Lake_VMware/Basic-Teradata-Query-Reference-17.20/Introduction-to-BTEQ)

TPT は、ローカル ファイルからデータをロードするための推奨オプションです。TPT はスケーラビリティと並列処理に最適化されているため、利用可能なすべてのオプションの中で最高のスループットを実現します。BTEQ は、取り込みプロセスでスクリプトが必要な場合に使用できます。他のすべての取り込みパイプラインが BTEQ で実行される場合も、BTEQ を引き続き使用するのが合理的です。

### SaaSアプリケーションからデータを取り込む
利用可能なソリューション:

*  [Airbyte](https://airbyte.com/)、 [Precog](https://precog.com/)、 [Nexla](https://nexla.com/)、 [Fivetran](https://fivetran.com/)などの複数のサードパーティツール
* SaaSアプリからローカルファイルにエクスポートし、[Teradata Parallel Transporter (TPT)](https://docs.teradata.com/r/Teradata-Parallel-Transporter-User-Guide/June-2022/Introduction-to-Teradata-PT)を使用して取り込みます。
* SaaS アプリからオブジェクト ストレージにエクスポートし、 [Teradata Native Object Store (NOS)](https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide-17.20/Welcome-to-Native-Object-Store)を使用して取り込みます。

サードパーティ ツールは通常、SaaS アプリケーションから Teradata Vantage にデータを移動するのに適したオプションです。これらのツールはデータ ソースを幅広くサポートし、エクスポートやエクスポートされたデータセットの保存などの中間ステップを管理する必要がありません。

### 他のデータベースに保存されているデータを統合クエリー処理に使用する
利用可能なソリューション:

* [Teradata QueryGrid](https://docs.teradata.com/r/Enterprise_IntelliFlex_Lake_VMware/QueryGridTM-Installation-and-User-Guide-3.05)
* 他のデータベースからローカルファイルにエクスポートし、 [Teradata Parallel Transporter (TPT)](https://docs.teradata.com/r/Teradata-Parallel-Transporter-User-Guide/June-2022/Introduction-to-Teradata-PT)を使用して取り込みます。
* 他のデータベースからオブジェクト ストレージにエクスポートし、 [Teradata Native Object Store (NOS)](https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide-17.20/Welcome-to-Native-Object-Store)を使用して取り込みます。

QueryGrid は、異なるシステム/プラットフォーム間で限られた量のデータを移動するための推奨オプションです。これには、Vantage インスタンス、Apache Spark、Oracle、Presto など内での移動が含まれます。同期する必要があるものが SQL で表現できる複雑な条件で記述されている状況に特に適しています。 

## まとめ
今回は、さまざまなデータ取り込みのユースケースを検討し、各ユースケースで利用可能なツールのリストを提供し、さまざまなシナリオに推奨されるオプションを特定しました。

## さらに詳しく

* [NOSを使用してオブジェクトストレージに保存されたデータを照会する](nos.md)

* [Teradata Parallel Transporterを使用した巨大なデータのバルクロード](./run-bulkloads-efficiently-with-teradata-parallel-transporter.md)

* [Teradata QueryGrid](https://docs.teradata.com/r/Enterprise_IntelliFlex_Lake_VMware/QueryGridTM-Installation-and-User-Guide-3.05)

* [Airbyte を使用して外部ソースから Teradata Vantage にデータをロードする方法](./use-airbyte-to-load-data-from-external-sources-to-teradata-vantage.md)

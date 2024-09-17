---
id: nos
sidebar_position: 1
author: Adam Tworkiewicz
email: adam.tworkiewicz@teradata.com
page_last_update: 2021 年 9 月 7 日
description: Teradata Vantage Native Object Storage - オブジェクト ストレージへの読み取りと書き込み、Vantage およびオブジェクト ストレージ用の統合 SQL インターフェース。
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics]
---

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'
import CommunityLink from '../_partials/community_link.mdx'

# オブジェクトストレージに保存されたクエリーデータ

## 概要

ネイティブ オブジェクト ストレージ (NOS) は、AWS S3、Google GCS、Azure Blob、オンプレミス実装などのオブジェクト ストレージ内のファイルに保存されたデータをクエリーできる Vantage 機能です。これは、データを Vantage に取り込むためのデータ パイプラインを構築せずにデータを探索したいシナリオで役立ちます。

## 前提条件

Teradata Vantage インスタンスにアクセスする必要があります。NOS は、バージョン 17.10 以降、Vantage Express から Developer、DYI、Vantage as a Service までのすべての Vantage エディションで有効になります。

<ClearscapeDocsNote />

## NOSでデータを探索する

:::note
現在、NOS は CSV、JSON (配列または改行区切りとして)、および Parquet データ形式をサポートしています。
:::

S3バケットにCSVファイルとして保存されているデータセットがあるとします。データセットをVantageに取り込むかどうかを決める前に、データセットを詳しく調べたいとします。このシナリオでは、Teradataが公開している、河川流量データを含む公開データセットを使用します。
米国地質調査所。バケットは https://td-usgs-public.s3.amazonaws.com/ にあります。

まず、サンプルの CSV データを見てみましょう。Vantage がバケットから取得する最初の 10 行を取得します。

```sql
SELECT
  TOP 10 *
FROM (
	LOCATION='/s3/td-usgs-public.s3.amazonaws.com/CSVDATA/'
) AS d;
```

以下のとおりです。

```sql
GageHeight2  Flow   site_no   datetime             Precipitation  GageHeight
-----------  ------ --------  -------------------  -------------  ----------
10.9         15300  09380000  2018-06-28 00:30     671            9.80
10.8         14500  09380000  2018-06-28 01:00     673            9.64
10.7         14100  09380000  2018-06-28 01:15     672            9.56
11.0         16200  09380000  2018-06-27 00:00     669            9.97
10.9         15700  09380000  2018-06-27 00:30     668            9.88
10.8         15400  09380000  2018-06-27 00:45     672            9.82
10.8         15100  09380000  2018-06-27 01:00     672            9.77
10.8         14700  09380000  2018-06-27 01:15     672            9.68
10.9         16000  09380000  2018-06-27 00:15     668            9.93
10.8         14900  09380000  2018-06-28 00:45     672            9.72
```


たくさんの数字がありますが、それらは何を意味するのでしょうか? この質問に答えるために、Vantage に CSV ファイルのスキーマを検出するように依頼します。

```sql
SELECT
  *
FROM (
	LOCATION='/s3/td-usgs-public.s3.amazonaws.com/CSVDATA/'
	RETURNTYPE='NOSREAD_SCHEMA'
) AS d;
```

Vantageは、スキーマを分析するためのデータサンプルを取得し、結果を返します。

```sql
Name            Datatype                            FileType  Location
--------------- ----------------------------------- --------- -------------------------------------------------------------------
GageHeight2     decimal(3,2)                        csv       /S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09513780/2018/06/27.csv
Flow            decimal(3,2)                        csv       /S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09513780/2018/06/27.csv
site_no         int                                 csv       /S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09513780/2018/06/27.csv
datetime        TIMESTAMP(0) FORMAT'Y4-MM-DDBHH:MI' csv       /S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09513780/2018/06/27.csv
Precipitation   decimal(3,2)                        csv       /S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09513780/2018/06/27.csv
GageHeight      decimal(3,2)                        csv       /S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09513780/2018/06/27.csv
```



CSV ファイルには 6 つの列があることがわかります。各列には、スキーマを推測するために使用された名前、データ型、およびファイル座標が取得されます。

## NOS を使用してデータをクエリーする

スキーマがわかったので、データセットを通常の SQL テーブルのように操作できます。この点を証明するために、データの集約を試してみましょう。温度を収集するサイトごとに平均温度を取得してみましょう。

```sql
SELECT
  site_no Site_no, AVG(Flow) Avg_Flow
FROM (
  LOCATION='/s3/td-usgs-public.s3.amazonaws.com/CSVDATA/'
) AS d
GROUP BY
  site_no
HAVING
  Avg_Flow IS NOT NULL;
```

結果:

```sql
Site_no  Avg_Flow
-------- ---------
09380000 11
09423560 73
09424900 93
09429070 81
```

アドホック探索アクティビティを永続的なソースとして登録するには、外部テーブルとして作成します。

```sql
-- If you are running this sample as dbc user you will not have permissions
-- to create a table in dbc database. Instead, create a new database and use
-- the newly create database to create a foreign table.

CREATE DATABASE Riverflow
  AS PERMANENT = 60e6, -- 60MB
  SPOOL = 120e6; -- 120MB

-- change current database to Riverflow
DATABASE Riverflow;

CREATE FOREIGN TABLE riverflow
  USING ( LOCATION('/s3/td-usgs-public.s3.amazonaws.com/CSVDATA/') );

SELECT top 10 * FROM riverflow;
```

結果:

```sql
Location                                                            GageHeight2 Flow site_no datetime            Precipitation GageHeight
------------------------------------------------------------------- ----------- ---- ------- ------------------- ------------- ----------
/S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09429070/2018/07/02.csv null        null 9429070 2018-07-02 14:40:00 1.21          null
/S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09400815/2018/07/10.csv null        0.00 9400815 2018-07-10 00:30:00 0.00          -0.01
/S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09400815/2018/07/10.csv null        0.00 9400815 2018-07-10 00:45:00 0.00          -0.01
/S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09400815/2018/07/10.csv null        0.00 9400815 2018-07-10 01:00:00 0.00          -0.01
/S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09400815/2018/07/10.csv null        0.00 9400815 2018-07-10 00:15:00 0.00          -0.01
/S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09429070/2018/07/02.csv null        null 9429070 2018-07-02 14:38:00 1.06          null
```


今回は、 `SELECT` ステートメントは、データベース内のテーブルに対する通常の選択のように見えます。データのクエリー時に 1 秒未満の応答時間が必要な場合は、CSV データを Vantage に取り込んで処理を高速化する簡単な方法があります。方法については、以下をお読みください。

## NOSからVantageへデータをロードする

オブジェクト ストレージのクエリーには時間がかかります。データが興味深いと判断し、より迅速に回答が得られるソリューションを使用してさらに分析したい場合はどうすればよいでしょうか。幸いなことに、NOS で返されるデータは `CREATE TABLE` ステートメントのソースとして使用できます。 `CREATE TABLE` 権限を持っていると仮定すると、次を実行できます。

重要: このクエリーでは、前の手順でデータベース `Riverflow` と `riverflow`という外部テーブルを作成したことを前提としています。

```sql
-- This query assumes you created database `Riverflow`
-- and a foreign table called `riverflow` in the previous step.

CREATE MULTISET TABLE riverflow_native (site_no, Flow, GageHeight, datetime)
AS (
  SELECT site_no, Flow, GageHeight, datetime FROM riverflow
) WITH DATA
NO PRIMARY INDEX;

SELECT TOP 10 * FROM riverflow_native;
```

結果:

```sql
site_no   Flow  GageHeight  datetime
-------  -----  ----------  -------------------
9400815    .00        -.01  2018-07-10 00:30:00
9400815    .00        -.01  2018-07-10 01:00:00
9400815    .00        -.01  2018-07-10 01:15:00
9400815    .00        -.01  2018-07-10 01:30:00
9400815    .00        -.01  2018-07-10 02:00:00
9400815    .00        -.01  2018-07-10 02:15:00
9400815    .00        -.01  2018-07-10 01:45:00
9400815    .00        -.01  2018-07-10 00:45:00
9400815    .00        -.01  2018-07-10 00:15:00
9400815    .00        -.01  2018-07-10 00:00:00
```

今回は、 `SELECT` クエリーは 1 秒未満で返されました。Vantage は NOS からデータを取得する必要はなく、代わりにノード上にすでに存在するデータを使用して応答しました。

## プライベートバケットにアクセスする

これまでは、パブリック バケットを使用してきました。プライベート バケットがある場合はどうでしょうか。Vantage に使用する資格情報をどのように伝えればよいでしょうか。

信頼証明をクエリーに直接インライン化することができます。

```sql
SELECT
  TOP 10 *
FROM (
  LOCATION='/s3/td-usgs-public.s3.amazonaws.com/CSVDATA/'
  AUTHORIZATION='{"ACCESS_ID":"","ACCESS_KEY":""}'
) AS d;
```

これらの認証情報を常に入力するのは面倒で、安全性も低下します。Vantage では、認証情報のコンテナとして機能する承認オブジェクトを作成できます。

```sql
CREATE AUTHORIZATION aws_authorization
  USER 'YOUR-ACCESS-KEY-ID'
  PASSWORD 'YOUR-SECRET-ACCESS-KEY';
```

これにより、外部テーブルを作成するときに認証オブジェクトを参照できるようになります。

```sql
CREATE FOREIGN TABLE riverflow
, EXTERNAL SECURITY aws_authorization
USING ( LOCATION('/s3/td-usgs-public.s3.amazonaws.com/CSVDATA/') );
```

## Vantage からオブジェクト ストレージにデータをエクスポートする

So far, we have talked about reading and importing data from object storage. Wouldn't it be nice if we had a way to use SQL to export data from Vantage to object storage? This is exactly what `WRITE_NOS` function is for. Let's say we want to export data from `riverflow_native` table to object storage. You can do so with the following query:

```sql
SELECT * FROM WRITE_NOS (
  ON ( SELECT * FROM riverflow_native )
  PARTITION BY site_no ORDER BY site_no
  USING
    LOCATION('YOUR-OBJECT-STORE-URI')
    AUTHORIZATION(aws_authorization)
    STOREDAS('PARQUET')
    COMPRESSION('SNAPPY')
    NAMING('RANGE')
    INCLUDE_ORDERING('TRUE')
) AS d;
```

ここでは、Vantage に `riverflow_native` からデータを取得して `parquet` 形式を使用して `YOUR-OBJECT-STORE-URI` バケットに保存するように指示します。データは `site_no` 属性によってファイルに分割されます。ファイルは圧縮されます。

## まとめ

このクイック スタートでは、Vantage の Native Object Storage (NOS) 機能を使用してオブジェクト ストレージからデータを読み取る方法を学習しました。NOS は、CSV、JSON、Parquet 形式で保存されたデータの読み取りとインポートをサポートしています。NOS は、Vantage からオブジェクト ストレージにデータをエクスポートすることもできます。
# さらに詳しく
* [Teradata Vantage™- Native Object Store 入門ガイド](https://docs.teradata.com/r/2mw8ooFr~xX0EaaGFaDW8A/root)

<CommunityLink />
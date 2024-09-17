---
sidebar_position: 12
id: create-parquet-files-in-object-storage
author: Obed Vega
email: obed.vega@teradata.com
page_last_update: 2022 年 8 月 2 日
description: Teradata Vantage Native Object Storage - オブジェクト ストレージへの読み取りと書き込み、Vantage およびオブジェクト ストレージ用の統合 SQL インターフェース。
keywords: [data warehouses, compute storage separation, Teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics, parquet, Parquetファイルを作成する]
---

import UseCase from '../_partials/use-csae.mdx';
import CommunityLink from '../_partials/community_link.mdx';

# VantageからのオブジェクトストアへのParquetファイルの作成

## 概要
Native Object Storage (NOS) はCSV、JSON、Parquet形式のデータセットなどのファイルに保存されているデータを照会するためのVantage 機能です。
これらはAWS S3、Google GCS、Azure BlobやオンプレミスのS3互換のオブジェクト ストレージをサポートしています。
これは、データ パイプラインを構築せずにデータを探索し、Vantage に取り込むシナリオで役立ちます。このチュートリアルでは、Parquet ファイル形式を使用して、Vantage からオブジェクト ストレージにデータをエクスポートする方法を説明します。

## 前提条件

Teradata Vantage インスタンスにアクセスする必要があります。NOS は、バージョン 17.10 以降、Vantage Express から Developer、DYI、Vantage as a Service までのすべての Vantage エディションで有効になります。

:::info
このチュートリアルは、S3 AWS オブジェクト ストレージに基づいています。チュートリアルを完了するには、書き込み権限を持つ独自の S3 バケットが必要です。
:::

<UseCase />

## WRITE_NOS 関数を使用して Parquet ファイルを作成します。

`WRITE_NOS` を使用するとデータベーステーブルまたはクエリーの結果を選択したまたはすべてのカラムを使用してAmazon S3, Azure Blob storage, Azure Data Lake Storage Gen2, Google Cloud Storageなどの外部オブジェクト ストレージに書き込むことができます。この機能はデータを Parquet 形式で保存します。

`WRITE_NOS`の機能に関する詳細なドキュメントは、[NOSドキュメント](https://docs.teradata.com/r/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide/June-2022/Writing-Data-to-External-Object-Store)にあります。

 `WRITE_NOS` 関数を実行できるデータベースにアクセスする必要があります。そのようなデータベースがない場合は、次のコマンドを実行します。

``` sql
CREATE USER db AS PERM=10e7, PASSWORD=db;

-- Don't forget to give the proper access rights
GRANT EXECUTE FUNCTION on TD_SYSFNLIB.READ_NOS to db;
GRANT EXECUTE FUNCTION on TD_SYSFNLIB.WRITE_NOS to db;
```

:::note
ユーザーとその権限の設定についてもっと詳しく知りたい場合は、[NOSドキュメント](https://docs.teradata.com/r/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide/June-2022/Setting-Up-Access/Setting-Access-Privileges) を参照してください。
:::


1. まず、Teradata Vantage インスタンスにテーブルを作成しましょう。

```sql
CREATE SET TABLE db.parquet_table ,FALLBACK ,
     NO BEFORE JOURNAL,
     NO AFTER JOURNAL,
     CHECKSUM = DEFAULT,
     DEFAULT MERGEBLOCKRATIO,
     MAP = TD_MAP1
     (
      column1 SMALLINT NOT NULL,
      column2 DATE FORMAT 'YY/MM/DD' NOT NULL,
      column3 DECIMAL(10,2))
PRIMARY INDEX ( column1 );
```

2. テーブルにサンプルデータを入力します。
```sql
INSERT INTO db.parquet_table (1,'2022/01/01',1.1);
INSERT INTO db.parquet_table (2,'2022/01/02',2.2);
INSERT INTO db.parquet_table (3,'2022/01/03',3.3);
```

テーブルは以下のようになります。

```sql
column1   column2       column3
-------  --------  ------------
      1  22/01/01          1.10
      2  22/01/02          2.20
      3  22/01/03          3.30
```

3.  `WRITE_NOS`を使用して parquet ファイルを作成します。 `<BUCKET_NAME>` をs3 バケットの名前に置き換えることを忘れないでください。また、 `<YOUR-ACCESS-KEY-ID>` と `<YOUR-SECRET-ACCESS-KEY>` をアクセス キーとシークレットに置き換えます。

:::note
オブジェクトストレージにアクセスするための認証情報の作成方法については、クラウドプロバイダのドキュメントを確認してください。たとえば、AWSの場合は以下を参照してください。 [AWS アクセスキーを作成するにはどうすればよいですか?](https://aws.amazon.com/premiumsupport/knowledge-center/create-access-key/)
:::

```sql
SELECT * FROM WRITE_NOS (
ON ( SELECT * FROM db.parquet_table)
USING
LOCATION('/s3/<BUCKET_NAME>.s3.amazonaws.com/parquet_file_on_NOS.parquet')
AUTHORIZATION('{"ACCESS_ID":"<YOUR-ACCESS-KEY-ID>",
"ACCESS_KEY":"<YOUR-SECRET-ACCESS-KEY>"}')
STOREDAS('PARQUET')
MAXOBJECTSIZE('16MB')
COMPRESSION('SNAPPY')
INCLUDE_ORDERING('TRUE')
INCLUDE_HASHBY('TRUE')
) as d;
```

これで、オブジェクト ストレージ バケットに parquet ファイルが作成されました。ファイルに対して簡単にクエリーを実行するには、手順 4 に従う必要があります。

4. NOS でバックアップされた外部テーブルを作成します。 `<BUCKET_NAME>` をs3 バケットの名前に置き換えることを忘れないでください。また、 `<YOUR-ACCESS-KEY-ID>` と `<YOUR-SECRET-ACCESS-KEY>` をアクセス キーとシークレットに置き換えます。
```sql
CREATE MULTISET FOREIGN TABLE db.parquet_table_to_read_file_on_NOS
, EXTERNAL SECURITY DEFINER TRUSTED CEPH_AUTH,
MAP = TD_MAP1
(
  Location VARCHAR(2048) CHARACTER SET UNICODE CASESPECIFIC
  , col1 SMALLINT
  , col2 DATE
  , col3 DECIMAL(10,2)

)
USING (
    LOCATION ('/s3/<BUCKET_NAME>.s3.amazonaws.com/parquet_file_on_NOS.parquet')
    AUTHORIZATION('{"ACCESS_ID":"<YOUR-ACCESS-KEY-ID>",
    "ACCESS_KEY":"<YOUR-SECRET-ACCESS-KEY>"}')
    STOREDAS ('PARQUET')
)NO PRIMARY INDEX;
```

5. これで、NOS 上のparquetファイルをクエリーする準備ができました。以下のクエリーを試してみましょう。
```sql
SELECT col1, col2, col3 FROM db.parquet_table_to_read_file_on_NOS;
```

クエリーから返されるデータは以下のようになります。

```sql
  col1      col2          col3
------  --------  ------------
     1  22/01/01          1.10
     2  22/01/02          2.20
     3  22/01/03          3.30
```

## まとめ

このチュートリアルでは、Native Object Storage (NOS) を使用して、Vantage からオブジェクト ストレージ上の parquet ファイルにデータをエクスポートする方法を学習しました。NOS は、CSV、JSON、および Parquet 形式で保存されたデータの読み取りとインポートをサポートしています。NOS は、Vantage からオブジェクト ストレージにデータをエクスポートすることもできます。

## さらに詳しく
* [Teradata Vantage™ - Writing Data to External Object Store](https://docs.teradata.com/r/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide/June-2022/Writing-Data-to-External-Object-Store)

<CommunityLink />
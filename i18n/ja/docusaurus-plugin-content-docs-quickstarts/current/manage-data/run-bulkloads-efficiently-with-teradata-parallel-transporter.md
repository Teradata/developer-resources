---
sidebar_position: 11
author: Adam Tworkiewicz
email: adam.tworkiewicz@teradata.com
page_last_update: 2022 年 4 月 6 日
title: TPTでデータロード
description: Teradata Parallel Transporter (TPT) を使用して、データを Vantage に効率的にロードします。
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics, Fastload, Teradata Parallel Transporter, TPT]
id: run-bulkloads-efficiently-with-teradata-parallel-transporter
---

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx';
import Tabs from '../_partials/tabsTPT.mdx';

# Teradata Parallel Transporter（TPT）を使用した巨大なデータのバルクロード

## 概要

大量のデータを Vantage に移動する必要が生じることがよくあります。Teradata は、大量のデータを効率的に Teradata Vantage にロードできる `Teradata Parallel Transporter (TPT)` ユーティリティを提供しています。このハウツーでは、 `TPT`の使用方法を説明します。このシナリオでは、30 万件を超えるレコード、つまり 40 MB を超えるデータを数秒でロードします。

## 前提条件

* Teradata Vantageインスタンスへのアクセス。
    <ClearscapeDocsNote />

* Teradata Tools and Utilities (TTU) をダウンロード -  サポートされているプラットフォーム: [Windows](https://downloads.teradata.com/download/tools/teradata-tools-and-utilities-windows-installation-package), [MacOS](https://downloads.teradata.com/download/tools/teradata-tools-and-utilities-mac-osx-installation-package), [Linux](https://downloads.teradata.com/download/tools/teradata-tools-and-utilities-linux-installation-package-0) (登録が必要です).

## TTUのインストール

<Tabs />


## サンプルデータを入手する

私たちは、非営利団体の米国納税申告書を扱います。非営利団体の納税申告書は公開データです。米国国税庁はそれを S3 バケットで公開しています。2020 年の申告書の概要を取得しましょう: `https://storage.googleapis.com/clearscape_analytics_demo_data/TPT/index_2020.csv`。ブラウザ、 `wget` 、または `curl` を使用してファイルをローカルに保存できます。

## データベースを作成する

Vantage でデータベースを作成しましょう。お気に入りの SQL ツールを使用して、次のクエリーを実行します。

``` sql
CREATE DATABASE irs
AS PERMANENT = 120e6, -- 120MB
    SPOOL = 120e6; -- 120MB
```

## TPT を実行する

ここで `TPT`を実行します。 `TPT` は、 Teradata Vantage でデータのロード、抽出、更新に使用できるコマンドライン ツールです。これらのさまざまな機能は、いわゆる `operators`に実装されています。たとえば、Vantage へのデータのロードは `Load` 演算子によって処理されます。 `Load` 演算子は、大量のデータを Vantage にアップロードするのに非常に効率的です。 `Load` 演算子には、高速化のためにいくつかの制限があります。空のテーブルにのみデータを入力できます。すでにデータが入力されているテーブルへの挿入はサポートされていません。セカンダリ インデックスを持つテーブルはサポートされていません。また、テーブルが `MULTISET` テーブルであっても、重複レコードは挿入されません。制限の完全なリストについては [Teradata® TPT リファレンス - ロード演算子 - 制限と制約](https://docs.teradata.com/r/Teradata-Parallel-Transporter-Reference/February-2022/Load-Operator/Usage-Notes/Normalized-Tables/Restrictions-and-Limitations)、を参照してください。

TPT には独自のスクリプト言語があります。この言語を使用すると、任意の SQLコマンドを使用してデータベースを準備し、入力ソースを宣言し、Vantage にデータを挿入する方法を定義できます。

CSV データを Vantage にロードするには、ジョブを定義して実行します。ジョブはデータベースを準備します。古いログ テーブルとエラー テーブルを削除し、ターゲット テーブルを作成します。次に、ファイルを読み取り、データをデータベースに挿入します。

* TPT に Vantage データベースへの接続方法を指示するジョブ変数ファイルを作成します。ファイル `jobvars.txt` を作成し、次のコンテンツを挿入します。 `host` をデータベースのホスト名に置き換えます。たとえば、ローカルの Vantage Express インスタンスを使用している場合は、 `127.0.0.1`を使用します。 `username` はデータベース ユーザー名、 `password` はデータベース パスワードです。準備ステップ (DDL) とロード ステップには独自の構成値があり、DDL とロード ステップの両方を構成するには構成値を 2 回入力する必要があることに注意してください。

    ``` bash , id="tpt_first_config", role="emits-gtm-events"
    TargetTdpId           = 'host'
    TargetUserName        = 'username'
    TargetUserPassword    = 'password'

    FileReaderDirectoryPath = ''
    FileReaderFileName      = 'index_2020.csv'
    FileReaderFormat        = 'Delimited'
    FileReaderOpenMode      = 'Read'
    FileReaderTextDelimiter = ','
    FileReaderSkipRows      = 1

    DDLErrorList = '3807'

    LoadLogTable    = 'irs.irs_returns_lg'
    LoadErrorTable1 = 'irs.irs_returns_et'
    LoadErrorTable2 = 'irs.irs_returns_uv'
    LoadTargetTable = 'irs.irs_returns'
    ```

* 次の内容のファイルを作成し、 `load.txt`として保存します。ジョブ ファイル内のコメントを参照して、その構造を理解してください。

    ``` bash
    DEFINE JOB file_load
    DESCRIPTION 'Load a Teradata table from a file'
    (
      /*
        Define the schema of the data in the csv file
      */
      DEFINE SCHEMA SCHEMA_IRS
        (
          in_return_id     VARCHAR(19),
          in_filing_type   VARCHAR(5),
          in_ein           VARCHAR(19),
          in_tax_period    VARCHAR(19),
          in_sub_date      VARCHAR(22),
          in_taxpayer_name VARCHAR(100),
          in_return_type   VARCHAR(5),
          in_dln           VARCHAR(19),
          in_object_id     VARCHAR(19)
        );

      /*
        In the first step, we are sending statements to remove old tables
        and create a new one.
        This step replies on configuration stored in `od_IRS` operator
      */
      STEP st_Setup_Tables
      (
        APPLY
          ('DROP TABLE ' || @LoadLogTable || ';'),
          ('DROP TABLE ' || @LoadErrorTable1 || ';'),
          ('DROP TABLE ' || @LoadErrorTable2 || ';'),
          ('DROP TABLE ' || @LoadTargetTable || ';'),
          ('CREATE TABLE ' || @LoadTargetTable || ' (
              return_id INT,
              filing_type VARCHAR(5) CHARACTER SET LATIN NOT CASESPECIFIC,
              ein INT,
              tax_period INT,
              sub_date VARCHAR(100) CHARACTER SET LATIN NOT CASESPECIFIC,
              taxpayer_name VARCHAR(100) CHARACTER SET LATIN NOT CASESPECIFIC,
              return_type VARCHAR(5) CHARACTER SET LATIN NOT CASESPECIFIC,
              dln BIGINT,
              object_id BIGINT
            )
            PRIMARY INDEX ( return_id );')
        TO OPERATOR ($DDL);
      );

      /*
        Finally, in this step we read the data from the file operator
        and send it to the load operator.
      */
      STEP st_Load_File
      (
        APPLY
          ('INSERT INTO ' || @LoadTargetTable || ' (
              return_id,
              filing_type,
              ein,
              tax_period,
              sub_date,
              taxpayer_name,
              return_type,
              dln,
              object_id
          ) VALUES (
              :in_return_id,
              :in_filing_type,
              :in_ein,
              :in_tax_period,
              :in_sub_date,
              :in_taxpayer_name,
              :in_return_type,
              :in_dln,
              :in_object_id
          );')
        TO OPERATOR ($LOAD)
        SELECT * FROM OPERATOR($FILE_READER(SCHEMA_IRS));
      );
    );
    ```

* ジョブを実行します:

    ``` bash
    tbuild -f load.txt -v jobvars.txt -j file_load
    ```

    実行が成功すると、以下のようなログが返されます。

    ``` bash
    Teradata Parallel Transporter Version 17.10.00.10 64-Bit
    The global configuration file '/opt/teradata/client/17.10/tbuild/twbcfg.ini' is used.
      Log Directory: /opt/teradata/client/17.10/tbuild/logs
      Checkpoint Directory: /opt/teradata/client/17.10/tbuild/checkpoint

    Job log: /opt/teradata/client/17.10/tbuild/logs/file_load-4.out
    Job id is file_load-4, running on osboxes
    Teradata Parallel Transporter SQL DDL Operator Version 17.10.00.10
    od_IRS: private log not specified
    od_IRS: connecting sessions
    od_IRS: sending SQL requests
    od_IRS: TPT10508: RDBMS error 3807: Object 'irs_returns_lg' does not exist.
    od_IRS: TPT18046: Error is ignored as requested in ErrorList
    od_IRS: TPT10508: RDBMS error 3807: Object 'irs_returns_et' does not exist.
    od_IRS: TPT18046: Error is ignored as requested in ErrorList
    od_IRS: TPT10508: RDBMS error 3807: Object 'irs_returns_uv' does not exist.
    od_IRS: TPT18046: Error is ignored as requested in ErrorList
    od_IRS: disconnecting sessions
    od_IRS: Total processor time used = '0.013471 Second(s)'
    od_IRS: Start : Thu Apr  7 20:56:32 2022
    od_IRS: End   : Thu Apr  7 20:56:32 2022
    Job step st_Setup_Tables completed successfully
    Teradata Parallel Transporter Load Operator Version 17.10.00.10
    ol_IRS: private log not specified
    Teradata Parallel Transporter DataConnector Operator Version 17.10.00.10
    op_IRS[1]: Instance 1 directing private log report to 'dtacop-root-368731-1'.
    op_IRS[1]: DataConnector Producer operator Instances: 1
    op_IRS[1]: ECI operator ID: 'op_IRS-368731'
    op_IRS[1]: Operator instance 1 processing file 'index_2020.csv'.
    ol_IRS: connecting sessions
    ol_IRS: preparing target table
    ol_IRS: entering Acquisition Phase
    ol_IRS: entering Application Phase
    ol_IRS: Statistics for Target Table:  'irs.irs_returns'
    ol_IRS: Total Rows Sent To RDBMS:      333722
    ol_IRS: Total Rows Applied:            333722
    ol_IRS: Total Rows in Error Table 1:   0
    ol_IRS: Total Rows in Error Table 2:   0
    ol_IRS: Total Duplicate Rows:          0
    op_IRS[1]: Total files processed: 1.
    ol_IRS: disconnecting sessions
    Job step st_Load_File completed successfully
    Job file_load completed successfully
    ol_IRS: Performance metrics:
    ol_IRS:     MB/sec in Acquisition phase: 9.225
    ol_IRS:     Elapsed time from start to Acquisition phase:   2 second(s)
    ol_IRS:     Elapsed time in Acquisition phase:   5 second(s)
    ol_IRS:     Elapsed time in Application phase:   3 second(s)
    ol_IRS:     Elapsed time from Application phase to end: < 1 second
    ol_IRS: Total processor time used = '0.254337 Second(s)'
    ol_IRS: Start : Thu Apr  7 20:56:32 2022
    ol_IRS: End   : Thu Apr  7 20:56:42 2022
    Job start: Thu Apr  7 20:56:32 2022
    Job end:   Thu Apr  7 20:56:42 2022
    ```


## `TPT` とNOSの比較

この場合、ファイルは S3 バケットにあります。つまり、ネイティブ オブジェクト ストレージ (NOS) を使用してデータを取り込むことができます。

``` sql
-- create an S3-backed foreign table
CREATE FOREIGN TABLE irs_returns_nos
    USING ( LOCATION('/s3/s3.amazonaws.com/irs-form-990/index_2020.csv') );

-- load the data into a native table
CREATE MULTISET TABLE irs_returns_nos_native
    (RETURN_ID, FILING_TYPE, EIN, TAX_PERIOD, SUB_DATE, TAXPAYER_NAME)
AS (
    SELECT RETURN_ID, FILING_TYPE, EIN, TAX_PERIOD, SUB_DATE, TAXPAYER_NAME FROM irs_returns_nos
) WITH DATA
NO PRIMARY INDEX;
```

NOS ソリューションは、追加のツールに依存しないため便利です。SQL のみを使用して実装できます。NOS タスクが AMP に委任され、並列実行されるため、特に多数の AMP を備えた Vantage デプロイではパフォーマンスが優れています。また、オブジェクト ストレージ内のデータを複数のファイルに分割すると、パフォーマンスがさらに向上する可能性があります。

## まとめ

このハウツーでは、大量のデータを Vantage に取り込む方法を示しました。 `TPT`を使用して、数十万件のレコードを数秒で Vantage に読み込みました。

## さらに詳しく
* [Teradata®TPTユーザー ガイド](https://docs.teradata.com/r/Teradata-Parallel-Transporter-User-Guide/February-2022)
* [Teradata®  TPT リファレンス](https://docs.teradata.com/r/Teradata-Parallel-Transporter-Reference/February-2022)
* [オブジェクトストレージに保存されたクエリーデータ](./nos.md)


import CommunityLinkPartial from '../_partials/community_link.mdx';

<CommunityLinkPartial />

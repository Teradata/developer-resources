---
id: create-first-project
title: 最初のプロジェクトを作成する
description: Jupyter ノートブックから簡単なワークフローを実行します。
sidebar_label: 最初のプロジェクトを作成する
sidebar_position: 2
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 最初のプロジェクトを作成する

プロジェクトは、Jupyter ノートブックからデータを探索および分析するための手段です。 

:::note
各プロジェクトには Git リポジトリがあります。 [理由を学ぶ](../glossary.md#project-repository).
 :::

最初のプロジェクトでは、当社が提供するデータを使用して、次の簡単なワークフローを完了します。

- プロジェクトを作成する
- エンジンをデプロイする
- データに接続してワークロードを実行する
- エンジンを停止する


## 始める前に

- AI Unlimited 管理者は、組織内で AI Unlimited を設定したユーザーです。管理者から次の項目を取得します。

  - [AI Unlimitedマネージャ](../glossary.md#ai-unlimited-manager)の IP アドレスまたは  ホスト名。

  - これらの環境変数:   
    <Tabs>
    <TabItem value="aws" label="AWS" default>
    `AWS_ACCESS_KEY_ID`、`AWS_SECRET_ACCESS_KEY`、および `AWS_SESSION_TOKEN`

    </TabItem>
    <TabItem value="azure" label="Azure">
    `ARM_SUBSCRIPTION_ID`、`ARM_CLIENT_ID`、および `ARM_CLIENT_SECRET`

    </TabItem>
    </Tabs> 

- あなたのプロフィールから、 [APIキーを取得する](./get-api-key.md)。 

- サンプル ワークロードを実行するには、 `salescenter.csv` ファイルが必要です。 [AI Unlimited GitHubリポジトリ](https://github.com/Teradata/ai-unlimited/tree/develop/examples/GetStarted/data)からファイルをダウンロードし、Amazon Simple Storage Service (S3) または Azure Blob Storage の場所にアップロードします。独自のファイルを使用する場合は、それに応じて例を変更します。


## 接続して最初のワークロードを実行する

:::tip
ノートブックで使用できるすべてのマジック コマンドの詳細については  、`%help`を実行してください。そのうちの 1 つの詳細については  、`%help <command>`を実行してください。 

または、AI Unlimited に固有の [マジック コマンド](./magic-commands.md) について学びます。 
:::

1. JupyterLab に接続し、ノートブックを開いて、AI Unlimited カーネルを選択します。

2. マネージャに接続します。
    ```bash
    %workspaces_config host=<ip_or_hostname>, apikey=<API_Key>, withtls=T 	
    ```

3. プロジェクトを作成します。
    ```bash
    %project_create project=<Project_Name>, env=<Cloud_Service_Provider>
    ```

4. クラウド サービス プロバイダの認証情報を保存するためのオブジェクト ストア認証を作成します。 

   `ACCESS_KEY_ID`、 `SECRET_ACCESS_KEY`、 `REGION` を実際の値に置き換えます。

    ```bash
    %project_auth_create name=<Authorization_Name>, project=<Project_Name>, key=<ACCESS_KEY_ID>, secret=<SECRET_ACCESS_KEY>, region=<REGION>
    ```

5. エンジンをデプロイする。

    サイズは、小、中、大、特大のいずれかです。デフォルトは小です。料金情報については、 [AWS](http://aws.amazon.com/marketplace/pp/prodview-2srvuo3mwqlig) または [Azure](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/teradata.ai-unlimited?tab=Overview) を参照してください。
    ```bash
    %project_engine_deploy name=<Project_Name>, size=<Size_of_Engine>
    ```
    デプロイ プロセスには数分かかります。パスワードが生成されます。

6. プロジェクトに接続します。
    ```bash
    %connect <Project_Name>
    ```
    接続が確立したら、生成されたパスワードを入力します。

7. サンプル ワークロードを実行します。

   :::note
    選択したデータベースに SalesCenter または SalesDemo という名前のテーブルがないことを確認してください。次の例の `Authorization_Name` と `salescenter.csv_file_location` の値を独自の値に置き換えてください。
    : :::

    a. 販売センターのデータを保存するテーブルを作成します。 
    ```sql
    DROP FOREIGN TABLE SalesCenter;

    CREATE MULTISET FOREIGN TABLE SalesCenter ,
    EXTERNAL SECURITY DEFINER TRUSTED <Authorization_Name>
    (
        Sales_Center_id INTEGER NOT NULL,
        Sales_Center_Name VARCHAR(255) CHARACTER SET LATIN NOT CASESPECIFIC
    )
    USING
    (
        LOCATION ('<salescenter.csv_file_location>')
        MANIFEST ('FALSE')
        ROWFORMAT  ('{"field_delimiter":",","record_delimiter":"\n","character_set":"LATIN"}')
        STOREDAS ('TEXTFILE')
        HEADER ('TRUE')
        STRIP_EXTERIOR_SPACES ('FALSE')
        STRIP_ENCLOSING_CHAR ('NONE')
    )
    NO PRIMARY INDEX;

    ```
     b. データが挿入されたことを確認します。
    ```sql
    SalesCenterから*を選択ORDER BY 1
    ```
    c. 販売デモデータを含むテーブルを作成します。
    ```sql
    DROP FOREIGN TABLE SalesDemo;
    CREATE MULTISET FOREIGN TABLE SalesDemo ,
    EXTERNAL SECURITY DEFINER TRUSTED <Authorization_Name>
    (
        Sales_Center_ID INTEGER NOT NULL,
        UNITS DECIMAL(15,4),
        SALES DECIMAL(15,2),
        "COST" DECIMAL(15,2)
    )
   USING
   (
       LOCATION ('<salescenter.csv_file_location>')
       MANIFEST ('FALSE')
       ROWFORMAT  ('{"field_delimiter":",","record_delimiter":"\n","character_set":"LATIN"}')
       STOREDAS ('TEXTFILE')
       HEADER ('FALSE')
       STRIP_EXTERIOR_SPACES ('FALSE')
       STRIP_ENCLOSING_CHAR ('"')
   )
   NO PRIMARY INDEX;
    ```
	d. 販売デモデータが正常に挿入されたことを確認します。

    ```sql
    SELECT * FROM SalesDemo ORDER BY sales
    ```
    接続のナビゲーターを開き、テーブルが作成されたことを確認します。テーブルの行カウントを実行して、データがロードされたことを確認します。

	e. データをグラフ化して結果を視覚化します。

    グラフに X 軸と Y 軸を指定します。

    ```bash
    %chart sales_center_name, sales, title=Sales Data
    ```
    f.	テーブルを削除します。
    ```sql
    DROP TABLE SalesCenter;
    DROP TABLE SalesDemo;
    ```

8. Git リポジトリ内のプロジェクト メタデータとオブジェクト定義 (スキーマ) をバックアップします。
	```bash
	%project_backup project=<Project_Name>
	```
   これによりプロジェクトがバックアップされますが、エンジンは停止されません。
   
9. 不要なエンジン リソースの支払いを避けるために、エンジンを停止します。
    ```bash
    %project_engine_suspend project=<Project_Name>
    ```
   これにより、プロジェクトがバックアップされ、エンジンが中断されます。通常、 `%project_engine_suspend`の直後に `%project_backup` を使用することはないでしょう。

おめでとうございます。最初のワークロードを実行しました。
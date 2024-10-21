---
sidebar_position: 3
id: airflow
author: Satish Chinthanippu
email: satish.chinthanippu@teradata.com
page_last_update: 2024 年 2 月 06 日
description: Teradata Vantage で Apache Airflow を使用します。
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics, elt, airflow, workflow.]
---

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'
import CommunityLink from '../_partials/community_link.mdx'

# Teradata Vantage で Apache Airflow を使用する

## 概要
このチュートリアルでは、Teradata Vantage で Airflow を使用する方法を説明します。Airflow は Ubuntu システムにインストールされます。

## 前提条件
* Ubuntu22.x
* Teradata Vantageインスタンスへのアクセス。
    <ClearscapeDocsNote />
* Python **3.8**、**3.9**、**3.10**、または **3.11** がインストールされていること。
* ピップ



## Apache Airflowをインストールする

1. AIRFLOW_HOME 環境変数を設定します。Airflow にはホーム ディレクトリが必要で、デフォルトでは ~/airflow を使用しますが、必要に応じて別の場所を設定することもできます。AIRFLOW_HOME 環境変数は、Airflow に必要な場所を通知するために使用されます。
    ```bash
    export AIRFLOW_HOME=~/airflow
    ```

2. PyPIリポジトリから `apache-airflow` の安定版バージョン2. 8.1をインストールします。
    ```bash
    AIRFLOW_VERSION=2.8.2
    PYTHON_VERSION="$(python --version | cut -d " " -f 2 | cut -d "." -f 1-2)"
    CONSTRAINT_URL="https://raw.githubusercontent.com/apache/airflow/constraints-${AIRFLOW_VERSION}/constraints-${PYTHON_VERSION}.txt"
    pip install "apache-airflow==${AIRFLOW_VERSION}" --constraint "${CONSTRAINT_URL}"
    ```

3. Airflow Teradataプロバイダの安定バージョンをPyPIリポジトリからインストールします。
    ```bash
    pip install "apache-airflow-providers-teradata"
    ```

    :::note
    セキュリティ上の理由から、Airflow UI、API、CLI 全体でテスト接続機能はデフォルトで無効になっています。
    この機能の可用性は、Airflow 構成のコア セクション ($AIRFLOW_HOME/airflow.cfg) の test_connection フラグによって制御するか、Airflow サーバーを起動する前に以下の環境変数を定義することで制御できます。
    エクスポート AIRFLOW__CORE__TEST_CONNECTION=有効
    :::    

## Airflow をスタンドアロンで開始する

1. Airflow をスタンドアロンで実行します。
    ```bash
    airflow standalone
    ````
2. Airflow UI にアクセスします。ブラウザで https://localhost:8080 にアクセスし、ターミナルに表示される管理者アカウントの詳細を使用してログインします。


Teradata 接続は、Airflow で次の方法で定義できます。

1. Airflow Web UIの使用
2. 環境変数の使用

## Airflow Web UIでTeradata接続を定義する

1. UI の「管理」->「接続」セクションを開きます。「作成」リンクをクリックして、新しい接続を作成します。
    ![Airflow管理ドロップダウン](../images/airflow-connection.png)

2. 新しい接続ページに入力の詳細を入力します。
    ![Airflowの新しい接続](../images/airflow-newconnection.png)
    * 接続ID: Teradata接続の一意のID。
    * 接続タイプ: システムのタイプ。Teradata を選択します。
    * データベース サーバー URL (必須): 接続する Teradata インスタンスのホスト名。
    * データベース(オプション): 接続するデータベースの名前を指定します。
    * ログイン(必須): 接続するユーザー名を指定します。
    * パスワード(必須): 接続するためのパスワードを指定します。
    * 「Test and Save」をクリックします。

## 環境変数でTeradata接続を定義する
Airflow 接続は、以下のいずれかの形式で環境変数に定義できます。

1. JSON形式
2. URI 形式

    :::note
    命名規則は AIRFLOW_CONN_CONN_ID で、すべて大文字です (CONN を囲む単一のアンダースコアに注意してください)。
    したがって、接続IDがteradata_conn_idの場合、変数名はAIRFLOW_CONN_TERADATA_CONN_IDになります。
    :::


## JSON形式の例


```bash
export AIRFLOW_CONN_TERADATA_CONN_ID='{
    "conn_type": "teradata",
    "login": "teradata_user",
    "password": "my-password",
    "host": "my-host",
    "schema": "my-schema",
    "extra": {
        "tmode": "TERA",
        "sslmode": "verify-ca"
    }
}'
```

## URI 形式の例

```bash
export AIRFLOW_CONN_TERADATA_CONN_ID='teradata://teradata_user:my-password@my-host/my-schema?tmode=TERA&sslmode=verify-ca'
```

Airflow での Teradata 接続の詳細については [Teradata Hook](https://airflow.apache.org/docs/apache-airflow-providers-teradata/stable/connections/teradata.html) 、を参照してください。

## AirflowでDAGを定義する

1. Airflow では、DAG は Python コードとして定義されます。
2. DAG_FOLDER - $AIRFLOW_HOME/files/dags ディレクトリの下に、sample.py のような Python ファイルとして DAG を作成します。

```sql
from datetime import datetime
from airflow import DAG
from airflow.providers.teradata.operators.teradata import TeradataOperator
CONN_ID = "Teradata_TestConn"
with DAG(
    dag_id="example_teradata_operator",
    max_active_runs=1,
    max_active_tasks=3,
    catchup=False,
    start_date=datetime(2023, 1, 1),
) as dag:
    create = TeradataOperator(
        task_id="table_create",
        conn_id=CONN_ID,
        sql="""
            CREATE TABLE my_users,
            FALLBACK (
                user_id decimal(10,0) NOT NULL GENERATED ALWAYS AS IDENTITY (
                    START WITH 1
                    INCREMENT BY 1
                    MINVALUE 1
                    MAXVALUE 2147483647
                    NO CYCLE),
                user_name VARCHAR(30)
            ) PRIMARY INDEX (user_id);
        """,
    )
```

## DAGをロードする

Airflowは、PythonソースファイルからDAGをロードし、設定されたDAG_FOLDER-$AIRFLOW_HOME/files/DAGsディレクトリ内で検索されます。

## DAGを実行する
DAG は次の 2 つの方法のいずれかで実行されます。

1. 手動または API 経由でトリガーされた場合
2. DAGの一部として定義されたスケジュールに従って
`example_teradata_operator` は手動でトリガーするように定義されています。スケジュールを定義するには、有効な [Crontab](https://en.wikipedia.org/wiki/Cron) スケジュール値をスケジュール引数に渡すことができます。

```python
with DAG(
  dag_id="my_daily_dag",
  schedule="0 0 * * *"
  ) as dag:
```

## まとめ

このチュートリアルでは、Airflow と Airflow Teradata プロバイダを Teradata Vantage インスタンスで使用する方法を説明しました。提供されているサンプル DAG は、接続 UI で定義された Teradata Vantage インスタンスに `my_users` テーブルを作成します。

## さらに詳しく
* [Airflow のドキュメンテーション](https://airflow.apache.org/docs/apache-airflow/stable/start.html)
* [Airflow DAG](https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/dags.html)


<CommunityLink />


---
sidebar_position: 6
author: Mohammmad Taha Wahab、Mohammad Harris Mansur、Will Fleury
email: mohammadtaha.wahab@teradata.com 、 mohammadharris.mansur@teradata.com 、will.fleury@teradata.com
page_last_update: 2023 年 1 月 5 日
description: Feast Enterprise Feature Store コネクタとTeradata
keywords: [data warehouses, analytics, teradata, vantage, time series, business intelligence, enterprise analytics, feature store, Feast, connector]
---

# Teradata VantageとFEASTで拡張性の高いフィーチャーストアを実現

## はじめに

Feast の Teradata 用コネクタは、すべての機能をサポートする完全な実装であり、Teradata Vantage をオンラインおよびオフライン ストアとして使用します。

## 前提条件

Teradata Vantageインスタンスへのアクセス。

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'

<ClearscapeDocsNote />


## 概要
このハウツーは、Feastの用語を知っていることを前提としています。復習が必要な場合は、公式の [FEAST ドキュメント](https://docs.feast.dev)

このドキュメントでは、開発者が `Teradata's offline and online store` を Feast と統合する方法を説明します。Teradata のオフライン ストアを使用すると、ユーザーは基盤となる任意のデータ ストアをオフライン機能ストアとして使用できます。モデル トレーニング用にオフライン ストアから機能を取得し、モデル推論時に使用するためにオンライン機能ストアに具体化できます。

一方、オンラインストアは、低レイテンシで機能を提供するために使用されます。 `materialize` コマンドを使用して、データソース（またはオフラインストア）からオンラインストアに機能値をロードできます。

 `feast-teradata` ライブラリは、Teradata のサポートを以下のように追加します。

* `OfflineStore`
* `OnlineStore`

さらに、レジストリ (カタログ) として Teradata を使用することは、 `registry_type: sql` によってすでにサポートされており、例に含まれています。つまり、すべてが Teradata に配置されていることになります。ただし、要件、インストールなどに応じて、必要に応じて他のシステムと組み合わせることができます。

## はじめに

まず、 `feast-teradata` ライブラリをインストールします。
``` bash , id="feast_pip_install", role="emits-gtm-events"
pip install feast-teradata
```

標準ドライバのデータセットを使用して、Teradata で簡単な feast セットアップを作成しましょう。このコマンドはコア feast ライブラリの一部であるテンプレートに対してのみ機能するため、 `feast init` は使用できません。このライブラリは最終的に feast コアに統合される予定ですが、現時点では、この特定のタスクには次の cli コマンドを使用する必要があります。その他のすべての `feast` cli コマンドは期待どおりに機能します。

``` bash
feast-td init-repo
```

次に、Teradata システムに必要な情報の入力を求められ、サンプル データセットがアップロードされます。上記のコマンドを実行するときにリポジトリ名 `demo` を使用したと仮定します。リポジトリ ファイルは `test_workflow.py`というファイルと一緒に見つかります。この `test_workflow.py` を実行すると、レジストリ、OfflineStore、OnlineStore として Teradata を使用した完全なワークフローが実行されます。

``` bash
demo/
    feature_repo/
        driver_repo.py
        feature_store.yml
    test_workflow.py
```

 `demo/feature_repo` ディレクトリ内から、次の feast コマンドを実行して、リポジトリ定義をレジストリに適用 (インポート/更新) します。このコマンドを実行すると、teradata データベース内のレジストリ メタデータ テーブルを確認できるようになります。

``` bash
feast apply
```

feast UI でレジストリ情報を表示するには、次のコマンドを実行します。デフォルトでは 5 秒ごとにポーリングするため、--registry_ttl_sec が重要であることに注意してください。

``` bash
feast ui --registry_ttl_sec=120
```

## オフラインストアの設定
``` yaml

project: <name of project>
registry: <registry>
provider: local
offline_store:
   type: feast_teradata.offline.teradata.TeradataOfflineStore
   host: <db host>
   database: <db name>
   user: <username>
   password: <password>
   log_mech: <connection mechanism>

```

## レポの定義

以下はdefinition.pyの例で、
エンティティ、ソース コネクタ、およびフィーチャ ビューを設定します。

次に、それぞれのコンポーネントを説明します。

* `TeradataSource:` Teradata (Enterprise または Lake) に格納された機能、または Teradata (NOS, QueryGrid) からの外部テーブルを介してアクセス可能な機能のデータソース

* `Entity:` 意味的に関連するフィーチャーの集合体

* `Feature View:` フィーチャビューは、特定のデータソースからのフィーチャデータのグループです。フィーチャビューを使用すると、フィーチャとそのデータソースを一貫して定義できるため、プロジェクト全体でフィーチャグループを再利用できるようになります。


``` python
driver = Entity(name="driver", join_keys=["driver_id"])
project_name = yaml.safe_load(open("feature_store.yaml")]("project"]

driver_stats_source = TeradataSource(
    database=yaml.safe_load(open("feature_store.yaml")]("offline_store"]["database"],
    table=f"{project_name}_feast_driver_hourly_stats",
    timestamp_field="event_timestamp",
    created_timestamp_column="created",
)

driver_stats_fv = FeatureView(
    name="driver_hourly_stats",
    entities=[driver],
    ttl=timedelta(weeks=52 * 10),
    schema=[
        Field(name="driver_id", dtype=Int64),
        Field(name="conv_rate", dtype=Float32),
        Field(name="acc_rate", dtype=Float32),
        Field(name="avg_daily_trips", dtype=Int64),
    ],
    source=driver_stats_source,
    tags={"team": "driver_performance"},
)

```

## オフラインストア利用状況

オフライン ストアをテストするには、以下で説明する 2 つの方法があります。ただし、最初に実行する必要がある必須の手順がいくつかあります。

ここで、過去 `60` 日間にイベントが発生したエンティティ (人口) のみを使用して、トレーニング用にいくつかの機能をバッチ読み取りしてみましょう。使用する述語 (フィルタ) は、指定されたトレーニング データセットのエンティティ (人口) 選択に関連するものであれば何でもかまいません。 `event_timestamp` は例示のみを目的としています。

``` python

from feast import FeatureStore
store = FeatureStore(repo_path="feature_repo")
training_df = store.get_historical_features(
    entity_df=f"""
            SELECT
                driver_id,
                event_timestamp
            FROM demo_feast_driver_hourly_stats
            WHERE event_timestamp BETWEEN (CURRENT_TIMESTAMP - INTERVAL '60' DAY) AND CURRENT_TIMESTAMP
        """,
    features=[
        "driver_hourly_stats:conv_rate",
        "driver_hourly_stats:acc_rate",
        "driver_hourly_stats:avg_daily_trips"
    ],
).to_df()
print(training_df.head())
```

 `feast-teradata` ライブラリを使用すると、feast API と機能の完全なセットを使用できます。実行できるさまざまな機能の詳細については、公式の feast [クイックスタート](https://docs.feast.dev/getting-started/quickstart) を参照してください。

## オンラインストア

Feast は、モデル推論時に低レイテンシの検索ができるように、データをオンライン ストアに具体化します。通常、オンライン ストアにはキー値ストアが使用されますが、リレーショナル データベースもこの目的に使用できます。

OnlineStoreクラスのコントラクトを実装したクラスを作成することで、ユーザは独自のオンラインストアを開発することができます。

## オンラインストアの設定
``` yaml
project: <name of project>
registry: <registry>
provider: local
offline_store:
   type: feast_teradata.offline.teradata.TeradataOfflineStore
   host: <db host>
   database: <db name>
   user: <username>
   password: <password>
   log_mech: <connection mechanism>
```

## オンラインストアの利用状況
オンラインストアをテストする前に、いくつか必須の手順があります。

コマンド `materialize_incremental` は、オンライン ストアで機能を段階的に実現するために使用されます。追加する新しい機能がない場合、このコマンドは基本的に何も行いません。 feast `materialize_incremental`の場合、開始時刻は現在 - ttl (機能ビューで定義した ttl) または最新の実現時刻のいずれかになります。機能を少なくとも 1 回実現した場合、後続の実現では、以前の実現時にストアに存在しなかった機能のみが取得されます。

``` bash
CURRENT_TIME=$(date +'%Y-%m-%dT%H:%M:%S')
feast materialize-incremental $CURRENT_TIME
```

次に、オンライン機能を取得する際に、2 つのパラメーター `features` と `entity_rows`を使用します。 `features` パラメーターはリストであり、 `df_feature_view`内に存在する任意の数の機能を取得できます。上記の例では、4 つの機能がすべて存在していますが、4 つ未満になることもあります。次に、 `entity_rows` パラメーターもリストであり、 `{feature_identifier_column: value_to_be_fetched}`形式の辞書を取得します。この場合、列 driver_id は、エンティティ ドライバのさまざまな行を一意に識別するために使用されます。現在、driver_id が 5 である機能の値を取得しています。次の形式を使用して、このような行を複数取得することもできます: `[{driver_id: val_1}, {driver_id: val_2}, .., {driver_id: val_n}] [{driver_id: val_1}, {driver_id: val_2}, .., {driver_id: val_n}]`


``` python
entity_rows = [
        {
            "driver_id": 1001,
        },
        {
            "driver_id": 1002,
        },
    ]
features_to_fetch = [
            "driver_hourly_stats:acc_rate",
            "driver_hourly_stats:conv_rate",
            "driver_hourly_stats:avg_daily_trips"
        ]
returned_features = store.get_online_features(
    features=features_to_fetch,
    entity_rows=entity_rows,
).to_dict()
for key, value in sorted(returned_features.items()):
    print(key, " : ", value)
```

## SQLレジストリの設定方法

もうひとつ重要なことは、SQL登録です。まず、ユーザー名、パスワード、データベース名などを使って接続文字列を作るパス変数を作り、それを使ってTeradataのDatabaseへの接続を確立しています。
``` python
path = 'teradatasql://'+ teradata_user +':' + teradata_password + '@'+host + '/?database=' + teradata_database + '&LOGMECH=' + teradata_log_mech
```

これにより、データベースに以下のようなテーブルが作成されます。

* Entities (entity_name,project_id,last_updated_timestamp,entity_proto)

* Data_sources (data_source_name,project_id,last_updated_timestamp,data_source_proto)

* Feature_views (feature_view_name,project_id,last_updated_timestamp,materialized_intervals,feature_view_proto,user_metadata)

* Request_feature_views (feature_view_name,project_id,last_updated_timestamp,feature_view_proto,user_metadata)

* Stream_feature_views (feature_view_name,project_id,last_updated_timestamp,feature_view_proto,user_metadata)

* managed_infra (infra_name, project_id, last_updated_timestamp, infra_proto)

* validation_references (validation_reference_name, project_id, last_updated_timestamp, validation_reference_proto)

* saved_datasets (saved_dataset_name, project_id, last_updated_timestamp, saved_dataset_proto)

* feature_services (feature_service_name, project_id, last_updated_timestamp, feature_service_proto)

* on_demand_feature_views (feature_view_name, project_id, last_updated_timestamp, feature_view_proto, user_metadata)

さらに、完全な（ただし、実際のものではない）エンドツーエンドのワークフロー例を確認したい場合は、 `demo/test_workflow.py` スクリプトを参照してください。これは、完全な feast 機能をテストするために使用されます。

エンタープライズ フィーチャー ストアは、データ分析の重要な段階で価値獲得プロセスを加速します。生産性を向上させ、製品を市場に投入するまでの時間を短縮します。Teradata を Feast と統合することで、フィーチャー ストア内で Teradata の非常に効率的な並列処理を使用できるようになり、パフォーマンスが向上します。

## さらに詳しく

* [Feast ののスケーラブルなレジストリ （英語）](https://docs.feast.dev/tutorials/using-scalable-registry)
* [Teradata Vantage と FEAST で拡張性の高い機能ストアを実現する （英語）](https://medium.com/teradata/enabling-highly-scalable-feature-store-with-teradata-vantage-and-feast-e01008fa8fdb)

import CommunityLinkPartial from '../_partials/community_link.mdx';

<CommunityLinkPartial />

---
id: dbt
sidebar_position: 4
author: Adam Tworkiewicz
email: adam.tworkiewicz@teradata.com
page_last_update: 2023 年 7 月 12 日
description: Teradata Vantage では dbt (データ構築ツール) を使用します。
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics, elt, dbt.]
---

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'
import CommunityLink from '../_partials/community_link.mdx'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Teradata VantageでData Build Tool（dbt）を使用する

## 概要

このチュートリアルでは、Teradata Vantage で dbt (データ ビルド ツール) を使用する方法を説明します。これはオリジナルの [dbt Jaffleショップチュートリアル](https://github.com/dbt-labs/jaffle_shop-dev)に基づいています。いくつかのモデルは、Vantage でサポートされている SQL 方言に合わせて調整されています。

## 前提条件

* Teradata Vantageインスタンスへのアクセス。

    <ClearscapeDocsNote />

* Python **3.7**、**3.8**、**3.9**、**3.10**、または **3.11** がインストールされていること。

## dbtをインストールする

1. チュートリアル リポジトリのクローンを作成し、プロジェクト ディレクトリに移動します。
    ``` bash
    git clone https://github.com/Teradata/jaffle_shop-dev.git jaffle_shop
    cd jaffle_shop
    ```

2. dbt とその依存関係を管理するための新しい Python 環境を作成します。 
    
    環境を有効化します。
    
```mdx-code-block
<Tabs>
  <TabItem value="Windows" label="Windows" default>
    Run in Powershell:
    ```bash
    gcloud compute instances create teradata-vantage-express `
    --zone=us-central1-a `
    --machine-type=n2-custom-4-8192 `
    --create-disk=boot=yes,device-name=ve-disk,image-project=ubuntu-os-cloud,image-family=ubuntu-2004-lts,size=70,type=pd-balanced `
    --enable-nested-virtualization `
    --tags=ve
    ```
  </TabItem>
  <TabItem value="MacOS" label="MacOS">
    ```bash
    gcloud compute instances create teradata-vantage-express \
  --zone=us-central1-a \
  --machine-type=n2-custom-4-8192 \
  --create-disk=boot=yes,device-name=ve-disk,image-project=ubuntu-os-cloud,image-family=ubuntu-2004-lts,size=70,type=pd-balanced \
  --enable-nested-virtualization \
  --tags=ve
    ```
  </TabItem>
  <TabItem value="Linux" label="Linux">
    ```bash
    gcloud compute instances create teradata-vantage-express \
  --zone=us-central1-a \
  --machine-type=n2-custom-4-8192 \
  --create-disk=boot=yes,device-name=ve-disk,image-project=ubuntu-os-cloud,image-family=ubuntu-2004-lts,size=70,type=pd-balanced \
  --enable-nested-virtualization \
  --tags=ve
    ```
  </TabItem>
</Tabs>
```

3. `dbt-teradata`モジュールをインストールします。dbtのコアモジュールも依存関係のあるモジュールとして含まれているので、別にインストールする必要はありません。
    :::note
    **dbt 依存関係**

    `dbt-core` モジュールは、dbt-teradata のバージョン 1.7.x まで依存関係として含まれていました。 `dbt-teradata` 1.8.0 以降では、 `dbt-core` は依存関係としてインストールされません。したがって、 `dbt-teradata`のインストールに加えて、 `dbt-core` を明示的にインストールする必要があります。dbt アダプターを `dbt-core` から分離する方法の詳細については、https://github.com/dbt-labs/dbt-core/discussions/9171 を参照してください。
    :::

    ```bash
    pip install dbt-teradata
    ```

## dbtを構成する
Vantage データベースに接続するように dbt を構成します。以下の場所に `profiles.yml` ファイルを作成します。
```mdx-code-block
<Tabs>
  <TabItem value="Windows" label="Windows" default>
    Run in Powershell:
    ```bash
    c:\Users<user name>.dbt\profiles.yml
    ```
  </TabItem>
  <TabItem value="MacOS" label="MacOS">
    ```bash
    ~/.dbt/profiles.yml
    ```
  </TabItem>
  <TabItem value="Linux" label="Linux">
    ```bash
    ~/.dbt/profiles.yml
    ```
  </TabItem>
</Tabs>
```

次の設定を `profile.yml` ファイルに追加します。 `<host>`、 `<user>`、 `<password>` を Teradata Vantage インスタンスに合わせて調整します。


:::note
**データベースを設定する**

以下の dbt プロファイルは、 `jaffle_shop` というデータベースを指します。Teradata Vantage インスタンスにデータベースが存在しない場合は、作成されます。また、 `schema` 値を変更して、インスタンス内の既存のデータベースを指すようにすることもできます。
:::

```bash
jaffle_shop:
  outputs:
    dev:
      type: teradata
      host: <host>
      user: <user>
      password: <password>
      logmech: TD2
      schema: jaffle_shop
      tmode: ANSI
      threads: 1
      timeout_seconds: 300
      priority: interactive
      retries: 1
  target: dev
```

プロファイル ファイルが適切に配置されたので、セットアップを検証できます。

```bash
dbt debug
```

デバッグ コマンドがエラーを返した場合は、 `profiles.yml` の内容に問題がある可能性があります。

## Jaffle Shopウェアハウスについて

`jaffle_shop` は、アプリ データベースの生データを、分析可能な顧客データと注文データを含むディメンションモデルに変換します。

アプリからの生データは、顧客、注文、支払いで構成され、以下のエンティティリレーションシップ図が示されます。

![](../images/dbt1.svg)

dbt は、これらの生データ テーブルを取得して、分析ツールにより適した以下のディメンションモデルを構築します。

![](../images/dbt2.svg)

## dbtを実行する

### 生データテーブルを作成する

実際には、Segment、Stitch、Fivetran などのプラットフォームや、その他の ETL ツールから生データを取得します。この場合は、dbt の `seed` 機能を使用して、csv ファイルからテーブルを作成します。csv ファイルは `./data` ディレクトリにあります。各 csv ファイルから 1 つのテーブルが生成されます。dbt はファイルを検査し、型推論を行って、列に使用するデータ型を決定します。

```bash
dbt seed
```

 `jaffle_shop` データベースに `raw_customers`、 `raw_orders`、 `raw_payments`の 3 つのテーブルが表示されます。テーブルには csv ファイルからのデータが入力されているはずです。

### ディメンションモデルを作成しする

生のテーブルができたので、dbt にディメンション モデルを作成するように指示できます。
```bash
dbt run
```

では、ここで何が起こったのでしょうか。dbt は `CREATE TABLE/VIEW FROM SELECT` SQL を使用して追加のテーブルを作成しました。最初の変換では、dbt は生のテーブルを取得し、 `customer_orders`、 `order_payments`、 `customer_payments`と呼ばれる非正規化された結合テーブルを構築しました。これらのテーブルの定義は `./marts/core/intermediate`にあります。
2 番目のステップでは、dbt は `dim_customers` および `fct_orders` テーブルを作成しました。これらは、BI ツールに公開するディメンション モデル テーブルです。

### データをテストする

dbt はデータに複数の変換を適用しました。ディメンション モデル内のデータが正しいことをどのように確認すればよいでしょうか。dbt を使用すると、データに対してテストを定義して実行できます。テストは `./marts/core/schema.yml`で定義されます。ファイルには、すべての関係の各列が記述されています。各列には `tests` キーの下に複数のテストを設定できます。たとえば、 `fct_orders.order_id` 列には一意の null 以外の値が含まれることが予想されます。生成されたテーブル内のデータがテスト条件を満たしていることを検証するには、次を実行します。

```bash
dbt test
```

### ドキュメントを生成する

このモデルは、ほんの数個のテーブルで構成されています。データ ソースがさらに多く、次元モデルがはるかに複雑になるシナリオを想像してみてください。生データと、Data Vault 2.0 の原則に従った次元モデルの間に中間領域を設けることもできます。入力、変換、出力を何らかの方法で文書化できれば便利ではないでしょうか。dbt では、構成ファイルからドキュメントを生成できます。

```bash
dbt docs generate
```

これにより、`./target` ディレクトリにhtmlファイルが生成されます。

独自のサーバーを起動してドキュメントを参照できます。次のコマンドはサーバーを起動し、ドキュメントのランディング ページを含むブラウザー タブを開きます。

```bash
dbt docs serve
```

## まとめ

このチュートリアルでは、Teradata Vantage で dbt を使用する方法を示しました。サンプル プロジェクトは、生データを取得してディメンション データ マートを生成します。複数の dbt コマンドを使用して、csv ファイルからテーブルにデータを入力し (`dbt seed`)、モデルを作成し (`dbt run`)、データをテストし (`dbt test`)、モデル ドキュメントを生成して提供しました (`dbt docs generate`、 `dbt docs serve`)。

## さらに詳しく
* [dbt のドキュメント](https://docs.getdbt.com/docs/)
* [dbt-teradata プラグインのドキュメント](https://github.com/Teradata/dbt-teradata)

<CommunityLink />

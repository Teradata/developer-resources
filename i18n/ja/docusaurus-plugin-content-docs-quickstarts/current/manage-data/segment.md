---
sidebar_position: 15
id: segment
author: Adam Tworkiewicz
email: adam.tworkiewicz@teradata.com
page_last_update: 2022 年 1 月 18 日
description: Twilio Segmentからのイベントを Teradata Vantage に保存します。
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics, customer data platform, cdp, segment]
---

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'
import CommunityLink from '../_partials/community_link.mdx'
import tabsDBT from '../_partials/tabsDBT.mdx'

# Twilio Segmentからイベントを保存する方法

## 概要
このソリューションは、Twilio Segment からのイベントをリッスンし、データを Teradata Vantage インスタンスに書き込みます。この例では Google Cloud を使用していますが、任意のクラウド プラットフォームに翻訳できます。

## アーキテクチャ

このソリューションでは、Twilio Segment が生のイベント データを Google Cloud Pub/Sub に書き込みます。Pub/Sub はイベントを Cloud Run アプリケーションに転送します。Cloud Run アプリはデータを Teradata Vantage データベースに書き込みます。これは、VM の割り当てや管理を必要としないサーバーレス ソリューションです。

![Segment Google Cloud フローダイアグラム](../images/segment.flow.diagram.png)

## デプロイメント

### 前提条件
1. Google Cloud アカウント。アカウントをお持ちでない場合は、https://console.cloud.google.com/ で作成できます。
2. `gcloud` インストール済み。https://cloud.google.com/sdk/docs/install をご覧ください。
3. Google Cloud Run が通信できる Teradata Vantage インスタンス。

<ClearscapeDocsNote />

### 構築とデプロイ

1. サンプル リポジトリのクローンを作成します。
```
git clone git@github.com:Teradata/segment-integration-tutorial.git
```

2. リポジトリには、データベースを設定する `segment.sql` ファイルが含まれています。お気に入りの SQL IDE、 [Teradata Studio](https://downloads.teradata.com/download/tools/teradata-studio) 、または `bteq` と呼ばれるコマンド ライン ツールを使用して、Vantage db にスクリプトを実行します ( [Windows](https://downloads.teradata.com/node/7314)、[]、 [Linux](https://downloads.teradata.com/node/200442)、 [macOS](https://downloads.teradata.com/node/201214)のダウンロード)。
SQL スクリプトは、`Segment` と呼ばれる新しいデータベースと、セグメント イベントを保存するためのテーブルのセットを作成します。

3. デフォルトのプロジェクトとリージョンを設定します。
```
gcloud config set project <PROJECT_ID>
gcloud config set compute/region <REGION>
```

4. プロジェクト ID と番号を取得します。これは後続の手順で必要になります。
```
export PROJECT_ID=$(gcloud config get-value project)

export PROJECT_NUMBER=$(gcloud projects list \
  --filter="$(gcloud config get-value project)" \
  --format="value(PROJECT_NUMBER)")
```

5. 必要な Google Cloud サービスを有効にします。
```
gcloud services enable cloudbuild.googleapis.com containerregistry.googleapis.com run.googleapis.com secretmanager.googleapis.com pubsub.googleapis.com
```

6. アプリケーションを構築します。
```
gcloud builds submit --tag gcr.io/$PROJECT_ID/segment-listener
```

7. Segment と共有する API キーを定義します。API キーを Google Cloud Secret Manager に保存します。
```
gcloud secrets create VANTAGE_USER_SECRET
echo -n 'dbc' > /tmp/vantage_user.txt
gcloud secrets versions add VANTAGE_USER_SECRET --data-file=/tmp/vantage_user.txt

gcloud secrets create VANTAGE_PASSWORD_SECRET
echo -n 'dbc' > /tmp/vantage_password.txt
gcloud secrets versions add VANTAGE_PASSWORD_SECRET --data-file=/tmp/vantage_password.txt
```

8. Vantage にセグメント データを書き込むアプリケーションは Cloud Run を使用します。まず、Cloud Run がシークレットにアクセスできるようにする必要があります。
```
gcloud projects add-iam-policy-binding $PROJECT_ID \
     --member=serviceAccount:$PROJECT_NUMBER-compute@developer.gserviceaccount.com \
     --role=roles/secretmanager.secretAccessor
```

9. アプリを Cloud Run にデプロイします ( `<VANTAGE_HOST>` を Teradata Vantage データベースのホスト名または IP に置き換えます)。2 番目のエクスポート ステートメントは、後続のコマンドに必要なサービス URL を保存します。
```
gcloud run deploy --image gcr.io/$PROJECT_ID/segment-listener segment-listener \
  --region $(gcloud config get-value compute/region) \
  --update-env-vars VANTAGE_HOST=35.239.251.1 \
  --update-secrets 'VANTAGE_USER=VANTAGE_USER_SECRET:1, VANTAGE_PASSWORD=VANTAGE_PASSWORD_SECRET:1' \
  --no-allow-unauthenticated

export SERVICE_URL=$(gcloud run services describe segment-listener --platform managed --region $(gcloud config get-value compute/region) --format 'value(status.url)')
```

10. Segmentからイベントを受信する Pub/Sub トピックを作成します。
```
gcloud pubsub topics create segment-events
```

11. Pub/Sub が Cloud Run アプリを呼び出すために使用するサービス アカウントを作成します。
```
gcloud iam service-accounts create cloud-run-pubsub-invoker \
     --display-name "Cloud Run Pub/Sub Invoker"
```

12. サービス アカウントに Cloud Run を呼び出すアクセス権を付与します。
```
gcloud run services add-iam-policy-binding segment-listener \
  --region $(gcloud config get-value compute/region) \
  --member=serviceAccount:cloud-run-pubsub-invoker@$PROJECT_ID.iam.gserviceaccount.com \
  --role=roles/run.invoker
```

13. Pub/Sub がプロジェクト内に認証トークンを作成できるようにします。
```
gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member=serviceAccount:service-$PROJECT_NUMBER@gcp-sa-pubsub.iam.gserviceaccount.com \
  --role=roles/iam.serviceAccountTokenCreator
```

14. サービス アカウントを使用してPub/Subサブスクリプションを作成します。
```
gcloud pubsub subscriptions create segment-events-cloudrun-subscription --topic projects/$PROJECT_ID/topics/segment-events \
   --push-endpoint=$SERVICE_URL \
   --push-auth-service-account=cloud-run-pubsub-invoker@$PROJECT_ID.iam.gserviceaccount.com \
   --max-retry-delay 600 \
   --min-retry-delay 30
```

15. Segment がトピックに公開できるようにします。これを行うには、https://console.cloud.google.com/cloudpubsub/topic/list でプロジェクトに `pubsub@segment-integrations.iam.gserviceaccount.com` ロール `Pub/Sub Publisher` を割り当てます。詳細については [セグメントマニュアル](https://segment.com/docs/connections/destinations/catalog/google-cloud-pubsub/#authentication) を参照してください。

16. Segment で Google Cloud Pub/Sub の宛先を設定します。完全なトピック `projects/<PROJECT_ID>/topics/segment-events` を使用し、すべての Segment イベント タイプ ( `*` 文字を使用) をトピックにマッピングします。

## 試してみる

1. Segment のイベント テスター機能を使用して、サンプル ペイロードをトピックに送信します。サンプル データが Vantage に保存されていることを確認します。

## 制約

* この例では、アプリを単一のリージョンにデプロイする方法を示します。多くの場合、この設定では十分な稼働時間が保証されません。Cloud Run アプリは、グローバル ロードバランサの背後にある複数のリージョンにデプロイする必要があります。

## まとめ

このハウツーでは、Segment イベントを Teradata Vantage に送信する方法を説明します。この構成では、イベントを Segment から Google Cloud Pub/Sub に転送し、その後 Cloud Run アプリケーションに転送します。アプリケーションはデータを Teradata Vantage に書き込みます。

## さらに詳しく
* [Segmentの Pub/Sub 宛先ドキュメント](https://segment.com/docs/connections/destinations/catalog/google-cloud-pubsub/)

<CommunityLink />
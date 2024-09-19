---
sidebar_position: 2
author: Adam Tworkiewicz
email: adam.tworkiewicz@teradata.com
page_last_update: 2022 年 8 月 22 日
description: Google Cloud で Vantage Express を実行します。
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics]
---

import UseCase from '../../_partials/use-csae.mdx';
import CommunityLink from '../../_partials/community_link.mdx';
import InstallVeInPublic from '../../_partials/install-ve-in-public.mdx';
import Tabs from '../../_partials/tabsGCP.mdx';

# Google Cloud で Vantage Express を実行する方法

<UseCase />

## 概要

このハウツーでは、Google Cloud Platform で Vantage Express を実行する方法を説明します。Vantage Express には、完全に機能する Teradata SQL エンジンが含まれています。

:::note
クラウドの使用料を支払いたくない場合は、[VMware](../on-your-local/getting-started-vmware.md)、[VirtualBox](../on-your-local/getting-started-vbox.md)、[UTM](../on-your-local/getting-started-utm.md) を使用して Vantage Express をローカルにインストールできます。
:::

## 前提条件

* Googleクラウドアカウント。
* `gcloud` コマンドライン ユーティリティがマシンにインストールされています。インストール手順については、https://cloud.google.com/sdk/docs/install をご覧ください。

## インストール
* 4 つの CPU、8 GB の RAM、70 GB のバランス ディスクを備えた Ubuntu VM を作成します。次のコマンドは `us-central1` 、リージョンに VM を作成します。最高のパフォーマンスを得るには、リージョンを最も近いリージョンに置き換えてください。サポートされているリージョンの一覧については [Google Cloud リージョンのドキュメント](https://cloud.google.com/compute/docs/regions-zones)、を参照してください。

<Tabs />


* VMにsshで接続する。

```bash
gcloud compute ssh teradata-vantage-express --zone=us-central1-a
```

*  `root` ユーザーに切り替えます。

```bash
sudo -i
```

* Vantage Express用のダウンロードディレクトリを準備する。

```bash
mkdir /opt/downloads
cd /opt/downloads
```

<InstallVeInPublic />

* インターネットから Vantage Express に接続する場合は、VM へのファイアウォールの穴を開ける必要があります。また、デフォルトのパスワードを `dbc` ユーザーに変更する必要があります。
*  `dbc` ユーザーのパスワードを変更するには、VM に移動して bteq を開始する。

```bash
bteq
```

* ユーザー名とパスワードとして `dbc` を使用してデータベースにログインする。
```bash
.logon localhost/dbc
```
*  `dbc` ユーザーのパスワードを変更する。
```sql
MODIFY USER dbc AS PASSWORD = new_password;
```

* gcloud コマンドを使用して、ポート 1025 をインターネットに開くことができるようになりました。
```bash
gcloud compute firewall-rules create vantage-express --allow=tcp:1025 --direction=IN --target-tags=ve
```

## クリーンアップ

料金の発生を停止するには、VM を削除する。
```bash
gcloud compute instances delete teradata-vantage-express --zone=us-central1-a
```

また、追加したファイアウォール ルールも忘れずに削除してください。例:
```bash
gcloud compute firewall-rules delete vantage-express
```

## 次のステップ
* [オブジェクトストレージに保存されたクエリーデータ](../../manage-data/nos.md)

## さらに詳しく
* [Teradata®Studio™およびStudio™Expressインストール ガイド](https://docs.teradata.com/r/Teradata-StudioTM-and-StudioTM-Express-Installation-Guide-17.20)
* [BTEQ の紹介](https://docs.teradata.com/r/jmAxXLdiDu6NiyjT6hhk7g/root)

<CommunityLink/>

---
id: deploy-jupyter-azure-portal
title: Azure に JupyterLab をインストールする
description: ARM テンプレートを使用して JupyterLab をデプロイする方法を学習します。
sidebar_label: Azureにインストール
sidebar_position: 2
pagination_prev: null
pagination_next: null
---

# Azure に JupyterLab をインストールする

使用するには Azure Portal から JupyterLab と AI Unlimited カーネルをインストールするための、Teradata が提供する Azure Resource Manager (ARM) テンプレート。 

これにより、サーバー インスタンスがデプロイされ、JupyterLab は [systemd](../../glossary.md#systemd)によって制御されるコンテナ内で実行されます。

:::tip
インストールに関するサポートについては、 <a href="mailto:aiunlimited.support@Teradata.com">サポート チーム</a> にメールを送信するか、 [コミュニティ](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa)にお問い合わせください。
:::


## Azureアカウントを準備する

- クラウド管理者と貢献して、 [JupyterLab テンプレート](https://github.com/Teradata/ai-unlimited/tree/develop/deployments/azure/templates/arm/jupyter)で定義されているクラウド リソースを作成するために必要なアクセス許可が Azure アカウントにあることを確認します。

- ネットワーク要件: Azure [リソース グループ](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal) には [サブネット](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-subnet?tabs=azure-portal)が構成された[Azure Virtual Network (VNet)](https://learn.microsoft.com/en-us/azure/virtual-network/quick-create-portal) が必要です。アカウントのアクセス許可に応じて、既存の VNet またはサブネットを使用するか、独自の VNet またはサブネットを作成します。 

- コマンドを実行したりデバッグしたりするために JupyterLab インスタンスにアクセスする必要がある場合は、 [キー ペア](https://learn.microsoft.com/en-us/azure/virtual-machines/linux/mac-create-ssh-keys) を使用してセキュア シェル (SSH) で安全に接続できます。 [インスタンスの詳細を指定する](#specify-instance-details)ときに、キー ペアが必要になります。


## リポジトリをクローンする

import MyPartial from '../../_partials/_clone-repo.mdx';

<MyPartial />


## Jupyterテンプレートを見つける

JupyterLab の ARM テンプレートは、AI Unlimited GitHub リポジトリにあります。

`deployments/azure/templates/arm/jupyter`

[ロード バランサ](../../glossary.md#load-balancer) を使用するかどうか、およびどのタイプを使用するかに基づいてテンプレートを選択します。
:::note
組織のクラウド管理者にガイダンスを依頼することをお勧めします。
:::
    \- `jupyter-with-alb.json `—アプリケーション ロード バランサー の背後に JupyterLab をホストする(../../glossary.md#application-load-balancer)
    \- `jupyter-with-nlb.json` —ネットワーク ロード バランサー の背後に JupyterLab をホストする(../../glossary.md#network-load-balancer)
    \- `jupyter-without-lb.json`—ロードバランサーなし

## テンプレートを読み込む

1. [Azure Portal](https://portal.azure.com)にサインインします。
   :::note
   Azure Portal への参照は、2024 年 5 月 29 日時点で最新です。
   ::: 
2. **カスタムデプロイメント**を検索し、 **カスタムテンプレートをデプロイする**を選択します。
3. **エディタで独自のテンプレートを作成する**を選択し、次に **ファイルを読み込む**を選択します。
4. 使用するテンプレートファイルを選択し、 **保存**を選択します。  


## インスタンスの詳細を指定する

パラメータを確認します。必要なパラメータの値を指定します。組織によっては他のパラメータが必要になる場合があります。

<details>

<summary>Azure と JupyterLab のパラメータ</summary>

| パラメータ | 説明 | 注意事項 
|---------|-------------|-----------|
| Subscription | AI Unlimited のデプロイに使用する Azure サブスクリプション。 | 必須<br/>デフォルト: NA<br/>無料トライアルではないアカウントを使用することをお勧めします。 |
| Region | AI Unlimited をデプロイするリージョン。 | 必須<br/>デフォルト: NA<br/>作業場所に最も近い Azure リージョンと、AI Unlimited で使用するデータ リソースを選択します。 |
| Resource Group Name | 関連する AI Unlimited リソースをグループ化するコンテナの名前。 | 必須<br/>デフォルト: ai-unlimited-jupyter |
| OS Version  | 現在のサブスクリプションで利用可能なオペレーティング システムのバージョン。| オプション  デフォルト<br/>デフォルト: Ubuntu-2004 |
| Instance Type | AI Unlimited に使用するインスタンス タイプ。| オプション<br/>デフォルト: STANDARD_D2_V3<br/>コストを節約するには、デフォルトのインスタンス タイプを使用することをお勧めします。デフォルトのインスタンス タイプは、2 つの vCPU と 8.0 GiB のメモリを備えた標準の Dv3 シリーズです。|
| Network | AI Unlimited インスタンスをデプロイするネットワークの名前。| オプション<br/>デフォルト: NA| 
| Subnet | AI Unlimited インスタンスをデプロイするサブネットワーク。| 必須<br/>デフォルト: NA<br/>サブネットは、選択した可用性ゾーンに存在する必要があります。 |
| Security Group | インスタンスへの受信トラフィックと送信トラフィックを制御する仮想ファイアウォール。 | オプション<br/>デフォルト: JupyterSecurityGroup<br/>セキュリティ グループは、インスタンスへのアクセスを許可するプロトコル、ポート、IP アドレスまたは CIDR ブロックを指定する一連のルールとして実装されます。カスタム セキュリティ グループ イングレス ルールを作成しない限り、受信トラフィックを許可するには、アクセス CIDR またはセキュリティ グループの少なくとも 1 つを定義します。 |
| Access CIDR | インスタンスへのアクセスが許可される CIDR IP アドレスの範囲。 | オプション<br/>デフォルト: 0.0.0.0/0<br/>この値は信頼できる IP 範囲に設定することをお勧めします。カスタム セキュリティ グループ イングレス ルールを作成しない限り、受信トラフィックを許可するには、アクセス CIDR またはセキュリティ グループの少なくとも 1 つを定義します。 |
| Source App Sec Groups (ASG) | AI Unlimited インスタンスに接続する権限を持つソース アプリケーション セキュリティ グループ。ASG を使用すると、特定のネットワーク セキュリティ ポリシーに基づいて仮想マシン (VM) を整理できます。これらのセキュリティ ポリシーによって、仮想マシンで許可されるトラフィックと許可されないトラフィックが決まります。 | オプション<br/>デフォルト: NA<br/>ネットワーク インターフェイスと同じリージョン内のアプリケーション セキュリティ グループを選択します。 |
| Destination App Sec Groups | AI Unlimited インスタンスに接続する権限を持つ宛先アプリケーション セキュリティ グループ。 | オプション<br/>デフォルト: NA<br/>ネットワーク インターフェイスと同じリージョン内のアプリケーション セキュリティ グループを選択します。 |
| Role Definition ID | AI Unlimited で使用するロールの ID。 | 必須<br/>既定値: NA<br/>Azure CLI コマンド `Get-AzRoleDefinition` を使用して、ロール定義 ID を取得します。 |
| Allow Public SSH | Azure 内の VM に接続するためにセキュア シェル (SSH) キーを使用できるかどうかを指定します。 |  オプション<br/>デフォルト: true |
| Public Key | SSH 経由で VM に接続するために使用できる公開 SSH キー。 | オプション<br/>デフォルト: NA<br/>この値は `ssh-rsa` で始まる必要があります。 |
| Use Persistent Volume | データの保存に新しい永続ボリュームを使用するか、既存の永続ボリュームを使用するかを指定します。パラメータ セクションの下の「*詳細: 永続ボリュームの使用*」を参照してください。 | オプション、デフォルト<br/>デフォルト: 新規<br/>サポートされるオプションは、使用ケースに応じて、新しい永続ボリュームまたは既存のボリュームです。 |
| Persistent Volume Size | インスタンスに接続できる永続ボリュームのサイズ（GB 単位）。 | オプション<br/>デフォルト: 100<br/>8 ～ 1000 までの値をサポートします。 |
| Existing Persistent Volume | インスタンスに接続できる既存の永続ボリュームの ID。| 永続ボリュームの使用が既存に設定されている場合は必須です<br/>デフォルト: NA<br/>永続ボリュームは、AI Unlimited インスタンスと同じアベイラビリティーゾーンに存在する必要があります。 |
| JupyterHttpPort | JupyterLab サービス UI にアクセスするためのポート。 | デフォルトで必須<br/>デフォルト: 8888 |
| JupyterVersion | デプロイする JupyterLab のバージョン。 | デフォルトで必須<br/>デフォルト: latest<br/>値は、latest などのコンテナ バージョン タグです。 |
| JupyterToken | UI から JupyterLab にアクセスするために使用されるトークンまたはパスワード。| 必須<br/>デフォルト: NA<br/>トークンは文字で始まり、英数字のみで構成されている必要があります。 許可されるパターンは ^[a-zA-Z][a-zA-Z0-9-]* です。 |

</details>

<details>

<summary>もっと学ぶ.: 永続ボリュームの使用</summary>

JupyterLab インスタンスはコンテナ内で実行され、その構成データをインスタンスのルート ボリュームのデータベースに保存します。このデータは、インスタンスをシャットダウン、再起動、またはスナップショットを作成して再起動しても保持されます。 

ただし、永続ボリュームには、コンテナ化されたアプリケーションのデータが、それが実行されるコンテナ、ポッド、またはノードの有効期間を超えて保存されます。 

**永続ボリュームなし**

コンテナ、ポッド、またはノードがクラッシュまたは終了すると、JupyterLab 構成データが失われます。新しい JupyterLab インスタンスをデプロイすることはできますが、失われたインスタンスと同じ状態にすることはできません。

**永続ボリュームの場合**

コンテナ、ポッド、またはノードがクラッシュまたは終了し、JupyterLab 構成データが永続ボリュームに保存されている場合は、失われたものと同じ構成を持つ新しい JupyterLab インスタンスをデプロイできます。

**例**

1. JupyterLab をデプロイし、次のパラメータを含めます。
   - `UsePersistentVolume`: **New**
2. スタックを作成したら、**Outputs** タブで `volume-id` をメモします。
3. JupyterLab を使用します。
4. JupyterLab インスタンスが失われた場合は、JupyterLab を再度デプロイし、次のパラメータを含めます。
   - `UsePersistentVolume`: **New**
   - `ExistingPersistentVolumeId`: 手順 2 でメモした値
   
新しい JupyterLab インスタンスは、失われたインスタンスと同じ構成になります。

</details>


## インスタンスを作成する

1. **レビュー + 作成**を選択します。
2. **作成**を選択します。.<br />
**通知** ページでは進行状況を監視できます。

デプロイが完了すると、 **出力** ページに JupyterLab にアクセスするための URL が表示されます。






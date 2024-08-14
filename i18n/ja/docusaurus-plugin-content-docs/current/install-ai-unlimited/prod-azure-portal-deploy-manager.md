---
id: deploy-manager-azure-portal
title: Azureにインストール
description: Azure Resource Manager (ARM) テンプレートを使用してマネージャをデプロイする方法を学習します。
sidebar_label: Azureにインストール
sidebar_position: 2
pagination_prev: null
pagination_next: null
---

# Azureにマネージャをインストールする

始める前に、 [前提条件](./index.md#prerequisites) が満たされており、AWS アカウントが [要件](../resources/azure-requirements.md)を満たしていることを確認してください。

AI Unlimited マネージャはエンジンのデプロイを調整し、セットアップ用の Web ベースのユーザー インターフェイスを備えています。

Teradata が提供する Azure Resource Manager (ARM) テンプレートを使用して、Azure Portal からマネージャをインストールします。マネージャが [systemd](../glossary.md#systemd)によって制御されるコンテナ内で実行されるサーバー インスタンスをデプロイします。

:::tip
インストールに関するヘルプについては、 <a href="mailto:aiunlimited.support@Teradata.com">サポート チーム</a> にメールを送信するか、 [コミュニティ](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa)にお問い合わせください。
:::


## リポジトリをクローンする

import MyPartial from '../_partials/_clone-repo.mdx';

<MyPartial />


## マネージャ テンプレートを見つける

マネージャ用の ARM テンプレートは、AI Unlimited GitHub リポジトリにあります。

`deployments/azure/templates/arm/ai-unlimited`

[ロード バランサ](../glossary.md#load-balancer) を使用するかどうか、およびどのタイプを使用するかに基づいてテンプレートを選択します。
:::note
組織のクラウド管理者にガイダンスを依頼することをお勧めします。
:::
    - `ai-unlimited-with-alb.json`&mdash;[アプリケーション ロード バランサ](../glossary.md#application-load-balancer)の背後にあるマネージャをホストする
    - `ai-unlimited-with-nlb.json`&mdash;[ネットワーク ロード バランサ](../glossary.md#network-load-balancer)の背後でマネージャをホストする
    - `ai-unlimited-without-lb.json`&mdash;ロードバランサなし。どのテンプレートを使用するかわからない場合は、このテンプレートをお勧めします。


## テンプレートを読み込む

1. [Azure Portal](https://portal.azure.com)にサインインします。 
   :::note
   Azure Portal への参照は、2024 年 5 月 29 日時点で最新です。
   ::: 
2. **カスタム デプロイ**を検索し、 **カスタム テンプレートのデプロイ**を選択します。
3. **エディターで独自のテンプレートを作成する**を選択し、次に **ファイルの読み込み**を選択します。
4. 使用するテンプレート ファイルを選択し、 **保存**を選択します。

<a id="azure-parms"></a>


## インスタンスの詳細を指定する

パラメータを確認します。必須パラメータの値を指定します。組織によっては他のパラメータが必要になる場合があります。

<details>
<summary>AzureとAI Unlimitedのパラメータ</summary>

| パラメータ | 説明 | 注意事項 |
|---------|-------------|-----------|
| Subscription | AI Unlimited のデプロイに使用する Azure サブスクリプション。| 必須<br/>デフォルト: NA <br/>これは従量課金制アカウントである必要があります。  |
| Region | AI Unlimited をデプロイするリージョン。| 必須<br/>デフォルト: NA<br/>作業場所に最も近い Azure リージョンと、AI Unlimited で使用するデータ リソースを選択します。 |
| Resource Group Name | 関連する AI Unlimited リソースをグループ化するコンテナの名前。| 必須<br/>デフォルト: ai-unlimited-workspace |
| AI Unlimited Name| AI Unlimited に与えられた固有の名前。| 必須<br/>デフォルト: NA | 
| Public Key | SSH 経由で VM に接続するために使用できる公開 SSH キー。| 必須<br/>デフォルト: NA<br/>この値は「ssh-rsa」で始まる必要があります。 |
| OS Version  | 現在のサブスクリプションで利用可能なオペレーティング システムのバージョン。 | オプション  デフォルト<br/>デフォルト: Ubuntu-2004 |
| Instance Type | AI Unlimited に使用するインスタンス タイプ。 | オプション<br/>デフォルト: STANDARD_D2_V3<br/>コストを節約するには、デフォルトのインスタンス タイプを使用することをお勧めします。デフォルトのインスタンス タイプは、2 つの vCPU と 8.0 GiB のメモリを備えた標準の Dv3 シリーズです。|
| Network | AI Unlimited インスタンスをデプロイするネットワークの名前。| <br/>オプション<br/>デフォルト: NA | 
| Subnet | AI Unlimited インスタンスをデプロイするサブネットワーク。 | 必須<br/>デフォルト: NA<br/>サブネットは、選択した可用性ゾーンに存在する必要があります。 |
| Security Group | インスタンスへの受信トラフィックと送信トラフィックを制御する仮想ファイアウォール。 | オプション<br/>デフォルト: AiUnlimitedSecurityGroup<br/>セキュリティ グループは、インスタンスへのアクセスを許可するプロトコル、ポート、IP アドレスまたは CIDR ブロックを指定する一連のルールとして実装されます。カスタム セキュリティ グループ イングレス ルールを作成しない限り、受信トラフィックを許可するには、アクセス CIDR またはセキュリティ グループの少なくとも 1 つを定義します。 |
| Access CIDR | インスタンスへのアクセスが許可される CIDR IP アドレスの範囲。 | オプション<br/>デフォルト: 0.0.0.0/0<br/>この値は信頼できる IP 範囲に設定することをお勧めします。カスタム セキュリティ グループ イングレス ルールを作成しない限り、受信トラフィックを許可するには、アクセス CIDR またはセキュリティ グループの少なくとも 1 つを定義します。 |
| AI Unlimited HTTP Port | AI Unlimited UI にアクセスするためのポート。| デフォルトで必須<br/>デフォルト: 3000 |
| AI Unlimited GRPC Port | AI Unlimited API にアクセスするためのポート。 | デフォルトで必須<br/>デフォルト: 3282 | 
| Source App Sec Groups | AI Unlimited インスタンスに接続する権限を持つソース アプリケーション セキュリティ グループ (ASG)。ASG を使用すると、特定のネットワーク セキュリティ ポリシーに基づいて仮想マシン (VM) を整理できます。これらのセキュリティ ポリシーによって、仮想マシンで許可されるトラフィックと許可されないトラフィックが決まります。 |オプション<br/>デフォルト: NA<br/> ネットワーク インターフェイスと同じリージョン内のアプリケーション セキュリティ グループを選択します。 |
| Destination App Sec Groups | AI Unlimited インスタンスに接続する権限を持つ宛先アプリケーション セキュリティ グループ。 | オプション<br/>デフォルト: NA<br/>ネットワーク インターフェイスと同じリージョン内のアプリケーション セキュリティ グループを選択します。 |
| Role Definition ID | AI Unlimited で使用するロールの ID。| 必須<br/>デフォルト: NA<br/>Azure CLI コマンド Get-AzRoleDefinition を使用して、ロール定義 ID を取得します。 |
| Allow Public SSH | Azure 内の VM に接続するためにセキュア シェル (SSH) キーを使用できるかどうかを指定します。|  オプション<br/>デフォルト: true |
| Use Key Vault | デプロイ中にセキュリティで保護されたパスワードを取得するために Key Vault を使用するかどうかを指定します。 | オプション<br/>デフォルト: New |
| Use Persistent Volume | データの保存に新しい永続ボリュームを使用するか、既存の永続ボリュームを使用するかを指定します。パラメータ セクションの下の「*詳細: 永続ボリュームの使用*」を参照してください。 | オプション、デフォルトあり<br/>デフォルト: 新規 <br/>サポートされているオプション: 使用ケースに応じて、新規または既存。 |
| Persistent Volume Size | インスタンスに接続できる永続ボリュームのサイズ（GB 単位）。 | オプション<br/>デフォルト: 100 |
| Existing Persistent Volume | <br/>インスタンスに接続できる既存の永続ボリュームの ID。| UsePersistentVolume が Existing に設定されている場合は必須です。<br/>デフォルト: なし<br/>永続ボリュームは、AI Unlimited インスタンスと同じアベイラビリティーゾーンに存在する必要があります。 |
| AI Unlimited Version | デプロイする AI Unlimited のバージョン。 | デフォルトで必須<br/>デフォルト: latest<br/>値はコンテナのバージョン タグです。 |
|Use NLB| インスタンスにネットワーク ロード バランサを使用してアクセスするかどうかを指定します。|デフォルトで必須<br/>デフォルト: false|
| Tags | すばやく識別できるようにリソースに割り当てられるキーと値のペア。| オプション<br/>デフォルト:NA |   

</details>

<details>

<summary>もっと学ぶ.: 永続ボリュームの使用</summary>

マネージャ インスタンスはコンテナ内で実行され、その構成データをインスタンスのルート ボリューム内のデータベースに保存します。このデータは、インスタンスをシャットダウン、再起動、またはスナップショットを作成して再起動しても保持されます。 

永続ボリュームは、コンテナ化されたアプリケーションのデータを、それが実行されるコンテナ、ポッド、またはノードの有効期間を超えて保存します。 

**永続ボリュームなし**

コンテナ、ポッド、またはノードがクラッシュまたは終了すると、マネージャの構成データが失われます。新しいマネージャ インスタンスをデプロイすることはできますが、失われたインスタンスと同じ状態にすることはできません。

**永続ボリュームの場合**

コンテナ、ポッド、またはノードがクラッシュまたは終了し、マネージャの構成データが永続ボリュームに保存されている場合は、失われたものと同じ構成を持つ新しいマネージャ インスタンスをデプロイできます。

**例**

1. マネージャをデプロイし、「Use Persistent Volume」パラメータを **New** に設定します。
2. スタックを作成したら、**出力** ページで `volume-id` をメモします。
3. AI Unlimited を使用します。
4. マネージャ インスタンスが失われた場合は、マネージャを再度デプロイし、次のパラメーターを含めます。
   - `永続ボリュームを使用する`: **New**
   - `既存の永続ボリューム`: 手順 2 でメモした値
   
新しいマネージャ インスタンスは、失われたものと同じ構成を持ちます。

</details>


## インスタンスを作成する

1. **レビュー + 作成**を選択します。
2. **作成**を選択します。.<br />
**通知** ページでは進行状況を監視できます。

デプロイが完了すると、 **出力** ページに作成されたリソースに対して生成された値が表示されます。

マネージャにアクセスして AI Unlimited を設定するには、URL が必要になります。


## 次のステップ

[OAuthアプリを作成する](../resources/create-oauth-app.md) を実行してAI Unlimited と Git プロバイダ アカウント間の認証を許可します。

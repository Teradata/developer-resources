---
id: setup-ai-unlimited
title: AI Unlimitedをセットアップする
description: セットアップの詳細について学びます。
sidebar_label: AI Unlimitedをセットアップする
sidebar_position: 3
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# AI Unlimitedをセットアップする

[マネージャ](../glossary.md#ai-unlimited-manager)をインストールした後、インストールプロセスの最後に受け取ったURLを使用して、AI Unlimitedのセットアップにアクセスします。`http://[ip_or_hostname]:[port]` 

:::note
AI Unlimited を設定すると、組織の AI Unlimited 管理者になります。
:::

:::tip
セットアップに関するヘルプについては、 <a href="mailto:aiunlimited.support@Teradata.com">サポート チーム</a> にメールを送信するか、 [コミュニティ](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa)にお問い合わせください。
:::

<a id="setup-fields"></a>	
## フィールドに入力してください

各フィールド グループに関する情報は、こちらで確認できます。

<details>

<summary>基本設定</summary>

<br />

**AI Unlimited ベース URL** - セットアップにアクセスするために使用した URL。マネージャをインストールしたときに受け取りました。


**Git プロバイダー** - GitHub または GitLab。

**AI Unlimited ログ レベル** - AI Unlimited ログで表示する詳細レベル。

**エンジン IP ネットワーク タイプ**

AI Unlimited と同じ仮想プライベート クラウドにエンジンをデプロイする場合は、[**プライベート**] を選択します。

**パブリック** または **プライベート** は、AI Unlimited がエンジンと通信する方法を示します。エンジンには、パブリック IP アドレス、プライベート IP アドレス、またはその両方がある場合があります。AI Unlimited が接続する IP アドレスの種類を指定します。

**TLS を使用**

AI Unlimited への接続をセキュリティで保護し、転送中のデータを保護するには、[Transport Layer Security (TLS)](../glossary.md#transport-layer-security)を使用することをお勧めします。

- 証明書の終了が有効になっている[application load balancer (ALB)](../glossary.md#application-load-balancer)を使用している場合は、**False** を選択します。

- [network load balancer (NLB)](../glossary.md#network-load-balancer)を使用している場合、またはロード バランサーを使用していない場合は、**True** を選択します。
..
	- **AI Unlimited TLS 証明書** と **AI Unlimited TLS 証明書キー** - 信頼できる証明機関 (CA) によって発行された証明書がある場合は、その証明書とそのキーを提供できます。更新と検証を含む証明書のライフサイクルの管理はお客様の責任となります。特定の要件がある場合や、証明書をより細かく制御する必要がある場合は、独自の証明書を用意することをお勧めします。

	- または、**証明書の生成** を選択して、Teradata システム生成の証明書を使用します。有効期限が切れる前に自動的に更新されます。

**更新**を選択します。

</details>


<details>

<summary>クラウド統合</summary>
<br />
これらのフィールドの一部はデフォルト値用です。後で Jupyter ノートブックからエンジンをデプロイするときに、そのデプロイに対してデフォルトとは異なる値を指定できます。

<Tabs>
<TabItem value="aws1" label="AWS">
<br />
**デフォルトのリージョン** - エンジンをデプロイする AWS リージョン。データレイクに最も近いリージョンを選択することをお勧めします。

**デフォルトのサブネット** - エンジンをデプロイする [AWS サブネット](https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html)。AWS コンソールには、リージョン内のサブネットが表示されます。

**デフォルトの IAM ロール**

- エンジンの [IAM ロール](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create.html)。セキュリティで許可されている場合は、空白のままにして AI Unlimited にロールを作成させます。それ以外の場合は、このポリシーを使用してロールを作成します: [ai-unlimited-engine.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json)。
- AI Unlimited がロールを作成する場合、エンジンをデプロイするたびに、エンジンをデプロイする AWS [クラスター](../glossary.md#cluster) に対してロールが作成されます。組織がロールを作成する場合、エンジンをデプロイする可能性のあるすべてのクラスターに対応する必要があります。
		
**リソース タグ** — エンジンをデプロイする AWS リソースに [タグ](https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html) を付けて、管理しやすくすることができます。

**インバウンドセキュリティ**

ソース トラフィックがエンジンに到達できるようにするには、次のフィールドを使用します。
- **デフォルトの [CIDR](../glossary.md#classless-inter-domain-routing)**
- **デフォルトの [セキュリティ グループ](https://docs.aws.amazon.com/vpc/latest/userguide/working-with-security-groups.html) ID** - AI Unlimited と同じ Virtual Private Cloud にエンジンをデプロイする場合は、AI Unlimited がエンジンと通信できるように、このフィールドに AI Unlimited セキュリティ グループを含めます。
- **デフォルトの[プレフィックスリスト](https://docs.aws.amazon.com/vpc/latest/userguide/managed-prefix-lists.html)名**

**ロール プレフィックス** - AI Unlimited がロールを作成すると、このプレフィックスがロール名に追加されます。

**[アクセス許可の境界](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html) ARN** — IAM エンティティに境界が必要な場合は、ここで指定できます。   

**更新**を選択します。

</TabItem>

<TabItem value="azure" label="Azure"> 

<br />

**既定のリージョン** - エンジンをデプロイする Azure リージョン。データ レイクに最も近いリージョンを選択することをお勧めします。

[Azure 仮想ネットワーク](https://learn.microsoft.com/en-us/azure/virtual-network/concepts-and-best-practices) の詳細をご覧ください。


**デフォルトのネットワーク リソース グループ** - ネットワークを含むリソース グループ。

**デフォルト ネットワーク** - エンジンをデプロイするネットワーク。

**デフォルトのサブネット** - エンジンをデプロイするサブネット。

**既定のキー コンテナ** - エンジンによって使用されるキー コンテナ。パスワードなどの機密情報を安全に保存できます。

**既定のキー コンテナ リソース グループ** - キー コンテナが含まれるリソース グループ。

**インバウンドセキュリティ**

ソース トラフィックがエンジンに到達できるようにするには、次のフィールドを使用します。

- **デフォルトの [CIDR](../glossary.md#classless-inter-domain-routing)**
 
- **既定の [セキュリティ グループ](https://learn.microsoft.com/en-us/azure/virtual-network/application-security-groups) 名** - AI Unlimited と同じ仮想プライベート クラウドにエンジンをデプロイする場合は、AI Unlimited がエンジンと通信できるように、このフィールドに AI Unlimited アプリケーション セキュリティ グループを含めます。

**リソース タグ** - エンジンをデプロイする Azure リソースに [タグ](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources) を付けて、管理しやすくすることができます。

**更新**を選択します。

</TabItem>
</Tabs>

</details>


<details>

<summary>Gitの統合</summary>

<Tabs>

<TabItem value="github" label="GitHub">

<br />

**GitHub コールバック URL** - ユーザーを認証した後、GitHub はこの URL を使用してマネージャにリダイレクトします。これは、OAuth アプリの作成時に提供されました (../resources/create-oauth-app.md)。

**GitHub ベース URL** - GitHub インスタンスの URL。

**GitHub クライアント ID** と **GitHub クライアント シークレット** - [OAuth アプリが作成されたとき](../resources/create-oauth-app.md) に GitHub から受け取った資格情報。

**組織アクセス**

GitHub アカウント内の 2 つの組織が、アクセス制御とリポジトリ管理に役立ちます。

- **認証組織** のメンバーは、AI Unlimited にサインインして認証できます。組織を指定しない場合は、どの GitHub アカウント ユーザーでもサインインして認証できます。

- プロジェクト リポジトリは **リポジトリ組織** に作成されます。組織を指定しない場合、プロジェクトは個人の GitHub スペースに保存されます。

**更新**を選択します。

**サインイン** を選択します。次に、サインイン (求められた場合) して認証します。

</TabItem>

<TabItem value="gitlab" label="GitLab">

<br />

**GitLab コールバック URL** — ユーザーを認証した後、GitLab はこの URL を使用してマネージャにリダイレクトします。これは、OAuth アプリの作成時に提供されました (../resources/create-oauth-app.md)。

**GitLab ベース URL** - GitLab インスタンスの URL。

**GitLab クライアント ID** と **GitLab クライアント シークレット** - [OAuth アプリが作成されたとき](../resources/create-oauth-app.md) に GitLab から受け取った資格情報。

**グループアクセス**

GitLab アカウント内の 2 つのグループは、アクセス制御とリポジトリ管理に役立ちます。

- **認証グループ** のメンバーは、AI Unlimited にサインインして認証できます。グループを指定しない場合は、どの GitLab アカウント ユーザーでもサインインして認証できます。

- すべてのプロジェクト リポジトリは **リポジトリ グループ** に作成されます。グループを指定しない場合、プロジェクトは個人の GitLab スペースに保存されます。

**更新**を選択します。

**サインイン** を選択します。次に、サインイン (求められた場合) して認証します。

</TabItem>
</Tabs>

</details>


## ここを離れる前

1. **プロファイル**で、API キーをコピーします。
    Jupyter ノートブックからエンジンに接続するときに使用します。

2. TLS を有効にした場合は、 **再起動**を選択します。これにより、TLS が有効になった状態で AI Unlimited サービスが再起動されます。

おめでとうございます！AI Unlimitedのセットアップが完了しました。


:::note
あなたは AI Unlimited 管理者なので、いつでもセットアップに戻って [設定を変更](../manage-ai-unlimited/change-settings.md)することができます。 
:::


## 次のステップ

Jupyterノートブックで、 [データの探索と分析](../explore-and-analyze-data/index.md)を開始します。


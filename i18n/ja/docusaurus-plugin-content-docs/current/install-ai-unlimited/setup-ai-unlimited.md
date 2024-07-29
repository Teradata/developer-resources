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

:::注記
AI Unlimited を設定すると、組織の AI Unlimited 管理者になります。
:::

:::ヒント
セットアップに関するヘルプについては、 <a href="mailto:aiunlimited.support@Teradata.com">サポート チーム</a> にメールを送信するか、 [コミュニティに質問してください](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa)にお問い合わせください。
:::

<a id="setup-fields"></a>	
## フィールドに入力してください

各フィールド グループに関する情報は、こちらで確認できます。

<details>

<summary>基本設定</summary>

<br />

**AI Unlimited ベース URL** - 設定にアクセスするために使用した URL。マネージャをインストールしたときに受け取りました。


**Git プロバイダー** - GitHub または GitLab。

**AI Unlimited ログ レベル** - AI Unlimited ログで表示する詳細レベル。

**エンジン IP ネットワーク タイプ**

AI Unlimited と同じ仮想プライベート クラウドにエンジンをデプロイする場合は、**プライベート** を選択します。

**パブリック** または **プライベート** は、AI Unlimited がエンジンと通信する方法を示します。エンジンには、パブリック IP アドレス、プライベート IP アドレス、またはその両方がある可能性があります。AI Unlimited が接続する IP アドレスのタイプを指定します。

**TLS を使用する**

AI Unlimited への接続を保護し、転送中のデータを保護するために [Transport Layer Security (TLS)]、 (../glossary.md#transport-layer-security) を使用することをお勧めします。

- [application load balancer (ALB)](../glossary.md#application-load-balancer) を使用しており、証明書の終了が有効になっている場合は、**False** を選択します。

- [network load balancer (NLB)](../glossary.md#network-load-balancer) を使用しているか、ロード バランサがない場合は、**True** を選択します。
..
	- **AI Unlimited TLS 証明書** と **AI Unlimited TLS 証明書キー** - 信頼できる証明機関 (CA) によって発行された証明書がある場合は、その証明書とそのキーを提供できます。証明書のライフサイクル (更新と検証を含む) の管理は、お客様の責任となります。特定の要件がある場合や、証明書をより細かく制御する必要がある場合は、独自の証明書を使用することをお勧めします。

	- または、**Generate Certs** を選択して、Teradata システムによって生成された証明書を使用します。有効期限が切れる前に自動的に更新されます。

**Update** を選択します。

</details>


<details>

<summary>クラウド統合</summary>
<br />
これらのフィールドの一部はデフォルト値用です。後で Jupyter ノートブックからエンジンをデプロイするときに、そのデプロイメントに対してデフォルトとは異なる値を指定できます。

<Tabs>
<TabItem value="aws1" label="AWS">
<br />
**デフォルトのリージョン** - エンジンをデプロイする AWS リージョン。データレイクに最も近いリージョンを選択することをお勧めします。

**デフォルトのサブネット** - エンジンをデプロイする [AWS subnet](https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html)。AWS コンソールにリージョン内のサブネットが表示されます。

**デフォルトの IAM ロール**

- エンジンの [IAM role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create.html)。セキュリティで許可されている場合は、空白のままにして AI Unlimited にロールを作成させます。それ以外の場合は、このポリシーを使用してロールを作成します: [ai-unlimited-engine.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json)。
- AI Unlimited がロールを作成する場合、エンジンをデプロイするたびに、エンジンをデプロイする AWS [cluster](../glossary.md#cluster) に対してロールが作成されます。組織がロールを作成する場合、エンジンをデプロイする可能性のあるすべてのクラスターに対応する必要があります。
		
**リソースタグ** - エンジンをデプロイする AWS リソースを [tag](https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html) して、管理しやすくすることができます。

**受信セキュリティ**

これらのフィールドを使用して、ソーストラフィックがエンジンに到達できるようにします。
- **デフォルト [CIDRs](../glossary.md#classless-inter-domain-routing)**
- **デフォルト [security group](https://docs.aws.amazon.com/vpc/latest/userguide/working-with-security-groups.html) ID**—AI Unlimited と同じ Virtual Private Cloud にエンジンをデプロイする場合は、このフィールドに AI Unlimited セキュリティグループを含めて、AI Unlimited がエンジンと通信できるようにします。
- **デフォルト [prefix list](https://docs.aws.amazon.com/vpc/latest/userguide/managed-prefix-lists.html) 名前**

**ロールプレフィックス**—AI Unlimited がロールを作成すると、このプレフィックスがロール名に追加されます。

**[Permissions boundary](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html) ARN** — IAM エンティティに境界が必要な場合は、ここで境界を指定できます。   

[ **更新**] を選択します。

</TabItem>

<TabItem value="azure" label="Azure"> 

<br />

**既定のリージョン** - エンジンをデプロイする Azure リージョン。データ レイクに最も近いリージョンを選択することをお勧めします。

] [Azure virtual networks]の詳細については、こちらをご覧ください (https://learn.microsoft.com/en-us/azure/virtual-network/concepts-and-best-practices)。


**既定のネットワーク リソース グループ** - ネットワークを含むリソース グループ。

**既定のネットワーク** - エンジンをデプロイするネットワーク。

] **既定のサブネット** - エンジンをデプロイするサブネット。

**既定のキー コンテナー** - エンジンによって使用されるキー コンテナー。パスワードなどの機密情報を安全に保存できます。

**既定のキー コンテナー リソース グループ** - キー コンテナーを含むリソース グループ。

**受信セキュリティ**

ソース トラフィックがエンジンに到達できるようにするには、次のフィールドを使用します。

- **既定の [CIDRs](../glossary.md#classless-inter-domain-routing)**
 
- **既定の [security group](https://learn.microsoft.com/en-us/azure/virtual-network/application-security-groups) 名**— AI Unlimited と同じ仮想プライベート クラウドにエンジンをデプロイする場合は、このフィールドに AI Unlimited アプリケーション セキュリティ グループを含めて、AI Unlimited がエンジンと通信できるようにします。

**リソース タグ**—エンジンをデプロイする Azure リソースを [tag](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources) して、管理しやすくすることができます。

[ **更新**] を選択します。

</TabItem>
</Tabs>

</details>


<details>

<summary>Git 統合</summary>

<Tabs>

<TabItem value="github" label="GitHub">

<br />

**GitHub コールバック URL** - ユーザーを認証した後、GitHub はこの URL を使用してマネージャにリダイレクトします。これは、OAuth アプリ [when it was created](../resources/create-oauth-app.md) に提供されました。

**GitHub ベース URL** - GitHub インスタンスの URL。

**GitHub クライアント ID** と **GitHub クライアント シークレット** - [OAuth app was created](../resources/create-oauth-app.md) の実行時に GitHub から受信した資格情報。

**組織アクセス**

GitHub アカウントの 2 つの組織が、アクセス制御とリポジトリ管理に役立ちます。

- **承認組織** のメンバーは、AI Unlimited にサインインして認証できます。組織を指定しない場合は、どの GitHub アカウント ユーザーでもサインインして認証できます。

- プロジェクト リポジトリは、**リポジトリ組織** に作成されます。組織を指定しない場合は、プロジェクトは個人の GitHub スペースにあります。

[**更新**] を選択します。

[**サインイン**] を選択します。次に、サインイン (要求された場合) して、認証します。

</TabItem>

<TabItem value="gitlab" label="GitLab">

<br />

**GitLab コールバック URL** - ユーザーを認証した後、GitLab はこの URL を使用してマネージャにリダイレクトします。これは、OAuth アプリ [when it was created][OAuth app was created]( ../resources/create-oauth-app.md) に提供されました。

**GitLab ベース URL** - GitLab インスタンスの URL。

**GitLab クライアント ID** と **GitLab クライアント シークレット** - GitLab インスタンスにログインしたときに GitLab から受信した資格情報 (../resources/create-oauth-app.md)。

**グループ アクセス**

GitLab アカウントの 2 つのグループが、アクセス制御とリポジトリ管理に役立ちます。

- **承認グループ** のメンバーは、AI Unlimited にサインインして認証できます。グループを指定しないと、どの GitLab アカウント ユーザーでもサインインして認証できます。

- すべてのプロジェクト リポジトリは **リポジトリ グループ** に作成されます。グループを指定しない場合、プロジェクトは個人の GitLab スペースに保存されます。

[**更新**] を選択します。

[**サインイン**] を選択します。次に、サインイン (プロンプトが表示された場合) して認証します。

</TabItem>
</Tabs>

</details>


## ここを離れる前

1. **プロファイル**で、API キーをコピーします。
    Jupyter ノートブックからエンジンに接続するときに使用します。

2. TLS を有効にした場合は、 **再起動**を選択します。これにより、TLS が有効になった状態で AI Unlimited サービスが再起動されます。

おめでとうございます！AI Unlimitedのセットアップが完了しました。


:::注記
あなたは AI Unlimited 管理者なので、いつでもセットアップに戻って [設定を変更](../manage-ai-unlimited/change-settings.md)することができます。 
:::


## 次のステップ

Jupyterノートブックで、 [データの探索と分析](../explore-and-analyze-data/index.md)を開始します。


---
id: deploy-jupyter-aws-console
title: AWS に JupyterLab をインストールする
description: CloudFormation テンプレートを使用して JupyterLab をデプロイする方法を学びます。
sidebar_label: AWSへのインストール
sidebar_position: 1
pagination_prev: null
pagination_next: null
---

# AWS に JupyterLab をインストールする

Teradata が提供する CloudFormation テンプレートを使用して、AWS Management Consoleから JupyterLab と AI Unlimited カーネルをインストールします。 

これにより、サーバー インスタンスがデプロイされ、JupyterLab は [systemd](../../glossary.md#systemd)によって制御されるコンテナ内で実行されます。

:::ヒント
インストールに関するサポートについては、 <a href="mailto:aiunlimited.support@Teradata.com">サポート チーム</a> にメールを送信するか、 [コミュニティ](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa)にお問い合わせください。
:::

## AWSアカウントを準備する

- クラウド管理者と貢献して、 [JupyterLab テンプレート](https://github.com/Teradata/ai-unlimited/tree/develop/deployments/aws/templates/jupyter)で定義されたクラウド リソースを作成するための [IAM](https://aws.amazon.com/iam/) 権限があることを確認してください。

- コマンドを実行したりデバッグしたりするために JupyterLab インスタンスにアクセスする必要がある場合は、 [キー ペア](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) を使用してセキュア シェル (SSH) で安全に接続できます。 [スタックの詳細を指定する](#specify-stack-details-and-options)ときに、キー ペアが必要になります。
  
- [Application Load Balancer (ALB)](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancer-getting-started.html) または [Network Load Balancer (NLB)](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancer-getting-started.html)を使用する場合は、次の AWS サービスを管理する権限があることを確認してください。
	[AWS Certificate Manager](https://docs.aws.amazon.com/acm/)- —Route 53 のホストゾーン ID の新しい証明書を発行します。
	\- [AWS Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html)—カスタムドメイン名を設定し、DNS クエリーをロード バランサにルーティングします。


## リポジトリをクローンする

import MyPartial from '../../_partials/_clone-repo.mdx';

<MyPartial />


## Jupyterテンプレートを見つける

JupyterLab 用の CloudFormation テンプレートは、AI Unlimited GitHub リポジトリにあります。

`deployments/aws/templates/jupyter`

[ロード バランサ](../../glossary.md#load-balancer) を使用するかどうか、およびどのタイプを使用するかに基づいてテンプレートを選択します。
:::注記
組織のクラウド管理者にガイダンスを依頼することをお勧めします。
:::
    -`jupyter-alb.yaml` — JupyterLabをロード バランサの背後にホスト [application load balancer](../../glossary.md#application-load-balancer)
    \- `jupyter-with-nlb.yaml`— JupyterLabをロード バランサの背後にホスト[network load balancer](../../glossary.md#network-load-balancer)
     \- `jupyter-without-lb.yaml`— ロード バランサなし


## テンプレートを読み込む	

1. [AWS コンソール](https://aws.amazon.com)にサインインします。
   :::注記
   AWS Management Consoleへの参照は、2024 年 5 月 29 日時点で最新です。
   :::
2. JupyterLab をデプロイするリージョンを選択します。<br/>
   主な作業場所に最も近いリージョンを選択することをお勧めします。
3. **CloudFormation**を検索して移動します。
4. **スタックを作成**を選択し、次に **新しいリソース（標準）**を選択します。
5. **既存のテンプレートを選択する** と **テンプレートファイルをアップロードする**を選択します。
6. 使用するテンプレートファイルを選択し、 **次へ**をクリックします。


## スタックの詳細とオプションを指定する

1. スタック名を指定します。
2. パラメータを確認します。必要なパラメータの値を指定します。組織によっては他のパラメータが必要になる場合があります。

<details>

<summary>AWS と JupyterLab のパラメータ</summary>

| パラメータ | 説明 | 注記 
|---------|-------------|-----------|
| InstanceType | サービスに使用する EC2 インスタンスタイプ。 | デフォルトで必須<br/>デフォルト: t3.small<br/>コストを節約するために、デフォルトのインスタンス タイプを使用することをお勧めします。|
| RootVolumeSize | インスタンスに接続するルートディスクのサイズ（GB 単位）。| デフォルトで必須<br/>デフォルト: 8<br/>8 ～ 1000 までの値をサポートします。 |
| TerminationProtection | インスタンス終了保護を有効にします。| デフォルトで必須<br/>デフォルト: false |
|IamRole | CloudFormation が新しい IAM ロールを作成するか、既存のロールを使用するかを指定します。 | デフォルトで必須<br/>デフォルト: New<br/>サポートされているオプション:: NewまたはExisting |
|IamRoleName | インスタンスに割り当てるIAMロールの名前。既存のIAMロールまたは 新しく作成されたIAMロールのいずれか。| デフォルトでオプション<br/>デフォルト:  ai-unlimited-iam-role<br/>新しい IAM ロールに名前を付ける場合、CloudFormation では CAPABILITY_NAMED_IAM 機能が必要です。自動生成された名前を使用するには、これを空白のままにしておきます。 |
|IamPermissions<br/>Boundary | インスタンスに割り当てられた IAM ロールに関連付ける IAM アクセス許可境界の ARN。| オプション<br/>デフォルト: NA|
|AvailabilityZone | インスタンスをデプロイするアベイラビリティーゾーン。 | 必須<br/>デフォルト: NA<br/>値はサブネット、既存のボリュームのゾーンと一致する必要があり、インスタンス タイプは選択したゾーンで使用可能である必要があります。 |
|LoadBalancing		|インスタンスが NLB 経由でアクセスされるかどうかを指定します。| デフォルトで必須<br/>デフォルト: NetworkLoadBalancer<br/>サポートされているオプション: NetworkLoadBalancerまたはNone |
|LoadBalancerScheme	| ロードバランサーが使用されている場合、このフィールドはインスタンスがインターネットからアクセスできるか、または VPC 内からのみアクセスできるかを指定します。| デフォルトでオプション<br/>デフォルト: Internet-facing<br/>ンターネット向けのロードバランサーの DNS 名は、ノードのパブリック IP アドレスにパブリックに解決可能です。したがって、インターネット向けのロードバランサーは、インターネット経由でクライアントからのリクエストをルーティングできます。内部ロードバランサーのノードにはプライベート IP アドレスのみがあります。内部ロードバランサーの DNS 名は、ノードの個人 IP アドレスにパブリックに解決可能です。したがって、内部ロードバランサーは、ロードバランサーの VPC にアクセスできるクライアントからのリクエストをルーティングできます。|
|Private	|サービスがパブリック IP のないプライベート ネットワークにデプロイされるかどうかを指定します。| 必須<br/>デフォルト: false<br/>マネージャーが存在するサブネットで「パブリック IPv4 アドレスの自動割り当てを有効にする」オプションが選択されていることを確認してください。このオプションが選択されていない場合、インストールが失敗する可能性があります。|
|Session	|AWS Session Manager を使用してインスタンスにアクセスできるかどうかを指定します。| 必須<br/>デフォルト: false |
|Vpc		|インスタンスをデプロイするネットワーク。|必須<br/>デフォルト: NA|
|Subnet	|インスタンスをデプロイするサブネットワーク。 |必須<br/>デフォルト: NA<br/>サブネットは、選択した可用性ゾーンに存在する必要があります。|
|KeyName		|インスタンスの起動後にインスタンスに安全に接続できるようにする公開/秘密キーのペア。AWS アカウントを作成するときに、優先リージョンで作成するキー ペアです。| オプション<br/>デフォルト: NA<br/>SSH キーを含めない場合は、このフィールドを空白のままにします。|
|AccessCIDR	|インスタンスへのアクセスが許可される CIDR IP アドレスの範囲。| オプション<br/>デフォルト: NA<br/>この値は信頼できる IP 範囲に設定することをお勧めします。カスタム セキュリティ グループ イングレス ルールを作成しない限り、受信トラフィックを許可するには、AccessCIDR、PrefixList、または SecurityGroup の少なくとも 1 つを定義します。|
|PrefixList			| インスタンスとの通信に使用できるプレフィックス リスト。同じポリシーの適用を必要とする一連の IP アドレス範囲を定義する CIDR ブロックのコレクションです。| オプション<br/>デフォルト: NA<br/>カスタム セキュリティ グループ イングレス ルールを作成しない限り、受信トラフィックを許可するには、AccessCIDR、PrefixList、または SecurityGroup の少なくとも 1 つを定義します。|
|SecurityGroup	|インスタンスへの受信トラフィックと送信トラフィックを制御する仮想ファイアウォール。| オプション<br/>デフォルト: NA<br/>インスタンスへのアクセスが許可されるプロトコル、ポート、IP アドレスまたは CIDR ブロックを指定する一連のルールとして実装されます。カスタム セキュリティ グループ イングレス ルールを作成しない限り、受信トラフィックを許可するには、AccessCIDR、PrefixList、または SecurityGroup の少なくとも 1 つを定義します。|
|UsePersistentVolume| データの保存に新しい永続ボリュームを使用するか、既存の永続ボリュームを使用するかを指定します。パラメータ セクションの下にある「*詳細: 永続ボリュームの使用*」を参照してください。 |デフォルトでオプション<br/>デフォルト: New<br/>サポートされるオプションは、ユースケースに応じて、新しい永続ボリュームまたは既存の永続ボリュームです。|
|PersistentVolumeSize	|インスタンスに接続できる永続ボリュームのサイズ（GB 単位）。|デフォルトで必須<br/>デフォルト: 20<br/>8～1000の値をサポート|
|ExistingPersistent<br/>VolumeId		|インスタンスに接続できる既存の永続ボリュームの ID。| UsePersistentVolume が Existing に設定されている場合に必須<br/>デフォルト: NA<br/>永続ボリュームは、AI Unlimited インスタンスと同じアベイラビリティーゾーンに存在する必要があります。|
|PersistentVolume<br/>DeletionPolicy		|CloudFormation デプロイメントを削除するときの永続ボリュームの動作。| デフォルトで必須<br/>デフォルト:  Retain<br/>サポートされているオプションは、Delete、Retain、RetainExceptOnCreate、および Snapshot です。|
|LatestAmiId	|AMI の最新バージョンを指すイメージの ID。この値は SSM ルックアップに使用されます。|デフォルトで必須<br/>デフォルト: NA<br/>このデプロイメントでは、利用可能な最新の ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2 イメージが使用されます。<br/>重要: この値を変更するとスタックが壊れる可能性があります。|
| JupyterHttpPort |JupyterLab サービス UI にアクセスするためのポート。| デフォルトで必須<br/>デフォルト: 8888|
| JupyterVersion | デプロイする JupyterLab のバージョン。| デフォルトで必須<br/>デフォルト: latest<br/>値はコンテナのバージョン タグ (例: latest) です。 |
| JupyterToken | UI から JupyterLab にアクセスするために使用されるトークンまたはパスワード。| 必須<br/>デフォルト: NA<br/>トークンは文字で始まり、英数字のみで構成されている必要があります。許可されるパターンは^[a-zA-Z][a-zA-Z0-9-]*です。 |
</details>

<details>

<summary>詳細: 永続ボリュームの使用</summary>

JupyterLab インスタンスはコンテナ内で実行され、その構成データはインスタンスのルート ボリュームのデータベースに保存されます。このデータは、インスタンスをシャットダウン、再起動、またはスナップショットを作成して再起動しても保持されます。 

永続ボリュームには、コンテナ化されたアプリケーションのデータが、それが実行されるコンテナ、ポッド、またはノードの存続期間を超えて保存されます。 

] **永続ボリュームがない場合**

コンテナ、ポッド、またはノードがクラッシュまたは終了すると、JupyterLab 構成データが失われます。新しい JupyterLab インスタンスをデプロイすることはできますが、失われたインスタンスと同じ状態にすることはできません。

**永続ボリュームがある場合**

コンテナ、ポッド、またはノードがクラッシュまたは終了し、JupyterLab 構成データが永続ボリュームに保存されている場合は、失われたインスタンスと同じ構成の新しい JupyterLab インスタンスをデプロイできます。

**例**

1. JupyterLab をデプロイし、次のパラメータを含めます:
   - `UsePersistentVolume`: **New**
   - `PersistentVolumeDeletionPolicy`: **Retain**
3. スタックを作成したら、[**Outputs**] タブで `volume-id` をメモします。
4. JupyterLab を使用します。
5. JupyterLab インスタンスが失われた場合は、JupyterLab を再度デプロイし、次のパラメータを含めます:
   - `UsePersistentVolume`: **New**
   - `PersistentVolumeDeletionPolicy`: **Retain** 
   - `ExistingPersistentVolumeId`: 手順 2 でメモした値
   
 新しい JupyterLab インスタンスは、失われたインスタンスと同じ構成になります。

</details>

3. **次へ**を選択します。
4. [スタック オプションを構成する](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-console-add-tags.html) 要件に応じて、 **次へ**を選択します。 


## スタックを確認して作成する

1. テンプレートの設定を確認します。 
2. テンプレートによって IAM リソースが作成されることを確認するには、チェックボックスをオンにします。 
3. **送信** を選択してスタックをデプロイします。<br />
**イベント** タブで進行状況を監視できます。すべてのリソースのステータスが `CREATE_COMPLETE`になったら、JupyterLab の準備は完了です。 

**出力** タブには、JupyterLabにアクセスするためのURLが表示されます。




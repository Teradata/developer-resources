---
id: aws-account-requirements
title: AWS アカウントの要件
description: AI Unlimited のインストール用に AWS アカウントを準備する方法
sidebar_label: AWS アカウントの要件
sidebar_position: 1
pagination_prev: null
pagination_next: null
---

# AWS アカウントの要件

まず、 [前提条件](../install-ai-unlimited/index.md#prerequisites)が満たされていることを確認してください。 

次に、AI Unlimited をインストールする前に、これらの AWS 項目に対処します。


## AWSアカウントを準備する

- クラウド管理者と貢献して、 [AI Unlimitedテンプレート](https://github.com/Teradata/ai-unlimited/tree/develop/deployments/aws/templates/ai-unlimited)で定義されたクラウド リソースを作成するための [IAM](https://aws.amazon.com/iam/) 権限があることを確認してください。

- コマンドを実行したりデバッグしたりするためにマネージャインスタンスにアクセスする必要がある場合は、次のいずれかの方法で接続できます。
	- [キー ペア](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) を使用して、Secure Shell (SSH) で安全に接続します。 [スタックの詳細を指定する](../install-ai-unlimited/prod-aws-console-deploy-ai-unlimited.md#specify-stack-details-and-options)ときにキー ペアが必要になります。
	- AWS Session Manager を使用して接続します。これを有効にするには、 マネージャに [提供するロール](#provide-roles-created-by-your-organization)に[session-manager.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/session-manager.json)ポリシーを添付します。
  
- [Application Load Balancer (ALB)](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancer-getting-started.html) または [Network Load Balancer (NLB)](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancer-getting-started.html)を使用する場合は、次の AWS サービスを管理する権限があることを確認してください。
	[AWS Certificate Manager](https://docs.aws.amazon.com/acm/)- —Route 53 のホストゾーン ID の新しい証明書を発行します。
	\- [AWS Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html)—カスタムドメイン名を設定し、DNS クエリーをロード バランサにルーティングします。


## AI Unlimitedにロールの作成を許可する

マネージャには、エンジンをデプロイできるロールが必要です。エンジンには、エンジン ノードが通信できるロールが必要です。AI Unlimited にこれらのロールの両方を作成させることができます。

:::注記
セキュリティにより AI Unlimited によるロールの作成が許可されていない場合は、 [ロールを作成する](#provide-roles-created-by-your-organization) 自分で、またはクラウド管理者の支援を受けて作成してください。
::: 

### マネージャのロール

AI Unlimitedにこのロールを作成させるには、 [スタックの詳細を指定する](../install-ai-unlimited/prod-aws-console-deploy-ai-unlimited.md#specify-stack-details-and-options)ときに、次のパラメータに次の値を指定します:
    \- `IamRole`: **新規**
    \- `IamRoleName`: 空白のままにする

### エンジンのロール

AI Unlimited は、エンジンがデプロイされるたびに、エンジンの新しいロールを作成できます。 

AI Unlimited が作成するエンジン固有のポリシーは、次のように制限されます。	
  
  ```bash
  "Resource": ["arn:aws:secretsmanager:`REGION`:`ACCOUNT_ID`:secret:compute-engine/`CLUSTER_NAME`/`SECRET_NAME`"]
  ```

AI Unlimited がエンジンのデプロイメントごとに新しいロールを作成できるようにするには、AI Unlimited セットアップで [クラウド統合](../install-ai-unlimited/setup-ai-unlimited.md) を構成するときに、 **既定のIAMロール** フィールドを空白のままにします。


## 組織によって作成されたロールを提供する

セキュリティにより AI Unlimited によるロールの作成が許可されていない場合は、組織で作成されたロールを提供します。

Teradata が提供する [AI Unlimited GitHubリポジトリ](https://github.com/Teradata/ai-unlimited) 内の `deployments` フォルダには、マネージャ ロールとエンジン ロールのポリシー サンプルが含まれています。

ターミナル ウィンドウを開き、リポジトリをクローンします。

``` bash
git clone https://github.com/Teradata/ai-unlimited
	```

または、次のセクションにあるリンクを使用して必要なものをダウンロードしてください。


### マネージャのロール

- IAM リソースを作成する権限がある場合は、ロールを作成します。
  - ニーズを満たす JSON を含むポリシーをアタッチします。以下の JSON サンプルを参照してください。
  - [specify the stack details](../install-ai-unlimited/prod-aws-console-deploy-ai-unlimited.md#specify-stack-details-and-options) を実行する場合は、次のパラメータ値を使用します。
    - `IamRole`: **New**
	 - `IamRoleName`: 新しいロールの名前
- IAM リソースを作成する権限がない場合は、クラウド管理者と協力して既存のロールを使用します。
  - ニーズを満たす JSON を含むポリシーをアタッチします。以下の JSON サンプルを参照してください。
  - [specify the stack details](../install-ai-unlimited/prod-aws-console-deploy-ai-unlimited.md#specify-stack-details-and-options) を実行する場合は、次のパラメータ値を使用します:
  - `IamRole`: **既存**
  - `IamRoleName`: 既存のロールの名前
  
#### JSON サンプル

必要に応じて、マネージャのロールに添付されたポリシーで次のサンプルを使用します。

- AI Unlimited がエンジン ロールを作成できるようにします。 [ai-unlimited-workspaces.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces.json) を含めます。これには、エンジン インスタンスを作成する権限が含まれ、クラスター固有のロールとポリシーを作成するための AI Unlimited 権限が付与されます。

- セキュリティにより AI Unlimited によるロールの作成が許可されていない場合は、 [ai-unlimited-without-iam-role-permissions.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces-without-iam-role-permissions.json) を含めます。これにはエンジン インスタンスを作成するための権限が含まれますが、AI Unlimited がクラスター固有のロールとポリシーを作成するために必要な権限は含まれません。 

  :::注記
  マネージャのロールに [ai-unlimited-without-iam-role-permissions.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces-without-iam-role-permissions.json) を使用する場合は、エンジンのロールに  [ai-unlimited-engine.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json) を使用してください。
  :::

- オプションで、 [session-manager.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/session-manager.json) を含めます。これには、エンジンが [AWS Session Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html) と対話するための権限が含まれます。セッション マネージャを使用してエンジンに接続し、エンジンを詳細に管理する予定の場合は、これを使用します。


### エンジンの役割

- エンジンに提供するロールに、 [ai-unlimited-engine.json]を含むポリシーをアタッチします (https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json)。これにより、エンジンがデプロイされるたびに、AI Unlimited がロールをクラスターに渡すことができます。 

- ポリシーにアカウントの詳細を追加します。クラスター名は予測できないため、ワイルドカードを使用します。

  ``` bash
  "arn:aws:secretsmanager:`REGION`:`ACCOUNT_ID`:secret:compute-engine/*"
  or
  "arn:aws:secretsmanager:`REGION`:111111111111:secret:compute-engine/*"
  or
  "arn:aws:secretsmanager:us-west-2:111111111111:secret:compute-engine/*"
  
  ```
  
:::注記
エンジンのロールに [ai-unlimited-engine.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json) を使用する場合は、マネージャのロールに  [ai-unlimited-without-iam-role-permissions.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces-without-iam-role-permissions.json) を使用します。
:::

- AI Unlimited セットアップで [クラウド統合](../install-ai-unlimited/setup-ai-unlimited.md) を設定する場合は、 **既定のIAMロール** フィールドにロール名を入力します。








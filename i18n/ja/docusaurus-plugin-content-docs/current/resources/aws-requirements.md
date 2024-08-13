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

- コマンドを実行したりデバッグしたりするためにマネージャ インスタンスにアクセスする必要がある場合は、次のいずれかの方法で接続できます。
	- Secure Shell (SSH) を使用して安全に接続するには、 [キー ペア](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) を使用します。 [スタックの詳細を指定する](../install-ai-unlimited/prod-aws-console-deploy-ai-unlimited.md#specify-stack-details-and-options)を使用する場合はキー ペアが必要になります。
	- AWS Session Manager を使用して接続します。これを有効にするには、マネージャに提供する [ロール]に [session-manager.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/session-manager.json)ポリシーを添付します。(#provide-roles-created-by-your-organization)
  
- [Application Load Balancer (ALB)](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancer-getting-started.html) または [Network Load Balancer (NLB)](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancer-getting-started.html)を使用する予定の場合は、これらの AWS サービスを管理する権限があることを確認してください。
	- [AWS Certificate Manager](https://docs.aws.amazon.com/acm/)—Route 53 のホストゾーン ID の新しい証明書を発行します。
	\- [AWS Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html)—カスタムドメイン名を設定し、DNS クエリをロードバランサーにルーティングします。


## AI Unlimitedにロールの作成を許可する

マネージャには、エンジンをデプロイできるロールが必要です。エンジンには、エンジン ノードが通信できるロールが必要です。AI Unlimited にこれらのロールの両方を作成させることができます。

:::note
セキュリティにより AI Unlimited によるロールの作成が許可されていない場合は、 [ロールを作成する](#provide-roles-created-by-your-organization) 自分で、またはクラウド管理者の支援を受けて作成してください。
::: 

### マネージャのロール

AI Unlimited がこのロールを作成できるようにするには、 [スタックの詳細を指定する](../install-ai-unlimited/prod-aws-console-deploy-ai-unlimited.md#specify-stack-details-and-options)のときに、次のパラメータに次の値を指定します。
    \- `IamRole`: **New**
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

Or use the links provided in sections that follow to download what you need.


### Role for the manager

- If you have permissions to create IAM resources, create the role:
  - Attach a policy that includes the JSON that meets your needs. See the JSON samples that follow.
  - When you [specify the stack details](../install-ai-unlimited/prod-aws-console-deploy-ai-unlimited.md#specify-stack-details-and-options), use these parameter values:
    - `IamRole`: **New**
	 - `IamRoleName`: the new role's name
- If you don't have permissions to create IAM resources, work with your cloud admin to use an existing role:
  - Attach a policy that includes the JSON that meets your needs. See the JSON samples that follow.
  - When you [specify the stack details](../install-ai-unlimited/prod-aws-console-deploy-ai-unlimited.md#specify-stack-details-and-options), use these parameter values:
  - `IamRole`: **Existing**
  - `IamRoleName`: the existing role's name
  
#### JSON samples

Use these samples, as needed, in a policy attached to the manager's role:

- Allow AI Unlimited to create the engine role. Include [ai-unlimited-workspaces.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces.json). It includes permissions to create engine instances, and grants AI Unlimited permissions to create cluster-specific roles and policies.

- If your security does not allow AI Unlimited to create roles, include [ai-unlimited-without-iam-role-permissions.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces-without-iam-role-permissions.json). It includes permissions to create engine instances, but not those needed for AI Unlimited to create cluster-specific roles and policies. 

  :::note
  If you use [ai-unlimited-without-iam-role-permissions.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces-without-iam-role-permissions.json) for the manager's role, use  [ai-unlimited-engine.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json) for the engine's role.
  :::

- Optionally, include [session-manager.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/session-manager.json): It includes permissions for the engine to interact with the [AWS Session Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html). Use this if you plan to use Session Manager to connect to the engine to closely manage it.


### Role for the engine

- To the role you provide for the engine, attach a policy that includes [ai-unlimited-engine.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json). This allows AI Unlimited to pass the role to the cluster each time the engine is deployed. 

- Add your account details to the policy. You can't predict the cluster name, so use a wildcard.

  ``` bash
  "arn:aws:secretsmanager:`REGION`:`ACCOUNT_ID`:secret:compute-engine/*"
  or
  "arn:aws:secretsmanager:`REGION`:111111111111:secret:compute-engine/*"
  or
  "arn:aws:secretsmanager:us-west-2:111111111111:secret:compute-engine/*"
  
  ```
  
:::note
エンジンの役割に [ai-unlimited-engine.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json) を使用する場合は、マネージャのロールの  [場合は、ai-unlimited-without-iam-role-permissions.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces-without-iam-role-permissions.json) を使用します。
:::

- AI Unlimited セットアップで [クラウド統合](../install-ai-unlimited/setup-ai-unlimited.md) を設定する場合は、 **既定のIAMロール** フィールドにロール名を入力します。








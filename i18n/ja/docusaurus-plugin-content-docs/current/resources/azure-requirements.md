---
id: azure-account-requirements
title: Azure アカウントの要件
description: AI Unlimited のインストール用に Azure アカウントを準備する方法
sidebar_label: Azure アカウントの要件
sidebar_position: 2
pagination_prev: null
pagination_next: null
---

# Azure アカウントの要件

まず、 [前提条件](../install-ai-unlimited/index.md#prerequisites)が満たされていることを確認してください。 

次に、AI Unlimited をインストールする前に、これらの Azure 項目に対処します。


## Azureアカウントを準備する

- クラウド管理者と貢献して、Azure アカウントに [AI Unlimitedテンプレート](https://github.com/Teradata/ai-unlimited/tree/develop/deployments/azure/templates/arm/ai-unlimited)で定義されているクラウド リソースを作成するためのアクセス許可があることを確認します。 

- ネットワーク要件: Azure [リソース グループ](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal) には [サブネット](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-subnet?tabs=azure-portal)が構成された[Azure Virtual Network (VNet)](https://learn.microsoft.com/en-us/azure/virtual-network/quick-create-portal) が必要です。アカウントのアクセス許可に応じて、既存の VNet またはサブネットを使用するか、独自の VNet またはサブネットを作成します。 

- コマンドを実行したりデバッグしたりするためにマネージャ インスタンスにアクセスする必要がある場合は、 [キー ペア](https://learn.microsoft.com/en-us/azure/virtual-machines/ssh-keys-portal) を使用して、セキュア シェル (SSH) で安全に接続できます。 [インスタンスの詳細を指定する](../install-ai-unlimited/prod-azure-portal-deploy-manager.md#specify-instance-details)ときに、キー ペアが必要になります。


## マネージャのロールを作成する

マネージャには、次の操作を実行できるロールが必要です。
- エンジンをデプロイする。
- エンジンのノードが通信できるようにする新しいロールを (エンジンをデプロイするたびに) 作成する。

Teradata が提供する [AI Unlimited GitHubリポジトリ](https://github.com/Teradata/ai-unlimited) の `deployments` フォルダには、マネージャ ロール ARM テンプレートとポリシー サンプルが含まれています。

	ターミナル ウィンドウを開き、リポジトリをクローンします。

    ``` bash
    git clone https://github.com/Teradata/ai-unlimited
	```

または、次のリンクを使用して必要なものをダウンロードしてください。

ロールを作成します。

- ロールを作成するために必要な権限がある場合は、 [role-policy](https://github.com/Teradata/ai-unlimited/tree/develop/deployments/azure/templates/arm/init/role-policy.json) ARM テンプレートを使用してマネージャのロールを作成します。 [ARM テンプレートを使用して Azure カスタム ロールを作成または更新する](https://learn.microsoft.com/en-us/azure/role-based-access-control/custom-roles-template)を参照してください。

- または、マネージャに必要な権限を含む [ai-unlimited.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/azure/policies/ai-unlimited.json) ポリシーをクラウド管理者と共有して、クラウド管理者がロールを作成できるようにします。

[インスタンスの詳細を指定する](../install-ai-unlimited/prod-azure-portal-deploy-manager.md#specify-instance-details)ときには `RoleDefinitionId` が必要になります。 









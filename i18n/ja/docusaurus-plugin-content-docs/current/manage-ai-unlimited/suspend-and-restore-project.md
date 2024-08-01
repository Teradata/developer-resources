---
id: suspend-and-restore-project
title: プロジェクトの中断と復元
description: コストを管理するためにプロジェクトを中断および復元する方法。
sidebar_position: 2
sidebar_label: プロジェクトの中断と復元
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# プロジェクトの中断と復元

必要に応じてプロジェクトを中断したり復元したりできます。


## 中断する

不要なエンジン リソースに対して料金が発生しないようにするには、作業していないプロジェクトを中断します。

ユーザー認証、オブジェクト ストア認証、およびデータ オブジェクトが保存されます。プロジェクトを復元して再デプロイすると、中断したところから再開できます。

ノートブックで、次のマジック コマンドを実行します。

```bash 
%project_engine_suspend <Project_Name>
```


## 復元（再デプロイ）

ノートブックで、次のマジック コマンドを実行します。 

<Tabs>
<TabItem value="aws1" label="AWS">

```bash 
%project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore-<true|false>, prefixlist=<Prefix_List>, securitygroups=<Security_Group>, cidrs=<CIDR>, tags=<Tags>, iamrole=<IAM_Role>, roleprefix=<Role_Prefix>, permissionboundary=<Permission_Boundary>
```
</TabItem>
<TabItem value="azure" label="Azure">

```bash 
%project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore=<true|false>, network=<Network>, keyvault=<Key_Vault>, keyvaultresourcegroup=<Key_Vault_Resource_Group>, networkresourcegroup=<Network_Resource_Group>
```
</TabItem>
</Tabs>

ノードの数を指定しない場合は、1 つのノードがデプロイされます。 

restore パラメータについては、デフォルト値の true のままにします。これにより、プロジェクトが最新の Git コミットの状態に復元されます。

エンジンがデプロイされるたびに、エンジンに接続するための新しいパスワードがユーザーごとに生成されます。

:::tip
AI Unlimited [マジック コマンド](../explore-and-analyze-data/magic-commands.md)の詳細については、こちらをご覧ください 。
:::


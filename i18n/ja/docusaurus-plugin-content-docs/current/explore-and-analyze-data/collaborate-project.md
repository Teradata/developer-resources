---
id: collaborate-project
title: プロジェクトに貢献する
description: 貢献者としてプロジェクトにアクセスする方法を学ぶ
sidebar_position: 3
sidebar_label: プロジェクトに貢献する
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# プロジェクトに貢献する

プロジェクトは、Jupyter ノートブックからデータを探索および分析するための手段です。 

:::note
各プロジェクトには Git リポジトリがあります。 [理由を学ぶ](../glossary.md#project-repository)。
:::

プロジェクト所有者は貢献者として [プロジェクトにあなたを追加する](../manage-ai-unlimited/add-collaborators.md) 場合があります。貢献するには、Jupyter ノートブックからプロジェクトにアクセスする必要があります。


## 始める前に

- プロジェクト所有者から次のアイテムを取得します。
  - [AI Unlimitedマネージャ](../glossary.md#ai-unlimited-manager)のIPアドレスまたはのホスト名
  - プロジェクト名

- あなたのプロフィールから、 [APIキーを取得する](./get-api-key.md)。 

:::tip
ノートブックで使用できるすべてのマジック コマンドの詳細については  、`%help`を実行してください。そのうちの 1 つの詳細については  、`%help <command>`を実行してください。 

または、AI Unlimited に固有の [マジック コマンド](./magic-commands.md) について学びます。 
:::


## プロジェクトにアクセスする

1. JupyterLab に接続し、ノートブックを開いて、AI Unlimited カーネルを選択します。

2. マネージャに接続します。
    ```bash 
    %workspaces_config host=<ip_or_hostname>, apikey=<API_Key>, withtls=<T|F>
    ```

3. エンジンがデプロイされているかどうかを確認します。
    ```bash 
    %project_engine_list project=<Project_Name>
    ```

4. エンジンがデプロイされていない場合は、デプロイしてプロジェクトを復元します。 

   サイズは、small、medium、large、extralargeのいずれかです。デフォルトはsmallです。料金情報については、 [AWS](http://aws.amazon.com/marketplace/pp/prodview-2srvuo3mwqlig) または [Azure](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/teradata.ai-unlimited?tab=Overview) を参照してください。
   
   ノードの数を指定しない場合は、1 つのノードがデプロイされます。復元のデフォルトは true です。
   
   <Tabs>
   <TabItem value="aws1" label="AWS">

   ```bash 
   %project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore=<true|false>, prefixlist=<Prefix_List>, securitygroups=<Security_Group>, cidrs=<CIDR>, tags=<Tags>, iamrole=<IAM_Role>, roleprefix=<Role_Prefix>, permissionboundary=<Permission_Boundary>
   ```

   </TabItem>
   <TabItem value="azure" label="Azure">

   ```bash 
   %project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore=<true|false>, network=<Network>, keyvault=<Key_Vault>, keyvaultresourcegroup=<Key_Vault_Resource_Group>, networkresourcegroup=<Network_Resource_Group>
   ```
   </TabItem>
   </Tabs>

5. エンジンのパスワードを取得します。
   ```bash
   %project_user_list project=<Project_Name>
   ```

6. ノートブックを含めるには接続を更新します。
   ```bash 
   %project_connection_add project=<Project_Name>
   ```

7. プロジェクトに接続します。
   ```bash
   %connect <Project_Name>
   ```
   接続が確立したら、パスワードを入力します。
   
準備完了です。これでプロジェクトに貢献できます。



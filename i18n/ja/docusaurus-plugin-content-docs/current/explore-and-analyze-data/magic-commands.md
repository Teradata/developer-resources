---
id: magic-commands
title: マジック コマンド
description: Jupyter ノートブックでプロジェクトを管理するために使用できる AI Unlimited マジック コマンドについて学習します。
sidebar_label: マジック コマンド
sidebar_position: 5
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# マジック コマンド

Jupyter ノートブックでは、マジック コマンドは一般的なタスクのショートカットです。AI Unlimited マジック コマンドを使用すると、エンジンに接続してプロジェクトを管理できます。

AI Unlimited Jupyter カーネルは、標準の Teradata SQL カーネル マジック コマンドに加えて、ここで説明するマジック コマンドもサポートしています。 


## %workspaces_config

**説明**: ノートブックと AI Unlimited マネージャ間の通信を確立します。

**使用法**:
```bash 
%workspaces_config host=<ip_or_hostname>, apikey=<API_Key>, withtls=<T|F>
```
条件:

- ホスト： AI Unlimited マネージャの名前または IP アドレス。

- apikey: AI Unlimited セットアップ **プロファイル** ページからの API キー値。

- **`[オプション]`** withTLS: False (F) の場合、デフォルトのクライアント/サーバー通信では TLS は使用されません。

**出力**:
```
Workspace configured for host=<ip_or_hostname>
```

## %project_create

**説明**: 新しいプロジェクトを作成します。このコマンドは、Git アカウントにプロジェクト名の新しいリポジトリも作成します。設定は **engine.yml** ファイルに保存されます。

**使用法**:
```bash
%project_create project=<Project_Name>, env=<Cloud_Service_Provider>, team=<Project_Team>
```
条件:

- project: 作成するプロジェクトの名前。

- env: プロジェクトがホストされているクラウド環境。現在のリリースでは、AWS と Azure がサポートされています。

- **`[オプション]`** team: プロジェクトで共同作業するチームの名前。

**出力**:
```
Project `Project_Name` created
```

## %project_delete

**説明**: プロジェクトを削除します。これにより、プロジェクト リポジトリは削除されません。マネージャからプロジェクト メタデータが削除されます。 

**使用法**:
```bash 
%project_delete project=<Project_Name>, team=<Project_Team>
```

条件:

- project: 削除するプロジェクトの名前。

- **`[オプション]`** team: プロジェクトで共同作業するチームの名前。

**出力**:
```
Project `Project_Name` deleted
```

## %project_list

**説明**: 1 つまたはすべてのプロジェクトの詳細を一覧表示します。

特定のプロジェクトの詳細を取得するには、プロジェクト パラメータを使用します。パラメータなしでコマンドを実行すると、すべてのプロジェクトがリストされます。

**使用法**:
```bash
%project_list project=<Project_Name>
```
条件:

- project: プロジェクト名。

**出力**:

```
| NAME          | URL      | 
|---------------|----------|
| <Project_Name>| <Git_URL>| 

```

## %project_auth_create

**説明**: オブジェクト ストア認証情報を格納するための許可オブジェクトを作成します。

エンジンをデプロイする前に、許可オブジェクトを作成する必要があります。許可の詳細は保持され、プロジェクトの再デプロイ時に含められます。オプションで、エンジンをデプロイした後、 `CREATE AUTHORIZATION` SQL コマンドを使用して手動で許可を作成することもできます。この場合、許可の詳細は保持されません。

**使用法**:
```bash 
%project_auth_create project=<Project_Name>, name=<Authorization_Name>, key=<Authorization_Key>, secret=<Authorization_Secret>, region=<ObjectStore_Region>, token=<Session_Token>
```
条件:

- project: プロジェクトの名前。

- name:	オブジェクト ストアの認証名。

- key: オブジェクト ストアの認証キー。

- **`[オプション]`** secret: オブジェクト ストアの認証シークレット アクセス ID。

- **`[オプション]`** region: オブジェクト ストアのリージョン。ローカル オブジェクト ストアの場合は local。

- **`[オプション]`** token: オブジェクト ストア アクセス用のセッション トークン。

- **`[オプション - AWS のみ]`** role: ロールとその権限を引き受けて、AWS アカウントから AWS リソースにアクセスする IAM ユーザーまたはサービスアカウント。AWS リソースの所有者がロールを定義します。例: arn:aws:iam::00000:role/STSAssumeRole。

- **`[オプション - AWS のみ]`** ExternalID: オブジェクト ストアへのアクセスに使用される外部 ID。このパラメータは `role` 、パラメータを使用する場合に必須です。

**出力**:
```
Authorization 'name' created
```

## %project_auth_update

**説明**: オブジェクト ストアの許可を更新します。

**使用法**:

```bash 
%project_auth_update project=<Project_Name>, name=<Authorization_Name>, key=<Authorization_Key>, secret=<Authorization_Secret>, region=<ObjectStore_Region>, token=<Session_Token>

```
条件:

- project: プロジェクトの名前。

- name: オブジェクト ストアの許可名。

- key: オブジェクト ストアの認証キー。

- **`[オプション]`** secret: オブジェクト ストアの認証シークレット アクセス ID。

- **`[オプション]`** region: オブジェクト ストアのリージョン。ローカル オブジェクト ストアの場合は local。

- **`[オプション]`** token: オブジェクト ストア アクセス用のセッション トークン。

- **`[オプション - AWS のみ]`** role: ロールとその権限を引き受けて、CSP アカウントから AWS または Azure リソースにアクセスする IAM ユーザーまたはサービス アカウント。AWS または Azure リソースの所有者がロールを定義します。例: arn:aws:iam::00000:role/STSAssumeRole。

- **`[オプション - AWS のみ]`** ExternalID: オブジェクト ストアへのアクセスに使用される外部 ID。このパラメータは `role` 、パラメータを使用する場合に必須です。

**出力**:
```
Authorization 'name' updated
```

## %project_auth_delete

**説明**: オブジェクト ストアの許可を削除します。

**使用法**:
```bash
%project_auth_delete project=<Project_Name>, name=<Authorization_Name>
```
条件:

- project: プロジェクトの名前。

- name:	オブジェクト ストアの認証名。

**出力**:
```
Authorization 'name' deleted
```

## %project_auth_list

**説明**: プロジェクトに対して作成されたオブジェクト ストアの許可を一覧表示します。

**使用法**:
```bash 
%project_auth_list project=<Project_Name>

```
条件:

- project: プロジェクトの名前。

**出力**:
```
| AUTH NAME           | ACCESS KEY  | SECRET  | 
|---------------------|-------------|---------|
| <Authorization_Name>| <ACCESS_KEY>| <SECRET>| 
```

## %project_engine_deploy

**説明**: プロジェクトのエンジンをデプロイします。デプロイ プロセスは完了するまでに数分かかります。デプロイが成功すると、パスワードが生成されます。

**使用法**:

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

条件:

- project: プロジェクトの名前。

- size: エンジンのサイズ。値は次のとおりです。

  - small
  - medium
  - large
  - extralarge

- **`[オプション]`** node: デプロイするエンジン ノードの数。デフォルト値は 1 です。

- **`[オプション]`** subnet: AI Unlimited セットアップからデフォルト値がない場合にエンジンに使用されるサブネット。

- **`[オプション]`** region: AI Unlimited セットアップからのデフォルト値がない場合にエンジンに使用されるリージョン。

- **`[オプション]`** restore: False (F) の場合、エンジンはデプロイされますが、プロジェクトのオブジェクトは復元されないため、デプロイ時間が短縮されます。%project_restore を使用して手動で復元できます。デフォルト値は True (T) です。 

<Tabs>
<TabItem value="aws1" label="AWS">

- **`[オプション]`** プレフィックスリスト: 同じポリシーの適用を必要とする IP アドレス範囲のセットを定義する CIDR ブロックのコレクション。エンジンと通信できる IP アドレスを指定するために使用されます。

- **`[オプション]`** securitygroups: 各リージョンの VPC のセキュリティ グループのリスト。セキュリティ グループを指定しない場合、エンジンは VPC のデフォルトのセキュリティ グループに自動的に関連付けられます。

- **`[オプション]`** cidrs: エンジンに使用される CIDR アドレスのリスト。

- **`[オプション]`** tags: エンジンに割り当てられた、すばやく識別できるキーと値のペア。

- **`[オプション]`** iamrole: エンジンに使用される IAM ロール。

- **`[オプション]`** roleprefix: エンジンに割り当てられた IAM ロールの先頭に追加される文字列。

- **`[オプション]`** permissionboundary: エンジンに割り当てられた IAM ロールに関連付ける IAM アクセス許可境界の ARN。アクセス許可境界は、ロールが持つことができる最大のアクセス許可を定義します。

</TabItem>
<TabItem value="azure" label="Azure">

- **`[オプション]`** ネットワーク: エンジンをデプロイするネットワーク。

- **`[オプション]`** keyvault: エンジンが使用するキー ボールト。パスワードなどの機密情報を安全に保存できます。

- **`[オプション]`** keyvaultresourcegroup: キー コンテナを含むリソース グループ。

- **`[オプション]`** networkresourcegroup: ネットワークを含むリソース グループ。

</TabItem>
</Tabs>

**出力**:
```
Started deploying.
Success: Compute Engine setup, look at the connection manager
```

## %project_engine_suspend

**説明**: 作業が完了したらエンジンを停止してください。

**使用法**:
```bash 
%project_engine_suspend <Project_Name>
```
条件:

- project: プロジェクトの名前。

**出力**:
```
Started suspend
Success: Suspended Compute Engine
```

## %project_engine_list

**説明**: プロジェクトにデプロイされたエンジンのリストを表示します。

**使用法**:
```bash 
%project_engine_list project=<Project_Name>
```
条件:

- project: プロジェクトの名前。

**出力**:
```
| IP   | STATE   | REGION  | SIZE             | NODE             |
|------|---------|---------|------------------|------------------|
| <IP> | Deployed| <Region>| <Size_of_Engine> | <Number_of_Nodes>|
```

## %project_user_list

**説明**: Git リポジトリ内のプロジェクトに割り当てられた貢献者のリストを表示します。

**使用法**:
```bash
%project_user_list project=<Project_Name>
```

条件:

- **`[オプション]`** project: プロジェクトの名前。

**出力**:
```
| PROJECT ID   | USER  | PASSWORD  |
|--------------|-------|-----------|
| <Project_ID> | <User>| <Password>| 
```

## %project_backup

**説明**: エンジン内のプロジェクト情報とオブジェクト定義をバックアップします。

**使用法**:
```bash
%project_backup project=<Project_Name>
```
条件:

- project:	プロジェクトの名前。

**出力**:
```
Backup of the object definitions created
```

## %project_restore

**説明**: Git リポジトリからプロジェクト情報とオブジェクト定義を復元します。

**使用法**:
```bash 
%project_restore project=<Project_Name>, gitref=<Git_Reference>
```
条件:

- project:	プロジェクトの名前。
- **`[オプション]`** gitref: 最新から復元したくない場合に、プロジェクトを復元するコミットの Git 参照。

**出力**:
```
Restore of the object definitions done
```

## %project_engine_update_users

**説明**: デプロイされたエンジンのユーザーを更新します。エンジンのデプロイ後にユーザーが Git リポジトリに貢献者として追加された場合は、このコマンドを使用して、デプロイされたエンジンのユーザーを更新および新規作成できます。

**使用法**:
```bash 
%project_engine_update_users project=<Project_Name>
```
条件:

- project:	プロジェクトの名前。

**出力**:
```
Username and password of each user on the engine
```

## %project_engine_update_auth

**説明**: エンジンを中断して再デプロイすることなく、デプロイされたエンジンで新しい許可を更新または追加します。

**使用法**:
```bash 
%project_engine_update_auth project=<Project_Name>
```
条件:

- project:	プロジェクトの名前。


**出力**:
```
Authorizations updated
```

## %project_connection_add

**説明**: デプロイされたエンジンの接続を更新します。このコマンドを使用法すると、手動で新しい接続を作成しなくても、別のノートブックからエンジンに接続できます。

**使用法**:
```bash 
%project_connection_add project=<Project_Name>
```
条件:

- project:	プロジェクトの名前。


**出力**:
```
The connection manager shows the refreshed connection
```

## %help

**説明**: AI Unlimited カーネルによって提供されるマジック コマンドのリストを表示します。

**使用法**:
```bash
%help
```
さらに、コマンドごとに詳細なヘルプ メッセージを表示できます。

**使用法**:
```bash 
%help `command`
```
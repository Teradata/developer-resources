---
id: docker-when-you're-done
title: QuickStart | 使用後
description: QuickStartの使用が完了したら何をすべきかを学びます。
sidebar_label: 使用後
sidebar_position: 7
pagination_prev: null
pagination_next: null
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 使用後

不要なエンジン リソースに対する料金が発生しないようにするには、作業していない[プロジェクトを中断する](../../manage-ai-unlimited/suspend-and-restore-project.md)を実行します。いつでもそれらを復元できます。

QuickStartが完了し、コンピューターのリソースを解放したい場合は、このコマンドを実行して、作成されたすべてのコンテナとネットワークを停止して削除します。

<Tabs>
<TabItem value="aws" label="AWS">
  ```bash 
docker-compose -f ai-unlimited.yaml -f aws-credentials-env-vars.yaml -f jupyter.yaml down
  ```
</TabItem>

<TabItem value="azure" label="Azure">
 ```bash
docker-compose -f ai-unlimited.yaml -f azure-credentials-env-vars.yaml -f jupyter.yaml down
  ```
</TabItem>
</Tabs> 

Docker コンテナにマウントした、エンジン データを含むローカル ディレクトリまたはファイルを削除することもできます。 


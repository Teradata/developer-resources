---
id: run-ai-unlimited-jupyterlab-docker
title: マネージャとJupyterLabをローカルで実行する
description: Docker を使用して AI Unlimited マネージャと JupyterLab を実行する方法を学びます。
sidebar_label: Dockerを使用してマネージャとJupyterLabを実行する
sidebar_position: 3
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Dockerを使用してマネージャとJupyterLabを実行する

AI Unlimited マネージャは、エンジンのデプロイを調整し、プロジェクトを監視するための Web ベースのユーザー インターフェイスを備えています。マネージャで AI Unlimited を設定します。 

JupyterLab を使用してデータを探索および分析します。

[Docker Compose](https://docs.docker.com/compose/) を使用して、AI Unlimited マネージャと JupyterLab を、AI Unlimited Jupyter カーネルとともにコンテナ内でローカルに実行します。 

:::ヒント
インストールに関するサポートについては、 <a href="mailto:aiunlimited.support@Teradata.com">サポート チーム</a> にメールを送信するか、 [コミュニティ](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa)にお問い合わせください。
:::

## 前提条件

- Jupyter ノートブックからエンジンをデプロイするための従量課金制の AWS または Azure アカウント
- ユーザーを認証し、プロジェクト情報を保存するための各プロジェクト リポジトリをホストする [GitHub](https://github.com) または [GitLab](https://gitlab.com) アカウント
- Amazon または ADLS Gen2 データレイクが存在するオブジェクト ストレージ
- [Docker](https://www.docker.com/get-started/) コンピュータにインストールされている


## 設定ファイルの場所を設定する

1. オプションで、マネージャの設定ファイルとデータ ファイルを保存するディレクトリを `AI_UNLIMITED_HOME` 環境変数に設定します。ディレクトリが存在し、適切な権限が付与されていることを確認してください。デフォルトの場所は `./volumes/ai-unlimited`です。

    | **ローカルロケーション** | **コンテナの場所** | **使用** |
    |----------------|--------------------|-------|
    | $AI_UNLIMITED_HOME | /etc/td | データと設定を保存する |

	:::ヒント [AWS](https://docs.aws.amazon.com/sdkref/latest/guide/environment-variables.html) または [Azure](https://github.com/paulbouwer/terraform-azure-quickstarts-samples/blob/master/README.md#azure-authentication) 環境変数について学習します。

	:::

2. オプションで、 `JUPYTER_HOME` 環境変数を、JupyterLab 構成ファイルを保存するディレクトリに設定します。デフォルトの場所は `~/.jupyter`です。


## リポジトリをクローンする

Teradata が提供する [AI Unlimited GitHubリポジトリ](https://github.com/Teradata/ai-unlimited) 内の `deployments/docker` フォルダには、マネージャと JupyterLab を実行するために必要な次のファイルが含まれています。
- `[AWS or Azure]-credentials-env-vars.yaml`
- `ai-unlimited.yaml`
- `jupyter.yaml` 

リポジトリをクローンします。

    ``` bash
    git clone https://github.com/Teradata/ai-unlimited
	```


## クラウド サービス プロバイダの認証情報をDockerに渡す

:::注記
認証情報を渡す方法は 2 つあります。
- 認証情報を保存するための環境変数を含む `[AWS or Azure]-credentials-env-vars.yaml`を使用します。
- 認証情報を含むローカル ボリュームを使用します。 

両方の方法については、Teradata AI Unlimited GitHub リポジトリの [Docker Compose でデプロイする](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/docker/README.md) の **Jupyter と AI Unlimited** セクションを参照してください。

このQuickStartでは最初の方法を使用します。
:::

1. クラウド サービス プロバイダのコンソールからこれらの環境変数をコピーします。

	<Tabs>
		<TabItem value="aws" label="AWS" default>
		`AWS_ACCESS_KEY_ID`、 `AWS_SECRET_ACCESS_KEY`、 そして `AWS_SESSION_TOKEN`
		</TabItem>

		<TabItem value="azure" label="Azure">
		`ARM_SUBSCRIPTION_ID`、 `ARM_CLIENT_ID`、 そして `ARM_CLIENT_SECRET`
		</TabItem>
	</Tabs>

2. `[AWS or Azure]-credentials-env-vars.yaml` が配置されているディレクトリに移動し、ファイルの環境変数の値を更新します。


## マネージャとJupyterLabを起動する

1. `[AWS or Azure]-credentials-env-vars.yaml`、 `ai-unlimited.yaml`、 `jupyter.yaml` があるディレクトリから、マネージャと JupyterLab を起動します。

	:::注記
	コマンド内の `-d` フラグはオプションです。
	:::

	<Tabs>
		<TabItem value="aws" label="AWS" default>
		```bash title="Run the Docker Compose file in the background "
		docker compose -f ai-unlimited.yaml -f aws-credentials-env-vars.yaml -f jupyter.yaml -d up 
		```
		</TabItem>
		<TabItem value="azure" label="Azure">
		```bash title="Run the Docker Compose file in the background "
		docker compose -f ai-unlimited.yaml -f azure-credentials-env-vars.yaml -f jupyter.yaml -d up
		```
		</TabItem>
	</Tabs>

	このコマンドは、マネージャと JupyterLab コンテナをダウンロードして起動します。

2. Jupyter トークンを取得するには、現在実行中のコンテナを一覧表示します。

	```bash
	docker ps 
	```
	JupyterLab コンテナの名前を特定します。

	次に、コンテナのログで文字列「Token」の出現を検索します。

	```bash
	docker logs <container_name> | grep 'Token'
	```

## アクセスを確認する

マネージャの準備ができたら、 `http://localhost:3000`でアクセスできるようになります。 

JupyterLabの準備ができたら、 `http://localhost:8888`でアクセスし、トークンを入力します。 


## 次のステップ

[OAuthアプリを作成する](../../create-oauth-app) AI Unlimited と Git プロバイダ アカウント間の認証を許可します。



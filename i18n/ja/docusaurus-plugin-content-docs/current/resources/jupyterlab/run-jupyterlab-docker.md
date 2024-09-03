---
id: run-jupyter-docker
title: Dockerを使用してJupyterLabを実行する
description: コンピューター上の AI Unlimited Jupyter カーネルを使用して JupyterLab を実行する方法を学びます。
sidebar_label: Dockerを使用してローカルで実行する
sidebar_position: 3
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Dockerを使用してJupyterLabをローカルで実行する

[Docker Compose](https://docs.docker.com/compose/) を使用して、AI Unlimited Jupyter カーネルを搭載した JupyterLab をコンテナ内でローカルに実行します。

:::tip
インストールに関するサポートについては、 <a href="mailto:aiunlimited.support@Teradata.com">サポート チーム</a> にメールを送信するか、 [コミュニティ](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa)にお問い合わせください。
:::


## JupyterLab設定ファイルの場所を設定する

オプションで、 `JUPYTER_HOME` 環境変数を、JupyterLab 構成ファイルを保存するディレクトリに設定します。デフォルトの場所は `~/.jupyter`です。

:::tip
[AWS](https://docs.aws.amazon.com/sdkref/latest/guide/environment-variables.html) または [Azure](https://github.com/paulbouwer/terraform-azure-quickstarts-samples/blob/master/README.md#azure-authentication) 環境変数について学習します。
:::


## リポジトリをクローンする

Teradata が提供する [AI Unlimited GitHubリポジトリ](https://github.com/Teradata/ai-unlimited) 内の `deployments/docker` フォルダには [jupyter.yaml](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/docker/jupyter.yaml) ファイルが含まれており、JupyterLab を実行する必要があります。 

リポジトリをクローンします。

    ``` bash
    git clone https://github.com/Teradata/ai-unlimited
	```


## JupyterLabを起動する

1. `jupyter.yaml` があるディレクトリに移動し、JupyterLab を起動します。

    :::note
	コマンド内の `-d` フラグはオプションです。
	:::

  	```bash title="Run the Docker Compose file in the background "
	docker compose -f jupyter.yaml -d up 
	```
	このコマンドは、JupyterLab コンテナをダウンロードして起動します。

2. Jupyter トークンを取得するには、現在実行中のコンテナを一覧表示します。

	```bash
	docker ps 
	```

	JupyterLab コンテナの名前を特定します。

	次に、コンテナのログで文字列「Token」の出現を検索します。

	```bash
	docker logs <container_name> | grep 'Token'
	```


## JupyterLabへのアクセスを確認する

JupyterLabの準備ができたら、 `http://localhost:8888`でアクセスし、トークンを入力します。 




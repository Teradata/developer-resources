---
id: get-started
title: 始めましょう
description: セルフサービス型のオンデマンド AI/ML エンジンの使用を開始する方法を学びます。
sidebar_label: 始めましょう
sidebar_position: 1
pagination_prev: null
pagination_next: null
---

# 始めましょう

クラウドで [AI Unlimited](https://www.teradata.com/platform/ai-unlimited) AI/ML エンジンをインストールして使用する方法を学びます。

AI Unlimited を使用すると、データ サイエンティストやデータ エンジニアは、関数を使用して [Jupyter](https://jupyter.org/) ノートブック内の大規模なデータセット [ClearScape Analytics™](https://docs.teradata.com/access/sources/dita/topic?dita:mapPath=phg1621910019905.ditamap&dita:ditavalPath=pny1626732985837.ditaval&dita:topicPath=gma1702668333653.dita) を、セルフサービスかつオンデマンドで探索および分析できます。 


## 使い方

ノートブックを [AWS](https://aws.amazon.com/) または [Azure](https://azure.microsoft.com/en-us)の AI/ML エンジンに接続し、エンジンを [Amazon S3](https://aws.amazon.com/pm/serv-s3/?gclid=Cj0KCQjwlZixBhCoARIsAIC745AmyEzPaBnrARQxyUW_un0BjgTxlHygMScf4ZbX-7dTeznc-psOFlwaAkjmEALw_wcB&trk=fecf68c9-3874-4ae2-a7ed-72b6d19c8034&sc_channel=ps&ef_id=Cj0KCQjwlZixBhCoARIsAIC745AmyEzPaBnrARQxyUW_un0BjgTxlHygMScf4ZbX-7dTeznc-psOFlwaAkjmEALw_wcB:G:s&s_kwcid=AL!4422!3!536452728638!e!!g!!amazon%20s3!11204620052!112938567994) または [ADLS Gen2](https://learn.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction) データレイクに接続します。分析プロジェクトはいつでも中断および復元でき、使用した時間に対してのみ料金をお支払いいただきます。

:::note
組織内の誰かが AI Unlimited をすでにインストールしてセットアップしている場合は、 [データの探索と分析](../explore-and-analyze-data) に直接進んで開始できます。
:::


## AI Unlimitedに含まれるもの

- AWS または Azure にデプロイする AI/ML エンジン
- AI Unlimitedマネージャは、エンジンのデプロイを調整し、セットアップ用のWebベースのユーザーインターフェイスを備えています。
- ノートブックでプロジェクトを管理するための [AI UnlimitedのJupyterカーネル](https://downloads.teradata.com/download/tools/teradata-ai-unlimited-jupyter-kernel)


## 前提条件

- コンピューティング リソースをプロビジョニングするための従量課金制の AWS または Azure アカウント。 [AWS](../resources/aws-requirements.md) または [Azure](../resources/azure-requirements.md) アカウントの要件を参照してください。
- ユーザーを認証し、プロジェクト情報を保存するために各プロジェクト リポジトリをホストする [GitHub](https://github.com) または [GitLab](https://gitlab.com) アカウント。
- Amazon または ADLS Gen2 データレイクが存在するオブジェクト ストレージ。
- JupyterLab。[インストール オプション](../resources/jupyterlab)を参照してください。

:::tip
[マネージャ](../glossary.md#ai-unlimited-manager)をインストールするときに、クラウドデプロイに必要な詳細情報を提供します。クラウド管理者と貢献して事前に詳細情報を取得する場合は [AWSの詳細](../install-ai-unlimited/prod-aws-console-deploy-ai-unlimited.md)、または [Azureの詳細](../install-ai-unlimited/prod-azure-portal-deploy-manager.md)を参照してください。
:::

:::note
AI Unlimited を使用すると、他のユーザーとプロジェクトで共同作業を行うことができます。 

よりシンプルな single-user アプローチを希望する場合は、コンピューター上の Docker コンテナでマネージャと JupyterLab を実行する [QuickStart](../resources/quickstart) をお試しください。
:::


## サブスクライブする

[AWS Marketplace](http://aws.amazon.com/marketplace/pp/prodview-2srvuo3mwqlig) または [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/teradata.ai-unlimited?tab=Overview)で AI Unlimited にご登録ください。

**Azureのみ**: **今すぐ入手**を選択する前に、次の手順を完了してください。
1.  [ライセンス契約](https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RW1lQlq)をお読みください。
2. ターミナル ウィンドウを開き、このコマンドを実行します。
    ``` bash
    az vm image terms accept --publisher teradata --offer ai-unlimited-vm --plan ai-unlimited-image
	```

AWS または Azure の場合は、サブスクライブ後、このドキュメント サイトに戻り、 **次のステップ**に進みます。


## 次のステップ

これで、 [AWS](deploy-manager-aws-console) または [Azure](deploy-manager-azure-portal)に AI Unlimited をインストールする準備が整いました。









---
id: glossary
title: 用語集
description: AI Unlimited のインストールと使用に関する用語。
sidebar_label: 用語集
sidebar_position: 7
pagination_prev: null
pagination_next: null
---

# 用語集


## A

### AI Unlimited manager

マネージャは、AI/ML [engine](#engine) の [cloud service provider](#cloud-service-provider)へのデプロイを調整する AI Unlimited コンポーネントです。また、AI Unlimited 管理者がインストール後に AI Unlimited を設定し、必要に応じて後で設定を変更するための Web ベースのユーザー インターフェイスも提供します。すべてのユーザーはマネージャから API キーを取得します。

### API key

アプリケーション プログラミング インターフェイス (API) キーを使用すると、Jupyter ノートブックをマネージャに接続できます。これは、プロジェクトを作成またはアクセスする前に、新しい Jupyter ノートブックで最初に行うことです。

### application load balancer

ロード バランサは、受信トラフィックをサーバー間で分散します。アプリケーション ロード バランサは、HTTP ヘッダーやパスなどの受信トラフィックのコンテンツを検査して、ルーティングを決定します。アプリケーション ロード バランサを使用して、AI Unlimited マネージャとエンジンをパブリック IP ネットワークに公開できます。


## C

### Classless Inter-domain Routing

クラスレス インタードメイン ルーティング (CIDR) は、インターネット上のデータ ルーティング効率を高めるための IP アドレス割り当て方法です。インターネットに接続するすべてのコンピューターには、IP アドレスと呼ばれる固有の番号があります。IP アドレスにより、コンピューターは互いを見つけて通信することができます。CIDR ブロックは、IP アドレスの範囲です。

### cloud service provider

クラウド サービス プロバイダ (CSP) は、インターネット経由でオンデマンドでコンピューティング リソースを提供する企業です。これらのリソースには、Infrastructure as a Service (IaaS)、Platform as a Service (PaaS)、Software as a Service (SaaS) などがあります。 [
AI Unlimited manager](#ai-unlimited-manager) と [engine](#engine) はCSP 上で実行されます。

### cluster

処理能力、スケーラビリティ、信頼性を強化するために、単一のシステムとして連携して動作する相互接続されたコンピューターのグループ (ノードとも呼ばれます)。AI Unlimited エンジンは、CSP 上のクラスタにデプロイされます。各ノードは [virtual machine (VM)](#virtual-machine)です。


## D

### data lake

データ分析、機械学習、データ探索のためのデータの中央リポジトリ。データ レイクは通常 [object storage](#object-storage) 上に構築され、予定のデータ分析のためにデータにアクセスできるように設計されます。  


## E

### engine

クラウド コンピューティングでは、コンピューティング エンジンは Infrastructure as a Service (IaaS) の一例です。これにより、クラウド サービス プロバイダのインフラストラクチャ上で [virtual machines (VMs)](#virtual-machine) を作成して実行できます。Jupyter ノートブックから AI Unlimited AI/ML コンピューティング エンジンをデプロイすると、 [AI Unlimited manager](#ai-unlimited-manager) によって VM がプロビジョニングされます。


## I

### IAM role

[Identity and Access Management (IAM) ロール](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html) は、ユーザーまたは組織のクラウド管理者が組織の AWS アカウントで作成できるロールです。このロールには、そのロールを持つエンティティが AWS で実行できる操作と実行できない操作を決定する 1 つ以上のアクセス許可ポリシーが添付されています。


## K

### kernel

Jupyter カーネルは、Jupyter ノートブックに記述したコードを処理し、その結果をノートブックに返して表示する、言語固有のプログラムです。 


## L

### load balancer 

ロード バランサは、受信トラフィックをサーバー間で均等に分散し、パフォーマンス、信頼性、およびスケーラビリティを向上させます。組織でリソースによるパブリック IP アドレスの使用を許可していない場合は、ロード バランサを使用して AI Unlimited マネージャとエンジンをパブリック IP ネットワークに公開できます。 


## M

### mounting volumes 

Docker などのコンテナ化されたプラットフォームの概念。コンテナを実行しているマシン (ホスト) 上のディレクトリをコンテナ内のディレクトリにマップして、ホストとコンテナ間でデータとファイルを共有できます。


## N

### network load balancer

ロード バランサは、受信トラフィックをサーバー間で分散します。ネットワーク ロード バランサはトラフィックの内容を検査しません。ルーティングの決定は、ポートや IP アドレスなどの要素に基づいて行われます。ネットワーク ロード バランサは、AI Unlimited とそのエンジンをパブリック IP ネットワークに公開する方法として使用できます。


## O

### OAuth app

OAuth アプリを使用すると、ユーザーはパスワードを共有せずに、ある Web サイトまたはサービス上の自分のアカウントへのアクセスを別の Web サイトまたはサービスに許可できます。 

あなたまたはあなたの組織の誰かが作成した OAuth アプリにより、AI Unlimited は GitHub または GitLab 認証を使用して各 [project repository](#project-repository) を管理し、エンジンがデプロイされるたびに、リポジトリに追加された貢献者からエンジン ユーザーを取得できるようになります。

### object storage
大量の構造化データ、半構造化データ、非構造化データをクラウドに保存するためのスケーラブルで非常に効果的な方法です。Amazon S3 は AWS 上のオブジェクト ストレージです。Azure Blob Storage は Azure 上のオブジェクト ストレージです。オブジェクト ストレージは [data lake](#data-lake)の基礎となります。


## P

### project

プロジェクトは、Jupyter ノートブックからデータを探索および分析するための手段です。各プロジェクトには、GitHub または GitLab アカウント内にリポジトリがあります。

### project repository

プロジェクト所有者 (プロジェクトを作成したユーザー) は、プロジェクト貢献者を Git リポジトリに追加します。そこから、エンジンがデプロイされるたびに、AI Unlimited はエンジンに接続して使用する権限を持つユーザーを導出します。 

ただし、エンジンがすでにデプロイされている場合は、プロジェクト所有者はエンジンを更新してそれらのユーザーを追加し、そのデプロイ中にユーザーがエンジンに接続して使用できるようにする必要があります。

:::note
エンジンがデプロイされるたびに、プロジェクト ユーザーごとに新しいパスワードが生成されます。
:::

あなたまたは他のユーザーがプロジェクトを中断するたびに、そのスキーマがリポジトリにバックアップされます。AI Unlimited は、プロジェクトを復元するときに、保存されたスキーマを使用してプロジェクトを元に戻します。


## S

### systemd

システムおよびサービス管理用の Linux 基本ソフトウェア。AI Unlimited マネージャは、systemd によって制御されるコンテナ内のサーバー インスタンス上で実行されます。


## T

### Transport Layer Security

トランスポート レイヤー セキュリテ (TLS) は、インターネット経由で通信する 2 者間の安全な接続を確立するプロトコルです。TLS は送信中にデータを暗号化し、傍受した人がデータを解読できないようにし、両者の ID を検証します。 


## V

### virtual machine
仮想マシン (VM) は、物理コンピューターのソフトウェア エミュレーションです。各 VM は、[cloud service provider](#cloud-service-provider)のインフラストラクチャ内で独自のコンピューターとして動作します。VM により、スケーラビリティ、柔軟性、管理の容易さ、従量課金モデルが実現します。
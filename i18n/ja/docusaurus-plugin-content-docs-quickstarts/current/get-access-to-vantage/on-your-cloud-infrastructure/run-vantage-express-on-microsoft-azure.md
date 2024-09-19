---
sidebar_position: 3
author: Adam Tworkiewicz
email: adam.tworkiewicz@teradata.com
page_last_update: 2022 年 8 月 22 日
description: Azure で Vantage Express を実行する方法
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics]
---

import UseCase from '../../_partials/use-csae.mdx';
import Tabs from '../../_partials/tabsAzure.mdx';
import InstallVeInPublic from '../../_partials/install-ve-in-public.mdx';
import CommunityLink from '../../_partials/community_link.mdx';

# Azure で Vantage Express を実行する方法

<UseCase />

## 概要

このハウツーでは、Microsoft Azure で Vantage Express を実行する方法を説明します。Vantage Express には、完全に機能する Teradata SQL エンジンが含まれています。

## 前提条件

* Azure アカウント。こちらから作成できます: https://azure.microsoft.com/en-us/free/
* `az` コマンドライン ユーティリティがマシンにインストールされています。インストール手順については、https://docs.microsoft.com/en-us/cli/azure/install-azure-cli を参照してください。

## インストール

* デフォルトのリージョンを自分に最も近いリージョンに設定します (場所をリストするには  `az account list-locations -o table` を実行します)。

```bash
az config set defaults.location=<location>
```

*  `tdve-resource-group` という名前の新しいリソース グループを作成し、デフォルトに追加します。
````bash
az group create -n tdve-resource-group
az config set defaults.group=tdve-resource-group
````

* VM を作成するには、SSH キー ペアが必要です。まだない場合は作成してください。
````bash
az sshkey create --name vantage-ssh-key
````

* 秘密鍵へのアクセスを制限します。 `<path_to_private_key_file>` を前のコマンドで返された秘密鍵のパスに置き換えます。
````bash
chmod 600 <path_to_private_key_file>
````

* 4つの CPU と 8GB の RAM、30GB の OS ディスク、60GB のデータディスクを備えた Ubuntu VM を作成します。

<Tabs />

*  `<path_to_private_key_file>` と `<vm_ip>` を環境に一致する値に置き換えます。
```bash
ssh -i <path_to_private_key_file> azureuser@<vm_ip>
```

* VM に接続したら、`root`  ユーザーに切り替えます。
```bash
sudo -i
```

* Vantage Express用のダウンロードディレクトリを準備する。
```bash
mkdir /opt/downloads
cd /opt/downloads
```

* データ ディスクをマウントします。
```bash
parted /dev/sdc --script mklabel gpt mkpart xfspart xfs 0% 100%
mkfs.xfs /dev/sdc1
partprobe /dev/sdc1
export DISK_UUID=$(blkid | grep sdc1 | cut -d""" -f2)
echo "UUID=$DISK_UUID  /opt/downloads   xfs   defaults,nofail   1   2" >> /etc/fstab
```

<InstallVeInPublic />

* インターネットから Vantage Express に接続する場合は、VM へのファイアウォールの穴を開ける必要があります。また、デフォルトのパスワードを `dbc` ユーザーに変更する必要があります。
*  `dbc` ユーザーのパスワードを変更するには、VM に移動して bteq を開始する。
```bash
bteq
```

* ユーザー名とパスワードとして `dbc` を使用してデータベースにログインする。
```bash
.logon localhost/dbc
```

*  `dbc` ユーザーのパスワードを変更する。
```bash
MODIFY USER dbc AS PASSWORD = new_password;
```

* gcloud コマンドを使用して、ポート 1025 をインターネットに開くことができるようになりました。
```bash
az vm open-port --name teradata-vantage-express --port 1025
```

料金の発生を停止するには、リソース グループに関連付けられているすべてのリソースを削除します。
```bash
az group delete --no-wait -n tdve-resource-group
```

## 次のステップ
* [オブジェクトストレージに保存されたクエリーデータ](../../manage-data/nos.md)

## さらに詳しく
* [Teradata®Studio™およびStudio™Expressインストール ガイド](https://docs.teradata.com/r/Teradata-StudioTM-and-StudioTM-Express-Installation-Guide-17.20)
* [BTEQ の紹介](https://docs.teradata.com/r/jmAxXLdiDu6NiyjT6hhk7g/root)

<CommunityLink/>

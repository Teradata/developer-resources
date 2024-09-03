---
sidebar_position: 1
author: Adam Tworkiewicz
email: adam.tworkiewicz@teradata.com
page_last_update: 2023 年 1 月 9 日
description: VMware を使用してラップトップで Vantage Express を実行します。
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics]
---
import GettingStartedIntro from '../../_partials/getting-started-intro.mdx';
import RunVantage from '../../_partials/run-vantage.mdx';
import RunSampleQueries from '../../_partials/running-sample-queries.mdx';
import GettingStartedSummary from '../../_partials/getting-started-summary.mdx';
import CommunityLink from '../../_partials/community_link.mdx';

# VMware で Vantage Express を実行する方法

<GettingStartedIntro />

## 前提条件

1. 次のオペレーティング システムのいずれかを使用するコンピュータ: Windows、Linux、または Intel ベースの MacOS。
    :::note
    M1/M2 MacOSシステムについては、[UTM で Vantage Express を実行する](./getting-started-utm.md)を参照してください。
    :::
2. 少なくとも 1 つのコアと 6GB RAM を仮想マシン専用にできる 30GB のディスク領域と十分な CPU および RAM。
3. ソフトウェアをインストールして実行できる管理者権限。

## インストール

### 必要なソフトウェアをダウンロードする

* [Vantage Express](https://downloads.teradata.com/download/database/teradata-express-for-vmware-player)の最新版。これまでに Teradata Downloads Web サイトを使用したことがない場合は、登録する必要があります。
* [VMware Workstation Player](https://www.vmware.com/products/workstation-player.html).

:::important商用組織では、VMware Workstation Player を使用するために商用ライセンスが必要です。VMware ライセンスを取得したくない場合は、 [VirtualBox](./getting-started-vbox.md)で Vantage Express を実行できます。
:::

:::importantVMware は、MacOS 用の VMware Workstation Player を提供していません。Mac をお使いの場合は、代わりに [VMware フュージョン](https://www.vmware.com/products/fusion/fusion-evaluation.html) をインストールする必要があります。これは有料製品ですが、VMware では 30 日間の無料試用版を提供しています。または、Vantage Express を [VirtualBox](./getting-started-vbox.md) または [UTM](./getting-started-utm.md)で実行することもできます。
:::
* Windowsでは、Vantage Expressを解凍するために [7zip](https://www.7-zip.org/download.html)も必要です。

### インストーラを実行する

1. インストーラを実行し、デフォルト値を受け入れて、VMware Player または VMware Fusion をインストールします。
2. Windowsの場合は、`7zip` をインストールします。

### Vantage Express を実行する

- Vantage Express をダウンロードしたディレクトリに移動し、ダウンロードしたファイルを解凍します。
-  `.vmx` ファイルをダブルクリックします。これにより、VMware Player/Fusion で VM イメージが起動します。

<RunVantage />

<RunSampleQueries />

<GettingStartedSummary />

## 次のステップ
* [オブジェクトストレージに保存されたクエリーデータ](../../manage-data/nos.md)

## さらに詳しく
* [Teradata®Studio™およびStudio™Expressインストール ガイド](https://docs.teradata.com/r/Teradata-StudioTM-and-StudioTM-Express-Installation-Guide-17.20)

<CommunityLink />
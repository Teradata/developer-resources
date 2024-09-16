---
id: install-teradata-studio-on-mac-m1-m2
sidebar_position: 1

author: Satish Chinthanippu
email: satish.chinthanippu@teradata.com
page_last_update: 2023 年 8 月 14 日
description: Apple Mac M1/M2 で Teradata Studio を実行します。
keywords: [Teradata Studio, Teradata Studio Express, teradata, vantage, Mac, Apple Mac, Apple Mac M1, Apple Mac M2, Arm based Processor.]
---

import CommunityLink from '../_partials/community_link.mdx';

# Apple Mac M1/M2 で Teradata Studio/Express を使用する

## 概要

このハウツーでは、Apple Mac M1/M2 マシンへの Teradata Studio および Teradata Studio Express のインストールについて説明します。

## 実行する手順

1. Rosetta バイナリ トランスレータをインストールして有効にします。 [Apple Mac Rosetta インストールガイド](https://support.apple.com/en-us/HT211861)に従ってください。
2. 希望するベンダーからx86 64ビットベースのJDK 11をダウンロードしてインストールします。たとえば、x86 64ビットJDK 11は以下からダウンロードできます。 [Azul](https://www.azul.com/downloads/?version=java-11-lts&os=macos&architecture=x86-64-bit&package=jdkGet)
3. Teradata ダウンロード ページから最新の Teradata Studio または Teradata Studio Express リリースをダウンロードします。
* [Teradata Studio](https://downloads.teradata.com/download/tools/teradata-studio)
* [Teradata Studio Express](https://downloads.teradata.com/download/tools/teradata-studio-express)
4. Teradata Studio/Teradata Studio Expressをインストールします。詳細については [Teradata StudioおよびStudio Expressインストール ガイド](./attachments/Studio-Express-InstallGuide.pdf) を参照してください。

## まとめ

Apple は、Apple MAC M1/M2 マシンに ARM ベースのプロセッサを導入しました。Intel x64 ベースのアプリケーションは、ARM ベースのプロセッサではデフォルトでは動作しません。現在の Studio macOS ビルドは Intel x64 ベースのアプリケーションであるため、Teradata Studio または Teradata Studio Express もデフォルトでは動作しません。このハウツーでは、Apple Mac M1/M2 に Intel x64 ベースの JDK と Teradata Studio または Teradata Studio Express をインストールする方法を説明します。

<CommunityLink />
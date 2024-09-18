---
sidebar_position: 2
id: local-jupyter-hub
title: Teradata Jupyter ExtensionsをJupyter Hubにデプロイする方法
author: Hailing Jiang
email: Hailing.iang@teradata.com
page_last_update: 2021 年 11 月 17 日
description: Teradata Jupyter 拡張機能を顧客の JupyterHub クラスタにデプロイする
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, java applications, business intelligence, enterprise analytics, jupyter, teradatasql, ipython-sql, teradatasqlalchemy]
---

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'
import CommunityLink from '../_partials/community_link.mdx'

# Teradata Jupyter ExtensionsをJupyter Hubにデプロイする方法

## 概要

独自のJupyterHubクラスタをお持ちのお客様には、Teradata Jupyterエクステンションを既存のクラスタに統合するための2つのオプションがあります。

1. Teradata Jupyter Dockerイメージの使用
2. 既存のDockerイメージをカスタマイズして、Teradata 拡張機能を含める。

このページには、2 つのオプションに関する詳細な手順が記載されています。手順は、顧客の JupyterHub デプロイメントが[Kubernetes で JupyterHub をゼロから構築](https://zero-to-jupyterhub.readthedocs.io/en/latest/index.html)に基づいているという前提に基づいています。

<ClearscapeDocsNote />

## Teradata Jupyter Dockerイメージの使用

Teradata は [jupyter/datascience-notebook](https://hub.docker.com/r/jupyter/datascience-notebook/) 、イメージに基づいて構築された、すぐに実行できる Docker イメージを提供します。このイメージには、Teradata SQL カーネル、Teradata Python および R ライブラリとドライバ、および Teradata データベースとのやり取りの生産性を高めるための Jupyter 用の Teradata 拡張機能がバンドルされています。このイメージには、SQL カーネル、拡張機能、および Teradata ライブラリの使用方法を示すサンプル ノートブックも含まれています。

このイメージは以下のように使用することができます。

* ローカルのDockerコンテナで個人用Jupyter Notebookサーバを起動する
* JupyterHub を使用してチーム用の JupyterLab サーバーを実行する

ローカル Docker コンテナで個人用 JupyterLab サーバーを起動する手順については、 [インストールガイド](https://docs.teradata.com/r/KQLs1kPXZ02rGWaS9Ktoww/Fwvns7y_a7juDWx1NixC2A)を参照してください。このセクションでは、顧客の既存の JupyterHub 環境で Teradata Jupyter Docker イメージを使用する方法に焦点を当てます。

### Teradata Jupyter Dockerイメージをレジストリにインストールする

1.  [Vantage Modules for Jupyter](https://downloads.teradata.com/download/tools/vantage-modules-for-jupyter) ページに移動して Docker イメージをダウンロードします。これは `teradatajupyterlabext_VERSION.tar.gz`という形式の名前を持つ tarball です。

2. イメージをロードします。
```bash
docker load -i teradatajupyterlabext_VERSION.tar.gz
```

3. イメージをDockerレジストリにプッシュします。
```bash
docker push
```

:::tip
シンプルにするために、読み込んだ画像の名前を変更することを検討するとよいでしょう。

```bash
docker tag OLD_IMAGE_NAME NEW_IMAGE_NAME
```
:::

### JupyterHub で Teradata Jupyter Dockerイメージを使用する

1. Teradata Jupyter Docker イメージを JupyterHub クラスターで直接使用するには、 [JupyterHubのドキュメント](https://zero-to-jupyterhub.readthedocs.io/en/latest/jupyterhub/customizing/user-environment.html#choose-and-use-an-existing-docker-image)の説明に従ってオーバーライド ファイルを変更します。 `REGISTRY_URL` と `VERSION` を上記の手順の適切な値に置き換えます。

```bash
singleuser:
  image:
  name: REGISTRY_URL/teradatajupyterlabext_VERSION
  tag: latest
```

2.  [JupyterHub ドキュメント](https://zero-to-jupyterhub.readthedocs.io/en/latest/jupyterhub/customizing/extending-jupyterhub.html#applying-configuration-changes)の説明に従って、クラスターに変更を適用します。

:::tip
複数のプロファイルを使用すると、ユーザーが JupyterHub にログインするときに使用するイメージを選択できるようになります。複数のプロファイルを構成する詳細な手順と例については、 [JupyterHub ドキュメント](https://zero-to-jupyterhub.readthedocs.io/en/latest/jupyterhub/customizing/user-environment.html#using-multiple-profiles-to-let-users-select-their-environment)を参照してください。
:::

### Teradata Jupyter Dockerイメージをカスタマイズする

Teradata Jupyter Dockerイメージにバンドルされていないパッケージやノートブックが必要な場合、Teradataイメージをベースイメージとして使用し、その上に新しいイメージをビルドすることをお勧めします。

以下は、Teradata イメージ上に構築され、追加のパッケージとノートブックを追加する Dockerfile の例です。Dockerfile を使用して新しい Docker イメージを構築し、そのイメージを指定されたレジストリにプッシュし、上記のようにオーバーライド ファイルを変更して新しいイメージをシングルユーザー イメージとして使用し、上記のようにクラスターに変更を適用します。 `REGISTRY_URL` と `VERSION` を適切な値に置き換えます。

```bash
FROM REGISTRY_URL/teradatajupyterlabext_VERSION:latest

# install additional packages
RUN pip install --no-cache-dir astropy

# copy notebooks
COPY notebooks/. /tmp/JupyterLabRoot/DemoNotebooks/
```

## 既存のDockerイメージをカスタマイズして Teradata 拡張機能を含める

Teradata SQLカーネルとエクステンションは、現在使用している既存のイメージに含めることができます。

1.  [Vantage Modules for Jupyter](https://downloads.teradata.com/download/tools/vantage-modules-for-jupyter)ページに移動して、圧縮された Teradata Jupyter 拡張機能パッケージ バンドルをダウンロードしてください。既存の Docker イメージが Linux ベースである場合は、ダウンロードの Linux バージョンを使用する必要があります。それ以外の場合は、使用しているプラットフォーム用のダウンロードを使用してください。 `.zip` ファイルには、Teradata SQL カーネル、拡張機能、およびサンプル ノートブックが含まれています。
2. バンドル ファイルを作業ディレクトリに解凍します。
3. 以下は、既存の Docker イメージに Teradata Jupyter 拡張機能を追加するための Dockerfile の例です。Dockerfile を使用して新しい Docker イメージを構築し、イメージを指定されたレジストリにプッシュし、上記のようにオーバーライド ファイルを変更して新しいイメージをシングルユーザー イメージとして使用し、変更をクラスターに適用します。

    ```bash
    FROM REGISTRY_URL/your-existing-image:tag
    ENV NB_USER=jovyan \
      HOME=/home/jovyan \
      EXT_DIR=/opt/teradata/jupyterext/packages

    USER root

    ##############################################################
    # Install kernel and copy supporting files
    ##############################################################

    # Copy the kernel
    COPY ./teradatakernel /usr/local/bin
    RUN chmod 755 /usr/local/bin/teradatakernel

    # Copy directory with kernel.json file into image
    COPY ./teradatasql teradatasql/

    ##############################################################
    # Switch to user jovyan to copy the notebooks and license files.
    ##############################################################

    USER $NB_USER

    # Copy notebooks
    COPY ./notebooks/ /tmp/JupyterLabRoot/TeradataSampleNotebooks/

    # Copy license files
    COPY ./ThirdPartyLicenses /tmp/JupyterLabRoot/ThirdPartyLicenses/

    USER root

    # Install the kernel file to /opt/conda jupyter lab instance
    RUN jupyter kernelspec install ./teradatasql --prefix=/opt/conda

    ##############################################################
    # Install Teradata extensions
    ##############################################################

    COPY ./teradata_*.tgz $EXT_DIR

    WORKDIR $EXT_DIR

    RUN jupyter labextension install --no-build teradata_database* && \
      jupyter labextension install --no-build teradata_resultset* && \
      jupyter labextension install --no-build teradata_sqlhighlighter* && \
      jupyter labextension install --no-build teradata_connection_manager* && \
      jupyter labextension install --no-build teradata_preferences* && \
      jupyter lab build --dev-build=False --minimize=False && \
      rm -rf *

    WORKDIR $HOME

    # Give back ownership of /opt/conda to  jovyan
    RUN chown -R jovyan:users /opt/conda

    # Jupyter will create .local directory
    RUN rm -rf $HOME/.local
    ```

4. Teradata package for PythonとTeradata package for Rはオプションでインストールすることができます。詳細については、以下のページを参照してください。
    * [Teradata Package for Python - teradataml のダウンロード ページ](https://downloads.teradata.com/download/aster/teradata-python-package-teradataml)
    * [Teradata Package for R - tdplyr のダウンロード ページ](https://downloads.teradata.com/download/aster/tdplyr-download-page)

## さらに詳しく
* [ Teradata Jupyter 拡張機能 Web サイト](https://teradata.github.io/jupyterextensions)
* [ Jupyter用Teradata Vantage™モジュールインストールガイド](https://docs.teradata.com/r/KQLs1kPXZ02rGWaS9Ktoww/root)
* [ Python用Teradata®パッケージユーザガイド](https://docs.teradata.com/r/1YKutX2ODdO9ppo_fnguTA/root)

<CommunityLink />

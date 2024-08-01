---
id: create-oauth-app
title: OAuthアプリを作成する
description: これにより、AI Unlimited は Git プロバイダの認証を使用してプロジェクト リポジトリを管理できるようになります。
sidebar_label: OAuthアプリを作成する
sidebar_position: 4
pagination_prev: null
pagination_next: null
---

# GitHub または GitLab OAuth アプリを作成する

OAuth アプリを使用すると、ユーザーはパスワードを共有することなく、ある Web サイトまたはサービス上の自分のアカウントへのアクセスを別の Web サイトまたはサービス上の自分のアカウントに許可できます。

[OAuth](https://oauth.net/2/) アプリを作成して、AI Unlimited が GitHub または GitLab 認証を使用して各 [プロジェクト リポジトリ](../glossary.md#project-repository) を管理し、エンジンがデプロイされるたびに、リポジトリに追加した貢献者からエンジン ユーザーを取得できるようにします。

1. GitHub または GitLab アカウントにサインインします。 

2. OAuth アプリを作成します。 [GitHub: OAuth アプリを作成する](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app) または [GitLab: OAuth アプリを作成する](https://docs.gitlab.com/ee/integration/oauth_provider.html)を参照してください。
  
    OAuth アプリを登録する際には、これらの URL を使用します。

    - ホームページURL: `http://[ip_or_hostname]:[port]`<br/>
       :::note
      これは、インストール プロセスの最後に受け取ったマネージャ URL です。
      :::

    - 承認コールバック URL: `[Homepage URL]/auth/github/callback`
    
    GitLabの場合は、 [承認されたアプリケーション](https://docs.gitlab.com/ee/integration/oauth_provider.html#view-all-authorized-applications)で定義されている適切なOAuth **スコープ** を選択します。

3.	**クライアントID** と **クライアント シークレット**をコピーして保存します。これらは AI Unlimited の設定に必要になります。 

これで [AI Unlimitedを設定する](../install-ai-unlimited/setup-ai-unlimited.md)準備が整いました。



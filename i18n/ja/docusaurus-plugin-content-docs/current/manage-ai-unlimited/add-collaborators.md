---
id: add-collaborators
title: 貢献者を追加
description: プロジェクトに貢献者を追加する方法を学びます。
sidebar_label: プロジェクト貢献者を追加する
sidebar_position: 1
pagination_prev: null
pagination_next: null
---

# プロジェクト貢献者を追加する

プロジェクトを作成すると、あなたがプロジェクト所有者になります。プロジェクト所有者であれば、プロジェクトに貢献者を追加できます。 

手順は、エンジンがデプロイされる前か後かによって変わります。


## エンジンがデプロイされる前に

1. GitHub または GitLab で、プロジェクト リポジトリにユーザーを追加します。<br/>
[GitHub](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository)または[GitLab](https://docs.gitlab.com/ee/user/project/members/#add-users-to-a-project)のリポジトリユーザーの追加に関する詳細を参照してください。

2. Jupyter ノートブックからエンジンをデプロイすると、ユーザーは自動的にエンジンに追加されます。


## エンジンがデプロイされた後に

1. GitHub または GitLab で、プロジェクト リポジトリにユーザーを追加します。<br/>
[GitHub](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository)または[GitLab](https://docs.gitlab.com/ee/user/project/members/#add-users-to-a-project)のリポジトリユーザーの追加に関する詳細を参照してください。
2. Jupyter ノートブックで、マジック コマンド `%project_engine_update_users` を実行して、ユーザーをエンジンに追加します。


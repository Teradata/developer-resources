---
id: add-collaborators
title: 공동 작업자 추가
description: 프로젝트에 공동 작업자를 추가하는 방법을 알아보십시오.
sidebar_label: 프로젝트 공동 작업자 추가
sidebar_position: 1
pagination_prev: null
pagination_next: null
---

# 프로젝트 공동 작업자 추가

프로젝트를 만들면 프로젝트 소유자가 됩니다. 프로젝트 소유자라면 프로젝트에 공동 작업자를 추가할 수 있습니다. 

단계는 이 작업을 엔진이 배포되기 전에 수행하는지 아니면 이후에 수행하는지에 따라 달라집니다.


## 엔진이 배포되기 전에

1. GitHub 또는 GitLab에서 프로젝트 저장소에 사용자를 추가합니다.<br/>
[GitHub](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository) 또는 [GitLab](https://docs.gitlab.com/ee/user/project/members/#add-users-to-a-project)에 대한 repo 사용자 추가에 대한 세부 정보를 참조하십시오.

2. Jupyter Notebook에서 엔진을 배포하면 사용자가 자동으로 엔진에 추가됩니다.


## 엔진이 배포된 후

1. GitHub 또는 GitLab에서 프로젝트 저장소에 사용자를 추가합니다.<br/>
[GitHub](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository) 또는 [GitLab](https://docs.gitlab.com/ee/user/project/members/#add-users-to-a-project)에 대한 repo 사용자 추가에 대한 세부 정보를 참조하십시오.
2. Jupyter Notebook에서 매직 명령 `%project_engine_update_users`을 실행하여 엔진에 사용자를 추가합니다.


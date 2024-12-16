---
id: create-oauth-app
title: OAuth 앱 생성
description: 이를 통해 AI Unlimited는 귀하의 Git 공급자의 인증을 사용하여 프로젝트 저장소를 관리할 수 있습니다.
sidebar_label: OAuth 앱 생성
sidebar_position: 4
pagination_prev: null
pagination_next: null
---

# GitHub 또는 GitLab OAuth 앱 생성

OAuth 앱을 사용하면 사용자는 비밀번호를 공유하지 않고도 한 웹 사이트나 서비스의 계정에 대한 액세스 권한을 다른 웹 사이트나 서비스의 계정에 부여할 수 있습니다.

AI Unlimited가 GitHub 또는 GitLab 인증을 사용하여 각 [프로젝트 저장소](../glossary.md#project-repository)를 관리하고 엔진이 배포될 때마다 저장소에 추가한 공동 작업자로부터 엔진 사용자를 파생할 수 있도록 [OAuth](https://oauth.net/2/) 앱을 만듭니다.

1. GitHub 또는 GitLab 계정에 로그인합니다. 

2. OAuth 앱을 생성합니다. [GitHub: OAuth 앱 생성](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app) 또는 [GitLab: OAuth 앱 생성](https://docs.gitlab.com/ee/integration/oauth_provider.html)을 참조하십시오.
  
    OAuth 앱을 등록하는 동안 다음 URL을 사용합니다.

    - 홈 페이지 URL: `http://[ip_or_hostname]:[port]`<br/>
      :::note
      이는 설치 프로세스가 끝나면 받게 되는 관리자 URL입니다.
      :::

    - 인증 콜백 URL: `[Homepage URL]/auth/github/callback`
    
    GitLab의 경우 [인증된 애플리케이션](https://docs.gitlab.com/ee/integration/oauth_provider.html#view-all-authorized-applications)에 정의된 대로 적절한 OAuth **범위**를 선택합니다.

3\. AI Unlimited를 설정하는 데 필요한 **클라이언트 ID** 및 **클라이언트 암호**를 복사하여 보관합니다. 

이제 [AI Unlimited 설정](../install-ai-unlimited/setup-ai-unlimited.md) 준비가 되었습니다.



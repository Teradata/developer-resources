---
id: setup-ai-unlimited
title: AI Unlimited 설정
description: 설정 세부 정보를 알아보십시오.
sidebar_label: AI Unlimited 설정
sidebar_position: 3
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# AI Unlimited 설정

[관리자](../glossary.md#ai-unlimited-manager)를 설치한 후 설치 프로세스가 끝날 때 받은 URL을 사용하여 AI Unlimited 설정에 액세스합니다. `http://[ip_or_hostname]:[port]`. 

:::note
AI Unlimited를 설정하면 귀하는 귀하의 조직에서 AI Unlimited 관리자가 됩니다.
:::

:::tip
설정에 대한 도움이 필요하면 <a href="mailto:aiunlimited.support@Teradata.com">지원 팀</a>에 이메일을 보내거나 [커뮤니티](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa)에 문의하십시오.
:::

<a id="setup-fields"></a>	
## 필드를 완성하십시오.

각 분야 그룹에 대한 정보는 여기에서 확인하십시오.

<details>

<summary>기본 설정</summary>

<br />

**AI Unlimited 기본 URL**— 설정에 액세스하는 데 사용한 URL입니다. 관리자를 설치할 때 받았습니다.


**Git 공급자**—GitHub 또는 GitLab입니다.

**AI Unlimited 로그 수준**— AI Unlimited 로그에서 확인할 세부 정보 수준입니다.

**엔진 IP 네트워크 유형**

AI Unlimited와 동일한 Virtual Private Cloud에 엔진을 배포하는 경우 **개인**을 선택합니다.

**공용** 또는 **개인**은 AI Unlimited가 엔진과 통신하는 방법을 나타냅니다. 엔진에는 공용 IP 주소, 개인 IP 주소 또는 둘 다 있을 수 있습니다. AI Unlimited가 연결해야 하는 IP 주소 유형을 나타냅니다.

**TLS 사용**

AI Unlimited에 대한 연결을 보안하고 전송 중인 데이터를 보호하려면 [TLS(전송 계층 보안)](../glossary.md#transport-layer-security)를 사용하는 것이 좋습니다.

- 인증 종료가 활성화된 [ALB(Application Load Balancer)](../glossary.md#application-load-balancer)를 사용하는 경우 **False**를 선택합니다.

- [NLB(Network Load Balancer)](../glossary.md#network-load-balancer)를 사용 중이거나 로드 밸런서를 사용하지 않는 경우 **True**를 선택합니다.
..
	- **AI Unlimited TLS 인증서** 및 **AI Unlimited TLS 인증서 키**— 신뢰할 수 있는 CA(인증 기관)에서 발급한 인증서가 있는 경우 인증서와 키를 제공할 수 있습니다. 갱신 및 검증을 포함하여 인증서 수명 주기를 관리할 책임이 있습니다. 특정 요구 사항이 있거나 인증서에 대한 제어를 강화해야 하는 경우 자기 것을 가져오는 것이 좋은 옵션입니다.

	- 또는 **인증서 생성**을 선택하여 Teradata 시스템에서 생성된 인증서를 사용합니다. 만료되기 전에 자동으로 갱신됩니다.

**업데이트**를 선택합니다.

</details>


<details>

<summary>클라우드 통합</summary>
<br />
이러한 필드 중 일부는 기본값을 위한 것입니다. 나중에 Jupyter Notebook에서 엔진을 배포할 때 해당 배포에 대해 기본값과 다른 값을 지정할 수 있습니다.

<Tabs>
<TabItem value="aws1" label="AWS">
<br />
**기본 리전**— 엔진을 배포할 AWS 리전입니다. 데이터 레이크에 가장 가까운 리전을 선택하는 것이 좋습니다.

**기본 서브넷**— 엔진을 배포할 [AWS 서브넷](https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html). AWS 콘솔은 해당 리전의 서브넷을 표시합니다.

**기본 IAM 역할**

- 엔진에 대한 [IAM 역할](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create.html). 보안에서 허용하는 경우 AI Unlimited에서 역할을 생성하도록 하려면 비워 둡니다. 그렇지 않은 경우 다음 정책을 사용하여 역할을 생성합니다: [ai-unlimited-engine.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json).
- AI Unlimited가 역할을 생성하는 경우 엔진을 배포하는 AWS [클러스터](../glossary.md#cluster)에 대해 역할을 생성합니다. 엔진을 배포할 때마다 역할을 생성합니다. 조직에서 역할을 생성하는 경우 엔진을 배포할 수 있는 모든 클러스터를 수용해야 합니다.
		
**리소스 태그**— 엔진을 배포하는 AWS 리소스에 [태그](https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html)를 지정하여 관리를 더 쉽게 만들 수 있습니다.

**인바운드 보안**

다음 필드를 사용하여 소스 트래픽이 엔진에 도달하도록 허용합니다.
- **기본 [CIDR](../glossary.md#classless-inter-domain-routing)**
- **기본 [보안 그룹](https://docs.aws.amazon.com/vpc/latest/userguide/working-with-security-groups.html) ID**— AI Unlimited와 동일한 Virtual Private Cloud에 엔진을 배포하는 경우 이 필드에 AI Unlimited 보안 그룹을 포함하여 AI Unlimited가 엔진과 통신할 수 있도록 합니다.
- **기본 [접두사 목록](https://docs.aws.amazon.com/vpc/latest/userguide/managed-prefix-lists.html) 이름**

**역할 접두사**— AI Unlimited가 역할을 생성하는 경우 이 접두사가 역할 이름에 추가됩니다.

**[권한 경계](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html) ARN**— IAM 엔티티에 경계가 필요한 경우 여기에서 제공할 수 있습니다.   

**업데이트**를 선택합니다.

</TabItem>

<TabItem value="azure" label="Azure"> 

<br />

**기본 리전**— 엔진을 배포할 Azure 리전입니다. 데이터 레이크에 가장 가까운 리전을 선택하는 것이 좋습니다.

[Azure Virtual Network](https://learn.microsoft.com/en-us/azure/virtual-network/concepts-and-best-practices)에 대해 자세히 알아보십시오.


**기본 네트워크 리소스 그룹**— 네트워크를 포함하는 리소스 그룹입니다.

**기본 네트워크**— 엔진을 배포할 네트워크입니다.

**기본 서브넷**— 엔진을 배포할 서브넷입니다.

**기본 키 볼트**— 엔진에서 사용하는 키 볼트로, 비밀번호와 같은 중요한 정보를 안전하게 저장할 수 있습니다.

**기본 키 볼트 리소스 그룹**— 키 볼트가 포함된 리소스 그룹입니다.

**인바운드 보안**

다음 필드를 사용하여 소스 트래픽이 엔진에 도달하도록 허용합니다.

- **기본 [CIDR](../glossary.md#classless-inter-domain-routing)**
 
- **기본 [보안 그룹](https://learn.microsoft.com/en-us/azure/virtual-network/application-security-groups) 이름**— AI Unlimited와 동일한 Virtual Private Cloud에 엔진을 배포하는 경우 이 필드에 AI Unlimited 애플리케이션 보안 그룹을 포함하여 AI Unlimited가 엔진과 통신할 수 있도록 합니다.

**리소스 태그**— 엔진을 배포하는 Azure 리소스에 [태그](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources)를 지정하여 관리를 더 쉽게 만들 수 있습니다.

**업데이트**를 선택합니다.

</TabItem>
</Tabs>

</details>


<details>

<summary>Git 통합</summary>

<Tabs>

<TabItem value="github" label="GitHub">

<br />

**GitHub 콜백 URL**— 사용자를 인증한 후 GitHub는 이 URL을 사용하여 관리자로 리디렉션합니다. 이는 OAuth 앱이 [생성될 때](../resources/create-oauth-app.md) 제공되었습니다.

**GitHub 기본 URL**— GitHub 인스턴스의 URL입니다.

**GitHub 클라이언트 ID** 및 **GitHub 클라이언트 암호**— [OAuth 앱이 생성되었을 때](../resources/create-oauth-app.md) GitHub에서 받은 자격 증명입니다.

**조직 액세스**

GitHub 계정의 두 조직은 액세스 제어 및 저장소 관리에 도움을 줄 수 있습니다.

- **인증 조직**의 멤버는 AI Unlimited에 로그인하여 자신을 인증할 수 있습니다. 조직을 지정하지 않으면 모든 GitHub 계정 사용자가 로그인하여 인증할 수 있습니다.

- 프로젝트 저장소는 **저장소 조직**에 생성됩니다. 조직을 지정하지 않으면 프로젝트는 개인 GitHub 공간에 저장됩니다.

**업데이트**를 선택합니다.

**로그인**을 선택합니다. 그런 다음 로그인하고(메시지가 표시되면) 본인 인증을 합니다.

</TabItem>

<TabItem value="gitlab" label="GitLab">

<br />

**GitLab 콜백 URL**— 사용자를 인증한 후 GitLab은 이 URL을 사용하여 관리자로 리디렉션합니다. 이는 OAuth 앱이 [생성될 때](../resources/create-oauth-app.md) 제공되었습니다.

**GitLab 기본 URL**— GitLab 인스턴스의 URL입니다.

**GitLab 클라이언트 ID** 및 **GitLab 클라이언트 암호**— [OAuth 앱이 생성되었을 때](../resources/create-oauth-app.md) GitLab에서 받은 자격 증명입니다.

**그룹 액세스**

GitLab 계정의 두 그룹은 액세스 제어 및 저장소 관리에 도움을 줄 수 있습니다.

- **인증 그룹**의 멤버는 AI Unlimited에 로그인하여 자신을 인증할 수 있습니다. 그룹을 지정하지 않으면 모든 GitLab 계정 사용자가 로그인하여 인증할 수 있습니다.

- 모든 프로젝트 저장소는 **저장소 그룹**에 생성됩니다. 그룹을 지정하지 않으면 프로젝트는 개인 GitLab 공간에 저장됩니다.

**업데이트**를 선택합니다.

**로그인**을 선택합니다. 그런 다음 로그인하고(메시지가 표시되면) 본인 인증을 합니다.

</TabItem>
</Tabs>

</details>


## 떠나기 전에

1. **프로파일**에서 API 키를 복사합니다.
    Jupyter Notebook에서 엔진에 연결할 때 사용합니다.

2. TLS를 활성화한 경우 **다시 시작**을 선택합니다. 이렇게 하면 TLS가 적용된 상태로 AI Unlimited 서비스가 다시 시작됩니다.

축하합니다! AI Unlimited 설정이 완료되었습니다.


:::note
귀하는 AI Unlimited 관리자이므로 언제든지 설정으로 돌아가서 [모든 설정을 변경](../manage-ai-unlimited/change-settings.md)할 수 있습니다. 
:::


## 다음 항목

Jupyter Notebook에서 [데이터 탐색 및 분석](../explore-and-analyze-data/index.md) 작업을 시작합니다.


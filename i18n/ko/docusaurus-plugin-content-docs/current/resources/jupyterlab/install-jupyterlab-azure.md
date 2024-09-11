---
id: deploy-jupyter-azure-portal
title: Azure에 JupyterLab 설치
description: ARM 템플릿을 사용하여 JupyterLab을 배포하는 방법을 알아보십시오.
sidebar_label: Azure에 설치
sidebar_position: 2
pagination_prev: null
pagination_next: null
---

# Azure에 JupyterLab 설치

Teradata에서 제공하는 ARM(Azure Resource Manager) 템플릿을 사용하여 Azure Portal에서 JupyterLab과 AI Unlimited 커널을 설치합니다. 

이는 [systemd](../../glossary.md#systemd)로 제어되는 컨테이너에서 JupyterLab을 실행하여 서버 인스턴스를 배포합니다.

:::tip
설치 지원을 받으려면 <a href="mailto:aiunlimited.support@Teradata.com">지원 팀</a>에 이메일을 보내거나 [커뮤니티](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa)에 문의하십시오.
:::


## Azure 계정 준비

- 클라우드 관리자와 협력하여 Azure 계정에 [JupyterLab 템플릿](https://github.com/Teradata/ai-unlimited/tree/develop/deployments/azure/templates/arm/jupyter)에 정의된 클라우드 리소스를 만드는 데 필요한 권한이 있는지 확인합니다.

- 네트워킹 요구 사항: Azure [리소스 그룹](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal)에는 [서브넷](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-subnet?tabs=azure-portal)로 구성된 [Azure Virtual Network(VNet)](https://learn.microsoft.com/en-us/azure/virtual-network/quick-create-portal)이 있어야 합니다. 계정 권한에 따라 기존 VNet 또는 서브넷을 사용하거나 직접 만드십시오. 

- 명령을 실행하거나 디버깅하기 위해 JupyterLab 인스턴스에 액세스해야 하는 경우 [키 쌍](https://learn.microsoft.com/en-us/azure/virtual-machines/linux/mac-create-ssh-keys)을 사용하여 SSH(Secure Shell)를 사용하여 안전하게 연결할 수 있습니다. [인스턴스 세부 정보 지정](#specify-instance-details) 시 키 쌍이 필요합니다.


## 저장소 복제

import MyPartial from '../../_partials/_clone-repo.mdx';

<MyPartial />


## Jupyter 템플릿 찾기

JupyterLab용 ARM 템플릿은 AI Unlimited GitHub 저장소에 있습니다.

`deployments/azure/templates/arm/jupyter`

 [로드 밸런서](../../glossary.md#load-balancer)를 사용할지 여부와 어떤 유형을 사용할지에 따라 템플릿을 선택합니다.
:::note
조직의 클라우드 관리자에게 지침을 요청할 수 있습니다.
:::
    \- `jupyter-with-alb.json`—다음 뒤의 JupyterLab을 호스팅합니다. [Application Load Balancer](../../glossary.md#application-load-balancer)
    \- `jupyter-with-nlb.json`—다음 뒤의 JupyterLab을 호스팅합니다. [Network Load Balancer](../../glossary.md#network-load-balancer)
    \- `jupyter-without-lb.json`—로드 밸런서가 없습니다.

## 템플릿을 로드합니다.

1. [Azure Portal](https://portal.azure.com)에 로그인합니다.
   :::note
   Azure Portal에 대한 참조는 2024년 5월 29일 기준으로 최신 상태입니다.
   ::: 
2. **사용자 지정 배포**를 검색한 후 **사용자 지정 템플릿 배포**를 선택합니다.
3. **편집기에서 나만의 템플릿 구축**을 선택한 다음 **파일 로드**를 선택합니다.
4. 사용할 템플릿 파일을 선택하고 **저장**을 선택합니다.  


## 인스턴스 세부 정보 지정

매개변수를 검토합니다. 필수 매개변수에 대한 값을 제공합니다. 귀하의 조직에는 다른 매개변수가 필요할 수 있습니다.

<details>

<summary>Azure 및 JupyterLab 매개변수</summary>

| 매개변수 | 설명 | 노트 
|---------|-------------|-----------|
| 구독 | AI Unlimited를 배포하는 데 사용하려는 Azure 구독입니다. | 필수 사항<br/>기본값: NA<br/>무료 평가판이 아닌 계정을 사용하는 것이 좋습니다. |
| 리전 | AI Unlimited를 배포하려는 리전입니다. | 필수 사항<br/>기본값: NA<br/>AI Unlimited와 함께 사용할 작업 위치와 데이터 리소스에 가장 가까운 Azure 리전을 선택합니다. |
| 리소스 그룹 이름 | 관련된 AI Unlimited 리소스를 함께 그룹화하는 컨테이너의 이름입니다. | 필수 사항<br/>기본값: ai-unlimited-jupyter |
| OS 버전  | 현재 구독에서 사용할 수 있는 운영 체제 버전입니다.| 선택 사항(기본값 제공)<br/>기본값: Ubuntu-2004 |
| 인스턴스 유형 | AI Unlimited에 사용하려는 인스턴스 유형입니다.| 선택 사항<br/>기본값: STANDARD_D2_V3<br/>비용을 절감하기 위해 기본 인스턴스 유형을 사용하는 것이 좋습니다. 기본 인스턴스 유형은 2개의 vCPU와 8.0GiB 메모리가 있는 표준 Dv3 시리즈입니다.|
| 네트워크 | AI Unlimited 인스턴스를 배포하려는 네트워크의 이름입니다.| 선택 사항<br/>기본값: NA| 
| 서브넷 | AI Unlimited 인스턴스를 배포하려는 하위 네트워크입니다.| 필수 사항<br/>기본값: NA<br/>서브넷은 선택한 가용성 영역에 있어야 합니다. |
| 보안 그룹 | 인스턴스에 대한 인바운드 및 아웃바운드 트래픽을 제어하는 가상 방화벽입니다. | 선택 사항<br/>기본값: JupyterSecurityGroup<br/>보안 그룹은 인스턴스에 액세스할 수 있는 프로토콜, 포트 및 IP 주소 또는 CIDR 블록을 지정하는 규칙 세트로 구현됩니다. 사용자 지정 보안 그룹 수신 규칙을 만들지 않는 한 액세스 CIDR 또는 보안 그룹 중 하나 이상을 정의하여 인바운드 트래픽을 허용합니다. |
| 액세스 CIDR | 인스턴스에 액세스할 수 있는 CIDR IP 주소 범위입니다. | 선택 사항<br/>기본값: 0.0.0.0/0<br/>이 값을 신뢰할 수 있는 IP 범위로 설정하는 것이 좋습니다. 사용자 지정 보안 그룹 수신 규칙을 만들지 않는 한 액세스 CIDR 또는 보안 그룹 중 하나 이상을 정의하여 인바운드 트래픽을 허용합니다. |
| 소스 앱 보안 그룹(ASG) | AI Unlimited 인스턴스에 연결할 수 있는 권한이 있는 소스 애플리케이션 보안 그룹입니다. ASG를 사용하면 특정 네트워크 보안 정책에 따라 VM(가상 머신)을 구성할 수 있습니다. 이러한 보안 정책은 가상 머신에서 어떤 트래픽이 허용되거나 허용되지 않는지 결정합니다. | 선택 사항<br/>기본값: NA<br/>네트워크 인터페이스와 동일한 리전에 있는 애플리케이션 보안 그룹을 선택합니다. |
| 대상 앱 보안 그룹 | AI Unlimited 인스턴스에 연결할 수 있는 권한이 있는 대상 애플리케이션 보안 그룹입니다. | 선택 사항<br/>기본값: NA<br/>네트워크 인터페이스와 동일한 리전에 있는 애플리케이션 보안 그룹을 선택합니다. |
| 역할 정의 ID | AI Unlimited에서 사용할 역할의 ID입니다. | 필수 사항<br/>기본값: NA<br/>Azure CLI 명령인 `Get-AzRoleDefinition` 명령을 사용하여 역할 정의 ID를 가져옵니다. |
| 공용 SSH 허용 | Azure의 VM에 연결하기 위해 SSH(Secure Shell) 키를 사용할 수 있는지 여부를 지정합니다. |  선택 사항<br/>기본값: true |
| 공용 키 | SSH를 통해 VM에 연결하는 데 사용할 수 있는 공용 SSH 키입니다. | 선택 사항<br/>기본값: NA<br/>이 값은 `ssh-rsa`로 시작해야 합니다. |
| 영구 볼륨 사용 | 데이터를 저장하기 위해 새 영구 볼륨을 사용할지 기존 영구 볼륨을 사용할지 지정합니다. 매개변수 섹션 아래의 *자세히 알아보기: 영구 볼륨 사용*을 참조하십시오. | 선택 사항(기본값 제공)<br/>기본값: New<br/>지원되는 옵션은 사용 사례에 따라 새 영구 볼륨 또는 기존 영구 볼륨입니다. |
| 영구 볼륨 크기 | 인스턴스에 연결할 수 있는 영구 볼륨의 크기(GB)입니다. | 선택 사항<br/>기본값: 100<br/>8~1000 사이의 값을 지원합니다. |
| 기존 영구 볼륨 | 인스턴스에 연결할 수 있는 기존 영구 볼륨의 ID입니다.| 영구 볼륨 사용이 기존으로 설정된 경우 필수 사항<br/>기본값: NA<br/>영구 볼륨은 AI Unlimited 인스턴스와 동일한 가용성 영역에 있어야 합니다. |
| JupyterHttpPort | JupyterLab 서비스 UI에 액세스하는 포트입니다. | 필수 사항(기본값 제공)<br/>기본값: 8888 |
| JupyterVersion | 배포하려는 JupyterLab 버전입니다. | 필수 사항(기본값 제공)<br/>기본값: 최신<br/>값은 컨테이너 버전 태그입니다(예: 최신). |
| JupyterToken | UI에서 JupyterLab에 액세스하는 데 사용되는 토큰 또는 비밀번호입니다.| 필수 사항<br/>기본값: NA<br/>토큰은 문자로 시작해야 하며 영숫자만 포함해야 합니다. 허용되는 패턴은 ^[a-zA-Z][a-zA-Z0-9-]*입니다. |

</details>

<details>

<summary>자세히 알아보기: 영구 볼륨 사용</summary>

JupyterLab 인스턴스는 컨테이너에서 실행되고 인스턴스의 루트 볼륨에 있는 데이터베이스에 구성 데이터를 저장합니다. 인스턴스를 종료, 다시 시작 또는 스냅샷하고 다시 시작해도 이 데이터가 유지됩니다. 

그러나 영구 볼륨은 컨테이너화된 애플리케이션의 데이터를 실행되는 컨테이너, 포드 또는 노드의 수명을 넘어 저장합니다. 

**영구 볼륨 없음**

컨테이너, 포드 또는 노드가 충돌하거나 종료되면 JupyterLab 구성 데이터가 손실됩니다. 새로운 JupyterLab 인스턴스를 배포할 수 있지만 손실된 인스턴스와 동일한 상태로는 배포할 수 없습니다.

**영구 볼륨 사용**

컨테이너, 포드 또는 노드가 충돌하거나 종료되고 JupyterLab 구성 데이터가 영구 볼륨에 저장된 경우 손실된 인스턴스와 동일한 구성을 갖는 새 JupyterLab 인스턴스를 배포할 수 있습니다.

**예**

1. JupyterLab을 배포하고 다음 매개변수를 포함합니다.
   - `UsePersistentVolume`: **신규**
2. 스택을 생성한 후 **출력** 탭에서 `volume-id`를 기록해 둡니다.
3. JupyterLab을 사용합니다.
4. JupyterLab 인스턴스가 손실된 경우 JupyterLab을 다시 배포하고 다음 매개변수를 포함합니다.
   - `UsePersistentVolume`: **신규**
   - `ExistingPersistentVolumeId`: 2단계에서 기록한 값
   
새로운 JupyterLab 인스턴스는 손실된 인스턴스와 동일한 구성을 갖습니다.

</details>


## 인스턴스를 생성합니다.

1. **검토 + 생성**을 선택합니다.
2. **생성**을 선택합니다.<br />
**알림** 페이지에서 진행 상황을 모니터링할 수 있습니다.

배포가 완료되면 **출력** 페이지에 JupyterLab에 액세스하기 위한 URL이 표시됩니다.






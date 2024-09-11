---
id: deploy-jupyter-aws-console
title: AWS에 JupyterLab 설치
description: CloudFormation 템플릿을 사용하여 JupyterLab을 배포하는 방법을 알아보십시오.
sidebar_label: AWS에 설치
sidebar_position: 1
pagination_prev: null
pagination_next: null
---

# AWS에 JupyterLab 설치

Teradata에서 제공하는 CloudFormation 템플릿을 사용하여 AWS Management Console에서 JupyterLab과 AI Unlimited 커널을 설치합니다. 

이는 [systemd](../../glossary.md#systemd)로 제어되는 컨테이너에서 JupyterLab을 실행하여 서버 인스턴스를 배포합니다.

:::tip
설치 지원을 받으려면 <a href="mailto:aiunlimited.support@Teradata.com">지원 팀</a>에 이메일을 보내거나 [커뮤니티](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa)에 문의하십시오.
:::

## AWS 계정을 준비합니다.

- 클라우드 관리자와 협력하여 [JupyterLab 템플릿](https://github.com/Teradata/ai-unlimited/tree/develop/deployments/aws/templates/jupyter)에 정의된 클라우드 리소스를 생성할 수 있는 [IAM](https://aws.amazon.com/iam/) 권한이 있는지 확인합니다.

- 명령을 실행하거나 디버깅하기 위해 JupyterLab 인스턴스에 액세스해야 하는 경우 [키 쌍](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html)을 사용하여 SSH(Secure Shell)를 사용하여 안전하게 연결할 수 있습니다. [스택 세부 정보 지정](#specify-stack-details-and-options) 시 키 쌍이 필요합니다.
  
- [ALB(Application Load Balancer)](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancer-getting-started.html) 또는 [NLB(Network Load Balancer)](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancer-getting-started.html)를 사용하려면 다음 AWS 서비스를 관리할 수 있는 권한이 있는지 확인합니다.
	\- [AWS Certificate Manager](https://docs.aws.amazon.com/acm/)— Route 53의 호스팅 영역 ID에 대한 새 인증서를 발급합니다.
	\- [AWS Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html)—사용자 지정 도메인 이름을 구성하고 DNS 쿼리를 로드 밸런서로 라우팅합니다.


## 저장소 복제

import MyPartial from '../../_partials/_clone-repo.mdx';

<MyPartial />


## Jupyter 템플릿 찾기

JupyterLab용 CloudFormation 템플릿은 AI Unlimited GitHub 저장소에 있습니다.

`deployments/aws/templates/jupyter`

[로드 밸런서](../../glossary.md#load-balancer)를 사용할지 여부와 어떤 유형을 사용할지에 따라 템플릿을 선택합니다.
:::note
조직의 클라우드 관리자에게 지침을 요청할 수 있습니다.
:::
    \- `jupyter-alb.yaml`—다음 뒤의 JupyterLab을 호스팅합니다. [Application Load Balancer](../../glossary.md#application-load-balancer)
    \- `jupyter-with-nlb.yaml`—다음 뒤의 JupyterLab을 호스팅합니다. [Network Load Balancer](../../glossary.md#network-load-balancer)
    \- `jupyter-without-lb.yaml`—로드 밸런서가 없습니다.


## 템플릿을 로드합니다.	

1. [AWS 콘솔](https://aws.amazon.com)에 로그인합니다.
   :::note
   AWS Management Console에 대한 참조는 2024년 5월 29일 기준으로 최신 상태입니다.
   :::
2. JupyterLab을 배포할 리전을 선택합니다.<br/>
   주요 근무지와 가장 가까운 리전을 선택하는 것이 좋습니다.
3. 검색하여 **CloudFormation**으로 이동합니다.
4. **스택 생성**을 선택한 다음 **새로운 리소스 사용(표준)**을 선택합니다.
5. **기존 템플릿 선택** 및 **템플릿 파일 업로드**를 선택합니다.
6. 사용할 템플릿 파일을 선택하고 **다음**을 클릭합니다.


## 스택 세부 정보 및 옵션 지정

1. 스택 이름을 입력합니다.
2. 매개변수를 검토합니다. 필수 매개변수에 대한 값을 제공합니다. 귀하의 조직에는 다른 매개변수가 필요할 수 있습니다.

<details>

<summary>AWS 및 JupyterLab 매개변수</summary>

| 매개변수 | 설명 | 노트 
|---------|-------------|-----------|
| InstanceType | 서비스에 사용하려는 EC2 인스턴스 유형입니다. | 필수 사항(기본값 제공)<br/>기본값: t3.small<br/>비용을 절감하려면 기본 인스턴스 유형을 사용하는 것이 좋습니다. |
| RootVolumeSize | 인스턴스에 연결하려는 루트 디스크의 크기(GB)입니다. | 필수 사항(기본값 제공)<br/>기본값: 8<br/>8~1000 사이의 값을 지원합니다. |
| TerminationProtection | 인스턴스 종료 보호를 활성화합니다. | 필수 사항(기본값 제공)<br/>기본값: false |
|IamRole | CloudFormation에서 새로운 IAM 역할을 만들어야 하는지 아니면 기존 역할을 사용해야 하는지 지정합니다. | 필수 사항(기본값 제공)<br/>기본값: 신규<br/>지원되는 옵션은 다음과 같습니다. 신규 또는 기존 |
|IamRoleName | 인스턴스에 할당할 IAM 역할의 이름으로, 기존 IAM 역할이거나 새로 생성된 IAM 역할일 수 있습니다. | 선택 사항(기본값 제공)<br/>기본값: ai-unlimited-iam-role<br/>새 IAM 역할의 이름을 지정하는 경우 CloudFormation에 CAPABILITY_NAMED_IAM 기능이 필요합니다. 자동 생성된 이름을 사용하려면 이 값을 비워 둡니다. |
|IamPermissions<br/>경계 | 인스턴스에 할당된 IAM 역할과 연결할 IAM 권한 경계의 ARN입니다.| 선택 사항<br/>기본값: NA|
|AvailabilityZone | 인스턴스를 배포할 가용성 영역입니다. | 필수 사항<br/>기본값: NA<br/>값은 서브넷, 기존 볼륨의 영역과 일치해야 하며 인스턴스 유형은 선택한 영역에서 사용할 수 있어야 합니다. |
|LoadBalancing		|인스턴스에 NLB를 통해 액세스할지 여부를 지정합니다. | 필수 사항(기본값 제공)<br/>기본값: NetworkLoadBalancer<br/>지원되는 옵션은 다음과 같습니다. NetworkLoadBalancer 또는 없음 |
|LoadBalancerScheme	| 로드 밸런서를 사용하는 경우 이 필드는 인스턴스에 인터넷에서 액세스할 수 있는지 아니면 VPC 내에서만 액세스할 수 있는지 여부를 지정합니다. | 선택 사항(기본값 제공)<br/>기본값: Internet-facing<br/> Internet-facing 로드 밸런서의 DNS 이름은 노드의 공용 IP 주소로 공개적으로 확인 가능합니다. 따라서 Internet-facing 로드 밸런서는 인터넷을 통해 클라이언트의 요청을 라우팅할 수 있습니다. 내부 로드 밸런서의 노드는 개인 IP 주소만 갖습니다. 내부 로드 밸런서의 DNS 이름은 노드의 개인 IP 주소로 공개적으로 확인 가능합니다. 따라서 내부 로드 밸런서는 로드 밸런서의 VPC에 액세스할 수 있는 클라이언트의 요청을 라우팅할 수 있습니다.|
|개인	|서비스가 공용 IP가 없는 개인 네트워크에 배포되는지 여부를 지정합니다.| 필수 사항<br/>기본값: false<br/>관리자가 있는 서브넷에서 `공용 IPv4 주소 자동 할당 활성화` 옵션을 선택했는지 확인합니다. 이 옵션을 선택하지 않으면 설치가 실패할 수 있습니다.|
|세션	|AWS Session Manager를 사용하여 인스턴스에 액세스할 수 있는지 여부를 지정합니다.| 필수 사항<br/>기본값: false |
|Vpc		|인스턴스를 배포할 네트워크입니다.|필수 사항<br/>기본값: NA|
|서브넷	|인스턴스를 배포하려는 하위 네트워크입니다. |필수 사항<br/>기본값: NA<br/>서브넷은 선택한 가용성 영역에 있어야 합니다.|
|KeyName		|인스턴스가 시작된 후 인스턴스에 안전하게 연결할 수 있는 공용/개인 키 쌍입니다. AWS 계정을 만들 때 선호하는 리전에서 만드는 키 쌍입니다.| 선택 사항<br/>기본값: NA<br/>SSH 키를 포함하지 않으려면 이 필드를 비워둡니다.|
|AccessCIDR	|인스턴스에 액세스할 수 있는 CIDR IP 주소 범위입니다.| 선택 사항<br/>기본값: NA<br/>이 값을 신뢰할 수 있는 IP 범위로 설정하는 것이 좋습니다. 사용자 지정 보안 그룹 수신 규칙을 만들지 않는 한 AccessCIDR, PrefixList 또는 SecurityGroup 중 하나 이상을 정의하여 인바운드 트래픽을 허용합니다.|
|PrefixList			| 인스턴스와 통신하는 데 사용할 수 있는 접두사 목록입니다. 동일한 정책 시행이 필요한 IP 주소 범위 세트를 정의하는 CIDR 블록의 컬렉션입니다. | 선택 사항<br/>기본값: NA<br/>사용자 지정 보안 그룹 수신 규칙을 만들지 않는 한 AccessCIDR, PrefixList 또는 SecurityGroup 중 하나 이상을 정의하여 인바운드 트래픽을 허용합니다.|
|SecurityGroup	|인스턴스에 대한 인바운드 및 아웃바운드 트래픽을 제어하는 가상 방화벽입니다.| 선택 사항<br/>기본값: NA<br/>인스턴스에 액세스할 수 있는 프로토콜, 포트 및 IP 주소 또는 CIDR 블록을 지정하는 규칙 세트로 구현됩니다. 사용자 지정 보안 그룹 수신 규칙을 만들지 않는 한 AccessCIDR, PrefixList 또는 SecurityGroup 중 하나 이상을 정의하여 인바운드 트래픽을 허용합니다.|
|UsePersistentVolume| 데이터를 저장하기 위해 새 영구 볼륨을 사용할지 기존 영구 볼륨을 사용할지 지정합니다. 매개변수 섹션 아래의 *자세히 알아보기: 영구 볼륨 사용*을 참조하십시오. |선택 사항(기본값 제공)<br/>기본값: 신규<br/>지원되는 옵션은 사용 사례에 따라 새 영구 볼륨 또는 기존 영구 볼륨입니다.|
|PersistentVolumeSize	|인스턴스에 연결할 수 있는 영구 볼륨의 크기(GB)입니다.|필수 사항(기본값 제공)<br/>기본값: 20<br/>8~1000 사이의 값을 지원합니다.|
|ExistingPersistent<br/>VolumeId		|인스턴스에 연결할 수 있는 기존 영구 볼륨의 ID입니다.| UsePersistentVolume이 기존으로 설정된 경우 필수 사항<br/>기본값: NA<br/>영구 볼륨은 AI Unlimited 인스턴스와 동일한 가용성 영역에 있어야 합니다.|
|PersistentVolume<br/>DeletionPolicy		|CloudFormation 배포를 삭제할 때의 영구 볼륨 동작입니다.| 필수 사항(기본값 제공)<br/>기본값: 유지<br/>지원되는 옵션은 다음과 같습니다. 삭제, 유지, RetainExceptOnCreate 및 스냅샷.|
|LatestAmiId	|AMI의 최신 버전을 가리키는 이미지의 ID입니다. 이 값은 SSM 조회에 사용됩니다.|필수 사항(기본값 제공)<br/>기본값: NA<br/>이 배포는 사용 가능한 최신 ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2 이미지를 사용합니다.<br/>중요: 이 값을 변경하면 스택이 손상될 수 있습니다.|
| JupyterHttpPort | JupyterLab 서비스 UI에 액세스하는 포트입니다. | 필수 사항(기본값 제공)<br/>기본값: 8888|
| JupyterVersion | 배포하려는 JupyterLab 버전입니다. | 필수 사항(기본값 제공)<br/>기본값: 최신<br/>값은 컨테이너 버전 태그입니다(예: 최신). |
| JupyterToken | UI에서 JupyterLab에 액세스하는 데 사용되는 토큰 또는 비밀번호입니다. | 필수 사항<br/>기본값: NA<br/>토큰은 문자로 시작해야 하며 영숫자만 포함해야 합니다. 허용되는 패턴은 ^[a-zA-Z][a-zA-Z0-9-]*입니다. |
</details>

<details>

<summary>자세히 알아보기: 영구 볼륨 사용</summary>

JupyterLab 인스턴스는 컨테이너에서 실행되고 인스턴스의 루트 볼륨에 있는 데이터베이스에 구성 데이터를 저장합니다. 인스턴스를 종료, 다시 시작 또는 스냅샷하고 다시 시작해도 이 데이터가 유지됩니다. 

영구 볼륨은 컨테이너화된 애플리케이션의 데이터를 해당 애플리케이션이 실행되는 컨테이너, 포드 또는 노드의 수명을 넘어 저장합니다. 

**영구 볼륨 없음**

컨테이너, 포드 또는 노드가 충돌하거나 종료되면 JupyterLab 구성 데이터가 손실됩니다. 새로운 JupyterLab 인스턴스를 배포할 수 있지만 손실된 인스턴스와 동일한 상태로는 배포할 수 없습니다.

**영구 볼륨 사용**

컨테이너, 포드 또는 노드가 충돌하거나 종료되고 JupyterLab 구성 데이터가 영구 볼륨에 저장된 경우 손실된 인스턴스와 동일한 구성을 갖는 새 JupyterLab 인스턴스를 배포할 수 있습니다.

**예**

1. JupyterLab을 배포하고 다음 매개변수를 포함합니다.
   - `UsePersistentVolume`: **신규**
   - `PersistentVolumeDeletionPolicy`: **유지**
3. 스택을 생성한 후 **출력** 탭에서 `volume-id`를 기록해 둡니다.
4. JupyterLab을 사용합니다.
5. JupyterLab 인스턴스가 손실된 경우 JupyterLab을 다시 배포하고 다음 매개변수를 포함합니다.
   - `UsePersistentVolume`: **신규**
   - `PersistentVolumeDeletionPolicy`: **유지** 
   - `ExistingPersistentVolumeId`: 2단계에서 기록한 값
   
 새로운 JupyterLab 인스턴스는 손실된 인스턴스와 동일한 구성을 갖습니다.

</details>

3. **다음**을 선택합니다.
4. 요구 사항에 맞게 [스택 옵션을 구성](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-console-add-tags.html)하고 **다음**을 선택합니다. 


## 스택을 검토하고 생성합니다.

1. 템플릿 설정을 검토합니다. 
2. 템플릿이 IAM 리소스를 생성할 것임을 확인하려면 확인란을 선택합니다. 
3. 스택을 배포하려면 **제출**을 선택합니다.<br />
**이벤트** 탭에서 진행 상황을 모니터링할 수 있습니다. 모든 리소스의 상태가 `CREATE_COMPLETE`이면 JupyterLab이 준비된 것입니다. 

**출력** 탭은 JupyterLab에 액세스하기 위한 URL을 보여줍니다.




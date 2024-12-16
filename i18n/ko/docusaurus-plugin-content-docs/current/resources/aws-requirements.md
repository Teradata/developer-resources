---
id: aws-account-requirements
title: AWS 계정 요구 사항
description: AI Unlimited 설치를 위해 AWS 계정을 준비하는 방법
sidebar_label: AWS 계정 요구 사항
sidebar_position: 1
pagination_prev: null
pagination_next: null
---

# AWS 계정 요구 사항

먼저 [필수 조건](../install-ai-unlimited/index.md#prerequisites)이 있는지 확인합니다. 

AI Unlimited를 설치하기 전에 이러한 AWS 항목을 처리합니다.


## AWS 계정을 준비합니다.

- 클라우드 관리자와 협력하여 [AI Unlimited 템플릿](https://github.com/Teradata/ai-unlimited/tree/develop/deployments/aws/templates/ai-unlimited)에 정의된 클라우드 리소스를 생성할 수 있는 [IAM](https://aws.amazon.com/iam/) 권한이 있는지 확인합니다.

- 명령을 실행하거나 디버깅하기 위해 관리자 인스턴스에 액세스해야 하는 경우 다음 방법 중 하나로 연결할 수 있습니다.
	\- SSH(Secure Shell)를 사용하여 안전하게 연결하려면 [키 쌍](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html)을 사용합니다. [스택 세부 정보 지정](../install-ai-unlimited/prod-aws-console-deploy-ai-unlimited.md#specify-stack-details-and-options) 시 키 쌍이 필요합니다.
	\- AWS Session Manager를 사용하여 연결합니다. 이를 활성화하려면 [session-manager.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/session-manager.json) 정책을 관리자에게 [제공하는 역할](#provide-roles-created-by-your-organization)에 연결합니다.
  
- [ALB(Application Load Balancer)](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancer-getting-started.html) 또는 [NLB(Network Load Balancer)](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancer-getting-started.html)를 사용하려면 다음 AWS 서비스를 관리할 수 있는 권한이 있는지 확인합니다.
	\- [AWS Certificate Manager](https://docs.aws.amazon.com/acm/)— Route 53의 호스팅 영역 ID에 대한 새 인증서를 발급합니다.
	\- [AWS Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html)—사용자 지정 도메인 이름을 구성하고 DNS 쿼리를 로드 밸런서로 라우팅합니다.


## AI Unlimited가 역할을 생성하도록 허용

관리자는 엔진을 배포할 수 있는 역할이 필요합니다. 엔진은 엔진 노드가 통신할 수 있는 역할이 필요합니다. AI Unlimited가 이 두 역할을 모두 만들도록 할 수 있습니다.

:::note
보안상의 이유로 AI Unlimited에서 역할을 생성할 수 없는 경우 직접 [역할을 생성](#provide-roles-created-by-your-organization)하거나 클라우드 관리자의 도움을 받으십시오.
::: 

### 관리자의 역할

AI Unlimited가 사용자를 위해 이 역할을 생성하도록 하려면 [스택 세부 정보 지정](../install-ai-unlimited/prod-aws-console-deploy-ai-unlimited.md#specify-stack-details-and-options) 시 다음 매개변수에 대한 값을 제공합니다.
    \- `IamRole`: **신규**
    \- `IamRoleName`: 비워두십시오.

### 엔진의 역할

AI Unlimited는 엔진이 배포될 때마다 엔진에 대한 새로운 역할을 만들 수 있습니다. 

AI Unlimited가 생성하는 엔진별 정책은 다음과 같이 제한됩니다.	
  
  ```bash
  "Resource": ["arn:aws:secretsmanager:`REGION`:`ACCOUNT_ID`:secret:compute-engine/`CLUSTER_NAME`/`SECRET_NAME`"]
  ```

AI Unlimited가 각 엔진 배포에 대해 새 역할을 생성할 수 있도록 하려면 AI Unlimited 설정에서 [클라우드 통합](../install-ai-unlimited/setup-ai-unlimited.md)을 구성할 때 **기본 IAM 역할** 필드를 비워 둡니다.


## 귀하의 조직에서 생성한 역할을 제공합니다.

보안 문제로 인해 AI Unlimited에서 역할을 만들 수 없는 경우 조직에서 만든 역할을 제공합니다.

Teradata에서 제공하는 [AI Unlimited GitHub 저장소](https://github.com/Teradata/ai-unlimited)의 `deployments` 폴더에는 관리자 및 엔진 역할에 대한 정책 샘플이 포함되어 있습니다.

터미널 창을 열고 저장소를 복제합니다.

``` bash
git clone https://github.com/Teradata/ai-unlimited
```

또는 다음 섹션에 제공된 링크를 사용하여 필요한 항목을 다운로드합니다.


### 관리자의 역할

- IAM 리소스를 생성할 수 있는 권한이 있는 경우 역할을 생성합니다.
  - 귀하의 요구 사항을 충족하는 JSON을 포함하는 정책을 첨부합니다. 다음의 JSON 샘플을 참조하십시오.
  - [스택 세부 정보 지정](../install-ai-unlimited/prod-aws-console-deploy-ai-unlimited.md#specify-stack-details-and-options) 시 다음 매개변수 값을 사용합니다.
    - `IamRole`: **신규**
	 \- `IamRoleName`: 새 역할의 이름
- IAM 리소스를 생성할 권한이 없는 경우 클라우드 관리자와 협력하여 기존 역할을 사용합니다.
  - 귀하의 요구 사항을 충족하는 JSON을 포함하는 정책을 첨부합니다. 다음의 JSON 샘플을 참조하십시오.
  - [스택 세부 정보 지정](../install-ai-unlimited/prod-aws-console-deploy-ai-unlimited.md#specify-stack-details-and-options) 시 다음 매개변수 값을 사용합니다.
  - `IamRole`: **기존**
  - `IamRoleName`: 기존 역할의 이름
  
#### JSON 샘플

필요에 따라 관리자 역할에 첨부된 정책에서 다음 샘플을 사용합니다.

- AI Unlimited가 엔진 역할을 생성하도록 허용합니다. [ai-unlimited-workspaces.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces.json)을 포함합니다. 여기에는 엔진 인스턴스를 생성할 수 있는 권한이 포함되고 AI Unlimited에 클러스터별 역할 및 정책을 생성할 수 있는 권한이 부여됩니다.

- 보안상의 이유로 인해 AI Unlimited가 역할을 만들도록 허용하지 않는 경우 [ai-unlimited-without-iam-role-permissions.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces-without-iam-role-permissions.json)을 포함합니다. 여기에는 엔진 인스턴스를 만드는 권한이 포함되지만 AI Unlimited가 클러스터별 역할 및 정책을 만드는 데 필요한 권한은 포함되지 않습니다. 

  :::note
  관리자 역할에 [ai-unlimited-without-iam-role-permissions.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces-without-iam-role-permissions.json)을 사용하는 경우 엔진 역할에는 [ai-unlimited-engine.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json)을 사용합니다.
  :::

- 선택적으로 [session-manager.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/session-manager.json) 포함: 엔진이 [AWS Session Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html)와 상호 작용할 수 있는 권한이 포함됩니다. 엔진을 긴밀하게 관리하기 위해 Session Manager를 사용하여 엔진에 연결하려는 경우 이것을 사용합니다.


### 엔진의 역할

- 엔진에 제공하는 역할에 [ai-unlimited-engine.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json)을 포함하는 정책을 첨부합니다. 이를 통해 엔진이 배포될 때마다 AI Unlimited가 클러스터에 역할을 전달할 수 있습니다. 

- 정책에 계정 세부 정보를 추가합니다. 클러스터 이름을 예측할 수 없으므로 와일드카드를 사용합니다.

  ``` bash
  "arn:aws:secretsmanager:`REGION`:`ACCOUNT_ID`:secret:compute-engine/*"
  or
  "arn:aws:secretsmanager:`REGION`:111111111111:secret:compute-engine/*"
  or
  "arn:aws:secretsmanager:us-west-2:111111111111:secret:compute-engine/*"
  
  ```
  
:::note
엔진 역할에 [ai-unlimited-engine.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json)을 사용하는 경우 관리자 역할에는 [ai-unlimited-without-iam-role-permissions.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces-without-iam-role-permissions.json)을 사용합니다.
:::

- AI Unlimited 설정에서 [클라우드 통합](../install-ai-unlimited/setup-ai-unlimited.md)을 구성할 때 **기본 IAM 역할** 필드에 역할 이름을 입력합니다.








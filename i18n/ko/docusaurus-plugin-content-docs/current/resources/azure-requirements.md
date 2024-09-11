---
id: azure-account-requirements
title: Azure 계정 요구 사항
description: AI Unlimited 설치를 위해 Azure 계정을 준비하는 방법
sidebar_label: Azure 계정 요구 사항
sidebar_position: 2
pagination_prev: null
pagination_next: null
---

# Azure 계정 요구 사항

먼저 [필수 조건](../install-ai-unlimited/index.md#prerequisites)이 있는지 확인합니다. 

그런 다음 AI Unlimited를 설치하기 전에 이러한 Azure 항목을 처리합니다.


## Azure 계정 준비

- 클라우드 관리자와 협력하여 Azure 계정에 [AI Unlimited 템플릿](https://github.com/Teradata/ai-unlimited/tree/develop/deployments/azure/templates/arm/ai-unlimited)에 정의된 클라우드 리소스를 만들 수 있는 권한이 있는지 확인합니다. 

- 네트워킹 요구 사항: Azure [리소스 그룹](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal)에는 [서브넷](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-subnet?tabs=azure-portal)로 구성된 [Azure Virtual Network(VNet)](https://learn.microsoft.com/en-us/azure/virtual-network/quick-create-portal)이 있어야 합니다. 계정 권한에 따라 기존 VNet 또는 서브넷을 사용하거나 직접 만드십시오. 

- 명령을 실행하거나 디버깅하기 위해 관리자 인스턴스에 액세스해야 하는 경우 [키 쌍](https://learn.microsoft.com/en-us/azure/virtual-machines/ssh-keys-portal)을 사용하여 SSH(Secure Shell)를 사용하여 안전하게 연결할 수 있습니다. [인스턴스 세부 정보 지정](../install-ai-unlimited/prod-azure-portal-deploy-manager.md#specify-instance-details) 시 키 쌍이 필요합니다.


## 관리자의 역할을 생성합니다.

관리자에게는 다음을 수행할 수 있는 역할이 필요합니다.
- 엔진을 배포합니다.
- 엔진을 배포할 때마다 엔진의 노드 간 통신을 허용하는 새 역할을 만듭니다.

Teradata에서 제공하는 [AI Unlimited GitHub 저장소](https://github.com/Teradata/ai-unlimited)의 `deployments` 폴더에는 관리자 역할 ARM 템플릿과 정책 샘플이 포함되어 있습니다.

	터미널 창을 열고 저장소를 복제합니다.

    ``` bash
    git clone https://github.com/Teradata/ai-unlimited
    ```

또는 다음 링크를 사용하여 필요한 항목을 다운로드합니다.

역할 생성:

- 역할을 생성하는 데 필요한 권한이 있는 경우 [role-policy](https://github.com/Teradata/ai-unlimited/tree/develop/deployments/azure/templates/arm/init/role-policy.json) ARM 템플릿을 사용하여 관리자의 역할을 생성합니다. [ARM 템플릿을 사용하여 Azure 사용자 지정 역할 생성 또는 업데이트](https://learn.microsoft.com/en-us/azure/role-based-access-control/custom-roles-template)를 참조하십시오.

- 또는 관리자에게 필요한 권한이 포함된 [ai-unlimited.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/azure/policies/ai-unlimited.json) 정책을 클라우드 관리자와 공유하여 클라우드 관리자가 해당 역할을 생성할 수 있도록 합니다.

[인스턴스 세부 정보 지정](../install-ai-unlimited/prod-azure-portal-deploy-manager.md#specify-instance-details) 시 `RoleDefinitionId`이 필요합니다. 









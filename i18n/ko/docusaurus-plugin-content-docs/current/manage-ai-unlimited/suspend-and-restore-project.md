---
id: suspend-and-restore-project
title: 프로젝트 일시 중단 및 복원
description: 비용을 관리하기 위해 프로젝트를 일시 중단하고 복원하는 방법.
sidebar_position: 2
sidebar_label: 프로젝트 일시 중단 및 복원
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# 프로젝트 일시 중단 및 복원

필요에 따라 프로젝트를 일시 중단하고 복원할 수 있습니다.


## 일시 중단

불필요한 엔진 리소스에 대한 요금이 부과되는 것을 피하려면 작업하지 않는 프로젝트를 일시 중단합니다.

사용자 인증, 개체 저장소 인증 및 데이터 개체가 저장됩니다. 프로젝트를 복원하고 다시 배포하면 중단한 곳에서 다시 시작할 수 있습니다.

노트북에서 이 매직 명령을 실행합니다.

```bash 
%project_engine_suspend <Project_Name>
```


## 복원(다시 배포)

노트북에서 이 매직 명령을 실행합니다. 

<Tabs>
<TabItem value="aws1" label="AWS">

```bash 
%project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore-<true|false>, prefixlist=<Prefix_List>, securitygroups=<Security_Group>, cidrs=<CIDR>, tags=<Tags>, iamrole=<IAM_Role>, roleprefix=<Role_Prefix>, permissionboundary=<Permission_Boundary>
```
</TabItem>
<TabItem value="azure" label="Azure">

```bash 
%project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore=<true|false>, network=<Network>, keyvault=<Key_Vault>, keyvaultresourcegroup=<Key_Vault_Resource_Group>, networkresourcegroup=<Network_Resource_Group>
```
</TabItem>
</Tabs>

노드 수를 지정하지 않으면 노드 하나만 배포됩니다. 

복원 매개변수의 경우 기본값인 true를 그대로 둡니다. 이렇게 하면 프로젝트가 최신 Git 커밋 상태로 복원됩니다.

엔진이 배포될 때마다 엔진에 연결하기 위한 새 비밀번호가 각 사용자마다 생성됩니다.

:::tip
AI Unlimited [매직 명령](../explore-and-analyze-data/magic-commands.md)에 대해 자세히 알아보십시오.
:::


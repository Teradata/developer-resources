---
id: magic-commands
title: 매직 명령
description: Jupyter Notebook에서 프로젝트를 관리하는 데 사용할 수 있는 AI Unlimited 매직 명령에 대해 알아보십시오.
sidebar_label: 매직 명령
sidebar_position: 5
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 매직 명령

Jupyter Notebook에서 매직 명령은 일반적인 작업에 대한 단축키입니다. AI Unlimited 매직 명령을 사용하면 엔진에 연결하고 프로젝트를 관리할 수 있습니다.

AI Unlimited Jupyter Kernel은 표준 Teradata SQL 커널 매직 명령 외에도 여기에 설명된 매직 명령을 지원합니다. 


## %workspaces_config

**설명**: 노트북과 AI Unlimited 관리자 간의 통신을 설정합니다.

**용법**:
```bash 
%workspaces_config host=<ip_or_hostname>, apikey=<API_Key>, withtls=<T|F>
```
위치:

- 호스트: AI Unlimited 관리자의 이름 또는 IP 주소입니다.

- apikey: AI Unlimited 설정 **프로파일** 페이지의 API 키 값입니다.

- **`[선택 사항]`**(TLS 사용): False(F)인 경우 기본 클라이언트-서버 통신은 TLS를 사용하지 않습니다.

**출력**:
```
Workspace configured for host=<ip_or_hostname>
```

## %project_create

**설명**: 새 프로젝트를 만듭니다. 이 명령은 또한 Git 계정의 프로젝트 이름으로 새 저장소를 만듭니다. 구성은 **engine.yml** 파일에 저장됩니다.

**용법**:
```bash
%project_create project=<Project_Name>, env=<Cloud_Service_Provider>, team=<Project_Team>
```
위치:

- 프로젝트: 생성할 프로젝트의 이름.

- env: 프로젝트가 호스팅되는 클라우드 환경입니다. 현재 릴리스에서는 AWS와 Azure가 지원됩니다.

- **`[선택 사항]`** 팀: 프로젝트에 협업하는 팀의 이름입니다.

**출력**:
```
Project `Project_Name` created
```

## %project_delete

**설명**: 프로젝트를 삭제합니다. 이렇게 하면 프로젝트 저장소가 제거되지 않습니다. 관리자에서 프로젝트 메타데이터가 제거됩니다. 

**용법**:
```bash 
%project_delete project=<Project_Name>, team=<Project_Team>
```

위치:

- 프로젝트: 삭제할 프로젝트의 이름입니다.

- **`[선택 사항]`** 팀: 프로젝트에 협업하는 팀의 이름입니다.

**출력**:
```
Project `Project_Name` deleted
```

## %project_list

**설명**: 하나 또는 모든 프로젝트의 세부 정보를 나열합니다.

프로젝트 매개변수를 사용하여 특정 프로젝트의 세부 정보를 가져옵니다. 매개변수 없이 명령을 실행하면 모든 프로젝트가 나열됩니다.

**용법**:
```bash
%project_list project=<Project_Name>
```
위치:

- 프로젝트: 프로젝트 이름입니다.

**출력**:

```
| NAME          | URL      | 
|---------------|----------|
| <Project_Name>| <Git_URL>| 

```

## %project_auth_create

**설명**: 개체 저장소 자격 증명을 저장하기 위한 인증 개체를 만듭니다.

엔진을 배포하기 전에 인증 개체를 만들어야 합니다. 인증 세부 정보는 유지되고 프로젝트를 다시 배포하는 동안 포함됩니다. 선택적으로 엔진을 배포한 후 `CREATE AUTHORIZATION` SQL 명령을 사용하여 수동으로 인증을 생성할 수 있습니다. 이 경우 인증 세부 정보는 유지되지 않습니다.

**용법**:
```bash 
%project_auth_create project=<Project_Name>, name=<Authorization_Name>, key=<Authorization_Key>, secret=<Authorization_Secret>, region=<ObjectStore_Region>, token=<Session_Token>
```
위치:

- 프로젝트: 프로젝트의 이름입니다.

- 이름: 개체 저장소에 대한 인증 이름입니다.

- 키: 개체 저장소의 인증 키입니다.

- **`[선택 사항]`** 암호: 개체 저장소의 인증 암호 액세스 ID입니다.

- **`[선택 사항]`** 리전: 개체 저장소의 리전입니다. 로컬 개체 저장소의 경우 로컬입니다.

- **`[선택 사항]`** 토큰: 개체 저장소 액세스를 위한 세션 토큰입니다.

- **`[선택 사항-AWS 전용]`** 역할: AWS 계정에서 역할과 권한을 가정하여 AWS 리소스에 액세스하는 IAM 사용자 또는 서비스 계정입니다. AWS 리소스 소유자가 역할을 정의합니다. 예: arn:aws:iam::00000:role/STSAssumeRole.

- **[`선택 사항-AWS 전용`]** ExternalID: 개체 저장소에 액세스하는 데 사용되는 외부 ID입니다. 이 매개변수는 `role` 매개변수를 사용할 때 필수 사항입니다.

**출력**:
```
Authorization 'name' created
```

## %project_auth_update

**설명**: 개체 저장소 인증을 업데이트합니다.

**용법**:

```bash 
%project_auth_update project=<Project_Name>, name=<Authorization_Name>, key=<Authorization_Key>, secret=<Authorization_Secret>, region=<ObjectStore_Region>, token=<Session_Token>

```
위치:

- 프로젝트: 프로젝트의 이름입니다.

- 이름: 개체 저장소에 대한 인증 이름입니다.

- 키: 개체 저장소의 인증 키입니다.

- **`[선택 사항]`** 암호: 개체 저장소의 인증 암호 액세스 ID입니다.

- **`[선택 사항]`** 리전: 개체 저장소의 리전입니다. 로컬 개체 저장소의 경우 로컬입니다.

- **`[선택 사항]`** 토큰: 개체 저장소 액세스를 위한 세션 토큰입니다.

- **`[선택 사항-AWS 전용]`** 역할: CSP 계정에서 역할과 해당 권한을 가정하여 AWS 또는 Azure 리소스에 액세스하는 IAM 사용자 또는 서비스 계정입니다. AWS 또는 Azure 리소스의 소유자가 역할을 정의합니다. 예: arn:aws:iam::00000:role/STSAssumeRole.

- **`[선택 사항-AWS 전용]`** ExternalID: 개체 저장소에 액세스하는 데 사용되는 외부 ID입니다. 이 매개변수는 `role` 매개변수를 사용할 때 필수 사항입니다.

**출력**:
```
Authorization 'name' updated
```

## %project_auth_delete

**설명**: 개체 저장소 인증을 제거합니다.

**용법**:
```bash
%project_auth_delete project=<Project_Name>, name=<Authorization_Name>
```
위치:

- 프로젝트: 프로젝트의 이름입니다.

- 이름: 개체 저장소에 대한 인증 이름입니다.

**출력**:
```
Authorization 'name' deleted
```

## %project_auth_list

**설명**: 프로젝트에 대해 생성된 개체 저장소 인증을 나열합니다.

**용법**:
```bash 
%project_auth_list project=<Project_Name>

```
위치:

- 프로젝트: 프로젝트의 이름입니다.

**출력**:
```
| AUTH NAME           | ACCESS KEY  | SECRET  | 
|---------------------|-------------|---------|
| <Authorization_Name>| <ACCESS_KEY>| <SECRET>| 
```

## %project_engine_deploy

**설명**: 프로젝트에 대한 엔진을 배포합니다. 배포 프로세스는 완료하는 데 몇 분이 걸립니다. 배포가 성공하면 비밀번호가 생성됩니다.

**용법**:

<Tabs>
<TabItem value="aws1" label="AWS">

```bash 
%project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore=<true|false>, prefixlist=<Prefix_List>, securitygroups=<Security_Group>, cidrs=<CIDR>, tags=<Tags>, iamrole=<IAM_Role>, roleprefix=<Role_Prefix>, permissionboundary=<Permission_Boundary>
```
</TabItem>
<TabItem value="azure" label="Azure">

```bash 
%project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore=<true|false>, network=<Network>, keyvault=<Key_Vault>, keyvaultresourcegroup=<Key_Vault_Resource_Group>, networkresourcegroup=<Network_Resource_Group>
```
</TabItem>
</Tabs>

위치:

- 프로젝트: 프로젝트의 이름입니다.

- 크기: 엔진의 크기. 값은 다음과 같습니다.

  - 소형
  - 중형
  - 대형
  - 특대형

- **`[선택 사항]`** 노드: 배포할 엔진 노드 수. 기본값은 1입니다.

- **`[선택 사항]`** 서브넷: AI Unlimited 설정에서 기본값이 없는 경우 엔진에 사용되는 서브넷입니다.

- **`[선택 사항]`** 리전: AI Unlimited 설정에서 기본값이 없는 경우 엔진에 사용되는 리전입니다.

- **`[선택 사항]`** 복원: False(F)이면 엔진이 배포되지만 프로젝트의 개체는 복원되지 않아 배포 시간이 단축됩니다. %project_restore를 사용하여 수동으로 복원할 수 있습니다. 기본값은 True(T)입니다. 

<Tabs>
<TabItem value="aws1" label="AWS">

- **`[선택 사항]`** prefixlist: 동일한 정책 적용이 필요한 IP 주소 범위 세트를 정의하는 CIDR 블록 컬렉션입니다. 엔진과 통신할 수 있는 IP 주소를 지정하는 데 사용됩니다.

- **`[선택 사항]`** securitygroups: 각 리전의 VPC에 대한 보안 그룹 목록입니다. 보안 그룹을 지정하지 않으면 엔진은 자동으로 VPC에 대한 기본 보안 그룹과 연결됩니다.

- **`[선택 사항]`** cidrs: 엔진에 사용되는 CIDR 주소 목록입니다.

- **`[선택 사항]`** 태그: 빠른 식별을 위해 엔진에 할당된 키-값 쌍입니다.

- **`[선택 사항]`** iamrole: 엔진에 사용되는 IAM 역할입니다.

- **`[선택 사항]`** roleprefix: 엔진에 할당된 IAM 역할의 시작 부분에 추가되는 문자열입니다.

- **`[선택 사항]`** permissionboundary: 엔진에 할당된 IAM 역할과 연결할 IAM 권한 경계의 ARN입니다. 권한 경계는 역할이 가질 수 있는 최대 권한을 정의합니다.

</TabItem>
<TabItem value="azure" label="Azure">

- **`[선택 사항]`** 네트워크: 엔진을 배포하려는 네트워크입니다.

- **`[선택 사항]`** keyvault: 비밀번호와 같은 중요한 정보를 안전하게 저장할 수 있는 엔진에서 사용하는 키 볼트입니다.

- **`[선택 사항]`** keyvaultresourcegroup: 키 볼트를 포함하는 리소스 그룹입니다.

- **`[선택 사항]`** networkresourcegroup: 네트워크를 포함하는 리소스 그룹입니다.

</TabItem>
</Tabs>

**출력**:
```
Started deploying.
Success: Compute Engine setup, look at the connection manager
```

## %project_engine_suspend

**설명**: 작업이 완료되면 엔진을 중지합니다.

**용법**:
```bash 
%project_engine_suspend <Project_Name>
```
위치:

- 프로젝트: 프로젝트의 이름입니다.

**출력**:
```
Started suspend
Success: Suspended Compute Engine
```

## %project_engine_list

**설명**: 프로젝트에 배포된 엔진 목록을 확인합니다.

**용법**:
```bash 
%project_engine_list project=<Project_Name>
```
위치:

- 프로젝트: 프로젝트의 이름입니다.

**출력**:
```
| IP   | STATE   | REGION  | SIZE             | NODE             |
|------|---------|---------|------------------|------------------|
| <IP> | Deployed| <Region>| <Size_of_Engine> | <Number_of_Nodes>|
```

## %project_user_list

**설명**: Git 저장소에서 프로젝트에 할당된 공동 작업자 목록을 봅니다.

**용법**:
```bash
%project_user_list project=<Project_Name>
```

위치:

- **`[선택 사항]`** 프로젝트: 프로젝트의 이름입니다.

**출력**:
```
| PROJECT ID   | USER  | PASSWORD  |
|--------------|-------|-----------|
| <Project_ID> | <User>| <Password>| 
```

## %project_backup

**설명**: 엔진 내부의 프로젝트 정보와 개체 정의를 백업합니다.

**용법**:
```bash
%project_backup project=<Project_Name>
```
위치:

- 프로젝트: 프로젝트의 이름입니다.

**출력**:
```
Backup of the object definitions created
```

## %project_restore

**설명**: Git 저장소에서 프로젝트 정보와 개체 정의를 복원합니다.

**용법**:
```bash 
%project_restore project=<Project_Name>, gitref=<Git_Reference>
```
위치:

- 프로젝트: 프로젝트의 이름입니다.
- **`[선택 사항]`** gitref: 최신에서 복원하지 않으려는 경우 프로젝트를 복원할 커밋에 대한 Git 참조입니다.

**출력**:
```
Restore of the object definitions done
```

## %project_engine_update_users

**설명**: 배포된 엔진의 사용자를 업데이트합니다. 엔진이 배포된 후 사용자가 Git 저장소에 공동 작업자로 추가된 경우 이 명령을 사용하여 배포된 엔진에 대한 새 사용자를 업데이트하고 생성할 수 있습니다.

**용법**:
```bash 
%project_engine_update_users project=<Project_Name>
```
위치:

- 프로젝트: 프로젝트의 이름입니다.

**출력**:
```
Username and password of each user on the engine
```

## %project_engine_update_auth

**설명**: 엔진을 일시 중단하고 다시 배포하지 않고도 배포된 엔진에 새로운 인증을 업데이트하거나 추가합니다.

**용법**:
```bash 
%project_engine_update_auth project=<Project_Name>
```
위치:

- 프로젝트: 프로젝트의 이름입니다.


**출력**:
```
Authorizations updated
```

## %project_connection_add

**설명**: 배포된 엔진에 대한 연결을 새로 고칩니다. 이 명령을 사용하면 수동으로 새 연결을 만들지 않고도 다른 노트북에서 엔진에 연결할 수 있습니다.

**용법**:
```bash 
%project_connection_add project=<Project_Name>
```
위치:

- 프로젝트: 프로젝트의 이름입니다.


**출력**:
```
The connection manager shows the refreshed connection
```

## %help

**설명**: AI Unlimited 커널이 제공하는 매직 명령 목록을 봅니다.

**용법**:
```bash
%help
```
또한, 명령별로 자세한 도움말 메시지를 볼 수 있습니다.

**용법**:
```bash 
%help `command`
```
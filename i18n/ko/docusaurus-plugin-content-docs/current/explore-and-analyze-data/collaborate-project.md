---
id: collaborate-project
title: 프로젝트 협업
description: 공동 작업자로서 프로젝트에 액세스하는 방법을 알아보십시오.
sidebar_position: 3
sidebar_label: 프로젝트 협업
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 프로젝트 협업

프로젝트는 Jupyter Notebook의 데이터를 탐색하고 분석하는 수단입니다. 

:::note
각 프로젝트에는 Git 저장소가 있습니다. [이유를 알아보십시오](../glossary.md#project-repository).
:::

프로젝트 소유자는 공동 작업자로서 [당신을 프로젝트에 추가](../manage-ai-unlimited/add-collaborators.md)할 수 있습니다. 기여하려면 Jupyter Notebook에서 프로젝트에 액세스해야 합니다.


## 시작하기 전에

- 프로젝트 소유자로부터 다음 항목을 받으세요.
  - [AI Unlimited 관리자](../glossary.md#ai-unlimited-manager)의 IP 주소 또는 호스트 이름
  - 프로젝트 이름

- 사용자 프로파일에서 [API 키를 받으세요](./get-api-key.md). 

:::tip
노트북에서 사용할 수 있는 모든 매직 명령에 대한 자세한 내용을 보려면 `%help`를 실행합니다. 그 중 하나에 대한 자세한 내용을 보려면 `%help <command>`를 실행합니다. 

또는 AI Unlimited와 관련된 [매직 명령](./magic-commands.md)에 대해 알아봅니다. 
:::


## 프로젝트에 액세스

1. JupyterLab에 연결하고 노트북을 열고 AI Unlimited 커널을 선택합니다.

2. 관리자에 연결합니다.
    ```bash 
    %workspaces_config host=<ip_or_hostname>, apikey=<API_Key>, withtls=<T|F>
    ```

3. 엔진이 배포되었는지 확인합니다.
    ```bash 
    %project_engine_list project=<Project_Name>
    ```

4. 엔진이 배포되지 않은 경우, 엔진을 배포한 후 프로젝트를 복원합니다. 

   크기는 소형, 중형, 대형 또는 특대형일 수 있습니다. 기본값은 소형입니다. [AWS](http://aws.amazon.com/marketplace/pp/prodview-2srvuo3mwqlig) 또는 [Azure](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/teradata.ai-unlimited?tab=Overview) 가격 정보를 참조하십시오.
   
   노드 수를 지정하지 않으면 노드 하나가 배포됩니다. 복원의 기본값은 true입니다.
   
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

5. 엔진의 비밀번호를 가져옵니다.
   ```bash
   %project_user_list project=<Project_Name>
   ```

6. 노트북을 포함하려면 연결을 새로 고칩니다.
   ```bash 
   %project_connection_add project=<Project_Name>
   ```

7. 프로젝트에 연결합니다.
   ```bash
   %connect <Project_Name>
   ```
   연결되면 비밀번호를 입력합니다.
   
모두 준비되었습니다! 이제 프로젝트에 기여할 수 있습니다.



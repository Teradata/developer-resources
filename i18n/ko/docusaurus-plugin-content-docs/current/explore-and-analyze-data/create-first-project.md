---
id: create-first-project
title: 첫 번째 프로젝트를 만듭니다.
description: Jupyter Notebook에서 간단한 워크플로를 실행합니다.
sidebar_label: 첫 번째 프로젝트를 만듭니다.
sidebar_position: 2
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 첫 번째 프로젝트를 만듭니다.

프로젝트는 Jupyter Notebook의 데이터를 탐색하고 분석하는 수단입니다. 

:::note
각 프로젝트에는 Git 저장소가 있습니다. [이유를 알아보십시오](../glossary.md#project-repository).
:::

첫 번째 프로젝트에서는 당사에서 제공하는 데이터를 사용하여 다음과 같은 간단한 워크플로를 완료합니다.

- 프로젝트 생성
- 엔진 배포
- 데이터에 연결 및 워크로드 실행
- 엔진 일시 중단


## 시작하기 전에

- 귀하의 AI Unlimited 관리자는 귀하의 조직에서 AI Unlimited를 설정한 사람입니다. 귀하의 관리자로부터 다음 항목을 얻으세요:

  - [AI Unlimited 관리자](../glossary.md#ai-unlimited-manager)의 IP 주소 또는 호스트 이름입니다.

  - 다음 환경 변수는 다음과 같습니다.   
    <Tabs>
    <TabItem value="aws" label="AWS" default>
    `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY` 및 `AWS_SESSION_TOKEN`

    </TabItem>
    <TabItem value="azure" label="Azure">
    `ARM_SUBSCRIPTION_ID`, `ARM_CLIENT_ID` 및 `ARM_CLIENT_SECRET`

    </TabItem>
    </Tabs> 

- 사용자 프로파일에서 [API 키를 받으세요](./get-api-key.md).

- 샘플 워크로드를 실행하려면 `salescenter.csv` 파일이 필요합니다. [AI Unlimited GitHub 저장소](https://github.com/Teradata/ai-unlimited/tree/develop/examples/GetStarted/data)에서 파일을 다운로드하여 Amazon S3(Simple Storage Service) 또는 Azure Blob Storage 위치에 업로드합니다. 또는 고유한 파일을 사용하는 경우 이에 따라 예제를 수정합니다.


## 연결하고 첫 번째 워크로드를 실행합니다.

:::tip
노트북에서 사용할 수 있는 모든 매직 명령에 대한 자세한 내용을 보려면 `%help`를 실행합니다. 그 중 하나에 대한 자세한 내용을 보려면 `%help <command>`를 실행합니다. 

또는 AI Unlimited와 관련된 [매직 명령](./magic-commands.md)에 대해 알아봅니다. 
:::

1. JupyterLab에 연결하고 노트북을 열고 AI Unlimited 커널을 선택합니다.

2. 관리자에 연결합니다.
    ```bash
    %workspaces_config host=<ip_or_hostname>, apikey=<API_Key>, withtls=T 	
    ```

3. 프로젝트를 생성합니다.
    ```bash
    %project_create project=<Project_Name>, env=<Cloud_Service_Provider>
    ```

4. 클라우드 서비스 공급자 자격 증명을 저장하기 위한 개체 저장소 인증을 만듭니다. 

    `ACCESS_KEY_ID`, `SECRET_ACCESS_KEY`, `REGION`을 사용자 값으로 바꿉니다.

    ```bash
    %project_auth_create name=<Authorization_Name>, project=<Project_Name>, key=<ACCESS_KEY_ID>, secret=<SECRET_ACCESS_KEY>, region=<REGION>
    ```

5. 엔진을 배포합니다.

    크기는 소형, 중형, 대형 또는 특대형일 수 있습니다. 기본값은 소형입니다. [AWS](http://aws.amazon.com/marketplace/pp/prodview-2srvuo3mwqlig) 또는 [Azure](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/teradata.ai-unlimited?tab=Overview) 가격 정보를 참조하십시오.
    ```bash
    %project_engine_deploy name=<Project_Name>, size=<Size_of_Engine>
    ```
    배포 프로세스는 몇 분이 걸립니다. 비밀번호가 생성됩니다.

6. 프로젝트에 연결합니다.
    ```bash
    %connect <Project_Name>
    ```
    연결되면 생성된 비밀번호를 입력합니다.

7. 샘플 워크로드를 실행합니다.

    :::note
    선택한 데이터베이스에 SalesCenter 또는 SalesDemo라는 이름의 테이블이 없는지 확인합니다. 다음 예제의 `Authorization_Name` 및 `salescenter.csv_file_location` 값을 사용자 고유의 값으로 바꿉니다.
    ::::

    a. 판매 센터 데이터를 저장할 테이블을 만듭니다. 
    ```sql
    DROP FOREIGN TABLE SalesCenter;

    CREATE MULTISET FOREIGN TABLE SalesCenter ,
    EXTERNAL SECURITY DEFINER TRUSTED <Authorization_Name>
    (
        Sales_Center_id INTEGER NOT NULL,
        Sales_Center_Name VARCHAR(255) CHARACTER SET LATIN NOT CASESPECIFIC
    )
    USING
    (
        LOCATION ('<salescenter.csv_file_location>')
        MANIFEST ('FALSE')
        ROWFORMAT  ('{"field_delimiter":",","record_delimiter":"\n","character_set":"LATIN"}')
        STOREDAS ('TEXTFILE')
        HEADER ('TRUE')
        STRIP_EXTERIOR_SPACES ('FALSE')
        STRIP_ENCLOSING_CHAR ('NONE')
    )
    NO PRIMARY INDEX;

    ```
     b. 데이터가 삽입되었는지 확인합니다.
    ```sql
    SELECT * FROM SalesCenter ORDER BY 1
    ```
    c. 판매 데모 데이터로 테이블을 만듭니다.
    ```sql
    DROP FOREIGN TABLE SalesDemo;
    CREATE MULTISET FOREIGN TABLE SalesDemo ,
    EXTERNAL SECURITY DEFINER TRUSTED <Authorization_Name>
    (
        Sales_Center_ID INTEGER NOT NULL,
        UNITS DECIMAL(15,4),
        SALES DECIMAL(15,2),
        "COST" DECIMAL(15,2)
    )
   USING
   (
       LOCATION ('<salescenter.csv_file_location>')
       MANIFEST ('FALSE')
       ROWFORMAT  ('{"field_delimiter":",","record_delimiter":"\n","character_set":"LATIN"}')
       STOREDAS ('TEXTFILE')
       HEADER ('FALSE')
       STRIP_EXTERIOR_SPACES ('FALSE')
       STRIP_ENCLOSING_CHAR ('"')
   )
   NO PRIMARY INDEX;
    ```
    d. 판매 데모 데이터가 성공적으로 삽입되었는지 확인합니다.

    ```sql
    SELECT * FROM SalesDemo ORDER BY sales
    ```
    연결에 대한 탐색기를 열고 테이블이 생성되었는지 확인합니다. 테이블에서 행 카운트를 실행하여 데이터가 로드되었는지 확인합니다.

    e. 결과를 시각화하기 위해 데이터를 차트로 표시합니다.

    차트의 X축과 Y축을 제공합니다.

    ```bash
    %chart sales_center_name, sales, title=Sales Data
    ```
    f. 테이블을 삭제합니다.
    ```sql
    DROP TABLE SalesCenter;
    DROP TABLE SalesDemo;
    ```

8. Git 저장소에서 프로젝트 메타데이터와 개체 정의(스키마)를 백업합니다.
	```bash
	%project_backup project=<Project_Name>
	```
   이렇게 하면 프로젝트가 백업되지만 엔진은 일시 중단되지 않습니다.
   
9. 불필요한 엔진 리소스에 대한 비용을 지불하지 않으려면 엔진을 일시 중단합니다.
    ```bash
    %project_engine_suspend project=<Project_Name>
    ```
   이렇게 하면 프로젝트가 백업되고 엔진이 일시 중단됩니다. 일반적으로 `%project_engine_suspend` 바로 다음에 `%project_backup`을 사용하지 않습니다.

축하합니다! 첫 번째 워크로드를 실행했습니다.
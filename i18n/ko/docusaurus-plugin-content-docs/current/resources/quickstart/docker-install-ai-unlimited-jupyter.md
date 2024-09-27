---
id: run-ai-unlimited-jupyterlab-docker
title: 관리자와 JupyterLab을 로컬에서 실행
description: Docker를 사용하여 AI Unlimited 관리자와 JupyterLab을 실행하는 방법을 알아보십시오.
sidebar_label: Docker를 사용하여 관리자와 JupyterLab 실행
sidebar_position: 3
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Docker를 사용하여 관리자와 JupyterLab 실행

AI Unlimited 관리자는 엔진의 배포를 조정하고 프로젝트 모니터링을 위한 웹 기반 사용자 인터페이스를 포함합니다. 그리고 관리자는 AI Unlimited를 설정하는 곳입니다. 

JupyterLab을 사용하여 데이터를 탐색하고 분석합니다.

[Docker Compose](https://docs.docker.com/compose/)를 사용하여 AI Unlimited Jupyter Kernel과 함께 AI Unlimited 관리자와 JupyterLab을 컨테이너에서 로컬로 실행합니다. 

:::tip
설치 지원을 받으려면 <a href="mailto:aiunlimited.support@Teradata.com">지원 팀</a>에 이메일을 보내거나 [커뮤니티](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa)에 문의하십시오.
:::

## 필수 조건

- Jupyter Notebook에서 엔진을 배포할 수 있는 종량제 AWS 또는 Azure 계정
- 사용자 인증 및 프로젝트 정보 저장을 위해 각 프로젝트 저장소를 호스팅하는 [GitHub](https://github.com) 또는 [GitLab](https://gitlab.com) 계정
- Amazon 또는 ADLS Gen2 데이터 레이크가 있는 개체 스토리지
- 컴퓨터에 설치된 [Docker](https://www.docker.com/get-started/)


## 구성 파일 위치 설정

1. 선택적으로 `AI_UNLIMITED_HOME` 환경 변수를 관리자의 구성 및 데이터 파일을 저장할 디렉토리로 설정합니다. 디렉토리가 존재하고 적절한 권한이 부여되었는지 확인합니다. 기본 위치는 `./volumes/ai-unlimited`입니다.

    | **로컬 위치** | **컨테이너 위치** | **용법** |
    |----------------|--------------------|-------|
    | $AI_UNLIMITED_HOME | /etc/td | 데이터 및 구성 저장 |

	:::tip
	[AWS](https://docs.aws.amazon.com/sdkref/latest/guide/environment-variables.html) 또는 [Azure](https://github.com/paulbouwer/terraform-azure-quickstarts-samples/blob/master/README.md#azure-authentication) 환경 변수에 대해 알아보십시오.
	:::

2. 선택적으로 `JUPYTER_HOME` 환경 변수를 JupyterLab 구성 파일을 저장할 디렉토리로 설정합니다. 기본 위치는 `~/.jupyter`입니다.


## 저장소 복제

Teradata에서 제공하는 [AI Unlimited GitHub 저장소](https://github.com/Teradata/ai-unlimited)의 `deployments/docker` 폴더에는 관리자와 JupyterLab을 실행하는 데 필요한 다음 파일이 포함되어 있습니다.
- `[AWS or Azure]-credentials-env-vars.yaml`
- `ai-unlimited.yaml`
- `jupyter.yaml` 

저장소를 복제합니다.

    ``` bash
    git clone https://github.com/Teradata/ai-unlimited
	```


## 클라우드 서비스 공급자 자격 증명을 Docker에 전달합니다.

:::note 
자격 증명은 두 가지 방법으로 전달할 수 있습니다.
- 자격 증명을 저장하기 위한 환경 변수가 포함된 `[AWS or Azure]-credentials-env-vars.yaml`를 사용합니다.
- 자격 증명이 포함된 로컬 볼륨을 사용합니다. 

Teradata AI Unlimited GitHub 저장소의 [Docker Compose로 배포](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/docker/README.md)의 **Jupyter 및 AI Unlimited** 섹션에서 두 가지 방법을 모두 확인합니다.

이 QuickStart에서는 첫 번째 방법을 사용합니다.
:::

1. 클라우드 서비스 공급자의 콘솔에서 이러한 환경 변수를 복사합니다.

	<Tabs>
		<TabItem value="aws" label="AWS" default>
		`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY` 및 `AWS_SESSION_TOKEN`
		</TabItem>

		<TabItem value="azure" label="Azure">
		`ARM_SUBSCRIPTION_ID`, `ARM_CLIENT_ID` 및 `ARM_CLIENT_SECRET`
		</TabItem>
	</Tabs>

2. `[AWS or Azure]-credentials-env-vars.yaml`가 있는 디렉토리로 이동하여 파일의 환경 변수 값을 업데이트합니다.


## 관리자와 JupyterLab을 시작합니다.

1.  `[AWS or Azure]-credentials-env-vars.yaml`, `ai-unlimited.yaml` 및 `jupyter.yaml`가 위치한 디렉토리에서 관리자와 JupyterLab을 시작합니다.

	:::note
	명령의 `-d` 플래그는 선택 사항입니다.
	:::

	<Tabs>
		<TabItem value="aws" label="AWS" default>
		```bash title="Run the Docker Compose file in the background "
		docker compose -f ai-unlimited.yaml -f aws-credentials-env-vars.yaml -f jupyter.yaml -d up 
		```
		</TabItem>
		<TabItem value="azure" label="Azure">
		```bash title="Run the Docker Compose file in the background "
		docker compose -f ai-unlimited.yaml -f azure-credentials-env-vars.yaml -f jupyter.yaml -d up
		```
		</TabItem></Tabs>


	이 명령은 관리자와 JupyterLab 컨테이너를 다운로드하고 시작합니다.

2. Jupyter 토큰을 검색하려면 현재 실행 중인 컨테이너를 나열합니다.

	```bash
	docker ps 
	```
	그리고 JupyterLab 컨테이너의 이름을 식별합니다.

	그런 다음 컨테이너 로그에서 '토큰' 문자열이 나오는 부분을 검색합니다.

	```bash
	docker logs <container_name> | grep 'Token'
	```

## 액세스 확인

관리자가 준비되면 `http://localhost:3000`에서 액세스할 수 있습니다. 

JupyterLab이 준비되면 `http://localhost:8888`에서 액세스하여 토큰을 입력할 수 있습니다. 


## 다음 항목

[OAuth 앱 생성](../create-oauth-app.md)하여 AI Unlimited와 Git 공급자 계정 간 인증을 허용합니다.



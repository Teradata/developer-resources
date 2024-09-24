---
id: run-jupyter-docker
title: Docker를 사용하여 JupyterLab 실행
description: 컴퓨터에서 AI Unlimited Jupyter Kernel을 사용하여 JupyterLab을 실행하는 방법을 알아보십시오.
sidebar_label: Docker를 사용하여 로컬로 실행
sidebar_position: 3
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Docker를 사용하여 JupyterLab을 로컬로 실행

[Docker Compose](https://docs.docker.com/compose/)를 사용하면 AI Unlimited Jupyter Kernel을 사용하여 로컬 컨테이너에서 JupyterLab을 실행할 수 있습니다.

:::tip
설치 지원을 받으려면 <a href="mailto:aiunlimited.support@Teradata.com">지원 팀</a>에 이메일을 보내거나 [커뮤니티](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa)에 문의하십시오.
:::


## JupyterLab 구성 파일의 위치 설정

선택적으로 `JUPYTER_HOME` 환경 변수를 JupyterLab 구성 파일을 저장할 디렉토리로 설정합니다. 기본 위치는 `~/.jupyter`입니다.

:::tip
[AWS](https://docs.aws.amazon.com/sdkref/latest/guide/environment-variables.html) 또는 [Azure](https://github.com/paulbouwer/terraform-azure-quickstarts-samples/blob/master/README.md#azure-authentication) 환경 변수에 대해 알아보십시오.
:::


## 저장소 복제

Teradata에서 제공하는 [AI Unlimited GitHub 저장소](https://github.com/Teradata/ai-unlimited) 내의 `deployments/docker` 폴더에 [jupyter.yaml](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/docker/jupyter.yaml) 파일이 포함되어 있으며, JupyterLab을 실행해야 합니다. 

저장소를 복제합니다.

    ``` bash
    git clone https://github.com/Teradata/ai-unlimited
	```


## JupyterLab 시작

1. `jupyter.yaml`이 있는 디렉토리로 이동하여 JupyterLab을 시작합니다.

    :::note
	명령의 `-d` 플래그는 선택 사항입니다.
	:::

  	```bash title="Run the Docker Compose file in the background "
	docker compose -f jupyter.yaml -d up 
	```
	이 명령은 JupyterLab 컨테이너를 다운로드하고 시작합니다.

2. Jupyter 토큰을 검색하려면 현재 실행 중인 컨테이너를 나열합니다.

	```bash
	docker ps 
	```

	그리고 JupyterLab 컨테이너의 이름을 식별합니다.

	그런 다음 컨테이너 로그에서 '토큰' 문자열이 나오는 부분을 검색합니다.

	```bash
	docker logs <container_name> | grep 'Token'
	```


## JupyterLab에 대한 액세스 확인

JupyterLab이 준비되면 `http://localhost:8888`에서 액세스하여 토큰을 입력할 수 있습니다. 




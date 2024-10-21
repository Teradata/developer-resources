---
id: get-started
title: 시작하기
description: 셀프 서비스, 주문형 AI/ML 엔진을 시작하는 방법을 알아보십시오.
sidebar_label: 시작하기
sidebar_position: 1
pagination_prev: null
pagination_next: null
---

# 시작하기

클라우드에서 [AI Unlimited](https://www.teradata.com/platform/ai-unlimited) AI/ML 엔진을 설치하고 사용하는 방법을 알아보십시오.

AI Unlimited를 사용하면 데이터 과학자와 데이터 엔지니어가 셀프 서비스, 주문형 방식으로 [ClearScape Analytics™](https://docs.teradata.com/access/sources/dita/topic?dita:mapPath=phg1621910019905.ditamap&dita:ditavalPath=pny1626732985837.ditaval&dita:topicPath=gma1702668333653.dita) 함수를 사용하여 [Jupyter](https://jupyter.org/) 노트북에서 대용량 데이터 세트를 탐색하고 분석할 수 있습니다.


## 작동 원리

[AWS](https://aws.amazon.com/) 또는 [Azure](https://azure.microsoft.com/en-us)에서 노트북을 AI/ML 엔진에 연결하고 엔진을 [Amazon S3](https://aws.amazon.com/pm/serv-s3/?gclid=Cj0KCQjwlZixBhCoARIsAIC745AmyEzPaBnrARQxyUW_un0BjgTxlHygMScf4ZbX-7dTeznc-psOFlwaAkjmEALw_wcB&trk=fecf68c9-3874-4ae2-a7ed-72b6d19c8034&sc_channel=ps&ef_id=Cj0KCQjwlZixBhCoARIsAIC745AmyEzPaBnrARQxyUW_un0BjgTxlHygMScf4ZbX-7dTeznc-psOFlwaAkjmEALw_wcB:G:s&s_kwcid=AL!4422!3!536452728638!e!!g!!amazon%20s3!11204620052!112938567994) 또는 [ADLS Gen2](https://learn.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction) 데이터 레이크에 연결합니다. 언제든지 분석 프로젝트를 일시 중단하고 복원할 수 있으며 사용한 시간에 대해서만 비용을 지불합니다.

:::note
조직의 누군가가 이미 AI Unlimited를 설치하고 설정한 경우 바로 [데이터 탐색 및 분석](../explore-and-analyze-data)으로 이동하여 시작할 수 있습니다.
:::


## AI Unlimited에 포함됨

- AWS 또는 Azure에 배포하는 AI/ML 엔진
- 엔진 배포를 조정하고 설정을 위한 웹 기반 사용자 인터페이스를 포함하는 AI Unlimited 관리자
- 노트북에서 프로젝트를 관리하기 위한 [AI Unlimited Jupyter Kernel](https://downloads.teradata.com/download/tools/teradata-ai-unlimited-jupyter-kernel) 


## 필수 조건

- 계산 리소스를 프로비저닝할 종량제 AWS 또는 Azure 계정입니다. [AWS](../resources/aws-requirements.md) 또는 [Azure](../resources/azure-requirements.md) 계정의 요구 사항을 참조하십시오.
- 각 프로젝트 저장소를 호스팅하여 사용자를 인증하고 프로젝트 정보를 저장하는 [GitHub](https://github.com) 또는 [GitLab](https://gitlab.com) 계정입니다.
- Amazon 또는 ADLS Gen2 데이터 레이크가 있는 개체 스토리지입니다.
- JupyterLab. [설치 옵션](../resources/jupyterlab)을 참조하십시오.

:::tip
[관리자](../glossary.md#ai-unlimited-manager)를 설치하면 클라우드 배포에 필요한 세부 정보를 제공해야 합니다. 미리 클라우드 관리자와 협력하여 세부 정보를 얻고 싶은 경우 [AWS 세부 정보](../install-ai-unlimited/prod-aws-console-deploy-ai-unlimited.md) 또는 [Azure 세부 정보](../install-ai-unlimited/prod-azure-portal-deploy-manager.md)를 참조하십시오.
:::

:::note
AI Unlimited를 사용하면 다른 사용자와 함께 프로젝트에 협업할 수 있습니다. 

더 간단한 단일 사용자 접근 방식을 선호하는 경우 컴퓨터의 Docker 컨테이너에서 관리자와 JupyterLab을 실행하는 [QuickStart](../resources/quickstart)를 시도해 보십시오.
:::


## 구독

[AWS Marketplace](http://aws.amazon.com/marketplace/pp/prodview-2srvuo3mwqlig) 또는 [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/teradata.ai-unlimited?tab=Overview)에서 AI Unlimited를 구독합니다.

**Azure에만 해당**: **지금 구매**를 선택하기 전에 다음 단계를 완료합니다.
1. [라이센스 계약](https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RW1lQlq)을 읽습니다.
2. Open a terminal window and run this command.
    ``` bash
    az vm image terms accept --publisher teradata --offer ai-unlimited-vm --plan ai-unlimited-image
	```

AWS 또는 Azure의 경우 구독 후 이 설명서 사이트로 돌아와 **다음 항목**을 계속 진행하십시오.


## 다음 항목

이제 [AWS](deploy-manager-aws-console) 또는 [Azure](deploy-manager-azure-portal)에 AI Unlimited를 설치할 준비가 되었습니다.









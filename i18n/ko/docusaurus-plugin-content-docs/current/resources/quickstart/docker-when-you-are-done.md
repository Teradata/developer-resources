---
id: docker-when-you're-done
title: QuickStart | 완료되면
description: QuickStart를 사용한 후 무엇을 해야 하는지 알아보십시오.
sidebar_label: 완료되면
sidebar_position: 7
pagination_prev: null
pagination_next: null
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 완료되면

불필요한 엔진 리소스에 대한 요금이 부과되는 것을 피하려면 작업하지 않는 [프로젝트를 일시 중단](../../manage-ai-unlimited/suspend-and-restore-project.md)합니다. 언제든지 복원할 수 있습니다.

QuickStart를 완료했고 컴퓨터의 리소스를 확보하려면 이 명령을 실행하여 생성된 모든 컨테이너와 네트워크를 중지하고 제거합니다.

<Tabs>
<TabItem value="aws" label="AWS">
  ```bash 
docker-compose -f ai-unlimited.yaml -f aws-credentials-env-vars.yaml -f jupyter.yaml down
  ```
</TabItem>

<TabItem value="azure" label="Azure">
 ```bash
docker-compose -f ai-unlimited.yaml -f azure-credentials-env-vars.yaml -f jupyter.yaml down
  ```
</TabItem>
</Tabs> 

Docker 컨테이너에 마운트한 엔진 데이터가 포함된 로컬 디렉토리나 파일을 제거할 수도 있습니다. 


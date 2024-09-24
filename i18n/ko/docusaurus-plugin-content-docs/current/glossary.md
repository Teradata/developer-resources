---
id: glossary
title: 용어집
description: AI Unlimited의 설치 및 사용에 대한 용어입니다.
sidebar_label: 용어집
sidebar_position: 7
pagination_prev: null
pagination_next: null
---

# 용어집


## A

### AI Unlimited manager

관리자는 [클라우드 서비스 공급자](#cloud-service-provider)에서 AI/ML [엔진](#engine)의 배포를 조율하는 AI Unlimited 구성 요소입니다. 또한 AI Unlimited 관리자가 설치 후 AI Unlimited를 설정하고 나중에 필요에 따라 설정을 변경하는 웹 기반 사용자 인터페이스를 제공합니다. 관리자로부터 모든 사용자는 API 키를 받습니다.

### API key

귀하의 API(Application Programming Interface) 키를 사용하면 Jupyter Notebook을 관리자에 연결할 수 있습니다. 이는 프로젝트를 만들거나 액세스하기 전에 새 Jupyter Notebook에서 수행하는 첫 번째 작업입니다.

### application load balancer

로드 밸런서는 들어오는 트래픽을 여러 서버에 분산합니다. Application Load Balancer는 HTTP 헤더 및 경로와 같은 들어오는 트래픽 콘텐츠를 검사하여 라우팅 결정을 내립니다. Application Load Balancer를 사용하여 AI Unlimited 관리자와 엔진을 공용 IP 네트워크에 노출할 수 있습니다.


## C

### Classless Inter-domain Routing

CIDR(Classless Inter-domain Routing)은 인터넷에서 데이터 라우팅 효율성을 위한 IP 주소 할당 방법입니다. 인터넷에 연결된 모든 컴퓨터에는 IP 주소라는 고유한 번호가 있습니다. IP 주소를 통해 컴퓨터는 서로를 찾고 통신할 수 있습니다. CIDR 블록은 IP 주소 범위입니다.

### cloud service provider

CSP(클라우드 서비스 공급자)는 수요에 따라 인터넷을 통해 계산 리소스를 제공하는 회사입니다. 이러한 리소스에는 IaaS(Infrastructure as a Service), PaaS(Platform as a Service) 또는 SaaS(Software as a Service)가 포함될 수 있습니다. [AI Unlimited 관리자](#ai-unlimited-manager) 및 [엔진](#engine)는 CSP에서 실행됩니다.

### cluster

향상된 처리 능력, 확장성 및 안정성을 위해 단일 시스템으로 함께 작동하는 상호 연결된 컴퓨터 그룹(노드라고도 함). AI Unlimited 엔진은 CSP의 클러스터에 배포됩니다. 각 노드는 [VM(가상 머신)](#virtual-machine)입니다.


## D

### data lake

데이터 분석, 기계 학습 및 데이터 탐색을 위한 중앙 데이터 저장소. 데이터 레이크는 일반적으로 [개체 저장소](#object-storage)에 구축되며 향후 데이터 분석을 위한 데이터 접근성을 위해 설계되었습니다.  


## E

### engine

클라우드 컴퓨팅에서 계산 엔진은 IaaS(Infrastructure as a Service)의 한 예입니다. 이를 통해 클라우드 서비스 공급자의 인프라에서 [VM(가상 머신)](#virtual-machine)을 생성하고 실행할 수 있습니다. Jupyter Notebook에서 AI Unlimited AI/ML 계산 엔진을 배포하면 [AI Unlimited 관리자](#ai-unlimited-manager)가 VM을 프로비저닝합니다.


## I

### IAM role

[IAM(Identity and Access Management) 역할](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html)은 귀하 또는 귀하 조직의 클라우드 관리자가 귀하 조직의 AWS 계정에서 만들 수 있는 역할입니다. 여기에는 해당 역할이 있는 엔티티가 AWS에서 무엇을 할 수 있고 무엇을 할 수 없는지 결정하는 하나 이상의 연결된 권한 정책이 있습니다.


## K

### kernel

Jupyter Kernel은 Jupyter Notebook에 작성한 코드를 처리하고 그 결과를 사용자가 볼 수 있도록 노트북으로 다시 전송하는 언어별 프로그램입니다. 


## L

### load balancer 

로드 밸런서는 들어오는 트래픽을 서버 전체에 고르게 분산하여 성능, 안정성 및 확장성을 개선합니다. 조직에서 리소스가 공용 IP 주소를 사용하도록 허용하지 않는 경우 로드 밸런서를 사용하여 AI Unlimited 관리자와 엔진을 공용 IP 네트워크에 노출할 수 있습니다. 


## M

### mounting volumes 

Docker와 같은 컨테이너화된 플랫폼의 개념입니다. 컨테이너를 실행하는 머신(호스트)의 디렉토리를 컨테이너의 디렉토리에 매핑하여 호스트와 컨테이너 간에 데이터와 파일을 공유할 수 있습니다.


## N

### network load balancer

로드 밸런서는 들어오는 트래픽을 서버 전체에 분산합니다. Network Load Balancer는 트래픽 콘텐츠를 검사하지 않습니다. 포트 및 IP 주소와 같은 요소에 따라 라우팅 결정을 내립니다. Network Load Balancer를 사용하여 AI Unlimited와 엔진을 공용 IP 네트워크에 노출할 수 있습니다.


## O

### OAuth app

OAuth 앱을 사용하면 사용자는 비밀번호를 공유하지 않고도 한 웹 사이트나 서비스의 계정에 대한 액세스 권한을 다른 웹 사이트나 서비스에 부여할 수 있습니다. 

귀하 또는 귀하 조직의 누군가가 만든 OAuth 앱을 사용하면 AI Unlimited가 GitHub 또는 GitLab 인증을 사용하여 각 [프로젝트 저장소](#project-repository)를 관리하고 엔진이 배포될 때마다 저장소에 추가된 공동 작업자로부터 엔진 사용자를 파생할 수 있습니다.

### object storage
클라우드에서 대량의 구조화, 반구조화 또는 비구조화 데이터를 저장하는 확장 가능하고 매우 효과적인 방법입니다. Amazon S3는 AWS의 개체 스토리지입니다. Azure Blob Storage는 Azure의 개체 스토리지입니다. 개체 스토리지는 [data lake](#data-lake)의 기반입니다.


## P

### project

프로젝트는 Jupyter Notebook의 데이터를 탐색하고 분석하는 수단입니다. 각 프로젝트에는 GitHub 또는 GitLab 계정에 저장소가 있습니다.

### project repository

프로젝트 소유자(프로젝트를 만든 사용자)는 Git 저장소에 프로젝트 공동 작업자를 추가합니다. 거기에서 엔진이 배포될 때마다 AI Unlimited는 엔진에 연결하고 사용할 권한이 있는 사용자를 파생시킵니다. 

하지만 엔진이 이미 배포된 경우 프로젝트 소유자는 엔진을 업데이트하여 해당 사용자를 추가해야 배포 중에 엔진에 연결하고 사용할 수 있습니다.

:::note
엔진이 배포될 때마다 각 프로젝트 사용자에 대해 새 비밀번호가 생성됩니다.
:::

당신이나 다른 사용자가 프로젝트를 일시 중단할 때마다 해당 스키마가 저장소에 백업됩니다. AI Unlimited는 저장된 스키마를 사용하여 프로젝트가 복원될 때 다시 가져옵니다.


## S

### systemd

시스템 및 서비스 관리를 위한 Linux 기반 소프트웨어. AI Unlimited 관리자는 systemd가 제어하는 컨테이너의 서버 인스턴스에서 실행됩니다.


## T

### Transport Layer Security

TLS(전송 계층 보안)는 인터넷을 통해 통신하는 두 당사자 간에 보안 연결을 만드는 프로토콜입니다. TLS는 전송 중에 데이터를 암호화하여 가로채는 사람이 읽을 수 없게 만들고 두 당사자의 신원을 확인합니다. 


## V

### virtual machine
VM(가상 머신)은 물리적 컴퓨터의 소프트웨어 에뮬레이션입니다. 각 VM은 [클라우드 서비스 공급자](#cloud-service-provider) 인프라 내에서 자체 컴퓨터로 작동합니다. VM은 확장성, 유연성, 더 쉬운 관리 및 종량제 모델을 가능하게 합니다.
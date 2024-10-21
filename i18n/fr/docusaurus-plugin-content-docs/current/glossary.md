---
id: glossary
title: Glossaire
description: Terminologie pour l'installation et l'utilisation d'AI Unlimited.
sidebar_label: Glossaire
sidebar_position: 7
pagination_prev: null
pagination_next: null
---

# Glossaire


## A

### AI Unlimited manager

Le gestionnaire est le composant AI Unlimited qui orchestre le déploiement du [moteur](#engine) d'AI/ML sur votre [fournisseur de services cloud](#cloud-service-provider). Il fournit également une interface utilisateur Web à partir de laquelle l'administrateur AI Unlimited configure AI Unlimited après l'avoir installé et modifie les paramètres ultérieurement si nécessaire. À partir du gestionnaire, tous les utilisateurs obtiennent leur clé API.

### API key

Votre clé d'interface de programmation d'application (API) vous permet de connecter votre bloc-notes Jupyter au gestionnaire. C'est la première chose que vous faites dans un nouveau bloc-notes Jupyter avant de créer un projet ou d'y accéder.

### application load balancer

Les équilibreurs de charge répartissent le trafic entrant sur les serveurs. Un application load balancer inspecte le contenu du trafic entrant, comme les en-têtes et les chemins HTTP, pour prendre des décisions de routage. Vous pouvez utiliser un application load balancer comme moyen d'exposer le gestionnaire AI Unlimited et le moteur au réseau d'adresses IP publiques.


## C

### Classless Inter-domain Routing

Classless Inter-Domain Routing (CIDR) est une méthode d'allocation d'adresses IP pour l'efficacité du routage des données sur Internet. Chaque ordinateur qui se connecte à Internet possède un numéro unique appelé adresse IP. Les adresses IP permettent aux ordinateurs de se trouver et de communiquer. Un bloc CIDR est une plage d'adresses IP.

### cloud service provider

Un fournisseur de services cloud (CSP) est une entreprise qui fournit des ressources informatiques sur Internet, à la demande. Ces ressources peuvent inclure une infrastructure en tant que service (IaaS), une plateforme en tant que service (PaaS) ou un logiciel en tant que service (SaaS). Le [gestionnaire AI Unlimited](#ai-unlimited-manager) et le [moteur](#engine) s'exécutent sur votre CSP.

### cluster

Un groupe d'ordinateurs interconnectés (également appelés nœuds) qui fonctionnent ensemble comme un système unique pour une puissance de traitement, une évolutivité et une fiabilité améliorées. Le moteur AI Unlimited est déployé sur un cluster sur votre CSP. Chaque nœud est un [machine virtuelle (VM)](#virtual-machine).


## D

### data lake

Un référentiel central de données pour les analyses de données, l'apprentissage automatique et l'exploration des données. Un data lake est généralement construit sur le [stockage d'objets](#object-storage) et est conçu pour l'accessibilité des données en vue d'une analyse future des données.  


## E

### engine

Dans le cloud computing, un moteur de calcul est un exemple d'infrastructure en tant que service (IaaS). Il vous permet de créer et d'exécuter des [machines virtuelles (VM)](#virtual-machine) sur l'infrastructure de votre fournisseur de services cloud. Lorsque vous déployez le moteur de calcul AI/ML d'AI Unlimited à partir d'un bloc-notes Jupyter, le [gestionnaire AI Unlimited](#ai-unlimited-manager) provisionne les VM.


## I

### IAM role

Un [rôle IAM (Identity and Access Management)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html) est un rôle que vous ou un administrateur cloud de votre organisation pouvez créer dans le compte AWS de votre organisation. Il est associé à une ou plusieurs stratégies d'autorisation qui déterminent ce qu'une entité dotée de ce rôle peut et ne peut pas faire dans AWS.


## K

### kernel

Un noyau Jupyter est un programme spécifique au langage qui traite le code que vous écrivez dans un bloc-notes Jupyter et communique les résultats à votre bloc-notes pour que vous puissiez les voir. 


## L

### load balancer 

Un équilibreur de charge répartit le trafic entrant de manière uniforme sur les serveurs, ce qui améliore les performances, la fiabilité et l'évolutivité. Si votre organisation n'autorise pas ses ressources à utiliser des adresses IP publiques, vous pouvez utiliser un équilibreur de charge pour exposer le gestionnaire et le moteur AI Unlimited au réseau d'adresses IP publiques. 


## M

### mounting volumes 

Concept utilisé dans les plateformes conteneurisées telles que Docker. Vous pouvez mapper un répertoire sur la machine exécutant les conteneurs (l'hôte) à un répertoire dans un conteneur pour partager des données et des fichiers entre l'hôte et le conteneur.


## N

### network load balancer

Les équilibreurs de charge répartissent le trafic entrant sur les serveurs. Un network load balancer n'inspecte pas le contenu du trafic. Il base ses décisions de routage sur des facteurs tels que les ports et les adresses IP. Vous pouvez utiliser un network load balancer pour exposer AI Unlimited et son moteur au réseau d'adresses IP publiques.


## O

### OAuth app

Une application OAuth permet à un utilisateur d'accorder l'accès à son compte sur un site Web ou un service à un autre, sans partager son mot de passe. 

Une application OAuth, que vous ou quelqu'un de votre organisation créez, permet à AI Unlimited d'utiliser l'authentification GitHub ou GitLab pour gérer chaque [référentiel de projets](#project-repository) et, chaque fois que le moteur est déployé, déterminer les utilisateurs du moteur des collaborateurs qui ont été ajoutés au référentiel.

### object storage
Un moyen évolutif et très efficace de stocker de grandes quantités de données structurées, semi-structurées ou non structurées dans le cloud. Amazon S3 est un stockage d'objets sur AWS. Azure Blob Storage est un stockage d'objets sur Azure. Le stockage d'objets est la base d'un [data lake](#data-lake).


## P

### project

Un projet est un moyen d'explorer et d'analyser les données à partir d'un bloc-notes Jupyter. Chaque projet dispose d'un référentiel dans votre compte GitHub ou GitLab.

### project repository

Le propriétaire du projet (l'utilisateur qui a créé le projet) ajoute des collaborateurs au projet dans le référentiel Git. À partir de là, chaque fois que le moteur est déployé, AI Unlimited détermine les utilisateurs autorisés à se connecter au moteur et à l'utiliser. 

Mais, si le moteur est déjà déployé, le propriétaire du projet doit mettre à jour le moteur pour ajouter ces utilisateurs afin qu'ils puissent se connecter et utiliser le moteur pendant ce déploiement.

:::note
Chaque fois que le moteur est déployé, un nouveau mot de passe est généré pour chaque utilisateur du projet.
:::

Chaque fois que vous, ou un autre utilisateur, suspendez un projet, son schéma est sauvegardé dans le référentiel. AI Unlimited utilise le schéma stocké pour réactiver le projet lorsqu'il est restauré.


## S

### systemd

Logiciel de base Linux pour la gestion des systèmes et des services. Le gestionnaire AI Unlimited s'exécute sur une instance de serveur dans un conteneur contrôlé par systemd.


## T

### Transport Layer Security

Le protocole TLS (Transport Layer Security) permet de créer une connexion sécurisée entre deux parties communiquant par Internet. Le protocole TLS chiffre les données pendant la transmission, les rendant illisibles pour quiconque les intercepte, et vérifie l'identité des deux parties. 


## V

### virtual machine
Une machine virtuelle (VM) est une émulation logicielle d'un ordinateur physique. Chaque VM fonctionne comme son propre ordinateur au sein d'une infrastructure [du fournisseur de services cloud](#cloud-service-provider). Les VM offrent évolutivité, flexibilité, gestion simplifiée et un modèle de paiement à l'utilisation.
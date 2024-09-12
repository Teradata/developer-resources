---
id: deploy-manager-azure-portal
title: Installer sur Azure
description: Découvrez comment déployer le gestionnaire à l'aide d'un modèle Azure Resource Manager (ARM).
sidebar_label: Installer sur Azure
sidebar_position: 2
pagination_prev: null
pagination_next: null
---

# Installer le gestionnaire sur Azure

Avant de commencer, assurez-vous que vous disposez des [prérequis](./index.md#prerequisites) et que votre compte Azure répond aux [exigences](../resources/azure-requirements.md).

Le gestionnaire AI Unlimited orchestre le déploiement du moteur et inclut une interface utilisateur Web pour la configuration.

Vous utiliserez un modèle Azure Resource Manager (ARM) fourni par Teradata pour installer le gestionnaire à partir d'Azure Portal. Vous déploierez une instance de serveur sur laquelle le gestionnaire s'exécute dans un conteneur contrôlé par [systemd](../glossary.md#systemd).

:::tip
Pour obtenir de l'aide sur l'installation, envoyez un e-mail à l'<a href="mailto:aiunlimited.support@Teradata.com">équipe d'assistance</a> ou demandez à la [communauté](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa).
:::


## Cloner le référentiel

import MyPartial from '../_partials/_clone-repo.mdx';

<MyPartial />


## Localiser le modèle du gestionnaire

Les modèles ARM pour le gestionnaire sont ici dans le référentiel GitHub d'AI Unlimited :

`deployments/azure/templates/arm/ai-unlimited`

Choisissez un modèle en fonction de votre intention d'utiliser un [équilibreur de charge](../glossary.md#load-balancer) et de son type.
:::note
Vous pouvez demander conseil à un administrateur cloud de votre organisation.
:::
    \- `ai-unlimited-with-alb.json`&nbsp;: héberge le gestionnaire derrière un [application load balancer](../glossary.md#application-load-balancer)
    \- `ai-unlimited-with-nlb.json`&nbsp;: héberge le gestionnaire derrière un [network load balancer](../glossary.md#network-load-balancer)
    \- `ai-unlimited-without-lb.json`&nbsp;: pas d'équilibreur de charge. Si vous n'êtes pas sûr du modèle à utiliser, nous vous recommandons celui-ci.


## Charger le modèle

1. Connectez-vous à [Azure Portal](https://portal.azure.com). 
   :::note
   Les références à Azure Portal sont à jour au 29 mai 2024.
   ::: 
2. Recherchez **déploiement personnalisé**, puis sélectionnez **Déployer un modèle personnalisé**.
3. Sélectionnez **Créez votre propre modèle dans l'éditeur**, puis **Charger le fichier**.
4. Sélectionnez le fichier modèle que vous avez choisi d'utiliser, puis sélectionnez **Enregistrer**.

<a id="azure-parms"></a>


## Spécifier les détails de l'instance

Examinez les paramètres. Fournissez des valeurs pour les paramètres obligatoires. Votre organisation peut en exiger d'autres.

<details>
<summary>Paramètres d'Azure et d'AI Unlimited</summary>

| Paramètre | Description | Notes |
|---------|-------------|-----------|
| Abonnement | L'abonnement Azure que vous souhaitez utiliser pour déployer AI Unlimited.| Obligatoire<br/>Par défaut&nbsp;: NA <br/>Il doit s'agir d'un compte de paiement à l'utilisation.  |
| Région | La région dans laquelle vous souhaitez déployer AI Unlimited.| Obligatoire<br/>Par défaut&nbsp;: NA<br/>Sélectionnez la région Azure la plus proche de votre lieu de travail et les ressources de données à utiliser avec AI Unlimited. |
| Nom du groupe de ressources | Le nom du conteneur qui regroupe les ressources AI Unlimited associées.| Obligatoire<br/>Par défaut&nbsp;: ai-unlimited-workspace |
| Nom d'AI Unlimited| Nom unique donné à AI Unlimited.| Obligatoire<br/>Par défaut&nbsp;: NA | 
| Clé publique | La clé SSH publique que vous pouvez utiliser pour vous connecter à une VM via SSH.| Obligatoire<br/>Par défaut : NA<br/>Cette valeur doit commencer par `ssh-rsa`. |
| Version du système d'exploitation  | Les versions des systèmes d'exploitation disponibles dans l'abonnement actuel. | Facultatif avec la valeur par défaut<br/>Par défaut&nbsp;: Ubuntu-2004 |
| Type d'instance | Le type d'instance que vous souhaitez utiliser pour AI Unlimited. | Facultatif<br/>Par défaut&nbsp;: STANDARD_D2_V3<br/>Nous vous recommandons d'utiliser le type d'instance par défaut pour réduire les coûts. Le type d'instance par défaut est la série Dv3 standard avec 2&nbsp;vCPU et 8,0&nbsp;Gio de mémoire.|
| Réseau | Le nom du réseau sur lequel vous souhaitez déployer l'instance AI Unlimited.| <br/>Facultatif<br/>Par défaut&nbsp;: NA | 
| Sous-réseau | Le sous-réseau sur lequel vous souhaitez déployer l'instance AI Unlimited. | Obligatoire<br/>Par défaut&nbsp;: NA<br/>Le sous-réseau doit résider dans la zone de disponibilité sélectionnée. |
| Groupe de sécurité | Le pare-feu virtuel qui contrôle le trafic entrant et sortant vers l'instance. | Facultatif<br/>Par défaut&nbsp;: AiUnlimitedSecurityGroup<br/>Le groupe de sécurité est implémenté sous la forme d'un ensemble de règles qui spécifient les protocoles, les ports et les adresses IP ou les blocs CIDR autorisés à accéder à l'instance. Définissez au moins un accès CIDR ou un groupe de sécurité pour autoriser le trafic entrant, sauf si vous créez des règles d'entrée de groupe de sécurité personnalisées. |
| Accéder à CIDR | La plage d'adresses IP CIDR autorisée à accéder à l'instance. | Facultatif<br/>Par défaut&nbsp;: 0.0.0.0/0<br/>Nous vous recommandons de définir cette valeur sur une plage d'adresses IP approuvées. Définissez au moins un CIDR d'accès ou un groupe de sécurité pour autoriser le trafic entrant, sauf si vous créez des règles d'entrée de groupe de sécurité personnalisées. |
| Port HTTP d'AI Unlimited | Le port pour accéder à l'interface utilisateur AI Unlimited.| Obligatoire avec la valeur par défaut<br/>Par défaut&nbsp;: 3&nbsp;000 |
| Port GRPC d'AI Unlimited | Le port pour accéder à l'API AI Unlimited. | Obligatoire avec la valeur par défaut<br/>Par défaut&nbsp;: 3&nbsp;282 | 
| Groupes de sécurité des applications sources | Les groupes de sécurité des applications sources (ASG) qui ont l'autorisation de se connecter à l'instance AI Unlimited. Les ASG vous permettent d'organiser vos machines virtuelles (VM) en fonction de leurs stratégies de sécurité réseau spécifiques. Ces stratégies de sécurité déterminent le trafic autorisé ou non sur votre machine virtuelle. |Facultatif<br/>Par défaut&nbsp;: NA<br/> Sélectionnez un groupe de sécurité des applications dans la même région que l'interface réseau. |
| Groupes de sécurité des applications de destination | Les groupes de sécurité des applications de destination qui ont l'autorisation de se connecter à l'instance AI Unlimited. | Facultatif<br/>Par défaut&nbsp;: NA<br/>Sélectionnez un groupe de sécurité des applications dans la même région que l'interface réseau. |
| ID de définition de rôle | L'ID du rôle à utiliser avec AI Unlimited.| Obligatoire<br/>Par défaut&nbsp;: NA<br/>Utilisez la commande Azure CLI&nbsp;- Get-AzRoleDefinition pour obtenir votre ID de définition de rôle. |
| Autoriser le SSH public | Spécifie si vous pouvez utiliser des clés Secure Shell (SSH) pour vous connecter aux VM dans Azure.|  Facultatif<br/>Par défaut&nbsp;: vrai |
| Utiliser le coffre de clés | Spécifie s'il faut utiliser le coffre de clés pour récupérer le mot de passe sécurisé lors d'un déploiement. | Facultatif<br/>Par défaut&nbsp;: Nouveau |
| Utiliser le volume persistant | Indique si vous souhaitez utiliser un volume persistant nouveau ou existant pour stocker des données. Consultez *En savoir plus&nbsp;: Utilisation d'un volume persistant* sous la section Paramètres. | Facultatif avec valeur par défaut<br/>Par défaut&nbsp;: Nouveau <br/>Options prises en charge&nbsp;: Nouveau ou Existant, selon votre cas d'utilisation. |
| Taille du volume persistant | La taille du volume persistant que vous pouvez associer à l'instance, en Go. | Facultatif<br/>Par défaut&nbsp;: 100 |
| Volume persistant existant | <br/>L'ID du volume persistant existant que vous pouvez associer à l'instance.| Obligatoire si UsePersistentVolume est défini sur Existant.<br/>Par défaut&nbsp;: Aucun<br/>Le volume persistant doit se trouver dans la même zone de disponibilité que l'instance AI Unlimited. |
| Version d'AI Unlimited | La version d'AI Unlimited que vous souhaitez déployer. | Obligatoire avec la valeur par défaut<br/>Par défaut&nbsp;: dernière<br/>La valeur est une balise de version de conteneur. |
|Utiliser NLB| Spécifie si l'instance est accessible à l'aide d'un Network Load Balancer.|Obligatoire avec la valeur par défaut<br/>Par défaut&nbsp;: faux|
| Balises | Les paires clé-valeur attribuées aux ressources pour une identification rapide.| Facultatif<br/>Par défaut&nbsp;:&nbsp;NA |   

</details>

<details>

<summary>En savoir plus&nbsp;: utilisation d'un volume persistant</summary>

L'instance du gestionnaire s'exécute dans un conteneur et enregistre ses données de configuration dans une base de données dans le volume racine de l'instance. Ces données sont conservées si vous arrêtez, redémarrez ou effectuez un instantané et relancez l'instance. 

Un volume persistant stocke les données d'une application conteneurisée au-delà de la durée de vie du conteneur, du pod ou du nœud dans lequel il s'exécute. 

**Sans volume persistant**

Si le conteneur, le pod ou le nœud tombe en panne ou s'arrête, vous perdez les données de configuration du gestionnaire. Vous pouvez déployer une nouvelle instance du gestionnaire, mais pas dans le même état que celle qui a été perdue.

**Avec un volume persistant**

Si le conteneur, le pod ou le nœud tombe en panne ou s'arrête et que les données de configuration du gestionnaire sont stockées dans un volume persistant, vous pouvez déployer une nouvelle instance de gestionnaire ayant la même configuration que celle qui a été perdue.

**Exemple**

1. Déployez le gestionnaire et définissez le paramètre `Utiliser le volume persistant` sur **Nouveau**.
2. Après avoir créé la pile, sur la page **Sorties**, notez le `volume-id`.
3. Utilisez AI Unlimited.
4. Si l'instance du gestionnaire est perdue, déployez à nouveau le gestionnaire et incluez ces paramètres:
   - `Utiliser le volume persistant`: **Nouveau**
   - `Volume persistant existant`: la valeur que vous avez notée à l'étape&nbsp;2
   
La nouvelle instance du gestionnaire a la même configuration que celle qui a été perdue.

</details>


## Créer l'instance

1. Sélectionnez **Examiner + créer**.
2. Sélectionnez **Créer**.<br />
Sur la page **Notifications**, vous pouvez suivre la progression.

Une fois le déploiement terminé, la page **Sorties** affiche les valeurs générées pour les ressources créées.

Vous aurez besoin de l'URL pour accéder au gestionnaire et configurer AI Unlimited.


## Étape suivante

[Créer une application OAuth](../resources/create-oauth-app.md) pour permettre l'authentification entre AI Unlimited et votre compte fournisseur Git.

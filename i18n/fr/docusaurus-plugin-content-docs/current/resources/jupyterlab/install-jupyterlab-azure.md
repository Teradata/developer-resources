---
id: deploy-jupyter-azure-portal
title: Installer JupyterLab sur Azure
description: Découvrez comment déployer JupyterLab à l'aide d'un modèle ARM.
sidebar_label: Installer sur Azure
sidebar_position: 2
pagination_prev: null
pagination_next: null
---

# Installer JupyterLab sur Azure

Vous utiliserez un modèle Azure Resource Manager (ARM) fourni par Teradata pour installer JupyterLab et le noyau AI Unlimited à partir d'Azure Portal. 

Cela déploie une instance de serveur, avec JupyterLab exécuté dans un conteneur contrôlé par [systemd](../../glossary.md#systemd).

:::tip
Pour obtenir une assistance pour l'installation, envoyez un e-mail à l'<a href="mailto:aiunlimited.support@Teradata.com">équipe d'assistance</a> ou demandez à la [communauté](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa).
:::


## Préparez votre compte Azure

- Travaillez avec votre administrateur cloud pour vous assurer que votre compte Azure dispose des autorisations nécessaires pour créer les ressources cloud définies dans le [modèle JupyterLab](https://github.com/Teradata/ai-unlimited/tree/develop/deployments/azure/templates/arm/jupyter).

- Exigences relatives à la mise en réseau : votre [groupe de ressources](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal) Azure doit disposer d'un [Azure Virtual Network (VNet)](https://learn.microsoft.com/en-us/azure/virtual-network/quick-create-portal) configuré avec un [sous-réseau](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-subnet?tabs=azure-portal). Utilisez un réseau virtuel ou un sous-réseau existant, ou créez le vôtre, en fonction des autorisations de votre compte. 

- Si vous devez accéder à l'instance JupyterLab pour exécuter des commandes ou déboguer, vous pouvez utiliser une [paire de clés](https://learn.microsoft.com/en-us/azure/virtual-machines/linux/mac-create-ssh-keys) pour vous connecter en toute sécurité à l'aide de Secure Shell (SSH). Vous aurez besoin de la paire de clés lorsque vous [spécifiez les détails de l'instance](#specify-instance-details).


## Cloner le référentiel

import MyPartial from '../../_partials/_clone-repo.mdx';

<MyPartial />


## Localisez le modèle Jupyter

Les modèles ARM pour JupyterLab sont ici dans le référentiel GitHub AI Unlimited :

`deployments/azure/templates/arm/jupyter`

Choisissez un modèle en fonction de votre intention d'utiliser un [équilibreur de charge](../../glossary.md#load-balancer) et de son type.
:::note
Vous pouvez demander conseil à un administrateur cloud de votre organisation.
:::
    \- `jupyter-with-alb.json`&nbsp;: héberge JupyterLab derrière un [application load balancer](../../glossary.md#application-load-balancer)
    \- `jupyter-with-nlb.json`&nbsp;: héberge JupyterLab derrière un [network load balancer](../../glossary.md#network-load-balancer)
    \- `jupyter-without-lb.json`&nbsp;: aucun équilibreur de charge

## Charger le modèle

1. Connectez-vous à [Azure Portal](https://portal.azure.com).
   :::note
   Les références à Azure Portal sont à jour au 29 mai 2024.
   ::: 
2. Recherchez **déploiement personnalisé**, puis sélectionnez **Déployer un modèle personnalisé**.
3. Sélectionnez **Créez votre propre modèle dans l'éditeur**, puis **Charger le fichier**.
4. Sélectionnez le fichier modèle que vous avez choisi d'utiliser et sélectionnez **Enregistrer**.  


## Spécifier les détails de l'instance

Examinez les paramètres. Fournissez des valeurs pour les paramètres obligatoires. Votre organisation peut en exiger d'autres.

<details>

<summary>Paramètres Azure et JupyterLab</summary>

| Paramètre | Description | Notes 
|---------|-------------|-----------|
| Abonnement | L'abonnement Azure que vous souhaitez utiliser pour déployer AI Unlimited. | Obligatoire<br/>Par défaut&nbsp;: NA<br/>Nous vous recommandons d'utiliser un compte qui n'est pas une version d'évaluation gratuite. |
| Région | La région dans laquelle vous souhaitez déployer AI Unlimited. | Obligatoire<br/>Par défaut&nbsp;: NA<br/>Sélectionnez la région Azure la plus proche de votre lieu de travail et les ressources de données à utiliser avec AI Unlimited. |
| Nom du groupe de ressources | Le nom du conteneur qui regroupe les ressources AI Unlimited associées. | Obligatoire<br/>Par défaut&nbsp;: ai-unlimited-jupyter |
| Version du système d'exploitation  | Les versions des systèmes d'exploitation disponibles dans l'abonnement actuel.| Facultatif avec la valeur par défaut<br/>Par défaut&nbsp;: Ubuntu-2004 |
| Type d'instance | Le type d'instance que vous souhaitez utiliser pour AI Unlimited.| Facultatif<br/>Par défaut&nbsp;: STANDARD_D2_V3<br/>Nous vous recommandons d'utiliser le type d'instance par défaut pour réduire les coûts. Le type d'instance par défaut est la série Dv3 standard avec 2&nbsp;vCPU et 8,0&nbsp;Gio de mémoire.|
| Réseau | Le nom du réseau sur lequel vous souhaitez déployer l'instance AI Unlimited.| Facultatif<br/>Par défaut&nbsp;: NA| 
| Sous-réseau | Le sous-réseau sur lequel vous souhaitez déployer l'instance AI Unlimited.| Obligatoire<br/>Par défaut&nbsp;: NA<br/>Le sous-réseau doit résider dans la zone de disponibilité sélectionnée. |
| Groupe de sécurité | Le pare-feu virtuel qui contrôle le trafic entrant et sortant vers l'instance. | Facultatif<br/>Par défaut&nbsp;: JupyterSecurityGroup<br/>Le groupe de sécurité est implémenté sous la forme d'un ensemble de règles qui spécifient les protocoles, les ports et les adresses IP ou les blocs CIDR autorisés à accéder à l'instance. Définissez au moins un accès CIDR ou un groupe de sécurité pour autoriser le trafic entrant, sauf si vous créez des règles d'entrée de groupe de sécurité personnalisées. |
| Accéder à CIDR | La plage d'adresses IP CIDR autorisée à accéder à l'instance. | Facultatif<br/>Par défaut&nbsp;: 0.0.0.0/0<br/>Nous vous recommandons de définir cette valeur sur une plage d'adresses IP approuvées. Définissez au moins un CIDR d'accès ou un groupe de sécurité pour autoriser le trafic entrant, sauf si vous créez des règles d'entrée de groupe de sécurité personnalisées. |
| Groupes de sécurité des applications sources (ASG) | Les groupes de sécurité des applications sources autorisés à se connecter à l'instance AI Unlimited. Les ASG vous permettent d'organiser vos machines virtuelles (VM) en fonction de leurs stratégies de sécurité réseau spécifiques. Ces stratégies de sécurité déterminent le trafic autorisé ou non sur votre machine virtuelle. | Facultatif<br/>Par défaut&nbsp;: NA<br/>Sélectionnez un groupe de sécurité des applications dans la même région que l'interface réseau. |
| Groupes de sécurité des applications de destination | Les groupes de sécurité des applications de destination qui ont l'autorisation de se connecter à l'instance AI Unlimited. | Facultatif<br/>Par défaut&nbsp;: NA<br/>Sélectionnez un groupe de sécurité des applications dans la même région que l'interface réseau. |
| ID de définition de rôle | L'ID du rôle à utiliser avec AI Unlimited. | Obligatoire<br/>Par défaut&nbsp;: NA<br/>Utilisez la commande Azure CLI&nbsp;-&nbsp;`Get-AzRoleDefinition` pour obtenir votre ID de définition de rôle. |
| Autoriser le SSH public | Spécifie si vous pouvez utiliser des clés Secure Shell (SSH) pour vous connecter aux VM dans Azure. |  Facultatif<br/>Par défaut&nbsp;: vrai |
| Clé publique | La clé SSH publique que vous pouvez utiliser pour vous connecter à une VM via SSH. | Facultatif<br/>Par défaut&nbsp;: NA<br/>Cette valeur doit commencer par `ssh-rsa`. |
| Utiliser le volume persistant | Indique si vous souhaitez utiliser un volume persistant nouveau ou existant pour stocker des données. Consultez *En savoir plus&nbsp;: Utilisation d'un volume persistant* sous la section Paramètres. | Facultatif avec valeur par défaut<br/>Par défaut&nbsp;: Nouveau<br/>Les options prises en charge sont un nouveau volume persistant ou un volume existant, selon votre cas d'utilisation. |
| Taille du volume persistant | La taille du volume persistant que vous pouvez associer à l'instance, en Go. | Facultatif<br/>Par défaut&nbsp;: 100<br/>Prend en charge les valeurs comprises entre&nbsp;8 et 1&nbsp;000. |
| Volume persistant existant | L'ID du volume persistant existant que vous pouvez associer à l'instance.| Obligatoire si Utiliser le volume persistant est défini sur Existant<br/>Par défaut&nbsp;: NA<br/>Le volume persistant doit se trouver dans la même zone de disponibilité que l'instance AI Unlimited. |
| JupyterHttpPort | Le port pour accéder à l'interface utilisateur du service JupyterLab. | Obligatoire avec la valeur par défaut<br/>Par défaut&nbsp;: 8&nbsp;888 |
| JupyterVersion | La version de JupyterLab que vous souhaitez déployer. | Obligatoire avec la valeur par défaut<br/>Par défaut&nbsp;: dernière<br/>La valeur est une balise de version de conteneur, par exemple, dernière. |
| JupyterToken | Le jeton ou le mot de passe utilisé pour accéder à JupyterLab depuis l'interface utilisateur.| Obligatoire<br/>Par défaut&nbsp;: NA<br/>Le jeton doit commencer par une lettre et contenir uniquement des caractères alphanumériques. Le modèle autorisé est ^[a-zA-Z][a-zA-Z0-9-]*. |

</details>

<details>

<summary>En savoir plus&nbsp;: utilisation d'un volume persistant</summary>

L'instance JupyterLab s'exécute dans un conteneur et enregistre ses données de configuration dans une base de données dans le volume racine de l'instance. Ces données sont conservées si vous arrêtez, redémarrez ou effectuez un instantané et relancez l'instance. 

Mais un volume persistant stocke les données d'une application conteneurisée au-delà de la durée de vie du conteneur, du pod ou du nœud dans lequel il s'exécute. 

**Sans volume persistant**

Si le conteneur, le pod ou le nœud tombe en panne ou s'arrête, vous perdez les données de configuration de JupyterLab. Vous pouvez déployer une nouvelle instance JupyterLab, mais pas dans le même état que celle qui a été perdue.

**Avec un volume persistant**

Si le conteneur, le pod ou le nœud tombe en panne ou s'arrête et que les données de configuration JupyterLab sont stockées dans un volume persistant, vous pouvez déployer une nouvelle instance JupyterLab qui a la même configuration que celle qui a été perdue.

**Exemple**

1. Déployez JupyterLab et incluez ces paramètres:
   - `UsePersistentVolume`: **Nouveau**
2. Après avoir créé la pile, dans l'onglet **Sorties**, notez le `volume-id`.
3. Utilisez JupyterLab.
4. Si l'instance JupyterLab est perdue, déployez à nouveau JupyterLab et incluez ces paramètres:
   - `UsePersistentVolume`: **Nouveau**
   - `ExistingPersistentVolumeId`: la valeur que vous avez notée à l'étape&nbsp;2
   
La nouvelle instance JupyterLab a la même configuration que celle qui a été perdue.

</details>


## Créer l'instance

1. Sélectionnez **Examiner + créer**.
2. Sélectionnez **Créer**.<br />
Sur la page **Notifications**, vous pouvez suivre la progression.

Une fois le déploiement terminé, la page **Sorties** affiche l'URL permettant d'accéder à JupyterLab.






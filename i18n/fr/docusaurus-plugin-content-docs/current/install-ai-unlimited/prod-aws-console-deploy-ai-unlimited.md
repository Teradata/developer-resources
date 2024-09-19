---
id: deploy-manager-aws-console
title: Installer sur AWS
description: Découvrez comment déployer le gestionnaire à l'aide d'un modèle CloudFormation.
sidebar_label: Installer sur AWS
sidebar_position: 1
pagination_prev: null
pagination_next: null
---

# Installer le gestionnaire sur AWS

Avant de commencer, assurez-vous que vous disposez des [prérequis](./index.md#prerequisites) et que votre compte AWS répond aux [exigences](../resources/aws-requirements.md).

Le gestionnaire AI Unlimited orchestre le déploiement du moteur et inclut une interface utilisateur Web pour la configuration. 

Vous utiliserez un modèle CloudFormation fourni par Teradata pour installer le gestionnaire à partir d'AWS Management Console. Vous déploierez une instance de serveur sur laquelle le gestionnaire s'exécute dans un conteneur contrôlé par [systemd](../glossary.md#systemd).

:::tip
Pour obtenir de l'aide sur l'installation, envoyez un e-mail à l'<a href="mailto:aiunlimited.support@Teradata.com">équipe d'assistance</a> ou demandez à la [communauté](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa).
:::


## Cloner le référentiel

import MyPartial from '../_partials/_clone-repo.mdx';

<MyPartial />


## Localiser le modèle du gestionnaire

Les modèles CloudFormation pour le gestionnaire sont ici dans le référentiel GitHub d'AI Unlimited :

`deployments/aws/templates/ai-unlimited/`

Choisissez un modèle en fonction de votre intention d'utiliser un [équilibreur de charge](../glossary.md#load-balancer) et de son type.
:::note
Vous pouvez demander conseil à un administrateur cloud de votre organisation.
:::
    - `ai-unlimited-with-alb.yaml`: héberge le gestionnaire derrière un [application load balancer](../glossary.md#application-load-balancer)
    - `ai-unlimited-with-nlb.yaml`: héberge le gestionnaire derrière un [network load balancer](../glossary.md#network-load-balancer)
    - `ai-unlimited-without-lb.yaml`: pas d'équilibreur de charge. Si vous n'êtes pas sûr du modèle à utiliser, nous vous recommandons celui-ci.


## Charger le modèle	

1. Connectez-vous à [Console AWS](https://aws.amazon.com).<br />
   :::note
   Les références à AWS Management Console sont à jour au 29 mai 2024.
   ::: 
2. Sélectionnez la région AWS dans laquelle déployer AI Unlimited.<br />
Nous vous recommandons de sélectionner la région la plus proche de votre lieu de travail principal.
3. Recherchez **CloudFormation** et accédez-y.
4. Sélectionnez **Créer une pile**, puis **Avec de nouvelles ressources (standard)**.
5. Sélectionnez **Choisir un modèle existant**, puis **Charger un fichier modèle**.
6. Sélectionnez le fichier modèle que vous avez choisi d'utiliser et cliquez sur **Suivant**.  

<a id="aws-parms"></a>


## Spécifier les détails et les options de la pile

1. Fournissez un nom de pile.
2. Examinez les paramètres. Fournissez des valeurs pour les paramètres obligatoires. Votre organisation peut en exiger d'autres.<br/>

<details>

<summary>Paramètres AWS et gestionnaire</summary>

 Les paramètres de chaque modèle varient. Vous pouvez voir ici certains paramètres que vous ne voyez pas dans la console.
 
| Paramètre | Description | Notes | 
|---------|-------------|-----------|
| Stack name	| L'identifiant qui vous aide à trouver la pile AI Unlimited à partir d'une liste de piles. |Obligatoire<br/>Par défaut&nbsp;: NA<br/> Le nom ne peut contenir que des caractères alphanumériques (sensibles à la casse) et des traits d'union. Il doit commencer par un caractère alphabétique et ne peut pas dépasser 128&nbsp;caractères.| | Le nom ne peut contenir que des caractères alphanumériques (sensibles à la casse) et des traits d'union. Il doit commencer par un caractère alphabétique et ne peut pas dépasser 128&nbsp;caractères.|
|AiUnlimitedName| Le nom de l'instance AI Unlimited. |Obligatoire avec la valeur par défaut<br/>Par défaut&nbsp;: ai-unlimited<br/>Le nom ne peut contenir que des caractères alphanumériques (sensibles à la casse) et des tirets. Il doit commencer par un caractère alphabétique et ne peut pas comporter plus de 20&nbsp;caractères.|
| InstanceType | Le type d'instance EC2 pour le gestionnaire. |Obligatoire avec la valeur par défaut<br/>Par défaut&nbsp;: t3.micro<br/> **IMPORTANT**&nbsp;: si l'instance n'est pas de taille adéquate, des échecs de déploiement et de suspension du moteur peuvent se produire et vous devrez réinstaller le gestionnaire sur une instance plus grande.  Consultez *En savoir plus&nbsp;: recommandations relatives au type d'instance du gestionnaire (taille)* sous la section des paramètres. |
| RootVolumeSize | La taille du disque racine que vous souhaitez associer à l'instance, en Go. | Obligatoire avec la valeur par défaut<br/>Par défaut&nbsp;: 20<br/>Prend en charge les valeurs comprises entre&nbsp;8 et 1&nbsp;000. |
| TerminationProtection | Active la protection contre la terminaison d'instance. |Obligatoire avec la valeur par défaut<br/>Par défaut&nbsp;: faux |
|IamRole | Spécifie si CloudFormation doit créer un rôle IAM ou utiliser un rôle existant. |Obligatoire avec la valeur par défaut<br/>Par défaut&nbsp;: Nouveau<br/>Les options prises en charge sont&nbsp;: Nouveau ou Existant |
|IamRoleName | Le nom du rôle IAM à attribuer à l'instance, soit un rôle IAM existant, soit un rôle récemment créé. |Facultatif avec la valeur par défaut<br/>Valeur par défaut&nbsp;: ai-unlimited-iam-role<br/>Si vous nommez un nouveau rôle IAM, CloudFormation requiert la capacité CAPABILITY_NAMED_IAM. Laissez ce champ vide pour utiliser un nom généré automatiquement. |
|IamPermissionsBoundary	| L'ARN de la limite des autorisations IAM à associer au rôle IAM attribué à l'instance. |Facultatif<br/>Par défaut&nbsp;: NA |
|AvailabilityZone | La zone de disponibilité dans laquelle vous souhaitez déployer l'instance. |Obligatoire<br/>Par défaut&nbsp;: NA<br/>La valeur doit correspondre au sous-réseau, à la zone de tous les volumes préexistants et le type d'instance doit être disponible dans la zone sélectionnée. |
|LoadBalancerScheme	|Si un équilibreur de charge est utilisé, ce champ spécifie si l'instance est accessible depuis Internet ou uniquement depuis le VPC.	|Facultatif avec la valeur par défaut<br/>Par défaut&nbsp;: Internet-facing<br/>Le nom DNS d'un équilibreur de charge Internet peut être résolu publiquement par les adresses IP publiques des nœuds. Par conséquent, les équilibreurs de charge Internet peuvent acheminer les demandes des clients via Internet.<br/>Les nœuds d'un équilibreur de charge interne n'ont que des adresses IP privées. Le nom DNS d'un équilibreur de charge interne peut être résolu publiquement par les adresses IP personnelles des nœuds. Par conséquent, les équilibreurs de charge internes peuvent acheminer les demandes des clients ayant accès au VPC pour l'équilibreur de charge.|
|LoadBalancerSubnetOne | Sous-réseau sur lequel l'équilibreur de charge est hébergé. Le sous-réseau détermine les zones de disponibilité, les adresses IP et les points de terminaison de l'équilibreur de charge. |Facultatif avec valeur par défaut<br/>Valeur par défaut&nbsp;: NA<br/>Vous devez définir au moins un sous-réseau disponible pour créer un Network Load Balancer (NLB) et deux sous-réseaux pour un Application Load Balancer (ALB).|
| LoadBalancerSubnetTwo| Le sous-réseau où l'équilibreur de charge est hébergé. |Facultatif. Cette option n'est disponible que dans le modèle avec ALB.<br/>Par défaut&nbsp;: NA<br/>|Ce sous-réseau doit se trouver dans une zone de disponibilité différente de celle du premier sous-réseau que vous avez choisi.|
|HostedZoneID | L'ID qu'Amazon Route 53 a attribué à la zone hébergée lorsque vous l'avez créée.|Facultatif<br/>Par défaut&nbsp;: NA<br/>Chaque zone hébergée correspond à un nom du domaine ou éventuellement à un sous-domaine. La zone hébergée est le conteneur des enregistrements DNS, où vous configurez la manière dont le monde interagit avec votre domaine, par exemple en le dirigeant vers une adresse IP avec un enregistrement.<br/>Dans la console AWS, accédez à **Route 53** &gt; **Zones hébergées**. Recherchez votre nom du domaine enregistré et l'ID de zone hébergée correspondant.|
|DnsName| Le nom du domaine. Pour les zones hébergées publiques, il s'agit du nom que vous avez enregistré auprès de votre bureau d'enregistrement DNS. |Facultatif<br/>Par défaut&nbsp;: NA<br/>Pour plus d'informations sur la manière de spécifier des caractères autres que az, 0-9 et - (trait d'union) et sur la manière de spécifier des noms de domaine internationalisés, consultez [Créer une zone hébergée](https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHostedZone.html).|
|Private	|Spécifie si le service est déployé dans un réseau privé sans adresses IP publiques.|Obligatoire<br/>Par défaut&nbsp;: faux <br/>Assurez-vous de sélectionner l'option `Activer l'attribution automatique d'adresses IPv4 publiques` dans le sous-réseau où réside le gestionnaire. Si cette option n'est pas sélectionnée, l'installation peut échouer.|
|Session	|Spécifie si vous pouvez utiliser AWS Session Manager pour accéder à l'instance.|Obligatoire<br/>Par défaut&nbsp;: faux |
|Vpc		|Le réseau sur lequel vous souhaitez déployer l'instance.|Obligatoire<br/>Par défaut&nbsp;: NA|
|Subnet	|Le sous-réseau sur lequel vous souhaitez déployer l'instance.|Obligatoire<br/>Par défaut&nbsp;: NA<br/>Le sous-réseau doit résider dans la zone de disponibilité sélectionnée.|
|KeyName		|La paire de clés publique/privée qui vous permet de vous connecter en toute sécurité à votre instance après son lancement. Lorsque vous créez un compte AWS, il s'agit de la paire de clés que vous créez dans votre région préférée.|Facultatif<br/>Par défaut&nbsp;: NA<br/>Laissez ce champ vide si vous ne souhaitez pas inclure les clés SSH.|
|AccessCIDR	|La plage d'adresses IP CIDR autorisée à accéder à l'instance. |Facultatif<br/>Par défaut&nbsp;: NA<br/>Nous vous recommandons de définir cette valeur sur une plage d'adresses IP approuvées. Définissez au moins AccessCIDR, PrefixList ou SecurityGroup pour autoriser le trafic entrant, sauf si vous créez des règles d'entrée de groupe de sécurité personnalisées.|
|PrefixList	|La liste de préfixes que vous pouvez utiliser pour communiquer avec l'instance. Il s'agit d'un ensemble de blocs CIDR qui définissent un ensemble de plages d'adresses IP nécessitant la même application de stratégie.|Facultatif<br/>Par défaut&nbsp;: NA<br/>Définissez au moins l'un des éléments AccessCIDR, PrefixList ou SecurityGroup pour autoriser le trafic entrant, sauf si vous créez des règles d'entrée de groupe de sécurité personnalisées. Assurez-vous de saisir le nom de la liste de préfixes, et non l'ID.|
|SecurityGroup	|Le pare-feu virtuel qui contrôle le trafic entrant et sortant vers l'instance. |Facultatif<br/>Par défaut&nbsp;: NA<br/>Implémenté sous la forme d'un ensemble de règles spécifiant les protocoles, ports et adresses IP ou blocs CIDR autorisés à accéder à l'instance. Définissez au moins l'un des éléments suivants&nbsp;: AccessCIDR, PrefixList ou SecurityGroup pour autoriser le trafic entrant, sauf si vous créez des règles d'entrée de groupe de sécurité personnalisées.|
|AIUnlimitedHttpPort		|Le port pour accéder à l'interface utilisateur AI Unlimited.|Obligatoire avec la valeur par défaut<br/>Par défaut&nbsp;: 3&nbsp;000|
|AIUnlimitedGrpcPort		|Le port pour accéder à l'API AI Unlimited.|Obligatoire avec la valeur par défaut<br/>Par défaut&nbsp;: 3&nbsp;282|
|AIUnlimitedVersion		|La version d'AI Unlimited que vous souhaitez déployer.|Obligatoire avec la valeur par défaut<br/>Par défaut&nbsp;: dernière<br/>La valeur est une balise de version de conteneur.|
|UsePersistentVolume|Indique si vous souhaitez utiliser un volume persistant nouveau ou existant pour stocker des données. Consultez *En savoir plus&nbsp;: Utilisation d'un volume persistant* sous la section Paramètres. |Facultatif avec valeur par défaut<br/>Par défaut&nbsp;: Nouveau<br/>Les options prises en charge sont un nouveau volume persistant ou un volume existant, selon votre cas d'utilisation.|
|PersistentVolumeSize	|La taille du volume persistant que vous associez à l'instance, en Go.|Obligatoire avec la valeur par défaut<br/>Par défaut&nbsp;: 20<br/>Prend en charge les valeurs comprises entre&nbsp;8 et 1&nbsp;000. |
|ExistingPersistentVolumeId		|L'ID du volume persistant existant que vous associez à l'instance. |Obligatoire si UsePersistentVolume est défini sur Existant.<br/>Par défaut&nbsp;: NA<br/>Le volume persistant doit se trouver dans la même zone de disponibilité que l'instance AI Unlimited.|
|PersistentVolume<br/>DeletionPolicy		|Le comportement du volume persistant lorsque vous supprimez le déploiement de CloudFormation.|Obligatoire par défaut|Supprimer <br/>Par défaut&nbsp;: Retain <br/>Les options prises en charge sont&nbsp;: Delete, Retain, RetainExceptOnCreate et Snapshot.|
|LatestAmiId	|L'ID de l'image qui pointe vers la dernière version d'AMI. Cette valeur est utilisée pour la recherche SSM.|Obligatoire avec la valeur par défaut<br/>Par défaut&nbsp;: NA<br/>Ce déploiement utilise la dernière image ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2 disponible.<br/>**IMPORTANT**&nbsp;: la modification de cette valeur peut endommager la pile.

</details>

<details>

<summary>En savoir plus&nbsp;: Recommandations relatives au type d'instance du gestionnaire (taille)</summary>

Pour la préversion publique payante d'AI Unlimited, en fonction du nombre d'opérations de déploiement et de suspension simultanées du moteur, nous recommandons ces types d'instances t3. Les performances des autres types d'instances disponibles peuvent varier.

| Type d'instance | Opérations simultanées |
|---------|-------------|
|t3.micro |1 |
|t3.small |jusqu'à 5 |
|t3.medium |jusqu'à 10 |
|t3.large |jusqu'à 20 |
|t3.xlarge |plus de 21 

La concurrence augmentera lorsque AI Unlimited sera disponible pour le grand public.

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

1. Déployez le gestionnaire et incluez ces paramètres&nbsp;:
   - `UsePersistentVolume`: **Nouveau**
   - `PersistentVolumeDeletionPolicy`: **Conserver**
2. Après avoir créé la pile, dans l'onglet **Sorties**, notez le `volume-id`.
3. Utilisez AI Unlimited.
4. Si l'instance du gestionnaire est perdue, déployez à nouveau le gestionnaire et incluez ces paramètres&nbsp;:
   - `UsePersistentVolume`: **Nouveau**
   - `PersistentVolumeDeletionPolicy`: **Conserver** 
   - `ExistingPersistentVolumeId`: la valeur que vous avez notée à l'étape&nbsp;2
   
 La nouvelle instance du gestionnaire a la même configuration que celle qui a été perdue.

</details>


3. Sélectionnez **Suivant**.
4. [Configurer les options de la pile](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-console-add-tags.html) en fonction de vos besoins, puis sélectionnez **Suivant**. 


## Examiner et créer la pile

1. Examinez les paramètres du modèle. 
2. Cochez la case pour confirmer que le modèle créera des ressources IAM. 
3. Sélectionnez **Soumettre** pour déployer la pile.<br />
Dans l'onglet **Événements**, vous pouvez suivre la progression. Lorsque l'état de toutes les ressources est `CREATE_COMPLETE`, le gestionnaire est prêt. 

L'onglet **Sorties** affiche les valeurs générées pour les ressources créées.

Vous aurez besoin de l'URL pour accéder au gestionnaire et configurer AI Unlimited.


## Étape suivante

[Créer une application OAuth](../resources/create-oauth-app.md) pour permettre l'authentification entre AI Unlimited et votre compte fournisseur Git.




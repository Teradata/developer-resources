---
id: deploy-jupyter-aws-console
title: Installer JupyterLab sur AWS
description: Découvrez comment déployer JupyterLab à l'aide d'un modèle CloudFormation.
sidebar_label: Installer sur AWS
sidebar_position: 1
pagination_prev: null
pagination_next: null
---

# Installer JupyterLab sur AWS

Vous utiliserez un modèle CloudFormation fourni par Teradata pour installer JupyterLab et le noyau AI Unlimited à partir d'AWS Management Console. 

Cela déploie une instance de serveur, avec JupyterLab exécuté dans un conteneur contrôlé par [systemd](../../glossary.md#systemd).

:::tip
Pour obtenir une assistance pour l'installation, envoyez un e-mail à l'<a href="mailto:aiunlimited.support@Teradata.com">équipe d'assistance</a> ou demandez à la [communauté](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa).
:::

## Préparez votre compte AWS

- Travaillez avec votre administrateur cloud pour vous assurer que vous disposez des autorisations [IAM](https://aws.amazon.com/iam/) pour créer les ressources cloud définies dans le  [modèle JupyterLab](https://github.com/Teradata/ai-unlimited/tree/develop/deployments/aws/templates/jupyter).

- Si vous devez accéder à l'instance JupyterLab pour exécuter des commandes ou déboguer, vous pouvez utiliser une [paire de clés](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) pour vous connecter en toute sécurité à l'aide de Secure Shell (SSH). Vous aurez besoin de la paire de clés lorsque vous [spécifiez les détails de la pile](#specify-stack-details-and-options).
  
- Si vous prévoyez d'utiliser un [Application Load Balancer (ALB)](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancer-getting-started.html) ou un [Network Load Balancer (NLB)](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancer-getting-started.html), assurez-vous que vous disposez de l'autorisation de gérer ces services AWS :
	\- [AWS Certificate Manager](https://docs.aws.amazon.com/acm/)&nbsp;: pour délivrer un nouveau certificat pour l'ID de la zone hébergée dans Route 53.
	\- [AWS Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html)&nbsp;: pour configurer un nom du domaine personnalisé et acheminer les requêtes DNS vers votre équilibreur de charge.


## Cloner le référentiel

import MyPartial from '../../_partials/_clone-repo.mdx';

<MyPartial />


## Localisez le modèle Jupyter

Les modèles CloudFormation pour JupyterLab sont disponibles ici dans le référentiel GitHub AI Unlimited :

`deployments/aws/templates/jupyter`

Choisissez un modèle en fonction de votre intention d'utiliser un [équilibreur de charge](../../glossary.md#load-balancer) et de son type.
:::note
Vous pouvez demander conseil à un administrateur cloud de votre organisation.
:::
    \- `jupyter-alb.yaml`&nbsp;: héberge JupyterLab derrière un [application load balancer](../../glossary.md#application-load-balancer)
    \- `jupyter-with-nlb.yaml`&nbsp;: héberge JupyterLab derrière un [network load balancer](../../glossary.md#network-load-balancer)
    \- `jupyter-without-lb.yaml`&nbsp;: aucun équilibreur de charge


## Charger le modèle	

1. Connectez-vous à [Console AWS](https://aws.amazon.com).
   :::note
   Les références à AWS Management Console sont à jour au 29 mai 2024.
   :::
2. Sélectionnez la région dans laquelle déployer JupyterLab.<br/>
   Nous vous recommandons de sélectionner la région la plus proche de votre lieu de travail principal.
3. Recherchez **CloudFormation** et accédez-y.
4. Sélectionnez **Créer une pile**, puis **Avec de nouvelles ressources (standard)**.
5. Sélectionnez **Choisir un modèle existant** et **Charger un fichier modèle**.
6. Sélectionnez le fichier modèle que vous avez choisi d'utiliser et cliquez sur **Suivant**.


## Spécifier les détails et les options de la pile

1. Fournissez un nom de pile.
2. Examinez les paramètres. Fournissez des valeurs pour les paramètres obligatoires. Votre organisation peut en exiger d'autres.

<details>

<summary>Paramètres AWS et JupyterLab</summary>

| Paramètre | Description | Notes 
|---------|-------------|-----------|
| InstanceType | Le type d'instance EC2 que vous souhaitez utiliser pour le service. | Obligatoire avec la valeur par défaut<br/>Par défaut&nbsp;: t3.small<br/>Nous vous recommandons d'utiliser le type d'instance par défaut pour réduire les coûts. |
| RootVolumeSize | La taille du disque racine que vous souhaitez associer à l'instance, en Go. | Obligatoire avec la valeur par défaut<br/>Par défaut&nbsp;: 8<br/>Prend en charge les valeurs entre&nbsp;8 et 1&nbsp;000. |
| TerminationProtection | Activer la protection contre la fin de l'instance. | Obligatoire avec la valeur par défaut<br/>Par défaut&nbsp;: faux |
|IamRole | Spécifie si CloudFormation doit créer un rôle IAM ou utiliser un rôle existant. | Obligatoire avec la valeur par défaut<br/>Par défaut&nbsp;: Nouveau<br/>Les options prises en charge sont&nbsp;: Nouveau ou Existant |
|IamRoleName | Le nom du rôle IAM à attribuer à l'instance, soit un rôle IAM existant, soit un rôle IAM récemment créé. | Facultatif avec la valeur par défaut<br/>Valeur par défaut&nbsp;: ai-unlimited-iam-role<br/>Si vous nommez un nouveau rôle IAM, CloudFormation requiert la capacité CAPABILITY_NAMED_IAM. Laissez ce champ vide pour utiliser un nom généré automatiquement. |
|IamPermissions<br/>Boundary | L'ARN de la limite des autorisations IAM à associer au rôle IAM attribué à l'instance.| Facultatif<br/>Par défaut&nbsp;: NA|
|AvailabilityZone | La zone de disponibilité dans laquelle vous souhaitez déployer l'instance. | Obligatoire<br/>Par défaut&nbsp;: NA<br/>La valeur doit correspondre au sous-réseau, à la zone de tous les volumes préexistants et le type d'instance doit être disponible dans la zone sélectionnée. |
|LoadBalancing		|Spécifie si l'instance est accessible via un NLB. | Obligatoire avec la valeur par défaut<br/>Valeur par défaut&nbsp;: NetworkLoadBalancer<br/>Les options prises en charge sont&nbsp;: NetworkLoadBalancer ou Aucun |
|LoadBalancerScheme	| Si un équilibreur de charge est utilisé, ce champ spécifie si l'instance est accessible depuis Internet ou uniquement depuis le VPC. | Facultatif avec la valeur par défaut<br/>Par défaut&nbsp;: Internet-facing<br/>Le nom DNS d'un équilibreur de charge Internet-facing peut être résolu publiquement par les adresses IP publiques des nœuds. Par conséquent, les équilibreurs de charge Internet-facing peuvent acheminer les demandes des clients via Internet. Les nœuds d'un équilibreur de charge interne n'ont que des adresses IP privées. Le nom DNS d'un équilibreur de charge interne peut être résolu publiquement par les adresses IP personnelles des nœuds. Par conséquent, les équilibreurs de charge internes peuvent acheminer les demandes des clients ayant accès au VPC pour l'équilibreur de charge.|
|Privé	|Spécifie si le service est déployé dans un réseau privé sans adresses IP publiques.| Obligatoire<br/>Par défaut&nbsp;: faux <br/>Assurez-vous de sélectionner l'option `Activer l'attribution automatique d'adresses IPv4 publiques` dans le sous-réseau où réside le gestionnaire. Si cette option n'est pas sélectionnée, l'installation peut échouer.|
|Session	|Spécifie si vous pouvez utiliser AWS Session Manager pour accéder à l'instance.| Obligatoire<br/>Par défaut&nbsp;: faux |
|Vpc		|Le réseau sur lequel vous souhaitez déployer l'instance.|Obligatoire<br/>Par défaut&nbsp;: NA|
|Sous-réseau	|Le sous-réseau sur lequel vous souhaitez déployer l'instance. |Obligatoire<br/>Par défaut&nbsp;: NA<br/>Le sous-réseau doit résider dans la zone de disponibilité sélectionnée.|
|KeyName		|La paire de clés publique/privée qui vous permet de vous connecter en toute sécurité à votre instance après son lancement. Lorsque vous créez un compte AWS, il s'agit de la paire de clés que vous créez dans votre région préférée.| Facultatif<br/>Par défaut&nbsp;: NA<br/>Laissez ce champ vide si vous ne souhaitez pas inclure les clés SSH.|
|AccessCIDR	|La plage d'adresses IP CIDR autorisée à accéder à l'instance.| Facultatif<br/>Par défaut&nbsp;: NA<br/>Nous vous recommandons de définir cette valeur sur une plage d'adresses IP approuvées. Définissez au moins AccessCIDR, PrefixList ou SecurityGroup pour autoriser le trafic entrant, sauf si vous créez des règles d'entrée de groupe de sécurité personnalisées.|
|PrefixList			| La liste de préfixes que vous pouvez utiliser pour communiquer avec l'instance. Il s'agit d'un ensemble de blocs CIDR qui définissent un ensemble de plages d'adresses IP nécessitant la même application de stratégie. | Facultatif<br/>Par défaut&nbsp;: NA<br/>Définissez au moins l'un des éléments suivants&nbsp;: AccessCIDR, PrefixList ou SecurityGroup pour autoriser le trafic entrant, sauf si vous créez des règles d'entrée de groupe de sécurité personnalisées.|
|SecurityGroup	|Le pare-feu virtuel qui contrôle le trafic entrant et sortant vers l'instance.| Facultatif<br/>Par défaut&nbsp;: NA<br/>Implémenté sous la forme d'un ensemble de règles spécifiant les protocoles, ports et adresses IP ou blocs CIDR autorisés à accéder à l'instance. Définissez au moins l'un des éléments suivants&nbsp;: AccessCIDR, PrefixList ou SecurityGroup pour autoriser le trafic entrant, sauf si vous créez des règles d'entrée de groupe de sécurité personnalisées.|
|UsePersistentVolume| Indique si vous souhaitez utiliser un volume persistant nouveau ou existant pour stocker des données. Consultez *En savoir plus&nbsp;: Utilisation d'un volume persistant* sous la section Paramètres. |Facultatif avec valeur par défaut<br/>Par défaut&nbsp;: Nouveau<br/>Les options prises en charge sont un nouveau volume persistant ou un volume existant, selon votre cas d'utilisation.|
|PersistentVolumeSize	|La taille du volume persistant que vous pouvez associer à l'instance, en Go.|Obligatoire avec la valeur par défaut<br/>Par défaut&nbsp;: 20<br/>Prend en charge les valeurs comprises entre&nbsp;8 et 1&nbsp;000|
|ExistingPersistent<br/>VolumeId		|L'ID du volume persistant existant que vous pouvez associer à l'instance.| Obligatoire si UsePersistentVolume est défini sur Existant<br/>Par défaut&nbsp;: NA<br/>Le volume persistant doit se trouver dans la même zone de disponibilité que l'instance AI Unlimited.|
|PersistentVolume<br/>DeletionPolicy		|Le comportement du volume persistant lorsque vous supprimez le déploiement de CloudFormation.| Obligatoire avec la valeur par défaut<br/>Par défaut&nbsp;: Conserver<br/>Les options prises en charge sont&nbsp;: Supprimer, Conserver, RetainExceptOnCreate et Instantané.|
|LatestAmiId	|L'ID de l'image qui pointe vers la dernière version d'AMI. Cette valeur est utilisée pour la recherche SSM.|Obligatoire avec la valeur par défaut<br/>Par défaut&nbsp;: NA<br/>Ce déploiement utilise la dernière image ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2 disponible.<br/>IMPORTANT&nbsp;: la modification de cette valeur peut endommager la pile.|
| JupyterHttpPort | Le port pour accéder à l'interface utilisateur du service JupyterLab. | Obligatoire avec la valeur par défaut<br/>Par défaut&nbsp;: 8&nbsp;888|
| JupyterVersion | La version de JupyterLab que vous souhaitez déployer. | Obligatoire avec la valeur par défaut<br/>Par défaut&nbsp;: dernière<br/>La valeur est une balise de version de conteneur, par exemple, dernière. |
| JupyterToken | Le jeton ou le mot de passe utilisé pour accéder à JupyterLab depuis l'interface utilisateur. | Obligatoire<br/>Par défaut&nbsp;: NA<br/>Le jeton doit commencer par une lettre et contenir uniquement des caractères alphanumériques. Le modèle autorisé est ^[a-zA-Z][a-zA-Z0-9-]*. |
</details>

<details>

<summary>En savoir plus&nbsp;: utilisation d'un volume persistant</summary>

L'instance JupyterLab s'exécute dans un conteneur et enregistre ses données de configuration dans une base de données dans le volume racine de l'instance. Ces données sont conservées si vous arrêtez, redémarrez ou effectuez un instantané et relancez l'instance. 

Un volume persistant stocke les données d'une application conteneurisée au-delà de la durée de vie du conteneur, du pod ou du nœud dans lequel il s'exécute. 

**Sans volume persistant**

Si le conteneur, le pod ou le nœud tombe en panne ou s'arrête, vous perdez les données de configuration de JupyterLab. Vous pouvez déployer une nouvelle instance JupyterLab, mais pas dans le même état que celle qui a été perdue.

**Avec un volume persistant**

Si le conteneur, le pod ou le nœud tombe en panne ou s'arrête et que les données de configuration JupyterLab sont stockées dans un volume persistant, vous pouvez déployer une nouvelle instance JupyterLab qui a la même configuration que celle qui a été perdue.

**Exemple**

1. Déployez JupyterLab et incluez ces paramètres&nbsp;:
   - `UsePersistentVolume`: **Nouveau**
   - `PersistentVolumeDeletionPolicy`: **Conserver**
3. Après avoir créé la pile, dans l'onglet **Sorties**, notez le `volume-id`.
4. Utilisez JupyterLab.
5. Si l'instance JupyterLab est perdue, déployez à nouveau JupyterLab et incluez ces paramètres&nbsp;:
   - `UsePersistentVolume`: **Nouveau**
   - `PersistentVolumeDeletionPolicy`: **Conserver** 
   - `ExistingPersistentVolumeId`: la valeur que vous avez notée à l'étape&nbsp;2
   
 La nouvelle instance JupyterLab a la même configuration que celle qui a été perdue.

</details>

3. Sélectionnez **Suivant**.
4. [Configurer les options de la pile](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-console-add-tags.html) selon vos besoins, puis sélectionnez **Suivant**. 


## Examiner et créer la pile

1. Examinez les paramètres du modèle. 
2. Cochez la case pour confirmer que le modèle créera des ressources IAM. 
3. Sélectionnez **Soumettre** pour déployer la pile.<br />
Dans l'onglet **Événements**, vous pouvez surveiller la progression. Lorsque l'état de toutes les ressources est `CREATE_COMPLETE`, JupyterLab est prêt. 

L'onglet **Sorties** affiche l'URL permettant d'accéder à JupyterLab.




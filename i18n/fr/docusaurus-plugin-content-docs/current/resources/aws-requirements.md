---
id: aws-account-requirements
title: Exigences relatives au compte AWS
description: Comment préparer votre compte AWS pour l'installation d'AI Unlimited
sidebar_label: Exigences relatives au compte AWS
sidebar_position: 1
pagination_prev: null
pagination_next: null
---

# Exigences relatives au compte AWS

Tout d'abord, assurez-vous que vous  disposez des [prérequis](../install-ai-unlimited/index.md#prerequisites). 

Ensuite, avant d'installer AI Unlimited, traitez ces éléments AWS.


## Préparez votre compte AWS

- Travaillez avec votre administrateur cloud pour vous assurer que vous disposez des autorisations [IAM](https://aws.amazon.com/iam/) pour créer les ressources cloud définies dans le [modèle AI Unlimited](https://github.com/Teradata/ai-unlimited/tree/develop/deployments/aws/templates/ai-unlimited).

- Si vous devez accéder à l'instance du gestionnaire pour exécuter des commandes ou déboguer, vous pouvez vous y connecter de l'une des manières suivantes :
	\- Utilisez une [paire de clés](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) pour vous connecter en toute sécurité à l'aide de Secure Shell (SSH). Vous aurez besoin de la paire de clés lorsque vous [spécifiez les détails de la pile](../install-ai-unlimited/prod-aws-console-deploy-ai-unlimited.md#specify-stack-details-and-options).
	\- Utilisez AWS Session Manager pour vous connecter. Pour activer cette fonction, associez la stratégie [session-manager.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/session-manager.json) à un [rôle que vous fournissez](#provide-roles-created-by-your-organization) au gestionnaire.
  
- Si vous prévoyez d'utiliser un [Application Load Balancer (ALB)](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancer-getting-started.html) ou un [Network Load Balancer (NLB)](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancer-getting-started.html), assurez-vous que vous disposez de l'autorisation de gérer ces services AWS :
	\- [AWS Certificate Manager](https://docs.aws.amazon.com/acm/)&nbsp;: pour délivrer un nouveau certificat pour l'ID de la zone hébergée dans Route 53.
	\- [AWS Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html)&nbsp;: pour configurer un nom du domaine personnalisé et acheminer les requêtes DNS vers votre équilibreur de charge.


## Autoriser AI Unlimited à créer des rôles

Le gestionnaire a besoin d'un rôle qui lui permet de déployer le moteur. Celui-ci a besoin d'un rôle qui permet aux nœuds du moteur de communiquer. Vous pouvez laisser AI Unlimited créer ces deux rôles.

:::note
Si votre sécurité ne permet pas à AI Unlimited de créer des rôles, [créez les rôles](#provide-roles-created-by-your-organization) vous-même ou avec l'aide de votre administrateur cloud.
::: 

### Rôle du gestionnaire

Pour permettre à AI Unlimited de créer ce rôle pour vous, lorsque vous [spécifiez les détails de la pile](../install-ai-unlimited/prod-aws-console-deploy-ai-unlimited.md#specify-stack-details-and-options), fournissez ces valeurs pour ces paramètres :
    \- `IamRole` : **Nouveau**
    \- `IamRoleName` : laisser vide

### Rôle du moteur

AI Unlimited peut créer un rôle pour le moteur à chaque fois que le moteur est déployé. 

Les stratégies spécifiques au moteur créées par AI Unlimited sont restreintes de cette manière :	
  
  ```bash
  "Resource": ["arn:aws:secretsmanager:`REGION`:`ACCOUNT_ID`:secret:compute-engine/`CLUSTER_NAME`/`SECRET_NAME`"]
  ```

Pour permettre à AI Unlimited de créer un rôle pour chaque déploiement de moteur, lorsque vous configurez l'[intégration cloud](../install-ai-unlimited/setup-ai-unlimited.md) dans la configuration d'AI Unlimited, laissez le champ **Rôle IAM par défaut** vide.


## Fournir des rôles créés par votre organisation

Si votre sécurité ne permet pas à AI Unlimited de créer des rôles, fournissez des rôles créés par votre organisation.

Le dossier `deployments` dans le [référentiel GitHub d'AI Unlimited](https://github.com/Teradata/ai-unlimited) fourni par Teradata inclut des exemples de stratégies pour les rôles de gestionnaire et de moteur.

Ouvrez une fenêtre de terminal et clonez le référentiel.

``` bash
git clone https://github.com/Teradata/ai-unlimited
```

Ou utilisez les liens fournis dans les sections suivantes pour télécharger ce dont vous avez besoin.


### Rôle du gestionnaire

- Si vous disposez des autorisations nécessaires pour créer des ressources IAM, créez le rôle :
  - Associez une stratégie qui inclut le JSON qui répond à vos besoins. Consultez les exemples JSON qui suivent.
  - Lorsque vous [spécifiez les détails de la pile](../install-ai-unlimited/prod-aws-console-deploy-ai-unlimited.md#specify-stack-details-and-options), utilisez ces valeurs de paramètres :
    - `IamRole` : **Nouveau**
	 \- `IamRoleName` : le nom du nouveau rôle
- Si vous ne disposez pas des autorisations nécessaires pour créer des ressources IAM, collaborez avec votre administrateur cloud pour utiliser un rôle existant :
  - Associez une stratégie qui inclut le JSON qui répond à vos besoins. Consultez les exemples JSON qui suivent.
  - Lorsque vous [spécifiez les détails de la pile](../install-ai-unlimited/prod-aws-console-deploy-ai-unlimited.md#specify-stack-details-and-options), utilisez ces valeurs de paramètres :
  - `IamRole` : **Existant**
  - `IamRoleName` : le nom du rôle existant
  
#### Exemples de JSON

Utilisez ces exemples, selon les besoins, dans une stratégie associée au rôle du gestionnaire :

- Autoriser AI Unlimited à créer le rôle de moteur. Incluez [ai-unlimited-workspaces.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces.json). Cette valeur inclut des autorisations pour créer des instances de moteur et accorde des autorisations AI Unlimited pour créer des rôles et des stratégies spécifiques au cluster.

- Si votre sécurité ne permet pas à AI Unlimited de créer des rôles, incluez [ai-unlimited-without-iam-role-permissions.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces-without-iam-role-permissions.json). Cette valeur inclut les autorisations pour créer des instances de moteur, mais pas celles nécessaires à AI Unlimited pour créer des rôles et des stratégies spécifiques au cluster. 

  :::note
  Si vous utilisez [ai-unlimited-without-iam-role-permissions.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces-without-iam-role-permissions.json) pour le rôle du gestionnaire, utilisez [ai-unlimited-engine.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json) pour le rôle du moteur.
  :::

- En option, incluez [session-manager.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/session-manager.json) : cela inclut les autorisations permettant au moteur d'interagir avec [AWS Session Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html). Utilisez cette option si vous prévoyez d'utiliser Session Manager pour vous connecter au moteur afin de le gérer de près.


### Rôle du moteur

- Au rôle que vous fournissez pour le moteur, associez une stratégie qui inclut [ai-unlimited-engine.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json). Cela permet à AI Unlimited de transmettre le rôle au cluster à chaque déploiement du moteur. 

- Ajoutez les détails de votre compte à la stratégie. Vous ne pouvez pas prédire le nom du cluster, utilisez donc un caractère générique.

  ``` bash
  "arn:aws:secretsmanager:`REGION`:`ACCOUNT_ID`:secret:compute-engine/*"
  or
  "arn:aws:secretsmanager:`REGION`:111111111111:secret:compute-engine/*"
  or
  "arn:aws:secretsmanager:us-west-2:111111111111:secret:compute-engine/*"
  
  ```
  
:::note
Si vous utilisez [ai-unlimited-engine.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json) pour le rôle du moteur, utilisez [ai-unlimited-without-iam-role-permissions.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces-without-iam-role-permissions.json) pour le rôle du gestionnaire.
:::

- Lorsque vous configurez l'[intégration cloud](../install-ai-unlimited/setup-ai-unlimited.md) dans la configuration d'AI Unlimited, placez le nom du rôle dans le champ **Rôle IAM par défaut**.








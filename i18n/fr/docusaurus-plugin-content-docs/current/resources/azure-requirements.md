---
id: azure-account-requirements
title: Exigences relatives au compte Azure
description: Comment préparer votre compte Azure pour l'installation d'AI Unlimited
sidebar_label: Exigences relatives au compte Azure
sidebar_position: 2
pagination_prev: null
pagination_next: null
---

# Exigences relatives au compte Azure

Tout d'abord, assurez-vous que vous disposez des [prérequis](../install-ai-unlimited/index.md#prerequisites). 

Ensuite, avant d'installer AI Unlimited, traitez ces éléments Azure.


## Préparez votre compte Azure

- Travaillez avec votre administrateur cloud pour vous assurer que votre compte Azure dispose des autorisations pour créer les ressources cloud définies dans le [modèle AI Unlimited](https://github.com/Teradata/ai-unlimited/tree/develop/deployments/azure/templates/arm/ai-unlimited). 

- Exigences relatives à la mise en réseau : votre [groupe de ressources](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal) Azure doit disposer d'un [Azure Virtual Network (VNet)](https://learn.microsoft.com/en-us/azure/virtual-network/quick-create-portal) configuré avec un [sous-réseau](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-subnet?tabs=azure-portal). Utilisez un réseau virtuel ou un sous-réseau existant, ou créez le vôtre, en fonction des autorisations de votre compte. 

- Si vous devez accéder à l'instance du gestionnaire pour exécuter des commandes ou déboguer, vous pouvez utiliser une [paire de clés](https://learn.microsoft.com/en-us/azure/virtual-machines/ssh-keys-portal) pour vous connecter en toute sécurité à l'aide de Secure Shell (SSH). Vous aurez besoin de la paire de clés lorsque vous [spécifiez les détails de l'instance](../install-ai-unlimited/prod-azure-portal-deploy-manager.md#specify-instance-details).


## Créer le rôle du gestionnaire

Le gestionnaire a besoin d'un rôle qui lui permette d'effectuer les tâches suivantes :
- Déployez le moteur.
- Créez un rôle pour le moteur (à chaque fois qu'il déploie le moteur) qui permet aux nœuds du moteur de communiquer.

Le dossier `deployments` dans le [référentiel GitHub d'AI Unlimited](https://github.com/Teradata/ai-unlimited) fourni par Teradata inclut un modèle ARM de rôle de gestionnaire et un exemple de stratégie.

	Ouvrez une fenêtre de terminal et clonez le référentiel.

    ``` bash
    git clone https://github.com/Teradata/ai-unlimited
    ```

Ou utilisez les liens qui suivent pour télécharger ce dont vous avez besoin.

Créer le rôle :

- Si vous disposez des autorisations nécessaires pour créer des rôles, créez le rôle du responsable à l'aide du modèle ARM [role-policy](https://github.com/Teradata/ai-unlimited/tree/develop/deployments/azure/templates/arm/init/role-policy.json). Consultez [Créer ou mettre à jour des rôles personnalisés Azure à l'aide d'un modèle ARM](https://learn.microsoft.com/en-us/azure/role-based-access-control/custom-roles-template).

- Ou partagez la stratégie [ai-unlimited.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/azure/policies/ai-unlimited.json), qui contient les autorisations dont le gestionnaire a besoin, avec votre administrateur cloud afin qu'il puisse créer le rôle pour vous.

Vous aurez besoin de `RoleDefinitionId` lorsque vous [spécifiez les détails de l'instance](../install-ai-unlimited/prod-azure-portal-deploy-manager.md#specify-instance-details). 









---
id: collaborate-project
title: Collaborer sur un projet
description: Découvrez comment accéder à un projet en tant que collaborateur
sidebar_position: 3
sidebar_label: Collaborer sur un projet
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Collaborer sur un projet

Un projet est un moyen d'explorer et d'analyser les données à partir d'un bloc-notes Jupyter. 

:::note
Chaque projet dispose d'un référentiel Git. [Découvrez pourquoi](../glossary.md#project-repository).
:::

Le propriétaire d'un projet peut [vous ajouter à un projet](../manage-ai-unlimited/add-collaborators.md) en tant que collaborateur. Pour contribuer, vous devez accéder au projet à partir d'un bloc-notes Jupyter.


## Avant de commencer

- À partir du propriétaire du projet, obtenez ces éléments :
  - L'adresse IP ou le nom d'hôte du [Gestionnaire AI Unlimited](../glossary.md#ai-unlimited-manager)
  - Le nom du projet

- À partir de votre profil, [obtenez votre clé API](./get-api-key.md). 

:::tip
Exécutez `%help` pour obtenir des détails sur toutes les commandes magiques disponibles dans votre bloc-notes. Exécutez `%help <command>` pour obtenir des détails sur l'une d'entre elles. 

Ou apprenez-en plus sur les [commandes magiques](./magic-commands.md) spécifiques à AI Unlimited. 
:::


## Accéder au projet

1. Connectez-vous à JupyterLab, ouvrez un bloc-notes et sélectionnez le noyau AI Unlimited.

2. Connectez-vous au gestionnaire.
    ```bash 
    %workspaces_config host=<ip_or_hostname>, apikey=<API_Key>, withtls=<T|F>
    ```

3. Vérifiez si le moteur est déployé.
    ```bash 
    %project_engine_list project=<Project_Name>
    ```

4. Si le moteur n'est pas déployé, déployez-le et restaurez le projet. 

   La taille peut être petite, moyenne, grande ou très grande. La taille par défaut est petite. Reportez-vous aux informations de tarification [AWS](http://aws.amazon.com/marketplace/pp/prodview-2srvuo3mwqlig) ou [Azure](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/teradata.ai-unlimited?tab=Overview).
   
   Si vous ne spécifiez pas le nombre de nœuds, un seul nœud est déployé. La valeur par défaut pour la restauration est vrai.
   
   <Tabs>
   <TabItem value="aws1" label="AWS">

   ```bash 
   %project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore=<true|false>, prefixlist=<Prefix_List>, securitygroups=<Security_Group>, cidrs=<CIDR>, tags=<Tags>, iamrole=<IAM_Role>, roleprefix=<Role_Prefix>, permissionboundary=<Permission_Boundary>
   ```

   </TabItem>
   <TabItem value="azure" label="Azure">

   ```bash 
   %project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore=<true|false>, network=<Network>, keyvault=<Key_Vault>, keyvaultresourcegroup=<Key_Vault_Resource_Group>, networkresourcegroup=<Network_Resource_Group>
   ```
   </TabItem>
   </Tabs>

5. Obtenez votre mot de passe pour le moteur.
   ```bash
   %project_user_list project=<Project_Name>
   ```

6. Actualisez la connexion pour inclure votre bloc-notes.
   ```bash 
   %project_connection_add project=<Project_Name>
   ```

7. Connectez-vous au projet.
   ```bash
   %connect <Project_Name>
   ```
   Une fois la connexion établie, indiquez votre mot de passe.
   
Vous êtes prêt  ! Vous pouvez désormais contribuer au projet.



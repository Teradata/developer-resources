---
id: suspend-and-restore-project
title: Suspendre et restaurer un projet
description: Comment suspendre et restaurer des projets pour gérer les coûts.
sidebar_position: 2
sidebar_label: Suspendre et restaurer un projet
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Suspendre et restaurer un projet

Vous pouvez suspendre et restaurer un projet selon vos besoins.


## Suspendre

Pour éviter d'encourir des frais pour des ressources moteur inutiles, suspendez les projets sur lesquels vous ne travaillez pas.

Les autorisations utilisateur, les autorisations du stockage d'objets et les objets de données sont enregistrés. Lorsque vous restaurez et redéployez le projet, vous pouvez reprendre là où vous vous étiez arrêté.

Dans votre bloc-notes, exécutez cette commande magique :

```bash 
%project_engine_suspend <Project_Name>
```


## Restaurer (redéployer)

Dans votre bloc-notes, exécutez cette commande magique : 

<Tabs>
<TabItem value="aws1" label="AWS">

```bash 
%project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore-<true|false>, prefixlist=<Prefix_List>, securitygroups=<Security_Group>, cidrs=<CIDR>, tags=<Tags>, iamrole=<IAM_Role>, roleprefix=<Role_Prefix>, permissionboundary=<Permission_Boundary>
```
</TabItem>
<TabItem value="azure" label="Azure">

```bash 
%project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore=<true|false>, network=<Network>, keyvault=<Key_Vault>, keyvaultresourcegroup=<Key_Vault_Resource_Group>, networkresourcegroup=<Network_Resource_Group>
```
</TabItem>
</Tabs>

Si vous ne spécifiez pas le nombre de nœuds, un nœud est déployé. 

Pour le paramètre restore, laissez la valeur par défaut vrai. Cela restaure le projet à l'état de la dernière validation Git.

A chaque déploiement du moteur, un nouveau mot de passe de connexion au moteur est généré pour chaque utilisateur.

:::tip
En savoir plus sur les [commandes magiques](../explore-and-analyze-data/magic-commands.md) AI Unlimited.
:::


---
id: magic-commands
title: Commandes magiques
description: Découvrez les commandes magiques AI Unlimited que vous pouvez utiliser dans un bloc-notes Jupyter pour gérer des projets.
sidebar_label: Commandes magiques
sidebar_position: 5
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Commandes magiques

Dans les bloc-notes Jupyter, les commandes magiques sont des raccourcis pour les tâches courantes. Les commandes magiques AI Unlimited vous permettent de vous connecter au moteur et de gérer des projets.

AI Unlimited Jupyter Kernel prend en charge les commandes magiques décrites ici, en plus des commandes magiques standard du noyau Teradata SQL. 


## %workspaces_config

**Description** : établissez une communication entre votre bloc-notes et le gestionnaire AI Unlimited.

**Utilisation** :
```bash 
%workspaces_config host=<ip_or_hostname>, apikey=<API_Key>, withtls=<T|F>
```
Où :

- host : nom ou adresse IP du gestionnaire AI Unlimited.

- apikey : valeur de clé API de la page **Profil** de configuration d'AI Unlimited.

- **`[Facultatif]`** withTLS : si le paramètre est Faux (F), la communication client-serveur par défaut n'utilise pas TLS.

**Sortie** :
```
Workspace configured for host=<ip_or_hostname>
```

## %project_create

**Description** : créez un projet. Cette commande crée également un référentiel avec le nom du projet dans votre compte Git. Les configurations sont stockées dans le fichier **engine.yml**.

**Utilisation** :
```bash
%project_create project=<Project_Name>, env=<Cloud_Service_Provider>, team=<Project_Team>
```
Où :

- project : nom du projet à créer.

- env : environnement cloud dans lequel le projet est hébergé. Pour la version actuelle, AWS et Azure sont pris en charge.

- **`[Facultatif]`** team  : nom de l'équipe collaborant sur le projet.

**Sortie** :
```
Project `Project_Name` created
```

## %project_delete

**Description** : supprimez le projet. Cette opération ne supprime pas le référentiel du projet. Elle supprime les métadonnées du projet du gestionnaire. 

**Utilisation** :
```bash 
%project_delete project=<Project_Name>, team=<Project_Team>
```

Où :

- project : nom du projet à supprimer.

- **`[Facultatif]`** team  : nom de l'équipe collaborant sur le projet.

**Sortie** :
```
Project `Project_Name` deleted
```

## %project_list

**Description** :  énumérez les détails d'un ou de tous les projets.

Utilisez le paramètre project pour obtenir les détails d'un projet spécifique. Tous les projets sont répertoriés si vous exécutez la commande sans aucun paramètre.

**Utilisation** :
```bash
%project_list project=<Project_Name>
```
Où :

- project : le nom du projet.

**Sortie** :

```
| NAME          | URL      | 
|---------------|----------|
| <Project_Name>| <Git_URL>| 

```

## %project_auth_create

**Description** : créez un objet d'autorisation pour stocker les identifiants du stockage d'objets.

Vous devez créer l'objet d'autorisation avant de déployer le moteur. Les détails de l'autorisation sont conservés et inclus lors du redéploiement du projet. Vous pouvez éventuellement créer des autorisations manuellement à l'aide de la commande SQL `CREATE AUTHORIZATION` après le déploiement du moteur. Dans ce cas, les détails de l'autorisation ne sont pas conservés.

**Utilisation** :
```bash 
%project_auth_create project=<Project_Name>, name=<Authorization_Name>, key=<Authorization_Key>, secret=<Authorization_Secret>, region=<ObjectStore_Region>, token=<Session_Token>
```
Où :

- project : nom du projet.

- name : nom d'autorisation pour le stockage d'objets.

- key : clé d'autorisation du stockage d'objets.

- **`[Facultatif]`** secret : ID d'accès secret d'autorisation du stockage d'objets.

- **`[Facultatif]`** region : région du  stockage d'objets ; local pour le stockage d'objets local.

- **`[Facultatif]`** token : jeton de session pour l'accès au stockage d'objets.

- **`[Facultatif - AWS uniquement]`** role : utilisateurs IAM ou compte de service pour accéder aux ressources AWS à partir d'un compte AWS en assumant un rôle et ses droits. Le propriétaire de la ressource AWS définit le rôle. Par exemple : arn:aws:iam::00000:role/STSAssumeRole.

- **`[Facultatif - AWS uniquement]`** ExternalID : ID externe utilisé pour accéder au stockage d'objets. Ce paramètre est obligatoire lors de l'utilisation du paramètre `role`.

**Sortie** :
```
Authorization 'name' created
```

## %project_auth_update

**Description** : mettez à jour une autorisation de stockage d'objets.

**Utilisation** :

```bash 
%project_auth_update project=<Project_Name>, name=<Authorization_Name>, key=<Authorization_Key>, secret=<Authorization_Secret>, region=<ObjectStore_Region>, token=<Session_Token>

```
Où :

- project : nom du projet.

- name : nom d'autorisation pour le stockage d'objets.

- key : clé d'autorisation du stockage d'objets.

- **`[Facultatif]`** secret : ID d'accès secret d'autorisation du stockage d'objets.

- **`[Facultatif]`** region : région du  stockage d'objets ; local pour le stockage d'objets local.

- **`[Facultatif]`** token : jeton de session pour l'accès au stockage d'objets.

- **`[Facultatif - AWS uniquement]`** role : utilisateurs IAM ou compte de service pour accéder aux ressources AWS ou Azure à partir d'un compte CSP en assumant un rôle et ses droits. Le propriétaire de la ressource AWS ou Azure définit le rôle. Par exemple : arn:aws:iam::00000:role/STSAssumeRole.

- **`[Facultatif - AWS uniquement]`** ExternalID : ID externe utilisé pour accéder au stockage d'objets. Ce paramètre est obligatoire lors de l'utilisation du paramètre `role`.

**Sortie** :
```
Authorization 'name' updated
```

## %project_auth_delete

**Description** : supprimez une autorisation de stockage d'objets.

**Utilisation** :
```bash
%project_auth_delete project=<Project_Name>, name=<Authorization_Name>
```
Où :

- project : nom du projet.

- name : nom d'autorisation pour le stockage d'objets.

**Sortie** :
```
Authorization 'name' deleted
```

## %project_auth_list

**Description** : répertoriez les autorisations du stockage d'objets créées pour un projet.

**Utilisation** :
```bash 
%project_auth_list project=<Project_Name>

```
Où :

- project : nom du projet.

**Sortie** :
```
| AUTH NAME           | ACCESS KEY  | SECRET  | 
|---------------------|-------------|---------|
| <Authorization_Name>| <ACCESS_KEY>| <SECRET>| 
```

## %project_engine_deploy

**Description** : déployez un moteur pour le projet. Le processus de déploiement prend quelques minutes. Une fois le déploiement réussi, un mot de passe est généré.

**Utilisation** :

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

Où :

- project : nom du projet.

- size  : taille du moteur. La valeur peut être :

  - petite
  - moyenne
  - grande
  - très grande

- **`[Facultatif]`** node : nombre de nœuds de moteur à déployer. La valeur par défaut est 1.

- **`[Facultatif]`** subnet : sous-réseau utilisé pour le moteur s'il n'y a pas de valeurs par défaut dans la configuration d'AI Unlimited.

- **`[Facultatif]`** region  : région utilisée pour le moteur s'il n'y a pas de valeurs par défaut dans la configuration d'AI Unlimited.

- **`[Facultatif]`** restore : si le paramètre est Faux (F), le moteur est déployé, mais les objets du projet ne sont pas restaurés, ce qui réduit le temps de déploiement. Vous pouvez les restaurer manuellement à l'aide de %project_restore. La valeur par défaut est Vrai (T). 

<Tabs>
<TabItem value="aws1" label="AWS">

- **`[Facultatif]`** prefixlist&nbsp;: la collection de blocs CIDR qui définissent un ensemble de plages d'adresses IP qui nécessitent la même application de la stratégie. Elle est utilisée pour spécifier les adresses IP qui peuvent communiquer avec le moteur.

- **`[Facultatif]`** securitygroups&nbsp;: liste des groupes de sécurité pour le VPC dans chaque région. Si vous ne spécifiez pas de groupe de sécurité, le moteur est automatiquement associé au groupe de sécurité par défaut du VPC.

- **`[Facultatif]`** cidrs&nbsp;: liste des adresses CIDR utilisées pour le moteur.

- **`[Facultatif]`** tags&nbsp;: les paires clé-valeur qui sont attribuées au moteur pour une identification rapide.

- **`[Facultatif]`** iamrole&nbsp;: le rôle IAM utilisé pour le moteur.

- **`[Facultatif]`** roleprefix&nbsp;: la chaîne ajoutée au début du rôle IAM attribué au moteur.

- **`[Facultatif]`** permissionboundary&nbsp;: ARN de la limite des autorisations IAM à associer au rôle IAM attribué au moteur. La limite des autorisations définit les autorisations maximales dont le rôle peut disposer.

</TabItem>
<TabItem value="azure" label="Azure">

- **`[Facultatif]`** network&nbsp;: le réseau sur lequel vous souhaitez déployer le moteur.

- **`[Facultatif]`** keyvault&nbsp;: le coffre de clés utilisé par le moteur où les informations sensibles telles que les mots de passe peuvent être stockées en toute sécurité.

- **`[Facultatif]`** keyvaultresourcegroup&nbsp;: le groupe de ressources qui contient le coffre de clés.

- **`[Facultatif]`** networkresourcegroup&nbsp;: le groupe de ressources qui contient le réseau.

</TabItem>
</Tabs>

**Sortie** :
```
Started deploying.
Success: Compute Engine setup, look at the connection manager
```

## %project_engine_suspend

**Description** : arrêtez le moteur une fois votre travail terminé.

**Utilisation** :
```bash 
%project_engine_suspend <Project_Name>
```
Où :

- project : nom du projet.

**Sortie** :
```
Started suspend
Success: Suspended Compute Engine
```

## %project_engine_list

**Description** : affichez la liste des moteurs déployés pour votre projet.

**Utilisation** :
```bash 
%project_engine_list project=<Project_Name>
```
Où :

- project : nom du projet.

**Sortie** :
```
| IP   | STATE   | REGION  | SIZE             | NODE             |
|------|---------|---------|------------------|------------------|
| <IP> | Deployed| <Region>| <Size_of_Engine> | <Number_of_Nodes>|
```

## %project_user_list

**Description** : affichez la liste des collaborateurs attribués au projet dans le référentiel Git.

**Utilisation** :
```bash
%project_user_list project=<Project_Name>
```

Où :

- **`[Facultatif]`** project : nom du projet.

**Sortie** :
```
| PROJECT ID   | USER  | PASSWORD  |
|--------------|-------|-----------|
| <Project_ID> | <User>| <Password>| 
```

## %project_backup

**Description** : sauvegardez les informations de votre projet et la définition de l'objet dans le moteur.

**Utilisation** :
```bash
%project_backup project=<Project_Name>
```
Où :

- project : nom du projet.

**Sortie** :
```
Backup of the object definitions created
```

## %project_restore

**Description** : restaurez les informations de votre projet et la définition de l'objet à partir de votre référentiel Git.

**Utilisation** :
```bash 
%project_restore project=<Project_Name>, gitref=<Git_Reference>
```
Où :

- project : nom du projet.
- **`[Facultatif]`** gitref : la référence Git pour la validation à partir de laquelle restaurer le projet, si vous ne souhaitez pas restaurer à partir de la dernière version.

**Sortie** :
```
Restore of the object definitions done
```

## %project_engine_update_users

**Description** : mettez à jour les utilisateurs sur le moteur déployé. Si des utilisateurs sont ajoutés en tant que collaborateurs au référentiel Git après le déploiement du moteur, vous pouvez utiliser cette commande pour mettre à jour et créer des utilisateurs pour le moteur déployé.

**Utilisation** :
```bash 
%project_engine_update_users project=<Project_Name>
```
Où :

- project : nom du projet.

**Sortie** :
```
Username and password of each user on the engine
```

## %project_engine_update_auth

**Description** : mettez à jour ou ajoutez de nouvelles autorisations sur le moteur déployé sans avoir à suspendre et redéployer le moteur.

**Utilisation** :
```bash 
%project_engine_update_auth project=<Project_Name>
```
Où :

- project : nom du projet.


**Sortie** :
```
Authorizations updated
```

## %project_connection_add

**Description** : actualisez la connexion pour le moteur déployé. Utilisez cette commande pour vous connecter au moteur à partir d'un autre bloc-notes sans avoir à créer une connexion manuellement.

**Utilisation** :
```bash 
%project_connection_add project=<Project_Name>
```
Où :

- project : nom du projet.


**Sortie** :
```
The connection manager shows the refreshed connection
```

## %help

**Description** : affichez la liste des commandes magiques fournies par le noyau AI Unlimited.

**Utilisation** :
```bash
%help
```
De plus, vous pouvez voir des messages d'aide détaillés par commande.

**Utilisation** :
```bash 
%help `command`
```
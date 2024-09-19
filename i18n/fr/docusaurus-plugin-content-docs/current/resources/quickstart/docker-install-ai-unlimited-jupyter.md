---
id: run-ai-unlimited-jupyterlab-docker
title: Exécutez le gestionnaire et JupyterLab localement
description: Découvrez comment exécuter le gestionnaire AI Unlimited et JupyterLab à l'aide de Docker.
sidebar_label: Exécutez le gestionnaire et JupyterLab à l'aide de Docker
sidebar_position: 3
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Exécutez le gestionnaire et JupyterLab à l'aide de Docker

Le gestionnaire AI Unlimited orchestre le déploiement du moteur et comprend une interface utilisateur Web pour la surveillance des projets. Et le gestionnaire est l'endroit où vous allez configurer AI Unlimited. 

Vous utiliserez JupyterLab pour explorer et analyser les données.

Vous utiliserez [Docker Compose](https://docs.docker.com/compose/) pour exécuter le gestionnaire AI Unlimited et JupyterLab, avec AI Unlimited Jupyter Kernel, localement dans des conteneurs. 

:::tip
Pour obtenir une assistance pour l'installation, envoyez un e-mail à l'<a href="mailto:aiunlimited.support@Teradata.com">équipe d'assistance</a> ou demandez à la [communauté](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa).
:::

## Prérequis

- Un compte AWS ou Azure à paiement à l'utilisation sur lequel déployer le moteur à partir d'un bloc-notes Jupyter
- Un compte [GitHub](https://github.com) ou [GitLab](https://gitlab.com) pour héberger chaque référentiel de projet pour authentifier les utilisateurs et stocker les informations du projet
- Votre stockage d'objets, où réside votre data lake Amazon ou ADLS Gen2
- [Docker](https://www.docker.com/get-started/) installé sur votre ordinateur


## Définir les emplacements des fichiers de configuration

1. Vous pouvez également définir la variable d'environnement `AI_UNLIMITED_HOME` sur le répertoire dans lequel stocker les fichiers de configuration et de données du gestionnaire. Assurez-vous que le répertoire existe et que l'autorisation appropriée est accordée. L'emplacement par défaut est `./volumes/ai-unlimited`.

    | **Emplacement local** | **Emplacement du conteneur** | **Utilisation** |
    |----------------|--------------------|-------|
    | $AI_UNLIMITED_HOME | /etc/td | Stocke les données et la configuration |

	:::tip
	En savoir plus sur les variables d'environnement [AWS](https://docs.aws.amazon.com/sdkref/latest/guide/environment-variables.html) ou [Azure](https://github.com/paulbouwer/terraform-azure-quickstarts-samples/blob/master/README.md#azure-authentication).
	:::

2. Vous pouvez également définir la variable d'environnement `JUPYTER_HOME` sur le répertoire dans lequel stocker les fichiers de configuration de JupyterLab. L'emplacement par défaut est `~/.jupyter`.


## Cloner le référentiel

Le dossier `deployments/docker` dans le [référentiel GitHub d'AI Unlimited](https://github.com/Teradata/ai-unlimited) fourni par Teradata inclut ces fichiers dont vous aurez besoin pour exécuter le gestionnaire et JupyterLab :
- `[AWS or Azure]-credentials-env-vars.yaml`
- `ai-unlimited.yaml`
- `jupyter.yaml` 

Clonez le référentiel.

    ``` bash
    git clone https://github.com/Teradata/ai-unlimited
	```


## Transmettez les identifiants de votre fournisseur de services cloud à Docker

:::note 
Vous pouvez transmettre les identifiants de deux manières :
- Utilisez `[AWS or Azure]-credentials-env-vars.yaml`, qui contient des variables d'environnement pour stocker vos identifiants.
- Utilisez un volume local contenant vos identifiants. 

Consultez les deux méthodes dans la section **Jupyter et AI Unlimited** de [Déployer avec Docker Compose](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/docker/README.md) dans le référentiel GitHub de Teradata AI Unlimited.

Ce Guide de démarrage rapide utilise la première méthode.
:::

1. Copiez ces variables d'environnement depuis la console de votre fournisseur de services cloud.

	<Tabs>
		<TabItem value="aws" label="AWS" default>
		`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY` et `AWS_SESSION_TOKEN`
		</TabItem>

		<TabItem value="azure" label="Azure">
		`ARM_SUBSCRIPTION_ID`, `ARM_CLIENT_ID` et `ARM_CLIENT_SECRET`
		</TabItem>
	</Tabs>

2. Accédez au répertoire où se trouve `[AWS or Azure]-credentials-env-vars.yaml` et mettez à jour les valeurs des variables d'environnement du fichier.


## Démarrer le gestionnaire et JupyterLab

1. À partir du répertoire où se trouvent `[AWS or Azure]-credentials-env-vars.yaml`, `ai-unlimited.yaml` et `jupyter.yaml`, démarrez le gestionnaire et JupyterLab.

	:::note
	L'indicateur `-d` dans la commande est facultatif.
	:::

	<Tabs>
		<TabItem value="aws" label="AWS" default>
		```bash title="Run the Docker Compose file in the background "
		docker compose -f ai-unlimited.yaml -f aws-credentials-env-vars.yaml -f jupyter.yaml -d up 
		```
		</TabItem>
		<TabItem value="azure" label="Azure">
		```bash title="Run the Docker Compose file in the background "
		docker compose -f ai-unlimited.yaml -f azure-credentials-env-vars.yaml -f jupyter.yaml -d up
		```
		</TabItem></Tabs>


	La commande télécharge et démarre le gestionnaire et les conteneurs JupyterLab.

2. Pour récupérer le jeton Jupyter, répertoriez les conteneurs en cours d'exécution.

	```bash
	docker ps 
	```
	Et identifiez le nom du conteneur JupyterLab.

	Recherchez ensuite les occurrences de la chaîne 'Jeton' dans les journaux du conteneur.

	```bash
	docker logs <container_name> | grep 'Token'
	```

## Vérifier l'accès

Lorsque le gestionnaire est prêt, vous pouvez y accéder à `http://localhost:3000`. 

Lorsque JupyterLab est prêt, vous pouvez y accéder à `http://localhost:8888` et saisir le jeton. 


## Étape suivante

[Créer une application OAuth](../create-oauth-app.md) pour permettre l'authentification entre AI Unlimited et votre compte fournisseur Git.



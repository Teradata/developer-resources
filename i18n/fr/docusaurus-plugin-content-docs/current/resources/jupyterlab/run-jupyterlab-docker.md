---
id: run-jupyter-docker
title: Exécutez JupyterLab à l'aide de Docker
description: Découvrez comment exécuter JupyterLab avec AI Unlimited Jupyter Kernel sur votre ordinateur.
sidebar_label: Exécuter localement à l'aide de Docker
sidebar_position: 3
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Exécutez JupyterLab localement à l'aide de Docker

Vous utiliserez [Docker Compose](https://docs.docker.com/compose/) pour exécuter JupyterLab, avec AI Unlimited Jupyter Kernel, localement dans un conteneur.

:::tip
Pour obtenir une assistance pour l'installation, envoyez un e-mail à l'<a href="mailto:aiunlimited.support@Teradata.com">équipe d'assistance</a> ou demandez à la [communauté](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa).
:::


## Définir un emplacement pour les fichiers de configuration de JupyterLab

Vous pouvez également définir la variable d'environnement `JUPYTER_HOME` sur le répertoire dans lequel stocker les fichiers de configuration de JupyterLab. L'emplacement par défaut est `~/.jupyter`.

:::tip
En savoir plus sur les variables d'environnement [AWS](https://docs.aws.amazon.com/sdkref/latest/guide/environment-variables.html) ou [Azure](https://github.com/paulbouwer/terraform-azure-quickstarts-samples/blob/master/README.md#azure-authentication).
:::


## Cloner le référentiel

Le dossier `deployments/docker` dans le [référentiel GitHub d'AI Unlimited](https://github.com/Teradata/ai-unlimited) fourni par Teradata inclut le fichier [jupyter.yaml](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/docker/jupyter.yaml), vous devez exécuter JupyterLab. 

Clonez le référentiel.

    ``` bash
    git clone https://github.com/Teradata/ai-unlimited
	```


## Démarrer JupyterLab

1. Accédez au répertoire où se trouve `jupyter.yaml` et démarrez JupyterLab.

    :::note
	L'indicateur `-d` dans la commande est facultatif.
	:::

  	```bash title="Run the Docker Compose file in the background "
	docker compose -f jupyter.yaml -d up 
	```
	La commande télécharge et démarre le conteneur JupyterLab.

2. Pour récupérer le jeton Jupyter, répertoriez les conteneurs en cours d'exécution.

	```bash
	docker ps 
	```

	Et identifiez le nom du conteneur JupyterLab.

	Ensuite, recherchez les occurrences de la chaîne 'Jeton' dans les journaux du conteneur.

	```bash
	docker logs <container_name> | grep 'Token'
	```


## Vérifier l'accès à JupyterLab

Lorsque JupyterLab est prêt, vous pouvez y accéder à `http://localhost:8888` et saisir le jeton. 




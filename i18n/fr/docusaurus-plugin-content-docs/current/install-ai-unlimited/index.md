---
id: get-started
title: Commencer
description: Découvrez comment démarrer avec un moteur d'IA/ML en libre-service et à la demande.
sidebar_label: Commencer
sidebar_position: 1
pagination_prev: null
pagination_next: null
---

# Commencer

Découvrez comment installer et utiliser le moteur AI/ML d'[AI Unlimited](https://www.teradata.com/platform/ai-unlimited) dans le cloud.

Avec AI Unlimited, les scientifiques et les ingénieurs de données peuvent explorer et analyser de grands ensembles de données dans un bloc -notes [Jupyter](https://jupyter.org/) à l'aide de fonctions [ClearScape Analytics™](https://docs.teradata.com/access/sources/dita/topic?dita:mapPath=phg1621910019905.ditamap&dita:ditavalPath=pny1626732985837.ditaval&dita:topicPath=gma1702668333653.dita), en libre-service et à la demande. 


## Comment ça fonctionne

Vous connectez votre bloc-notes au moteur AI/ML sur [AWS](https://aws.amazon.com/) ou [Azure](https://azure.microsoft.com/en-us)et connectez le moteur à votre data lake [Amazon S3](https://aws.amazon.com/pm/serv-s3/?gclid=Cj0KCQjwlZixBhCoARIsAIC745AmyEzPaBnrARQxyUW_un0BjgTxlHygMScf4ZbX-7dTeznc-psOFlwaAkjmEALw_wcB&trk=fecf68c9-3874-4ae2-a7ed-72b6d19c8034&sc_channel=ps&ef_id=Cj0KCQjwlZixBhCoARIsAIC745AmyEzPaBnrARQxyUW_un0BjgTxlHygMScf4ZbX-7dTeznc-psOFlwaAkjmEALw_wcB:G:s&s_kwcid=AL!4422!3!536452728638!e!!g!!amazon%20s3!11204620052!112938567994) ou [ADLS Gen2](https://learn.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction). Vous pouvez suspendre et restaurer votre projet d'analyses à tout moment et payer uniquement pour les heures que vous utilisez.

:::note
Si AI Unlimited a déjà été installé et configuré par une personne de votre organisation, vous pouvez accéder directement à [Explorer et analyser les données](../explore-and-analyze-data) pour commencer.
:::


## Inclus dans AI Unlimited

- Un moteur AI/ML que vous déployez sur AWS ou Azure
- Le gestionnaire AI Unlimited, qui orchestre le déploiement du moteur et comprend une interface utilisateur Web pour la configuration
- Le [AI Unlimited Jupyter Kernel](https://downloads.teradata.com/download/tools/teradata-ai-unlimited-jupyter-kernel) pour gérer les projets dans les blocs-notes


## Prérequis

- Un compte AWS ou Azure à paiement à l'utilisation sur lequel provisionner des ressources de calcul. Consultez les exigences relatives à votre compte [AWS](../resources/aws-requirements.md) ou [Azure](../resources/azure-requirements.md).
- Un compte [GitHub](https://github.com) ou [GitLab](https://gitlab.com) pour héberger chaque référentiel de projets afin d'authentifier les utilisateurs et de stocker les informations du projet.
- Votre stockage d'objets, où réside votre data lake Amazon ou ADLS Gen2.
- JupyterLab. Consultez [options d'installation](../resources/jupyterlab).

:::tip
Lorsque vous installez le [gestionnaire](../glossary.md#ai-unlimited-manager), vous devez fournir les détails nécessaires à son déploiement dans le cloud. Consultez les [détails AWS](../install-ai-unlimited/prod-aws-console-deploy-ai-unlimited.md) ou les [détails d'Azure](../install-ai-unlimited/prod-azure-portal-deploy-manager.md)si vous souhaitez travailler avec un administrateur cloud pour les obtenir à l'avance.
:::

:::note
Avec AI Unlimited, vous pouvez collaborer sur des projets avec d'autres utilisateurs. 

Si vous préférez une approche plus simple et mono-utilisateur, essayez le [Guide de démarrage rapide](../resources/quickstart) qui exécute le gestionnaire et JupyterLab dans des conteneurs Docker sur votre ordinateur.
:::


## S'abonner

Abonnez-vous à AI Unlimited sur [AWS Marketplace](http://aws.amazon.com/marketplace/pp/prodview-2srvuo3mwqlig) ou [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/teradata.ai-unlimited?tab=Overview).

**Pour Azure uniquement** : avant de sélectionner **Obtenez-le maintenant**, procédez comme suit :
1. Lisez le [Contrat de licence](https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RW1lQlq).
2. Open a terminal window and run this command.
    ``` bash
    az vm image terms accept --publisher teradata --offer ai-unlimited-vm --plan ai-unlimited-image
	```

Pour AWS ou Azure, après vous être abonné, revenez sur ce site de documentation et continuez avec **Étape suivante**.


## Étape suivante

Vous êtes maintenant prêt à installer AI Unlimited sur [AWS](deploy-manager-aws-console) ou [Azure](deploy-manager-azure-portal).









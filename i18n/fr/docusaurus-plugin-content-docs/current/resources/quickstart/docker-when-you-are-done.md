---
id: docker-when-you're-done
title: Guide de démarrage rapide | Lorsque vous avez terminé
description: Découvrez ce qu'il faut faire lorsque vous avez terminé d'utiliser le Guide de démarrage rapide.
sidebar_label: Lorsque vous avez terminé
sidebar_position: 7
pagination_prev: null
pagination_next: null
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Lorsque vous avez terminé

Pour éviter d'encourir des frais pour des ressources de moteur inutiles, [suspendez les projets](../../manage-ai-unlimited/suspend-and-restore-project.md) sur lesquels vous ne travaillez pas. Vous pouvez toujours les restaurer.

Si vous avez terminé le Guide de démarrage rapide et que vous souhaitez libérer des ressources sur votre ordinateur, exécutez cette commande pour arrêter et supprimer tous les conteneurs et réseaux créés.

<Tabs>
<TabItem value="aws" label="AWS">
  ```bash 
docker-compose -f ai-unlimited.yaml -f aws-credentials-env-vars.yaml -f jupyter.yaml down
  ```
</TabItem>

<TabItem value="azure" label="Azure">
 ```bash
docker-compose -f ai-unlimited.yaml -f azure-credentials-env-vars.yaml -f jupyter.yaml down
  ```
</TabItem>
</Tabs> 

Vous pouvez également supprimer tout répertoire ou fichier local contenant des données de moteur que vous avez monté sur les conteneurs Docker. 


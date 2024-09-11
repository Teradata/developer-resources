---
id: create-first-project
title: Créez votre premier projet
description: Exécutez un flux de travail simple à partir d'un bloc-notes Jupyter.
sidebar_label: Créez votre premier projet
sidebar_position: 2
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Créez votre premier projet

Un projet est un moyen d'explorer et d'analyser les données à partir d'un bloc-notes Jupyter. 

:::note
Chaque projet dispose d'un référentiel Git. [Découvrez pourquoi](../glossary.md#project-repository).
:::

Pour votre premier projet, en utilisant les données que nous fournissons, vous réaliserez ce flux de travail simple :

- Créer le projet
- Déployer le moteur
- Se connecter aux données et exécuter une charge de travail
- Suspendre le moteur


## Avant de commencer

- Votre administrateur AI Unlimited est la personne de votre organisation qui a configuré AI Unlimited. Obtenez ces éléments auprès de votre administrateur :

  - L'adresse IP ou le nom d'hôte du [Gestionnaire AI Unlimited](../glossary.md#ai-unlimited-manager).

  - Ces variables d'environnement :   
    <Tabs>
    <TabItem value="aws" label="AWS" default>
    «&nbsp;AWS_ACCESS_KEY_ID&nbsp;», «&nbsp;AWS_SECRET_ACCESS_KEY&nbsp;» et «&nbsp;AWS_SESSION_TOKEN&nbsp;»

    </TabItem>
    <TabItem value="azure" label="Azure">
    «&nbsp;ARM_SUBSCRIPTION_ID&nbsp;», «&nbsp;ARM_CLIENT_ID&nbsp;» et «&nbsp;ARM_CLIENT_SECRET&nbsp;»

    </TabItem>
    </Tabs> 

- À partir de votre profil, [obtenez votre clé API](./get-api-key.md).

- Pour exécuter l'exemple de charge de travail, vous aurez besoin du fichier `salescenter.csv`. Téléchargez-le à partir du [référentiel GitHub d'AI Unlimited](https://github.com/Teradata/ai-unlimited/tree/develop/examples/GetStarted/data) et chargez-le dans votre emplacement Amazon Simple Storage Service (S3) ou Azure Blob Storage. Ou si vous utilisez votre propre fichier, modifiez l'exemple en conséquence.


## Connectez-vous et exécutez votre première charge de travail

:::tip
Exécutez `%help` pour obtenir des détails sur toutes les commandes magiques disponibles dans votre bloc-notes. Exécutez `%help <command>` pour obtenir des détails sur l'une d'entre elles. 

Ou apprenez-en plus sur les [commandes magiques](./magic-commands.md) spécifiques à AI Unlimited. 
:::

1. Connectez-vous à JupyterLab, ouvrez un bloc-notes et sélectionnez le noyau AI Unlimited.

2. Connectez-vous au gestionnaire.
    ```bash
    %workspaces_config host=<ip_or_hostname>, apikey=<API_Key>, withtls=T 	
    ```

3. Créez le projet.
    ```bash
    %project_create project=<Project_Name>, env=<Cloud_Service_Provider>
    ```

4. Créez une autorisation de stockage d'objets pour stocker les identifiants du fournisseur de services cloud. 

    Remplacez `ACCESS_KEY_ID`, `SECRET_ACCESS_KEY`et `REGION` par vos valeurs.

    ```bash
    %project_auth_create name=<Authorization_Name>, project=<Project_Name>, key=<ACCESS_KEY_ID>, secret=<SECRET_ACCESS_KEY>, region=<REGION>
    ```

5. Déployez le moteur.

    La taille peut être petite, moyenne, grande ou très grande. La taille par défaut est petite. Reportez-vous aux informations de tarification [AWS](http://aws.amazon.com/marketplace/pp/prodview-2srvuo3mwqlig) ou [Azure](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/teradata.ai-unlimited?tab=Overview).
    ```bash
    %project_engine_deploy name=<Project_Name>, size=<Size_of_Engine>
    ```
    Le processus de déploiement prend quelques minutes. Il génère un mot de passe.

6. Connectez-vous au projet.
    ```bash
    %connect <Project_Name>
    ```
    Une fois la connexion établie, fournissez le mot de passe généré.

7. Exécutez l'exemple de charge de travail.

    :::note
    Assurez-vous que vous n'avez pas de tables nommées SalesCenter ou SalesDemo dans la base de données sélectionnée. Remplacez les valeurs `Authorization_Name` et `salescenter.csv_file_location` dans l'exemple suivant par vos propres valeurs.
    ::: :

    a. Créez une table pour stocker les données du centre de ventes. 
    ```sql
    DROP FOREIGN TABLE SalesCenter;

    CREATE MULTISET FOREIGN TABLE SalesCenter ,
    EXTERNAL SECURITY DEFINER TRUSTED <Authorization_Name>
    (
        Sales_Center_id INTEGER NOT NULL,
        Sales_Center_Name VARCHAR(255) CHARACTER SET LATIN NOT CASESPECIFIC
    )
    USING
    (
        LOCATION ('<salescenter.csv_file_location>')
        MANIFEST ('FALSE')
        ROWFORMAT  ('{"field_delimiter":",","record_delimiter":"\n","character_set":"LATIN"}')
        STOREDAS ('TEXTFILE')
        HEADER ('TRUE')
        STRIP_EXTERIOR_SPACES ('FALSE')
        STRIP_ENCLOSING_CHAR ('NONE')
    )
    NO PRIMARY INDEX;

    ```
     b. Vérifiez que les données ont été insérées.
    ```sql
    SELECT * FROM SalesCenter ORDER BY 1
    ```
    c. Créez une table avec les données de démonstration des ventes.
    ```sql
    DROP FOREIGN TABLE SalesDemo;
    CREATE MULTISET FOREIGN TABLE SalesDemo ,
    EXTERNAL SECURITY DEFINER TRUSTED <Authorization_Name>
    (
        Sales_Center_ID INTEGER NOT NULL,
        UNITS DECIMAL(15,4),
        SALES DECIMAL(15,2),
        "COST" DECIMAL(15,2)
    )
   USING
   (
       LOCATION ('<salescenter.csv_file_location>')
       MANIFEST ('FALSE')
       ROWFORMAT  ('{"field_delimiter":",","record_delimiter":"\n","character_set":"LATIN"}')
       STOREDAS ('TEXTFILE')
       HEADER ('FALSE')
       STRIP_EXTERIOR_SPACES ('FALSE')
       STRIP_ENCLOSING_CHAR ('"')
   )
   NO PRIMARY INDEX;
    ```
    d. Vérifiez que les données de démonstration des ventes ont été insérées.

    ```sql
    SELECT * FROM SalesDemo ORDER BY sales
    ```
    Ouvrez le navigateur de votre connexion et vérifiez que les tables ont été créées. Effectuez un comptage de lignes sur les tables pour vérifier que les données ont été chargées.

    e. Représentez les données sous forme de graphique pour visualiser le résultat.

    Fournissez les axes X et Y pour votre graphique.

    ```bash
    %chart sales_center_name, sales, title=Sales Data
    ```
    f. Supprimez les tables.
    ```sql
    DROP TABLE SalesCenter;
    DROP TABLE SalesDemo;
    ```

8. Sauvegardez les métadonnées de votre projet et les définitions d'objets (le schéma) dans votre référentiel Git.
	```bash
	%project_backup project=<Project_Name>
	```
   Cela sauvegarde votre projet, mais ne suspend pas le moteur.
   
9. Suspendez le moteur pour éviter de payer pour des ressources moteur inutiles.
    ```bash
    %project_engine_suspend project=<Project_Name>
    ```
   Cela sauvegarde votre projet et suspend le moteur. En général, vous n'utiliserez pas `%project_backup` immédiatement suivi de `%project_engine_suspend`.

Félicitations ! Vous avez exécuté votre première charge de travail.
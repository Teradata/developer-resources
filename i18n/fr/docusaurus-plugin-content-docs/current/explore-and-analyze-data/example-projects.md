---
id: use-cases
title: Exemples de cas d'utilisation
description: Voici quelques-unes des charges de travail que vous pouvez exécuter à l'aide d'AI Unlimited.
sidebar_position: 4
sidebar_label: Exemples de cas d'utilisation
pagination_prev: null
pagination_next: null
---

# Exemples de cas d'utilisation

Découvrez certaines des façons dont vous pouvez expérimenter les analyses AI/ML sur de grands ensembles de données, avant de les mettre à l'échelle, d'appliquer les résultats à d'autres cas d'utilisation ou d'exploiter vos modèles.

:::tip

Pour obtenir de l'aide sur ces cas d'utilisation, envoyez un e-mail à l'<a href="mailto:aiunlimited.support@Teradata.com">équipe d'assistance</a> ou demandez à la [communauté](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa).
:::


## Avant de commencer 

- Utilisez le [carnet d'administration de projets](https://github.com/Teradata/ai-unlimited-demos/blob/main/Notebooks/Project%20Administration.ipynb) pour préparer votre projet.

- Utilisez votre catalogue AWS Glue existant et chargez nos [exemples de données](https://github.com/Teradata/ai-unlimited-demos/tree/main/UseCases/Data). Ou créez un catalogue pour utiliser les exemples Open Table Format (OTF) fournis.


## Comprendre le parcours client

Les clients interagissent avec les institutions financières par le biais de divers points de contact marketing, notamment les sites Web, les interactions en succursale avec les employés, les e-mails et les centres d'appels. 

Comprendre le parcours client global est essentiel pour l'améliorer et augmenter l'acquisition et l'adoption des clients.

Après avoir accédé aux données et les avoir inspectées, vous utiliserez la modélisation d'attribution, l'analyse des canaux et le cheminement pour comprendre le comportement du client au fil du temps.

[Essayez](https://github.com/Teradata/ai-unlimited-demos/blob/main/UseCases/Financial_Customer_Journey_SQL.ipynb) (SQL)

[Essayez](https://github.com/Teradata/ai-unlimited-demos/blob/main/UseCases/Financial_Customer_Journey_SQL_Python.ipynb) (SQL-Python)


## Segmenter les clients en fonction des achats passés

L'historique des achats peut être un facteur puissant pour segmenter les clients. Par exemple, vous pouvez créer des segments en fonction du volume et de la valeur des achats.

Après avoir préparé les données, vous utiliserez le partitionnement en k-moyennes et les pipelines de préparation des données pour déterminer les segments de clientèle.

[Essayez](https://github.com/Teradata/ai-unlimited-demos/blob/main/UseCases/Native_Data_Prep_Transformation_Pipelines-SQL.ipynb) (SQL)

[Essayez](https://github.com/Teradata/ai-unlimited-demos/blob/main/UseCases/Native_Data_Prep_Transformation_Pipelines-SQL_Python.ipynb) (SQL-Python)


## Trouvez le nombre idéal de segments de clientèle

En ciblant le nombre idéal de segments de clientèle, vous bénéficiez d'une segmentation sans avoir trop de segments à gérer. Vous pouvez déterminer le nombre idéal de segments à partir des commentaires de l'historique d'achat des clients.

Après avoir accédé aux données et les avoir inspectées, vous utiliserez un grand modèle de langage (LLM) pour créer une table vectorielle, puis trouverez le modèle de k-moyennes idéal et le nombre de segments.

[Essayez](https://github.com/Teradata/ai-unlimited-demos/blob/main/UseCases/Segmentation_With_Vector_Embedding-SQL.ipynb) (SQL)

[Essayez](https://github.com/Teradata/ai-unlimited-demos/blob/main/UseCases/Segmentation_With_Vector_Embedding-SQL_Python.ipynb) (SQL-Python)


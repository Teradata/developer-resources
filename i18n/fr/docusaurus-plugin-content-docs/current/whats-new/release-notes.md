---
id: release-notes
title: Notes de publication
description: Découvrez les détails sur le lancement initial de la préversion publique payante.
sidebar_label: Notes de publication
sidebar_position: 8
pagination_prev: null
pagination_next: null
---

# Notes de publication

Alors que nous continuons d'améliorer AI Unlimited, tenez compte des fonctionnalités actuellement non prises en charge et des problèmes connus. 

Pour les dernières fonctionnalités et mises à jour, gardez un œil sur [Nouveautés](./index.md).


## Préversion publique payante (lancement) - mai 2024

### Non pris en charge

- Mise à jour et suppression avec des prédicats pour les requêtes Open Table Format (OTF)
  
- Fonctions Unbounded Array Framework (UAF) dans SQL et teradataml
  
- Ces fonctions teradataml :
  - automl 
  - openml  
  - map_row 
  - map_partition

- Fonction définie par l'utilisateur (UDF) API_Request

- Vantage Analytics Library (VAL)

### Problèmes connus

- Le premier appel des fonctions définies par l'utilisateur Java (UDF) échoue avec cette erreur : `Failure 7583 The secure mode processes had a set up error`.

- teradataml
  - Les fonctions Unbounded Array Framework (UAF) ne peuvent pas s'exécuter si le nom de la base de données comporte des caractères spéciaux, tels qu'un trait d'union (-). 
  - Certaines fonctions SQLE et UAF ne s'exécutent pas en raison de problèmes liés à la création de tables volatiles. Le framework crée une table volatile si l'argument keyword `Volatile` est défini sur Vrai. Cependant, les tables volatiles ne peuvent pas être créées sur d'autres schémas.
  - H2OPredict : un cas pour le type de modèle DAI a échoué avec l'erreur : `H2OPredict failed in contract: 'license' column is missing from model input table. This column is required to score driverless AI models.`
  - ONNXPredict a échoué avec l'erreur : `E teradatasql.OperationalError: [Version 20.0.0.12] [Session 2078] [Teradata Database] [Error 7825] in UDF/XSP/UDM mldb.ONNXPredict: SQLSTATE [38U01] ONNXPredict failed with error:no onnxruntime in java.library.path: [/usr/pde/lib, /usr/tdbms/lib]`
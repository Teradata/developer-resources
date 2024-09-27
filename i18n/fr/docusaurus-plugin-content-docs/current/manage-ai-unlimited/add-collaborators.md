---
id: add-collaborators
title: Ajouter des collaborateurs
description: Découvrez comment ajouter des collaborateurs à un projet.
sidebar_label: Ajouter des collaborateurs au projet
sidebar_position: 1
pagination_prev: null
pagination_next: null
---

# Ajouter des collaborateurs au projet

Si vous créez un projet, vous en êtes le propriétaire. Si vous êtes le propriétaire du projet, vous pouvez ajouter des collaborateurs au projet. 

Les étapes varient selon que vous effectuez cette opération avant ou après le déploiement du moteur.


## Avant le déploiement du moteur

1. Dans GitHub ou GitLab, ajoutez des utilisateurs au référentiel du projet.<br/>
Consultez les détails sur l'ajout d'utilisateurs de référentiel pour [GitHub](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository) ou [GitLab](https://docs.gitlab.com/ee/user/project/members/#add-users-to-a-project).

2. Lorsque vous déployez le moteur à partir de votre bloc-notes Jupyter, les utilisateurs sont automatiquement ajoutés au moteur.


## Après le déploiement du moteur

1. Dans GitHub ou GitLab, ajoutez des utilisateurs au référentiel du projet.<br/>
Consultez les détails sur l'ajout d'utilisateurs de référentiel pour [GitHub](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository) ou [GitLab](https://docs.gitlab.com/ee/user/project/members/#add-users-to-a-project).
2. Dans votre bloc-notes Jupyter, exécutez la commande magique `%project_engine_update_users` pour ajouter les utilisateurs au moteur.


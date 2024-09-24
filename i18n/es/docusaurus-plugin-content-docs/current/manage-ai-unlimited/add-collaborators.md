---
id: add-collaborators
title: Agregar colaboradores
description: Aprenda cómo agregar colaboradores a un proyecto.
sidebar_label: Agregar colaboradores al proyecto
sidebar_position: 1
pagination_prev: null
pagination_next: null
---

# Agregar colaboradores al proyecto

Si crea un proyecto, será el propietario del mismo. Si es el propietario del proyecto, podrá agregar colaboradores al proyecto. 

Los pasos dependen de si esto se hace antes o después de implementar el motor.


## Antes de que se implemente el motor

1. En GitHub o GitLab, agregue usuarios al repositorio del proyecto.<br/>
Consulte los detalles sobre cómo agregar usuarios del repositorio para [GitHub](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository) o [GitLab](https://docs.gitlab.com/ee/user/project/members/#add-users-to-a-project).

2. Cuando implementa el motor desde su cuaderno Jupyter, los usuarios se agregan al motor automáticamente.


## Después de que se implemente el motor

1. En GitHub o GitLab, agregue usuarios al repositorio del proyecto.<br/>
Consulte los detalles sobre cómo agregar usuarios del repositorio para [GitHub](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository) o [GitLab](https://docs.gitlab.com/ee/user/project/members/#add-users-to-a-project).
2. En su cuaderno Jupyter, ejecute el comando mágico `%project_engine_update_users` para agregar los usuarios al motor.


---
id: add-collaborators
title: Mitarbeiter hinzufügen
description: Erfahren Sie, wie Sie Mitarbeiter zu einem Projekt hinzufügen.
sidebar_label: Projektmitarbeiter hinzufügen
sidebar_position: 1
pagination_prev: null
pagination_next: null
---

# Projektmitarbeiter hinzufügen

Wenn Sie ein Projekt erstellen, sind Sie der Projektbesitzer. Als Projektbesitzer können Sie Mitarbeiter zum Projekt hinzufügen. 

Die Schritte hängen davon ab, ob Sie dies vor oder nach der Bereitstellung der Engine tun.


## Vor dem Einsatz der Engine

1. Fügen Sie in GitHub oder GitLab Benutzer zum Projekt-Repository hinzu.<br/>
Siehe Details zum Hinzufügen von Repo-Benutzern für [GitHub](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository) oder [GitLab](https://docs.gitlab.com/ee/user/project/members/#add-users-to-a-project).

2. Wenn Sie die Engine von Ihrem Jupyter-Notebook aus bereitstellen, werden die Benutzer automatisch zur Engine hinzugefügt.


## Nach dem Ausfahren des Motors

1. Fügen Sie in GitHub oder GitLab Benutzer zum Projekt-Repository hinzu.<br/>
Siehe Details zum Hinzufügen von Repo-Benutzern für [GitHub](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository) oder [GitLab](https://docs.gitlab.com/ee/user/project/members/#add-users-to-a-project).
2. Führen Sie in Ihrem Jupyter-Notebook den magischen Befehl `%project_engine_update_users` aus, um die Benutzer zur Engine hinzuzufügen.


---
id: create-oauth-app
title: Erstellen einer OAuth-App
description: Dadurch kann AI Unlimited die Authentifizierung Ihres Git-Anbieters zur Verwaltung von Projekt-Repositorys verwenden.
sidebar_label: Erstellen einer OAuth-App
sidebar_position: 4
pagination_prev: null
pagination_next: null
---

# Erstellen einer GitHub- oder GitLab-OAuth-App

Mithilfe einer OAuth-App kann ein Benutzer Zugriff auf sein Konto auf einer Website oder einem Dienst auf sein Konto auf einer anderen Website oder einem anderen Dienst gewähren, ohne sein Passwort preiszugeben.

Erstellen Sie eine [OAuth](https://oauth.net/2/)-App, damit AI Unlimited die GitHub- oder GitLab-Authentifizierung zum Verwalten von allen [Projekt-Repository](../glossary.md#project-repository) verwenden kann und bei jeder Bereitstellung der Engine die Engine-Benutzer von den Mitarbeitern ableiten kann, die Sie zum Repository hinzugefügt haben.

1. Melden Sie sich bei Ihrem GitHub- oder GitLab-Konto an. 

2. Erstellen Sie eine OAuth-App. Siehe [GitHub: Erstellen einer OAuth-App](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app) oder [GitLab: Erstellen einer OAuth-App](https://docs.gitlab.com/ee/integration/oauth_provider.html).
  
    Verwenden Sie beim Registrieren der OAuth-App diese URLs.

    - Homepage-URL: `http://[ip_or_hostname]:[port]`<br/>
      :::note
      Dies ist die Manager-URL, die Sie am Ende des Installationsvorgangs erhalten haben.
      :::

    - Autorisierungs-Rückruf-URL: `[Homepage URL]/auth/github/callback`
    
    Wählen Sie für GitLab die entsprechenden OAuth-**Bereiche** aus, wie unter [Autorisierte Anwendungen](https://docs.gitlab.com/ee/integration/oauth_provider.html#view-all-authorized-applications) definiert.

3\. Kopieren und behalten Sie die **Client-ID** und den **geheimen Clientschlüssel**, die Sie zum Einrichten von AI Unlimited benötigen. 

Jetzt sind Sie bereit für [die Einrichtung von AI Unlimited](../install-ai-unlimited/setup-ai-unlimited.md).



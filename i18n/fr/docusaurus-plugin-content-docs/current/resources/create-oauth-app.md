---
id: create-oauth-app
title: Créer une application OAuth
description: Cela permettra à AI Unlimited d'utiliser l'authentification de votre fournisseur Git pour gérer les référentiels de projets.
sidebar_label: Créer une application OAuth
sidebar_position: 4
pagination_prev: null
pagination_next: null
---

# Créer une application OAuth GitHub ou GitLab

Une application OAuth permet à un utilisateur d'accorder l'accès à son compte sur un site Web ou un service à son compte sur un autre, sans partager son mot de passe.

Créez une application [OAuth](https://oauth.net/2/) afin qu'AI Unlimited puisse utiliser l'authentification GitHub ou GitLab pour gérer chaque [référentiel de projets](../glossary.md#project-repository) et, chaque fois que le moteur est déployé, déterminer les utilisateurs du moteur des collaborateurs que vous avez ajoutés au référentiel.

1. Connectez-vous à votre compte GitHub ou GitLab. 

2. Créez une application OAuth. Consultez [GitHub : créer une application OAuth](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app) ou [GitLab : créer une application OAuth](https://docs.gitlab.com/ee/integration/oauth_provider.html).
  
    Lors de l'enregistrement de l'application OAuth, utilisez ces URL.

    - URL de la page d'accueil : `http://[ip_or_hostname]:[port]`<br/>
      :::note
      Il s'agit de l'URL du gestionnaire que vous avez reçue à la fin du processus d'installation.
      :::

    - URL de rappel d'autorisation : `[Homepage URL]/auth/github/callback`
    
    Pour GitLab, sélectionnez l'option **Portées** OAuth appropriée telle que définie dans les [Applications autorisées](https://docs.gitlab.com/ee/integration/oauth_provider.html#view-all-authorized-applications).

3\. Copiez et conservez l'**ID de client** et le **Secret client**, dont vous aurez besoin pour configurer AI Unlimited. 

Vous êtes maintenant prêt à [configurer AI Unlimited](../install-ai-unlimited/setup-ai-unlimited.md).



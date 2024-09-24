---
id: faq
title: FAQ
description: Trouvez ici des réponses à vos questions sur AI Unlimited.
sidebar_label: FAQ
sidebar_position: 6
pagination_prev: null
pagination_next: null
---

# FAQ


## Général

### Quels fournisseurs de services cloud (CSP) sont pris en charge par AI Unlimited ?
Actuellement, AWS et Azure.

### Quelles fonctions d'analyses puis-je utiliser ?
Fonctions[ClearScape Analytics™](https://docs.teradata.com/access/sources/dita/topic?dita:mapPath=phg1621910019905.ditamap&dita:ditavalPath=pny1626732985837.ditaval&dita:topicPath=gma1702668333653.dita). Consultez les [notes de publication](./whats-new/release-notes.md) pour connaître les fonctions qui ne sont pas actuellement prises en charge.

### Comment payer pour AI Unlimited ?
Vous payez votre fournisseur de services cloud pour les heures d'exécution des ressources du moteur AI/ML. Les frais dépendent de la taille et du nombre d'instances.

### Si j'obtiens des erreurs ou si j'ai des problèmes que je ne parviens pas à résoudre, que dois-je faire ?
Envoyez un e-mail à l'<a href="mailto:aiunlimited.support@Teradata.com">équipe d'assistance </a>. De plus, la [communauté AI Unlimited](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa) est prête à vous aider. Allez-y pour poser des questions, obtenir des conseils de dépannage et partager des idées.


## Projets

### Qu'est-ce qu'un projet ?
Un projet est un moyen d'explorer et d'analyser les données à partir d'un bloc-notes Jupyter. Chaque projet dispose d'un référentiel dans votre compte GitHub ou GitLab.

### Comment utiliser un projet ?
Dans un bloc-notes Jupyter, vous créez un projet, qui crée automatiquement son référentiel Git. Ensuite, vous autorisez l'accès à votre banque de données, déployez le moteur AI/ML du projet et exécutez des charges de travail d'analyse. Vous pouvez suspendre le projet (et le moteur) à tout moment, puis le restaurer, pour ne payer que les heures dont vous avez besoin.

### À quoi sert ma clé API ?
Vous utilisez votre clé API pour connecter votre bloc-notes Jupyter au gestionnaire AI Unlimited. C'est la première chose que vous faites lorsque vous ouvrez un nouveau bloc-notes pour créer un projet ou y accéder.

### Que contient le référentiel d'un projet ?
Le propriétaire du projet (l'utilisateur qui a créé le projet) ajoute des collaborateurs au projet dans le référentiel Git. À partir de là, chaque fois que le moteur est déployé, AI Unlimited détermine les utilisateurs autorisés à se connecter au moteur et à l'utiliser. 

Mais, si le moteur est déjà déployé, le propriétaire du projet doit mettre à jour le moteur pour ajouter ces utilisateurs afin qu'ils puissent se connecter et utiliser le moteur pendant ce déploiement.

:::note
Chaque fois que le moteur est déployé, un nouveau mot de passe est généré pour chaque utilisateur du projet.
:::

Chaque fois que vous, ou un autre utilisateur, suspendez un projet, son schéma est sauvegardé dans le référentiel. AI Unlimited utilise le schéma stocké pour réactiver le projet lorsqu'il est restauré.


## Utilisateurs

### Quels sont les types d'utilisateurs d'AI Unlimited ?
Administrateurs, propriétaires de projets et collaborateurs :
- L'administrateur est l'utilisateur qui configure AI Unlimited pour votre organisation. 
- L'utilisateur qui crée un projet est le propriétaire du projet. 
- Les utilisateurs supplémentaires d'un projet sont des collaborateurs.

### Je suis administrateur. Après la configuration initiale, puis-je revenir en arrière et modifier les paramètres ?
Oui, reconnectez-vous à la configuration et apportez les modifications nécessaires.


### Un administrateur peut-il ajouter d'autres administrateurs ?
Non, AI Unlimited prend en charge un seul administrateur.

### Je suis propriétaire d'un projet. Comment ajouter des collaborateurs à un projet ?
Tout d'abord, ajoutez-les au référentiel Git du projet. 

Si vous faites cela avant le déploiement du moteur, lorsque vous déployez le moteur, les nouveaux collaborateurs y sont ajoutés automatiquement. 

Si vous ajoutez des collaborateurs au référentiel après le déploiement du moteur, vous devrez les ajouter manuellement au moteur afin qu'ils puissent se connecter et utiliser le moteur pendant ce déploiement.


## Suspension et restauration 

### Que se passe-t-il lorsque je suspends un projet ?
Toutes les informations du projet, y compris les autorisations des utilisateurs et du stockage d'objets ainsi que les objets de données, sont enregistrées.

### Que se passe-t-il lorsque je restaure un projet ?
Les informations du projet sauvegardées sont là. Vous pouvez reprendre là où vous vous êtes arrêté.


## Le gestionnaire

### Qu'est-ce que le gestionnaire ?
Le gestionnaire est le composant AI Unlimited qui orchestre le déploiement du moteur AI/ML sur votre fournisseur de services cloud. 

Il fournit également une interface utilisateur Web à partir de laquelle l'administrateur AI Unlimited configure AI Unlimited après l'avoir installé et modifie les paramètres ultérieurement selon les besoins. 

À partir de leur profil utilisateur dans le gestionnaire, tous les utilisateurs obtiennent leur clé API pour connecter un bloc-notes Jupyter au gestionnaire.

:::tip
Votre question ne s'affiche pas ? Posez-la dans la [communauté](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa)
:::




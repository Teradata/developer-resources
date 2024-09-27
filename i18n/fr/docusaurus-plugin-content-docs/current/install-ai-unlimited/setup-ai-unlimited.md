---
id: setup-ai-unlimited
title: Configurer AI Unlimited
description: Découvrez les détails de configuration.
sidebar_label: Configurer AI Unlimited
sidebar_position: 3
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configurer AI Unlimited

Après avoir installé le [gestionnaire](../glossary.md#ai-unlimited-manager), accédez à la configuration d'AI Unlimited en utilisant l'URL que vous avez reçue à la fin du processus d'installation : `http://[ip_or_hostname]:[port]`. 

:::note
En configurant AI Unlimited, vous devenez l'administrateur AI Unlimited de votre organisation.
:::

:::tip
Pour obtenir de l'aide sur la configuration, envoyez un e-mail à l'<a href="mailto:aiunlimited.support@Teradata.com">équipe d'assistance</a> ou demandez à la [communauté](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa).
:::

<a id="setup-fields"></a>	
## Remplir les champs

Retrouvez ici des informations sur chaque groupe de champs.

<details>

<summary>Configuration de base</summary>

<br />

**URL de base d'AI Unlimited**&nbsp;: l'URL que vous avez utilisée pour accéder à la configuration. Vous l'avez reçue lors de l'installation du gestionnaire.


**Fournisseur Git**—GitHub ou GitLab.

**Niveau de journal AI Unlimited**&nbsp;: le niveau de détail à voir dans les journaux AI Unlimited.

**Type de réseau IP du moteur**

Sélectionnez **Privé** si vous déployez le moteur dans le même cloud privé virtuel qu'AI Unlimited.

**Public** ou **Privé** fait référence à la manière dont AI Unlimited doit communiquer avec le moteur. Celui-ci peut avoir une adresse IP publique, une adresse IP privée ou les deux. Indiquez le type d'adresse IP à laquelle AI Unlimited doit se connecter.

**Utiliser TLS**

Nous vous recommandons d'utiliser [Transport Layer Security (TLS)](../glossary.md#transport-layer-security) pour sécuriser les connexions à AI Unlimited et protéger vos données en transit.

- Si vous utilisez un [application load balancer (ALB)](../glossary.md#application-load-balancer), avec la terminaison de certification activée, sélectionnez **Faux**.

- Si vous utilisez un [network load balancer (NLB)](../glossary.md#network-load-balancer) ou aucun équilibreur de charge, sélectionnez **Vrai**
..
	- **Certificat TLS AI Unlimited** et **Clé de certificat TLS AI Unlimited**&nbsp;: si vous disposez d'un certificat émis par une autorité de certification (CA) de confiance, vous pouvez le fournir ainsi que sa clé. Vous serez responsable de la gestion du cycle de vie du certificat, y compris du renouvellement et de la validation. Si vous avez des exigences spécifiques ou si vous avez besoin de plus de contrôle sur vos certificats, apporter le vôtre est une bonne option.

	- Ou sélectionnez **Générer des certificats** pour utiliser un certificat généré par le système Teradata. Il se renouvelle automatiquement avant d'expirer.

Sélectionnez **Mettre à jour**.

</details>


<details>

<summary>Intégration cloud</summary>
<br />
Certains de ces champs sont des valeurs par défaut. Plus tard, lorsque vous déploierez le moteur à partir d'un bloc-notes Jupyter, vous pourrez spécifier des valeurs différentes des valeurs par défaut pour ce déploiement.

<Tabs>
<TabItem value="aws1" label="AWS">
<br />
**Région par défaut**: la région AWS dans laquelle déployer le moteur. Nous vous recommandons de choisir la région la plus proche de votre data lake.

**Sous-réseau par défaut**: le [sous-réseau AWS](https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html) sur lequel déployer le moteur. La console AWS affiche les sous-réseaux de la région.

**Rôle IAM par défaut**

- Le rôle IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create.html)[pour le moteur. Laissez ce champ vide pour permettre à AI Unlimited de créer le rôle, si votre sécurité le permet. Sinon, créez un rôle à l'aide de cette stratégie&nbsp;: [ai-unlimited-engine.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json).
- Si AI Unlimited crée le rôle, il le crée pour le cluster AWS [](../glossary.md#cluster) qui déploie le moteur, chaque fois que vous déployez le moteur. Si votre organisation crée le rôle, elle doit prendre en charge tout cluster susceptible de déployer le moteur.
		
**Balises de ressources**&nbsp;: vous pouvez [baliser](https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html) les ressources AWS qui déploient le moteur pour les rendre plus faciles à gérer.

**Sécurité entrante**

Utilisez ces champs pour permettre au trafic source d'atteindre le moteur&nbsp;:
- **CIDR [par défaut](../glossary.md#classless-inter-domain-routing)**
- **ID de [groupe de sécurité](https://docs.aws.amazon.com/vpc/latest/userguide/working-with-security-groups.html) par défaut**&nbsp;: si vous déployez le moteur dans le même cloud privé virtuel qu'AI Unlimited, incluez le groupe de sécurité AI Unlimited dans ce champ pour garantir qu'AI Unlimited peut communiquer avec le moteur.
- **Nom de [liste de préfixes](https://docs.aws.amazon.com/vpc/latest/userguide/managed-prefix-lists.html) par défaut**

**Préfixe de rôle**&nbsp;: si AI Unlimited crée le rôle, ce préfixe est ajouté au nom du rôle.

**[Limite des autorisations](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html) ARN**&nbsp;: si vos entités IAM nécessitent une limite, vous pouvez en fournir une ici.   

Sélectionnez **Mettre à jour**.

</TabItem>

<TabItem value="azure" label="Azure"> 

<br />

**Région par défaut**&nbsp;: région Azure dans laquelle déployer le moteur. Nous vous recommandons de choisir la région la plus proche de votre data lake.

En savoir plus sur [Azure virtual networks](https://learn.microsoft.com/en-us/azure/virtual-network/concepts-and-best-practices).


**Groupe de ressources réseau par défaut**&nbsp;: le groupe de ressources qui contient le réseau.

**Réseau par défaut**&nbsp;: le réseau sur lequel déployer le moteur.

**Sous-réseau par défaut**&nbsp;: le sous-réseau sur lequel déployer le moteur.

**Coffre de clés par défaut**&nbsp;: le coffre de clés, utilisé par le moteur, dans lequel les informations sensibles telles que les mots de passe peuvent être stockées en toute sécurité.

**Groupe de ressources de coffre de clés par défaut**&nbsp;: le groupe de ressources qui contient le coffre de clés.

**Sécurité entrante**

Utilisez ces champs pour permettre au trafic source d'atteindre le moteur&nbsp;:

- **CIDR [par défaut](../glossary.md#classless-inter-domain-routing)**
 
- **Noms de [groupe de sécurité](https://learn.microsoft.com/en-us/azure/virtual-network/application-security-groups) par défaut**&nbsp;: si vous déployez le moteur dans le même cloud privé virtuel qu'AI Unlimited, incluez le groupe de sécurité d'application AI Unlimited dans ce champ pour garantir qu'AI Unlimited peut communiquer avec le moteur.

**Balises de ressources**&nbsp;: vous pouvez [baliser](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources) les ressources Azure qui déploient le moteur pour les rendre plus faciles à gérer.

Sélectionnez **Mettre à jour**.

</TabItem>
</Tabs>

</details>


<details>

<summary>Intégration Git</summary>

<Tabs>

<TabItem value="github" label="GitHub">

<br />

**URL de rappel GitHub**&nbsp;: après avoir authentifié un utilisateur, GitHub utilise cette URL pour rediriger vers le gestionnaire. Elle a été fournie à l'application OAuth [lors de sa création](../resources/create-oauth-app.md).

**URL de base GitHub**&nbsp;: l'URL de votre instance GitHub.

**ID de client GitHub** et **Secret client GitHub**&nbsp;: les identifiants reçues de GitHub lors de la création de votre [application OAuth](../resources/create-oauth-app.md).

**Accès de l'organisation**

Deux organisations de votre compte GitHub peuvent vous aider avec le contrôle d'accès et la gestion du référentiel&nbsp;:

- Les membres de l'**organisation d'autorisation** peuvent se connecter et s'authentifier dans AI Unlimited. Si vous ne spécifiez pas d'organisation, n'importe quel utilisateur de compte GitHub peut se connecter et s'authentifier.

- Les référentiels de projets sont créés dans l'**organisation de référentiel**. Si vous ne spécifiez pas d'organisation, les projets seront dans votre espace GitHub personnel.

Sélectionnez **Mettre à jour**.

Sélectionnez **Se connecter**. Ensuite, connectez-vous (si vous y êtes invité) et authentifiez-vous.

</TabItem>

<TabItem value="gitlab" label="GitLab">

<br />

**URL de rappel GitLab**&nbsp;: après avoir authentifié un utilisateur, GitLab utilise cette URL pour rediriger vers le gestionnaire. Elle a été fournie à l'application OAuth [lors de sa création](../resources/create-oauth-app.md).

**URL de base GitLab**&nbsp;: l'URL de votre instance GitLab.

**ID de client GitLab** et **Secret client GitLab**&nbsp;: les identifiants reçues de GitLab lors de la création de votre [application OAuth](../resources/create-oauth-app.md).

**Accès du groupe**

Deux groupes de votre compte GitLab peuvent vous aider avec le contrôle d'accès et la gestion du référentiel&nbsp;:

- Les membres du **groupe d'autorisation** peuvent se connecter et s'authentifier dans AI Unlimited. Si vous ne spécifiez pas de groupe, n'importe quel utilisateur de compte GitLab peut se connecter et s'authentifier.

- Tous les référentiels de projet sont créés dans le groupe **de référentiels **. Si vous ne spécifiez pas de groupe, les projets seront dans votre espace GitLab personnel.

Sélectionnez **Mettre à jour**.

Sélectionnez **Se connecter**. Ensuite, connectez-vous (si vous y êtes invité) et authentifiez-vous.

</TabItem>
</Tabs>

</details>


## Avant de partir

1. Sur votre **Profil**, copiez votre clé API.
    Vous l'utiliserez lorsque vous vous connecterez au moteur à partir d'un bloc-notes Jupyter.

2. Si vous avez activé TLS, sélectionnez **Redémarrer**. Cela redémarre le service AI Unlimited avec TLS en place.

Félicitations ! La configuration d'AI Unlimited est désormais terminée.


:::note
Parce que vous êtes l'administrateur d'AI Unlimited, vous pouvez revenir à la configuration à tout moment en cliquant sur [modifier tous les paramètres](../manage-ai-unlimited/change-settings.md). 
:::


## Étape suivante

Dans un bloc-notes Jupyter, démarrez [découverte et analyse des données](../explore-and-analyze-data/index.md).


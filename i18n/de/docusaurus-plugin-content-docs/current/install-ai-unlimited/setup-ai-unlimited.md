---
id: setup-ai-unlimited
title: AI Unlimited einrichten
description: Erfahren Sie mehr über die Einrichtungsdetails.
sidebar_label: AI Unlimited einrichten
sidebar_position: 3
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# AI Unlimited einrichten

Greifen Sie nach der Installation vom [Manager](../glossary.md#ai-unlimited-manager) über die URL, die Sie am Ende des Installationsvorgangs erhalten haben, auf das AI Unlimited-Setup zu: `http://[ip_or_hostname]:[port]`. 

:::note
Indem Sie AI Unlimited einrichten, werden Sie zum AI Unlimited-Administrator Ihrer Organisation.
:::

:::tip
Wenn Sie Hilfe bei der Einrichtung benötigen, senden Sie eine E-Mail an das <a href="mailto:aiunlimited.support@Teradata.com">Support-Team</a> oder fragen Sie die [Gemeinschaft](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa).
:::

<a id="setup-fields"></a>	
## Füllen Sie die Felder aus

Informationen zu den einzelnen Feldgruppen finden Sie hier.

<details>

<summary>Grundlegende Einrichtung</summary>

<br />

**AI Unlimited-Basis-URL** – Die URL, die Sie für den Zugriff auf das Setup verwendet haben. Sie haben sie bei der Installation des Managers erhalten.


**Git-Anbieter** – GitHub oder GitLab.

**AI Unlimited-Protokollebene** – Der Detaillierungsgrad, der in AI Unlimited-Protokollen angezeigt werden soll.

**Engine-IP-Netzwerktyp**

Wählen Sie **Privat**, wenn Sie die Engine in derselben Virtual Private Cloud wie AI Unlimited bereitstellen.

**Öffentlich** oder **Privat** bezieht sich darauf, wie AI Unlimited mit der Engine kommunizieren soll. Die Engine kann eine öffentliche IP-Adresse, eine private IP-Adresse oder beides haben. Geben Sie den Typ der IP-Adresse an, mit der AI Unlimited eine Verbindung herstellen soll.

**TLS verwenden**

Wir empfehlen Ihnen, [Transport Layer Security (TLS)](../glossary.md#transport-layer-security) zu verwenden, um Verbindungen zu AI Unlimited zu sichern und Ihre Daten während der Übertragung zu schützen.

- Wenn Sie einen [Application load balancer (ALB)](../glossary.md#application-load-balancer)mit aktivierter Zertifizierungsbeendigung verwenden, wählen Sie **False**aus.

- Wenn Sie einen [Network load balancer (NLB)](../glossary.md#network-load-balancer) oder keinen Lastausgleich verwenden, wählen Sie **True.**
..
	- **AI Unlimited TLS-Zertifikat** und **AI Unlimited TLS-Zertifikatschlüssel** – Wenn Sie ein von einer vertrauenswürdigen Zertifizierungsstelle (Certificate Authority, CA) ausgestelltes Zertifikat besitzen, können Sie dieses und seinen Schlüssel angeben. Sie sind für die Verwaltung des Zertifikatslebenszyklus, einschließlich Erneuerung und Validierung, verantwortlich. Wenn Sie spezielle Anforderungen haben oder mehr Kontrolle über Ihre Zertifikate benötigen, ist es eine gute Option, Ihr eigenes Zertifikat mitzubringen.

	- Oder wählen Sie **Zertifikate generieren**, um ein vom Teradata-System generiertes Zertifikat zu verwenden. Es wird vor Ablauf automatisch erneuert.

Wählen Sie **Aktualisieren**.

</details>


<details>

<summary>Cloud-Integration</summary>
<br />
Einige dieser Felder sind für Standardwerte vorgesehen. Wenn Sie die Engine später von einem Jupyter-Notebook aus bereitstellen, können Sie für diese Bereitstellung andere Werte als die Standardwerte angeben.

<Tabs>
<TabItem value="aws1" label="AWS">
<br />
**Standardregion** – Die AWS-Region, in der die Engine bereitgestellt werden soll. Wir empfehlen, die Region auszuwählen, die Ihrem Data Lake am nächsten liegt.

**Standardsubnetz** – Das [AWS-Subnetz](https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html), in dem die Engine bereitgestellt werden soll. Die AWS-Konsole zeigt die Subnetze in der Region an.

**Standard-IAM-Rolle**

- Die [IAM-Rolle](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create.html) für die Engine. Lassen Sie das Feld leer, damit AI Unlimited die Rolle erstellen kann – sofern Ihre Sicherheitsvorkehrungen dies zulassen. Andernfalls erstellen Sie eine Rolle mit dieser Richtlinie: [ai-unlimited-engine.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json).
- Wenn AI Unlimited die Rolle erstellt, wird sie für den AWS-[Cluster](../glossary.md#cluster) erstellt, der die Engine bereitstellt – jedes Mal, wenn Sie die Engine bereitstellen. Wenn Ihre Organisation die Rolle erstellt, muss sie für alle Cluster geeignet sein, die die Engine bereitstellen könnten.
		
**Ressourcen-Tags** – Sie können die AWS-Ressourcen, die die Engine bereitstellen, [mit Tags versehen](https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html), um ihre Verwaltung zu vereinfachen.

**Eingehende Sicherheit**

Verwenden Sie diese Felder, um dem Quellverkehr das Erreichen der Engine zu ermöglichen:
- **Standard [CIDRs](../glossary.md#classless-inter-domain-routing)**
- **Standardmäßige [Sicherheitsgruppen](https://docs.aws.amazon.com/vpc/latest/userguide/working-with-security-groups.html)-IDs** – Wenn Sie die Engine in derselben Virtual Private Cloud wie AI Unlimited bereitstellen, schließen Sie die AI Unlimited-Sicherheitsgruppe in dieses Feld ein, um sicherzustellen, dass AI Unlimited mit der Engine kommunizieren kann.
- **Standard [PrefixList](https://docs.aws.amazon.com/vpc/latest/userguide/managed-prefix-lists.html) Namen**

**Rollenpräfix** – Wenn AI Unlimited die Rolle erstellt, wird dieses Präfix dem Rollennamen hinzugefügt.

**[Berechtigungsgrenze](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html) ARN** – Wenn Ihre IAM-Entitäten eine Grenze erfordern, können Sie hier eine angeben.   

Wählen Sie **Aktualisieren**.

</TabItem>

<TabItem value="azure" label="Azure"> 

<br />

**Standardregion** – Die Azure-Region, in der die Engine bereitgestellt werden soll. Wir empfehlen, die Region auszuwählen, die Ihrem Data Lake am nächsten liegt.

Erfahren Sie mehr über [virtuelle Azure-Netzwerke](https://learn.microsoft.com/en-us/azure/virtual-network/concepts-and-best-practices).


**Standard-Netzwerkressourcengruppe** – Die Ressourcengruppe, die das Netzwerk enthält.

**Standardnetzwerk** – Das Netzwerk, in dem die Engine bereitgestellt werden soll.

**Standardsubnetz** – Das Subnetz, in dem die Engine bereitgestellt werden soll.

**Standard-Schlüsseltresor** – Der von der Engine verwendete Key Vault, in dem vertrauliche Informationen wie Passwörter sicher gespeichert werden können.

**Standard-Key Vault-Ressourcengruppe** – Die Ressourcengruppe, die den Key Vault enthält.

**Eingehende Sicherheit**

Verwenden Sie diese Felder, um dem Quellverkehr das Erreichen der Engine zu ermöglichen:

- **Standard [CIDRs](../glossary.md#classless-inter-domain-routing)**
 
- **Standardmäßige [Sicherheitsgruppen](https://learn.microsoft.com/en-us/azure/virtual-network/application-security-groups)-Namen** — Wenn Sie die Engine in derselben Virtual Private Cloud wie AI Unlimited bereitstellen, schließen Sie die Anwendungssicherheitsgruppe von AI Unlimited in dieses Feld ein, um sicherzustellen, dass AI Unlimited mit der Engine kommunizieren kann.

**Ressourcentags**: Sie können die Azure-Ressourcen, die die Engine bereitstellen, mit [Tags](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources) versehen, um ihre Verwaltung zu vereinfachen.

Wählen Sie **Aktualisieren**.

</TabItem>
</Tabs>

</details>


<details>

<summary>Git-Integration</summary>

<Tabs>

<TabItem value="github" label="GitHub">

<br />

**GitHub-Callback-URL** – Nach der Authentifizierung eines Benutzers verwendet GitHub diese URL, um zum Manager umzuleiten. Diese wurde der OAuth-App [bei ihrer Erstellung bereitgestellt](../resources/create-oauth-app.md).

**GitHub-Basis-URL** – Die URL für Ihre GitHub-Instanz.

**GitHub-Client-ID** und **GitHub-Client-Geheimnis** – Die Anmeldeinformationen, die von GitHub empfangen wurden, als Ihre [OAuth-App erstellt wurde](../resources/create-oauth-app.md).

**Organisationszugriff**

Zwei Organisationen in Ihrem GitHub-Konto können bei der Zugriffskontrolle und Repository-Verwaltung helfen:

- Mitglieder der **Autorisierenden Organisation** können sich bei AI Unlimited anmelden und authentifizieren. Wenn Sie keine Organisation angeben, kann sich jeder Benutzer eines GitHub-Kontos anmelden und authentifizieren.

- Projekt-Repositorys werden in der **Repository-Organisation** erstellt. Wenn Sie keine Organisation angeben, befinden sich die Projekte in Ihrem persönlichen GitHub-Bereich.

Wählen Sie **Aktualisieren**.

Wählen Sie **Anmelden**. Melden Sie sich dann an (falls Sie dazu aufgefordert werden) und authentifizieren Sie sich.

</TabItem>

<TabItem value="gitlab" label="GitLab">

<br />

**GitLab-Callback-URL** – Nach der Authentifizierung eines Benutzers verwendet GitLab diese URL, um zum Manager umzuleiten. Diese wurde der OAuth-App [bei ihrer Erstellung](../resources/create-oauth-app.md) bereitgestellt.

**GitLab-Basis-URL** – Die URL für Ihre GitLab-Instanz.

**GitLab-Client-ID** und **GitLab-Client-Geheimnis** – Die Anmeldeinformationen, die von GitLab erhalten wurden, als Ihre [OAuth-App erstellt wurde](../resources/create-oauth-app.md).

**Gruppenzugriff**

Zwei Gruppen in Ihrem GitLab-Konto können bei der Zugriffskontrolle und Repository-Verwaltung helfen:

- Mitglieder der **Autorisierungsgruppe** können sich bei AI Unlimited anmelden und authentifizieren. Wenn Sie keine Gruppe angeben, kann sich jeder Benutzer eines GitLab-Kontos anmelden und authentifizieren.

- Alle Projekt-Repositorys werden in der **Repository-Gruppe** erstellt. Wenn Sie keine Gruppe angeben, befinden sich die Projekte in Ihrem persönlichen GitLab-Bereich.

Wählen Sie **Aktualisieren**.

Wählen Sie **Anmelden**. Melden Sie sich dann an (falls Sie dazu aufgefordert werden) und authentifizieren Sie sich.

</TabItem>
</Tabs>

</details>


## Vor der Abreise

1. Kopieren Sie auf Ihrem **Profil** Ihren API-Schlüssel.
    Sie brauchen ihn, wenn Sie von einem Jupyter-Notebook aus eine Verbindung zur Engine herstellen.

2. Wenn Sie TLS aktiviert haben, wählen Sie **Neu starten**. Dadurch wird der AI Unlimited-Dienst mit aktiviertem TLS neu gestartet.

Herzlichen Glückwunsch! Die Einrichtung von AI Unlimited ist nun abgeschlossen.


:::note
Da Sie der AI Unlimited-Administrator sind, können Sie jederzeit zum Setup zurückkehren, um [sämtliche Einstellungen zu ändern](../manage-ai-unlimited/change-settings.md). 
:::


## Wie geht es weiter?

Beginnen Sie in einem Jupyter-Notebook, [Daten zu erkunden und zu analysieren](../explore-and-analyze-data/index.md).


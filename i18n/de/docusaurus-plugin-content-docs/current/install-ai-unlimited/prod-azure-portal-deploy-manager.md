---
id: deploy-manager-azure-portal
title: Installieren auf Azure
description: Erfahren Sie, wie Sie den Manager mithilfe einer Azure Resource Manager (ARM)-Vorlage bereitstellen.
sidebar_label: Installieren auf Azure
sidebar_position: 2
pagination_prev: null
pagination_next: null
---

# Installieren des Managers auf Azure

Bevor Sie beginnen, stellen Sie sicher, dass Sie über die [Voraussetzungen](./index.md#prerequisites) verfügen und Ihr Azure-Konto [die Anforderungen](../resources/azure-requirements.md) erfüllt.

Der AI Unlimited Manager orchestriert die Bereitstellung der Engine und umfasst eine webbasierte Benutzeroberfläche für die Einrichtung.

Sie verwenden eine von Teradata bereitgestellte Azure Resource Manager(ARM)-Vorlage, um den Manager vom Azure Portal aus zu installieren. Sie stellen eine Serverinstanz bereit, auf der der Manager in einem von [systemd](../glossary.md#systemd) gesteuerten Container ausgeführt wird.

:::tip
Wenn Sie Hilfe bei der Installation benötigen, senden Sie eine E-Mail an das <a href="mailto:aiunlimited.support@Teradata.com">Support-Team</a> oder fragen Sie die [Gemeinschaft](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa).
:::


## Klonen des Repository

import MyPartial from '../_partials/_clone-repo.mdx';

<MyPartial />


## Suchen Sie nach der Managervorlage

ARM-Vorlagen für den Manager finden Sie hier im AI Unlimited GitHub-Repository:

`deployments/azure/templates/arm/ai-unlimited`

Wählen Sie eine Vorlage basierend darauf aus, ob und welchen Typ Sie einen [Lastausgleich](../glossary.md#load-balancer) verwenden möchten.
:::note
Möglicherweise möchten Sie einen Cloud-Administrator in Ihrer Organisation um Rat fragen.
:::
    - `ai-unlimited-with-alb.json` – Hostet den Manager hinter einem [application load balancer](../glossary.md#application-load-balancer)
    - `ai-unlimited-with-nlb.json` – Hostet den Manager hinter einem [network load balancer](../glossary.md#network-load-balancer)
    - `ai-unlimited-without-lb.json` – Kein Lastausgleich. Wenn Sie sich nicht sicher sind, welche Vorlage Sie verwenden sollen, empfehlen wir diese.


## Laden Sie die Vorlage

1. Melden Sie sich im [Azure Portal](https://portal.azure.com) an. 
   :::note
   Verweise auf das Azure Portal sind auf dem Stand vom 29. Mai 2024.
   ::: 
2. Suchen Sie nach **benutzerdefinierte Bereitstellung** und wählen Sie dann **Bereitstellen einer benutzerdefinierten Vorlage** aus.
3. Wählen Sie **Erstellen Sie Ihre eigene Vorlage im Editor** und dann **Datei laden**.
4. Wählen Sie die gewünschte Vorlagendatei aus und wählen Sie dann **Speichern**.

<a id="azure-parms"></a>


## Angeben von Instanzdetails

Überprüfen Sie die Parameter. Geben Sie Werte für die erforderlichen Parameter ein. Ihre Organisation benötigt möglicherweise andere.

<details>
<summary>Azure und AI Unlimited-Parameter</summary>

| Parameter | Beschreibung | Hinweise |
|---------|-------------|-----------|
| Subscription | Das Azure-Abonnement, das Sie für die Bereitstellung von AI Unlimited verwenden möchten.| Erforderlich<br/>Standard: NA <br/>Dies muss ein Prepaid-Konto sein.  |
| Region | Die Region, in der Sie AI Unlimited bereitstellen möchten.| Erforderlich<br/>Standard: NA<br/>Wählen Sie die Azure-Region aus, die Ihrem Arbeitsort am nächsten liegt, und die Datenressourcen, die mit AI Unlimited verwendet werden sollen. |
| Resource Group Name | Der Name des Containers, der verwandte AI Unlimited-Ressourcen zusammenfasst.| Erforderlich<br/>Standard: ai-unlimited-workspace |
| AI Unlimited Name| Eindeutiger Name für AI Unlimited.| Erforderlich<br/>Standard: NA | 
| Public Key | Der öffentliche SSH-Schlüssel, den Sie verwenden können, um über SSH eine Verbindung zu einer VM herzustellen.| Erforderlich<br/>Standard: NA<br/>Dieser Wert muss mit „ssh-rsa“ beginnen. |
| OS Version  | Die Versionen der Betriebssysteme, die im aktuellen Abonnement verfügbar sind. | Optional mit Standard<br/>Standard: Ubuntu-2004 |
| Instance Type | Der Instanztyp, den Sie für AI Unlimited verwenden möchten. | Optional<br/>Standard: STANDARD_D2_V3<br/>Wir empfehlen, den Standardinstanztyp zu verwenden, um Kosten zu sparen. Der Standardinstanztyp ist die Standard-Dv3-Serie mit 2 vCPUs und 8,0 GiB Speicher.|
| Network | Der Name des Netzwerks, in dem Sie die AI Unlimited-Instanz bereitstellen möchten.| <br/>Optional<br/>Standard: NA | 
| Subnet | Das Subnetzwerk, in dem Sie die AI Unlimited-Instanz bereitstellen möchten. | Erforderlich<br/>Standard: NA<br/>Das Subnetz muss sich in der ausgewählten Verfügbarkeitszone befinden. |
| Security Group | Die virtuelle Firewall, die den ein- und ausgehenden Datenverkehr zur Instanz kontrolliert. | Optional<br/>Standard: AiUnlimitedSecurityGroup<br/>Die Sicherheitsgruppe wird als Regelsatz implementiert, der angibt, welche Protokolle, Ports und IP-Adressen oder CIDR-Blöcke auf die Instanz zugreifen dürfen. Definieren Sie mindestens eine der Zugriffs-CIDR- oder Sicherheitsgruppen, um eingehenden Datenverkehr zuzulassen, sofern Sie keine benutzerdefinierten Eingangsregeln für Sicherheitsgruppen erstellen. |
| Access CIDR | Der CIDR-IP-Adressbereich, der auf die Instanz zugreifen darf. | Optional<br/>Standard: 0.0.0.0/0<br/>Wir empfehlen, diesen Wert auf einen vertrauenswürdigen IP-Bereich festzulegen. Definieren Sie mindestens eine der Zugriffs-CIDR oder Sicherheitsgruppen, um eingehenden Datenverkehr zuzulassen, sofern Sie keine benutzerdefinierten Eingangsregeln für Sicherheitsgruppen erstellen. |
| AI Unlimited HTTP Port | Der Port für den Zugriff auf die AI Unlimited-Benutzeroberfläche.| Erforderlich mit Standard<br/>Standard: 3000 |
| AI Unlimited GRPC Port | Der Port für den Zugriff auf die AI Unlimited API. | Erforderlich mit Standard<br/>Standard: 3282 | 
| Source App Sec Groups | Die Quellanwendungssicherheitsgruppen (Application Security Groups, ASG), die die Berechtigung haben, eine Verbindung mit der AI Unlimited-Instanz herzustellen. Mit ASGs können Sie Ihre virtuellen Maschinen (VMs) basierend auf ihren spezifischen Netzwerksicherheitsrichtlinien organisieren. Diese Sicherheitsrichtlinien bestimmen, welcher Datenverkehr auf Ihrer virtuellen Maschine zulässig ist und welcher nicht. |Optional<br/>Standard: NA<br/> Wählen Sie eine Anwendungssicherheitsgruppe in derselben Region wie die Netzwerkschnittstelle. |
| Destination App Sec Groups | Die Zielanwendungssicherheitsgruppen, die über die Berechtigung verfügen, eine Verbindung mit der AI Unlimited-Instanz herzustellen. | Optional<br/>Standard: NA<br/>Wählen Sie eine Anwendungssicherheitsgruppe in derselben Region wie die Netzwerkschnittstelle. |
| Role Definition ID | Die ID der mit AI Unlimited zu verwendenden Rolle.| Erforderlich<br/>Standard: NA<br/>Verwenden Sie den Azure CLI-Befehl Get-AzRoleDefinition, um Ihre Rollendefinitions-ID abzurufen. |
| Allow Public SSH | Gibt an, ob Sie Secure Shell-Schlüssel (SSH) zum Herstellen einer Verbindung mit VMs in Azure verwenden können.|  Optional<br/>Standardmäßig: true |
| Use Key Vault | Gibt an, ob Key Vault zum Abrufen des sicheren Passworts während einer Bereitstellung verwendet werden soll. | Optional<br/>Standard: New |
| Use Persistent Volume | Gibt an, ob Sie zum Speichern von Daten ein neues oder vorhandenes persistentes Volume verwenden möchten. Weitere Informationen finden Sie unter *Mehr erfahren: Persistentes Volume verwenden* unter dem Parameterabschnitt. | Optional mit Standard<br/>Standard: New <br/>Unterstützte Optionen: „Neu“ oder „Vorhanden“, abhängig von Ihrem Anwendungsfall. |
| Persistent Volume Size | Die Größe des persistenten Datenträgers in GB, den Sie an die Instanz anhängen können. | Optional<br/>Standard: 100 |
| Existing Persistent Volume | <br/>Die ID des vorhandenen persistenten Datenträgers, den Sie an die Instanz anhängen können.| Erforderlich, wenn UsePersistentVolume auf Vorhanden gesetzt ist.<br/>Standard: None<br/>Das persistente Volume muss sich in derselben Verfügbarkeitszone wie die AI Unlimited-Instanz befinden. |
| AI Unlimited Version | Die Version von AI Unlimited, die Sie bereitstellen möchten. | Erforderlich mit Standard<br/>Standard: latest<br/>Der Wert ist ein Container-Versionstag. |
|Use NLB| Gibt an, ob auf die Instanz über einen Network Load Balancer zugegriffen wird.|Erforderlich mit Standard<br/>Standard: false|
| Tags | Die Schlüssel-Wert-Paare, die den Ressourcen zur schnellen Identifizierung zugewiesen werden.| Optional<br/>Standard:NA |   

</details>

<details>

<summary>Mehr erfahren: Persistentes Volume verwenden</summary>

Die Managerinstanz wird in einem Container ausgeführt und speichert ihre Konfigurationsdaten in einer Datenbank im Stammdatenträger der Instanz. Diese Daten bleiben erhalten, wenn Sie die Instanz herunterfahren, neu starten oder einen Snapshot erstellen und neu starten. 

Ein persistentes Volume speichert Daten für eine containerisierte Anwendung über die Lebensdauer des Containers, Pods oder Knotens hinaus, in dem sie ausgeführt wird. 

**Ohne ein persistentes Volumen**

Wenn der Container, Pod oder Knoten abstürzt oder beendet wird, gehen die Konfigurationsdaten des Managers verloren. Sie können eine neue Managerinstanz bereitstellen, jedoch nicht im selben Zustand wie die verlorene.

**Mit einem persistenten Volumen**

Wenn der Container, der Pod oder der Knoten abstürzt oder beendet wird und die Konfigurationsdaten des Managers in einem persistenten Volume gespeichert sind, können Sie eine neue Managerinstanz bereitstellen, die dieselbe Konfiguration wie die verlorene hat.

**Beispiel**

1. Implementieren Sie den Manager und setzen Sie den Parameter `Persistentes Volume verwenden` auf **New**.
2. Nachdem Sie den Stapel erstellt haben, notieren Sie sich auf der Seite **Ausgaben** die „volume-id“.
3. Nutzen Sie AI Unlimited.
4. Wenn die Managerinstanz verloren geht, stellen Sie den Manager erneut bereit und schließen Sie diese Parameter ein:
   - `Persistentes Volume verwenden`: **New**
   - `Vorhandenes persistentes Volume`: der Wert, den Sie in Schritt 2 notiert haben
   
Die neue Managerinstanz hat die gleiche Konfiguration wie die verlorene.

</details>


## Erstellen der Instanz

1. Wählen Sie **Überprüfen + erstellen**.
2. Wählen Sie **Erstellen**.<br />
Auf der Seite **Benachrichtigungen** können Sie den Fortschritt überwachen.

Wenn die Bereitstellung abgeschlossen ist, werden auf der Seite **Ausgaben** die für die erstellten Ressourcen generierten Werte angezeigt.

Sie benötigen die URL, um auf den Manager zuzugreifen und AI Unlimited einzurichten.


## Wie geht es weiter?

[Erstellen Sie eine OAuth-App](../resources/create-oauth-app.md), um die Authentifizierung zwischen AI Unlimited und Ihrem Git-Provider-Konto zu ermöglichen.

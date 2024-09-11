---
id: deploy-jupyter-azure-portal
title: Installieren von JupyterLab auf Azure
description: Erfahren Sie, wie Sie JupyterLab mithilfe einer ARM-Vorlage bereitstellen.
sidebar_label: Installieren auf Azure
sidebar_position: 2
pagination_prev: null
pagination_next: null
---

# Installieren von JupyterLab auf Azure

Sie verwenden eine von Teradata bereitgestellte Azure Resource Manager(ARM)-Vorlage, um JupyterLab und den AI Unlimited-Kernel vom Azure Portal aus zu installieren. 

Dadurch wird eine Serverinstanz bereitgestellt, wobei JupyterLab in einem von [systemd](../../glossary.md#systemd) gesteuerten Container ausgeführt wird.

:::tip
Wenn Sie Unterstützung bei der Installation benötigen, senden Sie eine E-Mail an das <a href="mailto:aiunlimited.support@Teradata.com">Support-Team</a> oder fragen Sie die [Gemeinschaft](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa).
:::


## Vorbereiten Ihres Azure-Kontos

- Arbeiten Sie mit Ihrem Cloud-Administrator zusammen, um sicherzustellen, dass Ihr Azure-Konto über die benötigten Berechtigungen zum Erstellen der in der [JupyterLab-Vorlage](https://github.com/Teradata/ai-unlimited/tree/develop/deployments/azure/templates/arm/jupyter)definierten Cloud-Ressourcen verfügt.

- Netzwerkanforderungen: Ihre Azure-[Ressourcengruppe](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal) muss über ein [Azure Virtual Network (VNet)](https://learn.microsoft.com/en-us/azure/virtual-network/quick-create-portal) verfügen, das mit einem [Subnetz](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-subnet?tabs=azure-portal) konfiguriert ist. Verwenden Sie ein vorhandenes VNet oder Subnetz oder erstellen Sie Ihr eigenes, abhängig von Ihren Kontoberechtigungen. 

- Wenn Sie auf die JupyterLab-Instanz zugreifen müssen, um Befehle auszuführen oder zu debuggen, können Sie mit einem [Schlüsselpaar](https://learn.microsoft.com/en-us/azure/virtual-machines/linux/mac-create-ssh-keys) eine sichere Verbindung über Secure Shell (SSH) herstellen. Sie benötigen das Schlüsselpaar, wenn Sie [die Instanzdetails angeben](#specify-instance-details).


## Klonen des Repository

import MyPartial from '../../_partials/_clone-repo.mdx';

<MyPartial />


## Suchen Sie nach der Jupyter-Vorlage

ARM-Vorlagen für JupyterLab finden Sie hier im AI Unlimited GitHub-Repository:

`deployments/azure/templates/arm/jupyter`

Wählen Sie eine Vorlage basierend darauf aus, ob und welchen Typ Sie einen [Lastausgleich](../../glossary.md#load-balancer) verwenden möchten.
:::note
Möglicherweise möchten Sie einen Cloud-Administrator in Ihrer Organisation um Rat fragen.
:::
    \- `jupyter-with-alb.json` – Hostet JupyterLab hinter einem [Anwendungslastausgleich](../../glossary.md#application-load-balancer)
    \- `jupyter-with-nlb.json` – Hostet JupyterLab hinter einem [Netzwerk-Lastausgleich](../../glossary.md#network-load-balancer)
    \- `jupyter-without-lb.json` – Kein Lastausgleich

## Laden Sie die Vorlage

1. Melden Sie sich im [Azure Portal](https://portal.azure.com) an.
   :::note
   Verweise auf das Azure Portal sind auf dem Stand vom 29. Mai 2024.
   ::: 
2. Suchen Sie nach **benutzerdefinierte Bereitstellung** und wählen Sie dann **Bereitstellen einer benutzerdefinierten Vorlage** aus.
3. Wählen Sie **Erstellen Sie Ihre eigene Vorlage im Editor** und dann **Datei laden**.
4. Wählen Sie die gewünschte Vorlagendatei aus und wählen Sie **Speichern**.  


## Angeben von Instanzdetails

Überprüfen Sie die Parameter. Geben Sie Werte für die erforderlichen Parameter ein. Ihre Organisation benötigt möglicherweise andere.

<details>

<summary>Azure- und JupyterLab-Parameter</summary>

| Parameter | Beschreibung | Hinweise 
|---------|-------------|-----------|
| Abonnement | Das Azure-Abonnement, das Sie für die Bereitstellung von AI Unlimited verwenden möchten. | Erforderlich<br/>Standard: NA<br/>Wir empfehlen die Verwendung eines Kontos, bei dem es sich nicht um eine kostenlose Testversion handelt. |
| Region | Die Region, in der Sie AI Unlimited bereitstellen möchten. | Erforderlich<br/>Standard: NA<br/>Wählen Sie die Azure-Region aus, die Ihrem Arbeitsort am nächsten liegt, und die Datenressourcen, die mit AI Unlimited verwendet werden sollen. |
| Name der Ressourcengruppe | Der Name des Containers, der verwandte AI Unlimited-Ressourcen zusammenfasst. | Erforderlich<br/>Standard: ai-unlimited-jupyter |
| Betriebssystemversion  | Die Versionen der Betriebssysteme, die im aktuellen Abonnement verfügbar sind.| Optional mit Standard<br/>Standard: Ubuntu-2004 |
| Instanztyp | Der Instanztyp, den Sie für AI Unlimited verwenden möchten.| Optional<br/>Standard: STANDARD_D2_V3<br/>Wir empfehlen, den Standardinstanztyp zu verwenden, um Kosten zu sparen. Der Standardinstanztyp ist die Standard-Dv3-Serie mit 2 vCPUs und 8,0 GiB Speicher.|
| Netzwerk | Der Name des Netzwerks, in dem Sie die AI Unlimited-Instanz bereitstellen möchten.| Optional<br/>Standard: NA| 
| Subnetz | Das Subnetzwerk, in dem Sie die AI Unlimited-Instanz bereitstellen möchten.| Erforderlich<br/>Standard: NA<br/>Das Subnetz muss sich in der ausgewählten Verfügbarkeitszone befinden. |
| Sicherheitsgruppe | Die virtuelle Firewall, die den ein- und ausgehenden Datenverkehr zur Instanz kontrolliert. | Optional<br/>Standard: JupyterSecurityGroup<br/>Die Sicherheitsgruppe wird als Regelsatz implementiert, der angibt, welche Protokolle, Ports und IP-Adressen oder CIDR-Blöcke auf die Instanz zugreifen dürfen. Definieren Sie mindestens eine der Zugriffs-CIDR- oder Sicherheitsgruppen, um eingehenden Datenverkehr zuzulassen, sofern Sie keine benutzerdefinierten Eingangsregeln für Sicherheitsgruppen erstellen. |
| Zugriff auf CIDR | Der CIDR-IP-Adressbereich, der auf die Instanz zugreifen darf. | Optional<br/>Standard: 0.0.0.0/0<br/>Wir empfehlen, diesen Wert auf einen vertrauenswürdigen IP-Bereich festzulegen. Definieren Sie mindestens eine der Zugriffs-CIDR oder Sicherheitsgruppen, um eingehenden Datenverkehr zuzulassen, sofern Sie keine benutzerdefinierten Eingangsregeln für Sicherheitsgruppen erstellen. |
| Quell-App-Sicherheitsgruppen (ASG) | Die Quellanwendungssicherheitsgruppen, die die Berechtigung haben, eine Verbindung mit der AI Unlimited-Instanz herzustellen. Mit ASGs können Sie Ihre virtuellen Maschinen (VMs) basierend auf ihren spezifischen Netzwerksicherheitsrichtlinien organisieren. Diese Sicherheitsrichtlinien bestimmen, welcher Datenverkehr auf Ihrer virtuellen Maschine zulässig ist und welcher nicht. | Optional<br/>Standard: NA<br/>Wählen Sie eine Anwendungssicherheitsgruppe in derselben Region wie die Netzwerkschnittstelle. |
| Zielanwendungssicherheitsgruppen | Die Zielanwendungssicherheitsgruppen, die über die Berechtigung verfügen, eine Verbindung mit der AI Unlimited-Instanz herzustellen. | Optional<br/>Standard: NA<br/>Wählen Sie eine Anwendungssicherheitsgruppe in derselben Region wie die Netzwerkschnittstelle. |
| Rollendefinitions-ID | Die ID der mit AI Unlimited zu verwendenden Rolle. | Erforderlich<br/>Standard: NA<br/>Verwenden Sie den Azure CLI-Befehl „Get-AzRoleDefinition“, um Ihre Rollendefinitions-ID abzurufen. |
| Öffentliches SSH zulassen | Gibt an, ob Sie Secure Shell-Schlüssel (SSH) zum Herstellen einer Verbindung mit VMs in Azure verwenden können. |  Optional<br/>Standardmäßig: true |
| Öffentlicher Schlüssel | Der öffentliche SSH-Schlüssel, den Sie verwenden können, um über SSH eine Verbindung zu einer VM herzustellen. | Optional<br/>Standard: NA<br/>Dieser Wert muss mit „ssh-rsa“ beginnen. |
| Persistentes Volume verwenden | Gibt an, ob Sie zum Speichern von Daten ein neues oder vorhandenes persistentes Volume verwenden möchten. Weitere Informationen finden Sie unter *Mehr erfahren: Persistentes Volume verwenden* unter dem Parameterabschnitt. | Optional mit Standard<br/>Standard: New<br/>Unterstützte Optionen sind je nach Anwendungsfall ein neues oder ein vorhandenes dauerhaftes Volume. |
| Größe des persistenten Datenträgers | Die Größe des persistenten Datenträgers in GB, den Sie an die Instanz anhängen können. | Optional<br/>Standard: 100<br/>Unterstützt Werte zwischen 8 und 1000. |
| Vorhandenes persistentes Volume | Die ID des vorhandenen persistenten Datenträgers, den Sie an die Instanz anhängen können.| Erforderlich, wenn „Persistentes Volume verwenden“ auf „Vorhanden“gesetzt ist<br/>Standard: NA<br/>Das persistente Volume muss sich in derselben Verfügbarkeitszone wie die AI Unlimited-Instanz befinden. |
| JupyterHttpPort | Der Port für den Zugriff auf die Benutzeroberfläche des JupyterLab-Dienstes. | Erforderlich mit Standard<br/>Standard: 8888 |
| JupyterVersion | Die Version von JupyterLab, die Sie bereitstellen möchten. | Erforderlich mit Standard<br/>Standard: latest<br/>Der Wert ist ein Container-Versionstag, zum Beispiel „latest“. |
| JupyterToken | Das Token oder Passwort, das für den Zugriff auf JupyterLab über die Benutzeroberfläche verwendet wird.| Erforderlich<br/>Standard: NA<br/>Das Token muss mit einem Buchstaben beginnen und darf nur alphanumerische Zeichen enthalten. Das zulässige Muster ist ^[a-zA-Z][a-zA-Z0-9-]*. |

</details>

<details>

<summary>Mehr erfahren: Persistentes Volume verwenden</summary>

Die JupyterLab-Instanz wird in einem Container ausgeführt und speichert ihre Konfigurationsdaten in einer Datenbank im Stammdatenträger der Instanz. Diese Daten bleiben erhalten, wenn Sie die Instanz herunterfahren, neu starten oder einen Snapshot erstellen und neu starten. 

Ein persistentes Volume speichert jedoch Daten für eine containerisierte Anwendung über die Lebensdauer des Containers, Pods oder Knotens hinaus, in dem sie ausgeführt wird. 

**Ohne ein persistentes Volumen**

Wenn der Container, Pod oder Knoten abstürzt oder beendet wird, gehen die JupyterLab-Konfigurationsdaten verloren. Sie können eine neue JupyterLab-Instanz bereitstellen, jedoch nicht im selben Zustand wie die verlorene.

**Mit einem persistenten Volumen**

Wenn der Container, der Pod oder der Knoten abstürzt oder beendet wird und die JupyterLab-Konfigurationsdaten in einem persistenten Volume gespeichert sind, können Sie eine neue JupyterLab-Instanz bereitstellen, die dieselbe Konfiguration wie die verlorene hat.

**Beispiel**

1. Stellen Sie JupyterLab bereit und schließen Sie diese Parameter ein:
   - `UsePersistentVolume`: **New**
2. Nachdem Sie den Stapel erstellt haben, notieren Sie sich auf der Registerkarte **Ausgaben** die „volume-id“.
3. Verwenden Sie JupyterLab.
4. Wenn die JupyterLab-Instanz verloren geht, stellen Sie JupyterLab erneut bereit und schließen Sie diese Parameter ein:
   - `UsePersistentVolume`: **New**
   - `ExistingPersistentVolumeId`: der Wert, den Sie in Schritt 2 notiert haben
   
Die neue JupyterLab-Instanz hat dieselbe Konfiguration wie die verlorene.

</details>


## Erstellen der Instanz

1. Wählen Sie **Überprüfen + erstellen**.
2. Wählen Sie **Erstellen**.<br />
Auf der Seite **Benachrichtigungen** können Sie den Fortschritt überwachen.

Wenn die Bereitstellung abgeschlossen ist, wird auf der Seite **Ausgaben** die URL für den Zugriff auf JupyterLab angezeigt.






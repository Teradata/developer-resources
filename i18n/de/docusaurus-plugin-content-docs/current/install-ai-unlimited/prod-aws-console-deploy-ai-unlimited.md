---
id: deploy-manager-aws-console
title: Auf AWS installieren
description: Erfahren Sie, wie Sie den Manager mithilfe einer CloudFormation-Vorlage bereitstellen.
sidebar_label: Auf AWS installieren
sidebar_position: 1
pagination_prev: null
pagination_next: null
---

# Installieren Sie den Manager auf AWS

Bevor Sie beginnen, stellen Sie sicher, dass Sie über die [Voraussetzungen](./index.md#prerequisites) verfügen und Ihr AWS-Konto [die Anforderungen](../resources/aws-requirements.md) erfüllt.

Der AI Unlimited Manager orchestriert die Bereitstellung der Engine und umfasst eine webbasierte Benutzeroberfläche für die Einrichtung. 

Sie verwenden eine von Teradata bereitgestellte CloudFormation-Vorlage, um den Manager über die AWS Management Console zu installieren. Sie stellen eine Serverinstanz bereit, auf der der Manager in einem von [systemd](../glossary.md#systemd) gesteuerten Container ausgeführt wird.

:::tip
Wenn Sie Hilfe bei der Installation benötigen, senden Sie eine E-Mail an das <a href="mailto:aiunlimited.support@Teradata.com">Support-Team</a> oder fragen Sie die [Gemeinschaft](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa).
:::


## Klonen des Repository

import MyPartial from '../_partials/_clone-repo.mdx';

<MyPartial />


## Suchen Sie nach der Managervorlage

CloudFormation-Vorlagen für den Manager finden Sie hier im AI Unlimited GitHub-Repository:

`deployments/aws/templates/ai-unlimited/`

Wählen Sie eine Vorlage basierend darauf aus, ob und welchen Typ Sie einen [Lastausgleich](../glossary.md#load-balancer) verwenden möchten.
:::note
Möglicherweise möchten Sie einen Cloud-Administrator in Ihrer Organisation um Rat fragen.
:::
    \- `ai-unlimited-with-alb.yaml` – Hostet den Manager hinter einem [Anwendungslastausgleich](../glossary.md#application-load-balancer)
    \- `ai-unlimited-with-nlb.yaml` – Hostet den Manager hinter einem [Netzwerk-Lastausgleich](../glossary.md#network-load-balancer)
    \- `ai-unlimited-without-lb.yaml` – Kein Lastausgleich. Wenn Sie sich nicht sicher sind, welche Vorlage Sie verwenden sollen, empfehlen wir diese.


## Laden Sie die Vorlage	

1. Melden Sie sich bei der [AWS-Konsole](https://aws.amazon.com) an.<br />
   :::note
   Verweise auf die AWS Management Console sind auf dem Stand vom 29. Mai 2024.
   ::: 
2. Wählen Sie die AWS-Region aus, in der AI Unlimited bereitgestellt werden soll.<br />
Wir empfehlen, die Region auszuwählen, die Ihrem primären Arbeitsort am nächsten liegt.
3. Starten Sie einen entsprechenden Suchvorgang und gehen Sie zu **CloudFormation**.
4. Wählen Sie **Stapel erstellen**und dann **Mit neuen Ressourcen (Standard)**.
5. Wählen Sie **Eine vorhandene Vorlage auswählen** und dann **Eine Vorlagendatei hochladen**.
6. Wählen Sie die gewünschte Vorlagendatei aus und klicken Sie auf **Weiter**.  

<a id="aws-parms"></a>


## Geben Sie Stapeldetails und -optionen an

1. Geben Sie einen Stapelnamen an.
2. Überprüfen Sie die Parameter. Geben Sie Werte für die erforderlichen Parameter ein. Ihre Organisation benötigt möglicherweise andere.<br/>

<details>

<summary>AWS- und Manager-Parameter</summary>

 Die Parameter für jede Vorlage sind unterschiedlich. Möglicherweise werden hier einige Parameter angezeigt, die in der Konsole nicht angezeigt werden.
 
| Parameter | Beschreibung | Hinweise | 
|---------|-------------|-----------|
| Stapelname	| Die Kennung, mit der Sie den AI Unlimited-Stapel in einer Stapelliste finden können. |Erforderlich<br/>Standard: NA<br/> Der Name darf nur alphanumerische Zeichen (Groß-/Kleinschreibung beachten) und Bindestriche enthalten. Er muss mit einem alphabetischen Zeichen beginnen und darf nicht länger als 128 Zeichen sein.| | Der Name darf nur alphanumerische Zeichen (Groß-/Kleinschreibung beachten) und Bindestriche enthalten. Er muss mit einem alphabetischen Zeichen beginnen und darf nicht länger als 128 Zeichen sein.|
|AiUnlimitedName| Der Name der AI Unlimited-Instanz. |Erforderlich mit Standard<br/>Standard: ai-unlimited<br/>Der Name darf nur alphanumerische Zeichen (Groß-/Kleinschreibung beachten) und Bindestriche enthalten. Er muss mit einem alphabetischen Zeichen beginnen und darf nicht länger als 20 Zeichen sein.|
| InstanceType | Der EC2-Instanztyp für den Manager. |Erforderlich mit Standard<br/>Standard: t3.micro<br/> **WICHTIG**: Wenn die Instanz nicht die richtige Größe hat, können Fehler beim Bereitstellen und Anhalten der Engine auftreten und Sie müssen den Manager auf einer größeren Instanz neu installieren.  Siehe *Mehr erfahren: Empfehlungen zum Manager-Instanztyp (Größe)* unter dem Abschnitt „Parameter“. |
| RootVolumeSize | Die Größe der Root-Festplatte in GB, die Sie an die Instanz anhängen möchten. | Erforderlich mit Standard<br/>Standard: 20<br/>Unterstützt Werte zwischen 8 und 1000. |
| TerminationProtection | Aktiviert den Instanzbeendigungsschutz. |Erforderlich mit Standard<br/>Standard: false |
|IamRole | Gibt an, ob CloudFormation eine neue IAM-Rolle erstellen oder eine vorhandene verwenden soll. |Erforderlich mit Standard<br/>Standard: New<br/>Unterstützte Optionen sind: „Neu“ oder „Vorhanden“ |
|IamRoleName | Der Name der IAM-Rolle, die der Instanz zugewiesen werden soll, entweder eine vorhandene oder eine neu erstellte IAM-Rolle. |Optional mit Standard<br/>Standard: ai-unlimited-iam-role<br/>Beim Benennen einer neuen IAM-Rolle erfordert CloudFormation die Funktion CAPABILITY_NAMED_IAM. Lassen Sie dieses Feld leer, um einen automatisch generierten Namen zu verwenden. |
|IamPermissionsBoundary	| Die ARN der IAM-Berechtigungsgrenze, die der der Instanz zugewiesenen IAM-Rolle zugeordnet werden soll. |Optional<br/>Standard: NA |
|AvailabilityZone | Die Verfügbarkeitszone, in der Sie die Instanz bereitstellen möchten. |Erforderlich<br/>Standard: NA<br/>Der Wert muss mit dem Subnetz und der Zone aller bereits vorhandenen Volumes übereinstimmen und der Instanztyp muss in der ausgewählten Zone verfügbar sein. |
|LoadBalancerScheme	|Wenn ein Lastausgleich verwendet wird, gibt dieses Feld an, ob auf die Instanz über das Internet oder nur innerhalb der VPC zugegriffen werden kann.	|Optional mit Standard<br/>Standard: Internet-facing<br/>Der DNS-Name eines internetseitigen Lastausgleichs ist öffentlich auflösbar in die öffentlichen IP-Adressen der Knoten. Daher können internetseitige Lastausgleichsanfragen von Clients über das Internet weiterleiten.<br/>Die Knoten eines internen Lastausgleichs haben nur private IP-Adressen. Der DNS-Name eines internen Lastausgleich ist öffentlich auflösbar in die persönlichen IP-Adressen der Knoten. Daher können interne Lastausgleichsanfragen von Clients mit Zugriff auf die VPC für den Lastausgleich weiterleiten.|
|LoadBalancerSubnetOne | Das Subnetz, in dem der Lastausgleich gehostet wird. Das Subnetz bestimmt die Verfügbarkeitszonen, IP-Adressen und Endpunkte des Lastausgleichs. |Optional mit Standard<br/>Standard: NA<br/>Sie müssen mindestens ein verfügbares Subnetz definieren, um einen Network Load Balancer (NLB) und zwei Subnetze für einen Application Load Balancer (ALB) zu erstellen.|
| LoadBalancerSubnetTwo| Das Subnetz, in dem der Lastausgleich gehostet wird. |Optional. Diese Option ist nur in der Vorlage mit ALB verfügbar.<br/>Standard: NA<br/>|Dieses Subnetz muss sich in einer anderen Verfügbarkeitszone befinden als das erste von Ihnen ausgewählte Subnetz.|
|HostedZoneID | Die ID, die Amazon Route 53 der gehosteten Zone beim Erstellen zugewiesen hat.|Optional<br/>Standard: NA<br/>Jede gehostete Zone entspricht einem Domänennamen oder möglicherweise einer Subdomäne. Die gehostete Zone ist der Container für DNS-Einträge, in dem Sie konfigurieren, wie die Welt mit Ihrer Domäne interagiert, z. B. indem Sie sie mit einem Eintrag auf eine IP-Adresse verweisen.<br/>Gehen Sie in der AWS-Konsole zu **Route 53** &gt; **Gehostete Zonen**. Suchen Sie Ihren registrierten Domänennamen und die entsprechende gehostete Zonen-ID.|
|DnsName| Der Name der Domäne. Bei öffentlich gehosteten Zonen ist dies der Name, den Sie bei Ihrem DNS-Registrar registriert haben. |Optional<br/>Standard: NA<br/>Informationen zum Angeben anderer Zeichen als az, 0-9 und - (Bindestrich) und zum Angeben internationalisierter Domänennamen finden Sie unter [Gehostete Zone erstellen](https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHostedZone.html).|
|Private	|Gibt an, ob der Dienst in einem privaten Netzwerk ohne öffentliche IPs bereitgestellt wird.|Erforderlich<br/>Standard: false <br/>Stellen Sie sicher, dass Sie die Option „Automatische Zuweisung öffentlicher IPv4-Adressen aktivieren“ im Subnetz auswählen, in dem sich der Manager befindet. Wenn diese Option nicht ausgewählt ist, kann die Installation fehlschlagen.|
|Session	|Gibt an, ob Sie den AWS Session Manager für den Zugriff auf die Instanz verwenden können.|Erforderlich<br/>Standard: false |
|Vpc		|Das Netzwerk, in dem Sie die Instanz bereitstellen möchten.|Erforderlich<br/>Standard: NA|
|Subnetz	|Das Subnetz, in dem Sie die Instanz bereitstellen möchten.|Erforderlich<br/>Standard: NA<br/>Das Subnetz muss sich in der ausgewählten Verfügbarkeitszone befinden.|
|KeyName		|Das öffentliche/private Schlüsselpaar, mit dem Sie nach dem Start eine sichere Verbindung zu Ihrer Instanz herstellen können. Wenn Sie ein AWS-Konto erstellen, ist dies das Schlüsselpaar, das Sie in Ihrer bevorzugten Region erstellen.|Optional<br/>Standard: NA<br/>Lassen Sie dieses Feld leer, wenn Sie die SSH-Schlüssel nicht einschließen möchten.|
|AccessCIDR	|Der CIDR-IP-Adressbereich, der auf die Instanz zugreifen darf. |Optional<br/>Standard: NA<br/>Wir empfehlen, diesen Wert auf einen vertrauenswürdigen IP-Bereich festzulegen. Definieren Sie mindestens eine der Optionen „AccessCIDR“, „PrefixList“ oder „SecurityGroup“, um eingehenden Datenverkehr zuzulassen, sofern Sie keine benutzerdefinierten Eingangsregeln für Sicherheitsgruppen erstellen.|
|PrefixList	|Die PrefixList, die Sie zur Kommunikation mit der Instanz verwenden können. Es handelt sich um eine Sammlung von CIDR-Blöcken, die eine Reihe von IP-Adressbereichen definieren, für die dieselbe Richtliniendurchsetzung erforderlich ist.|Optional<br/>Standard: NA<br/>Definieren Sie mindestens eine der Optionen AccessCIDR, PrefixList oder SecurityGroup, um eingehenden Datenverkehr zuzulassen, sofern Sie keine benutzerdefinierten Regeln für den eingehenden Datenverkehr für Sicherheitsgruppen erstellen. Achten Sie darauf, den Namen der PrefixList und nicht die ID einzugeben.|
|SecurityGroup	|Die virtuelle Firewall, die den ein- und ausgehenden Datenverkehr zur Instanz kontrolliert. |Optional<br/>Standard: NA<br/>Implementiert als Regelsatz, der angibt, welche Protokolle, Ports und IP-Adressen oder CIDR-Blöcke auf die Instanz zugreifen dürfen. Definieren Sie mindestens eines von AccessCIDR, PrefixList oder SecurityGroup, um eingehenden Datenverkehr zuzulassen, sofern Sie keine benutzerdefinierten Eingangsregeln für Sicherheitsgruppen erstellen.|
|AIUnlimitedHttpPort		|Der Port für den Zugriff auf die AI Unlimited-Benutzeroberfläche.|Erforderlich mit Standard<br/>Standard: 3000|
|AIUnlimitedGrpcPort		|Der Port für den Zugriff auf die AI Unlimited API.|Erforderlich mit Standard<br/>Standard: 3282|
|AIUnlimitedVersion		|Die Version von AI Unlimited, die Sie bereitstellen möchten.|Erforderlich mit Standard<br/>Standard: latest<br/>Der Wert ist ein Container-Versionstag.|
|UsePersistentVolume|Gibt an, ob Sie zum Speichern von Daten ein neues oder vorhandenes persistentes Volume verwenden möchten. Weitere Informationen finden Sie unter *Mehr erfahren: Persistentes Volume verwenden* unter dem Parameterabschnitt. |Optional mit Standard<br/>Standard: New<br/>Unterstützte Optionen sind je nach Anwendungsfall ein neues oder ein vorhandenes dauerhaftes Volume.|
|PersistentVolumeSize	|Die Größe des persistenten Datenträgers, den Sie an die Instanz anhängen, in GB.|Erforderlich mit Standard<br/>Standard: 20<br/>Unterstützt Werte zwischen 8 und 1000. |
|ExistingPersistentVolumeId		|Die ID des vorhandenen persistenten Datenträgers, den Sie an die Instanz anhängen. |Erforderlich, wenn UsePersistentVolume auf Vorhanden gesetzt ist.<br/>Standard: NA<br/>Das persistente Volume muss sich in derselben Verfügbarkeitszone wie die AI Unlimited-Instanz befinden.|
|PersistentVolume<br/>DeletionPolicy		|Das persistente Volume-Verhalten, wenn Sie die CloudFormation-Bereitstellung löschen.|Erforderlich mit Standard|Löschen <br/>Standard: Retain <br/>Unterstützte Optionen sind: „Delete“, „Retain“, „RetainExceptOnCreate“ und „Snapshot“.|
|LatestAmiId	|Die ID des Images, das auf die neueste AMI-Version verweist. Dieser Wert wird für die SSM-Suche verwendet.|Erforderlich mit Standard<br/>Standard: NA<br/>Diese Bereitstellung verwendet das neueste verfügbare Image ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2.<br/>**WICHTIG**: Das Ändern dieses Wertes kann den Stapel beschädigen.

</details>

<details>

<summary>Mehr erfahren: Empfehlungen zum Manager-Instanztyp (Größe)</summary>

Für die kostenpflichtige öffentliche Vorschau von AI Unlimited empfehlen wir diese T3-Instanztypen, basierend auf der Anzahl gleichzeitiger Bereitstellungs- und Suspendierungsvorgänge der Engine. Die Leistung der anderen verfügbaren Instanztypen kann variieren.

| Instanztyp | Gleichzeitige Vorgänge |
|---------|-------------|
|t3.micro |1 |
|t3.small |bis zu 5 |
|t3.medium |bis zu 10 |
|t3.large |bis zu 20 |
|t3.xlarge |mehr als 21 

Die Parallelität wird zunehmen, wenn AI Unlimited zur allgemeinen Verfügbarkeit freigegeben wird.

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

1. Stellen Sie den Manager bereit und schließen Sie diese Parameter ein:
   - `UsePersistentVolume`: **New**
   - `PersistentVolumeDeletionPolicy`: **Retain**
2. Nachdem Sie den Stapel erstellt haben, notieren Sie sich auf der Registerkarte **Ausgaben** die „volume-id“.
3. Nutzen Sie AI Unlimited.
4. Wenn die Managerinstanz verloren geht, stellen Sie den Manager erneut bereit und schließen Sie diese Parameter ein:
   - `UsePersistentVolume`: **New**
   - `PersistentVolumeDeletionPolicy`: **Retain** 
   - `ExistingPersistentVolumeId`: der Wert, den Sie in Schritt 2 notiert haben
   
 Die neue Managerinstanz hat die gleiche Konfiguration wie die verlorene.

</details>


3. Wählen Sie **Weiter**.
4. [Konfigurieren Sie die Stapeloptionen](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-console-add-tags.html) entsprechend Ihren Anforderungen und wählen Sie dann **Weiter**aus. 


## Überprüfen und Erstellen des Stapels

1. Überprüfen Sie die Vorlageneinstellungen. 
2. Aktivieren Sie das Kontrollkästchen, um zu bestätigen, dass die Vorlage IAM-Ressourcen erstellen wird. 
3. Wählen Sie **Übermitteln**, um den Stapel bereitzustellen.<br />
Auf der Registerkarte **Ereignisse** können Sie den Fortschritt überwachen. Wenn der Status aller Ressourcen `CREATE_COMPLETE` lautet, ist der Manager bereit. 

Die Registerkarte **Ausgaben** zeigt die für die erstellten Ressourcen generierten Werte.

Sie benötigen die URL, um auf den Manager zuzugreifen und AI Unlimited einzurichten.


## Wie geht es weiter?

[Erstellen Sie eine OAuth-App](../resources/create-oauth-app.md), um die Authentifizierung zwischen AI Unlimited und Ihrem Git-Provider-Konto zu ermöglichen.




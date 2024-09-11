---
id: deploy-jupyter-aws-console
title: Installieren Sie JupyterLab auf AWS
description: Erfahren Sie, wie Sie JupyterLab mithilfe einer CloudFormation-Vorlage bereitstellen.
sidebar_label: Auf AWS installieren
sidebar_position: 1
pagination_prev: null
pagination_next: null
---

# Installieren Sie JupyterLab auf AWS

Sie verwenden eine von Teradata bereitgestellte CloudFormation-Vorlage, um JupyterLab und den AI Unlimited-Kernel von der AWS Management Console aus zu installieren. 

Dadurch wird eine Serverinstanz bereitgestellt, wobei JupyterLab in einem von [systemd](../../glossary.md#systemd) gesteuerten Container ausgeführt wird.

:::tip
Wenn Sie Unterstützung bei der Installation benötigen, senden Sie eine E-Mail an das <a href="mailto:aiunlimited.support@Teradata.com">Support-Team</a> oder fragen Sie die [Gemeinschaft](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa).
:::

## Vorbereiten Ihres AWS-Kontos

- Arbeiten Sie mit Ihrem Cloud-Administrator zusammen, um sicherzustellen, dass Sie über die [IAM](https://aws.amazon.com/iam/)-Berechtigungen zum Erstellen der im [JupyterLab-Vorlage](https://github.com/Teradata/ai-unlimited/tree/develop/deployments/aws/templates/jupyter) definierten Cloud-Ressourcen verfügen.

- Wenn Sie auf die JupyterLab-Instanz zugreifen müssen, um Befehle auszuführen oder zu debuggen, können Sie mit einem [Schlüsselpaar](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) eine sichere Verbindung über Secure Shell (SSH) herstellen. Sie benötigen das Schlüsselpaar, wenn Sie [die Stapeldetails angeben](#specify-stack-details-and-options).
  
- Wenn Sie einen [Application Load Balancer (ALB)](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancer-getting-started.html) oder [Network Load Balancer (NLB)](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancer-getting-started.html)verwenden möchten, stellen Sie sicher, dass Sie über die Berechtigung zum Verwalten dieser AWS-Dienste verfügen:
	\- [AWS Certificate Manager](https://docs.aws.amazon.com/acm/) – um ein neues Zertifikat für die gehostete Zonen-ID in Route 53 auszustellen.
	\- [AWS Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html) – um einen benutzerdefinierten Domänennamen zu konfigurieren und DNS-Abfragen an Ihren Lastausgleich weiterzuleiten.


## Klonen des Repository

import MyPartial from '../../_partials/_clone-repo.mdx';

<MyPartial />


## Suchen Sie nach der Jupyter-Vorlage

CloudFormation-Vorlagen für JupyterLab finden Sie hier im AI Unlimited GitHub-Repository:

`deployments/aws/templates/jupyter`

Wählen Sie eine Vorlage basierend darauf aus, ob und welchen Typ Sie einen [Lastausgleich](../../glossary.md#load-balancer) verwenden möchten.
:::note
Möglicherweise möchten Sie einen Cloud-Administrator in Ihrer Organisation um Rat fragen.
:::
    \- `jupyter-alb.yaml` – Hostet JupyterLab hinter einem [Anwendungslastausgleich](../../glossary.md#application-load-balancer)
    \- `jupyter-with-nlb.yaml` – Hostet JupyterLab hinter einem [Netzwerk-Lastausgleich](../../glossary.md#network-load-balancer)
    \- `jupyter-without-lb.yaml` – Kein Lastausgleich


## Laden Sie die Vorlage	

1. Melden Sie sich bei der [AWS-Konsole](https://aws.amazon.com) an.
   :::note
   Verweise auf die AWS Management Console sind auf dem Stand vom 29. Mai 2024.
   :::
2. Wählen Sie die Region aus, in der JupyterLab bereitgestellt werden soll.<br/>
   Wir empfehlen, die Region auszuwählen, die Ihrem primären Arbeitsort am nächsten liegt.
3. Starten Sie einen entsprechenden Suchvorgang und gehen Sie zu **CloudFormation**.
4. Wählen Sie **Stapel erstellen** und dann **Mit neuen Ressourcen (Standard)**.
5. Wählen Sie **Auswählen einer vorhandenen Vorlage** und **Hochladen einer Vorlagendatei**.
6. Wählen Sie die gewünschte Vorlagendatei aus und klicken Sie auf **Weiter**.


## Angeben von Stapeldetails und -optionen

1. Geben Sie einen Stapelnamen an.
2. Überprüfen Sie die Parameter. Geben Sie Werte für die erforderlichen Parameter ein. Ihre Organisation benötigt möglicherweise andere.

<details>

<summary>AWS- und JupyterLab-Parameter</summary>

| Parameter | Beschreibung | Hinweise 
|---------|-------------|-----------|
| InstanceType | Der EC2-Instanztyp, den Sie für den Dienst verwenden möchten. | Erforderlich mit Standard<br/>Standard: t3.small<br/>Um Kosten zu sparen, empfehlen wir die Verwendung des Standardinstanztyps. |
| RootVolumeSize | Die Größe der Root-Festplatte in GB, die Sie an die Instanz anhängen möchten. | Erforderlich mit Standard<br/>Standard: 8<br/>Unterstützt Werte zwischen 8 und 1000. |
| TerminationProtection | Aktiviert den Instanzbeendigungsschutz. | Erforderlich mit Standard<br/>Standard: false |
|IamRole | Gibt an, ob CloudFormation eine neue IAM-Rolle erstellen oder eine vorhandene verwenden soll. | Erforderlich mit Standard<br/>Standard: New<br/>Unterstützte Optionen sind: „Neu“ oder „Vorhanden“ |
|IamRoleName | Der Name der IAM-Rolle, die der Instanz zugewiesen werden soll, entweder eine vorhandene oder eine neu erstellte IAM-Rolle. | Optional mit Standard<br/>Standard: ai-unlimited-iam-role<br/>Beim Benennen einer neuen IAM-Rolle erfordert CloudFormation die Funktion CAPABILITY_NAMED_IAM. Lassen Sie dieses Feld leer, um einen automatisch generierten Namen zu verwenden. |
|IamPermissions<br/>Boundary | Die ARN der IAM-Berechtigungsgrenze, die der der Instanz zugewiesenen IAM-Rolle zugeordnet werden soll.| Optional<br/>Standard: NA|
|AvailabilityZone | Die Verfügbarkeitszone, in der Sie die Instanz bereitstellen möchten. | Erforderlich<br/>Standard: NA<br/>Der Wert muss mit dem Subnetz und der Zone aller bereits vorhandenen Volumes übereinstimmen und der Instanztyp muss in der ausgewählten Zone verfügbar sein. |
|LoadBalancing		|Gibt an, ob auf die Instanz über einen NLB zugegriffen wird. | Erforderlich mit Standard<br/>Standard: NetworkLoadBalancer<br/>Unterstützte Optionen sind: „NetworkLoadBalancer“ oder „None“ |
|LoadBalancerScheme	| Wenn ein Lastausgleich verwendet wird, gibt dieses Feld an, ob auf die Instanz über das Internet oder nur innerhalb der VPC zugegriffen werden kann. | Optional mit Standard<br/>Standard: Internet-facing<br/>Der DNS-Name eines internetseitigen Lastausgleichs ist öffentlich auflösbar in die öffentlichen IP-Adressen der Knoten. Daher können internetseitige Lastausgleichsanfragen von Clients über das Internet weiterleiten.Die Knoten eines internen Lastausgleichs haben nur private IP-Adressen. Der DNS-Name eines internen Lastausgleichs ist öffentlich auflösbar in die persönlichen IP-Adressen der Knoten. Daher können interne Lastausgleichsanfragen von Clients mit Zugriff auf die VPC für den Lastausgleich weiterleiten.|
|Private	|Gibt an, ob der Dienst in einem privaten Netzwerk ohne öffentliche IPs bereitgestellt wird.| Erforderlich<br/>Standard: false<br/>Stellen Sie sicher, dass Sie die Option „Automatische Zuweisung öffentlicher IPv4-Adressen aktivieren“ im Subnetz auswählen, in dem sich der Manager befindet. Wenn diese Option nicht ausgewählt ist, kann die Installation fehlschlagen.|
|Session	|Gibt an, ob Sie den AWS Session Manager für den Zugriff auf die Instanz verwenden können.| Erforderlich<br/>Standard: false |
|Vpc		|Das Netzwerk, in dem Sie die Instanz bereitstellen möchten.|Erforderlich<br/>Standard: NA|
|Subnetz	|Das Subnetz, in dem Sie die Instanz bereitstellen möchten. |Erforderlich<br/>Standard: NA<br/>Das Subnetz muss sich in der ausgewählten Verfügbarkeitszone befinden.|
|KeyName		|Das öffentliche/private Schlüsselpaar, mit dem Sie nach dem Start eine sichere Verbindung zu Ihrer Instanz herstellen können. Wenn Sie ein AWS-Konto erstellen, ist dies das Schlüsselpaar, das Sie in Ihrer bevorzugten Region erstellen.| Optional<br/>Standard: NA<br/>Lassen Sie dieses Feld leer, wenn Sie die SSH-Schlüssel nicht einschließen möchten.|
|AccessCIDR	|Der CIDR-IP-Adressbereich, der auf die Instanz zugreifen darf.| Optional<br/>Standard: NA<br/>Wir empfehlen, diesen Wert auf einen vertrauenswürdigen IP-Bereich festzulegen. Definieren Sie mindestens eine der Optionen „AccessCIDR“, „PrefixList“ oder „SecurityGroup“, um eingehenden Datenverkehr zuzulassen, sofern Sie keine benutzerdefinierten Eingangsregeln für Sicherheitsgruppen erstellen.|
|PrefixList			| Die PrefixList, die Sie zur Kommunikation mit der Instanz verwenden können. Es handelt sich um eine Sammlung von CIDR-Blöcken, die eine Reihe von IP-Adressbereichen definieren, für die dieselbe Richtliniendurchsetzung erforderlich ist. | Optional<br/>Standard: NA<br/>Definieren Sie mindestens eine der Optionen „AccessCIDR“, „PrefixList“ oder „SecurityGroup“, um eingehenden Datenverkehr zuzulassen, sofern Sie keine benutzerdefinierten Eingangsregeln für Sicherheitsgruppen erstellen.|
|SecurityGroup	|Die virtuelle Firewall, die den ein- und ausgehenden Datenverkehr zur Instanz kontrolliert.| Optional<br/>Standard: NA<br/>Implementiert als Regelsatz, der angibt, welche Protokolle, Ports und IP-Adressen oder CIDR-Blöcke auf die Instanz zugreifen dürfen. Definieren Sie mindestens eines von AccessCIDR, PrefixList oder SecurityGroup, um eingehenden Datenverkehr zuzulassen, sofern Sie keine benutzerdefinierten Eingangsregeln für Sicherheitsgruppen erstellen.|
|UsePersistentVolume| Gibt an, ob Sie zum Speichern von Daten ein neues oder vorhandenes persistentes Volume verwenden möchten. Weitere Informationen finden Sie unter *Mehr erfahren: Persistentes Volume verwenden* unter dem Parameterabschnitt. |Optional mit Standard<br/>Standard: New<br/>Unterstützte Optionen sind je nach Anwendungsfall ein neues oder ein vorhandenes dauerhaftes Volume.|
|PersistentVolumeSize	|Die Größe des persistenten Datenträgers in GB, den Sie an die Instanz anhängen können.|Erforderlich mit Standard<br/>Standard: 20<br/>Unterstützt Werte zwischen 8 und 1000|
|ExistingPersistent<br/>VolumeId		|Die ID des vorhandenen persistenten Datenträgers, den Sie an die Instanz anhängen können.| Erforderlich, wenn UsePersistentVolume auf „Vorhanden“gesetzt ist<br/>Standard: NA<br/>Das persistente Volume muss sich in derselben Verfügbarkeitszone wie die AI Unlimited-Instanz befinden.|
|PersistentVolume<br/>DeletionPolicy		|Das persistente Volume-Verhalten, wenn Sie die CloudFormation-Bereitstellung löschen.| Erforderlich mit Standard<br/>Standard: Retain <br/>Unterstützte Optionen sind: „Delete“, „Retain“, „RetainExceptOnCreate“ und „Snapshot“.|
|LatestAmiId	|Die ID des Images, das auf die neueste AMI-Version verweist. Dieser Wert wird für die SSM-Suche verwendet.|Erforderlich mit Standard<br/>Standard: NA<br/>Diese Bereitstellung verwendet das neueste verfügbare Image ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2.<br/>WICHTIG: Das Ändern dieses Wertes kann den Stapel beschädigen.|
| JupyterHttpPort | Der Port für den Zugriff auf die Benutzeroberfläche des JupyterLab-Dienstes. | Erforderlich mit Standard<br/>Standard: 8888|
| JupyterVersion | Die Version von JupyterLab, die Sie bereitstellen möchten. | Erforderlich mit Standard<br/>Standard: latest<br/>Der Wert ist ein Container-Versionstag, zum Beispiel „latest“. |
| JupyterToken | Das Token oder Passwort, das für den Zugriff auf JupyterLab über die Benutzeroberfläche verwendet wird. | Erforderlich<br/>Standard: NA<br/>Das Token muss mit einem Buchstaben beginnen und darf nur alphanumerische Zeichen enthalten. Das zulässige Muster ist ^[a-zA-Z][a-zA-Z0-9-]*. |
</details>

<details>

<summary>Mehr erfahren: Persistentes Volume verwenden</summary>

Die JupyterLab-Instanz wird in einem Container ausgeführt und speichert ihre Konfigurationsdaten in einer Datenbank im Stammdatenträger der Instanz. Diese Daten bleiben erhalten, wenn Sie die Instanz herunterfahren, neu starten oder einen Snapshot erstellen und neu starten. 

Ein persistentes Volume speichert Daten für eine containerisierte Anwendung über die Lebensdauer des Containers, Pods oder Knotens hinaus, in dem sie ausgeführt wird. 

**Ohne ein persistentes Volumen**

Wenn der Container, Pod oder Knoten abstürzt oder beendet wird, gehen die JupyterLab-Konfigurationsdaten verloren. Sie können eine neue JupyterLab-Instanz bereitstellen, jedoch nicht im selben Zustand wie die verlorene.

**Mit einem persistenten Volumen**

Wenn der Container, der Pod oder der Knoten abstürzt oder beendet wird und die JupyterLab-Konfigurationsdaten in einem persistenten Volume gespeichert sind, können Sie eine neue JupyterLab-Instanz bereitstellen, die dieselbe Konfiguration wie die verlorene hat.

**Beispiel**

1. Stellen Sie JupyterLab bereit und schließen Sie diese Parameter ein:
   - `UsePersistentVolume`: **New**
   - `PersistentVolumeDeletionPolicy`: **Retain**
3. Nachdem Sie den Stapel erstellt haben, notieren Sie sich auf der Registerkarte **Ausgaben** die „volume-id“.
4. Verwenden Sie JupyterLab.
5. Wenn die JupyterLab-Instanz verloren geht, stellen Sie JupyterLab erneut bereit und schließen Sie diese Parameter ein:
   - `UsePersistentVolume`: **New**
   - `PersistentVolumeDeletionPolicy`: **Retain** 
   - `ExistingPersistentVolumeId`: der Wert, den Sie in Schritt 2 notiert haben
   
 Die neue JupyterLab-Instanz hat dieselbe Konfiguration wie die verlorene.

</details>

3. Wählen Sie **Weiter**.
4. [Konfigurieren Sie die Stapeloptionen](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-console-add-tags.html) entsprechend Ihren Anforderungen und wählen Sie dann **Weiter** aus. 


## Überprüfen und Erstellen des Stapels

1. Überprüfen Sie die Vorlageneinstellungen. 
2. Aktivieren Sie das Kontrollkästchen, um zu bestätigen, dass die Vorlage IAM-Ressourcen erstellen wird. 
3. Wählen Sie **Übermitteln**, um den Stapel bereitzustellen.<br />
Auf der Registerkarte **Ereignisse** können Sie den Fortschritt überwachen. Wenn der Status aller Ressourcen `CREATE_COMPLETE` ist, ist das JupyterLab bereit. 

Die Registerkarte **Ausgaben** zeigt die URL für den Zugriff auf JupyterLab.




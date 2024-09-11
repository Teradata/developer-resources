---
id: magic-commands
title: Magische Befehle
description: Erfahren Sie mehr über die magischen AI Unlimited-Befehle, die Sie in einem Jupyter-Notebook zum Verwalten von Projekten verwenden können.
sidebar_label: Magische Befehle
sidebar_position: 5
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Magische Befehle

In Jupyter-Notebooks sind magische Befehle Verknüpfungen für allgemeine Aufgaben. Mit den magischen Befehlen von AI Unlimited können Sie eine Verbindung zur Engine herstellen und Projekte verwalten.

Der AI Unlimited Jupyter Kernel unterstützt die hier beschriebenen magischen Befehle – zusätzlich zu den standardmäßigen magischen Befehlen des Teradata SQL-Kernels. 


## %workspaces_config

**Beschreibung**: Stellen Sie eine Kommunikation zwischen Ihrem Notebook und dem AI Unlimited-Manager her.

**Nutzung**:
```bash 
%workspaces_config host=<ip_or_hostname>, apikey=<API_Key>, withtls=<T|F>
```
Wo:

- host: Name oder IP-Adresse des AI Unlimited-Managers.

- apikey: API-Schlüsselwert von der AI Unlimited-Setup-Seite **Profil**.

- **`[Optional]`** withTLS: Wenn False (F), verwendet die standardmäßige Client-Server-Kommunikation kein TLS.

**Ausgabe**:
```
Workspace configured for host=<ip_or_hostname>
```

## %project_create

**Beschreibung**: Erstellt ein neues Projekt. Dieser Befehl erstellt auch ein neues Repository mit dem Projektnamen in Ihrem Git-Konto. Die Konfigurationen werden in der Datei **engine.yml** gespeichert.

**Nutzung**:
```bash
%project_create project=<Project_Name>, env=<Cloud_Service_Provider>, team=<Project_Team>
```
Wo:

- project: Name des zu erstellenden Projekts.

- env: Cloud-Umgebung, in der das Projekt gehostet wird. Für die aktuelle Version werden AWS und Azure unterstützt.

- **`[Optional]`** team: Name des Teams, das am Projekt zusammenarbeitet.

**Ausgabe**:
```
Project `Project_Name` created
```

## %project_delete

**Beschreibung**: Löscht das Projekt. Dadurch wird das Projekt-Repository nicht gelöscht. Es werden Projektmetadaten aus dem Manager gelöscht. 

**Nutzung**:
```bash 
%project_delete project=<Project_Name>, team=<Project_Team>
```

Wo:

- project: Name des zu löschenden Projekts.

- **`[Optional]`** team: Name des Teams, das am Projekt zusammenarbeitet.

**Ausgabe**:
```
Project `Project_Name` deleted
```

## %project_list

**Beschreibung**: Listen Sie die Details eines oder aller Projekte auf.

Verwenden Sie den Projektparameter, um die Details eines bestimmten Projekts abzurufen. Wenn Sie den Befehl ohne Parameter ausführen, werden alle Projekte aufgelistet.

**Nutzung**:
```bash
%project_list project=<Project_Name>
```
Wo:

- project: Der Projektname.

**Ausgabe**:

```
| NAME          | URL      | 
|---------------|----------|
| <Project_Name>| <Git_URL>| 

```

## %project_auth_create

**Beschreibung**: Erstellt ein Autorisierungsobjekt zum Speichern der Objektspeicher-Anmeldeinformationen.

Sie müssen das Autorisierungsobjekt erstellen, bevor Sie die Engine bereitstellen. Die Autorisierungsdetails bleiben erhalten und werden beim erneuten Bereitstellen des Projekts einbezogen. Optional können Sie Autorisierungen nach dem Bereitstellen der Engine manuell mit dem SQL-Befehl `CREATE AUTHORIZATION` erstellen. In diesem Fall werden die Autorisierungsdetails nicht beibehalten.

**Nutzung**:
```bash 
%project_auth_create project=<Project_Name>, name=<Authorization_Name>, key=<Authorization_Key>, secret=<Authorization_Secret>, region=<ObjectStore_Region>, token=<Session_Token>
```
Wo:

- project: Name des Projekts.

- name: Autorisierungsname für den Objektspeicher.

- key: Autorisierungsschlüssel des Objektspeichers.

- **`[Optional]`** secret: Geheime Autorisierungs-Zugriffs-ID des Objektspeichers.

- **`[Optional]`** region: Region des Objektspeichers; lokal für den lokalen Objektspeicher.

- **`[Optional]`** token: Sitzungstoken für den Objektspeicherzugriff.

- **`[Optional – nur AWS]`** role: IAM-Benutzer oder Servicekonto, um von einem AWS-Konto aus auf AWS-Ressourcen zuzugreifen, indem sie eine Rolle und ihre Berechtigungen übernehmen. Der Eigentümer der AWS-Ressource definiert die Rolle. Beispiel: arn:aws:iam::00000:role/STSAssumeRole.

- **`[Optional – nur AWS]`** ExternalID: Externe ID, die für den Zugriff auf den Objektspeicher verwendet wird. Dieser Parameter ist erforderlich, wenn der Parameter `role` verwendet wird.

**Ausgabe**:
```
Authorization 'name' created
```

## %project_auth_update

**Beschreibung**: Aktualisiert eine Objektspeicherautorisierung.

**Nutzung**:

```bash 
%project_auth_update project=<Project_Name>, name=<Authorization_Name>, key=<Authorization_Key>, secret=<Authorization_Secret>, region=<ObjectStore_Region>, token=<Session_Token>

```
Wo:

- project: Name des Projekts.

- name: Autorisierungsname für den Objektspeicher.

- key: Autorisierungsschlüssel des Objektspeichers.

- **`[Optional]`** secret: Geheime Autorisierungs-Zugriffs-ID des Objektspeichers.

- **`[Optional]`** region: Region des Objektspeichers; lokal für den lokalen Objektspeicher.

- **`[Optional]`** token: Sitzungstoken für den Objektspeicherzugriff.

- **`[Optional – nur AWS]`** role: IAM-Benutzer oder Dienstkonto, um von einem CSP-Konto aus auf AWS- oder Azure-Ressourcen zuzugreifen, indem sie eine Rolle und ihre Berechtigungen übernehmen. Der Eigentümer der AWS- oder Azure-Ressource definiert die Rolle. Beispiel: arn:aws:iam::00000:role/STSAssumeRole.

- **`[Optional – nur AWS]`** ExternalID: Externe ID, die für den Zugriff auf den Objektspeicher verwendet wird. Dieser Parameter ist erforderlich, wenn der Parameter `role` verwendet wird.

**Ausgabe**:
```
Authorization 'name' updated
```

## %project_auth_delete

**Beschreibung**: Entfernt eine Objektspeicherautorisierung.

**Nutzung**:
```bash
%project_auth_delete project=<Project_Name>, name=<Authorization_Name>
```
Wo:

- project: Name des Projekts.

- name: Autorisierungsname für den Objektspeicher.

**Ausgabe**:
```
Authorization 'name' deleted
```

## %project_auth_list

**Beschreibung**: Listet Objektspeicherautorisierungen auf, die für ein Projekt erstellt wurden.

**Nutzung**:
```bash 
%project_auth_list project=<Project_Name>

```
Wo:

- project: Name des Projekts.

**Ausgabe**:
```
| AUTH NAME           | ACCESS KEY  | SECRET  | 
|---------------------|-------------|---------|
| <Authorization_Name>| <ACCESS_KEY>| <SECRET>| 
```

## %project_engine_deploy

**Beschreibung**: Stellt eine Engine für das Projekt bereit. Der Bereitstellungsvorgang dauert einige Minuten. Bei erfolgreicher Bereitstellung wird ein Passwort generiert.

**Nutzung**:

<Tabs>
<TabItem value="aws1" label="AWS">

```bash 
%project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore=<true|false>, prefixlist=<Prefix_List>, securitygroups=<Security_Group>, cidrs=<CIDR>, tags=<Tags>, iamrole=<IAM_Role>, roleprefix=<Role_Prefix>, permissionboundary=<Permission_Boundary>
```
</TabItem>
<TabItem value="azure" label="Azure">

```bash 
%project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore=<true|false>, network=<Network>, keyvault=<Key_Vault>, keyvaultresourcegroup=<Key_Vault_Resource_Group>, networkresourcegroup=<Network_Resource_Group>
```
</TabItem>
</Tabs>

Wo:

- project: Name des Projekts.

- size: Größe der Engine. Der Wert kann sein:

  - klein
  - mittel
  - groß
  - extragroß

- **`[Optional]`** node: Anzahl der bereitzustellenden Engine-Knoten. Der Standardwert ist 1.

- **`[Optional]`** subnet: Für die Engine verwendetes Subnetz, wenn keine Standardwerte aus dem AI Unlimited-Setup vorhanden sind.

- **`[Optional]`** region: Für die Engine verwendete Region, wenn keine Standardwerte aus dem AI Unlimited-Setup vorhanden sind.

- **`[Optional]`** restore: Wenn False (F), wird die Engine bereitgestellt, aber die Objekte des Projekts werden nicht wiederhergestellt, was die Bereitstellungszeit verkürzt. Sie können sie manuell mit %project_restore wiederherstellen. Der Standardwert ist True (T). 

<Tabs>
<TabItem value="aws1" label="AWS">

- **`[Optional]`** prefixlist: Die Sammlung von CIDR-Blöcken, die eine Reihe von IP-Adressbereichen definieren, die die gleiche Richtliniendurchsetzung erfordern. Sie wird verwendet, um anzugeben, welche IP-Adressen mit der Engine kommunizieren können.

- **`[Optional]`** securitygroups: Liste der Sicherheitsgruppen für die VPC in jeder Region. Wenn Sie keine Sicherheitsgruppe angeben, wird die Engine automatisch der Standardsicherheitsgruppe für die VPC zugeordnet.

- **`[Optional]`** cidrs: Liste der für die Engine verwendeten CIDR-Adressen.

- **`[Optional]`** Tags: Die Schlüssel-Wert-Paare, die der Engine zur schnellen Identifizierung zugewiesen werden.

- **`[Optional]`** iamrole: Die für die Engine verwendete IAM-Rolle.

- **`[Optional]`** roleprefix: Die Zeichenfolge, die an den Anfang der der Engine zugewiesenen IAM-Rolle angehängt wird.

- **`[Optional]`** permissionboundary: Die ARN der IAM-Berechtigungsgrenze, die der der Engine zugewiesenen IAM-Rolle zugeordnet werden soll. Die Berechtigungsgrenze definiert die maximalen Berechtigungen, die die Rolle haben kann.

</TabItem>
<TabItem value="azure" label="Azure">

- **`[Optional]`** network: Das Netzwerk, in dem Sie die Engine bereitstellen möchten.

- **`[Optional]`** keyvault: Der von der Engine verwendete Key Vault, in dem vertrauliche Informationen wie Passwörter sicher gespeichert werden können.

- **`[Optional]`** keyvaultresourcegroup: Die Ressourcengruppe, die den Key Vault enthält.

- **`[Optional]`** networkresourcegroup: Die Ressourcengruppe, die das Netzwerk enthält.

</TabItem>
</Tabs>

**Ausgabe**:
```
Started deploying.
Success: Compute Engine setup, look at the connection manager
```

## %project_engine_suspend

**Beschreibung**: Hält die Engine an, wenn Sie mit der Arbeit fertig sind.

**Nutzung**:
```bash 
%project_engine_suspend <Project_Name>
```
Wo:

- project: Name des Projekts.

**Ausgabe**:
```
Started suspend
Success: Suspended Compute Engine
```

## %project_engine_list

**Beschreibung**: Zeigt die Liste der für Ihr Projekt bereitgestellten Engines an.

**Nutzung**:
```bash 
%project_engine_list project=<Project_Name>
```
Wo:

- project: Name des Projekts.

**Ausgabe**:
```
| IP   | STATE   | REGION  | SIZE             | NODE             |
|------|---------|---------|------------------|------------------|
| <IP> | Deployed| <Region>| <Size_of_Engine> | <Number_of_Nodes>|
```

## %project_user_list

**Beschreibung**: Zeigt die Liste der dem Projekt zugewiesenen Mitarbeiter im Git-Repository an.

**Nutzung**:
```bash
%project_user_list project=<Project_Name>
```

Wo:

- **`[Optional]`** project: Name des Projekts.

**Ausgabe**:
```
| PROJECT ID   | USER  | PASSWORD  |
|--------------|-------|-----------|
| <Project_ID> | <User>| <Password>| 
```

## %project_backup

**Beschreibung**: Sichert Ihre Projektinformationen und Objektdefinitionen innerhalb der Engine.

**Nutzung**:
```bash
%project_backup project=<Project_Name>
```
Wo:

- project: Name des Projekts.

**Ausgabe**:
```
Backup of the object definitions created
```

## %project_restore

**Beschreibung**: Stellt Ihre Projektinformationen und Objektdefinition aus Ihrem Git-Repository wieder her.

**Nutzung**:
```bash 
%project_restore project=<Project_Name>, gitref=<Git_Reference>
```
Wo:

- project: Name des Projekts.
- **`[Optional]`** gitref: Die Git-Referenz für das Commit, aus dem das Projekt wiederhergestellt werden soll, wenn Sie nicht von der aktuellsten Version wiederherstellen möchten.

**Ausgabe**:
```
Restore of the object definitions done
```

## %project_engine_update_users

**Beschreibung**: Aktualisiert Benutzer auf der bereitgestellten Engine. Wenn Benutzer nach der Bereitstellung der Engine als Mitarbeiter zum Git-Repository hinzugefügt werden, können Sie diesen Befehl verwenden, um die bereitgestellte Engine zu aktualisieren und neue Benutzer zu erstellen.

**Nutzung**:
```bash 
%project_engine_update_users project=<Project_Name>
```
Wo:

- project: Name des Projekts.

**Ausgabe**:
```
Username and password of each user on the engine
```

## %project_engine_update_auth

**Beschreibung**: Aktualisiert die bereitgestellte Engine, oder fügt neue Autorisierungen hinzu, ohne die Engine anhalten und erneut bereitstellen zu müssen.

**Nutzung**:
```bash 
%project_engine_update_auth project=<Project_Name>
```
Wo:

- project: Name des Projekts.


**Ausgabe**:
```
Authorizations updated
```

## %project_connection_add

**Beschreibung**: Aktualisiert die Verbindung für die bereitgestellte Engine. Verwenden Sie diesen Befehl, um von einem anderen Notebook aus eine Verbindung zur Engine herzustellen, ohne manuell eine neue Verbindung erstellen zu müssen.

**Nutzung**:
```bash 
%project_connection_add project=<Project_Name>
```
Wo:

- project: Name des Projekts.


**Ausgabe**:
```
The connection manager shows the refreshed connection
```

## %help

**Beschreibung**: Zeigt die Liste der vom AI Unlimited-Kernel bereitgestellten magischen Befehle an.

**Nutzung**:
```bash
%help
```
Darüber hinaus können Sie für jeden Befehl ausführliche Hilfemeldungen sehen.

**Nutzung**:
```bash 
%help `command`
```
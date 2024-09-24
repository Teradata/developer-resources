---
id: suspend-and-restore-project
title: Anhalten und Wiederherstellen eines Projekts
description: So unterbrechen Sie Projekteund setzen diese wieder fort, um die Kosten im Griff zu behalten.
sidebar_position: 2
sidebar_label: Anhalten und Wiederherstellen eines Projekts
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Anhalten und Wiederherstellen eines Projekts

Sie können ein Projekt nach Bedarf anhalten und wiederherstellen.


## Anhalten

Um Kosten für nicht benötigte Engine-Ressourcen zu vermeiden, halten Sie Projekte an, an denen Sie nicht arbeiten.

Benutzerberechtigungen, Objektspeicherberechtigungen und Datenobjekte werden gespeichert. Wenn Sie das Projekt wiederherstellen und erneut bereitstellen, können Sie dort weitermachen, wo Sie aufgehört haben.

Führen Sie in Ihrem Notebook diesen magischen Befehl aus:

```bash 
%project_engine_suspend <Project_Name>
```


## Wiederherstellen (erneut bereitstellen)

Führen Sie in Ihrem Notebook diesen magischen Befehl aus: 

<Tabs>
<TabItem value="aws1" label="AWS">

```bash 
%project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore-<true|false>, prefixlist=<Prefix_List>, securitygroups=<Security_Group>, cidrs=<CIDR>, tags=<Tags>, iamrole=<IAM_Role>, roleprefix=<Role_Prefix>, permissionboundary=<Permission_Boundary>
```
</TabItem>
<TabItem value="azure" label="Azure">

```bash 
%project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore=<true|false>, network=<Network>, keyvault=<Key_Vault>, keyvaultresourcegroup=<Key_Vault_Resource_Group>, networkresourcegroup=<Network_Resource_Group>
```
</TabItem>
</Tabs>

Wenn Sie die Anzahl der Knoten nicht angeben, wird ein Knoten bereitgestellt. 

Belassen Sie für den Wiederherstellungsparameter den Standardwert „true“. Dadurch wird das Projekt auf den Status des letzten Git-Commits zurückgesetzt.

Bei jeder Bereitstellung der Engine wird für jeden Benutzer ein neues Passwort für die Verbindung mit der Engine generiert.

:::tip
Erfahren Sie mehr über die [magischen Befehle](../explore-and-analyze-data/magic-commands.md) von AI Unlimited.
:::


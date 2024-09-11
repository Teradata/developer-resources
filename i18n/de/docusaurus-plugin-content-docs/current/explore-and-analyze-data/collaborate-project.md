---
id: collaborate-project
title: An einem Projekt zusammenarbeiten
description: Erfahren Sie, wie Sie als Mitarbeiter auf ein Projekt zugreifen können
sidebar_position: 3
sidebar_label: An einem Projekt zusammenarbeiten
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# An einem Projekt zusammenarbeiten

Ein Projekt ist ein Mittel zum Erkunden und Analysieren von Daten aus einem Jupyter-Notebook. 

:::note
Jedes Projekt hat ein Git-Repository. [Erfahren Sie warum](../glossary.md#project-repository).
:::

Ein Projektbesitzer könnte dich als Mitarbeiter [zu einem Projekt hinzufügen](../manage-ai-unlimited/add-collaborators.md). Um einen Beitrag zu leisten, müssen Sie von einem Jupyter-Notebook aus auf das Projekt zugreifen.


## Bevor Sie beginnen

- Erhalten Sie vom Projektbesitzer diese Elemente:
  - Die IP-Adresse oder der Hostname des [AI Unlimited-Manager](../glossary.md#ai-unlimited-manager)
  - Den Projektnamen

- Aus Ihrem Profil, [holen Sie sich Ihren API-Schlüssel](./get-api-key.md). 

:::tip
Führen Sie `%help` aus, um Einzelheiten zu allen in Ihrem Notebook verfügbaren magischen Befehlen zu erhalten. Führen Sie `%help <command>` aus, um Einzelheiten zu einem davon zu erhalten. 

Oder erfahren Sie mehr über die [magische Befehle](./magic-commands.md) speziell für AI Unlimited. 
:::


## Zugriff auf das Projekt

1. Stellen Sie eine Verbindung zu JupyterLab her, öffnen Sie ein Notebook und wählen Sie den AI Unlimited-Kernel aus.

2. Stellen Sie eine Verbindung zum Manager her.
    ```bash 
    %workspaces_config host=<ip_or_hostname>, apikey=<API_Key>, withtls=<T|F>
    ```

3. Finden Sie heraus, ob die Engine bereitgestellt ist.
    ```bash 
    %project_engine_list project=<Project_Name>
    ```

4. Wenn die Engine nicht bereitgestellt ist, stellen Sie sie bereit und stellen Sie das Projekt wieder her. 

   Die Größe kann klein, mittel, groß oder extragroß sein. Die Standardeinstellung ist klein. Siehe Preisinformationen von [AWS](http://aws.amazon.com/marketplace/pp/prodview-2srvuo3mwqlig) oder [Azure](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/teradata.ai-unlimited?tab=Overview).
   
   Wenn Sie die Anzahl der Knoten nicht angeben, wird ein Knoten bereitgestellt. Der Standardwert für die Wiederherstellung ist „true“.
   
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

5. Holen Sie sich Ihr Passwort für die Engine.
   ```bash
   %project_user_list project=<Project_Name>
   ```

6. Aktualisieren Sie die Verbindung, um Ihr Notebook einzuschließen.
   ```bash 
   %project_connection_add project=<Project_Name>
   ```

7. Stellen Sie eine Verbindung zum Projekt her.
   ```bash
   %connect <Project_Name>
   ```
   Geben Sie Ihr Passwort ein, wenn die Verbindung hergestellt ist.
   
Sie sind fertig! Jetzt können Sie zum Projekt beitragen.



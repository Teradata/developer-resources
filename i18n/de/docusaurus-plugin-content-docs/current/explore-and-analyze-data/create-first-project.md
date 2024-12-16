---
id: create-first-project
title: Erstellen Sie Ihr erstes Projekt
description: Führen Sie einen einfachen Workflow von einem Jupyter-Notebook aus aus.
sidebar_label: Erstellen Sie Ihr erstes Projekt
sidebar_position: 2
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Erstellen Sie Ihr erstes Projekt

Ein Projekt ist ein Mittel zum Erkunden und Analysieren von Daten aus einem Jupyter-Notebook. 

:::note
Jedes Projekt hat ein Git-Repository. [Erfahren Sie warum](../glossary.md#project-repository).
:::

Für Ihr erstes Projekt führen Sie mithilfe der von uns bereitgestellten Daten diesen einfachen Arbeitsablauf durch:

- Erstellen des Projekts
- Bereitstellen der Engine
- Herstellen einer Verbindung zu den Daten und Ausführen einer Workload
- Anhalten der Engine


## Bevor Sie beginnen

- Ihr AI Unlimited-Administrator ist die Person in Ihrer Organisation, die AI Unlimited eingerichtet hat. Erhalten Sie von Ihrem Administrator diese Elemente:

  - Die IP-Adresse oder der Hostname des [AI Unlimited-Manager](../glossary.md#ai-unlimited-manager).

  - Diese Umgebungsvariablen:   
    <Tabs>
    <TabItem value="aws" label="AWS" default>
    `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY` und `AWS_SESSION_TOKEN`

    </TabItem>
    <TabItem value="azure" label="Azure">
    `ARM_SUBSCRIPTION_ID`, `ARM_CLIENT_ID` und `ARM_CLIENT_SECRET`

    </TabItem>
    </Tabs> 

- Aus Ihrem Profil, [holen Sie sich Ihren API-Schlüssel](./get-api-key.md).

- Zum Ausführen der Beispiel-Workload benötigen Sie die Datei `salescenter.csv`. Laden Sie die Datei von [AI Unlimited GitHub-Repository](https://github.com/Teradata/ai-unlimited/tree/develop/examples/GetStarted/data) herunter und laden Sie sie in Ihren Amazon Simple Storage Service (S3)- oder Azure Blob Storage-Speicherort hoch. Oder ändern Sie das Beispiel entsprechend, wenn Sie eine eigene Datei verwenden.


## Verbinden und Ausführen Ihrer ersten Workload

:::tip
Führen Sie `%help` aus, um Einzelheiten zu allen in Ihrem Notebook verfügbaren magischen Befehlen zu erhalten. Führen Sie `%help <command>` aus, um Einzelheiten zu einem davon zu erhalten. 

Oder erfahren Sie mehr über die [magische Befehle](./magic-commands.md) speziell für AI Unlimited. 
:::

1. Stellen Sie eine Verbindung zu JupyterLab her, öffnen Sie ein Notebook und wählen Sie den AI Unlimited-Kernel aus.

2. Stellen Sie eine Verbindung zum Manager her.
    ```bash
    %workspaces_config host=<ip_or_hostname>, apikey=<API_Key>, withtls=T 	
    ```

3. Erstellen Sie das Projekt.
    ```bash
    %project_create project=<Project_Name>, env=<Cloud_Service_Provider>
    ```

4. Erstellen Sie eine Objektspeicherautorisierung zum Speichern der Anmeldeinformationen des Cloud-Dienstanbieters. 

    Ersetzen Sie `ACCESS_KEY_ID`, `SECRET_ACCESS_KEY` und `REGION` durch Ihre Werte.

    ```bash
    %project_auth_create name=<Authorization_Name>, project=<Project_Name>, key=<ACCESS_KEY_ID>, secret=<SECRET_ACCESS_KEY>, region=<REGION>
    ```

5. Stellen Sie die Engine bereit.

    Die Größe kann klein, mittel, groß oder extragroß sein. Die Standardeinstellung ist klein. Siehe Preisinformationen von [AWS](http://aws.amazon.com/marketplace/pp/prodview-2srvuo3mwqlig) oder [Azure](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/teradata.ai-unlimited?tab=Overview).
    ```bash
    %project_engine_deploy name=<Project_Name>, size=<Size_of_Engine>
    ```
    Der Bereitstellungsvorgang dauert einige Minuten. Dabei wird ein Passwort generiert.

6. Stellen Sie eine Verbindung zum Projekt her.
    ```bash
    %connect <Project_Name>
    ```
    Geben Sie das generierte Passwort ein, wenn die Verbindung hergestellt ist.

7. Führen Sie die Beispielarbeitslast aus.

    :::note
    Stellen Sie sicher, dass in der ausgewählten Datenbank keine Tabellen mit dem Namen SalesCenter oder SalesDemo vorhanden sind. Ersetzen Sie `Authorization_Name` und die `salescenter.csv_file_location`-Werte im folgenden Beispiel durch Ihre eigenen Werte.
    ::::

    a. Erstellen Sie eine Tabelle zum Speichern der Verkaufszentrumdaten. 
    ```sql
    DROP FOREIGN TABLE SalesCenter;

    CREATE MULTISET FOREIGN TABLE SalesCenter ,
    EXTERNAL SECURITY DEFINER TRUSTED <Authorization_Name>
    (
        Sales_Center_id INTEGER NOT NULL,
        Sales_Center_Name VARCHAR(255) CHARACTER SET LATIN NOT CASESPECIFIC
    )
    USING
    (
        LOCATION ('<salescenter.csv_file_location>')
        MANIFEST ('FALSE')
        ROWFORMAT  ('{"field_delimiter":",","record_delimiter":"\n","character_set":"LATIN"}')
        STOREDAS ('TEXTFILE')
        HEADER ('TRUE')
        STRIP_EXTERIOR_SPACES ('FALSE')
        STRIP_ENCLOSING_CHAR ('NONE')
    )
    NO PRIMARY INDEX;

    ```
     b. Überprüfen Sie, ob die Daten eingefügt wurden.
    ```sql
    SELECT * FROM SalesCenter ORDER BY 1
    ```
    c. Erstellen Sie eine Tabelle mit den Verkaufsdemodaten.
    ```sql
    DROP FOREIGN TABLE SalesDemo;
    CREATE MULTISET FOREIGN TABLE SalesDemo ,
    EXTERNAL SECURITY DEFINER TRUSTED <Authorization_Name>
    (
        Sales_Center_ID INTEGER NOT NULL,
        UNITS DECIMAL(15,4),
        SALES DECIMAL(15,2),
        "COST" DECIMAL(15,2)
    )
   USING
   (
       LOCATION ('<salescenter.csv_file_location>')
       MANIFEST ('FALSE')
       ROWFORMAT  ('{"field_delimiter":",","record_delimiter":"\n","character_set":"LATIN"}')
       STOREDAS ('TEXTFILE')
       HEADER ('FALSE')
       STRIP_EXTERIOR_SPACES ('FALSE')
       STRIP_ENCLOSING_CHAR ('"')
   )
   NO PRIMARY INDEX;
    ```
    d. Überprüfen Sie, ob die Verkaufsdemodaten erfolgreich eingefügt wurden.

    ```sql
    SELECT * FROM SalesDemo ORDER BY sales
    ```
    Öffnen Sie den Navigator für Ihre Verbindung und überprüfen Sie, ob die Tabellen erstellt wurden. Führen Sie eine Zeilenzählung für die Tabellen durch, um zu überprüfen, ob die Daten geladen wurden.

    e. Stellen Sie die Daten in einem Diagramm dar, um das Ergebnis zu visualisieren.

    Geben Sie die X- und Y-Achsen für Ihr Diagramm an.

    ```bash
    %chart sales_center_name, sales, title=Sales Data
    ```
    f.	Löschen Sie die Tabellen.
    ```sql
    DROP TABLE SalesCenter;
    DROP TABLE SalesDemo;
    ```

8. Sichern Sie Ihre Projektmetadaten und Objektdefinitionen (das Schema) in Ihrem Git-Repository.
	```bash
	%project_backup project=<Project_Name>
	```
   Dadurch wird Ihr Projekt gesichert, die Engine wird jedoch nicht angehalten.
   
9. Unterbrechen Sie die Nutzung der Engine, um die Zahlung für nicht benötigte Engine-Ressourcen zu vermeiden.
    ```bash
    %project_engine_suspend project=<Project_Name>
    ```
   Dadurch wird Ihr Projekt gesichert und die Engine angehalten. Normalerweise verwenden Sie `%project_backup` nicht unmittelbar gefolgt von `%project_engine_suspend`.

Herzlichen Glückwunsch! Sie haben Ihre erste Arbeitslast ausgeführt.
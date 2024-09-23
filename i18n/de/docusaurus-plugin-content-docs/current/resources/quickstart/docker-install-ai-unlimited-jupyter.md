---
id: run-ai-unlimited-jupyterlab-docker
title: Führen Sie den Manager und JupyterLab lokal aus
description: Erfahren Sie, wie Sie den AI Unlimited Manager und JupyterLab mit Docker ausführen.
sidebar_label: Ausführen des Managers und JupyterLab mithilfe von Docker
sidebar_position: 3
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Ausführen des Managers und JupyterLab mithilfe von Docker

Der AI Unlimited-Manager orchestriert die Bereitstellung der Engine und enthält eine webbasierte Benutzeroberfläche zur Überwachung von Projekten. Und im Manager richten Sie AI Unlimited ein. 

Sie verwenden JupyterLab, um Daten zu untersuchen und zu analysieren.

Sie verwenden [Docker Compose](https://docs.docker.com/compose/), um den AI Unlimited Manager und JupyterLab mit dem AI Unlimited Jupyter Kernel lokal in Containern auszuführen. 

:::tip
Wenn Sie Unterstützung bei der Installation benötigen, senden Sie eine E-Mail an das <a href="mailto:aiunlimited.support@Teradata.com">Support-Team</a> oder fragen Sie die [Gemeinschaft](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa).
:::

## Voraussetzungen

- Ein AWS- oder Azure-Konto mit nutzungsbasierter Abrechnung, auf dem die Engine von einem Jupyter-Notebook aus bereitgestellt werden kann
- Ein [GitHub](https://github.com)- oder [GitLab](https://gitlab.com)-Konto zum Hosten jedes Projekt-Repositorys zur Authentifizierung von Benutzern und Speicherung von Projektinformationen
- Ihr Objektspeicher, in dem sich Ihr Amazon- oder ADLS Gen2-Datensee befindet
- [Docker](https://www.docker.com/get-started/) auf Ihrem Computer installiert


## Festlegen der Speicherorte für Konfigurationsdateien

1. Legen Sie optional die Umgebungsvariable `AI_UNLIMITED_HOME` auf das Verzeichnis fest, in dem die Konfigurations- und Datendateien des Managers gespeichert werden sollen. Stellen Sie sicher, dass das Verzeichnis vorhanden ist und die entsprechende Berechtigung erteilt wurde. Der Standardspeicherort ist `./volumes/ai-unlimited`.

    | **Lokaler Standort** | **Containerstandort** | **Nutzung** |
    |----------------|--------------------|-------|
    | $AI_UNLIMITED_HOME | /etc/td | Speichert Daten und Konfiguration |

	:::tip
	Erfahren Sie mehr über die Umgebungsvariablen in [AWS](https://docs.aws.amazon.com/sdkref/latest/guide/environment-variables.html) oder [Azure](https://github.com/paulbouwer/terraform-azure-quickstarts-samples/blob/master/README.md#azure-authentication).
	:::

2. Legen Sie optional die Umgebungsvariable `JUPYTER_HOME` auf das Verzeichnis fest, in dem die JupyterLab-Konfigurationsdateien gespeichert werden sollen. Der Standardspeicherort ist `~/.jupyter`.


## Klonen des Repository

Der Ordner `deployments/docker` im von Teradata bereitgestellten [AI Unlimited GitHub-Repository](https://github.com/Teradata/ai-unlimited) enthält die folgenden Dateien, die Sie zum Ausführen des Managers und von JupyterLab benötigen:
- `[AWS or Azure]-credentials-env-vars.yaml`
- `ai-unlimited.yaml`
- `jupyter.yaml` 

Klonen Sie das Repository.

    ``` bash
    git clone https://github.com/Teradata/ai-unlimited
	```


## Übergeben Sie die Anmeldeinformationen Ihres Cloud-Dienstanbieters an Docker

:::note 
Sie können die Anmeldeinformationen auf zwei Arten weitergeben:
- Verwenden Sie `[AWS or Azure]-credentials-env-vars.yaml`, das Umgebungsvariablen zum Speichern Ihrer Anmeldeinformationen enthält.
- Verwenden Sie ein lokales Volume, das Ihre Anmeldeinformationen enthält. 

Siehe beide Methoden im Abschnitt **Jupyter und AI Unlimited** von [Bereitstellen mit Docker Compose](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/docker/README.md) im Teradata AI Unlimited GitHub-Repository.

Dieser QuickStart verwendet die erste Methode.
:::

1. Kopieren Sie diese Umgebungsvariablen aus der Konsole Ihres Cloud-Dienstanbieters.

	<Tabs>
		<TabItem value="aws" label="AWS" default>
		`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY` und `AWS_SESSION_TOKEN`
		</TabItem>

		<TabItem value="azure" label="Azure">
		`ARM_SUBSCRIPTION_ID`, `ARM_CLIENT_ID` und `ARM_CLIENT_SECRET`
		</TabItem>
	</Tabs>

2. Gehen Sie zum Verzeichnis, in dem sich `[AWS or Azure]-credentials-env-vars.yaml` befindet, und aktualisieren Sie die Umgebungsvariablenwerte der Datei.


## Starten Sie den Manager und JupyterLab

1. Starten Sie den Manager und JupyterLab über das Verzeichnis, in dem sich `[AWS or Azure]-credentials-env-vars.yaml`, `ai-unlimited.yaml` und `jupyter.yaml` befinden.

	:::note
	Die Kennzeichnung `-d` im Befehl ist optional.
	:::

	<Tabs>
		<TabItem value="aws" label="AWS" default>
		```bash title="Run the Docker Compose file in the background "
		docker compose -f ai-unlimited.yaml -f aws-credentials-env-vars.yaml -f jupyter.yaml -d up 
		```
		</TabItem>
		<TabItem value="azure" label="Azure">
		```bash title="Run the Docker Compose file in the background "
		docker compose -f ai-unlimited.yaml -f azure-credentials-env-vars.yaml -f jupyter.yaml -d up
		```
		</TabItem></Tabs>


	Der Befehl lädt den Manager und die JupyterLab-Container herunter und startet sie.

2. Um das Jupyter-Token abzurufen, listen Sie die aktuell ausgeführten Container auf.

	```bash
	docker ps 
	```
	Und ermitteln Sie den Namen des JupyterLab-Containers.

	Suchen Sie dann in den Protokollen des Containers nach Vorkommen der Zeichenfolge „Token“.

	```bash
	docker logs <container_name> | grep 'Token'
	```

## Überprüfen des Zugriffs

Wenn der Manager bereit ist, können Sie unter `http://localhost:3000` darauf zugreifen. 

Wenn JupyterLab bereit ist, können Sie unter `http://localhost:8888` darauf zugreifen und das Token eingeben. 


## Wie geht es weiter?

[Erstellen Sie eine OAuth-App](../create-oauth-app.md), um die Authentifizierung zwischen AI Unlimited und Ihrem Git-Provider-Konto zu ermöglichen.



---
id: run-jupyter-docker
title: Ausführen von JupyterLab mit Docker
description: Erfahren Sie, wie Sie JupyterLab mit dem AI Unlimited Jupyter Kernel auf Ihrem Computer ausführen.
sidebar_label: Lokale Ausführung mit Docker
sidebar_position: 3
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Führen Sie JupyterLab lokal mit Docker aus

Sie verwenden [Docker Compose](https://docs.docker.com/compose/), um JupyterLab mit dem AI Unlimited Jupyter Kernel lokal in einem Container auszuführen.

:::tip
Wenn Sie Unterstützung bei der Installation benötigen, senden Sie eine E-Mail an das <a href="mailto:aiunlimited.support@Teradata.com">Support-Team</a> oder fragen Sie die [Gemeinschaft](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa).
:::


## Festlegen eines Speicherorts für JupyterLab-Konfigurationsdateien

Legen Sie optional die Umgebungsvariable `JUPYTER_HOME` auf das Verzeichnis fest, in dem die JupyterLab-Konfigurationsdateien gespeichert werden sollen. Der Standardspeicherort ist `~/.jupyter`.

:::tip
Erfahren Sie mehr über die Umgebungsvariablen in [AWS](https://docs.aws.amazon.com/sdkref/latest/guide/environment-variables.html) oder [Azure](https://github.com/paulbouwer/terraform-azure-quickstarts-samples/blob/master/README.md#azure-authentication).
:::


## Klonen des Repository

Der Ordner `deployments/docker` im von Teradata bereitgestellten [AI Unlimited GitHub-Repository](https://github.com/Teradata/ai-unlimited) enthält die Datei [jupyter.yaml](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/docker/jupyter.yaml), die Sie zum Ausführen von JupyterLab benötigen. 

Klonen Sie das Repository.

    ``` bash
    git clone https://github.com/Teradata/ai-unlimited
	```


## Starten Sie JupyterLab

1. Gehen Sie in das Verzeichnis, in dem sich `jupyter.yaml` befindet, und starten Sie JupyterLab.

    :::note
	Die Kennzeichnung `-d` im Befehl ist optional.
	:::

  	```bash title="Run the Docker Compose file in the background "
	docker compose -f jupyter.yaml -d up 
	```
	Der Befehl lädt den JupyterLab-Container herunter und startet ihn.

2. Um das Jupyter-Token abzurufen, listen Sie die aktuell ausgeführten Container auf.

	```bash
	docker ps 
	```

	Und ermitteln Sie den Namen des JupyterLab-Containers.

	Suchen Sie dann in den Protokollen des Containers nach Vorkommen der Zeichenfolge „Token“.

	```bash
	docker logs <container_name> | grep 'Token'
	```


## Überprüfen des Zugriffs auf JupyterLab

Wenn JupyterLab bereit ist, können Sie unter `http://localhost:8888` darauf zugreifen und das Token eingeben. 




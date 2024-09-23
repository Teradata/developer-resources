---
id: docker-when-you're-done
title: Schnellstart | Wenn Sie fertig sind
description: Erfahren Sie, was zu tun ist, wenn Sie mit der Verwendung des Schnellstarts fertig sind.
sidebar_label: Wenn Sie fertig sind
sidebar_position: 7
pagination_prev: null
pagination_next: null
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Wenn Sie fertig sind

Um Kosten für nicht benötigte Engine-Ressourcen zu vermeiden, [halten Sie Projekte an](../../manage-ai-unlimited/suspend-and-restore-project.md), wenn Sie diese gerade nicht bearbeiten. Sie können sie jederzeit wiederherstellen.

Wenn Sie mit dem Schnellstart fertig sind und Ressourcen auf Ihrem Computer freigeben möchten, führen Sie diesen Befehl aus, um alle erstellten Container und Netzwerke zu stoppen und zu entfernen.

<Tabs>
<TabItem value="aws" label="AWS">
  ```bash 
docker-compose -f ai-unlimited.yaml -f aws-credentials-env-vars.yaml -f jupyter.yaml down
  ```
</TabItem>

<TabItem value="azure" label="Azure">
 ```bash
docker-compose -f ai-unlimited.yaml -f azure-credentials-env-vars.yaml -f jupyter.yaml down
  ```
</TabItem>
</Tabs> 

Sie können auch alle lokalen Verzeichnisse oder Dateien entfernen, die Engine-Daten enthalten, die Sie in den Docker-Containern gemountet haben. 


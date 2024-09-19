---
id: get-started
title: Erste Schritte
description: Erfahren Sie, wie Sie mit einer Self-Service-KI/ML-Engine auf Abruf beginnen.
sidebar_label: Erste Schritte
sidebar_position: 1
pagination_prev: null
pagination_next: null
---

# Erste Schritte

Erfahren Sie, wie Sie die [AI Unlimited](https://www.teradata.com/platform/ai-unlimited) KI/ML-Engine in der Cloud installieren und verwenden.

Mit AI Unlimited können Datenwissenschaftler und Dateningenieure große Datensätze in einem [Jupyter](https://jupyter.org/)-Notebook mithilfe [ClearScape Analytics™](https://docs.teradata.com/access/sources/dita/topic?dita:mapPath=phg1621910019905.ditamap&dita:ditavalPath=pny1626732985837.ditaval&dita:topicPath=gma1702668333653.dita) von Funktionen untersuchen und analysieren – im Self-Service-Verfahren und auf Abruf. 


## So funktioniert es

Sie verbinden Ihr Notebook mit der KI/ML-Engine auf [AWS](https://aws.amazon.com/) oder [Azure](https://azure.microsoft.com/en-us) und verbinden die Engine mit Ihrem [Amazon S3](https://aws.amazon.com/pm/serv-s3/?gclid=Cj0KCQjwlZixBhCoARIsAIC745AmyEzPaBnrARQxyUW_un0BjgTxlHygMScf4ZbX-7dTeznc-psOFlwaAkjmEALw_wcB&trk=fecf68c9-3874-4ae2-a7ed-72b6d19c8034&sc_channel=ps&ef_id=Cj0KCQjwlZixBhCoARIsAIC745AmyEzPaBnrARQxyUW_un0BjgTxlHygMScf4ZbX-7dTeznc-psOFlwaAkjmEALw_wcB:G:s&s_kwcid=AL!4422!3!536452728638!e!!g!!amazon%20s3!11204620052!112938567994)- oder [ADLS Gen2](https://learn.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction)-Data Lake. Sie können Ihr Analyseprojekt jederzeit anhalten und wiederherstellen und zahlen nur für die Stunden, die Sie nutzen.

:::note
Wenn AI Unlimited bereits von jemandem in Ihrer Organisation installiert und eingerichtet wurde, können Sie direkt zu [Daten erkunden und analysieren](../explore-and-analyze-data) gehen, um zu beginnen.
:::


## In AI Unlimited enthalten

- Eine KI/ML-Engine, die Sie auf AWS oder Azure bereitstellen
- Der AI Unlimited Manager, der die Bereitstellung der Engine koordiniert und eine webbasierte Benutzeroberfläche für die Einrichtung enthält
- Das [AI Unlimited Jupyter Kernel](https://downloads.teradata.com/download/tools/teradata-ai-unlimited-jupyter-kernel) zum Verwalten von Projekten in Notebooks


## Voraussetzungen

- Ein nutzungsbasiertes AWS- oder Azure-Konto, auf dem Sie Rechenressourcen bereitstellen können. Informationen zu den Anforderungen für Ihr [AWS](../resources/aws-requirements.md)- oder [Azure](../resources/azure-requirements.md)-Konto finden Sie hier.
- Ein [GitHub](https://github.com)- oder [GitLab](https://gitlab.com)-Konto zum Hosten jedes Projekt-Repositorys zur Authentifizierung von Benutzern und Speicherung von Projektinformationen.
- Ihr Objektspeicher, in dem sich Ihr Amazon- oder ADLS Gen2-Datensee befindet.
- JupyterLab. Siehe [Installationsoptionen](../resources/jupyterlab).

:::tip
Wenn Sie [Manager](../glossary.md#ai-unlimited-manager) installieren, geben Sie die Details an, die für die Bereitstellung in der Cloud erforderlich sind. Siehe [AWS-Details](../install-ai-unlimited/prod-aws-console-deploy-ai-unlimited.md) oder [Azure-Details](../install-ai-unlimited/prod-azure-portal-deploy-manager.md) – wenn Sie mit einem Cloud-Administrator zusammenarbeiten möchten, um diese Informationen im Voraus zu erhalten.
:::

:::note
Mit AI Unlimited können Sie mit anderen Benutzern an Projekten zusammenarbeiten. 

Wenn Sie einen einfacheren Einzelbenutzeransatz bevorzugen, probieren Sie [Schnellstart](../resources/quickstart) aus, wodurch der Manager und JupyterLab in Docker-Containern auf Ihrem Computer ausgeführt werden.
:::


## Abonnieren

Abonnieren Sie AI Unlimited im [AWS Marketplace](http://aws.amazon.com/marketplace/pp/prodview-2srvuo3mwqlig) oder [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/teradata.ai-unlimited?tab=Overview).

**Nur für Azure**: Bevor Sie **Jetzt holen** auswählen, führen Sie diese Schritte aus:
1. Lesen Sie die [Lizenzvereinbarung](https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RW1lQlq).
2. Open a terminal window and run this command.
    ``` bash
    az vm image terms accept --publisher teradata --offer ai-unlimited-vm --plan ai-unlimited-image
	```

Kehren Sie für AWS oder Azure nach dem Abonnieren zu dieser Dokumentationsseite zurück und fahren Sie mit **Wie geht es weiter** fort.


## Wie geht es weiter?

Jetzt können Sie AI Unlimited auf [AWS](deploy-manager-aws-console) oder [Azure](deploy-manager-azure-portal) installieren.









---
id: get-started
title: Empezar
description: Descubra cómo comenzar a utilizar un motor de IA/ML de autoservicio y bajo demanda.
sidebar_label: Empezar
sidebar_position: 1
pagination_prev: null
pagination_next: null
---

# Empezar

Aprenda a instalar y utilizar el motor de IA/ML de [AI Unlimited](https://www.teradata.com/platform/ai-unlimited) en la nube.

Con AI Unlimited, los científicos e ingenieros de datos pueden explorar y analizar grandes conjuntos de datos en un cuaderno de [Jupyter](https://jupyter.org/) usando [ClearScape Analytics™](https://docs.teradata.com/access/sources/dita/topic?dita:mapPath=phg1621910019905.ditamap&dita:ditavalPath=pny1626732985837.ditaval&dita:topicPath=gma1702668333653.dita)funciones, por autoservicio y bajo demanda. 


## Cómo funciona

Conecte su notebook al motor de IA/ML en [AWS](https://aws.amazon.com/) o [Azure](https://azure.microsoft.com/en-us) y conecte el motor a su data lake [Amazon S3](https://aws.amazon.com/pm/serv-s3/?gclid=Cj0KCQjwlZixBhCoARIsAIC745AmyEzPaBnrARQxyUW_un0BjgTxlHygMScf4ZbX-7dTeznc-psOFlwaAkjmEALw_wcB&trk=fecf68c9-3874-4ae2-a7ed-72b6d19c8034&sc_channel=ps&ef_id=Cj0KCQjwlZixBhCoARIsAIC745AmyEzPaBnrARQxyUW_un0BjgTxlHygMScf4ZbX-7dTeznc-psOFlwaAkjmEALw_wcB:G:s&s_kwcid=AL!4422!3!536452728638!e!!g!!amazon%20s3!11204620052!112938567994) o [ADLS Gen2](https://learn.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction). Puede suspender y restaurar su proyecto de análisis en cualquier momento y pagar solo por las horas que use.

:::note
Si alguien de su organización ya instaló y configuró AI Unlimited, puede ir directamente a [Explorar y analizar datos](../explore-and-analyze-data) para comenzar.
:::


## Incluido en AI Unlimited

- Un motor de IA/ML que se implementa en AWS o Azure
- El administrador de AI Unlimited, que organiza la implementación del motor e incluye una interfaz de usuario basada en web para la configuración
- El [AI Unlimited Jupyter Kernel](https://downloads.teradata.com/download/tools/teradata-ai-unlimited-jupyter-kernel) para gestionar proyectos en cuadernos


## Requisitos previos

- Una cuenta de AWS o Azure de pago por uso en la que se puedan aprovisionar recursos informáticos. Consulte los requisitos para su cuenta de [AWS](../resources/aws-requirements.md) o [Azure](../resources/azure-requirements.md).
- Una cuenta de [GitHub](https://github.com) o [GitLab](https://gitlab.com) para alojar cada repositorio del proyecto para autenticar usuarios y almacenar información del proyecto.
- Su almacenamiento de objetos, donde reside su data lake de Amazon o ADLS Gen2.
- JupyterLab. Consulte [opciones de instalación](../resources/jupyterlab).

:::tip
Cuando instale el [administrador](../glossary.md#ai-unlimited-manager), proporcionará los detalles necesarios para su implementación en la nube. Consulte [Detalles de AWS](../install-ai-unlimited/prod-aws-console-deploy-ai-unlimited.md) o [Detalles de Azure](../install-ai-unlimited/prod-azure-portal-deploy-manager.md) si quiere trabajar con un administrador de la nube para obtenerlos por adelantado.
:::

:::note
Con AI Unlimited, puede colaborar en proyectos con otros usuarios. 

Si prefiere un enfoque más simple y de usuario único, pruebe el [Inicio rápido](../resources/quickstart) que ejecuta el administrador y JupyterLab en contenedores Docker en su ordenador.
:::


## Suscribir

Suscríbase a AI Unlimited en el [AWS Marketplace](http://aws.amazon.com/marketplace/pp/prodview-2srvuo3mwqlig) o el [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/teradata.ai-unlimited?tab=Overview).

**Solo para Azure**: antes de seleccionar **Consígalo ahora**, complete estos pasos:
1. Lea el [Acuerdo de licencia](https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RW1lQlq).
2. Open a terminal window and run this command.
    ``` bash
    az vm image terms accept --publisher teradata --offer ai-unlimited-vm --plan ai-unlimited-image
	```

Para AWS o Azure, después de suscribirse, regrese a este sitio de documentación y continúe con **¿Qué sigue?**.


## ¿Qué sigue?

Ahora está listo para instalar AI Unlimited en [AWS](deploy-manager-aws-console) o [Azure](deploy-manager-azure-portal).









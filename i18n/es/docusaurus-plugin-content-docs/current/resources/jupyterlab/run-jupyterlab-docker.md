---
id: run-jupyter-docker
title: Ejecutar JupyterLab usando Docker
description: Aprenda a ejecutar JupyterLab con el AI Unlimited Jupyter Kernel en su ordenador.
sidebar_label: Ejecutar localmente usando Docker
sidebar_position: 3
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Ejecutar JupyterLab localmente usando Docker

Utilizará [Docker Compose](https://docs.docker.com/compose/) para ejecutar JupyterLab, con el AI Unlimited Jupyter Kernel, localmente en un contenedor.

:::tip
Para obtener ayuda con la instalación, envíe un correo electrónico al <a href="mailto:aiunlimited.support@Teradata.com">equipo de soporte</a> o pregunte a la [comunidad](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa).
:::


## Establecer una ubicación para los archivos de configuración de JupyterLab

De manera opcional, configure la variable de entorno `JUPYTER_HOME` en el directorio en el que se almacenarán los archivos de configuración de JupyterLab. La ubicación predeterminada es `~/.jupyter`.

:::tip
Obtenga más información sobre las variables de entorno de [AWS](https://docs.aws.amazon.com/sdkref/latest/guide/environment-variables.html) o [Azure](https://github.com/paulbouwer/terraform-azure-quickstarts-samples/blob/master/README.md#azure-authentication).
:::


## Clonar el repositorio

La carpeta `deployments/docker` en el [repositorio de GitHub de AI Unlimited](https://github.com/Teradata/ai-unlimited) proporcionado por Teradata incluye el archivo [jupyter.yaml](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/docker/jupyter.yaml) que necesita para ejecutar JupyterLab. 

Clone el repositorio.

    ``` bash
    git clone https://github.com/Teradata/ai-unlimited
	```


## Iniciar JupyterLab

1. Vaya al directorio donde se encuentra `jupyter.yaml` e inicie JupyterLab.

    :::note
	La bandera `-d` en el comando es opcional.
	:::

  	```bash title="Run the Docker Compose file in the background "
	docker compose -f jupyter.yaml -d up 
	```
	El comando descarga e inicia el contenedor JupyterLab.

2. Para recuperar el token Jupyter, enumere los contenedores que se están ejecutando actualmente.

	```bash
	docker ps 
	```

	E identifique el nombre del contenedor JupyterLab.

	Luego, busque ocurrencias de la cadena 'Token' en los registros del contenedor.

	```bash
	docker logs <container_name> | grep 'Token'
	```


## Verificar el acceso a JupyterLab

Cuando JupyterLab esté listo, podrá acceder a él en `http://localhost:8888` e introducir el token. 




---
id: run-ai-unlimited-jupyterlab-docker
title: Ejecutar el administrador y JupyterLab localmente
description: Aprenda a ejecutar el administrador de AI Unlimited y JupyterLab usando Docker.
sidebar_label: Ejecutar el administrador y JupyterLab usando Docker
sidebar_position: 3
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Ejecutar el administrador y JupyterLab usando Docker

El administrador de AI Unlimited organiza la implementación del motor e incluye una interfaz de usuario basada en la web para supervisar los proyectos. Además, el administrador es donde configurará AI Unlimited. 

Utilizará JupyterLab para explorar y analizar datos.

Utilizará [Docker Compose](https://docs.docker.com/compose/) para ejecutar el administrador de AI Unlimited y JupyterLab, con el AI Unlimited Jupyter Kernel, localmente en contenedores. 

:::tip
Para obtener ayuda con la instalación, envíe un correo electrónico al <a href="mailto:aiunlimited.support@Teradata.com">equipo de soporte</a> o pregunte a la [comunidad](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa).
:::

## Requisitos previos

- Una cuenta de AWS o Azure de pago por uso en la que implementar el motor desde un cuaderno Jupyter
- Una cuenta [GitHub](https://github.com) o [GitLab](https://gitlab.com) para alojar cada repositorio de proyectos para autenticar usuarios y almacenar información del proyecto
- Su almacenamiento de objetos, donde reside su data lake de Amazon o ADLS Gen2
- [Docker](https://www.docker.com/get-started/) instalado en su ordenador


## Establecer ubicaciones de archivos de configuración

1. De manera opcional, configure la variable de entorno `AI_UNLIMITED_HOME` en el directorio en el que se almacenarán los archivos de datos y configuración del administrador. Asegúrese de que el directorio exista y de que se hayan otorgado los permisos correspondientes. La ubicación predeterminada es `./volumes/ai-unlimited`.

    | **Ubicación local** | **Ubicación del contenedor** | **Uso** |
    |----------------|--------------------|-------|
    | $AI_UNLIMITED_HOME | /etc/td | Almacena datos y configuración. |

	:::tip
	Obtenga más información sobre las variables de entorno de [AWS](https://docs.aws.amazon.com/sdkref/latest/guide/environment-variables.html) o [Azure](https://github.com/paulbouwer/terraform-azure-quickstarts-samples/blob/master/README.md#azure-authentication).
	:::

2. De manera opcional, configure la variable de entorno `JUPYTER_HOME` en el directorio en el que se almacenarán los archivos de configuración de JupyterLab. La ubicación predeterminada es `~/.jupyter`.


## Clonar el repositorio

La carpeta `deployments/docker` en el [repositorio de GitHub de AI Unlimited](https://github.com/Teradata/ai-unlimited) proporcionado por Teradata incluye estos archivos que necesitará para ejecutar el administrador y JupyterLab:
- `[AWS or Azure]-credentials-env-vars.yaml`
- `ai-unlimited.yaml`
- `jupyter.yaml` 

Clone el repositorio.

    ``` bash
    git clone https://github.com/Teradata/ai-unlimited
	```


## Pasar sus credenciales de proveedor de servicios en la nube a Docker

:::note 
Puede pasar las credenciales de dos maneras:
- Utilice `[AWS or Azure]-credentials-env-vars.yaml`, que contiene variables de entorno para almacenar sus credenciales.
- Utilice un volumen local que contenga sus credenciales. 

Consulte ambos métodos en la sección **Jupyter y AI Unlimited** de [Implementar con Docker Compose](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/docker/README.md) en el repositorio de GitHub de Teradata AI Unlimited.

Este inicio rápido utiliza el primer método.
:::

1. Copie estas variables de entorno desde la consola de su proveedor de servicios en la nube.

	<Tabs>
		<TabItem value="aws" label="AWS" default>
		`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY` y `AWS_SESSION_TOKEN`
		</TabItem>

		<TabItem value="azure" label="Azure">
		`ARM_SUBSCRIPTION_ID`, `ARM_CLIENT_ID` y `ARM_CLIENT_SECRET`
		</TabItem>
	</Tabs>

2. Vaya al directorio donde se encuentra `[AWS or Azure]-credentials-env-vars.yaml` y actualice los valores de la variable de entorno del archivo.


## Inicie el administrador y JupyterLab

1. Desde el directorio donde se encuentran `[AWS or Azure]-credentials-env-vars.yaml`, `ai-unlimited.yaml` y `jupyter.yaml`, inicie el administrador y JupyterLab.

	:::note
	La bandera `-d` en el comando es opcional.
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


	El comando descarga e inicia el administrador y los contenedores de JupyterLab.

2. Para recuperar el token Jupyter, enumere los contenedores que se están ejecutando actualmente.

	```bash
	docker ps 
	```
	E identifique el nombre del contenedor JupyterLab.

	Luego busque ocurrencias de la cadena 'Token' en los registros del contenedor.

	```bash
	docker logs <container_name> | grep 'Token'
	```

## Verificar el acceso

Cuando el administrador esté listo, podrá acceder a él en `http://localhost:3000`. 

Cuando JupyterLab esté listo, podrá acceder a él en `http://localhost:8888` e introducir el token. 


## ¿Qué sigue?

[Cree una aplicación OAuth](../create-oauth-app.md) para permitir la autenticación entre AI Unlimited y su cuenta de proveedor de Git.



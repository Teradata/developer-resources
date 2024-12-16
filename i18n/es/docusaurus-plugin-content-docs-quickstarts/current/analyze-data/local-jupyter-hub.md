---
sidebar_position: 2
id: local-jupyter-hub
title: Implementar extensiones de Teradata Jupyter en JupyterHub
author: Hailing Jiang
email: Hailing.iang@teradata.com
page_last_update: November 17th, 2021
description: Implementar extensiones de Teradata Jupyter en clústeres JupyterHub del cliente
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, java applications, business intelligence, enterprise analytics, jupyter, teradatasql, ipython-sql, teradatasqlalquimia]
---

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'
import CommunityLink from '../_partials/community_link.mdx'

# Implementar extensiones de Teradata Jupyter en JupyterHub

## Información general

Para los clientes que tienen sus propios clústeres de JupyterHub, existen dos opciones para integrar extensiones de Teradata Jupyter en los clústeres existentes:

1. Utilizar la imagen de Teradata Jupyter Docker.
2. Personalizar una imagen de Docker existente para incluir extensiones de Teradata.

Esta página contiene instrucciones detalladas sobre las dos opciones. Las instrucciones se basan en el supuesto de que la implementación de JupyterHub del cliente se basa en [Zero to JupyterHub with Kubernetes](https://zero-to-jupyterhub.readthedocs.io/en/latest/index.html).

<ClearscapeDocsNote />

## Utilizar la imagen de Teradata Jupyter Docker.

Teradata proporciona una imagen de Docker lista para ejecutar que se basa en la imagen [jupyter/datascience-notebook](https://hub.docker.com/r/jupyter/datascience-notebook/). Incluye el kernel Teradata SQL, bibliotecas y controladores Teradata Python y R y extensiones Teradata para Jupyter para que sea productivo mientras interactúa con la base de datos Teradata. La imagen también contiene cuadernos de muestra que demuestran cómo utilizar el kernel SQL, las extensiones y las bibliotecas de Teradata.

Puede utilizar esta imagen de las siguientes maneras:

* Inicie un servidor personal de Jupyter Notebook en un contenedor Docker local
* Ejecute servidores JupyterLab para un equipo que usa JupyterHub

Para obtener instrucciones para iniciar un servidor personal de JupyterLab en un contenedor Docker local, consulte la [guía de instalación](https://docs.teradata.com/r/KQLs1kPXZ02rGWaS9Ktoww/Fwvns7y_a7juDWx1NixC2A). Esta sección se centrará en cómo utilizar la imagen de Teradata Jupyter Docker en el entorno JupyterHub existente de un cliente.

### Instalar la imagen de Teradata Jupyter Docker en su registro

1. Vaya a la página [Módulos Vantage para Jupyter](https://downloads.teradata.com/download/tools/vantage-modules-for-jupyter) y descargue la imagen de Docker. Es un tarball con nombre en este formato `teradatajupyterlabext_VERSION.tar.gz`.

2. Cargue la imagen:
```bash
docker load -i teradatajupyterlabext_VERSION.tar.gz
```

3. Inserte la imagen en su registro de Docker:
```bash
docker push
```

:::tip
Es posible que desee considerar cambiar el nombre de la imagen cargada para simplificar:

```bash
docker tag OLD_IMAGE_NAME NEW_IMAGE_NAME
```
:::

### Utilizar la imagen de Teradata Jupyter Docker en JupyterHub

1. Para usar la imagen de Teradata Jupyter Docker directamente en su clúster de JupyterHub, modifique el archivo de anulación como se describe [aquí en la documentación de JupyterHub](https://zero-to-jupyterhub.readthedocs.io/en/latest/jupyterhub/customizing/user-environment.html#choose-and-use-an-existing-docker-image). Reemplace `REGISTRY_URL` y `VERSION` con los valores apropiados del paso anterior:

```bash
singleuser:
  image:
  name: REGISTRY_URL/teradatajupyterlabext_VERSION
  tag: latest
```

2. Aplique los cambios al clúster como se describe en la [documentación de JupyterHub](https://zero-to-jupyterhub.readthedocs.io/en/latest/jupyterhub/customizing/extending-jupyterhub.html#applying-configuration-changes).

:::tip
Puede utilizar varios perfiles para permitir a los usuarios seleccionar qué imagen quieren usar cuando inician sesión en JupyterHub. Para obtener instrucciones detalladas y ejemplos sobre cómo configurar múltiples perfiles, consulte la [documentación de JupyterHub](https://zero-to-jupyterhub.readthedocs.io/en/latest/jupyterhub/customizing/user-environment.html#using-multiple-profiles-to-let-users-select-their-environment).
:::

### Personalizar la imagen de Teradata Jupyter Docker

Si sus usuarios necesitan algunos paquetes o cuadernos que no están incluidos en la imagen de Teradata Jupyter Docker, le recomendamos que utilice la imagen de Teradata como imagen base y cree una nueva encima de ella.

A continuación se muestra un Dockerfile de ejemplo que se basa en la imagen de Teradata y agrega paquetes y cuadernos adicionales. Utilice Dockerfile para crear una nueva imagen de Docker, envíe la imagen a un registro designado, modifique el archivo de anulación como se muestra arriba para usar la nueva imagen como imagen de usuario único y aplique los cambios al clúster como se describe anteriormente. Reemplace `REGISTRY_URL` y `VERSION` con los valores apropiados:

```bash
FROM REGISTRY_URL/teradatajupyterlabext_VERSION:latest

# install additional packages
RUN pip install --no-cache-dir astropy

# copy notebooks
COPY notebooks/. /tmp/JupyterLabRoot/DemoNotebooks/
```

## Personalizar una imagen de Docker existente para incluir extensiones de Teradata

Si lo prefiere, puede incluir el kernel de Teradata SQL y las extensiones en una imagen existente que esté utilizando actualmente.

1. Vaya a la página [Módulos Vantage para Jupyter](https://downloads.teradata.com/download/tools/vantage-modules-for-jupyter) para descargar el paquete comprimido de extensiones Jupyter de Teradata. Suponiendo que su imagen de Docker existente está basada en Linux, querrá utilizar la versión Linux de la descarga. Si no es así, descárguela para la plataforma que esté utilizando. El archivo `.zip` contiene el kernel SQL de Teradata, las extensiones y los cuadernos de muestra.
2. Descomprima el archivo del paquete en su directorio de trabajo.
3. A continuación se muestra un Dockerfile de ejemplo para agregar extensiones de Teradata Jupyter a su imagen de Docker existente. Utilice Dockerfile para crear una nueva imagen de Docker, envíe la imagen a un registro designado, modifique el archivo de anulación como se muestra arriba para usar la nueva imagen como imagen de usuario único, aplique los cambios al clúster:

    ```bash
    FROM REGISTRY_URL/your-existing-image:tag
    ENV NB_USER=jovyan \
      HOME=/home/jovyan \
      EXT_DIR=/opt/teradata/jupyterext/packages

    USER root

    ##############################################################
    # Install kernel and copy supporting files
    ##############################################################

    # Copy the kernel
    COPY ./teradatakernel /usr/local/bin
    RUN chmod 755 /usr/local/bin/teradatakernel

    # Copy directory with kernel.json file into image
    COPY ./teradatasql teradatasql/

    ##############################################################
    # Switch to user jovyan to copy the notebooks and license files.
    ##############################################################

    USER $NB_USER

    # Copy notebooks
    COPY ./notebooks/ /tmp/JupyterLabRoot/TeradataSampleNotebooks/

    # Copy license files
    COPY ./ThirdPartyLicenses /tmp/JupyterLabRoot/ThirdPartyLicenses/

    USER root

    # Install the kernel file to /opt/conda jupyter lab instance
    RUN jupyter kernelspec install ./teradatasql --prefix=/opt/conda

    ##############################################################
    # Install Teradata extensions
    ##############################################################

    COPY ./teradata_*.tgz $EXT_DIR

    WORKDIR $EXT_DIR

    RUN jupyter labextension install --no-build teradata_database* && \
      jupyter labextension install --no-build teradata_resultset* && \
      jupyter labextension install --no-build teradata_sqlhighlighter* && \
      jupyter labextension install --no-build teradata_connection_manager* && \
      jupyter labextension install --no-build teradata_preferences* && \
      jupyter lab build --dev-build=False --minimize=False && \
      rm -rf *

    WORKDIR $HOME

    # Give back ownership of /opt/conda to  jovyan
    RUN chown -R jovyan:users /opt/conda

    # Jupyter will create .local directory
    RUN rm -rf $HOME/.local
    ```

4. Opcionalmente, puede instalar el paquete Teradata para Python y el paquete Teradata para R. Consulte las páginas siguientes para obtener más detalles:
    * [Paquete Teradata para Python: página de descarga de teradataml](https://downloads.teradata.com/download/aster/teradata-python-package-teradataml)
    * [Paquete Teradata para R: página de descarga de tdplyr](https://downloads.teradata.com/download/aster/tdplyr-download-page)

## Lectura adicional
* [Sitio web de extensiones de Jupyter de Teradata](https://teradata.github.io/jupyterextensions)
* [Guía de instalación de módulos Teradata Vantage™ para Jupyter](https://docs.teradata.com/r/KQLs1kPXZ02rGWaS9Ktoww/root)
* [Guía del usuario del paquete Teradata® para Python](https://docs.teradata.com/r/1YKutX2ODdO9ppo_fnguTA/root)

<CommunityLink />

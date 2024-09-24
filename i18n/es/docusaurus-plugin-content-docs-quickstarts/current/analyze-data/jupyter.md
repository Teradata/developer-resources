---
sidebar_position: 1
id: jupyter
title: Utilizar Vantage desde un Jupyter Notebook
author: Adán Tworkiewicz
email: adam.tworkiewicz@teradata.com
page_last_update: November 10th, 2022
description: Utilice Teradata Vantage desde un Jupyter Notebook
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, JDBC, java applications, business intelligence, enterprise analytics, jupyter, teradatasql, ipython-sql, teradatasqlalquimia]
---

import ClearscapeJyupiter from '../_partials/jupyter_notebook_clearscape_analytics_note.mdx'
import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'
import CommunityLink from '../_partials/community_link.mdx'

# Utilizar Vantage desde un Jupyter Notebook

<ClearscapeJyupiter />

## Información general
En este tutorial, seguiremos los pasos para conectarnos a Teradata Vantage desde un Jupyter Notebook.

<ClearscapeDocsNote />

## Opciones

Hay un par de formas de conectarse a Vantage desde un Jupyter Notebook:

1. [Utilice bibliotecas de Python o R en un cuaderno de kernel Python/R normal](#teradata-libraries): esta opción funciona bien cuando se encuentra en un entorno restringido que no le permite generar sus propias imágenes de Docker. Además, es útil en escenarios tradicionales de ciencia de datos cuando debe combinarse SQL y Python/R en un cuaderno. Si domina Jupyter y tiene su propio conjunto de bibliotecas y extensiones preferidas, comience con esta opción.
2. [Utilizar la imagen de Teradata Jupyter Docker](#teradata-jupyter-docker-image): la imagen de Teradata Jupyter Docker incluye el kernel de Teradata SQL (más información posteriormente), las bibliotecas `teradataml` y `tdplyr`, los controladores Python y R. También contiene extensiones de Jupyter que le permiten administrar conexiones de Teradata y explorar objetos en la base de datos Vantage. Resulta práctico cuando se trabaja mucho con SQL o resulta de utilidad un navegador visual. Si no está familiarizado con Jupyter o si prefiere obtener un conjunto seleccionado de bibliotecas y extensiones, comience con esta opción.

### Bibliotecas de Teradata

Esta opción utiliza un cuaderno normal de Jupyter Lab. Veremos cómo cargar el controlador Teradata Python y usarlo desde el código Python. También examinaremos la extensión `ipython-sql` que agrega soporte para celdas solo de SQL.

1. Comenzamos con un cuaderno Jupyter Lab simple. Aquí, estoy usando Docker, pero cualquier método para iniciar un cuaderno servirá, incluidos Jupyter Hub, Google Cloud AI Platform Notebooks, AWS SageMaker Notebooks y Azure ML Notebooks.

```bash
docker run --rm -p 8888:8888 -e JUPYTER_ENABLE_LAB=yes \
  -v "${PWD}":/home/jovyan/work jupyter/datascience-notebook
```

2. Los registros de Docker mostrarán la URL a la que debe ir:
```bash
Entered start.sh with args: jupyter lab
Executing the command: jupyter lab
....
To access the server, open this file in a browser:
    file:///home/jovyan/.local/share/jupyter/runtime/jpserver-7-open.html
Or copy and paste one of these URLs:
    http://d5c2323ae5db:8888/lab?token=5fb43e674367c6895e8c2404188aa550b5c7bdf96f5b4a3a
  or http://127.0.0.1:8888/lab?token=5fb43e674367c6895e8c2404188aa550b5c7bdf96f5b4a3a
```

3. Abriremos un nuevo cuaderno y crearemos una celda para instalar las bibliotecas necesarias:
:::note
He publicado un cuaderno con todas las celdas que se describen a continuación en GitHub: https://github.com/Teradata/quickstarts/blob/main/modules/ROOT/attachments/vantage-with-python-libraries.ipynb
:::

```bash
import sys
!{sys.executable} -m pip install teradatasqlalchemy
```

4. Ahora, importaremos `Pandas` y definiremos la cadena de conexión para conectarnos a Teradata. Dado que estoy ejecutando mi cuaderno en Docker en mi máquina local y quiero conectarme a una máquina virtual Vantage Express local, estoy usando el nombre DNS `host.docker.internal` proporcionado por Docker para hacer referencia a la IP de mi máquina.

```bash
import pandas as pd
# Define the db connection string. Pandas uses SQLAlchemy connection strings.
# For Teradata Vantage, it's teradatasql://username:password@host/database_name .
# See https://pypi.org/project/teradatasqlalchemy/ for details.
db_connection_string = "teradatasql://dbc:dbc@host.docker.internal/dbc"
```

5. Ahora puedo llamar a Pandas para consultar Vantage y mover el resultado a un marco de datos de Pandas:
```bash
pd.read_sql("SELECT * FROM dbc.dbcinfo", con = db_connection_string)
```

6. La sintaxis anterior es concisa pero puede resultar tediosa si todo lo que necesita es explorar datos en Vantage. Usaremos `ipython-sql` y su magia `%%sql` para crear celdas solo SQL. Comenzamos importando las bibliotecas necesarias.
```bash
import sys
!{sys.executable} -m pip install ipython-sql teradatasqlalchemy
```

7. Cargamos `ipython-sql` y definimos la cadena de conexión de la base de datos:
```bash
%load_ext sql
# Define the db connection string. The sql magic uses SQLAlchemy connection strings.
# For Teradata Vantage, it's teradatasql://username:password@host/database_name .
# See https://pypi.org/project/teradatasqlalchemy/ for details.
%sql teradatasql://dbc:dbc@host.docker.internal/dbc
```

8. Ahora podemos usar magia `%sql` y `%%sql`. Digamos que queremos explorar datos en una tabla. Podemos crear una celda que diga:
```sql
%%sql
SELECT * FROM dbc.dbcinfo
```

9. Si queremos mover los datos a un marco de Pandas, podemos decir:
```sql
result = %sql SELECT * FROM dbc.dbcinfo
result.DataFrame()
```

Hay muchas otras características que proporciona ipython-sql, incluida la sustitución de variables, trazar con `matplotlib`, escribir resultados en un archivo csv local o volver a la base de datos. Consulte el [el cuaderno de demostración](https://github.com/Teradata/quickstarts/blob/main/modules/ROOT/attachments/vantage-with-python-libraries.ipynb) para ver ejemplos y el [repositorio de github ipython-sql](https://github.com/catherinedevlin/ipython-sql/) para obtener una referencia completa.

### Imagen de Teradata Jupyter Docker

La imagen de Teradata Jupyter Docker se basa en la imagen de `jupyter/datascience-notebook` Docker. Agrega el kernel Teradata SQL, las bibliotecas Teradata Python y R, y extensiones Jupyter para que sea productivo mientras interactúa con Teradata Vantage. La imagen también contiene cuadernos de muestra que demuestran cómo utilizar el kernel SQL y las bibliotecas de Teradata.

El kernel SQL y las extensiones Teradata Jupyter son útiles para las personas que pasan mucho tiempo con la interfaz SQL. Piense en ello como una experiencia portátil que, en muchos casos, es más conveniente que usar Teradata Studio. La imagen de Teradata Jupyter Docker no intenta reemplazar a Teradata Studio. No tiene todas las características. Está diseñado para personas que necesitan una interfaz liviana basada en web y disfrutan de la interfaz de usuario del portátil.

La imagen de Teradata Jupyter Docker se puede utilizar cuando desee ejecutar Jupyter localmente o si tiene un lugar donde puede ejecutar imágenes personalizadas de Jupyter Docker. Los pasos siguientes demuestran cómo utilizar la imagen localmente.

1. Ejecute la imagen:

:::note
Al pasar `-e "accept_license=Y` se acepta [el acuerdo de licencia](https://github.com/Teradata/jupyterextensions/blob/master/licensefiles/license.txt) para las extensiones Jupyter de Teradata.
:::

```bash
docker volume create notebooks
docker run -e "accept_license=Y" -p :8888:8888 \
  -v notebooks:/home/jovyan/JupyterLabRoot \
  teradata/jupyterlab-extensions
```

2. Los registros de Docker mostrarán la URL a la que debe ir. Por ejemplo, esto es lo que tengo:
```bash
Starting JupyterLab ...
Docker Build ID = 3.2.0-ec02012022
Using unencrypted HTTP

Enter this URL in your browser:  http://localhost:8888?token=96a3ab874a03779c400966bf492fe270c2221cdcc74b61ed

* Or enter this token when prompted by Jupyter: 96a3ab874a03779c400966bf492fe270c2221cdcc74b61ed
* If you used a different port to run your Docker, replace 8888 with your port number
```

3. Abra la URL y use el explorador de archivos para abrir el siguiente notebook: `jupyterextensions -> notebooks -> sql -> GettingStartedDemo.ipynb`.
4. Vea la demostración del Kernel SQL de Teradata:

![GettingStartedDemo.ipynb ](../images/gettingstarteddemo.ipynb.png)

## Resumen

Este inicio rápido cubrió diferentes opciones para conectarse a Teradata Vantage desde una Jupyter Notebook. Aprendimos sobre la imagen de Teradata Jupyter Docker que incluye varias bibliotecas de Teradata Python y R. También proporciona un kernel SQL, un explorador de objetos de base de datos y administración de conexiones. Estas funciones son útiles cuando pasa mucho tiempo con la interfaz SQL. Para escenarios de ciencia de datos más tradicionales, exploramos el controlador independiente Teradata Python y la integración a través de la extensión ipython sql.

## Lectura adicional
* [Sitio web de extensiones de Jupyter de Teradata](https://teradata.github.io/jupyterextensions)
* [Guía de instalación de módulos Teradata Vantage™ para Jupyter](https://docs.teradata.com/r/KQLs1kPXZ02rGWaS9Ktoww/root)
* [Guía del usuario del paquete Teradata® para Python](https://docs.teradata.com/r/1YKutX2ODdO9ppo_fnguTA/root)

<CommunityLink />
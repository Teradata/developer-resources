---
sidebar_position: 13
author: Igor Machin, Ambrose Inman
email: igor.machin@teradata.com
page_last_update: 18 de noviembre de 2022
description: Ejecutar flujos de trabajo de Airflow que utilizan dbt con Teradata Vantage
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics, airflow, queries, dbt]
---

#  Ejecutar flujos de trabajo de Airflow que utilizan dbt con Teradata Vantage

## Información general

Este tutorial muestra cómo instalar Airflow en una máquina virtual AWS EC2, configurar el flujo de trabajo para usar dbt y ejecutarlo en una base de datos Teradata Vantage. Airflow es una herramienta de programación de tareas que normalmente se utiliza para crear canales de datos para procesar y cargar datos. En este ejemplo, pasamos por el proceso de instalación de Airflow, que crea un entorno Airflow basado en Docker. Una vez instalado Airflow, ejecutamos varios ejemplos de Airflow DAG (Direct Aciclic Graph, o simplemente flujo de trabajo) que cargan datos en una base de datos de Teradata Vantage.

## Requisitos previos

1. Acceso a AWS (Amazon Web Services) con permisos para crear una máquina virtual.
:::tip
Este tutorial se puede ajustar a otras plataformas informáticas o incluso en una máquina básica siempre que tenga una capacidad informática y de almacenamiento comparable a la máquina mencionada en este documento (t2.2xlarge EC2 en AWS con aproximadamente 100 GB de almacenamiento) y esté conectada a Internet. Si decide utilizar una plataforma informática diferente, será necesario modificar algunos pasos del tutorial.
:::
2. Un cliente SSH.
:::tip
Si está en una máquina Mac o Linux, estas herramientas ya están incluidas. Si está en Windows, considere la posibilidad de usar [PuTTY](https://www.putty.org) o [MobaXterm](https://mobaxterm.mobatek.net/download.html).
:::
3. Acceda a una base de datos de Teradata Vantage. Si no tiene acceso a Teradata Vantage, explore [Vantage Express](../get-access-to-vantage/on-your-local/getting-started-utm.md), una edición gratuita para desarrolladores.

## Instalar y ejecutar Airflow

### Crear una máquina virtual
1. Vaya a la consola de AWS EC2 y haga clic en `Launch instance`.
2. Seleccione `Red Hat` para la imagen del sistema operativo.
3. Seleccione `t2.2xlarge` como tipo de instancia.
4. Cree un nuevo par de claves o utilice uno existente.
5. Aplique la configuración de red que le permitirá ssh al servidor y el servidor tendrá conectividad saliente a Internet. Por lo general, bastará con aplicar la configuración predeterminada.
6. Asigne 100 GB de almacenamiento.

### Instalar Python

1. ssh a la máquina mediante el usuario `ec2-user`.

2. Compruebe si Python está instalado (debe ser Python 3.7 o superior). Escriba `python` o `python3` en la línea de comandos.

3. Si Python no está instalado (aparece el mensaje `command not found` ), ejecute los siguientes comandos para instalarlo. Es posible que los comandos requieran que confirme la instalación escribiendo `y` y pulsando Entrar.

``` bash , id="install_python", role="content-editable emits-gtm-events"
sudo yum install python3
# create a virtual environment for the project
sudo yum install python3-pip
sudo pip3 install virtualenv
```

### Crear un entorno de Airflow

1. Cree la estructura del directorio Airflow (desde el directorio de inicio del usuario ec2 /home/ec2-user)

``` bash , id="install_airflow", role="content-editable emits-gtm-events"
mkdir airflow
cd airflow
mkdir -p ./dags ./logs ./plugins ./data ./config ./data
echo -e "AIRFLOW_UID=$(id -u)" > .env
```

2. Utilice su herramienta de transferencia de archivos preferida (`scp`, `PuTTY`, `MobaXterm` o similar) para cargar el archivo [airflow.cfg](../other-integrations/attachments/execute-airflow-workflows-that-use-dbt-with-teradata-vantage/airflow.cfg) en el directorio `airflow/config`.

### Instalar Docker

Docker es una herramienta de contenedorización que nos permite instalar Airflow en un entorno en contenedores.

:::note
Los pasos deben ejecutarse en el directorio `airflow`.
:::

1. Desinstale podman (herramienta de contenedorización RHEL)

``` bash , id="uninstall_podman", role="content-editable emits-gtm-events"
sudo yum remove docker \
docker-client \
docker-client-latest \
docker-common \
docker-latest \
docker-latest-logrotate \
docker-logrotate \
docker-engine \
podman \
runc
```

2. Instalar las utilidades yum

``` bash , id="install_yum", role="content-editable emits-gtm-events"
sudo yum install -y yum-utils
```

3. Agregue Docker al repositorio de yum.

``` bash , id="add_docker_to_yum", role="content-editable emits-gtm-events"
sudo yum-config-manager \
--add-repo \
https://download.docker.com/linux/centos/docker-ce.repo
```

4. Instalar Docker.

``` bash , id="install_docker", role="content-editable emits-gtm-events"
sudo yum install docker-ce docker-ce-cli containerd.io
```

5. Inicie Docker como servicio. El primer comando ejecuta el servicio Docker automáticamente la próxima vez que el sistema se inicie. El segundo comando inicia Docker ahora.

``` bash , id="start_docker", role="content-editable emits-gtm-events"
sudo systemctl enable docker
sudo systemctl start docker
```

6. Compruebe si Docker está instalado correctamente. Este comando debería devolver una lista vacía de contenedores (ya que aún no hemos iniciado ningún contenedor):

``` bash , id="check_docker", role="content-editable emits-gtm-events"
sudo docker ps
```

### Instalar `docker-compose` y archivos de configuración del entorno Docker

1. Cargue los archivos [Dockerfile](../other-integrations/attachments/execute-airflow-workflows-that-use-dbt-with-teradata-vantage/docker-compose.yaml) y [Dockerfile](attachments/Dockerfile.txt) a la máquina virtual y guárdelos en el directorio `airflow`.

:::tip 
Qué hacen `docker-compose.yaml` y `Dockerfile`
Los archivos `docker-compose.yaml` y `Dockerfile` son ​​necesarios para crear el entorno durante la instalación. El archivo `docker-compose.yaml` descarga e instala el contenedor Docker de Airflow. El contenedor incluye la interfaz de usuario web, una base de datos Postgres para metadatos, el programador, 3 trabajadores (por lo que se pueden ejecutar 3 tareas en paralelo), el activador y el servidor web nginx para mostrar los documentos producidos por `dbt`. Además, los directorios de host se montan en contenedores y se realizan otros procesos de instalación. `Dockerfile` instalará los paquetes necesarios en cada contenedor.

Si desea obtener más información sobre qué hacen los archivos `docker-compose.yaml` y `Dockerfile`, examínelos. Hay comentarios que aclaran qué está instalado y por qué.
:::

2. Instale docker-compose (necesario para ejecutar el archivo yaml).

:::note
Las instrucciones se basan en la versión 1.29.2. Visite el sitio https://github.com/docker/compose/releases para obtener la última versión y actualice el siguiente comando según sea necesario.
:::

``` bash , id="install_docker_compose", role="content-editable emits-gtm-events"
sudo curl -L https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```

3. Pruebe su instalación de Docker-Compose. El comando debería devolver la versión de Docker-Compose, por ejemplo `docker-compose version 1.29.2, build 5becea4c`:

``` bash , id="check_docker_compose", role="content-editable emits-gtm-events"
docker-compose --version
```

### Instalar un proyecto dbt de prueba

:::note 
Estos pasos configuran un proyecto dbt de muestra. La herramienta `dbt` será instalada en los contenedores más adelante por `docker-compose`.
:::

1. Instale git:

``` bash , id="install_git", role="content-editable emits-gtm-events"
sudo yum install git
```

2. Obtenga el proyecto dbt de muestra de jaffle shop:

:::note
Los directorios dbt se crearán en el directorio de inicio (no en `airflow`). El directorio de inicio en nuestro ejemplo es `/home/ec2-user`.
:::

``` bash , id="download_sample_dbt_project", role="content-editable emits-gtm-events"
# move to home dir
cd
mkdir dbt
cd dbt
git clone https://github.com/Teradata/jaffle_shop-dev.git jaffle_shop
cd jaffle_shop
mkdir target
chmod 777 target
echo '' > target/index.html
chmod o+w target/index.html
```

3. Cree los usuarios/bases de datos `airflowtest` y `jaffle_shop` en su base de datos Teradata utilizando su herramienta de base de datos preferida (Teradata Studio Express, `bteq` o similar). Inicie sesión en la base de datos como `dbc`, luego ejecute los comandos (cambie las contraseñas si es necesario):

``` sql , id="create_databases", role="content-editable emits-gtm-events"
CREATE USER "airflowtest" FROM "dbc" AS PERM=5000000000 PASSWORD="abcd";
CREATE USER "jaffle_shop" FROM "dbc" AS PERM=5000000000 PASSWORD="abcd";
```

4. Cree el directorio de configuración de dbt:

``` bash , id="create_dbt_config_dir", role="content-editable emits-gtm-events"
cd
mkdir .dbt
```

5. Copie [profiles.yml](../other-integrations/attachments/execute-airflow-workflows-that-use-dbt-with-teradata-vantage/profiles.yml) en el directorio `.dbt`.

6. Edite el archivo para que corresponda a la configuración de su base de datos Teradata. Como mínimo, deberá cambiar el host, el usuario y la contraseña. Utilice las credenciales de usuario de `jaffle_shop` que configuró en el paso 3.

### Crear el entorno Airflow en Docker

1. Ejecute el script de creación del entorno de Docker en el directorio `airflow` donde `Dockerfile` y `docker-compose.yaml`:

``` bash , id="run_docker_compose", role="content-editable emits-gtm-events"
cd ~/airflow
sudo docker-compose up --build
```

Esto puede tardar entre 5 y 10 minutos; cuando se complete la instalación, debería ver en la pantalla un mensaje similar a este:

``` bash , id="run_docker_compose_response", role="content-editable emits-gtm-events"
airflow-webserver_1  | 127.0.0.1 - - [13/Sep/2022:00:20:48 +0000] "GET /health HTTP/1.1" 200 187 "-" "curl/7.74.0"
```

Esto significa que el servidor web Airflow está listo para aceptar llamadas.

2. Ahora Airflow debería estar activo. La sesión de terminal que estábamos usando durante la instalación se usará para mostrar mensajes de registro, por lo que se recomienda
abrir otra sesión de terminal para pasos posteriores. Para verificar el tipo de instalación de Airflow:

``` bash , id="check_airflow_in_docker", role="content-editable emits-gtm-events"
sudo docker ps
```

El resultado debería ser algo como:

``` bash , id="check_airflow_in_docker_output", role="content-editable emits-gtm-events"
CONTAINER ID   IMAGE                  COMMAND                  CREATED          STATUS                    PORTS                                                 NAMES
60d50d9f43f5   apache/airflow:2.2.4   "/usr/bin/dumb-init …"   18 minutes ago   Up 18 minutes (healthy)   8080/tcp                                              airflow_airflow-scheduler_1
e2b46ec98274   apache/airflow:2.2.4   "/usr/bin/dumb-init …"   18 minutes ago   Up 18 minutes (healthy)   8080/tcp                                              airflow_airflow-worker_3_1
7b44004c7277   apache/airflow:2.2.4   "/usr/bin/dumb-init …"   18 minutes ago   Up 18 minutes (healthy)   8080/tcp                                              airflow_airflow-worker_1_1
4017b8ce9235   apache/airflow:2.2.4   "/usr/bin/dumb-init …"   18 minutes ago   Up 18 minutes (healthy)   0.0.0.0:8080->8080/tcp, :::8080->8080/tcp             airflow_airflow-webserver_1
3cc407e2d565   apache/airflow:2.2.4   "/usr/bin/dumb-init …"   18 minutes ago   Up 18 minutes (healthy)   0.0.0.0:5555->5555/tcp, :::5555->5555/tcp, 8080/tcp   airflow_flower_1
340a83b202e3   apache/airflow:2.2.4   "/usr/bin/dumb-init …"   18 minutes ago   Up 18 minutes (healthy)   8080/tcp                                              airflow_airflow-triggerer_1
82198f0d8b84   apache/airflow:2.2.4   "/usr/bin/dumb-init …"   18 minutes ago   Up 18 minutes (healthy)   8080/tcp                                              airflow_airflow-worker_2_1
382c3077c1e5   redis:latest           "docker-entrypoint.s…"   18 minutes ago   Up 18 minutes (healthy)   6379/tcp                                              airflow_redis_1
8a3be8d8a7f4   nginx                  "/docker-entrypoint.…"   18 minutes ago   Up 18 minutes (healthy)   0.0.0.0:4000->80/tcp, :::4000->80/tcp                 airflow_nginx_1
9ca888e9e8df   postgres:13            "docker-entrypoint.s…"   18 minutes ago   Up 18 minutes (healthy)   5432/tcp                                              airflow_postgres_1
```

3. OPCIONAL: Si desea eliminar la instalación de Docker (por ejemplo, para actualizar los archivos docker-compose.yaml y Dockerfile y recrear un entorno diferente), el comando es (desde el directorio de Airflow donde se encuentran estos archivos):

``` bash , id="docker_compose_down", role="content-editable emits-gtm-events"
sudo docker-compose down --volumes --rmi all
```

Una vez que la pila esté inactiva, actualice los archivos de configuración y reinicie ejecutando el comando en el paso 1.


4. Para probar si la interfaz de usuario web de Airflow funciona, escriba las siguientes URL en su navegador. Reemplace `<VM_IP_ADDRESS>` con la dirección IP externa de la máquina virtual:
  * UI de DAG: `http://<YOUR_IP_ADDRESS>:8080/home` - nombre de usuario: airflow / contraseña: airflow
  * Interfaz de usuario de Flower Airflow (control de trabajadores): `http://<YOUR_IP_ADDRESS>:5555/`

### Ejecute un DAG de Airflow

1. Copie los archivos [airflow_dbt_integration.py](../other-integrations/attachments/execute-airflow-workflows-that-use-dbt-with-teradata-vantage/airflow_dbt_integration.py), [db_test_example_dag.py](../other-integrations/attachments/execute-airflow-workflows-that-use-dbt-with-teradata-vantage/db_test_example_dag.py), [discover_dag.py](../other-integrations/attachments/execute-airflow-workflows-that-use-dbt-with-teradata-vantage/discover_dag.py), [variables.json](../other-integrations/attachments/execute-airflow-workflows-that-use-dbt-with-teradata-vantage/variables.json) en `/home/ec2-user/airflow/dags`.
2. Examine los archivos:
* `airflow_dbt_integration.py` - un ejemplo simple de Teradata SQL que crea algunas tablas y ejecuta consultas.
* `db_test_example_dag.py` - ejecuta un ejemplo de dbt (es decir, integración de dbt y airflow con una base de datos Teradata). En este ejemplo se crea, se carga un modelo de datos ficticio de jaffle_shop y se genera la documentación para este proyecto (puede verla apuntando su navegador a `http://<VM_IP_ADDRESS>:4000/`)

:::note
[Ajuste `db_test_example_dag.py`]
`db_test_example_dag.py` debe actualizarse para que la dirección IP de la base de datos de Teradata apunte a su base de datos.
:::

* `discover_dag.py` - un ejemplo sobre cómo cargar varios tipos de archivos de datos (CSV, Parquet, JSON). El archivo de código fuente contiene comentarios que explican qué hace el programa y cómo usarlo. Este ejemplo se basa en el archivo `variables.json`. El archivo debe importarse a Airflow. Ocurrirá en pasos posteriores.

3. Espere unos minutos hasta que la herramienta de airflow recoja estos archivos dag. Una vez recogidos, aparecerán en la lista de dags en la página de inicio de Airflow.

4. Importe el archivo `variables.json` como un archivo variable en Airflow:
* Haga clic en el elemento de menú `Admin -> Variables` para ir a la página Variables
![Menú desplegable de administración de Airflow](../other-integrations/images/execute-airflow-workflows-that-use-dbt-with-teradata-vantage/admin-dropdown.png)
* Haga clic en `Choose File`, luego seleccione `variable.json` en su explorador de archivos y haga clic en `Import Variables`
![Menú desplegable de administración de Airflow](../other-integrations/images/execute-airflow-workflows-that-use-dbt-with-teradata-vantage/import-variables.png)
* Edite las variables para que coincidan con su entorno.


5. Ejecute dags desde la interfaz de usuario y verifique los registros.



## Resumen

Este tutorial tiene como objetivo proporcionar un ejercicio práctico sobre cómo instalar un entorno Airflow en un servidor Linux y cómo utilizar Airflow para interactuar con una base de datos Teradata Vantage. Se proporciona un ejemplo adicional sobre cómo integrar Airflow y la herramienta de modelado y mantenimiento de datos dbt para crear y cargar una base de datos Teradata Vantage.

## Lectura adicional
* [Utilizar dbt (herramienta de creación de datos) con Teradata Vantage](dbt.md)

import CommunityLinkPartial from '../_partials/community_link.mdx';

<CommunityLinkPartial />
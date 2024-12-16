---
sidebar_position: 3
id: airflow
author: Satish Chinthanippu
email: satish.chinthanippu@teradata.com
page_last_update: 6 de febrero de 2024
description: Utilizar Apache Airflow con Teradata Vantage
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics, elt, airflow, workflow.]
---

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'
import CommunityLink from '../_partials/community_link.mdx'

# Utilizar Apache Airflow con Teradata Vantage

## Información general
Este tutorial demuestra cómo utilizar Airflow con Teradata Vantage. Airflow se instalará en el sistema Ubuntu.

## Prerrequisitos
* Ubuntu 22.x
* Acceso a una instancia de Teradata Vantage.
    <ClearscapeDocsNote />
* Python **3.8**, **3.9**, **3.10** o **3.11** instalado.
* pip



## Instalar Apache Airflow

1. Configure la variable de entorno AIRFLOW_HOME. Airflow requiere un directorio de inicio y usa ~/airflow de forma predeterminada, pero puede establecer una ubicación diferente si lo prefiere. La variable de entorno AIRFLOW_HOME se utiliza para informar a Airflow de la ubicación deseada.
    ```bash
    export AIRFLOW_HOME=~/airflow
    ```

2. Instale la versión estable 2.8.1 de `apache-airflow` desde el repositorio de PyPI:
    ```bash
    AIRFLOW_VERSION=2.8.2
    PYTHON_VERSION="$(python --version | cut -d " " -f 2 | cut -d "." -f 1-2)"
    CONSTRAINT_URL="https://raw.githubusercontent.com/apache/airflow/constraints-${AIRFLOW_VERSION}/constraints-${PYTHON_VERSION}.txt"
    pip install "apache-airflow==${AIRFLOW_VERSION}" --constraint "${CONSTRAINT_URL}"
    ```

3. Instale la versión estable del proveedor Airflow Teradata desde el repositorio PyPI.
    ```bash
    pip install "apache-airflow-providers-teradata"
    ```

    :::note
    Por razones de seguridad, la funcionalidad de conexión de prueba está deshabilitada de forma predeterminada en la interfaz de usuario, la API y la CLI de Airflow.
    La disponibilidad de la funcionalidad se puede controlar mediante el indicador test_connection en la sección principal de la configuración de Airflow ($AIRFLOW_HOME/airflow.cfg) o puede definir la siguiente variable de entorno antes de iniciar el servidor de Airflow.
    export AIRFLOW__CORE__TEST_CONNECTION=Enabled
    :::    

## Iniciar Airflow independiente

1. Ejecute Airflow de forma independiente
    \```bash
    airflow standalone
    ````
2. Acceda a la interfaz de usuario de Airflow. Visite https://localhost:8080 en el navegador e inicie sesión con los detalles de la cuenta de administrador que se muestran en el terminal.


Las conexiones Teradata se pueden definir en Airflow de las siguientes formas:

1. Mediante la interfaz de usuario web de Airflow
2. Mediante una variable de entorno

## Definir una conexión Teradata en la interfaz de usuario de Airflow

1. Abra la sección Administración -> Conexiones de la interfaz de usuario. Haga clic en el enlace Crear para crear una nueva conexión.
    ![Menú desplegable de administración de Airflow](../images/airflow-connection.png)

2. Complete los detalles de entrada en la página Nueva conexión.
    ![Nueva conexión de Airflow](../images/airflow-newconnection.png)
    * ID de conexión: ID único de la conexión Teradata.
    * Tipo de conexión: tipo de sistema. Seleccione Teradata.
    * URL del servidor de base de datos (obligatorio): nombre de host de la instancia de Teradata al que conectarse.
    * Base de datos (opcional): especifique el nombre de la base de datos a la que conectarse
    * Iniciar sesión (obligatorio): especifique el nombre de usuario para conectarse.
    * Contraseña (obligatoria): especifique la contraseña para conectarse.
    * Haga clic en Probar y guardar.

## Definir una conexión Teradata en una variable de entorno
Las conexiones de Airflow se pueden definir en variables de entorno en cualquiera de los formatos siguientes.

1. Formato JSON
2. Formato URI

    :::note
    La convención de nomenclatura es AIRFLOW_CONN_CONN_ID, todo en mayúsculas (tenga en cuenta los guiones bajos simples junto a CONN).
    Si su ID de conexión es teradata_conn_id, el nombre de la variable debe ser AIRFLOW_CONN_TERADATA_CONN_ID
    :::


## Ejemplo de formato JSON


```bash
export AIRFLOW_CONN_TERADATA_CONN_ID='{
    "conn_type": "teradata",
    "login": "teradata_user",
    "password": "my-password",
    "host": "my-host",
    "schema": "my-schema",
    "extra": {
        "tmode": "TERA",
        "sslmode": "verify-ca"
    }
}'
```

## Ejemplo de formato URI

```bash
export AIRFLOW_CONN_TERADATA_CONN_ID='teradata://teradata_user:my-password@my-host/my-schema?tmode=TERA&sslmode=verify-ca'
```

Consulte [Enlace de Teradata](https://airflow.apache.org/docs/apache-airflow-providers-teradata/stable/connections/teradata.html) para obtener información detallada sobre la conexión Teradata en Airflow.

## Definir un DAG en Airflow

1. En Airflow, los DAG se definen como código Python.
2. Cree un DAG como un archivo de Python como sample.py en el directorio DAG_FOLDER - $AIRFLOW_HOME/files/dags.

```sql
from datetime import datetime
from airflow import DAG
from airflow.providers.teradata.operators.teradata import TeradataOperator
CONN_ID = "Teradata_TestConn"
with DAG(
    dag_id="example_teradata_operator",
    max_active_runs=1,
    max_active_tasks=3,
    catchup=False,
    start_date=datetime(2023, 1, 1),
) as dag:
    create = TeradataOperator(
        task_id="table_create",
        conn_id=CONN_ID,
        sql="""
            CREATE TABLE my_users,
            FALLBACK (
                user_id decimal(10,0) NOT NULL GENERATED ALWAYS AS IDENTITY (
                    START WITH 1
                    INCREMENT BY 1
                    MINVALUE 1
                    MAXVALUE 2147483647
                    NO CYCLE),
                user_name VARCHAR(30)
            ) PRIMARY INDEX (user_id);
        """,
    )
```

## Cargar DAG

Airflow carga DAG desde archivos fuente de Python, que busca dentro de su directorio DAG_FOLDER - $AIRFLOW_HOME/files/dags configurado.

## Ejecutar DAG
Los DAG se ejecutarán de dos maneras:

1. Cuando se activen manualmente o mediante la API
2. En una programación definida, que se define como parte del DAG
`example_teradata_operator` se define para activarse manualmente. Para definir una programación, cualquier valor de programación de [Crontab](https://en.wikipedia.org/wiki/Cron) válida se puede pasar al argumento de programación.

```python
with DAG(
  dag_id="my_daily_dag",
  schedule="0 0 * * *"
  ) as dag:
```

## Resumen

Este tutorial demostró cómo utilizar Airflow y el proveedor de Airflow Teradata con una instancia de Teradata Vantage. El DAG de ejemplo proporcionado crea la tabla `my_users` en la instancia de Teradata Vantage definida en la interfaz de usuario de Connection.

## Lectura adicional
* [Documentación de Airflow](https://airflow.apache.org/docs/apache-airflow/stable/start.html)
* [DAG de Airflow](https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/dags.html)


<CommunityLink />


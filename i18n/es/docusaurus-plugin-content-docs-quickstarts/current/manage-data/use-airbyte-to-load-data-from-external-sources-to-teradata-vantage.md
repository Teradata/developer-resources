---
sidebar_position: 8
author: Krutik Pathak
email: krutik.pathak@teradata.com
page_last_update: 9 de junio de 2023
description: Utilizar Airbyte con Teradata Vantage.
keywords: [airbyte, data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, data transfer, data extraction, enterprise analytics, elt.]

dir: getting-started-with-airbyte
---

# Utilizar Airbyte para cargar datos de fuentes externas en Teradata Vantage


## Información general

Este tutorial muestra cómo usar Airbyte para mover datos desde fuentes a Teradata Vantage, detallando las opciones de [Airbyte Open Source](https://docs.airbyte.com/using-airbyte/getting-started) y [Airbyte Cloud](https://airbyte.com). Este ejemplo específico cubre la replicación de Google Sheets a Teradata Vantage.

* Fuente: Google Sheets
* Destino: Teradata Vantage

![Muestra de Google Sheets sobre la remuneración de los empleados](../elt/images/getting-started-with-airbyte/sample_employees_payrate_google_sheets.png)

## Prerrequisitos

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'

* Acceso a una instancia de Teradata Vantage. Se definirá como el destino de la conexión de Airbyte. Necesitará una base de datos `Host`, `Username` y `Password` para la configuración de Airbyte.
        <ClearscapeDocsNote />

* [API de Google Cloud Platform habilitada para su cuenta personal o de organización](https://support.google.com/googleapi/answer/6158841?hl=en). Tendrás que autenticar tu cuenta de Google a través de OAuth o a través del Autenticador de claves de cuenta de servicio. En este ejemplo, usamos el autenticador de clave de cuenta de servicio.

* Datos del sistema de origen. En este caso, utilizamos una [hoja de cálculo de muestra de Google Sheets](https://docs.google.com/spreadsheets/d/1XNBYUw3p7xG6ptfwjChqZ-dNXbTuVwPi7ToQfYKgJIE/edit). Los datos de muestra son un desglose de la remuneración por tipo de empleado.

### Airbyte Cloud
* Cree una cuenta en [Airbyte Cloud](https://airbyte.com) y vaya a las instrucciones en la sección [Configuración de Airbyte](#airbyte-configuration).

### Airbyte Open Source
* Instale Docker Compose para ejecutar [Airbyte Open Source](https://github.com/airbytehq/airbyte) localmente. Docker Compose se incluye con Docker Desktop. Consulte la [documentación de Docker](https://docs.docker.com/compose/install) para obtener detalles adicionales. 

* Clone el repositorio de Airbyte Open Source y vaya al directorio de airbyte.

        ``` bash
        git clone --depth 1 https://github.com/airbytehq/airbyte.git
        cd airbyte
        ```

Asegúrese de que Docker Desktop esté ejecutándose antes de ejecutar el script de shell `run-ab-platform`.

* Ejecute el script de shell `run-ab-platform` como


        ``` bash
        ./run-ab-platform.sh
        ```


        :::note
        You can run the above commands with `git bash` in Windows. Please refer to the [Airbyte Local Deployment](https://docs.airbyte.com/deploying-airbyte/local-deployment) for more details. 
        :::

* Inicie sesión en la aplicación web http://localhost:8000/ introduciendo las credenciales predeterminadas que se encuentran en el archivo `.env` incluido en el repositorio.


        ``` bash
        BASIC_AUTH_USERNAME=airbyte
        BASIC_AUTH_PASSWORD=password
        ```


Al iniciar sesión por primera vez, Airbyte le pedirá que proporcione su dirección de correo electrónico y especifique sus preferencias para mejorar el producto. Introduzca sus preferencias y haga clic en "Comenzar".

![Especificar preferencias](../elt/images/getting-started-with-airbyte/specify_preferences.png)

Una vez que se inicie Airbyte Open Source, verá un panel de conexiones. Si inició Airbyte Open Source por primera vez, no se mostrará ninguna conexión.

## Configuración de Airbyte

### Configuración de la conexión de origen
* Puede hacer clic en "Crear su primera conexión" o hacer clic en la esquina superior derecha para iniciar el nuevo flujo de trabajo de conexión en el panel Conexiones de Airbyte.

![Panel de control para crear la primera conexión](../elt/images/getting-started-with-airbyte/create_first_connection.png)

* Airbyte te pedirá la Fuente. Puede seleccionar una fuente existente (si ya la ha configurado) o puede configurar una nueva fuente; en este caso seleccionamos `Google Sheets`.

* Para la autenticación utilizamos `Service Account Key Authentication`, que utiliza una clave de cuenta de servicio en formato JSON. Alterne la opción predeterminada `OAuth` a `Service Account Key Authentication`. Para autenticar su cuenta de Google a través de Autenticación de claves de cuenta de servicio, introduzca su [clave de cuenta de servicio de Google Cloud](https://cloud.google.com/iam/docs/keys-create-delete#creating_service_account_keys) en formato JSON.
Asegúrese de que la cuenta de servicio tenga el permiso de visor de proyectos. Si cualquier persona que tenga su enlace puede ver su hoja de cálculo, no es necesario realizar ninguna otra acción. De lo contrario, [conceda a su cuenta de servicio acceso a su hoja de cálculo](https://www.youtube.com/watch?v=GyomEw5a2NQ).

* Agregue el enlace a la hoja de cálculo de origen como `Spreadsheet Link`.


![Configurar la fuente en Airbyte](../elt/images/getting-started-with-airbyte/configuring_source_gsheet_airbyte.png)

:::note
Para obtener detalles adicionales, consulte [Cómo configurar Google Sheets como conector de origen en Airbyte Open Source](https://docs.airbyte.com/integrations/sources/google-sheets/#:~:text=For%20Airbyte%20Open%20Source%3A) 
:::

* Haga clic en Configurar fuente, si la configuración es correcta, recibirá el mensaje `All connection tests passed!`


### Configurar la conexión de destino
* Suponiendo que desea crear una nueva conexión con `Teradata Vantage`, seleccione `Teradata Vantage` como tipo de destino en la sección "Configurar el destino".
* Agregue el `Host`, `User` y `Password`. Son los mismos que los `Host`, `Username` y `Password`, respectivamente, utilizados por el entorno de Clearscape Analytics.
* Proporcione un nombre de esquema predeterminado apropiado para su contexto específico. Aquí hemos proporcionado `gsheet_airbyte_td`.

:::note
Si no proporciona un `Default Schema`, recibirá un error que indica "Error del conector al crear el esquema". Asegúrese de proporcionar el nombre apropiado en `Default Schema`.
:::


![Configurar el destino Teradata en Airbyte](../elt/images/getting-started-with-airbyte/configuring_destination_teradata_airbyte.png)


* Haga clic en Configurar destino; si la configuración es correcta, recibirá el mensaje `All connection tests passed!`


:::note
Es posible que reciba un error de verificación de configuración fallida. Asegúrese de que su instancia de Teradata Vantage funcione correctamente antes de realizar una conexión a través de Airbyte. 
:::

### Configurar la sincronización de datos
Un espacio de nombres es un grupo de secuencias [tablas) en un origen o destino. Un esquema en un sistema de base de datos relacional es un ejemplo de espacio de nombres. En una fuente, el espacio de nombres es la ubicación desde donde se replican los datos hasta el destino. En un destino, el espacio de nombres es la ubicación donde se almacenan los datos replicados en el destino.Para obtener más detalles, consulte [Airbyte Namespace](https://docs.airbyte.com/understanding-airbyte/namespaces)

![Espacios de nombres en el destino](../elt/images/getting-started-with-airbyte/namespaces_in_destination.png)


En nuestro ejemplo, el destino es una base de datos, por lo que el espacio de nombres es el esquema predeterminado `gsheet_airbyte_td` que definimos cuando configuramos el destino. El nombre de la secuencia es una tabla que refleja el nombre de la hoja de cálculo en la fuente, que es `sample_employee_payrate` en este caso. Dado que utilizamos el conector de hoja de cálculo única, solo admite una secuencia (la hoja de cálculo activa). 

Otros tipos de fuentes y destinos pueden tener un diseño diferente. En este ejemplo, Google Sheets, como fuente, no admite un espacio de nombres. 
En nuestro ejemplo, hemos utilizado `<destination schema>` como espacio de nombres del destino, este es el espacio de nombres predeterminado asignado por Airbyte en función del `Default Schema` que declaramos en la configuración del destino. La base de datos `gsheet_airbyte_td` se creará en nuestra instancia de Teradata Vantage.

:::note
Usamos el término "esquema", ya que es el término utilizado por Airbyte. En el contexto de Teradata, el término "base de datos" es equivalente.
:::

#### Frecuencia de replicación
Muestra con qué frecuencia deben sincronizarse los datos con el destino. Puede seleccionar cada hora, 2 horas, 3 horas, etc. En nuestro caso utilizamos cada 24 horas. 

![Frecuencia de replicación de 24 horas](../elt/images/getting-started-with-airbyte/replication_frequency_24hr.png)

También puede utilizar una expresión Cron para especificar la hora a la que debe ejecutarse la sincronización. En el siguiente ejemplo, configuramos la expresión Cron para ejecutar la sincronización todos los miércoles a las 12:43 p. m. (hora de EE. UU./Pacífico).

![Expresión cron de frecuencia de replicación](../elt/images/getting-started-with-airbyte/replication_frequency_cron_expression.png)

### Validación de sincronización de datos

Airbyte rastrea los intentos de sincronización en la sección "Historial de sincronización" de la pestaña `Status`. 

![Resumen de sincronización de datos](../elt/images/getting-started-with-airbyte/data_sync_summary.png)

A continuación, puede ir a [ClearScape Analytics Experience](https://clearscape.teradata.com/dashboard) y ejecutar un cuaderno Jupyter. Los cuadernos en ClearScape Analytics Experience están configurados para ejecutar consultas SQL de Teradata, para verificar si la base de datos `gsheet_airbyte_td`, los flujos (tablas) y los datos completos están presentes.

![Validación de la sincronización de datos en Teradata](../elt/images/getting-started-with-airbyte/data_sync_validation_in_teradata.png)

``` bash
%connect local 
```

``` bash , id="airbyte_select_query", role="emits-gtm-events"
SELECT  DatabaseName, TableName, CreateTimeStamp, LastAlterTimeStamp
FROM    DBC.TablesV
WHERE   DatabaseName = 'gsheet_airbyte_td'
ORDER BY    TableName;
```

``` bash
DATABASE gsheet_airbyte_td; 
```

``` bash
SELECT * FROM _airbyte_raw_sample_employee_payrate;  
```

El nombre de la secuencia (tabla) en el destino tiene el prefijo `\_airbyte_raw_` porque la normalización y la transformación no son compatibles con esta conexión, y [Solo tenemos la tabla sin procesar](https://docs.airbyte.com/understanding-airbyte/namespaces/#:~:text=If%20you%20don%27t%20enable%20basic%20normalization%2C%20you%20will%20only%20receive%20the%20raw%20tables). Cada secuencia (tabla) contiene 3 columnas: 

1. `_airbyte_ab_id`: un uuid asignado por Airbyte a cada evento que se procesa. El tipo de columna en Teradata es `VARCHAR(256)`.

2. `_airbyte_emitted_at`: una marca de tiempo que representa cuándo se extrajo el evento de la fuente de datos. El tipo de columna en Teradata es `TIMESTAMP(6)`.

3. `_airbyte_data`: un blob json que representa los datos del evento. El tipo de columna en Teradata es `JSON`.

Aquí, en la columna `_airbyte_data`, vemos 9 filas, las mismas que tenemos en la hoja de origen de Google, y los datos están en formato JSON que se puede transformar aún más según sea necesario.

### Cerrar y eliminar la conexión

* Puede cerrar la conexión en Airbyte deshabilitándola. Esto detendrá el proceso de sincronización de datos.

![Cerrar conexión de Airbyte](../elt/images/getting-started-with-airbyte/close_airbyte_connection.png)

* También puede eliminar la conexión.

![Eliminar la conexión de Airbyte](../elt/images/getting-started-with-airbyte/delete_airbyte_connection.png)


### Resumen
Este tutorial demostró cómo extraer datos de un sistema de origen como Google Sheets y cómo usar la herramienta Airbyte ELT para cargar los datos en la instancia de Teradata Vantage. Vimos el flujo de datos de principio a fin y completamos los pasos de configuración para ejecutar Airbyte Open Source localmente y configurar las conexiones de origen y destino. También analizamos las configuraciones de sincronización de datos disponibles según la frecuencia de replicación. Validamos los resultados en el destino usando Cloudscape Analytics Experience y finalmente vimos los métodos para pausar y eliminar la conexión de Airbyte. 

### Lectura adicional
[Destino Teradata | - Documentación de Airbyte](https://docs.airbyte.com/integrations/destinations/teradata/?_ga=2.156631291.1502936448.1684794236-1752661382.1684794236)

[Conceptos básicos | - Documentación de Airbyte](https://docs.airbyte.com/cloud/core-concepts/#connection-sync-modes)

[Comunidad de Airbyte en Slack](https://airbyte.com/community)

[Comunidad de Airbyte](https://discuss.airbyte.io)


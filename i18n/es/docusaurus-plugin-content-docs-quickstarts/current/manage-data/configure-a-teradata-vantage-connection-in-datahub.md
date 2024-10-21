---
sidebar_position: 18
author: Pablo Ibberson
email: paul.ibberson2@teradata.com
page_last_update: 19 de diciembre de 2023
description: Configure una conexión a Teradata Vantage en DataHub.
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics, datahub, data catalog, data lineage]
---

# Configurar una conexión a Teradata Vantage en DataHub

## Información general

Este tutorial demuestra cómo crear una conexión a Teradata Vantage con DataHub e ingerir metadatos sobre tablas y vistas, junto con información de uso y linaje.

## Prerrequisitos

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'

* Acceso a una instancia de Teradata Vantage.
  <ClearscapeDocsNote />
* DataHub instalado. Consulte [Guía de inicio rápido de DataHub](https://datahubproject.io/docs/quickstart)

## Configurar centro de datos

* Instale el complemento Teradata para DataHub en el entorno donde tiene instalado DataHub

``` bash
pip install 'acryl-datahub[teradata]'
```

* Configure un usuario de Teradata y establezca privilegios para permitir que ese usuario lea las tablas del diccionario

``` sql
CREATE USER datahub FROM <database> AS PASSWORD = <password> PERM = 20000000;

GRANT SELECT ON dbc.columns TO datahub;
GRANT SELECT ON dbc.databases TO datahub;
GRANT SELECT ON dbc.tables TO datahub;
GRANT SELECT ON DBC.All_RI_ChildrenV TO datahub;
GRANT SELECT ON DBC.ColumnsV TO datahub;
GRANT SELECT ON DBC.IndicesV TO datahub;
GRANT SELECT ON dbc.TableTextV TO datahub;
GRANT SELECT ON dbc.TablesV TO datahub;
GRANT SELECT ON dbc.dbqlogtbl TO datahub; -- if lineage or usage extraction is enabled
```
* Si desea ejecutar la creación de perfiles, debe otorgar permiso de selección en todas las tablas de las que desea crear perfiles.

* Si desea extraer metadatos de linaje o uso, el registro de consultas debe estar habilitado y configurado en un tamaño que se ajuste a sus consultas (el tamaño de texto de consulta predeterminado que captura Teradata es de 200 caracteres como máximo). Un ejemplo de cómo puede configurarlo para todos los usuarios:

``` sql
-- set up query logging on all

REPLACE QUERY LOGGING LIMIT SQLTEXT=2000 ON ALL;
```

## Agregar una conexión Teradata a DataHub
Con DataHub en ejecución, abra la GUI de DataHub e inicie sesión.  En este ejemplo, se ejecuta en localhost:9002 

* Inicie el asistente de nueva conexión haciendo clic en el icono del conector de ingesta 
![Etiqueta de incorporación](../other-integrations/images/configure-a-teradata-connection-in-datahub/ingestion-icon.png)

  y luego seleccionando "Crear nueva fuente" 
  
![Crear una nueva fuente](../other-integrations/images/configure-a-teradata-connection-in-datahub/create-new-source.png)

* Desplácese por la lista de fuentes disponibles y seleccione Otro 
![Seleccionar fuente](../other-integrations/images/configure-a-teradata-connection-in-datahub/select-other-source.png)

* Se necesita una receta para configurar la conexión a Teradata y definir las opciones requeridas, como por ejemplo si se debe capturar el linaje de tablas y columnas, perfilar los datos o recuperar estadísticas de uso.  A continuación se muestra una receta sencilla para empezar. El host, el nombre de usuario y la contraseña deben modificarse para que coincidan con su entorno.

``` yaml
pipeline_name: my-teradata-ingestion-pipeline
source:
  type: teradata
  config:
    host_port: "myteradatainstance.teradata.com:1025"
    username: myuser
    password: mypassword
    #database_pattern:
    #  allow:
    #    - "my_database"
    #  ignoreCase: true
    include_table_lineage: true
    include_usage_statistics: true
    stateful_ingestion:
      enabled: true
```

Pegar la receta en la ventana debería verse así: 
![Nueva fuente de incorporación](../other-integrations/images/configure-a-teradata-connection-in-datahub/new-ingestion-source.png)

* Haga clic en Siguiente y luego configure el programa requerido. 
![Establecer programación](../other-integrations/images/configure-a-teradata-connection-in-datahub/set-schedule.png)

* Haga clic en Siguiente para finalizar y asigne un nombre a la conexión. Haga clic en Avanzado para poder configurar la versión de CLI correcta. La compatibilidad de DataHub con Teradata empezó a estar disponible en CLI 0.12.x.  Se recomienda seleccionar la versión más actual para garantizar la mejor compatibilidad.
![Terminar](../other-integrations/images/configure-a-teradata-connection-in-datahub/finish-up.png)

* Una vez guardada la nueva fuente, se puede ejecutar manualmente haciendo clic en Ejecutar. 
![Ejecutar](../other-integrations/images/configure-a-teradata-connection-in-datahub/execute.png)

Al hacer clic en "Exitoso" después de una ejecución exitosa, aparecerá un cuadro de diálogo similar a este donde podrá ver las bases de datos, tablas y vistas que se han incorporado a DataHub.  
![Resultado de la incorporación](../other-integrations/images/configure-a-teradata-connection-in-datahub/ingestion-result.png)

* Los metadatos ahora se pueden explorar en la GUI navegando:
  * DataSets proporciona una lista de los conjuntos de datos (tablas y vistas) cargados
![Conjuntos de datos](../other-integrations/images/configure-a-teradata-connection-in-datahub/datasets.png)
  * Entidades capturadas de la base de datos
![Entidades](../other-integrations/images/configure-a-teradata-connection-in-datahub/entities-list.png)
  * Esquema de una entidad que muestra nombres de columnas/campos, tipos de datos y uso si se ha capturado
![Visualización del esquema](../other-integrations/images/configure-a-teradata-connection-in-datahub/schema.png)
  * Linaje que proporciona una representación visual de cómo se vinculan los datos entre tablas y vistas
![Imagen de linaje](../other-integrations/images/configure-a-teradata-connection-in-datahub/lineage-weather.png)

## Resumen

Este tutorial demostró cómo crear una conexión a Teradata Vantage con DataHub para capturar metadatos de tablas, vistas junto con estadísticas de linaje y uso.

## Lectura adicional
* [Integrar DataHub con Teradata Vantage](https://datahubproject.io/docs/generated/ingestion/sources/teradata)
* [Opciones de integración de DataHub para recetas](https://datahubproject.io/docs/metadata-ingestion/#recipes)

import CommunityLinkPartial from '../_partials/community_link.mdx';

<CommunityLinkPartial />

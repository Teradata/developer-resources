---
sidebar_position: 6
author: Mohammad Taha Wahab, Mohammad Harris Mansur y Will Fleury
email: mohammadtaha.wahab@teradata.com , mohammadharris.mansur@teradata.com y will.fleury@teradata.com
page_last_update: 5 de enero de 2023
description: Conector de la tienda de funciones empresariales Feast con Teradata
keywords: [data warehouses, analytics, teradata, vantage, time series, business intelligence, enterprise analytics, feature store, Feast, connector]
---

# Crear un almacén de funciones FEAST en Teradata Vantage

## Introducción

El conector de Feast para Teradata es una implementación completa con soporte para todas las funciones y utiliza Teradata Vantage como tienda en línea y fuera de línea.

## Prerrequisitos

Acceso a una instancia de Teradata Vantage.

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'

<ClearscapeDocsNote />


## Información general
En este tutorial se asume que conoce la terminología de Feast. Si necesita un repaso, consulte la [documentación de FEAST](https://docs.feast.dev)

Este documento demuestra cómo los desarrolladores pueden integrar `Teradata's offline and online store` con Feast. Las tiendas fuera de línea de Teradata permiten a los usuarios utilizar cualquier almacén de datos subyacente como almacén de funciones fuera de línea. Las características se pueden recuperar de la tienda fuera de línea para el entrenamiento del modelo y se pueden materializar en la tienda de características en línea para usar durante la inferencia del modelo.

Por otro lado, las tiendas en línea se utilizan para ofrecer funciones de baja latencia. El comando `materialize` se puede utilizar para cargar valores de características desde las fuentes de datos (o tiendas fuera de línea) en la tienda en línea

La biblioteca `feast-teradata` agrega soporte para Teradata como

* `OfflineStore`
* `OnlineStore`

Además, el uso de Teradata como registro (catálogo) ya es compatible a través de `registry_type: sql` y se incluye en nuestros ejemplos. Esto significa que todo está ubicado en Teradata. Sin embargo, dependiendo de los requisitos, instalación, etc., esto se puede mezclar y combinar con otros sistemas según corresponda.

## Primeros pasos

Para comenzar, instale la biblioteca `feast-teradata`
``` bash , id="feast_pip_install", role="emits-gtm-events"
pip install feast-teradata
```

Vamos a crear una configuración de Feast sencilla con Teradata utilizando el conjunto de datos de los controladores estándar. Tenga en cuenta que no puede usar `feast init`, ya que este comando solo funciona para plantillas que forman parte de la biblioteca principal de feast. Tenemos la intención de fusionar esta biblioteca con el núcleo de feast con el tiempo, pero por ahora necesitará usar el siguiente comando de CLI para esta tarea específica. Todos los demás comandos de CLI `feast` funcionan según lo esperado.

``` bash
feast-td init-repo
```

Luego se le solicitará la información requerida para el sistema Teradata y se cargará el conjunto de datos de ejemplo. Supongamos que utilizó el nombre del repositorio `demo` al ejecutar el comando anterior. Puede encontrar los archivos del repositorio junto con un archivo llamado `test_workflow.py`. Al ejecutar este `test_workflow.py`, se ejecutará un flujo de trabajo completo para el feast con Teradata como Registry, OfflineStore y OnlineStore.

``` bash
demo/
    feature_repo/
        driver_repo.py
        feature_store.yml
    test_workflow.py
```

Desde el directorio `demo/feature_repo`, ejecute el siguiente comando de feast para aplicar (importar/actualizar) la definición del repositorio en el registro. Podrá ver las tablas de metadatos del registro en la base de datos Teradata después de ejecutar este comando.

``` bash
feast apply
```

Para ver la información del registro en la interfaz de usuario de feast, ejecute el siguiente comando. Tenga en cuenta que --registry_ttl_sec es importante ya que, de forma predeterminada, sondea cada 5 segundos.

``` bash
feast ui --registry_ttl_sec=120
```

## Configuración de tienda sin conexión
``` yaml

project: <name of project>
registry: <registry>
provider: local
offline_store:
   type: feast_teradata.offline.teradata.TeradataOfflineStore
   host: <db host>
   database: <db name>
   user: <username>
   password: <password>
   log_mech: <connection mechanism>

```

## Definición de repositorio

A continuación se muestra un ejemplo de definition.py que explica cómo
configurar la entidad, el conector de origen y la vista de funciones.

Ahora, para explicar los diferentes componentes:

* `TeradataSource:` Fuente de datos para funciones almacenadas en Teradata (Enterprise o Lake) o accesibles a través de una tabla externa desde Teradata (NOS, QueryGrid)

* `Entity:` Una colección de características relacionadas semánticamente.

* `Feature View:` Una vista de características es un grupo de datos de características de una fuente de datos específica. Las vistas de características le permiten definir de forma coherente características y sus fuentes de datos, lo que permite la reutilización de grupos de características en un proyecto.


``` python
driver = Entity(name="driver", join_keys=["driver_id"])
project_name = yaml.safe_load(open("feature_store.yaml")]("project"]

driver_stats_source = TeradataSource(
    database=yaml.safe_load(open("feature_store.yaml")]("offline_store"]["database"],
    table=f"{project_name}_feast_driver_hourly_stats",
    timestamp_field="event_timestamp",
    created_timestamp_column="created",
)

driver_stats_fv = FeatureView(
    name="driver_hourly_stats",
    entities=[driver],
    ttl=timedelta(weeks=52 * 10),
    schema=[
        Field(name="driver_id", dtype=Int64),
        Field(name="conv_rate", dtype=Float32),
        Field(name="acc_rate", dtype=Float32),
        Field(name="avg_daily_trips", dtype=Int64),
    ],
    source=driver_stats_source,
    tags={"team": "driver_performance"},
)

```

## Uso de la tienda sin conexión

Hay dos formas diferentes de probar su tienda sin conexión como se explica a continuación. Pero primero, es necesario seguir algunos pasos obligatorios:

Ahora, leamos por lotes algunas características para el entrenamiento, usando solo entidades (población) para las cuales hemos visto un evento en los últimos `60` días. Los predicados (filtro) utilizados pueden ser cualquier cosa relevante para la selección de entidad (población) para el conjunto de datos de entrenamiento dado. El `event_timestamp` es solo para fines de ejemplo.

``` python

from feast import FeatureStore
store = FeatureStore(repo_path="feature_repo")
training_df = store.get_historical_features(
    entity_df=f"""
            SELECT
                driver_id,
                event_timestamp
            FROM demo_feast_driver_hourly_stats
            WHERE event_timestamp BETWEEN (CURRENT_TIMESTAMP - INTERVAL '60' DAY) AND CURRENT_TIMESTAMP
        """,
    features=[
        "driver_hourly_stats:conv_rate",
        "driver_hourly_stats:acc_rate",
        "driver_hourly_stats:avg_daily_trips"
    ],
).to_df()
print(training_df.head())
```

La biblioteca `feast-teradata` le permite utilizar el conjunto completo de funciones y API de Feast. Consulte el [inicio rápido](https://docs.feast.dev/getting-started/quickstart) de Feast oficial para obtener detalles adicionales sobre todo lo que puede hacer.

## Tienda en línea

Feast materializa datos en tiendas en línea para búsquedas de baja latencia en el momento de la inferencia del modelo. Normalmente, los almacenes clave-valor se utilizan para las tiendas en línea; sin embargo, también se pueden utilizar bases de datos relacionales para este propósito.

Los usuarios pueden desarrollar sus propias tiendas en línea creando una clase que implemente el contrato en la clase OnlineStore.

## Configuración de la tienda en línea
``` yaml
project: <name of project>
registry: <registry>
provider: local
offline_store:
   type: feast_teradata.offline.teradata.TeradataOfflineStore
   host: <db host>
   database: <db name>
   user: <username>
   password: <password>
   log_mech: <connection mechanism>
```

## Uso de la tienda en línea
Hay que seguir algunos pasos obligatorios antes de que podamos probar la tienda en línea:

El comando `materialize_incremental` se utiliza para materializar de forma incremental funciones en la tienda en línea. Si no hay nuevas funciones que agregar, este comando esencialmente no hará nada. Con feast `materialize_incremental`, la hora de inicio es ahora: ttl (el ttl que definimos en nuestras vistas de funciones) o la hora de la materialización más reciente. Si ha materializado funciones al menos una vez, las materializaciones posteriores solo recuperarán funciones que no estaban presentes en la tienda en el momento de las materializaciones anteriores.

``` bash
CURRENT_TIME=$(date +'%Y-%m-%dT%H:%M:%S')
feast materialize-incremental $CURRENT_TIME
```

A continuación, mientras buscamos las funciones en línea, tenemos dos parámetros `features` y `entity_rows`. El parámetro `features` es una lista y puede tomar cualquier número de características que estén presentes en `df_feature_view`. El ejemplo anterior muestra las 4 características presentes, pero también pueden ser menos de 4. En segundo lugar, el parámetro `entity_rows` también es una lista y toma un diccionario con el formato `{feature_identifier_column: value_to_be_fetched}`. En nuestro caso, la columna driver_id se utiliza para identificar de forma única las diferentes filas del controlador de entidad. Actualmente estamos obteniendo valores de las funciones donde driver_id es igual a 5. También podemos recuperar varias filas de este tipo usando el formato: `[{driver_id: val_1}, {driver_id: val_2}, .., {driver_id: val_n}] [{driver_id: val_1}, {driver_id: val_2}, .., {driver_id: val_n}]`


``` python
entity_rows = [
        {
            "driver_id": 1001,
        },
        {
            "driver_id": 1002,
        },
    ]
features_to_fetch = [
            "driver_hourly_stats:acc_rate",
            "driver_hourly_stats:conv_rate",
            "driver_hourly_stats:avg_daily_trips"
        ]
returned_features = store.get_online_features(
    features=features_to_fetch,
    entity_rows=entity_rows,
).to_dict()
for key, value in sorted(returned_features.items()):
    print(key, " : ", value)
```

## Cómo configurar el Registro SQL

Otra cosa importante es el Registro SQL. Primero creamos una variable de ruta que usa el nombre de usuario, contraseña, nombre de la base de datos, etc. para crear una cadena de conexión que luego usa para establecer una conexión con la base de datos de Teradata.
``` python
path = 'teradatasql://'+ teradata_user +':' + teradata_password + '@'+host + '/?database=' + teradata_database + '&LOGMECH=' + teradata_log_mech
```

Creará la siguiente tabla en su base de datos:

* Entities (entity_name,project_id,last_updated_timestamp,entity_proto)

* Data_sources (data_source_name,project_id,last_updated_timestamp,data_source_proto)

* Feature_views (feature_view_name,project_id,last_updated_timestamp,materialized_intervals,feature_view_proto,user_metadata)

* Request_feature_views (feature_view_name,project_id,last_updated_timestamp,feature_view_proto,user_metadata)

* Stream_feature_views (feature_view_name,project_id,last_updated_timestamp,feature_view_proto,user_metadata)

* managed_infra (infra_name, project_id, last_updated_timestamp, infra_proto)

* validation_references (validation_reference_name, project_id, last_updated_timestamp, validation_reference_proto)

* saved_datasets (saved_dataset_name, project_id, last_updated_timestamp, saved_dataset_proto)

* feature_services (feature_service_name, project_id, last_updated_timestamp, feature_service_proto)

* on_demand_feature_views (feature_view_name, project_id, last_updated_timestamp, feature_view_proto, user_metadata)

Además, si desea ver un ejemplo completo (pero no del mundo real) de flujo de trabajo de un extremo a otro, consulte el script `demo/test_workflow.py`. Esto se utiliza para probar la funcionalidad completa de feast.

Un almacén de funciones empresariales acelera el proceso de obtención de valor en etapas cruciales del análisis de datos. Mejora la productividad y reduce el tiempo necesario para introducir productos en el mercado. Al integrar Teradata con Feast, se permite el uso del procesamiento paralelo altamente eficiente de Teradata dentro de una Feature Store, mejorando así el rendimiento.

## Lectura adicional

* [Registro escalable de Feast](https://docs.feast.dev/tutorials/using-scalable-registry)
* [Habilitar un almacén de funciones altamente escalable con Teradata Vantage y FEAST](https://medium.com/teradata/enabling-highly-scalable-feature-store-with-teradata-vantage-and-feast-e01008fa8fdb)

import CommunityLinkPartial from '../_partials/community_link.mdx';

<CommunityLinkPartial />

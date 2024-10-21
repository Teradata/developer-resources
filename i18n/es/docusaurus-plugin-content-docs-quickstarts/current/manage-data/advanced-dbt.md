---
sidebar_position: 5
id: advanced-dbt
title: Casos de uso avanzados de dbt con Teradata Vantage
author: Daniel Herrera
email: daniel.herrera2@teradata.com
page_last_update: 22 de mayo de 2023
description: Casos de uso avanzados de dbt (Data Build Tool) con Teradata Vantage.
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics, elt, dbt.]
---

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'
import CommunityLink from '../_partials/community_link.mdx'

# Casos de uso avanzados de dbt con Teradata Vantage

## Información general

Este proyecto muestra la integración de dbt con Teradata Vantage desde una perspectiva de usuario avanzada. 
Si no está familiarizado con la ingeniería de datos con dbt, le recomendamos que comience con nuestro [proyecto introductorio.](dbt.md)

Los casos de uso avanzados que se muestran en la demostración son los siguientes:

* Materializaciones incrementales
* Macros de utilidad
* Optimización de creaciones de tablas/vistas con modificadores específicos de Teradata

La aplicación de estos conceptos se ilustra a través del proceso ELT de `teddy_retailers`, una tienda ficticia. 

## Prerrequisitos

* Acceso a una instancia de Teradata Vantage.

    <ClearscapeDocsNote />

* Python **3.7**, **3.8**, **3.9** o **3.10** instalado.

* Un cliente de base de datos para ejecutar comandos de base de datos; un ejemplo de la configuración de uno de dichos clientes se presenta en [este tutorial.](../connect-to-vantage/configure-a-teradata-vantage-connection-in-dbeaver.md).

## Configuración del proyecto de demostración

1. Clone el repositorio del tutorial y use cd para ir al directorio del proyecto:
    ```bash
    git clone https://github.com/Teradata/teddy_retailers_dbt-dev teddy_retailers
    cd teddy_retailers
    ```

2. Cree un nuevo entorno Python para administrar dbt y sus dependencias. Confirme que la versión de Python que está utilizando para crear el entorno esté dentro de las versiones admitidas enumeradas anteriormente.
    ```bash
    python -m venv env
    ```

3. Active el entorno Python según su sistema operativo.
    ```bash
    source env/bin/activate
    ```

    para Mac, Linux o

    ```bash
    env\Scripts\activate
    ```
    para Windows

4. Instale el módulo `dbt-teradata`. El módulo dbt principal se incluye como una dependencia, por lo que no es necesario instalarlo por separado:

    ```bash
    pip install dbt-teradata
    ```

5. Instale las dependencias del proyecto `dbt-utils` y `teradata-utils`. Esto se puede hacer a través del siguiente comando:

    ```bash
    dbt deps
    ```

## Configuración del almacén de datos

El proyecto de demostración supone que los datos de origen ya están cargados en su almacén de datos, esto imita la forma en que se utiliza dbt en un entorno de producción. 
Para lograr este objetivo, proporcionamos conjuntos de datos públicos disponibles en Google Cload Platform (GCP) y scripts para cargar esos conjuntos de datos en su almacén de datos simulado. 

1. Cree o seleccione una base de datos funcional. El perfil dbt en el proyecto apunta a una base de datos llamada `teddy_retailers`. Puede cambiar el valor de `schema` para que apunte a una base de datos existente en su instancia de Teradata Vantage o puede crear la base de datos `teddy_retailers` ejecutando el siguiente script en su cliente de base de datos:
    ```sql
    CREATE DATABASE teddy_retailers
    AS PERMANENT = 110e6,
        SPOOL = 220e6;
    ```
2. Cargar el conjunto de datos inicial. 
Para cargar el conjunto de datos inicial en el almacén de datos, los scripts necesarios están disponibles en la ruta `references/inserts/create_data.sql` del proyecto.
Puede ejecutar estos scripts copiándolos y pegándolos en su cliente de base de datos. Para obtener orientación sobre cómo ejecutar estos scripts en su caso específico, consulte la documentación de su cliente de base de datos.

## Configurar dbt

Ahora configuraremos dbt para conectarse a su base de datos Vantage. 
Cree el archivo `$HOME/.dbt/profiles.yml` con el siguiente contenido. Ajuste `<host>`, `<user>`, `<password>` para que coincida con su instancia de Teradata Vantage.
Si ya ha utilizado dbt antes en su entorno, solo necesita agregar un perfil para el proyecto en el archivo `.dbt/profiles.yml` del directorio de su hogar.
Si el directorio .dbt aún no existe en su sistema, deberá crearlo y agregar perfiles.yml para administrar sus perfiles dbt.


```bash
teddy_retailers:
  outputs:
    dev:
      type: teradata
      host: <host>
      user: <user>
      password: <password>
      logmech: TD2
      schema: teddy_retailers
      tmode: ANSI
      threads: 1
      timeout_seconds: 300
      priority: interactive
      retries: 1
  target: dev
```

Ahora que tenemos el archivo de perfil en su lugar, podemos validar la configuración:

```bash
dbt debug
```

Si el comando de depuración devolvió errores, es probable que tenga un problema con el contenido de `profiles.yml`.

## Acerca del almacén de Teddy Retailers

Como se mencionó, `teddy_retailers` es una tienda ficticia. 
A través de transformaciones impulsadas por dbt, transformamos los datos de origen ingeridos de la base de datos transaccional `teddy_retailers` en un esquema en estrella listo para análisis.

### Los modelos de datos

Los datos de origen constan de las siguientes tablas: orders, products y order_products, según el siguiente diagrama de relaciones entre entidades:

![advanceddbt1](../images/advanceddbt1.svg)

Al usar dbt, aprovechamos las tablas de datos de origen para construir el siguiente modelo dimensional, que está optimizado para herramientas de análisis.

![advanceddbt2](../images/advanceddbt2.svg)

### Las fuentes

* Para Teddy Retailers, las fuentes `orders` y `order_products` se actualizan periódicamente mediante el proceso ELT (Extract, Load, Transform) de la organización. 
* Los datos actualizados solo incluyen los últimos cambios en lugar del conjunto de datos completo debido a su gran volumen. 
* Para abordar este desafío, es necesario capturar estas actualizaciones incrementales y al mismo tiempo preservar los datos previamente disponibles.

## Los modelos dbt

El archivo `schema.yml` en el directorio de modelos del proyecto especifica las fuentes de nuestros modelos. Estas fuentes se alinean con los datos que cargamos desde GCP usando nuestros scripts SQL.

### Área provisional

Los modelos del área provisional simplemente ingieren los datos de cada una de las fuentes y cambian el nombre de cada campo, si corresponde. 
En el esquema.yml de este directorio definimos comprobaciones de integridad básicas para las claves primarias. 

### Área central

En los modelos de esta etapa se aplican los siguientes conceptos avanzados de dbt: 

#### Materializaciones incrementales

El archivo `schema.yml` en este directorio especifica que las materializaciones de los dos modelos que estamos construyendo son incrementales. 
Empleamos diferentes estrategias para estos modelos:

* Para `all_orders model`, utilizamos la estrategia eliminarinsertar. Esta estrategia se implementa porque puede haber cambios en el estado de un pedido que se incluyen en las actualizaciones de datos.
* Para el modelo `all_order_products`, empleamos la estrategia de adición predeterminada. Se elige este enfoque porque la misma combinación de `order_id` y `product_id` puede aparecer varias veces en las fuentes. 
Esto indica que se ha agregado o eliminado una nueva cantidad del mismo producto de un pedido específico.

#### Afirmaciones asistidas por macros

Dentro del modelo `all_order_products`, hemos incluido una afirmación con la ayuda de una macro para probar y garantizar que el modelo resultante abarque una combinación única de `order_id` y `product_id`. Esta combinación indica la última cantidad de productos de un tipo específico por pedido.

#### Modificadores de Teradata

Para los modelos `all_order` y `all_order_products`, hemos incorporado modificadores de Teradata para mejorar el seguimiento de estos dos modelos principales.
Para facilitar la recopilación de estadísticas, hemos agregado un `post_hook` que indica al conector de la base de datos en consecuencia. Además, hemos creado un índice en la columna `order_id` dentro de la tabla `all_orders`.


## Ejecutar transformaciones

### Crear un modelo dimensional con datos de referencia.

Al ejecutar dbt, generamos el modelo dimensional utilizando los datos de referencia.


``` bash
dbt run
```

Esto creará nuestros modelos centrales y dimensionales utilizando los datos de referencia.

### Probar los datos

Podemos ejecutar nuestra prueba definida ejecutando:


```bash
dbt test
```

### Ejecutar consultas de muestra

Puede encontrar ejemplos de consultas de inteligencia empresarial en la ruta `references/query` del proyecto. Estas consultas le permiten analizar los datos fácticos en función de dimensiones como clientes, pedidos y productos.

### Simular el proceso ELT

Los scripts para cargar actualizaciones en el conjunto de datos de origen se pueden encontrar en la ruta `references/inserts/update_data.sql` del proyecto.

Después de actualizar las fuentes de datos, puede continuar con los pasos antes mencionados: ejecutar dbt, probar los datos y ejecutar consultas de muestra. Esto le permitirá visualizar las variaciones y actualizaciones incrementales en los datos.

## Resumen

En este tutorial, exploramos la utilización de conceptos avanzados de dbt con Teradata Vantage. 
El proyecto de muestra mostró la transformación de datos de origen en un data mart dimensional. 
A lo largo del proyecto, implementamos varios conceptos avanzados de dbt, incluidas materializaciones incrementales, macros de utilidades y modificadores de Teradata.

<CommunityLink />
---
id: nos
sidebar_position: 1
author: Adán Tworkiewicz
email: adam.tworkiewicz@teradata.com
page_last_update: 7 de septiembre de 2021
description: 'Teradata Vantage Native Object Storage: lectura y escritura desde/hacia el almacenamiento de objetos, interfaz SQL unificada para Vantage y almacenamiento de objetos.'
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics]
---

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'
import CommunityLink from '../_partials/community_link.mdx'

# Consultar datos almacenados en el almacenamiento de objetos

## Información general

Native Object Storage (NOS) es una característica de Vantage que le permite consultar datos almacenados en archivos en almacenamiento de objetos como AWS S3, Google GCS, Azure Blob o implementaciones locales. Es útil en escenarios en los que desea explorar datos sin crear una canalización de datos para incorporarlos a Vantage.

## Prerrequisitos

Necesita acceso a una instancia de Teradata Vantage. NOS está habilitado en todas las ediciones de Vantage, desde Vantage Express hasta Developer, DYI y Vantage as a Service a partir de la versión 17.10.

<ClearscapeDocsNote />

## Explorar datos con NOS

:::note
Actualmente, NOS admite formatos de datos CSV, JSON (como matriz o delimitados por nueva línea) y Parquet.
:::

Supongamos que tiene un conjunto de datos almacenado como archivos CSV en un depósito de S3. Desea explorar el conjunto de datos antes de decidir si desea incorporarlo a Vantage. Para este escenario, utilizaremos un conjunto de datos públicos publicado por Teradata que contiene datos de flujo de ríos recopilados por el
Servicio Geológico de EE. UU. El depósito está en https://td-usgs-public.s3.amazonaws.com/.

Primero echemos un vistazo a los datos CSV de muestra. Tomamos las primeras 10 filas que Vantage recuperará del depósito:

```sql
SELECT
  TOP 10 *
FROM (
	LOCATION='/s3/td-usgs-public.s3.amazonaws.com/CSVDATA/'
) AS d;
```

Esto es lo que tengo:

```sql
GageHeight2  Flow   site_no   datetime             Precipitation  GageHeight
-----------  ------ --------  -------------------  -------------  ----------
10.9         15300  09380000  2018-06-28 00:30     671            9.80
10.8         14500  09380000  2018-06-28 01:00     673            9.64
10.7         14100  09380000  2018-06-28 01:15     672            9.56
11.0         16200  09380000  2018-06-27 00:00     669            9.97
10.9         15700  09380000  2018-06-27 00:30     668            9.88
10.8         15400  09380000  2018-06-27 00:45     672            9.82
10.8         15100  09380000  2018-06-27 01:00     672            9.77
10.8         14700  09380000  2018-06-27 01:15     672            9.68
10.9         16000  09380000  2018-06-27 00:15     668            9.93
10.8         14900  09380000  2018-06-28 00:45     672            9.72
```


Tenemos muchos números, pero ¿qué significan? Para responder a esta pregunta, le pediremos a Vantage que detecte el esquema de los archivos CSV:

```sql
SELECT
  *
FROM (
	LOCATION='/s3/td-usgs-public.s3.amazonaws.com/CSVDATA/'
	RETURNTYPE='NOSREAD_SCHEMA'
) AS d;
```

Vantage ahora obtendrá una muestra de datos para analizar el esquema y devolverá los resultados:

```sql
Name            Datatype                            FileType  Location
--------------- ----------------------------------- --------- -------------------------------------------------------------------
GageHeight2     decimal(3,2)                        csv       /S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09513780/2018/06/27.csv
Flow            decimal(3,2)                        csv       /S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09513780/2018/06/27.csv
site_no         int                                 csv       /S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09513780/2018/06/27.csv
datetime        TIMESTAMP(0) FORMAT'Y4-MM-DDBHH:MI' csv       /S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09513780/2018/06/27.csv
Precipitation   decimal(3,2)                        csv       /S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09513780/2018/06/27.csv
GageHeight      decimal(3,2)                        csv       /S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09513780/2018/06/27.csv
```



Vemos que los archivos CSV tienen 6 columnas. Para cada columna, obtenemos el nombre, el tipo de datos y las coordenadas del archivo que se utilizaron para inferir el esquema.

## Consultar datos con NOS

Ahora que conocemos el esquema, podemos trabajar con el conjunto de datos como si fuera una tabla SQL normal. Para demostrarlo, intentemos agregar algunos datos. Obtengamos una temperatura promedio por sitio para los sitios que recopilan temperaturas.

```sql
SELECT
  site_no Site_no, AVG(Flow) Avg_Flow
FROM (
  LOCATION='/s3/td-usgs-public.s3.amazonaws.com/CSVDATA/'
) AS d
GROUP BY
  site_no
HAVING
  Avg_Flow IS NOT NULL;
```

Resultado:

```sql
Site_no  Avg_Flow
-------- ---------
09380000 11
09423560 73
09424900 93
09429070 81
```

Para registrar su actividad exploratoria ad hoc como fuente permanente, créela como una tabla externa:

```sql
-- If you are running this sample as dbc user you will not have permissions
-- to create a table in dbc database. Instead, create a new database and use
-- the newly create database to create a foreign table.

CREATE DATABASE Riverflow
  AS PERMANENT = 60e6, -- 60MB
  SPOOL = 120e6; -- 120MB

-- change current database to Riverflow
DATABASE Riverflow;

CREATE FOREIGN TABLE riverflow
  USING ( LOCATION('/s3/td-usgs-public.s3.amazonaws.com/CSVDATA/') );

SELECT top 10 * FROM riverflow;
```

Resultado:

```sql
Location                                                            GageHeight2 Flow site_no datetime            Precipitation GageHeight
------------------------------------------------------------------- ----------- ---- ------- ------------------- ------------- ----------
/S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09429070/2018/07/02.csv null        null 9429070 2018-07-02 14:40:00 1.21          null
/S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09400815/2018/07/10.csv null        0.00 9400815 2018-07-10 00:30:00 0.00          -0.01
/S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09400815/2018/07/10.csv null        0.00 9400815 2018-07-10 00:45:00 0.00          -0.01
/S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09400815/2018/07/10.csv null        0.00 9400815 2018-07-10 01:00:00 0.00          -0.01
/S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09400815/2018/07/10.csv null        0.00 9400815 2018-07-10 00:15:00 0.00          -0.01
/S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09429070/2018/07/02.csv null        null 9429070 2018-07-02 14:38:00 1.06          null
```


Esta vez, la declaración `SELECT` parece una selección normal en una tabla de la base de datos. Si necesita un tiempo de respuesta inferior a un segundo al consultar los datos, existe una manera sencilla de llevar los datos CSV a Vantage para acelerar las cosas. Siga leyendo para descubrir cómo.

## Cargar datos desde NOS en Vantage

Consultar el almacenamiento de objetos lleva tiempo. ¿Qué pasaría si decidiera que los datos parecen interesantes y desea realizar más análisis con una solución que le brinde respuestas más rápidas? La buena noticia es que los datos devueltos con NOS se pueden utilizar como fuente para declaraciones `CREATE TABLE`. Suponiendo que tenga el privilegio `CREATE TABLE`, podrá ejecutar:

IMPORTANT: Esta consulta supone que creó la base de datos `Riverflow` y una tabla externa llamada `riverflow` en el paso anterior.

```sql
-- This query assumes you created database `Riverflow`
-- and a foreign table called `riverflow` in the previous step.

CREATE MULTISET TABLE riverflow_native (site_no, Flow, GageHeight, datetime)
AS (
  SELECT site_no, Flow, GageHeight, datetime FROM riverflow
) WITH DATA
NO PRIMARY INDEX;

SELECT TOP 10 * FROM riverflow_native;
```

Resultado:

```sql
site_no   Flow  GageHeight  datetime
-------  -----  ----------  -------------------
9400815    .00        -.01  2018-07-10 00:30:00
9400815    .00        -.01  2018-07-10 01:00:00
9400815    .00        -.01  2018-07-10 01:15:00
9400815    .00        -.01  2018-07-10 01:30:00
9400815    .00        -.01  2018-07-10 02:00:00
9400815    .00        -.01  2018-07-10 02:15:00
9400815    .00        -.01  2018-07-10 01:45:00
9400815    .00        -.01  2018-07-10 00:45:00
9400815    .00        -.01  2018-07-10 00:15:00
9400815    .00        -.01  2018-07-10 00:00:00
```

Esta vez, la consulta `SELECT` regresó en menos de un segundo. Vantage no tuvo que buscar los datos de NOS. En cambio, respondió utilizando datos que ya estaban en sus nodos.

## Acceder a depósitos privados

Hasta ahora, hemos utilizado un depósito público. ¿Qué pasa si tiene un depósito privado? ¿Cómo le dice a Vantage qué credenciales debe usar?

Es posible insertar sus credenciales directamente en su consulta:

```sql
SELECT
  TOP 10 *
FROM (
  LOCATION='/s3/td-usgs-public.s3.amazonaws.com/CSVDATA/'
  AUTHORIZATION='{"ACCESS_ID":"","ACCESS_KEY":""}'
) AS d;
```

Ingresar estas credenciales todo el tiempo puede resultar tedioso y menos seguro. En Vantage, puede crear un objeto de autorización que servirá como contenedor para sus credenciales:

```sql
CREATE AUTHORIZATION aws_authorization
  USER 'YOUR-ACCESS-KEY-ID'
  PASSWORD 'YOUR-SECRET-ACCESS-KEY';
```

Luego puede hacer referencia a su objeto de autorización cuando cree una tabla externa:

```sql
CREATE FOREIGN TABLE riverflow
, EXTERNAL SECURITY aws_authorization
USING ( LOCATION('/s3/td-usgs-public.s3.amazonaws.com/CSVDATA/') );
```

## Exportar datos de Vantage al almacenamiento de objetos

Hasta ahora hemos hablado de leer e importar datos desde el almacenamiento de objetos. ¿No estaría bien si tuviéramos una manera de usar SQL para exportar datos desde Vantage al almacenamiento de objetos? Esto es exactamente para lo que sirve la función "WRITE_NOS". Digamos que queremos exportar datos de la tabla "riverflow_native" al almacenamiento de objetos. Puede hacerlo con la siguiente consulta:

```sql
SELECT * FROM WRITE_NOS (
  ON ( SELECT * FROM riverflow_native )
  PARTITION BY site_no ORDER BY site_no
  USING
    LOCATION('YOUR-OBJECT-STORE-URI')
    AUTHORIZATION(aws_authorization)
    STOREDAS('PARQUET')
    COMPRESSION('SNAPPY')
    NAMING('RANGE')
    INCLUDE_ORDERING('TRUE')
) AS d;
```

Aquí, le indicamos a Vantage que tome datos de `riverflow_native` y los guarde en el depósito `YOUR-OBJECT-STORE-URI` usando el formato `parquet`. Los datos se dividirán en archivos según el atributo `site_no`. Los archivos se comprimirán.

## Resumen

En este inicio rápido, hemos aprendido cómo leer datos del almacenamiento de objetos utilizando la funcionalidad Native Object Storage (NOS) en Vantage. NOS admite la lectura e importación de datos almacenados en formatos CSV, JSON y Parquet. NOS también puede exportar datos desde Vantage al almacenamiento de objetos.

# Lectura adicional
* [Teradata Vantage™: Guía de introducción a Native Object Storage](https://docs.teradata.com/r/2mw8ooFr~xX0EaaGFaDW8A/root)

<CommunityLink />
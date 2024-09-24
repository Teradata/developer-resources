---
sidebar_position: 12
id: create-parquet-files-in-object-storage
author: Obed Vega
email: obed.vega@teradata.com
page_last_update: 2 de agosto de 2022
description: 'Teradata Vantage Native Object Storage: lectura y escritura desde/hacia el almacenamiento de objetos, interfaz SQL unificada para Vantage y almacenamiento de objetos.'
keywords: [data warehouses, compute storage separation, Teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics, parquet, crear archivos parquet]
---

import UseCase from '../_partials/use-csae.mdx';
import CommunityLink from '../_partials/community_link.mdx';

# Crear archivos Parquet en el almacenamiento de objetos

## Información general
Native Object Storage (NOS) es una función de Vantage que le permite consultar datos almacenados en archivos como conjuntos de datos en formato CSV, JSON y Parquet.
Estos conjuntos de datos se encuentran en un almacenamiento de objetos externo compatible con S3, como AWS S3, Google GCS, Azure Blob o implementaciones locales.
Es útil en escenarios en los que desea explorar datos sin crear una canalización de datos para incorporarlos a Vantage. Este tutorial demuestra cómo exportar datos desde Vantage al almacenamiento de objetos utilizando el formato de archivo Parquet.

## Prerrequisitos

Necesita acceso a una instancia de Teradata Vantage. NOS está habilitado en todas las ediciones de Vantage, desde Vantage Express hasta Developer, DYI y Vantage as a Service a partir de la versión 17.10.

:::important
Este tutorial se basa en el almacenamiento de objetos de s3 aws. Necesitará su propio depósito s3 con permisos de escritura para completar el tutorial.
:::

<UseCase />

## Crear un archivo Parquet con la función WRITE_NOS

`WRITE_NOS` le permite extraer columnas seleccionadas o todas de una tabla de base de datos o de resultados derivados y escribir en un almacenamiento de objetos externo, como Amazon S3, Azure Blob Storage, Azure Data Lake Storage Gen2 y Google Cloud Storage. Esta funcionalidad almacena datos en formato Parquet.

Puede encontrar más documentación sobre la funcionalidad `WRITE_NOS` en la [documentación de NOS](https://docs.teradata.com/r/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide/June-2022/Writing-Data-to-External-Object-Store).

Necesitará acceso a una base de datos donde pueda ejecutar la función `WRITE_NOS`. Si no tiene dicha base de datos, ejecute los siguientes comandos:

``` sql
CREATE USER db AS PERM=10e7, PASSWORD=db;

-- Don't forget to give the proper access rights
GRANT EXECUTE FUNCTION on TD_SYSFNLIB.READ_NOS to db;
GRANT EXECUTE FUNCTION on TD_SYSFNLIB.WRITE_NOS to db;
```

:::note
Si quiere obtener más información sobre cómo configurar usuarios y sus privilegios, consulte la [documentación de NOS](https://docs.teradata.com/r/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide/June-2022/Setting-Up-Access/Setting-Access-Privileges).
:::


1. Primero creemos una tabla en su instancia de Teradata Vantage:

```sql
CREATE SET TABLE db.parquet_table ,FALLBACK ,
     NO BEFORE JOURNAL,
     NO AFTER JOURNAL,
     CHECKSUM = DEFAULT,
     DEFAULT MERGEBLOCKRATIO,
     MAP = TD_MAP1
     (
      column1 SMALLINT NOT NULL,
      column2 DATE FORMAT 'YY/MM/DD' NOT NULL,
      column3 DECIMAL(10,2))
PRIMARY INDEX ( column1 );
```

2. Complete su tabla con datos de ejemplo:
```sql
INSERT INTO db.parquet_table (1,'2022/01/01',1.1);
INSERT INTO db.parquet_table (2,'2022/01/02',2.2);
INSERT INTO db.parquet_table (3,'2022/01/03',3.3);
```

Su tabla ahora debería verse así:

```sql
column1   column2       column3
-------  --------  ------------
      1  22/01/01          1.10
      2  22/01/02          2.20
      3  22/01/03          3.30
```

3. Cree el archivo parquet con `WRITE_NOS`. No olvide reemplazar `<BUCKET_NAME>` con el nombre de su depósito s3. Además, reemplace `<YOUR-ACCESS-KEY-ID>` y `<YOUR-SECRET-ACCESS-KEY>` con su clave de acceso y secreto.

:::note
Consulte los documentos de su proveedor de nube sobre cómo crear credenciales para acceder al almacenamiento de objetos. Por ejemplo, para AWS consulte [¿Cómo creo una clave de acceso de AWS?](https://aws.amazon.com/premiumsupport/knowledge-center/create-access-key/)
:::

```sql
SELECT * FROM WRITE_NOS (
ON ( SELECT * FROM db.parquet_table)
USING
LOCATION('/s3/<BUCKET_NAME>.s3.amazonaws.com/parquet_file_on_NOS.parquet')
AUTHORIZATION('{"ACCESS_ID":"<YOUR-ACCESS-KEY-ID>",
"ACCESS_KEY":"<YOUR-SECRET-ACCESS-KEY>"}')
STOREDAS('PARQUET')
MAXOBJECTSIZE('16MB')
COMPRESSION('SNAPPY')
INCLUDE_ORDERING('TRUE')
INCLUDE_HASHBY('TRUE')
) as d;
```

Ahora ha creado un archivo parquet en su depósito de almacenamiento de objetos. Ahora, para consultar fácilmente su archivo, debe seguir el paso número 4.

4. Cree una tabla externa respaldada por NOS. No olvide reemplazar `<BUCKET_NAME>` con el nombre de su depósito s3. Además, reemplace `<YOUR-ACCESS-KEY-ID>` y `<YOUR-SECRET-ACCESS-KEY>` con su clave de acceso y secreto:
```sql
CREATE MULTISET FOREIGN TABLE db.parquet_table_to_read_file_on_NOS
, EXTERNAL SECURITY DEFINER TRUSTED CEPH_AUTH,
MAP = TD_MAP1
(
  Location VARCHAR(2048) CHARACTER SET UNICODE CASESPECIFIC
  , col1 SMALLINT
  , col2 DATE
  , col3 DECIMAL(10,2)

)
USING (
    LOCATION ('/s3/<BUCKET_NAME>.s3.amazonaws.com/parquet_file_on_NOS.parquet')
    AUTHORIZATION('{"ACCESS_ID":"<YOUR-ACCESS-KEY-ID>",
    "ACCESS_KEY":"<YOUR-SECRET-ACCESS-KEY>"}')
    STOREDAS ('PARQUET')
)NO PRIMARY INDEX;
```

5. Ahora que está listo para consultar su archivo parquet en NOS, intentemos la siguiente consulta:
```sql
SELECT col1, col2, col3 FROM db.parquet_table_to_read_file_on_NOS;
```

Los datos devueltos por la consulta deberían verse así:

```sql
  col1      col2          col3
------  --------  ------------
     1  22/01/01          1.10
     2  22/01/02          2.20
     3  22/01/03          3.30
```

## Resumen

In this tutorial we have learned how to export data from Vantage to a parquet file on object storage using Native Object Storage (NOS). NOS supports reading and importing data stored in CSV, JSON and Parquet formats. NOS can also export data from Vantage to object storage.

## Lectura adicional
* [Teradata Vantage™: escritura de datos en un almacén de objetos externo](https://docs.teradata.com/r/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide/June-2022/Writing-Data-to-External-Object-Store)

<CommunityLink />
---
sidebar_position: 11
author: Adán Tworkiewicz
email: adam.tworkiewicz@teradata.com
page_last_update: 6 de abril de 2022
title: Cargar datos con TPT
description: Cargue datos en Vantage de manera eficaz utilizando Teradata Parallel Transporter (TPT).
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics, Fastload, Teradata Parallel Transporter, TPT]
id: run-bulkloads-efficiently-with-teradata-parallel-transporter
---

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx';
import Tabs from '../_partials/tabsTPT.mdx';

# Ejecutar grandes cargas masivas de manera eficiente con Teradata Parallel Transporter (TPT)

## Información general

A menudo tenemos la necesidad de mover grandes volúmenes de datos a Vantage. Teradata ofrece la utilidad `Teradata Parallel Transporter (TPT)`, que puede cargar de manera eficiente grandes cantidades de datos en Teradata Vantage. Este tutorial demuestra cómo usar `TPT`. En este escenario, cargaremos más de 300.000 registros, más de 40 MB de datos, en un par de segundos.

## Prerrequisitos

* Acceso a una instancia de Teradata Vantage.
    <ClearscapeDocsNote />

* Descargue Teradata Tools and Utilities (TTU) - Plataformas compatibles: [Windows](https://downloads.teradata.com/download/tools/teradata-tools-and-utilities-windows-installation-package), [MacOS](https://downloads.teradata.com/download/tools/teradata-tools-and-utilities-mac-osx-installation-package), [Linux](https://downloads.teradata.com/download/tools/teradata-tools-and-utilities-linux-installation-package-0) (requiere registro).

## Instalar TTU

<Tabs />


## Obtener datos de muestra

Trabajaremos con las declaraciones de impuestos de EE. UU. para organizaciones sin fines de lucro. Las declaraciones de impuestos de organizaciones sin fines de lucro son datos públicos. El Servicio de Impuestos Internos de EE. UU. los publica en el depósito S3. Veamos un resumen de las presentaciones de 2020: `https://storage.googleapis.com/clearscape_analytics_demo_data/TPT/index_2020.csv`. Puede utilizar su navegador, `wget` o `curl` para guardar el archivo localmente.

## Crear una base de datos

Creemos una base de datos en Vantage. Utilice su herramienta SQL favorita para ejecutar la siguiente consulta:

``` sql
CREATE DATABASE irs
AS PERMANENT = 120e6, -- 120MB
    SPOOL = 120e6; -- 120MB
```

## Ejecutar TPT

Ahora ejecutaremos `TPT`. `TPT` es una herramienta de línea de comandos que se puede utilizar para cargar, extraer y actualizar datos en Teradata Vantage. Estas diversas funciones se implementan en los llamados `operators`. Por ejemplo, la carga de datos en Vantage la maneja el operador `Load`. El operador `Load` es muy eficiente a la hora de cargar grandes cantidades de datos en Vantage. El operador `Load`, para ser rápido, tiene varias restricciones. Solo puede llenar tablas vacías. No se admiten inserciones en tablas ya completadas. No admite tablas con índices secundarios. Además, no insertará registros duplicados, incluso si una tabla es una tabla `MULTISET`. Para obtener la lista completa de restricciones, consulte [Referencia de Teradata® TPT - Operador de carga - Restricciones y limitaciones](https://docs.teradata.com/r/Teradata-Parallel-Transporter-Reference/February-2022/Load-Operator/Usage-Notes/Normalized-Tables/Restrictions-and-Limitations).

TPT tiene su propio lenguaje de programación. El lenguaje le permite preparar la base de datos con comandos SQL arbitrarios, declarar la fuente de entrada y definir cómo se deben insertar los datos en Vantage.

Para cargar los datos csv en Vantage, definiremos y ejecutaremos un trabajo. El trabajo preparará la base de datos. Eliminará las tablas de registro y errores antiguas y creará la tabla de destino. Luego leerá el archivo e insertará los datos en la base de datos.

* Cree un archivo de variable de trabajo que le indique a TPT cómo conectarse a nuestra base de datos Vantage. Cree el archivo `jobvars.txt` e inserte el siguiente contenido. Reemplace `host` con el nombre de host de su base de datos. Por ejemplo, si está utilizando una instancia local de Vantage Express, utilice `127.0.0.1`. `username` con el nombre de usuario de la base de datos y `password` con la contraseña de la base de datos. Tenga en cuenta que el paso de preparación (DDL) y el paso de carga tienen sus propios valores de configuración y que los valores de configuración deben introducirse dos veces para configurar tanto el DDL como el paso de carga.

    ``` bash , id="tpt_first_config", role="emits-gtm-events"
    TargetTdpId           = 'host'
    TargetUserName        = 'username'
    TargetUserPassword    = 'password'

    FileReaderDirectoryPath = ''
    FileReaderFileName      = 'index_2020.csv'
    FileReaderFormat        = 'Delimited'
    FileReaderOpenMode      = 'Read'
    FileReaderTextDelimiter = ','
    FileReaderSkipRows      = 1

    DDLErrorList = '3807'

    LoadLogTable    = 'irs.irs_returns_lg'
    LoadErrorTable1 = 'irs.irs_returns_et'
    LoadErrorTable2 = 'irs.irs_returns_uv'
    LoadTargetTable = 'irs.irs_returns'
    ```

* Cree un archivo con el siguiente contenido y guárdelo como `load.txt`. Consulte los comentarios dentro del archivo de trabajo para comprender su estructura.

    ``` bash
    DEFINE JOB file_load
    DESCRIPTION 'Load a Teradata table from a file'
    (
      /*
        Define the schema of the data in the csv file
      */
      DEFINE SCHEMA SCHEMA_IRS
        (
          in_return_id     VARCHAR(19),
          in_filing_type   VARCHAR(5),
          in_ein           VARCHAR(19),
          in_tax_period    VARCHAR(19),
          in_sub_date      VARCHAR(22),
          in_taxpayer_name VARCHAR(100),
          in_return_type   VARCHAR(5),
          in_dln           VARCHAR(19),
          in_object_id     VARCHAR(19)
        );

      /*
        In the first step, we are sending statements to remove old tables
        and create a new one.
        This step replies on configuration stored in `od_IRS` operator
      */
      STEP st_Setup_Tables
      (
        APPLY
          ('DROP TABLE ' || @LoadLogTable || ';'),
          ('DROP TABLE ' || @LoadErrorTable1 || ';'),
          ('DROP TABLE ' || @LoadErrorTable2 || ';'),
          ('DROP TABLE ' || @LoadTargetTable || ';'),
          ('CREATE TABLE ' || @LoadTargetTable || ' (
              return_id INT,
              filing_type VARCHAR(5) CHARACTER SET LATIN NOT CASESPECIFIC,
              ein INT,
              tax_period INT,
              sub_date VARCHAR(100) CHARACTER SET LATIN NOT CASESPECIFIC,
              taxpayer_name VARCHAR(100) CHARACTER SET LATIN NOT CASESPECIFIC,
              return_type VARCHAR(5) CHARACTER SET LATIN NOT CASESPECIFIC,
              dln BIGINT,
              object_id BIGINT
            )
            PRIMARY INDEX ( return_id );')
        TO OPERATOR ($DDL);
      );

      /*
        Finally, in this step we read the data from the file operator
        and send it to the load operator.
      */
      STEP st_Load_File
      (
        APPLY
          ('INSERT INTO ' || @LoadTargetTable || ' (
              return_id,
              filing_type,
              ein,
              tax_period,
              sub_date,
              taxpayer_name,
              return_type,
              dln,
              object_id
          ) VALUES (
              :in_return_id,
              :in_filing_type,
              :in_ein,
              :in_tax_period,
              :in_sub_date,
              :in_taxpayer_name,
              :in_return_type,
              :in_dln,
              :in_object_id
          );')
        TO OPERATOR ($LOAD)
        SELECT * FROM OPERATOR($FILE_READER(SCHEMA_IRS));
      );
    );
    ```

* Ejecute el trabajo:

    ``` bash
    tbuild -f load.txt -v jobvars.txt -j file_load
    ```

    Una ejecución exitosa devolverá registros similares a este:

    ``` bash
    Teradata Parallel Transporter Version 17.10.00.10 64-Bit
    The global configuration file '/opt/teradata/client/17.10/tbuild/twbcfg.ini' is used.
      Log Directory: /opt/teradata/client/17.10/tbuild/logs
      Checkpoint Directory: /opt/teradata/client/17.10/tbuild/checkpoint

    Job log: /opt/teradata/client/17.10/tbuild/logs/file_load-4.out
    Job id is file_load-4, running on osboxes
    Teradata Parallel Transporter SQL DDL Operator Version 17.10.00.10
    od_IRS: private log not specified
    od_IRS: connecting sessions
    od_IRS: sending SQL requests
    od_IRS: TPT10508: RDBMS error 3807: Object 'irs_returns_lg' does not exist.
    od_IRS: TPT18046: Error is ignored as requested in ErrorList
    od_IRS: TPT10508: RDBMS error 3807: Object 'irs_returns_et' does not exist.
    od_IRS: TPT18046: Error is ignored as requested in ErrorList
    od_IRS: TPT10508: RDBMS error 3807: Object 'irs_returns_uv' does not exist.
    od_IRS: TPT18046: Error is ignored as requested in ErrorList
    od_IRS: disconnecting sessions
    od_IRS: Total processor time used = '0.013471 Second(s)'
    od_IRS: Start : Thu Apr  7 20:56:32 2022
    od_IRS: End   : Thu Apr  7 20:56:32 2022
    Job step st_Setup_Tables completed successfully
    Teradata Parallel Transporter Load Operator Version 17.10.00.10
    ol_IRS: private log not specified
    Teradata Parallel Transporter DataConnector Operator Version 17.10.00.10
    op_IRS[1]: Instance 1 directing private log report to 'dtacop-root-368731-1'.
    op_IRS[1]: DataConnector Producer operator Instances: 1
    op_IRS[1]: ECI operator ID: 'op_IRS-368731'
    op_IRS[1]: Operator instance 1 processing file 'index_2020.csv'.
    ol_IRS: connecting sessions
    ol_IRS: preparing target table
    ol_IRS: entering Acquisition Phase
    ol_IRS: entering Application Phase
    ol_IRS: Statistics for Target Table:  'irs.irs_returns'
    ol_IRS: Total Rows Sent To RDBMS:      333722
    ol_IRS: Total Rows Applied:            333722
    ol_IRS: Total Rows in Error Table 1:   0
    ol_IRS: Total Rows in Error Table 2:   0
    ol_IRS: Total Duplicate Rows:          0
    op_IRS[1]: Total files processed: 1.
    ol_IRS: disconnecting sessions
    Job step st_Load_File completed successfully
    Job file_load completed successfully
    ol_IRS: Performance metrics:
    ol_IRS:     MB/sec in Acquisition phase: 9.225
    ol_IRS:     Elapsed time from start to Acquisition phase:   2 second(s)
    ol_IRS:     Elapsed time in Acquisition phase:   5 second(s)
    ol_IRS:     Elapsed time in Application phase:   3 second(s)
    ol_IRS:     Elapsed time from Application phase to end: < 1 second
    ol_IRS: Total processor time used = '0.254337 Second(s)'
    ol_IRS: Start : Thu Apr  7 20:56:32 2022
    ol_IRS: End   : Thu Apr  7 20:56:42 2022
    Job start: Thu Apr  7 20:56:32 2022
    Job end:   Thu Apr  7 20:56:42 2022
    ```


## `TPT` vs. NOS

En nuestro caso, el archivo está en un depósito S3. Eso significa que podemos usar Native Object Storage (NOS) para ingerir los datos:

``` sql
-- create an S3-backed foreign table
CREATE FOREIGN TABLE irs_returns_nos
    USING ( LOCATION('/s3/s3.amazonaws.com/irs-form-990/index_2020.csv') );

-- load the data into a native table
CREATE MULTISET TABLE irs_returns_nos_native
    (RETURN_ID, FILING_TYPE, EIN, TAX_PERIOD, SUB_DATE, TAXPAYER_NAME)
AS (
    SELECT RETURN_ID, FILING_TYPE, EIN, TAX_PERIOD, SUB_DATE, TAXPAYER_NAME FROM irs_returns_nos
) WITH DATA
NO PRIMARY INDEX;
```

La solución NOS es práctica porque no depende de herramientas adicionales. Se puede implementar usando solo SQL. Funciona bien, especialmente para implementaciones Vantage con una gran cantidad de AMP, ya que las tareas NOS se delegan a AMP y se ejecutan en paralelo. Además, dividir los datos del almacenamiento de objetos en varios archivos puede mejorar aún más el rendimiento.

## Resumen

Este tutorial demostró cómo incorporar grandes cantidades de datos en Vantage. Cargamos cientos de miles de registros en Vantage en un par de segundos usando `TPT`.

## Lectura adicional
* [Guía del usuario de Teradata® TPT](https://docs.teradata.com/r/Teradata-Parallel-Transporter-User-Guide/February-2022)
* [Referencia de Teradata® TPT](https://docs.teradata.com/r/Teradata-Parallel-Transporter-Reference/February-2022)
* [Consultar datos almacenados en el almacenamiento de objetos](./nos.md)


import CommunityLinkPartial from '../_partials/community_link.mdx';

<CommunityLinkPartial />

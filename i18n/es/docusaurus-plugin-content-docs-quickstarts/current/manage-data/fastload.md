---
sidebar_position: 20
author: Adam Tworkiewicz
email: adam.tworkiewicz@teradata.com
page_last_update: 6 de abril de 2022
description: Cargue datos en Vantage de manera eficiente utilizando Teradata Fastload.
keywords: [almacenes de datos, separación de almacenamiento informático, teradata, vantage, plataforma de datos en la nube, almacenamiento de objetos, inteligencia empresarial, análisis empresarial, Fastload]
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Ejecutar grandes cargas masivas de manera eficiente con Fastload

## Aviso de obsolescencia
:::important
Este tutorial describe la utilidad `Fastload`. La utilidad ha quedado obsoleta. Para nuevas implementaciones, considere utilizar [Teradata Parallel Transporter (TPT)](https://docs.teradata.com/search/documents?query=Teradata+Parallel+Transporter+Quick+Start+Guide&sort=last_update&virtual-field=title_only&content-lang=en-US).
:::

## Descripción general

A menudo tenemos la necesidad de mover grandes volúmenes de datos a Vantage. Teradata ofrece la utilidad `Fastload`, que puede cargar de manera eficiente grandes cantidades de datos en Teradata Vantage. Este tutorial demuestra cómo usar `Fastload`. En este escenario, cargaremos más de 300.000 registros, más de 40 MB de datos, en un par de segundos.

## Requisitos previos

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'

* Acceso a una instancia de Teradata Vantage.
  <ClearscapeDocsNote />
* Descargue Teradata Tools and Utilities (TTU) -  plataformas compatibles: [Windows](https://downloads.teradata.com/download/tools/teradata-tools-and-utilities-windows-installation-package), [MacOS](https://downloads.teradata.com/download/tools/teradata-tools-and-utilities-macos-installation-package), [Linux](https://downloads.teradata.com/download/tools/teradata-tools-and-utilities-linux-installation-package-0) (requires registration).

## Install TTU
   <Tabs>
   <TabItem value="Windows" label="Windows">
    Descomprima el archivo descargado y ejecute `setup.exe`.
   </TabItem>
   <TabItem value="MacOS" label="MacOS">
   Descomprima el archivo descargado y ejecute `TeradataToolsAndUtilitiesXX.XX.XX.pkg`.
   </TabItem>
   <TabItem value="Linux" label="Linux">
    Descomprima el archivo descargado, vaya al directorio descomprimido y ejecute:
    ```bash 
    ./setup.sh a
    ```
   </TabItem>
   </Tabs>


## Obtener datos de muestra

Trabajaremos con las declaraciones de impuestos de EE. UU. para organizaciones sin fines de lucro. Las declaraciones de impuestos de organizaciones sin fines de lucro son datos públicos. El Servicio de Impuestos Internos de EE. UU. los publica en el depósito S3. Veamos un resumen de las presentaciones de 2020: `https://s3.amazonaws.com/irs-form-990/index_2020.csv`. Puede utilizar su navegador, `wget` o `curl` para guardar el archivo localmente.

## Crear una base de datos

Creemos una base de datos en Vantage. Utilice su herramienta SQL favorita para ejecutar la siguiente consulta:

```sql
CREATE DATABASE irs
AS PERMANENT = 120e6, -- 120MB
    SPOOL = 120e6; -- 120MB
```

## Ejecutar carga rápida

Ahora ejecutaremos `Fastload`. `Fastload` es una herramienta de línea de comandos que es muy eficiente para cargar grandes cantidades de datos en Vantage. `Fastload`, para ser rápido, tiene varias restricciones. Solo puede completar tablas vacías; no se admiten inserciones en tablas ya completadas. No admite tablas con índices secundarios. Además, no insertará registros duplicados, incluso si una tabla es una tabla `MULTISET`. Para obtener la lista completa de restricciones, consulte [Referencia de Teradata® `Fastload`](https://docs.teradata.com/r/hBBrRBhRY0MFN4~xApbUqw/root).

Fastload tiene su propio lenguaje de programación. El lenguaje le permite preparar la base de datos con comandos SQL arbitrarios, declarar la fuente de entrada y definir cómo se deben insertar los datos en Vantage. La herramienta admite el modo interactivo y por lotes. En esta sección, usaremos el modo interactivo.

Comencemos `Fastload` en el modo interactivo:

```bash
fastload
```

Primero, iniciemos sesión en una base de datos Vantage. Tengo un Vantage Express ejecutándose localmente, así que usaré `localhost` como nombre de host y `dbc` como nombre de usuario y contraseña:

```bash
LOGON localhost/dbc,dbc;
```

Ahora que hemos iniciado sesión, voy a preparar la base de datos. Estoy cambiando a la base de datos `irs` y asegurándome de que la tabla de destino `irs_returns` y las tablas de error (más sobre las tablas de error más adelante) no existan:

```sql
DATABASE irs;
DROP TABLE irs_returns;
DROP TABLE irs_returns_err1;
DROP TABLE irs_returns_err2;
```

Ahora crearé una tabla vacía que pueda contener los elementos de datos del archivo csv.

```sql
CREATE MULTISET TABLE irs_returns (
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
PRIMARY INDEX ( return_id );
```

Ahora que la tabla de destino ha sido preparada, podemos comenzar a cargar los datos. La directiva `ERRORFILES` define archivos de error. Los archivos de error son en realidad tablas que `Fastload` crea. La primera tabla contiene información sobre la conversión de datos y otras cuestiones. La segunda tabla realiza un seguimiento de los problemas de unicidad de los datos, por ejemplo, infracciones de clave primaria.

```sql
BEGIN LOADING irs_returns
    ERRORFILES irs_returns_err1, irs_returns_err2;
```

Le indicamos a `Fastload` que guarde un punto de control cada 10.000 filas. Es útil en caso de que tengamos que reiniciar nuestro trabajo. Podrá reanudarse desde el último punto de control.


```sql
    CHECKPOINT 10000;
```

También debemos decirle a `Fastload` que omita la primera fila del archivo CSV para comenzar en el registro 2. Esto se debe a que la primera fila contiene encabezados de columna.

```sql
    RECORD 2;
```

`Fastload` también necesita saber que es un archivo separado por comas:

```sql
    SET RECORD VARTEXT ",";
```

El bloque `DEFINE` especifica qué columnas deberíamos esperar:

```sql
    DEFINE in_return_id (VARCHAR(19)),
    in_filing_type (VARCHAR(5)),
    in_ein (VARCHAR(19)),
    in_tax_period (VARCHAR(19)),
    in_sub_date (VARCHAR(22)),
    in_taxpayer_name (VARCHAR(100)),
    in_return_type (VARCHAR(5)),
    in_dln (VARCHAR(19)),
    in_object_id (VARCHAR(19)),
```

El bloque `DEFINE` también tiene el atributo `FILE` que apunta al archivo con los datos. Reemplace `FILE = /tmp/index_2020.csv;` con la ubicación del archivo `index_2020.csv`:
```sql
    FILE = /tmp/index_2020.csv;
```

Finalmente, definimos la instrucción INSERT que colocará los datos en la base de datos y cerramos el bloque `LOADING`:

```sql
    INSERT INTO irs_returns (
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
    );
END LOADING;
```
Una vez finalizado el trabajo, nos desconectamos de la base de datos para limpiar las cosas.

```sql
LOGOFF;
```

Así es como se ve el guión completo:
```sql
LOGON localhost/dbc,dbc;

DATABASE irs;
DROP TABLE irs_returns;
DROP TABLE irs_returns_err1;
DROP TABLE irs_returns_err2;

CREATE MULTISET TABLE irs_returns (
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
PRIMARY INDEX ( return_id );

BEGIN LOADING irs_returns
  ERRORFILES irs_returns_err1, irs_returns_err2;
  CHECKPOINT 10000;
  RECORD 2;
  SET RECORD VARTEXT ",";

  DEFINE in_return_id (VARCHAR(19)),
    in_filing_type (VARCHAR(5)),
    in_ein (VARCHAR(19)),
    in_tax_period (VARCHAR(19)),
    in_sub_date (VARCHAR(22)),
    in_taxpayer_name (VARCHAR(100)),
    in_return_type (VARCHAR(5)),
    in_dln (VARCHAR(19)),
    in_object_id (VARCHAR(19)),
    FILE = /tmp/index_2020.csv;

  INSERT INTO irs_returns (
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
  );
END LOADING;

LOGOFF;
```

## Por lotes

Para ejecutar nuestro ejemplo en modo por lotes, simplemente guarde todas las instrucciones en un solo archivo y ejecute:


```bash
fastload < file_with_instruction.fastload
```

## `Fastload` vs. NOS

En nuestro caso, el archivo está en un depósito S3. Eso significa que podemos usar Native Object Storage (NOS) para ingerir los datos:

```sql
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

Este tutorial demostró cómo incorporar grandes cantidades de datos en Vantage. Cargamos cientos de miles de registros en Vantage en un par de segundos usando `Fastload`.

## Otras lecturas

* [Referencia de Teradata® `Fastload`](https://docs.teradata.com/r/hBBrRBhRY0MFN4~xApbUqw/root)
* [Consultar datos almacenados en el almacenamiento de objetos](../manage-data/nos.md)

import CommunityLinkPartial from '../_partials/community_link.mdx';

<CommunityLinkPartial />
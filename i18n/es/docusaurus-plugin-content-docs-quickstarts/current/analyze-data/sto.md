---
sidebar_position: 4
id: sto
title: Ejecutar scripts en Vantage
author: Adán Tworkiewicz
email: adam.tworkiewicz@teradata.com
page_last_update: 7 de septiembre de 2021
description: 'Ejecutar aplicaciones en Teradata: utilice Script Table Operator para ejecutar aplicaciones en sus datos sin moverlos.'
keywords: [data warehouses, compute storage separation, teradata, vantage, script table operator, cloud data platform, object storage, business intelligence, enterprise analytics]
---

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'
import CommunityLink from '../_partials/community_link.mdx'

# Ejecutar scripts en Vantage

## Información general

A veces, es necesario aplicar una lógica compleja a los datos que no se puede expresar fácilmente en SQL. Una opción es envolver su lógica en una función definida por el usuario (User Defined Function, UDF). ¿Qué pasa si ya tiene esta lógica codificada en un lenguaje que no es compatible con UDF? Script Table Operador es una característica de Vantage que le permite llevar su lógica a los datos y ejecutarlos en Vantage. La ventaja de este enfoque es que no es necesario recuperar datos de Vantage para operar con él. Además, al ejecutar sus aplicaciones de datos en Vantage, aprovecha su naturaleza paralela. No es necesario pensar en cómo se escalarán sus aplicaciones. Puedes dejar que Vantage se encargue de ello.

## Prerrequisitos

Necesita acceso a una instancia de Teradata Vantage.

<ClearscapeDocsNote />

## Hello World

Comencemos con algo simple. ¿Qué pasaría si quisiera que la base de datos imprimiera "Hello World"?

```sql
SELECT *
FROM
  SCRIPT(
    SCRIPT_COMMAND('echo Hello World!')
    RETURNS ('Message varchar(512)'));
```

Esto es lo que tengo:
```sql
Message
------------
Hello World!
Hello World!
```

Analicemos lo que acaba de pasar aquí. El SQL incluye `echo Hello World!`. Este es un comando Bash. Bien, ahora sabemos cómo ejecutar comandos Bash. ¿Pero por qué obtuvimos 2 filas y no una? Esto se debe a que nuestro script simple se ejecutó una vez en cada AMP y resulta que tengo 2 AMP:

```sql
-- Teradata magic that returns the number of AMPs in a system
SELECT hashamp()+1 AS number_of_amps;
```

Devoluciones:
```sql
number_of_amps
--------------
             2
```

Este sencillo script demuestra la idea detrás del Script Table Operador (STO). Usted proporciona su script y la base de datos lo ejecuta en paralelo, una vez para cada AMP. Este es un modelo atractivo en caso de que tenga lógica de transformación en un script y muchos datos para procesar. Normalmente, necesitaría incorporar simultaneidad en su aplicación. Al permitir que STO lo haga, permite que Teradata seleccione el nivel de concurrencia correcto para sus datos.

## Idiomas admitidos

Bien, hicimos `echo` en Bash, pero Bash no es un entorno productivo para expresar lógica compleja. ¿Qué otros idiomas son compatibles entonces? La buena noticia es que cualquier binario que pueda ejecutarse en nodos Vantage se puede utilizar en STO. Recuerde que el binario y todas sus dependencias deben instalarse en todos sus nodos Vantage. En la práctica, significa que sus opciones estarán limitadas a lo que su administrador esté dispuesto y sea capaz de mantener en sus servidores. Python es una opción muy popular.

## Cargar guiones

De acuerdo, Hello World es muy emocionante, pero ¿qué pasa si tenemos lógica existente en un archivo grande? Seguramente no querrá pegar todo el script y las comillas de escape en una consulta SQL. Solucionamos el problema de carga de scripts con la función Archivos instalados por el usuario (User Installed Files, UIF).

Supongamos que tiene el script `helloworld.py` con el siguiente contenido:

```bash
print("Hello World!")
```

Supongamos que el script está en su máquina local en `/tmp/helloworld.py`.

Primero, necesitamos configurar permisos en Vantage. Haremos esto usando una nueva base de datos para mantenerla limpia.

```sql
-- Create a new database called sto
CREATE DATABASE STO
AS PERMANENT = 60e6, -- 60MB
    SPOOL = 120e6; -- 120MB

-- Allow dbc user to create scripts in database STO
GRANT CREATE EXTERNAL PROCEDURE ON STO to dbc;
```

Puede cargar el script en Vantage mediante la siguiente llamada al procedimiento:

```python
call SYSUIF.install_file('helloworld',
                         'helloworld.py', 'cz!/tmp/helloworld.py');
```

Ahora que se ha subido el script, puede llamarlo así:

```sql
-- We switch to STO database
DATABASE STO

-- We tell Vantage where to look for the script. This can be
-- any string and it will create a symbolic link to the directory
-- where our script got uploaded. By convention, we use the
-- database name.
SET SESSION SEARCHUIFDBPATH = sto;

-- We now call the script. Note, how we use a relative path that
-- starts with `./sto/`, which is where SEARCHUIFDBPATH
-- is pointing.
SELECT *
FROM SCRIPT(
  SCRIPT_COMMAND('python3 ./sto/helloworld.py')
  RETURNS ('Message varchar(512)'));
```

La última llamada debería devolver:
```sql
Message
------------
Hello World!
Hello World!
```

Fue mucho trabajo y todavía estamos en Hello World. Intentemos pasar algunos datos a `SCRIPT`.

## Pasar datos almacenados en Vantage a SCRIPT

Hasta ahora, hemos estado usando el operador `SCRIPT` para ejecutar scripts independientes. Pero el objetivo principal de ejecutar scripts en Vantage es procesar los datos que se encuentran en Vantage. Veamos cómo podemos recuperar datos de Vantage y pasarlos a `SCRIPT`.

Comenzaremos creando una tabla con algunas filas.

```sql
-- Switch to STO database.
DATABASE STO

-- Create a table with a few urls
CREATE TABLE urls(url varchar(10000));
INS urls('https://www.google.com/finance?q=NYSE:TDC');
INS urls('http://www.ebay.com/sch/i.html?_trksid=p2050601.m570.l1313.TR0.TRC0.H0.Xteradata+merchandise&_nkw=teradata+merchandise&_sacat=0&_from=R40');
INS urls('https://www.youtube.com/results?search_query=teradata%20commercial&sm=3');
INS urls('https://www.contrivedexample.com/example?mylist=1&mylist=2&mylist=...testing');
```

Usaremos el siguiente script para analizar los parámetros de consulta:

```python
from urllib.parse import urlparse
from urllib.parse import parse_qsl
import sys

for line in sys.stdin:
    # remove leading and trailing whitespace
    url = line.strip()
    parsed_url = urlparse(url)
    query_params = parse_qsl(parsed_url.query)

    for element in query_params:
        print("\t".join(element))
```

Tenga en cuenta que los scripts suponen que las URL se introducirán en `stdin` una por una, línea por línea. Además, observe cómo imprime los resultados línea por línea, utilizando el carácter de tabulación como delimitador entre valores.

Instalemos el script. Aquí, asumimos que el archivo de script está en `/tmp/urlparser.py` en nuestra máquina local:
```python
CALL SYSUIF.install_file('urlparser',
	'urlparser.py', 'cz!/tmp/urlparser.py');
```

Con el script instalado, ahora recuperaremos datos de la tabla `urls` y los introduciremos en el script para recuperar los parámetros de consulta:
```sql
-- We inform Vantage to create a symbolic link from the UIF directory to ./sto/
SET SESSION SEARCHUIFDBPATH = sto ;

SELECT *
  FROM SCRIPT(
    ON(SELECT url FROM urls)
    SCRIPT_COMMAND('python3 ./sto/urlparser.py')
    RETURNS ('param_key varchar(512)', 'param_value varchar(512)'));
```

Como resultado, obtenemos parámetros de consulta y sus valores. Hay tantas filas como pares clave/valor. Además, dado que insertamos una pestaña entre la clave y el valor de salida en el script, obtenemos 2 columnas de STO.
```sql
param_key   |param_value
-----------------------------------------------------------------
q           |NYSE:TDC
_trksid     |p2050601.m570.l1313.TR0.TRC0.H0.Xteradata merchandise
search_query|teradata commercial
_nkw        |teradata merchandise
sm          |3
_sacat      |0
mylist      |1
_from       |R40
mylist      |2
mylist      |...testing
```

## Insertar salida SCRIPT en una tabla

Hemos aprendido cómo tomar datos de Vantage, pasarlos a un script y obtener resultados. ¿Existe una manera sencilla de almacenar este resultado en una tabla? Claro que la hay. Podemos combinar la selección anterior con la declaración `CREATE TABLE`:

```sql
-- We inform Vantage to create a symbolic link from the UIF directory to ./sto/
SET SESSION SEARCHUIFDBPATH = sto ;

CREATE MULTISET TABLE
    url_params(param_key, param_value)
AS (
    SELECT *
    FROM SCRIPT(
      ON(SELECT url FROM urls)
      SCRIPT_COMMAND('python3 ./sto/urlparser.py')
      RETURNS ('param_key varchar(512)', 'param_value varchar(512)'))
) WITH DATA
NO PRIMARY INDEX;
```

Ahora, inspeccionemos el contenido de la tabla `url_params`:

```sql
SELECT * FROM url_params;
```

Debería ver el siguiente resultado:
```sql
param_key   |param_value
------------+-----------------------------------------------------
q           |NYSE:TDC
_trksid     |p2050601.m570.l1313.TR0.TRC0.H0.Xteradata merchandise
search_query|teradata commercial
_nkw        |teradata merchandise
sm          |3
_sacat      |0
mylist      |1
_from       |R40
mylist      |2
mylist      |...testing
```

## Resumen

En este inicio rápido, hemos aprendido cómo ejecutar scripts con datos en Vantage. Ejecutamos scripts utilizando Script Table Operador (STO). El operador nos permite aportar lógica a los datos. Descarga consideraciones de concurrencia a la base de datos al ejecutar nuestros scripts en paralelo, uno por AMP. Todo lo que necesita hacer es proporcionar un script y la base de datos lo ejecutará en paralelo.

## Lectura adicional
* [Teradata Vantage™: Operadores SQL y funciones definidas por el usuario - SCRIPT](https://docs.teradata.com/r/9VmItX3V2Ni9Ts70HbDzVg/CBAaRxUyOdF0t1SQIuXeug)
* [Análisis de R y Python con operador de tabla SCRIPT](https://docs.teradata.com/v/u/Orange-Book/R-and-Python-Analytics-with-SCRIPT-Table-Operator-Orange-Book-4.3.1)

<CommunityLink />
---
sidebar_position: 4
author: Sudha Vedula
email: sudha.vedula@teradata.com
page_last_update: 29 de mayo de 2023
description: Enviar consultas mediante REST API. Teradata® Query Service es un middleware que proporciona REST API para Vantage.
keywords: [query service, teradata, vantage, query, REST API]
---

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'

# Enviar consultas mediante REST API

## Información general

Teradata Query Service es una REST API para Vantage que puede utilizar para ejecutar declaraciones SQL estándar sin administrar controladores del lado del cliente. Utilice el servicio de consulta si desea consultar y acceder a la base de datos de análisis a través de una REST API.

Este tutorial proporciona ejemplos de casos de uso comunes para ayudarlo a comenzar con Query Service API.

## Prerrequisitos

Antes de comenzar, asegúrese de tener:
*	Acceso a un sistema VantageCloud donde se proporcione Query Service, o un VantageCore con conectividad habilitada para Query Service. Si es administrador y necesita instalar Query Service, consulte la [Guía de instalación, configuración y uso de Query Service](https://docs.teradata.com/r/Teradata-Query-Service-Installation-Configuration-and-Usage-Guide-for-Customers/April-2022).

  <ClearscapeDocsNote />

*	Nombre de host del servicio de consulta y nombre del sistema
* Credenciales de autorización para conectarse a la base de datos

¿Tiene problemas con los requisitos previos? Póngase en contacto con Teradata para obtener información de configuración.

## Ejemplos de API de servicio de consulta

Al utilizar los ejemplos, tenga en cuenta que:

* Los ejemplos de este documento utilizan Python y puede utilizarlos para crear ejemplos en el idioma que elija.
* Los ejemplos proporcionados aquí están completos y listos para su uso, aunque la mayoría requiere un poco de personalización.
  * Los ejemplos de este documento utilizan la URL `https://<QS_HOSTNAME>:1443/`.
  * Reemplace las siguientes variables con su propio valor:
    * `<QS_HOSTNAME>`: Servidor donde está instalado Query Service
    * `<SYSTEM_NAME>`: Alias ​​preconfigurado del sistema

:::note
Si su instancia de Vantage se proporciona a través de ClearScape Analytics Experience,`<QS_HOSTNAME>`, es la URL del host de su entorno de ClearScape Analytics Experience, `<SYSTEM_NAME>` es "local".
:::


## Conectarse a su instancia de Query Service

Proporcione credenciales válidas para acceder a la base de datos de Analytics de destino mediante la autenticación HTTP básica o JWT.

### Autenticación básica HTTP

El nombre de usuario y la contraseña de la base de datos se combinan en una cadena (`"username : password"`) que posteriormente se codifica mediante Base64. La respuesta de la API contiene el método de autorización y las credenciales codificadas.

**Solicitud**

``` python , id="queryservice_first_query", role="emits-gtm-events"
import requests
import json
import base64
requests.packages.urllib3.disable_warnings()

# run it from local.

db_user, db_password = 'dbc','dbc'
auth_encoded = db_user + ':' + db_password
auth_encoded = base64.b64encode(bytes(auth_encoded, 'utf-8'))
auth_str = 'Basic ' + auth_encoded.decode('utf-8')

print(auth_str)

headers = {
  'Content-Type': 'application/json',
  'Authorization': auth_str # base 64 encoded username:password
}

print(headers)
```

**Respuesta**
```python
Basic ZGJjOmRiYw==
{
  'Content-Type': 'application/json',
  'Authorization': 'Basic ZGJjOmRiYw=='
}
```

### Autenticación JWT

Prerequisites:

* El usuario ya debe existir en la base de datos.
* La base de datos debe estar habilitada para JWT.

**Solicitud**

``` python
import requests
import json
requests.packages.urllib3.disable_warnings()

# run it from local. 

auth_encoded_jwt = "<YOUR_JWT_HERE>"
auth_str = "Bearer " + auth_encoded_jwt

headers = {
  'Content-Type': 'application/json',
  'Authorization': auth_str
}

print(headers)
```

**Respuesta**

```python
{'Content-Type': 'application/json', 'Authorization': 'Bearer <YOUR_JWT_HERE>'}
```

## Realice una solicitud API simple con opciones básicas

En el siguiente ejemplo, la solicitud incluye:

* `SELECT * FROM DBC.DBCInfo`: la consulta al sistema con el alias `<SYSTEM_NAME>`.
* `'format': 'OBJECT'`: El formato de respuesta. Los formatos admitidos son: objeto JSON, matriz JSON y CSV.

    :::note
    El formato de objeto JSON crea un objeto JSON por fila donde el nombre de la columna es el nombre del campo y el valor de la columna es el valor del campo.
    :::

* `'includeColumns': true`: la solicitud para incluir metadatos de columna, como nombres y tipos de columnas, en la respuesta.
* `'rowLimit': 4`: el número de filas que se devolverán de una consulta.

**Solicitud**

``` python
url = 'https://<QS_HOSTNAME>:1443/systems/<SYSTEM_NAME>/queries'

payload = {
  'query': example_query, # 'SELECT * FROM DBC.DBCInfo;',
  'format': 'OBJECT',
  'includeColumns': True,
  'rowLimit': 4
}

payload_json = json.dumps(payload)

response = requests.request('POST', url, headers=headers, data=payload_json, verify=False)

num_rows = response.json().get('results'](0].get('rowCount')
print('NUMBER of ROWS', num_rows)
print('==========================================================')

print(response.json())
```

**Respuesta**

``` json
NUMBER of ROWS 4
==========================================================
{
  "queueDuration":7,
  "queryDuration":227,
  "results":[
    {
      "resultSet":True,
      "columns":[
        {
          "name":"DatabaseName",
          "type":"CHAR"
        },
        {
          "name":"USEDSPACE_IN_GB",
          "type":"FLOAT"
        },
        {
          "name":"MAXSPACE_IN_GB",
          "type":"FLOAT"
        },
        {
          "name":"Percentage_Used",
          "type":"FLOAT"
        },
        {
          "name":"REMAININGSPACE_IN_GB",
          "type":"FLOAT"
        }
      ],
      "data":[
        {
          "DatabaseName":"DBC",
          "USEDSPACE_IN_GB":317.76382541656494,
          "MAXSPACE_IN_GB":1510.521079641879,
          "Percentage_Used":21.03670247964377,
          "REMAININGSPACE_IN_GB":1192.757254225314
        },
        {
          "DatabaseName":"EM",
          "USEDSPACE_IN_GB":0.0007491111755371094,
          "MAXSPACE_IN_GB":11.546071618795395,
          "Percentage_Used":0.006488017745513208,
          "REMAININGSPACE_IN_GB":11.545322507619858
        },
        {
          "DatabaseName":"user10",
          "USEDSPACE_IN_GB":0.019153594970703125,
          "MAXSPACE_IN_GB":9.313225746154785,
          "Percentage_Used":0.20566016,
          "REMAININGSPACE_IN_GB":9.294072151184082
        },
        {
          "DatabaseName":"EMEM",
          "USEDSPACE_IN_GB":0.006140708923339844,
          "MAXSPACE_IN_GB":4.656612873077393,
          "Percentage_Used":0.13187072,
          "REMAININGSPACE_IN_GB":4.650472164154053
        },
        {
          "DatabaseName":"EMWork",
          "USEDSPACE_IN_GB":0.0,
          "MAXSPACE_IN_GB":4.656612873077393,
          "Percentage_Used":0.0,
          "REMAININGSPACE_IN_GB":4.656612873077393
        }
      ],
      "rowCount":4,
      "rowLimitExceeded":True
    }
  ]
}
```

Para conocer los parámetros de respuesta, consulte la [Guía de instalación, configuración y uso de Query Service](https://docs.teradata.com/r/Teradata-Query-Service-Installation-Configuration-and-Usage-Guide-for-Customers/April-2022/Using-the-Query-Service-APIs/Submitting-SQL-Statement/Request-Body).


### Solicitar una respuesta en formato CSV

Para devolver una respuesta API en formato CSV, configure el campo `*format*` en la solicitud con el valor `*CSV*`.

El formato CSV contiene solo los resultados de la consulta y no los metadatos de respuesta. La respuesta contiene una línea para cada fila, donde cada línea contiene las columnas de la fila separadas por una coma. El siguiente ejemplo devuelve los datos como valores separados por comas.

**Solicitud**

``` python
# CSV with all rows included

url = 'https://<QS_HOSTNAME>:1443/systems/<SYSTEM_NAME>/queries'

payload = {
  'query': example_query, # 'SELECT * FROM DBC.DBCInfo;',
  'format': 'CSV',
  'includeColumns': True
}

payload_json = json.dumps(payload)

response = requests.request('POST', url, headers=headers, data=payload_json, verify=False)

print(response.text)
```

**Respuesta**

```python
DatabaseName,USEDSPACE_IN_GB,MAXSPACE_IN_GB,Percentage_Used,REMAININGSPACE_IN_GB
DBC                           ,317.7634754180908,1510.521079641879,21.036679308932754,1192.7576042237881
EM                            ,7.491111755371094E-4,11.546071618795395,0.006488017745513208,11.545322507619858
user10                        ,0.019153594970703125,9.313225746154785,0.20566016,9.294072151184082
EMEM                          ,0.006140708923339844,4.656612873077393,0.13187072,4.650472164154053
EMWork                        ,0.0,4.656612873077393,0.0,4.656612873077393
EMJI                          ,0.0,2.3283064365386963,0.0,2.3283064365386963
USER_NAME                     ,0.0,2.0,0.0,2.0
readonly                      ,0.0,0.9313225746154785,0.0,0.9313225746154785
aug12_db                      ,7.200241088867188E-5,0.9313225746154785,0.0077312,0.9312505722045898
SystemFe                      ,1.8024444580078125E-4,0.7450580596923828,0.024192,0.744877815246582
dbcmngr                       ,3.814697265625E-6,0.09313225746154785,0.004096,0.09312844276428223
EMViews                       ,0.027594566345214844,0.09313225746154785,29.62944,0.06553769111633301
tdwm                          ,6.732940673828125E-4,0.09313225746154785,0.722944,0.09245896339416504
Crashdumps                    ,0.0,0.06984921544790268,0.0,0.06984921544790268
SYSLIB                        ,0.006252288818359375,0.03725290298461914,16.78336,0.031000614166259766
SYSBAR                        ,4.76837158203125E-6,0.03725290298461914,0.0128,0.03724813461303711
SYSUDTLIB                     ,3.5381317138671875E-4,0.029802322387695312,1.1872,0.029448509216308594
External_AP                   ,0.0,0.01862645149230957,0.0,0.01862645149230957
SysAdmin                      ,0.002307891845703125,0.01862645149230957,12.3904,0.016318559646606445
KZXaDtQp                      ,0.0,0.009313225746154785,0.0,0.009313225746154785
s476QJ6O                      ,0.0,0.009313225746154785,0.0,0.009313225746154785
hTzz03i7                      ,0.0,0.009313225746154785,0.0,0.009313225746154785
Y5WYUUXj                      ,0.0,0.009313225746154785,0.0,0.009313225746154785
```

## Utilice una sesión explícita para enviar una consulta

Utilice sesiones explícitas cuando una transacción necesite abarcar varias solicitudes o cuando utilice tablas volátiles. Estas sesiones solo se reutilizan si hace referencia a las sesiones en una solicitud de consulta. La solicitud se pone en cola si hace referencia a una sesión explícita que ya está en uso.

1. Crear una sesión
    Envíe una solicitud POST al punto final `/system/<SYSTEM_NAME>/sessions`. La solicitud crea una nueva sesión de base de datos y devuelve los detalles de la sesión como respuesta.

    En el siguiente ejemplo, la solicitud incluye `'auto_commit': True`: la solicitud para confirmar la consulta al finalizar.

    **Solicitud**
    ``` python
    # first create a session
    url = 'https://<QS_HOSTNAME>:1443/systems/<SYSTEM_NAME>/sessions'

    payload = {
      'auto_commit': True
    }

    payload_json = json.dumps(payload)

    response = requests.request('POST', url, headers=headers, data=payload_json, verify=False)

    print(response.text)
    ```

    **Respuesta**
    ```python
    {
      'sessionId': 1366010,
      'system': 'testsystem',
      'user': 'dbc',
      'tdSessionNo': 1626922,
      'createMode': 'EXPLICIT',
      'state': 'LOGGINGON',
      'autoCommit': true
    }
    ```

2. Utilice la sesión creada en el Paso 1 para enviar consultas.
    
    Envíe una solicitud POST al punto final `/system/<SYSTEM_NAME>/queries`.

    La solicitud envía consultas al sistema de destino y devuelve la versión y el número de versión del sistema de destino.

    En el siguiente ejemplo, la solicitud incluye:
      * `SELECT * FROM DBC.DBCInfo`: la consulta al sistema con el alias `<SYSTEM_NAME>`.
      * `'format': 'OBJECT'`: el formato de respuesta.
      * `'Session' : <Session ID>`: el ID de sesión devuelto en el Paso 1 para crear una sesión explícita.

    **Solicitud**

    ``` python
    # use this session to submit queries afterwards

    url = 'https://<QS_HOSTNAME>:1443/systems/<SYSTEM_NAME>/queries'

    payload = {
      'query': 'SELECT * FROM DBC.DBCInfo;',
      'format': 'OBJECT',
      'session': 1366010 # <-- sessionId
    }
    payload_json = json.dumps(payload)

    response = requests.request('POST', url, headers=headers, data=payload_json, verify=False)

    print(response.text)
    ```

    **Respuesta**
    ``` json
    {
      "queueDuration":6,
      "queryDuration":41,
      "results":[
        {
          "resultSet":true,
          "data":[
            {
              "InfoKey":"LANGUAGE SUPPORT MODE",
              "InfoData":"Standard"
            },
            {
              "InfoKey":"RELEASE",
              "InfoData":"15.10.07.02"
            },
            {
              "InfoKey":"VERSION",
              "InfoData":"15.10.07.02"
            }
          ],
          "rowCount":3,
          "rowLimitExceeded":false
        }
      ]
    }
    ```


## Utilizar consultas asincrónicas

Utilice consultas asincrónicas cuando el rendimiento de un sistema o red se vea afectado por la consulta de un gran grupo de datos o consultas de larga duración.

1. Envíe consultas asincrónicas al sistema de destino y recupere un ID de consulta
  Envíe una solicitud POST al punto final `/system/<SYSTEM_NAME>/queries`.
  En el siguiente ejemplo, la solicitud incluye:
    \* `SELECT * FROM DBC.DBCInfo`: la consulta al sistema con el alias `<SYSTEM_NAME>`.
    \* `'format': 'OBJECT'`: el formato de respuesta.
    \* `'spooled_result_set': True`: la indicación de que la solicitud es asincrónica.
  
    **Solicitud**
    ``` python
    ## Run async query .

    url = 'https://<QS_HOSTNAME>:1443/systems/<SYSTEM_NAME>/queries'

    payload = {
      'query': 'SELECT * FROM DBC.DBCInfo;',
      'format': 'OBJECT',
      'spooled_result_set': True
    }

    payload_json = json.dumps(payload)
    response = requests.request('POST', url, headers=headers, data=payload_json, verify=False)

    print(response.text)
    ```

    **Respuesta**
    ```
    {"id":1366025}
    ```

2. Obtenga los detalles de la consulta utilizando el ID recuperado en el Paso 1

    Envíe una solicitud GET al punto final `/system/<SYSTEM_NAME>/queries/<queryID>`, reemplazando `<queryID>` con el ID recuperado en el Paso 1.

    La solicitud devuelve los detalles de la consulta específica, incluidos **`queryState`**, **`queueOrder`**, **`queueDuration`**, etc. Para obtener una lista completa de los campos de respuesta y sus descripciones, consulte la [Guía de instalación, configuración y uso de Query Service](https://docs.teradata.com/r/Teradata-Query-Service-Installation-Configuration-and-Usage-Guide-for-Customers/April-2022/Using-the-Query-Service-APIs/Submitting-SQL-Statement/Request-Body).

    **Solicitud**
    ``` python
    ## response for async query .

    url = 'https://<QS_HOSTNAME>:1443/systems/<SYSTEM_NAME>/queries/1366025'

    payload_json = json.dumps(payload)
    response = requests.request('GET', url, headers=headers, verify=False)

    print(response.text)
    ```

    **Respuesta**
    ```python
    {
      "queryId":1366025,
      "query":"SELECT * FROM DBC.DBCInfo;",
      "batch":false,
      "system":"testsystem",
      "user":"dbc",
      "session":1366015,
      "queryState":"RESULT_SET_READY",
      "queueOrder":0,
      "queueDuration":6,
      "queryDuration":9,
      "statusCode":200,
      "resultSets":{

      },
      "counts":{

      },
      "exceptions":{

      },
      "outParams":{

      }
    }
    ```

3. Ver el conjunto de resultados de la consulta asincrónica

    Envíe una solicitud GET al punto final `/system/<SYSTEM_NAME>/queries/<queryID>/results`, reemplazando `<queryID>` con el ID recuperado en el Paso 1.

    La solicitud devuelve una matriz de los conjuntos de resultados y los recuentos de actualizaciones producidos por la consulta enviada.

    **Solicitud**

    ``` python
    url = 'https://<QS_HOSTNAME>:1443/systems/<SYSTEM_NAME>/queries/1366025/results'

    payload_json = json.dumps(payload)
    response = requests.request('GET', url, headers=headers, verify=False)

    print(response.text)
    ```

    **Respuesta**

    ``` json
    {
      "queueDuration":6,
      "queryDuration":9,
      "results":[
        {
          "resultSet":true,
          "data":[
            {
              "InfoKey":"LANGUAGE SUPPORT MODE",
              "InfoData":"Standard"
            },
            {
              "InfoKey":"RELEASE",
              "InfoData":"15.10.07.02"
            },
            {
              "InfoKey":"VERSION",
              "InfoData":"15.10.07.02"
            }
          ],
          "rowCount":3,
          "rowLimitExceeded":false
        }
      ]
    }
    ```

## Obtener una lista de consultas activas o en cola

Envíe una solicitud GET al punto final `/system/<SYSTEM_NAME>/queries`. La solicitud devuelve los ID de las consultas activas.

**Solicitud**

``` python
url = 'https://<QS_HOSTNAME>:1443/systems/<SYSTEM_NAME>/queries'

payload={}

response = requests.request('GET', url, headers=headers, data=payload, verify=False)

print(response.json())
```

**Respuesta**

``` json
[
  {
    "queryId": 12516087,
    "query": "SELECt * from dbcmgr.AlertRequest;",
    "batch": false,
    "system": "BasicTestSys",
    "user": "dbc",
    "session": 12516011,
    "queryState": "REST_SET_READY",
    "queueOrder": 0,
    "queueDurayion": 3,
    "queryDuration": 3,
    "statusCode": 200,
    "resultSets": {},
    "counts": {},
    "exceptions": {},
    "outparams": {}
  },
  {
    "queryId": 12516088,
    "query": "SELECt * from dbc.DBQLAmpDataTbl;",
    "batch": false,
    "system": "BasicTestSys",
    "user": "dbc",
    "session": 12516011,
    "queryState": "REST_SET_READY",
    "queueOrder": 0,
    "queueDurayion": 3,
    "queryDuration": 3,
    "statusCode": 200,
    "resultSets": {},
    "counts": {},
    "exceptions": {},
    "outparams": {}
  }
]
```


## Recursos

* Características, ejemplos y referencias: [Guía de instalación, configuración y uso de Query Service](https://docs.teradata.com/r/Teradata-Query-Service-Installation-Configuration-and-Usage-Guide-for-Customers/April-2022)
* [Especificación de OpenAPI de la API del servicio de consulta](https://downloads.teradata.com/api/teradata_query_service)

import CommunityLinkPartial from '../_partials/community_link.mdx';

<CommunityLinkPartial />
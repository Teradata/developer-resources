---
sidebar_position: 4
author: Sudha Vedula
email: sudha.vedula@teradata.com
page_last_update: 2023 年 5 月 29 日
description: REST API を使用してクエリーを送信します。Teradata® Query Service は、Vantage に REST API を提供するミドルウェアです。
keywords: [query service, teradata, vantage, query, REST API]
---

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'

# REST APIを使ってVantageにクエリーを送信する方法

## 概要

Teradata Query Service は、クライアント側のドライバを管理せずに標準 SQL ステートメントを実行するために使用できる Vantage 用の REST API です。REST API を介して Analytics データベースをクエリーしてアクセスする場合は、Query Service を使用します。

このハウツーでは、Query Service を使い始めるのに役立つ、一般的な使用例を紹介します。

## 前提条件

始める前に、以下のものが揃っていることを確認してください。
\* クエリー サービスがプロビジョニングされている VantageCloud システム、またはクエリー サービスが有効な接続を備えた VantageCore へのアクセス。管理者であり、クエリー サービスをインストールする必要がある場合は、 [クエリー サービスのインストール、構成、および使用ガイド](https://docs.teradata.com/r/Teradata-Query-Service-Installation-Configuration-and-Usage-Guide-for-Customers/April-2022)を参照してください。

  <ClearscapeDocsNote />

\* クエリーサービスのホスト名とシステム名
* データベースに接続するための認証情報

前提条件に問題がありますか? セットアップ情報については Teradata にお問い合わせください。

## Query Service API の例

例題を使用する際は、以下の点に注記してください。

* このドキュメントではPythonを使用していますが、これを利用してお好きな言語でサンプルを作成することができます。
* ここで提供されるサンプルは完全なものであり、すぐに使用できますが、ほとんどの場合、多少のカスタマイズが必要です。
  * このドキュメントの例では、URL `https://<QS_HOSTNAME>:1443/` を使用しています。
  * 以下の変数を独自の値に置き換えます。
    * `<QS_HOSTNAME>`: Query Service がインストールされているサーバー
    * `<SYSTEM_NAME>`: システムの事前設定されたエイリアス

:::note
VantageインスタンスがClearScape Analytics Experienceを通じて提供される場合、`<QS_HOSTNAME>`はClearScape Analytics ExperienceのホストURLであり、`<SYSTEM_NAME>`は「ローカル」です。
:::


## Query Service インスタンスへの接続

HTTP Basic 認証または JWT 認証を使用してターゲット Analytics データベースにアクセスするための有効な認証情報を提供します。

### HTTP 基本認証

データベースのユーザー名とパスワードは文字列 (`"username : password"`) に結合され、Base64 を使用してエンコードされます。API 応答には、認証方法とエンコードされた資格情報が含まれます。

**リクエスト**

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

**応答**
```python
Basic ZGJjOmRiYw==
{
  'Content-Type': 'application/json',
  'Authorization': 'Basic ZGJjOmRiYw=='
}
```

### JWT認証

前提条件:

* ユーザーはデータベースにすでに存在している必要があります。
* データベースはJWT対応である必要があります。

**リクエスト**

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

**応答**

```python
{'Content-Type': 'application/json', 'Authorization': 'Bearer <YOUR_JWT_HERE>'}
```

## 基本的なオプションで簡単なAPIリクエストを行う

以下の例では、リクエストの内容は以下の通りです。

* `SELECT * FROM DBC.DBCInfo`: エイリアス `<SYSTEM_NAME>` を持つシステムへのクエリー。
* `'format': 'OBJECT'`: 応答の形式。サポートされている形式は、JSON オブジェクト、JSON 配列、および CSV です。

    :::note
    JSONオブジェクト フォーマットでは、列名がフィールド名、列値がフィールド値である行ごとに1つのJSONオブジェクトが作成されます。
    :::

* `'includeColumns': true`: 列名や型などの列メタデータをレスポンスに含めるかどうかのリクエスト。
* `'rowLimit': 4`: クエリーから返される行の数。

**リクエスト**

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

**応答**

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

応答パラメータについては [クエリー サービスのインストール、構成、および使用ガイド](https://docs.teradata.com/r/Teradata-Query-Service-Installation-Configuration-and-Usage-Guide-for-Customers/April-2022/Using-the-Query-Service-APIs/Submitting-SQL-Statement/Request-Body)を参照してください。


### CSV形式での応答リクエスト

APIレスポンスをCSV形式で返すには、リクエストの `*format*` フィールドに `*CSV*` という値を設定します。

CSV 形式にはクエリー結果のみが含まれ、応答メタデータは含まれません。応答には各行の行が含まれ、各行にはコンマで区切られた行の列が含まれます。次の例では、データをコンマ区切りの値として返します。

**リクエスト**

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

**応答**

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

## 明示的なセッションを使用してクエリーを送信する

トランザクションが複数のリクエストにまたがる必要がある場合、または揮発性テーブルを使用する場合は、明示的なセッションを使用します。これらのセッションは、クエリー リクエストでセッションを参照する場合にのみ再利用されます。リクエストが既に使用されている明示的なセッションを参照する場合、リクエストはキューに入れられます。

1. セッションを作成する
     `/system/<SYSTEM_NAME>/sessions` エンドポイントに POST リクエストを送信します。このリクエストにより新しいデータベース セッションが作成され、セッションの詳細が応答として返されます。

     以下の例では、リクエストに`'auto_commit': True`  - 完了時にクエリーをコミットするリクエストが含まれています。

    **リクエスト**
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

    **応答**
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

2. ステップ1で作成したセッションを使用してクエリーを送信します
    
    `/system/<SYSTEM_NAME>/queries` エンドポイントにPOSTリクエストを送信します。

    リクエストでは、対象システムに対してクエリーを送信し、対象システムのリリース番号とバージョン番号を返します。

    以下の例では、リクエストには以下のものが含まれます。
      * `SELECT * FROM DBC.DBCInfo`: エイリアス `<SYSTEM_NAME>` を持つシステムへのクエリー。
      * `'format': 'OBJECT'`: 応答の形式。
      * `'Session' : <Session ID>`: 明示的なセッションを作成するために手順 1 で返されたセッション ID。

    **リクエスト**

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

    **応答**
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


## 非同期クエリーを使用する

非同期クエリーは、大量のデータや長時間実行するクエリーによってシステムやネットワークのパフォーマンスに影響を与える場合に使用します。

1. ターゲットシステムに非同期クエリーを送信し、クエリーIDを取得します。
  `/system/<SYSTEM_NAME>/queries` エンドポイントにPOSTリクエストを送信します。
  以下の例では、リクエストには以下のものが含まれます。
    \* `SELECT * FROM DBC.DBCInfo`: エイリアス `<SYSTEM_NAME>` を持つシステムへのクエリー。
    \* `'format': 'OBJECT'`: 応答の形式。
    \* `'spooled_result_set': True`: リクエストが非同期であることを示します。
  
    **Request**
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

    **Response**
    ```
    {"id":1366025}
    ```

2. ステップ1で取得したIDを使用してクエリーの詳細を取得します。

     `/system/<SYSTEM_NAME>/queries/<queryID>` エンドポイントに GET リクエストを送信し、 `<queryID>` をステップ 1 で取得した ID に置き換えます。

    リクエストは、 **`queryState`**、 **`queueOrder`**、 **`queueDuration`**などを含む特定のクエリーの詳細を返します。応答フィールドとその説明の完全なリストについては、 [クエリー サービスのインストール、構成、および使用ガイド](https://docs.teradata.com/r/Teradata-Query-Service-Installation-Configuration-and-Usage-Guide-for-Customers/April-2022/Using-the-Query-Service-APIs/Submitting-SQL-Statement/Request-Body)を参照してください。

    **リクエスト**
    ``` python
    ## response for async query .

    url = 'https://<QS_HOSTNAME>:1443/systems/<SYSTEM_NAME>/queries/1366025'

    payload_json = json.dumps(payload)
    response = requests.request('GET', url, headers=headers, verify=False)

    print(response.text)
    ```

    **応答**
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

3. 非同期クエリーの結果セットを表示する

     `/system/<SYSTEM_NAME>/queries/<queryID>/results` エンドポイントに GET リクエストを送信し、 `<queryID>` をステップ 1 で取得した ID に置き換えます。

    リクエストは、送信されたクエリーによって生成された結果セットと更新カウントの配列を返します。

    **リクエスト**

    ``` python
    url = 'https://<QS_HOSTNAME>:1443/systems/<SYSTEM_NAME>/queries/1366025/results'

    payload_json = json.dumps(payload)
    response = requests.request('GET', url, headers=headers, verify=False)

    print(response.text)
    ```

    **応答**

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

## アクティブまたはキューイングされたクエリーのリストを取得する

 `/system/<SYSTEM_NAME>/queries` エンドポイントに GET リクエストを送信します。このリクエストはアクティブなクエリーの ID を返します。

**リクエスト**

``` python
url = 'https://<QS_HOSTNAME>:1443/systems/<SYSTEM_NAME>/queries'

payload={}

response = requests.request('GET', url, headers=headers, data=payload, verify=False)

print(response.json())
```

**応答**

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


## リソース

* 機能、例、参考資料: [クエリー サービスのインストール、構成、および使用ガイド](https://docs.teradata.com/r/Teradata-Query-Service-Installation-Configuration-and-Usage-Guide-for-Customers/April-2022)
* [Query Service API OpenAPI 仕様](https://downloads.teradata.com/api/teradata_query_service)

import CommunityLinkPartial from '../_partials/community_link.mdx';

<CommunityLinkPartial />
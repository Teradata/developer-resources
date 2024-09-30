---
sidebar_position: 2
id: teradatasql
author: Krutik Pathak
email: krutik.pathak@teradata.com
page_last_update: 2 de agosto de 2023
description: Cómo conectarse a Teradata Vantage mediante el controlador de base de datos Python teradatasql
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, teradatasql, python applications, business intelligence, enterprise analytics]
---

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'
import CommunityLink from '../_partials/community_link.mdx'

# Conectarse a Vantage mediante Python

## Información general

Este tutorial demuestra cómo conectarse a Vantage usando el controlador de base de datos Python [teradatasql](https://github.com/Teradata/python-driver) para Teradata Vantage.

## Prerrequisitos

* Python 3.4 de 64 bits o posterior.

* Controlador `teradatasql` instalado en su sistema:
```
pip install teradatasql
```

:::note
El paquete `teradatasql` se ejecuta en Windows, macOS (10.14 Mojave o posterior) y Linux. Para Linux, actualmente solo se admite la arquitectura Linux x86-64.  
:::

* Acceso a una instancia de Teradata Vantage. Actualmente, el controlador es compatible con Teradata Database 16.10 y versiones posteriores.

<ClearscapeDocsNote />

## Código para enviar una consulta

Este es un código Python simple para conectarse a Teradata Vantage usando `teradatasql`. Todo lo que queda es pasar los parámetros de conexión y autenticación y ejecutar una consulta:

```python
import teradatasql

DB_URL = ""                                 #Add Host
USER = ""                                   #Add Username
PASS = ""                                   #Add Password

try:
    # Establish a connection to the Teradata database
    with teradatasql.connect(host=DB_URL, user=USER, password=PASS) as con:
        # Create a cursor to execute queries
        with con.cursor() as cur:
            try:
                # Creating the table SampleEmployee
                cur.execute (f"CREATE SET TABLE {USER}.SampleEmployee \
                            (Associate_Id     INTEGER, \
                            Associate_Name   CHAR(25), \
                            Job_Title        VARCHAR(25)) \
                            UNIQUE PRIMARY INDEX (Associate_Id);")
                
                print(f"Sample table {USER}.SampleEmployee created.")

                # Adding sample data into SampleEmployee table
                cur.execute (f"INSERT INTO {USER}.SampleEmployee VALUES (1, 'Richard Hendricks','CEO')")
                cur.execute (f"INSERT INTO {USER}.SampleEmployee VALUES (2, 'Jared Dunn','CFO')")
                cur.execute (f"INSERT INTO {USER}.SampleEmployee VALUES (3, 'Jian Yang','Intern')")

                print(f"Sample data added to table {USER}.SampleEmployee.")

                # Execute the SELECT query to get the results from SampleEmployee table 
                cur.execute(f"SELECT * FROM {USER}.SampleEmployee")

                # Extract data from the result set and print it
                for row in cur:
                    print(f"Associate ID: {row[0]}, Associate_Name: {row[1]}, Job_Title:{row[2]}")

                

            except teradatasql.DatabaseError as db_err:
                # Handle any errors that occur during query execution
                print("Error while executing the query:", db_err)

except teradatasql.DatabaseError as db_err:
    # Handle any errors that occur during the database connection
    print("Error while connecting to the Teradata database:", db_err)
```

## Resumen

Este tutorial demostró cómo conectarse a Teradata Vantage utilizando el controlador de base de datos Python `teradatasql`. Describía un código Python de muestra para enviar consultas SQL a Teradata Vantage usando `teradatasql`.

## Lectura adicional
* [Referencia del controlador de Python teradatasql](https://github.com/Teradata/python-driver)

<CommunityLink />

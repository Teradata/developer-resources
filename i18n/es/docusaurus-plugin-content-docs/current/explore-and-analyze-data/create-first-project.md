---
id: create-first-project
title: Cree su primer proyecto
description: Ejecute un flujo de trabajo simple desde un cuaderno Jupyter.
sidebar_label: Cree su primer proyecto
sidebar_position: 2
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Cree su primer proyecto

Un proyecto es un medio para explorar y analizar datos de un cuaderno Jupyter. 

:::note
Cada proyecto tiene un repositorio Git. [Descubra por qué](../glossary.md#project-repository).
:::

Para su primer proyecto, utilizando los datos que le proporcionamos, completará este sencillo flujo de trabajo:

- Crear el proyecto
- Implementar el motor
- Conectarse a los datos y ejecutar una carga de trabajo
- Suspender el motor


## Antes de empezar

- El administrador de AI Unlimited es la persona de su organización que configuró AI Unlimited. Obtenga estos elementos de su administrador:

  - La dirección IP o el nombre de host del [Administrador de AI Unlimited](../glossary.md#ai-unlimited-manager).

  - Estas variables de entorno:   
    <Tabs>
    <TabItem value="aws" label="AWS" default>
    `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY` y `AWS_SESSION_TOKEN`

    </TabItem>
    <TabItem value="azure" label="Azure">
    `ARM_SUBSCRIPTION_ID`, `ARM_CLIENT_ID` y `ARM_CLIENT_SECRET`

    </TabItem>
    </Tabs> 

- Desde su perfil, [obtenga su clave API](./get-api-key.md).

- Para ejecutar la carga de trabajo de muestra, necesitará el archivo `salescenter.csv`. Descargue el archivo desde [Repositorio de GitHub de AI Unlimited](https://github.com/Teradata/ai-unlimited/tree/develop/examples/GetStarted/data) y cárguelo en su ubicación de Amazon Simple Storage Service (S3) o Azure Blob Storage. O bien, si está usando su propio archivo, modifique el ejemplo según corresponda.


## Conécse y ejecute su primera carga de trabajo

:::tip
Ejecute `%help` para obtener detalles sobre todos los comandos mágicos disponibles en su cuaderno. Ejecute `%help <command>` para obtener detalles sobre uno de ellos. 

O infórmese sobre los [comandos mágicos](./magic-commands.md) específicos de AI Unlimited. 
:::

1. Conéctese a JupyterLab, abra un cuaderno y seleccione el kernel de AI Unlimited.

2. Conéctese con el administrador.
    ```bash
    %workspaces_config host=<ip_or_hostname>, apikey=<API_Key>, withtls=T 	
    ```

3. Cree el proyecto.
    ```bash
    %project_create project=<Project_Name>, env=<Cloud_Service_Provider>
    ```

4. Cree una autorización de almacén de objetos para almacenar las credenciales del proveedor de servicios en la nube. 

    Reemplace `ACCESS_KEY_ID`, `SECRET_ACCESS_KEY` y `REGION` con sus valores.

    ```bash
    %project_auth_create name=<Authorization_Name>, project=<Project_Name>, key=<ACCESS_KEY_ID>, secret=<SECRET_ACCESS_KEY>, region=<REGION>
    ```

5. Implemente el motor.

    El tamaño puede ser pequeño, mediano, grande o extragrande. El tamaño predeterminado es pequeño. Consulte la información de precios de [AWS](http://aws.amazon.com/marketplace/pp/prodview-2srvuo3mwqlig) o [Azure](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/teradata.ai-unlimited?tab=Overview).
    ```bash
    %project_engine_deploy name=<Project_Name>, size=<Size_of_Engine>
    ```
    El proceso de implementación tarda unos minutos y genera una contraseña.

6. Conéctese al proyecto.
    ```bash
    %connect <Project_Name>
    ```
    Cuando se realice la conexión, proporcione la contraseña generada.

7. Ejecute la carga de trabajo de muestra.

    :::note
    Asegúrese de que no haya tablas denominadas SalesCenter o SalesDemo en la base de datos seleccionada. Reemplace los valores `Authorization_Name` y `salescenter.csv_file_location` en el siguiente ejemplo con sus propios valores.
    ::::

    a. Cree una tabla para almacenar los datos del centro de ventas. 
    ```sql
    DROP FOREIGN TABLE SalesCenter;

    CREATE MULTISET FOREIGN TABLE SalesCenter ,
    EXTERNAL SECURITY DEFINER TRUSTED <Authorization_Name>
    (
        Sales_Center_id INTEGER NOT NULL,
        Sales_Center_Name VARCHAR(255) CHARACTER SET LATIN NOT CASESPECIFIC
    )
    USING
    (
        LOCATION ('<salescenter.csv_file_location>')
        MANIFEST ('FALSE')
        ROWFORMAT  ('{"field_delimiter":",","record_delimiter":"\n","character_set":"LATIN"}')
        STOREDAS ('TEXTFILE')
        HEADER ('TRUE')
        STRIP_EXTERIOR_SPACES ('FALSE')
        STRIP_ENCLOSING_CHAR ('NONE')
    )
    NO PRIMARY INDEX;

    ```
     b. Verifique que se hayan insertado los datos.
    ```sql
    SELECT * FROM SalesCenter ORDER BY 1
    ```
    c. Cree una tabla con los datos de demostración de ventas.
    ```sql
    DROP FOREIGN TABLE SalesDemo;
    CREATE MULTISET FOREIGN TABLE SalesDemo ,
    EXTERNAL SECURITY DEFINER TRUSTED <Authorization_Name>
    (
        Sales_Center_ID INTEGER NOT NULL,
        UNITS DECIMAL(15,4),
        SALES DECIMAL(15,2),
        "COST" DECIMAL(15,2)
    )
   USING
   (
       LOCATION ('<salescenter.csv_file_location>')
       MANIFEST ('FALSE')
       ROWFORMAT  ('{"field_delimiter":",","record_delimiter":"\n","character_set":"LATIN"}')
       STOREDAS ('TEXTFILE')
       HEADER ('FALSE')
       STRIP_EXTERIOR_SPACES ('FALSE')
       STRIP_ENCLOSING_CHAR ('"')
   )
   NO PRIMARY INDEX;
    ```
    d. Verifique que los datos de demostración de ventas se hayan insertado correctamente.

    ```sql
    SELECT * FROM SalesDemo ORDER BY sales
    ```
    Abra el Navegador de su conexión y verifique que se crearon las tablas. Realice un recuento de filas en las tablas para verificar que se cargaron los datos.

    e. Cree un gráfico con los datos para visualizar el resultado.

    Proporcione los ejes X e Y para su gráfico.

    ```bash
    %chart sales_center_name, sales, title=Sales Data
    ```
    f. Elimine las tablas.
    ```sql
    DROP TABLE SalesCenter;
    DROP TABLE SalesDemo;
    ```

8. Realice una copia de seguridad de los metadatos de su proyecto y de las definiciones de objetos (el esquema) en su repositorio Git.
	```bash
	%project_backup project=<Project_Name>
	```
   Esto crea una copia de seguridad de su proyecto, pero no suspende el motor.
   
9. Suspenda el motor para evitar pagar por recursos del motor innecesarios.
    ```bash
    %project_engine_suspend project=<Project_Name>
    ```
   Esto crea una copia de seguridad de su proyecto y suspende el motor. Normalmente no utilizará `%project_backup` seguidos inmediatamente de `%project_engine_suspend`.

¡Felicitaciones! Ha ejecutado su primera carga de trabajo.
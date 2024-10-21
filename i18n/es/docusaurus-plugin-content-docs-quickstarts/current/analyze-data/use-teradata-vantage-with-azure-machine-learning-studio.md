---
sidebar_position: 10
author: Rupal Shah
email: rupal.shah@teradata.com
page_last_update: 14 de febrero de 2022
description: Utilizar Teradata Vantage con Azure Machine Learning Studio.
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, data cloud, machine learning, azure, azure machine learning studio]
---

# Utilizar Teradata Vantage con Azure Machine Learning Studio

## Información general

[Azure Machine Learning (ML) Studio](https://docs.microsoft.com/en-us/azure/machine-learning/studio/what-is-ml-studio) es una herramienta colaborativa de tipo arrastrar y soltar que puede usar para crear, probar e implementar soluciones de analíticas predictivas en sus datos. ML Studio puede consumir datos de Azure Blob Storage. Esta guía de introducción le mostrará cómo copiar conjuntos de datos de Teradata Vantage a un Blob Storage utilizando la función Jupter Notebook "integrada" de ML Studio. Luego, ML Studio puede utilizar los datos para crear y entrenar modelos de aprendizaje automático e implementarlos en un entorno de producción.


![](../cloud-guides/images/use-teradata-vantage-with-azure-machine-learning-studio/image2.png)


## Prerrequisitos

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'

* Acceso a una instancia de Teradata Vantage.
  <ClearscapeDocsNote />
* Suscripción a Azure o crear una [cuenta gratuita](https://azure.microsoft.com/free)
* [Espacio de trabajo de Azure ML Studio](https://docs.microsoft.com/en-us/azure/machine-learning/studio/create-workspace)
* (Opcional) Descargar una [base de datos de AdventureWorks DW 2016](https://docs.microsoft.com/en-us/sql/samples/adventureworks-install-configure?view=sql-server-2017) (es decir, la sección _'Entrenar el modelo'_)
  * Restaurar y copiar la tabla _'vTargetMail'_ de SQL Server a Teradata Vantage


## Procedimiento

### Configuración inicial


* Durante la creación del espacio de trabajo de ML Studio, es posible que deba crear una "nueva" cuenta de almacenamiento a menos que tenga una en las ubicaciones de disponibilidad actual y elija **DEVTEST Standard** para **Plan de servicios web** para esta guía de introducción. Inicie sesión en [Azure Portal](https://portal.azure.com), abra su cuenta de almacenamiento y cree un **contenedor** si aún no existe una.
![](../cloud-guides/images/use-teradata-vantage-with-azure-machine-learning-studio/image3.png)

* Copie su **nombre de la cuenta de almacenamiento** y **Key** en el bloc de notas que usaremos para que Python3 Notebook acceda a su cuenta de Azure Blob Storage.
![](../cloud-guides/images/use-teradata-vantage-with-azure-machine-learning-studio/image4.png)

* Finalmente, abra la propiedad **Configuration** y establezca **_'Se requiere transferencia segura'_** en **_Deshabilitado_** para permitir que el módulo de importación de datos de ML Studio acceda a la cuenta de Blob Storage.
![](../cloud-guides/images/use-teradata-vantage-with-azure-machine-learning-studio/image5.png)

### Cargar datos

Para llevar los datos a ML Studio, primero debemos cargar los datos de Teradata Vantage en Azure Blob Storage. Crearemos un ML Jupyter Notebook, instalaremos paquetes de Python para conectarnos a Teradata y guardaremos datos en Azure Blob Storage.

Inicie sesión en [Azure Portal](https://portal.azure.com), vaya a **espacio de trabajo de ML Studio** y [Azure Machine Learning Studio](https://studio.azureml.net) y **inicie sesión.**

1. Debería ver la siguiente pantalla y hacer clic en **Cuadernos**, asegúrese de estar en la región/espacio de trabajo correcto y haga clic en Notebook **Nuevo**
![](../cloud-guides/images/use-teradata-vantage-with-azure-machine-learning-studio/image6.png)

2. Elija *Python3* y **Nombre** a su instancia de cuaderno
![](../cloud-guides/images/use-teradata-vantage-with-azure-machine-learning-studio/image7.png)

3. En su instancia de Jupyter Notebook, instale [Paquete Python de Teradata Vantage para analíticas avanzadas](https://pypi.org/project/teradataml):

    ``` python
    pip install teradataml
    ```

    :::note
    No existe validación entre Microsoft Azure ML Studio y el paquete Teradata Vantage Python.
    :::

4. Instalar [Microsoft Azure Storage Blob Client Library for Python](https://pypi.org/project/azure-storage-blob):

    ``` python
    !pip install azure-storage-blob
    ```

5. Importe las siguientes bibliotecas:

    ``` python
    import teradataml as tdml
    from teradataml import create_context, get_context, remove_context
    from teradataml.dataframe.dataframe import DataFrame
    import pandas as pd
    from azure.storage.blob import (BlockBlobService)
    ```

6. Conéctese a Teradata usando el comando:

    ``` python
    create_context(host = '<hostname>', username = '<database user name>', password = '<password>')
    ```

7. Recupere los datos utilizando el módulo Teradata Python DataFrame:

    ``` python
    train_data = DataFrame.from_table("<table_name>")
    ```

8. Convierta Teradata DataFrame a Panda DataFrame:

    ``` python
    trainDF = train_data.to_pandas()
    ```

9. Convierta los datos a CSV:

    ``` python
    trainDF = trainDF.to_csv(head=True,index=False)
    ```

10. Asigne variables para el nombre de la cuenta, la clave y el nombre del contenedor de Azure Blob Storage:

    ``` python
    accountName="<account_name>"
    accountKey="<account_key>"
    containerName="mldata"
    ```

11. Cargue el archivo en Azure Blob Storage:

    ``` python , id="azure_ml_studio_first_config", role="content-editable emits-gtm-events
    blobService = BlockBlobService(account_name=accountName, account_key=accountKey)
    blobService.create_blob_from_text(containerNAme, 'vTargetMail.csv', trainDF)
    ```

12. Inicie sesión en Azure Portal, abra la cuenta de Blob Storage para ver el archivo cargado:
![](../cloud-guides/images/use-teradata-vantage-with-azure-machine-learning-studio/image17.png)

### Entrenar el modelo

Usaremos el artículo [Analizar datos con Azure Machine Learning](https://docs.microsoft.com/en-us/azure/sql-data-warehouse/sql-data-warehouse-get-started-analyze-with-azure-machine-learning) existente para crear un modelo de aprendizaje automático predictivo basado en datos de Azure Blob Storage. Crearemos una campaña de marketing dirigida para Adventure Works, la tienda de bicicletas, prediciendo si es probable que un cliente compre una bicicleta o no.

### Importar datos

Los datos están en el archivo de Azure Blob Storage llamado `vTargetMail.csv` que copiamos en la sección anterior.

1. Inicie sesión en [Azure Machine Learning studio](https://studio.azureml.net) y haga clic en **Experimentos**.
2. Haga clic en **+NEW** en la parte inferior izquierda de la pantalla y seleccione **Experimento en blanco**.
3. Introduzca un nombre para su experimento: Marketing dirigido.
4. Arrastre el módulo **Importar datos** debajo de **Entrada y salida de datos** desde el panel de módulos al lienzo.
5. Especifique los detalles de su Azure Blob Storage (nombre de cuenta, clave y nombre de contenedor) en el panel Propiedades.

Ejecute el experimento haciendo clic en *Ejecutar* debajo del lienzo del experimento.

![](../cloud-guides/images/use-teradata-vantage-with-azure-machine-learning-studio/image18.png)

Una vez que el experimento termine de ejecutarse exitosamente, haga clic en el puerto de salida en la parte inferior del módulo Importar datos y seleccione *Visualizar* para ver los datos importados.

![](../cloud-guides/images/use-teradata-vantage-with-azure-machine-learning-studio/image19.png)


### Limpiar los datos

Para limpiar los datos, elimine algunas columnas que no sean relevantes para el modelo. Para ello:

1. Arrastre el módulo *Seleccionar columnas en el conjunto de datos* que se encuentra debajo de *Transformación de datos < Manipulación* al lienzo. Conecte este módulo al módulo *Importar datos*.
2. Haga clic en *Selector de columnas de inicio* en el panel Propiedades para especificar qué columnas quiere eliminar.
![](../cloud-guides/images/use-teradata-vantage-with-azure-machine-learning-studio/image20.png)
3. Excluya dos columnas: *CustomerAlternateKey* y *GeographyKey*.
![](../cloud-guides/images/use-teradata-vantage-with-azure-machine-learning-studio/image21.png)

### Construir el modelo

Dividiremos los datos 80-20: 80 % para entrenar un modelo de aprendizaje automático y 20 % para probar el modelo. Usaremos los algoritmos de "dos clases" para este problema de clasificación binaria.

1. Arrastre el módulo **Dividir datos** hasta el lienzo y conéctelo con 'Seleccionar columnas en el conjunto de datos'.
2. En el panel de propiedades, introduzca 0,8 para Fracción de filas en el primer conjunto de datos de salida.
![](../cloud-guides/images/use-teradata-vantage-with-azure-machine-learning-studio/image22.png)

3. Busque y arrastre el módulo **Árbol de decisión potenciado con dos clases** hasta el lienzo.
4. Busque y arrastre el módulo **Entrenar modelo** hasta el lienzo y especifique las entradas conectándolo a los módulos **Árbol de decisión potenciado con dos clases** (algoritmo ML) y **Dividir** **datos** (datos para entrenar el algoritmo).
![](../cloud-guides/images/use-teradata-vantage-with-azure-machine-learning-studio/image23.png)

5. Posteriormente, haga clic en *Selector de columnas de inicio* en el panel Propiedades. Seleccione la columna *BikeBuyer* como columna para predecir.
![](../cloud-guides/images/use-teradata-vantage-with-azure-machine-learning-studio/image24.png)

### Puntuar el modelo

Ahora, probaremos cómo se desempeña el modelo con los datos de prueba. Compararemos el algoritmo de nuestra elección con un algoritmo diferente para ver cuál funciona mejor.

1. Arrastre el módulo **Puntuar modelo** hasta el lienzo y conéctelo a los módulos **Entrenar modelo** y **Dividir datos**.

![](../cloud-guides/images/use-teradata-vantage-with-azure-machine-learning-studio/image25.png)

2. Busque y arrastre **Máquina de punto Bayes de dos clases** hasta el lienzo del experimento. Compararemos el rendimiento de este algoritmo en comparación con el árbol de decisión potenciado de dos clases.
3. Copie y pegue los módulos Train Model y Score Model en el lienzo.
4. Busque y arrastre el módulo **Evaluar modelo** hasta el lienzo para comparar los dos algoritmos.
5. **Ejecutar** el experimento.
![](../cloud-guides/images/use-teradata-vantage-with-azure-machine-learning-studio/image26.png)
6. Haga clic en el puerto de salida en la parte inferior del módulo Evaluate Model y haga clic en Visualizar.
![](../cloud-guides/images/use-teradata-vantage-with-azure-machine-learning-studio/image27.png)


Las métricas proporcionadas son la curva ROC, el diagrama de recuperación de precisión y la curva de elevación. Al observar estas métricas, podemos ver que el primer modelo funcionó mejor que el segundo. Para ver lo que predijo el primer modelo, haga clic en el puerto de salida del Score Model y haga clic en Visualizar.

![](../cloud-guides/images/use-teradata-vantage-with-azure-machine-learning-studio/image28.png)

Verá dos columnas más agregadas a su conjunto de datos de prueba.
1. Score Probabilities: la probabilidad de que un cliente sea un comprador de bicicletas.
2. Scored Labels: la clasificación realizada por el modelo - comprador de bicicleta (1) o no (0). Este umbral de probabilidad de etiquetado se establece en 50 % y se puede ajustar.

Comparando la columna BikeBuyer (real) con Scored Labels (predicción), puede ver lo bien que se ha desempeñado el modelo. Como siguientes pasos, puede utilizar este modelo para hacer predicciones para nuevos clientes y publicar este modelo como un servicio web o escribir los resultados en SQL Data Warehouse.

## Lectura adicional

* Para obtener más información sobre la creación de modelos predictivos de aprendizaje automático, consulte [Introducción al aprendizaje automático en Azure](https://azure.microsoft.com/documentation/articles/machine-learning-what-is-machine-learning).
* Para copias de conjuntos de datos grandes, considere la posibilidad de usar el [Módulo de acceso de Teradata para Azure](https://docs.teradata.com/reader/p~0sSD4zl4K8YPbEGnM3Rg/TTu_WJMMIpo2TEaxFMFopQ) que interactúa entre los operadores de carga/descarga de Teradata Parallel Transporter y Azure Blob Storage.

import CommunityLinkPartial from '../_partials/community_link.mdx';

<CommunityLinkPartial />

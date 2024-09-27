---
sidebar_position: 7
author: Pablo Escobar de la Oliva
email: pablo.escobardelaoliva@teradata.com
page_last_update: 29 de mayo de 2022
description: Tutorial para implementar y supervisar un modelo Python en Vantage usando ModelOps y el repositorio Git
keywords: [modelops, python, git, clearscape analytics, teradata, data warehouses, teradata, vantage, cloud data platform, machine learning, artificial intelligence, business intelligence, enterprise analytics]
---
import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'
import ModelOpsBasic from '../_partials/modelops-basic.mdx'

# ModelOps: importar e implemente su primer modelo GIT

## Información general

Este es un tutorial para personas no familiarizadas con ClearScape Analytics ModelOps. En el tutorial, podrá crear un nuevo proyecto en ModelOps, cargar los datos necesarios en Vantage y realizar un seguimiento del ciclo de vida completo de un modelo de demostración utilizando plantillas de código y siguiendo la metodología para modelos GIT en ModelOps.

## Prerrequisitos

* Acceso a una instancia de Teradata Vantage con ClearScape Analytics (incluye ModelOps)

* Capacidad para ejecutar Jupyter Notebooks

<ClearscapeDocsNote />

Archivos necesarios

Comencemos descargando los archivos necesarios para este tutorial. Descargue estos 4 archivos adjuntos y cárguelos en el sistema de archivos de su Notebook. Seleccione los archivos según su versión de ModelOps:

ModelOps versión 6 (octubre de 2022):

[Descargar el cuaderno de formación de ModelOps](../modelops/attachments/ModelOps_Training_v6.ipynb)

[Descargar el archivo de cuaderno BYOM para un caso de uso de demostración](../modelops/attachments/BYOM_v6.ipynb)

[Descargar archivos de datos para un caso de uso de demostración](../modelops/attachments/ModelOps_Data_files_v6.zip)

[Descargar archivos de código BYOM para un caso de uso de demostración](../modelops/attachments/ModelOps_BYOM_files_v6.zip)

Alternativamente, puede clonar con git los siguientes repositorios
``` bash
git clone https://github.com/willfleury/modelops-getting-started
git clone https://github.com/Teradata/modelops-demo-models/
```

ModelOps versión 7 (abril de 2023):

[Descargar el cuaderno de formación de ModelOps](../modelops/attachments/ModelOps_Training_v7.ipynb)

[Descargar el archivo de cuaderno BYOM para un caso de uso de demostración](../modelops/attachments/BYOM_v7.ipynb)

[Descargar archivos de datos para un caso de uso de demostración](../modelops/attachments/ModelOps_Data_files_v7.zip)

[Descargar archivos de código BYOM para un caso de uso de demostración](../modelops/attachments/ModelOps_BYOM_files_v7.zip)

``` bash
git clone -b v7 https://github.com/willfleury/modelops-getting-started.git
git clone https://github.com/Teradata/modelops-demo-models/
```

Configurar la base de datos y el entorno Jupyter 

Siga el Jupyter Notebook ModelOps_Training para configurar la base de datos, las tablas y las bibliotecas necesarias para la demostración.

## Entender dónde estamos en la metodología

![Captura de pantalla de GIT de la metodología ModelOps](../modelops/images/modelops-git.png)


<ModelOpsBasic />

## Preparar plantillas de código

Para los modelos Git, debemos completar las plantillas de código disponibles al agregar un nuevo modelo. 

Estos scripts de código se almacenarán en el repositorio de git en: model_definitions/your-model/model_modules/

* __init__.py: este es un archivo vacío requerido para los módulos de Python

* training.py: este script contiene la función de entrenamiento

``` python
def train(context: ModelContext, **kwargs):
    aoa_create_context()

    # your training code

    # save your model
    joblib.dump(model, f"{context.artifact_output_path}/model.joblib")

    record_training_stats(...)
```

Revise el cuaderno Operationalize para ver cómo puede ejecutar esto desde la CLI o desde el cuaderno como alternativa a la interfaz de usuario de ModelOps.	

* evaluation.py: este script contiene la función de evaluación

``` python
def evaluate(context: ModelContext, **kwargs):
    aoa_create_context()

    # read your model
    model = joblib.load(f"{context.artifact_input_path}/model.joblib")

    # your evaluation logic

    record_evaluation_stats(...)
```

Revise el cuaderno Operationalize para ver cómo puede ejecutar esto desde la CLI o desde el cuaderno como alternativa a la interfaz de usuario de ModelOps.	

* scoring.py: este script contiene la función de puntuación

``` python
def score(context: ModelContext, **kwargs):
    aoa_create_context()

    # read your model
    model = joblib.load(f"{context.artifact_input_path}/model.joblib")

    # your evaluation logic

    record_scoring_stats(...)
```

Revise el cuaderno Operationalize para ver cómo puede ejecutar esto desde la CLI o desde el cuaderno como alternativa a la interfaz de usuario de ModelOps.	

* requirements.txt: este archivo contiene los nombres de biblioteca y las versiones necesarias para sus scripts de código. Ejemplo:

``` python
%%writefile ../model_modules/requirements.txt
xgboost==0.90
scikit-learn==0.24.2
shap==0.36.0
matplotlib==3.3.1
teradataml==17.0.0.4
nyoka==4.3.0
aoa==6.0.0
```

* config.json: este archivo ubicado en la carpeta principal (carpeta de su modelo) contiene hiperparámetros predeterminados

``` python
%%writefile ../config.json
{
   "hyperParameters": {
      "eta": 0.2,
      "max_depth": 6
   }
}
```

Vaya y revise los scripts de código para el modelo de demostración en el repositorio: https://github.com/Teradata/modelops-demo-models/

Vaya a model_definitions->python-diabetes->model_modules

## Modelo de ciclo de vida para un nuevo GIT

* Abra Proyecto para ver los modelos disponibles en GIT

* Entrenar una nueva versión del modelo

* vea cómo se rastrea el CommitID del repositorio de código

* Evaluar

* Revisar el informe de evaluación, incluidas las estadísticas del conjunto de datos y las métricas del modelo

* Comparar con otras versiones de modelo

* Aprobar

* Implementar en Vantage: motor, publicación, programación. Se requiere un conjunto de datos de puntuación
Utilice su conexión y seleccione una base de datos. por ejemplo, "aoa_byom_models"

* Implementar en Docker Batch: motor, publicar, programar. Se requiere un conjunto de datos de puntuación
Utilice su conexión y seleccione una base de datos. por ejemplo, "aoa_byom_models"

* Implementar en lotes Restful: motor, publicar, programar. Se requiere un conjunto de datos de puntuación
Utilice su conexión y seleccione una base de datos. por ejemplo, "aoa_byom_models"

* Implementaciones/ejecuciones

* Evalúe nuevamente con el conjunto de datos 2: para supervisar el comportamiento de las métricas del modelo

* Supervisar el desfase del modelo: datos y métricas

* Abra el cuaderno BYOM para ejecutar la predicción PMML a partir del código SQL cuando se implemente en Vantage

* Pruebe Restful desde la interfaz de usuario de ModelOps o desde el comando curl

* Retirar implementaciones

## Resumen

En este inicio rápido, hemos aprendido cómo seguir un ciclo de vida completo de modelos GIT en ModelOps y cómo implementarlo en Vantage o en contenedores Docker para implementaciones Edge. Entonces, ¿cómo podemos programar una puntuación por lotes o probar puntuaciones de restful o bajo demanda y comenzar a supervisar las métricas de desfase de datos y calidad del modelo?

## Lectura adicional
* [Documentación de ModelOps](https://docs.teradata.com/search/documents?query=ModelOps&sort=last_update&virtual-field=title_only&content-lang=).

import CommunityLinkPartial from '../_partials/community_link.mdx';

<CommunityLinkPartial />
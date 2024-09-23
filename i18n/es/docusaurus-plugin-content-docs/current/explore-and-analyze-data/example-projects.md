---
id: use-cases
title: Ejemplos de casos de uso
description: Estas son solo algunas de las cargas de trabajo que puede ejecutar usando AI Unlimited.
sidebar_position: 4
sidebar_label: Ejemplos de casos de uso
pagination_prev: null
pagination_next: null
---

# Ejemplos de casos de uso

Explore algunas de las formas en que puede experimentar con análisis de IA/ML en grandes conjuntos de datos, antes de escalar, aplicar los resultados a otros casos de uso u operacionalizar sus modelos.

:::tip

Para obtener ayuda con estos casos de uso, envíe un correo electrónico al <a href="mailto:aiunlimited.support@Teradata.com">equipo de soporte</a> o pregunte a la [comunidad](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa).
:::


## Antes de empezar 

- Utilice el [Cuaderno de administración de proyectos](https://github.com/Teradata/ai-unlimited-demos/blob/main/Notebooks/Project%20Administration.ipynb) para preparar su proyecto.

- Utilice su catálogo de AWS Glue existente y cargue nuestros [datos de muestra](https://github.com/Teradata/ai-unlimited-demos/tree/main/UseCases/Data). O bien, cree un nuevo catálogo para utilizar los ejemplos de formato de Open Table Format (OTF) proporcionados.


## Comprender el recorrido del cliente

Los clientes interactúan con las instituciones financieras a través de diversos puntos de contacto de marketing, incluidos sitios web, interacciones en las sucursales con los empleados, correo electrónico y centros de llamadas. 

Comprender el recorrido general del cliente es fundamental para mejorarlo y aumentar la adquisición y adopción de clientes.

Después de acceder e inspeccionar los datos, utilizará modelos de atribución, análisis de canales y rutas para comprender el comportamiento del cliente a lo largo del tiempo.

[Pruébelo](https://github.com/Teradata/ai-unlimited-demos/blob/main/UseCases/Financial_Customer_Journey_SQL.ipynb) (SQL)

[Pruébelo](https://github.com/Teradata/ai-unlimited-demos/blob/main/UseCases/Financial_Customer_Journey_SQL_Python.ipynb) (SQL-Python)


## Segmentar a los clientes en función de sus compras anteriores

El historial de compras puede ser un factor importante para segmentar a los clientes. Por ejemplo, puede crear segmentos basados en el volumen y el valor de las compras.

Después de preparar los datos, utilizará la agrupación en clústeres de k-medias y los procesos de preparación de datos para determinar los segmentos de clientes.

[Pruébelo](https://github.com/Teradata/ai-unlimited-demos/blob/main/UseCases/Native_Data_Prep_Transformation_Pipelines-SQL.ipynb) (SQL)

[Pruébelo](https://github.com/Teradata/ai-unlimited-demos/blob/main/UseCases/Native_Data_Prep_Transformation_Pipelines-SQL_Python.ipynb) (SQL-Python)


## Encuentre el número ideal de segmentos de clientes

Si realiza marketing para la cantidad ideal de segmentos de clientes, podrá beneficiarse de la segmentación sin tener que gestionar demasiados segmentos. Puede obtener la cantidad ideal de segmentos a partir de los comentarios del historial de compras de los clientes.

Después de acceder e inspeccionar los datos, utilizará un modelo de lenguaje grande (LLM) para crear una tabla vectorial y luego encontrará el modelo k-medias ideal y la cantidad de segmentos.

[Pruébelo](https://github.com/Teradata/ai-unlimited-demos/blob/main/UseCases/Segmentation_With_Vector_Embedding-SQL.ipynb) (SQL)

[Pruébelo](https://github.com/Teradata/ai-unlimited-demos/blob/main/UseCases/Segmentation_With_Vector_Embedding-SQL_Python.ipynb) (SQL-Python)


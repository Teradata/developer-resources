---
id: select-the-right-data-ingestion-tools-for-teradata-vantage
sidebar_position: 2
author: Krutik Pathak
email: krutik.pathak@teradata.com
page_last_update: 29 de febrero de 2024
description: Recomendación de herramientas de incorporación de datos para utilizar en diferentes casos de uso para Teradata Vantage
keywords: [data ingestion, teradata, nos, tpt, bteq, querygrid, airbyte, object store, saas, vantage, apache, spark, presto, oracle, Flow]
---

# Seleccionar la solución de ingesta de datos adecuada para Teradata Vantage

## Información general

Este artículo describe diferentes casos de uso relacionados con la ingesta de datos. Enumera las soluciones disponibles y recomienda la solución óptima para cada caso de uso.

### Ingesta de alto volumen, incluida la transmisión
Soluciones disponibles:

* Utilice [Teradata Parallel Transporter API](https://docs.teradata.com/r/Teradata-Parallel-Transporter-Application-Programming-Interface-Programmer-Guide-17.20)
* Transmita datos al almacenamiento de objetos y posteriormente incorpórelos mediante [Teradata Native Object Store (NOS)](https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide-17.20/Welcome-to-Native-Object-Store).
* Utilice la utilidad de línea de comandos [Teradata Parallel Transporter (TPT)](https://docs.teradata.com/r/Teradata-Parallel-Transporter-User-Guide/June-2022/Introduction-to-Teradata-PT).
* Utilice [Teradata Query Service](https://docs.teradata.com/r/Teradata-Query-Service-Installation-Configuration-and-Usage-Guide-for-Customers/April-2022/Using-the-Query-Service-APIs/Getting-Started): REST API para ejecutar sentencias SQL en la base de datos.
* Utilice controladores de bases de datos Teradata como JDBC (Java), teradatasql (Python), controlador Node.js, ODBC, .NET Data Provider.


La API de Teradata Parallel Transport suele ser la solución de mayor rendimiento que ofrece un alto rendimiento y una latencia mínima. Úsela si necesita ingerir decenas de miles de filas por segundo y si se siente cómodo usando el lenguaje C. 

Utilice los controladores de la base de datos de Teradata cuando el número de eventos sea de miles por segundo. Considere utilizar el protocolo Fastload que está disponible en los controladores más populares, por ejemplo, JDBC, Python.

Si no quiere administrar la dependencia de las bibliotecas de controladores, utilice Query Service. Dado que Query Service utiliza el protocolo de controlador normal para comunicarse con la base de datos, el rendimiento de esta solución es similar al que ofrecen los controladores de bases de datos como JDBC. Si es un proveedor y quiere integrar su producto con Teradata, tenga en cuenta que no todos los clientes de Teradata tienen habilitado Query Service en sus sedes.

Si su solución puede aceptar una latencia mayor, una buena opción es transmitir eventos al almacenamiento de objetos y luego leer los datos usando NOS. Esta solución suele requerir la menor cantidad de esfuerzo.

### Ingerir datos del almacenamiento de objetos

Soluciones disponibles:

* [Flow (solo VantageCloud Lake)](https://docs.teradata.com/r/Teradata-VantageCloud-Lake/Loading-Data/Introduction-to-Flow)
* [Teradata Native Object Store (NOS)](https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide-17.20/Welcome-to-Native-Object-Store)
* [Teradata Parallel Transporter (TPT)](https://docs.teradata.com/r/Teradata-Parallel-Transporter-User-Guide/June-2022/Introduction-to-Teradata-PT)

Flow es el mecanismo de incorporación recomendado para llevar datos desde el almacenamiento de objetos a VantageCloud Lake. Para todas las demás versiones de Teradata Vantage, Teradata NOS es la opción recomendada. NOS puede aprovechar todos los nodos de Teradata para realizar la incorporación. Teradata Parallel Transporter (TPT) se ejecuta en el lado del cliente. Se puede utilizar cuando no hay conectividad desde NOS al almacenamiento de objetos.

### Ingerir datos de archivos locales
Soluciones disponibles:

* [Teradata Parallel Transporter (TPT)](https://docs.teradata.com/r/Teradata-Parallel-Transporter-User-Guide/June-2022/Introduction-to-Teradata-PT)
* [BTEQ](https://docs.teradata.com/r/Enterprise_IntelliFlex_Lake_VMware/Basic-Teradata-Query-Reference-17.20/Introduction-to-BTEQ)

TPT es la opción recomendada para cargar datos desde archivos locales. TPT está optimizado para la escalabilidad y el paralelismo, por lo que tiene el mejor rendimiento de todas las opciones disponibles. BTEQ se puede utilizar cuando un proceso de ingesta requiere secuencias de comandos. También tiene sentido  continuar usando BTEQ si todas las demás canalizaciones de ingesta se ejecutan en BTEQ.

### Ingerir datos de aplicaciones SaaS
Soluciones disponibles:

* Varias herramientas de terceros como [Airbyte](https://airbyte.com/), [Precog](https://precog.com/), [Nexla](https://nexla.com/), [Fivetran](https://fivetran.com/)
* Exportar desde aplicaciones SaaS a archivos locales y posteriormente incorporarlos mediante [Teradata Parallel Transporter (TPT)](https://docs.teradata.com/r/Teradata-Parallel-Transporter-User-Guide/June-2022/Introduction-to-Teradata-PT)
* Exportar desde aplicaciones SaaS al almacenamiento de objetos y posteriormente incorpórelos mediante [Teradata Native Object Store (NOS)](https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide-17.20/Welcome-to-Native-Object-Store).

Las herramientas de terceros suelen ser una mejor opción para mover datos de aplicaciones SaaS a Teradata Vantage. Ofrecen un amplio soporte para fuentes de datos y eliminan la necesidad de gestionar pasos intermedios, como exportar y almacenar conjuntos de datos exportados.

### Utilice datos almacenados en otras bases de datos para el procesamiento unificado de consultas.
Soluciones disponibles:

* [Teradata QueryGrid](https://docs.teradata.com/r/Enterprise_IntelliFlex_Lake_VMware/QueryGridTM-Installation-and-User-Guide-3.05)
* Exportar desde otras bases de datos a archivos locales y posteriormente incorporarlos mediante [Teradata Parallel Transporter (TPT)](https://docs.teradata.com/r/Teradata-Parallel-Transporter-User-Guide/June-2022/Introduction-to-Teradata-PT)
* Exportar desde otras bases al almacenamiento de objetos y posteriormente incorporarlos mediante [Teradata Native Object Store (NOS)](https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide-17.20/Welcome-to-Native-Object-Store).

QueryGrid es la opción recomendada para mover cantidades limitadas de datos entre diferentes sistemas/plataformas. Esto incluye movimiento dentro de instancias Vantage, Apache Spark, Oracle, Presto, etc. Es especialmente adecuado para situaciones en las que lo que se debe sincronizar se describe mediante condiciones complejas que se pueden expresar en SQL. 

## Resumen
En este artículo, exploramos varios casos de uso de ingesta de datos, proporcionamos una lista de herramientas disponibles para cada caso de uso e identificamos las opciones recomendadas para diferentes escenarios.

## Lectura adicional

* [Consultar datos almacenados en el almacenamiento de objetos mediante NOS](nos.md)

* [Ejecutar grandes cargas masivas de manera eficiente con Teradata Parallel Transporter](./run-bulkloads-efficiently-with-teradata-parallel-transporter.md)

* [Teradata QueryGrid](https://docs.teradata.com/r/Enterprise_IntelliFlex_Lake_VMware/QueryGridTM-Installation-and-User-Guide-3.05)

* [Utilizar Airbyte para cargar datos de fuentes externas en Teradata Vantage](./use-airbyte-to-load-data-from-external-sources-to-teradata-vantage.md)

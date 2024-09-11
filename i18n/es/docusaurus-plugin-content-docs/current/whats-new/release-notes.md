---
id: release-notes
title: Notas de la versión
description: Vea los detalles sobre el lanzamiento inicial de la vista previa pública paga.
sidebar_label: Notas de la versión
sidebar_position: 8
pagination_prev: null
pagination_next: null
---

# Notas de la versión

A medida que continuamos mejorando AI Unlimited, tenga en cuenta las funciones que actualmente no son compatibles y los problemas conocidos. 

Para conocer las últimas funciones y actualizaciones, esté atento a las [Novedades](./index.md).


## Vista previa pública paga (lanzamiento): mayo de 2024

### No admitido

- Actualizar y eliminar con predicados para consultas de Open Table Format (OTF)
  
- Funciones de Unbounded Array Framework (UAF) en SQL y teradataml
  
- Estas funciones teradataml:
  - automl 
  - openml  
  - map_row 
  - map_partition

- Función definida por el usuario (UDF) de API_Request

- Vantage Analytics Library (VAL)

### Problemas conocidos

- La primera invocación de funciones definidas por el usuario (UDF) de Java falla con este error: `Failure 7583 The secure mode processes had a set up error`.

- teradataml
  - Las funciones de Unbounded Array Framework (UAF) no se pueden ejecutar si el nombre de la base de datos tiene caracteres especiales, como un guion (-). 
  - Algunas funciones de SQLE y UAF no se ejecutan debido a problemas con la creación de tablas volátiles. El marco crea una tabla volátil si el argumento de palabra clave `Volatile` se establece en Verdadero. Sin embargo, no se pueden crear tablas volátiles en otros esquemas.
  - H2OPredict: un caso para el tipo de modelo DAI falló con el error: `H2OPredict failed in contract: 'license' column is missing from model input table. This column is required to score driverless AI models.`
  - ONNXPredict falló con el error: `E teradatasql.OperationalError: [Version 20.0.0.12] [Session 2078] [Teradata Database] [Error 7825] in UDF/XSP/UDM mldb.ONNXPredict: SQLSTATE [38U01] ONNXPredict failed with error:no onnxruntime in java.library.path: [/usr/pde/lib, /usr/tdbms/lib]`
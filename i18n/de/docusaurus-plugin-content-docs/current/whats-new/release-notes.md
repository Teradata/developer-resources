---
id: release-notes
title: Versionshinweise
description: Sehen Sie sich Details zur Erstveröffentlichung der kostenpflichtigen öffentlichen Vorschau an.
sidebar_label: Versionshinweise
sidebar_position: 8
pagination_prev: null
pagination_next: null
---

# Versionshinweise

Während wir AI Unlimited ständig weiterentwickeln, kann es immer Funktionen oder Probleme geben, die aktuell nicht verfügbar bzw. noch nicht bekannt sind. 

Behalten Sie die [Was ist neu](./index.md) im Auge, um die neuesten Funktionen und Updates zu erhalten.


## Kostenpflichtige öffentliche Vorschau (Start) – Mai 2024

### Nicht unterstützt

- „Update“ und „Delete“ mit Prädikaten für Open Table Format (OTF)-Abfragen
  
- Unbounded Array Framework (UAF)-Funktionen in SQL und teradataml
  
- Diese teradataml-Funktionen:
  - automl 
  - openml  
  - map_row 
  - map_partition

- API_Request Benutzerdefinierte Funktion (User Defined Function, UDF)

- Vantage Analytics Library (VAL)

### Bekannte Probleme

- Der erste Aufruf von benutzerdefinierten Funktionen (User Defined Functions, UDF) Java schlägt mit diesem Fehler fehl: `Failure 7583 The secure mode processes had a set up error`.

- teradataml
  - Die Ausführung von Unbounded Array Framework (UAF)-Funktionen schlägt fehl, wenn der Datenbankname Sonderzeichen wie einen Bindestrich (-) enthält. 
  - Einige SQLE- und UAF-Funktionen können aufgrund von Problemen mit der Erstellung volatiler Tabellen nicht ausgeführt werden. Das Framework erstellt eine volatile Tabelle, wenn das Schlüsselwortargument `Volatile` auf True gesetzt ist. Auf anderen Schemata können jedoch keine volatilen Tabellen erstellt werden.
  - H2OPredict – Ein Fall für Modelltyp DAI ist mit einem Fehler fehlgeschlagen: `H2OPredict failed in contract: 'license' column is missing from model input table. This column is required to score driverless AI models.`
  - ONNXPredict ist mit folgendem Fehler fehlgeschlagen: `E teradatasql.OperationalError: [Version 20.0.0.12] [Session 2078] [Teradata Database] [Error 7825] in UDF/XSP/UDM mldb.ONNXPredict: SQLSTATE [38U01] ONNXPredict failed with error:no onnxruntime in java.library.path: [/usr/pde/lib, /usr/tdbms/lib]`
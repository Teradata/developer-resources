---
id: install-teradata-studio-on-mac-m1-m2
sidebar_position: 1

author: Satish Chinthanippu
email: satish.chinthanippu@teradata.com
page_last_update: 14 de agosto de 2023
description: Ejecutar Teradata Studio en Apple Mac M1/M2.
keywords: [Estudio Teradata, Teradata Studio Express, teradata, vantage, Mac, Apple Mac, Apple Mac M1, Apple Mac M2, Procesador basado en ARM.]
---

import CommunityLink from '../_partials/community_link.mdx';

# Utilice Teradata Studio/Express en Apple Mac M1/M2

## Información general

Este tutorial explica la instalación de Teradata Studio y Teradata Studio Express en máquinas Apple Mac M1/M2.

## Pasos a seguir

1. Instale y habilite el traductor binario Rosetta. Siga [la Guía de instalación de Apple Mac Rosetta](https://support.apple.com/en-us/HT211861).
2. Descargue e instale un JDK 11 basado en x86 de 64 bits de su proveedor preferido. Por ejemplo, puede descargar JDK 11 x86 de 64 bits desde [Azul](https://www.azul.com/downloads/?version=java-11-lts&os=macos&architecture=x86-64-bit&package=jdkGet)
3. Descargue la última versión de Teradata Studio o Teradata Studio Express desde la página de Descargas de Teradata:
* [Estudio Teradata](https://downloads.teradata.com/download/tools/teradata-studio)
* [Teradata Studio Express](https://downloads.teradata.com/download/tools/teradata-studio-express)
4. Instale Teradata Studio/Teradata Studio Express. Consulte la [Guía de instalación de Teradata Studio y Teradata Studio Express](./attachments/Studio-Express-InstallGuide.pdf) para obtener detalles adicionales.

## Resumen

Apple ha introducido procesadores basados ​​en ARM en las máquinas Apple MAC M1/M2. Las aplicaciones basadas en Intel x64 no funcionarán de forma predeterminada en procesadores basados ​​en ARM. Teradata Studio o Teradata Studio Express tampoco funcionan de forma predeterminada, ya que la versión actual de Studio macOS es una aplicación basada en Intel x64. Este tutorial muestra cómo instalar JDK basado en Intel x64 y Teradata Studio o Teradata Studio Express en Apple Mac M1/M2.

<CommunityLink />
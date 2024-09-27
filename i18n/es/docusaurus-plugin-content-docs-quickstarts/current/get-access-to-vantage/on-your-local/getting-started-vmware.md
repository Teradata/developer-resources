---
sidebar_position: 1
author: Adán Tworkiewicz
email: adam.tworkiewicz@teradata.com
page_last_update: 9 de enero de 2023
description: Ejecute Vantage Express en su portátil mediante VMware.
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics]
---
import GettingStartedIntro from '../../_partials/getting-started-intro.mdx';
import RunVantage from '../../_partials/run-vantage.mdx';
import RunSampleQueries from '../../_partials/running-sample-queries.mdx';
import GettingStartedSummary from '../../_partials/getting-started-summary.mdx';
import CommunityLink from '../../_partials/community_link.mdx';

# Ejecutar Vantage Express en VMware

<GettingStartedIntro />

## Prerrequisitos

1. Un ordenador que utilice uno de los siguientes sistemas operativos: Windows, Linux o MacOS basado en Intel.
    :::note
    Para sistemas MacOS M1/M2, consulte [Ejecutar Vantage Express en UTM.](./getting-started-utm.md).
    :::
2. 30 GB de espacio en disco y suficiente CPU y RAM para poder dedicar al menos un núcleo y 6 GB de RAM a la máquina virtual.
3. Derechos de administrador para poder instalar y ejecutar el software.

## Instalación

### Descargar el software requerido

* La última versión de [Vantage Express](https://downloads.teradata.com/download/database/teradata-express-for-vmware-player). Si no ha utilizado el sitio web de descargas de Teradata anteriormente, deberá registrarse.
* [VMware Workstation Player](https://www.vmware.com/products/workstation-player.html).

:::important 
Las organizaciones comerciales requieren licencias comerciales para utilizar VMware Workstation Player. Si no quiere adquirir licencias de VMware, puede ejecutar Vantage Express en [VirtualBox](./getting-started-vbox.md).
:::

:::important 
VMware no ofrece VMware Workstation Player para MacOS. Si tiene un Mac, deberá instalar [VMware Fusion](https://www.vmware.com/products/fusion/fusion-evaluation.html) como alternativa. Es un producto de pago, pero VMware ofrece una prueba gratuita de 30 días. Alternativamente, puede ejecutar Vantage Express en [VirtualBox](./getting-started-vbox.md) o [UTM](./getting-started-utm.md).
:::
* En Windows, también necesitará [7zip](https://www.7-zip.org/download.html) para descomprimir Vantage Express.

### Ejecutar instaladores

1. Instale VMware Player o VMware Fusion ejecutando el instalador y aceptando los valores predeterminados.
2. Si está en Windows, instale `7zip`.

### Ejecutar Vantage Express

- Vaya al directorio donde descargó Vantage Express y descomprima el archivo descargado.
- Haga doble clic en el archivo `.vmx`. Esto iniciará la imagen de la máquina virtual en VMware Player/Fusion.

<RunVantage />

<RunSampleQueries />

<GettingStartedSummary />

## Siguientes pasos
* [Consultar datos almacenados en el almacenamiento de objetos](../../manage-data/nos.md)

## Lectura adicional
* [Guía de instalación de Teradata® Studio™ y Studio™ Express](https://docs.teradata.com/r/Teradata-StudioTM-and-StudioTM-Express-Installation-Guide-17.20)

<CommunityLink />
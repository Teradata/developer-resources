---
sidebar_position: 2
author: Adán Tworkiewicz
email: adam.tworkiewicz@teradata.com
page_last_update: 23 de agosto de 2022
description: Ejecutar Vantage Express en Google Cloud
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics]
---

import UseCase from '../../_partials/use-csae.mdx';
import CommunityLink from '../../_partials/community_link.mdx';
import InstallVeInPublic from '../../_partials/install-ve-in-public.mdx';
import Tabs from '../../_partials/tabsGCP.mdx';

# Ejecutar Vantage Express en Google Cloud

<UseCase />

## Información general

En este tutorial se muestra cómo ejecutar Vantage Express en Microsoft Azure Google Cloud Platform. Vantage Express contiene un motor SQL Teradata totalmente funcional.

:::note
Si no desea pagar por el uso de la nube, puede instalar Vantage Express localmente usando [VMware](../on-your-local/getting-started-vmware.md), [VirtualBox](../on-your-local/getting-started-vbox.md) o [UTM](../on-your-local/getting-started-utm.md).
:::

## Prerrequisitos

* Una cuenta de Google Cloud.
* Utilidad de línea de comandos `gcloud` instalada en su máquina. Puede encontrar instrucciones de instalación aquí: https://cloud.google.com/sdk/docs/install.

## Instalación
* Cree una máquina virtual Ubuntu con 4 CPU y 8 GB de RAM, un disco equilibrado de 70 GB. El siguiente comando crea una máquina virtual en la región `us-central1`. Para obtener el mejor rendimiento, reemplace la región por la que tenga más cerca. Para obtener la lista de regiones admitidas, consulte la [documentación de las regiones de Google Cloud](https://cloud.google.com/compute/docs/regions-zones).

<Tabs />


* ssh a su máquina virtual:

```bash
gcloud compute ssh teradata-vantage-express --zone=us-central1-a
```

* Cambiar al usuario `root`:

```bash
sudo -i
```

* Prepare el directorio de descarga de Vantage Express:

```bash
mkdir /opt/downloads
cd /opt/downloads
```

<InstallVeInPublic />

* Si desea conectarse a Vantage Express desde Internet, deberá abrir agujeros de firewall en su máquina virtual. También debe cambiar la contraseña predeterminada al usuario `dbc`:
* Para cambiar la contraseña del usuario `dbc`, vaya a su máquina virtual e inicie bteq:

```bash
bteq
```

* Inicie sesión en su base de datos usando `dbc` como usuario y contraseña:
```bash
.logon localhost/dbc
```
* Cambie la contraseña para el usuario `dbc`:
```sql
MODIFY USER dbc AS PASSWORD = new_password;
```

* Ahora puede abrir el puerto 1025 a Internet usando el comando de gcloud:
```bash
gcloud compute firewall-rules create vantage-express --allow=tcp:1025 --direction=IN --target-tags=ve
```

## Limpiar

Para dejar de incurrir en cargos, elimine la máquina virtual:
```bash
gcloud compute instances delete teradata-vantage-express --zone=us-central1-a
```

Además, recuerde eliminar cualquier regla de firewall que haya agregado, por ejemplo:
```bash
gcloud compute firewall-rules delete vantage-express
```

## Siguientes pasos
* [Consultar datos almacenados en el almacenamiento de objetos](../../manage-data/nos.md)

## Lectura adicional
* [Guía de instalación de Teradata® Studio™ y Studio™ Express](https://docs.teradata.com/r/Teradata-StudioTM-and-StudioTM-Express-Installation-Guide-17.20)
* [Introducción a BTEQ](https://docs.teradata.com/r/jmAxXLdiDu6NiyjT6hhk7g/root)

<CommunityLink/>

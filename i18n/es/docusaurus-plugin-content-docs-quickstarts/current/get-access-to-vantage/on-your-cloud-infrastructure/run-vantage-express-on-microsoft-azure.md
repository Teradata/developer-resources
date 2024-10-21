---
sidebar_position: 3
author: Adán Tworkiewicz
email: adam.tworkiewicz@teradata.com
page_last_update: 23 de agosto de 2022
description: Ejecutar Vantage Express en Microsoft Azure.
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics]
---

import UseCase from '../../_partials/use-csae.mdx';
import Tabs from '../../_partials/tabsAzure.mdx';
import InstallVeInPublic from '../../_partials/install-ve-in-public.mdx';
import CommunityLink from '../../_partials/community_link.mdx';

# Ejecutar Vantage Express en Azure

<UseCase />

## Información general

Este tutorial demuestra cómo ejecutar Vantage Express en Microsoft Azure. Vantage Express contiene un Teradata SQL Engine completamente funcional.

## Prerrequisitos

* Una cuenta de Azure. Puede crear una aquí: https://azure.microsoft.com/en-us/free/
* Utilidad de línea de comandos `az` instalada en su máquina. Puede encontrar instrucciones de instalación aquí: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli.

## Instalación

* Configure la región predeterminada para la región más cercana a usted (para enumerar las ubicaciones ejecute `az account list-locations -o table`):

```bash
az config set defaults.location=<location>
```

* Cree un nuevo grupo de recursos llamado `tdve-resource-group` y agréguelo a los valores predeterminados:
````bash
az group create -n tdve-resource-group
az config set defaults.group=tdve-resource-group
````

* Para crear una máquina virtual, necesitará un par de claves ssh. Si aún no lo tiene, cree uno:
````bash
az sshkey create --name vantage-ssh-key
````

* Restrinja el acceso a la clave privada. Reemplace `<path_to_private_key_file>` con la ruta de la clave privada devuelta por el comando anterior:
````bash
chmod 600 <path_to_private_key_file>
````

* Cree una máquina virtual Ubuntu con 4 CPU y 8 GB de RAM, un disco operativo de 30 GB y un disco de datos de 60 GB.

<Tabs />

* ssh a su máquina virtual. Reemplace `<path_to_private_key_file>` y `<vm_ip>` con valores que coincidan con su entorno:
```bash
ssh -i <path_to_private_key_file> azureuser@<vm_ip>
```

* Una vez en la máquina virtual, cambie al usuario `root`:
```bash
sudo -i
```

* Prepare el directorio de descarga de Vantage Express:
```bash
mkdir /opt/downloads
cd /opt/downloads
```

* Monte el disco de datos:
```bash
parted /dev/sdc --script mklabel gpt mkpart xfspart xfs 0% 100%
mkfs.xfs /dev/sdc1
partprobe /dev/sdc1
export DISK_UUID=$(blkid | grep sdc1 | cut -d""" -f2)
echo "UUID=$DISK_UUID  /opt/downloads   xfs   defaults,nofail   1   2" >> /etc/fstab
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
```bash
MODIFY USER dbc AS PASSWORD = new_password;
```

* Ahora puede abrir el puerto 1025 a Internet usando el comando de gcloud:
```bash
az vm open-port --name teradata-vantage-express --port 1025
```

Para dejar de incurrir en cargos, elimine todos los recursos asociados con el grupo de recursos:
```bash
az group delete --no-wait -n tdve-resource-group
```

## Siguientes pasos
* [Consultar datos almacenados en el almacenamiento de objetos](../../manage-data/nos.md)

## Lectura adicional
* [Guía de instalación de Teradata® Studio™ y Studio™ Express](https://docs.teradata.com/r/Teradata-StudioTM-and-StudioTM-Express-Installation-Guide-17.20)
* [Introducción a BTEQ](https://docs.teradata.com/r/jmAxXLdiDu6NiyjT6hhk7g/root)

<CommunityLink/>

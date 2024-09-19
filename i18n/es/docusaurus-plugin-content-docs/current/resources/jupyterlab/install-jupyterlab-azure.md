---
id: deploy-jupyter-azure-portal
title: Instalar JupyterLab en Azure
description: Aprenda a implementar JupyterLab usando una plantilla ARM.
sidebar_label: Instalar en Azure
sidebar_position: 2
pagination_prev: null
pagination_next: null
---

# Instalar JupyterLab en Azure

Utilizará una plantilla de Azure Resource Manager (ARM) proporcionada por Teradata para instalar JupyterLab y el kernel de AI Unlimited desde el Azure Portal. 

Esto implementa una instancia de servidor, con JupyterLab ejecutándose en un contenedor controlado por [systemd](../../glossary.md#systemd).

:::tip
Para obtener ayuda con la instalación, envíe un correo electrónico al <a href="mailto:aiunlimited.support@Teradata.com">equipo de soporte</a> o pregunte a la [comunidad](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa).
:::


## Prepare su cuenta de Azure

- Trabaje con su administrador de nube para asegurarse de que su cuenta de Azure tenga los permisos necesarios para crear los recursos de nube definidos en la [plantilla de JupyterLab](https://github.com/Teradata/ai-unlimited/tree/develop/deployments/azure/templates/arm/jupyter).

- Requisitos de red: su [grupo de recursos](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal) de Azure debe tener una [Azure Virtual Network (VNet)](https://learn.microsoft.com/en-us/azure/virtual-network/quick-create-portal) configurada con una [subred](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-subnet?tabs=azure-portal). Use una red virtual o subred existente, o cree la suya propia, según los permisos de su cuenta. 

- Si necesita acceder a la instancia de JupyterLab para ejecutar comandos o depurar, puede usar un [par de claves](https://learn.microsoft.com/en-us/azure/virtual-machines/linux/mac-create-ssh-keys) para conectarse de forma segura mediante Secure Shell (SSH). Necesitará el par de claves cuando [especifique los detalles de la instancia](#specify-instance-details).


## Clonar el repositorio

import MyPartial from '../../_partials/_clone-repo.mdx';

<MyPartial />


## Localizar la plantilla de Jupyter

Las plantillas ARM para JupyterLab están aquí en el repositorio de GitHub de AI Unlimited:

`deployments/azure/templates/arm/jupyter`

Elija una plantilla en función de si desea utilizar un [equilibrador de carga](../../glossary.md#load-balancer) y de qué tipo.
:::note
Quizás quiera pedirle orientación a un administrador de la nube de su organización.
:::
    \- `jupyter-with-alb.json`—JupyterLab se encuentra detrás de un [equilibrador de carga de aplicaciones](../../glossary.md#application-load-balancer)
    \- `jupyter-with-nlb.json`—JupyterLab se encuentra detrás de un [equilibrador de carga de red](../../glossary.md#network-load-balancer)
    \- `jupyter-without-lb.json`—Sin equilibrador de carga

## Cargar la plantilla

1. Inicie sesión en el [Azure Portal](https://portal.azure.com).
   :::note
   Las referencias a Azure Portal están actualizadas al 29 de mayo de 2024.
   ::: 
2. Busque **implementación personalizada** y luego seleccione **Implementar una plantilla personalizada**.
3. Seleccione **Crear su propia plantilla en el editor** y luego **Cargar archivo**.
4. Seleccione el archivo de plantilla que eligió usar y seleccione **Guardar**.  


## Especificar detalles de la instancia

Revise los parámetros. Proporcione valores para los requeridos. Es posible que su organización requiera otros.

<details>

<summary>Parámetros de Azure y JupyterLab</summary>

| Parámetro | Descripción | Notas 
|---------|-------------|-----------|
| Subscription | La suscripción de Azure que desea utilizar para implementar AI Unlimited. | Obligatorio<br/>Predeterminado: NA<br/>Recomendamos utilizar una cuenta que no sea una prueba gratuita. |
| Region | La región donde desea implementar AI Unlimited. | Obligatorio<br/>Predeterminado: NA<br/>Seleccione la región de Azure más cercana a su ubicación de trabajo y los recursos de datos que desea usar con AI Unlimited. |
| Resource Group Name | El nombre del contenedor que agrupa recursos de AI Unlimited relacionados. | Obligatorio<br/>Predeterminado: ai-unlimited-jupyter |
| OS Version  | Las versiones de los sistemas operativos que están disponibles en la suscripción actual.| Opcional con valor predeterminado<br/>Predeterminado: Ubuntu-2004 |
| Instance Type | El tipo de instancia que desea utilizar para AI Unlimited.| Opcional<br/>Valor predeterminado: STANDARD_D2_V3<br/>Recomendamos utilizar el tipo de instancia predeterminado para ahorrar costes. El tipo de instancia predeterminado es la serie Dv3 estándar con 2 vCPU y 8,0 GiB de memoria.|
| Network | El nombre de la red en la que desea implementar la instancia de AI Unlimited.| Opcional<br/>Predeterminado: NA| 
| Subnet | La subred en la que desea implementar la instancia de AI Unlimited.| Obligatorio<br/>Predeterminado: NA<br/>La subred debe residir en la zona de disponibilidad seleccionada. |
| Security Group | El firewall virtual que controla el tráfico entrante y saliente a la instancia. | Opcional<br/>Valor predeterminado: JupyterSecurityGroup<br/>El grupo de seguridad se implementa como un conjunto de reglas que especifican qué protocolos, puertos y direcciones IP o bloques CIDR tienen permitido acceder a la instancia. Defina al menos un CIDR de acceso o un grupo de seguridad para permitir el tráfico entrante a menos que cree reglas de ingreso de grupos de seguridad personalizadas. |
| Access CIDR | El rango de direcciones IP CIDR al que se le permite acceder a la instancia. | Opcional<br/>Valor predeterminado: 0.0.0.0/0<br/>Recomendamos configurar este valor en un rango de IP de confianza. Defina al menos un CIDR de acceso o un grupo de seguridad para permitir el tráfico entrante a menos que cree reglas de ingreso de grupos de seguridad personalizadas. |
| Source App Sec Groups (ASG) | Los grupos de seguridad de aplicaciones de origen que tienen permiso para conectarse a la instancia de AI Unlimited. Los ASG le permiten organizar sus máquinas virtuales (VM) en función de sus políticas de seguridad de red específicas. Estas políticas de seguridad determinan qué tráfico está permitido o no en su máquina virtual. | Opcional<br/>Predeterminado: NA<br/>Seleccione un grupo de seguridad de aplicaciones en la misma región que la interfaz de red. |
| Destination App Sec Groups | Los grupos de seguridad de aplicaciones de destino que tienen permiso para conectarse a la instancia de AI Unlimited. | Opcional<br/>Predeterminado: NA<br/>Seleccione un grupo de seguridad de aplicaciones en la misma región que la interfaz de red. |
| Role Definition ID | El ID del rol que se utilizará con AI Unlimited. | Obligatorio<br/>Predeterminado: NA<br/>Utilice el comando `Get-AzRoleDefinition` de la CLI de Azure para obtener su ID de definición de rol. |
| Allow Public SSH | Especifica si puede usar claves de shell seguro (SSH) para conectarse a máquinas virtuales en Azure. |  Opcional<br/>Predeterminado: verdadero |
| Public Key | La clave SSH pública que puede utilizar para conectarse a una máquina virtual a través de SSH. | Opcional<br/>Predeterminado: NA<br/>Este valor debe comenzar con `ssh-rsa`. |
| Use Persistent Volume | Especifica si desea utilizar un volumen persistente nuevo o existente para almacenar datos. Consulte *Más información: Uso de un volumen persistente* debajo de la sección de parámetros. | Opcional con valor predeterminado<br/>Predeterminado: Nuevo<br/>Las opciones admitidas son un nuevo volumen persistente o uno existente, según su caso de uso. |
| Persistent Volume Size | El tamaño del volumen persistente que puede adjuntar a la instancia, en GB. | Opcional<br/>Predeterminado: 100<br/>Admite valores entre 8 y 1000. |
| Existing Persistent Volume | El ID del volumen persistente existente que puede adjuntar a la instancia.| Obligatorio si Usar volumen persistente está configurado como Existente<br/>Predeterminado: NA<br/>El volumen persistente debe estar en la misma zona de disponibilidad que la instancia de AI Unlimited. |
| JupyterHttpPort | El puerto para acceder a la interfaz de usuario del servicio JupyterLab. | Obligatorio con valor predeterminado<br/>Valor predeterminado: 8888 |
| JupyterVersion | La versión de JupyterLab que desea implementar. | Obligatorio con valor predeterminado<br/>Valor predeterminado: último<br/>El valor es una etiqueta de versión de contenedor, por ejemplo, último. |
| JupyterToken | El token o contraseña utilizado para acceder a JupyterLab desde la interfaz de usuario.| Obligatorio<br/>Predeterminado: NA<br/>El token debe comenzar con una letra y contener solo caracteres alfanuméricos. El patrón permitido es ^[a-zA-Z][a-zA-Z0-9-]*. |

</details>

<details>

<summary>Más información: Cómo usar un volumen persistente</summary>

La instancia de JupyterLab se ejecuta en un contenedor y guarda sus datos de configuración en una base de datos en el volumen raíz de la instancia. Estos datos se conservan si apaga, reinicia o crea una instantánea y vuelve a iniciar la instancia. 

Sin embargo, un volumen persistente almacena datos de una aplicación en contenedores más allá de la vida útil del contenedor, pod o nodo en el que se ejecuta. 

**Sin un volumen persistente**

Si el contenedor, el pod o el nodo fallan o finalizan, perderá los datos de configuración de JupyterLab. Puede implementar una nueva instancia de JupyterLab, pero no en el mismo estado que la que se perdió.

**Con un volumen persistente**

Si el contenedor, pod o nodo falla o finaliza, y los datos de configuración de JupyterLab se almacenan en un volumen persistente, puede implementar una nueva instancia de JupyterLab que tenga la misma configuración que la que se perdió.

**Ejemplo**

1. Implemente JupyterLab e incluya estos parámetros:
   - `UsePersistentVolume`: **Nuevo**
2. Después de crear la pila, en la pestaña **Salidas**, anote el `volume-id`.
3. Utilice JupyterLab.
4. Si se pierde la instancia de JupyterLab, implemente JupyterLab nuevamente e incluya estos parámetros:
   - `UsePersistentVolume`: **Nuevo**
   - `ExistingPersistentVolumeId`: el valor que anotó en el paso 2
   
La nueva instancia de JupyterLab tiene la misma configuración que la que se perdió.

</details>


## Crear la instancia

1. Seleccione **Revisar + crear**.
2. Seleccione **Crear**.<br />
En la página **Notificaciones** puede supervisar el progreso.

Cuando se completa la implementación, la página **Salidas** muestra la URL para acceder a JupyterLab.






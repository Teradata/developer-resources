---
id: deploy-manager-azure-portal
title: Instalar en Azure
description: Aprenda a implementar el administrador mediante una plantilla de Azure Resource Manager (ARM).
sidebar_label: Instalar en Azure
sidebar_position: 2
pagination_prev: null
pagination_next: null
---

# Instalar el administrador en Azure

Antes de comenzar, asegúrese de cumplir los [requisitos previos](./index.md#prerequisites) y de que su cuenta de Azure cumpla con [los requisitos](../resources/azure-requirements.md).

El administrador de AI Unlimited organiza la implementación del motor e incluye una interfaz de usuario basada en web para la configuración.

Usará una plantilla de Azure Resource Manager (ARM) proporcionada por Teradata para instalar el administrador desde el Azure Portal. Implementará una instancia de servidor en la que se ejecuta el administrador en un contenedor controlado por [systemd](../glossary.md#systemd).

:::tip
Para obtener ayuda con la instalación, envíe un correo electrónico al <a href="mailto:aiunlimited.support@Teradata.com">equipo de soporte</a> o pregunte a la [comunidad](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa).
:::


## Clonar el repositorio

import MyPartial from '../_partials/_clone-repo.mdx';

<MyPartial />


## Localizar la plantilla del administrador

Las plantillas ARM para el administrador están aquí en el repositorio de GitHub de AI Unlimited:

`deployments/azure/templates/arm/ai-unlimited`

Elija una plantilla en función de si desea utilizar un [equilibrador de carga](../glossary.md#load-balancer) y de qué tipo.
:::note
Quizás quiera pedirle orientación a un administrador de la nube de su organización.
:::
    \- `ai-unlimited-with-alb.json`—El administrador se encuentra detrás de un [equilibrador de carga de aplicaciones](../glossary.md#application-load-balancer)
    \- `ai-unlimited-with-nlb.json`—El administrador se encuentra detrás de un [equilibrador de carga de red](../glossary.md#network-load-balancer)
    \- `ai-unlimited-without-lb.json`No hay equilibrador de carga. Si no está seguro de qué plantilla usar, le recomendamos esta.


## Cargar la plantilla

1. Inicie sesión en el [Azure Portal](https://portal.azure.com). 
   :::note
   Las referencias a Azure Portal están actualizadas al 29 de mayo de 2024.
   ::: 
2. Busque **Implementación personalizada** y luego seleccione **Implementar una plantilla personalizada**.
3. Seleccione **Crear su propia plantilla en el editor** y luego **Cargar archivo**.
4. Seleccione el archivo de plantilla que eligió usar y luego seleccione **Guardar**.

<a id="azure-parms"></a>


## Especificar detalles de la instancia

Revise los parámetros. Proporcione valores para los parámetros requeridos. Es posible que su organización requiera otros.

<details>
<summary>Parámetros de Azure y AI Unlimited</summary>

| Parámetro | Descripción | Notas |
|---------|-------------|-----------|
| Subscription | La suscripción de Azure que desea utilizar para implementar AI Unlimited.| Obligatorio<br/>Predeterminado: NA <br/>Esta debe ser una cuenta de pago por uso.  |
| Region | La región donde desea implementar AI Unlimited.| Obligatorio<br/>Predeterminado: NA<br/>Seleccione la región de Azure más cercana a su ubicación de trabajo y los recursos de datos que desea usar con AI Unlimited. |
| Resource Group Name | El nombre del contenedor que agrupa recursos de AI Unlimited relacionados.| Obligatorio<br/>Predeterminado: ai-unlimited-workspace |
| AI Unlimited Name| Nombre único dado a AI Unlimited.| Obligatorio<br/>Predeterminado: NA | 
| Public Key | La clave SSH pública que puede utilizar para conectarse a una máquina virtual a través de SSH.| Obligatorio<br/>Predeterminado: NA<br/>Este valor debe comenzar con “ssh-rsa”. |
| OS Version  | Las versiones de los sistemas operativos que están disponibles en la suscripción actual. | Opcional con valor predeterminado<br/>Predeterminado: Ubuntu-2004 |
| Instance Type | El tipo de instancia que desea utilizar para AI Unlimited. | Opcional<br/>Valor predeterminado: STANDARD_D2_V3<br/>Recomendamos utilizar el tipo de instancia predeterminado para ahorrar costes. El tipo de instancia predeterminado es la serie Dv3 estándar con 2 vCPU y 8,0 GiB de memoria.|
| Network | El nombre de la red en la que desea implementar la instancia de AI Unlimited.| <br/>Opcional<br/>Predeterminado: NA | 
| Subnet | La subred en la que desea implementar la instancia de AI Unlimited. | Obligatorio<br/>Predeterminado: NA<br/>La subred debe residir en la zona de disponibilidad seleccionada. |
| Security Group | El firewall virtual que controla el tráfico entrante y saliente a la instancia. | Opcional<br/>Valor predeterminado: AiUnlimitedSecurityGroup<br/>El grupo de seguridad se implementa como un conjunto de reglas que especifican qué protocolos, puertos y direcciones IP o bloques CIDR tienen permitido acceder a la instancia. Defina al menos un CIDR de acceso o un grupo de seguridad para permitir el tráfico entrante a menos que cree reglas de ingreso de grupos de seguridad personalizadas. |
| Access CIDR | El rango de direcciones IP CIDR al que se le permite acceder a la instancia. | Opcional<br/>Valor predeterminado: 0.0.0.0/0<br/>Recomendamos configurar este valor en un rango de IP de confianza. Defina al menos un CIDR de acceso o un grupo de seguridad para permitir el tráfico entrante a menos que cree reglas de ingreso de grupos de seguridad personalizadas. |
| AI Unlimited HTTP Port | El puerto para acceder a la interfaz de usuario de AI Unlimited.| Obligatorio con valor predeterminado<br/>Predeterminado: 3000 |
| AI Unlimited GRPC Port | El puerto para acceder a la API de AI Unlimited. | Obligatorio con valor predeterminado<br/>Predeterminado: 3282 | 
| Source App Sec Groups | Los grupos de seguridad de aplicaciones de origen (ASG) que tienen permiso para conectarse a la instancia de AI Unlimited. Los ASG le permiten organizar sus máquinas virtuales (VM) en función de sus políticas de seguridad de red específicas. Estas políticas de seguridad determinan qué tráfico está permitido o no en su máquina virtual. |Opcional<br/>Predeterminado: NA<br/> Seleccione un grupo de seguridad de aplicaciones en la misma región que la interfaz de red. |
| Destination App Sec Groups | Los grupos de seguridad de aplicaciones de destino que tienen permiso para conectarse a la instancia de AI Unlimited. | Opcional<br/>Predeterminado: NA<br/>Seleccione un grupo de seguridad de aplicaciones en la misma región que la interfaz de red. |
| Role Definition ID | El ID del rol que se utilizará con AI Unlimited.| Obligatorio<br/>Predeterminado: NA<br/>Use el comando de la CLI de Azure: Get-AzRoleDefinition para obtener su ID de definición de rol. |
| Allow Public SSH | Especifica si puede usar claves de shell seguro (SSH) para conectarse a máquinas virtuales en Azure.|  Opcional<br/>Predeterminado: verdadero |
| Use Key Vault | Especifica si se debe utilizar el almacén de claves para recuperar la contraseña segura durante una implementación. | Opcional<br/>Predeterminado: Nuevo |
| Use Persistent Volume | Especifica si desea utilizar un volumen persistente nuevo o existente para almacenar datos. Consulte *Más información: Uso de un volumen persistente* debajo de la sección de parámetros. | Opcional con valor predeterminado<br/>Predeterminado: Nuevo <br/>Opciones compatibles: Nuevo o Existente, según su caso de uso. |
| Persistent Volume Size | El tamaño del volumen persistente que puede adjuntar a la instancia, en GB. | Opcional<br/>Predeterminado: 100 |
| Existing Persistent Volume | <br/>El ID del volumen persistente existente que puede adjuntar a la instancia.| Obligatorio si UsePersistentVolume está configurado como Existente.<br/>Predeterminado: Ninguno<br/>El volumen persistente debe estar en la misma zona de disponibilidad que la instancia de AI Unlimited. |
| AI Unlimited Version | La versión de AI Unlimited que desea implementar. | Obligatorio con valor predeterminado<br/>Predeterminado: último<br/>El valor es una etiqueta de versión del contenedor. |
|Use NLB| Especifica si se accede a la instancia mediante un equilibrador de carga de red.|Obligatorio con valor predeterminado<br/>Valor predeterminado: falso|
| Tags | Los pares clave-valor que se asignan a los recursos para una identificación rápida.| Opcional<br/>Predeterminado:NA |   

</details>

<details>

<summary>Más información: Cómo usar un volumen persistente</summary>

La instancia del administrador se ejecuta en un contenedor y guarda sus datos de configuración en una base de datos en el volumen raíz de la instancia. Estos datos se conservan si apaga, reinicia o crea una instantánea y vuelve a iniciar la instancia. 

Un volumen persistente almacena datos de una aplicación en contenedores más allá de la vida útil del contenedor, pod o nodo en el que se ejecuta. 

**Sin un volumen persistente**

Si el contenedor, el pod o el nodo fallan o finalizan, perderá los datos de configuración del administrador. Puede implementar una nueva instancia del administrador, pero no en el mismo estado que la que se perdió.

**Con un volumen persistente**

Si el contenedor, pod o nodo falla o finaliza, y los datos de configuración del administrador se almacenan en un volumen persistente, puede implementar una nueva instancia de administrador que tenga la misma configuración que la que se perdió.

**Ejemplo**

1. Implemente el administrador y configure el parámetro `Usar volumen persistente` en **Nuevo**.
2. Después de crear la pila, en la página **Salidas**, anote el `volume-id`.
3. Utilice AI Unlimited.
4. Si se pierde la instancia del administrador, vuelva a implementar el administrador e incluya estos parámetros:
   - `Usar volumen persistente`: **Nuevo**
   - `Volumen persistente existente`: el valor que anotó en el paso 2
   
La nueva instancia del administrador tiene la misma configuración que la que se perdió.

</details>


## Crear la instancia

1. Seleccione **Revisar + crear**.
2. Seleccione **Crear**.<br />
En la página **Notificaciones** puede supervisar el progreso.

Cuando se completa la implementación, la página **Salidas** muestra los valores generados para los recursos creados.

Necesitará la URL para acceder al administrador y configurar AI Unlimited.


## ¿Qué sigue?

[Cree una aplicación OAuth](../resources/create-oauth-app.md) para permitir la autenticación entre AI Unlimited y su cuenta de proveedor de Git.

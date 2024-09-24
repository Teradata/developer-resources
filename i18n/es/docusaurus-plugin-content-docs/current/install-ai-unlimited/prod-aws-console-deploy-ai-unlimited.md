---
id: deploy-manager-aws-console
title: Instalar en AWS
description: Aprenda a implementar el administrador utilizando una plantilla de CloudFormation.
sidebar_label: Instalar en AWS
sidebar_position: 1
pagination_prev: null
pagination_next: null
---

# Instalar el administrador en AWS

Antes de comenzar, asegúrese de tener [requisitos previos](./index.md#prerequisites) y de que su cuenta de AWS cumpla con [los requisitos](../resources/aws-requirements.md).

El administrador de AI Unlimited organiza la implementación del motor e incluye una interfaz de usuario basada en web para la configuración. 

Utilizará una plantilla de CloudFormation proporcionada por Teradata para instalar el administrador desde la AWS Management Console. Implementará una instancia de servidor en la que se ejecuta el administrador en un contenedor controlado por [systemd](../glossary.md#systemd).

:::tip
Para obtener ayuda con la instalación, envíe un correo electrónico al <a href="mailto:aiunlimited.support@Teradata.com">equipo de soporte</a> o pregunte a la [comunidad](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa).
:::


## Clonar el repositorio

import MyPartial from '../_partials/_clone-repo.mdx';

<MyPartial />


## Localizar la plantilla del administrador

Las plantillas de CloudFormation para el administrador se encuentran aquí en el repositorio de GitHub de AI Unlimited:

`deployments/aws/templates/ai-unlimited/`

Elija una plantilla en función de si desea utilizar un [equilibrador de carga](../glossary.md#load-balancer) y de qué tipo.
:::note
Quizás quiera pedirle orientación a un administrador de la nube de su organización.
:::
    \- `ai-unlimited-with-alb.yaml`—El administrador se encuentra detrás de un [equilibrador de carga de aplicaciones](../glossary.md#application-load-balancer)
    \- `ai-unlimited-with-nlb.yaml`—El administrador se encuentra detrás de un [equilibrador de carga de red](../glossary.md#network-load-balancer)
    \- `ai-unlimited-without-lb.yaml`No hay equilibrador de carga. Si no está seguro de qué plantilla usar, le recomendamos esta.


## Cargar la plantilla	

1. Inicia sesión en la [consola de AWS](https://aws.amazon.com).<br />
   :::note
   Las referencias a la AWS Management Console están actualizadas al 29 de mayo de 2024.
   ::: 
2. Seleccione la región de AWS en la que desea implementar AI Unlimited.<br />
Le recomendamos seleccionar la región más cercana a su ubicación de trabajo principal.
3. Busque y vaya a **CloudFormation**.
4. Seleccione **Crear pila** y luego **Con nuevos recursos (estándar)**.
5. Seleccione **Elegir una plantilla existente** y luego **Subir un archivo de plantilla**.
6. Seleccione el archivo de plantilla que eligió usar y haga clic en **Siguiente**.  

<a id="aws-parms"></a>


## Especificar detalles y opciones de la pila

1. Proporcione un nombre para la pila.
2. Revise los parámetros. Proporcione valores para los parámetros requeridos. Es posible que su organización requiera otros.<br/>

<details>

<summary>Parámetros de AWS y del administrador</summary>

 Los parámetros de cada plantilla varían. Es posible que vea algunos parámetros aquí que no aparecen en la consola.
 
| Parámetro | Descripción | Notas | 
|---------|-------------|-----------|
| Stack name	| El identificador que le ayuda a encontrar la pila AI Unlimited en una lista de pilas. |Obligatorio<br/>Predeterminado: NA<br/> El nombre solo puede contener caracteres alfanuméricos (distingue entre mayúsculas y minúsculas) y guiones. Debe comenzar con un carácter alfabético y no puede tener más de 128 caracteres.| | El nombre solo puede contener caracteres alfanuméricos (distingue entre mayúsculas y minúsculas) y guiones. Debe comenzar con un carácter alfabético y no puede tener más de 128 caracteres.|
|AiUnlimitedName| El nombre de la instancia de AI Unlimited. |Obligatorio con valor predeterminado<br/>Valor predeterminado: ai-unlimited<br/>El nombre solo puede contener caracteres alfanuméricos (distingue entre mayúsculas y minúsculas) y guiones. Debe comenzar con un carácter alfabético y no puede tener más de 20 caracteres.|
| InstanceType | El tipo de instancia EC2 para el administrador. |Obligatorio con valor predeterminado<br/>Valor predeterminado: t3.micro<br/> **IMPORTANTE**: Si la instancia no tiene el tamaño adecuado, pueden ocurrir errores en la implementación y suspensión del motor, y tendrá que reinstalar el administrador en una instancia más grande.  Consulte *Más información: Recomendaciones de tipo (tamaño) de instancia de administrador* debajo de la sección de parámetros. |
| RootVolumeSize | El tamaño del disco raíz que desea adjuntar a la instancia, en GB. | Obligatorio con valor predeterminado<br/>Predeterminado: 20<br/>Admite valores entre 8 y 1000. |
| TerminationProtection | Habilita la protección contra la terminación de instancias. |Obligatorio con valor predeterminado<br/>Valor predeterminado: falso |
|IamRole | Especifica si CloudFormation debe crear una nueva función de IAM o utilizar una existente. |Obligatorio con valor predeterminado<br/>Predeterminado: Nuevo<br/>Las opciones admitidas son: Nuevo o Existente |
|IamRoleName | El nombre del rol de IAM que se asignará a la instancia, ya sea un rol de IAM existente o uno recién creado. |Opcional con valor predeterminado<br/>Valor predeterminado: ai-unlimited-iam-role<br/>Si se nombra un nuevo rol de IAM, CloudFormation requiere la capacidad CAPABILITY_NAMED_IAM. Déjelo en blanco para usar un nombre generado automáticamente. |
|IamPermissionsBoundary	| El ARN del límite de permisos de IAM para asociar con el rol de IAM asignado a la instancia. |Opcional<br/>Predeterminado: NA |
|AvailabilityZone | La zona de disponibilidad en la que desea implementar la instancia. |Obligatorio<br/>Predeterminado: NA<br/>El valor debe coincidir con la subred, la zona de cualquier volumen preexistente y el tipo de instancia debe estar disponible en la zona seleccionada. |
|LoadBalancerScheme	|Si se utiliza un equilibrador de carga, este campo especifica si la instancia es accesible desde Internet o solo desde dentro de la VPC.	|Opcional con valor predeterminado<br/>Valor predeterminado: orientado a Internet<br/>El nombre DNS de un equilibrador de carga orientado a Internet se puede resolver públicamente en las direcciones IP públicas de los nodos. Por lo tanto, los equilibradores de carga orientados a Internet pueden enrutar solicitudes de clientes a través de Internet.<br/>Los nodos de un equilibrador de carga interno solo tienen direcciones IP privadas. El nombre DNS de un equilibrador de carga interno se puede resolver públicamente en las direcciones IP personales de los nodos. Por lo tanto, los equilibradores de carga internos pueden enrutar solicitudes de clientes con acceso a la VPC para el equilibrador de carga.|
|LoadBalancerSubnetOne | La subred donde se aloja el equilibrador de carga. La subred determina las zonas de disponibilidad, las direcciones IP y los puntos finales del equilibrador de carga. |Opcional con valor predeterminado<br/>Valor predeterminado: NA<br/>Debe definir un mínimo de una subred disponible para crear un Network Load Balancer (NLB) y dos subredes para un Application Load Balancer (ALB).|
| LoadBalancerSubnetTwo| La subred donde está alojado el equilibrador de carga. |Opcional. Esta opción solo está disponible en la plantilla con ALB.<br/>Predeterminado: NA<br/>|Esta subred debe estar en una zona de disponibilidad diferente a la primera subred que eligió.|
|HostedZoneID | El ID que Amazon Route 53 asignó a la zona alojada cuando la creó.|Opcional<br/>Predeterminado: NA<br/>Cada zona hospedada corresponde a un nombre de dominio o, posiblemente, a un subdominio. La zona hospedada es el contenedor de los registros DNS, donde configura cómo interactúa el mundo con su dominio, como apuntarlo a una dirección IP con un registro.<br/>En la consola de AWS, vaya a **Route 53** &gt; **Zonas hospedadas**. Busque su nombre de dominio registrado y el ID de zona hospedada correspondiente.|
|DnsName| El nombre del dominio. En el caso de las zonas alojadas públicas, este es el nombre que registró con su registrador de DNS. |Opcional<br/>Predeterminado: NA<br/>Para obtener información sobre cómo especificar caracteres distintos de az, 0-9 y - (guion) y cómo especificar nombres de dominio internacionalizados, consulte [Crear zona alojada](https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHostedZone.html).|
|Private	|Especifica si el servicio se implementa en una red privada sin IP públicas.|Obligatorio<br/>Predeterminado: falso <br/>Asegúrese de seleccionar la opción `Habilitar asignación automática de direcciones IPv4 públicas` en la subred donde reside el administrador. Si no selecciona esta opción, la instalación puede fallar.|
|Session	|Especifica si puede utilizar AWS Session Manager para acceder a la instancia.|Obligatorio<br/>Predeterminado: falso |
|Vpc		|La red en la que desea implementar la instancia.|Obligatorio<br/>Predeterminado: NA|
|Subnet	|La subred en la que desea implementar la instancia.|Obligatorio<br/>Predeterminado: NA<br/>La subred debe residir en la zona de disponibilidad seleccionada.|
|KeyName		|El par de claves pública y privada que le permite conectarse de forma segura a su instancia después de que se inicie. Cuando crea una cuenta de AWS, este es el par de claves que crea en su región preferida.|Opcional<br/>Predeterminado: NA<br/>Deje este campo en blanco si no desea incluir las claves SSH.|
|AccessCIDR	|El rango de direcciones IP CIDR al que se le permite acceder a la instancia. |Opcional<br/>Valor predeterminado: NA<br/>Recomendamos configurar este valor en un rango de IP de confianza. Defina al menos una de las siguientes opciones: AccessCIDR, PrefixList o SecurityGroup para permitir el tráfico entrante, a menos que cree reglas de ingreso de grupos de seguridad personalizadas.|
|PrefixList	|La lista de prefijos que puede utilizar para comunicarse con la instancia. Es una colección de bloques CIDR que definen un conjunto de rangos de direcciones IP que requieren la misma implementación de políticas.|Opcional<br/>Valor predeterminado: NA<br/>Defina al menos uno de los siguientes: AccessCIDR, PrefixList o SecurityGroup para permitir el tráfico entrante, a menos que cree reglas de ingreso de grupos de seguridad personalizadas. Asegúrese de ingresar el nombre de la lista de prefijos, no el ID.|
|SecurityGroup	|El firewall virtual que controla el tráfico entrante y saliente a la instancia. |Opcional<br/>Valor predeterminado: NA<br/>Se implementa como un conjunto de reglas que especifican qué protocolos, puertos y direcciones IP o bloques CIDR tienen permitido acceder a la instancia. Defina al menos uno de AccessCIDR, PrefixList o SecurityGroup para permitir el tráfico entrante a menos que cree reglas de ingreso de grupos de seguridad personalizadas.|
|AIUnlimitedHttpPort		|El puerto para acceder a la interfaz de usuario de AI Unlimited.|Obligatorio con valor predeterminado<br/>Predeterminado: 3000|
|AIUnlimitedGrpcPort		|El puerto para acceder a la API de AI Unlimited.|Obligatorio con valor predeterminado<br/>Predeterminado: 3282|
|AIUnlimitedVersion		|La versión de AI Unlimited que desea implementar.|Obligatorio con valor predeterminado<br/>Predeterminado: último<br/>El valor es una etiqueta de versión del contenedor.|
|UsePersistentVolume|Especifica si desea utilizar un volumen persistente nuevo o existente para almacenar datos. Consulte *Más información: Uso de un volumen persistente* debajo de la sección de parámetros. |Opcional con valor predeterminado<br/>Predeterminado: Nuevo<br/>Las opciones admitidas son un nuevo volumen persistente o uno existente, según su caso de uso.|
|PersistentVolumeSize	|El tamaño del volumen persistente que conecta a la instancia, en GB.|Obligatorio con valor predeterminado<br/>Predeterminado: 20<br/>Admite valores entre 8 y 1000. |
|ExistingPersistentVolumeId		|El ID del volumen persistente existente que adjunta a la instancia. |Obligatorio si UsePersistentVolume está configurado como Existente.<br/>Predeterminado: NA<br/>El volumen persistente debe estar en la misma zona de disponibilidad que la instancia de AI Unlimited.|
|PersistentVolume<br/>DeletionPolicy		|El comportamiento del volumen persistente cuando se elimina la implementación de CloudFormation.|Obligatorio por defecto|Eliminar <br/>Predeterminado: Conservar <br/>Las opciones admitidas son: Eliminar, Conservar, RetainExceptOnCreate e Instantánea.|
|LatestAmiId	|El ID de la imagen que apunta a la última versión de AMI. Este valor se utiliza para la búsqueda de SSM.|Obligatorio con valor predeterminado<br/>Predeterminado: NA<br/>Esta implementación utiliza la última imagen ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2 disponible.<br/>**IMPORTANTE**: Cambiar este valor puede romper la pila.

</details>

<details>

<summary>Más información: Recomendaciones de tipo (tamaño) de instancia de administrador</summary>

Para la versión preliminar pública de pago de AI Unlimited, en función de la cantidad de operaciones de implementación y suspensión de motores simultáneas, recomendamos estos tipos de instancias t3. El rendimiento de los demás tipos de instancias disponibles puede variar.

| Tipo de instancia | Operaciones concurrentes |
|---------|-------------|
|t3.micro |1 |
|t3.small |hasta 5 |
|t3.medium |hasta 10 |
|t3.large |hasta 20 |
|t3.xlarge |más de 21 

La concurrencia aumentará cuando AI Unlimited se lance para disponibilidad general.

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

1. Implemente el administrador e incluya estos parámetros:
   - `UsePersistentVolume`: **Nuevo**
   - `PersistentVolumeDeletionPolicy`: **Conservar**
2. Después de crear la pila, en la pestaña **Salidas**, anote el `volume-id`.
3. Utilice AI Unlimited.
4. Si se pierde la instancia del administrador, vuelva a implementar el administrador e incluya estos parámetros:
   - `UsePersistentVolume`: **Nuevo**
   - `PersistentVolumeDeletionPolicy`: **Conservar** 
   - `ExistingPersistentVolumeId`: el valor que anotó en el paso 2
   
 La nueva instancia del administrador tiene la misma configuración que la que se perdió.

</details>


3. Seleccione **Siguiente**.
4. [Configure las opciones de pila](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-console-add-tags.html) según sus necesidades, luego seleccione **Siguiente**. 


## Revisar y crear la pila

1. Revise la configuración de la plantilla. 
2. Seleccione la casilla de verificación para reconocer que la plantilla creará recursos IAM. 
3. Seleccione **Enviar** para implementar la pila.<br />
En la pestaña **Eventos**, puede supervisar el progreso. Cuando el estado de todos los recursos sea `CREATE_COMPLETE`, el administrador estará listo. 

La pestaña **Salidas** muestra los valores generados para los recursos creados.

Necesitará la URL para acceder al administrador y configurar AI Unlimited.


## ¿Qué sigue?

[Cree una aplicación OAuth](../resources/create-oauth-app.md) para permitir la autenticación entre AI Unlimited y su cuenta de proveedor de Git.




---
id: deploy-jupyter-aws-console
title: Instalar JupyterLab en AWS
description: Aprenda a implementar JupyterLab usando una plantilla de CloudFormation.
sidebar_label: Instalar en AWS
sidebar_position: 1
pagination_prev: null
pagination_next: null
---

# Instalar JupyterLab en AWS

Utilizará una plantilla de CloudFormation proporcionada por Teradata para instalar JupyterLab y el kernel de AI Unlimited desde la AWS Management Console. 

Esto implementa una instancia de servidor, con JupyterLab ejecutándose en un contenedor controlado por [systemd](../../glossary.md#systemd).

:::tip
Para obtener ayuda con la instalación, envíe un correo electrónico al <a href="mailto:aiunlimited.support@Teradata.com">equipo de soporte</a> o pregunte a la [comunidad](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa).
:::

## Prepare su cuenta de AWS

- Trabaje con su administrador de la nube para asegurarse de tener los permisos [IAM](https://aws.amazon.com/iam/) para crear los recursos de la nube definidos en la [plantilla de JupyterLab](https://github.com/Teradata/ai-unlimited/tree/develop/deployments/aws/templates/jupyter).

- Si necesita acceder a la instancia de JupyterLab para ejecutar comandos o depurar, puede usar un [par de claves](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) para conectarse de forma segura mediante Secure Shell (SSH). Necesitará el par de claves cuando [especifique los detalles de la pila](#specify-stack-details-and-options).
  
- Si planea utilizar un [Application Load Balancer (ALB)](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancer-getting-started.html) o un [Network Load Balancer (NLB)](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancer-getting-started.html), asegúrese de tener permiso para administrar estos servicios de AWS:
	\- [AWS Certificate Manager](https://docs.aws.amazon.com/acm/)—para emitir un nuevo certificado para la ID de zona alojada en Route 53.
	\- [AWS Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html)—para configurar un nombre de dominio personalizado y enrutar consultas DNS a su equilibrador de carga.


## Clonar el repositorio

import MyPartial from '../../_partials/_clone-repo.mdx';

<MyPartial />


## Localizar la plantilla de Jupyter

Las plantillas de CloudFormation para JupyterLab están aquí en el repositorio de GitHub de AI Unlimited:

`deployments/aws/templates/jupyter`

Elija una plantilla en función de si desea utilizar un [equilibrador de carga](../../glossary.md#load-balancer) y de qué tipo.
:::note
Quizás quiera pedirle orientación a un administrador de la nube de su organización.
:::
    \- `jupyter-alb.yaml`—JupyterLab se encuentra detrás de un [equilibrador de carga de aplicaciones](../../glossary.md#application-load-balancer)
    \- `jupyter-with-nlb.yaml`—JupyterLab se encuentra detrás de un [equilibrador de carga de red](../../glossary.md#network-load-balancer)
    \- `jupyter-without-lb.yaml`—Sin equilibrador de carga


## Cargar la plantilla	

1. Inicie sesión en la [consola de AWS](https://aws.amazon.com).
   :::note
   Las referencias a AWS Management Console están actualizadas al 29 de mayo de 2024.
   :::
2. Seleccione la región en la que desea implementar JupyterLab.<br/>
   Le recomendamos seleccionar la región más cercana a su ubicación de trabajo principal.
3. Busque y vaya a **CloudFormation**.
4. Seleccione **Crear pila** y luego **Con nuevos recursos (estándar)**.
5. Seleccione **Elegir una plantilla existente** y **Subir un archivo de plantilla**.
6. Seleccione el archivo de plantilla que eligió usar y haga clic en **Siguiente**.


## Especificar detalles y opciones de la pila

1. Proporcione un nombre para la pila.
2. Revise los parámetros. Proporcione valores para los requeridos. Es posible que su organización requiera otros.

<details>

<summary>Parámetros de AWS y JupyterLab</summary>

| Parámetro | Descripción | Notas 
|---------|-------------|-----------|
| InstanceType | El tipo de instancia EC2 que desea utilizar para el servicio. | Obligatorio con valor predeterminado<br/>Predeterminado: t3.small<br/>Recomendamos utilizar el tipo de instancia predeterminado para ahorrar costes. |
| RootVolumeSize | El tamaño del disco raíz que desea adjuntar a la instancia, en GB. | Obligatorio con valor predeterminado<br/>Predeterminado: 8<br/>Admite valores entre 8 y 1000. |
| TerminationProtection | Habilitar la protección de terminación de instancia. | Obligatorio con valor predeterminado<br/>Valor predeterminado: falso |
|IamRole | Especifica si CloudFormation debe crear una nueva función de IAM o utilizar una existente. | Obligatorio con valor predeterminado<br/>Predeterminado: Nuevo<br/>Las opciones admitidas son: Nuevo o Existente |
|IamRoleName | El nombre del rol de IAM que se asignará a la instancia, ya sea un rol de IAM existente o un rol de IAM recién creado. | Opcional con valor predeterminado<br/>Valor predeterminado: ai-unlimited-iam-role<br/>Si se nombra un nuevo rol de IAM, CloudFormation requiere la capacidad CAPABILITY_NAMED_IAM. Déjelo en blanco para usar un nombre generado automáticamente. |
|IamPermissions<br/>Boundary | El ARN del límite de permisos de IAM para asociar con el rol de IAM asignado a la instancia.| Opcional<br/>Predeterminado: NA|
|AvailabilityZone | La zona de disponibilidad en la que desea implementar la instancia. | Obligatorio<br/>Predeterminado: NA<br/>El valor debe coincidir con la subred, la zona de cualquier volumen preexistente y el tipo de instancia debe estar disponible en la zona seleccionada. |
|LoadBalancing		|Especifica si se accede a la instancia a través de un NLB. | Obligatorio con valor predeterminado<br/>Predeterminado: NetworkLoadBalancer<br/>Las opciones admitidas son: NetworkLoadBalancer o Ninguno |
|LoadBalancerScheme	| Si se utiliza un equilibrador de carga, este campo especifica si la instancia es accesible desde Internet o solo desde dentro de la VPC. | Opcional con valor predeterminado<br/>Valor predeterminado: orientado a Internet<br/>El nombre DNS de un equilibrador de carga orientado a Internet se puede resolver públicamente en las direcciones IP públicas de los nodos. Por lo tanto, los equilibradores de carga orientados a Internet pueden enrutar solicitudes de clientes a través de Internet. Los nodos de un equilibrador de carga interno solo tienen direcciones IP privadas. El nombre DNS de un equilibrador de carga interno se puede resolver públicamente en las direcciones IP personales de los nodos. Por lo tanto, los equilibradores de carga internos pueden enrutar solicitudes de clientes con acceso a la VPC para el equilibrador de carga.|
|Private	|Especifica si el servicio se implementa en una red privada sin IP públicas.| Obligatorio<br/>Predeterminado: falso<br/>Asegúrese de seleccionar la opción `Habilitar asignación automática de direcciones IPv4 públicas` en la subred donde reside el administrador. Si no selecciona esta opción, la instalación puede fallar.|
|Session	|Especifica si puede utilizar AWS Session Manager para acceder a la instancia.| Obligatorio<br/>Predeterminado: falso |
|Vpc		|La red en la que desea implementar la instancia.|Obligatorio<br/>Predeterminado: NA|
|Subnet	|La subred en la que desea implementar la instancia. |Obligatorio<br/>Predeterminado: NA<br/>La subred debe residir en la zona de disponibilidad seleccionada.|
|KeyName		|El par de claves pública y privada que le permite conectarse de forma segura a su instancia después de que se inicie. Cuando crea una cuenta de AWS, este es el par de claves que crea en su región preferida.| Opcional<br/>Predeterminado: NA<br/>Deje este campo en blanco si no desea incluir las claves SSH.|
|AccessCIDR	|El rango de direcciones IP CIDR al que se le permite acceder a la instancia.| Opcional<br/>Valor predeterminado: NA<br/>Recomendamos configurar este valor en un rango de IP de confianza. Defina al menos una de las siguientes opciones: AccessCIDR, PrefixList o SecurityGroup para permitir el tráfico entrante, a menos que cree reglas de ingreso de grupos de seguridad personalizadas.|
|PrefixList			| La lista de prefijos que puede utilizar para comunicarse con la instancia. Es una colección de bloques CIDR que definen un conjunto de rangos de direcciones IP que requieren la misma implementación de políticas. | Opcional<br/>Predeterminado: NA<br/>Defina al menos uno de AccessCIDR, PrefixList o SecurityGroup para permitir el tráfico entrante a menos que cree reglas de ingreso al grupo de seguridad personalizadas.|
|SecurityGroup	|El firewall virtual que controla el tráfico entrante y saliente a la instancia.| Opcional<br/>Valor predeterminado: NA<br/>Se implementa como un conjunto de reglas que especifican qué protocolos, puertos y direcciones IP o bloques CIDR tienen permitido acceder a la instancia. Defina al menos uno de AccessCIDR, PrefixList o SecurityGroup para permitir el tráfico entrante a menos que cree reglas de ingreso de grupos de seguridad personalizadas.|
|UsePersistentVolume| Especifica si desea utilizar un volumen persistente nuevo o existente para almacenar datos. Consulte *Más información: Uso de un volumen persistente* debajo de la sección de parámetros. |Opcional con valor predeterminado<br/>Predeterminado: Nuevo<br/>Las opciones admitidas son un nuevo volumen persistente o uno existente, según su caso de uso.|
|PersistentVolumeSize	|El tamaño del volumen persistente que puede adjuntar a la instancia, en GB.|Obligatorio con valor predeterminado<br/>Predeterminado: 20<br/>Admite valores entre 8 y 1000|
|ExistingPersistent<br/>VolumeId		|El ID del volumen persistente existente que puede adjuntar a la instancia.| Obligatorio si UsePersistentVolume está configurado como Existente<br/>Predeterminado: NA<br/>El volumen persistente debe estar en la misma zona de disponibilidad que la instancia de AI Unlimited.|
|PersistentVolume<br/>DeletionPolicy		|El comportamiento del volumen persistente cuando se elimina la implementación de CloudFormation.| Obligatorio con valor predeterminado<br/>Valor predeterminado: Conservar<br/>Las opciones admitidas son: Eliminar, Retener, RetainExceptOnCreate e Instantánea.|
|LatestAmiId	|El ID de la imagen que apunta a la última versión de AMI. Este valor se utiliza para la búsqueda de SSM.|Obligatorio con valor predeterminado<br/>Predeterminado: NA<br/>Esta implementación utiliza la última imagen ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2 disponible.<br/>IMPORTANTE: Cambiar este valor puede romper la pila.|
| JupyterHttpPort | El puerto para acceder a la interfaz de usuario del servicio JupyterLab. | Obligatorio con valor predeterminado<br/>Valor predeterminado: 8888|
| JupyterVersion | La versión de JupyterLab que desea implementar. | Obligatorio con valor predeterminado<br/>Valor predeterminado: último<br/>El valor es una etiqueta de versión de contenedor, por ejemplo, último. |
| JupyterToken | El token o contraseña utilizado para acceder a JupyterLab desde la interfaz de usuario. | Obligatorio<br/>Predeterminado: NA<br/>El token debe comenzar con una letra y contener solo caracteres alfanuméricos. El patrón permitido es ^[a-zA-Z][a-zA-Z0-9-]*. |
</details>

<details>

<summary>Más información: Cómo usar un volumen persistente</summary>

La instancia de JupyterLab se ejecuta en un contenedor y guarda sus datos de configuración en una base de datos en el volumen raíz de la instancia. Estos datos se conservan si apaga, reinicia o crea una instantánea y vuelve a iniciar la instancia. 

Un volumen persistente almacena datos de una aplicación en contenedores más allá de la vida útil del contenedor, pod o nodo en el que se ejecuta. 

**Sin un volumen persistente**

Si el contenedor, el pod o el nodo fallan o finalizan, perderá los datos de configuración de JupyterLab. Puede implementar una nueva instancia de JupyterLab, pero no en el mismo estado que la que se perdió.

**Con un volumen persistente**

Si el contenedor, pod o nodo falla o finaliza, y los datos de configuración de JupyterLab se almacenan en un volumen persistente, puede implementar una nueva instancia de JupyterLab que tenga la misma configuración que la que se perdió.

**Ejemplo**

1. Implemente JupyterLab e incluya estos parámetros:
   - `UsePersistentVolume`: **Nuevo**
   - `PersistentVolumeDeletionPolicy`: **Conservar**
3. Después de crear la pila, en la pestaña **Salidas**, anote el `volume-id`.
4. Utilice JupyterLab.
5. Si se pierde la instancia de JupyterLab, implemente JupyterLab nuevamente e incluya estos parámetros:
   - `UsePersistentVolume`: **Nuevo**
   - `PersistentVolumeDeletionPolicy`: **Conservar** 
   - `ExistingPersistentVolumeId`: el valor que anotó en el paso 2
   
 La nueva instancia de JupyterLab tiene la misma configuración que la que se perdió.

</details>

3. Seleccione **Siguiente**.
4. [Configure las opciones de pila](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-console-add-tags.html) según sus requisitos, luego seleccione **Siguiente**. 


## Revisar y crear la pila

1. Revise la configuración de la plantilla. 
2. Seleccione la casilla de verificación para reconocer que la plantilla creará recursos IAM. 
3. Seleccione **Enviar** para implementar la pila.<br />
En la pestaña **Eventos**, puede supervisar el progreso. Cuando el estado de todos los recursos sea `CREATE_COMPLETE`, JupyterLab estará listo. 

La pestaña **Salidas** muestra la URL para acceder a JupyterLab.




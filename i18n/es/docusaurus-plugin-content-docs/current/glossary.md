---
id: glossary
title: Glosario
description: Terminología para la instalación y el uso de AI Unlimited.
sidebar_label: Glosario
sidebar_position: 7
pagination_prev: null
pagination_next: null
---

# Glosario


## A

### AI Unlimited manager

El administrador es el componente de AI Unlimited que organiza la implementación del [motor](#engine) de AI/ML en su [proveedor de servicios en la nube](#cloud-service-provider). También proporciona una interfaz de usuario basada en la web desde la cual el administrador de AI Unlimited configura AI Unlimited después de instalarlo y cambia la configuración más tarde según sea necesario. Desde el gerente, todos los usuarios obtienen su clave API.

### API key

Su clave de interfaz de programación de aplicaciones (API) le permite conectar su cuaderno Jupyter al administrador. Esto es lo primero que debe hacer en un cuaderno Jupyter nuevo antes de crear o acceder a un proyecto.

### application load balancer

Los equilibradores de carga distribuyen el tráfico entrante entre los servidores. Un equilibrador de carga de aplicaciones inspecciona el contenido del tráfico entrante, como los encabezados y las rutas HTTP, para tomar decisiones de enrutamiento. Puede utilizar un equilibrador de carga de aplicaciones como una forma de exponer al administrador de AI Unlimited y al motor a la red IP pública.


## C

### Classless Inter-domain Routing

Classless Inter-domain Routing (CIDR, enrutamiento entre dominios sin clases) es un método de asignación de direcciones IP para lograr una mayor eficiencia en el enrutamiento de datos en Internet. Cada ordenador que se conecta a Internet tiene un número único llamado dirección IP. Las direcciones IP permiten que los ordenadores se encuentren entre sí y se comuniquen. Un bloque CIDR es un rango de direcciones IP.

### cloud service provider

Un proveedor de servicios en la nube (CSP) es una empresa que ofrece recursos informáticos a través de Internet, bajo demanda. Estos recursos pueden incluir infraestructura como servicio (IaaS), plataforma como servicio (PaaS) o software como servicio (SaaS). El [Administrador de AI Unlimited](#ai-unlimited-manager) y el [motor](#engine) se ejecutan en su CSP.

### cluster

Un grupo de ordenadores interconectados (también llamados nodos) que funcionan juntos como un solo sistema para lograr mayor potencia de procesamiento, escalabilidad y confiabilidad. El motor de AI Unlimited se implementa en un clúster en su CSP. Cada nodo es una [máquina virtual (VM)](#virtual-machine).


## D

### data lake

Un repositorio central de datos para análisis de datos, aprendizaje automático y exploración de datos. Un data lake generalmente se construye sobre [almacenamiento de objetos](#object-storage) y está diseñado para que los datos sean accesibles para futuros análisis de datos.  


## E

### engine

En la computación en la nube, un motor de cómputo es un ejemplo de Infraestructura como servicio (IaaS). Le permite crear y ejecutar [máquinas virtuales (VM)](#virtual-machine) en la infraestructura de su proveedor de servicios en la nube. Cuando implementa el motor de cómputo AI/ML de AI Unlimited desde un cuaderno Jupyter, el [Administrador de AI Unlimited](#ai-unlimited-manager) aprovisiona máquinas virtuales.


## I

### IAM role

Un [rol de Identity and Access Management (IAM)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html) es un rol que usted o un administrador de la nube de su organización pueden crear en la cuenta de AWS de su organización. Tiene una o más políticas de permisos adjuntas que determinan lo que una entidad con ese rol puede y no puede hacer en AWS.


## K

### kernel

Un kernel Jupyter es un programa específico del lenguaje que procesa el código que usted escribe en un cuaderno Jupyter y comunica los resultados a su cuaderno para que usted los vea. 


## L

### load balancer 

Un equilibrador de carga distribuye el tráfico entrante de manera uniforme entre los servidores, lo que mejora el rendimiento, la confiabilidad y la escalabilidad. Si su organización no permite que sus recursos utilicen direcciones IP públicas, puede usar un equilibrador de carga para exponer al administrador de AI Unlimited y al motor a la red IP pública. 


## M

### mounting volumes 

Un concepto en plataformas de contenedores como Docker. Puede asignar un directorio en la máquina que ejecuta los contenedores (el host) a un directorio en un contenedor para compartir datos y archivos entre el host y el contenedor.


## N

### network load balancer

Los equilibradores de carga distribuyen el tráfico entrante entre los servidores. Un equilibrador de carga de red no inspecciona el contenido del tráfico. Basa las decisiones de enrutamiento en factores como los puertos y las direcciones IP. Puede utilizar un equilibrador de carga de red como una forma de exponer AI Unlimited y su motor a la red IP pública.


## O

### OAuth app

Una aplicación OAuth permite a un usuario otorgar acceso a su cuenta en un sitio web o servicio a otro, sin compartir su contraseña. 

Una aplicación OAuth, que usted o alguien de su organización crea, permite que AI Unlimited use la autenticación de GitHub o GitLab para administrar cada [repositorio de proyectos](#project-repository) y, cada vez que se implementa el motor, derivar los usuarios del motor de los colaboradores que se han agregado al repositorio.

### object storage
Una forma escalable y altamente efectiva de almacenar grandes cantidades de datos estructurados, semiestructurados o no estructurados en la nube. Amazon S3 es un almacenamiento de objetos en AWS. Azure Blob Storage es un almacenamiento de objetos en Azure. El almacenamiento de objetos es la base de un [data lake](#data-lake).


## P

### project

Un proyecto es un medio para explorar y analizar datos de un cuaderno Jupyter. Cada proyecto tiene un repositorio en su cuenta de GitHub o GitLab.

### project repository

El propietario del proyecto (el usuario que lo creó) agrega colaboradores del proyecto al repositorio Git. Desde allí, cada vez que se implementa el motor, AI Unlimited obtiene los usuarios autorizados para conectarse y utilizar el motor. 

Sin embargo, si el motor ya está implementado, el propietario del proyecto debe actualizarlo para agregar esos usuarios para que puedan conectarse y usarlo durante esa implementación.

:::note
Cada vez que se implementa el motor, se genera una nueva contraseña para cada usuario del proyecto.
:::

Cada vez que usted u otro usuario suspenden un proyecto, se realiza una copia de seguridad de su esquema en el repositorio. AI Unlimited utiliza el esquema almacenado para recuperar el proyecto cuando se restaura.


## S

### systemd

Software básico de Linux para la gestión de sistemas y servicios. El administrador de AI Unlimited se ejecuta en una instancia de servidor en un contenedor controlado por systemd.


## T

### Transport Layer Security

Transport Layer Security (TLS) es un protocolo que crea una conexión segura entre dos partes que se comunican a través de Internet. TLS cifra los datos durante la transmisión, haciéndolos ilegibles para cualquier persona que los intercepte, y verifica las identidades de ambas partes. 


## V

### virtual machine
Una máquina virtual (VM) es una emulación de software de un ordenador físico. Cada VM funciona como su propio ordenador dentro de la infraestructura de un [proveedor de servicios en la nube](#cloud-service-provider). Las máquinas virtuales permiten escalabilidad, flexibilidad, una administración más sencilla y un modelo de pago por uso.
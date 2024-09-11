---
id: faq
title: FAQ
description: Encuentre respuestas a sus preguntas sobre AI Unlimited aquí.
sidebar_label: FAQ
sidebar_position: 6
pagination_prev: null
pagination_next: null
---

# FAQ


## General

### ¿Qué proveedores de servicios en la nube (CSP) admite AI Unlimited?
Actualmente, AWS y Azure.

### ¿Qué funciones de análisis puedo utilizar?
Funciones de [ClearScape Analytics™](https://docs.teradata.com/access/sources/dita/topic?dita:mapPath=phg1621910019905.ditamap&dita:ditavalPath=pny1626732985837.ditaval&dita:topicPath=gma1702668333653.dita). Consulte las [notas de la versión](./whats-new/release-notes.md) para ver las funciones que no son compatibles actualmente.

### ¿Cómo pago AI Unlimited?
Paga a su proveedor de servicios en la nube por las horas en que se ejecutan los recursos del motor de IA/ML. Los cargos dependen del tamaño de la instancia y de la cantidad de instancias.

### Si obtengo errores o tengo problemas que no puedo resolver, ¿qué debo hacer?
Envíe un correo electrónico al <a href="mailto:aiunlimited.support@Teradata.com">equipo de soporte</a>. Además, la [Comunidad de AI Unlimited](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa) está lista para ayudarlo. Vaya allí para hacer preguntas, obtener consejos para la resolución de problemas y compartir ideas.


## Proyectos

### ¿Qué es un proyecto?
Un proyecto es un medio para explorar y analizar datos de un cuaderno Jupyter. Cada proyecto tiene un repositorio en su cuenta de GitHub o GitLab.

### ¿Cómo uso un proyecto?
En un cuaderno Jupyter, crea un proyecto, que crea automáticamente su repositorio Git. Luego, autoriza el acceso a su almacén de datos, implementa el motor de IA/ML del proyecto y ejecuta cargas de trabajo analíticas. Puede suspender el proyecto (y el motor) en cualquier momento y luego restaurarlo para pagar solo por las horas que necesite.

### ¿Para qué sirve mi clave API?
Utilice su clave API para conectar su cuaderno Jupyter al administrador de AI Unlimited. Esto es lo primero que hace cuando abre un cuaderno nuevo para crear o acceder a un proyecto.

### ¿Qué hay en el repositorio de un proyecto?
El propietario del proyecto (el usuario que lo creó) agrega colaboradores del proyecto al repositorio Git. Desde allí, cada vez que se implementa el motor, AI Unlimited obtiene los usuarios autorizados para conectarse y utilizar el motor. 

Sin embargo, si el motor ya está implementado, el propietario del proyecto debe actualizarlo para agregar esos usuarios para que puedan conectarse y usarlo durante esa implementación.

:::note
Cada vez que se implementa el motor, se genera una nueva contraseña para cada usuario del proyecto.
:::

Cada vez que usted u otro usuario suspenden un proyecto, se realiza una copia de seguridad de su esquema en el repositorio. AI Unlimited utiliza el esquema almacenado para recuperar el proyecto cuando se restaura.


## Usuarios

### ¿Cuáles son los tipos de usuarios de AI Unlimited?
Administradores, propietarios de proyectos y colaboradores:
- El administrador es el usuario que configura AI Unlimited para su organización. 
- El usuario que crea un proyecto es el propietario del proyecto. 
- Los usuarios adicionales de un proyecto son colaboradores.

### Soy administrador. Después de la configuración inicial, ¿puedo volver atrás y cambiar la configuración?
Sí, vuelva a iniciar sesión en la configuración y realice los cambios necesarios.


### ¿Puede un administrador agregar otros administradores?
No, AI Unlimited admite un solo administrador.

### Soy el propietario de un proyecto. ¿Cómo agrego colaboradores a un proyecto?
Primero, agréguelos al repositorio Git del proyecto. 

Si hace esto antes de implementar el motor, cuando lo implemente, los nuevos colaboradores se agregarán automáticamente. 

Si agrega colaboradores al repositorio después de implementar el motor, deberá agregarlos al motor manualmente para que puedan conectarse y usarlo durante esa implementación.


## Suspensión y restauración 

### ¿Qué pasa cuando suspendo un proyecto?
Se guarda toda la información del proyecto, incluidas las autorizaciones de usuarios y de almacenamiento de objetos y los objetos de datos.

### ¿Qué sucede cuando restauro un proyecto?
La información del proyecto guardado está ahí. Puede retomarlo justo donde lo dejó.


## El administrador

### ¿Qué es el administrador?
El administrador es el componente de AI Unlimited que organiza la implementación del motor de AI/ML en su proveedor de servicios en la nube. 

También proporciona una interfaz de usuario basada en web desde la cual el administrador de AI Unlimited configura AI Unlimited después de instalarlo y cambia la configuración más tarde según sea necesario. 

Desde su perfil de usuario en el administrador, todos los usuarios obtienen su clave API para conectar un cuaderno Jupyter al administrador.

:::tip
¿No ve su pregunta? Hágala en la [comunidad](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa)
:::




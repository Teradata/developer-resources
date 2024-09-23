---
id: setup-ai-unlimited
title: Configurar AI Unlimited
description: Conozca los detalles de configuración.
sidebar_label: Configurar AI Unlimited
sidebar_position: 3
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configurar AI Unlimited

Después de instalar el [administrador](../glossary.md#ai-unlimited-manager), acceda a la configuración de AI Unlimited utilizando la URL que recibió al final del proceso de instalación: `http://[ip_or_hostname]:[port]`. 

:::note
Al configurar AI Unlimited, usted se convierte en el administrador de AI Unlimited en su organización.
:::

:::tip
Para obtener ayuda con la configuración, envíe un correo electrónico al <a href="mailto:aiunlimited.support@Teradata.com">equipo de soporte</a> o pregunte a la [comunidad](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa).
:::

<a id="setup-fields"></a>	
## Complete los campos

Encuentre información sobre cada grupo de campos aquí.

<details>

<summary>Configuración básica</summary>

<br />

**URL base de AI Unlimited**: la URL que usó para acceder a la configuración. La recibió cuando instaló el administrador.


**Proveedor de Git**: GitHub o GitLab.

**Nivel de registro de AI Unlimited**: el nivel de detalle que se verá en los registros de AI Unlimited.

**Tipo de red IP del motor**

Seleccione **Privado** si implementa el motor en la misma nube privada virtual que AI Unlimited.

**Público** o **Privado** se refiere a cómo AI Unlimited debe comunicarse con el motor. El motor puede tener una dirección IP pública, una dirección IP privada o ambas. Indique el tipo de dirección IP a la que AI Unlimited debe conectarse.

**Usar TLS**

Le recomendamos que utilice [Seguridad de la capa de transporte (TLS)](../glossary.md#transport-layer-security) para proteger las conexiones a AI Unlimited y salvaguardar sus datos en tránsito.

- Si está utilizando un [Application Load Balancer (ALB)](../glossary.md#application-load-balancer), con la terminación de certificación habilitada, seleccione **Falso**.

- Si está utilizando un [Network Load Balancer (NLB)](../glossary.md#network-load-balancer) o ningún equilibrador de carga, seleccione **Verdadero.**
..
	- **Certificado TLS de AI Unlimited** y **Clave del certificado TLS de AI Unlimited**: si tiene un certificado emitido por una autoridad de certificación (CA) de confianza, puede proporcionarlo junto con su clave. Será responsable de administrar el ciclo de vida del certificado, incluida la renovación y la validación. Si tiene requisitos específicos o necesita más control sobre sus certificados, traer el suyo propio es una buena opción.

	- O seleccione **Generar certificados** para utilizar un certificado generado por el sistema Teradata. Se renueva automáticamente antes de que caduque.

Seleccione **Actualizar**.

</details>


<details>

<summary>Integración en la nube</summary>
<br />
Algunos de estos campos son para valores predeterminados. Más adelante, cuando implemente el motor desde un cuaderno de Jupyter, puede especificar valores distintos de los predeterminados para esa implementación.

<Tabs>
<TabItem value="aws1" label="AWS">
<br />
**Región predeterminada**: la región de AWS en la que se implementará el motor. Recomendamos elegir la región más cercana a su data lake.

**Subred predeterminada**: la [subred de AWS](https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html) en la que se implementará el motor. La consola de AWS muestra las subredes de la región.

**Rol de IAM predeterminado**

- El rol [de IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create.html) para el motor. Déjelo en blanco para permitir que AI Unlimited cree el rol, si su seguridad lo permite. De lo contrario, cree un rol usando esta política: [ai-unlimited-engine.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json).
- Si AI Unlimited crea el rol, lo crea para el [clúster](../glossary.md#cluster) de AWS que implementa el motor cada vez que implementa el motor. Si su organización crea el rol, debe adaptarse a cualquier clúster que pueda implementar el motor.
		
**Etiquetas de recursos**: puede [etiquetar](https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html) los recursos de AWS que implementan el motor para que sea más fácil administrarlos.

**Seguridad entrante**

Utilice estos campos para permitir que el tráfico de origen llegue al motor:
- **CIDR [predeterminados](../glossary.md#classless-inter-domain-routing)**
- **ID [de grupo de seguridad](https://docs.aws.amazon.com/vpc/latest/userguide/working-with-security-groups.html) predeterminados**: si implementa el motor en la misma nube privada virtual que AI Unlimited, incluya el grupo de seguridad de AI Unlimited en este campo para garantizar que AI Unlimited pueda comunicarse con el motor.
- **Nombres de [lista de prefijos](https://docs.aws.amazon.com/vpc/latest/userguide/managed-prefix-lists.html) predeterminados**

**Prefijo del rol**: si AI Unlimited crea el rol, este prefijo se agrega al nombre del rol.

**[ARN de](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html) límite de permisos**: si sus entidades IAM requieren un límite, puede proporcionarlo aquí.   

Seleccione **Actualizar**.

</TabItem>

<TabItem value="azure" label="Azure"> 

<br />

**Región predeterminada**: la región de Azure en la que se implementará el motor. Recomendamos elegir la región más cercana a su data lake.

Obtenga más información sobre [Azure virtual networks](https://learn.microsoft.com/en-us/azure/virtual-network/concepts-and-best-practices).


**Grupo de recursos de red predeterminado**: el grupo de recursos que contiene la red.

**Red predeterminada**: la red en la que se implementará el motor.

**Subred predeterminada**: la subred en la que se implementará el motor.

**Almacén de claves predeterminado**: el almacén de claves, utilizado por el motor, en el que se puede almacenar de forma segura información confidencial, como contraseñas.

**Grupo de recursos del almacén de claves predeterminado**: el grupo de recursos que contiene el almacén de claves.

**Seguridad entrante**

Utilice estos campos para permitir que el tráfico de origen llegue al motor:

- **CIDR [predeterminados](../glossary.md#classless-inter-domain-routing)**
 
- **Nombres de [grupo de seguridad](https://learn.microsoft.com/en-us/azure/virtual-network/application-security-groups) predeterminados**: si implementa el motor en la misma nube privada virtual que AI Unlimited, incluya el grupo de seguridad de la aplicación AI Unlimited en este campo para garantizar que AI Unlimited pueda comunicarse con el motor.

**Etiquetas de recursos**: puede [etiquetar](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources) los recursos de Azure que implementan el motor para que sea más fácil administrarlos.

Seleccione **Actualizar**.

</TabItem>
</Tabs>

</details>


<details>

<summary>Integración de Git</summary>

<Tabs>

<TabItem value="github" label="GitHub">

<br />

**URL de devolución de llamada de GitHub**: después de autenticar a un usuario, GitHub utiliza esta URL para redirigirlo al administrador. Esta URL se proporcionó a la aplicación OAuth [cuando se creó](../resources/create-oauth-app.md).

**URL base de GitHub**: la URL de su instancia de GitHub.

**ID de cliente de GitHub** y **secreto de cliente de GitHub**: las credenciales recibidas de GitHub cuando se creó su [aplicación OAuth](../resources/create-oauth-app.md).

**Acceso de organización**

Dos organizaciones en su cuenta de GitHub pueden ayudarle con el control de acceso y la gestión del repositorio:

- Los miembros de la **organización que autoriza** pueden iniciar sesión y autenticarse en AI Unlimited. Si no especifica una organización, cualquier usuario de cuenta de GitHub puede iniciar sesión y autenticarse.

- Los repositorios de proyectos se crean en la **Organización del repositorio**. Si no especifica una organización, los proyectos estarán en su espacio personal de GitHub.

Seleccione **Actualizar**.

Seleccione **Iniciar sesión**. Luego, inicie sesión (si se le solicita) y autentíquese.

</TabItem>

<TabItem value="gitlab" label="GitLab">

<br />

**URL de devolución de llamada de GitLab**: después de autenticar a un usuario, GitLab utiliza esta URL para redirigirlo al administrador. Esta URL se proporcionó a la aplicación OAuth [cuando se creó](../resources/create-oauth-app.md).

**URL base de GitLab**: la URL de su instancia de GitLab.

**ID de cliente de GitLab** y **secreto de cliente de GitLab**: las credenciales recibidas de GitLab cuando se creó su [aplicación OAuth](../resources/create-oauth-app.md).

**Acceso de grupo**

Hay dos grupos en su cuenta de GitLab que pueden ayudarle con el control de acceso y la gestión del repositorio:

- Los miembros del **grupo autorizador** pueden iniciar sesión y autenticarse en AI Unlimited. Si no especifica un grupo, cualquier usuario de cuenta de GitLab puede iniciar sesión y autenticarse.

- Todos los repositorios de proyectos se crean en el **grupo de repositorio**. Si no especifica un grupo, los proyectos se ubicarán en su espacio personal de GitLab.

Seleccione **Actualizar**.

Seleccione **Iniciar sesión**. Luego, inicie sesión (si se le solicita) y autentíquese.

</TabItem>
</Tabs>

</details>


## Antes de salir

1. En su **Perfil**, copie su clave API.
    Lo usará cuando se conecte al motor desde un cuaderno Jupyter.

2. Si habilitó TLS, seleccione **Reiniciar**. Esto reinicia el servicio AI Unlimited con TLS activado.

¡Felicitaciones! La configuración de AI Unlimited se ha completado.


:::note
Como usted es el administrador de AI Unlimited, puede regresar a la configuración en cualquier momento para [cambiar cualquier ajuste](../manage-ai-unlimited/change-settings.md). 
:::


## ¿Qué sigue?

En un cuaderno Jupyter, empiece a [explorar y analizar datos](../explore-and-analyze-data/index.md).


---
id: aws-account-requirements
title: Requisitos de la cuenta de AWS
description: Cómo preparar su cuenta de AWS para la instalación de AI Unlimited
sidebar_label: Requisitos de la cuenta de AWS
sidebar_position: 1
pagination_prev: null
pagination_next: null
---

# Requisitos de la cuenta de AWS

Primero, asegúrese de cumplir los [requisitos previos](../install-ai-unlimited/index.md#prerequisites). 

Luego, antes de instalar AI Unlimited, aborde estos elementos de AWS.


## Prepare su cuenta de AWS

- Trabaje con su administrador de la nube para asegurarse de tener los permisos de [IAM](https://aws.amazon.com/iam/) para crear los recursos de la nube definidos en la [plantilla de AI Unlimited](https://github.com/Teradata/ai-unlimited/tree/develop/deployments/aws/templates/ai-unlimited).

- Si necesita acceder a la instancia del administrador para ejecutar comandos o depurar, puede conectarse a ella de una de estas maneras:
	\- Utilice un [par de claves](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) para conectarse de forma segura mediante Secure Shell (SSH). Necesitará el par de claves cuando [especifique los detalles de la pila](../install-ai-unlimited/prod-aws-console-deploy-ai-unlimited.md#specify-stack-details-and-options).
	\- Utilice AWS Session Manager para conectarse. Para habilitarlo, adjunte la política [session-manager.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/session-manager.json) a un [rol que usted proporcione](#provide-roles-created-by-your-organization) al administrador.
  
- Si planea utilizar un [Application Load Balancer (ALB)](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancer-getting-started.html) o un [Network Load Balancer (NLB)](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancer-getting-started.html), asegúrese de tener permiso para administrar estos servicios de AWS:
	\- [AWS Certificate Manager](https://docs.aws.amazon.com/acm/)—para emitir un nuevo certificado para la ID de zona alojada en Route 53.
	\- [AWS Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html)—para configurar un nombre de dominio personalizado y enrutar consultas DNS a su equilibrador de carga.


## Permitir que AI Unlimited cree roles

El administrador necesita un rol que le permita implementar el motor. El motor necesita un rol que permita que los nodos del motor se comuniquen. Puede permitir que AI Unlimited cree ambos roles.

:::note
Si su seguridad no permite que AI Unlimited cree roles, [cree los roles](#provide-roles-created-by-your-organization) usted mismo o con la ayuda de su administrador de la nube.
::: 

### Rol para el administrador

Para permitir que AI Unlimited cree este rol para usted, cuando [especifique los detalles de la pila](../install-ai-unlimited/prod-aws-console-deploy-ai-unlimited.md#specify-stack-details-and-options), proporcione estos valores para estos parámetros:
    \- `IamRole`: **Nuevo**
    \- `IamRoleName`: dejar en blanco

### Rol para el motor

AI Unlimited puede crear un nuevo rol para el motor cada vez que se implementa el motor. 

Las políticas específicas del motor que crea AI Unlimited están restringidas de esta manera:	
  
  ```bash
  "Resource": ["arn:aws:secretsmanager:`REGION`:`ACCOUNT_ID`:secret:compute-engine/`CLUSTER_NAME`/`SECRET_NAME`"]
  ```

Para permitir que AI Unlimited cree un nuevo rol cada vez que se implemente el motor, cuando configure la [integración en la nube](../install-ai-unlimited/setup-ai-unlimited.md) en la configuración de AI Unlimited, deje el campo **Rol de IAM predeterminado** en blanco.


## Proporcionar roles creados por su organización

Si su seguridad no permite que AI Unlimited cree roles, proporcione roles creados por su organización.

La carpeta `deployments` en el [repositorio de GitHub de AI Unlimited](https://github.com/Teradata/ai-unlimited) proporcionada por Teradata incluye ejemplos de políticas para los roles de administrador y motor.

Abra una ventana de terminal y clone el repositorio.

``` bash
git clone https://github.com/Teradata/ai-unlimited
```

O utilice los enlaces proporcionados en las secciones que siguen para descargar lo que necesite.


### Rol para el administrador

- Si tiene permisos para crear recursos de IAM, cree el rol:
  - Adjunte una política que incluya el JSON que se ajuste a sus necesidades. Vea los ejemplos de JSON que aparecen a continuación.
  - Cuando [especifique los detalles de la pila](../install-ai-unlimited/prod-aws-console-deploy-ai-unlimited.md#specify-stack-details-and-options), utilice estos valores de parámetros:
    - `IamRole`: **Nuevo**
	 \- `IamRoleName`: el nombre del nuevo rol
- Si no tiene permisos para crear recursos de IAM, trabaje con su administrador de la nube para usar un rol existente:
  - Adjunte una política que incluya el JSON que se ajuste a sus necesidades. Vea los ejemplos de JSON que aparecen a continuación.
  - Cuando [especifique los detalles de la pila](../install-ai-unlimited/prod-aws-console-deploy-ai-unlimited.md#specify-stack-details-and-options), utilice estos valores de parámetros:
  - `IamRole`: **Existente**
  - `IamRoleName`: el nombre del rol existente
  
#### Muestras de JSON

Utilice estos ejemplos, según sea necesario, en una política vinculada al rol del administrador:

- Permita que AI Unlimited cree la función de motor. Incluya [ai-unlimited-workspaces.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces.json). Incluye permisos para crear instancias de motor y otorga permisos a AI Unlimited para crear políticas y funciones específicas del clúster.

- Si su seguridad no permite que AI Unlimited cree roles, incluya [ai-unlimited-without-iam-role-permissions.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces-without-iam-role-permissions.json). Incluye permisos para crear instancias de motor, pero no los necesarios para que AI Unlimited cree roles y políticas específicos del clúster. 

  :::note
  Si utiliza [ai-unlimited-without-iam-role-permissions.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces-without-iam-role-permissions.json) para el rol del administrador, utilice [ai-unlimited-engine.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json) para el rol del motor.
  :::

- Opcionalmente, incluya [session-manager.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/session-manager.json): incluye permisos para que el motor interactúe con el [AWS Session Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html). Use esto si planea usar Session Manager para conectarse al motor y administrarlo de cerca.


### Rol para el motor

- Al rol que proporcione para el motor, adjunte una política que incluya [ai-unlimited-engine.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json). Esto permite que AI Unlimited transfiera el rol al clúster cada vez que se implementa el motor. 

- Agregue los detalles de su cuenta a la política. No se puede predecir el nombre del clúster, por lo que se debe utilizar un comodín.

  ``` bash
  "arn:aws:secretsmanager:`REGION`:`ACCOUNT_ID`:secret:compute-engine/*"
  or
  "arn:aws:secretsmanager:`REGION`:111111111111:secret:compute-engine/*"
  or
  "arn:aws:secretsmanager:us-west-2:111111111111:secret:compute-engine/*"
  
  ```
  
:::note
Si utiliza [ai-unlimited-engine.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json) para el rol del motor, utilice [ai-unlimited-without-iam-role-permissions.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces-without-iam-role-permissions.json) para el rol del administrador.
:::

- Cuando configure la [integración en la nube](../install-ai-unlimited/setup-ai-unlimited.md) en la configuración de AI Unlimited, coloque el nombre del rol en el campo **Rol de IAM predeterminado**.








---
id: collaborate-project
title: Colabore en un proyecto
description: Aprenda cómo acceder a un proyecto como colaborador
sidebar_position: 3
sidebar_label: Colaborar en un proyecto
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Colaborar en un proyecto

Un proyecto es un medio para explorar y analizar datos de un cuaderno Jupyter. 

:::note
Cada proyecto tiene un repositorio Git. [Descubra por qué](../glossary.md#project-repository).
:::

El propietario de un proyecto puede [agregarle a un proyecto](../manage-ai-unlimited/add-collaborators.md) como colaborador. Para contribuir, deberá acceder al proyecto desde un cuaderno Jupyter.


## Antes de empezar

- Del propietario del proyecto, obtenga estos elementos:
  - La dirección IP o el nombre de host del [Administrador de AI Unlimited](../glossary.md#ai-unlimited-manager)
  - El nombre del proyecto

- Desde su perfil, [obtenga su clave API](./get-api-key.md). 

:::tip
Ejecute `%help` para obtener detalles sobre todos los comandos mágicos disponibles en su cuaderno. Ejecute `%help <command>` para obtener detalles sobre uno de ellos. 

O infórmese sobre los [comandos mágicos](./magic-commands.md) específicos de AI Unlimited. 
:::


## Acceder al proyecto

1. Conéctese a JupyterLab, abra un cuaderno y seleccione el kernel de AI Unlimited.

2. Conéctese con el administrador.
    ```bash 
    %workspaces_config host=<ip_or_hostname>, apikey=<API_Key>, withtls=<T|F>
    ```

3. Descubra si el motor está implementado.
    ```bash 
    %project_engine_list project=<Project_Name>
    ```

4. Si el motor no está implementado, impleméntelo y restaure el proyecto. 

   El tamaño puede ser pequeño, mediano, grande o extragrande. El tamaño predeterminado es pequeño. Consulte la información de precios de [AWS](http://aws.amazon.com/marketplace/pp/prodview-2srvuo3mwqlig) o de [Azure](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/teradata.ai-unlimited?tab=Overview).
   
   Si no especifica la cantidad de nodos, se implementará un nodo. El valor predeterminado para la restauración es verdadero.
   
   <Tabs>
   <TabItem value="aws1" label="AWS">

   ```bash 
   %project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore=<true|false>, prefixlist=<Prefix_List>, securitygroups=<Security_Group>, cidrs=<CIDR>, tags=<Tags>, iamrole=<IAM_Role>, roleprefix=<Role_Prefix>, permissionboundary=<Permission_Boundary>
   ```

   </TabItem>
   <TabItem value="azure" label="Azure">

   ```bash 
   %project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore=<true|false>, network=<Network>, keyvault=<Key_Vault>, keyvaultresourcegroup=<Key_Vault_Resource_Group>, networkresourcegroup=<Network_Resource_Group>
   ```
   </TabItem>
   </Tabs>

5. Obtenga su contraseña para el motor.
   ```bash
   %project_user_list project=<Project_Name>
   ```

6. Actualice la conexión para incluir su cuaderno.
   ```bash 
   %project_connection_add project=<Project_Name>
   ```

7. Conéctese al proyecto.
   ```bash
   %connect <Project_Name>
   ```
   Cuando se realice la conexión, proporcione su contraseña.
   
¡Ya está todo listo! Ahora puede contribuir al proyecto.



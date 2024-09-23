---
id: suspend-and-restore-project
title: Suspender y restaurar un proyecto
description: Cómo suspender y restaurar proyectos para gestionar costes.
sidebar_position: 2
sidebar_label: Suspender y restaurar un proyecto
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Suspender y restaurar un proyecto

Puede suspender y restaurar un proyecto según sea necesario.


## Suspender

Para evitar incurrir en cargos por recursos del motor innecesarios, suspenda los proyectos en los que no esté trabajando.

Se guardan las autorizaciones de usuario, las autorizaciones del almacén de objetos y los objetos de datos. Cuando restaure y vuelva a implementar el proyecto, podrá retomarlo desde donde lo dejó.

En su cuaderno, ejecute este comando mágico:

```bash 
%project_engine_suspend <Project_Name>
```


## Restaurar (reimplementar)

En su cuaderno, ejecute este comando mágico: 

<Tabs>
<TabItem value="aws1" label="AWS">

```bash 
%project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore-<true|false>, prefixlist=<Prefix_List>, securitygroups=<Security_Group>, cidrs=<CIDR>, tags=<Tags>, iamrole=<IAM_Role>, roleprefix=<Role_Prefix>, permissionboundary=<Permission_Boundary>
```
</TabItem>
<TabItem value="azure" label="Azure">

```bash 
%project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore=<true|false>, network=<Network>, keyvault=<Key_Vault>, keyvaultresourcegroup=<Key_Vault_Resource_Group>, networkresourcegroup=<Network_Resource_Group>
```
</TabItem>
</Tabs>

Si no especifica el número de nodos, se implementará un solo nodo. 

Para el parámetro de restauración, deje el valor predeterminado, verdadero. Esto restaura el proyecto al estado de la última confirmación de Git.

Cada vez que se implementa el motor, se genera una nueva contraseña para conectarse al motor para cada usuario.

:::tip
Obtenga más información sobre los [comandos mágicos](../explore-and-analyze-data/magic-commands.md) de AI Unlimited.
:::


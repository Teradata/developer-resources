---
id: magic-commands
title: Comandos mágicos
description: Obtenga información sobre los comandos mágicos de AI Unlimited, que puede usar en un cuaderno Jupyter para administrar proyectos.
sidebar_label: Comandos mágicos
sidebar_position: 5
pagination_prev: null
pagination_next: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Comandos mágicos

En los cuadernos Jupyter, los comandos mágicos son atajos para tareas comunes. Los comandos mágicos de AI Unlimited le permiten conectarse al motor y administrar proyectos.

El AI Unlimited Jupyter Kernel admite los comandos mágicos que se describen aquí, además de los comandos mágicos del kernel SQL de Teradata estándar. 


## %workspaces_config

**Descripción**: establezca la comunicación entre su cuaderno y el administrador de AI Unlimited.

**Uso**:
```bash 
%workspaces_config host=<ip_or_hostname>, apikey=<API_Key>, withtls=<T|F>
```
Donde:

- host: nombre o dirección IP del administrador de AI Unlimited.

- apikey: valor de la clave API de la página **Perfil** de configuración de AI Unlimited.

- **`[Opcional]`** con TLS: si es falso (F), la comunicación cliente-servidor predeterminada no utiliza TLS.

**Salida**:
```
Workspace configured for host=<ip_or_hostname>
```

## %project_create

**Descripción**: cree un nuevo proyecto. Este comando también crea un nuevo repositorio con el nombre del proyecto en su cuenta de Git. Las configuraciones se almacenan en el archivo **engine.yml**.

**Uso**:
```bash
%project_create project=<Project_Name>, env=<Cloud_Service_Provider>, team=<Project_Team>
```
Donde:

- proyecto: nombre del proyecto que se va a crear.

- env: entorno de nube donde se aloja el proyecto. En la versión actual, se admiten AWS y Azure.

- **`[Opcional]`** equipo: nombre del equipo que colabora en el proyecto.

**Salida**:
```
Project `Project_Name` created
```

## %project_delete

**Descripción**: elimine el proyecto. Esto no elimina el repositorio del proyecto, sino los metadatos del proyecto del administrador. 

**Uso**:
```bash 
%project_delete project=<Project_Name>, team=<Project_Team>
```

Donde:

- proyecto: nombre del proyecto que se va a eliminar.

- **`[Opcional]`** equipo: nombre del equipo que colabora en el proyecto.

**Salida**:
```
Project `Project_Name` deleted
```

## %project_list

**Descripción**: enumere los detalles de un proyecto o de todos los proyectos.

Utilice el parámetro de proyecto para obtener los detalles de un proyecto específico. Si ejecuta el comando sin ningún parámetro, se enumeran todos los proyectos.

**Uso**:
```bash
%project_list project=<Project_Name>
```
Donde:

- proyecto: el nombre del proyecto.

**Salida**:

```
| NAME          | URL      | 
|---------------|----------|
| <Project_Name>| <Git_URL>| 

```

## %project_auth_create

**Descripción**: cree un objeto de autorización para almacenar las credenciales del almacén de objetos.

Debe crear el objeto de autorización antes de implementar el motor. Los detalles de la autorización se conservan y se incluyen al volver a implementar el proyecto. Opcionalmente, puede crear autorizaciones manualmente mediante el comando SQL `CREATE AUTHORIZATION` después de implementar el motor. En este caso, los detalles de la autorización no se conservan.

**Uso**:
```bash 
%project_auth_create project=<Project_Name>, name=<Authorization_Name>, key=<Authorization_Key>, secret=<Authorization_Secret>, region=<ObjectStore_Region>, token=<Session_Token>
```
Donde:

- proyecto: nombre del proyecto.

- nombre: nombre de autorización para el almacén de objetos.

- clave: clave de autorización del almacén de objetos.

- **`[Opcional]`** secreto: ID de acceso secreto de autorización del almacén de objetos.

- **`[Opcional]`** región: región del almacén de objetos; local para el almacén de objetos local.

- **`[Opcional]`** token: token de sesión para el acceso al almacén de objetos.

- **`[Opcional: solo AWS]`** rol: usuarios de IAM o cuentas de servicio que acceden a recursos de AWS desde una cuenta de AWS asumiendo un rol y sus derechos. El propietario del recurso de AWS define el rol. Por ejemplo: arn:aws:iam::00000:role/STSAssumeRole.

- **`[Opcional: solo AWS]`** ExternalID: ID externo utilizado para acceder al almacén de objetos. Este parámetro es obligatorio cuando se utiliza el parámetro `role`.

**Salida**:
```
Authorization 'name' created
```

## %project_auth_update

**Descripción**: actualice una autorización de almacén de objetos.

**Uso**:

```bash 
%project_auth_update project=<Project_Name>, name=<Authorization_Name>, key=<Authorization_Key>, secret=<Authorization_Secret>, region=<ObjectStore_Region>, token=<Session_Token>

```
Donde:

- proyecto: nombre del proyecto.

- nombre: nombre de autorización para el almacén de objetos.

- clave: clave de autorización del almacén de objetos.

- **`[Opcional]`** secreto: ID de acceso secreto de autorización del almacén de objetos.

- **`[Opcional]`** región: región del almacén de objetos; local para el almacén de objetos local.

- **`[Opcional]`** token: token de sesión para el acceso al almacén de objetos.

- **`[Opcional: solo AWS]`** rol: usuarios o cuentas de servicio de IAM que acceden a recursos de AWS o Azure desde una cuenta de CSP asumiendo un rol y sus derechos. El propietario del recurso de AWS o Azure define el rol. Por ejemplo: arn:aws:iam::00000:role/STSAssumeRole.

- **`[Opcional: solo AWS]`** ExternalID: ID externo utilizado para acceder al almacén de objetos. Este parámetro es obligatorio cuando se utiliza el parámetro `role`.

**Salida**:
```
Authorization 'name' updated
```

## %project_auth_delete

**Descripción**: elimine una autorización de almacén de objetos.

**Uso**:
```bash
%project_auth_delete project=<Project_Name>, name=<Authorization_Name>
```
Donde:

- proyecto: nombre del proyecto.

- nombre: nombre de autorización para el almacén de objetos.

**Salida**:
```
Authorization 'name' deleted
```

## %project_auth_list

**Descripción**: enumere las autorizaciones del almacén de objetos que se crean para un proyecto.

**Uso**:
```bash 
%project_auth_list project=<Project_Name>

```
Donde:

- proyecto: nombre del proyecto.

**Salida**:
```
| AUTH NAME           | ACCESS KEY  | SECRET  | 
|---------------------|-------------|---------|
| <Authorization_Name>| <ACCESS_KEY>| <SECRET>| 
```

## %project_engine_deploy

**Descripción**: implemente un motor para el proyecto. El proceso de implementación tarda unos minutos en completarse. Si la implementación se realiza correctamente, se genera una contraseña.

**Uso**:

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

Donde:

- proyecto: nombre del proyecto.

- Tamaño: tamaño del motor. El valor puede ser:

  - pequeño
  - medio
  - grande
  - extra grande

- **`[Opcional]`** nodo: número de nodos del motor que se implementarán. El valor predeterminado es 1.

- **`[Opcional]`** subred: subred utilizada para el motor si no hay valores predeterminados en la configuración de AI Unlimited.

- **`[Opcional]`** región: región utilizada para el motor si no hay valores predeterminados en la configuración de AI Unlimited.

- **`[Opcional]`** restaurar: si es falso (F), el motor se implementa pero los objetos del proyecto no se restauran, lo que reduce el tiempo de implementación. Puede restaurarlos manualmente utilizando %project_restore. El valor predeterminado es verdadero (T). 

<Tabs>
<TabItem value="aws1" label="AWS">

- **`[Opcional]`** lista de prefijos: la colección de bloques CIDR que definen un conjunto de rangos de direcciones IP que requieren la misma implementación de políticas. Se utiliza para especificar qué direcciones IP pueden comunicarse con el motor.

- **`[Opcional]`** securitygroups: lista de grupos de seguridad para la VPC en cada región. Si no especifica un grupo de seguridad, el motor se asocia automáticamente con el grupo de seguridad predeterminado para la VPC.

- **`[Opcional]`** cidrs: lista de direcciones CIDR utilizadas para el motor.

- **`[Opcional]`** etiquetas: los pares clave-valor que se asignan al motor para una identificación rápida.

- **`[Opcional]`** iamrole: el rol de IAM utilizado para el motor.

- **`[Opcional]`** roleprefix: la cadena agregada al comienzo de la función IAM asignada al motor.

- **`[Opcional]`** permissionboundary: el ARN del límite de permisos de IAM que se asociará con el rol de IAM asignado al motor. El límite de permisos define los permisos máximos que puede tener el rol.

</TabItem>
<TabItem value="azure" label="Azure">

- **`[Opcional]`** red: la red en la que desea implementar el motor.

- **`[Opcional]`** keyvault: el almacén de claves utilizado por el motor donde se puede almacenar de forma segura información confidencial, como contraseñas.

- **`[Opcional]`** keyvaultresourcegroup: el grupo de recursos que contiene el almacén de claves.

- **`[Opcional]`** networkresourcegroup: el grupo de recursos que contiene la red.

</TabItem>
</Tabs>

**Salida**:
```
Started deploying.
Success: Compute Engine setup, look at the connection manager
```

## %project_engine_suspend

**Descripción**: detenga el motor después de terminar su trabajo.

**Uso**:
```bash 
%project_engine_suspend <Project_Name>
```
Donde:

- proyecto: nombre del proyecto.

**Salida**:
```
Started suspend
Success: Suspended Compute Engine
```

## %project_engine_list

**Descripción**: vea la lista de motores implementados para su proyecto.

**Uso**:
```bash 
%project_engine_list project=<Project_Name>
```
Donde:

- proyecto: nombre del proyecto.

**Salida**:
```
| IP   | STATE   | REGION  | SIZE             | NODE             |
|------|---------|---------|------------------|------------------|
| <IP> | Deployed| <Region>| <Size_of_Engine> | <Number_of_Nodes>|
```

## %project_user_list

**Descripción**: vea la lista de colaboradores asignados al proyecto en el repositorio Git.

**Uso**:
```bash
%project_user_list project=<Project_Name>
```

Donde:

- **`[Opcional]`** proyecto: nombre del proyecto.

**Salida**:
```
| PROJECT ID   | USER  | PASSWORD  |
|--------------|-------|-----------|
| <Project_ID> | <User>| <Password>| 
```

## %project_backup

**Descripción**: realice una copia de seguridad de la información de su proyecto y la definición de objetos dentro del motor.

**Uso**:
```bash
%project_backup project=<Project_Name>
```
Donde:

- proyecto: nombre del proyecto.

**Salida**:
```
Backup of the object definitions created
```

## %project_restore

**Descripción**: restaure la información de su proyecto y la definición de objetos desde su repositorio Git.

**Uso**:
```bash 
%project_restore project=<Project_Name>, gitref=<Git_Reference>
```
Donde:

- proyecto: nombre del proyecto.
- **`[Opcional]`** gitref: la referencia de Git para la confirmación desde la cual restaurar el proyecto, si no desea restaurar desde la última versión.

**Salida**:
```
Restore of the object definitions done
```

## %project_engine_update_users

**Descripción**: actualice los usuarios en el motor implementado. Si se agregan usuarios como colaboradores al repositorio Git después de implementar el motor, puedes usar este comando para actualizar y crear nuevos usuarios para el motor implementado.

**Uso**:
```bash 
%project_engine_update_users project=<Project_Name>
```
Donde:

- proyecto: nombre del proyecto.

**Salida**:
```
Username and password of each user on the engine
```

## %project_engine_update_auth

**Descripción**: actualice o agregue nuevas autorizaciones en el motor implementado sin tener que suspender y volver a implementar el motor.

**Uso**:
```bash 
%project_engine_update_auth project=<Project_Name>
```
Donde:

- proyecto: nombre del proyecto.


**Salida**:
```
Authorizations updated
```

## %project_connection_add

**Descripción**: actualice la conexión del motor implementado. Use este comando para conectarse al motor desde otro cuaderno sin tener que crear una nueva conexión manualmente.

**Uso**:
```bash 
%project_connection_add project=<Project_Name>
```
Donde:

- proyecto: nombre del proyecto.


**Salida**:
```
The connection manager shows the refreshed connection
```

## %help

**Descripción**: vea la lista de comandos mágicos proporcionados por el kernel de AI Unlimited.

**Uso**:
```bash
%help
```
Además, puedes ver mensajes de ayuda detallados por comando.

**Uso**:
```bash 
%help `command`
```
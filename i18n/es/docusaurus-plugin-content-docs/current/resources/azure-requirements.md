---
id: azure-account-requirements
title: Requisitos de la cuenta de Azure
description: Cómo preparar su cuenta de Azure para la instalación de AI Unlimited
sidebar_label: Requisitos de la cuenta de Azure
sidebar_position: 2
pagination_prev: null
pagination_next: null
---

# Requisitos de la cuenta de Azure

Primero, asegúrese de cumplir los [requisitos previos](../install-ai-unlimited/index.md#prerequisites). 

Luego, antes de instalar AI Unlimited, aborde estos elementos de Azure.


## Prepare su cuenta de Azure

- Trabaje con su administrador de nube para asegurarse de que su cuenta de Azure tenga los permisos para crear los recursos de nube definidos en la [plantilla de AI Unlimited](https://github.com/Teradata/ai-unlimited/tree/develop/deployments/azure/templates/arm/ai-unlimited). 

- Requisitos de red: su [grupo de recursos](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal) de Azure debe tener una [Azure Virtual Network (VNet)](https://learn.microsoft.com/en-us/azure/virtual-network/quick-create-portal) configurada con una [subred](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-subnet?tabs=azure-portal). Use una red virtual o subred existente, o cree la suya propia, según los permisos de su cuenta. 

- Si necesita acceder a la instancia del administrador para ejecutar comandos o depurar, puede usar un [par de claves](https://learn.microsoft.com/en-us/azure/virtual-machines/ssh-keys-portal) para conectarse de forma segura mediante Secure Shell (SSH). Necesitará el par de claves cuando [especifique los detalles de la instancia](../install-ai-unlimited/prod-azure-portal-deploy-manager.md#specify-instance-details).


## Crear el rol para el administrador

El administrador necesita un rol que le permita hacer lo siguiente:
- Implemente el motor.
- Cree un nuevo rol para el motor (cada vez que se implementa el motor) que permita que los nodos del motor se comuniquen.

La carpeta `deployments` en el [repositorio de GitHub de AI Unlimited](https://github.com/Teradata/ai-unlimited) proporcionada por Teradata incluye una plantilla ARM de rol de administrador y una muestra de política.

	Abra una ventana de terminal y clone el repositorio.

    ``` bash
    git clone https://github.com/Teradata/ai-unlimited
    ```

O utiliza los enlaces que siguen para descargar lo que necesite.

Crear el rol:

- Si tiene los permisos necesarios para crear roles, cree el rol para el administrador utilizando la plantilla ARM [role-policy](https://github.com/Teradata/ai-unlimited/tree/develop/deployments/azure/templates/arm/init/role-policy.json). Consulte [Crear o actualizar roles personalizados de Azure mediante una plantilla ARM](https://learn.microsoft.com/en-us/azure/role-based-access-control/custom-roles-template).

- O comparta la política [ai-unlimited.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/azure/policies/ai-unlimited.json), que contiene los permisos que necesita el administrador, con su administrador de la nube para que pueda crear el rol para usted.

Necesitará `RoleDefinitionId` cuando [especifique los detalles de la instancia](../install-ai-unlimited/prod-azure-portal-deploy-manager.md#specify-instance-details). 









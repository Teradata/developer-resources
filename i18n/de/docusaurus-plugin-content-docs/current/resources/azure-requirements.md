---
id: azure-account-requirements
title: Anforderungen für Azure-Konten
description: So bereiten Sie Ihr Azure-Konto für die Installation von AI Unlimited vor
sidebar_label: Anforderungen für Azure-Konten
sidebar_position: 2
pagination_prev: null
pagination_next: null
---

# Anforderungen für Azure-Konten

Stellen Sie zunächst sicher, dass Sie über die [Voraussetzungen](../install-ai-unlimited/index.md#prerequisites) verfügen. 

Bevor Sie AI Unlimited installieren, kümmern Sie sich um diese Azure-Elemente.


## Vorbereiten Ihres Azure-Kontos

- Arbeiten Sie mit Ihrem Cloud-Administrator zusammen, um sicherzustellen, dass Ihr Azure-Konto über die Berechtigungen zum Erstellen der in der [AI Unlimited-Vorlage](https://github.com/Teradata/ai-unlimited/tree/develop/deployments/azure/templates/arm/ai-unlimited)definierten Cloud-Ressourcen verfügt. 

- Netzwerkanforderungen: Ihre Azure-[Ressourcengruppe](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal) muss über ein [Azure Virtual Network (VNet)](https://learn.microsoft.com/en-us/azure/virtual-network/quick-create-portal) verfügen, das mit einem [Subnetz](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-subnet?tabs=azure-portal) konfiguriert ist. Verwenden Sie ein vorhandenes VNet oder Subnetz oder erstellen Sie Ihr eigenes, abhängig von Ihren Kontoberechtigungen. 

- Wenn Sie auf die Managerinstanz zugreifen müssen, um Befehle auszuführen oder zu debuggen, können Sie mit einem [Schlüsselpaar](https://learn.microsoft.com/en-us/azure/virtual-machines/ssh-keys-portal) eine sichere Verbindung über Secure Shell (SSH) herstellen. Sie benötigen das Schlüsselpaar, wenn Sie [die Instanzdetails angeben](../install-ai-unlimited/prod-azure-portal-deploy-manager.md#specify-instance-details).


## Erstellen Sie die Rolle für den Manager

Der Manager benötigt eine Rolle, die ihm Folgendes ermöglicht:
- Die Engine bereitstellen.
- Erstellen Sie (bei jeder Bereitstellung der Engine) eine neue Rolle für die Engine, die die Kommunikation zwischen den Knoten der Engine ermöglicht.

Der Ordner `deployments` im von Teradata bereitgestellten [AI Unlimited GitHub-Repository](https://github.com/Teradata/ai-unlimited) enthält eine ARM-Vorlage für die Managerrolle und ein Richtlinienbeispiel.

	Öffnen Sie ein Terminalfenster und klonen Sie das Repository.

    ``` bash
    git clone https://github.com/Teradata/ai-unlimited
    ```

Oder verwenden Sie die folgenden Links, um die benötigten Informationen herunterzuladen.

Erstellen Sie die Rolle:

- Wenn Sie über die erforderlichen Berechtigungen zum Erstellen von Rollen verfügen, erstellen Sie die Rolle für den Manager mithilfe der ARM-Vorlage [role-policy](https://github.com/Teradata/ai-unlimited/tree/develop/deployments/azure/templates/arm/init/role-policy.json). Siehe [Erstellen oder Aktualisieren von benutzerdefinierten Azure-Rollen mithilfe einer ARM-Vorlage](https://learn.microsoft.com/en-us/azure/role-based-access-control/custom-roles-template).

- Oder geben Sie die [ai-unlimited.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/azure/policies/ai-unlimited.json)-Richtlinie, die die vom Manager benötigten Berechtigungen enthält, an Ihren Cloud-Administrator weiter, damit dieser die Rolle für Sie erstellen kann.

Sie benötigen die `RoleDefinitionId`, wenn Sie [die Instanzdetails angeben](../install-ai-unlimited/prod-azure-portal-deploy-manager.md#specify-instance-details). 









---
id: aws-account-requirements
title: AWS-Kontoanforderungen
description: So bereiten Sie Ihr AWS-Konto für die Installation von AI Unlimited vor
sidebar_label: AWS-Kontoanforderungen
sidebar_position: 1
pagination_prev: null
pagination_next: null
---

# AWS-Kontoanforderungen

Stellen Sie zunächst sicher, dass Sie über die [Voraussetzungen](../install-ai-unlimited/index.md#prerequisites) verfügen. 

Bevor Sie AI Unlimited installieren, kümmern Sie sich um diese AWS-Elemente.


## Vorbereiten Ihres AWS-Kontos

- Arbeiten Sie mit Ihrem Cloud-Administrator zusammen, um sicherzustellen, dass Sie über die [IAM](https://aws.amazon.com/iam/)-Berechtigungen zum Erstellen der in der [AI Unlimited-Vorlage](https://github.com/Teradata/ai-unlimited/tree/develop/deployments/aws/templates/ai-unlimited) definierten Cloud-Ressourcen verfügen.

- Wenn Sie auf die Managerinstanz zugreifen müssen, um Befehle auszuführen oder Fehler zu beheben, können Sie auf eine der folgenden Arten eine Verbindung herstellen:
	\- Verwenden Sie ein [Schlüsselpaar](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html), um eine sichere Verbindung über Secure Shell (SSH) herzustellen. Sie benötigen das Schlüsselpaar, wenn Sie [die Stapeldetails angeben](../install-ai-unlimited/prod-aws-console-deploy-ai-unlimited.md#specify-stack-details-and-options).
	\- Verwenden Sie AWS Session Manager zum Herstellen einer Verbindung. Um dies zu ermöglichen, hängen Sie die Richtlinie [session-manager.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/session-manager.json) an eine [von Ihnen bereitgestellte Rolle](#provide-roles-created-by-your-organization) an den Manager an.
  
- Wenn Sie einen [Application Load Balancer (ALB)](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancer-getting-started.html) oder [Network Load Balancer (NLB)](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancer-getting-started.html)verwenden möchten, stellen Sie sicher, dass Sie über die Berechtigung zum Verwalten dieser AWS-Dienste verfügen:
	\- [AWS Certificate Manager](https://docs.aws.amazon.com/acm/) – um ein neues Zertifikat für die gehostete Zonen-ID in Route 53 auszustellen.
	\- [AWS Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html) – um einen benutzerdefinierten Domänennamen zu konfigurieren und DNS-Abfragen an Ihren Lastausgleich weiterzuleiten.


## Erlauben Sie AI Unlimited, Rollen zu erstellen

Der Manager benötigt eine Rolle, die es ihm erlaubt, die Engine bereitzustellen. Die Engine benötigt eine Rolle, die eine Kommunikation zwischen den Engine-Knoten ermöglicht. Sie können beide Rollen von AI Unlimited erstellen lassen.

:::note
Wenn Ihre Sicherheitsvorkehrungen es AI Unlimited nicht erlauben, Rollen zu erstellen, [erstellen Sie die Rollen](#provide-roles-created-by-your-organization) selbst oder mit der Hilfe Ihres Cloud-Administrators.
::: 

### Rolle des Managers

Damit AI Unlimited diese Rolle für Sie erstellen kann, geben Sie bei [Angabe der Stapeldetails](../install-ai-unlimited/prod-aws-console-deploy-ai-unlimited.md#specify-stack-details-and-options) die folgenden Werte für die Parameter an:
    \- `IamRole`: **Neu**
    \- `IamRoleName`: leer lassen

### Rolle der Engine

AI Unlimited kann bei jeder Bereitstellung der Engine eine neue Rolle für die Engine erstellen. 

Die von AI Unlimited erstellten Engine-spezifischen Richtlinien werden folgendermaßen eingeschränkt:	
  
  ```bash
  "Resource": ["arn:aws:secretsmanager:`REGION`:`ACCOUNT_ID`:secret:compute-engine/`CLUSTER_NAME`/`SECRET_NAME`"]
  ```

Um AI Unlimited zu ermöglichen, für jede Engine-Bereitstellung eine neue Rolle zu erstellen, lassen Sie das Feld **Standard-IAM-Rolle** leer, wenn Sie im AI Unlimited-Setup die [Cloud-Integration](../install-ai-unlimited/setup-ai-unlimited.md) konfigurieren.


## Stellen Sie von Ihrer Organisation erstellte Rollen bereit

Wenn Ihre Sicherheitsvorkehrungen es AI Unlimited nicht erlauben, Rollen zu erstellen, stellen Sie von Ihrer Organisation erstellte Rollen bereit.

Der Ordner `deployments` im von Teradata bereitgestellten [AI Unlimited GitHub-Repository](https://github.com/Teradata/ai-unlimited) enthält Richtlinienbeispiele für die Manager- und Engine-Rollen.

Öffnen Sie ein Terminalfenster und klonen Sie das Repository.

``` bash
git clone https://github.com/Teradata/ai-unlimited
```

Oder verwenden Sie die in den folgenden Abschnitten bereitgestellten Links, um die benötigten Informationen herunterzuladen.


### Rolle des Managers

- Wenn Sie über Berechtigungen zum Erstellen von IAM-Ressourcen verfügen, erstellen Sie die Rolle:
  - Fügen Sie eine Richtlinie an, die den JSON-Code enthält, der Ihren Anforderungen entspricht. Sehen Sie sich die folgenden JSON-Beispiele an.
  - Wenn Sie [die Stapeldetails angeben](../install-ai-unlimited/prod-aws-console-deploy-ai-unlimited.md#specify-stack-details-and-options), verwenden Sie diese Parameterwerte:
    - `IamRole`: **Neu**
	 \- `IamRoleName`: Name der neuen Rolle
- Wenn Sie nicht über die Berechtigung zum Erstellen von IAM-Ressourcen verfügen, wenden Sie sich an Ihren Cloud-Administrator, um eine vorhandene Rolle zu verwenden:
  - Fügen Sie eine Richtlinie an, die den JSON-Code enthält, der Ihren Anforderungen entspricht. Sehen Sie sich die folgenden JSON-Beispiele an.
  - Wenn Sie [die Stapeldetails angeben](../install-ai-unlimited/prod-aws-console-deploy-ai-unlimited.md#specify-stack-details-and-options), verwenden Sie diese Parameterwerte:
  - `IamRole`: **Vorhanden**
  - `IamRoleName`: Name der vorhandenen Rolle
  
#### JSON-Beispiele

Verwenden Sie diese Beispiele nach Bedarf in einer Richtlinie, die der Rolle des Managers zugeordnet ist:

- Erlauben Sie AI Unlimited, die Engine-Rolle zu erstellen. Geben Sie [ai-unlimited-workspaces.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces.json) mit an. Dies umfasst Berechtigungen zum Erstellen von Engine-Instanzen und erteilt AI Unlimited Berechtigungen zum Erstellen clusterspezifischer Rollen und Richtlinien.

- Wenn Ihre Sicherheitsvorkehrungen es AI Unlimited nicht erlauben, Rollen zu erstellen, geben Sie [ai-unlimited-without-iam-role-permissions.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces-without-iam-role-permissions.json) mit an. Dies enthält Berechtigungen zum Erstellen von Engine-Instanzen, aber nicht die, die AI Unlimited zum Erstellen clusterspezifischer Rollen und Richtlinien benötigt. 

  :::note
  Wenn Sie [ai-unlimited-without-iam-role-permissions.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces-without-iam-role-permissions.json) für die Rolle des Managers verwenden, verwenden Sie [ai-unlimited-engine.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json) für die Rolle der Engine.
  :::

- Optional können Sie [session-manager.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/session-manager.json) mit angeben: Dies schließt Berechtigungen für die Engine ein, um mit dem [AWS Session Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html) zu interagieren. Verwenden Sie dies, wenn Sie den Session Manager verwenden möchten, um eine Verbindung mit der Engine herzustellen und sie genau zu verwalten.


### Rolle der Engine

- Fügen Sie der Rolle, die Sie für die Engine bereitstellen, eine Richtlinie hinzu, die [ai-unlimited-engine.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json) enthält. Dadurch kann AI Unlimited die Rolle bei jeder Bereitstellung der Engine an den Cluster weitergeben. 

- Fügen Sie der Richtlinie Ihre Kontodetails hinzu. Da Sie den Clusternamen nicht vorhersagen können, verwenden Sie ein Platzhalterzeichen.

  ``` bash
  "arn:aws:secretsmanager:`REGION`:`ACCOUNT_ID`:secret:compute-engine/*"
  or
  "arn:aws:secretsmanager:`REGION`:111111111111:secret:compute-engine/*"
  or
  "arn:aws:secretsmanager:us-west-2:111111111111:secret:compute-engine/*"
  
  ```
  
:::note
Wenn Sie [ai-unlimited-engine.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-engine.json) für die Rolle der Engine verwenden, verwenden Sie [ai-unlimited-without-iam-role-permissions.json](https://github.com/Teradata/ai-unlimited/blob/develop/deployments/aws/policies/ai-unlimited-workspaces-without-iam-role-permissions.json) für die Rolle des Managers.
:::

- Wenn Sie die [Cloud-Integration](../install-ai-unlimited/setup-ai-unlimited.md) im AI Unlimited-Setup konfigurieren, geben Sie den Rollennamen in das Feld **Standard-IAM-Rolle** ein.








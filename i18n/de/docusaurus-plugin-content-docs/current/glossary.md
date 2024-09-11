---
id: glossary
title: Glossar
description: Terminologie für die Installation und Verwendung von AI Unlimited.
sidebar_label: Glossar
sidebar_position: 7
pagination_prev: null
pagination_next: null
---

# Glossar


## A

### AI Unlimited manager

Der Manager ist die AI Unlimited-Komponente, die die Bereitstellung der KI/ML-[Engine](#engine) auf Ihrem [Cloud-Dienstleister](#cloud-service-provider) orchestriert. Er bietet außerdem eine webbasierte Benutzeroberfläche, über die der AI Unlimited-Administrator AI Unlimited nach der Installation einrichtet und die Einstellungen später bei Bedarf ändert. Vom Manager erhalten alle Benutzer ihren API-Schlüssel.

### API key

Mit Ihrem API(Application Programming Interface)-Schlüssel können Sie Ihr Jupyter-Notebook mit dem Manager verbinden. Dies ist das Erste, was Sie in einem neuen Jupyter-Notebook tun, bevor Sie ein Projekt erstellen oder darauf zugreifen.

### application load balancer

Lastausgleichsmodule verteilen eingehenden Datenverkehr auf Server. Ein Anwendungslastausgleichsmodul prüft den Inhalt des eingehenden Datenverkehrs, z. B. HTTP-Header und -Pfade, um Routing-Entscheidungen zu treffen. Sie können ein Anwendungslastausgleichsmodul verwenden, um den AI Unlimited Manager und die Engine dem öffentlichen IP-Netzwerk zugänglich zu machen.


## C

### Classless Inter-domain Routing

Klassenloses Inter-Domain-Routing (Classless Inter-domain Routing, CIDR) ist eine Methode zur IP-Adresszuweisung für effizientes Datenrouting im Internet. Jeder Computer, der mit dem Internet verbunden ist, hat eine eindeutige Nummer, die als IP-Adresse bezeichnet wird. IP-Adressen ermöglichen es Computern, einander zu finden und zu kommunizieren. Ein CIDR-Block ist ein Bereich von IP-Adressen.

### cloud service provider

Ein Cloud-Dienstleister (Cloud Service Provider, CSP) ist ein Unternehmen, das auf Anfrage Computerressourcen über das Internet bereitstellt. Diese Ressourcen können Infrastructure as a Service (IaaS), Platform as a Service (PaaS) oder Software as a Service (SaaS) umfassen. Die [AI Unlimited-Manager](#ai-unlimited-manager) und [Engine](#engine) laufen auf Ihrem CSP.

### cluster

Eine Gruppe miteinander verbundener Computer (auch Knoten genannt), die als einzelnes System zusammenarbeiten, um die Verarbeitungsleistung, Skalierbarkeit und Zuverlässigkeit zu verbessern. Die AI Unlimited-Engine wird auf einem Cluster auf Ihrem CSP bereitgestellt. Jeder Knoten ist eine [virtuelle Maschine (VM)](#virtual-machine).


## D

### data lake

Ein zentrales Datenrepository für Datenanalyse, maschinelles Lernen und Datenexploration. Ein Data Lake basiert normalerweise auf [Objektspeichern](#object-storage) und ist für die Datenzugänglichkeit für zukünftige Datenanalysen ausgelegt.  


## E

### engine

Beim Cloud-Computing ist eine Compute-Engine ein Beispiel für Infrastructure as a Service (IaaS). Sie ermöglicht Ihnen, [virtual machines (VMs)](#virtual-machine) auf der Infrastruktur Ihres Cloud-Dienstanbieters zu erstellen und auszuführen. Wenn Sie die AI Unlimited AI/ML-Compute-Engine von einem Jupyter-Notebook aus bereitstellen, stellt die [AI Unlimited-Manager](#ai-unlimited-manager) VMs bereit.


## I

### IAM role

Eine [2Identity and Access Management (IAM)-Rolle](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html) ist eine Rolle, die Sie oder ein Cloud-Administrator in Ihrer Organisation im AWS-Konto Ihrer Organisation erstellen können. Es sind eine oder mehrere Berechtigungsrichtlinien angehängt, die bestimmen, was eine Entität mit dieser Rolle in AWS tun kann und was nicht.


## K

### kernel

Ein Jupyter-Kernel ist ein sprachspezifisches Programm, das den Code verarbeitet, den Sie in ein Jupyter-Notebook schreiben, und die Ergebnisse zur Ansicht an Ihr Notebook zurückmeldet. 


## L

### load balancer 

Ein Lastausgleich verteilt eingehenden Datenverkehr gleichmäßig auf die Server, was Leistung, Zuverlässigkeit und Skalierbarkeit verbessert. Wenn Ihre Organisation ihren Ressourcen nicht erlaubt, öffentliche IP-Adressen zu verwenden, können Sie einen Lastausgleich verwenden, um den AI Unlimited-Manager und die Engine dem öffentlichen IP-Netzwerk zugänglich zu machen. 


## M

### mounting volumes 

Ein Konzept in Containerplattformen wie Docker. Sie können ein Verzeichnis auf der Maschine, auf der die Container laufen (dem Host), einem Verzeichnis in einem Container zuordnen, um Daten und Dateien zwischen dem Host und dem Container zu teilen.


## N

### network load balancer

Lastausgleichsmodule verteilen eingehenden Datenverkehr auf Server. Ein Netzwerk-Lastausgleichsmodul prüft den Datenverkehr nicht. Routing-Entscheidungen werden auf der Grundlage von Faktoren wie Ports und IP-Adressen getroffen. Sie können ein Netzwerk-Lastausgleichsmodul verwenden, um AI Unlimited und seine Engine dem öffentlichen IP-Netzwerk zugänglich zu machen.


## O

### OAuth app

Mit einer OAuth-App kann ein Benutzer einer Website oder einem Dienst Zugriff auf sein Konto gewähren, ohne sein Passwort preiszugeben. 

Mithilfe einer OAuth-App, die Sie oder jemand in Ihrer Organisation erstellt, kann AI Unlimited die GitHub- oder GitLab-Authentifizierung zur Verwaltung von allen [Projekt-Repository](#project-repository) verwenden und bei jeder Bereitstellung der Engine die Engine-Benutzer von den Mitarbeitern ableiten, die dem Repository hinzugefügt wurden.

### object storage
Eine skalierbare, hocheffektive Möglichkeit, große Mengen strukturierter, halbstrukturierter oder unstrukturierter Daten in der Cloud zu speichern. Amazon S3 ist ein Objektspeicher auf AWS. Azure Blob Storage ist ein Objektspeicher auf Azure. Objektspeicher ist die Grundlage für einen [Data Lake](#data-lake).


## P

### project

Ein Projekt ist ein Mittel zum Erkunden und Analysieren von Daten aus einem Jupyter-Notebook. Jedes Projekt verfügt über ein Repository in Ihrem GitHub- oder GitLab-Konto.

### project repository

Der Projektbesitzer (der Benutzer, der das Projekt erstellt hat) fügt Projektmitarbeiter zum Git-Repository hinzu. Von dort leitet AI Unlimited bei jeder Bereitstellung der Engine die Benutzer ab, die berechtigt sind, eine Verbindung mit der Engine herzustellen und sie zu verwenden. 

Wenn die Engine jedoch bereits bereitgestellt ist, muss der Projektbesitzer die Engine aktualisieren, um diese Benutzer hinzuzufügen, damit sie während der Bereitstellung eine Verbindung mit der Engine herstellen und sie verwenden können.

:::note
Bei jeder Bereitstellung der Engine wird für jeden Projektbenutzer ein neues Passwort generiert.
:::

Jedes Mal, wenn Sie oder ein anderer Benutzer ein Projekt anhält, wird sein Schema im Repository gesichert. AI Unlimited verwendet das gespeicherte Schema, um das Projekt nach der Wiederherstellung wiederherzustellen.


## S

### systemd

Linux-Grundsoftware für System- und Servicemanagement. Der AI Unlimited Manager läuft auf einer Serverinstanz in einem von systemd gesteuerten Container.


## T

### Transport Layer Security

Transport Layer Security (TLS) ist ein Protokoll, das eine sichere Verbindung zwischen zwei Parteien herstellt, die über das Internet kommunizieren. TLS verschlüsselt Daten während der Übertragung, sodass sie für jeden, der sie abfängt, unlesbar sind, und überprüft die Identitäten beider Parteien. 


## V

### virtual machine
Eine virtuelle Maschine (VM) ist eine Softwareemulation eines physischen Computers. Jede VM arbeitet als eigener Computer innerhalb der Infrastruktur eines [Cloud-Dienstleisters](#cloud-service-provider). VMs ermöglichen Skalierbarkeit, Flexibilität, einfachere Verwaltung und ein Pay-as-you-go-Modell.
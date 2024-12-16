---
id: faq
title: FAQ
description: Hier finden Sie Antworten auf Ihre Fragen zu AI Unlimited.
sidebar_label: FAQ
sidebar_position: 6
pagination_prev: null
pagination_next: null
---

# FAQ


## Allgemein

### Welche Cloud-Service-Provider (CSPs) werden von AI Unlimited unterstützt?
Derzeit AWS und Azure.

### Welche Analysefunktionen kann ich nutzen?
[ClearScape Analytics™](https://docs.teradata.com/access/sources/dita/topic?dita:mapPath=phg1621910019905.ditamap&dita:ditavalPath=pny1626732985837.ditaval&dita:topicPath=gma1702668333653.dita)-Funktionen. In den [Versionshinweisen](./whats-new/release-notes.md) findest du alle Funktionen, die derzeit nicht unterstützt werden.

### Wie bezahle ich für AI Unlimited?
Sie bezahlen Ihren Cloud-Dienstanbieter für die Stunden, in denen KI-/ML-Engine-Ressourcen ausgeführt werden. Die Gebühren hängen von der Instanzgröße und der Anzahl der Instanzen ab.

### Was soll ich tun, wenn Fehlermeldungen auftreten oder Probleme auftreten, die ich nicht lösen kann?
Senden Sie eine E-Mail an das <a href="mailto:aiunlimited.support@Teradata.com">Support-Team</a>. Außerdem steht Ihnen die [AI Unlimited-Community](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa) gerne zur Verfügung. Gehen Sie dorthin, um Fragen zu stellen, Ratschläge zur Fehlerbehebung zu erhalten und Ideen auszutauschen.


## Projekte

### Was ist ein Projekt?
Ein Projekt ist ein Mittel zum Erkunden und Analysieren von Daten aus einem Jupyter-Notebook. Jedes Projekt verfügt über ein Repository in Ihrem GitHub- oder GitLab-Konto.

### Wie verwende ich ein Projekt?
In einem Jupyter-Notebook erstellen Sie ein Projekt, wodurch sein Git-Repository automatisch erstellt wird. Anschließend autorisieren Sie den Zugriff auf Ihren Datenspeicher, stellen die KI/ML-Engine des Projekts bereit und führen analytische Workloads aus. Sie können das Projekt (und die Engine) jederzeit anhalten und dann wiederherstellen, um nur für die Stunden zu zahlen, die Sie benötigen.

### Wofür ist mein API-Schlüssel?
Sie verwenden Ihren API-Schlüssel, um Ihr Jupyter-Notebook mit dem AI Unlimited-Manager zu verbinden. Dies ist das Erste, was Sie tun, wenn Sie ein neues Notebook öffnen, um ein Projekt zu erstellen oder darauf zuzugreifen.

### Was befindet sich im Repository eines Projekts?
Der Projektbesitzer (der Benutzer, der das Projekt erstellt hat) fügt Projektmitarbeiter zum Git-Repository hinzu. Von dort leitet AI Unlimited bei jeder Bereitstellung der Engine die Benutzer ab, die berechtigt sind, eine Verbindung mit der Engine herzustellen und sie zu verwenden. 

Wenn die Engine jedoch bereits bereitgestellt ist, muss der Projektbesitzer die Engine aktualisieren, um diese Benutzer hinzuzufügen, damit sie während der Bereitstellung eine Verbindung mit der Engine herstellen und sie verwenden können.

:::note
Bei jeder Bereitstellung der Engine wird für jeden Projektbenutzer ein neues Passwort generiert.
:::

Jedes Mal, wenn Sie oder ein anderer Benutzer ein Projekt anhält, wird sein Schema im Repository gesichert. AI Unlimited verwendet das gespeicherte Schema, um das Projekt nach der Wiederherstellung wiederherzustellen.


## Benutzer

### Was sind die AI Unlimited-Benutzertypen?
Administratoren, Projektbesitzer und Mitarbeiter:
- Der Administrator ist der Benutzer, der AI Unlimited für Ihre Organisation einrichtet. 
- Der Benutzer, der ein Projekt erstellt, ist der Eigentümer des Projekts. 
- Zusätzliche Benutzer eines Projekts sind Mitarbeiter.

### Ich bin Administrator. Kann ich nach der Ersteinrichtung zurückgehen und Einstellungen ändern?
Ja, melden Sie sich erneut beim Setup an und nehmen Sie die gewünschten Änderungen vor.


### Kann ein Administrator andere Administratoren hinzufügen?
Nein, AI Unlimited unterstützt einen Administrator.

### Ich bin Projektbesitzer. Wie füge ich Mitarbeiter zu einem Projekt hinzu?
Fügen Sie sie zunächst zum Git-Repository des Projekts hinzu. 

Wenn Sie dies vor der Bereitstellung der Engine tun, werden die neuen Mitarbeiter bei der Bereitstellung der Engine automatisch hinzugefügt. 

Wenn Sie nach der Bereitstellung der Engine Mitarbeiter zum Repository hinzufügen, müssen Sie diese manuell zur Engine hinzufügen, damit sie während der Bereitstellung eine Verbindung mit der Engine herstellen und diese verwenden können.


## Aussetzen und Wiederherstellen 

### Was passiert, wenn ich ein Projekt aussetze?
Alle Projektinformationen, einschließlich Benutzer- und Objektspeicherberechtigungen sowie Datenobjekte, werden gespeichert.

### Was passiert, wenn ich ein Projekt wiederherstelle?
Die gespeicherten Projektinformationen sind vorhanden. Sie können genau dort weitermachen, wo Sie aufgehört haben.


## Der Manager

### Was ist der Manager?
Der Manager ist die AI Unlimited-Komponente, die die Bereitstellung der KI/ML-Engine bei Ihrem Cloud-Dienstanbieter orchestriert. 

Er bietet außerdem eine webbasierte Benutzeroberfläche, über die der AI Unlimited-Administrator AI Unlimited nach der Installation einrichtet und die Einstellungen später nach Bedarf ändert. 

Alle Benutzer erhalten von ihrem Benutzerprofil im Manager ihren API-Schlüssel zum Verbinden eines Jupyter-Notebooks mit dem Manager.

:::tip
Sie finden Ihre Frage nicht? Stellen Sie sie in der [Gemeinschaft](https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa)
:::




"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[1420],{86416:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>j,frontMatter:()=>d,metadata:()=>o,toc:()=>h});var i=r(74848),s=r(28453),t=r(56240),l=r(19365);const d={id:"magic-commands",title:"Magische Befehle",description:"Erfahren Sie mehr \xfcber die magischen AI Unlimited-Befehle, die Sie in einem Jupyter-Notebook zum Verwalten von Projekten verwenden k\xf6nnen.",sidebar_label:"Magische Befehle",sidebar_position:5,pagination_prev:null,pagination_next:null},c="Magische Befehle",o={id:"explore-and-analyze-data/magic-commands",title:"Magische Befehle",description:"Erfahren Sie mehr \xfcber die magischen AI Unlimited-Befehle, die Sie in einem Jupyter-Notebook zum Verwalten von Projekten verwenden k\xf6nnen.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/explore-and-analyze-data/magic-commands.md",sourceDirName:"explore-and-analyze-data",slug:"/explore-and-analyze-data/magic-commands",permalink:"/de/ai-unlimited/explore-and-analyze-data/magic-commands",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"magic-commands",title:"Magische Befehle",description:"Erfahren Sie mehr \xfcber die magischen AI Unlimited-Befehle, die Sie in einem Jupyter-Notebook zum Verwalten von Projekten verwenden k\xf6nnen.",sidebar_label:"Magische Befehle",sidebar_position:5,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},a={},h=[{value:"%workspaces_config",id:"workspaces_config",level:2},{value:"%project_create",id:"project_create",level:2},{value:"%project_delete",id:"project_delete",level:2},{value:"%project_list",id:"project_list",level:2},{value:"%project_auth_create",id:"project_auth_create",level:2},{value:"%project_auth_update",id:"project_auth_update",level:2},{value:"%project_auth_delete",id:"project_auth_delete",level:2},{value:"%project_auth_list",id:"project_auth_list",level:2},{value:"%project_engine_deploy",id:"project_engine_deploy",level:2},{value:"%project_engine_suspend",id:"project_engine_suspend",level:2},{value:"%project_engine_list",id:"project_engine_list",level:2},{value:"%project_user_list",id:"project_user_list",level:2},{value:"%project_backup",id:"project_backup",level:2},{value:"%project_restore",id:"project_restore",level:2},{value:"%project_engine_update_users",id:"project_engine_update_users",level:2},{value:"%project_engine_update_auth",id:"project_engine_update_auth",level:2},{value:"%project_connection_add",id:"project_connection_add",level:2},{value:"%help",id:"help",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"magische-befehle",children:"Magische Befehle"}),"\n",(0,i.jsx)(n.p,{children:"In Jupyter-Notebooks sind magische Befehle Verkn\xfcpfungen f\xfcr allgemeine Aufgaben. Mit den magischen Befehlen von AI Unlimited k\xf6nnen Sie eine Verbindung zur Engine herstellen und Projekte verwalten."}),"\n",(0,i.jsx)(n.p,{children:"Der AI Unlimited Jupyter Kernel unterst\xfctzt die hier beschriebenen magischen Befehle \u2013 zus\xe4tzlich zu den standardm\xe4\xdfigen magischen Befehlen des Teradata SQL-Kernels."}),"\n",(0,i.jsx)(n.h2,{id:"workspaces_config",children:"%workspaces_config"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beschreibung"}),": Stellen Sie eine Kommunikation zwischen Ihrem Notebook und dem AI Unlimited-Manager her."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nutzung"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%workspaces_config host=<ip_or_hostname>, apikey=<API_Key>, withtls=<T|F>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Wo:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"host: Name oder IP-Adresse des AI Unlimited-Managers."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["apikey: API-Schl\xfcsselwert von der AI Unlimited-Setup-Seite ",(0,i.jsx)(n.strong,{children:"Profil"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"[Optional]"})})," withTLS: Wenn False (F), verwendet die standardm\xe4\xdfige Client-Server-Kommunikation kein TLS."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ausgabe"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Workspace configured for host=<ip_or_hostname>\n"})}),"\n",(0,i.jsx)(n.h2,{id:"project_create",children:"%project_create"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beschreibung"}),": Erstellt ein neues Projekt. Dieser Befehl erstellt auch ein neues Repository mit dem Projektnamen in Ihrem Git-Konto. Die Konfigurationen werden in der Datei ",(0,i.jsx)(n.strong,{children:"engine.yml"})," gespeichert."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nutzung"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%project_create project=<Project_Name>, env=<Cloud_Service_Provider>, team=<Project_Team>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Wo:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"project: Name des zu erstellenden Projekts."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"env: Cloud-Umgebung, in der das Projekt gehostet wird. F\xfcr die aktuelle Version werden AWS und Azure unterst\xfctzt."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"[Optional]"})})," team: Name des Teams, das am Projekt zusammenarbeitet."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ausgabe"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Project `Project_Name` created\n"})}),"\n",(0,i.jsx)(n.h2,{id:"project_delete",children:"%project_delete"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beschreibung"}),": L\xf6scht das Projekt. Dadurch wird das Projekt-Repository nicht gel\xf6scht. Es werden Projektmetadaten aus dem Manager gel\xf6scht."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nutzung"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%project_delete project=<Project_Name>, team=<Project_Team>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Wo:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"project: Name des zu l\xf6schenden Projekts."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"[Optional]"})})," team: Name des Teams, das am Projekt zusammenarbeitet."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ausgabe"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Project `Project_Name` deleted\n"})}),"\n",(0,i.jsx)(n.h2,{id:"project_list",children:"%project_list"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beschreibung"}),": Listen Sie die Details eines oder aller Projekte auf."]}),"\n",(0,i.jsx)(n.p,{children:"Verwenden Sie den Projektparameter, um die Details eines bestimmten Projekts abzurufen. Wenn Sie den Befehl ohne Parameter ausf\xfchren, werden alle Projekte aufgelistet."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nutzung"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%project_list project=<Project_Name>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Wo:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"project: Der Projektname."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ausgabe"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"| NAME          | URL      | \n|---------------|----------|\n| <Project_Name>| <Git_URL>| \n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"project_auth_create",children:"%project_auth_create"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beschreibung"}),": Erstellt ein Autorisierungsobjekt zum Speichern der Objektspeicher-Anmeldeinformationen."]}),"\n",(0,i.jsxs)(n.p,{children:["Sie m\xfcssen das Autorisierungsobjekt erstellen, bevor Sie die Engine bereitstellen. Die Autorisierungsdetails bleiben erhalten und werden beim erneuten Bereitstellen des Projekts einbezogen. Optional k\xf6nnen Sie Autorisierungen nach dem Bereitstellen der Engine manuell mit dem SQL-Befehl ",(0,i.jsx)(n.code,{children:"CREATE AUTHORIZATION"})," erstellen. In diesem Fall werden die Autorisierungsdetails nicht beibehalten."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nutzung"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%project_auth_create project=<Project_Name>, name=<Authorization_Name>, key=<Authorization_Key>, secret=<Authorization_Secret>, region=<ObjectStore_Region>, token=<Session_Token>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Wo:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"project: Name des Projekts."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"name: Autorisierungsname f\xfcr den Objektspeicher."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"key: Autorisierungsschl\xfcssel des Objektspeichers."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"[Optional]"})})," secret: Geheime Autorisierungs-Zugriffs-ID des Objektspeichers."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"[Optional]"})})," region: Region des Objektspeichers; lokal f\xfcr den lokalen Objektspeicher."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"[Optional]"})})," token: Sitzungstoken f\xfcr den Objektspeicherzugriff."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"[Optional \u2013 nur AWS]"})})," role: IAM-Benutzer oder Servicekonto, um von einem AWS-Konto aus auf AWS-Ressourcen zuzugreifen, indem sie eine Rolle und ihre Berechtigungen \xfcbernehmen. Der Eigent\xfcmer der AWS-Ressource definiert die Rolle. Beispiel: arn:aws:iam::00000",":role","/STSAssumeRole."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"[Optional \u2013 nur AWS]"})})," ExternalID: Externe ID, die f\xfcr den Zugriff auf den Objektspeicher verwendet wird. Dieser Parameter ist erforderlich, wenn der Parameter ",(0,i.jsx)(n.code,{children:"role"})," verwendet wird."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ausgabe"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Authorization 'name' created\n"})}),"\n",(0,i.jsx)(n.h2,{id:"project_auth_update",children:"%project_auth_update"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beschreibung"}),": Aktualisiert eine Objektspeicherautorisierung."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nutzung"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%project_auth_update project=<Project_Name>, name=<Authorization_Name>, key=<Authorization_Key>, secret=<Authorization_Secret>, region=<ObjectStore_Region>, token=<Session_Token>\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"Wo:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"project: Name des Projekts."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"name: Autorisierungsname f\xfcr den Objektspeicher."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"key: Autorisierungsschl\xfcssel des Objektspeichers."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"[Optional]"})})," secret: Geheime Autorisierungs-Zugriffs-ID des Objektspeichers."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"[Optional]"})})," region: Region des Objektspeichers; lokal f\xfcr den lokalen Objektspeicher."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"[Optional]"})})," token: Sitzungstoken f\xfcr den Objektspeicherzugriff."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"[Optional \u2013 nur AWS]"})})," role: IAM-Benutzer oder Dienstkonto, um von einem CSP-Konto aus auf AWS- oder Azure-Ressourcen zuzugreifen, indem sie eine Rolle und ihre Berechtigungen \xfcbernehmen. Der Eigent\xfcmer der AWS- oder Azure-Ressource definiert die Rolle. Beispiel: arn:aws:iam::00000",":role","/STSAssumeRole."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"[Optional \u2013 nur AWS]"})})," ExternalID: Externe ID, die f\xfcr den Zugriff auf den Objektspeicher verwendet wird. Dieser Parameter ist erforderlich, wenn der Parameter ",(0,i.jsx)(n.code,{children:"role"})," verwendet wird."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ausgabe"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Authorization 'name' updated\n"})}),"\n",(0,i.jsx)(n.h2,{id:"project_auth_delete",children:"%project_auth_delete"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beschreibung"}),": Entfernt eine Objektspeicherautorisierung."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nutzung"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%project_auth_delete project=<Project_Name>, name=<Authorization_Name>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Wo:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"project: Name des Projekts."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"name: Autorisierungsname f\xfcr den Objektspeicher."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ausgabe"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Authorization 'name' deleted\n"})}),"\n",(0,i.jsx)(n.h2,{id:"project_auth_list",children:"%project_auth_list"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beschreibung"}),": Listet Objektspeicherautorisierungen auf, die f\xfcr ein Projekt erstellt wurden."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nutzung"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%project_auth_list project=<Project_Name>\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"Wo:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"project: Name des Projekts."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ausgabe"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"| AUTH NAME           | ACCESS KEY  | SECRET  | \n|---------------------|-------------|---------|\n| <Authorization_Name>| <ACCESS_KEY>| <SECRET>| \n"})}),"\n",(0,i.jsx)(n.h2,{id:"project_engine_deploy",children:"%project_engine_deploy"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beschreibung"}),": Stellt eine Engine f\xfcr das Projekt bereit. Der Bereitstellungsvorgang dauert einige Minuten. Bei erfolgreicher Bereitstellung wird ein Passwort generiert."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nutzung"}),":"]}),"\n",(0,i.jsxs)(t.A,{children:[(0,i.jsx)(l.A,{value:"aws1",label:"AWS",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore=<true|false>, prefixlist=<Prefix_List>, securitygroups=<Security_Group>, cidrs=<CIDR>, tags=<Tags>, iamrole=<IAM_Role>, roleprefix=<Role_Prefix>, permissionboundary=<Permission_Boundary>\n"})})}),(0,i.jsx)(l.A,{value:"azure",label:"Azure",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore=<true|false>, network=<Network>, keyvault=<Key_Vault>, keyvaultresourcegroup=<Key_Vault_Resource_Group>, networkresourcegroup=<Network_Resource_Group>\n"})})})]}),"\n",(0,i.jsx)(n.p,{children:"Wo:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"project: Name des Projekts."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"size: Gr\xf6\xdfe der Engine. Der Wert kann sein:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"klein"}),"\n",(0,i.jsx)(n.li,{children:"mittel"}),"\n",(0,i.jsx)(n.li,{children:"gro\xdf"}),"\n",(0,i.jsx)(n.li,{children:"extragro\xdf"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"[Optional]"})})," node: Anzahl der bereitzustellenden Engine-Knoten. Der Standardwert ist 1."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"[Optional]"})})," subnet: F\xfcr die Engine verwendetes Subnetz, wenn keine Standardwerte aus dem AI Unlimited-Setup vorhanden sind."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"[Optional]"})})," region: F\xfcr die Engine verwendete Region, wenn keine Standardwerte aus dem AI Unlimited-Setup vorhanden sind."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"[Optional]"})})," restore: Wenn False (F), wird die Engine bereitgestellt, aber die Objekte des Projekts werden nicht wiederhergestellt, was die Bereitstellungszeit verk\xfcrzt. Sie k\xf6nnen sie manuell mit %project_restore wiederherstellen. Der Standardwert ist True (T)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.A,{children:[(0,i.jsx)(l.A,{value:"aws1",label:"AWS",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"[Optional]"})})," prefixlist: Die Sammlung von CIDR-Bl\xf6cken, die eine Reihe von IP-Adressbereichen definieren, die die gleiche Richtliniendurchsetzung erfordern. Sie wird verwendet, um anzugeben, welche IP-Adressen mit der Engine kommunizieren k\xf6nnen."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"[Optional]"})})," securitygroups: Liste der Sicherheitsgruppen f\xfcr die VPC in jeder Region. Wenn Sie keine Sicherheitsgruppe angeben, wird die Engine automatisch der Standardsicherheitsgruppe f\xfcr die VPC zugeordnet."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"[Optional]"})})," cidrs: Liste der f\xfcr die Engine verwendeten CIDR-Adressen."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"[Optional]"})})," Tags: Die Schl\xfcssel-Wert-Paare, die der Engine zur schnellen Identifizierung zugewiesen werden."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"[Optional]"})})," iamrole: Die f\xfcr die Engine verwendete IAM-Rolle."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"[Optional]"})})," roleprefix: Die Zeichenfolge, die an den Anfang der der Engine zugewiesenen IAM-Rolle angeh\xe4ngt wird."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"[Optional]"})})," permissionboundary: Die ARN der IAM-Berechtigungsgrenze, die der der Engine zugewiesenen IAM-Rolle zugeordnet werden soll. Die Berechtigungsgrenze definiert die maximalen Berechtigungen, die die Rolle haben kann."]}),"\n"]}),"\n"]})}),(0,i.jsx)(l.A,{value:"azure",label:"Azure",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"[Optional]"})})," network: Das Netzwerk, in dem Sie die Engine bereitstellen m\xf6chten."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"[Optional]"})})," keyvault: Der von der Engine verwendete Key Vault, in dem vertrauliche Informationen wie Passw\xf6rter sicher gespeichert werden k\xf6nnen."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"[Optional]"})})," keyvaultresourcegroup: Die Ressourcengruppe, die den Key Vault enth\xe4lt."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"[Optional]"})})," networkresourcegroup: Die Ressourcengruppe, die das Netzwerk enth\xe4lt."]}),"\n"]}),"\n"]})})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ausgabe"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Started deploying.\nSuccess: Compute Engine setup, look at the connection manager\n"})}),"\n",(0,i.jsx)(n.h2,{id:"project_engine_suspend",children:"%project_engine_suspend"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beschreibung"}),": H\xe4lt die Engine an, wenn Sie mit der Arbeit fertig sind."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nutzung"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%project_engine_suspend <Project_Name>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Wo:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"project: Name des Projekts."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ausgabe"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Started suspend\nSuccess: Suspended Compute Engine\n"})}),"\n",(0,i.jsx)(n.h2,{id:"project_engine_list",children:"%project_engine_list"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beschreibung"}),": Zeigt die Liste der f\xfcr Ihr Projekt bereitgestellten Engines an."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nutzung"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%project_engine_list project=<Project_Name>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Wo:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"project: Name des Projekts."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ausgabe"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"| IP   | STATE   | REGION  | SIZE             | NODE             |\n|------|---------|---------|------------------|------------------|\n| <IP> | Deployed| <Region>| <Size_of_Engine> | <Number_of_Nodes>|\n"})}),"\n",(0,i.jsx)(n.h2,{id:"project_user_list",children:"%project_user_list"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beschreibung"}),": Zeigt die Liste der dem Projekt zugewiesenen Mitarbeiter im Git-Repository an."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nutzung"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%project_user_list project=<Project_Name>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Wo:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"[Optional]"})})," project: Name des Projekts."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ausgabe"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"| PROJECT ID   | USER  | PASSWORD  |\n|--------------|-------|-----------|\n| <Project_ID> | <User>| <Password>| \n"})}),"\n",(0,i.jsx)(n.h2,{id:"project_backup",children:"%project_backup"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beschreibung"}),": Sichert Ihre Projektinformationen und Objektdefinitionen innerhalb der Engine."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nutzung"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%project_backup project=<Project_Name>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Wo:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"project: Name des Projekts."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ausgabe"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Backup of the object definitions created\n"})}),"\n",(0,i.jsx)(n.h2,{id:"project_restore",children:"%project_restore"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beschreibung"}),": Stellt Ihre Projektinformationen und Objektdefinition aus Ihrem Git-Repository wieder her."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nutzung"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%project_restore project=<Project_Name>, gitref=<Git_Reference>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Wo:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"project: Name des Projekts."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"[Optional]"})})," gitref: Die Git-Referenz f\xfcr das Commit, aus dem das Projekt wiederhergestellt werden soll, wenn Sie nicht von der aktuellsten Version wiederherstellen m\xf6chten."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ausgabe"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Restore of the object definitions done\n"})}),"\n",(0,i.jsx)(n.h2,{id:"project_engine_update_users",children:"%project_engine_update_users"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beschreibung"}),": Aktualisiert Benutzer auf der bereitgestellten Engine. Wenn Benutzer nach der Bereitstellung der Engine als Mitarbeiter zum Git-Repository hinzugef\xfcgt werden, k\xf6nnen Sie diesen Befehl verwenden, um die bereitgestellte Engine zu aktualisieren und neue Benutzer zu erstellen."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nutzung"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%project_engine_update_users project=<Project_Name>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Wo:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"project: Name des Projekts."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ausgabe"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Username and password of each user on the engine\n"})}),"\n",(0,i.jsx)(n.h2,{id:"project_engine_update_auth",children:"%project_engine_update_auth"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beschreibung"}),": Aktualisiert die bereitgestellte Engine, oder f\xfcgt neue Autorisierungen hinzu, ohne die Engine anhalten und erneut bereitstellen zu m\xfcssen."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nutzung"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%project_engine_update_auth project=<Project_Name>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Wo:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"project: Name des Projekts."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ausgabe"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Authorizations updated\n"})}),"\n",(0,i.jsx)(n.h2,{id:"project_connection_add",children:"%project_connection_add"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beschreibung"}),": Aktualisiert die Verbindung f\xfcr die bereitgestellte Engine. Verwenden Sie diesen Befehl, um von einem anderen Notebook aus eine Verbindung zur Engine herzustellen, ohne manuell eine neue Verbindung erstellen zu m\xfcssen."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nutzung"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%project_connection_add project=<Project_Name>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Wo:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"project: Name des Projekts."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ausgabe"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"The connection manager shows the refreshed connection\n"})}),"\n",(0,i.jsx)(n.h2,{id:"help",children:"%help"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beschreibung"}),": Zeigt die Liste der vom AI Unlimited-Kernel bereitgestellten magischen Befehle an."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nutzung"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%help\n"})}),"\n",(0,i.jsx)(n.p,{children:"Dar\xfcber hinaus k\xf6nnen Sie f\xfcr jeden Befehl ausf\xfchrliche Hilfemeldungen sehen."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nutzung"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%help `command`\n"})})]})}function j(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>l});r(96540);var i=r(34164);const s={tabItem:"tabItem_Ymn6"};var t=r(74848);function l(e){var n=e.children,r=e.hidden,l=e.className;return(0,t.jsx)("div",{role:"tabpanel",className:(0,i.A)(s.tabItem,l),hidden:r,children:n})}},56240:(e,n,r)=>{r.d(n,{A:()=>v});var i=r(96540),s=r(34164),t=r(23104),l=r(56347),d=r(205),c=r(57485);var o=r(89466);function a(e){var n,r;return null!=(n=null==(r=i.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,i.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function h(e){var n=e.values,r=e.children;return(0,i.useMemo)((function(){var e=null!=n?n:function(e){return a(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n,r,i=(void 0===(r=function(e,n){return e.value===n.value})&&(r=function(e,n){return e===n}),(n=e).filter((function(e,i){return n.findIndex((function(n){return r(n,e)}))!==i})));if(i.length>0)throw new Error('Docusaurus error: Duplicate values "'+i.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function u(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function j(e){var n=e.queryString,r=void 0!==n&&n,s=e.groupId,t=(0,l.W6)(),d=function(e){var n=e.queryString,r=void 0!==n&&n,i=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=i?i:null}({queryString:r,groupId:s});return[(0,c.aZ)(d),(0,i.useCallback)((function(e){if(d){var n=new URLSearchParams(t.location.search);n.set(d,e),t.replace(Object.assign({},t.location,{search:n.toString()}))}}),[d,t])]}function p(e){var n,r,s,t,l=e.defaultValue,c=e.queryString,a=void 0!==c&&c,p=e.groupId,x=h(e),g=(0,i.useState)((function(){return function(e){var n,r=e.defaultValue,i=e.tabValues;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!u({value:r,tabValues:i}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+i.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var s=null!=(n=i.find((function(e){return e.default})))?n:i[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:l,tabValues:x})})),m=g[0],_=g[1],b=j({queryString:a,groupId:p}),f=b[0],v=b[1],k=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),r=(0,o.Dv)(n),s=r[0],t=r[1],[s,(0,i.useCallback)((function(e){n&&t.set(e)}),[n,t])]),A=k[0],w=k[1],N=function(){var e=null!=f?f:A;return u({value:e,tabValues:x})?e:null}();return(0,d.A)((function(){N&&_(N)}),[N]),{selectedValue:m,selectValue:(0,i.useCallback)((function(e){if(!u({value:e,tabValues:x}))throw new Error("Can't select invalid tab value="+e);_(e),v(e),w(e)}),[v,w,x]),tabValues:x}}var x=r(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=r(74848);function _(e){var n=e.className,r=e.block,i=e.selectedValue,l=e.selectValue,d=e.tabValues,c=[],o=(0,t.a_)().blockElementScrollPositionUntilNextRender,a=function(e){var n=e.currentTarget,r=c.indexOf(n),s=d[r].value;s!==i&&(o(n),l(s))},h=function(e){var n,r=null;switch(e.key){case"Enter":a(e);break;case"ArrowRight":var i,s=c.indexOf(e.currentTarget)+1;r=null!=(i=c[s])?i:c[0];break;case"ArrowLeft":var t,l=c.indexOf(e.currentTarget)-1;r=null!=(t=c[l])?t:c[c.length-1]}null==(n=r)||n.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:d.map((function(e){var n=e.value,r=e.label,t=e.attributes;return(0,m.jsx)("li",Object.assign({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:function(e){return c.push(e)},onKeyDown:h,onClick:a},t,{className:(0,s.A)("tabs__item",g.tabItem,null==t?void 0:t.className,{"tabs__item--active":i===n}),children:null!=r?r:n}),n)}))})}function b(e){var n=e.lazy,r=e.children,s=e.selectedValue,t=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var l=t.find((function(e){return e.props.value===s}));return l?(0,i.cloneElement)(l,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:t.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==s})}))})}function f(e){var n=p(e);return(0,m.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,m.jsx)(_,Object.assign({},e,n)),(0,m.jsx)(b,Object.assign({},e,n))]})}function v(e){var n=(0,x.A)();return(0,m.jsx)(f,Object.assign({},e,{children:a(e.children)}),String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>d});var i=r(96540);const s={},t=i.createContext(s);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);
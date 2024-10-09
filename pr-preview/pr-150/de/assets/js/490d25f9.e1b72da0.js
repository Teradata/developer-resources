"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[10],{44249:(e,n,i)=>{i.d(n,{Ay:()=>l,RM:()=>t});var r=i(74848),s=i(28453);const t=[];function d(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Der Ordner ",(0,r.jsx)(n.code,{children:"Bereitstellungen"})," im von Teradata bereitgestellten ",(0,r.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited",children:"AI Unlimited GitHub-Repository"})," enth\xe4lt Vorlagen-, Parameter- und Richtliniendateien f\xfcr die Installation von AI Unlimited."]}),"\n",(0,r.jsx)(n.p,{children:"\xd6ffnen Sie ein Terminalfenster und klonen Sie das Repository."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/Teradata/ai-unlimited\n"})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50563:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>d,metadata:()=>a,toc:()=>o});var r=i(74848),s=i(28453),t=i(44249);const d={id:"deploy-manager-azure-portal",title:"Installieren auf Azure",description:"Erfahren Sie, wie Sie den Manager mithilfe einer Azure Resource Manager (ARM)-Vorlage bereitstellen.",sidebar_label:"Installieren auf Azure",sidebar_position:2,pagination_prev:null,pagination_next:null},l="Installieren des Managers auf Azure",a={id:"install-ai-unlimited/deploy-manager-azure-portal",title:"Installieren auf Azure",description:"Erfahren Sie, wie Sie den Manager mithilfe einer Azure Resource Manager (ARM)-Vorlage bereitstellen.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/install-ai-unlimited/prod-azure-portal-deploy-manager.md",sourceDirName:"install-ai-unlimited",slug:"/install-ai-unlimited/deploy-manager-azure-portal",permalink:"/pr-preview/pr-150/de/ai-unlimited/install-ai-unlimited/deploy-manager-azure-portal",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"deploy-manager-azure-portal",title:"Installieren auf Azure",description:"Erfahren Sie, wie Sie den Manager mithilfe einer Azure Resource Manager (ARM)-Vorlage bereitstellen.",sidebar_label:"Installieren auf Azure",sidebar_position:2,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},h={},o=[{value:"Klonen des Repository",id:"klonen-des-repository",level:2},...t.RM,{value:"Suchen Sie nach der Managervorlage",id:"suchen-sie-nach-der-managervorlage",level:2},{value:"Laden Sie die Vorlage",id:"laden-sie-die-vorlage",level:2},{value:"Angeben von Instanzdetails",id:"angeben-von-instanzdetails",level:2},{value:"Erstellen der Instanz",id:"erstellen-der-instanz",level:2},{value:"Wie geht es weiter?",id:"wie-geht-es-weiter",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"installieren-des-managers-auf-azure",children:"Installieren des Managers auf Azure"}),"\n",(0,r.jsxs)(n.p,{children:["Bevor Sie beginnen, stellen Sie sicher, dass Sie \xfcber die ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-150/de/ai-unlimited/install-ai-unlimited/#prerequisites",children:"Voraussetzungen"})," verf\xfcgen und Ihr Azure-Konto ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-150/de/ai-unlimited/resources/azure-account-requirements",children:"die Anforderungen"})," erf\xfcllt."]}),"\n",(0,r.jsx)(n.p,{children:"Der AI Unlimited Manager orchestriert die Bereitstellung der Engine und umfasst eine webbasierte Benutzeroberfl\xe4che f\xfcr die Einrichtung."}),"\n",(0,r.jsxs)(n.p,{children:["Sie verwenden eine von Teradata bereitgestellte Azure Resource Manager(ARM)-Vorlage, um den Manager vom Azure Portal aus zu installieren. Sie stellen eine Serverinstanz bereit, auf der der Manager in einem von ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-150/de/ai-unlimited/glossary#systemd",children:"systemd"})," gesteuerten Container ausgef\xfchrt wird."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Wenn Sie Hilfe bei der Installation ben\xf6tigen, senden Sie eine E-Mail an das ",(0,r.jsx)("a",{href:"mailto:aiunlimited.support@Teradata.com",children:"Support-Team"})," oder fragen Sie die ",(0,r.jsx)(n.a,{href:"https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa",children:"Gemeinschaft"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"klonen-des-repository",children:"Klonen des Repository"}),"\n","\n",(0,r.jsx)(t.Ay,{}),"\n",(0,r.jsx)(n.h2,{id:"suchen-sie-nach-der-managervorlage",children:"Suchen Sie nach der Managervorlage"}),"\n",(0,r.jsx)(n.p,{children:"ARM-Vorlagen f\xfcr den Manager finden Sie hier im AI Unlimited GitHub-Repository:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"deployments/azure/templates/arm/ai-unlimited"})}),"\n",(0,r.jsxs)(n.p,{children:["W\xe4hlen Sie eine Vorlage basierend darauf aus, ob und welchen Typ Sie einen ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-150/de/ai-unlimited/glossary#load-balancer",children:"Lastausgleich"})," verwenden m\xf6chten."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"M\xf6glicherweise m\xf6chten Sie einen Cloud-Administrator in Ihrer Organisation um Rat fragen."})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ai-unlimited-with-alb.json"})," \u2013 Hostet den Manager hinter einem ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-150/de/ai-unlimited/glossary#application-load-balancer",children:"application load balancer"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ai-unlimited-with-nlb.json"})," \u2013 Hostet den Manager hinter einem ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-150/de/ai-unlimited/glossary#network-load-balancer",children:"network load balancer"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ai-unlimited-without-lb.json"})," \u2013 Kein Lastausgleich. Wenn Sie sich nicht sicher sind, welche Vorlage Sie verwenden sollen, empfehlen wir diese."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"laden-sie-die-vorlage",children:"Laden Sie die Vorlage"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Melden Sie sich im ",(0,r.jsx)(n.a,{href:"https://portal.azure.com",children:"Azure Portal"})," an.","\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Verweise auf das Azure Portal sind auf dem Stand vom 29. Mai 2024."})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Suchen Sie nach ",(0,r.jsx)(n.strong,{children:"benutzerdefinierte Bereitstellung"})," und w\xe4hlen Sie dann ",(0,r.jsx)(n.strong,{children:"Bereitstellen einer benutzerdefinierten Vorlage"})," aus."]}),"\n",(0,r.jsxs)(n.li,{children:["W\xe4hlen Sie ",(0,r.jsx)(n.strong,{children:"Erstellen Sie Ihre eigene Vorlage im Editor"})," und dann ",(0,r.jsx)(n.strong,{children:"Datei laden"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["W\xe4hlen Sie die gew\xfcnschte Vorlagendatei aus und w\xe4hlen Sie dann ",(0,r.jsx)(n.strong,{children:"Speichern"}),"."]}),"\n"]}),"\n",(0,r.jsx)("a",{id:"azure-parms"}),"\n",(0,r.jsx)(n.h2,{id:"angeben-von-instanzdetails",children:"Angeben von Instanzdetails"}),"\n",(0,r.jsx)(n.p,{children:"\xdcberpr\xfcfen Sie die Parameter. Geben Sie Werte f\xfcr die erforderlichen Parameter ein. Ihre Organisation ben\xf6tigt m\xf6glicherweise andere."}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Azure und AI Unlimited-Parameter"}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Beschreibung"}),(0,r.jsx)(n.th,{children:"Hinweise"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Subscription"}),(0,r.jsx)(n.td,{children:"Das Azure-Abonnement, das Sie f\xfcr die Bereitstellung von AI Unlimited verwenden m\xf6chten."}),(0,r.jsxs)(n.td,{children:["Erforderlich",(0,r.jsx)("br",{}),"Standard: NA ",(0,r.jsx)("br",{}),"Dies muss ein Prepaid-Konto sein."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Region"}),(0,r.jsx)(n.td,{children:"Die Region, in der Sie AI Unlimited bereitstellen m\xf6chten."}),(0,r.jsxs)(n.td,{children:["Erforderlich",(0,r.jsx)("br",{}),"Standard: NA",(0,r.jsx)("br",{}),"W\xe4hlen Sie die Azure-Region aus, die Ihrem Arbeitsort am n\xe4chsten liegt, und die Datenressourcen, die mit AI Unlimited verwendet werden sollen."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resource Group Name"}),(0,r.jsx)(n.td,{children:"Der Name des Containers, der verwandte AI Unlimited-Ressourcen zusammenfasst."}),(0,r.jsxs)(n.td,{children:["Erforderlich",(0,r.jsx)("br",{}),"Standard: ai-unlimited-workspace"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"AI Unlimited Name"}),(0,r.jsx)(n.td,{children:"Eindeutiger Name f\xfcr AI Unlimited."}),(0,r.jsxs)(n.td,{children:["Erforderlich",(0,r.jsx)("br",{}),"Standard: NA"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Public Key"}),(0,r.jsx)(n.td,{children:"Der \xf6ffentliche SSH-Schl\xfcssel, den Sie verwenden k\xf6nnen, um \xfcber SSH eine Verbindung zu einer VM herzustellen."}),(0,r.jsxs)(n.td,{children:["Erforderlich",(0,r.jsx)("br",{}),"Standard: NA",(0,r.jsx)("br",{}),"Dieser Wert muss mit \u201essh-rsa\u201c beginnen."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OS Version"}),(0,r.jsx)(n.td,{children:"Die Versionen der Betriebssysteme, die im aktuellen Abonnement verf\xfcgbar sind."}),(0,r.jsxs)(n.td,{children:["Optional mit Standard",(0,r.jsx)("br",{}),"Standard: Ubuntu-2004"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Instance Type"}),(0,r.jsx)(n.td,{children:"Der Instanztyp, den Sie f\xfcr AI Unlimited verwenden m\xf6chten."}),(0,r.jsxs)(n.td,{children:["Optional",(0,r.jsx)("br",{}),"Standard: STANDARD_D2_V3",(0,r.jsx)("br",{}),"Wir empfehlen, den Standardinstanztyp zu verwenden, um Kosten zu sparen. Der Standardinstanztyp ist die Standard-Dv3-Serie mit 2 vCPUs und 8,0 GiB Speicher."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Network"}),(0,r.jsx)(n.td,{children:"Der Name des Netzwerks, in dem Sie die AI Unlimited-Instanz bereitstellen m\xf6chten."}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)("br",{}),"Optional",(0,r.jsx)("br",{}),"Standard: NA"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Subnet"}),(0,r.jsx)(n.td,{children:"Das Subnetzwerk, in dem Sie die AI Unlimited-Instanz bereitstellen m\xf6chten."}),(0,r.jsxs)(n.td,{children:["Erforderlich",(0,r.jsx)("br",{}),"Standard: NA",(0,r.jsx)("br",{}),"Das Subnetz muss sich in der ausgew\xe4hlten Verf\xfcgbarkeitszone befinden."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Security Group"}),(0,r.jsx)(n.td,{children:"Die virtuelle Firewall, die den ein- und ausgehenden Datenverkehr zur Instanz kontrolliert."}),(0,r.jsxs)(n.td,{children:["Optional",(0,r.jsx)("br",{}),"Standard: AiUnlimitedSecurityGroup",(0,r.jsx)("br",{}),"Die Sicherheitsgruppe wird als Regelsatz implementiert, der angibt, welche Protokolle, Ports und IP-Adressen oder CIDR-Bl\xf6cke auf die Instanz zugreifen d\xfcrfen. Definieren Sie mindestens eine der Zugriffs-CIDR- oder Sicherheitsgruppen, um eingehenden Datenverkehr zuzulassen, sofern Sie keine benutzerdefinierten Eingangsregeln f\xfcr Sicherheitsgruppen erstellen."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Access CIDR"}),(0,r.jsx)(n.td,{children:"Der CIDR-IP-Adressbereich, der auf die Instanz zugreifen darf."}),(0,r.jsxs)(n.td,{children:["Optional",(0,r.jsx)("br",{}),"Standard: 0.0.0.0/0",(0,r.jsx)("br",{}),"Wir empfehlen, diesen Wert auf einen vertrauensw\xfcrdigen IP-Bereich festzulegen. Definieren Sie mindestens eine der Zugriffs-CIDR oder Sicherheitsgruppen, um eingehenden Datenverkehr zuzulassen, sofern Sie keine benutzerdefinierten Eingangsregeln f\xfcr Sicherheitsgruppen erstellen."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"AI Unlimited HTTP Port"}),(0,r.jsx)(n.td,{children:"Der Port f\xfcr den Zugriff auf die AI Unlimited-Benutzeroberfl\xe4che."}),(0,r.jsxs)(n.td,{children:["Erforderlich mit Standard",(0,r.jsx)("br",{}),"Standard: 3000"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"AI Unlimited GRPC Port"}),(0,r.jsx)(n.td,{children:"Der Port f\xfcr den Zugriff auf die AI Unlimited API."}),(0,r.jsxs)(n.td,{children:["Erforderlich mit Standard",(0,r.jsx)("br",{}),"Standard: 3282"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Source App Sec Groups"}),(0,r.jsx)(n.td,{children:"Die Quellanwendungssicherheitsgruppen (Application Security Groups, ASG), die die Berechtigung haben, eine Verbindung mit der AI Unlimited-Instanz herzustellen. Mit ASGs k\xf6nnen Sie Ihre virtuellen Maschinen (VMs) basierend auf ihren spezifischen Netzwerksicherheitsrichtlinien organisieren. Diese Sicherheitsrichtlinien bestimmen, welcher Datenverkehr auf Ihrer virtuellen Maschine zul\xe4ssig ist und welcher nicht."}),(0,r.jsxs)(n.td,{children:["Optional",(0,r.jsx)("br",{}),"Standard: NA",(0,r.jsx)("br",{})," W\xe4hlen Sie eine Anwendungssicherheitsgruppe in derselben Region wie die Netzwerkschnittstelle."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Destination App Sec Groups"}),(0,r.jsx)(n.td,{children:"Die Zielanwendungssicherheitsgruppen, die \xfcber die Berechtigung verf\xfcgen, eine Verbindung mit der AI Unlimited-Instanz herzustellen."}),(0,r.jsxs)(n.td,{children:["Optional",(0,r.jsx)("br",{}),"Standard: NA",(0,r.jsx)("br",{}),"W\xe4hlen Sie eine Anwendungssicherheitsgruppe in derselben Region wie die Netzwerkschnittstelle."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Role Definition ID"}),(0,r.jsx)(n.td,{children:"Die ID der mit AI Unlimited zu verwendenden Rolle."}),(0,r.jsxs)(n.td,{children:["Erforderlich",(0,r.jsx)("br",{}),"Standard: NA",(0,r.jsx)("br",{}),"Verwenden Sie den Azure CLI-Befehl Get-AzRoleDefinition, um Ihre Rollendefinitions-ID abzurufen."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Allow Public SSH"}),(0,r.jsx)(n.td,{children:"Gibt an, ob Sie Secure Shell-Schl\xfcssel (SSH) zum Herstellen einer Verbindung mit VMs in Azure verwenden k\xf6nnen."}),(0,r.jsxs)(n.td,{children:["Optional",(0,r.jsx)("br",{}),"Standardm\xe4\xdfig: true"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Use Key Vault"}),(0,r.jsx)(n.td,{children:"Gibt an, ob Key Vault zum Abrufen des sicheren Passworts w\xe4hrend einer Bereitstellung verwendet werden soll."}),(0,r.jsxs)(n.td,{children:["Optional",(0,r.jsx)("br",{}),"Standard: New"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Use Persistent Volume"}),(0,r.jsxs)(n.td,{children:["Gibt an, ob Sie zum Speichern von Daten ein neues oder vorhandenes persistentes Volume verwenden m\xf6chten. Weitere Informationen finden Sie unter ",(0,r.jsx)(n.em,{children:"Mehr erfahren: Persistentes Volume verwenden"})," unter dem Parameterabschnitt."]}),(0,r.jsxs)(n.td,{children:["Optional mit Standard",(0,r.jsx)("br",{}),"Standard: New ",(0,r.jsx)("br",{}),"Unterst\xfctzte Optionen: \u201eNeu\u201c oder \u201eVorhanden\u201c, abh\xe4ngig von Ihrem Anwendungsfall."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Persistent Volume Size"}),(0,r.jsx)(n.td,{children:"Die Gr\xf6\xdfe des persistenten Datentr\xe4gers in GB, den Sie an die Instanz anh\xe4ngen k\xf6nnen."}),(0,r.jsxs)(n.td,{children:["Optional",(0,r.jsx)("br",{}),"Standard: 100"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Existing Persistent Volume"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)("br",{}),"Die ID des vorhandenen persistenten Datentr\xe4gers, den Sie an die Instanz anh\xe4ngen k\xf6nnen."]}),(0,r.jsxs)(n.td,{children:["Erforderlich, wenn UsePersistentVolume auf Vorhanden gesetzt ist.",(0,r.jsx)("br",{}),"Standard: None",(0,r.jsx)("br",{}),"Das persistente Volume muss sich in derselben Verf\xfcgbarkeitszone wie die AI Unlimited-Instanz befinden."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"AI Unlimited Version"}),(0,r.jsx)(n.td,{children:"Die Version von AI Unlimited, die Sie bereitstellen m\xf6chten."}),(0,r.jsxs)(n.td,{children:["Erforderlich mit Standard",(0,r.jsx)("br",{}),"Standard: latest",(0,r.jsx)("br",{}),"Der Wert ist ein Container-Versionstag."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Use NLB"}),(0,r.jsx)(n.td,{children:"Gibt an, ob auf die Instanz \xfcber einen Network Load Balancer zugegriffen wird."}),(0,r.jsxs)(n.td,{children:["Erforderlich mit Standard",(0,r.jsx)("br",{}),"Standard: false"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Tags"}),(0,r.jsx)(n.td,{children:"Die Schl\xfcssel-Wert-Paare, die den Ressourcen zur schnellen Identifizierung zugewiesen werden."}),(0,r.jsxs)(n.td,{children:["Optional",(0,r.jsx)("br",{}),"Standard",":NA"]})]})]})]})]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Mehr erfahren: Persistentes Volume verwenden"}),(0,r.jsx)(n.p,{children:"Die Managerinstanz wird in einem Container ausgef\xfchrt und speichert ihre Konfigurationsdaten in einer Datenbank im Stammdatentr\xe4ger der Instanz. Diese Daten bleiben erhalten, wenn Sie die Instanz herunterfahren, neu starten oder einen Snapshot erstellen und neu starten."}),(0,r.jsx)(n.p,{children:"Ein persistentes Volume speichert Daten f\xfcr eine containerisierte Anwendung \xfcber die Lebensdauer des Containers, Pods oder Knotens hinaus, in dem sie ausgef\xfchrt wird."}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Ohne ein persistentes Volumen"})}),(0,r.jsx)(n.p,{children:"Wenn der Container, Pod oder Knoten abst\xfcrzt oder beendet wird, gehen die Konfigurationsdaten des Managers verloren. Sie k\xf6nnen eine neue Managerinstanz bereitstellen, jedoch nicht im selben Zustand wie die verlorene."}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Mit einem persistenten Volumen"})}),(0,r.jsx)(n.p,{children:"Wenn der Container, der Pod oder der Knoten abst\xfcrzt oder beendet wird und die Konfigurationsdaten des Managers in einem persistenten Volume gespeichert sind, k\xf6nnen Sie eine neue Managerinstanz bereitstellen, die dieselbe Konfiguration wie die verlorene hat."}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Beispiel"})}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Implementieren Sie den Manager und setzen Sie den Parameter ",(0,r.jsx)(n.code,{children:"Persistentes Volume verwenden"})," auf ",(0,r.jsx)(n.strong,{children:"New"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Nachdem Sie den Stapel erstellt haben, notieren Sie sich auf der Seite ",(0,r.jsx)(n.strong,{children:"Ausgaben"})," die \u201evolume-id\u201c."]}),"\n",(0,r.jsx)(n.li,{children:"Nutzen Sie AI Unlimited."}),"\n",(0,r.jsxs)(n.li,{children:["Wenn die Managerinstanz verloren geht, stellen Sie den Manager erneut bereit und schlie\xdfen Sie diese Parameter ein:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Persistentes Volume verwenden"}),": ",(0,r.jsx)(n.strong,{children:"New"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Vorhandenes persistentes Volume"}),": der Wert, den Sie in Schritt 2 notiert haben"]}),"\n"]}),"\n"]}),"\n"]}),(0,r.jsx)(n.p,{children:"Die neue Managerinstanz hat die gleiche Konfiguration wie die verlorene."})]}),"\n",(0,r.jsx)(n.h2,{id:"erstellen-der-instanz",children:"Erstellen der Instanz"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["W\xe4hlen Sie ",(0,r.jsx)(n.strong,{children:"\xdcberpr\xfcfen + erstellen"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["W\xe4hlen Sie ",(0,r.jsx)(n.strong,{children:"Erstellen"}),".",(0,r.jsx)("br",{}),"\nAuf der Seite ",(0,r.jsx)(n.strong,{children:"Benachrichtigungen"})," k\xf6nnen Sie den Fortschritt \xfcberwachen."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Wenn die Bereitstellung abgeschlossen ist, werden auf der Seite ",(0,r.jsx)(n.strong,{children:"Ausgaben"})," die f\xfcr die erstellten Ressourcen generierten Werte angezeigt."]}),"\n",(0,r.jsx)(n.p,{children:"Sie ben\xf6tigen die URL, um auf den Manager zuzugreifen und AI Unlimited einzurichten."}),"\n",(0,r.jsx)(n.h2,{id:"wie-geht-es-weiter",children:"Wie geht es weiter?"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/pr-preview/pr-150/de/ai-unlimited/resources/create-oauth-app",children:"Erstellen Sie eine OAuth-App"}),", um die Authentifizierung zwischen AI Unlimited und Ihrem Git-Provider-Konto zu erm\xf6glichen."]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>l});var r=i(96540);const s={},t=r.createContext(s);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);
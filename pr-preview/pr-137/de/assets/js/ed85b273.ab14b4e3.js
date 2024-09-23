"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[1247],{44249:(e,n,i)=>{i.d(n,{Ay:()=>l,RM:()=>t});var r=i(74848),s=i(28453);const t=[];function d(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Der Ordner ",(0,r.jsx)(n.code,{children:"Bereitstellungen"})," im von Teradata bereitgestellten ",(0,r.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited",children:"AI Unlimited GitHub-Repository"})," enth\xe4lt Vorlagen-, Parameter- und Richtliniendateien f\xfcr die Installation von AI Unlimited."]}),"\n",(0,r.jsx)(n.p,{children:"\xd6ffnen Sie ein Terminalfenster und klonen Sie das Repository."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/Teradata/ai-unlimited\n"})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},60155:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>d,metadata:()=>a,toc:()=>o});var r=i(74848),s=i(28453),t=i(44249);const d={id:"deploy-manager-aws-console",title:"Auf AWS installieren",description:"Erfahren Sie, wie Sie den Manager mithilfe einer CloudFormation-Vorlage bereitstellen.",sidebar_label:"Auf AWS installieren",sidebar_position:1,pagination_prev:null,pagination_next:null},l="Installieren Sie den Manager auf AWS",a={id:"install-ai-unlimited/deploy-manager-aws-console",title:"Auf AWS installieren",description:"Erfahren Sie, wie Sie den Manager mithilfe einer CloudFormation-Vorlage bereitstellen.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/install-ai-unlimited/prod-aws-console-deploy-ai-unlimited.md",sourceDirName:"install-ai-unlimited",slug:"/install-ai-unlimited/deploy-manager-aws-console",permalink:"/pr-preview/pr-137/de/ai-unlimited/install-ai-unlimited/deploy-manager-aws-console",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"deploy-manager-aws-console",title:"Auf AWS installieren",description:"Erfahren Sie, wie Sie den Manager mithilfe einer CloudFormation-Vorlage bereitstellen.",sidebar_label:"Auf AWS installieren",sidebar_position:1,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},h={},o=[{value:"Klonen des Repository",id:"klonen-des-repository",level:2},...t.RM,{value:"Suchen Sie nach der Managervorlage",id:"suchen-sie-nach-der-managervorlage",level:2},{value:"Laden Sie die Vorlage",id:"laden-sie-die-vorlage",level:2},{value:"Geben Sie Stapeldetails und -optionen an",id:"geben-sie-stapeldetails-und--optionen-an",level:2},{value:"\xdcberpr\xfcfen und Erstellen des Stapels",id:"\xfcberpr\xfcfen-und-erstellen-des-stapels",level:2},{value:"Wie geht es weiter?",id:"wie-geht-es-weiter",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"installieren-sie-den-manager-auf-aws",children:"Installieren Sie den Manager auf AWS"}),"\n",(0,r.jsxs)(n.p,{children:["Bevor Sie beginnen, stellen Sie sicher, dass Sie \xfcber die ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-137/de/ai-unlimited/install-ai-unlimited/#prerequisites",children:"Voraussetzungen"})," verf\xfcgen und Ihr AWS-Konto ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-137/de/ai-unlimited/resources/aws-account-requirements",children:"die Anforderungen"})," erf\xfcllt."]}),"\n",(0,r.jsx)(n.p,{children:"Der AI Unlimited Manager orchestriert die Bereitstellung der Engine und umfasst eine webbasierte Benutzeroberfl\xe4che f\xfcr die Einrichtung."}),"\n",(0,r.jsxs)(n.p,{children:["Sie verwenden eine von Teradata bereitgestellte CloudFormation-Vorlage, um den Manager \xfcber die AWS Management Console zu installieren. Sie stellen eine Serverinstanz bereit, auf der der Manager in einem von ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-137/de/ai-unlimited/glossary#systemd",children:"systemd"})," gesteuerten Container ausgef\xfchrt wird."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Wenn Sie Hilfe bei der Installation ben\xf6tigen, senden Sie eine E-Mail an das ",(0,r.jsx)("a",{href:"mailto:aiunlimited.support@Teradata.com",children:"Support-Team"})," oder fragen Sie die ",(0,r.jsx)(n.a,{href:"https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa",children:"Gemeinschaft"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"klonen-des-repository",children:"Klonen des Repository"}),"\n","\n",(0,r.jsx)(t.Ay,{}),"\n",(0,r.jsx)(n.h2,{id:"suchen-sie-nach-der-managervorlage",children:"Suchen Sie nach der Managervorlage"}),"\n",(0,r.jsx)(n.p,{children:"CloudFormation-Vorlagen f\xfcr den Manager finden Sie hier im AI Unlimited GitHub-Repository:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"deployments/aws/templates/ai-unlimited/"})}),"\n",(0,r.jsxs)(n.p,{children:["W\xe4hlen Sie eine Vorlage basierend darauf aus, ob und welchen Typ Sie einen ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-137/de/ai-unlimited/glossary#load-balancer",children:"Lastausgleich"})," verwenden m\xf6chten."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"M\xf6glicherweise m\xf6chten Sie einen Cloud-Administrator in Ihrer Organisation um Rat fragen."})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ai-unlimited-with-alb.yaml"})," \u2013 Hostet den Manager hinter einem ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-137/de/ai-unlimited/glossary#application-load-balancer",children:"application load balancer"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ai-unlimited-with-nlb.yaml"})," \u2013 Hostet den Manager hinter einem ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-137/de/ai-unlimited/glossary#network-load-balancer",children:"network load balancer"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ai-unlimited-without-lb.yaml"})," \u2013 Kein Lastausgleich. Wenn Sie sich nicht sicher sind, welche Vorlage Sie verwenden sollen, empfehlen wir diese."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"laden-sie-die-vorlage",children:"Laden Sie die Vorlage"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Melden Sie sich bei der ",(0,r.jsx)(n.a,{href:"https://aws.amazon.com",children:"AWS-Konsole"})," an.",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Verweise auf die AWS Management Console sind auf dem Stand vom 29. Mai 2024."})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["W\xe4hlen Sie die AWS-Region aus, in der AI Unlimited bereitgestellt werden soll.",(0,r.jsx)("br",{}),"\nWir empfehlen, die Region auszuw\xe4hlen, die Ihrem prim\xe4ren Arbeitsort am n\xe4chsten liegt."]}),"\n",(0,r.jsxs)(n.li,{children:["Starten Sie einen entsprechenden Suchvorgang und gehen Sie zu ",(0,r.jsx)(n.strong,{children:"CloudFormation"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["W\xe4hlen Sie ",(0,r.jsx)(n.strong,{children:"Stapel erstellen"}),"und dann ",(0,r.jsx)(n.strong,{children:"Mit neuen Ressourcen (Standard)"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["W\xe4hlen Sie ",(0,r.jsx)(n.strong,{children:"Eine vorhandene Vorlage ausw\xe4hlen"})," und dann ",(0,r.jsx)(n.strong,{children:"Eine Vorlagendatei hochladen"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["W\xe4hlen Sie die gew\xfcnschte Vorlagendatei aus und klicken Sie auf ",(0,r.jsx)(n.strong,{children:"Weiter"}),"."]}),"\n"]}),"\n",(0,r.jsx)("a",{id:"aws-parms"}),"\n",(0,r.jsx)(n.h2,{id:"geben-sie-stapeldetails-und--optionen-an",children:"Geben Sie Stapeldetails und -optionen an"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Geben Sie einen Stapelnamen an."}),"\n",(0,r.jsxs)(n.li,{children:["\xdcberpr\xfcfen Sie die Parameter. Geben Sie Werte f\xfcr die erforderlichen Parameter ein. Ihre Organisation ben\xf6tigt m\xf6glicherweise andere.",(0,r.jsx)("br",{})]}),"\n"]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"AWS- und Manager-Parameter"}),(0,r.jsx)(n.p,{children:"Die Parameter f\xfcr jede Vorlage sind unterschiedlich. M\xf6glicherweise werden hier einige Parameter angezeigt, die in der Konsole nicht angezeigt werden."}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Beschreibung"}),(0,r.jsx)(n.th,{children:"Hinweise"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Stack name"}),(0,r.jsx)(n.td,{children:"Die Kennung, mit der Sie den AI Unlimited-Stapel in einer Stapelliste finden k\xf6nnen."}),(0,r.jsxs)(n.td,{children:["Erforderlich",(0,r.jsx)("br",{}),"Standard: NA",(0,r.jsx)("br",{})," Der Name darf nur alphanumerische Zeichen (Gro\xdf-/Kleinschreibung beachten) und Bindestriche enthalten. Er muss mit einem alphabetischen Zeichen beginnen und darf nicht l\xe4nger als 128 Zeichen sein."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"AiUnlimitedName"}),(0,r.jsx)(n.td,{children:"Der Name der AI Unlimited-Instanz."}),(0,r.jsxs)(n.td,{children:["Erforderlich mit Standard",(0,r.jsx)("br",{}),"Standard: ai-unlimited",(0,r.jsx)("br",{}),"Der Name darf nur alphanumerische Zeichen (Gro\xdf-/Kleinschreibung beachten) und Bindestriche enthalten. Er muss mit einem alphabetischen Zeichen beginnen und darf nicht l\xe4nger als 20 Zeichen sein."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"InstanceType"}),(0,r.jsx)(n.td,{children:"Der EC2-Instanztyp f\xfcr den Manager."}),(0,r.jsxs)(n.td,{children:["Erforderlich mit Standard",(0,r.jsx)("br",{}),"Standard: t3.micro",(0,r.jsx)("br",{})," ",(0,r.jsx)(n.strong,{children:"WICHTIG"}),": Wenn die Instanz nicht die richtige Gr\xf6\xdfe hat, k\xf6nnen Fehler beim Bereitstellen und Anhalten der Engine auftreten und Sie m\xfcssen den Manager auf einer gr\xf6\xdferen Instanz neu installieren.  Siehe ",(0,r.jsx)(n.em,{children:"Mehr erfahren: Empfehlungen zum Manager-Instanztyp (Gr\xf6\xdfe)"})," unter dem Abschnitt \u201eParameter\u201c."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RootVolumeSize"}),(0,r.jsx)(n.td,{children:"Die Gr\xf6\xdfe der Root-Festplatte in GB, die Sie an die Instanz anh\xe4ngen m\xf6chten."}),(0,r.jsxs)(n.td,{children:["Erforderlich mit Standard",(0,r.jsx)("br",{}),"Standard: 20",(0,r.jsx)("br",{}),"Unterst\xfctzt Werte zwischen 8 und 1000."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"TerminationProtection"}),(0,r.jsx)(n.td,{children:"Aktiviert den Instanzbeendigungsschutz."}),(0,r.jsxs)(n.td,{children:["Erforderlich mit Standard",(0,r.jsx)("br",{}),"Standard: false"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"IamRole"}),(0,r.jsx)(n.td,{children:"Gibt an, ob CloudFormation eine neue IAM-Rolle erstellen oder eine vorhandene verwenden soll."}),(0,r.jsxs)(n.td,{children:["Erforderlich mit Standard",(0,r.jsx)("br",{}),"Standard: New",(0,r.jsx)("br",{}),"Unterst\xfctzte Optionen sind: \u201eNeu\u201c oder \u201eVorhanden\u201c"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"IamRoleName"}),(0,r.jsx)(n.td,{children:"Der Name der IAM-Rolle, die der Instanz zugewiesen werden soll, entweder eine vorhandene oder eine neu erstellte IAM-Rolle."}),(0,r.jsxs)(n.td,{children:["Optional mit Standard",(0,r.jsx)("br",{}),"Standard: ai-unlimited-iam-role",(0,r.jsx)("br",{}),"Beim Benennen einer neuen IAM-Rolle erfordert CloudFormation die Funktion CAPABILITY_NAMED_IAM. Lassen Sie dieses Feld leer, um einen automatisch generierten Namen zu verwenden."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"IamPermissionsBoundary"}),(0,r.jsx)(n.td,{children:"Die ARN der IAM-Berechtigungsgrenze, die der der Instanz zugewiesenen IAM-Rolle zugeordnet werden soll."}),(0,r.jsxs)(n.td,{children:["Optional",(0,r.jsx)("br",{}),"Standard: NA"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"AvailabilityZone"}),(0,r.jsx)(n.td,{children:"Die Verf\xfcgbarkeitszone, in der Sie die Instanz bereitstellen m\xf6chten."}),(0,r.jsxs)(n.td,{children:["Erforderlich",(0,r.jsx)("br",{}),"Standard: NA",(0,r.jsx)("br",{}),"Der Wert muss mit dem Subnetz und der Zone aller bereits vorhandenen Volumes \xfcbereinstimmen und der Instanztyp muss in der ausgew\xe4hlten Zone verf\xfcgbar sein."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"LoadBalancerScheme"}),(0,r.jsx)(n.td,{children:"Wenn ein Lastausgleich verwendet wird, gibt dieses Feld an, ob auf die Instanz \xfcber das Internet oder nur innerhalb der VPC zugegriffen werden kann."}),(0,r.jsxs)(n.td,{children:["Optional mit Standard",(0,r.jsx)("br",{}),"Standard: Internet-facing",(0,r.jsx)("br",{}),"Der DNS-Name eines internetseitigen Lastausgleichs ist \xf6ffentlich aufl\xf6sbar in die \xf6ffentlichen IP-Adressen der Knoten. Daher k\xf6nnen internetseitige Lastausgleichsanfragen von Clients \xfcber das Internet weiterleiten.",(0,r.jsx)("br",{}),"Die Knoten eines internen Lastausgleichs haben nur private IP-Adressen. Der DNS-Name eines internen Lastausgleich ist \xf6ffentlich aufl\xf6sbar in die pers\xf6nlichen IP-Adressen der Knoten. Daher k\xf6nnen interne Lastausgleichsanfragen von Clients mit Zugriff auf die VPC f\xfcr den Lastausgleich weiterleiten."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"LoadBalancerSubnetOne"}),(0,r.jsx)(n.td,{children:"Das Subnetz, in dem der Lastausgleich gehostet wird. Das Subnetz bestimmt die Verf\xfcgbarkeitszonen, IP-Adressen und Endpunkte des Lastausgleichs."}),(0,r.jsxs)(n.td,{children:["Optional mit Standard",(0,r.jsx)("br",{}),"Standard: NA",(0,r.jsx)("br",{}),"Sie m\xfcssen mindestens ein verf\xfcgbares Subnetz definieren, um einen Network Load Balancer (NLB) und zwei Subnetze f\xfcr einen Application Load Balancer (ALB) zu erstellen."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"LoadBalancerSubnetTwo"}),(0,r.jsx)(n.td,{children:"Das Subnetz, in dem der Lastausgleich gehostet wird."}),(0,r.jsxs)(n.td,{children:["Optional. Diese Option ist nur in der Vorlage mit ALB verf\xfcgbar.",(0,r.jsx)("br",{}),"Standard: NA",(0,r.jsx)("br",{})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HostedZoneID"}),(0,r.jsx)(n.td,{children:"Die ID, die Amazon Route 53 der gehosteten Zone beim Erstellen zugewiesen hat."}),(0,r.jsxs)(n.td,{children:["Optional",(0,r.jsx)("br",{}),"Standard: NA",(0,r.jsx)("br",{}),"Jede gehostete Zone entspricht einem Dom\xe4nennamen oder m\xf6glicherweise einer Subdom\xe4ne. Die gehostete Zone ist der Container f\xfcr DNS-Eintr\xe4ge, in dem Sie konfigurieren, wie die Welt mit Ihrer Dom\xe4ne interagiert, z. B. indem Sie sie mit einem Eintrag auf eine IP-Adresse verweisen.",(0,r.jsx)("br",{}),"Gehen Sie in der AWS-Konsole zu ",(0,r.jsx)(n.strong,{children:"Route 53"})," > ",(0,r.jsx)(n.strong,{children:"Gehostete Zonen"}),". Suchen Sie Ihren registrierten Dom\xe4nennamen und die entsprechende gehostete Zonen-ID."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"DnsName"}),(0,r.jsx)(n.td,{children:"Der Name der Dom\xe4ne. Bei \xf6ffentlich gehosteten Zonen ist dies der Name, den Sie bei Ihrem DNS-Registrar registriert haben."}),(0,r.jsxs)(n.td,{children:["Optional",(0,r.jsx)("br",{}),"Standard: NA",(0,r.jsx)("br",{}),"Informationen zum Angeben anderer Zeichen als az, 0-9 und - (Bindestrich) und zum Angeben internationalisierter Dom\xe4nennamen finden Sie unter ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHostedZone.html",children:"Gehostete Zone erstellen"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Private"}),(0,r.jsx)(n.td,{children:"Gibt an, ob der Dienst in einem privaten Netzwerk ohne \xf6ffentliche IPs bereitgestellt wird."}),(0,r.jsxs)(n.td,{children:["Erforderlich",(0,r.jsx)("br",{}),"Standard: false ",(0,r.jsx)("br",{}),"Stellen Sie sicher, dass Sie die Option \u201eAutomatische Zuweisung \xf6ffentlicher IPv4-Adressen aktivieren\u201c im Subnetz ausw\xe4hlen, in dem sich der Manager befindet. Wenn diese Option nicht ausgew\xe4hlt ist, kann die Installation fehlschlagen."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Session"}),(0,r.jsx)(n.td,{children:"Gibt an, ob Sie den AWS Session Manager f\xfcr den Zugriff auf die Instanz verwenden k\xf6nnen."}),(0,r.jsxs)(n.td,{children:["Erforderlich",(0,r.jsx)("br",{}),"Standard: false"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Vpc"}),(0,r.jsx)(n.td,{children:"Das Netzwerk, in dem Sie die Instanz bereitstellen m\xf6chten."}),(0,r.jsxs)(n.td,{children:["Erforderlich",(0,r.jsx)("br",{}),"Standard: NA"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Subnet"}),(0,r.jsx)(n.td,{children:"Das Subnetz, in dem Sie die Instanz bereitstellen m\xf6chten."}),(0,r.jsxs)(n.td,{children:["Erforderlich",(0,r.jsx)("br",{}),"Standard: NA",(0,r.jsx)("br",{}),"Das Subnetz muss sich in der ausgew\xe4hlten Verf\xfcgbarkeitszone befinden."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"KeyName"}),(0,r.jsx)(n.td,{children:"Das \xf6ffentliche/private Schl\xfcsselpaar, mit dem Sie nach dem Start eine sichere Verbindung zu Ihrer Instanz herstellen k\xf6nnen. Wenn Sie ein AWS-Konto erstellen, ist dies das Schl\xfcsselpaar, das Sie in Ihrer bevorzugten Region erstellen."}),(0,r.jsxs)(n.td,{children:["Optional",(0,r.jsx)("br",{}),"Standard: NA",(0,r.jsx)("br",{}),"Lassen Sie dieses Feld leer, wenn Sie die SSH-Schl\xfcssel nicht einschlie\xdfen m\xf6chten."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"AccessCIDR"}),(0,r.jsx)(n.td,{children:"Der CIDR-IP-Adressbereich, der auf die Instanz zugreifen darf."}),(0,r.jsxs)(n.td,{children:["Optional",(0,r.jsx)("br",{}),"Standard: NA",(0,r.jsx)("br",{}),"Wir empfehlen, diesen Wert auf einen vertrauensw\xfcrdigen IP-Bereich festzulegen. Definieren Sie mindestens eine der Optionen \u201eAccessCIDR\u201c, \u201ePrefixList\u201c oder \u201eSecurityGroup\u201c, um eingehenden Datenverkehr zuzulassen, sofern Sie keine benutzerdefinierten Eingangsregeln f\xfcr Sicherheitsgruppen erstellen."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PrefixList"}),(0,r.jsx)(n.td,{children:"Die PrefixList, die Sie zur Kommunikation mit der Instanz verwenden k\xf6nnen. Es handelt sich um eine Sammlung von CIDR-Bl\xf6cken, die eine Reihe von IP-Adressbereichen definieren, f\xfcr die dieselbe Richtliniendurchsetzung erforderlich ist."}),(0,r.jsxs)(n.td,{children:["Optional",(0,r.jsx)("br",{}),"Standard: NA",(0,r.jsx)("br",{}),"Definieren Sie mindestens eine der Optionen AccessCIDR, PrefixList oder SecurityGroup, um eingehenden Datenverkehr zuzulassen, sofern Sie keine benutzerdefinierten Regeln f\xfcr den eingehenden Datenverkehr f\xfcr Sicherheitsgruppen erstellen. Achten Sie darauf, den Namen der PrefixList und nicht die ID einzugeben."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SecurityGroup"}),(0,r.jsx)(n.td,{children:"Die virtuelle Firewall, die den ein- und ausgehenden Datenverkehr zur Instanz kontrolliert."}),(0,r.jsxs)(n.td,{children:["Optional",(0,r.jsx)("br",{}),"Standard: NA",(0,r.jsx)("br",{}),"Implementiert als Regelsatz, der angibt, welche Protokolle, Ports und IP-Adressen oder CIDR-Bl\xf6cke auf die Instanz zugreifen d\xfcrfen. Definieren Sie mindestens eines von AccessCIDR, PrefixList oder SecurityGroup, um eingehenden Datenverkehr zuzulassen, sofern Sie keine benutzerdefinierten Eingangsregeln f\xfcr Sicherheitsgruppen erstellen."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"AIUnlimitedHttpPort"}),(0,r.jsx)(n.td,{children:"Der Port f\xfcr den Zugriff auf die AI Unlimited-Benutzeroberfl\xe4che."}),(0,r.jsxs)(n.td,{children:["Erforderlich mit Standard",(0,r.jsx)("br",{}),"Standard: 3000"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"AIUnlimitedGrpcPort"}),(0,r.jsx)(n.td,{children:"Der Port f\xfcr den Zugriff auf die AI Unlimited API."}),(0,r.jsxs)(n.td,{children:["Erforderlich mit Standard",(0,r.jsx)("br",{}),"Standard: 3282"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"AIUnlimitedVersion"}),(0,r.jsx)(n.td,{children:"Die Version von AI Unlimited, die Sie bereitstellen m\xf6chten."}),(0,r.jsxs)(n.td,{children:["Erforderlich mit Standard",(0,r.jsx)("br",{}),"Standard: latest",(0,r.jsx)("br",{}),"Der Wert ist ein Container-Versionstag."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"UsePersistentVolume"}),(0,r.jsxs)(n.td,{children:["Gibt an, ob Sie zum Speichern von Daten ein neues oder vorhandenes persistentes Volume verwenden m\xf6chten. Weitere Informationen finden Sie unter ",(0,r.jsx)(n.em,{children:"Mehr erfahren: Persistentes Volume verwenden"})," unter dem Parameterabschnitt."]}),(0,r.jsxs)(n.td,{children:["Optional mit Standard",(0,r.jsx)("br",{}),"Standard: New",(0,r.jsx)("br",{}),"Unterst\xfctzte Optionen sind je nach Anwendungsfall ein neues oder ein vorhandenes dauerhaftes Volume."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PersistentVolumeSize"}),(0,r.jsx)(n.td,{children:"Die Gr\xf6\xdfe des persistenten Datentr\xe4gers, den Sie an die Instanz anh\xe4ngen, in GB."}),(0,r.jsxs)(n.td,{children:["Erforderlich mit Standard",(0,r.jsx)("br",{}),"Standard: 20",(0,r.jsx)("br",{}),"Unterst\xfctzt Werte zwischen 8 und 1000."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ExistingPersistentVolumeId"}),(0,r.jsx)(n.td,{children:"Die ID des vorhandenen persistenten Datentr\xe4gers, den Sie an die Instanz anh\xe4ngen."}),(0,r.jsxs)(n.td,{children:["Erforderlich, wenn UsePersistentVolume auf Vorhanden gesetzt ist.",(0,r.jsx)("br",{}),"Standard: NA",(0,r.jsx)("br",{}),"Das persistente Volume muss sich in derselben Verf\xfcgbarkeitszone wie die AI Unlimited-Instanz befinden."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["PersistentVolume",(0,r.jsx)("br",{}),"DeletionPolicy"]}),(0,r.jsx)(n.td,{children:"Das persistente Volume-Verhalten, wenn Sie die CloudFormation-Bereitstellung l\xf6schen."}),(0,r.jsx)(n.td,{children:"Erforderlich mit Standard"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"LatestAmiId"}),(0,r.jsx)(n.td,{children:"Die ID des Images, das auf die neueste AMI-Version verweist. Dieser Wert wird f\xfcr die SSM-Suche verwendet."}),(0,r.jsxs)(n.td,{children:["Erforderlich mit Standard",(0,r.jsx)("br",{}),"Standard: NA",(0,r.jsx)("br",{}),"Diese Bereitstellung verwendet das neueste verf\xfcgbare Image ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2.",(0,r.jsx)("br",{}),(0,r.jsx)(n.strong,{children:"WICHTIG"}),": Das \xc4ndern dieses Wertes kann den Stapel besch\xe4digen."]})]})]})]})]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Mehr erfahren: Empfehlungen zum Manager-Instanztyp (Gr\xf6\xdfe)"}),(0,r.jsx)(n.p,{children:"F\xfcr die kostenpflichtige \xf6ffentliche Vorschau von AI Unlimited empfehlen wir diese T3-Instanztypen, basierend auf der Anzahl gleichzeitiger Bereitstellungs- und Suspendierungsvorg\xe4nge der Engine. Die Leistung der anderen verf\xfcgbaren Instanztypen kann variieren."}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Instanztyp"}),(0,r.jsx)(n.th,{children:"Gleichzeitige Vorg\xe4nge"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"t3.micro"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"t3.small"}),(0,r.jsx)(n.td,{children:"bis zu 5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"t3.medium"}),(0,r.jsx)(n.td,{children:"bis zu 10"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"t3.large"}),(0,r.jsx)(n.td,{children:"bis zu 20"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"t3.xlarge"}),(0,r.jsx)(n.td,{children:"mehr als 21"})]})]})]}),(0,r.jsx)(n.p,{children:"Die Parallelit\xe4t wird zunehmen, wenn AI Unlimited zur allgemeinen Verf\xfcgbarkeit freigegeben wird."})]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Mehr erfahren: Persistentes Volume verwenden"}),(0,r.jsx)(n.p,{children:"Die Managerinstanz wird in einem Container ausgef\xfchrt und speichert ihre Konfigurationsdaten in einer Datenbank im Stammdatentr\xe4ger der Instanz. Diese Daten bleiben erhalten, wenn Sie die Instanz herunterfahren, neu starten oder einen Snapshot erstellen und neu starten."}),(0,r.jsx)(n.p,{children:"Ein persistentes Volume speichert Daten f\xfcr eine containerisierte Anwendung \xfcber die Lebensdauer des Containers, Pods oder Knotens hinaus, in dem sie ausgef\xfchrt wird."}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Ohne ein persistentes Volumen"})}),(0,r.jsx)(n.p,{children:"Wenn der Container, Pod oder Knoten abst\xfcrzt oder beendet wird, gehen die Konfigurationsdaten des Managers verloren. Sie k\xf6nnen eine neue Managerinstanz bereitstellen, jedoch nicht im selben Zustand wie die verlorene."}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Mit einem persistenten Volumen"})}),(0,r.jsx)(n.p,{children:"Wenn der Container, der Pod oder der Knoten abst\xfcrzt oder beendet wird und die Konfigurationsdaten des Managers in einem persistenten Volume gespeichert sind, k\xf6nnen Sie eine neue Managerinstanz bereitstellen, die dieselbe Konfiguration wie die verlorene hat."}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Beispiel"})}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Stellen Sie den Manager bereit und schlie\xdfen Sie diese Parameter ein:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"UsePersistentVolume"}),": ",(0,r.jsx)(n.strong,{children:"New"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"PersistentVolumeDeletionPolicy"}),": ",(0,r.jsx)(n.strong,{children:"Retain"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Nachdem Sie den Stapel erstellt haben, notieren Sie sich auf der Registerkarte ",(0,r.jsx)(n.strong,{children:"Ausgaben"})," die \u201evolume-id\u201c."]}),"\n",(0,r.jsx)(n.li,{children:"Nutzen Sie AI Unlimited."}),"\n",(0,r.jsxs)(n.li,{children:["Wenn die Managerinstanz verloren geht, stellen Sie den Manager erneut bereit und schlie\xdfen Sie diese Parameter ein:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"UsePersistentVolume"}),": ",(0,r.jsx)(n.strong,{children:"New"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"PersistentVolumeDeletionPolicy"}),": ",(0,r.jsx)(n.strong,{children:"Retain"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ExistingPersistentVolumeId"}),": der Wert, den Sie in Schritt 2 notiert haben"]}),"\n"]}),"\n"]}),"\n"]}),(0,r.jsx)(n.p,{children:"Die neue Managerinstanz hat die gleiche Konfiguration wie die verlorene."})]}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["W\xe4hlen Sie ",(0,r.jsx)(n.strong,{children:"Weiter"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-console-add-tags.html",children:"Konfigurieren Sie die Stapeloptionen"})," entsprechend Ihren Anforderungen und w\xe4hlen Sie dann ",(0,r.jsx)(n.strong,{children:"Weiter"}),"aus."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\xfcberpr\xfcfen-und-erstellen-des-stapels",children:"\xdcberpr\xfcfen und Erstellen des Stapels"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\xdcberpr\xfcfen Sie die Vorlageneinstellungen."}),"\n",(0,r.jsx)(n.li,{children:"Aktivieren Sie das Kontrollk\xe4stchen, um zu best\xe4tigen, dass die Vorlage IAM-Ressourcen erstellen wird."}),"\n",(0,r.jsxs)(n.li,{children:["W\xe4hlen Sie ",(0,r.jsx)(n.strong,{children:"\xdcbermitteln"}),", um den Stapel bereitzustellen.",(0,r.jsx)("br",{}),"\nAuf der Registerkarte ",(0,r.jsx)(n.strong,{children:"Ereignisse"})," k\xf6nnen Sie den Fortschritt \xfcberwachen. Wenn der Status aller Ressourcen ",(0,r.jsx)(n.code,{children:"CREATE_COMPLETE"})," lautet, ist der Manager bereit."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Die Registerkarte ",(0,r.jsx)(n.strong,{children:"Ausgaben"})," zeigt die f\xfcr die erstellten Ressourcen generierten Werte."]}),"\n",(0,r.jsx)(n.p,{children:"Sie ben\xf6tigen die URL, um auf den Manager zuzugreifen und AI Unlimited einzurichten."}),"\n",(0,r.jsx)(n.h2,{id:"wie-geht-es-weiter",children:"Wie geht es weiter?"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/pr-preview/pr-137/de/ai-unlimited/resources/create-oauth-app",children:"Erstellen Sie eine OAuth-App"}),", um die Authentifizierung zwischen AI Unlimited und Ihrem Git-Provider-Konto zu erm\xf6glichen."]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>l});var r=i(96540);const s={},t=r.createContext(s);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);
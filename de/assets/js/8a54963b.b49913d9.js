"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[1979],{99276:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var i=r(74848),t=r(28453);const l={id:"azure-account-requirements",title:"Anforderungen f\xfcr Azure-Konten",description:"So bereiten Sie Ihr Azure-Konto f\xfcr die Installation von AI Unlimited vor",sidebar_label:"Anforderungen f\xfcr Azure-Konten",sidebar_position:2,pagination_prev:null,pagination_next:null},s="Anforderungen f\xfcr Azure-Konten",a={id:"resources/azure-account-requirements",title:"Anforderungen f\xfcr Azure-Konten",description:"So bereiten Sie Ihr Azure-Konto f\xfcr die Installation von AI Unlimited vor",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/resources/azure-requirements.md",sourceDirName:"resources",slug:"/resources/azure-account-requirements",permalink:"/de/ai-unlimited/resources/azure-account-requirements",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"azure-account-requirements",title:"Anforderungen f\xfcr Azure-Konten",description:"So bereiten Sie Ihr Azure-Konto f\xfcr die Installation von AI Unlimited vor",sidebar_label:"Anforderungen f\xfcr Azure-Konten",sidebar_position:2,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},o={},d=[{value:"Vorbereiten Ihres Azure-Kontos",id:"vorbereiten-ihres-azure-kontos",level:2},{value:"Erstellen Sie die Rolle f\xfcr den Manager",id:"erstellen-sie-die-rolle-f\xfcr-den-manager",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"anforderungen-f\xfcr-azure-konten",children:"Anforderungen f\xfcr Azure-Konten"}),"\n",(0,i.jsxs)(n.p,{children:["Stellen Sie zun\xe4chst sicher, dass Sie \xfcber die ",(0,i.jsx)(n.a,{href:"/de/ai-unlimited/install-ai-unlimited/#prerequisites",children:"Voraussetzungen"})," verf\xfcgen."]}),"\n",(0,i.jsx)(n.p,{children:"Bevor Sie AI Unlimited installieren, k\xfcmmern Sie sich um diese Azure-Elemente."}),"\n",(0,i.jsx)(n.h2,{id:"vorbereiten-ihres-azure-kontos",children:"Vorbereiten Ihres Azure-Kontos"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Arbeiten Sie mit Ihrem Cloud-Administrator zusammen, um sicherzustellen, dass Ihr Azure-Konto \xfcber die Berechtigungen zum Erstellen der in der ",(0,i.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited/tree/develop/deployments/azure/templates/arm/ai-unlimited",children:"AI Unlimited-Vorlage"}),"definierten Cloud-Ressourcen verf\xfcgt."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Netzwerkanforderungen: Ihre Azure-",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal",children:"Ressourcengruppe"})," muss \xfcber ein ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/virtual-network/quick-create-portal",children:"Azure Virtual Network (VNet)"})," verf\xfcgen, das mit einem ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-subnet?tabs=azure-portal",children:"subnet"})," konfiguriert ist. Verwenden Sie ein vorhandenes VNet oder Subnetz oder erstellen Sie Ihr eigenes, abh\xe4ngig von Ihren Kontoberechtigungen."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Wenn Sie auf die Managerinstanz zugreifen m\xfcssen, um Befehle auszuf\xfchren oder zu debuggen, k\xf6nnen Sie mit einem ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/virtual-machines/ssh-keys-portal",children:"Schl\xfcsselpaar"})," eine sichere Verbindung \xfcber Secure Shell (SSH) herstellen. Sie ben\xf6tigen das Schl\xfcsselpaar, wenn Sie ",(0,i.jsx)(n.a,{href:"/de/ai-unlimited/install-ai-unlimited/deploy-manager-azure-portal#specify-instance-details",children:"die Instanzdetails angeben"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"erstellen-sie-die-rolle-f\xfcr-den-manager",children:"Erstellen Sie die Rolle f\xfcr den Manager"}),"\n",(0,i.jsx)(n.p,{children:"Der Manager ben\xf6tigt eine Rolle, die ihm Folgendes erm\xf6glicht:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Die Engine bereitstellen."}),"\n",(0,i.jsx)(n.li,{children:"Erstellen Sie (bei jeder Bereitstellung der Engine) eine neue Rolle f\xfcr die Engine, die die Kommunikation zwischen den Knoten der Engine erm\xf6glicht."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Der Ordner ",(0,i.jsx)(n.code,{children:"deployments"})," im von Teradata bereitgestellten ",(0,i.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited",children:"AI Unlimited GitHub-Repository"})," enth\xe4lt eine ARM-Vorlage f\xfcr die Managerrolle und ein Richtlinienbeispiel."]}),"\n",(0,i.jsx)(n.p,{children:"\xd6ffnen Sie ein Terminalfenster und klonen Sie das Repository."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/Teradata/ai-unlimited\n"})}),"\n",(0,i.jsx)(n.p,{children:"Oder verwenden Sie die folgenden Links, um die ben\xf6tigten Informationen herunterzuladen."}),"\n",(0,i.jsx)(n.p,{children:"Erstellen Sie die Rolle:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Wenn Sie \xfcber die erforderlichen Berechtigungen zum Erstellen von Rollen verf\xfcgen, erstellen Sie die Rolle f\xfcr den Manager mithilfe der ARM-Vorlage ",(0,i.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited/tree/develop/deployments/azure/templates/arm/init/role-policy.json",children:"role-policy"}),". Siehe ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/role-based-access-control/custom-roles-template",children:"Erstellen oder Aktualisieren von benutzerdefinierten Azure-Rollen mithilfe einer ARM-Vorlage"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Oder geben Sie die ",(0,i.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/azure/policies/ai-unlimited.json",children:"ai-unlimited.json"}),"-Richtlinie, die die vom Manager ben\xf6tigten Berechtigungen enth\xe4lt, an Ihren Cloud-Administrator weiter, damit dieser die Rolle f\xfcr Sie erstellen kann."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Sie ben\xf6tigen die ",(0,i.jsx)(n.code,{children:"RoleDefinitionId"}),", wenn Sie ",(0,i.jsx)(n.a,{href:"/de/ai-unlimited/install-ai-unlimited/deploy-manager-azure-portal#specify-instance-details",children:"die Instanzdetails angeben"}),"."]})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>a});var i=r(96540);const t={},l=i.createContext(t);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[9246],{26934:(e,r,s)=>{s.d(r,{Ay:()=>a,RM:()=>i});var n=s(74848),t=s(28453);const i=[];function l(e){const r={a:"a",code:"code",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["Le dossier ",(0,n.jsx)(r.code,{children:"d\xe9ploiements"})," dans le ",(0,n.jsx)(r.a,{href:"https://github.com/Teradata/ai-unlimited",children:"r\xe9f\xe9rentiel GitHub d'AI Unlimited"})," fourni par Teradata contient des fichiers de mod\xe8les, de param\xe8tres et de strat\xe9gies pour l'installation d'AI Unlimited."]}),"\n",(0,n.jsx)(r.p,{children:"Ouvrez une fen\xeatre de terminal et clonez le r\xe9f\xe9rentiel."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"git clone https://github.com/Teradata/ai-unlimited\n"})})]})}function a(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},66160:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=s(74848),t=s(28453),i=s(26934);const l={id:"deploy-jupyter-azure-portal",title:"Installer JupyterLab sur Azure",description:"D\xe9couvrez comment d\xe9ployer JupyterLab \xe0 l'aide d'un mod\xe8le ARM.",sidebar_label:"Installer sur Azure",sidebar_position:2,pagination_prev:null,pagination_next:null},a="Installer JupyterLab sur Azure",o={id:"resources/jupyterlab/deploy-jupyter-azure-portal",title:"Installer JupyterLab sur Azure",description:"D\xe9couvrez comment d\xe9ployer JupyterLab \xe0 l'aide d'un mod\xe8le ARM.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/resources/jupyterlab/install-jupyterlab-azure.md",sourceDirName:"resources/jupyterlab",slug:"/resources/jupyterlab/deploy-jupyter-azure-portal",permalink:"/pr-preview/pr-150/fr/ai-unlimited/resources/jupyterlab/deploy-jupyter-azure-portal",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"deploy-jupyter-azure-portal",title:"Installer JupyterLab sur Azure",description:"D\xe9couvrez comment d\xe9ployer JupyterLab \xe0 l'aide d'un mod\xe8le ARM.",sidebar_label:"Installer sur Azure",sidebar_position:2,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},d={},u=[{value:"Pr\xe9parez votre compte Azure",id:"pr\xe9parez-votre-compte-azure",level:2},{value:"Cloner le r\xe9f\xe9rentiel",id:"cloner-le-r\xe9f\xe9rentiel",level:2},...i.RM,{value:"Localisez le mod\xe8le Jupyter",id:"localisez-le-mod\xe8le-jupyter",level:2},{value:"Charger le mod\xe8le",id:"charger-le-mod\xe8le",level:2},{value:"Sp\xe9cifier les d\xe9tails de l&#39;instance",id:"sp\xe9cifier-les-d\xe9tails-de-linstance",level:2},{value:"Cr\xe9er l&#39;instance",id:"cr\xe9er-linstance",level:2}];function c(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components},{Details:s}=r;return s||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"installer-jupyterlab-sur-azure",children:"Installer JupyterLab sur Azure"}),"\n",(0,n.jsx)(r.p,{children:"Vous utiliserez un mod\xe8le Azure Resource Manager (ARM) fourni par Teradata pour installer JupyterLab et le noyau AI Unlimited \xe0 partir d'Azure Portal."}),"\n",(0,n.jsxs)(r.p,{children:["Cela d\xe9ploie une instance de serveur, avec JupyterLab ex\xe9cut\xe9 dans un conteneur contr\xf4l\xe9 par ",(0,n.jsx)(r.a,{href:"/pr-preview/pr-150/fr/ai-unlimited/glossary#systemd",children:"systemd"}),"."]}),"\n",(0,n.jsx)(r.admonition,{type:"tip",children:(0,n.jsxs)(r.p,{children:["Pour obtenir une assistance pour l'installation, envoyez un e-mail \xe0 l'",(0,n.jsx)("a",{href:"mailto:aiunlimited.support@Teradata.com",children:"\xe9quipe d'assistance"})," ou demandez \xe0 la ",(0,n.jsx)(r.a,{href:"https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa",children:"communaut\xe9"}),"."]})}),"\n",(0,n.jsx)(r.h2,{id:"pr\xe9parez-votre-compte-azure",children:"Pr\xe9parez votre compte Azure"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Travaillez avec votre administrateur cloud pour vous assurer que votre compte Azure dispose des autorisations n\xe9cessaires pour cr\xe9er les ressources cloud d\xe9finies dans le ",(0,n.jsx)(r.a,{href:"https://github.com/Teradata/ai-unlimited/tree/develop/deployments/azure/templates/arm/jupyter",children:"mod\xe8le JupyterLab"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Exigences relatives \xe0 la mise en r\xe9seau\xa0: votre ",(0,n.jsx)(r.a,{href:"https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal",children:"groupe de ressources"})," Azure doit disposer d'un ",(0,n.jsx)(r.a,{href:"https://learn.microsoft.com/en-us/azure/virtual-network/quick-create-portal",children:"Azure Virtual Network (VNet)"})," configur\xe9 avec un ",(0,n.jsx)(r.a,{href:"https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-subnet?tabs=azure-portal",children:"sous-r\xe9seau"}),". Utilisez un r\xe9seau virtuel ou un sous-r\xe9seau existant, ou cr\xe9ez le v\xf4tre, en fonction des autorisations de votre compte."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Si vous devez acc\xe9der \xe0 l'instance JupyterLab pour ex\xe9cuter des commandes ou d\xe9boguer, vous pouvez utiliser une ",(0,n.jsx)(r.a,{href:"https://learn.microsoft.com/en-us/azure/virtual-machines/linux/mac-create-ssh-keys",children:"paire de cl\xe9s"})," pour vous connecter en toute s\xe9curit\xe9 \xe0 l'aide de Secure Shell (SSH). Vous aurez besoin de la paire de cl\xe9s lorsque vous ",(0,n.jsx)(r.a,{href:"#specify-instance-details",children:"sp\xe9cifiez les d\xe9tails de l'instance"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"cloner-le-r\xe9f\xe9rentiel",children:"Cloner le r\xe9f\xe9rentiel"}),"\n","\n",(0,n.jsx)(i.Ay,{}),"\n",(0,n.jsx)(r.h2,{id:"localisez-le-mod\xe8le-jupyter",children:"Localisez le mod\xe8le Jupyter"}),"\n",(0,n.jsx)(r.p,{children:"Les mod\xe8les ARM pour JupyterLab sont ici dans le r\xe9f\xe9rentiel GitHub AI Unlimited\xa0:"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"deployments/azure/templates/arm/jupyter"})}),"\n",(0,n.jsxs)(r.p,{children:["Choisissez un mod\xe8le en fonction de votre intention d'utiliser un ",(0,n.jsx)(r.a,{href:"/pr-preview/pr-150/fr/ai-unlimited/glossary#load-balancer",children:"\xe9quilibreur de charge"})," et de son type."]}),"\n",(0,n.jsx)(r.admonition,{type:"note",children:(0,n.jsx)(r.p,{children:"Vous pouvez demander conseil \xe0 un administrateur cloud de votre organisation."})}),"\n",(0,n.jsxs)(r.p,{children:["- ",(0,n.jsx)(r.code,{children:"jupyter-with-alb.json"}),"\xa0: h\xe9berge JupyterLab derri\xe8re un ",(0,n.jsx)(r.a,{href:"/pr-preview/pr-150/fr/ai-unlimited/glossary#application-load-balancer",children:"application load balancer"}),"\n- ",(0,n.jsx)(r.code,{children:"jupyter-with-nlb.json"}),"\xa0: h\xe9berge JupyterLab derri\xe8re un ",(0,n.jsx)(r.a,{href:"/pr-preview/pr-150/fr/ai-unlimited/glossary#network-load-balancer",children:"network load balancer"}),"\n- ",(0,n.jsx)(r.code,{children:"jupyter-without-lb.json"}),"\xa0: aucun \xe9quilibreur de charge"]}),"\n",(0,n.jsx)(r.h2,{id:"charger-le-mod\xe8le",children:"Charger le mod\xe8le"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["Connectez-vous \xe0 ",(0,n.jsx)(r.a,{href:"https://portal.azure.com",children:"Azure Portal"}),".","\n",(0,n.jsx)(r.admonition,{type:"note",children:(0,n.jsx)(r.p,{children:"Les r\xe9f\xe9rences \xe0 Azure Portal sont \xe0 jour au 29\xa0mai\xa02024."})}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["Recherchez ",(0,n.jsx)(r.strong,{children:"d\xe9ploiement personnalis\xe9"}),", puis s\xe9lectionnez ",(0,n.jsx)(r.strong,{children:"D\xe9ployer un mod\xe8le personnalis\xe9"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["S\xe9lectionnez ",(0,n.jsx)(r.strong,{children:"Cr\xe9ez votre propre mod\xe8le dans l'\xe9diteur"}),", puis ",(0,n.jsx)(r.strong,{children:"Charger le fichier"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["S\xe9lectionnez le fichier mod\xe8le que vous avez choisi d'utiliser et s\xe9lectionnez ",(0,n.jsx)(r.strong,{children:"Enregistrer"}),"."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"sp\xe9cifier-les-d\xe9tails-de-linstance",children:"Sp\xe9cifier les d\xe9tails de l'instance"}),"\n",(0,n.jsx)(r.p,{children:"Examinez les param\xe8tres. Fournissez des valeurs pour les param\xe8tres obligatoires. Votre organisation peut en exiger d'autres."}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"Param\xe8tres Azure et JupyterLab"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Param\xe8tre"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Notes"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Subscription"}),(0,n.jsx)(r.td,{children:"L'abonnement Azure que vous souhaitez utiliser pour d\xe9ployer AI Unlimited."}),(0,n.jsxs)(r.td,{children:["Obligatoire",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: NA",(0,n.jsx)("br",{}),"Nous vous recommandons d'utiliser un compte qui n'est pas une version d'\xe9valuation gratuite."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Region"}),(0,n.jsx)(r.td,{children:"La r\xe9gion dans laquelle vous souhaitez d\xe9ployer AI Unlimited."}),(0,n.jsxs)(r.td,{children:["Obligatoire",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: NA",(0,n.jsx)("br",{}),"S\xe9lectionnez la r\xe9gion Azure la plus proche de votre lieu de travail et les ressources de donn\xe9es \xe0 utiliser avec AI Unlimited."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Resource Group Name"}),(0,n.jsx)(r.td,{children:"Le nom du conteneur qui regroupe les ressources AI Unlimited associ\xe9es."}),(0,n.jsxs)(r.td,{children:["Obligatoire",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: ai-unlimited-jupyter"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"OS Version"}),(0,n.jsx)(r.td,{children:"Les versions des syst\xe8mes d'exploitation disponibles dans l'abonnement actuel."}),(0,n.jsxs)(r.td,{children:["Facultatif avec la valeur par d\xe9faut",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: Ubuntu-2004"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Instance Type"}),(0,n.jsx)(r.td,{children:"Le type d'instance que vous souhaitez utiliser pour AI Unlimited."}),(0,n.jsxs)(r.td,{children:["Facultatif",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: STANDARD_D2_V3",(0,n.jsx)("br",{}),"Nous vous recommandons d'utiliser le type d'instance par d\xe9faut pour r\xe9duire les co\xfbts. Le type d'instance par d\xe9faut est la s\xe9rie Dv3 standard avec 2\xa0vCPU et 8,0\xa0Gio de m\xe9moire."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Network"}),(0,n.jsx)(r.td,{children:"Le nom du r\xe9seau sur lequel vous souhaitez d\xe9ployer l'instance AI Unlimited."}),(0,n.jsxs)(r.td,{children:["Facultatif",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: NA"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Subnet"}),(0,n.jsx)(r.td,{children:"Le sous-r\xe9seau sur lequel vous souhaitez d\xe9ployer l'instance AI Unlimited."}),(0,n.jsxs)(r.td,{children:["Obligatoire",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: NA",(0,n.jsx)("br",{}),"Le sous-r\xe9seau doit r\xe9sider dans la zone de disponibilit\xe9 s\xe9lectionn\xe9e."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Security Group"}),(0,n.jsx)(r.td,{children:"Le pare-feu virtuel qui contr\xf4le le trafic entrant et sortant vers l'instance."}),(0,n.jsxs)(r.td,{children:["Facultatif",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: JupyterSecurityGroup",(0,n.jsx)("br",{}),"Le groupe de s\xe9curit\xe9 est impl\xe9ment\xe9 sous la forme d'un ensemble de r\xe8gles qui sp\xe9cifient les protocoles, les ports et les adresses IP ou les blocs CIDR autoris\xe9s \xe0 acc\xe9der \xe0 l'instance. D\xe9finissez au moins un acc\xe8s CIDR ou un groupe de s\xe9curit\xe9 pour autoriser le trafic entrant, sauf si vous cr\xe9ez des r\xe8gles d'entr\xe9e de groupe de s\xe9curit\xe9 personnalis\xe9es."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Access CIDR"}),(0,n.jsx)(r.td,{children:"La plage d'adresses IP CIDR autoris\xe9e \xe0 acc\xe9der \xe0 l'instance."}),(0,n.jsxs)(r.td,{children:["Facultatif",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: 0.0.0.0/0",(0,n.jsx)("br",{}),"Nous vous recommandons de d\xe9finir cette valeur sur une plage d'adresses IP approuv\xe9es. D\xe9finissez au moins un CIDR d'acc\xe8s ou un groupe de s\xe9curit\xe9 pour autoriser le trafic entrant, sauf si vous cr\xe9ez des r\xe8gles d'entr\xe9e de groupe de s\xe9curit\xe9 personnalis\xe9es."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Source App Sec Groups (ASG)"}),(0,n.jsx)(r.td,{children:"Les groupes de s\xe9curit\xe9 des applications sources autoris\xe9s \xe0 se connecter \xe0 l'instance AI Unlimited. Les ASG vous permettent d'organiser vos machines virtuelles (VM) en fonction de leurs strat\xe9gies de s\xe9curit\xe9 r\xe9seau sp\xe9cifiques. Ces strat\xe9gies de s\xe9curit\xe9 d\xe9terminent le trafic autoris\xe9 ou non sur votre machine virtuelle."}),(0,n.jsxs)(r.td,{children:["Facultatif",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: NA",(0,n.jsx)("br",{}),"S\xe9lectionnez un groupe de s\xe9curit\xe9 des applications dans la m\xeame r\xe9gion que l'interface r\xe9seau."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Destination App Sec Groups"}),(0,n.jsx)(r.td,{children:"Les groupes de s\xe9curit\xe9 des applications de destination qui ont l'autorisation de se connecter \xe0 l'instance AI Unlimited."}),(0,n.jsxs)(r.td,{children:["Facultatif",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: NA",(0,n.jsx)("br",{}),"S\xe9lectionnez un groupe de s\xe9curit\xe9 des applications dans la m\xeame r\xe9gion que l'interface r\xe9seau."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Role Definition ID"}),(0,n.jsx)(r.td,{children:"L'ID du r\xf4le \xe0 utiliser avec AI Unlimited."}),(0,n.jsxs)(r.td,{children:["Obligatoire",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: NA",(0,n.jsx)("br",{}),"Utilisez la commande Azure CLI\xa0-\xa0",(0,n.jsx)(r.code,{children:"Get-AzRoleDefinition"})," pour obtenir votre ID de d\xe9finition de r\xf4le."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Allow Public SSH"}),(0,n.jsx)(r.td,{children:"Sp\xe9cifie si vous pouvez utiliser des cl\xe9s Secure Shell (SSH) pour vous connecter aux VM dans Azure."}),(0,n.jsxs)(r.td,{children:["Facultatif",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: vrai"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Public Key"}),(0,n.jsx)(r.td,{children:"La cl\xe9 SSH publique que vous pouvez utiliser pour vous connecter \xe0 une VM via SSH."}),(0,n.jsxs)(r.td,{children:["Facultatif",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: NA",(0,n.jsx)("br",{}),"Cette valeur doit commencer par ",(0,n.jsx)(r.code,{children:"ssh-rsa"}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Use Persistent Volume"}),(0,n.jsxs)(r.td,{children:["Indique si vous souhaitez utiliser un volume persistant nouveau ou existant pour stocker des donn\xe9es. Consultez ",(0,n.jsx)(r.em,{children:"En savoir plus\xa0: Utilisation d'un volume persistant"})," sous la section Param\xe8tres."]}),(0,n.jsxs)(r.td,{children:["Facultatif avec valeur par d\xe9faut",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: Nouveau",(0,n.jsx)("br",{}),"Les options prises en charge sont un nouveau volume persistant ou un volume existant, selon votre cas d'utilisation."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Persistent Volume Size"}),(0,n.jsx)(r.td,{children:"La taille du volume persistant que vous pouvez associer \xe0 l'instance, en Go."}),(0,n.jsxs)(r.td,{children:["Facultatif",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: 100",(0,n.jsx)("br",{}),"Prend en charge les valeurs comprises entre\xa08 et 1\xa0000."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Existing Persistent Volume"}),(0,n.jsx)(r.td,{children:"L'ID du volume persistant existant que vous pouvez associer \xe0 l'instance."}),(0,n.jsxs)(r.td,{children:["Obligatoire si Utiliser le volume persistant est d\xe9fini sur Existant",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: NA",(0,n.jsx)("br",{}),"Le volume persistant doit se trouver dans la m\xeame zone de disponibilit\xe9 que l'instance AI Unlimited."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"JupyterHttpPort"}),(0,n.jsx)(r.td,{children:"Le port pour acc\xe9der \xe0 l'interface utilisateur du service JupyterLab."}),(0,n.jsxs)(r.td,{children:["Obligatoire avec la valeur par d\xe9faut",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: 8\xa0888"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"JupyterVersion"}),(0,n.jsx)(r.td,{children:"La version de JupyterLab que vous souhaitez d\xe9ployer."}),(0,n.jsxs)(r.td,{children:["Obligatoire avec la valeur par d\xe9faut",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: derni\xe8re",(0,n.jsx)("br",{}),"La valeur est une balise de version de conteneur, par exemple, derni\xe8re."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"JupyterToken"}),(0,n.jsx)(r.td,{children:"Le jeton ou le mot de passe utilis\xe9 pour acc\xe9der \xe0 JupyterLab depuis l'interface utilisateur."}),(0,n.jsxs)(r.td,{children:["Obligatoire",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: NA",(0,n.jsx)("br",{}),"Le jeton doit commencer par une lettre et contenir uniquement des caract\xe8res alphanum\xe9riques. Le mod\xe8le autoris\xe9 est ^[a-zA-Z][a-zA-Z0-9-]*."]})]})]})]})]}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"En savoir plus\xa0: utilisation d'un volume persistant"}),(0,n.jsx)(r.p,{children:"L'instance JupyterLab s'ex\xe9cute dans un conteneur et enregistre ses donn\xe9es de configuration dans une base de donn\xe9es dans le volume racine de l'instance. Ces donn\xe9es sont conserv\xe9es si vous arr\xeatez, red\xe9marrez ou effectuez un instantan\xe9 et relancez l'instance."}),(0,n.jsx)(r.p,{children:"Mais un volume persistant stocke les donn\xe9es d'une application conteneuris\xe9e au-del\xe0 de la dur\xe9e de vie du conteneur, du pod ou du n\u0153ud dans lequel il s'ex\xe9cute."}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Sans volume persistant"})}),(0,n.jsx)(r.p,{children:"Si le conteneur, le pod ou le n\u0153ud tombe en panne ou s'arr\xeate, vous perdez les donn\xe9es de configuration de JupyterLab. Vous pouvez d\xe9ployer une nouvelle instance JupyterLab, mais pas dans le m\xeame \xe9tat que celle qui a \xe9t\xe9 perdue."}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Avec un volume persistant"})}),(0,n.jsx)(r.p,{children:"Si le conteneur, le pod ou le n\u0153ud tombe en panne ou s'arr\xeate et que les donn\xe9es de configuration JupyterLab sont stock\xe9es dans un volume persistant, vous pouvez d\xe9ployer une nouvelle instance JupyterLab qui a la m\xeame configuration que celle qui a \xe9t\xe9 perdue."}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Exemple"})}),(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["D\xe9ployez JupyterLab et incluez ces param\xe8tres\xa0:","\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"UsePersistentVolume"}),": ",(0,n.jsx)(r.strong,{children:"Nouveau"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["Apr\xe8s avoir cr\xe9\xe9 la pile, dans l'onglet ",(0,n.jsx)(r.strong,{children:"Sorties"}),", notez le ",(0,n.jsx)(r.code,{children:"volume-id"}),"."]}),"\n",(0,n.jsx)(r.li,{children:"Utilisez JupyterLab."}),"\n",(0,n.jsxs)(r.li,{children:["Si l'instance JupyterLab est perdue, d\xe9ployez \xe0 nouveau JupyterLab et incluez ces param\xe8tres\xa0:","\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"UsePersistentVolume"}),": ",(0,n.jsx)(r.strong,{children:"Nouveau"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"ExistingPersistentVolumeId"}),": la valeur que vous avez not\xe9e \xe0 l'\xe9tape\xa02"]}),"\n"]}),"\n"]}),"\n"]}),(0,n.jsx)(r.p,{children:"La nouvelle instance JupyterLab a la m\xeame configuration que celle qui a \xe9t\xe9 perdue."})]}),"\n",(0,n.jsx)(r.h2,{id:"cr\xe9er-linstance",children:"Cr\xe9er l'instance"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["S\xe9lectionnez ",(0,n.jsx)(r.strong,{children:"Examiner + cr\xe9er"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["S\xe9lectionnez ",(0,n.jsx)(r.strong,{children:"Cr\xe9er"}),".",(0,n.jsx)("br",{}),"\nSur la page ",(0,n.jsx)(r.strong,{children:"Notifications"}),", vous pouvez suivre la progression."]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Une fois le d\xe9ploiement termin\xe9, la page ",(0,n.jsx)(r.strong,{children:"Sorties"})," affiche l'URL permettant d'acc\xe9der \xe0 JupyterLab."]})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>l,x:()=>a});var n=s(96540);const t={},i=n.createContext(t);function l(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);
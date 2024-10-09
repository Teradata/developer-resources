"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[2305],{26934:(e,s,r)=>{r.d(s,{Ay:()=>a,RM:()=>t});var n=r(74848),i=r(28453);const t=[];function l(e){const s={a:"a",code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["Le dossier ",(0,n.jsx)(s.code,{children:"d\xe9ploiements"})," dans le ",(0,n.jsx)(s.a,{href:"https://github.com/Teradata/ai-unlimited",children:"r\xe9f\xe9rentiel GitHub d'AI Unlimited"})," fourni par Teradata contient des fichiers de mod\xe8les, de param\xe8tres et de strat\xe9gies pour l'installation d'AI Unlimited."]}),"\n",(0,n.jsx)(s.p,{children:"Ouvrez une fen\xeatre de terminal et clonez le r\xe9f\xe9rentiel."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"git clone https://github.com/Teradata/ai-unlimited\n"})})]})}function a(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},51730:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(74848),i=r(28453),t=r(26934);const l={id:"deploy-jupyter-aws-console",title:"Installer JupyterLab sur AWS",description:"D\xe9couvrez comment d\xe9ployer JupyterLab \xe0 l'aide d'un mod\xe8le CloudFormation.",sidebar_label:"Installer sur AWS",sidebar_position:1,pagination_prev:null,pagination_next:null},a="Installer JupyterLab sur AWS",o={id:"resources/jupyterlab/deploy-jupyter-aws-console",title:"Installer JupyterLab sur AWS",description:"D\xe9couvrez comment d\xe9ployer JupyterLab \xe0 l'aide d'un mod\xe8le CloudFormation.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/resources/jupyterlab/install-jupyterlab-aws.md",sourceDirName:"resources/jupyterlab",slug:"/resources/jupyterlab/deploy-jupyter-aws-console",permalink:"/pr-preview/pr-150/fr/ai-unlimited/resources/jupyterlab/deploy-jupyter-aws-console",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"deploy-jupyter-aws-console",title:"Installer JupyterLab sur AWS",description:"D\xe9couvrez comment d\xe9ployer JupyterLab \xe0 l'aide d'un mod\xe8le CloudFormation.",sidebar_label:"Installer sur AWS",sidebar_position:1,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},d={},u=[{value:"Pr\xe9parez votre compte AWS",id:"pr\xe9parez-votre-compte-aws",level:2},{value:"Cloner le r\xe9f\xe9rentiel",id:"cloner-le-r\xe9f\xe9rentiel",level:2},...t.RM,{value:"Localisez le mod\xe8le Jupyter",id:"localisez-le-mod\xe8le-jupyter",level:2},{value:"Charger le mod\xe8le",id:"charger-le-mod\xe8le",level:2},{value:"Sp\xe9cifier les d\xe9tails et les options de la pile",id:"sp\xe9cifier-les-d\xe9tails-et-les-options-de-la-pile",level:2},{value:"Examiner et cr\xe9er la pile",id:"examiner-et-cr\xe9er-la-pile",level:2}];function c(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Details:r}=s;return r||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"installer-jupyterlab-sur-aws",children:"Installer JupyterLab sur AWS"}),"\n",(0,n.jsx)(s.p,{children:"Vous utiliserez un mod\xe8le CloudFormation fourni par Teradata pour installer JupyterLab et le noyau AI Unlimited \xe0 partir d'AWS Management Console."}),"\n",(0,n.jsxs)(s.p,{children:["Cela d\xe9ploie une instance de serveur, avec JupyterLab ex\xe9cut\xe9 dans un conteneur contr\xf4l\xe9 par ",(0,n.jsx)(s.a,{href:"/pr-preview/pr-150/fr/ai-unlimited/glossary#systemd",children:"systemd"}),"."]}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsxs)(s.p,{children:["Pour obtenir une assistance pour l'installation, envoyez un e-mail \xe0 l'",(0,n.jsx)("a",{href:"mailto:aiunlimited.support@Teradata.com",children:"\xe9quipe d'assistance"})," ou demandez \xe0 la ",(0,n.jsx)(s.a,{href:"https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa",children:"communaut\xe9"}),"."]})}),"\n",(0,n.jsx)(s.h2,{id:"pr\xe9parez-votre-compte-aws",children:"Pr\xe9parez votre compte AWS"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Travaillez avec votre administrateur cloud pour vous assurer que vous disposez des autorisations ",(0,n.jsx)(s.a,{href:"https://aws.amazon.com/iam/",children:"IAM"})," pour cr\xe9er les ressources cloud d\xe9finies dans le  ",(0,n.jsx)(s.a,{href:"https://github.com/Teradata/ai-unlimited/tree/develop/deployments/aws/templates/jupyter",children:"mod\xe8le JupyterLab"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Si vous devez acc\xe9der \xe0 l'instance JupyterLab pour ex\xe9cuter des commandes ou d\xe9boguer, vous pouvez utiliser une ",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html",children:"paire de cl\xe9s"})," pour vous connecter en toute s\xe9curit\xe9 \xe0 l'aide de Secure Shell (SSH). Vous aurez besoin de la paire de cl\xe9s lorsque vous ",(0,n.jsx)(s.a,{href:"#specify-stack-details-and-options",children:"sp\xe9cifiez les d\xe9tails de la pile"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Si vous pr\xe9voyez d'utiliser un ",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancer-getting-started.html",children:"Application Load Balancer (ALB)"})," ou un ",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancer-getting-started.html",children:"Network Load Balancer (NLB)"}),", assurez-vous que vous disposez de l'autorisation de g\xe9rer ces services AWS\xa0:\n- ",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/acm/",children:"AWS Certificate Manager"}),"\xa0: pour d\xe9livrer un nouveau certificat pour l'ID de la zone h\xe9berg\xe9e dans Route 53.\n- ",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html",children:"AWS Route 53"}),"\xa0: pour configurer un nom du domaine personnalis\xe9 et acheminer les requ\xeates DNS vers votre \xe9quilibreur de charge."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"cloner-le-r\xe9f\xe9rentiel",children:"Cloner le r\xe9f\xe9rentiel"}),"\n","\n",(0,n.jsx)(t.Ay,{}),"\n",(0,n.jsx)(s.h2,{id:"localisez-le-mod\xe8le-jupyter",children:"Localisez le mod\xe8le Jupyter"}),"\n",(0,n.jsx)(s.p,{children:"Les mod\xe8les CloudFormation pour JupyterLab sont disponibles ici dans le r\xe9f\xe9rentiel GitHub AI Unlimited\xa0:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"deployments/aws/templates/jupyter"})}),"\n",(0,n.jsxs)(s.p,{children:["Choisissez un mod\xe8le en fonction de votre intention d'utiliser un ",(0,n.jsx)(s.a,{href:"/pr-preview/pr-150/fr/ai-unlimited/glossary#load-balancer",children:"\xe9quilibreur de charge"})," et de son type."]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"Vous pouvez demander conseil \xe0 un administrateur cloud de votre organisation."})}),"\n",(0,n.jsxs)(s.p,{children:["- ",(0,n.jsx)(s.code,{children:"jupyter-alb.yaml"}),"\xa0: h\xe9berge JupyterLab derri\xe8re un ",(0,n.jsx)(s.a,{href:"/pr-preview/pr-150/fr/ai-unlimited/glossary#application-load-balancer",children:"application load balancer"}),"\n- ",(0,n.jsx)(s.code,{children:"jupyter-with-nlb.yaml"}),"\xa0: h\xe9berge JupyterLab derri\xe8re un ",(0,n.jsx)(s.a,{href:"/pr-preview/pr-150/fr/ai-unlimited/glossary#network-load-balancer",children:"network load balancer"}),"\n- ",(0,n.jsx)(s.code,{children:"jupyter-without-lb.yaml"}),"\xa0: aucun \xe9quilibreur de charge"]}),"\n",(0,n.jsx)(s.h2,{id:"charger-le-mod\xe8le",children:"Charger le mod\xe8le"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Connectez-vous \xe0 ",(0,n.jsx)(s.a,{href:"https://aws.amazon.com",children:"Console AWS"}),".","\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"Les r\xe9f\xe9rences \xe0 AWS Management Console sont \xe0 jour au 29\xa0mai\xa02024."})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["S\xe9lectionnez la r\xe9gion dans laquelle d\xe9ployer JupyterLab.",(0,n.jsx)("br",{}),"\nNous vous recommandons de s\xe9lectionner la r\xe9gion la plus proche de votre lieu de travail principal."]}),"\n",(0,n.jsxs)(s.li,{children:["Recherchez ",(0,n.jsx)(s.strong,{children:"CloudFormation"})," et acc\xe9dez-y."]}),"\n",(0,n.jsxs)(s.li,{children:["S\xe9lectionnez ",(0,n.jsx)(s.strong,{children:"Cr\xe9er une pile"}),", puis ",(0,n.jsx)(s.strong,{children:"Avec de nouvelles ressources (standard)"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["S\xe9lectionnez ",(0,n.jsx)(s.strong,{children:"Choisir un mod\xe8le existant"})," et ",(0,n.jsx)(s.strong,{children:"Charger un fichier mod\xe8le"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["S\xe9lectionnez le fichier mod\xe8le que vous avez choisi d'utiliser et cliquez sur ",(0,n.jsx)(s.strong,{children:"Suivant"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"sp\xe9cifier-les-d\xe9tails-et-les-options-de-la-pile",children:"Sp\xe9cifier les d\xe9tails et les options de la pile"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Fournissez un nom de pile."}),"\n",(0,n.jsx)(s.li,{children:"Examinez les param\xe8tres. Fournissez des valeurs pour les param\xe8tres obligatoires. Votre organisation peut en exiger d'autres."}),"\n"]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"Param\xe8tres AWS et JupyterLab"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Param\xe8tre"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Notes"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"InstanceType"}),(0,n.jsx)(s.td,{children:"Le type d'instance EC2 que vous souhaitez utiliser pour le service."}),(0,n.jsxs)(s.td,{children:["Obligatoire avec la valeur par d\xe9faut",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: t3.small",(0,n.jsx)("br",{}),"Nous vous recommandons d'utiliser le type d'instance par d\xe9faut pour r\xe9duire les co\xfbts."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"RootVolumeSize"}),(0,n.jsx)(s.td,{children:"La taille du disque racine que vous souhaitez associer \xe0 l'instance, en Go."}),(0,n.jsxs)(s.td,{children:["Obligatoire avec la valeur par d\xe9faut",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: 8",(0,n.jsx)("br",{}),"Prend en charge les valeurs entre\xa08 et 1\xa0000."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"TerminationProtection"}),(0,n.jsx)(s.td,{children:"Activer la protection contre la fin de l'instance."}),(0,n.jsxs)(s.td,{children:["Obligatoire avec la valeur par d\xe9faut",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: faux"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"IamRole"}),(0,n.jsx)(s.td,{children:"Sp\xe9cifie si CloudFormation doit cr\xe9er un r\xf4le IAM ou utiliser un r\xf4le existant."}),(0,n.jsxs)(s.td,{children:["Obligatoire avec la valeur par d\xe9faut",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: Nouveau",(0,n.jsx)("br",{}),"Les options prises en charge sont\xa0: Nouveau ou Existant"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"IamRoleName"}),(0,n.jsx)(s.td,{children:"Le nom du r\xf4le IAM \xe0 attribuer \xe0 l'instance, soit un r\xf4le IAM existant, soit un r\xf4le IAM r\xe9cemment cr\xe9\xe9."}),(0,n.jsxs)(s.td,{children:["Facultatif avec la valeur par d\xe9faut",(0,n.jsx)("br",{}),"Valeur par d\xe9faut\xa0: ai-unlimited-iam-role",(0,n.jsx)("br",{}),"Si vous nommez un nouveau r\xf4le IAM, CloudFormation requiert la capacit\xe9 CAPABILITY_NAMED_IAM. Laissez ce champ vide pour utiliser un nom g\xe9n\xe9r\xe9 automatiquement."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["IamPermissions",(0,n.jsx)("br",{}),"Boundary"]}),(0,n.jsx)(s.td,{children:"L'ARN de la limite des autorisations IAM \xe0 associer au r\xf4le IAM attribu\xe9 \xe0 l'instance."}),(0,n.jsxs)(s.td,{children:["Facultatif",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: NA"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"AvailabilityZone"}),(0,n.jsx)(s.td,{children:"La zone de disponibilit\xe9 dans laquelle vous souhaitez d\xe9ployer l'instance."}),(0,n.jsxs)(s.td,{children:["Obligatoire",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: NA",(0,n.jsx)("br",{}),"La valeur doit correspondre au sous-r\xe9seau, \xe0 la zone de tous les volumes pr\xe9existants et le type d'instance doit \xeatre disponible dans la zone s\xe9lectionn\xe9e."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"LoadBalancing"}),(0,n.jsx)(s.td,{children:"Sp\xe9cifie si l'instance est accessible via un NLB."}),(0,n.jsxs)(s.td,{children:["Obligatoire avec la valeur par d\xe9faut",(0,n.jsx)("br",{}),"Valeur par d\xe9faut\xa0: NetworkLoadBalancer",(0,n.jsx)("br",{}),"Les options prises en charge sont\xa0: NetworkLoadBalancer ou Aucun"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"LoadBalancerScheme"}),(0,n.jsx)(s.td,{children:"Si un \xe9quilibreur de charge est utilis\xe9, ce champ sp\xe9cifie si l'instance est accessible depuis Internet ou uniquement depuis le VPC."}),(0,n.jsxs)(s.td,{children:["Facultatif avec la valeur par d\xe9faut",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: Internet-facing",(0,n.jsx)("br",{}),"Le nom DNS d'un \xe9quilibreur de charge Internet-facing peut \xeatre r\xe9solu publiquement par les adresses IP publiques des n\u0153uds. Par cons\xe9quent, les \xe9quilibreurs de charge Internet-facing peuvent acheminer les demandes des clients via Internet. Les n\u0153uds d'un \xe9quilibreur de charge interne n'ont que des adresses IP priv\xe9es. Le nom DNS d'un \xe9quilibreur de charge interne peut \xeatre r\xe9solu publiquement par les adresses IP personnelles des n\u0153uds. Par cons\xe9quent, les \xe9quilibreurs de charge internes peuvent acheminer les demandes des clients ayant acc\xe8s au VPC pour l'\xe9quilibreur de charge."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Priv\xe9"}),(0,n.jsx)(s.td,{children:"Sp\xe9cifie si le service est d\xe9ploy\xe9 dans un r\xe9seau priv\xe9 sans adresses IP publiques."}),(0,n.jsxs)(s.td,{children:["Obligatoire",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: faux ",(0,n.jsx)("br",{}),"Assurez-vous de s\xe9lectionner l'option ",(0,n.jsx)(s.code,{children:"Activer l'attribution automatique d'adresses IPv4 publiques"})," dans le sous-r\xe9seau o\xf9 r\xe9side le gestionnaire. Si cette option n'est pas s\xe9lectionn\xe9e, l'installation peut \xe9chouer."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Session"}),(0,n.jsx)(s.td,{children:"Sp\xe9cifie si vous pouvez utiliser AWS Session Manager pour acc\xe9der \xe0 l'instance."}),(0,n.jsxs)(s.td,{children:["Obligatoire",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: faux"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Vpc"}),(0,n.jsx)(s.td,{children:"Le r\xe9seau sur lequel vous souhaitez d\xe9ployer l'instance."}),(0,n.jsxs)(s.td,{children:["Obligatoire",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: NA"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Sous-r\xe9seau"}),(0,n.jsx)(s.td,{children:"Le sous-r\xe9seau sur lequel vous souhaitez d\xe9ployer l'instance."}),(0,n.jsxs)(s.td,{children:["Obligatoire",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: NA",(0,n.jsx)("br",{}),"Le sous-r\xe9seau doit r\xe9sider dans la zone de disponibilit\xe9 s\xe9lectionn\xe9e."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"KeyName"}),(0,n.jsx)(s.td,{children:"La paire de cl\xe9s publique/priv\xe9e qui vous permet de vous connecter en toute s\xe9curit\xe9 \xe0 votre instance apr\xe8s son lancement. Lorsque vous cr\xe9ez un compte AWS, il s'agit de la paire de cl\xe9s que vous cr\xe9ez dans votre r\xe9gion pr\xe9f\xe9r\xe9e."}),(0,n.jsxs)(s.td,{children:["Facultatif",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: NA",(0,n.jsx)("br",{}),"Laissez ce champ vide si vous ne souhaitez pas inclure les cl\xe9s SSH."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"AccessCIDR"}),(0,n.jsx)(s.td,{children:"La plage d'adresses IP CIDR autoris\xe9e \xe0 acc\xe9der \xe0 l'instance."}),(0,n.jsxs)(s.td,{children:["Facultatif",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: NA",(0,n.jsx)("br",{}),"Nous vous recommandons de d\xe9finir cette valeur sur une plage d'adresses IP approuv\xe9es. D\xe9finissez au moins AccessCIDR, PrefixList ou SecurityGroup pour autoriser le trafic entrant, sauf si vous cr\xe9ez des r\xe8gles d'entr\xe9e de groupe de s\xe9curit\xe9 personnalis\xe9es."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"PrefixList"}),(0,n.jsx)(s.td,{children:"La liste de pr\xe9fixes que vous pouvez utiliser pour communiquer avec l'instance. Il s'agit d'un ensemble de blocs CIDR qui d\xe9finissent un ensemble de plages d'adresses IP n\xe9cessitant la m\xeame application de strat\xe9gie."}),(0,n.jsxs)(s.td,{children:["Facultatif",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: NA",(0,n.jsx)("br",{}),"D\xe9finissez au moins l'un des \xe9l\xe9ments suivants\xa0: AccessCIDR, PrefixList ou SecurityGroup pour autoriser le trafic entrant, sauf si vous cr\xe9ez des r\xe8gles d'entr\xe9e de groupe de s\xe9curit\xe9 personnalis\xe9es."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"SecurityGroup"}),(0,n.jsx)(s.td,{children:"Le pare-feu virtuel qui contr\xf4le le trafic entrant et sortant vers l'instance."}),(0,n.jsxs)(s.td,{children:["Facultatif",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: NA",(0,n.jsx)("br",{}),"Impl\xe9ment\xe9 sous la forme d'un ensemble de r\xe8gles sp\xe9cifiant les protocoles, ports et adresses IP ou blocs CIDR autoris\xe9s \xe0 acc\xe9der \xe0 l'instance. D\xe9finissez au moins l'un des \xe9l\xe9ments suivants\xa0: AccessCIDR, PrefixList ou SecurityGroup pour autoriser le trafic entrant, sauf si vous cr\xe9ez des r\xe8gles d'entr\xe9e de groupe de s\xe9curit\xe9 personnalis\xe9es."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"UsePersistentVolume"}),(0,n.jsxs)(s.td,{children:["Indique si vous souhaitez utiliser un volume persistant nouveau ou existant pour stocker des donn\xe9es. Consultez ",(0,n.jsx)(s.em,{children:"En savoir plus\xa0: Utilisation d'un volume persistant"})," sous la section Param\xe8tres."]}),(0,n.jsxs)(s.td,{children:["Facultatif avec valeur par d\xe9faut",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: Nouveau",(0,n.jsx)("br",{}),"Les options prises en charge sont un nouveau volume persistant ou un volume existant, selon votre cas d'utilisation."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"PersistentVolumeSize"}),(0,n.jsx)(s.td,{children:"La taille du volume persistant que vous pouvez associer \xe0 l'instance, en Go."}),(0,n.jsxs)(s.td,{children:["Obligatoire avec la valeur par d\xe9faut",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: 20",(0,n.jsx)("br",{}),"Prend en charge les valeurs comprises entre\xa08 et 1\xa0000"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["ExistingPersistent",(0,n.jsx)("br",{}),"VolumeId"]}),(0,n.jsx)(s.td,{children:"L'ID du volume persistant existant que vous pouvez associer \xe0 l'instance."}),(0,n.jsxs)(s.td,{children:["Obligatoire si UsePersistentVolume est d\xe9fini sur Existant",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: NA",(0,n.jsx)("br",{}),"Le volume persistant doit se trouver dans la m\xeame zone de disponibilit\xe9 que l'instance AI Unlimited."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["PersistentVolume",(0,n.jsx)("br",{}),"DeletionPolicy"]}),(0,n.jsx)(s.td,{children:"Le comportement du volume persistant lorsque vous supprimez le d\xe9ploiement de CloudFormation."}),(0,n.jsxs)(s.td,{children:["Obligatoire avec la valeur par d\xe9faut",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: Conserver",(0,n.jsx)("br",{}),"Les options prises en charge sont\xa0: Supprimer, Conserver, RetainExceptOnCreate et Instantan\xe9."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"LatestAmiId"}),(0,n.jsx)(s.td,{children:"L'ID de l'image qui pointe vers la derni\xe8re version d'AMI. Cette valeur est utilis\xe9e pour la recherche SSM."}),(0,n.jsxs)(s.td,{children:["Obligatoire avec la valeur par d\xe9faut",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: NA",(0,n.jsx)("br",{}),"Ce d\xe9ploiement utilise la derni\xe8re image ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2 disponible.",(0,n.jsx)("br",{}),"IMPORTANT\xa0: la modification de cette valeur peut endommager la pile."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"JupyterHttpPort"}),(0,n.jsx)(s.td,{children:"Le port pour acc\xe9der \xe0 l'interface utilisateur du service JupyterLab."}),(0,n.jsxs)(s.td,{children:["Obligatoire avec la valeur par d\xe9faut",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: 8\xa0888"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"JupyterVersion"}),(0,n.jsx)(s.td,{children:"La version de JupyterLab que vous souhaitez d\xe9ployer."}),(0,n.jsxs)(s.td,{children:["Obligatoire avec la valeur par d\xe9faut",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: derni\xe8re",(0,n.jsx)("br",{}),"La valeur est une balise de version de conteneur, par exemple, derni\xe8re."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"JupyterToken"}),(0,n.jsx)(s.td,{children:"Le jeton ou le mot de passe utilis\xe9 pour acc\xe9der \xe0 JupyterLab depuis l'interface utilisateur."}),(0,n.jsxs)(s.td,{children:["Obligatoire",(0,n.jsx)("br",{}),"Par d\xe9faut\xa0: NA",(0,n.jsx)("br",{}),"Le jeton doit commencer par une lettre et contenir uniquement des caract\xe8res alphanum\xe9riques. Le mod\xe8le autoris\xe9 est ^[a-zA-Z][a-zA-Z0-9-]*."]})]})]})]})]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"En savoir plus\xa0: utilisation d'un volume persistant"}),(0,n.jsx)(s.p,{children:"L'instance JupyterLab s'ex\xe9cute dans un conteneur et enregistre ses donn\xe9es de configuration dans une base de donn\xe9es dans le volume racine de l'instance. Ces donn\xe9es sont conserv\xe9es si vous arr\xeatez, red\xe9marrez ou effectuez un instantan\xe9 et relancez l'instance."}),(0,n.jsx)(s.p,{children:"Un volume persistant stocke les donn\xe9es d'une application conteneuris\xe9e au-del\xe0 de la dur\xe9e de vie du conteneur, du pod ou du n\u0153ud dans lequel il s'ex\xe9cute."}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Sans volume persistant"})}),(0,n.jsx)(s.p,{children:"Si le conteneur, le pod ou le n\u0153ud tombe en panne ou s'arr\xeate, vous perdez les donn\xe9es de configuration de JupyterLab. Vous pouvez d\xe9ployer une nouvelle instance JupyterLab, mais pas dans le m\xeame \xe9tat que celle qui a \xe9t\xe9 perdue."}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Avec un volume persistant"})}),(0,n.jsx)(s.p,{children:"Si le conteneur, le pod ou le n\u0153ud tombe en panne ou s'arr\xeate et que les donn\xe9es de configuration JupyterLab sont stock\xe9es dans un volume persistant, vous pouvez d\xe9ployer une nouvelle instance JupyterLab qui a la m\xeame configuration que celle qui a \xe9t\xe9 perdue."}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Exemple"})}),(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["D\xe9ployez JupyterLab et incluez ces param\xe8tres\xa0:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"UsePersistentVolume"}),": ",(0,n.jsx)(s.strong,{children:"Nouveau"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"PersistentVolumeDeletionPolicy"}),": ",(0,n.jsx)(s.strong,{children:"Conserver"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["Apr\xe8s avoir cr\xe9\xe9 la pile, dans l'onglet ",(0,n.jsx)(s.strong,{children:"Sorties"}),", notez le ",(0,n.jsx)(s.code,{children:"volume-id"}),"."]}),"\n",(0,n.jsx)(s.li,{children:"Utilisez JupyterLab."}),"\n",(0,n.jsxs)(s.li,{children:["Si l'instance JupyterLab est perdue, d\xe9ployez \xe0 nouveau JupyterLab et incluez ces param\xe8tres\xa0:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"UsePersistentVolume"}),": ",(0,n.jsx)(s.strong,{children:"Nouveau"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"PersistentVolumeDeletionPolicy"}),": ",(0,n.jsx)(s.strong,{children:"Conserver"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"ExistingPersistentVolumeId"}),": la valeur que vous avez not\xe9e \xe0 l'\xe9tape\xa02"]}),"\n"]}),"\n"]}),"\n"]}),(0,n.jsx)(s.p,{children:"La nouvelle instance JupyterLab a la m\xeame configuration que celle qui a \xe9t\xe9 perdue."})]}),"\n",(0,n.jsxs)(s.ol,{start:"3",children:["\n",(0,n.jsxs)(s.li,{children:["S\xe9lectionnez ",(0,n.jsx)(s.strong,{children:"Suivant"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-console-add-tags.html",children:"Configurer les options de la pile"})," selon vos besoins, puis s\xe9lectionnez ",(0,n.jsx)(s.strong,{children:"Suivant"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"examiner-et-cr\xe9er-la-pile",children:"Examiner et cr\xe9er la pile"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Examinez les param\xe8tres du mod\xe8le."}),"\n",(0,n.jsx)(s.li,{children:"Cochez la case pour confirmer que le mod\xe8le cr\xe9era des ressources IAM."}),"\n",(0,n.jsxs)(s.li,{children:["S\xe9lectionnez ",(0,n.jsx)(s.strong,{children:"Soumettre"})," pour d\xe9ployer la pile.",(0,n.jsx)("br",{}),"\nDans l'onglet ",(0,n.jsx)(s.strong,{children:"\xc9v\xe9nements"}),", vous pouvez surveiller la progression. Lorsque l'\xe9tat de toutes les ressources est ",(0,n.jsx)(s.code,{children:"CREATE_COMPLETE"}),", JupyterLab est pr\xeat."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["L'onglet ",(0,n.jsx)(s.strong,{children:"Sorties"})," affiche l'URL permettant d'acc\xe9der \xe0 JupyterLab."]})]})}function p(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>l,x:()=>a});var n=r(96540);const i={},t=n.createContext(i);function l(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);
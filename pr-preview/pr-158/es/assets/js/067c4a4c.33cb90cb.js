"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[4813],{25679:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>o,contentTitle:()=>t,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=a(74848),i=a(28453);const s={id:"azure-account-requirements",title:"Requisitos de la cuenta de Azure",description:"C\xf3mo preparar su cuenta de Azure para la instalaci\xf3n de AI Unlimited",sidebar_label:"Requisitos de la cuenta de Azure",sidebar_position:2,pagination_prev:null,pagination_next:null},t="Requisitos de la cuenta de Azure",l={id:"resources/azure-account-requirements",title:"Requisitos de la cuenta de Azure",description:"C\xf3mo preparar su cuenta de Azure para la instalaci\xf3n de AI Unlimited",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/resources/azure-requirements.md",sourceDirName:"resources",slug:"/resources/azure-account-requirements",permalink:"/pr-preview/pr-158/es/ai-unlimited/resources/azure-account-requirements",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"azure-account-requirements",title:"Requisitos de la cuenta de Azure",description:"C\xf3mo preparar su cuenta de Azure para la instalaci\xf3n de AI Unlimited",sidebar_label:"Requisitos de la cuenta de Azure",sidebar_position:2,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},o={},u=[{value:"Prepare su cuenta de Azure",id:"prepare-su-cuenta-de-azure",level:2},{value:"Crear el rol para el administrador",id:"crear-el-rol-para-el-administrador",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"requisitos-de-la-cuenta-de-azure",children:"Requisitos de la cuenta de Azure"}),"\n",(0,n.jsxs)(r.p,{children:["Primero, aseg\xfarese de cumplir los ",(0,n.jsx)(r.a,{href:"/pr-preview/pr-158/es/ai-unlimited/install-ai-unlimited/#prerequisites",children:"requisitos previos"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"Luego, antes de instalar AI Unlimited, aborde estos elementos de Azure."}),"\n",(0,n.jsx)(r.h2,{id:"prepare-su-cuenta-de-azure",children:"Prepare su cuenta de Azure"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Trabaje con su administrador de nube para asegurarse de que su cuenta de Azure tenga los permisos para crear los recursos de nube definidos en la ",(0,n.jsx)(r.a,{href:"https://github.com/Teradata/ai-unlimited/tree/develop/deployments/azure/templates/arm/ai-unlimited",children:"plantilla de AI Unlimited"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Requisitos de red: su ",(0,n.jsx)(r.a,{href:"https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal",children:"grupo de recursos"})," de Azure debe tener una ",(0,n.jsx)(r.a,{href:"https://learn.microsoft.com/en-us/azure/virtual-network/quick-create-portal",children:"Azure Virtual Network (VNet)"})," configurada con una ",(0,n.jsx)(r.a,{href:"https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-manage-subnet?tabs=azure-portal",children:"subred"}),". Use una red virtual o subred existente, o cree la suya propia, seg\xfan los permisos de su cuenta."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Si necesita acceder a la instancia del administrador para ejecutar comandos o depurar, puede usar un ",(0,n.jsx)(r.a,{href:"https://learn.microsoft.com/en-us/azure/virtual-machines/ssh-keys-portal",children:"par de claves"})," para conectarse de forma segura mediante Secure Shell (SSH). Necesitar\xe1 el par de claves cuando ",(0,n.jsx)(r.a,{href:"/pr-preview/pr-158/es/ai-unlimited/install-ai-unlimited/deploy-manager-azure-portal#specify-instance-details",children:"especifique los detalles de la instancia"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"crear-el-rol-para-el-administrador",children:"Crear el rol para el administrador"}),"\n",(0,n.jsx)(r.p,{children:"El administrador necesita un rol que le permita hacer lo siguiente:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Implemente el motor."}),"\n",(0,n.jsx)(r.li,{children:"Cree un nuevo rol para el motor (cada vez que se implementa el motor) que permita que los nodos del motor se comuniquen."}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["La carpeta ",(0,n.jsx)(r.code,{children:"deployments"})," en el ",(0,n.jsx)(r.a,{href:"https://github.com/Teradata/ai-unlimited",children:"repositorio de GitHub de AI Unlimited"})," proporcionada por Teradata incluye una plantilla ARM de rol de administrador y una muestra de pol\xedtica."]}),"\n",(0,n.jsx)(r.p,{children:"Abra una ventana de terminal y clone el repositorio."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"git clone https://github.com/Teradata/ai-unlimited\n"})}),"\n",(0,n.jsx)(r.p,{children:"O utiliza los enlaces que siguen para descargar lo que necesite."}),"\n",(0,n.jsx)(r.p,{children:"Crear el rol:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Si tiene los permisos necesarios para crear roles, cree el rol para el administrador utilizando la plantilla ARM ",(0,n.jsx)(r.a,{href:"https://github.com/Teradata/ai-unlimited/tree/develop/deployments/azure/templates/arm/init/role-policy.json",children:"role-policy"}),". Consulte ",(0,n.jsx)(r.a,{href:"https://learn.microsoft.com/en-us/azure/role-based-access-control/custom-roles-template",children:"Crear o actualizar roles personalizados de Azure mediante una plantilla ARM"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["O comparta la pol\xedtica ",(0,n.jsx)(r.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/azure/policies/ai-unlimited.json",children:"ai-unlimited.json"}),", que contiene los permisos que necesita el administrador, con su administrador de la nube para que pueda crear el rol para usted."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Necesitar\xe1 ",(0,n.jsx)(r.code,{children:"RoleDefinitionId"})," cuando ",(0,n.jsx)(r.a,{href:"/pr-preview/pr-158/es/ai-unlimited/install-ai-unlimited/deploy-manager-azure-portal#specify-instance-details",children:"especifique los detalles de la instancia"}),"."]})]})}function c(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,r,a)=>{a.d(r,{R:()=>t,x:()=>l});var n=a(96540);const i={},s=n.createContext(i);function t(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);
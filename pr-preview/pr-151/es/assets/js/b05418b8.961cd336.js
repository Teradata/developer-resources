"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[5831],{44138:(e,i,r)=>{r.d(i,{Ay:()=>l,RM:()=>s});var a=r(74848),n=r(28453);const s=[];function d(e){const i={a:"a",code:"code",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.p,{children:["La carpeta ",(0,a.jsx)(i.code,{children:"deployments"})," en el ",(0,a.jsx)(i.a,{href:"https://github.com/Teradata/ai-unlimited",children:"Repositorio de GitHub de AI Unlimited"})," proporcionada por Teradata contiene archivos de plantillas, par\xe1metros y pol\xedticas para instalar AI Unlimited."]}),"\n",(0,a.jsx)(i.p,{children:"Abra una ventana de terminal y clone el repositorio."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-bash",children:"git clone https://github.com/Teradata/ai-unlimited\n"})})]})}function l(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},23002:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>d,metadata:()=>t,toc:()=>c});var a=r(74848),n=r(28453),s=r(44138);const d={id:"deploy-manager-azure-portal",title:"Instalar en Azure",description:"Aprenda a implementar el administrador mediante una plantilla de Azure Resource Manager (ARM).",sidebar_label:"Instalar en Azure",sidebar_position:2,pagination_prev:null,pagination_next:null},l="Instalar el administrador en Azure",t={id:"install-ai-unlimited/deploy-manager-azure-portal",title:"Instalar en Azure",description:"Aprenda a implementar el administrador mediante una plantilla de Azure Resource Manager (ARM).",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/install-ai-unlimited/prod-azure-portal-deploy-manager.md",sourceDirName:"install-ai-unlimited",slug:"/install-ai-unlimited/deploy-manager-azure-portal",permalink:"/pr-preview/pr-151/es/ai-unlimited/install-ai-unlimited/deploy-manager-azure-portal",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"deploy-manager-azure-portal",title:"Instalar en Azure",description:"Aprenda a implementar el administrador mediante una plantilla de Azure Resource Manager (ARM).",sidebar_label:"Instalar en Azure",sidebar_position:2,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},o={},c=[{value:"Clonar el repositorio",id:"clonar-el-repositorio",level:2},...s.RM,{value:"Localizar la plantilla del administrador",id:"localizar-la-plantilla-del-administrador",level:2},{value:"Cargar la plantilla",id:"cargar-la-plantilla",level:2},{value:"Especificar detalles de la instancia",id:"especificar-detalles-de-la-instancia",level:2},{value:"Crear la instancia",id:"crear-la-instancia",level:2},{value:"\xbfQu\xe9 sigue?",id:"qu\xe9-sigue",level:2}];function u(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components},{Details:r}=i;return r||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h1,{id:"instalar-el-administrador-en-azure",children:"Instalar el administrador en Azure"}),"\n",(0,a.jsxs)(i.p,{children:["Antes de comenzar, aseg\xfarese de cumplir los ",(0,a.jsx)(i.a,{href:"/pr-preview/pr-151/es/ai-unlimited/install-ai-unlimited/#prerequisites",children:"requisitos previos"})," y de que su cuenta de Azure cumpla con ",(0,a.jsx)(i.a,{href:"/pr-preview/pr-151/es/ai-unlimited/resources/azure-account-requirements",children:"los requisitos"}),"."]}),"\n",(0,a.jsx)(i.p,{children:"El administrador de AI Unlimited organiza la implementaci\xf3n del motor e incluye una interfaz de usuario basada en web para la configuraci\xf3n."}),"\n",(0,a.jsxs)(i.p,{children:["Usar\xe1 una plantilla de Azure Resource Manager (ARM) proporcionada por Teradata para instalar el administrador desde el Azure Portal. Implementar\xe1 una instancia de servidor en la que se ejecuta el administrador en un contenedor controlado por ",(0,a.jsx)(i.a,{href:"/pr-preview/pr-151/es/ai-unlimited/glossary#systemd",children:"systemd"}),"."]}),"\n",(0,a.jsx)(i.admonition,{type:"tip",children:(0,a.jsxs)(i.p,{children:["Para obtener ayuda con la instalaci\xf3n, env\xede un correo electr\xf3nico al ",(0,a.jsx)("a",{href:"mailto:aiunlimited.support@Teradata.com",children:"equipo de soporte"})," o pregunte a la ",(0,a.jsx)(i.a,{href:"https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa",children:"comunidad"}),"."]})}),"\n",(0,a.jsx)(i.h2,{id:"clonar-el-repositorio",children:"Clonar el repositorio"}),"\n","\n",(0,a.jsx)(s.Ay,{}),"\n",(0,a.jsx)(i.h2,{id:"localizar-la-plantilla-del-administrador",children:"Localizar la plantilla del administrador"}),"\n",(0,a.jsx)(i.p,{children:"Las plantillas ARM para el administrador est\xe1n aqu\xed en el repositorio de GitHub de AI Unlimited:"}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.code,{children:"deployments/azure/templates/arm/ai-unlimited"})}),"\n",(0,a.jsxs)(i.p,{children:["Elija una plantilla en funci\xf3n de si desea utilizar un ",(0,a.jsx)(i.a,{href:"/pr-preview/pr-151/es/ai-unlimited/glossary#load-balancer",children:"equilibrador de carga"})," y de qu\xe9 tipo."]}),"\n",(0,a.jsx)(i.admonition,{type:"note",children:(0,a.jsx)(i.p,{children:"Quiz\xe1s quiera pedirle orientaci\xf3n a un administrador de la nube de su organizaci\xf3n."})}),"\n",(0,a.jsxs)(i.p,{children:["- ",(0,a.jsx)(i.code,{children:"ai-unlimited-with-alb.json"}),"\u2014El administrador se encuentra detr\xe1s de un ",(0,a.jsx)(i.a,{href:"/pr-preview/pr-151/es/ai-unlimited/glossary#application-load-balancer",children:"equilibrador de carga de aplicaciones"}),"\n- ",(0,a.jsx)(i.code,{children:"ai-unlimited-with-nlb.json"}),"\u2014El administrador se encuentra detr\xe1s de un ",(0,a.jsx)(i.a,{href:"/pr-preview/pr-151/es/ai-unlimited/glossary#network-load-balancer",children:"equilibrador de carga de red"}),"\n- ",(0,a.jsx)(i.code,{children:"ai-unlimited-without-lb.json"}),"No hay equilibrador de carga. Si no est\xe1 seguro de qu\xe9 plantilla usar, le recomendamos esta."]}),"\n",(0,a.jsx)(i.h2,{id:"cargar-la-plantilla",children:"Cargar la plantilla"}),"\n",(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsxs)(i.li,{children:["Inicie sesi\xf3n en el ",(0,a.jsx)(i.a,{href:"https://portal.azure.com",children:"Azure Portal"}),".","\n",(0,a.jsx)(i.admonition,{type:"note",children:(0,a.jsx)(i.p,{children:"Las referencias a Azure Portal est\xe1n actualizadas al 29 de mayo de 2024."})}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["Busque ",(0,a.jsx)(i.strong,{children:"Implementaci\xf3n personalizada"})," y luego seleccione ",(0,a.jsx)(i.strong,{children:"Implementar una plantilla personalizada"}),"."]}),"\n",(0,a.jsxs)(i.li,{children:["Seleccione ",(0,a.jsx)(i.strong,{children:"Crear su propia plantilla en el editor"})," y luego ",(0,a.jsx)(i.strong,{children:"Cargar archivo"}),"."]}),"\n",(0,a.jsxs)(i.li,{children:["Seleccione el archivo de plantilla que eligi\xf3 usar y luego seleccione ",(0,a.jsx)(i.strong,{children:"Guardar"}),"."]}),"\n"]}),"\n",(0,a.jsx)("a",{id:"azure-parms"}),"\n",(0,a.jsx)(i.h2,{id:"especificar-detalles-de-la-instancia",children:"Especificar detalles de la instancia"}),"\n",(0,a.jsx)(i.p,{children:"Revise los par\xe1metros. Proporcione valores para los par\xe1metros requeridos. Es posible que su organizaci\xf3n requiera otros."}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsx)("summary",{children:"Par\xe1metros de Azure y AI Unlimited"}),(0,a.jsxs)(i.table,{children:[(0,a.jsx)(i.thead,{children:(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.th,{children:"Par\xe1metro"}),(0,a.jsx)(i.th,{children:"Descripci\xf3n"}),(0,a.jsx)(i.th,{children:"Notas"})]})}),(0,a.jsxs)(i.tbody,{children:[(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"Subscription"}),(0,a.jsx)(i.td,{children:"La suscripci\xf3n de Azure que desea utilizar para implementar AI Unlimited."}),(0,a.jsxs)(i.td,{children:["Obligatorio",(0,a.jsx)("br",{}),"Predeterminado: NA ",(0,a.jsx)("br",{}),"Esta debe ser una cuenta de pago por uso."]})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"Region"}),(0,a.jsx)(i.td,{children:"La regi\xf3n donde desea implementar AI Unlimited."}),(0,a.jsxs)(i.td,{children:["Obligatorio",(0,a.jsx)("br",{}),"Predeterminado: NA",(0,a.jsx)("br",{}),"Seleccione la regi\xf3n de Azure m\xe1s cercana a su ubicaci\xf3n de trabajo y los recursos de datos que desea usar con AI Unlimited."]})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"Resource Group Name"}),(0,a.jsx)(i.td,{children:"El nombre del contenedor que agrupa recursos de AI Unlimited relacionados."}),(0,a.jsxs)(i.td,{children:["Obligatorio",(0,a.jsx)("br",{}),"Predeterminado: ai-unlimited-workspace"]})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"AI Unlimited Name"}),(0,a.jsx)(i.td,{children:"Nombre \xfanico dado a AI Unlimited."}),(0,a.jsxs)(i.td,{children:["Obligatorio",(0,a.jsx)("br",{}),"Predeterminado: NA"]})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"Public Key"}),(0,a.jsx)(i.td,{children:"La clave SSH p\xfablica que puede utilizar para conectarse a una m\xe1quina virtual a trav\xe9s de SSH."}),(0,a.jsxs)(i.td,{children:["Obligatorio",(0,a.jsx)("br",{}),"Predeterminado: NA",(0,a.jsx)("br",{}),"Este valor debe comenzar con \u201cssh-rsa\u201d."]})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"OS Version"}),(0,a.jsx)(i.td,{children:"Las versiones de los sistemas operativos que est\xe1n disponibles en la suscripci\xf3n actual."}),(0,a.jsxs)(i.td,{children:["Opcional con valor predeterminado",(0,a.jsx)("br",{}),"Predeterminado: Ubuntu-2004"]})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"Instance Type"}),(0,a.jsx)(i.td,{children:"El tipo de instancia que desea utilizar para AI Unlimited."}),(0,a.jsxs)(i.td,{children:["Opcional",(0,a.jsx)("br",{}),"Valor predeterminado: STANDARD_D2_V3",(0,a.jsx)("br",{}),"Recomendamos utilizar el tipo de instancia predeterminado para ahorrar costes. El tipo de instancia predeterminado es la serie Dv3 est\xe1ndar con 2 vCPU y 8,0 GiB de memoria."]})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"Network"}),(0,a.jsx)(i.td,{children:"El nombre de la red en la que desea implementar la instancia de AI Unlimited."}),(0,a.jsxs)(i.td,{children:[(0,a.jsx)("br",{}),"Opcional",(0,a.jsx)("br",{}),"Predeterminado: NA"]})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"Subnet"}),(0,a.jsx)(i.td,{children:"La subred en la que desea implementar la instancia de AI Unlimited."}),(0,a.jsxs)(i.td,{children:["Obligatorio",(0,a.jsx)("br",{}),"Predeterminado: NA",(0,a.jsx)("br",{}),"La subred debe residir en la zona de disponibilidad seleccionada."]})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"Security Group"}),(0,a.jsx)(i.td,{children:"El firewall virtual que controla el tr\xe1fico entrante y saliente a la instancia."}),(0,a.jsxs)(i.td,{children:["Opcional",(0,a.jsx)("br",{}),"Valor predeterminado: AiUnlimitedSecurityGroup",(0,a.jsx)("br",{}),"El grupo de seguridad se implementa como un conjunto de reglas que especifican qu\xe9 protocolos, puertos y direcciones IP o bloques CIDR tienen permitido acceder a la instancia. Defina al menos un CIDR de acceso o un grupo de seguridad para permitir el tr\xe1fico entrante a menos que cree reglas de ingreso de grupos de seguridad personalizadas."]})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"Access CIDR"}),(0,a.jsx)(i.td,{children:"El rango de direcciones IP CIDR al que se le permite acceder a la instancia."}),(0,a.jsxs)(i.td,{children:["Opcional",(0,a.jsx)("br",{}),"Valor predeterminado: 0.0.0.0/0",(0,a.jsx)("br",{}),"Recomendamos configurar este valor en un rango de IP de confianza. Defina al menos un CIDR de acceso o un grupo de seguridad para permitir el tr\xe1fico entrante a menos que cree reglas de ingreso de grupos de seguridad personalizadas."]})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"AI Unlimited HTTP Port"}),(0,a.jsx)(i.td,{children:"El puerto para acceder a la interfaz de usuario de AI Unlimited."}),(0,a.jsxs)(i.td,{children:["Obligatorio con valor predeterminado",(0,a.jsx)("br",{}),"Predeterminado: 3000"]})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"AI Unlimited GRPC Port"}),(0,a.jsx)(i.td,{children:"El puerto para acceder a la API de AI Unlimited."}),(0,a.jsxs)(i.td,{children:["Obligatorio con valor predeterminado",(0,a.jsx)("br",{}),"Predeterminado: 3282"]})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"Source App Sec Groups"}),(0,a.jsx)(i.td,{children:"Los grupos de seguridad de aplicaciones de origen (ASG) que tienen permiso para conectarse a la instancia de AI Unlimited. Los ASG le permiten organizar sus m\xe1quinas virtuales (VM) en funci\xf3n de sus pol\xedticas de seguridad de red espec\xedficas. Estas pol\xedticas de seguridad determinan qu\xe9 tr\xe1fico est\xe1 permitido o no en su m\xe1quina virtual."}),(0,a.jsxs)(i.td,{children:["Opcional",(0,a.jsx)("br",{}),"Predeterminado: NA",(0,a.jsx)("br",{})," Seleccione un grupo de seguridad de aplicaciones en la misma regi\xf3n que la interfaz de red."]})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"Destination App Sec Groups"}),(0,a.jsx)(i.td,{children:"Los grupos de seguridad de aplicaciones de destino que tienen permiso para conectarse a la instancia de AI Unlimited."}),(0,a.jsxs)(i.td,{children:["Opcional",(0,a.jsx)("br",{}),"Predeterminado: NA",(0,a.jsx)("br",{}),"Seleccione un grupo de seguridad de aplicaciones en la misma regi\xf3n que la interfaz de red."]})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"Role Definition ID"}),(0,a.jsx)(i.td,{children:"El ID del rol que se utilizar\xe1 con AI Unlimited."}),(0,a.jsxs)(i.td,{children:["Obligatorio",(0,a.jsx)("br",{}),"Predeterminado: NA",(0,a.jsx)("br",{}),"Use el comando de la CLI de Azure: Get-AzRoleDefinition para obtener su ID de definici\xf3n de rol."]})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"Allow Public SSH"}),(0,a.jsx)(i.td,{children:"Especifica si puede usar claves de shell seguro (SSH) para conectarse a m\xe1quinas virtuales en Azure."}),(0,a.jsxs)(i.td,{children:["Opcional",(0,a.jsx)("br",{}),"Predeterminado: verdadero"]})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"Use Key Vault"}),(0,a.jsx)(i.td,{children:"Especifica si se debe utilizar el almac\xe9n de claves para recuperar la contrase\xf1a segura durante una implementaci\xf3n."}),(0,a.jsxs)(i.td,{children:["Opcional",(0,a.jsx)("br",{}),"Predeterminado: Nuevo"]})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"Use Persistent Volume"}),(0,a.jsxs)(i.td,{children:["Especifica si desea utilizar un volumen persistente nuevo o existente para almacenar datos. Consulte ",(0,a.jsx)(i.em,{children:"M\xe1s informaci\xf3n: Uso de un volumen persistente"})," debajo de la secci\xf3n de par\xe1metros."]}),(0,a.jsxs)(i.td,{children:["Opcional con valor predeterminado",(0,a.jsx)("br",{}),"Predeterminado: Nuevo ",(0,a.jsx)("br",{}),"Opciones compatibles: Nuevo o Existente, seg\xfan su caso de uso."]})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"Persistent Volume Size"}),(0,a.jsx)(i.td,{children:"El tama\xf1o del volumen persistente que puede adjuntar a la instancia, en GB."}),(0,a.jsxs)(i.td,{children:["Opcional",(0,a.jsx)("br",{}),"Predeterminado: 100"]})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"Existing Persistent Volume"}),(0,a.jsxs)(i.td,{children:[(0,a.jsx)("br",{}),"El ID del volumen persistente existente que puede adjuntar a la instancia."]}),(0,a.jsxs)(i.td,{children:["Obligatorio si UsePersistentVolume est\xe1 configurado como Existente.",(0,a.jsx)("br",{}),"Predeterminado: Ninguno",(0,a.jsx)("br",{}),"El volumen persistente debe estar en la misma zona de disponibilidad que la instancia de AI Unlimited."]})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"AI Unlimited Version"}),(0,a.jsx)(i.td,{children:"La versi\xf3n de AI Unlimited que desea implementar."}),(0,a.jsxs)(i.td,{children:["Obligatorio con valor predeterminado",(0,a.jsx)("br",{}),"Predeterminado: \xfaltimo",(0,a.jsx)("br",{}),"El valor es una etiqueta de versi\xf3n del contenedor."]})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"Use NLB"}),(0,a.jsx)(i.td,{children:"Especifica si se accede a la instancia mediante un equilibrador de carga de red."}),(0,a.jsxs)(i.td,{children:["Obligatorio con valor predeterminado",(0,a.jsx)("br",{}),"Valor predeterminado: falso"]})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"Tags"}),(0,a.jsx)(i.td,{children:"Los pares clave-valor que se asignan a los recursos para una identificaci\xf3n r\xe1pida."}),(0,a.jsxs)(i.td,{children:["Opcional",(0,a.jsx)("br",{}),"Predeterminado",":NA"]})]})]})]})]}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsx)("summary",{children:"M\xe1s informaci\xf3n: C\xf3mo usar un volumen persistente"}),(0,a.jsx)(i.p,{children:"La instancia del administrador se ejecuta en un contenedor y guarda sus datos de configuraci\xf3n en una base de datos en el volumen ra\xedz de la instancia. Estos datos se conservan si apaga, reinicia o crea una instant\xe1nea y vuelve a iniciar la instancia."}),(0,a.jsx)(i.p,{children:"Un volumen persistente almacena datos de una aplicaci\xf3n en contenedores m\xe1s all\xe1 de la vida \xfatil del contenedor, pod o nodo en el que se ejecuta."}),(0,a.jsx)(i.p,{children:(0,a.jsx)(i.strong,{children:"Sin un volumen persistente"})}),(0,a.jsx)(i.p,{children:"Si el contenedor, el pod o el nodo fallan o finalizan, perder\xe1 los datos de configuraci\xf3n del administrador. Puede implementar una nueva instancia del administrador, pero no en el mismo estado que la que se perdi\xf3."}),(0,a.jsx)(i.p,{children:(0,a.jsx)(i.strong,{children:"Con un volumen persistente"})}),(0,a.jsx)(i.p,{children:"Si el contenedor, pod o nodo falla o finaliza, y los datos de configuraci\xf3n del administrador se almacenan en un volumen persistente, puede implementar una nueva instancia de administrador que tenga la misma configuraci\xf3n que la que se perdi\xf3."}),(0,a.jsx)(i.p,{children:(0,a.jsx)(i.strong,{children:"Ejemplo"})}),(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsxs)(i.li,{children:["Implemente el administrador y configure el par\xe1metro ",(0,a.jsx)(i.code,{children:"Usar volumen persistente"})," en ",(0,a.jsx)(i.strong,{children:"Nuevo"}),"."]}),"\n",(0,a.jsxs)(i.li,{children:["Despu\xe9s de crear la pila, en la p\xe1gina ",(0,a.jsx)(i.strong,{children:"Salidas"}),", anote el ",(0,a.jsx)(i.code,{children:"volume-id"}),"."]}),"\n",(0,a.jsx)(i.li,{children:"Utilice AI Unlimited."}),"\n",(0,a.jsxs)(i.li,{children:["Si se pierde la instancia del administrador, vuelva a implementar el administrador e incluya estos par\xe1metros:","\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"Usar volumen persistente"}),": ",(0,a.jsx)(i.strong,{children:"Nuevo"})]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"Volumen persistente existente"}),": el valor que anot\xf3 en el paso 2"]}),"\n"]}),"\n"]}),"\n"]}),(0,a.jsx)(i.p,{children:"La nueva instancia del administrador tiene la misma configuraci\xf3n que la que se perdi\xf3."})]}),"\n",(0,a.jsx)(i.h2,{id:"crear-la-instancia",children:"Crear la instancia"}),"\n",(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsxs)(i.li,{children:["Seleccione ",(0,a.jsx)(i.strong,{children:"Revisar + crear"}),"."]}),"\n",(0,a.jsxs)(i.li,{children:["Seleccione ",(0,a.jsx)(i.strong,{children:"Crear"}),".",(0,a.jsx)("br",{}),"\nEn la p\xe1gina ",(0,a.jsx)(i.strong,{children:"Notificaciones"})," puede supervisar el progreso."]}),"\n"]}),"\n",(0,a.jsxs)(i.p,{children:["Cuando se completa la implementaci\xf3n, la p\xe1gina ",(0,a.jsx)(i.strong,{children:"Salidas"})," muestra los valores generados para los recursos creados."]}),"\n",(0,a.jsx)(i.p,{children:"Necesitar\xe1 la URL para acceder al administrador y configurar AI Unlimited."}),"\n",(0,a.jsx)(i.h2,{id:"qu\xe9-sigue",children:"\xbfQu\xe9 sigue?"}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.a,{href:"/pr-preview/pr-151/es/ai-unlimited/resources/create-oauth-app",children:"Cree una aplicaci\xf3n OAuth"})," para permitir la autenticaci\xf3n entre AI Unlimited y su cuenta de proveedor de Git."]})]})}function p(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},28453:(e,i,r)=>{r.d(i,{R:()=>d,x:()=>l});var a=r(96540);const n={},s=a.createContext(n);function d(e){const i=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),a.createElement(s.Provider,{value:i},e.children)}}}]);
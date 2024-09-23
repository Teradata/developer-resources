"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[4868],{44138:(e,n,a)=>{a.d(n,{Ay:()=>l,RM:()=>s});var i=a(74848),r=a(28453);const s=[];function d(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["La carpeta ",(0,i.jsx)(n.code,{children:"deployments"})," en el ",(0,i.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited",children:"Repositorio de GitHub de AI Unlimited"})," proporcionada por Teradata contiene archivos de plantillas, par\xe1metros y pol\xedticas para instalar AI Unlimited."]}),"\n",(0,i.jsx)(n.p,{children:"Abra una ventana de terminal y clone el repositorio."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/Teradata/ai-unlimited\n"})})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},34898:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>p,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var i=a(74848),r=a(28453),s=a(44138);const d={id:"deploy-manager-aws-console",title:"Instalar en AWS",description:"Aprenda a implementar el administrador utilizando una plantilla de CloudFormation.",sidebar_label:"Instalar en AWS",sidebar_position:1,pagination_prev:null,pagination_next:null},l="Instalar el administrador en AWS",o={id:"install-ai-unlimited/deploy-manager-aws-console",title:"Instalar en AWS",description:"Aprenda a implementar el administrador utilizando una plantilla de CloudFormation.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/install-ai-unlimited/prod-aws-console-deploy-ai-unlimited.md",sourceDirName:"install-ai-unlimited",slug:"/install-ai-unlimited/deploy-manager-aws-console",permalink:"/pr-preview/pr-137/es/ai-unlimited/install-ai-unlimited/deploy-manager-aws-console",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"deploy-manager-aws-console",title:"Instalar en AWS",description:"Aprenda a implementar el administrador utilizando una plantilla de CloudFormation.",sidebar_label:"Instalar en AWS",sidebar_position:1,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},t={},c=[{value:"Clonar el repositorio",id:"clonar-el-repositorio",level:2},...s.RM,{value:"Localizar la plantilla del administrador",id:"localizar-la-plantilla-del-administrador",level:2},{value:"Cargar la plantilla",id:"cargar-la-plantilla",level:2},{value:"Especificar detalles y opciones de la pila",id:"especificar-detalles-y-opciones-de-la-pila",level:2},{value:"Revisar y crear la pila",id:"revisar-y-crear-la-pila",level:2},{value:"\xbfQu\xe9 sigue?",id:"qu\xe9-sigue",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Details:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"instalar-el-administrador-en-aws",children:"Instalar el administrador en AWS"}),"\n",(0,i.jsxs)(n.p,{children:["Antes de comenzar, aseg\xfarese de tener ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-137/es/ai-unlimited/install-ai-unlimited/#prerequisites",children:"requisitos previos"})," y de que su cuenta de AWS cumpla con ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-137/es/ai-unlimited/resources/aws-account-requirements",children:"los requisitos"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"El administrador de AI Unlimited organiza la implementaci\xf3n del motor e incluye una interfaz de usuario basada en web para la configuraci\xf3n."}),"\n",(0,i.jsxs)(n.p,{children:["Utilizar\xe1 una plantilla de CloudFormation proporcionada por Teradata para instalar el administrador desde la AWS Management Console. Implementar\xe1 una instancia de servidor en la que se ejecuta el administrador en un contenedor controlado por ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-137/es/ai-unlimited/glossary#systemd",children:"systemd"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Para obtener ayuda con la instalaci\xf3n, env\xede un correo electr\xf3nico al ",(0,i.jsx)("a",{href:"mailto:aiunlimited.support@Teradata.com",children:"equipo de soporte"})," o pregunte a la ",(0,i.jsx)(n.a,{href:"https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa",children:"comunidad"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"clonar-el-repositorio",children:"Clonar el repositorio"}),"\n","\n",(0,i.jsx)(s.Ay,{}),"\n",(0,i.jsx)(n.h2,{id:"localizar-la-plantilla-del-administrador",children:"Localizar la plantilla del administrador"}),"\n",(0,i.jsx)(n.p,{children:"Las plantillas de CloudFormation para el administrador se encuentran aqu\xed en el repositorio de GitHub de AI Unlimited:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"deployments/aws/templates/ai-unlimited/"})}),"\n",(0,i.jsxs)(n.p,{children:["Elija una plantilla en funci\xf3n de si desea utilizar un ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-137/es/ai-unlimited/glossary#load-balancer",children:"equilibrador de carga"})," y de qu\xe9 tipo."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Quiz\xe1s quiera pedirle orientaci\xf3n a un administrador de la nube de su organizaci\xf3n."})}),"\n",(0,i.jsxs)(n.p,{children:["- ",(0,i.jsx)(n.code,{children:"ai-unlimited-with-alb.yaml"}),"\u2014El administrador se encuentra detr\xe1s de un ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-137/es/ai-unlimited/glossary#application-load-balancer",children:"equilibrador de carga de aplicaciones"}),"\n- ",(0,i.jsx)(n.code,{children:"ai-unlimited-with-nlb.yaml"}),"\u2014El administrador se encuentra detr\xe1s de un ",(0,i.jsx)(n.a,{href:"/pr-preview/pr-137/es/ai-unlimited/glossary#network-load-balancer",children:"equilibrador de carga de red"}),"\n- ",(0,i.jsx)(n.code,{children:"ai-unlimited-without-lb.yaml"}),"No hay equilibrador de carga. Si no est\xe1 seguro de qu\xe9 plantilla usar, le recomendamos esta."]}),"\n",(0,i.jsx)(n.h2,{id:"cargar-la-plantilla",children:"Cargar la plantilla"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Inicia sesi\xf3n en la ",(0,i.jsx)(n.a,{href:"https://aws.amazon.com",children:"consola de AWS"}),".",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Las referencias a la AWS Management Console est\xe1n actualizadas al 29 de mayo de 2024."})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Seleccione la regi\xf3n de AWS en la que desea implementar AI Unlimited.",(0,i.jsx)("br",{}),"\nLe recomendamos seleccionar la regi\xf3n m\xe1s cercana a su ubicaci\xf3n de trabajo principal."]}),"\n",(0,i.jsxs)(n.li,{children:["Busque y vaya a ",(0,i.jsx)(n.strong,{children:"CloudFormation"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Seleccione ",(0,i.jsx)(n.strong,{children:"Crear pila"})," y luego ",(0,i.jsx)(n.strong,{children:"Con nuevos recursos (est\xe1ndar)"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Seleccione ",(0,i.jsx)(n.strong,{children:"Elegir una plantilla existente"})," y luego ",(0,i.jsx)(n.strong,{children:"Subir un archivo de plantilla"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Seleccione el archivo de plantilla que eligi\xf3 usar y haga clic en ",(0,i.jsx)(n.strong,{children:"Siguiente"}),"."]}),"\n"]}),"\n",(0,i.jsx)("a",{id:"aws-parms"}),"\n",(0,i.jsx)(n.h2,{id:"especificar-detalles-y-opciones-de-la-pila",children:"Especificar detalles y opciones de la pila"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Proporcione un nombre para la pila."}),"\n",(0,i.jsxs)(n.li,{children:["Revise los par\xe1metros. Proporcione valores para los par\xe1metros requeridos. Es posible que su organizaci\xf3n requiera otros.",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(a,{children:[(0,i.jsx)("summary",{children:"Par\xe1metros de AWS y del administrador"}),(0,i.jsx)(n.p,{children:"Los par\xe1metros de cada plantilla var\xedan. Es posible que vea algunos par\xe1metros aqu\xed que no aparecen en la consola."}),(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"}),(0,i.jsx)(n.th,{children:"Notas"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Stack name"}),(0,i.jsx)(n.td,{children:"El identificador que le ayuda a encontrar la pila AI Unlimited en una lista de pilas."}),(0,i.jsxs)(n.td,{children:["Obligatorio",(0,i.jsx)("br",{}),"Predeterminado: NA",(0,i.jsx)("br",{})," El nombre solo puede contener caracteres alfanum\xe9ricos (distingue entre may\xfasculas y min\xfasculas) y guiones. Debe comenzar con un car\xe1cter alfab\xe9tico y no puede tener m\xe1s de 128 caracteres."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"AiUnlimitedName"}),(0,i.jsx)(n.td,{children:"El nombre de la instancia de AI Unlimited."}),(0,i.jsxs)(n.td,{children:["Obligatorio con valor predeterminado",(0,i.jsx)("br",{}),"Valor predeterminado: ai-unlimited",(0,i.jsx)("br",{}),"El nombre solo puede contener caracteres alfanum\xe9ricos (distingue entre may\xfasculas y min\xfasculas) y guiones. Debe comenzar con un car\xe1cter alfab\xe9tico y no puede tener m\xe1s de 20 caracteres."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"InstanceType"}),(0,i.jsx)(n.td,{children:"El tipo de instancia EC2 para el administrador."}),(0,i.jsxs)(n.td,{children:["Obligatorio con valor predeterminado",(0,i.jsx)("br",{}),"Valor predeterminado: t3.micro",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.strong,{children:"IMPORTANTE"}),": Si la instancia no tiene el tama\xf1o adecuado, pueden ocurrir errores en la implementaci\xf3n y suspensi\xf3n del motor, y tendr\xe1 que reinstalar el administrador en una instancia m\xe1s grande.  Consulte ",(0,i.jsx)(n.em,{children:"M\xe1s informaci\xf3n: Recomendaciones de tipo (tama\xf1o) de instancia de administrador"})," debajo de la secci\xf3n de par\xe1metros."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"RootVolumeSize"}),(0,i.jsx)(n.td,{children:"El tama\xf1o del disco ra\xedz que desea adjuntar a la instancia, en GB."}),(0,i.jsxs)(n.td,{children:["Obligatorio con valor predeterminado",(0,i.jsx)("br",{}),"Predeterminado: 20",(0,i.jsx)("br",{}),"Admite valores entre 8 y 1000."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"TerminationProtection"}),(0,i.jsx)(n.td,{children:"Habilita la protecci\xf3n contra la terminaci\xf3n de instancias."}),(0,i.jsxs)(n.td,{children:["Obligatorio con valor predeterminado",(0,i.jsx)("br",{}),"Valor predeterminado: falso"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"IamRole"}),(0,i.jsx)(n.td,{children:"Especifica si CloudFormation debe crear una nueva funci\xf3n de IAM o utilizar una existente."}),(0,i.jsxs)(n.td,{children:["Obligatorio con valor predeterminado",(0,i.jsx)("br",{}),"Predeterminado: Nuevo",(0,i.jsx)("br",{}),"Las opciones admitidas son: Nuevo o Existente"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"IamRoleName"}),(0,i.jsx)(n.td,{children:"El nombre del rol de IAM que se asignar\xe1 a la instancia, ya sea un rol de IAM existente o uno reci\xe9n creado."}),(0,i.jsxs)(n.td,{children:["Opcional con valor predeterminado",(0,i.jsx)("br",{}),"Valor predeterminado: ai-unlimited-iam-role",(0,i.jsx)("br",{}),"Si se nombra un nuevo rol de IAM, CloudFormation requiere la capacidad CAPABILITY_NAMED_IAM. D\xe9jelo en blanco para usar un nombre generado autom\xe1ticamente."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"IamPermissionsBoundary"}),(0,i.jsx)(n.td,{children:"El ARN del l\xedmite de permisos de IAM para asociar con el rol de IAM asignado a la instancia."}),(0,i.jsxs)(n.td,{children:["Opcional",(0,i.jsx)("br",{}),"Predeterminado: NA"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"AvailabilityZone"}),(0,i.jsx)(n.td,{children:"La zona de disponibilidad en la que desea implementar la instancia."}),(0,i.jsxs)(n.td,{children:["Obligatorio",(0,i.jsx)("br",{}),"Predeterminado: NA",(0,i.jsx)("br",{}),"El valor debe coincidir con la subred, la zona de cualquier volumen preexistente y el tipo de instancia debe estar disponible en la zona seleccionada."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"LoadBalancerScheme"}),(0,i.jsx)(n.td,{children:"Si se utiliza un equilibrador de carga, este campo especifica si la instancia es accesible desde Internet o solo desde dentro de la VPC."}),(0,i.jsxs)(n.td,{children:["Opcional con valor predeterminado",(0,i.jsx)("br",{}),"Valor predeterminado: orientado a Internet",(0,i.jsx)("br",{}),"El nombre DNS de un equilibrador de carga orientado a Internet se puede resolver p\xfablicamente en las direcciones IP p\xfablicas de los nodos. Por lo tanto, los equilibradores de carga orientados a Internet pueden enrutar solicitudes de clientes a trav\xe9s de Internet.",(0,i.jsx)("br",{}),"Los nodos de un equilibrador de carga interno solo tienen direcciones IP privadas. El nombre DNS de un equilibrador de carga interno se puede resolver p\xfablicamente en las direcciones IP personales de los nodos. Por lo tanto, los equilibradores de carga internos pueden enrutar solicitudes de clientes con acceso a la VPC para el equilibrador de carga."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"LoadBalancerSubnetOne"}),(0,i.jsx)(n.td,{children:"La subred donde se aloja el equilibrador de carga. La subred determina las zonas de disponibilidad, las direcciones IP y los puntos finales del equilibrador de carga."}),(0,i.jsxs)(n.td,{children:["Opcional con valor predeterminado",(0,i.jsx)("br",{}),"Valor predeterminado: NA",(0,i.jsx)("br",{}),"Debe definir un m\xednimo de una subred disponible para crear un Network Load Balancer (NLB) y dos subredes para un Application Load Balancer (ALB)."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"LoadBalancerSubnetTwo"}),(0,i.jsx)(n.td,{children:"La subred donde est\xe1 alojado el equilibrador de carga."}),(0,i.jsxs)(n.td,{children:["Opcional. Esta opci\xf3n solo est\xe1 disponible en la plantilla con ALB.",(0,i.jsx)("br",{}),"Predeterminado: NA",(0,i.jsx)("br",{})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"HostedZoneID"}),(0,i.jsx)(n.td,{children:"El ID que Amazon Route 53 asign\xf3 a la zona alojada cuando la cre\xf3."}),(0,i.jsxs)(n.td,{children:["Opcional",(0,i.jsx)("br",{}),"Predeterminado: NA",(0,i.jsx)("br",{}),"Cada zona hospedada corresponde a un nombre de dominio o, posiblemente, a un subdominio. La zona hospedada es el contenedor de los registros DNS, donde configura c\xf3mo interact\xfaa el mundo con su dominio, como apuntarlo a una direcci\xf3n IP con un registro.",(0,i.jsx)("br",{}),"En la consola de AWS, vaya a ",(0,i.jsx)(n.strong,{children:"Route 53"})," > ",(0,i.jsx)(n.strong,{children:"Zonas hospedadas"}),". Busque su nombre de dominio registrado y el ID de zona hospedada correspondiente."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"DnsName"}),(0,i.jsx)(n.td,{children:"El nombre del dominio. En el caso de las zonas alojadas p\xfablicas, este es el nombre que registr\xf3 con su registrador de DNS."}),(0,i.jsxs)(n.td,{children:["Opcional",(0,i.jsx)("br",{}),"Predeterminado: NA",(0,i.jsx)("br",{}),"Para obtener informaci\xf3n sobre c\xf3mo especificar caracteres distintos de az, 0-9 y - (guion) y c\xf3mo especificar nombres de dominio internacionalizados, consulte ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHostedZone.html",children:"Crear zona alojada"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Private"}),(0,i.jsx)(n.td,{children:"Especifica si el servicio se implementa en una red privada sin IP p\xfablicas."}),(0,i.jsxs)(n.td,{children:["Obligatorio",(0,i.jsx)("br",{}),"Predeterminado: falso ",(0,i.jsx)("br",{}),"Aseg\xfarese de seleccionar la opci\xf3n ",(0,i.jsx)(n.code,{children:"Habilitar asignaci\xf3n autom\xe1tica de direcciones IPv4 p\xfablicas"})," en la subred donde reside el administrador. Si no selecciona esta opci\xf3n, la instalaci\xf3n puede fallar."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Session"}),(0,i.jsx)(n.td,{children:"Especifica si puede utilizar AWS Session Manager para acceder a la instancia."}),(0,i.jsxs)(n.td,{children:["Obligatorio",(0,i.jsx)("br",{}),"Predeterminado: falso"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Vpc"}),(0,i.jsx)(n.td,{children:"La red en la que desea implementar la instancia."}),(0,i.jsxs)(n.td,{children:["Obligatorio",(0,i.jsx)("br",{}),"Predeterminado: NA"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Subnet"}),(0,i.jsx)(n.td,{children:"La subred en la que desea implementar la instancia."}),(0,i.jsxs)(n.td,{children:["Obligatorio",(0,i.jsx)("br",{}),"Predeterminado: NA",(0,i.jsx)("br",{}),"La subred debe residir en la zona de disponibilidad seleccionada."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"KeyName"}),(0,i.jsx)(n.td,{children:"El par de claves p\xfablica y privada que le permite conectarse de forma segura a su instancia despu\xe9s de que se inicie. Cuando crea una cuenta de AWS, este es el par de claves que crea en su regi\xf3n preferida."}),(0,i.jsxs)(n.td,{children:["Opcional",(0,i.jsx)("br",{}),"Predeterminado: NA",(0,i.jsx)("br",{}),"Deje este campo en blanco si no desea incluir las claves SSH."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"AccessCIDR"}),(0,i.jsx)(n.td,{children:"El rango de direcciones IP CIDR al que se le permite acceder a la instancia."}),(0,i.jsxs)(n.td,{children:["Opcional",(0,i.jsx)("br",{}),"Valor predeterminado: NA",(0,i.jsx)("br",{}),"Recomendamos configurar este valor en un rango de IP de confianza. Defina al menos una de las siguientes opciones: AccessCIDR, PrefixList o SecurityGroup para permitir el tr\xe1fico entrante, a menos que cree reglas de ingreso de grupos de seguridad personalizadas."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"PrefixList"}),(0,i.jsx)(n.td,{children:"La lista de prefijos que puede utilizar para comunicarse con la instancia. Es una colecci\xf3n de bloques CIDR que definen un conjunto de rangos de direcciones IP que requieren la misma implementaci\xf3n de pol\xedticas."}),(0,i.jsxs)(n.td,{children:["Opcional",(0,i.jsx)("br",{}),"Valor predeterminado: NA",(0,i.jsx)("br",{}),"Defina al menos uno de los siguientes: AccessCIDR, PrefixList o SecurityGroup para permitir el tr\xe1fico entrante, a menos que cree reglas de ingreso de grupos de seguridad personalizadas. Aseg\xfarese de ingresar el nombre de la lista de prefijos, no el ID."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"SecurityGroup"}),(0,i.jsx)(n.td,{children:"El firewall virtual que controla el tr\xe1fico entrante y saliente a la instancia."}),(0,i.jsxs)(n.td,{children:["Opcional",(0,i.jsx)("br",{}),"Valor predeterminado: NA",(0,i.jsx)("br",{}),"Se implementa como un conjunto de reglas que especifican qu\xe9 protocolos, puertos y direcciones IP o bloques CIDR tienen permitido acceder a la instancia. Defina al menos uno de AccessCIDR, PrefixList o SecurityGroup para permitir el tr\xe1fico entrante a menos que cree reglas de ingreso de grupos de seguridad personalizadas."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"AIUnlimitedHttpPort"}),(0,i.jsx)(n.td,{children:"El puerto para acceder a la interfaz de usuario de AI Unlimited."}),(0,i.jsxs)(n.td,{children:["Obligatorio con valor predeterminado",(0,i.jsx)("br",{}),"Predeterminado: 3000"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"AIUnlimitedGrpcPort"}),(0,i.jsx)(n.td,{children:"El puerto para acceder a la API de AI Unlimited."}),(0,i.jsxs)(n.td,{children:["Obligatorio con valor predeterminado",(0,i.jsx)("br",{}),"Predeterminado: 3282"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"AIUnlimitedVersion"}),(0,i.jsx)(n.td,{children:"La versi\xf3n de AI Unlimited que desea implementar."}),(0,i.jsxs)(n.td,{children:["Obligatorio con valor predeterminado",(0,i.jsx)("br",{}),"Predeterminado: \xfaltimo",(0,i.jsx)("br",{}),"El valor es una etiqueta de versi\xf3n del contenedor."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"UsePersistentVolume"}),(0,i.jsxs)(n.td,{children:["Especifica si desea utilizar un volumen persistente nuevo o existente para almacenar datos. Consulte ",(0,i.jsx)(n.em,{children:"M\xe1s informaci\xf3n: Uso de un volumen persistente"})," debajo de la secci\xf3n de par\xe1metros."]}),(0,i.jsxs)(n.td,{children:["Opcional con valor predeterminado",(0,i.jsx)("br",{}),"Predeterminado: Nuevo",(0,i.jsx)("br",{}),"Las opciones admitidas son un nuevo volumen persistente o uno existente, seg\xfan su caso de uso."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"PersistentVolumeSize"}),(0,i.jsx)(n.td,{children:"El tama\xf1o del volumen persistente que conecta a la instancia, en GB."}),(0,i.jsxs)(n.td,{children:["Obligatorio con valor predeterminado",(0,i.jsx)("br",{}),"Predeterminado: 20",(0,i.jsx)("br",{}),"Admite valores entre 8 y 1000."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ExistingPersistentVolumeId"}),(0,i.jsx)(n.td,{children:"El ID del volumen persistente existente que adjunta a la instancia."}),(0,i.jsxs)(n.td,{children:["Obligatorio si UsePersistentVolume est\xe1 configurado como Existente.",(0,i.jsx)("br",{}),"Predeterminado: NA",(0,i.jsx)("br",{}),"El volumen persistente debe estar en la misma zona de disponibilidad que la instancia de AI Unlimited."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["PersistentVolume",(0,i.jsx)("br",{}),"DeletionPolicy"]}),(0,i.jsx)(n.td,{children:"El comportamiento del volumen persistente cuando se elimina la implementaci\xf3n de CloudFormation."}),(0,i.jsx)(n.td,{children:"Obligatorio por defecto"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"LatestAmiId"}),(0,i.jsx)(n.td,{children:"El ID de la imagen que apunta a la \xfaltima versi\xf3n de AMI. Este valor se utiliza para la b\xfasqueda de SSM."}),(0,i.jsxs)(n.td,{children:["Obligatorio con valor predeterminado",(0,i.jsx)("br",{}),"Predeterminado: NA",(0,i.jsx)("br",{}),"Esta implementaci\xf3n utiliza la \xfaltima imagen ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2 disponible.",(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"IMPORTANTE"}),": Cambiar este valor puede romper la pila."]})]})]})]})]}),"\n",(0,i.jsxs)(a,{children:[(0,i.jsx)("summary",{children:"M\xe1s informaci\xf3n: Recomendaciones de tipo (tama\xf1o) de instancia de administrador"}),(0,i.jsx)(n.p,{children:"Para la versi\xf3n preliminar p\xfablica de pago de AI Unlimited, en funci\xf3n de la cantidad de operaciones de implementaci\xf3n y suspensi\xf3n de motores simult\xe1neas, recomendamos estos tipos de instancias t3. El rendimiento de los dem\xe1s tipos de instancias disponibles puede variar."}),(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Tipo de instancia"}),(0,i.jsx)(n.th,{children:"Operaciones concurrentes"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"t3.micro"}),(0,i.jsx)(n.td,{children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"t3.small"}),(0,i.jsx)(n.td,{children:"hasta 5"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"t3.medium"}),(0,i.jsx)(n.td,{children:"hasta 10"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"t3.large"}),(0,i.jsx)(n.td,{children:"hasta 20"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"t3.xlarge"}),(0,i.jsx)(n.td,{children:"m\xe1s de 21"})]})]})]}),(0,i.jsx)(n.p,{children:"La concurrencia aumentar\xe1 cuando AI Unlimited se lance para disponibilidad general."})]}),"\n",(0,i.jsxs)(a,{children:[(0,i.jsx)("summary",{children:"M\xe1s informaci\xf3n: C\xf3mo usar un volumen persistente"}),(0,i.jsx)(n.p,{children:"La instancia del administrador se ejecuta en un contenedor y guarda sus datos de configuraci\xf3n en una base de datos en el volumen ra\xedz de la instancia. Estos datos se conservan si apaga, reinicia o crea una instant\xe1nea y vuelve a iniciar la instancia."}),(0,i.jsx)(n.p,{children:"Un volumen persistente almacena datos de una aplicaci\xf3n en contenedores m\xe1s all\xe1 de la vida \xfatil del contenedor, pod o nodo en el que se ejecuta."}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Sin un volumen persistente"})}),(0,i.jsx)(n.p,{children:"Si el contenedor, el pod o el nodo fallan o finalizan, perder\xe1 los datos de configuraci\xf3n del administrador. Puede implementar una nueva instancia del administrador, pero no en el mismo estado que la que se perdi\xf3."}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Con un volumen persistente"})}),(0,i.jsx)(n.p,{children:"Si el contenedor, pod o nodo falla o finaliza, y los datos de configuraci\xf3n del administrador se almacenan en un volumen persistente, puede implementar una nueva instancia de administrador que tenga la misma configuraci\xf3n que la que se perdi\xf3."}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Ejemplo"})}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Implemente el administrador e incluya estos par\xe1metros:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"UsePersistentVolume"}),": ",(0,i.jsx)(n.strong,{children:"Nuevo"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"PersistentVolumeDeletionPolicy"}),": ",(0,i.jsx)(n.strong,{children:"Conservar"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Despu\xe9s de crear la pila, en la pesta\xf1a ",(0,i.jsx)(n.strong,{children:"Salidas"}),", anote el ",(0,i.jsx)(n.code,{children:"volume-id"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Utilice AI Unlimited."}),"\n",(0,i.jsxs)(n.li,{children:["Si se pierde la instancia del administrador, vuelva a implementar el administrador e incluya estos par\xe1metros:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"UsePersistentVolume"}),": ",(0,i.jsx)(n.strong,{children:"Nuevo"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"PersistentVolumeDeletionPolicy"}),": ",(0,i.jsx)(n.strong,{children:"Conservar"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ExistingPersistentVolumeId"}),": el valor que anot\xf3 en el paso 2"]}),"\n"]}),"\n"]}),"\n"]}),(0,i.jsx)(n.p,{children:"La nueva instancia del administrador tiene la misma configuraci\xf3n que la que se perdi\xf3."})]}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["Seleccione ",(0,i.jsx)(n.strong,{children:"Siguiente"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-console-add-tags.html",children:"Configure las opciones de pila"})," seg\xfan sus necesidades, luego seleccione ",(0,i.jsx)(n.strong,{children:"Siguiente"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"revisar-y-crear-la-pila",children:"Revisar y crear la pila"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Revise la configuraci\xf3n de la plantilla."}),"\n",(0,i.jsx)(n.li,{children:"Seleccione la casilla de verificaci\xf3n para reconocer que la plantilla crear\xe1 recursos IAM."}),"\n",(0,i.jsxs)(n.li,{children:["Seleccione ",(0,i.jsx)(n.strong,{children:"Enviar"})," para implementar la pila.",(0,i.jsx)("br",{}),"\nEn la pesta\xf1a ",(0,i.jsx)(n.strong,{children:"Eventos"}),", puede supervisar el progreso. Cuando el estado de todos los recursos sea ",(0,i.jsx)(n.code,{children:"CREATE_COMPLETE"}),", el administrador estar\xe1 listo."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["La pesta\xf1a ",(0,i.jsx)(n.strong,{children:"Salidas"})," muestra los valores generados para los recursos creados."]}),"\n",(0,i.jsx)(n.p,{children:"Necesitar\xe1 la URL para acceder al administrador y configurar AI Unlimited."}),"\n",(0,i.jsx)(n.h2,{id:"qu\xe9-sigue",children:"\xbfQu\xe9 sigue?"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/pr-preview/pr-137/es/ai-unlimited/resources/create-oauth-app",children:"Cree una aplicaci\xf3n OAuth"})," para permitir la autenticaci\xf3n entre AI Unlimited y su cuenta de proveedor de Git."]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>d,x:()=>l});var i=a(96540);const r={},s=i.createContext(r);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
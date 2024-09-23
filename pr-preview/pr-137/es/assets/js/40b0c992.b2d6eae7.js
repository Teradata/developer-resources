"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[532],{44138:(e,a,n)=>{n.d(a,{Ay:()=>d,RM:()=>s});var r=n(74848),i=n(28453);const s=[];function l(e){const a={a:"a",code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.p,{children:["La carpeta ",(0,r.jsx)(a.code,{children:"deployments"})," en el ",(0,r.jsx)(a.a,{href:"https://github.com/Teradata/ai-unlimited",children:"Repositorio de GitHub de AI Unlimited"})," proporcionada por Teradata contiene archivos de plantillas, par\xe1metros y pol\xedticas para instalar AI Unlimited."]}),"\n",(0,r.jsx)(a.p,{children:"Abra una ventana de terminal y clone el repositorio."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"git clone https://github.com/Teradata/ai-unlimited\n"})})]})}function d(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},85894:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>t,toc:()=>c});var r=n(74848),i=n(28453),s=n(44138);const l={id:"deploy-jupyter-aws-console",title:"Instalar JupyterLab en AWS",description:"Aprenda a implementar JupyterLab usando una plantilla de CloudFormation.",sidebar_label:"Instalar en AWS",sidebar_position:1,pagination_prev:null,pagination_next:null},d="Instalar JupyterLab en AWS",t={id:"resources/jupyterlab/deploy-jupyter-aws-console",title:"Instalar JupyterLab en AWS",description:"Aprenda a implementar JupyterLab usando una plantilla de CloudFormation.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/resources/jupyterlab/install-jupyterlab-aws.md",sourceDirName:"resources/jupyterlab",slug:"/resources/jupyterlab/deploy-jupyter-aws-console",permalink:"/pr-preview/pr-137/es/ai-unlimited/resources/jupyterlab/deploy-jupyter-aws-console",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"deploy-jupyter-aws-console",title:"Instalar JupyterLab en AWS",description:"Aprenda a implementar JupyterLab usando una plantilla de CloudFormation.",sidebar_label:"Instalar en AWS",sidebar_position:1,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},o={},c=[{value:"Prepare su cuenta de AWS",id:"prepare-su-cuenta-de-aws",level:2},{value:"Clonar el repositorio",id:"clonar-el-repositorio",level:2},...s.RM,{value:"Localizar la plantilla de Jupyter",id:"localizar-la-plantilla-de-jupyter",level:2},{value:"Cargar la plantilla",id:"cargar-la-plantilla",level:2},{value:"Especificar detalles y opciones de la pila",id:"especificar-detalles-y-opciones-de-la-pila",level:2},{value:"Revisar y crear la pila",id:"revisar-y-crear-la-pila",level:2}];function u(e){const a={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Details:n}=a;return n||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"instalar-jupyterlab-en-aws",children:"Instalar JupyterLab en AWS"}),"\n",(0,r.jsx)(a.p,{children:"Utilizar\xe1 una plantilla de CloudFormation proporcionada por Teradata para instalar JupyterLab y el kernel de AI Unlimited desde la AWS Management Console."}),"\n",(0,r.jsxs)(a.p,{children:["Esto implementa una instancia de servidor, con JupyterLab ejecut\xe1ndose en un contenedor controlado por ",(0,r.jsx)(a.a,{href:"/pr-preview/pr-137/es/ai-unlimited/glossary#systemd",children:"systemd"}),"."]}),"\n",(0,r.jsx)(a.admonition,{type:"tip",children:(0,r.jsxs)(a.p,{children:["Para obtener ayuda con la instalaci\xf3n, env\xede un correo electr\xf3nico al ",(0,r.jsx)("a",{href:"mailto:aiunlimited.support@Teradata.com",children:"equipo de soporte"})," o pregunte a la ",(0,r.jsx)(a.a,{href:"https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa",children:"comunidad"}),"."]})}),"\n",(0,r.jsx)(a.h2,{id:"prepare-su-cuenta-de-aws",children:"Prepare su cuenta de AWS"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["Trabaje con su administrador de la nube para asegurarse de tener los permisos ",(0,r.jsx)(a.a,{href:"https://aws.amazon.com/iam/",children:"IAM"})," para crear los recursos de la nube definidos en la ",(0,r.jsx)(a.a,{href:"https://github.com/Teradata/ai-unlimited/tree/develop/deployments/aws/templates/jupyter",children:"plantilla de JupyterLab"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["Si necesita acceder a la instancia de JupyterLab para ejecutar comandos o depurar, puede usar un ",(0,r.jsx)(a.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html",children:"par de claves"})," para conectarse de forma segura mediante Secure Shell (SSH). Necesitar\xe1 el par de claves cuando ",(0,r.jsx)(a.a,{href:"#specify-stack-details-and-options",children:"especifique los detalles de la pila"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["Si planea utilizar un ",(0,r.jsx)(a.a,{href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancer-getting-started.html",children:"Application Load Balancer (ALB)"})," o un ",(0,r.jsx)(a.a,{href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancer-getting-started.html",children:"Network Load Balancer (NLB)"}),", aseg\xfarese de tener permiso para administrar estos servicios de AWS:\n- ",(0,r.jsx)(a.a,{href:"https://docs.aws.amazon.com/acm/",children:"AWS Certificate Manager"}),"\u2014para emitir un nuevo certificado para la ID de zona alojada en Route 53.\n- ",(0,r.jsx)(a.a,{href:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html",children:"AWS Route 53"}),"\u2014para configurar un nombre de dominio personalizado y enrutar consultas DNS a su equilibrador de carga."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"clonar-el-repositorio",children:"Clonar el repositorio"}),"\n","\n",(0,r.jsx)(s.Ay,{}),"\n",(0,r.jsx)(a.h2,{id:"localizar-la-plantilla-de-jupyter",children:"Localizar la plantilla de Jupyter"}),"\n",(0,r.jsx)(a.p,{children:"Las plantillas de CloudFormation para JupyterLab est\xe1n aqu\xed en el repositorio de GitHub de AI Unlimited:"}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.code,{children:"deployments/aws/templates/jupyter"})}),"\n",(0,r.jsxs)(a.p,{children:["Elija una plantilla en funci\xf3n de si desea utilizar un ",(0,r.jsx)(a.a,{href:"/pr-preview/pr-137/es/ai-unlimited/glossary#load-balancer",children:"equilibrador de carga"})," y de qu\xe9 tipo."]}),"\n",(0,r.jsx)(a.admonition,{type:"note",children:(0,r.jsx)(a.p,{children:"Quiz\xe1s quiera pedirle orientaci\xf3n a un administrador de la nube de su organizaci\xf3n."})}),"\n",(0,r.jsxs)(a.p,{children:["- ",(0,r.jsx)(a.code,{children:"jupyter-alb.yaml"}),"\u2014JupyterLab se encuentra detr\xe1s de un ",(0,r.jsx)(a.a,{href:"/pr-preview/pr-137/es/ai-unlimited/glossary#application-load-balancer",children:"equilibrador de carga de aplicaciones"}),"\n- ",(0,r.jsx)(a.code,{children:"jupyter-with-nlb.yaml"}),"\u2014JupyterLab se encuentra detr\xe1s de un ",(0,r.jsx)(a.a,{href:"/pr-preview/pr-137/es/ai-unlimited/glossary#network-load-balancer",children:"equilibrador de carga de red"}),"\n- ",(0,r.jsx)(a.code,{children:"jupyter-without-lb.yaml"}),"\u2014Sin equilibrador de carga"]}),"\n",(0,r.jsx)(a.h2,{id:"cargar-la-plantilla",children:"Cargar la plantilla"}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsxs)(a.li,{children:["Inicie sesi\xf3n en la ",(0,r.jsx)(a.a,{href:"https://aws.amazon.com",children:"consola de AWS"}),".","\n",(0,r.jsx)(a.admonition,{type:"note",children:(0,r.jsx)(a.p,{children:"Las referencias a AWS Management Console est\xe1n actualizadas al 29 de mayo de 2024."})}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["Seleccione la regi\xf3n en la que desea implementar JupyterLab.",(0,r.jsx)("br",{}),"\nLe recomendamos seleccionar la regi\xf3n m\xe1s cercana a su ubicaci\xf3n de trabajo principal."]}),"\n",(0,r.jsxs)(a.li,{children:["Busque y vaya a ",(0,r.jsx)(a.strong,{children:"CloudFormation"}),"."]}),"\n",(0,r.jsxs)(a.li,{children:["Seleccione ",(0,r.jsx)(a.strong,{children:"Crear pila"})," y luego ",(0,r.jsx)(a.strong,{children:"Con nuevos recursos (est\xe1ndar)"}),"."]}),"\n",(0,r.jsxs)(a.li,{children:["Seleccione ",(0,r.jsx)(a.strong,{children:"Elegir una plantilla existente"})," y ",(0,r.jsx)(a.strong,{children:"Subir un archivo de plantilla"}),"."]}),"\n",(0,r.jsxs)(a.li,{children:["Seleccione el archivo de plantilla que eligi\xf3 usar y haga clic en ",(0,r.jsx)(a.strong,{children:"Siguiente"}),"."]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"especificar-detalles-y-opciones-de-la-pila",children:"Especificar detalles y opciones de la pila"}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsx)(a.li,{children:"Proporcione un nombre para la pila."}),"\n",(0,r.jsx)(a.li,{children:"Revise los par\xe1metros. Proporcione valores para los requeridos. Es posible que su organizaci\xf3n requiera otros."}),"\n"]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Par\xe1metros de AWS y JupyterLab"}),(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Par\xe1metro"}),(0,r.jsx)(a.th,{children:"Descripci\xf3n"}),(0,r.jsx)(a.th,{children:"Notas"})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"InstanceType"}),(0,r.jsx)(a.td,{children:"El tipo de instancia EC2 que desea utilizar para el servicio."}),(0,r.jsxs)(a.td,{children:["Obligatorio con valor predeterminado",(0,r.jsx)("br",{}),"Predeterminado: t3.small",(0,r.jsx)("br",{}),"Recomendamos utilizar el tipo de instancia predeterminado para ahorrar costes."]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"RootVolumeSize"}),(0,r.jsx)(a.td,{children:"El tama\xf1o del disco ra\xedz que desea adjuntar a la instancia, en GB."}),(0,r.jsxs)(a.td,{children:["Obligatorio con valor predeterminado",(0,r.jsx)("br",{}),"Predeterminado: 8",(0,r.jsx)("br",{}),"Admite valores entre 8 y 1000."]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"TerminationProtection"}),(0,r.jsx)(a.td,{children:"Habilitar la protecci\xf3n de terminaci\xf3n de instancia."}),(0,r.jsxs)(a.td,{children:["Obligatorio con valor predeterminado",(0,r.jsx)("br",{}),"Valor predeterminado: falso"]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"IamRole"}),(0,r.jsx)(a.td,{children:"Especifica si CloudFormation debe crear una nueva funci\xf3n de IAM o utilizar una existente."}),(0,r.jsxs)(a.td,{children:["Obligatorio con valor predeterminado",(0,r.jsx)("br",{}),"Predeterminado: Nuevo",(0,r.jsx)("br",{}),"Las opciones admitidas son: Nuevo o Existente"]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"IamRoleName"}),(0,r.jsx)(a.td,{children:"El nombre del rol de IAM que se asignar\xe1 a la instancia, ya sea un rol de IAM existente o un rol de IAM reci\xe9n creado."}),(0,r.jsxs)(a.td,{children:["Opcional con valor predeterminado",(0,r.jsx)("br",{}),"Valor predeterminado: ai-unlimited-iam-role",(0,r.jsx)("br",{}),"Si se nombra un nuevo rol de IAM, CloudFormation requiere la capacidad CAPABILITY_NAMED_IAM. D\xe9jelo en blanco para usar un nombre generado autom\xe1ticamente."]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsxs)(a.td,{children:["IamPermissions",(0,r.jsx)("br",{}),"Boundary"]}),(0,r.jsx)(a.td,{children:"El ARN del l\xedmite de permisos de IAM para asociar con el rol de IAM asignado a la instancia."}),(0,r.jsxs)(a.td,{children:["Opcional",(0,r.jsx)("br",{}),"Predeterminado: NA"]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"AvailabilityZone"}),(0,r.jsx)(a.td,{children:"La zona de disponibilidad en la que desea implementar la instancia."}),(0,r.jsxs)(a.td,{children:["Obligatorio",(0,r.jsx)("br",{}),"Predeterminado: NA",(0,r.jsx)("br",{}),"El valor debe coincidir con la subred, la zona de cualquier volumen preexistente y el tipo de instancia debe estar disponible en la zona seleccionada."]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"LoadBalancing"}),(0,r.jsx)(a.td,{children:"Especifica si se accede a la instancia a trav\xe9s de un NLB."}),(0,r.jsxs)(a.td,{children:["Obligatorio con valor predeterminado",(0,r.jsx)("br",{}),"Predeterminado: NetworkLoadBalancer",(0,r.jsx)("br",{}),"Las opciones admitidas son: NetworkLoadBalancer o Ninguno"]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"LoadBalancerScheme"}),(0,r.jsx)(a.td,{children:"Si se utiliza un equilibrador de carga, este campo especifica si la instancia es accesible desde Internet o solo desde dentro de la VPC."}),(0,r.jsxs)(a.td,{children:["Opcional con valor predeterminado",(0,r.jsx)("br",{}),"Valor predeterminado: orientado a Internet",(0,r.jsx)("br",{}),"El nombre DNS de un equilibrador de carga orientado a Internet se puede resolver p\xfablicamente en las direcciones IP p\xfablicas de los nodos. Por lo tanto, los equilibradores de carga orientados a Internet pueden enrutar solicitudes de clientes a trav\xe9s de Internet. Los nodos de un equilibrador de carga interno solo tienen direcciones IP privadas. El nombre DNS de un equilibrador de carga interno se puede resolver p\xfablicamente en las direcciones IP personales de los nodos. Por lo tanto, los equilibradores de carga internos pueden enrutar solicitudes de clientes con acceso a la VPC para el equilibrador de carga."]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Private"}),(0,r.jsx)(a.td,{children:"Especifica si el servicio se implementa en una red privada sin IP p\xfablicas."}),(0,r.jsxs)(a.td,{children:["Obligatorio",(0,r.jsx)("br",{}),"Predeterminado: falso",(0,r.jsx)("br",{}),"Aseg\xfarese de seleccionar la opci\xf3n ",(0,r.jsx)(a.code,{children:"Habilitar asignaci\xf3n autom\xe1tica de direcciones IPv4 p\xfablicas"})," en la subred donde reside el administrador. Si no selecciona esta opci\xf3n, la instalaci\xf3n puede fallar."]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Session"}),(0,r.jsx)(a.td,{children:"Especifica si puede utilizar AWS Session Manager para acceder a la instancia."}),(0,r.jsxs)(a.td,{children:["Obligatorio",(0,r.jsx)("br",{}),"Predeterminado: falso"]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Vpc"}),(0,r.jsx)(a.td,{children:"La red en la que desea implementar la instancia."}),(0,r.jsxs)(a.td,{children:["Obligatorio",(0,r.jsx)("br",{}),"Predeterminado: NA"]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"Subnet"}),(0,r.jsx)(a.td,{children:"La subred en la que desea implementar la instancia."}),(0,r.jsxs)(a.td,{children:["Obligatorio",(0,r.jsx)("br",{}),"Predeterminado: NA",(0,r.jsx)("br",{}),"La subred debe residir en la zona de disponibilidad seleccionada."]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"KeyName"}),(0,r.jsx)(a.td,{children:"El par de claves p\xfablica y privada que le permite conectarse de forma segura a su instancia despu\xe9s de que se inicie. Cuando crea una cuenta de AWS, este es el par de claves que crea en su regi\xf3n preferida."}),(0,r.jsxs)(a.td,{children:["Opcional",(0,r.jsx)("br",{}),"Predeterminado: NA",(0,r.jsx)("br",{}),"Deje este campo en blanco si no desea incluir las claves SSH."]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"AccessCIDR"}),(0,r.jsx)(a.td,{children:"El rango de direcciones IP CIDR al que se le permite acceder a la instancia."}),(0,r.jsxs)(a.td,{children:["Opcional",(0,r.jsx)("br",{}),"Valor predeterminado: NA",(0,r.jsx)("br",{}),"Recomendamos configurar este valor en un rango de IP de confianza. Defina al menos una de las siguientes opciones: AccessCIDR, PrefixList o SecurityGroup para permitir el tr\xe1fico entrante, a menos que cree reglas de ingreso de grupos de seguridad personalizadas."]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"PrefixList"}),(0,r.jsx)(a.td,{children:"La lista de prefijos que puede utilizar para comunicarse con la instancia. Es una colecci\xf3n de bloques CIDR que definen un conjunto de rangos de direcciones IP que requieren la misma implementaci\xf3n de pol\xedticas."}),(0,r.jsxs)(a.td,{children:["Opcional",(0,r.jsx)("br",{}),"Predeterminado: NA",(0,r.jsx)("br",{}),"Defina al menos uno de AccessCIDR, PrefixList o SecurityGroup para permitir el tr\xe1fico entrante a menos que cree reglas de ingreso al grupo de seguridad personalizadas."]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"SecurityGroup"}),(0,r.jsx)(a.td,{children:"El firewall virtual que controla el tr\xe1fico entrante y saliente a la instancia."}),(0,r.jsxs)(a.td,{children:["Opcional",(0,r.jsx)("br",{}),"Valor predeterminado: NA",(0,r.jsx)("br",{}),"Se implementa como un conjunto de reglas que especifican qu\xe9 protocolos, puertos y direcciones IP o bloques CIDR tienen permitido acceder a la instancia. Defina al menos uno de AccessCIDR, PrefixList o SecurityGroup para permitir el tr\xe1fico entrante a menos que cree reglas de ingreso de grupos de seguridad personalizadas."]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"UsePersistentVolume"}),(0,r.jsxs)(a.td,{children:["Especifica si desea utilizar un volumen persistente nuevo o existente para almacenar datos. Consulte ",(0,r.jsx)(a.em,{children:"M\xe1s informaci\xf3n: Uso de un volumen persistente"})," debajo de la secci\xf3n de par\xe1metros."]}),(0,r.jsxs)(a.td,{children:["Opcional con valor predeterminado",(0,r.jsx)("br",{}),"Predeterminado: Nuevo",(0,r.jsx)("br",{}),"Las opciones admitidas son un nuevo volumen persistente o uno existente, seg\xfan su caso de uso."]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"PersistentVolumeSize"}),(0,r.jsx)(a.td,{children:"El tama\xf1o del volumen persistente que puede adjuntar a la instancia, en GB."}),(0,r.jsxs)(a.td,{children:["Obligatorio con valor predeterminado",(0,r.jsx)("br",{}),"Predeterminado: 20",(0,r.jsx)("br",{}),"Admite valores entre 8 y 1000"]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsxs)(a.td,{children:["ExistingPersistent",(0,r.jsx)("br",{}),"VolumeId"]}),(0,r.jsx)(a.td,{children:"El ID del volumen persistente existente que puede adjuntar a la instancia."}),(0,r.jsxs)(a.td,{children:["Obligatorio si UsePersistentVolume est\xe1 configurado como Existente",(0,r.jsx)("br",{}),"Predeterminado: NA",(0,r.jsx)("br",{}),"El volumen persistente debe estar en la misma zona de disponibilidad que la instancia de AI Unlimited."]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsxs)(a.td,{children:["PersistentVolume",(0,r.jsx)("br",{}),"DeletionPolicy"]}),(0,r.jsx)(a.td,{children:"El comportamiento del volumen persistente cuando se elimina la implementaci\xf3n de CloudFormation."}),(0,r.jsxs)(a.td,{children:["Obligatorio con valor predeterminado",(0,r.jsx)("br",{}),"Valor predeterminado: Conservar",(0,r.jsx)("br",{}),"Las opciones admitidas son: Eliminar, Retener, RetainExceptOnCreate e Instant\xe1nea."]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"LatestAmiId"}),(0,r.jsx)(a.td,{children:"El ID de la imagen que apunta a la \xfaltima versi\xf3n de AMI. Este valor se utiliza para la b\xfasqueda de SSM."}),(0,r.jsxs)(a.td,{children:["Obligatorio con valor predeterminado",(0,r.jsx)("br",{}),"Predeterminado: NA",(0,r.jsx)("br",{}),"Esta implementaci\xf3n utiliza la \xfaltima imagen ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2 disponible.",(0,r.jsx)("br",{}),"IMPORTANTE: Cambiar este valor puede romper la pila."]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"JupyterHttpPort"}),(0,r.jsx)(a.td,{children:"El puerto para acceder a la interfaz de usuario del servicio JupyterLab."}),(0,r.jsxs)(a.td,{children:["Obligatorio con valor predeterminado",(0,r.jsx)("br",{}),"Valor predeterminado: 8888"]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"JupyterVersion"}),(0,r.jsx)(a.td,{children:"La versi\xf3n de JupyterLab que desea implementar."}),(0,r.jsxs)(a.td,{children:["Obligatorio con valor predeterminado",(0,r.jsx)("br",{}),"Valor predeterminado: \xfaltimo",(0,r.jsx)("br",{}),"El valor es una etiqueta de versi\xf3n de contenedor, por ejemplo, \xfaltimo."]})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"JupyterToken"}),(0,r.jsx)(a.td,{children:"El token o contrase\xf1a utilizado para acceder a JupyterLab desde la interfaz de usuario."}),(0,r.jsxs)(a.td,{children:["Obligatorio",(0,r.jsx)("br",{}),"Predeterminado: NA",(0,r.jsx)("br",{}),"El token debe comenzar con una letra y contener solo caracteres alfanum\xe9ricos. El patr\xf3n permitido es ^[a-zA-Z][a-zA-Z0-9-]*."]})]})]})]})]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"M\xe1s informaci\xf3n: C\xf3mo usar un volumen persistente"}),(0,r.jsx)(a.p,{children:"La instancia de JupyterLab se ejecuta en un contenedor y guarda sus datos de configuraci\xf3n en una base de datos en el volumen ra\xedz de la instancia. Estos datos se conservan si apaga, reinicia o crea una instant\xe1nea y vuelve a iniciar la instancia."}),(0,r.jsx)(a.p,{children:"Un volumen persistente almacena datos de una aplicaci\xf3n en contenedores m\xe1s all\xe1 de la vida \xfatil del contenedor, pod o nodo en el que se ejecuta."}),(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"Sin un volumen persistente"})}),(0,r.jsx)(a.p,{children:"Si el contenedor, el pod o el nodo fallan o finalizan, perder\xe1 los datos de configuraci\xf3n de JupyterLab. Puede implementar una nueva instancia de JupyterLab, pero no en el mismo estado que la que se perdi\xf3."}),(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"Con un volumen persistente"})}),(0,r.jsx)(a.p,{children:"Si el contenedor, pod o nodo falla o finaliza, y los datos de configuraci\xf3n de JupyterLab se almacenan en un volumen persistente, puede implementar una nueva instancia de JupyterLab que tenga la misma configuraci\xf3n que la que se perdi\xf3."}),(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"Ejemplo"})}),(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsxs)(a.li,{children:["Implemente JupyterLab e incluya estos par\xe1metros:","\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"UsePersistentVolume"}),": ",(0,r.jsx)(a.strong,{children:"Nuevo"})]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"PersistentVolumeDeletionPolicy"}),": ",(0,r.jsx)(a.strong,{children:"Conservar"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["Despu\xe9s de crear la pila, en la pesta\xf1a ",(0,r.jsx)(a.strong,{children:"Salidas"}),", anote el ",(0,r.jsx)(a.code,{children:"volume-id"}),"."]}),"\n",(0,r.jsx)(a.li,{children:"Utilice JupyterLab."}),"\n",(0,r.jsxs)(a.li,{children:["Si se pierde la instancia de JupyterLab, implemente JupyterLab nuevamente e incluya estos par\xe1metros:","\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"UsePersistentVolume"}),": ",(0,r.jsx)(a.strong,{children:"Nuevo"})]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"PersistentVolumeDeletionPolicy"}),": ",(0,r.jsx)(a.strong,{children:"Conservar"})]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"ExistingPersistentVolumeId"}),": el valor que anot\xf3 en el paso 2"]}),"\n"]}),"\n"]}),"\n"]}),(0,r.jsx)(a.p,{children:"La nueva instancia de JupyterLab tiene la misma configuraci\xf3n que la que se perdi\xf3."})]}),"\n",(0,r.jsxs)(a.ol,{start:"3",children:["\n",(0,r.jsxs)(a.li,{children:["Seleccione ",(0,r.jsx)(a.strong,{children:"Siguiente"}),"."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.a,{href:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-console-add-tags.html",children:"Configure las opciones de pila"})," seg\xfan sus requisitos, luego seleccione ",(0,r.jsx)(a.strong,{children:"Siguiente"}),"."]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"revisar-y-crear-la-pila",children:"Revisar y crear la pila"}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsx)(a.li,{children:"Revise la configuraci\xf3n de la plantilla."}),"\n",(0,r.jsx)(a.li,{children:"Seleccione la casilla de verificaci\xf3n para reconocer que la plantilla crear\xe1 recursos IAM."}),"\n",(0,r.jsxs)(a.li,{children:["Seleccione ",(0,r.jsx)(a.strong,{children:"Enviar"})," para implementar la pila.",(0,r.jsx)("br",{}),"\nEn la pesta\xf1a ",(0,r.jsx)(a.strong,{children:"Eventos"}),", puede supervisar el progreso. Cuando el estado de todos los recursos sea ",(0,r.jsx)(a.code,{children:"CREATE_COMPLETE"}),", JupyterLab estar\xe1 listo."]}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["La pesta\xf1a ",(0,r.jsx)(a.strong,{children:"Salidas"})," muestra la URL para acceder a JupyterLab."]})]})}function p(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>l,x:()=>d});var r=n(96540);const i={},s=r.createContext(i);function l(e){const a=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:a},e.children)}}}]);
"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[7798],{77692:(e,n,a)=>{a.d(n,{Ay:()=>c,RM:()=>r});var s=a(74848),t=a(28453);const r=[];function i(e){const n={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,t.R)(),...e.components};return(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.mdxAdmonitionTitle,{}),(0,s.jsxs)(n.p,{children:["Si tiene alguna pregunta o necesita m\xe1s ayuda, visite nuestro ",(0,s.jsx)(n.a,{href:"https://support.teradata.com/community",children:"foro de la comunidad"})," donde podr\xe1 obtener ayuda e interactuar con otros miembros de la comunidad."]})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},68351:(e,n,a)=>{a.d(n,{Ay:()=>c,RM:()=>r});var s=a(74848),t=a(28453);const r=[];function i(e){const n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE DATABASE HR\nAS PERMANENT = 60e6, -- 60MB\n    SPOOL = 120e6; -- 120MB\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Vamos a crear una tabla de muestra, insertaremos algunos datos y los consultaremos. Primero crearemos una tabla para almacenar la informaci\xf3n de los empleados:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE SET TABLE HR.Employees (\n   GlobalID INTEGER,\n   FirstName VARCHAR(30),\n   LastName VARCHAR(30),\n   DateOfBirth DATE FORMAT 'YYYY-MM-DD',\n   JoinedDate DATE FORMAT 'YYYY-MM-DD',\n   DepartmentCode BYTEINT\n)\nUNIQUE PRIMARY INDEX ( GlobalID );\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ahora, insertemos un registro:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"INSERT INTO HR.Employees (\n   GlobalID,\n   FirstName,\n   LastName,\n   DateOfBirth,\n   JoinedDate,\n   DepartmentCode\n)\nVALUES (\n   101,\n   'Adam',\n   'Tworkowski',\n   '1980-01-05',\n   '2004-08-01',\n   01\n);\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Finalmente, veamos si podemos recuperar los datos:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM HR.Employees;\n"})}),"\n",(0,s.jsx)(n.p,{children:"Deber\xedas obtener los siguientes resultados:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"GlobalID  FirstName  LastName   DateOfBirth  JoinedDate  DepartmentCode\n--------  ---------  ---------- -----------  ----------  --------------\n     101  Adam       Tworkowski  1980-01-05  2004-08-01               1\n"})})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},99737:(e,n,a)=>{a.d(n,{Ay:()=>o,RM:()=>i});var s=a(74848),t=a(28453),r=a(68351);const i=[{value:"Ejecutar consultas de muestra",id:"ejecutar-consultas-de-muestra",level:2},...r.RM,{value:"Configuraci\xf3n opcional",id:"configuraci\xf3n-opcional",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Instale VirtualBox y 7zip:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"apt update && apt-get install p7zip-full p7zip-rar virtualbox -y\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Recupere el comando curl para descargar Vantage Express."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Vaya a ",(0,s.jsx)(n.a,{href:"https://downloads.teradata.com/download/database/teradata-express-for-vmware-player",children:"P\xe1gina de descarga de Vantage Express"})," (es necesario registrarse)."]}),"\n",(0,s.jsxs)(n.li,{children:["Haga clic en el enlace de descarga m\xe1s reciente, por ejemplo, ",(0,s.jsx)(n.strong,{children:'"Vantage Express 17.20"'}),". Ver\xe1 una ventana emergente con el acuerdo de licencia. No acepte la licencia todav\xeda."]}),"\n",(0,s.jsxs)(n.li,{children:["Abra la vista de red en su navegador. Por ejemplo, en Chrome, presione ",(0,s.jsx)("kbd",{children:"F12"})," y vaya a ",(0,s.jsx)(n.code,{children:"Red"})," pesta\xf1a:"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Pesta\xf1a de red del navegador",src:a(11729).A+"",width:"1172",height:"764"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Acepte la licencia haciendo clic en el bot\xf3n ",(0,s.jsx)(n.code,{children:"I Agree"})," y cancele la descarga."]}),"\n",(0,s.jsxs)(n.li,{children:["En la vista de red, busque la \xfaltima solicitud que comience con ",(0,s.jsx)(n.code,{children:"VantageExpress"}),". Haga clic con el bot\xf3n clic derecho sobre el elemento y seleccione ",(0,s.jsx)(n.code,{children:"Copy -> Copy como URL"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"culr de copia del navegador",src:a(71486).A+"",width:"1024",height:"928"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Regrese a la sesi\xf3n SSH y descargue Vantage Express pegando el comando curl. Agregue ",(0,s.jsx)(n.code,{children:"-o ve.7z"})," al comando para guardar la descarga en un archivo llamado ",(0,s.jsx)(n.code,{children:"ve.7z"}),". Puede eliminar todos los encabezados HTTP, por ejemplo:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -o ve.7z 'http://d289lrf5tw1zls.cloudfront.net/database/teradata-express/VantageExpress17.20_Sles12_202108300444.7z?Expires=1638719978&Signature=GKBkNvery_long_signature__&Key-Pair-Id=********************'\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Descomprima el archivo descargado. Tardar\xe1 varios minutos:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"7z x ve.7z\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Inicie la m\xe1quina virtuarl en VirtualBox. El comando se ejecutar\xe1 inmediatamente, pero el proceso de inicio de la m\xe1quina virtual tardar\xe1 varios minutos:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'export VM_IMAGE_DIR="/opt/downloads/VantageExpress17.20_Sles12"\nDEFAULT_VM_NAME="vantage-express"\nVM_NAME="${VM_NAME:-$DEFAULT_VM_NAME}"\nvboxmanage createvm --name "$VM_NAME" --register --ostype openSUSE_64\nvboxmanage modifyvm "$VM_NAME" --ioapic on --memory 6000 --vram 128 --nic1 nat --cpus 4\nvboxmanage storagectl "$VM_NAME" --name "SATA Controller" --add sata --controller IntelAhci\nvboxmanage storageattach "$VM_NAME" --storagectl "SATA Controller" --port 0 --device 0 --type hdd --medium  "$(find $VM_IMAGE_DIR -name \'*disk1*\')"\nvboxmanage storageattach "$VM_NAME" --storagectl "SATA Controller" --port 1 --device 0 --type hdd --medium  "$(find $VM_IMAGE_DIR -name \'*disk2*\')"\nvboxmanage storageattach "$VM_NAME" --storagectl "SATA Controller" --port 2 --device 0 --type hdd --medium  "$(find $VM_IMAGE_DIR -name \'*disk3*\')"\nvboxmanage modifyvm "$VM_NAME" --natpf1 "tdssh,tcp,,4422,,22"\nvboxmanage modifyvm "$VM_NAME" --natpf1 "tddb,tcp,,1025,,1025"\nvboxmanage startvm "$VM_NAME" --type headless\nvboxmanage controlvm "$VM_NAME" keyboardputscancode 1c 1c\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["SSH a la m\xe1quina virtual Vantage Express. Utilice ",(0,s.jsx)(n.code,{children:"root"})," como contrase\xf1a:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ssh -p 4422 root@localhost\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Valide que la DB est\xe9 activa:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pdestate -a\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Si el comando devuelve ",(0,s.jsx)(n.code,{children:"PDE state is RUN/STARTED. DBS state is 5: Logons are enabled - The system is quiescent"}),", significa que Vantage Express se ha iniciado. Si el estado es diferente, repita ",(0,s.jsx)(n.code,{children:"pdestate -a"})," hasta obtener el estado correcto."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Una vez que Vantage Express est\xe9 en funcionamiento, inicie el cliente de l\xednea de comandos ",(0,s.jsx)(n.code,{children:"bteq"})," del cliente. BTEQ (pronunciado \u201cbi-tik\u201d) es una herramienta cliente de prop\xf3sito general basada en comandos que se utiliza para enviar consultas SQL a una base de datos Teradata."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bteq\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Una vez en bteq, con\xe9ctese a su instancia de Vantage Express. Cuando se le solicite la contrase\xf1a, introduzca ",(0,s.jsx)(n.code,{children:"dbc"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:".logon localhost/dbc\n"})}),"\n",(0,s.jsx)(n.h2,{id:"ejecutar-consultas-de-muestra",children:"Ejecutar consultas de muestra"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Mediante el usuario ",(0,s.jsx)(n.code,{children:"dbc"}),", crearemos una nueva base de datos llamada ",(0,s.jsx)(n.code,{children:"HR"}),". Copie/pegue esta consulta y presione ",(0,s.jsx)("kbd",{children:"Entrar"}),":"]}),"\n"]}),"\n",(0,s.jsx)(r.Ay,{}),"\n",(0,s.jsx)(n.h2,{id:"configuraci\xf3n-opcional",children:"Configuraci\xf3n opcional"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Si tiene intenci\xf3n de detener e iniciar la m\xe1quina virtual, es posible que desee agregar Vantage Express al inicio autom\xe1tico. ssh a su m\xe1quina virtual y ejecute los siguientes comandos:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo -i\n\ncat <<EOF >> /etc/default/virtualbox\nVBOXAUTOSTART_DB=/etc/vbox\nVBOXAUTOSTART_CONFIG=/etc/vbox/autostart.cfg\nEOF\n\ncat <<EOF > /etc/systemd/system/vantage-express.service\n[Unit]\nDescription=vm1\nAfter=network.target virtualbox.service\nBefore=runlevel2.target shutdown.target\n[Service]\nUser=root\nGroup=root\nType=forking\nRestart=no\nTimeoutSec=5min\nIgnoreSIGPIPE=no\nKillMode=process\nGuessMainPID=no\nRemainAfterExit=yes\nExecStart=/usr/bin/VBoxManage startvm vantage-express --type headless\nExecStop=/usr/bin/VBoxManage controlvm vantage-express savestate\n[Install]\nWantedBy=multi-user.target\nEOF\n\nsystemctl daemon-reload\nsystemctl enable vantage-express\nsystemctl start vantage-express\n"})})]})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},9888:(e,n,a)=>{a.d(n,{Ay:()=>c,RM:()=>r});var s=a(74848),t=a(28453);const r=[];function i(e){const n={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,t.R)(),...e.components};return(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.mdxAdmonitionTitle,{}),(0,s.jsxs)(n.p,{children:["Ahora puede obtener una instancia alojada de Vantage de forma gratuita en ",(0,s.jsx)(n.a,{href:"https://clearscape.teradata.com/",children:"https://clearscape.teradata.com"}),"."]})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},34700:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var s=a(74848),t=a(28453),r=a(9888),i=a(77692),c=a(99737);const o={sidebar_position:1,author:"Ad\xe1n Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"12 de diciembre de 2022",description:"Ejecutar Vantage Express en AWS",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","AWS"]},l="Ejecutar Vantage Express en AWS",d={id:"get-access-to-vantage/on-your-cloud-infrastructure/run-vantage-express-on-aws",title:"Ejecutar Vantage Express en AWS",description:"Ejecutar Vantage Express en AWS",source:"@site/i18n/es/docusaurus-plugin-content-docs-quickstarts/current/get-access-to-vantage/on-your-cloud-infrastructure/run-vantage-express-on-aws.md",sourceDirName:"get-access-to-vantage/on-your-cloud-infrastructure",slug:"/get-access-to-vantage/on-your-cloud-infrastructure/run-vantage-express-on-aws",permalink:"/pr-preview/pr-157/es/quickstarts/get-access-to-vantage/on-your-cloud-infrastructure/run-vantage-express-on-aws",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,author:"Ad\xe1n Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"12 de diciembre de 2022",description:"Ejecutar Vantage Express en AWS",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","AWS"]},sidebar:"tutorialSidebar",previous:{title:"Ejecutar Vantage Express en UTM",permalink:"/pr-preview/pr-157/es/quickstarts/get-access-to-vantage/on-your-local/run-vantage-express-on-utm"},next:{title:"Ejecutar Vantage Express en Google Cloud",permalink:"/pr-preview/pr-157/es/quickstarts/get-access-to-vantage/on-your-cloud-infrastructure/vantage-express-gcp"}},u={},p=[...r.RM,{value:"Informaci\xf3n general",id:"informaci\xf3n-general",level:2},{value:"Prerrequisitos",id:"prerrequisitos",level:2},{value:"Instalaci\xf3n",id:"instalaci\xf3n",level:2},...c.RM,{value:"Limpiar",id:"limpiar",level:2},{value:"Siguientes pasos",id:"siguientes-pasos",level:2},{value:"Lectura adicional",id:"lectura-adicional",level:2},...i.RM];function m(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"ejecutar-vantage-express-en-aws",children:"Ejecutar Vantage Express en AWS"}),"\n",(0,s.jsx)(r.Ay,{}),"\n",(0,s.jsx)(n.h2,{id:"informaci\xf3n-general",children:"Informaci\xf3n general"}),"\n",(0,s.jsx)(n.p,{children:"Este tutorial demuestra c\xf3mo ejecutar Vantage Express en AWS. Vantage Express es una configuraci\xf3n de tama\xf1o reducido que contiene un motor Teradata SQL completamente funcional."}),"\n",(0,s.jsxs)(n.admonition,{type:"important",children:[(0,s.jsx)("b",{children:"Cargos del entorno de nube"}),(0,s.jsxs)(n.p,{children:["Vantage Express se distribuye como una imagen de m\xe1quina virtual. Este tutorial utiliza el tipo de instancia EC2 ",(0,s.jsx)(n.code,{children:"c5n.metal"}),". Es una instancia b\xe1sica que cuesta m\xe1s de 3\xa0$/h."]}),(0,s.jsxs)(n.p,{children:["Si quiere una opci\xf3n m\xe1s econ\xf3mica, pruebe ",(0,s.jsx)(n.a,{href:"/pr-preview/pr-157/es/quickstarts/get-access-to-vantage/on-your-cloud-infrastructure/vantage-express-gcp",children:"google cloud"})," y ",(0,s.jsx)(n.a,{href:"/pr-preview/pr-157/es/quickstarts/get-access-to-vantage/on-your-cloud-infrastructure/run-vantage-express-on-microsoft-azure",children:"Azure"}),", que admiten la virtualizaci\xf3n anidada y pueden ejecutar Vantage Express en m\xe1quinas virtuales econ\xf3micas."]}),(0,s.jsxs)(n.p,{children:["Si no quiere pagar por el uso de la nube, puede obtener una instancia alojada gratuita de Vantage en ",(0,s.jsx)(n.a,{href:"https://clearscape.teradata.com/",children:"https://clearscape.teradata.com/"}),". Alternativamente, puede instalar Vantage Express localmente usando ",(0,s.jsx)(n.a,{href:"/pr-preview/pr-157/es/quickstarts/get-access-to-vantage/on-your-local/getting-started-vmware",children:"VMware"}),", ",(0,s.jsx)(n.a,{href:"/pr-preview/pr-157/es/quickstarts/get-access-to-vantage/on-your-local/getting-started-vbox",children:"VirtualBox"}),"\xa0o ",(0,s.jsx)(n.a,{href:"/pr-preview/pr-157/es/quickstarts/get-access-to-vantage/on-your-local/run-vantage-express-on-utm",children:"UTM"}),"."]})]}),"\n",(0,s.jsx)(n.h2,{id:"prerrequisitos",children:"Prerrequisitos"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Una cuenta de AWS. Si necesita crear una nueva cuenta, siga ",(0,s.jsx)(n.a,{href:"https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/",children:"las instrucciones oficiales de AWS"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Utilidad de l\xednea de comandos\xa0",(0,s.jsx)(n.code,{children:"awscli"})," instalada y configurada en su m\xe1quina. Puede encontrar instrucciones de instalaci\xf3n aqu\xed: ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html",children:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"instalaci\xf3n",children:"Instalaci\xf3n"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Necesitar\xe1 una VPC con una subred con acceso a Internet. Si no tiene una disponible, as\xed es como puede crearla:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# Copied from https://cloudaffaire.com/how-to-create-a-custom-vpc-using-aws-cli/\n\n# Create VPC\nAWS_VPC_ID=$(aws ec2 create-vpc \\\n  --cidr-block 10.0.0.0/16 \\\n  --query \'Vpc.{VpcId:VpcId}\' \\\n  --output text)\n\n# Enable DNS hostname for your VPC\naws ec2 modify-vpc-attribute \\\n  --vpc-id $AWS_VPC_ID \\\n  --enable-dns-hostnames "{"Value":true}"\n\n# Create a public subnet\nAWS_SUBNET_PUBLIC_ID=$(aws ec2 create-subnet \\\n  --vpc-id $AWS_VPC_ID --cidr-block 10.0.1.0/24 \\\n  --query \'Subnet.{SubnetId:SubnetId}\' \\\n  --output text)\n\n# Enable Auto-assign Public IP on Public Subnet\naws ec2 modify-subnet-attribute \\\n  --subnet-id $AWS_SUBNET_PUBLIC_ID \\\n  --map-public-ip-on-launch\n\n# Create an Internet Gateway\nAWS_INTERNET_GATEWAY_ID=$(aws ec2 create-internet-gateway \\\n  --query \'InternetGateway.{InternetGatewayId:InternetGatewayId}\' \\\n  --output text)\n\n# Attach Internet gateway to your VPC\naws ec2 attach-internet-gateway \\\n  --vpc-id $AWS_VPC_ID \\\n  --internet-gateway-id $AWS_INTERNET_GATEWAY_ID\n\n# Create a route table\nAWS_CUSTOM_ROUTE_TABLE_ID=$(aws ec2 create-route-table \\\n  --vpc-id $AWS_VPC_ID \\\n  --query \'RouteTable.{RouteTableId:RouteTableId}\' \\\n  --output text )\n\n# Create route to Internet Gateway\naws ec2 create-route \\\n  --route-table-id $AWS_CUSTOM_ROUTE_TABLE_ID \\\n  --destination-cidr-block 0.0.0.0/0 \\\n  --gateway-id $AWS_INTERNET_GATEWAY_ID \\\n  --output text\n\n# Associate the public subnet with route table\nAWS_ROUTE_TABLE_ASSOID=$(aws ec2 associate-route-table  \\\n  --subnet-id $AWS_SUBNET_PUBLIC_ID \\\n  --route-table-id $AWS_CUSTOM_ROUTE_TABLE_ID \\\n  --output text | head -1)\n\n# Create a security group\naws ec2 create-security-group \\\n  --vpc-id $AWS_VPC_ID \\\n  --group-name myvpc-security-group \\\n  --description \'My VPC non default security group\' \\\n  --output text\n\n# Get security group ID\'s\nAWS_DEFAULT_SECURITY_GROUP_ID=$(aws ec2 describe-security-groups \\\n  --filters "Name=vpc-id,Values=$AWS_VPC_ID" \\\n  --query \'SecurityGroups[?GroupName == `default`].GroupId\' \\\n  --output text) &&\n  AWS_CUSTOM_SECURITY_GROUP_ID=$(aws ec2 describe-security-groups \\\n  --filters "Name=vpc-id,Values=$AWS_VPC_ID" \\\n  --query \'SecurityGroups[?GroupName == `myvpc-security-group`].GroupId\' \\\n  --output text)\n\n# Create security group ingress rules\naws ec2 authorize-security-group-ingress \\\n  --group-id $AWS_CUSTOM_SECURITY_GROUP_ID \\\n  --ip-permissions \'[{"IpProtocol": "tcp", "FromPort": 22, "ToPort": 22, "IpRanges": [{"CidrIp": "0.0.0.0/0", "Description": "Allow SSH"}]}]\' \\\n  --output text\n\n# Add a tag to the VPC\naws ec2 create-tags \\\n  --resources $AWS_VPC_ID \\\n  --tags "Key=Name,Value=vantage-express-vpc"\n\n# Add a tag to public subnet\naws ec2 create-tags \\\n  --resources $AWS_SUBNET_PUBLIC_ID \\\n  --tags "Key=Name,Value=vantage-express-vpc-public-subnet"\n\n# Add a tag to the Internet-Gateway\naws ec2 create-tags \\\n  --resources $AWS_INTERNET_GATEWAY_ID \\\n  --tags "Key=Name,Value=vantage-express-vpc-internet-gateway"\n\n# Add a tag to the default route table\nAWS_DEFAULT_ROUTE_TABLE_ID=$(aws ec2 describe-route-tables \\\n  --filters "Name=vpc-id,Values=$AWS_VPC_ID" \\\n  --query \'RouteTables[?Associations[0].Main != `false`].RouteTableId\' \\\n  --output text) &&\n  aws ec2 create-tags \\\n  --resources $AWS_DEFAULT_ROUTE_TABLE_ID \\\n  --tags "Key=Name,Value=vantage-express-vpc-default-route-table"\n\n# Add a tag to the public route table\naws ec2 create-tags \\\n  --resources $AWS_CUSTOM_ROUTE_TABLE_ID \\\n  --tags "Key=Name,Value=vantage-express-vpc-public-route-table"\n\n# Add a tags to security groups\naws ec2 create-tags \\\n  --resources $AWS_CUSTOM_SECURITY_GROUP_ID \\\n  --tags "Key=Name,Value=vantage-express-vpc-security-group" &&\n  aws ec2 create-tags \\\n  --resources $AWS_DEFAULT_SECURITY_GROUP_ID \\\n  --tags "Key=Name,Value=vantage-express-vpc-default-security-group"\n\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Para crear una m\xe1quina virtual, necesitar\xe1 un par de claves ssh. Si a\xfan no lo tiene, cree uno:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"aws ec2 create-key-pair --key-name vantage-key --query 'KeyMaterial' --output text > vantage-key.pem\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Restrinja el acceso a la clave privada. Reemplace ",(0,s.jsx)(n.code,{children:"<path_to_private_key_file>"})," con la ruta de la clave privada devuelta por el comando anterior:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"chmod 600 vantage-key.pem\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Obtenga la identificaci\xf3n de AMI de la \xfaltima imagen de Ubuntu en su regi\xf3n:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"AWS_AMI_ID=$(aws ec2 describe-images \\\n  --filters 'Name=name,Values=ubuntu/images/hvm-ssd/ubuntu-*amd64*' \\\n  --query 'Images[*].[Name,ImageId,CreationDate]' --output text \\\n  | sort -k3 -r | head -n1 | cut -f 2)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Cree una m\xe1quina virtual Ubuntu con 4 CPU, 8 GB de RAM y un disco de 70 GB."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"AWS_INSTANCE_ID=$(aws ec2 run-instances \\\n  --image-id $AWS_AMI_ID \\\n  --count 1 \\\n  --instance-type c5n.metal \\\n  --block-device-mapping DeviceName=/dev/sda1,Ebs={VolumeSize=70} \\\n  --key-name vantage-key \\\n  --security-group-ids $AWS_CUSTOM_SECURITY_GROUP_ID \\\n  --subnet-id $AWS_SUBNET_PUBLIC_ID \\\n  --query 'Instances[0].InstanceId' \\\n  --output text)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"ssh a su m\xe1quina virtual:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'AWS_INSTANCE_PUBLIC_IP=$(aws ec2 describe-instances \\\n  --query "Reservations[*].Instances[*].PublicIpAddress" \\\n  --output=text --instance-ids $AWS_INSTANCE_ID)\nssh -i vantage-key.pem ubuntu@$AWS_INSTANCE_PUBLIC_IP\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Una vez en la m\xe1quina virtual, cambie al usuario ",(0,s.jsx)(n.code,{children:"root"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo -i\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Prepare el directorio de descarga de Vantage Express:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir /opt/downloads\ncd /opt/downloads\n"})}),"\n",(0,s.jsx)(c.Ay,{}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Si desea conectarse a Vantage Express desde Internet, deber\xe1 abrir agujeros de firewall en su m\xe1quina virtual. Tambi\xe9n debe cambiar la contrase\xf1a predeterminada al usuario ",(0,s.jsx)(n.code,{children:"dbc"}),":"]}),"\n",(0,s.jsxs)(n.li,{children:["Para cambiar la contrase\xf1a del usuario ",(0,s.jsx)(n.code,{children:"dbc"}),", vaya a su m\xe1quina virtual e inicie bteq:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bteq\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Inicie sesi\xf3n en su base de datos usando ",(0,s.jsx)(n.code,{children:"dbc"})," como usuario y contrase\xf1a:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:".logon localhost/dbc\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Cambie la contrase\xf1a para el usuario ",(0,s.jsx)(n.code,{children:"dbc"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"MODIFY USER dbc AS PASSWORD = new_password;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ahora puede abrir el puerto 1025 a Internet:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'aws ec2 authorize-security-group-ingress \\\n  --group-id $AWS_CUSTOM_SECURITY_GROUP_ID \\\n  --ip-permissions \'[{"IpProtocol": "tcp", "FromPort": 1025, "ToPort": 1025, "IpRanges": [{"CidrIp": "0.0.0.0/0", "Description": "Allow Teradata port"}]}]\'\n'})}),"\n",(0,s.jsx)(n.h2,{id:"limpiar",children:"Limpiar"}),"\n",(0,s.jsx)(n.p,{children:"Para dejar de incurrir en cargos, elimine todos los recursos:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Delete the VM\naws ec2 terminate-instances --instance-ids $AWS_INSTANCE_ID --output text\n\n# Wait for the VM to terminate\n\n# Delete custom security group\naws ec2 delete-security-group \\\n  --group-id $AWS_CUSTOM_SECURITY_GROUP_ID\n\n# Delete internet gateway\naws ec2 detach-internet-gateway \\\n  --internet-gateway-id $AWS_INTERNET_GATEWAY_ID \\\n  --vpc-id $AWS_VPC_ID &&\n  aws ec2 delete-internet-gateway \\\n  --internet-gateway-id $AWS_INTERNET_GATEWAY_ID\n\n# Delete the custom route table\naws ec2 disassociate-route-table \\\n  --association-id $AWS_ROUTE_TABLE_ASSOID &&\n  aws ec2 delete-route-table \\\n  --route-table-id $AWS_CUSTOM_ROUTE_TABLE_ID\n\n# Delete the public subnet\naws ec2 delete-subnet \\\n  --subnet-id $AWS_SUBNET_PUBLIC_ID\n\n# Delete the vpc\naws ec2 delete-vpc \\\n  --vpc-id $AWS_VPC_ID\n"})}),"\n",(0,s.jsx)(n.h2,{id:"siguientes-pasos",children:"Siguientes pasos"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/pr-preview/pr-157/es/quickstarts/manage-data/nos",children:"Consultar datos almacenados en el almacenamiento de objetos"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"lectura-adicional",children:"Lectura adicional"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.teradata.com/r/Teradata-StudioTM-and-StudioTM-Express-Installation-Guide-17.20",children:"Gu\xeda de instalaci\xf3n de Teradata\xae Studio\u2122 y Studio\u2122 Express"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.teradata.com/r/jmAxXLdiDu6NiyjT6hhk7g/root",children:"Introducci\xf3n a BTEQ"})}),"\n"]}),"\n",(0,s.jsx)(i.Ay,{})]})}function g(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},71486:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/browser.copy.curl-ef8d15fbb3caf4c7c5981d9e8888f5aa.png"},11729:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/browser.network-10b20cd42fc007de4c04d0c25874a866.png"},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>c});var s=a(96540);const t={},r=s.createContext(t);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);
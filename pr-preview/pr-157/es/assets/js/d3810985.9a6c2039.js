"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[4461],{77692:(e,a,n)=>{n.d(a,{Ay:()=>t,RM:()=>o});var r=n(74848),i=n(28453);const o=[];function s(e){const a={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(a.admonition,{type:"note",children:[(0,r.jsx)(a.mdxAdmonitionTitle,{}),(0,r.jsxs)(a.p,{children:["Si tiene alguna pregunta o necesita m\xe1s ayuda, visite nuestro ",(0,r.jsx)(a.a,{href:"https://support.teradata.com/community",children:"foro de la comunidad"})," donde podr\xe1 obtener ayuda e interactuar con otros miembros de la comunidad."]})]})}function t(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},4674:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>t,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var r=n(74848),i=n(28453),o=n(77692);const s={sidebar_position:13,author:"Igor Machin, Ambrose Inman",email:"igor.machin@teradata.com",page_last_update:"18 de noviembre de 2022",description:"Ejecutar flujos de trabajo de Airflow que utilizan dbt con Teradata Vantage",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","airflow","queries","dbt"]},t="Ejecutar flujos de trabajo de Airflow que utilizan dbt con Teradata Vantage",d={id:"manage-data/execute-airflow-workflows-that-use-dbt-with-teradata-vantage",title:"Ejecutar flujos de trabajo de Airflow que utilizan dbt con Teradata Vantage",description:"Ejecutar flujos de trabajo de Airflow que utilizan dbt con Teradata Vantage",source:"@site/i18n/es/docusaurus-plugin-content-docs-quickstarts/current/manage-data/execute-airflow-workflows-that-use-dbt-with-teradata-vantage.md",sourceDirName:"manage-data",slug:"/manage-data/execute-airflow-workflows-that-use-dbt-with-teradata-vantage",permalink:"/pr-preview/pr-157/es/quickstarts/manage-data/execute-airflow-workflows-that-use-dbt-with-teradata-vantage",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13,author:"Igor Machin, Ambrose Inman",email:"igor.machin@teradata.com",page_last_update:"18 de noviembre de 2022",description:"Ejecutar flujos de trabajo de Airflow que utilizan dbt con Teradata Vantage",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","airflow","queries","dbt"]},sidebar:"tutorialSidebar",previous:{title:"Crear archivos Parquet en el almacenamiento de objetos",permalink:"/pr-preview/pr-157/es/quickstarts/manage-data/create-parquet-files-in-object-storage"},next:{title:"Conectar Teradata Vantage a Salesforce mediante Amazon Appflow",permalink:"/pr-preview/pr-157/es/quickstarts/manage-data/integrate-teradata-vantage-to-salesforce-using-amazon-appflow"}},l={},c=[{value:"Informaci\xf3n general",id:"informaci\xf3n-general",level:2},{value:"Requisitos previos",id:"requisitos-previos",level:2},{value:"Instalar y ejecutar Airflow",id:"instalar-y-ejecutar-airflow",level:2},{value:"Crear una m\xe1quina virtual",id:"crear-una-m\xe1quina-virtual",level:3},{value:"Instalar Python",id:"instalar-python",level:3},{value:"Crear un entorno de Airflow",id:"crear-un-entorno-de-airflow",level:3},{value:"Instalar Docker",id:"instalar-docker",level:3},{value:"Instalar <code>docker-compose</code> y archivos de configuraci\xf3n del entorno Docker",id:"instalar-docker-compose-y-archivos-de-configuraci\xf3n-del-entorno-docker",level:3},{value:"Instalar un proyecto dbt de prueba",id:"instalar-un-proyecto-dbt-de-prueba",level:3},{value:"Crear el entorno Airflow en Docker",id:"crear-el-entorno-airflow-en-docker",level:3},{value:"Ejecute un DAG de Airflow",id:"ejecute-un-dag-de-airflow",level:3},{value:"Resumen",id:"resumen",level:2},{value:"Lectura adicional",id:"lectura-adicional",level:2},...o.RM];function u(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"ejecutar-flujos-de-trabajo-de-airflow-que-utilizan-dbt-con-teradata-vantage",children:"Ejecutar flujos de trabajo de Airflow que utilizan dbt con Teradata Vantage"}),"\n",(0,r.jsx)(a.h2,{id:"informaci\xf3n-general",children:"Informaci\xf3n general"}),"\n",(0,r.jsx)(a.p,{children:"Este tutorial muestra c\xf3mo instalar Airflow en una m\xe1quina virtual AWS EC2, configurar el flujo de trabajo para usar dbt y ejecutarlo en una base de datos Teradata Vantage. Airflow es una herramienta de programaci\xf3n de tareas que normalmente se utiliza para crear canales de datos para procesar y cargar datos. En este ejemplo, pasamos por el proceso de instalaci\xf3n de Airflow, que crea un entorno Airflow basado en Docker. Una vez instalado Airflow, ejecutamos varios ejemplos de Airflow DAG (Direct Aciclic Graph, o simplemente flujo de trabajo) que cargan datos en una base de datos de Teradata Vantage."}),"\n",(0,r.jsx)(a.h2,{id:"requisitos-previos",children:"Requisitos previos"}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsx)(a.li,{children:"Acceso a AWS (Amazon Web Services) con permisos para crear una m\xe1quina virtual."}),"\n"]}),"\n",(0,r.jsx)(a.admonition,{type:"tip",children:(0,r.jsx)(a.p,{children:"Este tutorial se puede ajustar a otras plataformas inform\xe1ticas o incluso en una m\xe1quina b\xe1sica siempre que tenga una capacidad inform\xe1tica y de almacenamiento comparable a la m\xe1quina mencionada en este documento (t2.2xlarge EC2 en AWS con aproximadamente 100\xa0GB de almacenamiento) y est\xe9 conectada a Internet. Si decide utilizar una plataforma inform\xe1tica diferente, ser\xe1 necesario modificar algunos pasos del tutorial."})}),"\n",(0,r.jsxs)(a.ol,{start:"2",children:["\n",(0,r.jsx)(a.li,{children:"Un cliente SSH."}),"\n"]}),"\n",(0,r.jsx)(a.admonition,{type:"tip",children:(0,r.jsxs)(a.p,{children:["Si est\xe1 en una m\xe1quina Mac o Linux, estas herramientas ya est\xe1n incluidas. Si est\xe1 en Windows, considere la posibilidad de usar ",(0,r.jsx)(a.a,{href:"https://www.putty.org",children:"PuTTY"})," o ",(0,r.jsx)(a.a,{href:"https://mobaxterm.mobatek.net/download.html",children:"MobaXterm"}),"."]})}),"\n",(0,r.jsxs)(a.ol,{start:"3",children:["\n",(0,r.jsxs)(a.li,{children:["Acceda a una base de datos de Teradata Vantage. Si no tiene acceso a Teradata Vantage, explore ",(0,r.jsx)(a.a,{href:"/pr-preview/pr-157/es/quickstarts/get-access-to-vantage/on-your-local/run-vantage-express-on-utm",children:"Vantage Express"}),", una edici\xf3n gratuita para desarrolladores."]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"instalar-y-ejecutar-airflow",children:"Instalar y ejecutar Airflow"}),"\n",(0,r.jsx)(a.h3,{id:"crear-una-m\xe1quina-virtual",children:"Crear una m\xe1quina virtual"}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsxs)(a.li,{children:["Vaya a la consola de AWS EC2 y haga clic en ",(0,r.jsx)(a.code,{children:"Launch instance"}),"."]}),"\n",(0,r.jsxs)(a.li,{children:["Seleccione ",(0,r.jsx)(a.code,{children:"Red Hat"})," para la imagen del sistema operativo."]}),"\n",(0,r.jsxs)(a.li,{children:["Seleccione ",(0,r.jsx)(a.code,{children:"t2.2xlarge"})," como tipo de instancia."]}),"\n",(0,r.jsx)(a.li,{children:"Cree un nuevo par de claves o utilice uno existente."}),"\n",(0,r.jsx)(a.li,{children:"Aplique la configuraci\xf3n de red que le permitir\xe1 ssh al servidor y el servidor tendr\xe1 conectividad saliente a Internet. Por lo general, bastar\xe1 con aplicar la configuraci\xf3n predeterminada."}),"\n",(0,r.jsx)(a.li,{children:"Asigne 100\xa0GB de almacenamiento."}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"instalar-python",children:"Instalar Python"}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["ssh a la m\xe1quina mediante el usuario ",(0,r.jsx)(a.code,{children:"ec2-user"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["Compruebe si Python est\xe1 instalado (debe ser Python 3.7 o superior). Escriba ",(0,r.jsx)(a.code,{children:"python"})," o ",(0,r.jsx)(a.code,{children:"python3"})," en la l\xednea de comandos."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["Si Python no est\xe1 instalado (aparece el mensaje ",(0,r.jsx)(a.code,{children:"command not found"})," ), ejecute los siguientes comandos para instalarlo. Es posible que los comandos requieran que confirme la instalaci\xf3n escribiendo ",(0,r.jsx)(a.code,{children:"y"})," y pulsando Entrar."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",metastring:', id="install_python", role="content-editable emits-gtm-events"',children:"sudo yum install python3\n# create a virtual environment for the project\nsudo yum install python3-pip\nsudo pip3 install virtualenv\n"})}),"\n",(0,r.jsx)(a.h3,{id:"crear-un-entorno-de-airflow",children:"Crear un entorno de Airflow"}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsx)(a.li,{children:"Cree la estructura del directorio Airflow (desde el directorio de inicio del usuario ec2 /home/ec2-user)"}),"\n"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",metastring:', id="install_airflow", role="content-editable emits-gtm-events"',children:'mkdir airflow\ncd airflow\nmkdir -p ./dags ./logs ./plugins ./data ./config ./data\necho -e "AIRFLOW_UID=$(id -u)" > .env\n'})}),"\n",(0,r.jsxs)(a.ol,{start:"2",children:["\n",(0,r.jsxs)(a.li,{children:["Utilice su herramienta de transferencia de archivos preferida (",(0,r.jsx)(a.code,{children:"scp"}),", ",(0,r.jsx)(a.code,{children:"PuTTY"}),", ",(0,r.jsx)(a.code,{children:"MobaXterm"})," o similar) para cargar el archivo ",(0,r.jsx)(a.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(41795).A+"",children:"airflow.cfg"})," en el directorio ",(0,r.jsx)(a.code,{children:"airflow/config"}),"."]}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"instalar-docker",children:"Instalar Docker"}),"\n",(0,r.jsx)(a.p,{children:"Docker es una herramienta de contenedorizaci\xf3n que nos permite instalar Airflow en un entorno en contenedores."}),"\n",(0,r.jsx)(a.admonition,{type:"note",children:(0,r.jsxs)(a.p,{children:["Los pasos deben ejecutarse en el directorio ",(0,r.jsx)(a.code,{children:"airflow"}),"."]})}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsx)(a.li,{children:"Desinstale podman (herramienta de contenedorizaci\xf3n RHEL)"}),"\n"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",metastring:', id="uninstall_podman", role="content-editable emits-gtm-events"',children:"sudo yum remove docker \\\ndocker-client \\\ndocker-client-latest \\\ndocker-common \\\ndocker-latest \\\ndocker-latest-logrotate \\\ndocker-logrotate \\\ndocker-engine \\\npodman \\\nrunc\n"})}),"\n",(0,r.jsxs)(a.ol,{start:"2",children:["\n",(0,r.jsx)(a.li,{children:"Instalar las utilidades yum"}),"\n"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",metastring:', id="install_yum", role="content-editable emits-gtm-events"',children:"sudo yum install -y yum-utils\n"})}),"\n",(0,r.jsxs)(a.ol,{start:"3",children:["\n",(0,r.jsx)(a.li,{children:"Agregue Docker al repositorio de yum."}),"\n"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",metastring:', id="add_docker_to_yum", role="content-editable emits-gtm-events"',children:"sudo yum-config-manager \\\n--add-repo \\\nhttps://download.docker.com/linux/centos/docker-ce.repo\n"})}),"\n",(0,r.jsxs)(a.ol,{start:"4",children:["\n",(0,r.jsx)(a.li,{children:"Instalar Docker."}),"\n"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",metastring:', id="install_docker", role="content-editable emits-gtm-events"',children:"sudo yum install docker-ce docker-ce-cli containerd.io\n"})}),"\n",(0,r.jsxs)(a.ol,{start:"5",children:["\n",(0,r.jsx)(a.li,{children:"Inicie Docker como servicio. El primer comando ejecuta el servicio Docker autom\xe1ticamente la pr\xf3xima vez que el sistema se inicie. El segundo comando inicia Docker ahora."}),"\n"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",metastring:', id="start_docker", role="content-editable emits-gtm-events"',children:"sudo systemctl enable docker\nsudo systemctl start docker\n"})}),"\n",(0,r.jsxs)(a.ol,{start:"6",children:["\n",(0,r.jsx)(a.li,{children:"Compruebe si Docker est\xe1 instalado correctamente. Este comando deber\xeda devolver una lista vac\xeda de contenedores (ya que a\xfan no hemos iniciado ning\xfan contenedor):"}),"\n"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",metastring:', id="check_docker", role="content-editable emits-gtm-events"',children:"sudo docker ps\n"})}),"\n",(0,r.jsxs)(a.h3,{id:"instalar-docker-compose-y-archivos-de-configuraci\xf3n-del-entorno-docker",children:["Instalar ",(0,r.jsx)(a.code,{children:"docker-compose"})," y archivos de configuraci\xf3n del entorno Docker"]}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsxs)(a.li,{children:["Cargue los archivos ",(0,r.jsx)(a.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(63861).A+"",children:"Dockerfile"})," y ",(0,r.jsx)(a.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(24893).A+"",children:"Dockerfile"})," a la m\xe1quina virtual y gu\xe1rdelos en el directorio ",(0,r.jsx)(a.code,{children:"airflow"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(a.admonition,{type:"tip",children:[(0,r.jsx)(a.mdxAdmonitionTitle,{}),(0,r.jsxs)(a.p,{children:["Qu\xe9 hacen ",(0,r.jsx)(a.code,{children:"docker-compose.yaml"})," y ",(0,r.jsx)(a.code,{children:"Dockerfile"}),"\nLos archivos ",(0,r.jsx)(a.code,{children:"docker-compose.yaml"})," y ",(0,r.jsx)(a.code,{children:"Dockerfile"})," son \u200b\u200bnecesarios para crear el entorno durante la instalaci\xf3n. El archivo ",(0,r.jsx)(a.code,{children:"docker-compose.yaml"})," descarga e instala el contenedor Docker de Airflow. El contenedor incluye la interfaz de usuario web, una base de datos Postgres para metadatos, el programador, 3 trabajadores (por lo que se pueden ejecutar 3 tareas en paralelo), el activador y el servidor web nginx para mostrar los documentos producidos por ",(0,r.jsx)(a.code,{children:"dbt"}),". Adem\xe1s, los directorios de host se montan en contenedores y se realizan otros procesos de instalaci\xf3n. ",(0,r.jsx)(a.code,{children:"Dockerfile"})," instalar\xe1 los paquetes necesarios en cada contenedor."]}),(0,r.jsxs)(a.p,{children:["Si desea obtener m\xe1s informaci\xf3n sobre qu\xe9 hacen los archivos ",(0,r.jsx)(a.code,{children:"docker-compose.yaml"})," y ",(0,r.jsx)(a.code,{children:"Dockerfile"}),", exam\xednelos. Hay comentarios que aclaran qu\xe9 est\xe1 instalado y por qu\xe9."]})]}),"\n",(0,r.jsxs)(a.ol,{start:"2",children:["\n",(0,r.jsx)(a.li,{children:"Instale docker-compose (necesario para ejecutar el archivo yaml)."}),"\n"]}),"\n",(0,r.jsx)(a.admonition,{type:"note",children:(0,r.jsxs)(a.p,{children:["Las instrucciones se basan en la versi\xf3n 1.29.2. Visite el sitio ",(0,r.jsx)(a.a,{href:"https://github.com/docker/compose/releases",children:"https://github.com/docker/compose/releases"})," para obtener la \xfaltima versi\xf3n y actualice el siguiente comando seg\xfan sea necesario."]})}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",metastring:', id="install_docker_compose", role="content-editable emits-gtm-events"',children:"sudo curl -L https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose\nsudo chmod +x /usr/local/bin/docker-compose\nsudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose\n"})}),"\n",(0,r.jsxs)(a.ol,{start:"3",children:["\n",(0,r.jsxs)(a.li,{children:["Pruebe su instalaci\xf3n de Docker-Compose. El comando deber\xeda devolver la versi\xf3n de Docker-Compose, por ejemplo ",(0,r.jsx)(a.code,{children:"docker-compose version 1.29.2, build 5becea4c"}),":"]}),"\n"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",metastring:', id="check_docker_compose", role="content-editable emits-gtm-events"',children:"docker-compose --version\n"})}),"\n",(0,r.jsx)(a.h3,{id:"instalar-un-proyecto-dbt-de-prueba",children:"Instalar un proyecto dbt de prueba"}),"\n",(0,r.jsxs)(a.admonition,{type:"note",children:[(0,r.jsx)(a.mdxAdmonitionTitle,{}),(0,r.jsxs)(a.p,{children:["Estos pasos configuran un proyecto dbt de muestra. La herramienta ",(0,r.jsx)(a.code,{children:"dbt"})," ser\xe1 instalada en los contenedores m\xe1s adelante por ",(0,r.jsx)(a.code,{children:"docker-compose"}),"."]})]}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsx)(a.li,{children:"Instale git:"}),"\n"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",metastring:', id="install_git", role="content-editable emits-gtm-events"',children:"sudo yum install git\n"})}),"\n",(0,r.jsxs)(a.ol,{start:"2",children:["\n",(0,r.jsx)(a.li,{children:"Obtenga el proyecto dbt de muestra de jaffle shop:"}),"\n"]}),"\n",(0,r.jsx)(a.admonition,{type:"note",children:(0,r.jsxs)(a.p,{children:["Los directorios dbt se crear\xe1n en el directorio de inicio (no en ",(0,r.jsx)(a.code,{children:"airflow"}),"). El directorio de inicio en nuestro ejemplo es ",(0,r.jsx)(a.code,{children:"/home/ec2-user"}),"."]})}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",metastring:', id="download_sample_dbt_project", role="content-editable emits-gtm-events"',children:"# move to home dir\ncd\nmkdir dbt\ncd dbt\ngit clone https://github.com/Teradata/jaffle_shop-dev.git jaffle_shop\ncd jaffle_shop\nmkdir target\nchmod 777 target\necho '' > target/index.html\nchmod o+w target/index.html\n"})}),"\n",(0,r.jsxs)(a.ol,{start:"3",children:["\n",(0,r.jsxs)(a.li,{children:["Cree los usuarios/bases de datos ",(0,r.jsx)(a.code,{children:"airflowtest"})," y ",(0,r.jsx)(a.code,{children:"jaffle_shop"})," en su base de datos Teradata utilizando su herramienta de base de datos preferida (Teradata Studio Express, ",(0,r.jsx)(a.code,{children:"bteq"})," o similar). Inicie sesi\xf3n en la base de datos como ",(0,r.jsx)(a.code,{children:"dbc"}),", luego ejecute los comandos (cambie las contrase\xf1as si es necesario):"]}),"\n"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-sql",metastring:', id="create_databases", role="content-editable emits-gtm-events"',children:'CREATE USER "airflowtest" FROM "dbc" AS PERM=5000000000 PASSWORD="abcd";\nCREATE USER "jaffle_shop" FROM "dbc" AS PERM=5000000000 PASSWORD="abcd";\n'})}),"\n",(0,r.jsxs)(a.ol,{start:"4",children:["\n",(0,r.jsx)(a.li,{children:"Cree el directorio de configuraci\xf3n de dbt:"}),"\n"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",metastring:', id="create_dbt_config_dir", role="content-editable emits-gtm-events"',children:"cd\nmkdir .dbt\n"})}),"\n",(0,r.jsxs)(a.ol,{start:"5",children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["Copie ",(0,r.jsx)(a.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(21463).A+"",children:"profiles.yml"})," en el directorio ",(0,r.jsx)(a.code,{children:".dbt"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["Edite el archivo para que corresponda a la configuraci\xf3n de su base de datos Teradata. Como m\xednimo, deber\xe1 cambiar el host, el usuario y la contrase\xf1a. Utilice las credenciales de usuario de ",(0,r.jsx)(a.code,{children:"jaffle_shop"})," que configur\xf3 en el paso 3."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"crear-el-entorno-airflow-en-docker",children:"Crear el entorno Airflow en Docker"}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsxs)(a.li,{children:["Ejecute el script de creaci\xf3n del entorno de Docker en el directorio ",(0,r.jsx)(a.code,{children:"airflow"})," donde ",(0,r.jsx)(a.code,{children:"Dockerfile"})," y ",(0,r.jsx)(a.code,{children:"docker-compose.yaml"}),":"]}),"\n"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",metastring:', id="run_docker_compose", role="content-editable emits-gtm-events"',children:"cd ~/airflow\nsudo docker-compose up --build\n"})}),"\n",(0,r.jsx)(a.p,{children:"Esto puede tardar entre 5 y 10 minutos; cuando se complete la instalaci\xf3n, deber\xeda ver en la pantalla un mensaje similar a este:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",metastring:', id="run_docker_compose_response", role="content-editable emits-gtm-events"',children:'airflow-webserver_1  | 127.0.0.1 - - [13/Sep/2022:00:20:48 +0000] "GET /health HTTP/1.1" 200 187 "-" "curl/7.74.0"\n'})}),"\n",(0,r.jsx)(a.p,{children:"Esto significa que el servidor web Airflow est\xe1 listo para aceptar llamadas."}),"\n",(0,r.jsxs)(a.ol,{start:"2",children:["\n",(0,r.jsx)(a.li,{children:"Ahora Airflow deber\xeda estar activo. La sesi\xf3n de terminal que est\xe1bamos usando durante la instalaci\xf3n se usar\xe1 para mostrar mensajes de registro, por lo que se recomienda\nabrir otra sesi\xf3n de terminal para pasos posteriores. Para verificar el tipo de instalaci\xf3n de Airflow:"}),"\n"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",metastring:', id="check_airflow_in_docker", role="content-editable emits-gtm-events"',children:"sudo docker ps\n"})}),"\n",(0,r.jsx)(a.p,{children:"El resultado deber\xeda ser algo como:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",metastring:', id="check_airflow_in_docker_output", role="content-editable emits-gtm-events"',children:'CONTAINER ID   IMAGE                  COMMAND                  CREATED          STATUS                    PORTS                                                 NAMES\n60d50d9f43f5   apache/airflow:2.2.4   "/usr/bin/dumb-init \u2026"   18 minutes ago   Up 18 minutes (healthy)   8080/tcp                                              airflow_airflow-scheduler_1\ne2b46ec98274   apache/airflow:2.2.4   "/usr/bin/dumb-init \u2026"   18 minutes ago   Up 18 minutes (healthy)   8080/tcp                                              airflow_airflow-worker_3_1\n7b44004c7277   apache/airflow:2.2.4   "/usr/bin/dumb-init \u2026"   18 minutes ago   Up 18 minutes (healthy)   8080/tcp                                              airflow_airflow-worker_1_1\n4017b8ce9235   apache/airflow:2.2.4   "/usr/bin/dumb-init \u2026"   18 minutes ago   Up 18 minutes (healthy)   0.0.0.0:8080->8080/tcp, :::8080->8080/tcp             airflow_airflow-webserver_1\n3cc407e2d565   apache/airflow:2.2.4   "/usr/bin/dumb-init \u2026"   18 minutes ago   Up 18 minutes (healthy)   0.0.0.0:5555->5555/tcp, :::5555->5555/tcp, 8080/tcp   airflow_flower_1\n340a83b202e3   apache/airflow:2.2.4   "/usr/bin/dumb-init \u2026"   18 minutes ago   Up 18 minutes (healthy)   8080/tcp                                              airflow_airflow-triggerer_1\n82198f0d8b84   apache/airflow:2.2.4   "/usr/bin/dumb-init \u2026"   18 minutes ago   Up 18 minutes (healthy)   8080/tcp                                              airflow_airflow-worker_2_1\n382c3077c1e5   redis:latest           "docker-entrypoint.s\u2026"   18 minutes ago   Up 18 minutes (healthy)   6379/tcp                                              airflow_redis_1\n8a3be8d8a7f4   nginx                  "/docker-entrypoint.\u2026"   18 minutes ago   Up 18 minutes (healthy)   0.0.0.0:4000->80/tcp, :::4000->80/tcp                 airflow_nginx_1\n9ca888e9e8df   postgres:13            "docker-entrypoint.s\u2026"   18 minutes ago   Up 18 minutes (healthy)   5432/tcp                                              airflow_postgres_1\n'})}),"\n",(0,r.jsxs)(a.ol,{start:"3",children:["\n",(0,r.jsx)(a.li,{children:"OPCIONAL: Si desea eliminar la instalaci\xf3n de Docker (por ejemplo, para actualizar los archivos docker-compose.yaml y Dockerfile y recrear un entorno diferente), el comando es (desde el directorio de Airflow donde se encuentran estos archivos):"}),"\n"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",metastring:', id="docker_compose_down", role="content-editable emits-gtm-events"',children:"sudo docker-compose down --volumes --rmi all\n"})}),"\n",(0,r.jsx)(a.p,{children:"Una vez que la pila est\xe9 inactiva, actualice los archivos de configuraci\xf3n y reinicie ejecutando el comando en el paso 1."}),"\n",(0,r.jsxs)(a.ol,{start:"4",children:["\n",(0,r.jsxs)(a.li,{children:["Para probar si la interfaz de usuario web de Airflow funciona, escriba las siguientes URL en su navegador. Reemplace ",(0,r.jsx)(a.code,{children:"<VM_IP_ADDRESS>"})," con la direcci\xf3n IP externa de la m\xe1quina virtual:"]}),"\n"]}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["UI de DAG: ",(0,r.jsx)(a.code,{children:"http://<YOUR_IP_ADDRESS>:8080/home"})," - nombre de usuario: airflow / contrase\xf1a: airflow"]}),"\n",(0,r.jsxs)(a.li,{children:["Interfaz de usuario de Flower Airflow (control de trabajadores): ",(0,r.jsx)(a.code,{children:"http://<YOUR_IP_ADDRESS>:5555/"})]}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"ejecute-un-dag-de-airflow",children:"Ejecute un DAG de Airflow"}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsxs)(a.li,{children:["Copie los archivos ",(0,r.jsx)(a.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(6174).A+"",children:"airflow_dbt_integration.py"}),", ",(0,r.jsx)(a.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(51367).A+"",children:"db_test_example_dag.py"}),", ",(0,r.jsx)(a.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(17176).A+"",children:"discover_dag.py"}),", ",(0,r.jsx)(a.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(6276).A+"",children:"variables.json"})," en ",(0,r.jsx)(a.code,{children:"/home/ec2-user/airflow/dags"}),"."]}),"\n",(0,r.jsx)(a.li,{children:"Examine los archivos:"}),"\n"]}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"airflow_dbt_integration.py"})," - un ejemplo simple de Teradata SQL que crea algunas tablas y ejecuta consultas."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"db_test_example_dag.py"})," - ejecuta un ejemplo de dbt (es decir, integraci\xf3n de dbt y airflow con una base de datos Teradata). En este ejemplo se crea, se carga un modelo de datos ficticio de jaffle_shop y se genera la documentaci\xf3n para este proyecto (puede verla apuntando su navegador a ",(0,r.jsx)(a.code,{children:"http://<VM_IP_ADDRESS>:4000/"}),")"]}),"\n"]}),"\n",(0,r.jsx)(a.admonition,{type:"note",children:(0,r.jsxs)(a.p,{children:["[Ajuste ",(0,r.jsx)(a.code,{children:"db_test_example_dag.py"}),"]\n",(0,r.jsx)(a.code,{children:"db_test_example_dag.py"})," debe actualizarse para que la direcci\xf3n IP de la base de datos de Teradata apunte a su base de datos."]})}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"discover_dag.py"})," - un ejemplo sobre c\xf3mo cargar varios tipos de archivos de datos (CSV, Parquet, JSON). El archivo de c\xf3digo fuente contiene comentarios que explican qu\xe9 hace el programa y c\xf3mo usarlo. Este ejemplo se basa en el archivo ",(0,r.jsx)(a.code,{children:"variables.json"}),". El archivo debe importarse a Airflow. Ocurrir\xe1 en pasos posteriores."]}),"\n"]}),"\n",(0,r.jsxs)(a.ol,{start:"3",children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Espere unos minutos hasta que la herramienta de airflow recoja estos archivos dag. Una vez recogidos, aparecer\xe1n en la lista de dags en la p\xe1gina de inicio de Airflow."}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["Importe el archivo ",(0,r.jsx)(a.code,{children:"variables.json"})," como un archivo variable en Airflow:"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["Haga clic en el elemento de men\xfa ",(0,r.jsx)(a.code,{children:"Admin -> Variables"})," para ir a la p\xe1gina Variables\n",(0,r.jsx)(a.img,{alt:"Men\xfa desplegable de administraci\xf3n de Airflow",src:n(83291).A+"",width:"3783",height:"1698"})]}),"\n",(0,r.jsxs)(a.li,{children:["Haga clic en ",(0,r.jsx)(a.code,{children:"Choose File"}),", luego seleccione ",(0,r.jsx)(a.code,{children:"variable.json"})," en su explorador de archivos y haga clic en ",(0,r.jsx)(a.code,{children:"Import Variables"}),"\n",(0,r.jsx)(a.img,{alt:"Men\xfa desplegable de administraci\xf3n de Airflow",src:n(1389).A+"",width:"3780",height:"1788"})]}),"\n",(0,r.jsx)(a.li,{children:"Edite las variables para que coincidan con su entorno."}),"\n"]}),"\n",(0,r.jsxs)(a.ol,{start:"5",children:["\n",(0,r.jsx)(a.li,{children:"Ejecute dags desde la interfaz de usuario y verifique los registros."}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"resumen",children:"Resumen"}),"\n",(0,r.jsx)(a.p,{children:"Este tutorial tiene como objetivo proporcionar un ejercicio pr\xe1ctico sobre c\xf3mo instalar un entorno Airflow en un servidor Linux y c\xf3mo utilizar Airflow para interactuar con una base de datos Teradata Vantage. Se proporciona un ejemplo adicional sobre c\xf3mo integrar Airflow y la herramienta de modelado y mantenimiento de datos dbt para crear y cargar una base de datos Teradata Vantage."}),"\n",(0,r.jsx)(a.h2,{id:"lectura-adicional",children:"Lectura adicional"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"/pr-preview/pr-157/es/quickstarts/manage-data/dbt",children:"Utilizar dbt (herramienta de creaci\xf3n de datos) con Teradata Vantage"})}),"\n"]}),"\n","\n",(0,r.jsx)(o.Ay,{})]})}function m(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},24893:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/files/Dockerfile-e02ecc3d2dfef9b0b3195ec722bcd3ce.txt"},41795:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/files/airflow-6c270318138bb4142ed64bd3878052d0.cfg"},6174:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/files/airflow_dbt_integration-fea3922ba23945058eec5d9178388b32.py"},51367:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/files/db_test_example_dag-62b1e0c51ca30665b1186191560a7411.py"},17176:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/files/discover_dag-9d3a41b1b862fb8bc402709ce4c65372.py"},63861:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/files/docker-compose-9ea58983842a8b8e0670cfa18006bcaf.yaml"},21463:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/files/profiles-0bb28df29acc968ba3c054b5088f794c.yml"},6276:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/files/variables-f48f86a689d2f23fed304ee931860963.json"},83291:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/admin-dropdown-b21c608a7073253228b02cbdc69907ca.png"},1389:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/import-variables-038f9bde89911ff49c1e48d190dc27b8.png"},28453:(e,a,n)=>{n.d(a,{R:()=>s,x:()=>t});var r=n(96540);const i={},o=r.createContext(i);function s(e){const a=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:a},e.children)}}}]);
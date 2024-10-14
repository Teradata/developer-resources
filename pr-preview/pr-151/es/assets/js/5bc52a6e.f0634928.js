"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[5678],{77692:(e,a,n)=>{n.d(a,{Ay:()=>o,RM:()=>r});var t=n(74848),i=n(28453);const r=[];function s(e){const a={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,i.R)(),...e.components};return(0,t.jsxs)(a.admonition,{type:"note",children:[(0,t.jsx)(a.mdxAdmonitionTitle,{}),(0,t.jsxs)(a.p,{children:["Si tiene alguna pregunta o necesita m\xe1s ayuda, visite nuestro ",(0,t.jsx)(a.a,{href:"https://support.teradata.com/community",children:"foro de la comunidad"})," donde podr\xe1 obtener ayuda e interactuar con otros miembros de la comunidad."]})]})}function o(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},76475:(e,a,n)=>{n.d(a,{Ay:()=>o,RM:()=>r});var t=n(74848),i=n(28453);const r=[];function s(e){const a={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,i.R)(),...e.components};return(0,t.jsxs)(a.admonition,{type:"note",children:[(0,t.jsx)(a.mdxAdmonitionTitle,{}),(0,t.jsxs)(a.p,{children:["Este tutorial le muestra c\xf3mo agregar Teradata Extensions a un entorno de Jupyter Notebooks. Hay disponible una versi\xf3n alojada de Jupyter Notebooks integrada con extensiones de Teradata y herramientas de an\xe1lisis, para pruebas funcionales de forma gratuita en ",(0,t.jsx)(a.a,{href:"https://clearscape.teradata.com",children:"https://clearscape.teradata.com"}),"."]})]})}function o(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},23961:(e,a,n)=>{n.d(a,{Ay:()=>o,RM:()=>r});var t=n(74848),i=n(28453);const r=[];function s(e){const a={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,i.R)(),...e.components};return(0,t.jsxs)(a.admonition,{type:"note",children:[(0,t.jsx)(a.mdxAdmonitionTitle,{}),(0,t.jsxs)(a.p,{children:["Si necesita una instancia de prueba de Vantage, puede obtener una de forma gratuita en ",(0,t.jsx)(a.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})]})}function o(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},23301:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>p});var t=n(74848),i=n(28453),r=n(23961),s=n(76475),o=n(77692);const d={sidebar_position:11,author:"Hailing Jiang",email:"Hailing.Jiang@teradata.com",page_last_update:"27 de septiembre de 2022",description:"Integrar las extensiones de Teradata Jupyter con una instancia de cuaderno de SageMaker",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","teradatasqlalquimia"]},c="Integrar las extensiones de Teradata Jupyter con una instancia de cuaderno de SageMaker",l={id:"analyze-data/integrate-teradata-jupyter-extensions-with-sagemaker",title:"Integrar las extensiones de Teradata Jupyter con una instancia de cuaderno de SageMaker",description:"Integrar las extensiones de Teradata Jupyter con una instancia de cuaderno de SageMaker",source:"@site/i18n/es/docusaurus-plugin-content-docs-quickstarts/current/analyze-data/integrate-teradata-jupyter-extensions-with-sagemaker.md",sourceDirName:"analyze-data",slug:"/analyze-data/integrate-teradata-jupyter-extensions-with-sagemaker",permalink:"/pr-preview/pr-151/es/quickstarts/analyze-data/integrate-teradata-jupyter-extensions-with-sagemaker",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,author:"Hailing Jiang",email:"Hailing.Jiang@teradata.com",page_last_update:"27 de septiembre de 2022",description:"Integrar las extensiones de Teradata Jupyter con una instancia de cuaderno de SageMaker",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","teradatasqlalquimia"]},sidebar:"tutorialSidebar",previous:{title:"Integrar las extensiones de Teradata Jupyter con Google Vertex AI",permalink:"/pr-preview/pr-151/es/quickstarts/analyze-data/integrate-teradata-jupyter-extensions-with-google-vertex-ai"},next:{title:"Crear visualizaciones en Power BI mediante Vantage",permalink:"/pr-preview/pr-151/es/quickstarts/analyze-data/create-stunning-visualizations-in-power-bi-using-data-from-teradata-vantage"}},u={},p=[...s.RM,{value:"Informaci\xf3n general",id:"informaci\xf3n-general",level:3},{value:"Prerrequisitos",id:"prerrequisitos",level:3},...r.RM,{value:"Integraci\xf3n",id:"integraci\xf3n",level:3},{value:"Pasos para integrar con la instancia de cuaderno",id:"pasos-para-integrar-con-la-instancia-de-cuaderno",level:3},{value:"Lectura adicional",id:"lectura-adicional",level:3},...o.RM];function m(e){const a={a:"a",code:"code",h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"integrar-las-extensiones-de-teradata-jupyter-con-una-instancia-de-cuaderno-de-sagemaker",children:"Integrar las extensiones de Teradata Jupyter con una instancia de cuaderno de SageMaker"}),"\n",(0,t.jsx)(s.Ay,{}),"\n",(0,t.jsx)(a.h3,{id:"informaci\xf3n-general",children:"Informaci\xf3n general"}),"\n",(0,t.jsx)(a.p,{children:"Las extensiones de Teradata Jupyter proporcionan el kernel Teradata SQL y varias extensiones de interfaz de usuario para permitir a los usuarios acceder y navegar f\xe1cilmente por la base de datos de Teradata desde el entorno Jupyter. Este art\xedculo describe c\xf3mo integrar nuestras extensiones de Jupyter con la instancia del cuaderno de SageMaker."}),"\n",(0,t.jsx)(a.h3,{id:"prerrequisitos",children:"Prerrequisitos"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Acceso a una instancia de Teradata Vantage","\n",(0,t.jsx)(r.Ay,{}),"\n"]}),"\n",(0,t.jsx)(a.li,{children:"Cuenta de AWS"}),"\n",(0,t.jsx)(a.li,{children:"Dep\xf3sito de AWS S3 para almacenar scripts de configuraci\xf3n del ciclo de vida y paquete de extensiones de Teradata Jupyter"}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"integraci\xf3n",children:"Integraci\xf3n"}),"\n",(0,t.jsx)(a.p,{children:"SageMaker admite la personalizaci\xf3n de instancias de cuadernos mediante scripts de configuraci\xf3n del ciclo de vida. A continuaci\xf3n, mostraremos c\xf3mo usar scripts de configuraci\xf3n del ciclo de vida para instalar nuestro kernel y extensiones de Jupyter en una instancia de cuaderno."}),"\n",(0,t.jsx)(a.h3,{id:"pasos-para-integrar-con-la-instancia-de-cuaderno",children:"Pasos para integrar con la instancia de cuaderno"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsx)(a.li,{children:"Descargar el paquete de extensiones Jupyter de Teradata"}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["Descargue la versi\xf3n de Linux desde ",(0,t.jsx)(a.a,{href:"https://downloads.teradata.com/download/tools/vantage-modules-for-jupyter",children:"https://downloads.teradata.com/download/tools/vantage-modules-for-jupyter"}),' y c\xe1rguela en un dep\xf3sito de S3. Este paquete comprimido contiene el kernel y las extensiones de Teradata Jupyter. Cada extensi\xf3n tiene 2 archivos, el que tiene "prebuilt" en el nombre es una extensi\xf3n predise\xf1ada que se puede instalar usando PIP, el otro es una extensi\xf3n fuente que debe instalarse usando "jupyter labextension". Se recomienda utilizar extensiones predise\xf1adas.']}),"\n",(0,t.jsxs)(a.ol,{start:"2",children:["\n",(0,t.jsxs)(a.li,{children:["Cree una configuraci\xf3n de ciclo de vida para la instancia de cuaderno.\n",(0,t.jsx)(a.img,{alt:"crear una configuraci\xf3n de ciclo de vida para la instancia de cuaderno",src:n(38002).A+"",width:"2900",height:"788"})]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"A continuaci\xf3n se muestran scripts de ejemplo que obtienen el paquete Teradata del dep\xf3sito S3 e instalan el kernel y las extensiones de Jupyter. Tenga en cuenta que on-create.sh crea un entorno conda personalizado que persiste en el volumen EBS de la instancia de cuaderno para que la instalaci\xf3n no se pierda despu\xe9s de reiniciar el cuaderno. on-start.sh instala el kernel de Teradata y las extensiones en el entorno conda personalizado."}),"\n",(0,t.jsx)(a.p,{children:"on-create.sh"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",metastring:', role="content-editable',children:'#!/bin/bash\n\nset -e\n\n# This script installs a custom, persistent installation of conda on the Notebook Instance\'s EBS volume, and ensures\n# that these custom environments are available as kernels in Jupyter.\n \n\nsudo -u ec2-user -i <<\'EOF\'\nunset SUDO_UID\n# Install a separate conda installation via Miniconda\nWORKING_DIR=/home/ec2-user/SageMaker/custom-miniconda\nmkdir -p "$WORKING_DIR"\nwget https://repo.anaconda.com/miniconda/Miniconda3-4.6.14-Linux-x86_64.sh -O "$WORKING_DIR/miniconda.sh"\nbash "$WORKING_DIR/miniconda.sh" -b -u -p "$WORKING_DIR/miniconda"\nrm -rf "$WORKING_DIR/miniconda.sh"\n# Create a custom conda environment\nsource "$WORKING_DIR/miniconda/bin/activate"\nKERNEL_NAME="teradatasql"\n\nPYTHON="3.8"\nconda create --yes --name "$KERNEL_NAME" python="$PYTHON"\nconda activate "$KERNEL_NAME"\npip install --quiet ipykernel\n\nEOF\n'})}),"\n",(0,t.jsx)(a.p,{children:"on-start.sh"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",metastring:', role="content-editable"',children:'#!/bin/bash\n\nset -e\n\n# This script installs Teradata Jupyter kernel and extensions.\n \n\nsudo -u ec2-user -i <<\'EOF\'\nunset SUDO_UID\n\nWORKING_DIR=/home/ec2-user/SageMaker/custom-miniconda\n\nsource "$WORKING_DIR/miniconda/bin/activate" teradatasql\n\n# fetch Teradata Jupyter extensions package from S3 and unzip it\nmkdir -p "$WORKING_DIR/teradata"\naws s3 cp s3://sagemaker-teradata-bucket/teradatasqllinux_3.3.0-ec06172022.zip "$WORKING_DIR/teradata"\ncd "$WORKING_DIR/teradata"\n\nunzip -o teradatasqllinux_3.3.0-ec06172022.zip\n\n# install Teradata kernel\ncp teradatakernel /home/ec2-user/anaconda3/condabin\njupyter kernelspec install --user ./teradatasql\n\n# install Teradata Jupyter extensions\nsource /home/ec2-user/anaconda3/bin/activate JupyterSystemEnv\n\npip install teradata_connection_manager_prebuilt-3.3.0.tar.gz\npip install teradata_database_explorer_prebuilt-3.3.0.tar.gz\npip install teradata_preferences_prebuilt-3.3.0.tar.gz\npip install teradata_resultset_renderer_prebuilt-3.3.0.tar.gz\npip install teradata_sqlhighlighter_prebuilt-3.3.0.tar.gz\n\nconda deactivate\nEOF\n'})}),"\n",(0,t.jsxs)(a.ol,{start:"3",children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Cree una instancia de cuaderno. Seleccione 'Amazon Linux 2, Jupyter Lab3' para el identificador de plataforma y seleccione la configuraci\xf3n del ciclo de vida creada en el paso 2 para la configuraci\xf3n del ciclo de vida."}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Crear una instancia de notebook",src:n(92458).A+"",width:"1912",height:"1368"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"Es posible que tambi\xe9n necesite agregar vpc, subred y grupo de seguridad en la secci\xf3n 'Red' para obtener acceso a las bases de datos de Teradata."}),"\n",(0,t.jsxs)(a.ol,{start:"4",children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:['Espere hasta que el estado de la instancia de cuaderno cambie a "InService", haga clic en "Abrir JupyterLab" para abrir el cuaderno.\n',(0,t.jsx)(a.img,{alt:"Open notebook",src:n(98065).A+"",width:"2654",height:"660"})]}),"\n",(0,t.jsxs)(a.p,{children:["Acceda a los cuadernos de demostraci\xf3n para obtener consejos de uso\n",(0,t.jsx)(a.img,{alt:"access demo notebooks",src:n(58804).A+"",width:"2852",height:"1082"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"lectura-adicional",children:"Lectura adicional"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://teradata.github.io/jupyterextensions",children:"Sitio web de extensiones de Jupyter de Teradata"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://docs.teradata.com/r/KQLs1kPXZ02rGWaS9Ktoww/root",children:"Gu\xeda de instalaci\xf3n de m\xf3dulos Teradata Vantage\u2122 para Jupyter"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://docs.teradata.com/r/1YKutX2ODdO9ppo_fnguTA/root",children:"Gu\xeda del usuario del paquete Teradata\xae para Python"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html",children:"Personalizar una instancia de cuaderno mediante un script de configuraci\xf3n del ciclo de vida"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://github.com/aws-samples/amazon-sagemaker-notebook-instance-lifecycle-config-samples/blob/master/scripts/persistent-conda-ebs/on-create.sh",children:"Ejemplos de configuraci\xf3n del ciclo de vida de la instancia de cuaderno de Amazon Sagemaker"})}),"\n"]}),"\n","\n",(0,t.jsx)(o.Ay,{})]})}function h(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},38002:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/sagemaker.notebook.create.lifecycle.config-aa5b0851303bb769f768fe899a5fc5e8.png"},92458:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/sagemaker.notebook.create.notebook.instance-890cfccaa74f3589c1b62ef4a0cc6761.png"},98065:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/sagemaker.notebook.notebook.inservice-bed2d0acfce668b3f0f19d7de337ddba.png"},58804:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/sagemaker.notebook.start-343b0d8adca75aa8adcc9256350f4de9.png"},28453:(e,a,n)=>{n.d(a,{R:()=>s,x:()=>o});var t=n(96540);const i={},r=t.createContext(i);function s(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);
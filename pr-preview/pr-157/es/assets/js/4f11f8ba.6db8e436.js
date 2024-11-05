"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[4574],{23245:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>h});var r=n(74848),t=n(28453),s=n(56240),i=n(19365);function o(e){const a={code:"code",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(s.A,{children:[(0,r.jsx)(i.A,{value:"Windows",label:"Windows",default:!0,children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:'docker run -e "accept_license=Y" -p 127.0.0.1:8888:8888 -v ${PWD}:/home/jovyan/JupyterLabRoot teradata/jupyterlab-extensions\n'})})}),(0,r.jsx)(i.A,{value:"MacOS",label:"MacOS",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:'docker run -e "accept_license=Y" -p 127.0.0.1:8888:8888 -v $PWD:/home/jovyan/JupyterLabRoot teradata/jupyterlab-extensions \n'})})}),(0,r.jsx)(i.A,{value:"Linux",label:"Linux",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:'docker run -e "accept_license=Y" -p 127.0.0.1:8888:8888 -v $PWD:/home/jovyan/JupyterLabRoot teradata/jupyterlab-extensions \n'})})})]})}function d(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}const l={sidebar_position:3,author:"Janeth Graziani",email:"Janeth.graziani@teradata.com",page_last_update:"11 de enero de 2024",description:"Aprender a ejecutar demostraciones de VantageCloud Lake mediante Jupyter Notebooks en Visual Studio Code.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","teradatasqlalquimia","vantagecloud","vantagecloud lake","public internet","visual studio code","IDE","data analytics","data science"]},c="Ejecutar demostraciones de Teradata Jupyter Notebook para VantageCloud Lake en Visual Studio Code",u={id:"vantagecloud-lake/vantagecloud-lake-demos-visual-studio-code",title:"Ejecutar demostraciones de Teradata Jupyter Notebook para VantageCloud Lake en Visual Studio Code",description:"Aprender a ejecutar demostraciones de VantageCloud Lake mediante Jupyter Notebooks en Visual Studio Code.",source:"@site/i18n/es/docusaurus-plugin-content-docs-quickstarts/current/vantagecloud-lake/vantagecloud-lake-demos-visual-studio-code.md",sourceDirName:"vantagecloud-lake",slug:"/vantagecloud-lake/vantagecloud-lake-demos-visual-studio-code",permalink:"/pr-preview/pr-157/es/quickstarts/vantagecloud-lake/vantagecloud-lake-demos-visual-studio-code",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,author:"Janeth Graziani",email:"Janeth.graziani@teradata.com",page_last_update:"11 de enero de 2024",description:"Aprender a ejecutar demostraciones de VantageCloud Lake mediante Jupyter Notebooks en Visual Studio Code.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","teradatasqlalquimia","vantagecloud","vantagecloud lake","public internet","visual studio code","IDE","data analytics","data science"]},sidebar:"tutorialSidebar",previous:{title:"Ejecutar demostraciones de Teradata Jupyter Notebook para VantageCloud Lake en Docker",permalink:"/pr-preview/pr-157/es/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-docker"},next:{title:"Ejecutar demostraciones de Teradata Jupyter Notebook para VantageCloud Lake en Amazon SageMaker",permalink:"/pr-preview/pr-157/es/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-sagemaker"}},p={},h=[{value:"Informaci\xf3n general",id:"informaci\xf3n-general",level:2},{value:"Prerrequisitos",id:"prerrequisitos",level:2},{value:"Clonar el repositorio de demostraci\xf3n de VantageCloud Lake",id:"clonar-el-repositorio-de-demostraci\xf3n-de-vantagecloud-lake",level:2},{value:"Inicie un contenedor Docker de Jupyterlab con Teradata Jupyter Extensions",id:"inicie-un-contenedor-docker-de-jupyterlab-con-teradata-jupyter-extensions",level:2},{value:"Configuraci\xf3n de Visual Studio Code",id:"configuraci\xf3n-de-visual-studio-code",level:2},{value:"Editar el archivo vars.json",id:"editar-el-archivo-varsjson",level:3},{value:"Modifique la ruta a vars.json en el directorio UseCases",id:"modifique-la-ruta-a-varsjson-en-el-directorio-usecases",level:3},{value:"Configuraci\xf3n de kernels de Jupyter",id:"configuraci\xf3n-de-kernels-de-jupyter",level:3},{value:"Ejecutar demostraciones",id:"ejecutar-demostraciones",level:3},{value:"Resumen",id:"resumen",level:2}];function m(e){const a={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"ejecutar-demostraciones-de-teradata-jupyter-notebook-para-vantagecloud-lake-en-visual-studio-code",children:"Ejecutar demostraciones de Teradata Jupyter Notebook para VantageCloud Lake en Visual Studio Code"}),"\n",(0,r.jsx)(a.h2,{id:"informaci\xf3n-general",children:"Informaci\xf3n general"}),"\n",(0,r.jsx)(a.p,{children:"Visual Studio Code es un popular editor de c\xf3digo abierto compatible con Windows, MacOs y Linux. Los desarrolladores utilizan este entorno de desarrollo integrado (Integrated Development Environment, IDE) para codificar, depurar, crear e implementar aplicaciones. En esta gu\xeda de inicio r\xe1pido, lanzamos demostraciones de Jupyter notebooks de VantageCloud Lake dentro de Visual Studio Code."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"vscode.png",src:n(99724).A+"",width:"3444",height:"2136"})}),"\n",(0,r.jsx)(a.h2,{id:"prerrequisitos",children:"Prerrequisitos"}),"\n",(0,r.jsx)(a.p,{children:"Antes de comenzar, aseg\xfarese de cumplir con los siguientes requisitos previos:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.a,{href:"https://www.docker.com/products/docker-desktop",children:"Docker Desktop"})," Instalado"]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.a,{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git",children:"Git"})," Instalado","\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["Requerido para descargar el repositorio de git desde ",(0,r.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos.git",children:"https://github.com/Teradata/lake-demos.git"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.a,{href:"https://code.visualstudio.com/download",children:"Visual Studio Code"})," Instalado"]}),"\n",(0,r.jsxs)(a.li,{children:["Una cuenta de Teradata VantageCloud Lake con la URL de la organizaci\xf3n y los detalles de inicio de sesi\xf3n de la carta de bienvenida de Teradata.","\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["Una vez que haya iniciado sesi\xf3n, siga estas ",(0,r.jsx)(a.a,{href:"/pr-preview/pr-157/es/quickstarts/vantagecloud-lake/getting-started-with-vantagecloud-lake#create-an-environment",children:"instrucciones"})," para crear un entorno VantageCloud Lake"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"clonar-el-repositorio-de-demostraci\xf3n-de-vantagecloud-lake",children:"Clonar el repositorio de demostraci\xf3n de VantageCloud Lake"}),"\n",(0,r.jsx)(a.p,{children:"Comience clonando el repositorio de GitHub y navegando al directorio del proyecto:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"git clone https://github.com/Teradata/lake-demos.git\ncd lake-demos\n"})}),"\n",(0,r.jsx)(a.h2,{id:"inicie-un-contenedor-docker-de-jupyterlab-con-teradata-jupyter-extensions",children:"Inicie un contenedor Docker de Jupyterlab con Teradata Jupyter Extensions"}),"\n",(0,r.jsxs)(a.p,{children:["Para lanzar demos de Teradata VantageCloud Lake, necesitamos la ",(0,r.jsx)(a.a,{href:"https://hub.docker.com/r/teradata/jupyterlab-extensions",children:"Extensiones de Teradata Jupyter para Docker"}),". Estas extensiones proporcionan el kernel de SQL ipython, utilidades para administrar conexiones a Teradata y el explorador de objetos de base de datos para que sea productivo mientras interact\xfaa con la base de datos de Teradata."]}),"\n",(0,r.jsx)(a.p,{children:"A continuaci\xf3n, inicie un contenedor y vinc\xfalelo al directorio lake-demos existente. Elija el comando adecuado en funci\xf3n de su sistema operativo:"}),"\n",(0,r.jsx)(a.admonition,{type:"note",children:(0,r.jsx)(a.p,{children:"Para Windows, ejecute el comando docker en PowerShell."})}),"\n",(0,r.jsx)(d,{}),"\n",(0,r.jsxs)(a.p,{children:["Tome nota de la URL y el token resultantes; los necesitar\xe1 para establecer la conexi\xf3n desde Visual Studio Code.\n",(0,r.jsx)(a.img,{alt:"terminal.png",src:n(17954).A+"",width:"1620",height:"258"})]}),"\n",(0,r.jsx)(a.h2,{id:"configuraci\xf3n-de-visual-studio-code",children:"Configuraci\xf3n de Visual Studio Code"}),"\n",(0,r.jsxs)(a.p,{children:["Abra el directorio del proyecto ",(0,r.jsx)(a.code,{children:"lake-demos"})," en Visual Studio Code. El repositorio contiene el siguiente \xe1rbol de proyectos:"]}),"\n",(0,r.jsx)(a.p,{children:"LAKE_DEMOS"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos/tree/main/UseCases",children:"UseCases"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos/blob/main/0_Demo_Environment_Setup.ipynb",children:"0_Demo_Environment_Setup.ipynb"})}),"\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos/blob/main/1_Load_Base_Demo_Data.ipynb",children:"1_Load_Base_Demo_Data.ipynb"})}),"\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos/blob/main/Data_Engineering_Exploration.ipynb",children:"Data_Engineering_Exploration.ipynb"})}),"\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos/blob/main/Data_Science_OAF.ipynb",children:"Data_Science_OAF.ipynb"})}),"\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos/blob/main/Demo_Admin.ipynb",children:"Demo_Admin.ipynb"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos/blob/main/vars.json",children:"archivo vars.json"})}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"editar-el-archivo-varsjson",children:"Editar el archivo vars.json"}),"\n",(0,r.jsxs)(a.p,{children:["Edite el archivo ",(0,r.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos/blob/main/vars.json",children:(0,r.jsx)(a.strong,{children:"vars.json"})})," para incluir las credenciales necesarias para ejecutar las demostraciones"]}),"\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:(0,r.jsx)(a.strong,{children:"Variable"})}),(0,r.jsx)(a.th,{children:(0,r.jsx)(a.strong,{children:"Valor"})})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.strong,{children:'"host"'})}),(0,r.jsx)(a.td,{children:"Valor de IP p\xfablica de su entorno VantageCloud Lake"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.strong,{children:'"UES_URI"'})}),(0,r.jsx)(a.td,{children:"An\xe1lisis abierto desde su entorno VantageCloud Lake"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:(0,r.jsx)(a.strong,{children:'"dbc"'})}),(0,r.jsx)(a.td,{children:"La contrase\xf1a maestra de su entorno VantageCloud Lake."})]})]})]}),"\n",(0,r.jsxs)(a.p,{children:["Para recuperar una direcci\xf3n IP p\xfablica y un punto de conexi\xf3n de Open Analytics, siga estos ",(0,r.jsx)(a.a,{href:"/pr-preview/pr-157/es/quickstarts/vantagecloud-lake/getting-started-with-vantagecloud-lake#create-an-environment",children:"instrucciones"})]}),"\n",(0,r.jsx)(a.admonition,{type:"important",children:(0,r.jsx)(a.p,{children:'Cambie las contrase\xf1as en el archivo vars.json. Ver\xe1 que en el archivo vars.json de muestra, las contrase\xf1as de todos los usuarios est\xe1n predeterminadas en "password", esto es solo para cuestiones del archivo de muestra, debe cambiar todas estas contrase\xf1as. campos a contrase\xf1as seguras, prot\xe9jalas seg\xfan sea necesario y siga otras mejores pr\xe1cticas de administraci\xf3n de contrase\xf1as'})}),"\n",(0,r.jsx)(a.h3,{id:"modifique-la-ruta-a-varsjson-en-el-directorio-usecases",children:"Modifique la ruta a vars.json en el directorio UseCases"}),"\n",(0,r.jsx)(a.p,{children:"En el directorio UseCases, todos los archivos .ipynb usan la ruta ../../vars.json para cargar las variables del archivo JSON cuando se trabaja desde Jupyterlab. Para trabajar directamente desde Visual Studio Code, actualice el c\xf3digo en cada .ipynb para que apunte a vars.json."}),"\n",(0,r.jsx)(a.p,{children:"La forma m\xe1s r\xe1pida de realizar estos cambios es mediante la funci\xf3n de b\xfasqueda en el men\xfa vertical  de la izquierda. Busque"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"'../../vars.json'\n"})}),"\n",(0,r.jsx)(a.p,{children:"y reempl\xe1celo con:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"'vars.json'\n"})}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"buscar",src:n(63806).A+"",width:"1158",height:"402"})}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"reemplazar",src:n(5048).A+"",width:"560",height:"434"})}),"\n",(0,r.jsx)(a.h3,{id:"configuraci\xf3n-de-kernels-de-jupyter",children:"Configuraci\xf3n de kernels de Jupyter"}),"\n",(0,r.jsxs)(a.p,{children:["Abra ",(0,r.jsx)(a.strong,{children:"0_Demo_Environment_Setup.ipynb"})," y haga clic en Seleccionar kernel en la esquina superior derecha de Visual Studio Code."]}),"\n",(0,r.jsx)(a.p,{children:"Si no ha instalado las extensiones de Jupyter y Python, Visual Studio Code le pedir\xe1 que las instale. Estas extensiones son necesarias para que Visual Studio Code detecte kernels. Para instalarlas, seleccione 'Instalar/Habilitar extensiones sugeridas para Python y Jupyter'."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"select.kernel.png",src:n(77573).A+"",width:"3140",height:"516"})}),"\n",(0,r.jsxs)(a.p,{children:["Una vez que haya instalado las extensiones necesarias, encontrar\xe1 opciones en el men\xfa desplegable. Elija ",(0,r.jsx)(a.strong,{children:"Kernel de Jupyter existente"}),"."]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"existing.kernel.png",src:n(69072).A+"",width:"885",height:"204"})}),"\n",(0,r.jsx)(a.p,{children:"Introduzca la URL del servidor Jupyter en ejecuci\xf3n y presione Entrar."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"http://localhost:8888\n"})}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"server.url.png",src:n(38182).A+"",width:"864",height:"133"})}),"\n",(0,r.jsx)(a.p,{children:"Introduzca el token que se encuentra en su terminal al montar archivos en el contenedor Docker y presione Entrar."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"server.password.png",src:n(51386).A+"",width:"858",height:"139"})}),"\n",(0,r.jsx)(a.p,{children:"Cambiar el nombre para mostrar del servidor (dejar en blanco para usar la URL)"}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"server.display.name.png",src:n(93964).A+"",width:"860",height:"130"})}),"\n",(0,r.jsx)(a.p,{children:"Ahora tiene acceso a todos los kernels de extensi\xf3n de Teradata Vantage. Seleccione Python 3 (ipykernel) desde el servidor Jupyter en ejecuci\xf3n."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"python.kernel.png",src:n(34387).A+"",width:"868",height:"234"})}),"\n",(0,r.jsx)(a.h3,{id:"ejecutar-demostraciones",children:"Ejecutar demostraciones"}),"\n",(0,r.jsxs)(a.p,{children:["Ejecute todas las celdas de ",(0,r.jsx)(a.em,{children:"0_Demo_Environment_Setup.ipynb"})," para configurar su entorno. Seguido de ",(0,r.jsx)(a.em,{children:"1_Demo_Setup_Base_Data.ipynb"})," para cargar los datos base necesarios para la demostraci\xf3n.\nPara obtener m\xe1s informaci\xf3n sobre los cuadernos de demostraci\xf3n, vaya a la p\xe1gina ",(0,r.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos",children:"Demostraciones de Teradata Lake"})," en GitHub."]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"demoenvsetup.png",src:n(78759).A+"",width:"1822",height:"991"})}),"\n",(0,r.jsx)(a.h2,{id:"resumen",children:"Resumen"}),"\n",(0,r.jsx)(a.p,{children:"En esta gu\xeda de inicio r\xe1pido, configuramos Visual Studio Code para acceder a demostraciones de VantageCloud Lake mediante Jupyter notebooks."})]})}function g(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},19365:(e,a,n)=>{n.d(a,{A:()=>i});n(96540);var r=n(34164);const t={tabItem:"tabItem_Ymn6"};var s=n(74848);function i(e){var a=e.children,n=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(t.tabItem,i),hidden:n,children:a})}},56240:(e,a,n)=>{n.d(a,{A:()=>k});var r=n(96540),t=n(34164),s=n(23104),i=n(56347),o=n(205),d=n(57485);var l=n(89466);function c(e){var a,n;return null!=(a=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((a=e.props)&&"object"==typeof a&&"value"in a))return e;var a;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?a:[]}function u(e){var a=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=a?a:function(e){return c(e).map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes,default:a.default}}))}(n);return function(e){var a,n,r=(void 0===(n=function(e,a){return e.value===a.value})&&(n=function(e,a){return e===a}),(a=e).filter((function(e,r){return a.findIndex((function(a){return n(a,e)}))!==r})));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[a,n])}function p(e){var a=e.value;return e.tabValues.some((function(e){return e.value===a}))}function h(e){var a=e.queryString,n=void 0!==a&&a,t=e.groupId,s=(0,i.W6)(),o=function(e){var a=e.queryString,n=void 0!==a&&a,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:t});return[(0,d.aZ)(o),(0,r.useCallback)((function(e){if(o){var a=new URLSearchParams(s.location.search);a.set(o,e),s.replace(Object.assign({},s.location,{search:a.toString()}))}}),[o,s])]}function m(e){var a,n,t,s,i=e.defaultValue,d=e.queryString,c=void 0!==d&&d,m=e.groupId,g=u(e),j=(0,r.useState)((function(){return function(e){var a,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var t=null!=(a=r.find((function(e){return e.default})))?a:r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:i,tabValues:g})})),b=j[0],v=j[1],x=h({queryString:c,groupId:m}),f=x[0],k=x[1],y=(a=function(e){return e?"docusaurus.tab."+e:null}({groupId:m}.groupId),n=(0,l.Dv)(a),t=n[0],s=n[1],[t,(0,r.useCallback)((function(e){a&&s.set(e)}),[a,s])]),C=y[0],V=y[1],w=function(){var e=null!=f?f:C;return p({value:e,tabValues:g})?e:null}();return(0,o.A)((function(){w&&v(w)}),[w]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);v(e),k(e),V(e)}),[k,V,g]),tabValues:g}}var g=n(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function v(e){var a=e.className,n=e.block,r=e.selectedValue,i=e.selectValue,o=e.tabValues,d=[],l=(0,s.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var a=e.currentTarget,n=d.indexOf(a),t=o[n].value;t!==r&&(l(a),i(t))},u=function(e){var a,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,t=d.indexOf(e.currentTarget)+1;n=null!=(r=d[t])?r:d[0];break;case"ArrowLeft":var s,i=d.indexOf(e.currentTarget)-1;n=null!=(s=d[i])?s:d[d.length-1]}null==(a=n)||a.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":n},a),children:o.map((function(e){var a=e.value,n=e.label,s=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:r===a?0:-1,"aria-selected":r===a,ref:function(e){return d.push(e)},onKeyDown:u,onClick:c},s,{className:(0,t.A)("tabs__item",j.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===a}),children:null!=n?n:a}),a)}))})}function x(e){var a=e.lazy,n=e.children,t=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){var i=s.find((function(e){return e.props.value===t}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==t})}))})}function f(e){var a=m(e);return(0,b.jsxs)("div",{className:(0,t.A)("tabs-container",j.tabList),children:[(0,b.jsx)(v,Object.assign({},e,a)),(0,b.jsx)(x,Object.assign({},e,a))]})}function k(e){var a=(0,g.A)();return(0,b.jsx)(f,Object.assign({},e,{children:c(e.children)}),String(a))}},78759:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/demoenvsetup-27ed84b9008334333a03eb6476262428.png"},69072:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/existing.kernel-b893c017d4e8ed9e4beb3e85b4a3454e.png"},34387:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/python.kernel-4d46ac77b426cfb1346233a028c73958.png"},5048:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/replace-bcf54ece5b7c9aa548b7243e00fd2c67.png"},63806:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/search-72b082202967672eff33b6c090e9dbba.png"},77573:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/select.kernel-703a383b5df2d41d96bf3c474453b2f8.png"},93964:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/server.display.name-f5ef83c15528f67dc8324485c1645a31.png"},51386:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/server.password-6ecbb5c9c4e91a334a4080099ef11d3f.png"},38182:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/server.url-ab39bd15cfe7f894a5eb3324d85d59ec.png"},17954:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/terminal-440ff9569fa09e4f3c3e3db5374cae99.png"},99724:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/vscode-3504eabc3e8242497f26e161243ffd18.png"},28453:(e,a,n)=>{n.d(a,{R:()=>i,x:()=>o});var r=n(96540);const t={},s=r.createContext(t);function i(e){const a=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:a},e.children)}}}]);
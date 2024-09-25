"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[1960],{77692:(e,a,n)=>{n.d(a,{Ay:()=>t,RM:()=>o});var s=n(74848),r=n(28453);const o=[];function i(e){const a={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(a.admonition,{type:"note",children:[(0,s.jsx)(a.mdxAdmonitionTitle,{}),(0,s.jsxs)(a.p,{children:["Si tiene alguna pregunta o necesita m\xe1s ayuda, visite nuestro ",(0,s.jsx)(a.a,{href:"https://support.teradata.com/community",children:"foro de la comunidad"})," donde podr\xe1 obtener ayuda e interactuar con otros miembros de la comunidad."]})]})}function t(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},23961:(e,a,n)=>{n.d(a,{Ay:()=>t,RM:()=>o});var s=n(74848),r=n(28453);const o=[];function i(e){const a={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(a.admonition,{type:"note",children:[(0,s.jsx)(a.mdxAdmonitionTitle,{}),(0,s.jsxs)(a.p,{children:["Si necesita una instancia de prueba de Vantage, puede obtener una de forma gratuita en ",(0,s.jsx)(a.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})]})}function t(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},56124:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>t,metadata:()=>c,toc:()=>p});var s=n(74848),r=n(28453),o=n(23961),i=n(77692);const t={sidebar_position:12,author:"Kevin Bogusch, Paul Ibberson",email:"paul.ibberson2@teradata.com",page_last_update:"14 de enero de 2022",description:"Conectar Teradata Vantage a Power BI Desktop.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","microsoft power bi","power bi"]},d="Crear visualizaciones en Power BI mediante Vantage",c={id:"analyze-data/create-stunning-visualizations-in-power-bi-using-data-from-teradata-vantage",title:"Crear visualizaciones en Power BI mediante Vantage",description:"Conectar Teradata Vantage a Power BI Desktop.",source:"@site/i18n/es/docusaurus-plugin-content-docs-quickstarts/current/analyze-data/create-stunning-visualizations-in-power-bi-using-data-from-teradata-vantage.md",sourceDirName:"analyze-data",slug:"/analyze-data/create-stunning-visualizations-in-power-bi-using-data-from-teradata-vantage",permalink:"/pr-preview/pr-140/es/quickstarts/analyze-data/create-stunning-visualizations-in-power-bi-using-data-from-teradata-vantage",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,author:"Kevin Bogusch, Paul Ibberson",email:"paul.ibberson2@teradata.com",page_last_update:"14 de enero de 2022",description:"Conectar Teradata Vantage a Power BI Desktop.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","microsoft power bi","power bi"]},sidebar:"tutorialSidebar",previous:{title:"Integrar las extensiones de Teradata Jupyter con una instancia de cuaderno de SageMaker",permalink:"/pr-preview/pr-140/es/quickstarts/analyze-data/integrate-teradata-jupyter-extensions-with-sagemaker"},next:{title:"Integrar Teradata Vantage con KNIME Analytics Platform",permalink:"/pr-preview/pr-140/es/quickstarts/analyze-data/integrate-teradata-vantage-with-knime"}},l={},p=[{value:"Informaci\xf3n general",id:"informaci\xf3n-general",level:2},{value:"Prerrequisitos",id:"prerrequisitos",level:2},...o.RM,{value:"Primeros pasos",id:"primeros-pasos",level:2},{value:"Instalar Power BI Desktop",id:"instalar-power-bi-desktop",level:3},{value:"Instale el proveedor de datos .NET para Teradata",id:"instale-el-proveedor-de-datos-net-para-teradata",level:3},{value:"Conectarse a Teradata Vantage",id:"conectarse-a-teradata-vantage",level:3},{value:"Siguientes pasos",id:"siguientes-pasos",level:2},...i.RM];function u(e){const a={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"crear-visualizaciones-en-power-bi-mediante-vantage",children:"Crear visualizaciones en Power BI mediante Vantage"}),"\n",(0,s.jsx)(a.h2,{id:"informaci\xf3n-general",children:"Informaci\xf3n general"}),"\n",(0,s.jsx)(a.admonition,{type:"note",children:(0,s.jsx)(a.p,{children:"Esta gu\xeda incluye contenido de la documentaci\xf3n de productos de Microsoft y Teradata."})}),"\n",(0,s.jsx)(a.p,{children:"Este art\xedculo describe el proceso de conexi\xf3n de Power BI Desktop a Teradata Vantage para crear fant\xe1sticos informes y visualizaciones de los datos.  Power BI admite Teradata Vantage como fuente de datos y puede usar los datos subyacentes como cualquier otra fuente de datos en Power BI Desktop."}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"https://docs.microsoft.com/en-us/power-bi/power-bi-overview",children:"Power BI"})," es una colecci\xf3n de servicios de software, aplicaciones y conectores que trabajan juntos para convertir sus fuentes de datos no relacionadas en informaci\xf3n coherente, visualmente inmersiva e interactiva."]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.strong,{children:"Power BI consta de:"})}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["Una aplicaci\xf3n de escritorio de Windows, llamada ",(0,s.jsx)(a.a,{href:"https://docs.microsoft.com/en-us/power-bi/fundamentals/desktop-what-is-desktop",children:"Power BI Desktop"})]}),"\n",(0,s.jsxs)(a.li,{children:["Un servicio SaaS (Software como Servicio) en l\xednea, llamado ",(0,s.jsx)(a.a,{href:"https://docs.microsoft.com/en-us/power-bi/fundamentals/power-bi-service-overview",children:"Servicio de Power BI"})]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"https://docs.microsoft.com/en-us/power-bi/consumer/mobile/mobile-apps-for-mobile-devices",children:"Power BI m\xf3vil"})," Aplicaciones para dispositivos Windows, iOS y Android"]}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Elementos de Power BI",src:n(64490).A+"",width:"1003",height:"463"})}),"\n",(0,s.jsx)(a.p,{children:"Estos tres elementos (Power BI Desktop, el servicio Power BI y las aplicaciones m\xf3viles) est\xe1n dise\xf1ados para permitir a las personas crear, compartir y consumir informaci\xf3n empresarial de la forma que les resulte m\xe1s eficaz a ellos o a su rol."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Bloques de descripci\xf3n general de Power BI",src:n(13938).A+"",width:"1200",height:"600"})}),"\n",(0,s.jsxs)(a.p,{children:["Un cuarto elemento, ",(0,s.jsx)(a.a,{href:"https://docs.microsoft.com/en-us/power-bi/report-server/get-started",children:"Servidor de informes de Power BI"}),", le permite publicar informes de Power BI en un servidor de informes local, despu\xe9s de crearlos en Power BI Desktop."]}),"\n",(0,s.jsxs)(a.p,{children:['Power BI Desktop admite Vantage como fuente de datos de terceros, no como fuente de datos "nativa".  En su lugar, los informes publicados en el servicio Power BI deber\xe1n utilizar el componente ',(0,s.jsx)(a.a,{href:"https://docs.microsoft.com/en-us/power-bi/connect-data/service-gateway-onprem",children:"de puerta de enlace de datos local"})," para acceder a Vantage."]}),"\n",(0,s.jsxs)(a.p,{children:["Esta gu\xeda de introducci\xf3n le mostrar\xe1 c\xf3mo conectarse a Teradata Vantage. El conector Teradata de Power BI Desktop usa el ",(0,s.jsx)(a.a,{href:"https://downloads.teradata.com/download/connectivity/net-data-provider-for-teradata",children:"Proveedor de datos .NET para Teradata"}),". Debe instalar el controlador en ordenadores que usen Power BI Desktop. La instalaci\xf3n \xfanica del Proveedor de datos .NET para Teradata admite la aplicaci\xf3n Power BI Desktop de 32 o 64 bits."]}),"\n",(0,s.jsx)(a.h2,{id:"prerrequisitos",children:"Prerrequisitos"}),"\n",(0,s.jsx)(a.p,{children:"Se espera que est\xe9 familiarizado con los servicios de Azure, Teradata Vantage y Power BI Desktop."}),"\n",(0,s.jsx)(a.p,{children:"Necesitar\xe1 las siguientes cuentas y sistema."}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:["Power BI Desktop es una aplicaci\xf3n gratuita para Windows. (Power BI Desktop no est\xe1 disponible para Mac. Puede ejecutarse en una m\xe1quina virtual, como ",(0,s.jsx)(a.a,{href:"https://www.parallels.com",children:"Parallels"})," o ",(0,s.jsx)(a.a,{href:"https://www.vmware.com/products/fusion.html",children:"VMware Fusion"})," o ",(0,s.jsx)(a.a,{href:"https://support.apple.com/en-vn/boot-camp",children:"Boot Camp"})," de Apple, pero esto queda fuera del alcance de este art\xedculo)."]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"Una instancia de Teradata Vantage con un usuario y contrase\xf1a. El usuario debe tener permiso para los datos que Power BI Desktop puede usar. Se debe poder acceder a Vantage desde Power BI Desktop."}),"\n",(0,s.jsx)(o.Ay,{}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:["El ",(0,s.jsx)(a.a,{href:"https://downloads.teradata.com/download/connectivity/net-data-provider-for-teradata",children:"Proveedor de datos .NET para Teradata"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"primeros-pasos",children:"Primeros pasos"}),"\n",(0,s.jsx)(a.h3,{id:"instalar-power-bi-desktop",children:"Instalar Power BI Desktop"}),"\n",(0,s.jsxs)(a.p,{children:["Puede instalar Power BI Desktop desde ",(0,s.jsx)(a.a,{href:"https://aka.ms/pbidesktopstore",children:"Microsoft Store"})," o puede ",(0,s.jsx)(a.a,{href:"https://aka.ms/pbiSingleInstaller",children:"descargar el instalador"})," y ejecutarlo directamente."]}),"\n",(0,s.jsx)(a.h3,{id:"instale-el-proveedor-de-datos-net-para-teradata",children:"Instale el proveedor de datos .NET para Teradata"}),"\n",(0,s.jsxs)(a.p,{children:["Descargue e instale la \xfaltima versi\xf3n del ",(0,s.jsx)(a.a,{href:"https://downloads.teradata.com/download/connectivity/net-data-provider-for-teradata",children:"Proveedor de datos .NET para Teradata"}),"."]}),"\n",(0,s.jsx)(a.p,{children:'Tenga en cuenta que hay varios archivos disponibles para descargar. El archivo que busca comienza con "tdnetdp".'}),"\n",(0,s.jsx)(a.h3,{id:"conectarse-a-teradata-vantage",children:"Conectarse a Teradata Vantage"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:["Ejecute Power BI Desktop, que tiene un icono amarillo.\n",(0,s.jsx)(a.img,{alt:"Icono de Power BI",src:n(5766).A+"",width:"1200",height:"630"})]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:["Si se muestra la pantalla de inicio (presentaci\xf3n), haga clic en Obtener datos.\n",(0,s.jsx)(a.img,{alt:"Pantalla de presentaci\xf3n de Power BI",src:n(82016).A+"",width:"295",height:"319"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["De lo contrario, si se encuentra en el formulario principal de Power BI, aseg\xfarese de estar en la cinta ",(0,s.jsx)(a.em,{children:"Inicio"})," y haga clic en ",(0,s.jsx)(a.em,{children:"Obtener datos"}),". Haga clic en ",(0,s.jsx)(a.em,{children:"M\xe1s\u2026"}),".\n",(0,s.jsx)(a.img,{alt:"Men\xfa Obtener datos de Power BI",src:n(14228).A+"",width:"230",height:"533"})]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["Haga clic en ",(0,s.jsx)(a.em,{children:"Base de datos"})," a la izquierda."]}),"\n",(0,s.jsxs)(a.li,{children:["Despl\xe1cese por la lista de la derecha hasta que vea ",(0,s.jsx)(a.em,{children:"Base de datos Teradata"}),". Haga clic en _Base de datos Teradata_y, a continuaci\xf3n, haga clic en el bot\xf3n ",(0,s.jsx)(a.em,{children:"Conectar"}),"."]}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"(\u201cTeradata Database\u201d y \u201cTeradata Vantage\u201d son sin\xf3nimos en este art\xedculo)."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Selector de bases de datos de Power BI",src:n(24848).A+"",width:"602",height:"662"})}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["En la ventana que aparece, introduzca el nombre o la direcci\xf3n IP de su sistema Vantage en el cuadro de texto. Puede elegir ",(0,s.jsx)(a.em,{children:"Importar"})," datos directamente en el modelo de datos de Power BI o conectarse directamente a la fuente de datos mediante ",(0,s.jsx)(a.a,{href:"https://docs.microsoft.com/en-us/power-bi/desktop-use-directquery",children:"DirectQuery"})," y hacer clic en ",(0,s.jsx)(a.em,{children:"OK"}),"."]}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Conexi\xf3n al servidor Power BI",src:n(44092).A+"",width:"700",height:"296"})}),"\n",(0,s.jsxs)(a.p,{children:["(Haga clic en Opciones ",(0,s.jsx)(a.em,{children:"Avanzada"})," para enviar una declaraci\xf3n SQL hecha a mano)."]}),"\n",(0,s.jsxs)(a.p,{children:["Para las credenciales, tiene la opci\xf3n de conectarse con su inicio de sesi\xf3n de ",(0,s.jsx)(a.em,{children:"Windows"})," o nombre de usuario de ",(0,s.jsx)(a.em,{children:"Base de datos"})," definido en Vantage, que es m\xe1s com\xfan. Seleccione el m\xe9todo de autenticaci\xf3n apropiado e introduzca su nombre de usuario y contrase\xf1a. Haga clic en ",(0,s.jsx)(a.em,{children:"Conectar"}),"."]}),"\n",(0,s.jsx)(a.p,{children:"Tambi\xe9n tiene la opci\xf3n de autenticarse con un servidor LDAP. Esta opci\xf3n est\xe1 oculta de forma predeterminada."}),"\n",(0,s.jsxs)(a.p,{children:["Si configura la variable de entorno, ",(0,s.jsx)(a.em,{children:"PBI_EnableTeradataLdap"}),", en ",(0,s.jsx)(a.em,{children:"true"}),", el m\xe9todo de autenticaci\xf3n LDAP estar\xe1 disponible."]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Conexi\xf3n a LDAP de Power BI",src:n(76746).A+"",width:"695",height:"319"})}),"\n",(0,s.jsx)(a.p,{children:"Tenga en cuenta que LDAP no es compatible con la puerta de enlace de datos local, que se utiliza para los informes que se publican en el servicio Power BI. Si necesita autenticaci\xf3n LDAP y utiliza la puerta de enlace de datos local, deber\xe1 enviar un incidente a Microsoft y solicitar soporte."}),"\n",(0,s.jsxs)(a.p,{children:["Alternativamente, puede ",(0,s.jsx)(a.a,{href:"https://docs.microsoft.com/en-us/power-bi/connect-data/service-gateway-sso-kerberos",children:"configurar SSO basado en Kerberos desde el servicio Power BI en fuentes de datos locales"})," como Teradata."]}),"\n",(0,s.jsxs)(a.p,{children:["Una vez que se haya conectado al sistema Vantage, Power BI Desktop recuerda las credenciales para futuras conexiones al sistema. Puede modificar estas credenciales yendo a ",(0,s.jsx)(a.em,{children:"Archivo > Opciones y configuraci\xf3n > Configuraci\xf3n de la fuente de datos"}),"."]}),"\n",(0,s.jsx)(a.p,{children:"La ventana del Navegador aparece despu\xe9s de una conexi\xf3n exitosa. Muestra los datos disponibles en el sistema Vantage. Puede seleccionar uno o m\xe1s elementos para usar en Power BI Desktop."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Navegador de Power BI",src:n(74418).A+"",width:"875",height:"702"})}),"\n",(0,s.jsx)(a.p,{children:"Puede obtener una vista previa de una tabla haciendo clic en su nombre. Si desea cargarla en Power BI Desktop, aseg\xfarese de hacer clic en la casilla de verificaci\xf3n junto al nombre de la tabla."}),"\n",(0,s.jsxs)(a.p,{children:["Puede ",(0,s.jsx)(a.em,{children:"Cargar"})," la tabla seleccionada, lo cual la llevar\xe1 a Power BI Desktop. Tambi\xe9n puede ",(0,s.jsx)(a.em,{children:"Editar"})," la consulta, lo cual abrir\xe1 un editor de consultas para que pueda filtrar y ajustar el conjunto de datos que quiere cargar."]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.em,{children:"Editar"})," puede llamarse ",(0,s.jsx)(a.em,{children:"Transformar datos"}),", seg\xfan la versi\xf3n de Power BI Desktop que tenga."]}),"\n",(0,s.jsxs)(a.p,{children:["Para obtener informaci\xf3n sobre c\xf3mo unir tablas, consulte la funci\xf3n ",(0,s.jsx)(a.a,{href:"https://docs.microsoft.com/en-us/power-bi/desktop-create-and-manage-relationships",children:"Crear y administrar relaciones en Power BI Desktop"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:["Para publicar su informe, haga clic en ",(0,s.jsx)(a.em,{children:"Publicar"})," en la cinta ",(0,s.jsx)(a.em,{children:"Inicio"})," de Power BI Desktop."]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Publicaci\xf3n de Power BI",src:n(99584).A+"",width:"1199",height:"795"})}),"\n",(0,s.jsxs)(a.p,{children:["Power BI Desktop le pedir\xe1 que guarde su informe. Elija ",(0,s.jsx)(a.em,{children:"Mi espacio de trabajo"})," y haga clic en ",(0,s.jsx)(a.em,{children:"Seleccionar"}),"."]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Publicaci\xf3n de Power BI en mi espacio de trabajo",src:n(2906).A+"",width:"594",height:"375"})}),"\n",(0,s.jsxs)(a.p,{children:["Una vez publicado el informe, haga clic en ",(0,s.jsx)(a.em,{children:"Entendido"})," para cerrar. Tambi\xe9n puede hacer clic en el enlace que tiene el nombre del informe en el enlace."]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Power BI publicado correctamente",src:n(67964).A+"",width:"498",height:"264"})}),"\n",(0,s.jsx)(a.p,{children:"Este es un ejemplo de un informe creado en Power BI Desktop."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Informe de Power BI",src:n(64275).A+"",width:"872",height:"678"})}),"\n",(0,s.jsx)(a.h2,{id:"siguientes-pasos",children:"Siguientes pasos"}),"\n",(0,s.jsx)(a.p,{children:"Puede combinar datos de muchos or\xedgenes con Power BI Desktop. Consulte los siguientes enlaces para obtener m\xe1s informaci\xf3n."}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://docs.microsoft.com/en-us/power-bi/desktop-what-is-desktop",children:"\xbfQu\xe9 es Power BI Desktop?"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://docs.microsoft.com/en-us/power-bi/desktop-data-sources",children:"Or\xedgenes de datos en Power BI Desktop"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://docs.microsoft.com/en-us/power-bi/desktop-shape-and-combine-data",children:"Dar forma y combinar datos con Power BI Desktop"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://docs.microsoft.com/en-us/power-bi/desktop-connect-excel",children:"Conectarse a libros de Excel en Power BI Desktop"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://docs.microsoft.com/en-us/power-bi/desktop-enter-data-directly-into-desktop",children:"Introducir datos directamente en Power BI Desktop"})}),"\n"]}),"\n","\n",(0,s.jsx)(i.Ay,{})]})}function m(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},24848:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/power.bi.database.picker-0c3a95af4e96e3890fa7e9bb1047c1e4.png"},64490:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/power.bi.elements-7c509f34867df505078ab42cfced3858.png"},14228:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/power.bi.get.data.menu-7cc2881829dadf3ef241f65a67176d41.png"},5766:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/power.bi.icon-686f17e289d89db488c4977af37b14fc.png"},76746:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/power.bi.ldap-1656d9dbc70f0a17f76783072c78fb38.png"},74418:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/power.bi.navigator-9067279e438118d84c41fb1cfeb60874.png"},13938:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/power.bi.overview.blocks-42e18a00f92a3359c85da669900bf041.png"},99584:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/power.bi.publish-1edcde2a9b2867f80ab3e52e211c16ad.png"},64275:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/power.bi.report-5245356ef69bb1fc3ebf0db94a4dadcf.png"},44092:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/power.bi.server.connect-2e90065abf0e88841fb3b88f895ab10e.png"},82016:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/power.bi.splash.screen-be6bb79ab97fe49511730d2e603f7367.png"},67964:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/power.bi.success-f6f48b4ec58cfecf0668ca70634e292a.png"},2906:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/power.bi.workspace-3f59c51f2ad2db7ca66559447bcd0062.png"},28453:(e,a,n)=>{n.d(a,{R:()=>i,x:()=>t});var s=n(96540);const r={},o=s.createContext(r);function i(e){const a=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:a},e.children)}}}]);
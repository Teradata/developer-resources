"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[7682],{38107:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>d,default:()=>A,frontMatter:()=>i,metadata:()=>t,toc:()=>c});var s=n(74848),r=n(28453);const i={sidebar_position:1,author:"Vidhan Bhonsle",email:"vidhan.bhonsle@teradata.com",page_last_update:"2 de enero de 2024",description:"Cree su propio entorno en VantageCloud Lake",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","teradatasqlalquimia","vantagecloud","vantagecloud lake","ip address","public internet","lake"]},d="Primeros pasos con VantageCloud Lake",t={id:"vantagecloud-lake/getting-started-with-vantagecloud-lake",title:"Primeros pasos con VantageCloud Lake",description:"Cree su propio entorno en VantageCloud Lake",source:"@site/i18n/es/docusaurus-plugin-content-docs-quickstarts/current/vantagecloud-lake/getting-started-with-vantagecloud-lake.md",sourceDirName:"vantagecloud-lake",slug:"/vantagecloud-lake/getting-started-with-vantagecloud-lake",permalink:"/pr-preview/pr-136/es/quickstarts/vantagecloud-lake/getting-started-with-vantagecloud-lake",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,author:"Vidhan Bhonsle",email:"vidhan.bhonsle@teradata.com",page_last_update:"2 de enero de 2024",description:"Cree su propio entorno en VantageCloud Lake",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","teradatasqlalquimia","vantagecloud","vantagecloud lake","ip address","public internet","lake"]},sidebar:"tutorialSidebar",previous:{title:"Use geographic reference data with Vantage",permalink:"/pr-preview/pr-136/es/quickstarts/analyze-data/geojson-to-vantage"},next:{title:"Ejecutar demostraciones de Teradata Jupyter Notebook para VantageCloud Lake en Docker",permalink:"/pr-preview/pr-136/es/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-docker"}},o={},c=[{value:"Informaci\xf3n general",id:"informaci\xf3n-general",level:2},{value:"Iniciar sesi\xf3n en VantageCloud Lake",id:"iniciar-sesi\xf3n-en-vantagecloud-lake",level:2},{value:"Crear un entorno",id:"crear-un-entorno",level:2},{value:"Configuraci\xf3n del entorno",id:"configuraci\xf3n-del-entorno",level:3},{value:"Configuraci\xf3n del cl\xfaster primario",id:"configuraci\xf3n-del-cl\xfaster-primario",level:3},{value:"Credenciales de base de datos",id:"credenciales-de-base-de-datos",level:3},{value:"Opciones avanzadas",id:"opciones-avanzadas",level:3},{value:"Entorno de acceso desde Internet p\xfablico",id:"entorno-de-acceso-desde-internet-p\xfablico",level:2},{value:"Resumen",id:"resumen",level:2},{value:"Lectura adicional",id:"lectura-adicional",level:2}];function l(e){const a={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"primeros-pasos-con-vantagecloud-lake",children:"Primeros pasos con VantageCloud Lake"}),"\n",(0,s.jsx)(a.h2,{id:"informaci\xf3n-general",children:"Informaci\xf3n general"}),"\n",(0,s.jsx)(a.p,{children:"Teradata VantageCloud Lake es la plataforma de datos y an\xe1lisis nativa de la nube de pr\xf3xima generaci\xf3n de Teradata. Proporciona patrones de implementaci\xf3n de Lakehouse junto con la capacidad de ejecutar cargas de trabajo el\xe1sticas independientes utilizando un dise\xf1o centrado en el almacenamiento de objetos."}),"\n",(0,s.jsx)(a.p,{children:"Permite a las organizaciones desbloquear sus datos, activar an\xe1lisis y acelerar el valor. Los clientes pueden optimizar su entorno de an\xe1lisis utilizando recursos de cl\xfaster de computaci\xf3n especialmente configurados que se adapten mejor a sus requisitos de carga de trabajo."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"VantageCloud",src:n(23532).A+"",width:"1140",height:"1133"})}),"\n",(0,s.jsx)(a.p,{children:"VantageCloud Lake proporciona todos los beneficios que esperar\xeda de una soluci\xf3n en la nube, adem\xe1s de la tecnolog\xeda diferenciada de Teradata, incluida la base de datos de an\xe1lisis l\xedder en la industria, ClearScape Analytics, y el tejido de datos QueryGrid."}),"\n",(0,s.jsx)(a.h2,{id:"iniciar-sesi\xf3n-en-vantagecloud-lake",children:"Iniciar sesi\xf3n en VantageCloud Lake"}),"\n",(0,s.jsx)(a.admonition,{type:"important",children:(0,s.jsxs)(a.p,{children:["Para obtener un enlace de inicio de sesi\xf3n y credenciales de VantageCloud Lake, complete el ",(0,s.jsx)(a.a,{href:"https://www.teradata.com/about-us/contact",children:"formulario de contacto"})," para ponerse en contacto con el equipo de Teradata."]})}),"\n",(0,s.jsxs)(a.p,{children:["Vaya a la URL proporcionada por Teradata, por ejemplo, ",(0,s.jsx)(a.strong,{children:(0,s.jsx)(a.em,{children:"ourcompany.innovationlabs.teradata.com"})})," e inicie sesi\xf3n:"]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Los clientes existentes pueden utilizar el nombre de usuario (direcci\xf3n de correo electr\xf3nico) y la contrase\xf1a del administrador de su organizaci\xf3n para iniciar sesi\xf3n."}),"\n",(0,s.jsx)(a.li,{children:"El nuevo cliente puede iniciar sesi\xf3n con el nombre de usuario de administrador de su organizaci\xf3n (de la carta de bienvenida: direcci\xf3n de correo electr\xf3nico) y la contrase\xf1a que usted cre\xf3."}),"\n"]}),"\n",(0,s.jsx)(a.admonition,{type:"note",children:(0,s.jsxs)(a.p,{children:["Haga clic ",(0,s.jsx)(a.a,{href:"https://login.customer.teradata.com/ext/pwdreset/Identify?AdapterId=CDSCustomer",children:"aqu\xed"})," para restablecer la contrase\xf1a de administrador de la organizaci\xf3n."]})}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Iniciar sesi\xf3n",src:n(37160).A+"",width:"2434",height:"1400"})}),"\n",(0,s.jsx)(a.p,{children:"Al iniciar sesi\xf3n, acceder\xe1 a la p\xe1gina de bienvenida de VantageCloud Lake."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Pagina de bienvenida",src:n(79963).A+"",width:"1857",height:"977"})}),"\n",(0,s.jsx)(a.p,{children:"La p\xe1gina de Bienvenida tiene un men\xfa de navegaci\xf3n que no solo le brinda un control completo de sus entornos, sino que tambi\xe9n le proporciona varias herramientas necesarias:"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Elementos del men\xfa de navegaci\xf3n",src:n(35838).A+"",width:"280",height:"476"})}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Vantage: p\xe1gina de inicio del portal VantageCloud Lake"}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"https://docs.teradata.com/r/Teradata-VantageCloud-Lake/Getting-Started-First-Sign-On-by-Organization-Admin/Step-1-Signing-On-and-Creating-Your-First-Environment",children:"Entornos"})," - Cree sus entornos y vea todos los entornos creados"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"https://docs.teradata.com/r/Teradata-VantageCloud-Lake/Introduction-to-VantageCloud-Lake/VantageCloud-Lake-Organizations-and-Environments",children:"Organizaci\xf3n"})," - Vea la configuraci\xf3n de las organizaciones, administre los administradores de la organizaci\xf3n y vea la configuraci\xf3n y el estado de su cuenta"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"https://docs.teradata.com/r/Teradata-VantageCloud-Lake/Managing-Compute-Resources/Review-Consumption-Usage",children:"Consumo"})," - Supervise c\xf3mo su organizaci\xf3n consume recursos inform\xe1ticos y de almacenamiento"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"https://docs.teradata.com/r/Teradata-VantageCloud-Lake/Managing-Consumption/Using-the-Consumption-Estimates",children:"Calculadora de costes"})," - Calcule el coste y el consumo de su entorno y de toda la organizaci\xf3n."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"https://docs.teradata.com/r/Teradata-VantageCloud-Lake/Running-and-Monitoring-Queries/Monitoring-and-Managing-Queries",children:"Consultas"})," - Inspeccione las consultas de un entorno para comprender su eficiencia."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"https://docs.teradata.com/r/Teradata-VantageCloud-Lake/Running-and-Monitoring-Queries",children:"Editor"})," - Cree y ejecute consultas en un editor."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"https://docs.teradata.com/r/Teradata-VantageCloud-Lake/Data-Copy",children:"Copia de datos"})," - Aprovisione, configure y ejecute trabajos de copia de datos (tambi\xe9n conocidos como Data Mover) desde la consola de VantageCloud Lake."]}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"crear-un-entorno",children:"Crear un entorno"}),"\n",(0,s.jsx)(a.p,{children:'Para crear un entorno de cl\xfaster primario, haga clic en "Entornos" en el men\xfa de navegaci\xf3n. En una nueva vista abierta, haga clic en el bot\xf3n "Crear" situado en la parte superior derecha de la p\xe1gina.'}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"P\xe1gina de entorno",src:n(91410).A+"",width:"1864",height:"427"})}),"\n",(0,s.jsx)(a.h3,{id:"configuraci\xf3n-del-entorno",children:"Configuraci\xf3n del entorno"}),"\n",(0,s.jsx)(a.p,{children:"Complete los campos de configuraci\xf3n del entorno:"}),"\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:(0,s.jsx)(a.strong,{children:"Art\xedculo"})}),(0,s.jsx)(a.th,{children:(0,s.jsx)(a.strong,{children:"Descripci\xf3n"})})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.em,{children:"Environment name"})}),(0,s.jsx)(a.td,{children:"Un nombre contextual para el nuevo entorno"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.em,{children:"Region"})}),(0,s.jsx)(a.td,{children:"La lista de regiones disponibles fue predeterminada durante el proceso de venta."})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.em,{children:"Package"})}),(0,s.jsx)(a.td,{children:"Hay dos paquetes de servicios disponibles para seleccionar:"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{}),(0,s.jsx)(a.td,{children:"- Lake: Soporte de nube Premier 24x7"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{}),(0,s.jsx)(a.td,{children:"- Lake: Soporte Premier prioritario en la nube 24x7 + modelos de datos de la industria"})]})]})]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Configuraci\xf3n del entorno",src:n(3813).A+"",width:"2111",height:"1451"})}),"\n",(0,s.jsx)(a.admonition,{type:"important",children:(0,s.jsxs)(a.p,{children:["Las ",(0,s.jsx)(a.strong,{children:"Estimaciones de consumo"}),", a su derecha, proporcionan orientaci\xf3n para configurar el entorno. Consulte ",(0,s.jsx)(a.a,{href:"https://docs.teradata.com/r/Teradata-VantageCloud-Lake/Managing-Consumption/Using-the-Consumption-Estimates",children:"Uso de las estimaciones de consumo"})," para obtener m\xe1s detalles."]})}),"\n",(0,s.jsx)(a.h3,{id:"configuraci\xf3n-del-cl\xfaster-primario",children:"Configuraci\xf3n del cl\xfaster primario"}),"\n",(0,s.jsx)(a.p,{children:"Complete los campos de configuraci\xf3n del cl\xfaster primario:"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Art\xedculo"}),(0,s.jsx)("th",{children:"Descripci\xf3n"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("em",{children:"Instance size"})}),(0,s.jsxs)("td",{children:[(0,s.jsxs)(a.p,{children:["Seleccione un tama\xf1o de instancia adecuado para su caso de uso:",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("strong",{children:"Lake"})]}),(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Tama\xf1o"}),(0,s.jsx)("th",{children:"Valor (en unidades)"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"XSmall"}),(0,s.jsx)("td",{children:"2"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Small"}),(0,s.jsx)("td",{children:"4"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Medium"}),(0,s.jsx)("td",{children:"7"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Large"}),(0,s.jsx)("td",{children:"10"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"XLarge"}),(0,s.jsx)("td",{children:"13"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"2XLarge"}),(0,s.jsx)("td",{children:"20"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"3XLarge"}),(0,s.jsx)("td",{children:"27"})]})]})]}),(0,s.jsx)("strong",{children:"Lake+"}),(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Tama\xf1o"}),(0,s.jsx)("th",{children:"Valor (en unidades)"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"XSmall"}),(0,s.jsx)("td",{children:"2.4"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Small"}),(0,s.jsx)("td",{children:"4.8"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Medium"}),(0,s.jsx)("td",{children:"8.4"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Large"}),(0,s.jsx)("td",{children:"12"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"XLarge"}),(0,s.jsx)("td",{children:"15.6"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"2XLarge"}),(0,s.jsx)("td",{children:"24"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"3XLarge"}),(0,s.jsx)("td",{children:"32.4"})]})]})]})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("em",{children:"Instance count"})}),(0,s.jsxs)("td",{children:["2-64",(0,s.jsx)("br",{}),"N\xfamero de nodos en los cl\xfasteres primarios"]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("em",{children:"Instance storage"})}),(0,s.jsx)("td",{children:"De 1 a 72\xa0TB por instancia"})]})]})]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Configuraci\xf3n del cl\xfaster primario",src:n(56319).A+"",width:"2111",height:"1106"})}),"\n",(0,s.jsx)(a.h3,{id:"credenciales-de-base-de-datos",children:"Credenciales de base de datos"}),"\n",(0,s.jsx)(a.p,{children:"Complete los campos de credenciales de la base de datos:"}),"\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:(0,s.jsx)(a.strong,{children:"Art\xedculo"})}),(0,s.jsx)(a.th,{children:(0,s.jsx)(a.strong,{children:"Descripci\xf3n"})})]})}),(0,s.jsx)(a.tbody,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"DBC password"}),(0,s.jsx)(a.td,{children:'La cuenta administrativa principal en un entorno Teradata Vantage se conoce como "dbc". Al igual que el usuario root en Linux, la cuenta dbc tiene privilegios administrativos completos. Se recomienda establecer usuarios administrativos adicionales para tareas rutinarias, despu\xe9s de crear el entorno, y abstenerse de compartir o utilizar las credenciales de dbc.'})]})})]}),"\n",(0,s.jsx)(a.p,{children:"Establezca la contrase\xf1a para dbc:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Entre 8 y 64 caracteres"}),"\n",(0,s.jsx)(a.li,{children:"Permite caracteres alfanum\xe9ricos y especiales"}),"\n",(0,s.jsx)(a.li,{children:"Sin palabras del diccionario"}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Configuraci\xf3n del cl\xfaster primario",src:n(40771).A+"",width:"2095",height:"854"})}),"\n",(0,s.jsx)(a.h3,{id:"opciones-avanzadas",children:"Opciones avanzadas"}),"\n",(0,s.jsxs)(a.p,{children:["Para comenzar r\xe1pidamente, puede seleccionar ",(0,s.jsx)(a.strong,{children:"Usar valores predeterminados"})," o definir la configuraci\xf3n de opciones adicionales."]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Opci\xf3n avanzada con valores predeterminados del usuario",src:n(63005).A+"",width:"2101",height:"591"})}),"\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:(0,s.jsx)(a.em,{children:"Art\xedculo"})}),(0,s.jsx)(a.th,{children:"Descripci\xf3n*"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"AMPs per instance"}),(0,s.jsx)(a.td,{children:"Gesti\xf3n de la carga de trabajo + Seleccione la cantidad de AMP por instancia para el tama\xf1o de instancia que seleccion\xf3."})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"AWS: Storage encryption"}),(0,s.jsxs)(a.td,{children:["Configure el cifrado de los datos del cliente. Consulte [C\xf3mo encontrar el ID de la clave y el ARN de la clave] (",(0,s.jsx)(a.a,{href:"https://docs.aws.amazon.com/kms/latest/developerguide/find-cmk-id-arn.html",children:"https://docs.aws.amazon.com/kms/latest/developerguide/find-cmk-id-arn.html"}),") ",(0,s.jsx)("br",{})," ",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Gestionado por Teradata"}),(0,s.jsx)("li",{children:"Gestionado por el cliente"}),(0,s.jsx)("li",{children:"ARN de alias clave"})]})]})]})]})]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Opci\xf3n avanzada definida por el usuario",src:n(98063).A+"",width:"2099",height:"1140"})}),"\n",(0,s.jsxs)(a.p,{children:["Revise toda la informaci\xf3n y haga clic en el bot\xf3n ",(0,s.jsx)(a.strong,{children:"CREATE ENVIRONMENT"}),"."]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Bot\xf3n Crear entorno",src:n(67279).A+"",width:"1011",height:"152"})}),"\n",(0,s.jsxs)(a.p,{children:["La implementaci\xf3n tarda unos minutos. Una vez completado, el entorno creado se puede encontrar en la secci\xf3n ",(0,s.jsx)(a.strong,{children:"Entornos"})," como una vista de tarjeta (el nombre del entorno es quickstart_demo)."]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Entorno disponible reci\xe9n creado",src:n(70070).A+"",width:"886",height:"516"})}),"\n",(0,s.jsx)(a.h2,{id:"entorno-de-acceso-desde-internet-p\xfablico",children:"Entorno de acceso desde Internet p\xfablico"}),"\n",(0,s.jsxs)(a.p,{children:["Solo se puede acceder al entorno creado a trav\xe9s de la consola. Para cambiarlo, haga clic en el entorno creado y vaya a la pesta\xf1a ",(0,s.jsx)(a.em,{children:"SETTINGS"}),"."]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Men\xfa de configuraci\xf3n del entorno creado",src:n(92926).A+"",width:"3344",height:"1376"})}),"\n",(0,s.jsxs)(a.p,{children:["En ",(0,s.jsx)(a.strong,{children:"SETTINGS"}),", seleccione la casilla de verificaci\xf3n ",(0,s.jsx)(a.strong,{children:"Conexi\xf3n a Internet"})," y proporcione las direcciones IP en formato CIDR (por ejemplo, 192.168.2.0/24 especifica todas las direcciones IP en el rango: 192.168.2.0 a 192.168.2.255) con las que quiere acceder su entorno."]}),"\n",(0,s.jsx)(a.admonition,{type:"note",children:(0,s.jsxs)(a.p,{children:["Encuentre m\xe1s informaci\xf3n sobre c\xf3mo configurar una conexi\xf3n a Internet ",(0,s.jsx)(a.a,{href:"https://docs.teradata.com/r/Teradata-VantageCloud-Lake/Getting-Started-First-Sign-On-by-Organization-Admin/Step-2-Setting-the-Environment-Connection-Type/Setting-Up-an-Internet-Connection",children:"aqu\xed"}),"."]})}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Lista blanca de IP",src:n(64843).A+"",width:"1679",height:"810"})}),"\n",(0,s.jsxs)(a.p,{children:["Haga clic en el bot\xf3n ",(0,s.jsx)(a.strong,{children:"SAVE"})," situado en la parte superior derecha de la p\xe1gina para confirmar los cambios."]}),"\n",(0,s.jsxs)(a.p,{children:["Vuelva a la secci\xf3n ",(0,s.jsx)(a.strong,{children:"Entornos"})," y consulte su tarjeta de entorno. Ahora tiene acceso a ",(0,s.jsx)(a.strong,{children:"Internet publica"}),"."]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"Vista de tarjeta de Internet p\xfablica",src:n(87694).A+"",width:"890",height:"509"})}),"\n",(0,s.jsx)(a.h2,{id:"resumen",children:"Resumen"}),"\n",(0,s.jsx)(a.p,{children:"En este inicio r\xe1pido, aprendimos c\xf3mo crear un entorno en VantageCloud Lake y permitir el acceso a \xe9l desde la Internet p\xfablica."}),"\n",(0,s.jsx)(a.h2,{id:"lectura-adicional",children:"Lectura adicional"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://docs.teradata.com/r/Teradata-VantageCloud-Lake/Getting-Started-First-Sign-On-by-Organization-Admin",children:"Documentaci\xf3n de Teradata VantageCloud Lake"})}),"\n"]})]})}function A(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},23532:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/VantageCloud-8d3a71f8af4f22c1e4f74e0e6bf2f94d.png"},98063:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/lake_advanced_option-0b96d5eb83b51b1fd73ae69a45eadc1d.png"},63005:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/lake_advanced_option_default-8e59dadc1dfd7662ee479c1d73fd4372.png"},70070:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/lake_available_environment-bb1ff0c069a79c0adf61af4e6a2cfbb3.png"},67279:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/lake_create_environment-c88c2248576b3e561caee04e3580fd9f.png"},40771:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/lake_database_cred-01fcad84dbaf3f9726f840f8aad8959e.png"},3813:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/lake_environment_configuration-8b10ccbcd9bb80fc697880e744f2a385.png"},91410:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/lake_environment_page-6b6a183431fb78910c175a324093254c.png"},35838:(e,a,n)=>{n.d(a,{A:()=>s});const s="data:image/png;base64,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"},64843:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/lake_ip_addresses-fdbd9aa3c8df62810d26edd18a623c23.png"},56319:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/lake_primary_cluster_config-02d46f38d8d907651bce13900d9d5c7d.png"},87694:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/lake_public_internet_cv-ceb625a32e80b9bdbd27e5e81b379c68.png"},92926:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/lake_settings_menu-f2d90950532ec36b0a9a5c1c8b48bb91.png"},37160:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/lake_sign_on-65f61d85b75362238725a2a2f3a1c4fd.png"},79963:(e,a,n)=>{n.d(a,{A:()=>s});const s=n.p+"assets/images/lake_welcome_page-70f9995600a3a89bb5cd0cdcd892054a.png"},28453:(e,a,n)=>{n.d(a,{R:()=>d,x:()=>t});var s=n(96540);const r={},i=s.createContext(r);function d(e){const a=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:a},e.children)}}}]);
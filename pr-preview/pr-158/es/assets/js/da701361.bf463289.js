"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[9636],{87430:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var t=r(74848),n=r(28453);const s={id:"select-the-right-data-ingestion-tools-for-teradata-vantage",sidebar_position:2,author:"Krutik Pathak",email:"krutik.pathak@teradata.com",page_last_update:"29 de febrero de 2024",description:"Recomendaci\xf3n de herramientas de incorporaci\xf3n de datos para utilizar en diferentes casos de uso para Teradata Vantage",keywords:["data ingestion","teradata","nos","tpt","bteq","querygrid","airbyte","object store","saas","vantage","apache","spark","presto","oracle","Flow"]},o="Seleccionar la soluci\xf3n de ingesta de datos adecuada para Teradata Vantage",i={id:"manage-data/select-the-right-data-ingestion-tools-for-teradata-vantage",title:"Seleccionar la soluci\xf3n de ingesta de datos adecuada para Teradata Vantage",description:"Recomendaci\xf3n de herramientas de incorporaci\xf3n de datos para utilizar en diferentes casos de uso para Teradata Vantage",source:"@site/i18n/es/docusaurus-plugin-content-docs-quickstarts/current/manage-data/select-the-right-data-ingestion-tools-for-teradata-vantage.md",sourceDirName:"manage-data",slug:"/manage-data/select-the-right-data-ingestion-tools-for-teradata-vantage",permalink:"/pr-preview/pr-158/es/quickstarts/manage-data/select-the-right-data-ingestion-tools-for-teradata-vantage",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"select-the-right-data-ingestion-tools-for-teradata-vantage",sidebar_position:2,author:"Krutik Pathak",email:"krutik.pathak@teradata.com",page_last_update:"29 de febrero de 2024",description:"Recomendaci\xf3n de herramientas de incorporaci\xf3n de datos para utilizar en diferentes casos de uso para Teradata Vantage",keywords:["data ingestion","teradata","nos","tpt","bteq","querygrid","airbyte","object store","saas","vantage","apache","spark","presto","oracle","Flow"]},sidebar:"tutorialSidebar",previous:{title:"Consultar datos almacenados en el almacenamiento de objetos",permalink:"/pr-preview/pr-158/es/quickstarts/manage-data/nos"},next:{title:"Utilizar Apache Airflow con Teradata Vantage",permalink:"/pr-preview/pr-158/es/quickstarts/manage-data/airflow"}},d={},l=[{value:"Informaci\xf3n general",id:"informaci\xf3n-general",level:2},{value:"Ingesta de alto volumen, incluida la transmisi\xf3n",id:"ingesta-de-alto-volumen-incluida-la-transmisi\xf3n",level:3},{value:"Ingerir datos del almacenamiento de objetos",id:"ingerir-datos-del-almacenamiento-de-objetos",level:3},{value:"Ingerir datos de archivos locales",id:"ingerir-datos-de-archivos-locales",level:3},{value:"Ingerir datos de aplicaciones SaaS",id:"ingerir-datos-de-aplicaciones-saas",level:3},{value:"Utilice datos almacenados en otras bases de datos para el procesamiento unificado de consultas.",id:"utilice-datos-almacenados-en-otras-bases-de-datos-para-el-procesamiento-unificado-de-consultas",level:3},{value:"Resumen",id:"resumen",level:2},{value:"Lectura adicional",id:"lectura-adicional",level:2}];function c(e){const a={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"seleccionar-la-soluci\xf3n-de-ingesta-de-datos-adecuada-para-teradata-vantage",children:"Seleccionar la soluci\xf3n de ingesta de datos adecuada para Teradata Vantage"}),"\n",(0,t.jsx)(a.h2,{id:"informaci\xf3n-general",children:"Informaci\xf3n general"}),"\n",(0,t.jsx)(a.p,{children:"Este art\xedculo describe diferentes casos de uso relacionados con la ingesta de datos. Enumera las soluciones disponibles y recomienda la soluci\xf3n \xf3ptima para cada caso de uso."}),"\n",(0,t.jsx)(a.h3,{id:"ingesta-de-alto-volumen-incluida-la-transmisi\xf3n",children:"Ingesta de alto volumen, incluida la transmisi\xf3n"}),"\n",(0,t.jsx)(a.p,{children:"Soluciones disponibles:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Utilice ",(0,t.jsx)(a.a,{href:"https://docs.teradata.com/r/Teradata-Parallel-Transporter-Application-Programming-Interface-Programmer-Guide-17.20",children:"Teradata Parallel Transporter API"})]}),"\n",(0,t.jsxs)(a.li,{children:["Transmita datos al almacenamiento de objetos y posteriormente incorp\xf3relos mediante ",(0,t.jsx)(a.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide-17.20/Welcome-to-Native-Object-Store",children:"Teradata Native Object Store (NOS)"}),"."]}),"\n",(0,t.jsxs)(a.li,{children:["Utilice la utilidad de l\xednea de comandos ",(0,t.jsx)(a.a,{href:"https://docs.teradata.com/r/Teradata-Parallel-Transporter-User-Guide/June-2022/Introduction-to-Teradata-PT",children:"Teradata Parallel Transporter (TPT)"}),"."]}),"\n",(0,t.jsxs)(a.li,{children:["Utilice ",(0,t.jsx)(a.a,{href:"https://docs.teradata.com/r/Teradata-Query-Service-Installation-Configuration-and-Usage-Guide-for-Customers/April-2022/Using-the-Query-Service-APIs/Getting-Started",children:"Teradata Query Service"}),": REST API para ejecutar sentencias SQL en la base de datos."]}),"\n",(0,t.jsx)(a.li,{children:"Utilice controladores de bases de datos Teradata como JDBC (Java), teradatasql (Python), controlador Node.js, ODBC, .NET Data Provider."}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"La API de Teradata Parallel Transport suele ser la soluci\xf3n de mayor rendimiento que ofrece un alto rendimiento y una latencia m\xednima. \xdasela si necesita ingerir decenas de miles de filas por segundo y si se siente c\xf3modo usando el lenguaje C."}),"\n",(0,t.jsx)(a.p,{children:"Utilice los controladores de la base de datos de Teradata cuando el n\xfamero de eventos sea de miles por segundo. Considere utilizar el protocolo Fastload que est\xe1 disponible en los controladores m\xe1s populares, por ejemplo, JDBC, Python."}),"\n",(0,t.jsx)(a.p,{children:"Si no quiere administrar la dependencia de las bibliotecas de controladores, utilice Query Service. Dado que Query Service utiliza el protocolo de controlador normal para comunicarse con la base de datos, el rendimiento de esta soluci\xf3n es similar al que ofrecen los controladores de bases de datos como JDBC. Si es un proveedor y quiere integrar su producto con Teradata, tenga en cuenta que no todos los clientes de Teradata tienen habilitado Query Service en sus sedes."}),"\n",(0,t.jsx)(a.p,{children:"Si su soluci\xf3n puede aceptar una latencia mayor, una buena opci\xf3n es transmitir eventos al almacenamiento de objetos y luego leer los datos usando NOS. Esta soluci\xf3n suele requerir la menor cantidad de esfuerzo."}),"\n",(0,t.jsx)(a.h3,{id:"ingerir-datos-del-almacenamiento-de-objetos",children:"Ingerir datos del almacenamiento de objetos"}),"\n",(0,t.jsx)(a.p,{children:"Soluciones disponibles:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://docs.teradata.com/r/Teradata-VantageCloud-Lake/Loading-Data/Introduction-to-Flow",children:"Flow (solo VantageCloud Lake)"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide-17.20/Welcome-to-Native-Object-Store",children:"Teradata Native Object Store (NOS)"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://docs.teradata.com/r/Teradata-Parallel-Transporter-User-Guide/June-2022/Introduction-to-Teradata-PT",children:"Teradata Parallel Transporter (TPT)"})}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"Flow es el mecanismo de incorporaci\xf3n recomendado para llevar datos desde el almacenamiento de objetos a VantageCloud Lake. Para todas las dem\xe1s versiones de Teradata Vantage, Teradata NOS es la opci\xf3n recomendada. NOS puede aprovechar todos los nodos de Teradata para realizar la incorporaci\xf3n. Teradata Parallel Transporter (TPT) se ejecuta en el lado del cliente. Se puede utilizar cuando no hay conectividad desde NOS al almacenamiento de objetos."}),"\n",(0,t.jsx)(a.h3,{id:"ingerir-datos-de-archivos-locales",children:"Ingerir datos de archivos locales"}),"\n",(0,t.jsx)(a.p,{children:"Soluciones disponibles:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://docs.teradata.com/r/Teradata-Parallel-Transporter-User-Guide/June-2022/Introduction-to-Teradata-PT",children:"Teradata Parallel Transporter (TPT)"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_Lake_VMware/Basic-Teradata-Query-Reference-17.20/Introduction-to-BTEQ",children:"BTEQ"})}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"TPT es la opci\xf3n recomendada para cargar datos desde archivos locales. TPT est\xe1 optimizado para la escalabilidad y el paralelismo, por lo que tiene el mejor rendimiento de todas las opciones disponibles. BTEQ se puede utilizar cuando un proceso de ingesta requiere secuencias de comandos. Tambi\xe9n tiene sentido  continuar usando BTEQ si todas las dem\xe1s canalizaciones de ingesta se ejecutan en BTEQ."}),"\n",(0,t.jsx)(a.h3,{id:"ingerir-datos-de-aplicaciones-saas",children:"Ingerir datos de aplicaciones SaaS"}),"\n",(0,t.jsx)(a.p,{children:"Soluciones disponibles:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Varias herramientas de terceros como ",(0,t.jsx)(a.a,{href:"https://airbyte.com/",children:"Airbyte"}),", ",(0,t.jsx)(a.a,{href:"https://precog.com/",children:"Precog"}),", ",(0,t.jsx)(a.a,{href:"https://nexla.com/",children:"Nexla"}),", ",(0,t.jsx)(a.a,{href:"https://fivetran.com/",children:"Fivetran"})]}),"\n",(0,t.jsxs)(a.li,{children:["Exportar desde aplicaciones SaaS a archivos locales y posteriormente incorporarlos mediante ",(0,t.jsx)(a.a,{href:"https://docs.teradata.com/r/Teradata-Parallel-Transporter-User-Guide/June-2022/Introduction-to-Teradata-PT",children:"Teradata Parallel Transporter (TPT)"})]}),"\n",(0,t.jsxs)(a.li,{children:["Exportar desde aplicaciones SaaS al almacenamiento de objetos y posteriormente incorp\xf3relos mediante ",(0,t.jsx)(a.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide-17.20/Welcome-to-Native-Object-Store",children:"Teradata Native Object Store (NOS)"}),"."]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"Las herramientas de terceros suelen ser una mejor opci\xf3n para mover datos de aplicaciones SaaS a Teradata Vantage. Ofrecen un amplio soporte para fuentes de datos y eliminan la necesidad de gestionar pasos intermedios, como exportar y almacenar conjuntos de datos exportados."}),"\n",(0,t.jsx)(a.h3,{id:"utilice-datos-almacenados-en-otras-bases-de-datos-para-el-procesamiento-unificado-de-consultas",children:"Utilice datos almacenados en otras bases de datos para el procesamiento unificado de consultas."}),"\n",(0,t.jsx)(a.p,{children:"Soluciones disponibles:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_Lake_VMware/QueryGridTM-Installation-and-User-Guide-3.05",children:"Teradata QueryGrid"})}),"\n",(0,t.jsxs)(a.li,{children:["Exportar desde otras bases de datos a archivos locales y posteriormente incorporarlos mediante ",(0,t.jsx)(a.a,{href:"https://docs.teradata.com/r/Teradata-Parallel-Transporter-User-Guide/June-2022/Introduction-to-Teradata-PT",children:"Teradata Parallel Transporter (TPT)"})]}),"\n",(0,t.jsxs)(a.li,{children:["Exportar desde otras bases al almacenamiento de objetos y posteriormente incorporarlos mediante ",(0,t.jsx)(a.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide-17.20/Welcome-to-Native-Object-Store",children:"Teradata Native Object Store (NOS)"}),"."]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"QueryGrid es la opci\xf3n recomendada para mover cantidades limitadas de datos entre diferentes sistemas/plataformas. Esto incluye movimiento dentro de instancias Vantage, Apache Spark, Oracle, Presto, etc. Es especialmente adecuado para situaciones en las que lo que se debe sincronizar se describe mediante condiciones complejas que se pueden expresar en SQL."}),"\n",(0,t.jsx)(a.h2,{id:"resumen",children:"Resumen"}),"\n",(0,t.jsx)(a.p,{children:"En este art\xedculo, exploramos varios casos de uso de ingesta de datos, proporcionamos una lista de herramientas disponibles para cada caso de uso e identificamos las opciones recomendadas para diferentes escenarios."}),"\n",(0,t.jsx)(a.h2,{id:"lectura-adicional",children:"Lectura adicional"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{href:"/pr-preview/pr-158/es/quickstarts/manage-data/nos",children:"Consultar datos almacenados en el almacenamiento de objetos mediante NOS"})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{href:"/pr-preview/pr-158/es/quickstarts/manage-data/run-bulkloads-efficiently-with-teradata-parallel-transporter",children:"Ejecutar grandes cargas masivas de manera eficiente con Teradata Parallel Transporter"})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_Lake_VMware/QueryGridTM-Installation-and-User-Guide-3.05",children:"Teradata QueryGrid"})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{href:"/pr-preview/pr-158/es/quickstarts/manage-data/use-airbyte-to-load-data-from-external-sources-to-teradata-vantage",children:"Utilizar Airbyte para cargar datos de fuentes externas en Teradata Vantage"})}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,a,r)=>{r.d(a,{R:()=>o,x:()=>i});var t=r(96540);const n={},s=t.createContext(n);function o(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);
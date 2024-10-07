"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[3778],{77692:(e,a,i)=>{i.d(a,{Ay:()=>l,RM:()=>s});var n=i(74848),t=i(28453);const s=[];function d(e){const a={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,t.R)(),...e.components};return(0,n.jsxs)(a.admonition,{type:"note",children:[(0,n.jsx)(a.mdxAdmonitionTitle,{}),(0,n.jsxs)(a.p,{children:["Si tiene alguna pregunta o necesita m\xe1s ayuda, visite nuestro ",(0,n.jsx)(a.a,{href:"https://support.teradata.com/community",children:"foro de la comunidad"})," donde podr\xe1 obtener ayuda e interactuar con otros miembros de la comunidad."]})]})}function l(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},23961:(e,a,i)=>{i.d(a,{Ay:()=>l,RM:()=>s});var n=i(74848),t=i(28453);const s=[];function d(e){const a={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,t.R)(),...e.components};return(0,n.jsxs)(a.admonition,{type:"note",children:[(0,n.jsx)(a.mdxAdmonitionTitle,{}),(0,n.jsxs)(a.p,{children:["Si necesita una instancia de prueba de Vantage, puede obtener una de forma gratuita en ",(0,n.jsx)(a.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})]})}function l(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},77643:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>I,contentTitle:()=>o,default:()=>j,frontMatter:()=>c,metadata:()=>u,toc:()=>m});var n=i(74848),t=i(28453),s=i(23961),d=i(77692),l=i(56240),r=i(19365);const c={id:"dbt",sidebar_position:4,author:"Ad\xe1n Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"12 de julio de 2023",description:"Utilizar dbt (herramienta de creaci\xf3n de datos) con Teradata Vantage",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","elt","dbt."]},o="dbt con Teradata Vantage",u={id:"manage-data/dbt",title:"dbt con Teradata Vantage",description:"Utilizar dbt (herramienta de creaci\xf3n de datos) con Teradata Vantage",source:"@site/i18n/es/docusaurus-plugin-content-docs-quickstarts/current/manage-data/dbt.md",sourceDirName:"manage-data",slug:"/manage-data/dbt",permalink:"/es/quickstarts/manage-data/dbt",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"dbt",sidebar_position:4,author:"Ad\xe1n Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"12 de julio de 2023",description:"Utilizar dbt (herramienta de creaci\xf3n de datos) con Teradata Vantage",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","elt","dbt."]},sidebar:"tutorialSidebar",previous:{title:"Data Transfer from Azure Blob to Teradata Vantage Using Apache Airflow",permalink:"/es/quickstarts/manage-data/airflow-azure-to-teradata-transfer-operator-doc"},next:{title:"dbt Cloud with Teradata Vantage",permalink:"/es/quickstarts/manage-data/use-dbt-cloud-with-teradata-vantage"}},I={},m=[{value:"Informaci\xf3n general",id:"informaci\xf3n-general",level:2},{value:"Prerrequisitos",id:"prerrequisitos",level:2},...s.RM,{value:"Instalar dbt",id:"instalar-dbt",level:2},{value:"Configurar dbt",id:"configurar-dbt",level:2},{value:"Acerca del almac\xe9n de Jaffle Shop",id:"acerca-del-almac\xe9n-de-jaffle-shop",level:2},{value:"Ejecutar dbt",id:"ejecutar-dbt",level:2},{value:"Crear tablas de datos sin procesar",id:"crear-tablas-de-datos-sin-procesar",level:3},{value:"Crear el modelo dimensional",id:"crear-el-modelo-dimensional",level:3},{value:"Probar los datos",id:"probar-los-datos",level:3},{value:"Generar documentaci\xf3n",id:"generar-documentaci\xf3n",level:3},{value:"Resumen",id:"resumen",level:2},{value:"Lectura adicional",id:"lectura-adicional",level:2},...d.RM];function b(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"dbt-con-teradata-vantage",children:"dbt con Teradata Vantage"}),"\n",(0,n.jsx)(a.h2,{id:"informaci\xf3n-general",children:"Informaci\xf3n general"}),"\n",(0,n.jsxs)(a.p,{children:["En este tutorial se realiza una demostraci\xf3n de c\xf3mo utilizar dbt (Data Build Tool) con Teradata Vantage. Est\xe1 basado en el ",(0,n.jsx)(a.a,{href:"https://github.com/dbt-labs/jaffle_shop-dev",children:"tutorial de Jaffle Shop sobre dbt"}),". Se han ajustado un par de modelos al dialecto SQL admitido por Vantage."]}),"\n",(0,n.jsx)(a.h2,{id:"prerrequisitos",children:"Prerrequisitos"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Acceso a una instancia de Teradata Vantage."}),"\n",(0,n.jsx)(s.Ay,{}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Python ",(0,n.jsx)(a.strong,{children:"3.7"}),", ",(0,n.jsx)(a.strong,{children:"3.8"}),", ",(0,n.jsx)(a.strong,{children:"3.9"}),", ",(0,n.jsx)(a.strong,{children:"3.10"})," o ",(0,n.jsx)(a.strong,{children:"3.11"})," instalado."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"instalar-dbt",children:"Instalar dbt"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Clone el repositorio del tutorial y use cd para ir al directorio del proyecto:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"git clone https://github.com/Teradata/jaffle_shop-dev.git jaffle_shop\ncd jaffle_shop\n"})}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"Cree un nuevo entorno Python para administrar dbt y sus dependencias."}),"\n",(0,n.jsx)(a.p,{children:"Active el entorno:"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(l.A,{children:[(0,n.jsxs)(r.A,{value:"Windows",label:"Windows",default:!0,children:[(0,n.jsx)(a.p,{children:"Run in Powershell:"}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"gcloud compute instances create teradata-vantage-express `\n--zone=us-central1-a `\n--machine-type=n2-custom-4-8192 `\n--create-disk=boot=yes,device-name=ve-disk,image-project=ubuntu-os-cloud,image-family=ubuntu-2004-lts,size=70,type=pd-balanced `\n--enable-nested-virtualization `\n--tags=ve\n"})})]}),(0,n.jsx)(r.A,{value:"MacOS",label:"MacOS",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"gcloud compute instances create teradata-vantage-express \\\n--zone=us-central1-a \\\n--machine-type=n2-custom-4-8192 \\\n--create-disk=boot=yes,device-name=ve-disk,image-project=ubuntu-os-cloud,image-family=ubuntu-2004-lts,size=70,type=pd-balanced \\\n--enable-nested-virtualization \\\n--tags=ve\n"})})}),(0,n.jsx)(r.A,{value:"Linux",label:"Linux",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"gcloud compute instances create teradata-vantage-express \\\n--zone=us-central1-a \\\n--machine-type=n2-custom-4-8192 \\\n--create-disk=boot=yes,device-name=ve-disk,image-project=ubuntu-os-cloud,image-family=ubuntu-2004-lts,size=70,type=pd-balanced \\\n--enable-nested-virtualization \\\n--tags=ve\n"})})})]}),"\n",(0,n.jsxs)(a.ol,{start:"3",children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Instale el m\xf3dulo ",(0,n.jsx)(a.code,{children:"dbt-teradata"})," y sus dependencias. El m\xf3dulo dbt principal se incluye como dependencia, por lo que no es necesario instalarlo por separado:"]}),"\n",(0,n.jsxs)(a.admonition,{type:"note",children:[(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Dependencias de dbt"})}),(0,n.jsxs)(a.p,{children:["El m\xf3dulo ",(0,n.jsx)(a.code,{children:"dbt-core"})," se incluy\xf3 como dependencia solo hasta la versi\xf3n 1.7.x de dbt-teradata. A partir de ",(0,n.jsx)(a.code,{children:"dbt-teradata"})," 1.8.0 y versiones posteriores, ",(0,n.jsx)(a.code,{children:"dbt-core"})," no se instalar\xe1 como dependencia. Por lo tanto, debe instalar expl\xedcitamente ",(0,n.jsx)(a.code,{children:"dbt-core"})," adem\xe1s de instalar ",(0,n.jsx)(a.code,{children:"dbt-teradata"}),". Puede encontrar m\xe1s informaci\xf3n sobre c\xf3mo desacoplar los adaptadores dbt de ",(0,n.jsx)(a.code,{children:"dbt-core"})," aqu\xed: ",(0,n.jsx)(a.a,{href:"https://github.com/dbt-labs/dbt-core/discussions/9171",children:"https://github.com/dbt-labs/dbt-core/discussions/9171"})]})]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"pip install dbt-teradata\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"configurar-dbt",children:"Configurar dbt"}),"\n",(0,n.jsxs)(a.p,{children:["Configure dbt para conectarse a su base de datos Vantage. Cree el archivo ",(0,n.jsx)(a.code,{children:"profiles.yml"})," en la ubicaci\xf3n que se muestra a continuaci\xf3n."]}),"\n",(0,n.jsxs)(l.A,{children:[(0,n.jsxs)(r.A,{value:"Windows",label:"Windows",default:!0,children:[(0,n.jsx)(a.p,{children:"Run in Powershell:"}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"c:\\Users<user name>.dbt\\profiles.yml\n"})})]}),(0,n.jsx)(r.A,{value:"MacOS",label:"MacOS",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"~/.dbt/profiles.yml\n"})})}),(0,n.jsx)(r.A,{value:"Linux",label:"Linux",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"~/.dbt/profiles.yml\n"})})})]}),"\n",(0,n.jsxs)(a.p,{children:["Agregue la siguiente configuraci\xf3n al archivo ",(0,n.jsx)(a.code,{children:"profile.yml"}),". Ajuste ",(0,n.jsx)(a.code,{children:"<host>"}),", ",(0,n.jsx)(a.code,{children:"<user>"}),", ",(0,n.jsx)(a.code,{children:"<password>"})," para que coincida con su instancia de Teradata Vantage."]}),"\n",(0,n.jsxs)(a.admonition,{type:"note",children:[(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Configuraci\xf3n de la base de datos"})}),(0,n.jsxs)(a.p,{children:["El siguiente perfil de dbt apunta a una base de datos denominada ",(0,n.jsx)(a.code,{children:"jaffle_shop"}),".\nSi la base de datos no existe en su instancia de Teradata Vantage, se crear\xe1. Tambi\xe9n puede cambiar el valor ",(0,n.jsx)(a.code,{children:"schema"})," para que apunte a una base de datos existente en su instancia."]})]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"jaffle_shop:\n  outputs:\n    dev:\n      type: teradata\n      host: <host>\n      user: <user>\n      password: <password>\n      logmech: TD2\n      schema: jaffle_shop\n      tmode: ANSI\n      threads: 1\n      timeout_seconds: 300\n      priority: interactive\n      retries: 1\n  target: dev\n"})}),"\n",(0,n.jsx)(a.p,{children:"Ahora que tenemos el archivo de perfil en su lugar, podemos validar la configuraci\xf3n:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"dbt debug\n"})}),"\n",(0,n.jsxs)(a.p,{children:["Si el comando de depuraci\xf3n devolvi\xf3 errores, es probable que tenga un problema con el contenido de ",(0,n.jsx)(a.code,{children:"profiles.yml"}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"acerca-del-almac\xe9n-de-jaffle-shop",children:"Acerca del almac\xe9n de Jaffle Shop"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"jaffle_shop"})," es una tienda de comercio electr\xf3nico ficticia. Este proyecto dbt transforma datos sin procesar de la base de datos de una aplicaci\xf3n en un modelo dimensional con datos de clientes y pedidos listos para an\xe1lisis."]}),"\n",(0,n.jsx)(a.p,{children:"Los datos sin procesar de la aplicaci\xf3n consisten en clientes, pedidos y pagos, con el siguiente diagrama entidad-relaci\xf3n:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:i(80321).A+"",width:"900",height:"207"})}),"\n",(0,n.jsx)(a.p,{children:"dbt toma esta tabla de datos sin procesar y construye el siguiente modelo dimensional, que es m\xe1s adecuado para herramientas de an\xe1lisis:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:i(98578).A+"",width:"708",height:"388"})}),"\n",(0,n.jsx)(a.h2,{id:"ejecutar-dbt",children:"Ejecutar dbt"}),"\n",(0,n.jsx)(a.h3,{id:"crear-tablas-de-datos-sin-procesar",children:"Crear tablas de datos sin procesar"}),"\n",(0,n.jsxs)(a.p,{children:["En la vida real, obtendremos datos sin procesar de plataformas como Segment, Stitch, Fivetran u otra herramienta ETL. En nuestro caso, usaremos la funcionalidad ",(0,n.jsx)(a.code,{children:"seed"})," de dbt para crear tablas a partir de archivos csv. Los archivos csv se encuentran en el directorio ",(0,n.jsx)(a.code,{children:"./data"}),". Cada archivo csv producir\xe1 una tabla. dbt, inspeccionar\xe1 los archivos y realizar\xe1 inferencias de tipos para decidir qu\xe9 tipos de datos utilizar para las columnas."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"dbt seed\n"})}),"\n",(0,n.jsxs)(a.p,{children:["Ahora deber\xeda ver 3 tablas en su base de ",(0,n.jsx)(a.code,{children:"jaffle_shop"})," datos: ",(0,n.jsx)(a.code,{children:"raw_customers"}),", ",(0,n.jsx)(a.code,{children:"raw_orders"}),", ",(0,n.jsx)(a.code,{children:"raw_payments"}),". Las tablas deben completarse con datos de los archivos csv."]}),"\n",(0,n.jsx)(a.h3,{id:"crear-el-modelo-dimensional",children:"Crear el modelo dimensional"}),"\n",(0,n.jsx)(a.p,{children:"Ahora que tenemos las tablas sin formato, podemos indicarle a dbt que cree el modelo dimensional:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"dbt run\n"})}),"\n",(0,n.jsxs)(a.p,{children:["Entonces, \xbfqu\xe9 pas\xf3 exactamente aqu\xed? dbt cre\xf3 tablas adicionales usando ",(0,n.jsx)(a.code,{children:"CREATE TABLE/VIEW FROM SELECT"})," SQL. En la primera transformaci\xf3n, dbt tom\xf3 tablas sin procesar y cre\xf3 tablas de uni\xf3n desnormalizadas llamadas ",(0,n.jsx)(a.code,{children:"customer_orders"}),", ",(0,n.jsx)(a.code,{children:"order_payments"}),", ",(0,n.jsx)(a.code,{children:"customer_payments"}),". Encontrar\xe1 las definiciones de estas tablas en ",(0,n.jsx)(a.code,{children:"./marts/core/intermediate"}),".\nEn el segundo paso, dbt cre\xf3 las tablas ",(0,n.jsx)(a.code,{children:"dim_customers"})," y ",(0,n.jsx)(a.code,{children:"fct_orders"}),". Estas son las tablas del modelo dimensional que queremos exponer a nuestra herramienta de BI."]}),"\n",(0,n.jsx)(a.h3,{id:"probar-los-datos",children:"Probar los datos"}),"\n",(0,n.jsxs)(a.p,{children:["dbt aplic\xf3 m\xfaltiples transformaciones a nuestros datos. \xbfC\xf3mo podemos asegurarnos de que los datos del modelo dimensional sean correctos? dbt nos permite definir y ejecutar pruebas con los datos. Las pruebas est\xe1n definidas en ",(0,n.jsx)(a.code,{children:"./marts/core/schema.yml"}),". El archivo describe cada columna en todas las relaciones. Cada columna puede tener varias pruebas configuradas en la llave ",(0,n.jsx)(a.code,{children:"tests"}),". Por ejemplo, esperamos que la columna ",(0,n.jsx)(a.code,{children:"fct_orders.order_id"})," contenga valores \xfanicos y no nulos. Para validar que los datos en las tablas creadas satisfacen las condiciones de prueba, ejecute:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"dbt test\n"})}),"\n",(0,n.jsx)(a.h3,{id:"generar-documentaci\xf3n",children:"Generar documentaci\xf3n"}),"\n",(0,n.jsx)(a.p,{children:"Nuestro modelo consta de unas pocas tablas. Imagine un escenario en el que tengamos muchas m\xe1s fuentes de datos y un modelo dimensional mucho m\xe1s complejo. Tambi\xe9n podr\xedamos tener una zona intermedia entre los datos brutos y el modelo dimensional que sigue los principios de Data Vault 2.0. \xbfNo ser\xeda \xfatil si tuvi\xe9ramos las entradas, transformaciones y salidas documentadas de alguna manera? dbt nos permite generar documentaci\xf3n a partir de sus archivos de configuraci\xf3n:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"dbt docs generate\n"})}),"\n",(0,n.jsxs)(a.p,{children:["Esto generar\xe1 archivos html en el directorio ",(0,n.jsx)(a.code,{children:"./target"}),"."]}),"\n",(0,n.jsx)(a.p,{children:"Puede iniciar su propio servidor para explorar la documentaci\xf3n. El siguiente comando iniciar\xe1 un servidor y abrir\xe1 una pesta\xf1a del navegador con la p\xe1gina de inicio de los documentos:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"dbt docs serve\n"})}),"\n",(0,n.jsx)(a.h2,{id:"resumen",children:"Resumen"}),"\n",(0,n.jsxs)(a.p,{children:["Este tutorial demostr\xf3 c\xf3mo usar dbt con Teradata Vantage. El proyecto de muestra toma datos sin procesar y genera un data mart dimensional. Usamos m\xfaltiples comandos dbt para completar tablas a partir de archivos csv (",(0,n.jsx)(a.code,{children:"dbt seed"}),"), crear modelos (",(0,n.jsx)(a.code,{children:"dbt run"}),"), probar los datos (",(0,n.jsx)(a.code,{children:"dbt test"}),") y generar y entregar documentaci\xf3n del modelo (",(0,n.jsx)(a.code,{children:"dbt docs generate"}),", ",(0,n.jsx)(a.code,{children:"dbt docs serve"}),")."]}),"\n",(0,n.jsx)(a.h2,{id:"lectura-adicional",children:"Lectura adicional"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://docs.getdbt.com/docs/",children:"Documentaci\xf3n de dbt"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://github.com/Teradata/dbt-teradata",children:"Documentaci\xf3n del complemento dbt-teradata"})}),"\n"]}),"\n",(0,n.jsx)(d.Ay,{})]})}function j(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},19365:(e,a,i)=>{i.d(a,{A:()=>d});i(96540);var n=i(34164);const t={tabItem:"tabItem_Ymn6"};var s=i(74848);function d(e){var a=e.children,i=e.hidden,d=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(t.tabItem,d),hidden:i,children:a})}},56240:(e,a,i)=>{i.d(a,{A:()=>x});var n=i(96540),t=i(34164),s=i(23104),d=i(56347),l=i(205),r=i(57485);var c=i(89466);function o(e){var a,i;return null!=(a=null==(i=n.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,n.isValidElement)(e)&&((a=e.props)&&"object"==typeof a&&"value"in a))return e;var a;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:i.filter(Boolean))?a:[]}function u(e){var a=e.values,i=e.children;return(0,n.useMemo)((function(){var e=null!=a?a:function(e){return o(e).map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes,default:a.default}}))}(i);return function(e){var a,i,n=(void 0===(i=function(e,a){return e.value===a.value})&&(i=function(e,a){return e===a}),(a=e).filter((function(e,n){return a.findIndex((function(a){return i(a,e)}))!==n})));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[a,i])}function I(e){var a=e.value;return e.tabValues.some((function(e){return e.value===a}))}function m(e){var a=e.queryString,i=void 0!==a&&a,t=e.groupId,s=(0,d.W6)(),l=function(e){var a=e.queryString,i=void 0!==a&&a,n=e.groupId;if("string"==typeof i)return i;if(!1===i)return null;if(!0===i&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:i,groupId:t});return[(0,r.aZ)(l),(0,n.useCallback)((function(e){if(l){var a=new URLSearchParams(s.location.search);a.set(l,e),s.replace(Object.assign({},s.location,{search:a.toString()}))}}),[l,s])]}function b(e){var a,i,t,s,d=e.defaultValue,r=e.queryString,o=void 0!==r&&r,b=e.groupId,j=u(e),g=(0,n.useState)((function(){return function(e){var a,i=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(i){if(!I({value:i,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+i+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return i}var t=null!=(a=n.find((function(e){return e.default})))?a:n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:d,tabValues:j})})),h=g[0],p=g[1],Z=m({queryString:o,groupId:b}),N=Z[0],x=Z[1],T=(a=function(e){return e?"docusaurus.tab."+e:null}({groupId:b}.groupId),i=(0,c.Dv)(a),t=i[0],s=i[1],[t,(0,n.useCallback)((function(e){a&&s.set(e)}),[a,s])]),L=T[0],M=T[1],v=function(){var e=null!=N?N:L;return I({value:e,tabValues:j})?e:null}();return(0,l.A)((function(){v&&p(v)}),[v]),{selectedValue:h,selectValue:(0,n.useCallback)((function(e){if(!I({value:e,tabValues:j}))throw new Error("Can't select invalid tab value="+e);p(e),x(e),M(e)}),[x,M,j]),tabValues:j}}var j=i(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var h=i(74848);function p(e){var a=e.className,i=e.block,n=e.selectedValue,d=e.selectValue,l=e.tabValues,r=[],c=(0,s.a_)().blockElementScrollPositionUntilNextRender,o=function(e){var a=e.currentTarget,i=r.indexOf(a),t=l[i].value;t!==n&&(c(a),d(t))},u=function(e){var a,i=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":var n,t=r.indexOf(e.currentTarget)+1;i=null!=(n=r[t])?n:r[0];break;case"ArrowLeft":var s,d=r.indexOf(e.currentTarget)-1;i=null!=(s=r[d])?s:r[r.length-1]}null==(a=i)||a.focus()};return(0,h.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":i},a),children:l.map((function(e){var a=e.value,i=e.label,s=e.attributes;return(0,h.jsx)("li",Object.assign({role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:function(e){return r.push(e)},onKeyDown:u,onClick:o},s,{className:(0,t.A)("tabs__item",g.tabItem,null==s?void 0:s.className,{"tabs__item--active":n===a}),children:null!=i?i:a}),a)}))})}function Z(e){var a=e.lazy,i=e.children,t=e.selectedValue,s=(Array.isArray(i)?i:[i]).filter(Boolean);if(a){var d=s.find((function(e){return e.props.value===t}));return d?(0,n.cloneElement)(d,{className:"margin-top--md"}):null}return(0,h.jsx)("div",{className:"margin-top--md",children:s.map((function(e,a){return(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==t})}))})}function N(e){var a=b(e);return(0,h.jsxs)("div",{className:(0,t.A)("tabs-container",g.tabList),children:[(0,h.jsx)(p,Object.assign({},e,a)),(0,h.jsx)(Z,Object.assign({},e,a))]})}function x(e){var a=(0,j.A)();return(0,h.jsx)(N,Object.assign({},e,{children:o(e.children)}),String(a))}},80321:(e,a,i)=>{i.d(a,{A:()=>n});const n="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8IS0tIEdlbmVyYXRlZCBieSBncmFwaHZpeiB2ZXJzaW9uIDkuMC4wICgyMDIzMDkxMS4xODI3KQogLS0+CjwhLS0gUGFnZXM6IDEgLS0+Cjxzdmcgd2lkdGg9IjY3NXB0IiBoZWlnaHQ9IjE1NXB0Igogdmlld0JveD0iMC4wMCAwLjAwIDY3NC41MCAxNTQuNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8ZyBpZD0iZ3JhcGgwIiBjbGFzcz0iZ3JhcGgiIHRyYW5zZm9ybT0ic2NhbGUoMSAxKSByb3RhdGUoMCkgdHJhbnNsYXRlKDQgMTUwLjUpIj4KPHBvbHlnb24gZmlsbD0id2hpdGUiIHN0cm9rZT0ibm9uZSIgcG9pbnRzPSItNCw0IC00LC0xNTAuNSA2NzAuNSwtMTUwLjUgNjcwLjUsNCAtNCw0Ii8+CjwhLS0gY3VzdG9tZXJzIC0tPgo8ZyBpZD0ibm9kZTEiIGNsYXNzPSJub2RlIj4KPHRpdGxlPmN1c3RvbWVyczwvdGl0bGU+Cjxwb2x5Z29uIGZpbGw9IiNmMzc4NDMiIHN0cm9rZT0ibm9uZSIgcG9pbnRzPSI4LC00IDgsLTE0Mi41IDE2OCwtMTQyLjUgMTY4LC00IDgsLTQiLz4KPHBvbHlnb24gZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBwb2ludHM9IjgsLTExMyA4LC0xNDIuNSAxNjgsLTE0Mi41IDE2OCwtMTEzIDgsLTExMyIvPgo8dGV4dCB0ZXh0LWFuY2hvcj0ic3RhcnQiIHg9IjQwLjc1IiB5PSItMTIzLjMiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2Esc2Fucy1TZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iMTYuMDAiIGZpbGw9IiNmZmZmZmYiPmN1c3RvbWVyczwvdGV4dD4KPHBvbHlnb24gZmlsbD0iI2Y5ZDZjZCIgc3Ryb2tlPSJub25lIiBwb2ludHM9IjgsLTg1Ljc1IDgsLTExMyAxNjgsLTExMyAxNjgsLTg1Ljc1IDgsLTg1Ljc1Ii8+Cjxwb2x5Z29uIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgcG9pbnRzPSI4LC04NS43NSA4LC0xMTMgMTY4LC0xMTMgMTY4LC04NS43NSA4LC04NS43NSIvPgo8dGV4dCB0ZXh0LWFuY2hvcj0ic3RhcnQiIHg9IjEzIiB5PSItOTUuNyIgZm9udC1mYW1pbHk9IkhlbHZldGljYSxzYW5zLVNlcmlmIiB0ZXh0LWRlY29yYXRpb249InVuZGVybGluZSIgZm9udC1zaXplPSIxNC4wMCIgZmlsbD0iIzAwMDAwMCI+aWQgJiMxNjA7PC90ZXh0Pgo8dGV4dCB0ZXh0LWFuY2hvcj0ic3RhcnQiIHg9IjM0Ljc1IiB5PSItOTUuNyIgZm9udC1mYW1pbHk9IkhlbHZldGljYSxzYW5zLVNlcmlmIiBmb250LXNpemU9IjE0LjAwIiBmaWxsPSIjMDAwMDAwIj4gW2ludF08L3RleHQ+Cjxwb2x5Z29uIGZpbGw9IiNmY2VjZTgiIHN0cm9rZT0ibm9uZSIgcG9pbnRzPSI4LC01OC41IDgsLTg1Ljc1IDE2OCwtODUuNzUgMTY4LC01OC41IDgsLTU4LjUiLz4KPHBvbHlnb24gZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBwb2ludHM9IjgsLTU4LjUgOCwtODUuNzUgMTY4LC04NS43NSAxNjgsLTU4LjUgOCwtNTguNSIvPgo8dGV4dCB0ZXh0LWFuY2hvcj0ic3RhcnQiIHg9IjEzIiB5PSItNjguNDUiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2Esc2Fucy1TZXJpZiIgZm9udC1zaXplPSIxNC4wMCIgZmlsbD0iIzg2ODY4NiI+Zmlyc3RfbmFtZSAmIzE2MDs8L3RleHQ+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iOTUuNSIgeT0iLTY4LjQ1IiBmb250LWZhbWlseT0iSGVsdmV0aWNhLHNhbnMtU2VyaWYiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiM4Njg2ODYiPiBbdmFyY2hhcl08L3RleHQ+Cjxwb2x5Z29uIGZpbGw9IiNmY2VjZTgiIHN0cm9rZT0ibm9uZSIgcG9pbnRzPSI4LC0zMS4yNSA4LC01OC41IDE2OCwtNTguNSAxNjgsLTMxLjI1IDgsLTMxLjI1Ii8+Cjxwb2x5Z29uIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgcG9pbnRzPSI4LC0zMS4yNSA4LC01OC41IDE2OCwtNTguNSAxNjgsLTMxLjI1IDgsLTMxLjI1Ii8+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iMTMiIHk9Ii00MS4yIiBmb250LWZhbWlseT0iSGVsdmV0aWNhLHNhbnMtU2VyaWYiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiM4Njg2ODYiPmxhc3RfbmFtZSAmIzE2MDs8L3RleHQ+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iOTIuNSIgeT0iLTQxLjIiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2Esc2Fucy1TZXJpZiIgZm9udC1zaXplPSIxNC4wMCIgZmlsbD0iIzg2ODY4NiI+IFt2YXJjaGFyXTwvdGV4dD4KPHBvbHlnb24gZmlsbD0iI2ZjZWNlOCIgc3Ryb2tlPSJub25lIiBwb2ludHM9IjgsLTQgOCwtMzEuMjUgMTY4LC0zMS4yNSAxNjgsLTQgOCwtNCIvPgo8cG9seWdvbiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHBvaW50cz0iOCwtNCA4LC0zMS4yNSAxNjgsLTMxLjI1IDE2OCwtNCA4LC00Ii8+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iMTMiIHk9Ii0xMy45NSIgZm9udC1mYW1pbHk9IkhlbHZldGljYSxzYW5zLVNlcmlmIiBmb250LXNpemU9IjE0LjAwIiBmaWxsPSIjODY4Njg2Ij5lbWFpbCAmIzE2MDs8L3RleHQ+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iNTkuNSIgeT0iLTEzLjk1IiBmb250LWZhbWlseT0iSGVsdmV0aWNhLHNhbnMtU2VyaWYiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiM4Njg2ODYiPiBbdmFyY2hhcl08L3RleHQ+CjwvZz4KPCEtLSBvcmRlcnMgLS0+CjxnIGlkPSJub2RlMiIgY2xhc3M9Im5vZGUiPgo8dGl0bGU+b3JkZXJzPC90aXRsZT4KPHBvbHlnb24gZmlsbD0iI2YzNzg0MyIgc3Ryb2tlPSJub25lIiBwb2ludHM9IjI1NywtNCAyNTcsLTE0Mi41IDM5NiwtMTQyLjUgMzk2LC00IDI1NywtNCIvPgo8cG9seWdvbiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHBvaW50cz0iMjU3LC0xMTMgMjU3LC0xNDIuNSAzOTYsLTE0Mi41IDM5NiwtMTEzIDI1NywtMTEzIi8+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iMjk2Ljg4IiB5PSItMTIzLjMiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2Esc2Fucy1TZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iMTYuMDAiIGZpbGw9IiNmZmZmZmYiPm9yZGVyczwvdGV4dD4KPHBvbHlnb24gZmlsbD0iI2Y5ZDZjZCIgc3Ryb2tlPSJub25lIiBwb2ludHM9IjI1NywtODUuNzUgMjU3LC0xMTMgMzk2LC0xMTMgMzk2LC04NS43NSAyNTcsLTg1Ljc1Ii8+Cjxwb2x5Z29uIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgcG9pbnRzPSIyNTcsLTg1Ljc1IDI1NywtMTEzIDM5NiwtMTEzIDM5NiwtODUuNzUgMjU3LC04NS43NSIvPgo8dGV4dCB0ZXh0LWFuY2hvcj0ic3RhcnQiIHg9IjI2MiIgeT0iLTk1LjciIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2Esc2Fucy1TZXJpZiIgdGV4dC1kZWNvcmF0aW9uPSJ1bmRlcmxpbmUiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiMwMDAwMDAiPmlkICYjMTYwOzwvdGV4dD4KPHRleHQgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSIyODMuNzUiIHk9Ii05NS43IiBmb250LWZhbWlseT0iSGVsdmV0aWNhLHNhbnMtU2VyaWYiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiMwMDAwMDAiPiBbaW50XTwvdGV4dD4KPHBvbHlnb24gZmlsbD0iI2ZjZWNlOCIgc3Ryb2tlPSJub25lIiBwb2ludHM9IjI1NywtNTguNSAyNTcsLTg1Ljc1IDM5NiwtODUuNzUgMzk2LC01OC41IDI1NywtNTguNSIvPgo8cG9seWdvbiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHBvaW50cz0iMjU3LC01OC41IDI1NywtODUuNzUgMzk2LC04NS43NSAzOTYsLTU4LjUgMjU3LC01OC41Ii8+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iMjYyIiB5PSItNjguNDUiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2Esc2Fucy1TZXJpZiIgZm9udC1zdHlsZT0iaXRhbGljIiBmb250LXNpemU9IjE0LjAwIiBmaWxsPSIjODY4Njg2Ij51c2VyX2lkICYjMTYwOzwvdGV4dD4KPHRleHQgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSIzMjEuMjUiIHk9Ii02OC40NSIgZm9udC1mYW1pbHk9IkhlbHZldGljYSxzYW5zLVNlcmlmIiBmb250LXNpemU9IjE0LjAwIiBmaWxsPSIjODY4Njg2Ij4gW2ludF08L3RleHQ+Cjxwb2x5Z29uIGZpbGw9IiNmY2VjZTgiIHN0cm9rZT0ibm9uZSIgcG9pbnRzPSIyNTcsLTMxLjI1IDI1NywtNTguNSAzOTYsLTU4LjUgMzk2LC0zMS4yNSAyNTcsLTMxLjI1Ii8+Cjxwb2x5Z29uIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgcG9pbnRzPSIyNTcsLTMxLjI1IDI1NywtNTguNSAzOTYsLTU4LjUgMzk2LC0zMS4yNSAyNTcsLTMxLjI1Ii8+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iMjYyIiB5PSItNDEuMiIgZm9udC1mYW1pbHk9IkhlbHZldGljYSxzYW5zLVNlcmlmIiBmb250LXNpemU9IjE0LjAwIiBmaWxsPSIjODY4Njg2Ij5vcmRlcl9kYXRlICYjMTYwOzwvdGV4dD4KPHRleHQgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSIzNDUuMjUiIHk9Ii00MS4yIiBmb250LWZhbWlseT0iSGVsdmV0aWNhLHNhbnMtU2VyaWYiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiM4Njg2ODYiPiBbZGF0ZV08L3RleHQ+Cjxwb2x5Z29uIGZpbGw9IiNmY2VjZTgiIHN0cm9rZT0ibm9uZSIgcG9pbnRzPSIyNTcsLTQgMjU3LC0zMS4yNSAzOTYsLTMxLjI1IDM5NiwtNCAyNTcsLTQiLz4KPHBvbHlnb24gZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBwb2ludHM9IjI1NywtNCAyNTcsLTMxLjI1IDM5NiwtMzEuMjUgMzk2LC00IDI1NywtNCIvPgo8dGV4dCB0ZXh0LWFuY2hvcj0ic3RhcnQiIHg9IjI2MiIgeT0iLTEzLjk1IiBmb250LWZhbWlseT0iSGVsdmV0aWNhLHNhbnMtU2VyaWYiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiM4Njg2ODYiPnN0YXR1cyAmIzE2MDs8L3RleHQ+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iMzEzLjc1IiB5PSItMTMuOTUiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2Esc2Fucy1TZXJpZiIgZm9udC1zaXplPSIxNC4wMCIgZmlsbD0iIzg2ODY4NiI+IFt2YXJjaGFyXTwvdGV4dD4KPC9nPgo8IS0tIGN1c3RvbWVycyYjNDU7JiM0NTtvcmRlcnMgLS0+CjxnIGlkPSJlZGdlMSIgY2xhc3M9ImVkZ2UiPgo8dGl0bGU+Y3VzdG9tZXJzJiM0NTsmIzQ1O29yZGVyczwvdGl0bGU+CjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzdmN2Y3ZiIgc3Ryb2tlLWRhc2hhcnJheT0iNSwyIiBkPSJNMTc1LjcyLC03My4yNUMxOTkuODUsLTczLjI1IDIyNS44NiwtNzMuMjUgMjQ5LjMzLC03My4yNSIvPgo8dGV4dCB0ZXh0LWFuY2hvcj0ic3RhcnQiIHg9IjIxOS4zMyIgeT0iLTU5Ljk1IiBmb250LWZhbWlseT0iVGltZXMsc2VyaWYiIGZvbnQtc2l6ZT0iMTQuMDAiPjAuLk48L3RleHQ+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iMTc1LjcyIiB5PSItNTkuOTUiIGZvbnQtZmFtaWx5PSJUaW1lcyxzZXJpZiIgZm9udC1zaXplPSIxNC4wMCI+MTwvdGV4dD4KPC9nPgo8IS0tIHBheW1lbnRzIC0tPgo8ZyBpZD0ibm9kZTMiIGNsYXNzPSJub2RlIj4KPHRpdGxlPnBheW1lbnRzPC90aXRsZT4KPHBvbHlnb24gZmlsbD0iI2YzNzg0MyIgc3Ryb2tlPSJub25lIiBwb2ludHM9IjQ4NSwtNCA0ODUsLTE0Mi41IDY1OC41LC0xNDIuNSA2NTguNSwtNCA0ODUsLTQiLz4KPHBvbHlnb24gZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBwb2ludHM9IjQ4NSwtMTEzIDQ4NSwtMTQyLjUgNjU4LjUsLTE0Mi41IDY1OC41LC0xMTMgNDg1LC0xMTMiLz4KPHRleHQgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSI1MjcuODgiIHk9Ii0xMjMuMyIgZm9udC1mYW1pbHk9IkhlbHZldGljYSxzYW5zLVNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIxNi4wMCIgZmlsbD0iI2ZmZmZmZiI+cGF5bWVudHM8L3RleHQ+Cjxwb2x5Z29uIGZpbGw9IiNmOWQ2Y2QiIHN0cm9rZT0ibm9uZSIgcG9pbnRzPSI0ODUsLTg1Ljc1IDQ4NSwtMTEzIDY1OC41LC0xMTMgNjU4LjUsLTg1Ljc1IDQ4NSwtODUuNzUiLz4KPHBvbHlnb24gZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBwb2ludHM9IjQ4NSwtODUuNzUgNDg1LC0xMTMgNjU4LjUsLTExMyA2NTguNSwtODUuNzUgNDg1LC04NS43NSIvPgo8dGV4dCB0ZXh0LWFuY2hvcj0ic3RhcnQiIHg9IjQ5MCIgeT0iLTk1LjciIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2Esc2Fucy1TZXJpZiIgdGV4dC1kZWNvcmF0aW9uPSJ1bmRlcmxpbmUiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiMwMDAwMDAiPmlkICYjMTYwOzwvdGV4dD4KPHRleHQgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSI1MTEuNzUiIHk9Ii05NS43IiBmb250LWZhbWlseT0iSGVsdmV0aWNhLHNhbnMtU2VyaWYiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiMwMDAwMDAiPiBbaW50XTwvdGV4dD4KPHBvbHlnb24gZmlsbD0iI2ZjZWNlOCIgc3Ryb2tlPSJub25lIiBwb2ludHM9IjQ4NSwtNTguNSA0ODUsLTg1Ljc1IDY1OC41LC04NS43NSA2NTguNSwtNTguNSA0ODUsLTU4LjUiLz4KPHBvbHlnb24gZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBwb2ludHM9IjQ4NSwtNTguNSA0ODUsLTg1Ljc1IDY1OC41LC04NS43NSA2NTguNSwtNTguNSA0ODUsLTU4LjUiLz4KPHRleHQgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSI0OTAiIHk9Ii02OC40NSIgZm9udC1mYW1pbHk9IkhlbHZldGljYSxzYW5zLVNlcmlmIiBmb250LXN0eWxlPSJpdGFsaWMiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiM4Njg2ODYiPm9yZGVyX2lkICYjMTYwOzwvdGV4dD4KPHRleHQgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSI1NTUuMjUiIHk9Ii02OC40NSIgZm9udC1mYW1pbHk9IkhlbHZldGljYSxzYW5zLVNlcmlmIiBmb250LXNpemU9IjE0LjAwIiBmaWxsPSIjODY4Njg2Ij4gW2ludF08L3RleHQ+Cjxwb2x5Z29uIGZpbGw9IiNmY2VjZTgiIHN0cm9rZT0ibm9uZSIgcG9pbnRzPSI0ODUsLTMxLjI1IDQ4NSwtNTguNSA2NTguNSwtNTguNSA2NTguNSwtMzEuMjUgNDg1LC0zMS4yNSIvPgo8cG9seWdvbiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHBvaW50cz0iNDg1LC0zMS4yNSA0ODUsLTU4LjUgNjU4LjUsLTU4LjUgNjU4LjUsLTMxLjI1IDQ4NSwtMzEuMjUiLz4KPHRleHQgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSI0OTAiIHk9Ii00MS4yIiBmb250LWZhbWlseT0iSGVsdmV0aWNhLHNhbnMtU2VyaWYiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiM4Njg2ODYiPnBheW1lbnRfbWV0aG9kICYjMTYwOzwvdGV4dD4KPHRleHQgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSI2MjAuNSIgeT0iLTQxLjIiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2Esc2Fucy1TZXJpZiIgZm9udC1zaXplPSIxNC4wMCIgZmlsbD0iIzg2ODY4NiI+IFtpbnRdPC90ZXh0Pgo8cG9seWdvbiBmaWxsPSIjZmNlY2U4IiBzdHJva2U9Im5vbmUiIHBvaW50cz0iNDg1LC00IDQ4NSwtMzEuMjUgNjU4LjUsLTMxLjI1IDY1OC41LC00IDQ4NSwtNCIvPgo8cG9seWdvbiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHBvaW50cz0iNDg1LC00IDQ4NSwtMzEuMjUgNjU4LjUsLTMxLjI1IDY1OC41LC00IDQ4NSwtNCIvPgo8dGV4dCB0ZXh0LWFuY2hvcj0ic3RhcnQiIHg9IjQ5MCIgeT0iLTEzLjk1IiBmb250LWZhbWlseT0iSGVsdmV0aWNhLHNhbnMtU2VyaWYiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiM4Njg2ODYiPmFtb3VudCAmIzE2MDs8L3RleHQ+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iNTUyLjI1IiB5PSItMTMuOTUiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2Esc2Fucy1TZXJpZiIgZm9udC1zaXplPSIxNC4wMCIgZmlsbD0iIzg2ODY4NiI+IFtpbnRdPC90ZXh0Pgo8L2c+CjwhLS0gb3JkZXJzJiM0NTsmIzQ1O3BheW1lbnRzIC0tPgo8ZyBpZD0iZWRnZTIiIGNsYXNzPSJlZGdlIj4KPHRpdGxlPm9yZGVycyYjNDU7JiM0NTtwYXltZW50czwvdGl0bGU+CjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzdmN2Y3ZiIgc3Ryb2tlLWRhc2hhcnJheT0iNSwyIiBkPSJNNDAzLjgsLTczLjI1QzQyNy4wNywtNzMuMjUgNDUyLjkyLC03My4yNSA0NzcuMTksLTczLjI1Ii8+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iNDQ3LjE5IiB5PSItNTkuOTUiIGZvbnQtZmFtaWx5PSJUaW1lcyxzZXJpZiIgZm9udC1zaXplPSIxNC4wMCI+MC4uTjwvdGV4dD4KPHRleHQgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSI0MDMuOCIgeT0iLTU5Ljk1IiBmb250LWZhbWlseT0iVGltZXMsc2VyaWYiIGZvbnQtc2l6ZT0iMTQuMDAiPjE8L3RleHQ+CjwvZz4KPC9nPgo8L3N2Zz4K"},98578:(e,a,i)=>{i.d(a,{A:()=>n});const n=i.p+"assets/images/dbt2-63eca13a00dea36a5f312dc45c10c04b.svg"},28453:(e,a,i)=>{i.d(a,{R:()=>d,x:()=>l});var n=i(96540);const t={},s=n.createContext(t);function d(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);
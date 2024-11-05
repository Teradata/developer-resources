"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[2204],{77692:(e,a,n)=>{n.d(a,{Ay:()=>i,RM:()=>r});var t=n(74848),o=n(28453);const r=[];function s(e){const a={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,o.R)(),...e.components};return(0,t.jsxs)(a.admonition,{type:"note",children:[(0,t.jsx)(a.mdxAdmonitionTitle,{}),(0,t.jsxs)(a.p,{children:["Si tiene alguna pregunta o necesita m\xe1s ayuda, visite nuestro ",(0,t.jsx)(a.a,{href:"https://support.teradata.com/community",children:"foro de la comunidad"})," donde podr\xe1 obtener ayuda e interactuar con otros miembros de la comunidad."]})]})}function i(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},9888:(e,a,n)=>{n.d(a,{Ay:()=>i,RM:()=>r});var t=n(74848),o=n(28453);const r=[];function s(e){const a={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,o.R)(),...e.components};return(0,t.jsxs)(a.admonition,{type:"note",children:[(0,t.jsx)(a.mdxAdmonitionTitle,{}),(0,t.jsxs)(a.p,{children:["Ahora puede obtener una instancia alojada de Vantage de forma gratuita en ",(0,t.jsx)(a.a,{href:"https://clearscape.teradata.com/",children:"https://clearscape.teradata.com"}),"."]})]})}function i(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},95534:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var t=n(74848),o=n(28453),r=n(9888),s=n(77692);const i={sidebar_position:12,id:"create-parquet-files-in-object-storage",author:"Obed Vega",email:"obed.vega@teradata.com",page_last_update:"2 de agosto de 2022",description:"Teradata Vantage Native Object Storage: lectura y escritura desde/hacia el almacenamiento de objetos, interfaz SQL unificada para Vantage y almacenamiento de objetos.",keywords:["data warehouses","compute storage separation","Teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","parquet","crear archivos parquet"]},c="Crear archivos Parquet en el almacenamiento de objetos",d={id:"manage-data/create-parquet-files-in-object-storage",title:"Crear archivos Parquet en el almacenamiento de objetos",description:"Teradata Vantage Native Object Storage: lectura y escritura desde/hacia el almacenamiento de objetos, interfaz SQL unificada para Vantage y almacenamiento de objetos.",source:"@site/i18n/es/docusaurus-plugin-content-docs-quickstarts/current/manage-data/create-parquet-files-in-object-storage.md",sourceDirName:"manage-data",slug:"/manage-data/create-parquet-files-in-object-storage",permalink:"/pr-preview/pr-157/es/quickstarts/manage-data/create-parquet-files-in-object-storage",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,id:"create-parquet-files-in-object-storage",author:"Obed Vega",email:"obed.vega@teradata.com",page_last_update:"2 de agosto de 2022",description:"Teradata Vantage Native Object Storage: lectura y escritura desde/hacia el almacenamiento de objetos, interfaz SQL unificada para Vantage y almacenamiento de objetos.",keywords:["data warehouses","compute storage separation","Teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","parquet","crear archivos parquet"]},sidebar:"tutorialSidebar",previous:{title:"Cargar datos con TPT",permalink:"/pr-preview/pr-157/es/quickstarts/manage-data/run-bulkloads-efficiently-with-teradata-parallel-transporter"},next:{title:"Ejecutar flujos de trabajo de Airflow que utilizan dbt con Teradata Vantage",permalink:"/pr-preview/pr-157/es/quickstarts/manage-data/execute-airflow-workflows-that-use-dbt-with-teradata-vantage"}},l={},u=[{value:"Informaci\xf3n general",id:"informaci\xf3n-general",level:2},{value:"Prerrequisitos",id:"prerrequisitos",level:2},...r.RM,{value:"Crear un archivo Parquet con la funci\xf3n WRITE_NOS",id:"crear-un-archivo-parquet-con-la-funci\xf3n-write_nos",level:2},{value:"Resumen",id:"resumen",level:2},{value:"Lectura adicional",id:"lectura-adicional",level:2},...s.RM];function m(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"crear-archivos-parquet-en-el-almacenamiento-de-objetos",children:"Crear archivos Parquet en el almacenamiento de objetos"}),"\n",(0,t.jsx)(a.h2,{id:"informaci\xf3n-general",children:"Informaci\xf3n general"}),"\n",(0,t.jsx)(a.p,{children:"Native Object Storage (NOS) es una funci\xf3n de Vantage que le permite consultar datos almacenados en archivos como conjuntos de datos en formato CSV, JSON y Parquet.\nEstos conjuntos de datos se encuentran en un almacenamiento de objetos externo compatible con S3, como AWS S3, Google GCS, Azure Blob o implementaciones locales.\nEs \xfatil en escenarios en los que desea explorar datos sin crear una canalizaci\xf3n de datos para incorporarlos a Vantage. Este tutorial demuestra c\xf3mo exportar datos desde Vantage al almacenamiento de objetos utilizando el formato de archivo Parquet."}),"\n",(0,t.jsx)(a.h2,{id:"prerrequisitos",children:"Prerrequisitos"}),"\n",(0,t.jsx)(a.p,{children:"Necesita acceso a una instancia de Teradata Vantage. NOS est\xe1 habilitado en todas las ediciones de Vantage, desde Vantage Express hasta Developer, DYI y Vantage as a Service a partir de la versi\xf3n 17.10."}),"\n",(0,t.jsx)(a.admonition,{type:"important",children:(0,t.jsx)(a.p,{children:"Este tutorial se basa en el almacenamiento de objetos de s3 aws. Necesitar\xe1 su propio dep\xf3sito s3 con permisos de escritura para completar el tutorial."})}),"\n",(0,t.jsx)(r.Ay,{}),"\n",(0,t.jsx)(a.h2,{id:"crear-un-archivo-parquet-con-la-funci\xf3n-write_nos",children:"Crear un archivo Parquet con la funci\xf3n WRITE_NOS"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"WRITE_NOS"})," le permite extraer columnas seleccionadas o todas de una tabla de base de datos o de resultados derivados y escribir en un almacenamiento de objetos externo, como Amazon S3, Azure Blob Storage, Azure Data Lake Storage Gen2 y Google Cloud Storage. Esta funcionalidad almacena datos en formato Parquet."]}),"\n",(0,t.jsxs)(a.p,{children:["Puede encontrar m\xe1s documentaci\xf3n sobre la funcionalidad ",(0,t.jsx)(a.code,{children:"WRITE_NOS"})," en la ",(0,t.jsx)(a.a,{href:"https://docs.teradata.com/r/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide/June-2022/Writing-Data-to-External-Object-Store",children:"documentaci\xf3n de NOS"}),"."]}),"\n",(0,t.jsxs)(a.p,{children:["Necesitar\xe1 acceso a una base de datos donde pueda ejecutar la funci\xf3n ",(0,t.jsx)(a.code,{children:"WRITE_NOS"}),". Si no tiene dicha base de datos, ejecute los siguientes comandos:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"CREATE USER db AS PERM=10e7, PASSWORD=db;\n\n-- Don't forget to give the proper access rights\nGRANT EXECUTE FUNCTION on TD_SYSFNLIB.READ_NOS to db;\nGRANT EXECUTE FUNCTION on TD_SYSFNLIB.WRITE_NOS to db;\n"})}),"\n",(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsxs)(a.p,{children:["Si quiere obtener m\xe1s informaci\xf3n sobre c\xf3mo configurar usuarios y sus privilegios, consulte la ",(0,t.jsx)(a.a,{href:"https://docs.teradata.com/r/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide/June-2022/Setting-Up-Access/Setting-Access-Privileges",children:"documentaci\xf3n de NOS"}),"."]})}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsx)(a.li,{children:"Primero creemos una tabla en su instancia de Teradata Vantage:"}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"CREATE SET TABLE db.parquet_table ,FALLBACK ,\n     NO BEFORE JOURNAL,\n     NO AFTER JOURNAL,\n     CHECKSUM = DEFAULT,\n     DEFAULT MERGEBLOCKRATIO,\n     MAP = TD_MAP1\n     (\n      column1 SMALLINT NOT NULL,\n      column2 DATE FORMAT 'YY/MM/DD' NOT NULL,\n      column3 DECIMAL(10,2))\nPRIMARY INDEX ( column1 );\n"})}),"\n",(0,t.jsxs)(a.ol,{start:"2",children:["\n",(0,t.jsx)(a.li,{children:"Complete su tabla con datos de ejemplo:"}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"INSERT INTO db.parquet_table (1,'2022/01/01',1.1);\nINSERT INTO db.parquet_table (2,'2022/01/02',2.2);\nINSERT INTO db.parquet_table (3,'2022/01/03',3.3);\n"})}),"\n",(0,t.jsx)(a.p,{children:"Su tabla ahora deber\xeda verse as\xed:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"column1   column2       column3\n-------  --------  ------------\n      1  22/01/01          1.10\n      2  22/01/02          2.20\n      3  22/01/03          3.30\n"})}),"\n",(0,t.jsxs)(a.ol,{start:"3",children:["\n",(0,t.jsxs)(a.li,{children:["Cree el archivo parquet con ",(0,t.jsx)(a.code,{children:"WRITE_NOS"}),". No olvide reemplazar ",(0,t.jsx)(a.code,{children:"<BUCKET_NAME>"})," con el nombre de su dep\xf3sito s3. Adem\xe1s, reemplace ",(0,t.jsx)(a.code,{children:"<YOUR-ACCESS-KEY-ID>"})," y ",(0,t.jsx)(a.code,{children:"<YOUR-SECRET-ACCESS-KEY>"})," con su clave de acceso y secreto."]}),"\n"]}),"\n",(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsxs)(a.p,{children:["Consulte los documentos de su proveedor de nube sobre c\xf3mo crear credenciales para acceder al almacenamiento de objetos. Por ejemplo, para AWS consulte ",(0,t.jsx)(a.a,{href:"https://aws.amazon.com/premiumsupport/knowledge-center/create-access-key/",children:"\xbfC\xf3mo creo una clave de acceso de AWS?"})]})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"SELECT * FROM WRITE_NOS (\nON ( SELECT * FROM db.parquet_table)\nUSING\nLOCATION('/s3/<BUCKET_NAME>.s3.amazonaws.com/parquet_file_on_NOS.parquet')\nAUTHORIZATION('{\"ACCESS_ID\":\"<YOUR-ACCESS-KEY-ID>\",\n\"ACCESS_KEY\":\"<YOUR-SECRET-ACCESS-KEY>\"}')\nSTOREDAS('PARQUET')\nMAXOBJECTSIZE('16MB')\nCOMPRESSION('SNAPPY')\nINCLUDE_ORDERING('TRUE')\nINCLUDE_HASHBY('TRUE')\n) as d;\n"})}),"\n",(0,t.jsx)(a.p,{children:"Ahora ha creado un archivo parquet en su dep\xf3sito de almacenamiento de objetos. Ahora, para consultar f\xe1cilmente su archivo, debe seguir el paso n\xfamero 4."}),"\n",(0,t.jsxs)(a.ol,{start:"4",children:["\n",(0,t.jsxs)(a.li,{children:["Cree una tabla externa respaldada por NOS. No olvide reemplazar ",(0,t.jsx)(a.code,{children:"<BUCKET_NAME>"})," con el nombre de su dep\xf3sito s3. Adem\xe1s, reemplace ",(0,t.jsx)(a.code,{children:"<YOUR-ACCESS-KEY-ID>"})," y ",(0,t.jsx)(a.code,{children:"<YOUR-SECRET-ACCESS-KEY>"})," con su clave de acceso y secreto:"]}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:'CREATE MULTISET FOREIGN TABLE db.parquet_table_to_read_file_on_NOS\n, EXTERNAL SECURITY DEFINER TRUSTED CEPH_AUTH,\nMAP = TD_MAP1\n(\n  Location VARCHAR(2048) CHARACTER SET UNICODE CASESPECIFIC\n  , col1 SMALLINT\n  , col2 DATE\n  , col3 DECIMAL(10,2)\n\n)\nUSING (\n    LOCATION (\'/s3/<BUCKET_NAME>.s3.amazonaws.com/parquet_file_on_NOS.parquet\')\n    AUTHORIZATION(\'{"ACCESS_ID":"<YOUR-ACCESS-KEY-ID>",\n    "ACCESS_KEY":"<YOUR-SECRET-ACCESS-KEY>"}\')\n    STOREDAS (\'PARQUET\')\n)NO PRIMARY INDEX;\n'})}),"\n",(0,t.jsxs)(a.ol,{start:"5",children:["\n",(0,t.jsx)(a.li,{children:"Ahora que est\xe1 listo para consultar su archivo parquet en NOS, intentemos la siguiente consulta:"}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"SELECT col1, col2, col3 FROM db.parquet_table_to_read_file_on_NOS;\n"})}),"\n",(0,t.jsx)(a.p,{children:"Los datos devueltos por la consulta deber\xedan verse as\xed:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"  col1      col2          col3\n------  --------  ------------\n     1  22/01/01          1.10\n     2  22/01/02          2.20\n     3  22/01/03          3.30\n"})}),"\n",(0,t.jsx)(a.h2,{id:"resumen",children:"Resumen"}),"\n",(0,t.jsx)(a.p,{children:"En este tutorial, hemos aprendido c\xf3mo exportar datos de Vantage a un archivo parquet en el almacenamiento de objetos utilizando Native Object Storage (NOS). NOS admite la lectura e importaci\xf3n de datos almacenados en formatos CSV, JSON y Parquet. NOS tambi\xe9n puede exportar datos desde Vantage al almacenamiento de objetos."}),"\n",(0,t.jsx)(a.h2,{id:"lectura-adicional",children:"Lectura adicional"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://docs.teradata.com/r/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide/June-2022/Writing-Data-to-External-Object-Store",children:"Teradata Vantage\u2122: escritura de datos en un almac\xe9n de objetos externo"})}),"\n"]}),"\n",(0,t.jsx)(s.Ay,{})]})}function p(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>s,x:()=>i});var t=n(96540);const o={},r=t.createContext(o);function s(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);
"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[733],{77692:(e,a,n)=>{n.d(a,{Ay:()=>i,RM:()=>s});var r=n(74848),t=n(28453);const s=[];function o(e){const a={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,t.R)(),...e.components};return(0,r.jsxs)(a.admonition,{type:"note",children:[(0,r.jsx)(a.mdxAdmonitionTitle,{}),(0,r.jsxs)(a.p,{children:["Si tiene alguna pregunta o necesita m\xe1s ayuda, visite nuestro ",(0,r.jsx)(a.a,{href:"https://support.teradata.com/community",children:"foro de la comunidad"})," donde podr\xe1 obtener ayuda e interactuar con otros miembros de la comunidad."]})]})}function i(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},23961:(e,a,n)=>{n.d(a,{Ay:()=>i,RM:()=>s});var r=n(74848),t=n(28453);const s=[];function o(e){const a={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,t.R)(),...e.components};return(0,r.jsxs)(a.admonition,{type:"note",children:[(0,r.jsx)(a.mdxAdmonitionTitle,{}),(0,r.jsxs)(a.p,{children:["Si necesita una instancia de prueba de Vantage, puede obtener una de forma gratuita en ",(0,r.jsx)(a.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})]})}function i(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},91770:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>h,contentTitle:()=>p,default:()=>b,frontMatter:()=>u,metadata:()=>m,toc:()=>T});var r=n(74848),t=n(28453),s=n(23961),o=n(56240),i=n(19365);function l(e){const a={code:"code",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(o.A,{children:[(0,r.jsxs)(i.A,{value:"Windows",label:"Windows",default:!0,children:[(0,r.jsx)(a.p,{children:"Ejecutar en Powershell:"}),(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"Unzip the downloaded file and run `setup.exe`. \n"})})]}),(0,r.jsx)(i.A,{value:"MacOS",label:"MacOS",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"Unzip the downloaded file and run `TeradataToolsAndUtilitiesXX.XX.XX.pkg`. \n"})})}),(0,r.jsxs)(i.A,{value:"Linux",label:"Linux",children:[(0,r.jsx)(a.p,{children:"Descomprima el archivo descargado, vaya al directorio descomprimido y ejecute:"}),(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"./setup.sh a \n"})})]})]})}function d(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}var c=n(77692);const u={sidebar_position:11,author:"Ad\xe1n Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"6 de abril de 2022",title:"Cargar datos con TPT",description:"Cargue datos en Vantage de manera eficaz utilizando Teradata Parallel Transporter (TPT).",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","Fastload","Teradata Parallel Transporter","TPT"],id:"run-bulkloads-efficiently-with-teradata-parallel-transporter"},p="Ejecutar grandes cargas masivas de manera eficiente con Teradata Parallel Transporter (TPT)",m={id:"manage-data/run-bulkloads-efficiently-with-teradata-parallel-transporter",title:"Cargar datos con TPT",description:"Cargue datos en Vantage de manera eficaz utilizando Teradata Parallel Transporter (TPT).",source:"@site/i18n/es/docusaurus-plugin-content-docs-quickstarts/current/manage-data/run-bulkloads-efficiently-with-teradata-parallel-transporter.md",sourceDirName:"manage-data",slug:"/manage-data/run-bulkloads-efficiently-with-teradata-parallel-transporter",permalink:"/es/quickstarts/manage-data/run-bulkloads-efficiently-with-teradata-parallel-transporter",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,author:"Ad\xe1n Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"6 de abril de 2022",title:"Cargar datos con TPT",description:"Cargue datos en Vantage de manera eficaz utilizando Teradata Parallel Transporter (TPT).",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","Fastload","Teradata Parallel Transporter","TPT"],id:"run-bulkloads-efficiently-with-teradata-parallel-transporter"},sidebar:"tutorialSidebar",previous:{title:"Transformar datos cargados con Airbyte mediante dbt",permalink:"/es/quickstarts/manage-data/transforming-external-data-loaded-via-airbyte-in-teradata-vantage-using-dbt"},next:{title:"Crear archivos Parquet en el almacenamiento de objetos",permalink:"/es/quickstarts/manage-data/create-parquet-files-in-object-storage"}},h={},T=[{value:"Informaci\xf3n general",id:"informaci\xf3n-general",level:2},{value:"Prerrequisitos",id:"prerrequisitos",level:2},...s.RM,{value:"Instalar TTU",id:"instalar-ttu",level:2},{value:"Obtener datos de muestra",id:"obtener-datos-de-muestra",level:2},{value:"Crear una base de datos",id:"crear-una-base-de-datos",level:2},{value:"Ejecutar TPT",id:"ejecutar-tpt",level:2},{value:"<code>TPT</code> vs. NOS",id:"tpt-vs-nos",level:2},{value:"Resumen",id:"resumen",level:2},{value:"Lectura adicional",id:"lectura-adicional",level:2},...c.RM];function g(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"ejecutar-grandes-cargas-masivas-de-manera-eficiente-con-teradata-parallel-transporter-tpt",children:"Ejecutar grandes cargas masivas de manera eficiente con Teradata Parallel Transporter (TPT)"}),"\n",(0,r.jsx)(a.h2,{id:"informaci\xf3n-general",children:"Informaci\xf3n general"}),"\n",(0,r.jsxs)(a.p,{children:["A menudo tenemos la necesidad de mover grandes vol\xfamenes de datos a Vantage. Teradata ofrece la utilidad ",(0,r.jsx)(a.code,{children:"Teradata Parallel Transporter (TPT)"}),", que puede cargar de manera eficiente grandes cantidades de datos en Teradata Vantage. Este tutorial demuestra c\xf3mo usar ",(0,r.jsx)(a.code,{children:"TPT"}),". En este escenario, cargaremos m\xe1s de 300.000 registros, m\xe1s de 40\xa0MB de datos, en un par de segundos."]}),"\n",(0,r.jsx)(a.h2,{id:"prerrequisitos",children:"Prerrequisitos"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Acceso a una instancia de Teradata Vantage."}),"\n",(0,r.jsx)(s.Ay,{}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["Descargue Teradata Tools and Utilities (TTU) - Plataformas compatibles: ",(0,r.jsx)(a.a,{href:"https://downloads.teradata.com/download/tools/teradata-tools-and-utilities-windows-installation-package",children:"Windows"}),", ",(0,r.jsx)(a.a,{href:"https://downloads.teradata.com/download/tools/teradata-tools-and-utilities-mac-osx-installation-package",children:"MacOS"}),", ",(0,r.jsx)(a.a,{href:"https://downloads.teradata.com/download/tools/teradata-tools-and-utilities-linux-installation-package-0",children:"Linux"})," (requiere registro)."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"instalar-ttu",children:"Instalar TTU"}),"\n",(0,r.jsx)(d,{}),"\n",(0,r.jsx)(a.h2,{id:"obtener-datos-de-muestra",children:"Obtener datos de muestra"}),"\n",(0,r.jsxs)(a.p,{children:["Trabajaremos con las declaraciones de impuestos de EE.\xa0UU. para organizaciones sin fines de lucro. Las declaraciones de impuestos de organizaciones sin fines de lucro son datos p\xfablicos. El Servicio de Impuestos Internos de EE.\xa0UU. los publica en el dep\xf3sito S3. Veamos un resumen de las presentaciones de 2020: ",(0,r.jsx)(a.code,{children:"https://storage.googleapis.com/clearscape_analytics_demo_data/TPT/index_2020.csv"}),". Puede utilizar su navegador, ",(0,r.jsx)(a.code,{children:"wget"})," o ",(0,r.jsx)(a.code,{children:"curl"})," para guardar el archivo localmente."]}),"\n",(0,r.jsx)(a.h2,{id:"crear-una-base-de-datos",children:"Crear una base de datos"}),"\n",(0,r.jsx)(a.p,{children:"Creemos una base de datos en Vantage. Utilice su herramienta SQL favorita para ejecutar la siguiente consulta:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-sql",children:"CREATE DATABASE irs\nAS PERMANENT = 120e6, -- 120MB\n    SPOOL = 120e6; -- 120MB\n"})}),"\n",(0,r.jsx)(a.h2,{id:"ejecutar-tpt",children:"Ejecutar TPT"}),"\n",(0,r.jsxs)(a.p,{children:["Ahora ejecutaremos ",(0,r.jsx)(a.code,{children:"TPT"}),". ",(0,r.jsx)(a.code,{children:"TPT"})," es una herramienta de l\xednea de comandos que se puede utilizar para cargar, extraer y actualizar datos en Teradata Vantage. Estas diversas funciones se implementan en los llamados ",(0,r.jsx)(a.code,{children:"operators"}),". Por ejemplo, la carga de datos en Vantage la maneja el operador ",(0,r.jsx)(a.code,{children:"Load"}),". El operador ",(0,r.jsx)(a.code,{children:"Load"})," es muy eficiente a la hora de cargar grandes cantidades de datos en Vantage. El operador ",(0,r.jsx)(a.code,{children:"Load"}),", para ser r\xe1pido, tiene varias restricciones. Solo puede llenar tablas vac\xedas. No se admiten inserciones en tablas ya completadas. No admite tablas con \xedndices secundarios. Adem\xe1s, no insertar\xe1 registros duplicados, incluso si una tabla es una tabla ",(0,r.jsx)(a.code,{children:"MULTISET"}),". Para obtener la lista completa de restricciones, consulte ",(0,r.jsx)(a.a,{href:"https://docs.teradata.com/r/Teradata-Parallel-Transporter-Reference/February-2022/Load-Operator/Usage-Notes/Normalized-Tables/Restrictions-and-Limitations",children:"Referencia de Teradata\xae TPT - Operador de carga - Restricciones y limitaciones"}),"."]}),"\n",(0,r.jsx)(a.p,{children:"TPT tiene su propio lenguaje de programaci\xf3n. El lenguaje le permite preparar la base de datos con comandos SQL arbitrarios, declarar la fuente de entrada y definir c\xf3mo se deben insertar los datos en Vantage."}),"\n",(0,r.jsx)(a.p,{children:"Para cargar los datos csv en Vantage, definiremos y ejecutaremos un trabajo. El trabajo preparar\xe1 la base de datos. Eliminar\xe1 las tablas de registro y errores antiguas y crear\xe1 la tabla de destino. Luego leer\xe1 el archivo e insertar\xe1 los datos en la base de datos."}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["Cree un archivo de variable de trabajo que le indique a TPT c\xf3mo conectarse a nuestra base de datos Vantage. Cree el archivo ",(0,r.jsx)(a.code,{children:"jobvars.txt"})," e inserte el siguiente contenido. Reemplace ",(0,r.jsx)(a.code,{children:"host"})," con el nombre de host de su base de datos. Por ejemplo, si est\xe1 utilizando una instancia local de Vantage Express, utilice ",(0,r.jsx)(a.code,{children:"127.0.0.1"}),". ",(0,r.jsx)(a.code,{children:"username"})," con el nombre de usuario de la base de datos y ",(0,r.jsx)(a.code,{children:"password"})," con la contrase\xf1a de la base de datos. Tenga en cuenta que el paso de preparaci\xf3n (DDL) y el paso de carga tienen sus propios valores de configuraci\xf3n y que los valores de configuraci\xf3n deben introducirse dos veces para configurar tanto el DDL como el paso de carga."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",metastring:', id="tpt_first_config", role="emits-gtm-events"',children:"TargetTdpId           = 'host'\nTargetUserName        = 'username'\nTargetUserPassword    = 'password'\n\nFileReaderDirectoryPath = ''\nFileReaderFileName      = 'index_2020.csv'\nFileReaderFormat        = 'Delimited'\nFileReaderOpenMode      = 'Read'\nFileReaderTextDelimiter = ','\nFileReaderSkipRows      = 1\n\nDDLErrorList = '3807'\n\nLoadLogTable    = 'irs.irs_returns_lg'\nLoadErrorTable1 = 'irs.irs_returns_et'\nLoadErrorTable2 = 'irs.irs_returns_uv'\nLoadTargetTable = 'irs.irs_returns'\n"})}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["Cree un archivo con el siguiente contenido y gu\xe1rdelo como ",(0,r.jsx)(a.code,{children:"load.txt"}),". Consulte los comentarios dentro del archivo de trabajo para comprender su estructura."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"DEFINE JOB file_load\nDESCRIPTION 'Load a Teradata table from a file'\n(\n  /*\n    Define the schema of the data in the csv file\n  */\n  DEFINE SCHEMA SCHEMA_IRS\n    (\n      in_return_id     VARCHAR(19),\n      in_filing_type   VARCHAR(5),\n      in_ein           VARCHAR(19),\n      in_tax_period    VARCHAR(19),\n      in_sub_date      VARCHAR(22),\n      in_taxpayer_name VARCHAR(100),\n      in_return_type   VARCHAR(5),\n      in_dln           VARCHAR(19),\n      in_object_id     VARCHAR(19)\n    );\n\n  /*\n    In the first step, we are sending statements to remove old tables\n    and create a new one.\n    This step replies on configuration stored in `od_IRS` operator\n  */\n  STEP st_Setup_Tables\n  (\n    APPLY\n      ('DROP TABLE ' || @LoadLogTable || ';'),\n      ('DROP TABLE ' || @LoadErrorTable1 || ';'),\n      ('DROP TABLE ' || @LoadErrorTable2 || ';'),\n      ('DROP TABLE ' || @LoadTargetTable || ';'),\n      ('CREATE TABLE ' || @LoadTargetTable || ' (\n          return_id INT,\n          filing_type VARCHAR(5) CHARACTER SET LATIN NOT CASESPECIFIC,\n          ein INT,\n          tax_period INT,\n          sub_date VARCHAR(100) CHARACTER SET LATIN NOT CASESPECIFIC,\n          taxpayer_name VARCHAR(100) CHARACTER SET LATIN NOT CASESPECIFIC,\n          return_type VARCHAR(5) CHARACTER SET LATIN NOT CASESPECIFIC,\n          dln BIGINT,\n          object_id BIGINT\n        )\n        PRIMARY INDEX ( return_id );')\n    TO OPERATOR ($DDL);\n  );\n\n  /*\n    Finally, in this step we read the data from the file operator\n    and send it to the load operator.\n  */\n  STEP st_Load_File\n  (\n    APPLY\n      ('INSERT INTO ' || @LoadTargetTable || ' (\n          return_id,\n          filing_type,\n          ein,\n          tax_period,\n          sub_date,\n          taxpayer_name,\n          return_type,\n          dln,\n          object_id\n      ) VALUES (\n          :in_return_id,\n          :in_filing_type,\n          :in_ein,\n          :in_tax_period,\n          :in_sub_date,\n          :in_taxpayer_name,\n          :in_return_type,\n          :in_dln,\n          :in_object_id\n      );')\n    TO OPERATOR ($LOAD)\n    SELECT * FROM OPERATOR($FILE_READER(SCHEMA_IRS));\n  );\n);\n"})}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Ejecute el trabajo:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"tbuild -f load.txt -v jobvars.txt -j file_load\n"})}),"\n",(0,r.jsx)(a.p,{children:"Una ejecuci\xf3n exitosa devolver\xe1 registros similares a este:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"Teradata Parallel Transporter Version 17.10.00.10 64-Bit\nThe global configuration file '/opt/teradata/client/17.10/tbuild/twbcfg.ini' is used.\n  Log Directory: /opt/teradata/client/17.10/tbuild/logs\n  Checkpoint Directory: /opt/teradata/client/17.10/tbuild/checkpoint\n\nJob log: /opt/teradata/client/17.10/tbuild/logs/file_load-4.out\nJob id is file_load-4, running on osboxes\nTeradata Parallel Transporter SQL DDL Operator Version 17.10.00.10\nod_IRS: private log not specified\nod_IRS: connecting sessions\nod_IRS: sending SQL requests\nod_IRS: TPT10508: RDBMS error 3807: Object 'irs_returns_lg' does not exist.\nod_IRS: TPT18046: Error is ignored as requested in ErrorList\nod_IRS: TPT10508: RDBMS error 3807: Object 'irs_returns_et' does not exist.\nod_IRS: TPT18046: Error is ignored as requested in ErrorList\nod_IRS: TPT10508: RDBMS error 3807: Object 'irs_returns_uv' does not exist.\nod_IRS: TPT18046: Error is ignored as requested in ErrorList\nod_IRS: disconnecting sessions\nod_IRS: Total processor time used = '0.013471 Second(s)'\nod_IRS: Start : Thu Apr  7 20:56:32 2022\nod_IRS: End   : Thu Apr  7 20:56:32 2022\nJob step st_Setup_Tables completed successfully\nTeradata Parallel Transporter Load Operator Version 17.10.00.10\nol_IRS: private log not specified\nTeradata Parallel Transporter DataConnector Operator Version 17.10.00.10\nop_IRS[1]: Instance 1 directing private log report to 'dtacop-root-368731-1'.\nop_IRS[1]: DataConnector Producer operator Instances: 1\nop_IRS[1]: ECI operator ID: 'op_IRS-368731'\nop_IRS[1]: Operator instance 1 processing file 'index_2020.csv'.\nol_IRS: connecting sessions\nol_IRS: preparing target table\nol_IRS: entering Acquisition Phase\nol_IRS: entering Application Phase\nol_IRS: Statistics for Target Table:  'irs.irs_returns'\nol_IRS: Total Rows Sent To RDBMS:      333722\nol_IRS: Total Rows Applied:            333722\nol_IRS: Total Rows in Error Table 1:   0\nol_IRS: Total Rows in Error Table 2:   0\nol_IRS: Total Duplicate Rows:          0\nop_IRS[1]: Total files processed: 1.\nol_IRS: disconnecting sessions\nJob step st_Load_File completed successfully\nJob file_load completed successfully\nol_IRS: Performance metrics:\nol_IRS:     MB/sec in Acquisition phase: 9.225\nol_IRS:     Elapsed time from start to Acquisition phase:   2 second(s)\nol_IRS:     Elapsed time in Acquisition phase:   5 second(s)\nol_IRS:     Elapsed time in Application phase:   3 second(s)\nol_IRS:     Elapsed time from Application phase to end: < 1 second\nol_IRS: Total processor time used = '0.254337 Second(s)'\nol_IRS: Start : Thu Apr  7 20:56:32 2022\nol_IRS: End   : Thu Apr  7 20:56:42 2022\nJob start: Thu Apr  7 20:56:32 2022\nJob end:   Thu Apr  7 20:56:42 2022\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(a.h2,{id:"tpt-vs-nos",children:[(0,r.jsx)(a.code,{children:"TPT"})," vs. NOS"]}),"\n",(0,r.jsx)(a.p,{children:"En nuestro caso, el archivo est\xe1 en un dep\xf3sito S3. Eso significa que podemos usar Native Object Storage (NOS) para ingerir los datos:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-sql",children:"-- create an S3-backed foreign table\nCREATE FOREIGN TABLE irs_returns_nos\n    USING ( LOCATION('/s3/s3.amazonaws.com/irs-form-990/index_2020.csv') );\n\n-- load the data into a native table\nCREATE MULTISET TABLE irs_returns_nos_native\n    (RETURN_ID, FILING_TYPE, EIN, TAX_PERIOD, SUB_DATE, TAXPAYER_NAME)\nAS (\n    SELECT RETURN_ID, FILING_TYPE, EIN, TAX_PERIOD, SUB_DATE, TAXPAYER_NAME FROM irs_returns_nos\n) WITH DATA\nNO PRIMARY INDEX;\n"})}),"\n",(0,r.jsx)(a.p,{children:"La soluci\xf3n NOS es pr\xe1ctica porque no depende de herramientas adicionales. Se puede implementar usando solo SQL. Funciona bien, especialmente para implementaciones Vantage con una gran cantidad de AMP, ya que las tareas NOS se delegan a AMP y se ejecutan en paralelo. Adem\xe1s, dividir los datos del almacenamiento de objetos en varios archivos puede mejorar a\xfan m\xe1s el rendimiento."}),"\n",(0,r.jsx)(a.h2,{id:"resumen",children:"Resumen"}),"\n",(0,r.jsxs)(a.p,{children:["Este tutorial demostr\xf3 c\xf3mo incorporar grandes cantidades de datos en Vantage. Cargamos cientos de miles de registros en Vantage en un par de segundos usando ",(0,r.jsx)(a.code,{children:"TPT"}),"."]}),"\n",(0,r.jsx)(a.h2,{id:"lectura-adicional",children:"Lectura adicional"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"https://docs.teradata.com/r/Teradata-Parallel-Transporter-User-Guide/February-2022",children:"Gu\xeda del usuario de Teradata\xae TPT"})}),"\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"https://docs.teradata.com/r/Teradata-Parallel-Transporter-Reference/February-2022",children:"Referencia de Teradata\xae TPT"})}),"\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"/es/quickstarts/manage-data/nos",children:"Consultar datos almacenados en el almacenamiento de objetos"})}),"\n"]}),"\n","\n",(0,r.jsx)(c.Ay,{})]})}function b(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},19365:(e,a,n)=>{n.d(a,{A:()=>o});n(96540);var r=n(34164);const t={tabItem:"tabItem_Ymn6"};var s=n(74848);function o(e){var a=e.children,n=e.hidden,o=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(t.tabItem,o),hidden:n,children:a})}},56240:(e,a,n)=>{n.d(a,{A:()=>x});var r=n(96540),t=n(34164),s=n(23104),o=n(56347),i=n(205),l=n(57485);var d=n(89466);function c(e){var a,n;return null!=(a=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((a=e.props)&&"object"==typeof a&&"value"in a))return e;var a;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?a:[]}function u(e){var a=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=a?a:function(e){return c(e).map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes,default:a.default}}))}(n);return function(e){var a,n,r=(void 0===(n=function(e,a){return e.value===a.value})&&(n=function(e,a){return e===a}),(a=e).filter((function(e,r){return a.findIndex((function(a){return n(a,e)}))!==r})));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[a,n])}function p(e){var a=e.value;return e.tabValues.some((function(e){return e.value===a}))}function m(e){var a=e.queryString,n=void 0!==a&&a,t=e.groupId,s=(0,o.W6)(),i=function(e){var a=e.queryString,n=void 0!==a&&a,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,r.useCallback)((function(e){if(i){var a=new URLSearchParams(s.location.search);a.set(i,e),s.replace(Object.assign({},s.location,{search:a.toString()}))}}),[i,s])]}function h(e){var a,n,t,s,o=e.defaultValue,l=e.queryString,c=void 0!==l&&l,h=e.groupId,T=u(e),g=(0,r.useState)((function(){return function(e){var a,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var t=null!=(a=r.find((function(e){return e.default})))?a:r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:o,tabValues:T})})),b=g[0],f=g[1],_=m({queryString:c,groupId:h}),j=_[0],x=_[1],v=(a=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),n=(0,d.Dv)(a),t=n[0],s=n[1],[t,(0,r.useCallback)((function(e){a&&s.set(e)}),[a,s])]),R=v[0],A=v[1],E=function(){var e=null!=j?j:R;return p({value:e,tabValues:T})?e:null}();return(0,i.A)((function(){E&&f(E)}),[E]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:T}))throw new Error("Can't select invalid tab value="+e);f(e),x(e),A(e)}),[x,A,T]),tabValues:T}}var T=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function f(e){var a=e.className,n=e.block,r=e.selectedValue,o=e.selectValue,i=e.tabValues,l=[],d=(0,s.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var a=e.currentTarget,n=l.indexOf(a),t=i[n].value;t!==r&&(d(a),o(t))},u=function(e){var a,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,t=l.indexOf(e.currentTarget)+1;n=null!=(r=l[t])?r:l[0];break;case"ArrowLeft":var s,o=l.indexOf(e.currentTarget)-1;n=null!=(s=l[o])?s:l[l.length-1]}null==(a=n)||a.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":n},a),children:i.map((function(e){var a=e.value,n=e.label,s=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:r===a?0:-1,"aria-selected":r===a,ref:function(e){return l.push(e)},onKeyDown:u,onClick:c},s,{className:(0,t.A)("tabs__item",g.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===a}),children:null!=n?n:a}),a)}))})}function _(e){var a=e.lazy,n=e.children,t=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){var o=s.find((function(e){return e.props.value===t}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==t})}))})}function j(e){var a=h(e);return(0,b.jsxs)("div",{className:(0,t.A)("tabs-container",g.tabList),children:[(0,b.jsx)(f,Object.assign({},e,a)),(0,b.jsx)(_,Object.assign({},e,a))]})}function x(e){var a=(0,T.A)();return(0,b.jsx)(j,Object.assign({},e,{children:c(e.children)}),String(a))}},28453:(e,a,n)=>{n.d(a,{R:()=>o,x:()=>i});var r=n(96540);const t={},s=r.createContext(t);function o(e){const a=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:a},e.children)}}}]);
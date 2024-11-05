"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[3326],{23961:(e,a,n)=>{n.d(a,{Ay:()=>d,RM:()=>r});var t=n(74848),s=n(28453);const r=[];function i(e){const a={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,s.R)(),...e.components};return(0,t.jsxs)(a.admonition,{type:"note",children:[(0,t.jsx)(a.mdxAdmonitionTitle,{}),(0,t.jsxs)(a.p,{children:["Si necesita una instancia de prueba de Vantage, puede obtener una de forma gratuita en ",(0,t.jsx)(a.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})]})}function d(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},58838:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=n(74848),s=n(28453),r=n(23961);const i={sidebar_position:7,author:"Ravi Chillanki",email:"ravi.chillanki@teradata.com",page_last_update:"4 de agosto de 2023",description:"Integraci\xf3n de dbt y Feast con Teradata",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","AI/ML","AI","ML","feature engineering","feature store","FEAST"]},d="Utilizar dbt y FEAST para crear un almac\xe9n de funciones en Teradata Vantage",o={id:"manage-data/getting-started-dbt-feast-teradata-pipeline",title:"Utilizar dbt y FEAST para crear un almac\xe9n de funciones en Teradata Vantage",description:"Integraci\xf3n de dbt y Feast con Teradata",source:"@site/i18n/es/docusaurus-plugin-content-docs-quickstarts/current/manage-data/getting-started-dbt-feast-teradata-pipeline.md",sourceDirName:"manage-data",slug:"/manage-data/getting-started-dbt-feast-teradata-pipeline",permalink:"/pr-preview/pr-157/es/quickstarts/manage-data/getting-started-dbt-feast-teradata-pipeline",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,author:"Ravi Chillanki",email:"ravi.chillanki@teradata.com",page_last_update:"4 de agosto de 2023",description:"Integraci\xf3n de dbt y Feast con Teradata",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","AI/ML","AI","ML","feature engineering","feature store","FEAST"]},sidebar:"tutorialSidebar",previous:{title:"Crear un almac\xe9n de funciones FEAST en Teradata Vantage",permalink:"/pr-preview/pr-157/es/quickstarts/manage-data/using-feast-feature-store-with-teradata-vantage"},next:{title:"Utilizar Airbyte para cargar datos de fuentes externas en Teradata Vantage",permalink:"/pr-preview/pr-157/es/quickstarts/manage-data/use-airbyte-to-load-data-from-external-sources-to-teradata-vantage"}},c={},l=[{value:"Informaci\xf3n general",id:"informaci\xf3n-general",level:2},{value:"Introducci\xf3n",id:"introducci\xf3n",level:2},{value:"dbt",id:"dbt",level:3},{value:"Feast",id:"feast",level:3},{value:"Prerrequisitos",id:"prerrequisitos",level:2},...r.RM,{value:"Objetivo",id:"objetivo",level:2},{value:"Primeros pasos",id:"primeros-pasos",level:2},{value:"Sobre el almac\xe9n bancario",id:"sobre-el-almac\xe9n-bancario",level:2},{value:"Configurar dbt",id:"configurar-dbt",level:2},{value:"Configurar FEAST",id:"configurar-feast",level:2},{value:"Configuraci\xf3n de tienda sin conexi\xf3n",id:"configuraci\xf3n-de-tienda-sin-conexi\xf3n",level:3},{value:"Sintaxis para el Registro SQL de Teradata",id:"sintaxis-para-el-registro-sql-de-teradata",level:3},{value:"Ejecutar dbt",id:"ejecutar-dbt",level:2},{value:"Crear el modelo dimensional",id:"crear-el-modelo-dimensional",level:3},{value:"Ejecutar FEAST",id:"ejecutar-feast",level:2},{value:"Definici\xf3n del repositorio de funciones",id:"definici\xf3n-del-repositorio-de-funciones",level:3},{value:"Generar datos de entrenamiento",id:"generar-datos-de-entrenamiento",level:3},{value:"Resumen",id:"resumen",level:2},{value:"Lectura adicional",id:"lectura-adicional",level:2}];function u(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"utilizar-dbt-y-feast-para-crear-un-almac\xe9n-de-funciones-en-teradata-vantage",children:"Utilizar dbt y FEAST para crear un almac\xe9n de funciones en Teradata Vantage"}),"\n",(0,t.jsx)(a.h2,{id:"informaci\xf3n-general",children:"Informaci\xf3n general"}),"\n",(0,t.jsxs)(a.p,{children:['Este tutorial muestra un enfoque para crear una canalizaci\xf3n dbt que toma datos sin procesar y los convierte en funciones FEAST. La canalizaci\xf3n aprovecha las "',(0,t.jsx)(a.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Teradata-VantageTM-Analytics-Database-Analytic-Functions-17.20",children:"funciones de ClearScape Analytics"}),'" para transformaciones de datos. El resultado de las transformaciones se carga en FEAST para materializar caracter\xedsticas que se pueden usar en modelos de ML.']}),"\n",(0,t.jsx)(a.h2,{id:"introducci\xf3n",children:"Introducci\xf3n"}),"\n",(0,t.jsx)(a.h3,{id:"dbt",children:"dbt"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"https://www.getdbt.com/product/what-is-dbt",children:"dbt"})," (Data Build Tool) es una herramienta de transformaci\xf3n de datos que es la piedra angular de las pilas de datos modernas. Se encarga de la T en ELT (Extract Load Transform). Se supone que alg\xfan otro proceso trae datos sin procesar a su almac\xe9n o lago de datos. Luego, estos datos deben transformarse."]}),"\n",(0,t.jsx)(a.h3,{id:"feast",children:"Feast"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"https://docs.feast.dev",children:"Feast"})," (Feature Store) es un sistema de datos flexible que utiliza tecnolog\xeda existente para administrar y proporcionar funciones de aprendizaje autom\xe1tico a modelos en tiempo real. Permite la personalizaci\xf3n para satisfacer necesidades espec\xedficas. Tambi\xe9n nos permite hacer que las funciones est\xe9n disponibles de manera coherente para entrenamiento y servicio, evitar la fuga de datos y desacoplar el aprendizaje autom\xe1tico de la infraestructura de datos."]}),"\n",(0,t.jsx)(a.h2,{id:"prerrequisitos",children:"Prerrequisitos"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Acceso a una instancia de base de datos de Teradata Vantage."}),"\n",(0,t.jsx)(r.Ay,{}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Feast-Teradata instalado localmente. Consulte las ",(0,t.jsx)(a.a,{href:"/pr-preview/pr-157/es/quickstarts/manage-data/using-feast-feature-store-with-teradata-vantage",children:"Instrucciones de instalaci\xf3n de Feast-Teradata"})]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["dbt instalado localmente. Consulte las ",(0,t.jsx)(a.a,{href:"/pr-preview/pr-157/es/quickstarts/manage-data/dbt",children:"Instrucciones de instalaci\xf3n de dbt"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"objetivo",children:"Objetivo"}),"\n",(0,t.jsx)(a.p,{children:"El objetivo es crear una canalizaci\xf3n de datos con Teradata Vantage como fuente y realizar la transformaci\xf3n de datos en algunas variables en dbt. La principal transformaci\xf3n de datos que hacemos en dbt es la codificaci\xf3n one-hot de varias columnas como g\xe9nero, estado civil, c\xf3digo de estado, etc. Adem\xe1s de eso, los datos de la columna del tipo de cuenta se transformar\xe1n realizando operaciones de agregaci\xf3n en un par de columnas. Todo esto en conjunto genera el conjunto de datos deseado con datos transformados. El conjunto de datos transformado se utiliza como entrada en FEAST para almacenar caracter\xedsticas. Luego, las funciones se utilizan para generar un conjunto de datos de entrenamiento para modelos."}),"\n",(0,t.jsx)(a.h2,{id:"primeros-pasos",children:"Primeros pasos"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Cree un nuevo entorno Python para administrar dbt, feast y sus dependencias. Active el entorno:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"python3 -m venv env\nsource env/bin/activate\n"})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Clone el repositorio del tutorial y cambie el directorio al directorio del proyecto:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"git clone https://github.com/Teradata/tdata-pipeline.git\n"})}),"\n",(0,t.jsx)(a.p,{children:"La estructura de directorios del proyecto clonado se ve as\xed:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"tdata-pipeline/\n    feature_repo/\n        feature_views.py\n        feature_store.yml\n    dbt_transformation/\n        ...\n        macros\n        models\n        ...\n    generate_training_data.py\n    CreateDB.sql\n    dbt_project.yml\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"sobre-el-almac\xe9n-bancario",children:"Sobre el almac\xe9n bancario"}),"\n",(0,t.jsx)(a.p,{children:"teddy_bank es un conjunto de datos ficticio de clientes bancarios, que consta principalmente de 3 tablas de clientes, cuentas y\ntransacciones, con el siguiente diagrama entidad-relaci\xf3n:"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"dbt feast",src:n(31619).A+"",width:"1223",height:"605"})}),"\n",(0,t.jsx)(a.p,{children:"dbt toma estos datos sin procesar y construye el siguiente modelo, que es m\xe1s adecuado para herramientas de an\xe1lisis y modelado de ML:"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"dbt feast",src:n(2926).A+"",width:"769",height:"689"})}),"\n",(0,t.jsx)(a.h2,{id:"configurar-dbt",children:"Configurar dbt"}),"\n",(0,t.jsxs)(a.p,{children:["Cree el archivo ",(0,t.jsx)(a.code,{children:"$HOME/.dbt/profiles.yml"})," con el siguiente contenido. Ajuste los archivos ",(0,t.jsx)(a.code,{children:"<host>"}),", ",(0,t.jsx)(a.code,{children:"<user>"})," y ",(0,t.jsx)(a.code,{children:"<password>"})," para que coincidan con su instancia de Teradata."]}),"\n",(0,t.jsxs)(a.admonition,{type:"note",children:[(0,t.jsx)(a.mdxAdmonitionTitle,{children:(0,t.jsx)(a.strong,{children:"Configuraci\xf3n de la base de datos"})}),(0,t.jsxs)(a.p,{children:["El siguiente perfil dbt apunta a una base de datos llamada ",(0,t.jsx)(a.code,{children:"teddy_bank"}),". Puede cambiar el valor ",(0,t.jsx)(a.code,{children:"schema"})," para que apunte a una base de datos existente en su instancia de Teradata Vantage:"]})]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-yaml",metastring:', id="dbt_first_config", role="emits-gtm-events"',children:"dbt_transformation:\n  target: dev\n  outputs:\n    dev:\n      type: teradata\n      host: <host>\n      user: <user>\n      password: <password>\n      schema: teddy_bank\n      tmode: ANSI\n"})}),"\n",(0,t.jsx)(a.p,{children:"Validar la configuraci\xf3n:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"dbt debug\n"})}),"\n",(0,t.jsxs)(a.p,{children:["Si el comando de depuraci\xf3n devolvi\xf3 errores, es probable que tenga un problema con el contenido de ",(0,t.jsx)(a.code,{children:"profiles.yml"}),"."]}),"\n",(0,t.jsx)(a.h2,{id:"configurar-feast",children:"Configurar FEAST"}),"\n",(0,t.jsxs)(a.p,{children:["La configuraci\xf3n de Feast aborda la conexi\xf3n a su base de datos Vantage. El archivo yaml creado al inicializar el proyecto de feast\n, ",(0,t.jsx)(a.code,{children:"$HOME/.feast/feature_repo/feature_store.yml"})," puede contener los detalles de almacenamiento fuera de l\xednea, almacenamiento en l\xednea, proveedor\ny registro. Ajuste ",(0,t.jsx)(a.code,{children:"<host>"}),", ",(0,t.jsx)(a.code,{children:"<user>"}),", ",(0,t.jsx)(a.code,{children:"<password>"})," para que coincida con su instancia de Teradata."]}),"\n",(0,t.jsxs)(a.admonition,{type:"note",children:[(0,t.jsx)(a.mdxAdmonitionTitle,{children:(0,t.jsx)(a.strong,{children:"Configuraci\xf3n de la base de datos"})}),(0,t.jsxs)(a.p,{children:["El siguiente perfil dbt apunta a una base de datos llamada ",(0,t.jsx)(a.code,{children:"teddy_bank"}),". Puede cambiar el valor ",(0,t.jsx)(a.code,{children:"schema"})," para que apunte a una\nbase de datos existente en su instancia de Teradata Vantage"]})]}),"\n",(0,t.jsx)(a.h3,{id:"configuraci\xf3n-de-tienda-sin-conexi\xf3n",children:"Configuraci\xf3n de tienda sin conexi\xf3n"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-yaml",metastring:', id="feast_first_config", role="emits-gtm-events"',children:"project: td_pipeline\nregistry:\n    registry_type: sql\n    path: teradatasql://<user>:<password>@<hostIP>/?database=teddy_bank&LOGMECH=TDNEGO\nprovider: local\noffline_store:\n    type: feast_teradata.offline.teradata.TeradataOfflineStore\n    host: <host>\n    database: teddy_bank\n    user: <user>\n    password: <password>\n    log_mech: TDNEGO\nentity_key_serialization_version: 2\n"})}),"\n",(0,t.jsx)(a.h3,{id:"sintaxis-para-el-registro-sql-de-teradata",children:"Sintaxis para el Registro SQL de Teradata"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"path = 'teradatasql://'+ teradata_user +':' + teradata_password + '@'+host + '/?database=' +\n        teradata_database + '&LOGMECH=' + teradata_log_mech\n"})}),"\n",(0,t.jsx)(a.h2,{id:"ejecutar-dbt",children:"Ejecutar dbt"}),"\n",(0,t.jsxs)(a.p,{children:["En este paso, completaremos las siguientes tablas de datos: ",(0,t.jsx)(a.code,{children:"customers"}),", ",(0,t.jsx)(a.code,{children:"accounts"}),", y ",(0,t.jsx)(a.code,{children:"transactions"}),"."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"dbt seed\n"})}),"\n",(0,t.jsx)(a.h3,{id:"crear-el-modelo-dimensional",children:"Crear el modelo dimensional"}),"\n",(0,t.jsx)(a.p,{children:"Ahora que tenemos las tablas de datos sin procesar, podemos instruir a dbt para que cree el modelo dimensional:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"dbt run --select Analytic_Dataset\n"})}),"\n",(0,t.jsx)(a.h2,{id:"ejecutar-feast",children:"Ejecutar FEAST"}),"\n",(0,t.jsx)(a.h3,{id:"definici\xf3n-del-repositorio-de-funciones",children:"Definici\xf3n del repositorio de funciones"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"TeradataSource:"})," Fuente de datos para funciones almacenadas en Teradata (Enterprise o Lake) o accesibles a trav\xe9s de una tabla externa desde Teradata (NOS, QueryGrid)"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"Entity:"})," Una colecci\xf3n de caracter\xedsticas relacionadas sem\xe1nticamente."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"Feature View:"})," Una vista de caracter\xedsticas es un grupo de datos de caracter\xedsticas de una fuente de datos espec\xedfica. Las vistas de caracter\xedsticas le permiten definir de forma coherente caracter\xedsticas y sus fuentes de datos, lo que permite la reutilizaci\xf3n de grupos de caracter\xedsticas en un proyecto."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'DBT_source = TeradataSource( database=dbload, table=f"Analytic_Dataset", timestamp_field="event_timestamp")\n\ncustomer = Entity(name = "customer", join_keys = [\'cust_id\'])\n\nads_fv = FeatureView(name="ads_fv",entities=[customer],source=DBT_source, schema=[\n        Field(name="age", dtype=Float32),\n        Field(name="income", dtype=Float32),\n        Field(name="q1_trans_cnt", dtype=Int64),\n        Field(name="q2_trans_cnt", dtype=Int64),\n        Field(name="q3_trans_cnt", dtype=Int64),\n        Field(name="q4_trans_cnt", dtype=Int64),\n    ],)\n'})}),"\n",(0,t.jsx)(a.h3,{id:"generar-datos-de-entrenamiento",children:"Generar datos de entrenamiento"}),"\n",(0,t.jsx)(a.p,{children:"El enfoque para generar datos de entrenamiento puede variar. Dependiendo de los requisitos, 'entitydf' se puede unir a las tablas de datos de origen mediante la asignaci\xf3n de vistas de caracter\xedsticas. A continuaci\xf3n se muestra una funci\xf3n de ejemplo que genera un conjunto de datos de entrenamiento."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'def get_Training_Data():\n    # Initialize a FeatureStore with our current repository\'s configurations\n    store = FeatureStore(repo_path="feature_repo")\n    con = create_context(host = os.environ["latest_vm"], username = os.environ["dbc_pwd"],\n            password = os.environ["dbc_pwd"], database = "EFS")\n    entitydf = DataFrame(\'Analytic_Dataset\').to_pandas()\n    entitydf.reset_index(inplace=True)\n    print(entitydf)\n    entitydf = entitydf[[\'cust_id\',\'event_timestamp\']]\n    training_data = store.get_historical_features(\n        entity_df=entitydf,\n        features=[\n        "ads_fv:age"\n        ,"ads_fv:income"\n        ,"ads_fv:q1_trans_cnt"\n        ,"ads_fv:q2_trans_cnt"\n        ,"ads_fv:q3_trans_cnt"\n        ,"ads_fv:q4_trans_cnt"\n        ],\n        full_feature_names=True\n    ).to_df()\n\n    return training_data\n\n\n'})}),"\n",(0,t.jsx)(a.h2,{id:"resumen",children:"Resumen"}),"\n",(0,t.jsx)(a.p,{children:"Este tutorial demostr\xf3 c\xf3mo usar dbt y FEAST con Teradata Vantage. El proyecto de muestra toma datos sin procesar de Teradata Vantage y produce funciones con dbt. Luego se crearon metadatos de caracter\xedsticas que forman la base para generar un conjunto de datos de entrenamiento para un modelo con FEAST; todas sus tablas correspondientes que crean el almac\xe9n de caracter\xedsticas tambi\xe9n se generan en tiempo de ejecuci\xf3n dentro de la misma base de datos."}),"\n",(0,t.jsx)(a.h2,{id:"lectura-adicional",children:"Lectura adicional"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://docs.getdbt.com/docs",children:"Documentaci\xf3n de dbt"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://github.com/Teradata/dbt-teradata",children:"Documentaci\xf3n del complemento dbt-teradata"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://docs.feast.dev/tutorials/using-scalable-registry",children:"Registro escalable de Feast"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://medium.com/teradata/enabling-highly-scalable-feature-store-with-teradata-vantage-and-feast-e01008fa8fdb",children:"Habilitar un almac\xe9n de funciones altamente escalable con Teradata Vantage y FEAST"})}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"https://github.com/Teradata/tdata-pipeline",children:"Repositorio de git"})," para este proyecto."]}),"\n"]})]})}function p(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},31619:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/dbt3-571e225d561ce80e5d8939e0710ac6f6.svg"},2926:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/dbt-feast-a4bbee0571452a7dd3a8ce22b101ef8f.png"},28453:(e,a,n)=>{n.d(a,{R:()=>i,x:()=>d});var t=n(96540);const s={},r=t.createContext(s);function i(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);
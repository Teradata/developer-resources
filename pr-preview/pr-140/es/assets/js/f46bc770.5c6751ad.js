"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[9686],{77692:(e,a,n)=>{n.d(a,{Ay:()=>t,RM:()=>s});var r=n(74848),i=n(28453);const s=[];function o(e){const a={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(a.admonition,{type:"note",children:[(0,r.jsx)(a.mdxAdmonitionTitle,{}),(0,r.jsxs)(a.p,{children:["Si tiene alguna pregunta o necesita m\xe1s ayuda, visite nuestro ",(0,r.jsx)(a.a,{href:"https://support.teradata.com/community",children:"foro de la comunidad"})," donde podr\xe1 obtener ayuda e interactuar con otros miembros de la comunidad."]})]})}function t(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},23961:(e,a,n)=>{n.d(a,{Ay:()=>t,RM:()=>s});var r=n(74848),i=n(28453);const s=[];function o(e){const a={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(a.admonition,{type:"note",children:[(0,r.jsx)(a.mdxAdmonitionTitle,{}),(0,r.jsxs)(a.p,{children:["Si necesita una instancia de prueba de Vantage, puede obtener una de forma gratuita en ",(0,r.jsx)(a.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})]})}function t(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},97828:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>t,metadata:()=>l,toc:()=>u});var r=n(74848),i=n(28453),s=n(23961),o=n(77692);const t={sidebar_position:10,author:"Rupal Shah",email:"rupal.shah@teradata.com",page_last_update:"14 de febrero de 2022",description:"Utilizar Teradata Vantage con Azure Machine Learning Studio.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","data cloud","machine learning","azure","azure machine learning studio"]},d="Utilizar Teradata Vantage con Azure Machine Learning Studio",l={id:"analyze-data/use-teradata-vantage-with-azure-machine-learning-studio",title:"Utilizar Teradata Vantage con Azure Machine Learning Studio",description:"Utilizar Teradata Vantage con Azure Machine Learning Studio.",source:"@site/i18n/es/docusaurus-plugin-content-docs-quickstarts/current/analyze-data/use-teradata-vantage-with-azure-machine-learning-studio.md",sourceDirName:"analyze-data",slug:"/analyze-data/use-teradata-vantage-with-azure-machine-learning-studio",permalink:"/pr-preview/pr-140/es/quickstarts/analyze-data/use-teradata-vantage-with-azure-machine-learning-studio",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,author:"Rupal Shah",email:"rupal.shah@teradata.com",page_last_update:"14 de febrero de 2022",description:"Utilizar Teradata Vantage con Azure Machine Learning Studio.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","data cloud","machine learning","azure","azure machine learning studio"]},sidebar:"tutorialSidebar",previous:{title:"Utilizar AWS SageMaker con Teradata Vantage",permalink:"/pr-preview/pr-140/es/quickstarts/analyze-data/sagemaker-with-teradata-vantage"},next:{title:"Integrar las extensiones de Teradata Jupyter con Google Vertex AI",permalink:"/pr-preview/pr-140/es/quickstarts/analyze-data/integrate-teradata-jupyter-extensions-with-google-vertex-ai"}},c={},u=[{value:"Informaci\xf3n general",id:"informaci\xf3n-general",level:2},{value:"Prerrequisitos",id:"prerrequisitos",level:2},...s.RM,{value:"Procedimiento",id:"procedimiento",level:2},{value:"Configuraci\xf3n inicial",id:"configuraci\xf3n-inicial",level:3},{value:"Cargar datos",id:"cargar-datos",level:3},{value:"Entrenar el modelo",id:"entrenar-el-modelo",level:3},{value:"Importar datos",id:"importar-datos",level:3},{value:"Limpiar los datos",id:"limpiar-los-datos",level:3},{value:"Construir el modelo",id:"construir-el-modelo",level:3},{value:"Puntuar el modelo",id:"puntuar-el-modelo",level:3},{value:"Lectura adicional",id:"lectura-adicional",level:2},...o.RM];function h(e){const a={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"utilizar-teradata-vantage-con-azure-machine-learning-studio",children:"Utilizar Teradata Vantage con Azure Machine Learning Studio"}),"\n",(0,r.jsx)(a.h2,{id:"informaci\xf3n-general",children:"Informaci\xf3n general"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"https://docs.microsoft.com/en-us/azure/machine-learning/studio/what-is-ml-studio",children:"Azure Machine Learning (ML) Studio"}),' es una herramienta colaborativa de tipo arrastrar y soltar que puede usar para crear, probar e implementar soluciones de anal\xedticas predictivas en sus datos. ML Studio puede consumir datos de Azure Blob Storage. Esta gu\xeda de introducci\xf3n le mostrar\xe1 c\xf3mo copiar conjuntos de datos de Teradata Vantage a un Blob Storage utilizando la funci\xf3n Jupter Notebook "integrada" de ML Studio. Luego, ML Studio puede utilizar los datos para crear y entrenar modelos de aprendizaje autom\xe1tico e implementarlos en un entorno de producci\xf3n.']}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{src:n(84971).A+"",width:"535",height:"118"})}),"\n",(0,r.jsx)(a.h2,{id:"prerrequisitos",children:"Prerrequisitos"}),"\n","\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["Acceso a una instancia de Teradata Vantage.","\n",(0,r.jsx)(s.Ay,{}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["Suscripci\xf3n a Azure o crear una ",(0,r.jsx)(a.a,{href:"https://azure.microsoft.com/free",children:"cuenta gratuita"})]}),"\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"https://docs.microsoft.com/en-us/azure/machine-learning/studio/create-workspace",children:"Espacio de trabajo de Azure ML Studio"})}),"\n",(0,r.jsxs)(a.li,{children:["(Opcional) Descargar una ",(0,r.jsx)(a.a,{href:"https://docs.microsoft.com/en-us/sql/samples/adventureworks-install-configure?view=sql-server-2017",children:"base de datos de AdventureWorks DW 2016"})," (es decir, la secci\xf3n ",(0,r.jsx)(a.em,{children:"'Entrenar el modelo'"}),")","\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["Restaurar y copiar la tabla ",(0,r.jsx)(a.em,{children:"'vTargetMail'"})," de SQL Server a Teradata Vantage"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"procedimiento",children:"Procedimiento"}),"\n",(0,r.jsx)(a.h3,{id:"configuraci\xf3n-inicial",children:"Configuraci\xf3n inicial"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:['Durante la creaci\xf3n del espacio de trabajo de ML Studio, es posible que deba crear una "nueva" cuenta de almacenamiento a menos que tenga una en las ubicaciones de disponibilidad actual y elija ',(0,r.jsx)(a.strong,{children:"DEVTEST Standard"})," para ",(0,r.jsx)(a.strong,{children:"Plan de servicios web"})," para esta gu\xeda de introducci\xf3n. Inicie sesi\xf3n en ",(0,r.jsx)(a.a,{href:"https://portal.azure.com",children:"Azure Portal"}),", abra su cuenta de almacenamiento y cree un ",(0,r.jsx)(a.strong,{children:"contenedor"})," si a\xfan no existe una.\n",(0,r.jsx)(a.img,{src:n(63842).A+"",width:"770",height:"186"})]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["Copie su ",(0,r.jsx)(a.strong,{children:"nombre de la cuenta de almacenamiento"})," y ",(0,r.jsx)(a.strong,{children:"Key"})," en el bloc de notas que usaremos para que Python3 Notebook acceda a su cuenta de Azure Blob Storage.\n",(0,r.jsx)(a.img,{src:n(60189).A+"",width:"767",height:"311"})]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["Finalmente, abra la propiedad ",(0,r.jsx)(a.strong,{children:"Configuration"})," y establezca ",(0,r.jsx)(a.strong,{children:(0,r.jsx)(a.em,{children:"'Se requiere transferencia segura'"})})," en ",(0,r.jsx)(a.strong,{children:(0,r.jsx)(a.em,{children:"Deshabilitado"})})," para permitir que el m\xf3dulo de importaci\xf3n de datos de ML Studio acceda a la cuenta de Blob Storage.\n",(0,r.jsx)(a.img,{src:n(39060).A+"",width:"398",height:"69"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"cargar-datos",children:"Cargar datos"}),"\n",(0,r.jsx)(a.p,{children:"Para llevar los datos a ML Studio, primero debemos cargar los datos de Teradata Vantage en Azure Blob Storage. Crearemos un ML Jupyter Notebook, instalaremos paquetes de Python para conectarnos a Teradata y guardaremos datos en Azure Blob Storage."}),"\n",(0,r.jsxs)(a.p,{children:["Inicie sesi\xf3n en ",(0,r.jsx)(a.a,{href:"https://portal.azure.com",children:"Azure Portal"}),", vaya a ",(0,r.jsx)(a.strong,{children:"espacio de trabajo de ML Studio"})," y ",(0,r.jsx)(a.a,{href:"https://studio.azureml.net",children:"Azure Machine Learning Studio"})," y ",(0,r.jsx)(a.strong,{children:"inicie sesi\xf3n."})]}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["Deber\xeda ver la siguiente pantalla y hacer clic en ",(0,r.jsx)(a.strong,{children:"Cuadernos"}),", aseg\xfarese de estar en la regi\xf3n/espacio de trabajo correcto y haga clic en Notebook ",(0,r.jsx)(a.strong,{children:"Nuevo"}),"\n",(0,r.jsx)(a.img,{src:n(57967).A+"",width:"990",height:"477"})]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["Elija ",(0,r.jsx)(a.em,{children:"Python3"})," y ",(0,r.jsx)(a.strong,{children:"Nombre"})," a su instancia de cuaderno\n",(0,r.jsx)(a.img,{src:n(18950).A+"",width:"987",height:"353"})]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["En su instancia de Jupyter Notebook, instale ",(0,r.jsx)(a.a,{href:"https://pypi.org/project/teradataml",children:"Paquete Python de Teradata Vantage para anal\xedticas avanzadas"}),":"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:"pip install teradataml\n"})}),"\n",(0,r.jsx)(a.admonition,{type:"note",children:(0,r.jsx)(a.p,{children:"No existe validaci\xf3n entre Microsoft Azure ML Studio y el paquete Teradata Vantage Python."})}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["Instalar ",(0,r.jsx)(a.a,{href:"https://pypi.org/project/azure-storage-blob",children:"Microsoft Azure Storage Blob Client Library for Python"}),":"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:"!pip install azure-storage-blob\n"})}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Importe las siguientes bibliotecas:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:"import teradataml as tdml\nfrom teradataml import create_context, get_context, remove_context\nfrom teradataml.dataframe.dataframe import DataFrame\nimport pandas as pd\nfrom azure.storage.blob import (BlockBlobService)\n"})}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Con\xe9ctese a Teradata usando el comando:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:"create_context(host = '<hostname>', username = '<database user name>', password = '<password>')\n"})}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Recupere los datos utilizando el m\xf3dulo Teradata Python DataFrame:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:'train_data = DataFrame.from_table("<table_name>")\n'})}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Convierta Teradata DataFrame a Panda DataFrame:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:"trainDF = train_data.to_pandas()\n"})}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Convierta los datos a CSV:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:"trainDF = trainDF.to_csv(head=True,index=False)\n"})}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Asigne variables para el nombre de la cuenta, la clave y el nombre del contenedor de Azure Blob Storage:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:'accountName="<account_name>"\naccountKey="<account_key>"\ncontainerName="mldata"\n'})}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Cargue el archivo en Azure Blob Storage:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",metastring:', id="azure_ml_studio_first_config", role="content-editable emits-gtm-events',children:"blobService = BlockBlobService(account_name=accountName, account_key=accountKey)\nblobService.create_blob_from_text(containerNAme, 'vTargetMail.csv', trainDF)\n"})}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["Inicie sesi\xf3n en Azure Portal, abra la cuenta de Blob Storage para ver el archivo cargado:\n",(0,r.jsx)(a.img,{src:n(17453).A+"",width:"1239",height:"237"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"entrenar-el-modelo",children:"Entrenar el modelo"}),"\n",(0,r.jsxs)(a.p,{children:["Usaremos el art\xedculo ",(0,r.jsx)(a.a,{href:"https://docs.microsoft.com/en-us/azure/sql-data-warehouse/sql-data-warehouse-get-started-analyze-with-azure-machine-learning",children:"Analizar datos con Azure Machine Learning"})," existente para crear un modelo de aprendizaje autom\xe1tico predictivo basado en datos de Azure Blob Storage. Crearemos una campa\xf1a de marketing dirigida para Adventure Works, la tienda de bicicletas, prediciendo si es probable que un cliente compre una bicicleta o no."]}),"\n",(0,r.jsx)(a.h3,{id:"importar-datos",children:"Importar datos"}),"\n",(0,r.jsxs)(a.p,{children:["Los datos est\xe1n en el archivo de Azure Blob Storage llamado ",(0,r.jsx)(a.code,{children:"vTargetMail.csv"})," que copiamos en la secci\xf3n anterior."]}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsxs)(a.li,{children:["Inicie sesi\xf3n en ",(0,r.jsx)(a.a,{href:"https://studio.azureml.net",children:"Azure Machine Learning studio"})," y haga clic en ",(0,r.jsx)(a.strong,{children:"Experimentos"}),"."]}),"\n",(0,r.jsxs)(a.li,{children:["Haga clic en ",(0,r.jsx)(a.strong,{children:"+NEW"})," en la parte inferior izquierda de la pantalla y seleccione ",(0,r.jsx)(a.strong,{children:"Experimento en blanco"}),"."]}),"\n",(0,r.jsx)(a.li,{children:"Introduzca un nombre para su experimento: Marketing dirigido."}),"\n",(0,r.jsxs)(a.li,{children:["Arrastre el m\xf3dulo ",(0,r.jsx)(a.strong,{children:"Importar datos"})," debajo de ",(0,r.jsx)(a.strong,{children:"Entrada y salida de datos"})," desde el panel de m\xf3dulos al lienzo."]}),"\n",(0,r.jsx)(a.li,{children:"Especifique los detalles de su Azure Blob Storage (nombre de cuenta, clave y nombre de contenedor) en el panel Propiedades."}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["Ejecute el experimento haciendo clic en ",(0,r.jsx)(a.em,{children:"Ejecutar"})," debajo del lienzo del experimento."]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{src:n(59674).A+"",width:"1019",height:"715"})}),"\n",(0,r.jsxs)(a.p,{children:["Una vez que el experimento termine de ejecutarse exitosamente, haga clic en el puerto de salida en la parte inferior del m\xf3dulo Importar datos y seleccione ",(0,r.jsx)(a.em,{children:"Visualizar"})," para ver los datos importados."]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{src:n(23779).A+"",width:"1003",height:"751"})}),"\n",(0,r.jsx)(a.h3,{id:"limpiar-los-datos",children:"Limpiar los datos"}),"\n",(0,r.jsx)(a.p,{children:"Para limpiar los datos, elimine algunas columnas que no sean relevantes para el modelo. Para ello:"}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsxs)(a.li,{children:["Arrastre el m\xf3dulo ",(0,r.jsx)(a.em,{children:"Seleccionar columnas en el conjunto de datos"})," que se encuentra debajo de ",(0,r.jsx)(a.em,{children:"Transformaci\xf3n de datos < Manipulaci\xf3n"})," al lienzo. Conecte este m\xf3dulo al m\xf3dulo ",(0,r.jsx)(a.em,{children:"Importar datos"}),"."]}),"\n",(0,r.jsxs)(a.li,{children:["Haga clic en ",(0,r.jsx)(a.em,{children:"Selector de columnas de inicio"})," en el panel Propiedades para especificar qu\xe9 columnas quiere eliminar.\n",(0,r.jsx)(a.img,{src:n(8099).A+"",width:"1069",height:"707"})]}),"\n",(0,r.jsxs)(a.li,{children:["Excluya dos columnas: ",(0,r.jsx)(a.em,{children:"CustomerAlternateKey"})," y ",(0,r.jsx)(a.em,{children:"GeographyKey"}),".\n",(0,r.jsx)(a.img,{src:n(86522).A+"",width:"990",height:"833"})]}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"construir-el-modelo",children:"Construir el modelo"}),"\n",(0,r.jsx)(a.p,{children:'Dividiremos los datos 80-20: 80\xa0% para entrenar un modelo de aprendizaje autom\xe1tico y 20\xa0% para probar el modelo. Usaremos los algoritmos de "dos clases" para este problema de clasificaci\xf3n binaria.'}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["Arrastre el m\xf3dulo ",(0,r.jsx)(a.strong,{children:"Dividir datos"})," hasta el lienzo y con\xe9ctelo con 'Seleccionar columnas en el conjunto de datos'."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["En el panel de propiedades, introduzca 0,8 para Fracci\xf3n de filas en el primer conjunto de datos de salida.\n",(0,r.jsx)(a.img,{src:n(11185).A+"",width:"989",height:"835"})]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["Busque y arrastre el m\xf3dulo ",(0,r.jsx)(a.strong,{children:"\xc1rbol de decisi\xf3n potenciado con dos clases"})," hasta el lienzo."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["Busque y arrastre el m\xf3dulo ",(0,r.jsx)(a.strong,{children:"Entrenar modelo"})," hasta el lienzo y especifique las entradas conect\xe1ndolo a los m\xf3dulos ",(0,r.jsx)(a.strong,{children:"\xc1rbol de decisi\xf3n potenciado con dos clases"})," (algoritmo ML) y ",(0,r.jsx)(a.strong,{children:"Dividir"})," ",(0,r.jsx)(a.strong,{children:"datos"})," (datos para entrenar el algoritmo).\n",(0,r.jsx)(a.img,{src:n(71240).A+"",width:"995",height:"836"})]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["Posteriormente, haga clic en ",(0,r.jsx)(a.em,{children:"Selector de columnas de inicio"})," en el panel Propiedades. Seleccione la columna ",(0,r.jsx)(a.em,{children:"BikeBuyer"})," como columna para predecir.\n",(0,r.jsx)(a.img,{src:n(46407).A+"",width:"992",height:"827"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"puntuar-el-modelo",children:"Puntuar el modelo"}),"\n",(0,r.jsx)(a.p,{children:"Ahora, probaremos c\xf3mo se desempe\xf1a el modelo con los datos de prueba. Compararemos el algoritmo de nuestra elecci\xf3n con un algoritmo diferente para ver cu\xe1l funciona mejor."}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsxs)(a.li,{children:["Arrastre el m\xf3dulo ",(0,r.jsx)(a.strong,{children:"Puntuar modelo"})," hasta el lienzo y con\xe9ctelo a los m\xf3dulos ",(0,r.jsx)(a.strong,{children:"Entrenar modelo"})," y ",(0,r.jsx)(a.strong,{children:"Dividir datos"}),"."]}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{src:n(75070).A+"",width:"992",height:"831"})}),"\n",(0,r.jsxs)(a.ol,{start:"2",children:["\n",(0,r.jsxs)(a.li,{children:["Busque y arrastre ",(0,r.jsx)(a.strong,{children:"M\xe1quina de punto Bayes de dos clases"})," hasta el lienzo del experimento. Compararemos el rendimiento de este algoritmo en comparaci\xf3n con el \xe1rbol de decisi\xf3n potenciado de dos clases."]}),"\n",(0,r.jsx)(a.li,{children:"Copie y pegue los m\xf3dulos Train Model y Score Model en el lienzo."}),"\n",(0,r.jsxs)(a.li,{children:["Busque y arrastre el m\xf3dulo ",(0,r.jsx)(a.strong,{children:"Evaluar modelo"})," hasta el lienzo para comparar los dos algoritmos."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.strong,{children:"Ejecutar"})," el experimento.\n",(0,r.jsx)(a.img,{src:n(60821).A+"",width:"1269",height:"830"})]}),"\n",(0,r.jsxs)(a.li,{children:["Haga clic en el puerto de salida en la parte inferior del m\xf3dulo Evaluate Model y haga clic en Visualizar.\n",(0,r.jsx)(a.img,{src:n(77932).A+"",width:"1909",height:"852"})]}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Las m\xe9tricas proporcionadas son la curva ROC, el diagrama de recuperaci\xf3n de precisi\xf3n y la curva de elevaci\xf3n. Al observar estas m\xe9tricas, podemos ver que el primer modelo funcion\xf3 mejor que el segundo. Para ver lo que predijo el primer modelo, haga clic en el puerto de salida del Score Model y haga clic en Visualizar."}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{src:n(57819).A+"",width:"1912",height:"844"})}),"\n",(0,r.jsx)(a.p,{children:"Ver\xe1 dos columnas m\xe1s agregadas a su conjunto de datos de prueba."}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsx)(a.li,{children:"Score Probabilities: la probabilidad de que un cliente sea un comprador de bicicletas."}),"\n",(0,r.jsx)(a.li,{children:"Scored Labels: la clasificaci\xf3n realizada por el modelo - comprador de bicicleta (1) o no (0). Este umbral de probabilidad de etiquetado se establece en 50\xa0% y se puede ajustar."}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Comparando la columna BikeBuyer (real) con Scored Labels (predicci\xf3n), puede ver lo bien que se ha desempe\xf1ado el modelo. Como siguientes pasos, puede utilizar este modelo para hacer predicciones para nuevos clientes y publicar este modelo como un servicio web o escribir los resultados en SQL Data Warehouse."}),"\n",(0,r.jsx)(a.h2,{id:"lectura-adicional",children:"Lectura adicional"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["Para obtener m\xe1s informaci\xf3n sobre la creaci\xf3n de modelos predictivos de aprendizaje autom\xe1tico, consulte ",(0,r.jsx)(a.a,{href:"https://azure.microsoft.com/documentation/articles/machine-learning-what-is-machine-learning",children:"Introducci\xf3n al aprendizaje autom\xe1tico en Azure"}),"."]}),"\n",(0,r.jsxs)(a.li,{children:["Para copias de conjuntos de datos grandes, considere la posibilidad de usar el ",(0,r.jsx)(a.a,{href:"https://docs.teradata.com/reader/p~0sSD4zl4K8YPbEGnM3Rg/TTu_WJMMIpo2TEaxFMFopQ",children:"M\xf3dulo de acceso de Teradata para Azure"})," que interact\xfaa entre los operadores de carga/descarga de Teradata Parallel Transporter y Azure Blob Storage."]}),"\n"]}),"\n","\n",(0,r.jsx)(o.Ay,{})]})}function m(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},17453:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/image17-adb142a5fa91bd1c3e2aa66f186ac3a1.png"},59674:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/image18-a986f38b23377bcf962fec0a4260d976.png"},23779:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/image19-32461094e690957a9be8fd04c17037bf.png"},84971:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/image2-3f52411788566209b944dab8d539a6b4.png"},8099:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/image20-1b2adcb4a4e6ffaa41cf772a1dfaaefe.png"},86522:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/image21-2b7ef95012e1917b998afef3b8253418.png"},11185:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/image22-31fa363cf32ebecbb1ac56a97f16d975.png"},71240:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/image23-62d912ac2dc4ec79c3c2bdaf039d8861.png"},46407:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/image24-962d3ae20feb58844b375c6a9190cb58.png"},75070:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/image25-0ffc066a739aacb8e1f19f4fe309e952.png"},60821:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/image26-db72879d9e4f1a896ee6c5794cfb68a1.png"},77932:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/image27-4931b60bde9a3fbce7b88d21ce6cc21d.png"},57819:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/image28-72dd38c2a702f00f8a7dae980b1a28be.png"},63842:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/image3-b3e810173080d1628e76a01a74554333.png"},60189:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/image4-b99a83142d7461c7a15ee73df9b9b967.png"},39060:(e,a,n)=>{n.d(a,{A:()=>r});const r="data:image/png;base64,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"},57967:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/image6-52fe425e1eaee1fa7ecdd5992f56430e.png"},18950:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/image7-cb2e50439d93eb9a9feb42eecd0c1e7a.png"},28453:(e,a,n)=>{n.d(a,{R:()=>o,x:()=>t});var r=n(96540);const i={},s=r.createContext(i);function o(e){const a=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:a},e.children)}}}]);
"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[1419],{23961:(e,n,a)=>{a.d(n,{Ay:()=>s,RM:()=>i});var o=a(74848),t=a(28453);const i=[];function r(e){const n={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,t.R)(),...e.components};return(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsx)(n.mdxAdmonitionTitle,{}),(0,o.jsxs)(n.p,{children:["Si necesita una instancia de prueba de Vantage, puede obtener una de forma gratuita en ",(0,o.jsx)(n.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})]})}function s(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},46136:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var o=a(74848),t=a(28453),i=a(23961);const r={sidebar_position:8,author:"Tayyaba Batool",email:"tayyaba.batool@teradata.com",page_last_update:"19 de marzo de 2024",description:"Tutorial para Model Factory Solution: ejecuci\xf3n de flujos de trabajo de Airflow con ClearScape Analytics ModelOps",keywords:["modelfactory","modelops","byom","python","clearscape analytics","teradata","data warehouses","teradata","vantage","cloud data platform","machine learning","artificial intelligence","business intelligence","enterprise analytics"]},s="Ejecute flujos de trabajo de Airflow con ModelOps - Model Factory Solution Accelerator",d={id:"analyze-data/execute-airflow-workflows-with-clearscape-analytics-modelops-model-factory-solution",title:"Ejecute flujos de trabajo de Airflow con ModelOps - Model Factory Solution Accelerator",description:"Tutorial para Model Factory Solution: ejecuci\xf3n de flujos de trabajo de Airflow con ClearScape Analytics ModelOps",source:"@site/i18n/es/docusaurus-plugin-content-docs-quickstarts/current/analyze-data/execute-airflow-workflows-with-clearscape-analytics-modelops-model-factory-solution.md",sourceDirName:"analyze-data",slug:"/analyze-data/execute-airflow-workflows-with-clearscape-analytics-modelops-model-factory-solution",permalink:"/pr-preview/pr-145/es/quickstarts/analyze-data/execute-airflow-workflows-with-clearscape-analytics-modelops-model-factory-solution",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,author:"Tayyaba Batool",email:"tayyaba.batool@teradata.com",page_last_update:"19 de marzo de 2024",description:"Tutorial para Model Factory Solution: ejecuci\xf3n de flujos de trabajo de Airflow con ClearScape Analytics ModelOps",keywords:["modelfactory","modelops","byom","python","clearscape analytics","teradata","data warehouses","teradata","vantage","cloud data platform","machine learning","artificial intelligence","business intelligence","enterprise analytics"]},sidebar:"tutorialSidebar",previous:{title:"ModelOps: importar e implemente su primer modelo GIT",permalink:"/pr-preview/pr-145/es/quickstarts/analyze-data/deploy-and-monitor-machine-learning-models-with-teradata-modelops-and-git"},next:{title:"Utilizar AWS SageMaker con Teradata Vantage",permalink:"/pr-preview/pr-145/es/quickstarts/analyze-data/sagemaker-with-teradata-vantage"}},l={},c=[{value:"Informaci\xf3n general",id:"informaci\xf3n-general",level:2},{value:"Prerrequisitos",id:"prerrequisitos",level:2},...i.RM,{value:"Configuraci\xf3n de Visual Studio Code e instalaci\xf3n de Airflow en docker-compose",id:"configuraci\xf3n-de-visual-studio-code-e-instalaci\xf3n-de-airflow-en-docker-compose",level:2},{value:"Configuraci\xf3n de Model Factory Solution Accelerator",id:"configuraci\xf3n-de-model-factory-solution-accelerator",level:2},{value:"Crear un DAG de Airflow que contenga el ciclo de vida completo de ModelOps",id:"crear-un-dag-de-airflow-que-contenga-el-ciclo-de-vida-completo-de-modelops",level:2},{value:"Inicializar Airflow en Docker Compose",id:"inicializar-airflow-en-docker-compose",level:2},{value:"Limpiar el entorno de demostraci\xf3n de Airflow",id:"limpiar-el-entorno-de-demostraci\xf3n-de-airflow",level:2},{value:"Iniciar Airflow con Model Factory Solution Accelerator",id:"iniciar-airflow-con-model-factory-solution-accelerator",level:2},{value:"Ejecute DAG de Airflow de Model Factory Solution con ModelOps",id:"ejecute-dag-de-airflow-de-model-factory-solution-con-modelops",level:2},{value:"Resumen",id:"resumen",level:2},{value:"Lectura adicional",id:"lectura-adicional",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"ejecute-flujos-de-trabajo-de-airflow-con-modelops---model-factory-solution-accelerator",children:"Ejecute flujos de trabajo de Airflow con ModelOps - Model Factory Solution Accelerator"}),"\n",(0,o.jsx)(n.h2,{id:"informaci\xf3n-general",children:"Informaci\xf3n general"}),"\n",(0,o.jsxs)(n.p,{children:["El objetivo de ",(0,o.jsx)(n.strong,{children:"Model Factory Solution Accelerator"})," de ",(0,o.jsx)(n.strong,{children:"ClearScape Analytics"})," es optimizar y acelerar el proceso completo de desarrollo, implementaci\xf3n y gesti\xf3n de modelos de aprendizaje autom\xe1tico dentro de una organizaci\xf3n en ",(0,o.jsx)(n.strong,{children:"Escala horizontal"})," mediante la puesta en funcionamiento de ",(0,o.jsx)(n.strong,{children:"cientos de modelos para un dominio empresarial, todo a la vez"}),". Aprovecha la escalabilidad de las anal\xedticas en bases de datos y la apertura de los formatos de modelos de socios compatibles, como H2O o Dataiku. Esta combinaci\xf3n \xfanica mejora la eficacia, la escalabilidad y la coherencia en las distintas fases del ciclo de vida del aprendizaje autom\xe1tico en entornos empresariales."]}),"\n",(0,o.jsxs)(n.p,{children:["Mediante la incorporaci\xf3n de pr\xe1cticas recomendadas, automatizaci\xf3n y flujos de trabajo estandarizados, Model Factory Solution Accelerator permite a los equipos seleccionar r\xe1pidamente los datos que se utilizar\xe1n, configurar el modelo requerido, garantizar la repetitividad e implementar m\xfaltiples modelos de ",(0,o.jsx)(n.strong,{children:"ilimitado"})," directamente en entornos de producci\xf3n. En \xfaltima instancia, tiene como objetivo reducir el tiempo de generaci\xf3n de valor para las iniciativas de aprendizaje autom\xe1tico y promover un enfoque m\xe1s estructurado y eficiente para crear e implementar modelos a escala. Aqu\xed se muestra el diagrama de un flujo de trabajo automatizado:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Flujo de trabajo",src:a(55345).A+"",width:"1752",height:"736"})}),"\n",(0,o.jsx)(n.p,{children:"Estos son los pasos para implementar Model Factory Solution Accelerator con Airflow y ClearScape Analytics ModelOps. Apache Airflow se utiliza para la programaci\xf3n y organizaci\xf3n de flujos de trabajo o canalizaciones de datos. Por lo tanto, en este tutorial, estamos creando un DAG (gr\xe1fico ac\xedclico dirigido) de Airflow que se ejecutar\xe1 para automatizar el ciclo de vida de ModelOps."}),"\n",(0,o.jsx)(n.h2,{id:"prerrequisitos",children:"Prerrequisitos"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["En este tutorial se implementa en la m\xe1quina local utilizando el IDE de ",(0,o.jsx)(n.strong,{children:"Visual Studio Code"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Para ejecutar comandos de shell, puede instalar la extensi\xf3n de VS Code ",(0,o.jsx)(n.strong,{children:'"Remote Development"'})," mediante el enlace siguiente. Este paquete de extensi\xf3n incluye la extensi\xf3n WSL, adem\xe1s de las extensiones Remote - SSH y Dev Containers, para que pueda abrir cualquier carpeta en un contenedor, en una m\xe1quina remota o en WSL:\n",(0,o.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack",children:"Marketplace de VS Code"}),"."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Acceso a una instancia de Teradata Vantage con ClearScape Analytics (incluye ModelOps)"}),"\n"]}),"\n",(0,o.jsx)(i.Ay,{}),"\n",(0,o.jsx)(n.h2,{id:"configuraci\xf3n-de-visual-studio-code-e-instalaci\xf3n-de-airflow-en-docker-compose",children:"Configuraci\xf3n de Visual Studio Code e instalaci\xf3n de Airflow en docker-compose"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Abra Visual Studio Code y seleccione la opci\xf3n Abrir una ventana remota. Luego seleccione Conectarse a WSL-Ubuntu"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Seleccione Archivo > Abrir carpeta. A continuaci\xf3n, seleccione la carpeta elegida o cree una nueva con este comando: mkdir [folder_name]"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Configure la variable de entorno AIRFLOW_HOME. Airflow requiere un directorio de inicio y usa ~/airflow de forma predeterminada, pero puede establecer una ubicaci\xf3n diferente si lo prefiere. La variable de entorno AIRFLOW_HOME se utiliza para informar a Airflow de la ubicaci\xf3n deseada."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"AIRFLOW_HOME=./[folder_name]\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Instale la versi\xf3n estable 2.8.2 de apache-airflow desde el repositorio de PyPI:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'    AIRFLOW_VERSION=2.8.2\n\n    PYTHON_VERSION="$(python3 --version | cut -d " " -f 2 | cut -d "." -f 1-2)"\n\n    CONSTRAINT_URL="https://raw.githubusercontent.com/apache/airflow/constraints-${AIRFLOW_VERSION}/constraints-${PYTHON_VERSION}.txt"\n\n    pip install "apache-airflow==${AIRFLOW_VERSION}" --constraint "${CONSTRAINT_URL}" --default-timeout=100\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Instale la versi\xf3n estable del proveedor Airflow Teradata desde el repositorio PyPI."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'pip install "apache-airflow-providers-teradata" --default-timeout=100\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Instale Docker Desktop para poder usar el contenedor Docker para ejecutar Airflow. Aseg\xfarese de que Docker Desktop est\xe9 en ejecuci\xf3n."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Compruebe la versi\xf3n de Docker mediante este comando:"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker --version\n"})}),"\n",(0,o.jsx)(n.p,{children:"Compruebe la versi\xf3n de Docker Compose. Docker Compose es una herramienta para definir y ejecutar aplicaciones multicontenedor"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker-compose --version\n"})}),"\n",(0,o.jsx)(n.p,{children:"Para implementar Airflow en Docker Compose, debe obtener docker-compose.yaml mediante este comando curl."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:', id="Fetch docker-compose yaml", role="content-editable emits-gtm-events"',children:"    curl -LfO 'https://airflow.apache.org/docs/apache-airflow/2.8.2/docker-compose.yaml'\n"})}),"\n",(0,o.jsx)(n.p,{children:"Cree estas carpetas para usarlas m\xe1s tarde mediante el siguiente comando:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:', id="Create Airflow folders", role="content-editable emits-gtm-events"',children:"mkdir -p ./dags ./logs ./plugins ./config\n"})}),"\n",(0,o.jsx)(n.h2,{id:"configuraci\xf3n-de-model-factory-solution-accelerator",children:"Configuraci\xf3n de Model Factory Solution Accelerator"}),"\n",(0,o.jsx)(n.p,{children:"Cree un archivo de configuraci\xf3n dentro de la carpeta de configuraci\xf3n y establezca los par\xe1metros con los valores correspondientes seg\xfan el modelo que quiera entrenar."}),"\n",(0,o.jsxs)(r,{children:[(0,o.jsx)("summary",{children:"Haga clic para revelar el c\xf3digo Python"}),(0,o.jsx)("pre",{children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'from configparser import ConfigParser\nimport os\n\nconfig = ConfigParser()\n\nconfig[\'MAIN\'] = {\n    "projectId": "23e1df4b-b630-47a1-ab80-7ad5385fcd8d",\n    "bearerToken": os.environ[\'BEARER_TOKEN\'],\n    "trainDatasetId": "ba39e766-2fdf-426f-ba5c-4ca3e90955fc",\n    "evaluateDatasetId": "74489d62-2af5-4402-b264-715e151a420a",\n    "datasetConnectionId" : "151abf05-1914-4d38-a90d-272d850f212c",\n    "datasetTemplateId": "d8a35d98-21ce-47d0-b9f2-00d355777de1"\n}\n\nconfig[\'HYPERPARAMETERS\'] = {\n    "eta": 0.2,\n    "max_depth": 6\n}\n\nconfig[\'RESOURCES\'] = {\n    "memory": "500m",\n    "cpu": "0.5"\n}\n\nconfig[\'MODEL\'] = {\n    "modelId": "f937b5d8-02c6-5150-80c7-1e4ff07fea31",\n    "approvalComments": "Approving this model!",\n    "cron": "@once",\n    "engineType": "DOCKER_BATCH",\n    "engine": "python-batch",\n    "dockerImage": "artifacts.td.teradata.com/tdproduct-docker-snapshot/avmo/aoa-python-base:3.9.13-1"\n}\n\n\nwith open(\'./config/modelOpsConfig.ini\', \'w\') as f:\n    config.write(f)\n'})})})]}),"\n",(0,o.jsx)(n.p,{children:"Ahora copie el token Bearer desde la interfaz de usuario de ModelOps (Men\xfa izquierdo -> Su cuenta -> Detalles de la sesi\xf3n) y config\xfarelo aqu\xed como una variable de entorno mediante el siguiente comando:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:', id="Bearer token", role="content-editable emits-gtm-events"',children:"export BEARER_TOKEN='your_token_here'\n"})}),"\n",(0,o.jsx)(n.p,{children:"Ahora puede ejecutar el archivo de configuraci\xf3n creado previamente, lo cual crear\xe1 un nuevo archivo ini dentro de la carpeta de configuraci\xf3n que contiene todos los par\xe1metros necesarios que se utilizar\xe1n en el paso de creaci\xf3n de DAG."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",metastring:', id="Create config ini", role="content-editable emits-gtm-events"',children:"python3 createConfig.py\n"})}),"\n",(0,o.jsx)(n.h2,{id:"crear-un-dag-de-airflow-que-contenga-el-ciclo-de-vida-completo-de-modelops",children:"Crear un DAG de Airflow que contenga el ciclo de vida completo de ModelOps"}),"\n",(0,o.jsx)(n.p,{children:"Ahora puede crear un DAG con el siguiente c\xf3digo de Python. Agregue este archivo de c\xf3digo de Python dentro de la carpeta dags. Este DAG contiene 5 tareas del ciclo de vida de ModelOps (es decir, entrenar, evaluar, aprobar, implementar y retirar)"}),"\n",(0,o.jsxs)(r,{children:[(0,o.jsx)("summary",{children:"Haga clic para revelar el c\xf3digo Python"}),(0,o.jsx)("pre",{children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"import base64\nfrom datetime import datetime, timedelta, date\nimport json\nimport os\nimport time\n\nfrom airflow import DAG\nfrom airflow.operators.python import PythonOperator\n\nimport requests\n\nfrom configparser import ConfigParser\n\n# Read from Config file\nconfig = ConfigParser()\nconfig.read('config/modelOpsConfig.ini')\n\nconfig_main = config[\"MAIN\"]\nconfig_hyper_params = config[\"HYPERPARAMETERS\"]\nconfig_resources = config[\"RESOURCES\"]\nconfig_model = config[\"MODEL\"]\n\n# Default args for DAG\ndefault_args = {\n    'owner': 'Tayyaba',\n    'retries': 5,\n    'retry_delay': timedelta(minutes=2)\n}\n\ndef get_job_status(job_id):\n\n    # Use the fetched Job ID to check Job Status\n    headers_for_status = {\n    'AOA-PROJECT-ID': config_main['projectid'],\n    'Authorization': 'Bearer ' + config_main['bearertoken'],\n    }\n\n    status_response = requests.get('https://airflow-u9usja4twtauvt3s.env.clearscape.teradata.com:8443/modelops/core/api/jobs/' + job_id + '?projection=expandJob', headers=headers_for_status)\n    status_json = status_response.json()\n    job_status = status_json.get('status')\n    return job_status\n\n\ndef train_model(ti):\n\n    headers = {\n    'AOA-Project-ID': config_main['projectid'],\n    'Accept': 'application/json, text/plain, */*',\n    'Accept-Language': 'en-US,en;q=0.9',\n    'Authorization': 'Bearer ' + config_main['bearertoken'],\n    'Content-Type': 'application/json',\n    }\n\n    json_data = {\n        'datasetId': config_main['trainDatasetId'],\n        'datasetConnectionId': config_main['datasetConnectionId'],\n        'modelConfigurationOverrides': {\n            'hyperParameters': {\n                'eta': config_hyper_params['eta'],\n                'max_depth': config_hyper_params['max_depth'],\n            },\n        },\n        'automationOverrides': {\n            'resources': {\n                'memory': config_resources['memory'],\n                'cpu': config_resources['cpu'],\n            },\n            'dockerImage':  config_model['dockerImage'],\n        },\n    }\n\n    \n    response = requests.post('https://airflow-u9usja4twtauvt3s.env.clearscape.teradata.com:8443/modelops/core/api/models/' + config_model['modelid'] + '/train', headers=headers, json=json_data)\n    \n    json_data = response.json()\n\n    # Get the Training Job ID\n    job_id = json_data.get('id')\n    ti.xcom_push(key='train_job_id', value=job_id)\n\n    job_status = get_job_status(job_id)\n    print(\"Started - Training Job - Status: \", job_status)\n\n    while job_status != \"COMPLETED\":\n        if job_status==\"ERROR\":\n            print(\"The training job is terminated due to an Error\")\n            ti.xcom_push(key='trained_model_id', value='NONE') # Setting the Trained Model Id to None here and check in next step (Evaluate)\n            break\n        elif job_status==\"CANCELLED\":\n            ti.xcom_push(key='trained_model_id', value='NONE') \n            print(\"The training job is Cancelled !!\")\n            break\n        print(\"Job is not completed yet. Current status\", job_status)\n        time.sleep(5) #wait 5s\n        job_status = get_job_status(job_id)\n\n    # Checking Job status at the end to push the correct trained_model_id\n    if(job_status == \"COMPLETED\"):\n        train_model_id = json_data['metadata']['trainedModel']['id']\n        ti.xcom_push(key='trained_model_id', value=train_model_id)\n        print('Model Trained Successfully! Job ID is : ', job_id, 'Trained Model Id : ', train_model_id, ' Status : ', job_status)\n    else:\n        ti.xcom_push(key='trained_model_id', value='NONE')\n        print(\"Training Job is terminated !!\")\n\n\ndef evaluate_model(ti):\n\n    trained_model_id = ti.xcom_pull(task_ids = 'task_train_model', key = 'trained_model_id')\n\n    headers = {\n    'AOA-Project-ID': config_main['projectid'],\n    'Accept': 'application/json, text/plain, */*',\n    'Accept-Language': 'en-US,en;q=0.9',\n    'Authorization': 'Bearer ' + config_main['bearertoken'],\n    'Content-Type': 'application/json',\n    }\n\n    json_data = {\n        'datasetId': config_main['evaluatedatasetid'],\n        'datasetConnectionId': config_main['datasetConnectionId'],\n        'modelConfigurationOverrides': {\n            'hyperParameters': {\n                'eta': config_hyper_params['eta'],\n                'max_depth': config_hyper_params['max_depth'],\n            },\n        },\n        'automationOverrides': {\n            'resources': {\n                'memory': config_resources['memory'],\n                'cpu': config_resources['cpu'],\n            },\n            'dockerImage':  config_model['dockerImage'],\n        },\n    }\n\n    if trained_model_id == 'NONE':\n        ti.xcom_push(key='evaluated_model_status', value='FALIED')\n        print(\"Evaluation cannot be done as the Training Job was terminated !!\") \n    else:\n        response = requests.post('https://airflow-u9usja4twtauvt3s.env.clearscape.teradata.com:8443/modelops/core/api/trainedModels/' + trained_model_id + '/evaluate', headers=headers, json=json_data)\n        json_data = response.json()\n\n        # Get the Evaluation Job ID\n        eval_job_id = json_data.get('id')\n        ti.xcom_push(key='evaluate_job_id', value=eval_job_id)\n\n        job_status = get_job_status(eval_job_id)\n        print(\"Started - Job - Status: \", job_status)\n\n        while job_status != \"COMPLETED\":\n            if job_status==\"ERROR\":\n                print(\"The evaluation job is terminated due to an Error\")\n                # Set the Trained Model Id to None here and check in next step (Evaluate)\n                break\n            elif job_status==\"CANCELLED\":\n                print(\"The evaluation job is Cancelled !!\")\n                break\n            print(\"Job is not completed yet. Current status\", job_status)\n            time.sleep(5) # wait 5s\n            job_status = get_job_status(eval_job_id)\n\n        # Checking Job status at the end to push the correct evaluate_job_id\n        if(job_status == \"COMPLETED\"):\n            ti.xcom_push(key='evaluated_model_status', value='EVALUATED')\n            print('Model Evaluated Successfully! Job ID is : ', eval_job_id, ' Status : ', job_status)\n        else:\n            ti.xcom_push(key='evaluated_model_status', value='FAILED')\n            print(\"Evaluation Job is terminated !!\")\n\n\ndef approve_model(ti):\n\n    evaluated_model_status = ti.xcom_pull(task_ids = 'task_evaluate_model', key = 'evaluated_model_status')\n\n    if evaluated_model_status == 'FAILED':\n        ti.xcom_push(key='approve_model_status', value='FALIED')\n        print(\"Approval cannot be done as the Evaluation was failed !!\") \n    else:\n        trained_model_id = ti.xcom_pull(task_ids = 'task_train_model', key = 'trained_model_id') \n\n        headers = {\n        'AOA-Project-ID': config_main['projectid'],\n        'Accept': 'application/json, text/plain, */*',\n        'Accept-Language': 'en-US,en;q=0.9',\n        'Authorization': 'Bearer ' + config_main['bearertoken'],\n        'Content-Type': 'application/json',\n        }\n\n        json_data = {\n            \"comments\": (base64.b64encode(config_model['approvalComments'].encode()).decode())\n        }\n\n        response = requests.post('https://airflow-u9usja4twtauvt3s.env.clearscape.teradata.com:8443/modelops/core/api/trainedModels/' + trained_model_id + '/approve' , headers=headers, json=json_data)\n        response_json = response.json()\n        approval_status = response_json['status']\n        if(approval_status == 'APPROVED'):\n            ti.xcom_push(key='approve_model_status', value='EVALUATED')\n            print('Model Approved Successfully! Status: ', approval_status)\n        else:\n            ti.xcom_push(key='approve_model_status', value='FAILED')\n            print('Model not approved! Status: ', approval_status)\n\n\ndef deploy_model(ti):\n\n    approve_model_status = ti.xcom_pull(task_ids = 'task_approve_model', key = 'approve_model_status')\n\n    headers = {\n        'AOA-Project-ID': config_main['projectid'],\n        'Accept': 'application/json, text/plain, */*',\n        'Accept-Language': 'en-US,en;q=0.9',\n        'Authorization': 'Bearer ' + config_main['bearertoken'],\n        'Content-Type': 'application/json',\n    }\n\n\n    json_data = {\n        'engineType': config_model['engineType'],\n        'engineTypeConfig': {\n            'dockerImage':  config_model['dockerImage'],\n            'engine': \"python-batch\",\n            'resources': {\n                'memory': config_resources['memory'],\n                'cpu': config_resources['cpu'],\n            }\n        },\n        'language':\"python\",\n        'datasetConnectionId': config_main['datasetConnectionId'],\n        'datasetTemplateId': config_main['datasetTemplateId'],\n        'cron': config_model['cron'],\n        'publishOnly': \"false\",\n        'args':{}\n    }\n\n    if approve_model_status == 'FAILED':\n        ti.xcom_push(key='deploy_model_status', value='FALIED')\n        print(\"Deployment cannot be done as the model is not approved !!\") \n    else:\n        trained_model_id = ti.xcom_pull(task_ids = 'task_train_model', key = 'trained_model_id') \n\n        response = requests.post('https://airflow-u9usja4twtauvt3s.env.clearscape.teradata.com:8443/modelops/core/api/trainedModels/' + trained_model_id + '/deploy', headers=headers, json=json_data)\n        json_data = response.json()\n\n        # Get the Deployment Job ID\n        deploy_job_id = json_data.get('id')\n        ti.xcom_push(key='deploy_job_id', value=deploy_job_id)\n\n        # deployed_model_id = json_data['metadata']['deployedModel']['id']\n\n        job_status = get_job_status(deploy_job_id)\n        print(\"Started - Deployment Job - Status: \", job_status)\n\n        while job_status != \"COMPLETED\":\n            if job_status==\"ERROR\":\n                ti.xcom_push(key='deploy_model_status', value='FAILED')\n                print(\"The deployment job is terminated due to an Error\")\n                break\n            elif job_status==\"CANCELLED\":\n                ti.xcom_push(key='deploy_model_status', value='FAILED')\n                print(\"The deployment job is Cancelled !!\")\n                break\n            print(\"Job is not completed yet. Current status\", job_status)\n            time.sleep(5) # wait 5s\n    job_status = get_job_status(deploy_job_id)\n\n    # Checking Job status at the end to push the correct deploy_model_status\n    if(job_status == \"COMPLETED\"):\n        ti.xcom_push(key='deploy_model_status', value='DEPLOYED')\n        print('Model Deployed Successfully! Job ID is : ', deploy_job_id, ' Status : ', job_status)\n    else:\n        ti.xcom_push(key='deploy_model_status', value='FAILED')\n        print(\"Deployment Job is terminated !!\")\n\n\n\ndef retire_model(ti):\n\n    deployed_model_status = ti.xcom_pull(task_ids = 'task_deploy_model', key = 'deploy_model_status')\n\n    if deployed_model_status == 'FAILED':\n        ti.xcom_push(key='retire_model_status', value='FALIED')\n        print(\"Retirement cannot be done as the model is not deployed !!\") \n    else:\n        trained_model_id = ti.xcom_pull(task_ids = 'task_train_model', key = 'trained_model_id') \n\n        headers = {\n        'AOA-Project-ID': config_main['projectid'],\n        'Accept': 'application/json, text/plain, */*',\n        'Accept-Language': 'en-US,en;q=0.9',\n        'Authorization': 'Bearer ' + config_main['bearertoken'],\n        'Content-Type': 'application/json',\n        }\n\n        # Identifying the deployment ID\n        get_deployment_id_response = requests.get('https://airflow-u9usja4twtauvt3s.env.clearscape.teradata.com:8443/modelops/core/api/deployments/search/findByStatusAndTrainedModelId?projection=expandDeployment&status=DEPLOYED&trainedModelId=' + trained_model_id , headers=headers)\n  \n        get_deployment_id_json = get_deployment_id_response.json()\n        deployment_id = get_deployment_id_json['_embedded']['deployments'][0]['id']\n\n        json_data = {\n            \"deploymentId\": deployment_id\n        }\n\n        # Retire the specific deployment\n        retire_model_response = requests.post('https://airflow-u9usja4twtauvt3s.env.clearscape.teradata.com:8443/modelops/core/api/trainedModels/' + trained_model_id + '/retire', headers=headers, json=json_data)\n        retire_model_response_json = retire_model_response.json()\n\n                # Get the Evaluation Job ID\n        retire_job_id = retire_model_response_json.get('id')\n        ti.xcom_push(key='retire_job_id', value=retire_job_id)\n\n        job_status = get_job_status(retire_job_id)\n        print(\"Started - Job - Status: \", job_status)\n\n        while job_status != \"COMPLETED\":\n            if job_status==\"ERROR\":\n                print(\"The Retire job is terminated due to an Error\")\n                # Set the Trained Model Id to None here and check in next step (Evaluate)\n                break\n            elif job_status==\"CANCELLED\":\n                print(\"The Retire job is Cancelled !!\")\n                break\n            print(\"Job is not completed yet. Current status\", job_status)\n            time.sleep(5) # wait 5s\n            job_status = get_job_status(retire_job_id)\n\n        # Checking Job status at the end to push the correct evaluate_job_id\n        if(job_status == \"COMPLETED\"):\n            ti.xcom_push(key='retire_model_status', value='RETIRED')\n            print('Model Retired Successfully! Job ID is : ', retire_job_id, ' Status : ', job_status)\n        else:\n            ti.xcom_push(key='retire_model_status', value='FAILED')\n            print(\"Retire Job is terminated !!\")\n\n\n\nwith DAG(\n    dag_id = 'ModelOps_Accelerator_v1',\n    default_args=default_args,\n    description = 'ModelOps lifecycle accelerator for Python Diabetes Prediction model',\n    start_date=datetime.now(), # Set the start_date as per requirement\n    schedule_interval='@daily'\n) as dag:\n    task1 = PythonOperator(\n        task_id='task_train_model',\n        python_callable=train_model\n    )\n    task2 = PythonOperator(\n        task_id='task_evaluate_model',\n        python_callable=evaluate_model\n    )\n    task3 = PythonOperator(\n        task_id='task_approve_model',\n        python_callable=approve_model\n    )\n    task4 = PythonOperator(\n        task_id='task_deploy_model',\n        python_callable=deploy_model\n    )\n    task5 = PythonOperator(\n        task_id='task_retire_model',\n        python_callable=retire_model\n    )\n    \n\ntask1.set_downstream(task2)\ntask2.set_downstream(task3)\ntask3.set_downstream(task4)\ntask4.set_downstream(task5)\n"})})})]}),"\n",(0,o.jsx)(n.h2,{id:"inicializar-airflow-en-docker-compose",children:"Inicializar Airflow en Docker Compose"}),"\n",(0,o.jsx)(n.p,{children:"Al inicializar los servicios de Airflow, como la base de datos interna de Airflow, para sistemas operativos distintos de Linux, es posible que reciba una advertencia de que AIRFLOW_UID no est\xe1 configurado, pero puede ignorarla con seguridad configurando su variable de entorno mediante el siguiente comando."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:', id="UID Airflow variable", role="content-editable emits-gtm-events"',children:'echo -e "AIRFLOW_UID=5000" > .env\n'})}),"\n",(0,o.jsx)(n.p,{children:"Para ejecutar migraciones de bases de datos internas y crear la primera cuenta de usuario, inicialice la base de datos mediante este comando:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:', id="", role="content-editable emits-gtm-events"',children:"docker compose up airflow-init\n"})}),"\n",(0,o.jsx)(n.p,{children:"Una vez completada la inicializaci\xf3n, deber ver un mensaje parecido a este:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:', id="Check Airflow init", role="content-editable emits-gtm-events"',children:" airflow-init_1       | Upgrades done\n airflow-init_1       | Admin user airflow created\n airflow-init_1       | 2.8.2\n start_airflow-init_1 exited with code 0\n"})}),"\n",(0,o.jsx)(n.h2,{id:"limpiar-el-entorno-de-demostraci\xf3n-de-airflow",children:"Limpiar el entorno de demostraci\xf3n de Airflow"}),"\n",(0,o.jsx)(n.p,{children:"Puede limpiar el entorno que eliminar\xe1 los DAG de ejemplo precargados mediante este comando:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:', id="Docker compose down", role="content-editable emits-gtm-events"',children:"docker-compose down -v\n"})}),"\n",(0,o.jsx)(n.p,{children:"Posteriormente, actualice este par\xe1metro en el archivo docker-compose.yaml como se indica a continuaci\xf3n:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:', id="Docker compose yaml", role="content-editable emits-gtm-events"',children:"AIRFLOW__CORE__LOAD_EXAMPLES: 'false'\n"})}),"\n",(0,o.jsx)(n.h2,{id:"iniciar-airflow-con-model-factory-solution-accelerator",children:"Iniciar Airflow con Model Factory Solution Accelerator"}),"\n",(0,o.jsx)(n.p,{children:"Inicie Airflow mediante este comando:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:', id="Docker compose up", role="content-editable emits-gtm-events"',children:"docker-compose up -d\n"})}),"\n",(0,o.jsx)(n.h2,{id:"ejecute-dag-de-airflow-de-model-factory-solution-con-modelops",children:"Ejecute DAG de Airflow de Model Factory Solution con ModelOps"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Ya puede acceder a la interfaz de usuario de Airflow mediante la direcci\xf3n ",(0,o.jsx)(n.a,{href:"http://localhost:8080/",children:"http://localhost:8080/"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Inicio de sesi\xf3n de Airflow",src:a(270).A+"",width:"3719",height:"1305"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Inicie sesi\xf3n con el nombre de usuario: airflow y la contrase\xf1a: airflow. En el men\xfa de DAG podr\xe1 ver los DAG que ha creado."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"DAG",src:a(19693).A+"",width:"3714",height:"1233"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Seleccione su \xfaltimo DAG creado y el gr\xe1fico tendr\xe1 un aspecto similar al siguiente:"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"DAG",src:a(99641).A+"",width:"3673",height:"1773"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Ahora puede activar el DAG usando el icono de reproducci\xf3n en la parte superior derecha."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Puede consultar los registros seleccionando cualquier tarea y posteriormente haciendo clic en el men\xfa de registros:"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"En la secci\xf3n Trabajos de ModelOps de ClearScape Analytics puede ver que los trabajos han empezado a ejecutarse:"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"DAG",src:a(97642).A+"",width:"3753",height:"814"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Ahora puede ver que todas las tareas se ejecutaron correctamente."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"DAG",src:a(91343).A+"",width:"3690",height:"1524"})}),"\n",(0,o.jsx)(n.h2,{id:"resumen",children:"Resumen"}),"\n",(0,o.jsx)(n.p,{children:"Este tutorial tiene como objetivo proporcionar un ejercicio pr\xe1ctico sobre c\xf3mo instalar un entorno Airflow en un servidor Linux y c\xf3mo utilizar Airflow para interactuar con una base de datos Teradata Vantage. Se proporciona un ejemplo adicional sobre c\xf3mo integrar Airflow y la herramienta de modelado y mantenimiento de datos dbt para crear y cargar una base de datos Teradata Vantage."}),"\n",(0,o.jsx)(n.h2,{id:"lectura-adicional",children:"Lectura adicional"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://docs.teradata.com/search/documents?query=ModelOps&sort=last_update&virtual-field=title_only&content-lang=",children:"Documentaci\xf3n de ModelOps"}),"."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},99641:(e,n,a)=>{a.d(n,{A:()=>o});const o=a.p+"assets/images/DAG_graph-e3b7d1d67a022083c12c13f651d1f2e4.png"},19693:(e,n,a)=>{a.d(n,{A:()=>o});const o=a.p+"assets/images/DAGs-8609113cb8220ce56d2be90926c1deb7.png"},270:(e,n,a)=>{a.d(n,{A:()=>o});const o=a.p+"assets/images/LoginPage-7f3ec330b28502b922f900514e05656e.png"},55345:(e,n,a)=>{a.d(n,{A:()=>o});const o=a.p+"assets/images/Workflow-232b85aea20f2c1e830cc0454f4dffdd.png"},97642:(e,n,a)=>{a.d(n,{A:()=>o});const o=a.p+"assets/images/modelOps1-1ec7e72182e2db60e439657b40548894.png"},91343:(e,n,a)=>{a.d(n,{A:()=>o});const o=a.p+"assets/images/successTasks-eded69426eea01ba95119686320f84e9.png"},28453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>s});var o=a(96540);const t={},i=o.createContext(t);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);
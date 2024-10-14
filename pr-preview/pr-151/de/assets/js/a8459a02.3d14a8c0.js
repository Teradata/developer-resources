"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[6665],{41269:(e,n,a)=>{a.d(n,{Ay:()=>r,RM:()=>s});var t=a(74848),i=a(28453);const s=[];function o(e){const n={a:"a",admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["If you have any questions or need further assistance, please visit our ",(0,t.jsx)(n.a,{href:"https://support.teradata.com/community",children:"community forum"})," where you can get support and interact with other community members."]})})}function r(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},62680:(e,n,a)=>{a.d(n,{Ay:()=>r,RM:()=>s});var t=a(74848),i=a(28453);const s=[];function o(e){const n={a:"a",admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["If you need a test instance of Vantage, you can provision one for free at ",(0,t.jsx)(n.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})})}function r(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},13263:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>h,toc:()=>u});var t=a(74848),i=a(28453),s=a(62680);function o(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"create-a-new-project-or-use-an-existing-one",children:"Create a new Project or use an existing one"}),"\n",(0,t.jsx)(n.p,{children:"Add a new Project"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"create project"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Details"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Name: Demo: your-name"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Description: ModelOps Demo"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Group: your-name"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Path: ",(0,t.jsx)(n.a,{href:"https://github.com/Teradata/modelops-demo-models",children:"https://github.com/Teradata/modelops-demo-models"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Credentials: No Credentials"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Branch: master"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Here you can test the git connection. If is green then save and continue. Skip the service connection settings for now."}),"\n",(0,t.jsx)(n.p,{children:"When creating a new project, ModelOps will ask you for a new connection."}),"\n",(0,t.jsx)(n.h2,{id:"create-a-personal-connection",children:"Create a Personal Connection"}),"\n",(0,t.jsx)(n.p,{children:"Personal connection"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Name: Vantage personal your-name"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Description: Vantage demo env"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Host: tdprd.td.teradata.com (internal for teradata transcend only)"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Database: your-db"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"VAL Database: TRNG_XSP (internal for teradata transcend only)"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"BYOM Database: TRNG_BYOM (internal for teradata transcend only)"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Login Mech: TDNEGO"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Username/Password"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"validate-permissions-in-sql-database-for-val-and-byom",children:"Validate permissions in SQL database for VAL and BYOM"}),"\n",(0,t.jsx)(n.p,{children:"You can check the permissions with the new healthcheck panel in the connections panel"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"ModelOps Healtcheck screenshot",src:a(45060).A+"",width:"1342",height:"1686"})}),"\n",(0,t.jsx)(n.h2,{id:"add-dataset-to-identify-vantage-tables-for-byom-evaluation-and-scoring",children:"Add dataset to identify Vantage tables for BYOM evaluation and scoring"}),"\n",(0,t.jsx)(n.p,{children:"Let's create a new dataset template, then 1 dataset for training and 2 datasets for evaluation so we can monitor model quality metrics with 2 different datasets"}),"\n",(0,t.jsx)(n.p,{children:"Add datasets"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"create dataset template"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Catalog"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Name: PIMA"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Description: PIMA Diabetes"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Feature Catalog: Vantage"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Database: your-db"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Table: aoa_feature_metadata"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Features\nQuery:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM {your-db}.pima_patient_features\n"})}),"\n",(0,t.jsx)(n.p,{children:"Entity Key: PatientId\nFeatures: NumTimesPrg, PlGlcConc, BloodP, SkinThick, TwoHourSerIns, BMI, DiPedFunc, Age"}),"\n",(0,t.jsx)(n.p,{children:"Entity & Target\nQuery:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM {your-db}.pima_patient_diagnoses\n"})}),"\n",(0,t.jsx)(n.p,{children:"Entity Key: PatientId\nTarget: HasDiabetes"}),"\n",(0,t.jsx)(n.p,{children:"Predictions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Database: your-db"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Table: pima_patient_predictions"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Entity selection:"}),"\n",(0,t.jsx)(n.p,{children:"Query:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM pima_patient_features WHERE patientid MOD 5 = 0\n"})}),"\n",(0,t.jsx)(n.p,{children:"Only for v6 (in v7 you will define this in the BYOM no code screen): BYOM Target Column: CAST(CAST(json_report AS JSON).JSONExtractValue('$.predicted_HasDiabetes') AS INT)"}),"\n",(0,t.jsx)(n.h2,{id:"create-training-dataset",children:"Create training dataset"}),"\n",(0,t.jsx)(n.p,{children:"Basic"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Name: Train"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Description: Training dataset"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Scope: Training"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Entity & Target"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Query:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM {your-db}.pima_patient_diagnoses WHERE patientid MOD 5 = 1\n"})}),"\n",(0,t.jsx)(n.h2,{id:"create-evaluation-dataset-1",children:"Create evaluation dataset 1"}),"\n",(0,t.jsx)(n.p,{children:"Basic"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Name: Evaluate"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Description: Evaluation dataset"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Scope: Evaluation"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Entity & Target"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Query:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM {your-db}.pima_patient_diagnoses WHERE patientid MOD 5 = 2\n"})}),"\n",(0,t.jsx)(n.h2,{id:"create-evaluation-dataset-2",children:"Create evaluation dataset 2"}),"\n",(0,t.jsx)(n.p,{children:"Basic"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Name: Evaluate"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Description: Evaluation dataset"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Scope: Evaluation"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Entity & Target"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Query:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM {your-db}.pima_patient_diagnoses WHERE patientid MOD 5 = 3\n"})})]})}function r(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}var l=a(41269);const d={sidebar_position:7,author:"Pablo Escobar de la Oliva",email:"pablo.escobardelaoliva@teradata.com",page_last_update:"May 29th, 2022",description:"Tutorial for deploying and monitoring a Python model into Vantage using ModelOps and Git repository",keywords:["modelops","python","git","clearscape analytics","teradata","data warehouses","teradata","vantage","cloud data platform","machine learning","artificial intelligence","business intelligence","enterprise analytics"]},c="ModelOps - Import and Deploy your first GIT Model",h={id:"analyze-data/deploy-and-monitor-machine-learning-models-with-teradata-modelops-and-git",title:"ModelOps - Import and Deploy your first GIT Model",description:"Tutorial for deploying and monitoring a Python model into Vantage using ModelOps and Git repository",source:"@site/quickstarts/analyze-data/deploy-and-monitor-machine-learning-models-with-teradata-modelops-and-git.md",sourceDirName:"analyze-data",slug:"/analyze-data/deploy-and-monitor-machine-learning-models-with-teradata-modelops-and-git",permalink:"/pr-preview/pr-151/de/quickstarts/analyze-data/deploy-and-monitor-machine-learning-models-with-teradata-modelops-and-git",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,author:"Pablo Escobar de la Oliva",email:"pablo.escobardelaoliva@teradata.com",page_last_update:"May 29th, 2022",description:"Tutorial for deploying and monitoring a Python model into Vantage using ModelOps and Git repository",keywords:["modelops","python","git","clearscape analytics","teradata","data warehouses","teradata","vantage","cloud data platform","machine learning","artificial intelligence","business intelligence","enterprise analytics"]},sidebar:"tutorialSidebar",previous:{title:"ModelOps - Import and Deploy your first BYOM Model",permalink:"/pr-preview/pr-151/de/quickstarts/analyze-data/deploy-and-monitor-machine-learning-models-with-teradata-modelops-and-byom"},next:{title:"Execute Airflow workflows with ModelOps - Model Factory Solution Accelerator",permalink:"/pr-preview/pr-151/de/quickstarts/analyze-data/execute-airflow-workflows-with-clearscape-analytics-modelops-model-factory-solution"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},...s.RM,{value:"Understand where we are in the Methodology",id:"understand-where-we-are-in-the-methodology",level:2},{value:"Create a new Project or use an existing one",id:"create-a-new-project-or-use-an-existing-one",level:2},{value:"Create a Personal Connection",id:"create-a-personal-connection",level:2},{value:"Validate permissions in SQL database for VAL and BYOM",id:"validate-permissions-in-sql-database-for-val-and-byom",level:2},{value:"Add dataset to identify Vantage tables for BYOM evaluation and scoring",id:"add-dataset-to-identify-vantage-tables-for-byom-evaluation-and-scoring",level:2},{value:"Create training dataset",id:"create-training-dataset",level:2},{value:"Create evaluation dataset 1",id:"create-evaluation-dataset-1",level:2},{value:"Create evaluation dataset 2",id:"create-evaluation-dataset-2",level:2},{value:"Prepare code templates",id:"prepare-code-templates",level:2},{value:"Model Lifecycle for a new GIT",id:"model-lifecycle-for-a-new-git",level:2},{value:"Summary",id:"summary",level:2},{value:"Further reading",id:"further-reading",level:2},...l.RM];function m(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"modelops---import-and-deploy-your-first-git-model",children:"ModelOps - Import and Deploy your first GIT Model"}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"This is a how-to for people who are new to ClearScape Analytics ModelOps. In the tutorial, you will be able to create a new project in ModelOps, upload the required data to Vantage, and track the full lifecycle of a demo model using code templates and following the methodology for GIT models in ModelOps."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Access to a Teradata Vantage instance with ClearScape Analytics (includes ModelOps)"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Ability to run Jupyter notebooks"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.Ay,{}),"\n",(0,t.jsx)(n.p,{children:"Files needed"}),"\n",(0,t.jsx)(n.p,{children:"Let's start by downloading the needed files for this tutorial. Download these 4 attachments and upload them in your Notebook filesystem. Select the files depending on your version of ModelOps:"}),"\n",(0,t.jsx)(n.p,{children:"ModelOps version 6 (October 2022):"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:a(26110).A+"",children:"Download the ModelOps training Notebook"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:a(39539).A+"",children:"Download BYOM Notebook file for demo use case"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:a(88205).A+"",children:"Download data files for demo use case"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:a(97660).A+"",children:"Download BYOM code files for demo use case"})}),"\n",(0,t.jsx)(n.p,{children:"Alternatively you can git clone following repos"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/willfleury/modelops-getting-started\ngit clone https://github.com/Teradata/modelops-demo-models/\n"})}),"\n",(0,t.jsx)(n.p,{children:"ModelOps version 7 (April 2023):"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:a(53567).A+"",children:"Download the ModelOps training Notebook"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:a(63986).A+"",children:"Download BYOM Notebook file for demo use case"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:a(82596).A+"",children:"Download data files for demo use case"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:a(88645).A+"",children:"Download BYOM code files for demo use case"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone -b v7 https://github.com/willfleury/modelops-getting-started.git\ngit clone https://github.com/Teradata/modelops-demo-models/\n"})}),"\n",(0,t.jsx)(n.p,{children:"Setting up the database and Jupyter environment"}),"\n",(0,t.jsx)(n.p,{children:"Follow the ModelOps_Training Jupyter Notebook to setup the database, tables and libraries needed for the demo."}),"\n",(0,t.jsx)(n.h2,{id:"understand-where-we-are-in-the-methodology",children:"Understand where we are in the Methodology"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"ModelOps Methodology GIT screenshot",src:a(96952).A+"",width:"960",height:"372"})}),"\n",(0,t.jsx)(r,{}),"\n",(0,t.jsx)(n.h2,{id:"prepare-code-templates",children:"Prepare code templates"}),"\n",(0,t.jsx)(n.p,{children:"For Git Models we need to fill the code templates available when adding a new model."}),"\n",(0,t.jsx)(n.p,{children:"These code scripts will be stored in the git repository under: model_definitions/your-model/model_modules/"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"init"}),".py : this an empty file required for python modules"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"training.py: this script contains train function"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def train(context: ModelContext, **kwargs):\n    aoa_create_context()\n\n    # your training code\n\n    # save your model\n    joblib.dump(model, f"{context.artifact_output_path}/model.joblib")\n\n    record_training_stats(...)\n'})}),"\n",(0,t.jsx)(n.p,{children:"Review the Operationalize notebook to see how you can execute this from CLI or from notebook as an alternative to ModelOps UI."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"evaluation.py: this script contains evaluate function"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def evaluate(context: ModelContext, **kwargs):\n    aoa_create_context()\n\n    # read your model\n    model = joblib.load(f"{context.artifact_input_path}/model.joblib")\n\n    # your evaluation logic\n\n    record_evaluation_stats(...)\n'})}),"\n",(0,t.jsx)(n.p,{children:"Review the Operationalize notebook to see how you can execute this from CLI or from notebook as an alternative to ModelOps UI."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"scoring.py: this script contains score function"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def score(context: ModelContext, **kwargs):\n    aoa_create_context()\n\n    # read your model\n    model = joblib.load(f"{context.artifact_input_path}/model.joblib")\n\n    # your evaluation logic\n\n    record_scoring_stats(...)\n'})}),"\n",(0,t.jsx)(n.p,{children:"Review the Operationalize notebook to see how you can execute this from CLI or from notebook as an alternative to ModelOps UI."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"requirements.txt: this file contains the library names and versions required for your code scripts. Example:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"%%writefile ../model_modules/requirements.txt\nxgboost==0.90\nscikit-learn==0.24.2\nshap==0.36.0\nmatplotlib==3.3.1\nteradataml==17.0.0.4\nnyoka==4.3.0\naoa==6.0.0\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"config.json: this file located in the parent folder (your-model folder) contains default hyper-parameters"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'%%writefile ../config.json\n{\n   "hyperParameters": {\n      "eta": 0.2,\n      "max_depth": 6\n   }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Go and review the code scripts for the demo model in the repository: ",(0,t.jsx)(n.a,{href:"https://github.com/Teradata/modelops-demo-models/",children:"https://github.com/Teradata/modelops-demo-models/"})]}),"\n",(0,t.jsx)(n.p,{children:"Go into model_definitions->python-diabetes->model_modules"}),"\n",(0,t.jsx)(n.h2,{id:"model-lifecycle-for-a-new-git",children:"Model Lifecycle for a new GIT"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Open Project to see models available from GIT"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Train a new model version"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"see how CommitID from code repository is tracked"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Evaluate"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Review evaluation report, including dataset statistics and model metrics"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Compare with other model versions"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Approve"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Deploy in Vantage - Engine, Publish, Schedule. Scoring dataset is required\nUse your connection and select a database. e.g "aoa_byom_models"'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Deploy in Docker Batch  - Engine, Publish, Schedule. Scoring dataset is required\nUse your connection and select a database. e.g "aoa_byom_models"'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Deploy in Restful Batch  - Engine, Publish, Schedule. Scoring dataset is required\nUse your connection and select a database. e.g "aoa_byom_models"'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Deployments/executions"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Evaluate again with dataset2 - to monitor model metrics behavior"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Monitor Model Drift - data and metrics"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Open BYOM notebook to execute the PMML predict from SQL code when deployed in Vantage"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Test Restful from ModelOps UI or from curl command"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Retire deployments"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsx)(n.p,{children:"In this quick start we have learned how to follow a full lifecycle of GIT models into ModelOps and how to deploy it into Vantage or into Docker containers for Edge deployments. Then how we can schedule a batch scoring or test restful or on-demand scorings and start monitoring on Data Drift and Model Quality metrics."}),"\n",(0,t.jsx)(n.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://docs.teradata.com/search/documents?query=ModelOps&sort=last_update&virtual-field=title_only&content-lang=",children:"ModelOps documentation"}),"."]}),"\n"]}),"\n","\n",(0,t.jsx)(l.Ay,{})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},39539:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/files/BYOM_v6-0880e49b76a9cc93fe3ff62ad6cd45d7.ipynb"},63986:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/files/BYOM_v7-0880e49b76a9cc93fe3ff62ad6cd45d7.ipynb"},97660:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/files/ModelOps_BYOM_files_v6-91b491ab46de8f533a76f321d4e17d5d.zip"},88645:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/files/ModelOps_BYOM_files_v7-f0d48a0b1997bd0c54753b3a2a9be118.zip"},88205:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/files/ModelOps_Data_files_v6-701b22c6cdf97c7c3747f4795c976e60.zip"},82596:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/files/ModelOps_Data_files_v7-6c60bad364605243445122176bdd603b.zip"},26110:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/files/ModelOps_Training_v6-60fc8a8c4a4a107170f428726473dbee.ipynb"},53567:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/files/ModelOps_Training_v7-9733bd4f8f5af50d0cf7d90a4ddf7083.ipynb"},45060:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/ModelOps_Healthcheck-f6580052bcf5e0ae72b2873dddebb83d.png"},96952:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/modelops-git-dd3b71d5a248c5ffaf6083e379dd49e5.png"},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>r});var t=a(96540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
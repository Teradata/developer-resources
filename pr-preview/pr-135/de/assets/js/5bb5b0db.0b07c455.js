"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[6677],{62680:(e,a,r)=>{r.d(a,{Ay:()=>s,RM:()=>i});var t=r(74848),n=r(28453);const i=[];function o(e){const a={a:"a",admonition:"admonition",p:"p",...(0,n.R)(),...e.components};return(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsxs)(a.p,{children:["If you need a test instance of Vantage, you can provision one for free at ",(0,t.jsx)(a.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})})}function s(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},71161:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>u,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var t=r(74848),n=r(28453),i=r(56240),o=r(19365),s=r(62680);const l={sidebar_position:3.5,author:"Satish Chinthanippu",email:"satish.chinthanippu@teradata.com",page_last_update:"July 24th, 2024",description:"Transferring CSV, JSON, and Parquet data from Azure Blob Storage to Teradata Vantage with Airflow's Azure Cloud Transfer Operator",keywords:["data warehouses","teradata","vantage","transfer","cloud data platform","object storage","business intelligence","enterprise analytics","airflow","airflow teradata provider","microsoft azure blob storage"]},d="Data Transfer from Azure Blob to Teradata Vantage Using Apache Airflow",c={id:"manage-data/airflow-azure-to-teradata-transfer-operator-doc",title:"Data Transfer from Azure Blob to Teradata Vantage Using Apache Airflow",description:"Transferring CSV, JSON, and Parquet data from Azure Blob Storage to Teradata Vantage with Airflow's Azure Cloud Transfer Operator",source:"@site/quickstarts/manage-data/airflow-azure-to-teradata-transfer-operator-doc.md",sourceDirName:"manage-data",slug:"/manage-data/airflow-azure-to-teradata-transfer-operator-doc",permalink:"/pr-preview/pr-135/de/quickstarts/manage-data/airflow-azure-to-teradata-transfer-operator-doc",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3.5,frontMatter:{sidebar_position:3.5,author:"Satish Chinthanippu",email:"satish.chinthanippu@teradata.com",page_last_update:"July 24th, 2024",description:"Transferring CSV, JSON, and Parquet data from Azure Blob Storage to Teradata Vantage with Airflow's Azure Cloud Transfer Operator",keywords:["data warehouses","teradata","vantage","transfer","cloud data platform","object storage","business intelligence","enterprise analytics","airflow","airflow teradata provider","microsoft azure blob storage"]},sidebar:"tutorialSidebar",previous:{title:"Use Apache Airflow with Teradata Vantage",permalink:"/pr-preview/pr-135/de/quickstarts/manage-data/airflow"},next:{title:"dbt with Teradata Vantage",permalink:"/pr-preview/pr-135/de/quickstarts/manage-data/dbt"}},u={},h=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},...s.RM,{value:"Install Apache Airflow",id:"install-apache-airflow",level:2},{value:"Configure Apache Airflow",id:"configure-apache-airflow",level:2},{value:"Start the Apache Airflow web server",id:"start-the-apache-airflow-web-server",level:2},{value:"Define the Apache Airflow connection to Vantage",id:"define-the-apache-airflow-connection-to-vantage",level:2},{value:"Define DAG in Apache Airflow",id:"define-dag-in-apache-airflow",level:2},{value:"Load DAG",id:"load-dag",level:2},{value:"Run DAG",id:"run-dag",level:2},{value:"Transfer data from Private Blob Storage Container to Teradata instance",id:"transfer-data-from-private-blob-storage-container-to-teradata-instance",level:2},{value:"Summary",id:"summary",level:2},{value:"Further reading",id:"further-reading",level:2}];function f(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"data-transfer-from-azure-blob-to-teradata-vantage-using-apache-airflow",children:"Data Transfer from Azure Blob to Teradata Vantage Using Apache Airflow"}),"\n",(0,t.jsx)(a.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(a.p,{children:["This document provides instructions and guidance for transferring data in CSV, JSON and Parquet formats from Microsoft Azure Blob Storage to Teradata Vantage using the Airflow Teradata Provider and the ",(0,t.jsx)(a.a,{href:"https://airflow.apache.org/docs/apache-airflow-providers-teradata/stable/operators/azure_blob_to_teradata.html",children:"Azure Cloud Transfer Operator"}),". It outlines the setup, configuration and execution steps required to establish a seamless data transfer pipeline between these platforms."]}),"\n",(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsxs)(a.p,{children:["Use ",(0,t.jsx)(a.a,{href:"https://learn.microsoft.com/en-us/windows/wsl/install",children:"The Windows Subsystem for Linux (WSL)"})," on ",(0,t.jsx)(a.code,{children:"Windows"})," to try this quickstart example."]})}),"\n",(0,t.jsx)(a.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Access to a Teradata Vantage instance, version 17.10 or higher.","\n",(0,t.jsx)(s.Ay,{}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["Python 3.8, 3.9, 3.10 or 3.11 and python3-env, python3-pip installed.","\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(o.A,{value:"linux",label:"Linux",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"sudo apt install -y python3-venv python3-pip\n"})})}),(0,t.jsx)(o.A,{value:"wsl",label:"WSL",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"sudo apt install -y python3-venv python3-pip\n"})})}),(0,t.jsxs)(o.A,{value:"macos",label:"macOS",children:[(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"brew install python\n"})}),(0,t.jsxs)(a.p,{children:["Refer ",(0,t.jsx)(a.a,{href:"https://docs.python-guide.org/starting/install3/osx/",children:"Installation Guide"})," if you face any issues."]})]})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"install-apache-airflow",children:"Install Apache Airflow"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Create a new python environment to manage airflow and its dependencies. Activate the environment."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:'python3 -m venv airflow_env\nsource airflow_env/bin/activate\nAIRFLOW_VERSION=2.9.3\nPYTHON_VERSION="$(python3 --version | cut -d " " -f 2 | cut -d "." -f 1-2)"\nCONSTRAINT_URL="https://raw.githubusercontent.com/apache/airflow/constraints-${AIRFLOW_VERSION}/constraints-${PYTHON_VERSION}.txt"\npip install "apache-airflow##${AIRFLOW_VERSION}" --constraint "${CONSTRAINT_URL}"\n'})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Install the Apache Airflow Teradata provider package and the Microsoft Azure provider package."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:'pip install "apache-airflow-providers-teradata[microsoft.azure]"\n'})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Set the AIRFLOW_HOME environment variable."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"export AIRFLOW_HOME=~/airflow\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"configure-apache-airflow",children:"Configure Apache Airflow"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Switch to the virtual environment where Apache Airflow was installed at ",(0,t.jsx)(a.a,{href:"/pr-preview/pr-135/de/quickstarts/manage-data/airflow-azure-to-teradata-transfer-operator-doc",children:"Install Apache Airflow"})]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"source airflow_env/bin/activate\n"})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Configure the listed environment variables to activate the test connection button, preventing the loading of sample DAGs and default connections in the Airflow UI."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"export AIRFLOW__CORE__TEST_CONNECTION=Enabled\nexport AIRFLOW__CORE__LOAD_EXAMPLES=false\nexport AIRFLOW__CORE__LOAD_DEFAULT_CONNECTIONS=false\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"start-the-apache-airflow-web-server",children:"Start the Apache Airflow web server"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Run airflow's web server"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"airflow standalone\n"})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Access the airflow UI. Visit ",(0,t.jsx)(a.a,{href:"https://localhost:8080",children:"https://localhost:8080"})," in the browser and log in with the admin account details shown in the terminal."]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Airflow Password",src:r(54304).A+"",width:"1991",height:"374"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"define-the-apache-airflow-connection-to-vantage",children:"Define the Apache Airflow connection to Vantage"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsx)(a.li,{children:"Click on Admin - Connections"}),"\n",(0,t.jsx)(a.li,{children:"Click on + to define a new connection to a Teradata Vantage instance."}),"\n",(0,t.jsxs)(a.li,{children:["Assign the new connection the id ",(0,t.jsx)(a.code,{children:"teradata_default"})," with Teradata Vantage instance details.","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Connection Id: teradata_default"}),"\n",(0,t.jsx)(a.li,{children:"Connection Type: Teradata"}),"\n",(0,t.jsx)(a.li,{children:"Database Server URL (required): Teradata Vantage instance hostname to connect to."}),"\n",(0,t.jsx)(a.li,{children:"Database: database name"}),"\n",(0,t.jsx)(a.li,{children:"Login (required): database user"}),"\n",(0,t.jsx)(a.li,{children:"Password (required): database user password"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["Refer ",(0,t.jsx)(a.a,{href:"https://airflow.apache.org/docs/apache-airflow-providers-teradata/stable/connections/teradata.html",children:"Teradata Connection"})," for more details."]}),"\n",(0,t.jsx)(a.h2,{id:"define-dag-in-apache-airflow",children:"Define DAG in Apache Airflow"}),"\n",(0,t.jsxs)(a.p,{children:["DAGs in airflow are defined as python files. The DAG below transfers data from Teradata-supplied public blob containers to a Teradata Vantage instance. Copy the python code below and save it as ",(0,t.jsx)(a.code,{children:"airflow-azure-to-teradata-transfer-operator-demo.py"})," under the directory $AIRFLOW_HOME/dags."]}),"\n",(0,t.jsx)(a.p,{children:"This DAG is a very simple example that covers:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Droping the destination table if it exists"}),"\n",(0,t.jsx)(a.li,{children:"Transfer of the data stored in object storage"}),"\n",(0,t.jsx)(a.li,{children:"Get the number of transferred records"}),"\n",(0,t.jsx)(a.li,{children:"Write the number of transferred records to the log"}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["Refer ",(0,t.jsx)(a.a,{href:"https://airflow.apache.org/docs/apache-airflow-providers-teradata/stable/_api/airflow/providers/teradata/transfers/azure_blob_to_teradata/index.html",children:"Azure Blob Storage To Teradata Operator"})," for more information on ",(0,t.jsx)(a.code,{children:"Azure Blob Storage to Teradata"})," Transfer Operator."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'\nfrom __future__ import annotations\n\nimport datetime\n\nfrom airflow import DAG\nfrom airflow.operators.bash import BashOperator\nfrom airflow.providers.teradata.operators.teradata import TeradataOperator\nfrom airflow.providers.teradata.transfers.azure_blob_to_teradata import AzureBlobStorageToTeradataOperator\n\nDAG_ID = "example_azure_blob_to_teradata_transfer_operator"\nCONN_ID = "teradata_default"\nwith DAG(\n    dag_id=DAG_ID,\n    start_date=datetime.datetime(2020, 2, 2),\n    schedule="@once",\n    catchup=False,\n    default_args={"teradata_conn_id": CONN_ID},\n) as dag:\n    # Drop table if it exists\n    drop_table_if_exists = TeradataOperator(\n        task_id="drop_table_if_exists",\n        sql="DROP table example_blob_teradata_csv;",\n    )\n    # Transfer data from Azure blob storage to Teradata Vantage instance\n    transfer_data_csv = AzureBlobStorageToTeradataOperator(\n        task_id="transfer_data_blob_to_teradata_csv",\n        blob_source_key="/az/akiaxox5jikeotfww4ul.blob.core.windows.net/td-usgs/CSVDATA/09380000/2018/06/",\n        public_bucket=True,\n        teradata_table="example_blob_teradata_csv",\n        teradata_conn_id="teradata_default",\n        trigger_rule="always",\n    )\n    # Get the number of records transferred from azure blob to teradata table\n    read_data_table_csv = TeradataOperator(\n        task_id="read_data_table_csv",\n        sql="SELECT count(1) from example_blob_teradata_csv;",\n    )\n    # Print number of records in table\n    print_number_of_records = BashOperator(\n    task_id=\'print_number_of_records\',\n    bash_command="echo {{ ti.xcom_pull(task_ids=\'read_data_table_csv\') }}",\n    )\n    (\n       drop_table_if_exists\n        >> transfer_data_csv\n        >> read_data_table_csv\n        >> print_number_of_records\n    )\n'})}),"\n",(0,t.jsx)(a.h2,{id:"load-dag",children:"Load DAG"}),"\n",(0,t.jsx)(a.p,{children:"When the DAG file is copied to $AIRFLOW_HOME/dags, Apache Airflow displays the DAG in the UI under the DAGs section. It will take 2 to 3 minutes to load the DAG in the Apache Airflow UI."}),"\n",(0,t.jsx)(a.h2,{id:"run-dag",children:"Run DAG"}),"\n",(0,t.jsx)(a.p,{children:"Run the dag as shown in the image below."}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Run dag",src:r(81220).A+"",width:"1856",height:"350"})}),"\n",(0,t.jsx)(a.h2,{id:"transfer-data-from-private-blob-storage-container-to-teradata-instance",children:"Transfer data from Private Blob Storage Container to Teradata instance"}),"\n",(0,t.jsx)(a.p,{children:"To successfully transfer data from a Private Blob Storage Container to a Teradata instance, the following prerequisites are necessary."}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["An Azure account. You can start with a ",(0,t.jsx)(a.a,{href:"https://azure.microsoft.com/free/",children:"free account"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Create an ",(0,t.jsx)(a.a,{href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-quickstart-create-account?tabs=azure-portal",children:"Azure storage account"})]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Create a ",(0,t.jsx)(a.a,{href:"https://learn.microsoft.com/en-us/azure/storage/blobs/blob-containers-portal",children:"blob container"})," under Azure storage account"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"https://learn.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-portal",children:"Upload"})," CSV/JSON/Parquest format files to blob container"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Create a Teradata Authorization object with the Azure Blob Storage Account and the Account Secret Key"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"CREATE AUTHORIZATION azure_authorization USER 'azuretestquickstart' PASSWORD 'AZURE_BLOB_ACCOUNT_SECRET_KEY'\n"})}),"\n",(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsxs)(a.p,{children:["Replace ",(0,t.jsx)(a.code,{children:"AZURE_BLOB_ACCOUNT_SECRET_KEY"})," with Azure storage account ",(0,t.jsx)(a.code,{children:"azuretestquickstart"}),"  ",(0,t.jsx)(a.a,{href:"https://learn.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?toc=%2Fazure%2Fstorage%2Fblobs%2Ftoc.json&bc=%2Fazure%2Fstorage%2Fblobs%2Fbreadcrumb%2Ftoc.json&tabs=azure-portal",children:"access key"})]})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:["Modify ",(0,t.jsx)(a.code,{children:"blob_source_key"})," with YOUR-PRIVATE-OBJECT-STORE-URI in ",(0,t.jsx)(a.code,{children:"transfer_data_csv"})," task and add ",(0,t.jsx)(a.code,{children:"teradata_authorization_name"})," field with Teradata Authorization Object name"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'transfer_data_csv = AzureBlobStorageToTeradataOperator(\n        task_id="transfer_data_blob_to_teradata_csv",\n        blob_source_key="YOUR-OBJECT-STORE-URI",\n        teradata_table="example_blob_teradata_csv",\n        teradata_conn_id="teradata_default",\n        teradata_authorization_name="azure_authorization",\n        trigger_rule="always",\n    )\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsx)(a.p,{children:"This guide details the utilization of the Airflow Teradata Provider\u2019s Azure Cloud Transfer Operator to seamlessly transfer CSV, JSON, and Parquet data from Microsoft Azure Blob Storage to Teradata Vantage, facilitating streamlined data operations between these platforms."}),"\n",(0,t.jsx)(a.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/dags.html",children:"Apache Airflow DAGs reference"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/SQL-Data-Definition-Language-Syntax-and-Examples/Authorization-Statements-for-External-Routines/CREATE-AUTHORIZATION-and-REPLACE-AUTHORIZATION",children:"Teradata Authorization"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://learn.microsoft.com/en-us/windows/wsl/install",children:"Install WSL on windows"})}),"\n"]})]})}function p(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},19365:(e,a,r)=>{r.d(a,{A:()=>o});r(96540);var t=r(34164);const n={tabItem:"tabItem_Ymn6"};var i=r(74848);function o(e){var a=e.children,r=e.hidden,o=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(n.tabItem,o),hidden:r,children:a})}},56240:(e,a,r)=>{r.d(a,{A:()=>w});var t=r(96540),n=r(34164),i=r(23104),o=r(56347),s=r(205),l=r(57485);var d=r(89466);function c(e){var a,r;return null!=(a=null==(r=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((a=e.props)&&"object"==typeof a&&"value"in a))return e;var a;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?a:[]}function u(e){var a=e.values,r=e.children;return(0,t.useMemo)((function(){var e=null!=a?a:function(e){return c(e).map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes,default:a.default}}))}(r);return function(e){var a,r,t=(void 0===(r=function(e,a){return e.value===a.value})&&(r=function(e,a){return e===a}),(a=e).filter((function(e,t){return a.findIndex((function(a){return r(a,e)}))!==t})));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[a,r])}function h(e){var a=e.value;return e.tabValues.some((function(e){return e.value===a}))}function f(e){var a=e.queryString,r=void 0!==a&&a,n=e.groupId,i=(0,o.W6)(),s=function(e){var a=e.queryString,r=void 0!==a&&a,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:n});return[(0,l.aZ)(s),(0,t.useCallback)((function(e){if(s){var a=new URLSearchParams(i.location.search);a.set(s,e),i.replace(Object.assign({},i.location,{search:a.toString()}))}}),[s,i])]}function p(e){var a,r,n,i,o=e.defaultValue,l=e.queryString,c=void 0!==l&&l,p=e.groupId,b=u(e),m=(0,t.useState)((function(){return function(e){var a,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var n=null!=(a=t.find((function(e){return e.default})))?a:t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:o,tabValues:b})})),g=m[0],x=m[1],v=f({queryString:c,groupId:p}),_=v[0],w=v[1],j=(a=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),r=(0,d.Dv)(a),n=r[0],i=r[1],[n,(0,t.useCallback)((function(e){a&&i.set(e)}),[a,i])]),A=j[0],T=j[1],O=function(){var e=null!=_?_:A;return h({value:e,tabValues:b})?e:null}();return(0,s.A)((function(){O&&x(O)}),[O]),{selectedValue:g,selectValue:(0,t.useCallback)((function(e){if(!h({value:e,tabValues:b}))throw new Error("Can't select invalid tab value="+e);x(e),w(e),T(e)}),[w,T,b]),tabValues:b}}var b=r(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(74848);function x(e){var a=e.className,r=e.block,t=e.selectedValue,o=e.selectValue,s=e.tabValues,l=[],d=(0,i.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var a=e.currentTarget,r=l.indexOf(a),n=s[r].value;n!==t&&(d(a),o(n))},u=function(e){var a,r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var t,n=l.indexOf(e.currentTarget)+1;r=null!=(t=l[n])?t:l[0];break;case"ArrowLeft":var i,o=l.indexOf(e.currentTarget)-1;r=null!=(i=l[o])?i:l[l.length-1]}null==(a=r)||a.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},a),children:s.map((function(e){var a=e.value,r=e.label,i=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:function(e){return l.push(e)},onKeyDown:u,onClick:c},i,{className:(0,n.A)("tabs__item",m.tabItem,null==i?void 0:i.className,{"tabs__item--active":t===a}),children:null!=r?r:a}),a)}))})}function v(e){var a=e.lazy,r=e.children,n=e.selectedValue,i=(Array.isArray(r)?r:[r]).filter(Boolean);if(a){var o=i.find((function(e){return e.props.value===n}));return o?(0,t.cloneElement)(o,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map((function(e,a){return(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==n})}))})}function _(e){var a=p(e);return(0,g.jsxs)("div",{className:(0,n.A)("tabs-container",m.tabList),children:[(0,g.jsx)(x,Object.assign({},e,a)),(0,g.jsx)(v,Object.assign({},e,a))]})}function w(e){var a=(0,b.A)();return(0,g.jsx)(_,Object.assign({},e,{children:c(e.children)}),String(a))}},54304:(e,a,r)=>{r.d(a,{A:()=>t});const t=r.p+"assets/images/airflow-console-password-70247c69162a1bb111b16a1fc4f6e0e4.png"},81220:(e,a,r)=>{r.d(a,{A:()=>t});const t=r.p+"assets/images/dag-94b5bcd5479d03c7aee2c44dd2e91dc6.png"},28453:(e,a,r)=>{r.d(a,{R:()=>o,x:()=>s});var t=r(96540);const n={},i=t.createContext(n);function o(e){const a=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(i.Provider,{value:a},e.children)}}}]);
"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[6914],{62680:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>r});var a=t(74848),i=t(28453);const r=[];function s(e){const n={a:"a",admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["If you need a test instance of Vantage, you can provision one for free at ",(0,a.jsx)(n.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},47949:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=t(74848),i=t(28453),r=t(62680);t(56240),t(19365);const s={sidebar_position:5.5,title:"Automate Data Movement and Transformation with Airflow, Airbyte, and dbt in Teradata Vantage",author:"Vidhan Bhonsle",email:"vidhan.bhonsle@teradata.com",page_last_update:"October 4th, 2024",description:"Using Airflow to Orchestrate Airbyte and dbt for Teradata",keywords:["data warehouses","airflow","teradata","vantage","orchestration","object storage","airbyte","enterprise analytics","elt","dbt."]},o="Automate Data Movement and Transformation with Airflow, Airbyte, and dbt in Teradata Vantage",l={id:"manage-data/automate-data-movement-and-transformation-with-airflow-airbyte-and-dbt-in-teradata-vantage",title:"Automate Data Movement and Transformation with Airflow, Airbyte, and dbt in Teradata Vantage",description:"Using Airflow to Orchestrate Airbyte and dbt for Teradata",source:"@site/quickstarts/manage-data/automate-data-movement-and-transformation-with-airflow-airbyte-and-dbt-in-teradata-vantage.md",sourceDirName:"manage-data",slug:"/manage-data/automate-data-movement-and-transformation-with-airflow-airbyte-and-dbt-in-teradata-vantage",permalink:"/pr-preview/pr-151/ja/quickstarts/manage-data/automate-data-movement-and-transformation-with-airflow-airbyte-and-dbt-in-teradata-vantage",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5.5,frontMatter:{sidebar_position:5.5,title:"Automate Data Movement and Transformation with Airflow, Airbyte, and dbt in Teradata Vantage",author:"Vidhan Bhonsle",email:"vidhan.bhonsle@teradata.com",page_last_update:"October 4th, 2024",description:"Using Airflow to Orchestrate Airbyte and dbt for Teradata",keywords:["data warehouses","airflow","teradata","vantage","orchestration","object storage","airbyte","enterprise analytics","elt","dbt."]},sidebar:"tutorialSidebar",previous:{title:"Teradata Vantage \u3092\u4f7f\u7528\u3057\u305f\u9ad8\u5ea6\u306a dbt \u306e\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9",permalink:"/pr-preview/pr-151/ja/quickstarts/manage-data/advanced-dbt"},next:{title:"Teradata Vantage\u3068FEAST\u3067\u62e1\u5f35\u6027\u306e\u9ad8\u3044\u30d5\u30a3\u30fc\u30c1\u30e3\u30fc\u30b9\u30c8\u30a2\u3092\u5b9f\u73fe",permalink:"/pr-preview/pr-151/ja/quickstarts/manage-data/using-feast-feature-store-with-teradata-vantage"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},...r.RM,{value:"Demo project setup",id:"demo-project-setup",level:2},{value:"Setting up Teradata instance",id:"setting-up-teradata-instance",level:2},{value:"Airbyte setup",id:"airbyte-setup",level:2},{value:"Airflow setup",id:"airflow-setup",level:2},{value:"Orchestration with Airflow",id:"orchestration-with-airflow",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"automate-data-movement-and-transformation-with-airflow-airbyte-and-dbt-in-teradata-vantage",children:"Automate Data Movement and Transformation with Airflow, Airbyte, and dbt in Teradata Vantage"}),"\n",(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(n.p,{children:"This quickstart demonstrates how to leverage Apache Airflow as orchestration tool to automate the movement of data to Teradata using Airbyte. Once the data is in Teradata, trigger dbt to perform transformations, ensuring the data is clean, reliable and ready for analysis."}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Access to a Teradata Vantage instance."}),"\n",(0,a.jsx)(r.Ay,{}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://www.python.org/downloads/",children:"Python"})," ",(0,a.jsx)(n.strong,{children:"3.10"})," or later installed."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://docs.docker.com/get-started/get-docker/",children:"Docker and Docker Compose (Docker Desktop)"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://docs.airbyte.com/using-airbyte/getting-started/oss-quickstart",children:"Airbyte command line tool"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"demo-project-setup",children:"Demo project setup"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Clone the tutorial repository:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/Teradata/airflow-demos.git\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"Navigate to the directory:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd airflow-demos/airbyte_dbt_airflow_teradata\n"})}),"\n",(0,a.jsx)(n.p,{children:"Open the code in your preferred IDE."}),"\n",(0,a.jsx)(n.h2,{id:"setting-up-teradata-instance",children:"Setting up Teradata instance"}),"\n",(0,a.jsxs)(n.p,{children:["Follow the instructions from ",(0,a.jsx)(n.a,{href:"https://developers.teradata.com/quickstarts/get-access-to-vantage/clearscape-analytics-experience/getting-started-with-csae/",children:"Getting started with ClearScape Analytics Experience"})," and acquire following:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Host"}),"\n",(0,a.jsx)(n.li,{children:"Username"}),"\n",(0,a.jsx)(n.li,{children:"Password"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Jot it down, it will be needed in next step."}),"\n",(0,a.jsx)(n.h2,{id:"airbyte-setup",children:"Airbyte setup"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["After you install Airbyte OSS locally using ",(0,a.jsx)(n.code,{children:"abctl"}),", generate and copy the credentials:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"abctl local credentials\n"})}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsx)(n.mdxAdmonitionTitle,{}),(0,a.jsxs)(n.p,{children:["At the moment of writing this quickstart, Airbyte installed with ",(0,a.jsx)(n.code,{children:"abctl"})," performs unauthenticated pulls even if you pass in Docker credentials: ",(0,a.jsx)(n.a,{href:"https://github.com/airbytehq/airbyte/issues/46309",children:"https://github.com/airbytehq/airbyte/issues/46309"}),". Since Docker limits unauthenticated pulls you may encounter ",(0,a.jsx)(n.code,{children:"429 Too Many Requests"})," error. If you run into this error, launch Airbyte using ",(0,a.jsx)(n.code,{children:"run-ab-platform.sh"})," script as described in ",(0,a.jsx)(n.a,{href:"https://developers.teradata.com/quickstarts/manage-data/use-airbyte-to-load-data-from-external-sources-to-teradata-vantage/#airbyte-open-source",children:"the Airbyte quickstart"}),"."]})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Airbyte Credentials",src:t(34764).A+"",width:"1739",height:"547"})}),"\n",(0,a.jsxs)(n.p,{children:["You can learn more about it from ",(0,a.jsx)(n.a,{href:"https://docs.airbyte.com/using-airbyte/getting-started/oss-quickstart",children:"here"})]}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsxs)(n.li,{children:["Launch Airbyte UI by opening ",(0,a.jsx)(n.a,{href:"http://localhost:8000/",children:"http://localhost:8000/"})," in your preferred browser and login with credentials from previous step."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Airbyte UI",src:t(76569).A+"",width:"603",height:"417"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Create a source"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Go to the Sources tab and click on ",(0,a.jsx)(n.code,{children:"+ New source"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Search for \u201cfaker\u201d using the search bar and select ",(0,a.jsx)(n.code,{children:"Sample Data (Faker)"}),"."]}),"\n",(0,a.jsx)(n.li,{children:"Adjust the Count and optional fields as needed for your use case. You can also leave as is."}),"\n",(0,a.jsxs)(n.li,{children:["Click on ",(0,a.jsx)(n.code,{children:"Set up source"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Create a destination"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Go to the Destinations tab and click on ",(0,a.jsx)(n.code,{children:"+ New destination"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Search for \u201cteradata\u201d using the search bar and select ",(0,a.jsx)(n.code,{children:"Teradata Vantage"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Enter the connection details as needed.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Host (your Teradata instance hostname)"}),"\n",(0,a.jsx)(n.li,{children:"Password (your Teradata instance password)"}),"\n",(0,a.jsx)(n.li,{children:"Default Schema ('ecommerce')"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Click on ",(0,a.jsx)(n.code,{children:"Set up destination"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Airbyte Teradata Connection",src:t(71798).A+"",width:"818",height:"853"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Create a connection"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Go to the Connections tab and click on ",(0,a.jsx)(n.code,{children:"+ New connection"}),"."]}),"\n",(0,a.jsx)(n.li,{children:"Select the source and destination you just created."}),"\n",(0,a.jsx)(n.li,{children:"Enter the connection details as needed."}),"\n",(0,a.jsxs)(n.li,{children:["Click on ",(0,a.jsx)(n.code,{children:"Set up connection"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Airbyte Connection",src:t(18423).A+"",width:"3813",height:"1310"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"airflow-setup",children:"Airflow setup"}),"\n",(0,a.jsx)(n.p,{children:"Airflow is at the center of the whole tutorial. It is responsible for making Airbyte move data to Teradata and trigger dbt to transform the data."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Navigate to ",(0,a.jsx)(n.code,{children:"orchestration"})," directory"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd orchestration\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Change the environment file name from ",(0,a.jsx)(n.code,{children:".env.example"})," to ",(0,a.jsx)(n.code,{children:".env"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Link Airbyte connection to the Airflow DAG"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["To execute the DAG in Airflow to trigger Airbyte, ",(0,a.jsx)(n.code,{children:"connection_id"})," needs to be edited in ",(0,a.jsx)(n.code,{children:"elt_dag.py"})," file"]}),"\n",(0,a.jsxs)(n.li,{children:["On the connection page,  from the URL, copy the part between ",(0,a.jsx)(n.code,{children:"connections"})," and ",(0,a.jsx)(n.code,{children:"status"}),". It is the value of ",(0,a.jsx)(n.code,{children:"connection_id"})," variable."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Airbyte Connection id",src:t(76527).A+"",width:"2072",height:"69"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Open ",(0,a.jsx)(n.code,{children:"elt_dag.py"})," file inside the ",(0,a.jsx)(n.code,{children:"airflow/dags"})," directory and add your Airbyte connection id on ",(0,a.jsx)(n.code,{children:"line 28"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Connection ID value",src:t(63567).A+"",width:"1576",height:"454"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Build custom Airflow image"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker compose build\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"5",children:["\n",(0,a.jsx)(n.li,{children:"Launch Airflow container"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker compose up\n"})}),"\n",(0,a.jsx)(n.p,{children:"This might take a few minutes initially as it sets up necessary databases and metadata."}),"\n",(0,a.jsxs)(n.ol,{start:"6",children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Open Airflow UI"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Open Airflow UI by pasting ",(0,a.jsx)(n.code,{children:"http://localhost:8080"})," to browser of your choice."]}),"\n",(0,a.jsxs)(n.li,{children:["Default username and password is ",(0,a.jsx)(n.code,{children:"airflow"})," (unless you changed it in ",(0,a.jsx)(n.code,{children:".env"})," file)"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Create Airflow connection with Airbyte"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Go to the ",(0,a.jsx)(n.code,{children:"Admin"})," > ",(0,a.jsx)(n.code,{children:"Connections"})," tab"]}),"\n",(0,a.jsx)(n.li,{children:"Click on the + button to create a new connection"}),"\n",(0,a.jsxs)(n.li,{children:["Edit the page with following values","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Connection id"}),":airbyte_connection"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Connection Type"}),":Airbyte"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Host"}),":host",".docker.internal"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Port"}),":8000"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Login"}),":Your"," Airbyte username"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Password"}),":Your"," airbyte password (you can get it by running ",(0,a.jsx)(n.code,{children:"abctl local credentials"})," command in terminal)"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Click on the ",(0,a.jsx)(n.code,{children:"Test"})," button, and make sure you get a ",(0,a.jsx)(n.code,{children:"Connection successfully tested"})," message at the top. Then, you can ",(0,a.jsx)(n.code,{children:"Save"})," the connection."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Airflow Airbyte Connection",src:t(92235).A+"",width:"3756",height:"2052"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Create Airflow connection with Teradata"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Go to the ",(0,a.jsx)(n.code,{children:"Admin"})," > ",(0,a.jsx)(n.code,{children:"Connections"})," tab"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Click on the + button to create a new connection"}),"\n",(0,a.jsxs)(n.li,{children:["Edit the page with following values","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Connection id"}),":teradata_connection"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Connection Type"}),":Teradata"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Database Server URL"}),":Your"," Teradata instance hostname"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Username"}),":demo_user"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Password"}),":Your"," Teradata instance password"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Click on the ",(0,a.jsx)(n.code,{children:"Test"})," button, and make sure you get a ",(0,a.jsx)(n.code,{children:"Connection successfully tested"})," message at the top. Then, you can ",(0,a.jsx)(n.code,{children:"Save"})," the connection."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Airflow Teradata Connection",src:t(4437).A+"",width:"3747",height:"2064"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"orchestration-with-airflow",children:"Orchestration with Airflow"}),"\n",(0,a.jsx)(n.p,{children:"After making sure all the steps till now is working fine, it is time to run your data pipeline."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Make sure all the workflows are enabled."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"DAGs Enabled",src:t(25207).A+"",width:"815",height:"821"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsxs)(n.li,{children:["In Airflow UI, go to ",(0,a.jsx)(n.code,{children:"DAGs"})," section, locate ",(0,a.jsx)(n.code,{children:"elt_dag"}),' and click on "Trigger DAG" under the "Action" column.',"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["This will initiate the complete data pipeline, starting with the Airbyte sync from Faker to Teradata, followed by dbt transforming the raw data into ",(0,a.jsx)(n.code,{children:"staging"})," and ",(0,a.jsx)(n.code,{children:"marts"})," models."]}),"\n",(0,a.jsxs)(n.li,{children:["The status of ",(0,a.jsx)(n.code,{children:"elt_dag"})," can be check by clicking on ",(0,a.jsx)(n.code,{children:"elt_dag"})," and then on ",(0,a.jsx)(n.code,{children:"Graph"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"DAGs",src:t(68373).A+"",width:"3745",height:"1037"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"DAGs two running",src:t(43193).A+"",width:"1334",height:"294"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:"Confirm the sync status in the Airbyte UI."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Airbyte Sync Status",src:t(83870).A+"",width:"3282",height:"1211"})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsxs)(n.li,{children:["After the  completion of both the DAGs, check the ",(0,a.jsx)(n.code,{children:"dbt_dag"})," graph."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"DAGs two complete",src:t(72207).A+"",width:"1342",height:"269"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"dbt transformation",src:t(27824).A+"",width:"2177",height:"1176"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["The dbt project is present in the ",(0,a.jsx)(n.code,{children:"dbt_project"})," folder and is handled by Airflow with the help of ",(0,a.jsx)(n.a,{href:"https://pypi.org/project/astronomer-cosmos/",children:"Astronomer Cosmos"})]})}),"\n",(0,a.jsxs)(n.ol,{start:"5",children:["\n",(0,a.jsxs)(n.li,{children:["You can check the newly created views in the ",(0,a.jsx)(n.code,{children:"transformed_data"})," dataset on Teradata Vantage. This can be done by using Teradata Studio or other database client UI tools like ",(0,a.jsx)(n.a,{href:"https://dbeaver.io/download/",children:"DBeaver"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsx)(n.p,{children:"After completing all the above steps, you should have a working stack of Airbyte, dbt and Airflow with Teradata. It can be used as starting point for your projects and can be adapted as per your scenario."})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var a=t(34164);const i={tabItem:"tabItem_Ymn6"};var r=t(74848);function s(e){var n=e.children,t=e.hidden,s=e.className;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,s),hidden:t,children:n})}},56240:(e,n,t)=>{t.d(n,{A:()=>v});var a=t(96540),i=t(34164),r=t(23104),s=t(56347),o=t(205),l=t(57485);var c=t(89466);function d(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n,t,a=(void 0===(t=function(e,n){return e.value===n.value})&&(t=function(e,n){return e===n}),(n=e).filter((function(e,a){return n.findIndex((function(n){return t(n,e)}))!==a})));if(a.length>0)throw new Error('Docusaurus error: Duplicate values "'+a.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function u(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,t=void 0!==n&&n,i=e.groupId,r=(0,s.W6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:i});return[(0,l.aZ)(o),(0,a.useCallback)((function(e){if(o){var n=new URLSearchParams(r.location.search);n.set(o,e),r.replace(Object.assign({},r.location,{search:n.toString()}))}}),[o,r])]}function j(e){var n,t,i,r,s=e.defaultValue,l=e.queryString,d=void 0!==l&&l,j=e.groupId,x=h(e),f=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var i=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:s,tabValues:x})})),m=f[0],b=f[1],g=p({queryString:d,groupId:j}),w=g[0],v=g[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:j}.groupId),t=(0,c.Dv)(n),i=t[0],r=t[1],[i,(0,a.useCallback)((function(e){n&&r.set(e)}),[n,r])]),A=y[0],k=y[1],T=function(){var e=null!=w?w:A;return u({value:e,tabValues:x})?e:null}();return(0,o.A)((function(){T&&b(T)}),[T]),{selectedValue:m,selectValue:(0,a.useCallback)((function(e){if(!u({value:e,tabValues:x}))throw new Error("Can't select invalid tab value="+e);b(e),v(e),k(e)}),[v,k,x]),tabValues:x}}var x=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=t(74848);function b(e){var n=e.className,t=e.block,a=e.selectedValue,s=e.selectValue,o=e.tabValues,l=[],c=(0,r.a_)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=l.indexOf(n),i=o[t].value;i!==a&&(c(n),s(i))},h=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,i=l.indexOf(e.currentTarget)+1;t=null!=(a=l[i])?a:l[0];break;case"ArrowLeft":var r,s=l.indexOf(e.currentTarget)-1;t=null!=(r=l[s])?r:l[l.length-1]}null==(n=t)||n.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:o.map((function(e){var n=e.value,t=e.label,r=e.attributes;return(0,m.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return l.push(e)},onKeyDown:h,onClick:d},r,{className:(0,i.A)("tabs__item",f.tabItem,null==r?void 0:r.className,{"tabs__item--active":a===n}),children:null!=t?t:n}),n)}))})}function g(e){var n=e.lazy,t=e.children,i=e.selectedValue,r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var s=r.find((function(e){return e.props.value===i}));return s?(0,a.cloneElement)(s,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:r.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})}))})}function w(e){var n=j(e);return(0,m.jsxs)("div",{className:(0,i.A)("tabs-container",f.tabList),children:[(0,m.jsx)(b,Object.assign({},e,n)),(0,m.jsx)(g,Object.assign({},e,n))]})}function v(e){var n=(0,x.A)();return(0,m.jsx)(w,Object.assign({},e,{children:d(e.children)}),String(n))}},92235:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/airbyte_airflow-bf1456f57f7e7c106707d42470e41142.png"},18423:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/airbyte_connection-debde4f128fc58dbaf0d9d84be442467.png"},76527:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/airbyte_connection_id-40dbb28bd09c1e738c6e23d1a47523f4.png"},34764:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/airbyte_creds-39be6cdb321a2d11e61c17d8d5d2acdc.png"},83870:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/airbyte_sync-4f5c30fdfe74a3f5dc9cdfe8b1b9e9dc.png"},71798:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/airbyte_teradata_connection-e8288fc36f6ccea398d7e62678dd1c80.png"},76569:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/airbyte_ui-aaea7f1e6552fd29869dfea13fd5c018.png"},72207:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/dag_second_complete-aea1d27abfda144b4db986ea9685ddca.png"},43193:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/dag_second_running-223993a6ea4e1460a1b8bdc4da533d2f.png"},68373:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/dags-5e75dd5d41d11efc44287bbaca4e7729.png"},25207:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/dags_enabled-40a24c1053780bf226db5cd01e23ceed.png"},27824:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/dbt_transformation-effa2fd462ea67a72e450f6219c7b662.png"},63567:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/line_28-d156a81caf378d643d6f1d38bef7a5e9.png"},4437:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/teradata_airflow-023762d5a692116879bd9450acb986d6.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var a=t(96540);const i={},r=a.createContext(i);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);
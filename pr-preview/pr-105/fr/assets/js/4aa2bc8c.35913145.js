"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[4053],{62680:(e,t,n)=>{n.d(t,{Ay:()=>o,RM:()=>s});var a=n(74848),i=n(28453);const s=[];function r(e){const t={a:"a",admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["If you need a test instance of Vantage, you can provision one for free at ",(0,a.jsx)(t.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})})}function o(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},56788:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var a=n(74848),i=n(28453),s=n(62680);const r={sidebar_position:8,author:"Krutik Pathak",email:"krutik.pathak@teradata.com",page_last_update:"June 9th, 2023",description:"Use Airbyte with Teradata Vantage.",keywords:["airbyte","data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","data transfer","data extraction","enterprise analytics","elt."],dir:"getting-started-with-airbyte"},o="Use Airbyte to load data from external sources to Teradata Vantage",c={id:"manage-data/use-airbyte-to-load-data-from-external-sources-to-teradata-vantage",title:"Use Airbyte to load data from external sources to Teradata Vantage",description:"Use Airbyte with Teradata Vantage.",source:"@site/quickstarts/manage-data/use-airbyte-to-load-data-from-external-sources-to-teradata-vantage.md",sourceDirName:"manage-data",slug:"/manage-data/use-airbyte-to-load-data-from-external-sources-to-teradata-vantage",permalink:"/pr-preview/pr-105/fr/quickstarts/manage-data/use-airbyte-to-load-data-from-external-sources-to-teradata-vantage",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,author:"Krutik Pathak",email:"krutik.pathak@teradata.com",page_last_update:"June 9th, 2023",description:"Use Airbyte with Teradata Vantage.",keywords:["airbyte","data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","data transfer","data extraction","enterprise analytics","elt."],dir:"getting-started-with-airbyte"},sidebar:"tutorialSidebar",previous:{title:"Use dbt and FEAST to build a feature store in Teradata Vantage",permalink:"/pr-preview/pr-105/fr/quickstarts/manage-data/getting-started-dbt-feast-teradata-pipeline"},next:{title:"Manage ELT pipelines as code with Terraform and Airbyte on Teradata Vantage",permalink:"/pr-preview/pr-105/fr/quickstarts/manage-data/terraform-airbyte-provider"}},d={},l=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},...s.RM,{value:"Airbyte Cloud",id:"airbyte-cloud",level:3},{value:"Airbyte Open Source",id:"airbyte-open-source",level:3},{value:"Airbyte Configuration",id:"airbyte-configuration",level:2},{value:"Setting the Source Connection",id:"setting-the-source-connection",level:3},{value:"Setting the Destination Connection",id:"setting-the-destination-connection",level:3},{value:"Configuring Data Sync",id:"configuring-data-sync",level:3},{value:"Replication Frequency",id:"replication-frequency",level:4},{value:"Data Sync Validation",id:"data-sync-validation",level:3},{value:"Close and delete the connection",id:"close-and-delete-the-connection",level:3},{value:"Summary",id:"summary",level:3},{value:"Further reading",id:"further-reading",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"use-airbyte-to-load-data-from-external-sources-to-teradata-vantage",children:"Use Airbyte to load data from external sources to Teradata Vantage"}),"\n",(0,a.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsxs)(t.p,{children:["This tutorial showcases how to use Airbyte to move data from sources to Teradata Vantage, detailing both the ",(0,a.jsx)(t.a,{href:"https://docs.airbyte.com/using-airbyte/getting-started",children:"Airbyte Open Source"})," and ",(0,a.jsx)(t.a,{href:"https://airbyte.com",children:"Airbyte Cloud options"}),". This specific example covers replication from Google Sheets to Teradata Vantage."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Source: Google Sheets"}),"\n",(0,a.jsx)(t.li,{children:"Destination: Teradata Vantage"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Sample Employees Payrate Google Sheets",src:n(78775).A+"",width:"1007",height:"933"})}),"\n",(0,a.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Access to a Teradata Vantage Instance. This will be defined as the destination of the Airbyte connection. You will need a database ",(0,a.jsx)(t.code,{children:"Host"}),", ",(0,a.jsx)(t.code,{children:"Username"}),", and ",(0,a.jsx)(t.code,{children:"Password"})," for Airbyte\u2019s configuration."]}),"\n",(0,a.jsx)(s.Ay,{}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://support.google.com/googleapi/answer/6158841?hl=en",children:"Google Cloud Platform API enabled for your personal or organizational account"}),". You\u2019ll need to authenticate your Google account via OAuth or via Service Account Key Authenticator. In this example, we use Service Account Key Authenticator."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Data from the source system. In this case, we use a ",(0,a.jsx)(t.a,{href:"https://docs.google.com/spreadsheets/d/1XNBYUw3p7xG6ptfwjChqZ-dNXbTuVwPi7ToQfYKgJIE/edit",children:"sample spreadsheet from google sheets"}),". The sample data is a breakdown of payrate by employee type."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"airbyte-cloud",children:"Airbyte Cloud"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Create an account on ",(0,a.jsx)(t.a,{href:"https://airbyte.com",children:"Airbyte Cloud"})," and skip to the instructions under the ",(0,a.jsx)(t.a,{href:"#airbyte-configuration",children:"Airbyte Configuration"})," section."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"airbyte-open-source",children:"Airbyte Open Source"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Install Docker Compose to run ",(0,a.jsx)(t.a,{href:"https://github.com/airbytehq/airbyte",children:"Airbyte Open Source"})," locally. Docker Compose comes with Docker Desktop. Please refer to ",(0,a.jsx)(t.a,{href:"https://docs.docker.com/compose/install",children:"docker docs"})," for more details."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Clone the Airbyte Open Source repository and go to the airbyte directory."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"git clone --depth 1 https://github.com/airbytehq/airbyte.git\ncd airbyte\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Make Sure to have Docker Desktop running before running the shell script ",(0,a.jsx)(t.code,{children:"run-ab-platform"}),"."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Run the shell script ",(0,a.jsx)(t.code,{children:"run-ab-platform"})," as"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"./run-ab-platform.sh\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["You can run the above commands with ",(0,a.jsx)(t.code,{children:"git bash"})," in Windows. Please refer to the ",(0,a.jsx)(t.a,{href:"https://docs.airbyte.com/deploying-airbyte/local-deployment",children:"Airbyte Local Deployment"})," for more details.\n:::"]})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Log in to the web app ",(0,a.jsx)(t.a,{href:"http://localhost:8000/",children:"http://localhost:8000/"})," by entering the default credentials found in the ",(0,a.jsx)(t.code,{children:".env"})," file included in the repository."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"BASIC_AUTH_USERNAME=airbyte\nBASIC_AUTH_PASSWORD=password\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:'When logging in for the first time, Airbyte will prompt you to provide your email address and specify your preferences for product improvements. Enter your preferences and click on "Get started."'}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Specify Preferences",src:n(23653).A+"",width:"987",height:"802"})}),"\n",(0,a.jsx)(t.p,{children:"Once Airbyte Open Source is launched you will see a connections dashboard. If you launched Airbyte Open Source for the first time, it would not show any connections."}),"\n",(0,a.jsx)(t.h2,{id:"airbyte-configuration",children:"Airbyte Configuration"}),"\n",(0,a.jsx)(t.h3,{id:"setting-the-source-connection",children:"Setting the Source Connection"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:'You can either click "Create your first connection" or click on the top right corner to initiate the new connection workflow on Airbyte\'s Connections dashboard.'}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Dashboard to create first connection",src:n(40465).A+"",width:"1171",height:"781"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Airbyte will ask you for the Source, you can select from an existing source (if you have set it up already) or you can set up a new source, in this case we select ",(0,a.jsx)(t.code,{children:"Google Sheets"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["For authentication we are using ",(0,a.jsx)(t.code,{children:"Service Account Key Authentication"})," which uses a service account key in JSON format. Toggle from the default ",(0,a.jsx)(t.code,{children:"OAuth"})," to ",(0,a.jsx)(t.code,{children:"Service Account Key Authentication"}),". To authenticate your Google account via Service Account Key Authentication, enter your ",(0,a.jsx)(t.a,{href:"https://cloud.google.com/iam/docs/keys-create-delete#creating_service_account_keys",children:"Google Cloud service account key"})," in JSON format. +\nMake sure the Service Account has the Project Viewer permission. If your spreadsheet is viewable by anyone with its link, no further action is needed. If not, ",(0,a.jsx)(t.a,{href:"https://www.youtube.com/watch?v=GyomEw5a2NQ",children:"give your Service account access to your spreadsheet"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Add the link to the source spreadsheet as ",(0,a.jsx)(t.code,{children:"Spreadsheet Link"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Configuring the source in Airbyte",src:n(75122).A+"",width:"969",height:"970"})}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["For more details, please refer ",(0,a.jsx)(t.a,{href:"https://docs.airbyte.com/integrations/sources/google-sheets/#:~:text=For%20Airbyte%20Open%20Source%3A",children:"Setting Google Sheets as Source Connector in Airbyte Open Source"})]})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Click Set up source, if the configuration is correct, you will get the message ",(0,a.jsx)(t.code,{children:"All connection tests passed!"})]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"setting-the-destination-connection",children:"Setting the Destination Connection"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Assuming you want to create a fresh new connection with ",(0,a.jsx)(t.code,{children:"Teradata Vantage"}),", Select ",(0,a.jsx)(t.code,{children:"Teradata Vantage"}),' as the destination type under the "Set up the destination" section.']}),"\n",(0,a.jsxs)(t.li,{children:["Add the ",(0,a.jsx)(t.code,{children:"Host"}),", ",(0,a.jsx)(t.code,{children:"User"}),", and ",(0,a.jsx)(t.code,{children:"Password"}),". These are the same as the ",(0,a.jsx)(t.code,{children:"Host"}),", ",(0,a.jsx)(t.code,{children:"Username"}),", and ",(0,a.jsx)(t.code,{children:"Password"})," respectively, used by your Clearscape Analytics Environment."]}),"\n",(0,a.jsxs)(t.li,{children:["Provide a default schema name appropriate to your specific context. Here we have provided ",(0,a.jsx)(t.code,{children:"gsheet_airbyte_td"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["If you do not provide a ",(0,a.jsx)(t.code,{children:"Default Schema"}),', you will get an error stating "Connector failed while creating schema". Make sure you provide appropriate name in the ',(0,a.jsx)(t.code,{children:"Default Schema"}),"."]})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Configuring the destination Teradata in Airbyte",src:n(14601).A+"",width:"927",height:"864"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Click Set up destination, if the configuration is correct, you will get the message ",(0,a.jsx)(t.code,{children:"All connection tests passed!"})]}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"You might get a configuration check failed error. Make sure your Teradata Vantage instance is running properly before making a connection through Airbyte."})}),"\n",(0,a.jsx)(t.h3,{id:"configuring-data-sync",children:"Configuring Data Sync"}),"\n",(0,a.jsxs)(t.p,{children:["A namespace is a group of streams [tables) in a source or destination. A schema in a relational database system is an example of a namespace. In a source, the namespace is the location from where the data is replicated to the destination. In a destination, the namespace is the location where the replicated data is stored in the destination.\nFor more details please refer to ",(0,a.jsx)(t.a,{href:"https://docs.airbyte.com/understanding-airbyte/namespaces",children:"Airbyte Namespace"})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Namespaces in the destination",src:n(2088).A+"",width:"1493",height:"296"})}),"\n",(0,a.jsxs)(t.p,{children:["In our example the destination is a database, so the namespace is the default schema ",(0,a.jsx)(t.code,{children:"gsheet_airbyte_td"})," we defined when we configured the destination. The stream name is a table that is mirroring the name of the spreadsheet in the source, which is ",(0,a.jsx)(t.code,{children:"sample_employee_payrate"})," in this case. Since we are using the single spreadsheet connector, it only supports one stream [the active spreadsheet)."]}),"\n",(0,a.jsxs)(t.p,{children:["Other type of sources and destinations might have a different layout. In this example, Google sheets, as source, does not support a namespace.\nIn our example, we have used ",(0,a.jsx)(t.code,{children:"<destination schema>"})," as the Namespace of the destination, this is the default namespace assigned by Airbyte based on the ",(0,a.jsx)(t.code,{children:"Default Schema"})," we declared in the destination settings. The database ",(0,a.jsx)(t.code,{children:"gsheet_airbyte_td"})," will be created in our Teradata Vantage Instance."]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:'We use the term "schema", as it is the term used by Airbyte. In a Teradata context the term "database" is the equivalent.'})}),"\n",(0,a.jsx)(t.h4,{id:"replication-frequency",children:"Replication Frequency"}),"\n",(0,a.jsx)(t.p,{children:"It shows how often data should sync to destination. You can select every hour, 2 hours, 3 hours etc. In our case we used every 24 hours."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Replication Frequency 24 hours",src:n(58875).A+"",width:"1310",height:"267"})}),"\n",(0,a.jsx)(t.p,{children:"You can also use a Cron expression to specify the time when the sync should run. In the example below, we set the Cron expression to run the sync on every Wednesday at 12:43 PM (US/Pacific) time."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Replication Frequency Cron Expression",src:n(31934).A+"",width:"1313",height:"342"})}),"\n",(0,a.jsx)(t.h3,{id:"data-sync-validation",children:"Data Sync Validation"}),"\n",(0,a.jsxs)(t.p,{children:['Airbyte tracks synchronization attempts in the "Sync History" section of the ',(0,a.jsx)(t.code,{children:"Status"})," tab."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Data Sync Summary",src:n(92452).A+"",width:"1427",height:"491"})}),"\n",(0,a.jsxs)(t.p,{children:["Next, you can go to the ",(0,a.jsx)(t.a,{href:"https://clearscape.teradata.com/dashboard",children:"ClearScape Analytics Experience"})," and run a Jupyter notebook, notebooks in ClearScape Analytics Experience are configured to run Teradata SQL queries, to verify if the database ",(0,a.jsx)(t.code,{children:"gsheet_airbyte_td"}),", streams (tables) and complete data is present."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Data Sync Validation in Teradata",src:n(57960).A+"",width:"1401",height:"799"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"%connect local \n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:', id="airbyte_select_query", role="emits-gtm-events"',children:"SELECT  DatabaseName, TableName, CreateTimeStamp, LastAlterTimeStamp\nFROM    DBC.TablesV\nWHERE   DatabaseName = 'gsheet_airbyte_td'\nORDER BY    TableName;\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"DATABASE gsheet_airbyte_td; \n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"SELECT * FROM _airbyte_raw_sample_employee_payrate;  \n"})}),"\n",(0,a.jsxs)(t.p,{children:["The stream (table) name in destination is prefixed with ",(0,a.jsx)(t.code,{children:"\\_airbyte_raw_"})," because Normalization and Transformation are not supported for this connection, and ",(0,a.jsx)(t.a,{href:"https://docs.airbyte.com/understanding-airbyte/namespaces/#:~:text=If%20you%20don%27t%20enable%20basic%20normalization%2C%20you%20will%20only%20receive%20the%20raw%20tables",children:"we only have the raw table"}),". Each stream (table) contains 3 columns:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"_airbyte_ab_id"}),": a uuid assigned by Airbyte to each event that is processed. The column type in Teradata is ",(0,a.jsx)(t.code,{children:"VARCHAR(256)"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"_airbyte_emitted_at"}),": a timestamp representing when the event was pulled from the data source. The column type in Teradata is ",(0,a.jsx)(t.code,{children:"TIMESTAMP(6)"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"_airbyte_data"}),": a json blob representing the event data. The column type in Teradata is ",(0,a.jsx)(t.code,{children:"JSON"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Here in the ",(0,a.jsx)(t.code,{children:"_airbyte_data"})," column, we see 9 rows, the same as we have in the source Google sheet, and the data is in JSON format which can be transformed further as needed."]}),"\n",(0,a.jsx)(t.h3,{id:"close-and-delete-the-connection",children:"Close and delete the connection"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"You can close the connection in Airbyte by disabling the connection. This will stop the data sync process."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Close Airbyte Connection",src:n(83869).A+"",width:"1100",height:"266"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"You can also delete the connection."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Delete Airbyte Connection",src:n(74626).A+"",width:"770",height:"446"})}),"\n",(0,a.jsx)(t.h3,{id:"summary",children:"Summary"}),"\n",(0,a.jsx)(t.p,{children:"This tutorial demonstrated how to extract data from a source system like Google sheets and use the Airbyte ELT tool to load the data into the Teradata Vantage Instance. We saw the end-to-end data flow and complete configuration steps for running Airbyte Open Source locally, and configuring the source and destination connections. We also discussed about the available data sync configurations based on replication frequency. We validated the results in the destination using Cloudscape Analytics Experience and finally we saw the methods to pause and delete the Airbyte connection."}),"\n",(0,a.jsx)(t.h3,{id:"further-reading",children:"Further reading"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://docs.airbyte.com/integrations/destinations/teradata/?_ga=2.156631291.1502936448.1684794236-1752661382.1684794236",children:"Teradata Destination | Airbyte Documentation"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://docs.airbyte.com/cloud/core-concepts/#connection-sync-modes",children:"Core Concepts | Airbyte Documentation,"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://airbyte.com/community",children:"Airbyte Community Slack"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://discuss.airbyte.io",children:"Airbyte Community"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},83869:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/close_airbyte_connection-fe0a79c00eb0583b56c9ea5c8c03982b.png"},14601:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/configuring_destination_teradata_airbyte-d7d92055dabcccb73092ab352bfe9ae1.png"},75122:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/configuring_source_gsheet_airbyte-0ecdb0c4c32971ab06a994b0bc8b4b5c.png"},40465:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/create_first_connection-0aabda5c8ec884725c206b9825c4d164.png"},92452:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/data_sync_summary-7caa179da6229e17baaffcfd2e592c0f.png"},57960:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/data_sync_validation_in_teradata-c51c37478d6525957a778e8a9495f631.png"},74626:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/delete_airbyte_connection-1a2a68b2e69983e715b5fce18abf1619.png"},2088:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/namespaces_in_destination-a71b1e72660373345d67c4094cfaa766.png"},58875:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/replication_frequency_24hr-c5dbd4b7c3c353736d0d8dd124e0a4d2.png"},31934:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/replication_frequency_cron_expression-c9068221d26aa1478415a314a1e343a1.png"},78775:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/sample_employees_payrate_google_sheets-2f7071301cc0742bef808d2b97ace0c8.png"},23653:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/specify_preferences-fabe3760b6f9017155e0db9c99134376.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var a=n(96540);const i={},s=a.createContext(i);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);
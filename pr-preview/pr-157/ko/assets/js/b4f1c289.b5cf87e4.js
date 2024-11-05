"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[5056],{62680:(e,t,i)=>{i.d(t,{Ay:()=>l,RM:()=>d});var n=i(74848),a=i(28453);const d=[];function s(e){const t={a:"a",admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["If you need a test instance of Vantage, you can provision one for free at ",(0,n.jsx)(t.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}},23303:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>I});var n=i(74848),a=i(28453),d=i(62680);const s={id:"use-dbt-cloud-with-teradata-vantage",sidebar_position:4.4,author:"Mohan Talla",email:"mohan.talla@teradata.com",description:"Use dbt Cloud (data build tool) with Teradata Vantage.",keywords:["dbt Cloud","data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","elt","dbt."]},l="dbt Cloud with Teradata Vantage",c={id:"manage-data/use-dbt-cloud-with-teradata-vantage",title:"dbt Cloud with Teradata Vantage",description:"Use dbt Cloud (data build tool) with Teradata Vantage.",source:"@site/quickstarts/manage-data/use-dbt-cloud-with-teradata-vantage.md",sourceDirName:"manage-data",slug:"/manage-data/use-dbt-cloud-with-teradata-vantage",permalink:"/pr-preview/pr-157/ko/quickstarts/manage-data/use-dbt-cloud-with-teradata-vantage",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4.4,frontMatter:{id:"use-dbt-cloud-with-teradata-vantage",sidebar_position:4.4,author:"Mohan Talla",email:"mohan.talla@teradata.com",description:"Use dbt Cloud (data build tool) with Teradata Vantage.",keywords:["dbt Cloud","data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","elt","dbt."]},sidebar:"tutorialSidebar",previous:{title:"Data Transfer from Azure Blob to Teradata Vantage Using Apache Airflow",permalink:"/pr-preview/pr-157/ko/quickstarts/manage-data/airflow-azure-to-teradata-transfer-operator-doc"},next:{title:"dbt with Teradata Vantage",permalink:"/pr-preview/pr-157/ko/quickstarts/manage-data/dbt"}},o={},I=[{value:"Prerequisites",id:"prerequisites",level:2},...d.RM,{value:"About the Jaffle Shop warehouse",id:"about-the-jaffle-shop-warehouse",level:3},{value:"Creating a project in dbt Cloud and connect to a Teradata environment",id:"creating-a-project-in-dbt-cloud-and-connect-to-a-teradata-environment",level:2},{value:"dbt Project setup",id:"dbt-project-setup",level:3},{value:"Import a sample dbt project to dbt Cloud",id:"import-a-sample-dbt-project-to-dbt-cloud",level:2},{value:"Visualize the project on dbt Cloud IDE",id:"visualize-the-project-on-dbt-cloud-ide",level:2},{value:"Create an environment for managing staging and production workflows for the project",id:"create-an-environment-for-managing-staging-and-production-workflows-for-the-project",level:2},{value:"Create a dbt Cloud environment",id:"create-a-dbt-cloud-environment",level:3},{value:"The next step is to create the jobs",id:"the-next-step-is-to-create-the-jobs",level:3},{value:"Summary",id:"summary",level:2},{value:"Further reading",id:"further-reading",level:2}];function r(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"dbt-cloud-with-teradata-vantage",children:"dbt Cloud with Teradata Vantage"}),"\n",(0,n.jsxs)(t.p,{children:["This tutorial demonstrates how to use dbt Cloud with Teradata Vantage. It's based on the original ",(0,n.jsx)(t.a,{href:"https://github.com/Teradata/jaffle_shop-dev",children:"dbt Jaffle Shop tutorial"}),". A couple of models have been adjusted to the SQL dialect supported by Vantage."]}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["You have a ",(0,n.jsx)(t.a,{href:"https://www.getdbt.com/signup/",children:"dbt Cloud account"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Access to a Teradata Vantage instance."}),"\n",(0,n.jsx)(d.Ay,{}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"about-the-jaffle-shop-warehouse",children:"About the Jaffle Shop warehouse"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"jaffle_shop"})," is a fictional e-commerce store. This dbt project transforms raw data from an app database into a dimensional model with customer and order data ready for analytics."]}),"\n",(0,n.jsx)(t.p,{children:"The raw data from the app consists of customers, orders, and payments, with the following entity-relationship diagram:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(61594).A+"",width:"900",height:"207"})}),"\n",(0,n.jsx)(t.p,{children:"dbt takes these raw data table and builds the following dimensional model, which is more suitable for analytics tools:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(29705).A+"",width:"708",height:"388"})}),"\n",(0,n.jsx)(t.h2,{id:"creating-a-project-in-dbt-cloud-and-connect-to-a-teradata-environment",children:"Creating a project in dbt Cloud and connect to a Teradata environment"}),"\n",(0,n.jsx)(t.p,{children:"Create a new project in dbt Cloud."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Login to your dbt Cloud account"}),"\n",(0,n.jsx)(t.li,{children:'Click on "Account home"'}),"\n",(0,n.jsx)(t.li,{children:'In the "All projects" list click on "+ New Project"'}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(4048).A+"",width:"1714",height:"724"})}),"\n",(0,n.jsx)(t.h3,{id:"dbt-project-setup",children:"dbt Project setup"}),"\n",(0,n.jsx)(t.p,{children:"The setup of a dbt Cloud project includes the following steps:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'"Name your project"'}),"\n",(0,n.jsx)(t.li,{children:'"Configure your development environment"'}),"\n",(0,n.jsx)(t.li,{children:'"Setup a repository"'}),"\n"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:'Enter a project name and click "Continue".'}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(17867).A+"",width:"1510",height:"723"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:['In "Configure your development environment", click "Add new connection" and follow the steps below. Once you have Teradata Vantage connections established you can simply select them from the dropdown in future projects.\n',(0,n.jsx)(t.img,{src:i(43714).A+"",width:"1481",height:"712"})]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:['Select "Teradata"\n',(0,n.jsx)(t.img,{src:i(89085).A+"",width:"1333",height:"584"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Provide a name for the connection that is meaningful."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:['Fill in all the required details in the "Settings" section.\n',(0,n.jsx)(t.img,{src:i(67956).A+"",width:"1279",height:"811"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The only required field in the settings is the connection host, if your Vantage Environment is behind a firewall you might need to whitelist the provided IP addresses that dbt Cloud uses in your specific environment."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Save the connection."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:'Once the Teradata connection is created, return to the project setup page of your project, select your connection in the "Configure your developer environment" dropdown, and provide the required "Development Credentials".'}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(89423).A+"",width:"1414",height:"889"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:'Click "Test Connection".'}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"This verifies that dbt Cloud can access your Teradata database."}),"\n",(0,n.jsx)(t.li,{children:"If the connection test succeeds, click Save."}),"\n",(0,n.jsx)(t.li,{children:"If the connection fails, verify your Teradata settings and credentials."}),"\n",(0,n.jsxs)(t.li,{children:["If the issue persists, reach out to Teradata support at support.teradata.com. For dbt-teradata related issues, start a discussion on the dbt-teradata GitHub at ",(0,n.jsx)(t.a,{href:"https://github.com/Teradata/dbt-teradata",children:"https://github.com/Teradata/dbt-teradata"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"import-a-sample-dbt-project-to-dbt-cloud",children:"Import a sample dbt project to dbt Cloud"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Fork the following repository to your github account\n",(0,n.jsx)(t.a,{href:"https://github.com/Teradata/jaffle_shop-dev",children:"https://github.com/Teradata/jaffle_shop-dev"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:'In "Setup a repository" select the "Git Clone" option'}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Paste the following link in the git URL field, remember to substitute your github handle in order it picks the fork of the sample repository."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"git@github.com:{your github handle}/jaffle_shop-dev.git\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(7878).A+"",width:"1508",height:"931"})}),"\n",(0,n.jsxs)(t.p,{children:['This will generate a "Deploy key", this key needs to be deployed to your github, refer to ',(0,n.jsx)(t.a,{href:"https://docs.getdbt.com/docs/cloud/git/import-a-project-by-git-url",children:"this guide"})," for detailed instructions."]}),"\n",(0,n.jsx)(t.p,{children:"Once the key is deployed, the project will be ready for further development."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"img.png",src:i(35745).A+"",width:"1010",height:"815"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"visualize-the-project-on-dbt-cloud-ide",children:"Visualize the project on dbt Cloud IDE"}),"\n",(0,n.jsx)(t.p,{children:'Select "Start developing in the IDE". You will be redirected to the development page of the dbt Cloud IDE.'}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{src:i(14616).A+"",width:"1917",height:"892"}),'\nIn the "File explorer" section, you can browse through the project.']}),"\n",(0,n.jsx)(t.h2,{id:"create-an-environment-for-managing-staging-and-production-workflows-for-the-project",children:"Create an environment for managing staging and production workflows for the project"}),"\n",(0,n.jsx)(t.h3,{id:"create-a-dbt-cloud-environment",children:"Create a dbt Cloud environment"}),"\n",(0,n.jsx)(t.p,{children:'Before deploying the project, an environment must be created, for this navigate to the dashboard of your project and click "create environment"'}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Determine the project's stage of development and select one of the deployment options: General, Staging, or Production, for this guide you might want to create it as a staging environment."}),"\n",(0,n.jsx)(t.li,{children:"for dbt version select versionless."}),"\n",(0,n.jsxs)(t.li,{children:["From the drop-down menu, choose the previously configured connection.\n",(0,n.jsx)(t.img,{src:i(91314).A+"",width:"1514",height:"760"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Provide the Deployment credentials for the connection and test the connection.\nOnce the connection is successful, save this environment.\n",(0,n.jsx)(t.img,{src:i(96507).A+"",width:"1435",height:"826"})]}),"\n",(0,n.jsxs)(t.p,{children:["Now we have successfully created the environment for creating jobs.\n",(0,n.jsx)(t.img,{src:i(15296).A+"",width:"1544",height:"651"})]}),"\n",(0,n.jsx)(t.h3,{id:"the-next-step-is-to-create-the-jobs",children:"The next step is to create the jobs"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'Clicking the "Create job" button directs you to the "Deploy job" configuration page.'}),"\n",(0,n.jsx)(t.li,{children:"Add a job name to identify the job."}),"\n",(0,n.jsx)(t.li,{children:"Select your environment from the drop-down menu,"}),"\n",(0,n.jsxs)(t.li,{children:["Choose the job to run, such as ",(0,n.jsx)(t.code,{children:"dbt build"}),", ",(0,n.jsx)(t.code,{children:"dbt seed"}),", etc."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"You can schedule these jobs using the provided checkbox and enable source freshness from the same section. Additionally, advanced configurations such as threads and target name can be adjusted based on the project\u2019s requirements"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(39497).A+"",width:"1488",height:"949"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(89526).A+"",width:"1525",height:"570"})}),"\n",(0,n.jsx)(t.p,{children:"After the job completes, you will be able to view the following:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Run summary \u2013 Displays the various stages of the job along with their run times. Expanding these summaries provides access to console and debug logs, which can be downloaded."}),"\n",(0,n.jsx)(t.li,{children:'Lineage \u2013 Selecting the "Lineage" option at the top displays a graph representing the data flow in your project.'}),"\n",(0,n.jsx)(t.li,{children:"Model timing \u2013 Shows the execution times of models and tests."}),"\n",(0,n.jsx)(t.li,{children:"Artifacts \u2013 Artifacts from your runs, such as the manifest.json file, are saved by dbt Cloud, with download links provided."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(43327).A+"",width:"1533",height:"835"})}),"\n",(0,n.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsx)(t.p,{children:"This tutorial demonstrates how to use dbt Cloud with Teradata Vantage, adapting the dbt Jaffle Shop example. It covers steps for project creation, environment configuration, and job setup in dbt Cloud with Teradata."}),"\n",(0,n.jsx)(t.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Learn more with ",(0,n.jsx)(t.a,{href:"https://learn.getdbt.com",children:"dbt Learn courses"})]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://developers.teradata.com/quickstarts/get-access-to-vantage/clearscape-analytics-experience/getting-started-with-csae/",children:"How we provision Teradata Clearscape Vantage instance"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},4048:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/dbt-cloud1-536020124efa169f696a8daaa76a4a65.png"},91314:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/dbt-cloud10-7a553009bdd2f9405dc2d931adc02e1f.png"},96507:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/dbt-cloud11-184b18a8b7d6297e13df3b3f5b464653.png"},15296:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/dbt-cloud12-57d0294be4da398fc8c4fd3f50f34a0c.png"},39497:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/dbt-cloud13-874d6f81b0f9cf60c3ce7e687ce5915b.png"},89526:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/dbt-cloud14-42e573622eaec959c3ae8c68465a1d65.png"},43327:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/dbt-cloud15-f2ae79082e2d3b429b359c74dd19f572.png"},17867:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/dbt-cloud2-4fee285e6e7e10437cbb9fd04445f1ed.png"},43714:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/dbt-cloud3-9030cfef8ab672172de0f9a2e7e05cbf.png"},89085:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/dbt-cloud4-9c77f8a2b4a4f675b0e0b0e8d63e2617.png"},67956:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/dbt-cloud5-ca76b05668610a08a265e4ac788bf120.png"},89423:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/dbt-cloud6-8aa74710f2508b86aaa969b73667f5c5.png"},7878:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/dbt-cloud7-a5675c6250fadbd141f923692bc49db4.png"},35745:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/dbt-cloud8-f72f08c559073cdaeda6e9c00fd40fee.png"},14616:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/dbt-cloud9-79a2aaf5ab01c9f5ce483afefa573660.png"},61594:(e,t,i)=>{i.d(t,{A:()=>n});const n="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8IS0tIEdlbmVyYXRlZCBieSBncmFwaHZpeiB2ZXJzaW9uIDkuMC4wICgyMDIzMDkxMS4xODI3KQogLS0+CjwhLS0gUGFnZXM6IDEgLS0+Cjxzdmcgd2lkdGg9IjY3NXB0IiBoZWlnaHQ9IjE1NXB0Igogdmlld0JveD0iMC4wMCAwLjAwIDY3NC41MCAxNTQuNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8ZyBpZD0iZ3JhcGgwIiBjbGFzcz0iZ3JhcGgiIHRyYW5zZm9ybT0ic2NhbGUoMSAxKSByb3RhdGUoMCkgdHJhbnNsYXRlKDQgMTUwLjUpIj4KPHBvbHlnb24gZmlsbD0id2hpdGUiIHN0cm9rZT0ibm9uZSIgcG9pbnRzPSItNCw0IC00LC0xNTAuNSA2NzAuNSwtMTUwLjUgNjcwLjUsNCAtNCw0Ii8+CjwhLS0gY3VzdG9tZXJzIC0tPgo8ZyBpZD0ibm9kZTEiIGNsYXNzPSJub2RlIj4KPHRpdGxlPmN1c3RvbWVyczwvdGl0bGU+Cjxwb2x5Z29uIGZpbGw9IiNmMzc4NDMiIHN0cm9rZT0ibm9uZSIgcG9pbnRzPSI4LC00IDgsLTE0Mi41IDE2OCwtMTQyLjUgMTY4LC00IDgsLTQiLz4KPHBvbHlnb24gZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBwb2ludHM9IjgsLTExMyA4LC0xNDIuNSAxNjgsLTE0Mi41IDE2OCwtMTEzIDgsLTExMyIvPgo8dGV4dCB0ZXh0LWFuY2hvcj0ic3RhcnQiIHg9IjQwLjc1IiB5PSItMTIzLjMiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2Esc2Fucy1TZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iMTYuMDAiIGZpbGw9IiNmZmZmZmYiPmN1c3RvbWVyczwvdGV4dD4KPHBvbHlnb24gZmlsbD0iI2Y5ZDZjZCIgc3Ryb2tlPSJub25lIiBwb2ludHM9IjgsLTg1Ljc1IDgsLTExMyAxNjgsLTExMyAxNjgsLTg1Ljc1IDgsLTg1Ljc1Ii8+Cjxwb2x5Z29uIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgcG9pbnRzPSI4LC04NS43NSA4LC0xMTMgMTY4LC0xMTMgMTY4LC04NS43NSA4LC04NS43NSIvPgo8dGV4dCB0ZXh0LWFuY2hvcj0ic3RhcnQiIHg9IjEzIiB5PSItOTUuNyIgZm9udC1mYW1pbHk9IkhlbHZldGljYSxzYW5zLVNlcmlmIiB0ZXh0LWRlY29yYXRpb249InVuZGVybGluZSIgZm9udC1zaXplPSIxNC4wMCIgZmlsbD0iIzAwMDAwMCI+aWQgJiMxNjA7PC90ZXh0Pgo8dGV4dCB0ZXh0LWFuY2hvcj0ic3RhcnQiIHg9IjM0Ljc1IiB5PSItOTUuNyIgZm9udC1mYW1pbHk9IkhlbHZldGljYSxzYW5zLVNlcmlmIiBmb250LXNpemU9IjE0LjAwIiBmaWxsPSIjMDAwMDAwIj4gW2ludF08L3RleHQ+Cjxwb2x5Z29uIGZpbGw9IiNmY2VjZTgiIHN0cm9rZT0ibm9uZSIgcG9pbnRzPSI4LC01OC41IDgsLTg1Ljc1IDE2OCwtODUuNzUgMTY4LC01OC41IDgsLTU4LjUiLz4KPHBvbHlnb24gZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBwb2ludHM9IjgsLTU4LjUgOCwtODUuNzUgMTY4LC04NS43NSAxNjgsLTU4LjUgOCwtNTguNSIvPgo8dGV4dCB0ZXh0LWFuY2hvcj0ic3RhcnQiIHg9IjEzIiB5PSItNjguNDUiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2Esc2Fucy1TZXJpZiIgZm9udC1zaXplPSIxNC4wMCIgZmlsbD0iIzg2ODY4NiI+Zmlyc3RfbmFtZSAmIzE2MDs8L3RleHQ+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iOTUuNSIgeT0iLTY4LjQ1IiBmb250LWZhbWlseT0iSGVsdmV0aWNhLHNhbnMtU2VyaWYiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiM4Njg2ODYiPiBbdmFyY2hhcl08L3RleHQ+Cjxwb2x5Z29uIGZpbGw9IiNmY2VjZTgiIHN0cm9rZT0ibm9uZSIgcG9pbnRzPSI4LC0zMS4yNSA4LC01OC41IDE2OCwtNTguNSAxNjgsLTMxLjI1IDgsLTMxLjI1Ii8+Cjxwb2x5Z29uIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgcG9pbnRzPSI4LC0zMS4yNSA4LC01OC41IDE2OCwtNTguNSAxNjgsLTMxLjI1IDgsLTMxLjI1Ii8+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iMTMiIHk9Ii00MS4yIiBmb250LWZhbWlseT0iSGVsdmV0aWNhLHNhbnMtU2VyaWYiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiM4Njg2ODYiPmxhc3RfbmFtZSAmIzE2MDs8L3RleHQ+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iOTIuNSIgeT0iLTQxLjIiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2Esc2Fucy1TZXJpZiIgZm9udC1zaXplPSIxNC4wMCIgZmlsbD0iIzg2ODY4NiI+IFt2YXJjaGFyXTwvdGV4dD4KPHBvbHlnb24gZmlsbD0iI2ZjZWNlOCIgc3Ryb2tlPSJub25lIiBwb2ludHM9IjgsLTQgOCwtMzEuMjUgMTY4LC0zMS4yNSAxNjgsLTQgOCwtNCIvPgo8cG9seWdvbiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHBvaW50cz0iOCwtNCA4LC0zMS4yNSAxNjgsLTMxLjI1IDE2OCwtNCA4LC00Ii8+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iMTMiIHk9Ii0xMy45NSIgZm9udC1mYW1pbHk9IkhlbHZldGljYSxzYW5zLVNlcmlmIiBmb250LXNpemU9IjE0LjAwIiBmaWxsPSIjODY4Njg2Ij5lbWFpbCAmIzE2MDs8L3RleHQ+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iNTkuNSIgeT0iLTEzLjk1IiBmb250LWZhbWlseT0iSGVsdmV0aWNhLHNhbnMtU2VyaWYiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiM4Njg2ODYiPiBbdmFyY2hhcl08L3RleHQ+CjwvZz4KPCEtLSBvcmRlcnMgLS0+CjxnIGlkPSJub2RlMiIgY2xhc3M9Im5vZGUiPgo8dGl0bGU+b3JkZXJzPC90aXRsZT4KPHBvbHlnb24gZmlsbD0iI2YzNzg0MyIgc3Ryb2tlPSJub25lIiBwb2ludHM9IjI1NywtNCAyNTcsLTE0Mi41IDM5NiwtMTQyLjUgMzk2LC00IDI1NywtNCIvPgo8cG9seWdvbiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHBvaW50cz0iMjU3LC0xMTMgMjU3LC0xNDIuNSAzOTYsLTE0Mi41IDM5NiwtMTEzIDI1NywtMTEzIi8+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iMjk2Ljg4IiB5PSItMTIzLjMiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2Esc2Fucy1TZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iMTYuMDAiIGZpbGw9IiNmZmZmZmYiPm9yZGVyczwvdGV4dD4KPHBvbHlnb24gZmlsbD0iI2Y5ZDZjZCIgc3Ryb2tlPSJub25lIiBwb2ludHM9IjI1NywtODUuNzUgMjU3LC0xMTMgMzk2LC0xMTMgMzk2LC04NS43NSAyNTcsLTg1Ljc1Ii8+Cjxwb2x5Z29uIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgcG9pbnRzPSIyNTcsLTg1Ljc1IDI1NywtMTEzIDM5NiwtMTEzIDM5NiwtODUuNzUgMjU3LC04NS43NSIvPgo8dGV4dCB0ZXh0LWFuY2hvcj0ic3RhcnQiIHg9IjI2MiIgeT0iLTk1LjciIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2Esc2Fucy1TZXJpZiIgdGV4dC1kZWNvcmF0aW9uPSJ1bmRlcmxpbmUiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiMwMDAwMDAiPmlkICYjMTYwOzwvdGV4dD4KPHRleHQgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSIyODMuNzUiIHk9Ii05NS43IiBmb250LWZhbWlseT0iSGVsdmV0aWNhLHNhbnMtU2VyaWYiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiMwMDAwMDAiPiBbaW50XTwvdGV4dD4KPHBvbHlnb24gZmlsbD0iI2ZjZWNlOCIgc3Ryb2tlPSJub25lIiBwb2ludHM9IjI1NywtNTguNSAyNTcsLTg1Ljc1IDM5NiwtODUuNzUgMzk2LC01OC41IDI1NywtNTguNSIvPgo8cG9seWdvbiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHBvaW50cz0iMjU3LC01OC41IDI1NywtODUuNzUgMzk2LC04NS43NSAzOTYsLTU4LjUgMjU3LC01OC41Ii8+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iMjYyIiB5PSItNjguNDUiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2Esc2Fucy1TZXJpZiIgZm9udC1zdHlsZT0iaXRhbGljIiBmb250LXNpemU9IjE0LjAwIiBmaWxsPSIjODY4Njg2Ij51c2VyX2lkICYjMTYwOzwvdGV4dD4KPHRleHQgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSIzMjEuMjUiIHk9Ii02OC40NSIgZm9udC1mYW1pbHk9IkhlbHZldGljYSxzYW5zLVNlcmlmIiBmb250LXNpemU9IjE0LjAwIiBmaWxsPSIjODY4Njg2Ij4gW2ludF08L3RleHQ+Cjxwb2x5Z29uIGZpbGw9IiNmY2VjZTgiIHN0cm9rZT0ibm9uZSIgcG9pbnRzPSIyNTcsLTMxLjI1IDI1NywtNTguNSAzOTYsLTU4LjUgMzk2LC0zMS4yNSAyNTcsLTMxLjI1Ii8+Cjxwb2x5Z29uIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgcG9pbnRzPSIyNTcsLTMxLjI1IDI1NywtNTguNSAzOTYsLTU4LjUgMzk2LC0zMS4yNSAyNTcsLTMxLjI1Ii8+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iMjYyIiB5PSItNDEuMiIgZm9udC1mYW1pbHk9IkhlbHZldGljYSxzYW5zLVNlcmlmIiBmb250LXNpemU9IjE0LjAwIiBmaWxsPSIjODY4Njg2Ij5vcmRlcl9kYXRlICYjMTYwOzwvdGV4dD4KPHRleHQgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSIzNDUuMjUiIHk9Ii00MS4yIiBmb250LWZhbWlseT0iSGVsdmV0aWNhLHNhbnMtU2VyaWYiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiM4Njg2ODYiPiBbZGF0ZV08L3RleHQ+Cjxwb2x5Z29uIGZpbGw9IiNmY2VjZTgiIHN0cm9rZT0ibm9uZSIgcG9pbnRzPSIyNTcsLTQgMjU3LC0zMS4yNSAzOTYsLTMxLjI1IDM5NiwtNCAyNTcsLTQiLz4KPHBvbHlnb24gZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBwb2ludHM9IjI1NywtNCAyNTcsLTMxLjI1IDM5NiwtMzEuMjUgMzk2LC00IDI1NywtNCIvPgo8dGV4dCB0ZXh0LWFuY2hvcj0ic3RhcnQiIHg9IjI2MiIgeT0iLTEzLjk1IiBmb250LWZhbWlseT0iSGVsdmV0aWNhLHNhbnMtU2VyaWYiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiM4Njg2ODYiPnN0YXR1cyAmIzE2MDs8L3RleHQ+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iMzEzLjc1IiB5PSItMTMuOTUiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2Esc2Fucy1TZXJpZiIgZm9udC1zaXplPSIxNC4wMCIgZmlsbD0iIzg2ODY4NiI+IFt2YXJjaGFyXTwvdGV4dD4KPC9nPgo8IS0tIGN1c3RvbWVycyYjNDU7JiM0NTtvcmRlcnMgLS0+CjxnIGlkPSJlZGdlMSIgY2xhc3M9ImVkZ2UiPgo8dGl0bGU+Y3VzdG9tZXJzJiM0NTsmIzQ1O29yZGVyczwvdGl0bGU+CjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzdmN2Y3ZiIgc3Ryb2tlLWRhc2hhcnJheT0iNSwyIiBkPSJNMTc1LjcyLC03My4yNUMxOTkuODUsLTczLjI1IDIyNS44NiwtNzMuMjUgMjQ5LjMzLC03My4yNSIvPgo8dGV4dCB0ZXh0LWFuY2hvcj0ic3RhcnQiIHg9IjIxOS4zMyIgeT0iLTU5Ljk1IiBmb250LWZhbWlseT0iVGltZXMsc2VyaWYiIGZvbnQtc2l6ZT0iMTQuMDAiPjAuLk48L3RleHQ+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iMTc1LjcyIiB5PSItNTkuOTUiIGZvbnQtZmFtaWx5PSJUaW1lcyxzZXJpZiIgZm9udC1zaXplPSIxNC4wMCI+MTwvdGV4dD4KPC9nPgo8IS0tIHBheW1lbnRzIC0tPgo8ZyBpZD0ibm9kZTMiIGNsYXNzPSJub2RlIj4KPHRpdGxlPnBheW1lbnRzPC90aXRsZT4KPHBvbHlnb24gZmlsbD0iI2YzNzg0MyIgc3Ryb2tlPSJub25lIiBwb2ludHM9IjQ4NSwtNCA0ODUsLTE0Mi41IDY1OC41LC0xNDIuNSA2NTguNSwtNCA0ODUsLTQiLz4KPHBvbHlnb24gZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBwb2ludHM9IjQ4NSwtMTEzIDQ4NSwtMTQyLjUgNjU4LjUsLTE0Mi41IDY1OC41LC0xMTMgNDg1LC0xMTMiLz4KPHRleHQgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSI1MjcuODgiIHk9Ii0xMjMuMyIgZm9udC1mYW1pbHk9IkhlbHZldGljYSxzYW5zLVNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIxNi4wMCIgZmlsbD0iI2ZmZmZmZiI+cGF5bWVudHM8L3RleHQ+Cjxwb2x5Z29uIGZpbGw9IiNmOWQ2Y2QiIHN0cm9rZT0ibm9uZSIgcG9pbnRzPSI0ODUsLTg1Ljc1IDQ4NSwtMTEzIDY1OC41LC0xMTMgNjU4LjUsLTg1Ljc1IDQ4NSwtODUuNzUiLz4KPHBvbHlnb24gZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBwb2ludHM9IjQ4NSwtODUuNzUgNDg1LC0xMTMgNjU4LjUsLTExMyA2NTguNSwtODUuNzUgNDg1LC04NS43NSIvPgo8dGV4dCB0ZXh0LWFuY2hvcj0ic3RhcnQiIHg9IjQ5MCIgeT0iLTk1LjciIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2Esc2Fucy1TZXJpZiIgdGV4dC1kZWNvcmF0aW9uPSJ1bmRlcmxpbmUiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiMwMDAwMDAiPmlkICYjMTYwOzwvdGV4dD4KPHRleHQgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSI1MTEuNzUiIHk9Ii05NS43IiBmb250LWZhbWlseT0iSGVsdmV0aWNhLHNhbnMtU2VyaWYiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiMwMDAwMDAiPiBbaW50XTwvdGV4dD4KPHBvbHlnb24gZmlsbD0iI2ZjZWNlOCIgc3Ryb2tlPSJub25lIiBwb2ludHM9IjQ4NSwtNTguNSA0ODUsLTg1Ljc1IDY1OC41LC04NS43NSA2NTguNSwtNTguNSA0ODUsLTU4LjUiLz4KPHBvbHlnb24gZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBwb2ludHM9IjQ4NSwtNTguNSA0ODUsLTg1Ljc1IDY1OC41LC04NS43NSA2NTguNSwtNTguNSA0ODUsLTU4LjUiLz4KPHRleHQgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSI0OTAiIHk9Ii02OC40NSIgZm9udC1mYW1pbHk9IkhlbHZldGljYSxzYW5zLVNlcmlmIiBmb250LXN0eWxlPSJpdGFsaWMiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiM4Njg2ODYiPm9yZGVyX2lkICYjMTYwOzwvdGV4dD4KPHRleHQgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSI1NTUuMjUiIHk9Ii02OC40NSIgZm9udC1mYW1pbHk9IkhlbHZldGljYSxzYW5zLVNlcmlmIiBmb250LXNpemU9IjE0LjAwIiBmaWxsPSIjODY4Njg2Ij4gW2ludF08L3RleHQ+Cjxwb2x5Z29uIGZpbGw9IiNmY2VjZTgiIHN0cm9rZT0ibm9uZSIgcG9pbnRzPSI0ODUsLTMxLjI1IDQ4NSwtNTguNSA2NTguNSwtNTguNSA2NTguNSwtMzEuMjUgNDg1LC0zMS4yNSIvPgo8cG9seWdvbiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHBvaW50cz0iNDg1LC0zMS4yNSA0ODUsLTU4LjUgNjU4LjUsLTU4LjUgNjU4LjUsLTMxLjI1IDQ4NSwtMzEuMjUiLz4KPHRleHQgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSI0OTAiIHk9Ii00MS4yIiBmb250LWZhbWlseT0iSGVsdmV0aWNhLHNhbnMtU2VyaWYiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiM4Njg2ODYiPnBheW1lbnRfbWV0aG9kICYjMTYwOzwvdGV4dD4KPHRleHQgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSI2MjAuNSIgeT0iLTQxLjIiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2Esc2Fucy1TZXJpZiIgZm9udC1zaXplPSIxNC4wMCIgZmlsbD0iIzg2ODY4NiI+IFtpbnRdPC90ZXh0Pgo8cG9seWdvbiBmaWxsPSIjZmNlY2U4IiBzdHJva2U9Im5vbmUiIHBvaW50cz0iNDg1LC00IDQ4NSwtMzEuMjUgNjU4LjUsLTMxLjI1IDY1OC41LC00IDQ4NSwtNCIvPgo8cG9seWdvbiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHBvaW50cz0iNDg1LC00IDQ4NSwtMzEuMjUgNjU4LjUsLTMxLjI1IDY1OC41LC00IDQ4NSwtNCIvPgo8dGV4dCB0ZXh0LWFuY2hvcj0ic3RhcnQiIHg9IjQ5MCIgeT0iLTEzLjk1IiBmb250LWZhbWlseT0iSGVsdmV0aWNhLHNhbnMtU2VyaWYiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IiM4Njg2ODYiPmFtb3VudCAmIzE2MDs8L3RleHQ+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iNTUyLjI1IiB5PSItMTMuOTUiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2Esc2Fucy1TZXJpZiIgZm9udC1zaXplPSIxNC4wMCIgZmlsbD0iIzg2ODY4NiI+IFtpbnRdPC90ZXh0Pgo8L2c+CjwhLS0gb3JkZXJzJiM0NTsmIzQ1O3BheW1lbnRzIC0tPgo8ZyBpZD0iZWRnZTIiIGNsYXNzPSJlZGdlIj4KPHRpdGxlPm9yZGVycyYjNDU7JiM0NTtwYXltZW50czwvdGl0bGU+CjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzdmN2Y3ZiIgc3Ryb2tlLWRhc2hhcnJheT0iNSwyIiBkPSJNNDAzLjgsLTczLjI1QzQyNy4wNywtNzMuMjUgNDUyLjkyLC03My4yNSA0NzcuMTksLTczLjI1Ii8+Cjx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iNDQ3LjE5IiB5PSItNTkuOTUiIGZvbnQtZmFtaWx5PSJUaW1lcyxzZXJpZiIgZm9udC1zaXplPSIxNC4wMCI+MC4uTjwvdGV4dD4KPHRleHQgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSI0MDMuOCIgeT0iLTU5Ljk1IiBmb250LWZhbWlseT0iVGltZXMsc2VyaWYiIGZvbnQtc2l6ZT0iMTQuMDAiPjE8L3RleHQ+CjwvZz4KPC9nPgo8L3N2Zz4K"},29705:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/dbt2-63eca13a00dea36a5f312dc45c10c04b.svg"},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>l});var n=i(96540);const a={},d=n.createContext(a);function s(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);
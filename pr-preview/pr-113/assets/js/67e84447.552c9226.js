"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[1174],{58707:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var a=t(74848),s=t(28453);function r(e){const n={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["To request a VantageCloud Lake environment, refer to the form provided in this ",(0,a.jsx)(n.a,{href:"https://www.teradata.com/about-us/contact",children:"link"}),". If you already have a VantageCloud Lake environment and seek guidance on configuration, please consult this ",(0,a.jsx)(n.a,{href:"/pr-preview/pr-113/quickstarts/vantagecloud-lake/getting-started-with-vantagecloud-lake",children:"guide"}),"."]})})}function i(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}const o={sidebar_position:6,author:"Daniel Herrera",email:"daniel.herrera2@teradata.com",page_last_update:"January 26th, 2024",description:"Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Azure",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","cloud computing","machine learning","sagemaker","vantagecloud","vantagecloud lake","lake"]},l="Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Microsoft Azure",d={id:"vantagecloud-lake/vantagecloud-lake-demo-jupyter-azure",title:"Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Microsoft Azure",description:"Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Azure",source:"@site/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-azure.md",sourceDirName:"vantagecloud-lake",slug:"/vantagecloud-lake/vantagecloud-lake-demo-jupyter-azure",permalink:"/pr-preview/pr-113/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-azure",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,author:"Daniel Herrera",email:"daniel.herrera2@teradata.com",page_last_update:"January 26th, 2024",description:"Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Azure",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","cloud computing","machine learning","sagemaker","vantagecloud","vantagecloud lake","lake"]},sidebar:"tutorialSidebar",previous:{title:"Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Google Cloud Vertex AI",permalink:"/pr-preview/pr-113/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-google-cloud-vertex-ai"}},c={},u=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Microsoft Azure setup",id:"microsoft-azure-setup",level:2},{value:"Create a Microsoft Azure Web App based on Teradata Jupyter Lab extensions Docker image",id:"create-a-microsoft-azure-web-app-based-on-teradata-jupyter-lab-extensions-docker-image",level:3},{value:"Configure Jupyter Lab extensions Azure Web App",id:"configure-jupyter-lab-extensions-azure-web-app",level:3},{value:"Load Vantagecloud Lake demos to Jupyter Lab extensions Azure Web App",id:"load-vantagecloud-lake-demos-to-jupyter-lab-extensions-azure-web-app",level:3},{value:"Find the IP of the Jupyter Lab extensions Azure Web App",id:"find-the-ip-of-the-jupyter-lab-extensions-azure-web-app",level:3},{value:"VantageCloud Lake Configuration",id:"vantagecloud-lake-configuration",level:2},{value:"Jupyter Notebook Demos for VantageCloud Lake",id:"jupyter-notebook-demos-for-vantagecloud-lake",level:2},{value:"Configurations",id:"configurations",level:3},{value:"Run demos",id:"run-demos",level:2},{value:"Summary",id:"summary",level:2},{value:"Further reading",id:"further-reading",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"run-teradata-jupyter-notebook-demos-for-vantagecloud-lake-in-microsoft-azure",children:"Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Microsoft Azure"}),"\n",(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsxs)(n.p,{children:["This quickstart details the process for running the ",(0,a.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos",children:"Teradata Jupyter Notebook Demos for VantageCloud Lake"}),", on Microsoft Azure."]}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Access to a Microsoft Azure account"}),"\n",(0,a.jsxs)(n.li,{children:["Access to a VantageCloud Lake environment","\n",(0,a.jsx)(i,{}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"microsoft-azure-setup",children:"Microsoft Azure setup"}),"\n",(0,a.jsx)(n.p,{children:"In this section we will cover in detail each of the steps below:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Create a Microsoft Azure Web App based on Teradata Jupyter Lab extensions Docker image"}),"\n",(0,a.jsx)(n.li,{children:"Configure Jupyter Lab extensions Azure Web App"}),"\n",(0,a.jsx)(n.li,{children:"Load Vantagecloud Lake demos to Jupyter Lab extensions Azure Web App"}),"\n",(0,a.jsx)(n.li,{children:"Find the IP of the Jupyter Lab extensions Azure Web App"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"create-a-microsoft-azure-web-app-based-on-teradata-jupyter-lab-extensions-docker-image",children:"Create a Microsoft Azure Web App based on Teradata Jupyter Lab extensions Docker image"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:['Login to Microsoft Azure and click on "APP Services"\n',(0,a.jsx)(n.img,{alt:"Azure console",src:t(50764).A+"",width:"1225",height:"640"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:['In "App Services" click Web App\n',(0,a.jsx)(n.img,{alt:"Create Azure web app",src:t(97461).A+"",width:"1487",height:"723"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:'On the "Basics" tab:'}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Select the appropriate resource group from the dropdown, or create a new one"}),"\n",(0,a.jsx)(n.li,{children:"Enter a name for your web app."}),"\n",(0,a.jsx)(n.li,{children:'Select "Docker Container" in the "Publish" radio button options'}),"\n",(0,a.jsx)(n.li,{children:'Select "Linux" as the operating system'}),"\n",(0,a.jsx)(n.li,{children:"Select the appropriate region from the dropdown"}),"\n",(0,a.jsx)(n.li,{children:"Select the appropriate App Service plan. If you don't have one, a new one will be created with default configurations"}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"For purposes of the VantageCloud Lake demo redundancy is not needed"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:['After completing this tab, click the "Docker" tab to continue\n',(0,a.jsx)(n.img,{alt:"Create Azure web app Basics",src:t(29790).A+"",width:"733",height:"760"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:'On the "Docker" tab:'}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:'Select "Single Container" from the dropdown'}),"\n",(0,a.jsx)(n.li,{children:'In the "Image Source" dropdown select "Docker Hub"'}),"\n",(0,a.jsx)(n.li,{children:'In the "Access Type" dropdown select "Public"'}),"\n",(0,a.jsxs)(n.li,{children:['In "Image and tag" type ',(0,a.jsx)(n.code,{children:"teradata/jupyterlab-extensions:latest"})]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"A startup command is not needed for this App Service"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:['Select the "Review + Create" tab to continue\n',(0,a.jsx)(n.img,{alt:"Create Azure web app Docker",src:t(70023).A+"",width:"740",height:"868"})]}),"\n",(0,a.jsxs)(n.li,{children:['In the "Review + Create" tab click the "Create" button\n',(0,a.jsx)(n.img,{alt:"Create Azure web app Review",src:t(90408).A+"",width:"575",height:"752"})]}),"\n",(0,a.jsxs)(n.li,{children:['When the deployment is complete click the "Go to Resource" button\n',(0,a.jsx)(n.img,{alt:"Create Azure web app Complete",src:t(16261).A+"",width:"1222",height:"523"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"configure-jupyter-lab-extensions-azure-web-app",children:"Configure Jupyter Lab extensions Azure Web App"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Select Configuration on the right panel\n",(0,a.jsx)(n.img,{alt:"Create Azure web app Complete",src:t(81463).A+"",width:"1560",height:"702"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Add the following Application Settings"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Application Setting"})}),(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Value"})})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:'"accept_license"'})}),(0,a.jsx)(n.td,{children:"Y"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:'"WEBSITES_PORT"'})}),(0,a.jsx)(n.td,{children:"8888"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:'"JUPYTER_TOKEN"'})}),(0,a.jsx)(n.td,{children:"Define the Jupyter Lab access token that you would like to use."})]})]})]}),"\n",(0,a.jsx)(n.admonition,{type:"important",children:(0,a.jsx)(n.p,{children:'If you don\'t include the "JUPYTER_TOKEN" configuration, the container will generate a new token and log it to the console. You will need to retrieve it from the application logs. If you include the "JUPYTER_TOKEN" configuration key but leave the value blank, the system will set the token as an empty string, resulting in an unprotected Jupyter Lab environment without any token security.\n:::'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Click on save, your app will be restarted\n",(0,a.jsx)(n.img,{alt:"Config Azure web app",src:t(53335).A+"",width:"1070",height:"669"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Return to the Overview tab on the right panel"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"load-vantagecloud-lake-demos-to-jupyter-lab-extensions-azure-web-app",children:"Load Vantagecloud Lake demos to Jupyter Lab extensions Azure Web App"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Click on Default domain\n",(0,a.jsx)(n.img,{alt:"Config Azure web app",src:t(59385).A+"",width:"1560",height:"702"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["On the Jupyter Lab start dialogue enter the defined Jupyter token and click Log in\n",(0,a.jsx)(n.img,{alt:"Config Azure web app",src:t(46978).A+"",width:"706",height:"898"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["On the Jupyter Lab console click on the git icon\n",(0,a.jsx)(n.img,{alt:"Config Azure web app",src:t(35573).A+"",width:"1590",height:"671"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Copy the following URI in the corresponding field"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"https://github.com/Teradata/lake-demos.git"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Click Clone\n",(0,a.jsx)(n.img,{alt:"Config Azure web app",src:t(77424).A+"",width:"1551",height:"676"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["On the Jupyter Lab console click in the ",(0,a.jsx)(n.code,{children:"lake-demos"})," folder\n",(0,a.jsx)(n.img,{alt:"Config Azure web app",src:t(25957).A+"",width:"1562",height:"645"})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Config Azure web app",src:t(87982).A+"",width:"1551",height:"698"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"find-the-ip-of-the-jupyter-lab-extensions-azure-web-app",children:"Find the IP of the Jupyter Lab extensions Azure Web App"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"In JupyterLab open a notebook with Teradata Python kernel and run the following command to find your notebook instance's IP address."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",metastring:', id="lakedemos_azure_first_config", role="emits-gtm-events, content-editable"',children:'import requests\ndef get_public_ip():\n    try:\n        response = requests.get(\'https://api.ipify.org\')\n        return response.text\n    except requests.RequestException as e:\n        return "Error: " + str(e)\nmy_public_ip = get_public_ip()\nprint("My Public IP is:", my_public_ip)\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"The next step is whitelist this IP in your VantageCloud Lake environment to allow the connection"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"This is for purposes of this guide and the notebook demos. For production environments, a more robust networking setting might be needed"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Azure App Service offers, as well, a list of all possible IP addresses that the service might expose. This is under the overview tab\n",(0,a.jsx)(n.img,{alt:"Loaded JupyterLab",src:t(59602).A+"",width:"774",height:"241"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"vantagecloud-lake-configuration",children:"VantageCloud Lake Configuration"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"In the VantageCloud Lake environment, under settings, add the IP of your notebook instance"}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"A lake environment supports multiple address whitelisting"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Initiate JupyterLab",src:t(73483).A+"",width:"1423",height:"662"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"jupyter-notebook-demos-for-vantagecloud-lake",children:"Jupyter Notebook Demos for VantageCloud Lake"}),"\n",(0,a.jsx)(n.h3,{id:"configurations",children:"Configurations"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos/blob/main/vars.json",children:"vars.json"})," should be edited to match the configuration of your VantageCloud Lake environment\n",(0,a.jsx)(n.img,{alt:"Initiate JupyterLab",src:t(72984).A+"",width:"922",height:"904"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Especifically the following values should be added"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Variable"})}),(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Value"})})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:'"host"'})}),(0,a.jsx)(n.td,{children:"Public IP value from your VantageCloud Lake environment"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:'"UES_URI"'})}),(0,a.jsx)(n.td,{children:"Open Analytics from your VantageCloud Lake environment"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:'"dbc"'})}),(0,a.jsx)(n.td,{children:"The master password of your VantageCloud Lake environment."})]})]})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:'You\'ll see that in the sample vars.json, the passwords of all users are defaulted to "password", this is just for illustration purposes, you should change all of these password fields to strong passwords, secure them as necessary, and follow other password management best practices.'}),"\n",(0,a.jsx)(n.admonition,{type:"important",children:(0,a.jsx)(n.p,{children:"Remember to change all passwords in the vars.json file."})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"run-demos",children:"Run demos"}),"\n",(0,a.jsxs)(n.p,{children:["Open and execute all the cells in ",(0,a.jsx)(n.em,{children:"0_Demo_Environment_Setup.ipynb"})," to setup your environment. Followed by ",(0,a.jsx)(n.em,{children:"1_Demo_Setup_Base_Data.ipynb"})," to load the base data required for demo."]}),"\n",(0,a.jsxs)(n.p,{children:["To learn more about the demo notebooks, go to ",(0,a.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos",children:"Teradata Lake demos"})," page on GitHub."]}),"\n",(0,a.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsx)(n.p,{children:"In this quick start we learned how to run Jupyter notebook demos for VantageCloud Lake in Microsoft Azure."}),"\n",(0,a.jsx)(n.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://docs.teradata.com/r/Teradata-VantageCloud-Lake/Getting-Started-First-Sign-On-by-Organization-Admin",children:"Teradata VantageCloud Lake documentation"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/pr-preview/pr-113/quickstarts/analyze-data/jupyter",children:"Use Vantage from a Jupyter notebook"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},97461:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/azure-app-service-1-2ff913b123d9e4326c9611f88ce49b3e.PNG"},29790:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/azure-app-service-2-f2d2b6b7334f8e1572e045194c69a1a1.PNG"},70023:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/azure-app-service-3-ebebd43912bc3b9fcb101daf9a814c58.PNG"},90408:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/azure-app-service-4-77c09ced32b87517de13e604c68fe708.PNG"},16261:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/azure-app-service-deployment-complete-5-5a56b178304a6d9345feb48f8637813e.PNG"},59602:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/azure-app-service-ips-14-fef19bf5b7ebe3742614f31fb23ea55b.PNG"},81463:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/azure-app-service-resource-6-d1c7ca08896893e4ab31fd58ddac3040.PNG"},59385:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/azure-app-service-resource-8-ee96204bfda7739061a018f4aa904577.PNG"},53335:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/azure-app-service-resource-config-7-51e3b644ecd3ed6439d524d04b472bcf.PNG"},50764:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/azure-console-0-ed9ec305648bf84cf32f68a016f657dc.PNG"},35573:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/azure-jupyter-console-10-67c86b939eaca755b8688dc9e9f7d6e6.PNG"},46978:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/azure-jupyter-console-auth-9-73e7619465a4854e1def6105bcc3fa55.PNG"},25957:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/azure-jupyter-console-click-lake-demos-12-5991b8d07bdcbffc5fa55246db72efea.PNG"},77424:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/azure-jupyter-console-clone-11-5c5ed797e1ab4e96caa51a803059ebf0.PNG"},87982:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/azure-jupyter-console-lakedemos-13-bba61c16dbed0d53059ee1353259f164.PNG"},73483:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/sagemaker-lake-9e18bff602d568e81bbb721a3d4e2553.PNG"},72984:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/sagemaker-vars-d771ffabe211a1bd3ebd6ba6ce32468d.PNG"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var a=t(96540);const s={},r=a.createContext(s);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);
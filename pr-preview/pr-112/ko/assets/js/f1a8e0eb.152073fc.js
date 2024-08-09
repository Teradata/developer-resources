"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[3825],{41269:(e,t,a)=>{a.d(t,{Ay:()=>i,RM:()=>r});var n=a(74848),o=a(28453);const r=[];function s(e){const t={a:"a",admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["If you have any questions or need further assistance, please visit our ",(0,n.jsx)(t.a,{href:"https://support.teradata.com/community",children:"community forum"})," where you can get support and interact with other community members."]})})}function i(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}},81638:(e,t,a)=>{a.d(t,{Ay:()=>i,RM:()=>r});var n=a(74848),o=a(28453);const r=[];function s(e){const t={a:"a",admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["This how-to shows you how to add Teradata Extensions to a Jupyter Notebooks environment. A hosted version of Jupyter Notebooks integrated with Teradata Extensions and analytics tools is available for functional testing for free at ",(0,n.jsx)(t.a,{href:"https://clearscape.teradata.com",children:"https://clearscape.teradata.com"}),"."]})})}function i(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}},62680:(e,t,a)=>{a.d(t,{Ay:()=>i,RM:()=>r});var n=a(74848),o=a(28453);const r=[];function s(e){const t={a:"a",admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["If you need a test instance of Vantage, you can provision one for free at ",(0,n.jsx)(t.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})})}function i(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}},58224:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=a(74848),o=a(28453),r=a(81638),s=a(62680),i=a(41269);const l={sidebar_position:1,id:"jupyter",title:"Use Vantage from a Jupyter notebook",author:"Adam Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"November 10th, 2022",description:"Use Teradata Vantage from a Jupyter notebook",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","JDBC","java applications","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","teradatasqlalchemy"]},d="Use Vantage from a Jupyter notebook",c={id:"analyze-data/jupyter",title:"Use Vantage from a Jupyter notebook",description:"Use Teradata Vantage from a Jupyter notebook",source:"@site/quickstarts/analyze-data/jupyter.md",sourceDirName:"analyze-data",slug:"/analyze-data/jupyter",permalink:"/pr-preview/pr-112/ko/quickstarts/analyze-data/jupyter",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"jupyter",title:"Use Vantage from a Jupyter notebook",author:"Adam Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"November 10th, 2022",description:"Use Teradata Vantage from a Jupyter notebook",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","JDBC","java applications","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","teradatasqlalchemy"]},sidebar:"tutorialSidebar",previous:{title:"Send queries using REST API",permalink:"/pr-preview/pr-112/ko/quickstarts/create-applications/send-queries-using-rest-api"},next:{title:"Deploy Teradata Jupyter extensions to JupyterHub",permalink:"/pr-preview/pr-112/ko/quickstarts/analyze-data/local-jupyter-hub"}},h={},p=[...r.RM,{value:"Overview",id:"overview",level:2},...s.RM,{value:"Options",id:"options",level:2},{value:"Teradata libraries",id:"teradata-libraries",level:3},{value:"Teradata Jupyter Docker image",id:"teradata-jupyter-docker-image",level:3},{value:"Summary",id:"summary",level:2},{value:"Further reading",id:"further-reading",level:2},...i.RM];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"use-vantage-from-a-jupyter-notebook",children:"Use Vantage from a Jupyter notebook"}),"\n",(0,n.jsx)(r.Ay,{}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"In this how-to we will go through the steps for connecting to Teradata Vantage from a Jupyter notebook."}),"\n",(0,n.jsx)(s.Ay,{}),"\n",(0,n.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,n.jsx)(t.p,{children:"There are a couple of ways to connect to Vantage from a Jupyter Notebook:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#teradata-libraries",children:"Use python or R libraries in a regular Python/R kernel notebook"})," - this option works well when you are in a restricted environment that doesn't allow you to spawn your own Docker images. Also, it's useful in traditional datascience scenarios when you have to mix SQL and Python/R in a notebook. If you are proficient with Jupyter and have your own set of preferred libraries and extensions, start with this option."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#teradata-jupyter-docker-image",children:"Use the Teradata Jupyter Docker image"})," - the Teradata Jupyter Docker image bundles the Teradata SQL kernel (more on this later), ",(0,n.jsx)(t.code,{children:"teradataml"})," and ",(0,n.jsx)(t.code,{children:"tdplyr"})," libraries, python and R drivers. It also contains Jupyter extensions that allow you to manage Teradata connections, explore objects in Vantage database. It's convenient when you work a lot with SQL or would find a visual Navigator helpful. If you are new to Jupyter or if you prefer to get a currated assembly of libraries and extensions, start with this option."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"teradata-libraries",children:"Teradata libraries"}),"\n",(0,n.jsxs)(t.p,{children:["This option uses a regular Jupyter Lab notebook. We will see how to load the Teradata Python driver and use it from Python code. We will also examine ",(0,n.jsx)(t.code,{children:"ipython-sql"})," extension that adds support for SQL-only cells."]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"We start with a plain Jupyter Lab notebook. Here, I'm using docker but any method of starting a notebook, including Jupyter Hub, Google Cloud AI Platform Notebooks, AWS SageMaker Notebooks, Azure ML Notebooks will do."}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'docker run --rm -p 8888:8888 -e JUPYTER_ENABLE_LAB=yes \\\n  -v "${PWD}":/home/jovyan/work jupyter/datascience-notebook\n'})}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsx)(t.li,{children:"Docker logs will display the url that you need to go to:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"Entered start.sh with args: jupyter lab\nExecuting the command: jupyter lab\n....\nTo access the server, open this file in a browser:\n    file:///home/jovyan/.local/share/jupyter/runtime/jpserver-7-open.html\nOr copy and paste one of these URLs:\n    http://d5c2323ae5db:8888/lab?token=5fb43e674367c6895e8c2404188aa550b5c7bdf96f5b4a3a\n  or http://127.0.0.1:8888/lab?token=5fb43e674367c6895e8c2404188aa550b5c7bdf96f5b4a3a\n"})}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsx)(t.li,{children:"We will open a new notebook and create a cell to install the required libraries:"}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["I've published a notebook with all the cells described below on GitHub: ",(0,n.jsx)(t.a,{href:"https://github.com/Teradata/quickstarts/blob/main/modules/ROOT/attachments/vantage-with-python-libraries.ipynb",children:"https://github.com/Teradata/quickstarts/blob/main/modules/ROOT/attachments/vantage-with-python-libraries.ipynb"})]})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"import sys\n!{sys.executable} -m pip install teradatasqlalchemy\n"})}),"\n",(0,n.jsxs)(t.ol,{start:"4",children:["\n",(0,n.jsxs)(t.li,{children:["Now, we will import ",(0,n.jsx)(t.code,{children:"Pandas"})," and define the connection string to connect to Teradata. Since I'm running my notebook in Docker on my local machine and I want to connect to a local Vantage Express VM, I'm using ",(0,n.jsx)(t.code,{children:"host.docker.internal"})," DNS name provided by Docker to reference the IP of my machine."]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'import pandas as pd\n# Define the db connection string. Pandas uses SQLAlchemy connection strings.\n# For Teradata Vantage, it\'s teradatasql://username:password@host/database_name .\n# See https://pypi.org/project/teradatasqlalchemy/ for details.\ndb_connection_string = "teradatasql://dbc:dbc@host.docker.internal/dbc"\n'})}),"\n",(0,n.jsxs)(t.ol,{start:"5",children:["\n",(0,n.jsx)(t.li,{children:"I can now call Pandas to query Vantage and move the result to a Pandas dataframe:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'pd.read_sql("SELECT * FROM dbc.dbcinfo", con = db_connection_string)\n'})}),"\n",(0,n.jsxs)(t.ol,{start:"6",children:["\n",(0,n.jsxs)(t.li,{children:["The syntax above is concise but it can get tedious if all you need is to explore data in Vantage. We will use ",(0,n.jsx)(t.code,{children:"ipython-sql"})," and its ",(0,n.jsx)(t.code,{children:"%%sql"})," magic to create SQL-only cells. We start with importing the required libraries."]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"import sys\n!{sys.executable} -m pip install ipython-sql teradatasqlalchemy\n"})}),"\n",(0,n.jsxs)(t.ol,{start:"7",children:["\n",(0,n.jsxs)(t.li,{children:["We load ",(0,n.jsx)(t.code,{children:"ipython-sql"})," and define the db connection string:"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"%load_ext sql\n# Define the db connection string. The sql magic uses SQLAlchemy connection strings.\n# For Teradata Vantage, it's teradatasql://username:password@host/database_name .\n# See https://pypi.org/project/teradatasqlalchemy/ for details.\n%sql teradatasql://dbc:dbc@host.docker.internal/dbc\n"})}),"\n",(0,n.jsxs)(t.ol,{start:"8",children:["\n",(0,n.jsxs)(t.li,{children:["We can now use ",(0,n.jsx)(t.code,{children:"%sql"})," and ",(0,n.jsx)(t.code,{children:"%%sql"})," magic. Let's say we want to explore data in a table. We can create a cell that says:"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"%%sql\nSELECT * FROM dbc.dbcinfo\n"})}),"\n",(0,n.jsxs)(t.ol,{start:"9",children:["\n",(0,n.jsx)(t.li,{children:"If we want to move the data to a Pandas frame, we can say:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"result = %sql SELECT * FROM dbc.dbcinfo\nresult.DataFrame()\n"})}),"\n",(0,n.jsxs)(t.p,{children:["There are many other features that ipython-sql provides, including variable substitution, plotting with ",(0,n.jsx)(t.code,{children:"matplotlib"}),", writting results to a local csv file or back to the database. See ",(0,n.jsx)(t.a,{href:"https://github.com/Teradata/quickstarts/blob/main/modules/ROOT/attachments/vantage-with-python-libraries.ipynb",children:"the demo notebook"})," for examples and ",(0,n.jsx)(t.a,{href:"https://github.com/catherinedevlin/ipython-sql/",children:"ipython-sql github repo"})," for a complete reference."]}),"\n",(0,n.jsx)(t.h3,{id:"teradata-jupyter-docker-image",children:"Teradata Jupyter Docker image"}),"\n",(0,n.jsxs)(t.p,{children:["The Teradata Jupyter Docker image builds on ",(0,n.jsx)(t.code,{children:"jupyter/datascience-notebook"})," Docker image. It adds the Teradata SQL kernel, Teradata Python and R libraries, Jupyter extensions to make you productive while interacting with Teradata Vantage. The image also contains sample notebooks that demonstrate how to use the SQL kernel and Teradata libraries."]}),"\n",(0,n.jsx)(t.p,{children:"The SQL kernel and Teradata Jupyter extensions are useful for people that spend a lot of time with the SQL interface. Think about it as a notebook experience that, in many cases, is more convenient than using Teradata Studio. The Teradata Jupyter Docker image doesn't try to replace Teradata Studio. It doesn't have all the features. It's designed for people who need a lightweight, web-based interface and enjoy the notebook UI."}),"\n",(0,n.jsx)(t.p,{children:"The Teradata Jupyter Docker image can be used when you want to run Jupyter locally or you have a place where you can run custom Jupyter docker images. The steps below demonstrate how to use the image locally."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Run the image:"}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["By passing ",(0,n.jsx)(t.code,{children:'-e "accept_license=Y'})," you accept ",(0,n.jsx)(t.a,{href:"https://github.com/Teradata/jupyterextensions/blob/master/licensefiles/license.txt",children:"the license agreement"})," for Teradata Jupyter Extensions."]})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'docker volume create notebooks\ndocker run -e "accept_license=Y" -p :8888:8888 \\\n  -v notebooks:/home/jovyan/JupyterLabRoot \\\n  teradata/jupyterlab-extensions\n'})}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsx)(t.li,{children:"Docker logs will display the url that you need to go to. For example, this is what I've got:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"Starting JupyterLab ...\nDocker Build ID = 3.2.0-ec02012022\nUsing unencrypted HTTP\n\nEnter this URL in your browser:  http://localhost:8888?token=96a3ab874a03779c400966bf492fe270c2221cdcc74b61ed\n\n* Or enter this token when prompted by Jupyter: 96a3ab874a03779c400966bf492fe270c2221cdcc74b61ed\n* If you used a different port to run your Docker, replace 8888 with your port number\n"})}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsxs)(t.li,{children:["Open up the URL and use the file explorer to open the following notebook: ",(0,n.jsx)(t.code,{children:"jupyterextensions -> notebooks -> sql -> GettingStartedDemo.ipynb"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Go through the demo of the Teradata SQL Kernel:"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"GettingStartedDemo.ipynb ",src:a(15210).A+"",width:"1894",height:"1576"})}),"\n",(0,n.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsx)(t.p,{children:"This quick start covered different options to connect to Teradata Vantage from a Jupyter Notebook. We learned about the Teradata Jupyter Docker image that bundles multiple Teradata Python and R libraries. It also provides an SQL kernel, database object explorer and connection management. These features are useful when you spend a lot of time with the SQL interface. For more traditional data science scenarios, we explored the standalone Teradata Python driver and integration through the ipython sql extension."}),"\n",(0,n.jsx)(t.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://teradata.github.io/jupyterextensions",children:"Teradata Jupyter Extensions Website"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.teradata.com/r/KQLs1kPXZ02rGWaS9Ktoww/root",children:"Teradata Vantage\u2122 Modules for Jupyter Installation Guide"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.teradata.com/r/1YKutX2ODdO9ppo_fnguTA/root",children:"Teradata\xae Package for Python User Guide"})}),"\n"]}),"\n",(0,n.jsx)(i.Ay,{})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},15210:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/gettingstarteddemo.ipynb-56ea8aa2a1f1e53a93f68c460e9fc3ce.png"},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>i});var n=a(96540);const o={},r=n.createContext(o);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[7635],{41269:(e,t,n)=>{n.d(t,{Ay:()=>i,RM:()=>s});var a=n(74848),r=n(28453);const s=[];function o(e){const t={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["If you have any questions or need further assistance, please visit our ",(0,a.jsx)(t.a,{href:"https://support.teradata.com/community",children:"community forum"})," where you can get support and interact with other community members."]})})}function i(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},81638:(e,t,n)=>{n.d(t,{Ay:()=>i,RM:()=>s});var a=n(74848),r=n(28453);const s=[];function o(e){const t={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["This how-to shows you how to add Teradata Extensions to a Jupyter Notebooks environment. A hosted version of Jupyter Notebooks integrated with Teradata Extensions and analytics tools is available for functional testing for free at ",(0,a.jsx)(t.a,{href:"https://clearscape.teradata.com",children:"https://clearscape.teradata.com"}),"."]})})}function i(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},62680:(e,t,n)=>{n.d(t,{Ay:()=>i,RM:()=>s});var a=n(74848),r=n(28453);const s=[];function o(e){const t={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["If you need a test instance of Vantage, you can provision one for free at ",(0,a.jsx)(t.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})})}function i(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},39791:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=n(74848),r=n(28453),s=n(62680),o=n(81638),i=n(41269);const l={sidebar_position:11,author:"Hailing Jiang",email:"Hailing.Jiang@teradata.com",page_last_update:"June 28th, 2022",description:"Integrate Teradata Jupyter extensions with Google Vertex AI",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","teradatasqlalchemy"]},d="Integrate Teradata Jupyter extensions with Google Vertex AI",c={id:"analyze-data/integrate-teradata-jupyter-extensions-with-google-vertex-ai",title:"Integrate Teradata Jupyter extensions with Google Vertex AI",description:"Integrate Teradata Jupyter extensions with Google Vertex AI",source:"@site/quickstarts/analyze-data/integrate-teradata-jupyter-extensions-with-google-vertex-ai.md",sourceDirName:"analyze-data",slug:"/analyze-data/integrate-teradata-jupyter-extensions-with-google-vertex-ai",permalink:"/pr-preview/pr-137/de/quickstarts/analyze-data/integrate-teradata-jupyter-extensions-with-google-vertex-ai",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,author:"Hailing Jiang",email:"Hailing.Jiang@teradata.com",page_last_update:"June 28th, 2022",description:"Integrate Teradata Jupyter extensions with Google Vertex AI",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","teradatasqlalchemy"]},sidebar:"tutorialSidebar",previous:{title:"Use Teradata Vantage with Azure Machine Learning Studio",permalink:"/pr-preview/pr-137/de/quickstarts/analyze-data/use-teradata-vantage-with-azure-machine-learning-studio"},next:{title:"Integrate Teradata Jupyter extensions with SageMaker notebook instance",permalink:"/pr-preview/pr-137/de/quickstarts/analyze-data/integrate-teradata-jupyter-extensions-with-sagemaker"}},p={},u=[...o.RM,{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},...s.RM,{value:"Integration",id:"integration",level:2},{value:"Use startup script",id:"use-startup-script",level:3},{value:"Use custom container",id:"use-custom-container",level:3},{value:"Further reading",id:"further-reading",level:2},...i.RM];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"integrate-teradata-jupyter-extensions-with-google-vertex-ai",children:"Integrate Teradata Jupyter extensions with Google Vertex AI"}),"\n",(0,a.jsx)(o.Ay,{}),"\n",(0,a.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(t.p,{children:"Teradata Jupyter extensions provide Teradata SQL kernel and several UI extensions to allow users to easily access and navigate Teradata database from Jupyter envioronment. Google Vertex AI is Google Cloud's new unified ML platform. Vertex AI Workbench provides a Jupyter-base development environment for the entire data science workflow. This article describes how to integate our Jupyter extensions with Vertex AI Workbench so that Vertex AI users can take advantage of our Teradata extensions in their ML pipeline."}),"\n",(0,a.jsx)(t.p,{children:"Vertex AI workbench supports two types of notebooks: managed notebooks and user-managed notebooks. Here we will focus on user-managed notebooks. We will show two ways to integrate our Jupyter extensions with user-managed notebooks: use startup script to install our kernel and extensions or use custom container."}),"\n",(0,a.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Access to a Teradata Vantage instance","\n",(0,a.jsx)(s.Ay,{}),"\n"]}),"\n",(0,a.jsx)(t.li,{children:"Google Cloud account with Vertex AI enabled"}),"\n",(0,a.jsx)(t.li,{children:"Google cloud storage to store startup scripts and Teradata Jupyter extension package"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"integration",children:"Integration"}),"\n",(0,a.jsx)(t.p,{children:"There are two ways to run Teradata Jupyter Extensions in Vertex AI:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#use-startup-script",children:"Use startup script"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#use-custom-container",children:"Use custom container"})}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"These two integration methods are described below."}),"\n",(0,a.jsx)(t.h3,{id:"use-startup-script",children:"Use startup script"}),"\n",(0,a.jsx)(t.p,{children:"When we create a new notebook instance, we can specify a startup script. This script runs only once after the instance is created. Here are the steps:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Download Teradata Jupyter extensions package"}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Go to ",(0,a.jsx)(t.a,{href:"https://downloads.teradata.com/download/tools/vantage-modules-for-jupyter",children:"Vantage Modules for Jupyter"})," page to download the Teradata Jupyter extensions package bundle Linux version."]}),"\n",(0,a.jsxs)(t.ol,{start:"2",children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Upload the package to a Google Cloud storage bucket"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Write a startup script and upload it to cloud storage bucket"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Below is a sample script. It fetches Teradata Jupyter extension package from cloud storage bucket and installs Teradata SQL kernel and extensions."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:', role="content-editable"',children:"#! /bin/bash\n\ncd /home/jupyter\nmkdir teradata\ncd teradata\ngsutil cp gs://teradata-jupyter/* .\nunzip teradatasql*.zip\n\n# Install Teradata kernel\ncp teradatakernel /usr/local/bin\n\njupyter kernelspec install ./teradatasql --prefix=/opt/conda\n\n# Install Teradata extensions\npip install --find-links . teradata_preferences_prebuilt\npip install --find-links . teradata_connection_manager_prebuilt\npip install --find-links . teradata_sqlhighlighter_prebuilt\npip install --find-links . teradata_resultset_renderer_prebuilt\npip install --find-links . teradata_database_explorer_prebuilt\n\n# PIP install the Teradata Python library\npip install teradataml\n\n# Install Teradata R library (optional, uncomment this line only if you use an environment that supports R)\n#Rscript -e \"install.packages('tdplyr',repos=c('https://r-repo.teradata.com','https://cloud.r-project.org'))\"\n"})}),"\n",(0,a.jsxs)(t.ol,{start:"4",children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Create a new notebook and add the startup script from cloud storage bucket\n",(0,a.jsx)(t.img,{alt:"create a new notebook with startup script",src:n(68424).A+"",width:"1239",height:"784"})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["It may take a few minutes for the notebook creation process to complete. When it is done, click on ",(0,a.jsx)(t.code,{children:"Open notebook"}),".\n",(0,a.jsx)(t.img,{alt:"Open notebook",src:n(52460).A+"",width:"1370",height:"691"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"use-custom-container",children:"Use custom container"}),"\n",(0,a.jsx)(t.p,{children:"Another option is to provide a custom container when creating a notebook."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Download Teradata Jupyter extensions package"}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Go to ",(0,a.jsx)(t.a,{href:"https://downloads.teradata.com/download/tools/vantage-modules-for-jupyter",children:"Vantage Modules for Jupyter"})," page to download the Teradata Jupyter extensions package bundle Linux version."]}),"\n",(0,a.jsxs)(t.ol,{start:"2",children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Copy this package to your work directory and unzip it"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Build custom Docker image"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"The custom container must expose a service on port 8080. It is recommended to create a container derived from a Google Deep Learning Containers image, because those images are already configured to be compatible with user-managed notebooks."}),"\n",(0,a.jsx)(t.p,{children:"Below is a sample Dockerfile you can use to build a Docker image with Teradata SQL kernel and extensions installed:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"# Use one of the deep learning images as base image\n# if you need both Python and R, use one of the R images\nFROM gcr.io/deeplearning-platform-release/r-cpu:latest\n\nUSER root\n\n##############################################################\n# Install kernel and copy supporting files\n##############################################################\n\n# Copy the kernel\nCOPY ./teradatakernel /usr/local/bin\n\nRUN chmod 755 /usr/local/bin/teradatakernel\n\n# Copy directory with kernel.json file into image\nCOPY ./teradatasql teradatasql/\n\n# Copy notebooks and licenses\nCOPY ./notebooks/ /home/jupyter\nCOPY ./license.txt /home/jupyter\nCOPY ./ThirdPartyLicenses/ /home/jupyter\n\n# Install the kernel file to /opt/conda jupyter lab instance\nRUN jupyter kernelspec install ./teradatasql --prefix=/opt/conda\n\n##############################################################\n# Install Teradata extensions\n##############################################################\n\nRUN pip install --find-links . teradata_preferences_prebuilt && \\\n    pip install --find-links . teradata_connection_manager_prebuilt && \\\n    pip install --find-links . teradata_sqlhighlighter_prebuilt && \\\n    pip install --find-links . teradata_resultset_renderer_prebuilt && \\\n    pip install --find-links . teradata_database_explorer_prebuilt\n\n# Give back ownership of /opt/conda to jovyan\nRUN chown -R jupyter:users /opt/conda\n\n# PIP install the Teradata Python libraries\nRUN pip install teradataml\n\n# Install Teradata R library (optional, include it only if you use a base image that supports R)\nRUN Rscript -e \"install.packages('tdplyr',repos=c('https://r-repo.teradata.com','https://cloud.r-project.org'))\"\n"})}),"\n",(0,a.jsxs)(t.ol,{start:"4",children:["\n",(0,a.jsxs)(t.li,{children:["In your work directory (where you unzipped Teradata Jupyter extensions package), run ",(0,a.jsx)(t.code,{children:"docker build"})," to build the image:"]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:', id="jupyterlab_ext_on_vertex_first_run", role="content-editable emits-gtm-events',children:"docker build -f Dockerfile imagename:imagetag .\n"})}),"\n",(0,a.jsxs)(t.ol,{start:"5",children:["\n",(0,a.jsx)(t.li,{children:"Push the docker image to Google container registry or artifact registry"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Please refer to the following documentations to push docker image to registry:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://cloud.google.com/container-registry/docs/pushing-and-pulling",children:"Container Registry: Pushing and pulling images"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling?hl=en",children:"Artifact Registry: Pushing and pulling images"})}),"\n"]}),"\n",(0,a.jsxs)(t.ol,{start:"6",children:["\n",(0,a.jsx)(t.li,{children:"Create a new notebook"}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["In ",(0,a.jsx)(t.code,{children:"Environment"})," section, set ",(0,a.jsx)(t.code,{children:"custom container"})," field to the location of your newly created custom container:\n",(0,a.jsx)(t.img,{alt:"Open notebook",src:n(25523).A+"",width:"1669",height:"759"})]}),"\n",(0,a.jsx)(t.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://teradata.github.io/jupyterextensions",children:"Teradata Jupyter Extensions Website"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://docs.teradata.com/r/KQLs1kPXZ02rGWaS9Ktoww/root",children:"Teradata Vantage\u2122 Modules for Jupyter Installation Guide"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://docs.teradata.com/r/1YKutX2ODdO9ppo_fnguTA/root",children:"Teradata\xae Package for Python User Guide"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://cloud.google.com/vertex-ai/docs/training/create-custom-container",children:"Vertex AI documentation: Create a custom container image for training"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://cloud.google.com/vertex-ai/docs/workbench/user-managed/custom-container",children:"Vertex AI documentation: Create a user-managed notebooks instance by using a custom container"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://cloud.google.com/vertex-ai/docs/workbench/user-managed/create-new",children:"Vertex AI documentation: Create a user-managed notebooks instance"})}),"\n"]}),"\n","\n",(0,a.jsx)(i.Ay,{})]})}function g(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},68424:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/vertex.create.notebook.startupscript-5c5f5314fef30df75b74b84a8f7aa7cd.png"},25523:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/vertex.custom.container-3a7f5ac8c6fb4cb2d4ff6d7c42cf7650.png"},52460:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/vertex.open.notebook-711988c98becab4fb3efb5cb30b68549.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var a=n(96540);const r={},s=a.createContext(r);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);
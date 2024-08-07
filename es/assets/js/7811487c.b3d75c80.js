"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[1026],{30171:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>g,frontMatter:()=>d,metadata:()=>u,toc:()=>p});var t=a(74848),r=a(28453),o=a(56240),i=a(19365);function s(e){const n={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(o.A,{children:[(0,t.jsx)(i.A,{value:"Windows",label:"Windows",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'docker run -e "accept_license=Y" -p 127.0.0.1:8888:8888 -v ${PWD}:/home/jovyan/JupyterLabRoot teradata/jupyterlab-extensions\n'})})}),(0,t.jsx)(i.A,{value:"MacOS",label:"MacOS",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'docker run -e "accept_license=Y" -p 127.0.0.1:8888:8888 -v $PWD:/home/jovyan/JupyterLabRoot teradata/jupyterlab-extensions\n'})})}),(0,t.jsx)(i.A,{value:"Linux",label:"Linux",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'docker run -e "accept_license=Y" -p 127.0.0.1:8888:8888 -v $PWD:/home/jovyan/JupyterLabRoot teradata/jupyterlab-extensions\n'})})})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}const d={sidebar_position:2,author:"Vidhan Bhonsle",email:"vidhan.bhonsle@teradata.com",page_last_update:"January 10th, 2024",description:"Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Docker",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","docker","container","vantagecloud","vantagecloud lake","lake"]},c="Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Docker",u={id:"vantagecloud-lake/vantagecloud-lake-demo-jupyter-docker",title:"Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Docker",description:"Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Docker",source:"@site/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-docker.md",sourceDirName:"vantagecloud-lake",slug:"/vantagecloud-lake/vantagecloud-lake-demo-jupyter-docker",permalink:"/es/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-docker",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,author:"Vidhan Bhonsle",email:"vidhan.bhonsle@teradata.com",page_last_update:"January 10th, 2024",description:"Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Docker",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","docker","container","vantagecloud","vantagecloud lake","lake"]},sidebar:"tutorialSidebar",previous:{title:"Getting Started with VantageCloud Lake",permalink:"/es/quickstarts/vantagecloud-lake/getting-started-with-vantagecloud-lake"},next:{title:"Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Visual Studio Code",permalink:"/es/quickstarts/vantagecloud-lake/vantagecloud-lake-demos-visual-studio-code"}},h={},p=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create VantageCloud Lake environment",id:"create-vantagecloud-lake-environment",level:2},{value:"Clone VantageCloud Lake Demo repository",id:"clone-vantagecloud-lake-demo-repository",level:2},{value:"Edit vars.json file",id:"edit-varsjson-file",level:2},{value:"Mount files within Docker",id:"mount-files-within-docker",level:2},{value:"Run demos",id:"run-demos",level:2},{value:"Summary",id:"summary",level:2},{value:"Further reading",id:"further-reading",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"run-teradata-jupyter-notebook-demos-for-vantagecloud-lake-in-docker",children:"Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Docker"}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"In this how-to we will go through the steps for connecting to Teradata VantageCloud Lake and run demos from a Jupyter notebook in Docker."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://www.docker.com/products/docker-desktop",children:"Docker Desktop"})," installed"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git",children:"Git"})," installed","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Required to download git repo from ",(0,t.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos.git",children:"https://github.com/Teradata/lake-demos.git"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["A Teradata VantageCloud Lake account login","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Organization URL and login details from Teradata welcome letter"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"IDE of your choice"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"create-vantagecloud-lake-environment",children:"Create VantageCloud Lake environment"}),"\n",(0,t.jsxs)(n.p,{children:["Follow the instructions from the ",(0,t.jsx)(n.a,{href:"/es/quickstarts/vantagecloud-lake/getting-started-with-vantagecloud-lake",children:"VantageCloud Lake getting started"})," to create your own environment."]}),"\n",(0,t.jsxs)(n.p,{children:["Once created, go to ",(0,t.jsx)(n.strong,{children:"SETTINGS"})," tab and provide your public IP address to ",(0,t.jsx)(n.a,{href:"/es/quickstarts/vantagecloud-lake/getting-started-with-vantagecloud-lake#access-environment-from-public-internet",children:"access the environment"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["You can find your IP address from ",(0,t.jsx)(n.a,{href:"https://www.whatismyip.com",children:"WhatIsMyIp.com"})," website. Take note of the IPv4 address."]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"IP whitelisting",src:a(49187).A+"",width:"1679",height:"810"})}),"\n",(0,t.jsxs)(n.p,{children:["Your environment card should show ",(0,t.jsx)(n.strong,{children:"Public internet"})," access now."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Public internet card view",src:a(58902).A+"",width:"890",height:"509"})}),"\n",(0,t.jsxs)(n.p,{children:["From ",(0,t.jsx)(n.strong,{children:"OVERVIEW"})," tab, copy:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Public IP and"}),"\n",(0,t.jsx)(n.li,{children:"Open Analytics Endpoint"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"These values are required to access VantageCloud Lake from the Docker."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Environment Overview page",src:a(15032).A+"",width:"2670",height:"2184"})}),"\n",(0,t.jsx)(n.h2,{id:"clone-vantagecloud-lake-demo-repository",children:"Clone VantageCloud Lake Demo repository"}),"\n",(0,t.jsx)(n.p,{children:"Clone VantageCloud Lake Demo repository in your local machine:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/Teradata/lake-demos.git\ncd lake-demos\n"})}),"\n",(0,t.jsx)(n.p,{children:"The repository contains different files and folders, the important ones are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Jupyter Notebooks","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos/blob/main/0_Demo_Environment_Setup.ipynb",children:"0_Demo_Environment_Setup.ipynb"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos/blob/main/1_Load_Base_Demo_Data.ipynb",children:"1_Load_Base_Demo_Data.ipynb"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos/blob/main/Data_Engineering_Exploration.ipynb",children:"Data_Engineering_Exploration.ipynb"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos/blob/main/Data_Science_OAF.ipynb",children:"Data_Science_OAF.ipynb"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos/blob/main/Demo_Admin.ipynb",children:"Demo_Admin.ipynb"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos/blob/main/vars.json",children:"vars.json file"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"edit-varsjson-file",children:"Edit vars.json file"}),"\n",(0,t.jsxs)(n.p,{children:["To connect Jupyter notebooks with VantageCloud Lake, you need to edit ",(0,t.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos/blob/main/vars.json",children:"vars.json file"})," and provide:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Variable"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Value"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:'"host"'})}),(0,t.jsxs)(n.td,{children:["Public IP value from ",(0,t.jsx)(n.em,{children:"OVERVIEW"})," section (see above)"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:'"UES_URI"'})}),(0,t.jsxs)(n.td,{children:["Open Analytics Endpoint value from ",(0,t.jsx)(n.em,{children:"OVERVIEW"})," section (see above)"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:'"dbc"'})}),(0,t.jsx)(n.td,{children:"The master password of your VantageCloud Lake environment"})]})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:'In the sample vars.json, the passwords of all users are defaulted to "password", this is just for illustration purposes. You should change all of these password fields to strong passwords, secure them as necessary, and follow other password management best practices.'})}),"\n",(0,t.jsx)(n.h2,{id:"mount-files-within-docker",children:"Mount files within Docker"}),"\n",(0,t.jsxs)(n.p,{children:["To run VantageCloud Lake demos, we need the ",(0,t.jsx)(n.a,{href:"https://hub.docker.com/r/teradata/jupyterlab-extensions",children:"Teradata Jupyter Extensions for Docker"}),". The extensions provide the SQL ipython kernel, utilities to manage connections to Teradata, and the database object explorer to make you productive while interacting with the Teradata database."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Make sure that you are running all the commands in the same folder where you have cloned the demo repository."})}),"\n",(0,t.jsx)(n.p,{children:"Start a container and bind it to the existing lake-demos directory. Choose the appropriate command based on your operating system:"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"For Windows, run the docker command in PowerShell."})}),"\n",(0,t.jsx)(l,{}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"docker logs",src:a(84775).A+"",width:"2613",height:"448"})}),"\n",(0,t.jsx)(n.p,{children:"Click on the URL in docker logs to open Jupyter notebook in your browser."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Jupyter Notebook",src:a(79520).A+"",width:"3655",height:"1345"})}),"\n",(0,t.jsx)(n.h2,{id:"run-demos",children:"Run demos"}),"\n",(0,t.jsxs)(n.p,{children:["Open and execute all the cells in ",(0,t.jsx)(n.strong,{children:"0_Demo_Environment_Setup.ipynb"})," to setup your environment, followed by ",(0,t.jsx)(n.strong,{children:"1_Demo_Setup_Base_Data.ipynb"})," to load the base data required for the demos. +"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Environment setup Jupyter Notebook",src:a(14095).A+"",width:"3658",height:"1836"})}),"\n",(0,t.jsxs)(n.p,{children:["To learn more about the demo notebooks, go to ",(0,t.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos",children:"Teradata Lake demos"})," page on GitHub."]}),"\n",(0,t.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsx)(n.p,{children:"In this quick start we learned how to run Teradata VantageCloud Lake demos from Jupyter Notebook in Docker."}),"\n",(0,t.jsx)(n.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.teradata.com/r/Teradata-VantageCloud-Lake/Getting-Started-First-Sign-On-by-Organization-Admin",children:"Teradata VantageCloud Lake documentation"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/es/quickstarts/analyze-data/jupyter",children:"Use Vantage from a Jupyter notebook"})}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>i});a(96540);var t=a(34164);const r={tabItem:"tabItem_Ymn6"};var o=a(74848);function i(e){var n=e.children,a=e.hidden,i=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,i),hidden:a,children:n})}},56240:(e,n,a)=>{a.d(n,{A:()=>k});var t=a(96540),r=a(34164),o=a(23104),i=a(56347),s=a(205),l=a(57485);var d=a(89466);function c(e){var n,a;return null!=(n=null==(a=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?n:[]}function u(e){var n=e.values,a=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return c(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(a);return function(e){var n,a,t=(void 0===(a=function(e,n){return e.value===n.value})&&(a=function(e,n){return e===n}),(n=e).filter((function(e,t){return n.findIndex((function(n){return a(n,e)}))!==t})));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,a])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,a=void 0!==n&&n,r=e.groupId,o=(0,i.W6)(),s=function(e){var n=e.queryString,a=void 0!==n&&n,t=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:a,groupId:r});return[(0,l.aZ)(s),(0,t.useCallback)((function(e){if(s){var n=new URLSearchParams(o.location.search);n.set(s,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[s,o])]}function m(e){var n,a,r,o,i=e.defaultValue,l=e.queryString,c=void 0!==l&&l,m=e.groupId,g=u(e),b=(0,t.useState)((function(){return function(e){var n,a=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:g})})),v=b[0],f=b[1],j=p({queryString:c,groupId:m}),x=j[0],k=j[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:m}.groupId),a=(0,d.Dv)(n),r=a[0],o=a[1],[r,(0,t.useCallback)((function(e){n&&o.set(e)}),[n,o])]),w=y[0],_=y[1],V=function(){var e=null!=x?x:w;return h({value:e,tabValues:g})?e:null}();return(0,s.A)((function(){V&&f(V)}),[V]),{selectedValue:v,selectValue:(0,t.useCallback)((function(e){if(!h({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);f(e),k(e),_(e)}),[k,_,g]),tabValues:g}}var g=a(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(74848);function f(e){var n=e.className,a=e.block,t=e.selectedValue,i=e.selectValue,s=e.tabValues,l=[],d=(0,o.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,a=l.indexOf(n),r=s[a].value;r!==t&&(d(n),i(r))},u=function(e){var n,a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var t,r=l.indexOf(e.currentTarget)+1;a=null!=(t=l[r])?t:l[0];break;case"ArrowLeft":var o,i=l.indexOf(e.currentTarget)-1;a=null!=(o=l[i])?o:l[l.length-1]}null==(n=a)||n.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},n),children:s.map((function(e){var n=e.value,a=e.label,o=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return l.push(e)},onKeyDown:u,onClick:c},o,{className:(0,r.A)("tabs__item",b.tabItem,null==o?void 0:o.className,{"tabs__item--active":t===n}),children:null!=a?a:n}),n)}))})}function j(e){var n=e.lazy,a=e.children,r=e.selectedValue,o=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){var i=o.find((function(e){return e.props.value===r}));return i?(0,t.cloneElement)(i,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})}))})}function x(e){var n=m(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,v.jsx)(f,Object.assign({},e,n)),(0,v.jsx)(j,Object.assign({},e,n))]})}function k(e){var n=(0,g.A)();return(0,v.jsx)(x,Object.assign({},e,{children:c(e.children)}),String(n))}},14095:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/lake_0_setup-c59d2732119ee2c4a456d9585685b7af.png"},84775:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/lake_docker_url-0ef10cb1829178a29e5e9fe7e42a0903.png"},49187:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/lake_ip_addresses-fdbd9aa3c8df62810d26edd18a623c23.png"},79520:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/lake_jupyter_notebook-a76da41877fb2124477fcb7848e1b3dc.png"},15032:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/lake_overview_page-a07a1dadf018632efd9f1372cb8b4d71.png"},58902:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/lake_public_internet_cv-ceb625a32e80b9bdbd27e5e81b379c68.png"},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>s});var t=a(96540);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);
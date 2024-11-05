"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[3724],{3537:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>h,contentTitle:()=>c,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>p});var t=n(74848),r=n(28453),i=n(56240),l=n(19365);function s(e){const a={code:"code",p:"p",...(0,r.R)(),...e.components};return(0,t.jsxs)(i.A,{children:[(0,t.jsx)(l.A,{value:"Windows",label:"Windows",default:!0,children:(0,t.jsx)(a.p,{children:(0,t.jsx)(a.code,{children:'bash docker run -e "accept_license=Y" -p 127.0.0.1:8888:8888 -v ${PWD}:/home/jovyan/JupyterLabRoot teradata/jupyterlab-extensions '})})}),(0,t.jsx)(l.A,{value:"MacOS",label:"MacOS",children:(0,t.jsx)(a.p,{children:(0,t.jsx)(a.code,{children:'bash docker run -e "accept_license=Y" -p 127.0.0.1:8888:8888 -v $PWD:/home/jovyan/JupyterLabRoot teradata/jupyterlab-extensions '})})}),(0,t.jsx)(l.A,{value:"Linux",label:"Linux",children:(0,t.jsx)(a.p,{children:(0,t.jsx)(a.code,{children:'bash docker run -e "accept_license=Y" -p 127.0.0.1:8888:8888 -v $PWD:/home/jovyan/JupyterLabRoot teradata/jupyterlab-extensions '})})})]})}function o(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}const d={sidebar_position:2,author:"Vidhan Bhonsle",email:"vidhan.bhonsle@teradata.com",page_last_update:"2024 \u5e74 1 \u6708 10 \u65e5",description:"Docker \u3067 VantageCloud Lake \u306e Teradata Jupyter Notebook \u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","docker","\u30b3\u30f3\u30c6\u30ca","vantagecloud","vantagecloud lake","lake"]},c="Docker \u3067 VantageCloud Lake \u306e Teradata Jupyter Notebook \u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b",u={id:"vantagecloud-lake/vantagecloud-lake-demo-jupyter-docker",title:"Docker \u3067 VantageCloud Lake \u306e Teradata Jupyter Notebook \u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b",description:"Docker \u3067 VantageCloud Lake \u306e Teradata Jupyter Notebook \u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b",source:"@site/i18n/ja/docusaurus-plugin-content-docs-quickstarts/current/vantagecloud-lake/vantagecloud-lake-demo-jupyter-docker.md",sourceDirName:"vantagecloud-lake",slug:"/vantagecloud-lake/vantagecloud-lake-demo-jupyter-docker",permalink:"/pr-preview/pr-157/ja/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-docker",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,author:"Vidhan Bhonsle",email:"vidhan.bhonsle@teradata.com",page_last_update:"2024 \u5e74 1 \u6708 10 \u65e5",description:"Docker \u3067 VantageCloud Lake \u306e Teradata Jupyter Notebook \u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","docker","\u30b3\u30f3\u30c6\u30ca","vantagecloud","vantagecloud lake","lake"]},sidebar:"tutorialSidebar",previous:{title:"VantageCloud Lake \u306e\u4f7f\u7528\u3092\u958b\u59cb\u3059\u308b",permalink:"/pr-preview/pr-157/ja/quickstarts/vantagecloud-lake/getting-started-with-vantagecloud-lake"},next:{title:"Visual Studio Code \u3067 VantageCloud Lake \u306e Teradata Jupyter Notebook \u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5",permalink:"/pr-preview/pr-157/ja/quickstarts/vantagecloud-lake/vantagecloud-lake-demos-visual-studio-code"}},h={},p=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"VantageCloud Lake \u74b0\u5883\u3092\u4f5c\u6210\u3059\u308b",id:"vantagecloud-lake-\u74b0\u5883\u3092\u4f5c\u6210\u3059\u308b",level:2},{value:"VantageCloud Lake\u30c7\u30e2\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30af\u30ed\u30fc\u30f3\u3092\u4f5c\u6210\u3059\u308b",id:"vantagecloud-lake\u30c7\u30e2\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30af\u30ed\u30fc\u30f3\u3092\u4f5c\u6210\u3059\u308b",level:2},{value:"vars.json \u30d5\u30a1\u30a4\u30eb\u3092\u7de8\u96c6\u3059\u308b",id:"varsjson-\u30d5\u30a1\u30a4\u30eb\u3092\u7de8\u96c6\u3059\u308b",level:2},{value:"Docker \u5185\u3067\u30d5\u30a1\u30a4\u30eb\u3092\u30de\u30a6\u30f3\u30c8\u3059\u308b",id:"docker-\u5185\u3067\u30d5\u30a1\u30a4\u30eb\u3092\u30de\u30a6\u30f3\u30c8\u3059\u308b",level:2},{value:"\u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b",id:"\u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b",level:2},{value:"\u307e\u3068\u3081",id:"\u307e\u3068\u3081",level:2},{value:"\u3055\u3089\u306b\u8a73\u3057\u304f",id:"\u3055\u3089\u306b\u8a73\u3057\u304f",level:2}];function j(e){const a={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"docker-\u3067-vantagecloud-lake-\u306e-teradata-jupyter-notebook-\u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b",children:"Docker \u3067 VantageCloud Lake \u306e Teradata Jupyter Notebook \u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b"}),"\n",(0,t.jsx)(a.h2,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,t.jsx)(a.p,{children:"\u3053\u306e\u30cf\u30a6\u30c4\u30fc\u3067\u306f\u3001Teradata VantageCloud Lake \u306b\u63a5\u7d9a\u3057\u3001Docker \u306e Jupyter \u30ce\u30fc\u30c8\u30d6\u30c3\u30af\u304b\u3089\u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b\u624b\u9806\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(a.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u305f",(0,t.jsx)(a.a,{href:"https://www.docker.com/products/docker-desktop",children:"Docker\u30c7\u30b9\u30af\u30c8\u30c3\u30d7"})]}),"\n",(0,t.jsxs)(a.li,{children:["\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u305f",(0,t.jsx)(a.a,{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git",children:"Git"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos.git",children:"https://github.com/Teradata/lake-demos.git"})," \u304b\u3089 git \u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["Teradata VantageCloud Lake\u30a2\u30ab\u30a6\u30f3\u30c8 \u30ed\u30b0\u30a4\u30f3","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Teradata \u306e\u30a6\u30a7\u30eb\u30ab\u30e0 \u30ec\u30bf\u30fc\u306b\u3042\u308b\u7d44\u7e54\u306e URL \u3068\u30ed\u30b0\u30a4\u30f3\u306e\u8a73\u7d30"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.li,{children:"\u304a\u597d\u307f\u306eIDE"}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"vantagecloud-lake-\u74b0\u5883\u3092\u4f5c\u6210\u3059\u308b",children:"VantageCloud Lake \u74b0\u5883\u3092\u4f5c\u6210\u3059\u308b"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"/pr-preview/pr-157/ja/quickstarts/vantagecloud-lake/getting-started-with-vantagecloud-lake",children:"VantageCloud Lake \u306e\u59cb\u3081\u65b9"})," \u306e\u6307\u793a\u306b\u5f93\u3063\u3066\u72ec\u81ea\u306e\u74b0\u5883\u3092\u4f5c\u6210\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsxs)(a.p,{children:["\u4f5c\u6210\u3057\u305f\u3089\u3001 ",(0,t.jsx)(a.strong,{children:"SETTINGS"})," \u30bf\u30d6\u306b\u79fb\u52d5\u3057\u3001 ",(0,t.jsx)(a.a,{href:"/pr-preview/pr-157/ja/quickstarts/vantagecloud-lake/getting-started-with-vantagecloud-lake#access-environment-from-public-internet",children:"\u74b0\u5883\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b"}),"\u306b\u30d1\u30d6\u30ea\u30c3\u30af IP \u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsxs)(a.p,{children:["IP \u30a2\u30c9\u30ec\u30b9\u306f ",(0,t.jsx)(a.a,{href:"https://www.whatismyip.com",children:"WhatIsMyIp.com"})," \u306eWeb \u30b5\u30a4\u30c8\u304b\u3089\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002IPv4 \u30a2\u30c9\u30ec\u30b9\u3092\u30e1\u30e2\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"IP\u30db\u30ef\u30a4\u30c8\u30ea\u30b9\u30c8",src:n(46965).A+"",width:"1679",height:"810"})}),"\n",(0,t.jsxs)(a.p,{children:["\u74b0\u5883\u30ab\u30fc\u30c9\u306b\u306f\u300c",(0,t.jsx)(a.strong,{children:"Public internet"})," \u300d\u30a2\u30af\u30bb\u30b9\u3068\u8868\u793a\u3055\u308c\u308b\u306f\u305a\u3067\u3059\u3002"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Public internet\u30ab\u30fc\u30c9\u306e\u8868\u793a",src:n(72232).A+"",width:"890",height:"509"})}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"OVERVIEW"})," \u30bf\u30d6\u304b\u3089\u3001\u30b3\u30d4\u30fc\u3059\u308b\u3002"]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Public IP \u304a\u3088\u3073"}),"\n",(0,t.jsx)(a.li,{children:"Open Analytics Endpoint"}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"\u3053\u308c\u3089\u306e\u5024\u306f\u3001Docker\u304b\u3089VantageCloud Lake\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u3067\u3059\u3002"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"\u74b0\u5883\u6982\u8981\u30da\u30fc\u30b8",src:n(85846).A+"",width:"2670",height:"2184"})}),"\n",(0,t.jsx)(a.h2,{id:"vantagecloud-lake\u30c7\u30e2\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30af\u30ed\u30fc\u30f3\u3092\u4f5c\u6210\u3059\u308b",children:"VantageCloud Lake\u30c7\u30e2\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30af\u30ed\u30fc\u30f3\u3092\u4f5c\u6210\u3059\u308b"}),"\n",(0,t.jsx)(a.p,{children:"\u30ed\u30fc\u30ab\u30eb \u30de\u30b7\u30f3\u3067 VantageCloud Lake \u30c7\u30e2 \u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30af\u30ed\u30fc\u30f3\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"git clone https://github.com/Teradata/lake-demos.git\ncd lake-demos\n"})}),"\n",(0,t.jsx)(a.p,{children:"\u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u306f\u3055\u307e\u3056\u307e\u306a\u30d5\u30a1\u30a4\u30eb\u3068\u30d5\u30a9\u30eb\u30c0\u30fc\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u91cd\u8981\u306a\u3082\u306e\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\u3002"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Jupyter Notebook","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos/blob/main/0_Demo_Environment_Setup.ipynb",children:"0_Demo_Environment_Setup.ipynb"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos/blob/main/1_Load_Base_Demo_Data.ipynb",children:"1_Load_Base_Demo_Data.ipynb"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos/blob/main/Data_Engineering_Exploration.ipynb",children:"Data_Engineering_Exploration.ipynb"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos/blob/main/Data_Science_OAF.ipynb",children:"Data_Engineering_Exploration.ipynb"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos/blob/main/Demo_Admin.ipynb",children:"Demo_Admin.ipynb"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos/blob/main/vars.json",children:"vars.json \u30d5\u30a1\u30a4\u30eb"})}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"varsjson-\u30d5\u30a1\u30a4\u30eb\u3092\u7de8\u96c6\u3059\u308b",children:"vars.json \u30d5\u30a1\u30a4\u30eb\u3092\u7de8\u96c6\u3059\u308b"}),"\n",(0,t.jsxs)(a.p,{children:["Jupyter Notebook\u3092VantageCloud Lake\u306b\u63a5\u7d9a\u3059\u308b\u306b\u306f\u3001 ",(0,t.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos/blob/main/vars.json",children:"vars.json \u30d5\u30a1\u30a4\u30eb"})," \u3092\u7de8\u96c6\u3057\u3066\u3001\u6b21\u306e\u60c5\u5831\u3092\u63d0\u4f9b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:(0,t.jsx)(a.strong,{children:"\u5909\u6570"})}),(0,t.jsx)(a.th,{children:(0,t.jsx)(a.strong,{children:"\u5024"})})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.em,{children:'"host"'})}),(0,t.jsxs)(a.td,{children:[(0,t.jsx)(a.em,{children:"OVERVIEW"}),"\u30bb\u30af\u30b7\u30e7\u30f3\u306e Public IP \u5024(\u4e0a\u8a18\u3092\u53c2\u7167)"]})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.em,{children:'"UES_URI"'})}),(0,t.jsxs)(a.td,{children:[(0,t.jsx)(a.em,{children:"OVERVIEW"})," \u30bb\u30af\u30b7\u30e7\u30f3\u304b\u3089\u306eOpen Analytics Endpoint \u5024(\u4e0a\u8a18\u3092\u53c2\u7167)"]})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.em,{children:'dbc"'})}),(0,t.jsx)(a.td,{children:"VantageCloud Lake \u74b0\u5883\u306e\u30de\u30b9\u30bf\u30fc \u30d1\u30b9\u30ef\u30fc\u30c9"})]})]})]}),"\n",(0,t.jsx)(a.admonition,{type:"info",children:(0,t.jsx)(a.p,{children:"\u30b5\u30f3\u30d7\u30eb\u306e vars.json \u3067\u306f\u3001\u3059\u3079\u3066\u306e\u30e6\u30fc\u30b6\u30fc\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u300cpassword\u300d\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059\u304c\u3001\u3053\u308c\u306f\u8aac\u660e\u76ee\u7684\u306e\u307f\u3067\u3059\u3002\u3053\u308c\u3089\u306e\u30d1\u30b9\u30ef\u30fc\u30c9 \u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u3059\u3079\u3066\u5f37\u529b\u306a\u30d1\u30b9\u30ef\u30fc\u30c9\u306b\u5909\u66f4\u3057\u3001\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3092\u78ba\u4fdd\u3057\u3001\u305d\u306e\u4ed6\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u7ba1\u7406\u306e\u30d9\u30b9\u30c8 \u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u306b\u5f93\u3046\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"})}),"\n",(0,t.jsx)(a.h2,{id:"docker-\u5185\u3067\u30d5\u30a1\u30a4\u30eb\u3092\u30de\u30a6\u30f3\u30c8\u3059\u308b",children:"Docker \u5185\u3067\u30d5\u30a1\u30a4\u30eb\u3092\u30de\u30a6\u30f3\u30c8\u3059\u308b"}),"\n",(0,t.jsxs)(a.p,{children:["VantageCloud Lake \u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b\u306b\u306f\u3001",(0,t.jsx)(a.a,{href:"https://hub.docker.com/r/teradata/jupyterlab-extensions",children:"Teradata Jupyter Extensions for Docker"})," \u304c\u5fc5\u8981\u3067\u3059\u3002\u3053\u306e\u62e1\u5f35\u6a5f\u80fd\u306f\u3001SQL ipython \u30ab\u30fc\u30cd\u30eb\u3001Teradata \u3078\u306e\u63a5\u7d9a\u3092\u7ba1\u7406\u3059\u308b\u30e6\u30fc\u30c6\u30a3\u30ea\u30c6\u30a3\u3001\u304a\u3088\u3073 Teradata \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3068\u306e\u5bfe\u8a71\u6642\u306e\u751f\u7523\u6027\u3092\u9ad8\u3081\u308b\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9 \u30aa\u30d6\u30b8\u30a7\u30af\u30c8 \u30a8\u30af\u30b9\u30d7\u30ed\u30fc\u30e9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(a.admonition,{type:"info",children:(0,t.jsx)(a.p,{children:"\u30c7\u30e2 \u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30af\u30ed\u30fc\u30f3\u3092\u4f5c\u6210\u3057\u305f\u306e\u3068\u540c\u3058\u30d5\u30a9\u30eb\u30c0\u30fc\u5185\u3067\u3059\u3079\u3066\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"})}),"\n",(0,t.jsx)(a.p,{children:"\u30b3\u30f3\u30c6\u30ca\u3092\u8d77\u52d5\u3057\u3001\u65e2\u5b58\u306e lake-demos \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u30d0\u30a4\u30f3\u30c9\u3057\u307e\u3059\u3002\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0 \u30b7\u30b9\u30c6\u30e0\u306b\u5fdc\u3058\u3066\u9069\u5207\u306a\u30b3\u30de\u30f3\u30c9\u3092\u9078\u629e\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsx)(a.p,{children:"Windows \u306e\u5834\u5408\u306f\u3001PowerShell \u3067 docker \u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"})}),"\n",(0,t.jsx)(o,{}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"docker\u30ed\u30b0",src:n(55565).A+"",width:"2613",height:"448"})}),"\n",(0,t.jsx)(a.p,{children:"Click on the URL in docker logs to open Jupyter notebook in your browser."}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Jupyter Notebook",src:n(98794).A+"",width:"3655",height:"1345"})}),"\n",(0,t.jsx)(a.h2,{id:"\u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b",children:"\u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"0_Demo_Environment_Setup.ipynb"})," \u5185\u306e\u3059\u3079\u3066\u306e\u30bb\u30eb\u3092\u958b\u3044\u3066\u5b9f\u884c\u3057\u3066\u74b0\u5883\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3057\u3001\u7d9a\u3044\u3066 ",(0,t.jsx)(a.strong,{children:"1_Demo_Setup_Base_Data.ipynb"})," \u3092\u5b9f\u884c\u3057\u3066\u30c7\u30e2\u306b\u5fc5\u8981\u306a\u57fa\u672c\u30c7\u30fc\u30bf\u3092\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002 +"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"\u74b0\u5883\u69cb\u7bc9Jupyter Notebook",src:n(81185).A+"",width:"3658",height:"1836"})}),"\n",(0,t.jsxs)(a.p,{children:["\u30c7\u30e2\u30ce\u30fc\u30c8\u30d6\u30c3\u30af\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001GitHub \u306e ",(0,t.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos",children:"Teradata Lake \u30c7\u30e2"})," \u30da\u30fc\u30b8\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(a.h2,{id:"\u307e\u3068\u3081",children:"\u307e\u3068\u3081"}),"\n",(0,t.jsx)(a.p,{children:"\u3053\u306e\u30af\u30a4\u30c3\u30af \u30b9\u30bf\u30fc\u30c8\u3067\u306f\u3001Docker \u306e Jupyter Notebook \u304b\u3089 Teradata VantageCloud Lake \u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5\u3092\u5b66\u3073\u307e\u3057\u305f\u3002"}),"\n",(0,t.jsx)(a.h2,{id:"\u3055\u3089\u306b\u8a73\u3057\u304f",children:"\u3055\u3089\u306b\u8a73\u3057\u304f"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://docs.teradata.com/r/Teradata-VantageCloud-Lake/Getting-Started-First-Sign-On-by-Organization-Admin",children:"Teradata VantageCloud Lake\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"/pr-preview/pr-157/ja/quickstarts/analyze-data/jupyter",children:"Jupyter Notebook\u304b\u3089Vantage\u3092\u5229\u7528\u3059\u308b\u65b9\u6cd5"})}),"\n"]})]})}function b(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},19365:(e,a,n)=>{n.d(a,{A:()=>l});n(96540);var t=n(34164);const r={tabItem:"tabItem_Ymn6"};var i=n(74848);function l(e){var a=e.children,n=e.hidden,l=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,l),hidden:n,children:a})}},56240:(e,a,n)=>{n.d(a,{A:()=>f});var t=n(96540),r=n(34164),i=n(23104),l=n(56347),s=n(205),o=n(57485);var d=n(89466);function c(e){var a,n;return null!=(a=null==(n=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((a=e.props)&&"object"==typeof a&&"value"in a))return e;var a;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?a:[]}function u(e){var a=e.values,n=e.children;return(0,t.useMemo)((function(){var e=null!=a?a:function(e){return c(e).map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes,default:a.default}}))}(n);return function(e){var a,n,t=(void 0===(n=function(e,a){return e.value===a.value})&&(n=function(e,a){return e===a}),(a=e).filter((function(e,t){return a.findIndex((function(a){return n(a,e)}))!==t})));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[a,n])}function h(e){var a=e.value;return e.tabValues.some((function(e){return e.value===a}))}function p(e){var a=e.queryString,n=void 0!==a&&a,r=e.groupId,i=(0,l.W6)(),s=function(e){var a=e.queryString,n=void 0!==a&&a,t=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:r});return[(0,o.aZ)(s),(0,t.useCallback)((function(e){if(s){var a=new URLSearchParams(i.location.search);a.set(s,e),i.replace(Object.assign({},i.location,{search:a.toString()}))}}),[s,i])]}function j(e){var a,n,r,i,l=e.defaultValue,o=e.queryString,c=void 0!==o&&o,j=e.groupId,b=u(e),g=(0,t.useState)((function(){return function(e){var a,n=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(a=t.find((function(e){return e.default})))?a:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:b})})),m=g[0],v=g[1],x=p({queryString:c,groupId:j}),k=x[0],f=x[1],y=(a=function(e){return e?"docusaurus.tab."+e:null}({groupId:j}.groupId),n=(0,d.Dv)(a),r=n[0],i=n[1],[r,(0,t.useCallback)((function(e){a&&i.set(e)}),[a,i])]),_=y[0],w=y[1],V=function(){var e=null!=k?k:_;return h({value:e,tabValues:b})?e:null}();return(0,s.A)((function(){V&&v(V)}),[V]),{selectedValue:m,selectValue:(0,t.useCallback)((function(e){if(!h({value:e,tabValues:b}))throw new Error("Can't select invalid tab value="+e);v(e),f(e),w(e)}),[f,w,b]),tabValues:b}}var b=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=n(74848);function v(e){var a=e.className,n=e.block,t=e.selectedValue,l=e.selectValue,s=e.tabValues,o=[],d=(0,i.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var a=e.currentTarget,n=o.indexOf(a),r=s[n].value;r!==t&&(d(a),l(r))},u=function(e){var a,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var t,r=o.indexOf(e.currentTarget)+1;n=null!=(t=o[r])?t:o[0];break;case"ArrowLeft":var i,l=o.indexOf(e.currentTarget)-1;n=null!=(i=o[l])?i:o[o.length-1]}null==(a=n)||a.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},a),children:s.map((function(e){var a=e.value,n=e.label,i=e.attributes;return(0,m.jsx)("li",Object.assign({role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:function(e){return o.push(e)},onKeyDown:u,onClick:c},i,{className:(0,r.A)("tabs__item",g.tabItem,null==i?void 0:i.className,{"tabs__item--active":t===a}),children:null!=n?n:a}),a)}))})}function x(e){var a=e.lazy,n=e.children,r=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){var l=i.find((function(e){return e.props.value===r}));return l?(0,t.cloneElement)(l,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map((function(e,a){return(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==r})}))})}function k(e){var a=j(e);return(0,m.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,m.jsx)(v,Object.assign({},e,a)),(0,m.jsx)(x,Object.assign({},e,a))]})}function f(e){var a=(0,b.A)();return(0,m.jsx)(k,Object.assign({},e,{children:c(e.children)}),String(a))}},81185:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/lake_0_setup-c59d2732119ee2c4a456d9585685b7af.png"},55565:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/lake_docker_url-0ef10cb1829178a29e5e9fe7e42a0903.png"},46965:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/lake_ip_addresses-fdbd9aa3c8df62810d26edd18a623c23.png"},98794:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/lake_jupyter_notebook-a76da41877fb2124477fcb7848e1b3dc.png"},85846:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/lake_overview_page-a07a1dadf018632efd9f1372cb8b4d71.png"},72232:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/lake_public_internet_cv-ceb625a32e80b9bdbd27e5e81b379c68.png"},28453:(e,a,n)=>{n.d(a,{R:()=>l,x:()=>s});var t=n(96540);const r={},i=t.createContext(r);function l(e){const a=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:a},e.children)}}}]);
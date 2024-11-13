"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[1728],{25214:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>h,contentTitle:()=>c,default:()=>g,frontMatter:()=>d,metadata:()=>u,toc:()=>p});var t=n(74848),r=n(28453),s=n(56240),i=n(19365);function l(e){const a={code:"code",p:"p",...(0,r.R)(),...e.components};return(0,t.jsxs)(s.A,{children:[(0,t.jsx)(i.A,{value:"Windows",label:"Windows",default:!0,children:(0,t.jsx)(a.p,{children:(0,t.jsx)(a.code,{children:'bash docker run -e "accept_license=Y" -p 127.0.0.1:8888:8888 -v ${PWD}:/home/jovyan/JupyterLabRoot teradata/jupyterlab-extensions '})})}),(0,t.jsx)(i.A,{value:"MacOS",label:"MacOS",children:(0,t.jsx)(a.p,{children:(0,t.jsx)(a.code,{children:'bash docker run -e "accept_license=Y" -p 127.0.0.1:8888:8888 -v $PWD:/home/jovyan/JupyterLabRoot teradata/jupyterlab-extensions '})})}),(0,t.jsx)(i.A,{value:"Linux",label:"Linux",children:(0,t.jsx)(a.p,{children:(0,t.jsx)(a.code,{children:'bash docker run -e "accept_license=Y" -p 127.0.0.1:8888:8888 -v $PWD:/home/jovyan/JupyterLabRoot teradata/jupyterlab-extensions '})})})]})}function o(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}const d={sidebar_position:3,author:"Janeth Graziani",email:"Janeth.graziani@teradata.com",page_last_update:"2024 \u5e74 1 \u6708 11 \u65e5",description:"Visual Studio Code \u3067 Jupyter \u30ce\u30fc\u30c8\u30d6\u30c3\u30af\u3092\u4f7f\u7528\u3057\u3066 VantageCloud Lake \u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5\u3092\u5b66\u3073\u307e\u3059\u3002",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","teradatasqlalchemy","vantagecloud","vantagecloud lake","public internet","visual studio code","IDE","\u30c7\u30fc\u30bf\u5206\u6790","\u30c7\u30fc\u30bf\u30b5\u30a4\u30a8\u30f3\u30b9"]},c="Visual Studio Code \u3067 VantageCloud Lake \u306e Teradata Jupyter Notebook \u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5",u={id:"vantagecloud-lake/vantagecloud-lake-demos-visual-studio-code",title:"Visual Studio Code \u3067 VantageCloud Lake \u306e Teradata Jupyter Notebook \u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5",description:"Visual Studio Code \u3067 Jupyter \u30ce\u30fc\u30c8\u30d6\u30c3\u30af\u3092\u4f7f\u7528\u3057\u3066 VantageCloud Lake \u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5\u3092\u5b66\u3073\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs-quickstarts/current/vantagecloud-lake/vantagecloud-lake-demos-visual-studio-code.md",sourceDirName:"vantagecloud-lake",slug:"/vantagecloud-lake/vantagecloud-lake-demos-visual-studio-code",permalink:"/pr-preview/pr-158/ja/quickstarts/vantagecloud-lake/vantagecloud-lake-demos-visual-studio-code",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,author:"Janeth Graziani",email:"Janeth.graziani@teradata.com",page_last_update:"2024 \u5e74 1 \u6708 11 \u65e5",description:"Visual Studio Code \u3067 Jupyter \u30ce\u30fc\u30c8\u30d6\u30c3\u30af\u3092\u4f7f\u7528\u3057\u3066 VantageCloud Lake \u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5\u3092\u5b66\u3073\u307e\u3059\u3002",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","teradatasqlalchemy","vantagecloud","vantagecloud lake","public internet","visual studio code","IDE","\u30c7\u30fc\u30bf\u5206\u6790","\u30c7\u30fc\u30bf\u30b5\u30a4\u30a8\u30f3\u30b9"]},sidebar:"tutorialSidebar",previous:{title:"Docker \u3067 VantageCloud Lake \u306e Teradata Jupyter Notebook \u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b",permalink:"/pr-preview/pr-158/ja/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-docker"},next:{title:"Amazon SageMaker \u3067 VantageCloud Lake \u306e Teradata Jupyter Notebook \u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5",permalink:"/pr-preview/pr-158/ja/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-sagemaker"}},h={},p=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"VantageCloud Lake\u30c7\u30e2\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30af\u30ed\u30fc\u30f3\u3092\u4f5c\u6210\u3059\u308b",id:"vantagecloud-lake\u30c7\u30e2\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30af\u30ed\u30fc\u30f3\u3092\u4f5c\u6210\u3059\u308b",level:2},{value:"Teradata Jupyter Extensions \u3067 Jupyterlab Docker \u30b3\u30f3\u30c6\u30ca\u3092\u8d77\u52d5\u3059\u308b",id:"teradata-jupyter-extensions-\u3067-jupyterlab-docker-\u30b3\u30f3\u30c6\u30ca\u3092\u8d77\u52d5\u3059\u308b",level:2},{value:"Visual Studio Code \u306e\u69cb\u6210",id:"visual-studio-code-\u306e\u69cb\u6210",level:2},{value:"vars.json \u30d5\u30a1\u30a4\u30eb\u3092\u7de8\u96c6\u3059\u308b",id:"varsjson-\u30d5\u30a1\u30a4\u30eb\u3092\u7de8\u96c6\u3059\u308b",level:3},{value:"UseCases \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\u306e vars.json \u3078\u306e\u30d1\u30b9\u3092\u5909\u66f4\u3059\u308b",id:"usecases-\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\u306e-varsjson-\u3078\u306e\u30d1\u30b9\u3092\u5909\u66f4\u3059\u308b",level:3},{value:"Jupyter\u30ab\u30fc\u30cd\u30eb\u3092\u69cb\u6210\u3059\u308b",id:"jupyter\u30ab\u30fc\u30cd\u30eb\u3092\u69cb\u6210\u3059\u308b",level:3},{value:"\u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b",id:"\u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b",level:3},{value:"\u307e\u3068\u3081",id:"\u307e\u3068\u3081",level:2}];function j(e){const a={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"visual-studio-code-\u3067-vantagecloud-lake-\u306e-teradata-jupyter-notebook-\u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5",children:"Visual Studio Code \u3067 VantageCloud Lake \u306e Teradata Jupyter Notebook \u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5"}),"\n",(0,t.jsx)(a.h2,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,t.jsx)(a.p,{children:"Visual Studio Code \u306f\u3001Windows\u3001MacOs\u3001Linux \u3068\u4e92\u63db\u6027\u306e\u3042\u308b\u4eba\u6c17\u306e\u9ad8\u3044\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9 \u30b3\u30fc\u30c9 \u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u3059\u3002\u958b\u767a\u8005\u306f\u3001\u3053\u306e\u7d71\u5408\u958b\u767a\u74b0\u5883 (IDE) \u3092\u4f7f\u7528\u3057\u3066\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u3001\u30c7\u30d0\u30c3\u30b0\u3001\u69cb\u7bc9\u3001\u30c7\u30d7\u30ed\u30a4\u3092\u884c\u3044\u307e\u3059\u3002\u3053\u306e\u30af\u30a4\u30c3\u30af\u30b9\u30bf\u30fc\u30c8 \u30ac\u30a4\u30c9\u3067\u306f\u3001Visual Studio Code \u5185\u3067 VantageCloud Lake Jupyter \u30ce\u30fc\u30c8\u30d6\u30c3\u30af\u306e\u30c7\u30e2\u3092\u8d77\u52d5\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"vscode.png",src:n(76899).A+"",width:"3444",height:"2136"})}),"\n",(0,t.jsx)(a.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,t.jsx)(a.p,{children:"\u59cb\u3081\u308b\u524d\u306b\u3001\u6b21\u306e\u524d\u63d0\u6761\u4ef6\u304c\u6574\u3063\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u305f",(0,t.jsx)(a.a,{href:"https://www.docker.com/products/docker-desktop",children:"Docker\u30c7\u30b9\u30af\u30c8\u30c3\u30d7"})]}),"\n",(0,t.jsxs)(a.li,{children:["\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u305f",(0,t.jsx)(a.a,{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git",children:"Git"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos.git",children:"https://github.com/Teradata/lake-demos.git"})," \u304b\u3089 git \u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u305f",(0,t.jsx)(a.a,{href:"https://code.visualstudio.com/download",children:"Visual Studio Code"})]}),"\n",(0,t.jsxs)(a.li,{children:["Teradata \u30a6\u30a7\u30eb\u30ab\u30e0 \u30ec\u30bf\u30fc\u306e\u7d44\u7e54 URL \u3068\u30ed\u30b0\u30a4\u30f3\u8a73\u7d30\u3092\u542b\u3080 Teradata VantageCloud Lake \u30a2\u30ab\u30a6\u30f3\u30c8","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\u30ed\u30b0\u30a4\u30f3\u3057\u305f\u3089\u3001\u6b21\u306e ",(0,t.jsx)(a.a,{href:"/pr-preview/pr-158/ja/quickstarts/vantagecloud-lake/getting-started-with-vantagecloud-lake#create-an-environment",children:"\u624b\u9806"})," \u306b\u5f93\u3063\u3066 VantageCloud Lake \u74b0\u5883\u3092\u4f5c\u6210\u3059\u308b"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"vantagecloud-lake\u30c7\u30e2\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30af\u30ed\u30fc\u30f3\u3092\u4f5c\u6210\u3059\u308b",children:"VantageCloud Lake\u30c7\u30e2\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30af\u30ed\u30fc\u30f3\u3092\u4f5c\u6210\u3059\u308b"}),"\n",(0,t.jsx)(a.p,{children:"\u307e\u305a\u3001GitHub \u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30af\u30ed\u30fc\u30f3\u3092\u4f5c\u6210\u3057\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8 \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u79fb\u52d5\u3059\u308b\u3002"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"git clone https://github.com/Teradata/lake-demos.git\ncd lake-demos\n"})}),"\n",(0,t.jsx)(a.h2,{id:"teradata-jupyter-extensions-\u3067-jupyterlab-docker-\u30b3\u30f3\u30c6\u30ca\u3092\u8d77\u52d5\u3059\u308b",children:"Teradata Jupyter Extensions \u3067 Jupyterlab Docker \u30b3\u30f3\u30c6\u30ca\u3092\u8d77\u52d5\u3059\u308b"}),"\n",(0,t.jsxs)(a.p,{children:["VantageCloud Lake \u30c7\u30e2\u3092\u8d77\u52d5\u3059\u308b\u306b\u306f\u3001",(0,t.jsx)(a.a,{href:"https://hub.docker.com/r/teradata/jupyterlab-extensions",children:"Teradata Jupyter Extensions for Docker"}),"\u304c\u5fc5\u8981\u3067\u3059\u3002\u3053\u308c\u3089\u306e\u62e1\u5f35\u6a5f\u80fd\u306f\u3001SQL ipython \u30ab\u30fc\u30cd\u30eb\u3001Teradata \u3078\u306e\u63a5\u7d9a\u3092\u7ba1\u7406\u3059\u308b\u30e6\u30fc\u30c6\u30a3\u30ea\u30c6\u30a3\u3001\u304a\u3088\u3073 Teradata \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3068\u306e\u5bfe\u8a71\u6642\u306e\u751f\u7523\u6027\u3092\u9ad8\u3081\u308b\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9 \u30aa\u30d6\u30b8\u30a7\u30af\u30c8 \u30a8\u30af\u30b9\u30d7\u30ed\u30fc\u30e9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(a.p,{children:"\u6b21\u306b\u3001\u30b3\u30f3\u30c6\u30ca\u3092\u8d77\u52d5\u3057\u3001\u65e2\u5b58\u306e lake-demos \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u30d0\u30a4\u30f3\u30c9\u3057\u307e\u3059\u3002\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0 \u30b7\u30b9\u30c6\u30e0\u306b\u5fdc\u3058\u3066\u9069\u5207\u306a\u30b3\u30de\u30f3\u30c9\u3092\u9078\u629e\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsx)(a.p,{children:"Windows \u306e\u5834\u5408\u306f\u3001PowerShell \u3067 docker \u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"})}),"\n",(0,t.jsx)(o,{}),"\n",(0,t.jsxs)(a.p,{children:["\u7d50\u679c\u306e URL \u3068\u30c8\u30fc\u30af\u30f3\u3092\u30e1\u30e2\u3057\u307e\u3059\u3002 \u3053\u308c\u3089\u306f\u3001Visual Studio Code \u304b\u3089\u63a5\u7d9a\u3092\u78ba\u7acb\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002\n",(0,t.jsx)(a.img,{alt:"terminal.png",src:n(82185).A+"",width:"1620",height:"258"})]}),"\n",(0,t.jsx)(a.h2,{id:"visual-studio-code-\u306e\u69cb\u6210",children:"Visual Studio Code \u306e\u69cb\u6210"}),"\n",(0,t.jsxs)(a.p,{children:["Visual Studio Code \u3067 ",(0,t.jsx)(a.code,{children:"lake-demos"})," \u30d7\u30ed\u30b8\u30a7\u30af\u30c8 \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u958b\u304d\u307e\u3059\u3002\u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u306f\u6b21\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8 \u30c4\u30ea\u30fc\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(a.p,{children:"LAKE_DEMOS"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos/tree/main/UseCases",children:"\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos/blob/main/0_Demo_Environment_Setup.ipynb",children:"0_Demo_Environment_Setup.ipynb"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos/blob/main/1_Load_Base_Demo_Data.ipynb",children:"1_Load_Base_Demo_Data.ipynb"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos/blob/main/Data_Engineering_Exploration.ipynb",children:"Data_Engineering_Exploration.ipynb"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos/blob/main/Data_Science_OAF.ipynb",children:"Data_Engineering_Exploration.ipynb"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos/blob/main/Demo_Admin.ipynb",children:"Demo_Admin.ipynb"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos/blob/main/vars.json",children:"vars.json \u30d5\u30a1\u30a4\u30eb"})}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"varsjson-\u30d5\u30a1\u30a4\u30eb\u3092\u7de8\u96c6\u3059\u308b",children:"vars.json \u30d5\u30a1\u30a4\u30eb\u3092\u7de8\u96c6\u3059\u308b"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos/blob/main/vars.json",children:(0,t.jsx)(a.strong,{children:"vars.json"})})," \u30d5\u30a1\u30a4\u30eb\u3092\u7de8\u96c6\u3057\u3066\u3001\u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u8a8d\u8a3c\u60c5\u5831\u3092\u542b\u3081\u308b"]}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:(0,t.jsx)(a.strong,{children:"\u5909\u6570"})}),(0,t.jsx)(a.th,{children:(0,t.jsx)(a.strong,{children:"\u5024"})})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.strong,{children:'"host"'})}),(0,t.jsx)(a.td,{children:"VantageCloud Lake \u74b0\u5883\u304b\u3089\u306e Public IP\u5024"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.strong,{children:'"UES_URI"'})}),(0,t.jsx)(a.td,{children:"VantageCloud Lake \u74b0\u5883\u304b\u3089\u306e Open Analytics"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.strong,{children:'"dbc"'})}),(0,t.jsx)(a.td,{children:"VantageCloud Lake \u74b0\u5883\u306e\u30de\u30b9\u30bf\u30fc \u30d1\u30b9\u30ef\u30fc\u30c9"})]})]})]}),"\n",(0,t.jsxs)(a.p,{children:["Public IP\u30a2\u30c9\u30ec\u30b9\u3068Open Analytics\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u53d6\u5f97\u3059\u308b\u306b\u306f\u3001\u6b21\u306e",(0,t.jsx)(a.a,{href:"/pr-preview/pr-158/ja/quickstarts/vantagecloud-lake/getting-started-with-vantagecloud-lake#create-an-environment",children:"\u624b\u9806"}),"\u306b\u5f93\u3044\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(a.admonition,{type:"info",children:(0,t.jsx)(a.p,{children:"vars.json \u30d5\u30a1\u30a4\u30eb\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5909\u66f4\u3057\u307e\u3059\u3002\u30b5\u30f3\u30d7\u30eb vars.json \u3067\u306f\u3001\u3059\u3079\u3066\u306e\u30e6\u30fc\u30b6\u30fc\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u300cpassword\u300d\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u304c\u308f\u304b\u308a\u307e\u3059\u3002\u3053\u308c\u306f\u30b5\u30f3\u30d7\u30eb \u30d5\u30a1\u30a4\u30eb\u306e\u554f\u984c\u306b\u3059\u304e\u305a\u3001\u3053\u308c\u3089\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u3059\u3079\u3066\u5909\u66f4\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u5f37\u529b\u306a\u30d1\u30b9\u30ef\u30fc\u30c9\u306b\u8a2d\u5b9a\u3057\u3001\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u4fdd\u8b77\u3057\u3001\u4ed6\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u7ba1\u7406\u306e\u30d9\u30b9\u30c8 \u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u306b\u5f93\u3063\u3066\u304f\u3060\u3055\u3044\u3002"})}),"\n",(0,t.jsx)(a.h3,{id:"usecases-\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\u306e-varsjson-\u3078\u306e\u30d1\u30b9\u3092\u5909\u66f4\u3059\u308b",children:"UseCases \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\u306e vars.json \u3078\u306e\u30d1\u30b9\u3092\u5909\u66f4\u3059\u308b"}),"\n",(0,t.jsx)(a.p,{children:"UseCases \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3067\u306f\u3001Jupyterlab \u304b\u3089\u4f5c\u696d\u3059\u308b\u5834\u5408\u3001\u3059\u3079\u3066\u306e .ipynb \u30d5\u30a1\u30a4\u30eb\u306f\u30d1\u30b9 ../../vars.json \u3092\u4f7f\u7528\u3057\u3066 JSON \u30d5\u30a1\u30a4\u30eb\u304b\u3089\u5909\u6570\u3092\u8aad\u307f\u8fbc\u307f\u307e\u3059\u3002Visual Studio Code \u304b\u3089\u76f4\u63a5\u4f5c\u696d\u3059\u308b\u306b\u306f\u3001\u5404 .ipynb \u306e\u30b3\u30fc\u30c9\u304c vars.json \u3092\u6307\u3059\u3088\u3046\u306b\u66f4\u65b0\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(a.p,{children:"\u3053\u308c\u3089\u306e\u5909\u66f4\u3092\u884c\u3046\u6700\u3082\u7c21\u5358\u306a\u65b9\u6cd5\u306f\u3001\u5de6\u5074\u306e\u5782\u76f4\u30e1\u30cb\u30e5\u30fc\u306e\u691c\u7d22\u6a5f\u80fd\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3059\u3002\u691c\u7d22\u3059\u308b"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"'../../vars.json'\n"})}),"\n",(0,t.jsx)(a.p,{children:"\u6b21\u306e\u3088\u3046\u306b\u7f6e\u63db\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"'vars.json'\n"})}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"\u691c\u7d22",src:n(19593).A+"",width:"1158",height:"402"})}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"\u7f6e\u63db",src:n(44221).A+"",width:"560",height:"434"})}),"\n",(0,t.jsx)(a.h3,{id:"jupyter\u30ab\u30fc\u30cd\u30eb\u3092\u69cb\u6210\u3059\u308b",children:"Jupyter\u30ab\u30fc\u30cd\u30eb\u3092\u69cb\u6210\u3059\u308b"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"0_Demo_Environment_Setup.ipynb"})," \u3092\u958b\u304d\u3001Visual Studio Code\u306e\u53f3\u4e0a\u306b\u3042\u308bSelect Kernel\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(a.p,{children:"Jupyter \u304a\u3088\u3073 Python \u62e1\u5f35\u6a5f\u80fd\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001Visual Studio Code \u306b\u3088\u3063\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3088\u3046\u306b\u6c42\u3081\u3089\u308c\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u62e1\u5f35\u6a5f\u80fd\u306f\u3001Visual Studio Code \u304c\u30ab\u30fc\u30cd\u30eb\u3092\u691c\u51fa\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u3067\u3059\u3002\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u306b\u306f\u3001[Python \u304a\u3088\u3073 Jupyter \u306e\u63a8\u5968\u62e1\u5f35\u6a5f\u80fd\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb/\u6709\u52b9\u5316] \u3092\u9078\u629e\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"select.kernel.png",src:n(44564).A+"",width:"3140",height:"516"})}),"\n",(0,t.jsxs)(a.p,{children:["\u5fc5\u8981\u306a\u62e1\u5f35\u6a5f\u80fd\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3068\u3001\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3 \u30e1\u30cb\u30e5\u30fc\u306b\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002",(0,t.jsx)(a.strong,{children:"\u65e2\u5b58\u306e Jupyter \u30ab\u30fc\u30cd\u30eb"}),"\u3092\u9078\u629e\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"existing.kernel.png",src:n(20669).A+"",width:"885",height:"204"})}),"\n",(0,t.jsx)(a.p,{children:"\u5b9f\u884c\u4e2d\u306e Jupyter Server \u306e URL \u3092\u5165\u529b\u3057\u3001Enter \u30ad\u30fc\u3092\u62bc\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"http://localhost:8888\n"})}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"server.url.png",src:n(49425).A+"",width:"864",height:"133"})}),"\n",(0,t.jsx)(a.p,{children:"\u30d5\u30a1\u30a4\u30eb\u3092 Docker \u30b3\u30f3\u30c6\u30ca\u306b\u30de\u30a6\u30f3\u30c8\u3059\u308b\u3068\u304d\u306b\u30bf\u30fc\u30df\u30ca\u30eb\u3067\u898b\u3064\u304b\u3063\u305f\u30c8\u30fc\u30af\u30f3\u3092\u5165\u529b\u3057\u3001Enter \u30ad\u30fc\u3092\u62bc\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"server.password.png",src:n(74275).A+"",width:"858",height:"139"})}),"\n",(0,t.jsx)(a.p,{children:"\u30b5\u30fc\u30d0\u30fc\u8868\u793a\u540d\u3092\u5909\u66f4\u3059\u308b (URL \u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u7a7a\u767d\u306e\u307e\u307e\u306b\u3057\u307e\u3059)"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"server.display.name.png",src:n(74629).A+"",width:"860",height:"130"})}),"\n",(0,t.jsx)(a.p,{children:"\u3053\u308c\u3067\u3001\u3059\u3079\u3066\u306e Teradata Vantage \u62e1\u5f35\u30ab\u30fc\u30cd\u30eb\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002\u5b9f\u884c\u4e2d\u306e Jupyter \u30b5\u30fc\u30d0\u30fc\u304b\u3089 Python 3 (ipykernel) \u3092\u9078\u629e\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"python.kernel.png",src:n(32146).A+"",width:"868",height:"234"})}),"\n",(0,t.jsx)(a.h3,{id:"\u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b",children:"\u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b"}),"\n",(0,t.jsxs)(a.p,{children:["\u74b0\u5883\u3092\u8a2d\u5b9a\u3059\u308b\u306b\u306f\u3001",(0,t.jsx)(a.em,{children:"0_Demo_Environment_Setup.ipynb"}),"\u5185\u306e\u3059\u3079\u3066\u306e\u30bb\u30eb\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002\u7d9a\u3044\u3066",(0,t.jsx)(a.em,{children:"1_Demo_Setup_Base_Data.ipynb"}),"\u3092\u5b9f\u884c\u3057\u3066\u3001\u30c7\u30e2\u306b\u5fc5\u8981\u306a\u57fa\u672c\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u8fbc\u307f\u307e\u3059\u3002\n\u30c7\u30e2\u30ce\u30fc\u30c8\u30d6\u30c3\u30af\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001GitHub \u306e ",(0,t.jsx)(a.a,{href:"https://github.com/Teradata/lake-demos",children:"Teradata Lake \u30c7\u30e2"})," \u30da\u30fc\u30b8\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"demoenvsetup.png",src:n(28404).A+"",width:"1822",height:"991"})}),"\n",(0,t.jsx)(a.h2,{id:"\u307e\u3068\u3081",children:"\u307e\u3068\u3081"}),"\n",(0,t.jsx)(a.p,{children:"\u3053\u306e\u30af\u30a4\u30c3\u30af\u30b9\u30bf\u30fc\u30c8 \u30ac\u30a4\u30c9\u3067\u306f\u3001Jupyter \u30ce\u30fc\u30c8\u30d6\u30c3\u30af\u3092\u4f7f\u7528\u3057\u3066 VantageCloud Lake \u30c7\u30e2\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3088\u3046\u306b Visual Studio Code \u3092\u69cb\u6210\u3057\u307e\u3057\u305f\u3002"})]})}function g(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},19365:(e,a,n)=>{n.d(a,{A:()=>i});n(96540);var t=n(34164);const r={tabItem:"tabItem_Ymn6"};var s=n(74848);function i(e){var a=e.children,n=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,i),hidden:n,children:a})}},56240:(e,a,n)=>{n.d(a,{A:()=>k});var t=n(96540),r=n(34164),s=n(23104),i=n(56347),l=n(205),o=n(57485);var d=n(89466);function c(e){var a,n;return null!=(a=null==(n=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((a=e.props)&&"object"==typeof a&&"value"in a))return e;var a;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?a:[]}function u(e){var a=e.values,n=e.children;return(0,t.useMemo)((function(){var e=null!=a?a:function(e){return c(e).map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes,default:a.default}}))}(n);return function(e){var a,n,t=(void 0===(n=function(e,a){return e.value===a.value})&&(n=function(e,a){return e===a}),(a=e).filter((function(e,t){return a.findIndex((function(a){return n(a,e)}))!==t})));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[a,n])}function h(e){var a=e.value;return e.tabValues.some((function(e){return e.value===a}))}function p(e){var a=e.queryString,n=void 0!==a&&a,r=e.groupId,s=(0,i.W6)(),l=function(e){var a=e.queryString,n=void 0!==a&&a,t=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:r});return[(0,o.aZ)(l),(0,t.useCallback)((function(e){if(l){var a=new URLSearchParams(s.location.search);a.set(l,e),s.replace(Object.assign({},s.location,{search:a.toString()}))}}),[l,s])]}function j(e){var a,n,r,s,i=e.defaultValue,o=e.queryString,c=void 0!==o&&o,j=e.groupId,g=u(e),m=(0,t.useState)((function(){return function(e){var a,n=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(a=t.find((function(e){return e.default})))?a:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:g})})),v=m[0],b=m[1],x=p({queryString:c,groupId:j}),f=x[0],k=x[1],y=(a=function(e){return e?"docusaurus.tab."+e:null}({groupId:j}.groupId),n=(0,d.Dv)(a),r=n[0],s=n[1],[r,(0,t.useCallback)((function(e){a&&s.set(e)}),[a,s])]),w=y[0],_=y[1],V=function(){var e=null!=f?f:w;return h({value:e,tabValues:g})?e:null}();return(0,l.A)((function(){V&&b(V)}),[V]),{selectedValue:v,selectValue:(0,t.useCallback)((function(e){if(!h({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);b(e),k(e),_(e)}),[k,_,g]),tabValues:g}}var g=n(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function b(e){var a=e.className,n=e.block,t=e.selectedValue,i=e.selectValue,l=e.tabValues,o=[],d=(0,s.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var a=e.currentTarget,n=o.indexOf(a),r=l[n].value;r!==t&&(d(a),i(r))},u=function(e){var a,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var t,r=o.indexOf(e.currentTarget)+1;n=null!=(t=o[r])?t:o[0];break;case"ArrowLeft":var s,i=o.indexOf(e.currentTarget)-1;n=null!=(s=o[i])?s:o[o.length-1]}null==(a=n)||a.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},a),children:l.map((function(e){var a=e.value,n=e.label,s=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:function(e){return o.push(e)},onKeyDown:u,onClick:c},s,{className:(0,r.A)("tabs__item",m.tabItem,null==s?void 0:s.className,{"tabs__item--active":t===a}),children:null!=n?n:a}),a)}))})}function x(e){var a=e.lazy,n=e.children,r=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){var i=s.find((function(e){return e.props.value===r}));return i?(0,t.cloneElement)(i,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map((function(e,a){return(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==r})}))})}function f(e){var a=j(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,v.jsx)(b,Object.assign({},e,a)),(0,v.jsx)(x,Object.assign({},e,a))]})}function k(e){var a=(0,g.A)();return(0,v.jsx)(f,Object.assign({},e,{children:c(e.children)}),String(a))}},28404:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/demoenvsetup-27ed84b9008334333a03eb6476262428.png"},20669:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/existing.kernel-b893c017d4e8ed9e4beb3e85b4a3454e.png"},32146:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/python.kernel-4d46ac77b426cfb1346233a028c73958.png"},44221:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/replace-bcf54ece5b7c9aa548b7243e00fd2c67.png"},19593:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/search-72b082202967672eff33b6c090e9dbba.png"},44564:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/select.kernel-703a383b5df2d41d96bf3c474453b2f8.png"},74629:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/server.display.name-f5ef83c15528f67dc8324485c1645a31.png"},74275:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/server.password-6ecbb5c9c4e91a334a4080099ef11d3f.png"},49425:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/server.url-ab39bd15cfe7f894a5eb3324d85d59ec.png"},82185:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/terminal-440ff9569fa09e4f3c3e3db5374cae99.png"},76899:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/vscode-3504eabc3e8242497f26e161243ffd18.png"},28453:(e,a,n)=>{n.d(a,{R:()=>i,x:()=>l});var t=n(96540);const r={},s=t.createContext(r);function i(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);
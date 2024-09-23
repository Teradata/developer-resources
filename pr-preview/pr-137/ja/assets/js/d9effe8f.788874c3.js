"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[578],{95767:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=a(74848),s=a(28453);function t(e){const n={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["VantageCloud Lake \u74b0\u5883\u3092\u30ea\u30af\u30a8\u30b9\u30c8\u3059\u308b\u306b\u306f\u3001\u3053\u306e ",(0,r.jsx)(n.a,{href:"https://www.teradata.com/about-us/contact",children:"link"}),"\u306b\u3042\u308b\u30d5\u30a9\u30fc\u30e0\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3059\u3067\u306b VantageCloud Lake \u74b0\u5883\u3092\u304a\u6301\u3061\u3067\u3001\u69cb\u6210\u306b\u95a2\u3059\u308b\u30ac\u30a4\u30c0\u30f3\u30b9\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001\u3053\u306e ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-137/ja/quickstarts/vantagecloud-lake/getting-started-with-vantagecloud-lake",children:"guide"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})})}function i(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}const l={sidebar_position:6,author:"Daniel Herrera",email:"daniel.herrera2@teradata.com",page_last_update:"2024 \u5e74 1 \u6708 26 \u65e5",description:"Azure \u3067 VantageCloud Lake \u306e Teradata Jupyter Notebook \u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","cloud computing","machine learning","sagemaker","vantagecloud","vantagecloud lake","lake"]},d="Microsoft Azure\u3067VantageCloud Lake\u306eTeradata Jupyter Notebook\u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5",c={id:"vantagecloud-lake/vantagecloud-lake-demo-jupyter-azure",title:"Microsoft Azure\u3067VantageCloud Lake\u306eTeradata Jupyter Notebook\u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5",description:"Azure \u3067 VantageCloud Lake \u306e Teradata Jupyter Notebook \u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b",source:"@site/i18n/ja/docusaurus-plugin-content-docs-quickstarts/current/vantagecloud-lake/vantagecloud-lake-demo-jupyter-azure.md",sourceDirName:"vantagecloud-lake",slug:"/vantagecloud-lake/vantagecloud-lake-demo-jupyter-azure",permalink:"/pr-preview/pr-137/ja/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-azure",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,author:"Daniel Herrera",email:"daniel.herrera2@teradata.com",page_last_update:"2024 \u5e74 1 \u6708 26 \u65e5",description:"Azure \u3067 VantageCloud Lake \u306e Teradata Jupyter Notebook \u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","cloud computing","machine learning","sagemaker","vantagecloud","vantagecloud lake","lake"]},sidebar:"tutorialSidebar",previous:{title:"Google Cloud Vertex AI \u3067 VantageCloud Lake \u306e Teradata Jupyter Notebook \u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5",permalink:"/pr-preview/pr-137/ja/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-google-cloud-vertex-ai"}},o={},u=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"Microsoft Azure \u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",id:"microsoft-azure-\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",level:2},{value:"Teradata Jupyter Lab\u306e\u62e1\u5f35Docker\u30a4\u30e1\u30fc\u30b8\u306b\u57fa\u3065\u3044\u3066Microsoft Azure Web App\u3092\u4f5c\u6210\u3059\u308b",id:"teradata-jupyter-lab\u306e\u62e1\u5f35docker\u30a4\u30e1\u30fc\u30b8\u306b\u57fa\u3065\u3044\u3066microsoft-azure-web-app\u3092\u4f5c\u6210\u3059\u308b",level:3},{value:"Jupyter Lab \u306e\u62e1\u5f35 Azure Web App\u3092\u8a2d\u5b9a\u3059\u308b",id:"jupyter-lab-\u306e\u62e1\u5f35-azure-web-app\u3092\u8a2d\u5b9a\u3059\u308b",level:3},{value:"VantageCloud Lake\u306e\u30c7\u30e2\u3092Jupyter Lab \u306e\u62e1\u5f35 Azure Web App\u306b\u30ed\u30fc\u30c9\u3059\u308b",id:"vantagecloud-lake\u306e\u30c7\u30e2\u3092jupyter-lab-\u306e\u62e1\u5f35-azure-web-app\u306b\u30ed\u30fc\u30c9\u3059\u308b",level:3},{value:"Jupyter Lab \u306e\u62e1\u5f35\u6a5f\u80fd Azure Web \u30a2\u30d7\u30ea\u306e IP \u3092\u78ba\u8a8d\u3059\u308b",id:"jupyter-lab-\u306e\u62e1\u5f35\u6a5f\u80fd-azure-web-\u30a2\u30d7\u30ea\u306e-ip-\u3092\u78ba\u8a8d\u3059\u308b",level:3},{value:"VantageCloud Lake\u306e\u69cb\u6210",id:"vantagecloud-lake\u306e\u69cb\u6210",level:2},{value:"VantageCloud Lake \u306e Jupyter Notebook \u30c7\u30e2",id:"vantagecloud-lake-\u306e-jupyter-notebook-\u30c7\u30e2",level:2},{value:"\u69cb\u6210",id:"\u69cb\u6210",level:3},{value:"\u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b",id:"\u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b",level:2},{value:"\u307e\u3068\u3081",id:"\u307e\u3068\u3081",level:2},{value:"\u3055\u3089\u306b\u8a73\u3057\u304f",id:"\u3055\u3089\u306b\u8a73\u3057\u304f",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"microsoft-azure\u3067vantagecloud-lake\u306eteradata-jupyter-notebook\u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5",children:"Microsoft Azure\u3067VantageCloud Lake\u306eTeradata Jupyter Notebook\u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5"}),"\n",(0,r.jsx)(n.h2,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306e\u30af\u30a4\u30c3\u30af\u30b9\u30bf\u30fc\u30c8\u3067\u306f\u3001Microsoft Azure \u3067 ",(0,r.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos",children:"VantageCloud Lake \u306e Jupyter Notebook \u30c7\u30e2"}),"\u3092\u5b9f\u884c\u3059\u308b\u30d7\u30ed\u30bb\u30b9\u306b\u3064\u3044\u3066\u8a73\u3057\u304f\u8aac\u660e\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Microsoft Azure \u30a2\u30ab\u30a6\u30f3\u30c8\u3078\u306e\u30a2\u30af\u30bb\u30b9"}),"\n",(0,r.jsxs)(n.li,{children:["VantageCloud Lake\u74b0\u5883\u3078\u306e\u30a2\u30af\u30bb\u30b9","\n",(0,r.jsx)(i,{}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"microsoft-azure-\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",children:"Microsoft Azure \u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u4ee5\u4e0b\u306e\u5404\u624b\u9806\u306b\u3064\u3044\u3066\u8a73\u3057\u304f\u8aac\u660e\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Teradata Jupyter Lab \u306e\u62e1\u5f35\u6a5f\u80fd\u306e Docker \u30a4\u30e1\u30fc\u30b8\u306b\u57fa\u3065\u3044\u3066 Microsoft Azure Web \u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3059\u308b"}),"\n",(0,r.jsx)(n.li,{children:"Jupyter Lab \u306e\u62e1\u5f35\u6a5f\u80fd\u306e Azure Web \u30a2\u30d7\u30ea\u3092\u69cb\u6210\u3059\u308b"}),"\n",(0,r.jsx)(n.li,{children:"VantageCloud Lake\u306e\u30c7\u30e2\u3092Jupyter Lab\u306e\u62e1\u5f35\u6a5f\u80fd\u3067\u3042\u308bAzure Web App\u306b\u30ed\u30fc\u30c9\u3059\u308b"}),"\n",(0,r.jsx)(n.li,{children:"Jupyter Lab \u306e\u62e1\u5f35\u6a5f\u80fd Azure Web \u30a2\u30d7\u30ea\u306e IP \u3092\u78ba\u8a8d\u3059\u308b"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"teradata-jupyter-lab\u306e\u62e1\u5f35docker\u30a4\u30e1\u30fc\u30b8\u306b\u57fa\u3065\u3044\u3066microsoft-azure-web-app\u3092\u4f5c\u6210\u3059\u308b",children:"Teradata Jupyter Lab\u306e\u62e1\u5f35Docker\u30a4\u30e1\u30fc\u30b8\u306b\u57fa\u3065\u3044\u3066Microsoft Azure Web App\u3092\u4f5c\u6210\u3059\u308b"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Microsoft Azure\u306b\u30ed\u30b0\u30a4\u30f3\u3057\u3001\u300cAPP\u30b5\u30fc\u30d3\u30b9\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002\n",(0,r.jsx)(n.img,{alt:"Azure \u30b3\u30f3\u30bd\u30fc\u30eb",src:a(22706).A+"",width:"1225",height:"640"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u300cApp Services\u300d\u3067\u300cWeb\u30a2\u30d7\u30ea\u300d\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\n",(0,r.jsx)(n.img,{alt:"Azure\u30a6\u30a7\u30d6\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3059\u308b",src:a(93919).A+"",width:"1487",height:"723"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u300cBasics\u300d\u30bf\u30d6\u3067\u3001\u6b21\u306e\u64cd\u4f5c\u3092\u884c\u3044\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u304b\u3089\u9069\u5207\u306a\u30ea\u30bd\u30fc\u30b9 \u30b0\u30eb\u30fc\u30d7\u3092\u9078\u629e\u3059\u308b\u304b\u3001\u65b0\u3057\u3044\u30ea\u30bd\u30fc\u30b9 \u30b0\u30eb\u30fc\u30d7\u3092\u4f5c\u6210\u3059\u308b"}),"\n",(0,r.jsx)(n.li,{children:"\u30a6\u30a7\u30d6\u30a2\u30d7\u30ea\u306e\u540d\u524d\u3092\u5165\u529b\u3059\u308b"}),"\n",(0,r.jsx)(n.li,{children:"\u300cPublish\u300d\u30e9\u30b8\u30aa\u30dc\u30bf\u30f3\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u300cDocker Container\u300d\u3092\u9078\u629e\u3059\u308b"}),"\n",(0,r.jsx)(n.li,{children:"\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\u30b7\u30b9\u30c6\u30e0\u3068\u3057\u3066\u300cLinux\u300d\u3092\u9078\u629e\u3057\u307e\u3059"}),"\n",(0,r.jsx)(n.li,{children:"\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u304b\u3089\u9069\u5207\u306a\u30ea\u30fc\u30b8\u30e7\u30f3\u3092\u9078\u629e\u3059\u308b"}),"\n",(0,r.jsx)(n.li,{children:"\u9069\u5207\u306aApp Service\u30d7\u30e9\u30f3\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u307e\u3060\u30d7\u30e9\u30f3\u304c\u306a\u3044\u5834\u5408\u306f\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u69cb\u6210\u3067\u65b0\u3057\u3044\u30d7\u30e9\u30f3\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"VantageCloud Lake \u30c7\u30e2\u306e\u76ee\u7684\u3067\u306f\u3001\u5197\u9577\u6027\u306f\u5fc5\u8981\u3042\u308a\u307e\u305b\u3093"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u3053\u306e\u30bf\u30d6\u3092\u5b8c\u4e86\u3057\u305f\u3089\u3001\u300cDocker\u300d\u30bf\u30d6\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u7d9a\u884c\u3059\u308b\n",(0,r.jsx)(n.img,{alt:"Azure Web \u30a2\u30d7\u30ea Basics\u3092\u4f5c\u6210\u3059\u308b",src:a(46788).A+"",width:"733",height:"760"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u300cDocker\u300d\u30bf\u30d6\u3067\u3001\u6b21\u306e\u64cd\u4f5c\u3092\u884c\u3046"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u304b\u3089\u300cSingle Container\u300d\u3092\u9078\u629e\u3059\u308b"}),"\n",(0,r.jsx)(n.li,{children:"\u300cImage Source\u300d\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u3067\u300cDocker Hub\u300d\u3092\u9078\u629e\u3059\u308b"}),"\n",(0,r.jsx)(n.li,{children:"\u300cAccess Type\u300d\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u3067\u300cPublic\u300d\u3092\u9078\u629e\u3059\u308b"}),"\n",(0,r.jsxs)(n.li,{children:["\u300cImage and tag\u300d\u30bf\u30a4\u30d7\u306b\u30bf\u30a4\u30d7\u3059\u308b: ",(0,r.jsx)(n.code,{children:"teradata/jupyterlab-extensions:latest"})]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"\u3053\u306e App Service \u306b\u306f\u8d77\u52d5\u30b3\u30de\u30f3\u30c9\u306f\u5fc5\u8981\u3042\u308a\u307e\u305b\u3093"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u300cReview + Create\u300d\u30bf\u30d6\u3092\u9078\u629e\u3057\u3066\u7d9a\u884c\u3059\u308b\n",(0,r.jsx)(n.img,{alt:"Azure Web \u30a2\u30d7\u30ea Docker \u3092\u4f5c\u6210\u3059\u308b",src:a(93517).A+"",width:"740",height:"868"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u300cReview + Create\u300d\u30bf\u30d6\u3067\u3001\u300cCreate\u300d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\n",(0,r.jsx)(n.img,{alt:"Azure Web \u30a2\u30d7\u30ea Review \u3092\u4f5c\u6210\u3059\u308b",src:a(90322).A+"",width:"575",height:"752"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u30c7\u30d7\u30ed\u30a4\u304c\u5b8c\u4e86\u3057\u305f\u3089\u3001\u300cGo to Resource\u300d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3059\u308b\n",(0,r.jsx)(n.img,{alt:"Azure Web \u30a2\u30d7\u30ea Complete \u3092\u4f5c\u6210\u3059\u308b",src:a(9223).A+"",width:"1222",height:"523"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"jupyter-lab-\u306e\u62e1\u5f35-azure-web-app\u3092\u8a2d\u5b9a\u3059\u308b",children:"Jupyter Lab \u306e\u62e1\u5f35 Azure Web App\u3092\u8a2d\u5b9a\u3059\u308b"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u53f3\u5074\u306e\u30d1\u30cd\u30eb\u3067\u300cConfiguration\u300d\u3092\u9078\u629e\u3059\u308b\n",(0,r.jsx)(n.img,{alt:"Azure Web \u30a2\u30d7\u30ea Complete \u3092\u4f5c\u6210\u3059\u308b",src:a(50125).A+"",width:"1560",height:"702"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u6b21\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u8a2d\u5b9a\u3092\u8ffd\u52a0\u3057\u307e\u3059"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u8a2d\u5b9a"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u5024"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:'"accept_license"'})}),(0,r.jsx)(n.td,{children:"Y"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:'"WEBSITES_PORT"'})}),(0,r.jsx)(n.td,{children:"8888"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:'"JUPYTER_TOKEN"'})}),(0,r.jsx)(n.td,{children:"\u4f7f\u7528\u3059\u308bJupyter Lab\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002"})]})]})]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"\u300cJUPYTER_TOKEN\u300d\u69cb\u6210\u3092\u542b\u3081\u306a\u3044\u5834\u5408\u3001\u30b3\u30f3\u30c6\u30ca\u306f\u65b0\u3057\u3044\u30c8\u30fc\u30af\u30f3\u3092\u751f\u6210\u3057\u3001\u305d\u308c\u3092\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u8a18\u9332\u3057\u307e\u3059\u3002\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3 \u30ed\u30b0\u304b\u3089\u305d\u308c\u3092\u53d6\u5f97\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u300cJUPYTER_TOKEN\u300d\u69cb\u6210\u30ad\u30fc\u3092\u542b\u3081\u3066\u5024\u3092\u7a7a\u767d\u306e\u307e\u307e\u306b\u3059\u308b\u3068\u3001\u30b7\u30b9\u30c6\u30e0\u306f\u30c8\u30fc\u30af\u30f3\u3092\u7a7a\u306e\u6587\u5b57\u5217\u3068\u3057\u3066\u8a2d\u5b9a\u3057\u3001\u30c8\u30fc\u30af\u30f3 \u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u306e\u306a\u3044\u4fdd\u8b77\u3055\u308c\u3066\u3044\u306a\u3044 Jupyter Lab \u74b0\u5883\u306b\u306a\u308a\u307e\u3059\u3002\n:::"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u4fdd\u5b58\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30a2\u30d7\u30ea\u304c\u518d\u8d77\u52d5\u3055\u308c\u308b\n",(0,r.jsx)(n.img,{alt:"Azure Web \u30a2\u30d7\u30ea\u3092\u69cb\u6210\u3059\u308b",src:a(68005).A+"",width:"1070",height:"669"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u53f3\u5074\u306e\u30d1\u30cd\u30eb\u306e\u300cOverview\u300d\u30bf\u30d6\u306b\u623b\u308b"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"vantagecloud-lake\u306e\u30c7\u30e2\u3092jupyter-lab-\u306e\u62e1\u5f35-azure-web-app\u306b\u30ed\u30fc\u30c9\u3059\u308b",children:"VantageCloud Lake\u306e\u30c7\u30e2\u3092Jupyter Lab \u306e\u62e1\u5f35 Azure Web App\u306b\u30ed\u30fc\u30c9\u3059\u308b"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u30c7\u30d5\u30a9\u30eb\u30c8\u30c9\u30e1\u30a4\u30f3\u3092\u30af\u30ea\u30c3\u30af\n",(0,r.jsx)(n.img,{alt:"Azure Web \u30a2\u30d7\u30ea\u3092\u69cb\u6210\u3059\u308b",src:a(28451).A+"",width:"1560",height:"702"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Jupyter Lab\u306e\u958b\u59cb\u30c0\u30a4\u30a2\u30ed\u30b0\u3067\u3001\u5b9a\u7fa9\u3055\u308c\u305fJupyter\u30c8\u30fc\u30af\u30f3\u3092\u5165\u529b\u3057\u3001Log in\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\n",(0,r.jsx)(n.img,{alt:"Azure Web \u30a2\u30d7\u30ea\u3092\u69cb\u6210\u3059\u308b",src:a(61196).A+"",width:"706",height:"898"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Jupyter Lab\u30b3\u30f3\u30bd\u30fc\u30eb\u3067git\u30a2\u30a4\u30b3\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\n",(0,r.jsx)(n.img,{alt:"Azure Web \u30a2\u30d7\u30ea\u3092\u69cb\u6210\u3059\u308b",src:a(17695).A+"",width:"1590",height:"671"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5bfe\u5fdc\u3059\u308b\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u6b21\u306eURI\u3092\u30b3\u30d4\u30fc\u3057\u307e\u3059"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"https://github.com/Teradata/lake-demos.git"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["[Clone]\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\n",(0,r.jsx)(n.img,{alt:"Azure Web \u30a2\u30d7\u30ea\u3092\u69cb\u6210\u3059\u308b",src:a(2902).A+"",width:"1551",height:"676"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Jupyter Lab \u30b3\u30f3\u30bd\u30fc\u30eb\u3067\u3001",(0,r.jsx)(n.code,{children:"lake-demos"})," \u30d5\u30a9\u30eb\u30c0\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\n",(0,r.jsx)(n.img,{alt:"Azure Web \u30a2\u30d7\u30ea\u3092\u69cb\u6210\u3059\u308b",src:a(23783).A+"",width:"1562",height:"645"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Azure Web \u30a2\u30d7\u30ea\u3092\u69cb\u6210\u3059\u308b",src:a(67672).A+"",width:"1551",height:"698"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"jupyter-lab-\u306e\u62e1\u5f35\u6a5f\u80fd-azure-web-\u30a2\u30d7\u30ea\u306e-ip-\u3092\u78ba\u8a8d\u3059\u308b",children:"Jupyter Lab \u306e\u62e1\u5f35\u6a5f\u80fd Azure Web \u30a2\u30d7\u30ea\u306e IP \u3092\u78ba\u8a8d\u3059\u308b"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"JupyterLab \u3067\u3001Teradata Python \u30ab\u30fc\u30cd\u30eb\u3092\u542b\u3080\u30ce\u30fc\u30c8\u30d6\u30c3\u30af\u3092\u958b\u304d\u3001\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u30ce\u30fc\u30c8\u30d6\u30c3\u30af \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e IP \u30a2\u30c9\u30ec\u30b9\u3092\u898b\u3064\u3051\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:', id="lakedemos_azure_first_config", role="emits-gtm-events, content-editable"',children:'import requests\ndef get_public_ip():\n    try:\n        response = requests.get(\'https://api.ipify.org\')\n        return response.text\n    except requests.RequestException as e:\n        return "Error: " + str(e)\nmy_public_ip = get_public_ip()\nprint("My Public IP is:", my_public_ip)\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u6b21\u306e\u30b9\u30c6\u30c3\u30d7\u3067\u306f\u3001VantageCloud Lake \u74b0\u5883\u3067\u3053\u306e IP \u3092\u30db\u30ef\u30a4\u30c8\u30ea\u30b9\u30c8\u306b\u767b\u9332\u3057\u3066\u3001\u63a5\u7d9a\u3092\u8a31\u53ef\u3059\u308b"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u3053\u308c\u306f\u3053\u306e\u30ac\u30a4\u30c9\u3068\u30ce\u30fc\u30c8\u30d6\u30c3\u30af\u306e\u30c7\u30e2\u306e\u76ee\u7684\u306e\u305f\u3081\u3067\u3042\u308a\u3001\u5b9f\u7a3c\u50cd\u74b0\u5883\u3067\u306f\u3088\u308a\u5805\u7262\u306a\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u8a2d\u5b9a\u304c\u5fc5\u8981\u306b\u306a\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Azure App Service \u306f\u3001\u30b5\u30fc\u30d3\u30b9\u304c\u516c\u958b\u3059\u308b\u53ef\u80fd\u6027\u306e\u3042\u308b\u3059\u3079\u3066\u306e IP \u30a2\u30c9\u30ec\u30b9\u306e\u30ea\u30b9\u30c8\u3082\u63d0\u4f9b\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u6982\u8981\u30bf\u30d6\u306e\u4e0b\u306b\u3042\u308a\u307e\u3059\u3002\n",(0,r.jsx)(n.img,{alt:"\u30ed\u30fc\u30c9\u3055\u308c\u305fJupyterLab",src:a(82844).A+"",width:"774",height:"241"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"vantagecloud-lake\u306e\u69cb\u6210",children:"VantageCloud Lake\u306e\u69cb\u6210"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"VantageCloud Lake \u74b0\u5883\u306e\u8a2d\u5b9a\u3067\u3001\u30ce\u30fc\u30c8\u30d6\u30c3\u30af \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e IP \u3092\u8ffd\u52a0\u3059\u308b"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Lake\u74b0\u5883\u306f\u8907\u6570\u306e\u30a2\u30c9\u30ec\u30b9\u306e\u30db\u30ef\u30a4\u30c8\u30ea\u30b9\u30c8\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u3059"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"JupyterLab\u3092\u958b\u59cb\u3059\u308b",src:a(41165).A+"",width:"1423",height:"662"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"vantagecloud-lake-\u306e-jupyter-notebook-\u30c7\u30e2",children:"VantageCloud Lake \u306e Jupyter Notebook \u30c7\u30e2"}),"\n",(0,r.jsx)(n.h3,{id:"\u69cb\u6210",children:"\u69cb\u6210"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos/blob/main/vars.json",children:"vars.json"})," \u306f\u3001VantageCloud Lake \u74b0\u5883\u306e\u69cb\u6210\u306b\u4e00\u81f4\u3059\u308b\u3088\u3046\u306b\u7de8\u96c6\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\n",(0,r.jsx)(n.img,{alt:"JupyterLab\u3092\u958b\u59cb\u3059\u308b",src:a(16946).A+"",width:"922",height:"904"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u7279\u306b\u6b21\u306e\u5024\u3092\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u5909\u6570"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u5024"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:'"host"'})}),(0,r.jsx)(n.td,{children:"VantageCloud Lake \u74b0\u5883\u304b\u3089\u306e Public IP\u5024"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:'"UES_URI"'})}),(0,r.jsx)(n.td,{children:"VantageCloud Lake \u74b0\u5883\u304b\u3089\u306e Open Analytics"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:'"dbc"'})}),(0,r.jsx)(n.td,{children:"VantageCloud Lake \u74b0\u5883\u306e\u30de\u30b9\u30bf\u30fc \u30d1\u30b9\u30ef\u30fc\u30c9"})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u30b5\u30f3\u30d7\u30eb vars.json \u3067\u306f\u3001\u3059\u3079\u3066\u306e\u30e6\u30fc\u30b6\u30fc\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u300cpassword\u300d\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u304c\u308f\u304b\u308a\u307e\u3059\u3002\u3053\u308c\u306f\u8aac\u660e\u3092\u76ee\u7684\u3068\u3057\u305f\u3082\u306e\u3067\u3042\u308a\u3001\u3053\u308c\u3089\u306e\u30d1\u30b9\u30ef\u30fc\u30c9 \u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u3059\u3079\u3066\u5f37\u529b\u306a\u30d1\u30b9\u30ef\u30fc\u30c9\u306b\u5909\u66f4\u3057\u3001\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u4fdd\u8b77\u3057\u3001\u6b21\u306e\u624b\u9806\u3092\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u305d\u306e\u4ed6\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u7ba1\u7406\u306e\u30d9\u30b9\u30c8 \u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u3002"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"vars.json \u30d5\u30a1\u30a4\u30eb\u5185\u306e\u3059\u3079\u3066\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5fd8\u308c\u305a\u306b\u5909\u66f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b",children:"\u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b"}),"\n",(0,r.jsxs)(n.p,{children:["\u74b0\u5883\u3092\u8a2d\u5b9a\u3059\u308b\u306b\u306f\u3001",(0,r.jsx)(n.em,{children:"0_Demo_Environment_Setup.ipynb"}),"\u5185\u306e\u3059\u3079\u3066\u306e\u30bb\u30eb\u3092\u958b\u3044\u3066\u5b9f\u884c\u3057\u307e\u3059\u3002\u7d9a\u3044\u3066",(0,r.jsx)(n.em,{children:"1_Demo_Setup_Base_Data.ipynb"}),"\u3092\u5b9f\u884c\u3057\u3066\u3001\u30c7\u30e2\u306b\u5fc5\u8981\u306a\u57fa\u672c\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u8fbc\u307f\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u30c7\u30e2\u30ce\u30fc\u30c8\u30d6\u30c3\u30af\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001GitHub \u306e ",(0,r.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos",children:"Teradata Lake \u30c7\u30e2"})," \u30da\u30fc\u30b8\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u307e\u3068\u3081",children:"\u307e\u3068\u3081"}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306e\u30af\u30a4\u30c3\u30af \u30b9\u30bf\u30fc\u30c8\u3067\u306f\u3001Microsoft Azure \u3067 VantageCloud Lake \u306e Jupyter \u30ce\u30fc\u30c8\u30d6\u30c3\u30af \u30c7\u30e2\u3092\u5b9f\u884c\u3059\u308b\u65b9\u6cd5\u3092\u5b66\u3073\u307e\u3057\u305f\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u3055\u3089\u306b\u8a73\u3057\u304f",children:"\u3055\u3089\u306b\u8a73\u3057\u304f"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.teradata.com/r/Teradata-VantageCloud-Lake/Getting-Started-First-Sign-On-by-Organization-Admin",children:"Teradata VantageCloud Lake\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/pr-preview/pr-137/ja/quickstarts/analyze-data/jupyter",children:"Jupyter Notebook\u304b\u3089Vantage\u3092\u5229\u7528\u3059\u308b\u65b9\u6cd5"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},93919:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/azure-app-service-1-2ff913b123d9e4326c9611f88ce49b3e.PNG"},46788:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/azure-app-service-2-f2d2b6b7334f8e1572e045194c69a1a1.PNG"},93517:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/azure-app-service-3-ebebd43912bc3b9fcb101daf9a814c58.PNG"},90322:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/azure-app-service-4-77c09ced32b87517de13e604c68fe708.PNG"},9223:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/azure-app-service-deployment-complete-5-5a56b178304a6d9345feb48f8637813e.PNG"},82844:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/azure-app-service-ips-14-fef19bf5b7ebe3742614f31fb23ea55b.PNG"},50125:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/azure-app-service-resource-6-d1c7ca08896893e4ab31fd58ddac3040.PNG"},28451:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/azure-app-service-resource-8-ee96204bfda7739061a018f4aa904577.PNG"},68005:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/azure-app-service-resource-config-7-51e3b644ecd3ed6439d524d04b472bcf.PNG"},22706:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/azure-console-0-ed9ec305648bf84cf32f68a016f657dc.PNG"},17695:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/azure-jupyter-console-10-67c86b939eaca755b8688dc9e9f7d6e6.PNG"},61196:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/azure-jupyter-console-auth-9-73e7619465a4854e1def6105bcc3fa55.PNG"},23783:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/azure-jupyter-console-click-lake-demos-12-5991b8d07bdcbffc5fa55246db72efea.PNG"},2902:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/azure-jupyter-console-clone-11-5c5ed797e1ab4e96caa51a803059ebf0.PNG"},67672:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/azure-jupyter-console-lakedemos-13-bba61c16dbed0d53059ee1353259f164.PNG"},41165:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/sagemaker-lake-9e18bff602d568e81bbb721a3d4e2553.PNG"},16946:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/sagemaker-vars-d771ffabe211a1bd3ebd6ba6ce32468d.PNG"},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>l});var r=a(96540);const s={},t=r.createContext(s);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);
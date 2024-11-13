"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[9379],{90821:(a,t,e)=>{e.r(t),e.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=e(74848),o=e(28453);const r={sidebar_position:17,author:"Wenjie Tehan",email:"wenjie.tehan@teradata.com",page_last_update:"2022 \u5e74 2 \u6708 14 \u65e5",description:"Teradata Vantage\u3068Google Cloud Data Catalog\u3092\u7d71\u5408\u3059\u308b",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","google cloud","google cloud data catalog."]},s="Teradata Vantage\u3068Google Cloud Data Catalog\u3092\u7d71\u5408\u3059\u308b",l={id:"manage-data/integrate-teradata-vantage-with-google-cloud-data-catalog",title:"Teradata Vantage\u3068Google Cloud Data Catalog\u3092\u7d71\u5408\u3059\u308b",description:"Teradata Vantage\u3068Google Cloud Data Catalog\u3092\u7d71\u5408\u3059\u308b",source:"@site/i18n/ja/docusaurus-plugin-content-docs-quickstarts/current/manage-data/integrate-teradata-vantage-with-google-cloud-data-catalog.md",sourceDirName:"manage-data",slug:"/manage-data/integrate-teradata-vantage-with-google-cloud-data-catalog",permalink:"/pr-preview/pr-158/ja/quickstarts/manage-data/integrate-teradata-vantage-with-google-cloud-data-catalog",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17,author:"Wenjie Tehan",email:"wenjie.tehan@teradata.com",page_last_update:"2022 \u5e74 2 \u6708 14 \u65e5",description:"Teradata Vantage\u3068Google Cloud Data Catalog\u3092\u7d71\u5408\u3059\u308b",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","google cloud","google cloud data catalog."]},sidebar:"tutorialSidebar",previous:{title:"Azure Data Share \u3092 Teradata Vantage \u306b\u63a5\u7d9a\u3059\u308b",permalink:"/pr-preview/pr-158/ja/quickstarts/manage-data/connect-azure-data-share-to-teradata-vantage"},next:{title:"DataHub\u3067\u306eTeradata Vantage\u306e\u63a5\u7d9a\u8a2d\u5b9a",permalink:"/pr-preview/pr-158/ja/quickstarts/manage-data/configure-a-teradata-vantage-connection-in-datahub"}},i={},d=[{value:"\u6982\u8981",id:"\u6982\u8981",level:3},{value:"Google Cloud Data Catalog\u306b\u3064\u3044\u3066",id:"google-cloud-data-catalog\u306b\u3064\u3044\u3066",level:3},{value:"Teradata Vantage \u306b\u3064\u3044\u3066",id:"teradata-vantage-\u306b\u3064\u3044\u3066",level:3},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:3},{value:"\u624b\u9806",id:"\u624b\u9806",level:3},{value:"Data Catalog API\u3092\u6709\u52b9\u306b\u3059\u308b",id:"data-catalog-api\u3092\u6709\u52b9\u306b\u3059\u308b",level:3},{value:"Teradata Data Catalog \u30b3\u30cd\u30af\u30bf\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",id:"teradata-data-catalog-\u30b3\u30cd\u30af\u30bf\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",level:3},{value:"virtualenv \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",id:"virtualenv-\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",level:3},{value:"Data Catalog Teradata\u30b3\u30cd\u30af\u30bf\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"data-catalog-teradata\u30b3\u30cd\u30af\u30bf\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:4},{value:"\u74b0\u5883\u5909\u6570\u306e\u8a2d\u5b9a",id:"\u74b0\u5883\u5909\u6570\u306e\u8a2d\u5b9a",level:3},{value:"Run",id:"run",level:3},{value:"Teradata Vantage\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u3092Data Catalog\u3067\u63a2\u7d22\u3059\u308b",id:"teradata-vantage\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u3092data-catalog\u3067\u63a2\u7d22\u3059\u308b",level:3},{value:"\u30af\u30ea\u30fc\u30f3\u30a2\u30c3\u30d7 (\u30aa\u30d7\u30b7\u30e7\u30f3)",id:"\u30af\u30ea\u30fc\u30f3\u30a2\u30c3\u30d7-\u30aa\u30d7\u30b7\u30e7\u30f3",level:3}];function c(a){const t={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...a.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"teradata-vantage\u3068google-cloud-data-catalog\u3092\u7d71\u5408\u3059\u308b",children:"Teradata Vantage\u3068Google Cloud Data Catalog\u3092\u7d71\u5408\u3059\u308b"}),"\n",(0,n.jsx)(t.h3,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,n.jsxs)(t.p,{children:["\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001 ",(0,n.jsx)(t.a,{href:"https://github.com/GoogleCloudPlatform/datacatalog-connectors-rdbms/tree/master/google-datacatalog-teradata-connector",children:"Data Catalog Teradata Connector on GitHub"}),"\u3092\u4f7f\u7528\u3057\u3066 Teradata Vantage\u3068Google Cloud Data Catalog\u3092\u63a5\u7d9a\u3057\u3001Data Catalog\u7d4c\u7531\u3067Vantage\u30c6\u30fc\u30d6\u30eb\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u63a2\u7d22\u3059\u308b\u624b\u9806\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"\u56f3\u306e\u8aac\u660e\u304c\u81ea\u52d5\u7684\u306b\u751f\u6210\u3055\u308c\u308b",src:e(13597).A+"",width:"1883",height:"870"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Scrape: Teradata Vantage\u306b\u63a5\u7d9a\u3057\u3001\u5229\u7528\u53ef\u80fd\u306a\u3059\u3079\u3066\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3059\u308b"}),"\n",(0,n.jsx)(t.li,{children:"Prepare: Data Catalog\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3067\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u5909\u63db\u3057\u3001\u30bf\u30b0\u3092\u4f5c\u6210\u3059\u308b"}),"\n",(0,n.jsx)(t.li,{children:"Ingest: Data Catalog\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092Google Cloud\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u9001\u4fe1\u3059\u308b"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"google-cloud-data-catalog\u306b\u3064\u3044\u3066",children:"Google Cloud Data Catalog\u306b\u3064\u3044\u3066"}),"\n",(0,n.jsx)(t.p,{children:"Google Cloud Data Catalog \u306f\u3001\u5b8c\u5168\u306b\u7ba1\u7406\u3055\u308c\u305f\u30c7\u30fc\u30bf\u691c\u51fa\u304a\u3088\u3073\u30e1\u30bf\u30c7\u30fc\u30bf\u7ba1\u7406\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002Data Catalog \u3067\u306f\u3001\u30c7\u30fc\u30bf\u30a2\u30bb\u30c3\u30c8\u306e\u30cd\u30a4\u30c6\u30a3\u30d6 \u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u30ab\u30bf\u30ed\u30b0\u5316\u3067\u304d\u307e\u3059\u3002Data Catalog \u306f\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u3067\u3001\u6280\u8853\u30e1\u30bf\u30c7\u30fc\u30bf\u3068\u30d3\u30b8\u30cd\u30b9 \u30e1\u30bf\u30c7\u30fc\u30bf\u306e\u4e21\u65b9\u3092\u69cb\u9020\u5316\u3055\u308c\u305f\u5f62\u5f0f\u3067\u30ad\u30e3\u30d7\u30c1\u30e3\u3059\u308b\u305f\u3081\u306e\u4e2d\u592e\u30ab\u30bf\u30ed\u30b0\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(t.h3,{id:"teradata-vantage-\u306b\u3064\u3044\u3066",children:"Teradata Vantage \u306b\u3064\u3044\u3066"}),"\n",(0,n.jsx)(t.p,{children:"Vantage\u306f\u3001\u30c7\u30fc\u30bf\u30a6\u30a7\u30a2\u30cf\u30a6\u30b9\u3001\u30c7\u30fc\u30bf\u30ec\u30a4\u30af\u3001\u30a2\u30ca\u30ea\u30c6\u30a3\u30af\u30b9\u3092\u5358\u4e00\u306e\u63a5\u7d9a\u3055\u308c\u305f\u30a8\u30b3\u30b7\u30b9\u30c6\u30e0\u306b\u7d71\u5408\u3059\u308b\u6700\u65b0\u306e\u30af\u30e9\u30a6\u30c9\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u3059\u3002"}),"\n",(0,n.jsx)(t.p,{children:"Vantage\u306f\u3001\u8a18\u8ff0\u7684\u5206\u6790\u3001\u4e88\u6e2c\u7684\u5206\u6790\u3001\u51e6\u65b9\u7684\u5206\u6790\u3001\u81ea\u5f8b\u7684\u610f\u601d\u6c7a\u5b9a\u3001ML\u6a5f\u80fd\u3001\u53ef\u8996\u5316\u30c4\u30fc\u30eb\u3092\u7d71\u5408\u3057\u305f\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u3001\u30c7\u30fc\u30bf\u306e\u6240\u5728\u3092\u554f\u308f\u305a\u3001\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u306e\u30d3\u30b8\u30cd\u30b9\u30a4\u30f3\u30c6\u30ea\u30b8\u30a7\u30f3\u30b9\u3092\u5927\u898f\u6a21\u306b\u767a\u6398\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002"}),"\n",(0,n.jsx)(t.p,{children:"Vantage\u306f\u3001\u5c0f\u898f\u6a21\u304b\u3089\u59cb\u3081\u3066\u3001\u30b3\u30f3\u30d4\u30e5\u30fc\u30c8\u3084\u30b9\u30c8\u30ec\u30fc\u30b8\u3092\u5f3e\u529b\u7684\u306b\u62e1\u5f35\u3057\u3001\u4f7f\u7528\u3057\u305f\u5206\u3060\u3051\u652f\u6255\u3044\u3001\u4f4e\u30b3\u30b9\u30c8\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30b9\u30c8\u30a2\u3092\u6d3b\u7528\u3057\u3001\u5206\u6790\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u3092\u7d71\u5408\u3059\u308b\u3053\u3068\u3092\u53ef\u80fd\u306b\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(t.p,{children:"Vantage \u306f\u3001R\u3001Python\u3001Teradata Studio\u3001\u304a\u3088\u3073\u305d\u306e\u4ed6\u306e SQL \u30d9\u30fc\u30b9\u306e\u30c4\u30fc\u30eb\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002Vantage \u306f\u3001\u30d1\u30d6\u30ea\u30c3\u30af \u30af\u30e9\u30a6\u30c9\u3001\u30aa\u30f3\u30d7\u30ec\u30df\u30b9\u3001\u6700\u9069\u5316\u3055\u308c\u305f\u30a4\u30f3\u30d5\u30e9\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u307e\u305f\u306f\u30b3\u30e2\u30c7\u30a3\u30c6\u30a3 \u30a4\u30f3\u30d5\u30e9\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u3001\u307e\u305f\u306f\u30b5\u30fc\u30d3\u30b9\u3068\u3057\u3066\u5c0e\u5165\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,n.jsxs)(t.p,{children:["Teradata Vantage \u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001 ",(0,n.jsx)(t.a,{href:"https://docs.teradata.com/home",children:"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,n.jsx)(t.h3,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Teradata Vantage\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3002"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Data Catalog \u7ba1\u7406\u8005\u30ed\u30fc\u30eb\u3092\u6301\u3064 ",(0,n.jsx)(t.a,{href:"https://support.google.com/accounts/answer/27441?hl=en",children:(0,n.jsx)(t.strong,{children:"Google \u30b5\u30fc\u30d3\u30b9 \u30a2\u30ab\u30a6\u30f3\u30c8"})})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["\u30a2\u30ab\u30a6\u30f3\u30c8\u7528\u306b ",(0,n.jsx)(t.a,{href:"https://cloud.google.com/resource-manager/docs/creating-managing-projects",children:(0,n.jsx)(t.strong,{children:"\u4f5c\u6210\u3055\u308c\u305fCloud Console\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"})})," (\u4f8b\u3001partner-integration-lab)"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"\u8ab2\u91d1\u304c\u6709\u52b9\u306b\u306a\u3063\u3066\u3044\u308b"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Google Cloud SDK ",(0,n.jsx)(t.a,{href:"https://cloud.google.com/sdk/docs/install",children:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u6e08\u307f"})," \u304a\u3088\u3073 ",(0,n.jsx)(t.a,{href:"https://cloud.google.com/sdk/docs/initializing",children:"\u521d\u671f\u5316\u6e08\u307f"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u305f",(0,n.jsx)(t.a,{href:"https://www.python.org/downloads/",children:"Python"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u305f",(0,n.jsx)(t.a,{href:"https://pip.pypa.io/en/stable/installation/",children:"Pip"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"\u624b\u9806",children:"\u624b\u9806"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Data Catalog API\u3092\u6709\u52b9\u306b\u3059\u308b"}),"\n",(0,n.jsx)(t.li,{children:"Teradata Data Catalog \u30b3\u30cd\u30af\u30bf\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"}),"\n",(0,n.jsx)(t.li,{children:"\u5b9f\u884c\u3059\u308b"}),"\n",(0,n.jsx)(t.li,{children:"Teradata Vantage\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u3092Data Catalog\u3067\u63a2\u7d22\u3059\u308b"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"data-catalog-api\u3092\u6709\u52b9\u306b\u3059\u308b",children:"Data Catalog API\u3092\u6709\u52b9\u306b\u3059\u308b"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"http://console.cloud.google.com/",children:"Google"})," \u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u30ed\u30b0\u30aa\u30f3\u3057\u3001\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3 \u30e1\u30cb\u30e5\u30fc\u304b\u3089 ",(0,n.jsx)(t.strong,{children:"APIs & Services"})," \u3092\u9078\u629e\u3057\u3066\u3001 _Library_\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002\u4e0a\u90e8\u306e\u30e1\u30cb\u30e5\u30fc \u30d0\u30fc\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u9078\u629e\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"\u30b0\u30e9\u30d5\u30a3\u30ab\u30eb \u30e6\u30fc\u30b6\u30fc \u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9",src:e(92468).A+"",width:"1150",height:"1125"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["\u691c\u7d22\u30dc\u30c3\u30af\u30b9\u306b ",(0,n.jsx)(t.em,{children:"Data Catalog"})," \u3092\u5165\u529b\u3057\u3001 ",(0,n.jsx)(t.strong,{children:"Google Cloud Data Catalog API"})," \u3092\u30af\u30ea\u30c3\u30af\u3057\u3001 ",(0,n.jsx)(t.strong,{children:"ENABLE"})," \u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"\u30b0\u30e9\u30d5\u30a3\u30ab\u30eb \u30e6\u30fc\u30b6\u30fc \u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9",src:e(38379).A+"",width:"4400",height:"1503"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"teradata-data-catalog-\u30b3\u30cd\u30af\u30bf\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",children:"Teradata Data Catalog \u30b3\u30cd\u30af\u30bf\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"}),"\n",(0,n.jsxs)(t.p,{children:["Teradata Data Catalog \u30b3\u30cd\u30af\u30bf\u306f ",(0,n.jsx)(t.a,{href:"https://github.com/GoogleCloudPlatform/datacatalog-connectors-rdbms/tree/master/google-datacatalog-teradata-connector",children:"GitHub"}),"\u3067\u5229\u7528\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u30b3\u30cd\u30af\u30bf\u306f Python \u3067\u8a18\u8ff0\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3001gcloud\u3092\u8a8d\u8a3c\u3057\u3066\u3001Google\u306e\u30e6\u30fc\u30b6\u30fc\u8a8d\u8a3c\u3067Cloud Platform\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"gcloud auth login\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Google\u306e\u30ed\u30b0\u30a4\u30f3\u30da\u30fc\u30b8\u304c\u958b\u304f\u306e\u3067\u3001Google\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u9078\u629e\u3057\u3001\u6b21\u306e\u30da\u30fc\u30b8\u3067 ",(0,n.jsx)(t.em,{children:"Allow"})," \u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"\u6b21\u306b\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u8a2d\u5b9a\u304c\u307e\u3060\u306e\u5834\u5408\u306f\u8a2d\u5b9a\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"gcloud config set project &lt;project id>\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"virtualenv-\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",children:"virtualenv \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"}),"\n",(0,n.jsxs)(t.p,{children:["Teradata Data Catalog \u30b3\u30cd\u30af\u30bf\u306f\u3001\u5206\u96e2\u3055\u308c\u305fPython\u74b0\u5883\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u306b\u306f\u3001\u307e\u305a ",(0,n.jsx)(t.a,{href:"https://virtualenv.pypa.io/en/latest/",children:"virtualenv"})," \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Windows"})}),"\n",(0,n.jsx)(t.p,{children:"Powershell \u3067\u7ba1\u7406\u8005\u3068\u3057\u3066\u5b9f\u884c\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"pip install virtualenv\nvirtualenv --python python3.6 &lt;your-env>\n&lt;your-env>\\Scripts\\activate\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"MacOS"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",metastring:', role="content-editable emits-gtm-events"',children:"pip install virtualenv\nvirtualenv --python python3.6 &lt;your-env>\nsource &lt;your-env>/bin/activate\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Linux"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",metastring:', role="content-editable emits-gtm-events"',children:"pip install virtualenv\nvirtualenv --python python3.6 &lt;your-env>\nsource &lt;your-env>/bin/activate\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"data-catalog-teradata\u30b3\u30cd\u30af\u30bf\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",children:"Data Catalog Teradata\u30b3\u30cd\u30af\u30bf\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Windows"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"pip.exe install google-datacatalog-teradata-connector\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"MacOS"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",metastring:', role="content-editable emits-gtm-events"',children:"pip install google-datacatalog-teradata-connector\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Linux"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",metastring:', role="content-editable emits-gtm-events"',children:"pip install google-datacatalog-teradata-connector\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"\u74b0\u5883\u5909\u6570\u306e\u8a2d\u5b9a",children:"\u74b0\u5883\u5909\u6570\u306e\u8a2d\u5b9a"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",metastring:', id="gcp_env_var", role="content-editable emits-gtm-events"',children:"export GOOGLE_APPLICATION_CREDENTIALS=&lt;google_credentials_file>\nexport TERADATA2DC_DATACATALOG_PROJECT_ID=&lt;google_cloud_project_id>\nexport TERADATA2DC_DATACATALOG_LOCATION_ID=&lt;google_cloud_location_id>\nexport TERADATA2DC_TERADATA_SERVER=&lt;teradata_server>\nexport TERADATA2DC_TERADATA_USERNAME=&lt;teradata_username>\nexport TERADATA2DC_TERADATA_PASSWORD=&lt;teradata_password>\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"<google_credential_file>"})," \u306b\u306f\u3001\u30b5\u30fc\u30d3\u30b9\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30ad\u30fc\uff08json\u30d5\u30a1\u30a4\u30eb\uff09\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(t.h3,{id:"run",children:"Run"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"google-datacatalog-teradata-connector"})," \u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u3001Vantage \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3078\u306e\u30a8 \u30f3\u30c8\u30ea\u30dd\u30a4\u30f3\u30c8\u3092\u78ba\u7acb\u3057\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",metastring:', id="gcp_data_catalog_first_run" role="content-editable emits-gtm-events"',children:"google-datacatalog-teradata-connector \\\n  --datacatalog-project-id=$TERADATA2DC_DATACATALOG_PROJECT_ID \\\n  --datacatalog-location-id=$TERADATA2DC_DATACATALOG_LOCATION_ID \\\n  --teradata-host=$TERADATA2DC_TERADATA_SERVER \\\n  --teradata-user=$TERADATA2DC_TERADATA_USERNAME \\\n  --teradata-pass=$TERADATA2DC_TERADATA_PASSWORD\n"})}),"\n",(0,n.jsx)(t.p,{children:"google-datacatalog-teradata-connector\u30b3\u30de\u30f3\u30c9\u306e\u51fa\u529b\u4f8b\u3067\u3059\u3002"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'INFO:root:\n==============Starting CLI===============\nINFO:root:This SQL connector does not implement the user defined datacatalog-entry-resource-url-prefix\nINFO:root:This SQL connector uses the default entry resoure URL\n\n============Start teradata-to-datacatalog===========\n\n==============Scrape metadata===============\nINFO:root:Scrapping metadata from connection_args\n\n1 table containers ready to be ingested...\n\n==============Prepare metadata===============\n\n--\x3e database: Gcpuser\n37 tables ready to be ingested...\n\n==============Ingest metadata===============\n\nDEBUG:google.auth._default:Checking /Users/Teradata/Apps/Cloud/GCP/teradata2dc-credentials.json for explicit credentials as part of auth process...\nINFO:root:Starting to clean up the catalog...\nDEBUG:google.auth.transport.requests:Making request: POST https://oauth2.googleapis.com/token\nDEBUG:urllib3.connectionpool:Starting new HTTPS connection (1): oauth2.googleapis.com:443\nDEBUG:urllib3.connectionpool:https://oauth2.googleapis.com:443 "POST /token HTTP/1.1" 200 None\nINFO:root:0 entries that match the search query exist in Data Catalog!\nINFO:root:Looking for entries to be deleted...\nINFO:root:0 entries will be deleted.\n\nStarting to ingest custom metadata...\n\nDEBUG:google.auth._default:Checking /Users/Teradata/Apps/Cloud/GCP/teradata2dc-credentials.json for explicit credentials as part of auth process...\nINFO:root:Starting the ingestion flow...\nDEBUG:google.auth.transport.requests:Making request: POST https://oauth2.googleapis.com/token\nDEBUG:urllib3.connectionpool:Starting new HTTPS connection (1): oauth2.googleapis.com:443\nDEBUG:urllib3.connectionpool:https://oauth2.googleapis.com:443 "POST /token HTTP/1.1" 200 None\nINFO:root:Tag Template created: projects/partner-integration-lab/locations/us-west1/tagTemplates/teradata_database_metadata\nINFO:root:Tag Template created: projects/partner-integration-lab/locations/us-west1/tagTemplates/teradata_table_metadata\nINFO:root:Tag Template created: projects/partner-integration-lab/locations/us-west1/tagTemplates/teradata_column_metadata\nINFO:root:Entry Group created: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata\nINFO:root:1/38\nINFO:root:Entry does not exist: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata/entries/gcpuser\nINFO:root:Entry created: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata/entries/gcpuser\nINFO:root: ^ [database] 34.105.107.155/gcpuser\nINFO:root:Starting the upsert tags step\nINFO:root:Processing Tag from Template: projects/partner-integration-lab/locations/us-west1/tagTemplates/teradata_database_metadata ...\nINFO:root:Tag created: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata/entries/gcpuser/tags/CWHNiGQeQmPT\nINFO:root:2/38\nINFO:root:Entry does not exist: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata/entries/gcpuser_Categories\nINFO:root:Entry created: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata/entries/gcpuser_Categories\nINFO:root: ^ [table] 34.105.107.155/gcpuser/Categories\nINFO:root:Starting the upsert tags step\nINFO:root:Processing Tag from Template: projects/partner-integration-lab/locations/us-west1/tagTemplates/teradata_table_metadata ...\nINFO:root:Tag created: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata/entries/gcpuser_Categories/tags/Ceij5G9t915o\nINFO:root:38/38\nINFO:root:Entry does not exist: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata/entries/gcpuser_tablesv_instantiated_latest\nINFO:root:Entry created: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata/entries/gcpuser_tablesv_instantiated_latest\nINFO:root: ^ [table] 34.105.107.155/gcpuser/tablesv_instantiated_latest\nINFO:root:Starting the upsert tags step\nINFO:root:Processing Tag from Template: projects/partner-integration-lab/locations/us-west1/tagTemplates/teradata_table_metadata ...\nINFO:root:Tag created: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata/entries/gcpuser_tablesv_instantiated_latest/tags/Ceij5G9t915o\nINFO:root:\n============End teradata-to-datacatalog============\n'})}),"\n",(0,n.jsx)(t.h3,{id:"teradata-vantage\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u3092data-catalog\u3067\u63a2\u7d22\u3059\u308b",children:"Teradata Vantage\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u3092Data Catalog\u3067\u63a2\u7d22\u3059\u308b"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://console.cloud.google.com/datacatalog",children:"Data Catalog"})," \u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u79fb\u52d5\u3057\u3001 ",(0,n.jsx)(t.strong,{children:"Projects"}),"\u306e\u4e0b\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8 (\u3064\u307e\u308a\u3001partner-integration-lab) \u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002Teradata \u30c6\u30fc\u30d6\u30eb\u304c\u53f3\u5074\u306e\u30d1\u30cd\u30eb\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"\u30b0\u30e9\u30d5\u30a3\u30ab\u30eb \u30e6\u30fc\u30b6\u30fc \u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9",src:e(17250).A+"",width:"1852",height:"1127"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"\u8208\u5473\u306e\u3042\u308b\u30c6\u30fc\u30d6\u30eb (CITY_LEVEL_TRANS \u306a\u3069) \u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u3053\u306e\u30c6\u30fc\u30d6\u30eb\u306b\u95a2\u3059\u308b\u30e1\u30bf\u30c7\u30fc\u30bf\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"\u30b0\u30e9\u30d5\u30a3\u30ab\u30eb \u30e6\u30fc\u30b6\u30fc \u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9",src:e(81785).A+"",width:"1596",height:"848"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"\u30af\u30ea\u30fc\u30f3\u30a2\u30c3\u30d7-\u30aa\u30d7\u30b7\u30e7\u30f3",children:"\u30af\u30ea\u30fc\u30f3\u30a2\u30c3\u30d7 (\u30aa\u30d7\u30b7\u30e7\u30f3)"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["\u30c7\u30fc\u30bf\u30ab\u30bf\u30ed\u30b0\u304b\u3089\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u30af\u30ea\u30fc\u30f3\u30a2\u30c3\u30d7\u3057\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u306b\u306f\u3001",(0,n.jsx)(t.a,{href:"https://github.com/GoogleCloudPlatform/datacatalog-connectors-rdbms/blob/master/google-datacatalog-teradata-connector/tools/cleanup_datacatalog.py",children:"https://github.com/GoogleCloudPlatform/datacatalog-connectors-rdbms/blob/master/google-datacatalog-teradata-connector/tools/cleanup_datacatalog.py"})," \u3092\u30ed\u30fc\u30ab\u30eb \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u30b3\u30d4\u30fc\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"\u3053\u306e\u30d5\u30a1\u30a4\u30eb\u304c\u3042\u308b\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u79fb\u52d5\u3057\u3001\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3059\u308b\u3002"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",metastring:', role="content-editable emits-gtm-events"',children:"python cleanup_datacatalog.py --datacatalog-project-ids=$TERADATA2DC_DATACATALOG_PROJECT_ID\n"})}),"\n"]}),"\n"]})]})}function g(a={}){const{wrapper:t}={...(0,o.R)(),...a.components};return t?(0,n.jsx)(t,{...a,children:(0,n.jsx)(c,{...a})}):c(a)}},13597:(a,t,e)=>{e.d(t,{A:()=>n});const n=e.p+"assets/images/image2-231e97bc307e071f21582e808900193d.png"},92468:(a,t,e)=>{e.d(t,{A:()=>n});const n=e.p+"assets/images/image3-722d67bf21642b5c8861b9bba23dd253.png"},38379:(a,t,e)=>{e.d(t,{A:()=>n});const n=e.p+"assets/images/image4-a0d9d7c34ff24a43d22bbef1fb7c3347.png"},17250:(a,t,e)=>{e.d(t,{A:()=>n});const n=e.p+"assets/images/image5-5fbc9d3ce64c444855f5246dcea902f2.png"},81785:(a,t,e)=>{e.d(t,{A:()=>n});const n=e.p+"assets/images/image6-fa917a94837adb3a162505612bf61511.png"},28453:(a,t,e)=>{e.d(t,{R:()=>s,x:()=>l});var n=e(96540);const o={},r=n.createContext(o);function s(a){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof a?a(t):{...t,...a}}),[t,a])}function l(a){let t;return t=a.disableParentContext?"function"==typeof a.components?a.components(o):a.components||o:s(a.components),n.createElement(r.Provider,{value:t},a.children)}}}]);
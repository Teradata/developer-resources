"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[3786],{63975:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=t(74848),n=t(28453);const i={id:"select-the-right-data-ingestion-tools-for-teradata-vantage",sidebar_position:2,author:"Krutik Pathak",email:"krutik.pathak@teradata.com",page_last_update:"2024 \u5e74 2 \u6708 29 \u65e5",description:"Teradata Vantage \u306e\u3055\u307e\u3056\u307e\u306a\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u3067\u4f7f\u7528\u3059\u308b\u30c7\u30fc\u30bf \u30a4\u30f3\u30b8\u30a7\u30b9\u30c8 \u30c4\u30fc\u30eb\u306e\u63a8\u5968\u4e8b\u9805",keywords:["data ingestion","teradata","nos","tpt","bteq","querygrid","airbyte","object store","saas","vantage","apache","spark","presto","oracle","Flow"]},d="Teradata Vantage\u306b\u9069\u3057\u305f\u30c7\u30fc\u30bf\u53d6\u308a\u8fbc\u307f\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u9078\u629e\u3059\u308b",s={id:"manage-data/select-the-right-data-ingestion-tools-for-teradata-vantage",title:"Teradata Vantage\u306b\u9069\u3057\u305f\u30c7\u30fc\u30bf\u53d6\u308a\u8fbc\u307f\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u9078\u629e\u3059\u308b",description:"Teradata Vantage \u306e\u3055\u307e\u3056\u307e\u306a\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u3067\u4f7f\u7528\u3059\u308b\u30c7\u30fc\u30bf \u30a4\u30f3\u30b8\u30a7\u30b9\u30c8 \u30c4\u30fc\u30eb\u306e\u63a8\u5968\u4e8b\u9805",source:"@site/i18n/ja/docusaurus-plugin-content-docs-quickstarts/current/manage-data/select-the-right-data-ingestion-tools-for-teradata-vantage.md",sourceDirName:"manage-data",slug:"/manage-data/select-the-right-data-ingestion-tools-for-teradata-vantage",permalink:"/pr-preview/pr-151/ja/quickstarts/manage-data/select-the-right-data-ingestion-tools-for-teradata-vantage",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"select-the-right-data-ingestion-tools-for-teradata-vantage",sidebar_position:2,author:"Krutik Pathak",email:"krutik.pathak@teradata.com",page_last_update:"2024 \u5e74 2 \u6708 29 \u65e5",description:"Teradata Vantage \u306e\u3055\u307e\u3056\u307e\u306a\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u3067\u4f7f\u7528\u3059\u308b\u30c7\u30fc\u30bf \u30a4\u30f3\u30b8\u30a7\u30b9\u30c8 \u30c4\u30fc\u30eb\u306e\u63a8\u5968\u4e8b\u9805",keywords:["data ingestion","teradata","nos","tpt","bteq","querygrid","airbyte","object store","saas","vantage","apache","spark","presto","oracle","Flow"]},sidebar:"tutorialSidebar",previous:{title:"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u4fdd\u5b58\u3055\u308c\u305f\u30af\u30a8\u30ea\u30fc\u30c7\u30fc\u30bf",permalink:"/pr-preview/pr-151/ja/quickstarts/manage-data/nos"},next:{title:"Teradata Vantage \u3067 Apache Airflow \u3092\u4f7f\u7528\u3059\u308b",permalink:"/pr-preview/pr-151/ja/quickstarts/manage-data/airflow"}},l={},o=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u3092\u542b\u3080\u5927\u91cf\u306e\u53d6\u308a\u8fbc\u307f",id:"\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u3092\u542b\u3080\u5927\u91cf\u306e\u53d6\u308a\u8fbc\u307f",level:3},{value:"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30b9\u30c8\u30ec\u30fc\u30b8\u304b\u3089\u30c7\u30fc\u30bf\u3092\u53d6\u308a\u8fbc\u3080",id:"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30b9\u30c8\u30ec\u30fc\u30b8\u304b\u3089\u30c7\u30fc\u30bf\u3092\u53d6\u308a\u8fbc\u3080",level:3},{value:"\u30ed\u30fc\u30ab\u30eb\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u30c7\u30fc\u30bf\u3092\u53d6\u308a\u8fbc\u3080",id:"\u30ed\u30fc\u30ab\u30eb\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u30c7\u30fc\u30bf\u3092\u53d6\u308a\u8fbc\u3080",level:3},{value:"SaaS\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304b\u3089\u30c7\u30fc\u30bf\u3092\u53d6\u308a\u8fbc\u3080",id:"saas\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304b\u3089\u30c7\u30fc\u30bf\u3092\u53d6\u308a\u8fbc\u3080",level:3},{value:"\u4ed6\u306e\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u30c7\u30fc\u30bf\u3092\u7d71\u5408\u30af\u30a8\u30ea\u30fc\u51e6\u7406\u306b\u4f7f\u7528\u3059\u308b",id:"\u4ed6\u306e\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u30c7\u30fc\u30bf\u3092\u7d71\u5408\u30af\u30a8\u30ea\u30fc\u51e6\u7406\u306b\u4f7f\u7528\u3059\u308b",level:3},{value:"\u307e\u3068\u3081",id:"\u307e\u3068\u3081",level:2},{value:"\u3055\u3089\u306b\u8a73\u3057\u304f",id:"\u3055\u3089\u306b\u8a73\u3057\u304f",level:2}];function c(a){const e={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,n.R)(),...a.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"teradata-vantage\u306b\u9069\u3057\u305f\u30c7\u30fc\u30bf\u53d6\u308a\u8fbc\u307f\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u9078\u629e\u3059\u308b",children:"Teradata Vantage\u306b\u9069\u3057\u305f\u30c7\u30fc\u30bf\u53d6\u308a\u8fbc\u307f\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u9078\u629e\u3059\u308b"}),"\n",(0,r.jsx)(e.h2,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,r.jsx)(e.p,{children:"\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001\u30c7\u30fc\u30bf\u53d6\u308a\u8fbc\u307f\u306b\u95a2\u3059\u308b\u3055\u307e\u3056\u307e\u306a\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u306e\u6982\u8981\u3092\u8aac\u660e\u3057\u307e\u3059\u3002\u5229\u7528\u53ef\u80fd\u306a\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u30ea\u30b9\u30c8\u3057\u3001\u5404\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u306b\u6700\u9069\u306a\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u63a8\u5968\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u3092\u542b\u3080\u5927\u91cf\u306e\u53d6\u308a\u8fbc\u307f",children:"\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u3092\u542b\u3080\u5927\u91cf\u306e\u53d6\u308a\u8fbc\u307f"}),"\n",(0,r.jsx)(e.p,{children:"\u5229\u7528\u53ef\u80fd\u306a\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://docs.teradata.com/r/Teradata-Parallel-Transporter-Application-Programming-Interface-Programmer-Guide-17.20",children:"Teradata Parallel Transporter API"}),"\u3092\u4f7f\u7528\u3059\u308b"]}),"\n",(0,r.jsxs)(e.li,{children:["\u30c7\u30fc\u30bf\u3092\u30aa\u30d6\u30b8\u30a7\u30af\u30c8 \u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u3057\u3001 ",(0,r.jsx)(e.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide-17.20/Welcome-to-Native-Object-Store",children:"Teradata Native Object Store (NOS)"}),"\u3092\u4f7f\u7528\u3057\u3066\u53d6\u308a\u8fbc\u307f\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://docs.teradata.com/r/Teradata-Parallel-Transporter-User-Guide/June-2022/Introduction-to-Teradata-PT",children:"Teradata Parallel Transporter (TPT)"})," \u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u30e6\u30fc\u30c6\u30a3\u30ea\u30c6\u30a3\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://docs.teradata.com/r/Teradata-Query-Service-Installation-Configuration-and-Usage-Guide-for-Customers/April-2022/Using-the-Query-Service-APIs/Getting-Started",children:"Teradata Query Service"})," - REST API \u3092\u4f7f\u7528\u3057\u3066\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u5185\u3067 SQL \u30b9\u30c6\u30fc\u30c8\u30e1\u30f3\u30c8\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(e.li,{children:"JDBC (Java)\u3001teradatasql (Python)\u3001Node.js \u30c9\u30e9\u30a4\u30d0\u3001ODBC\u3001.NET \u30c7\u30fc\u30bf \u30d7\u30ed\u30d0\u30a4\u30c0\u306a\u3069\u306e Teradata \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9 \u30c9\u30e9\u30a4\u30d0\u3092\u4f7f\u7528\u3059\u308b\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"Teradata Parallel Transport API \u306f\u901a\u5e38\u3001\u9ad8\u30b9\u30eb\u30fc\u30d7\u30c3\u30c8\u3068\u6700\u5c0f\u306e\u30ec\u30a4\u30c6\u30f3\u30b7\u3092\u63d0\u4f9b\u3059\u308b\u6700\u3082\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u9ad8\u3044\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3067\u3059\u30021 \u79d2\u3042\u305f\u308a\u6570\u4e07\u884c\u3092\u53d6\u308a\u8fbc\u3080\u5fc5\u8981\u304c\u3042\u308a\u3001C \u8a00\u8a9e\u306e\u4f7f\u7528\u306b\u6163\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u3053\u306e API \u3092\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u30a4\u30d9\u30f3\u30c8\u6570\u304c 1 \u79d2\u3042\u305f\u308a\u6570\u5343\u5358\u4f4d\u306e\u5834\u5408\u306f\u3001Teradata \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9 \u30c9\u30e9\u30a4\u30d0\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002JDBC\u3001Python \u306a\u3069\u306e\u6700\u3082\u4e00\u822c\u7684\u306a\u30c9\u30e9\u30a4\u30d0\u3067\u4f7f\u7528\u3067\u304d\u308b Fastload \u30d7\u30ed\u30c8\u30b3\u30eb\u306e\u4f7f\u7528\u3092\u691c\u8a0e\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u30c9\u30e9\u30a4\u30d0 \u30e9\u30a4\u30d6\u30e9\u30ea\u3078\u306e\u4f9d\u5b58\u95a2\u4fc2\u3092\u7ba1\u7406\u3057\u305f\u304f\u306a\u3044\u5834\u5408\u306f\u3001Query Service \u3092\u4f7f\u7528\u3057\u307e\u3059\u3002Query Service \u306f\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3068\u306e\u901a\u4fe1\u306b\u901a\u5e38\u306e\u30c9\u30e9\u30a4\u30d0 \u30d7\u30ed\u30c8\u30b3\u30eb\u3092\u4f7f\u7528\u3059\u308b\u305f\u3081\u3001\u3053\u306e\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u306e\u30b9\u30eb\u30fc\u30d7\u30c3\u30c8\u306f\u3001JDBC \u306a\u3069\u306e\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9 \u30c9\u30e9\u30a4\u30d0\u304c\u63d0\u4f9b\u3059\u308b\u30b9\u30eb\u30fc\u30d7\u30c3\u30c8\u3068\u540c\u7b49\u3067\u3059\u3002\u30d9\u30f3\u30c0\u30fc\u3067\u3042\u308a\u3001\u88fd\u54c1\u3092 Teradata \u3068\u7d71\u5408\u3059\u308b\u3053\u3068\u3092\u691c\u8a0e\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u3059\u3079\u3066\u306e Teradata \u306e\u9867\u5ba2\u304c\u30b5\u30a4\u30c8\u3067 Query Service \u3092\u6709\u52b9\u306b\u3057\u3066\u3044\u308b\u308f\u3051\u3067\u306f\u306a\u3044\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u304c\u3088\u308a\u9ad8\u3044\u30ec\u30a4\u30c6\u30f3\u30b7\u3092\u8a31\u5bb9\u3067\u304d\u308b\u5834\u5408\u3001\u30a4\u30d9\u30f3\u30c8\u3092\u30aa\u30d6\u30b8\u30a7\u30af\u30c8 \u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u3057\u3001NOS \u3092\u4f7f\u7528\u3057\u3066\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u53d6\u308b\u3053\u3068\u304c\u9069\u5207\u306a\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u3059\u3002\u3053\u306e\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3067\u306f\u3001\u901a\u5e38\u3001\u6700\u5c0f\u9650\u306e\u52b4\u529b\u3057\u304b\u5fc5\u8981\u3042\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30b9\u30c8\u30ec\u30fc\u30b8\u304b\u3089\u30c7\u30fc\u30bf\u3092\u53d6\u308a\u8fbc\u3080",children:"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30b9\u30c8\u30ec\u30fc\u30b8\u304b\u3089\u30c7\u30fc\u30bf\u3092\u53d6\u308a\u8fbc\u3080"}),"\n",(0,r.jsx)(e.p,{children:"\u5229\u7528\u53ef\u80fd\u306a\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://docs.teradata.com/r/Teradata-VantageCloud-Lake/Loading-Data/Introduction-to-Flow",children:"\u30d5\u30ed\u30fc (VantageCloud Lake \u306e\u307f)"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide-17.20/Welcome-to-Native-Object-Store",children:"Teradata \u30cd\u30a4\u30c6\u30a3\u30d6 \u30aa\u30d6\u30b8\u30a7\u30af\u30c8 \u30b9\u30c8\u30a2 (NOS)"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://docs.teradata.com/r/Teradata-Parallel-Transporter-User-Guide/June-2022/Introduction-to-Teradata-PT",children:"Teradata Parallel Transporter (TPT)"})}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"Flow \u306f\u3001\u30aa\u30d6\u30b8\u30a7\u30af\u30c8 \u30b9\u30c8\u30ec\u30fc\u30b8\u304b\u3089 VantageCloud Lake \u306b\u30c7\u30fc\u30bf\u3092\u53d6\u308a\u8fbc\u3080\u305f\u3081\u306e\u63a8\u5968\u3055\u308c\u308b\u53d6\u308a\u8fbc\u307f\u30e1\u30ab\u30cb\u30ba\u30e0\u3067\u3059\u3002\u4ed6\u306e\u3059\u3079\u3066\u306e Teradata Vantage \u30a8\u30c7\u30a3\u30b7\u30e7\u30f3\u3067\u306f\u3001Teradata NOS \u304c\u63a8\u5968\u3055\u308c\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u3059\u3002NOS \u306f\u3001\u3059\u3079\u3066\u306e Teradata \u30ce\u30fc\u30c9\u3092\u6d3b\u7528\u3057\u3066\u53d6\u308a\u8fbc\u307f\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002Teradata Parallel Transporter (TPT) \u306f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u5074\u3067\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002NOS \u304b\u3089\u30aa\u30d6\u30b8\u30a7\u30af\u30c8 \u30b9\u30c8\u30ec\u30fc\u30b8\u3078\u306e\u63a5\u7d9a\u304c\u306a\u3044\u5834\u5408\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"\u30ed\u30fc\u30ab\u30eb\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u30c7\u30fc\u30bf\u3092\u53d6\u308a\u8fbc\u3080",children:"\u30ed\u30fc\u30ab\u30eb\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u30c7\u30fc\u30bf\u3092\u53d6\u308a\u8fbc\u3080"}),"\n",(0,r.jsx)(e.p,{children:"\u5229\u7528\u53ef\u80fd\u306a\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://docs.teradata.com/r/Teradata-Parallel-Transporter-User-Guide/June-2022/Introduction-to-Teradata-PT",children:"Teradata Parallel Transporter (TPT)"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_Lake_VMware/Basic-Teradata-Query-Reference-17.20/Introduction-to-BTEQ",children:"BTEQ"})}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"TPT \u306f\u3001\u30ed\u30fc\u30ab\u30eb \u30d5\u30a1\u30a4\u30eb\u304b\u3089\u30c7\u30fc\u30bf\u3092\u30ed\u30fc\u30c9\u3059\u308b\u305f\u3081\u306e\u63a8\u5968\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u3059\u3002TPT \u306f\u30b9\u30b1\u30fc\u30e9\u30d3\u30ea\u30c6\u30a3\u3068\u4e26\u5217\u51e6\u7406\u306b\u6700\u9069\u5316\u3055\u308c\u3066\u3044\u308b\u305f\u3081\u3001\u5229\u7528\u53ef\u80fd\u306a\u3059\u3079\u3066\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u4e2d\u3067\u6700\u9ad8\u306e\u30b9\u30eb\u30fc\u30d7\u30c3\u30c8\u3092\u5b9f\u73fe\u3057\u307e\u3059\u3002BTEQ \u306f\u3001\u53d6\u308a\u8fbc\u307f\u30d7\u30ed\u30bb\u30b9\u3067\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u5fc5\u8981\u306a\u5834\u5408\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002\u4ed6\u306e\u3059\u3079\u3066\u306e\u53d6\u308a\u8fbc\u307f\u30d1\u30a4\u30d7\u30e9\u30a4\u30f3\u304c BTEQ \u3067\u5b9f\u884c\u3055\u308c\u308b\u5834\u5408\u3082\u3001BTEQ \u3092\u5f15\u304d\u7d9a\u304d\u4f7f\u7528\u3059\u308b\u306e\u304c\u5408\u7406\u7684\u3067\u3059\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"saas\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304b\u3089\u30c7\u30fc\u30bf\u3092\u53d6\u308a\u8fbc\u3080",children:"SaaS\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304b\u3089\u30c7\u30fc\u30bf\u3092\u53d6\u308a\u8fbc\u3080"}),"\n",(0,r.jsx)(e.p,{children:"\u5229\u7528\u53ef\u80fd\u306a\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://airbyte.com/",children:"Airbyte"}),"\u3001 ",(0,r.jsx)(e.a,{href:"https://precog.com/",children:"Precog"}),"\u3001 ",(0,r.jsx)(e.a,{href:"https://nexla.com/",children:"Nexla"}),"\u3001 ",(0,r.jsx)(e.a,{href:"https://fivetran.com/",children:"Fivetran"}),"\u306a\u3069\u306e\u8907\u6570\u306e\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30c4\u30fc\u30eb"]}),"\n",(0,r.jsxs)(e.li,{children:["SaaS\u30a2\u30d7\u30ea\u304b\u3089\u30ed\u30fc\u30ab\u30eb\u30d5\u30a1\u30a4\u30eb\u306b\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3057\u3001",(0,r.jsx)(e.a,{href:"https://docs.teradata.com/r/Teradata-Parallel-Transporter-User-Guide/June-2022/Introduction-to-Teradata-PT",children:"Teradata Parallel Transporter (TPT)"}),"\u3092\u4f7f\u7528\u3057\u3066\u53d6\u308a\u8fbc\u307f\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:["SaaS \u30a2\u30d7\u30ea\u304b\u3089\u30aa\u30d6\u30b8\u30a7\u30af\u30c8 \u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3057\u3001 ",(0,r.jsx)(e.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide-17.20/Welcome-to-Native-Object-Store",children:"Teradata Native Object Store (NOS)"}),"\u3092\u4f7f\u7528\u3057\u3066\u53d6\u308a\u8fbc\u307f\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3 \u30c4\u30fc\u30eb\u306f\u901a\u5e38\u3001SaaS \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304b\u3089 Teradata Vantage \u306b\u30c7\u30fc\u30bf\u3092\u79fb\u52d5\u3059\u308b\u306e\u306b\u9069\u3057\u305f\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u3059\u3002\u3053\u308c\u3089\u306e\u30c4\u30fc\u30eb\u306f\u30c7\u30fc\u30bf \u30bd\u30fc\u30b9\u3092\u5e45\u5e83\u304f\u30b5\u30dd\u30fc\u30c8\u3057\u3001\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3084\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3055\u308c\u305f\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306e\u4fdd\u5b58\u306a\u3069\u306e\u4e2d\u9593\u30b9\u30c6\u30c3\u30d7\u3092\u7ba1\u7406\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"\u4ed6\u306e\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u30c7\u30fc\u30bf\u3092\u7d71\u5408\u30af\u30a8\u30ea\u30fc\u51e6\u7406\u306b\u4f7f\u7528\u3059\u308b",children:"\u4ed6\u306e\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u30c7\u30fc\u30bf\u3092\u7d71\u5408\u30af\u30a8\u30ea\u30fc\u51e6\u7406\u306b\u4f7f\u7528\u3059\u308b"}),"\n",(0,r.jsx)(e.p,{children:"\u5229\u7528\u53ef\u80fd\u306a\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_Lake_VMware/QueryGridTM-Installation-and-User-Guide-3.05",children:"Teradata QueryGrid"})}),"\n",(0,r.jsxs)(e.li,{children:["\u4ed6\u306e\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u304b\u3089\u30ed\u30fc\u30ab\u30eb\u30d5\u30a1\u30a4\u30eb\u306b\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3057\u3001 ",(0,r.jsx)(e.a,{href:"https://docs.teradata.com/r/Teradata-Parallel-Transporter-User-Guide/June-2022/Introduction-to-Teradata-PT",children:"Teradata Parallel Transporter (TPT)"}),"\u3092\u4f7f\u7528\u3057\u3066\u53d6\u308a\u8fbc\u307f\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:["\u4ed6\u306e\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u304b\u3089\u30aa\u30d6\u30b8\u30a7\u30af\u30c8 \u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3057\u3001 ",(0,r.jsx)(e.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide-17.20/Welcome-to-Native-Object-Store",children:"Teradata Native Object Store (NOS)"}),"\u3092\u4f7f\u7528\u3057\u3066\u53d6\u308a\u8fbc\u307f\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"QueryGrid \u306f\u3001\u7570\u306a\u308b\u30b7\u30b9\u30c6\u30e0/\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u9593\u3067\u9650\u3089\u308c\u305f\u91cf\u306e\u30c7\u30fc\u30bf\u3092\u79fb\u52d5\u3059\u308b\u305f\u3081\u306e\u63a8\u5968\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u3059\u3002\u3053\u308c\u306b\u306f\u3001Vantage \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3001Apache Spark\u3001Oracle\u3001Presto \u306a\u3069\u5185\u3067\u306e\u79fb\u52d5\u304c\u542b\u307e\u308c\u307e\u3059\u3002\u540c\u671f\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3082\u306e\u304c SQL \u3067\u8868\u73fe\u3067\u304d\u308b\u8907\u96d1\u306a\u6761\u4ef6\u3067\u8a18\u8ff0\u3055\u308c\u3066\u3044\u308b\u72b6\u6cc1\u306b\u7279\u306b\u9069\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u307e\u3068\u3081",children:"\u307e\u3068\u3081"}),"\n",(0,r.jsx)(e.p,{children:"\u4eca\u56de\u306f\u3001\u3055\u307e\u3056\u307e\u306a\u30c7\u30fc\u30bf\u53d6\u308a\u8fbc\u307f\u306e\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u3092\u691c\u8a0e\u3057\u3001\u5404\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u3067\u5229\u7528\u53ef\u80fd\u306a\u30c4\u30fc\u30eb\u306e\u30ea\u30b9\u30c8\u3092\u63d0\u4f9b\u3057\u3001\u3055\u307e\u3056\u307e\u306a\u30b7\u30ca\u30ea\u30aa\u306b\u63a8\u5968\u3055\u308c\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u7279\u5b9a\u3057\u307e\u3057\u305f\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u3055\u3089\u306b\u8a73\u3057\u304f",children:"\u3055\u3089\u306b\u8a73\u3057\u304f"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"/pr-preview/pr-151/ja/quickstarts/manage-data/nos",children:"NOS\u3092\u4f7f\u7528\u3057\u3066\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u4fdd\u5b58\u3055\u308c\u305f\u30c7\u30fc\u30bf\u3092\u7167\u4f1a\u3059\u308b"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"/pr-preview/pr-151/ja/quickstarts/manage-data/run-bulkloads-efficiently-with-teradata-parallel-transporter",children:"Teradata Parallel Transporter\u3092\u4f7f\u7528\u3057\u305f\u5de8\u5927\u306a\u30c7\u30fc\u30bf\u306e\u30d0\u30eb\u30af\u30ed\u30fc\u30c9"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_Lake_VMware/QueryGridTM-Installation-and-User-Guide-3.05",children:"Teradata QueryGrid"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"/pr-preview/pr-151/ja/quickstarts/manage-data/use-airbyte-to-load-data-from-external-sources-to-teradata-vantage",children:"Airbyte \u3092\u4f7f\u7528\u3057\u3066\u5916\u90e8\u30bd\u30fc\u30b9\u304b\u3089 Teradata Vantage \u306b\u30c7\u30fc\u30bf\u3092\u30ed\u30fc\u30c9\u3059\u308b\u65b9\u6cd5"})}),"\n"]}),"\n"]})]})}function h(a={}){const{wrapper:e}={...(0,n.R)(),...a.components};return e?(0,r.jsx)(e,{...a,children:(0,r.jsx)(c,{...a})}):c(a)}},28453:(a,e,t)=>{t.d(e,{R:()=>d,x:()=>s});var r=t(96540);const n={},i=r.createContext(n);function d(a){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function s(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(n):a.components||n:d(a.components),r.createElement(i.Provider,{value:e},a.children)}}}]);
"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[8956],{11319:(e,n,a)=>{a.d(n,{Ay:()=>o,RM:()=>s});var t=a(74848),r=a(28453);const s=[];function i(e){const n={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,r.R)(),...e.components};return(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["\u3054\u8cea\u554f\u304c\u3042\u308b\u5834\u5408\u3084\u3055\u3089\u306b\u30b5\u30dd\u30fc\u30c8\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001 ",(0,t.jsx)(n.a,{href:"https://support.teradata.com/community",children:"\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u30d5\u30a9\u30fc\u30e9\u30e0"})," \u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u30b5\u30dd\u30fc\u30c8\u3092\u53d7\u3051\u305f\u308a\u3001\u4ed6\u306e\u30b3\u30df\u30e5\u30cb\u30c6\u30a3 \u30e1\u30f3\u30d0\u30fc\u3068\u4ea4\u6d41\u3057\u305f\u308a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},64375:(e,n,a)=>{a.d(n,{Ay:()=>o,RM:()=>s});var t=a(74848),r=a(28453);const s=[];function i(e){const n={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,r.R)(),...e.components};return(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["\u73fe\u5728\u3001 ",(0,t.jsx)(n.a,{href:"https://clearscape.teradata.com/",children:"https://clearscape.teradata.com"}),"\u3067 Vantage \u306e\u30db\u30b9\u30c8\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u7121\u6599\u3067\u5165\u624b\u3067\u304d\u307e\u3059\u3002"]})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},91871:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>S,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var t=a(74848),r=a(28453),s=a(64375),i=a(11319);const o={sidebar_position:12,id:"create-parquet-files-in-object-storage",author:"Obed Vega",email:"obed.vega@teradata.com",page_last_update:"2022 \u5e74 8 \u6708 2 \u65e5",description:"Teradata Vantage Native Object Storage - \u30aa\u30d6\u30b8\u30a7\u30af\u30c8 \u30b9\u30c8\u30ec\u30fc\u30b8\u3078\u306e\u8aad\u307f\u53d6\u308a\u3068\u66f8\u304d\u8fbc\u307f\u3001Vantage \u304a\u3088\u3073\u30aa\u30d6\u30b8\u30a7\u30af\u30c8 \u30b9\u30c8\u30ec\u30fc\u30b8\u7528\u306e\u7d71\u5408 SQL \u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3002",keywords:["data warehouses","compute storage separation","Teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","parquet","Parquet\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3059\u308b"]},c="Vantage\u304b\u3089\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30b9\u30c8\u30a2\u3078\u306eParquet\u30d5\u30a1\u30a4\u30eb\u306e\u4f5c\u6210",d={id:"manage-data/create-parquet-files-in-object-storage",title:"Vantage\u304b\u3089\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30b9\u30c8\u30a2\u3078\u306eParquet\u30d5\u30a1\u30a4\u30eb\u306e\u4f5c\u6210",description:"Teradata Vantage Native Object Storage - \u30aa\u30d6\u30b8\u30a7\u30af\u30c8 \u30b9\u30c8\u30ec\u30fc\u30b8\u3078\u306e\u8aad\u307f\u53d6\u308a\u3068\u66f8\u304d\u8fbc\u307f\u3001Vantage \u304a\u3088\u3073\u30aa\u30d6\u30b8\u30a7\u30af\u30c8 \u30b9\u30c8\u30ec\u30fc\u30b8\u7528\u306e\u7d71\u5408 SQL \u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs-quickstarts/current/manage-data/create-parquet-files-in-object-storage.md",sourceDirName:"manage-data",slug:"/manage-data/create-parquet-files-in-object-storage",permalink:"/pr-preview/pr-158/ja/quickstarts/manage-data/create-parquet-files-in-object-storage",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,id:"create-parquet-files-in-object-storage",author:"Obed Vega",email:"obed.vega@teradata.com",page_last_update:"2022 \u5e74 8 \u6708 2 \u65e5",description:"Teradata Vantage Native Object Storage - \u30aa\u30d6\u30b8\u30a7\u30af\u30c8 \u30b9\u30c8\u30ec\u30fc\u30b8\u3078\u306e\u8aad\u307f\u53d6\u308a\u3068\u66f8\u304d\u8fbc\u307f\u3001Vantage \u304a\u3088\u3073\u30aa\u30d6\u30b8\u30a7\u30af\u30c8 \u30b9\u30c8\u30ec\u30fc\u30b8\u7528\u306e\u7d71\u5408 SQL \u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3002",keywords:["data warehouses","compute storage separation","Teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","parquet","Parquet\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3059\u308b"]},sidebar:"tutorialSidebar",previous:{title:"TPT\u3067\u30c7\u30fc\u30bf\u30ed\u30fc\u30c9",permalink:"/pr-preview/pr-158/ja/quickstarts/manage-data/run-bulkloads-efficiently-with-teradata-parallel-transporter"},next:{title:"dbt\u3092\u4f7f\u7528\u3059\u308bAirflow\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u3092Teradata Vantage\u3092\u4f7f\u3063\u3066\u5b9f\u884c\u3057\u3066\u307f\u308b",permalink:"/pr-preview/pr-158/ja/quickstarts/manage-data/execute-airflow-workflows-that-use-dbt-with-teradata-vantage"}},l={},u=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},...s.RM,{value:"WRITE_NOS \u95a2\u6570\u3092\u4f7f\u7528\u3057\u3066 Parquet \u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002",id:"write_nos-\u95a2\u6570\u3092\u4f7f\u7528\u3057\u3066-parquet-\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u307e\u3059",level:2},{value:"\u307e\u3068\u3081",id:"\u307e\u3068\u3081",level:2},{value:"\u3055\u3089\u306b\u8a73\u3057\u304f",id:"\u3055\u3089\u306b\u8a73\u3057\u304f",level:2},...i.RM];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"vantage\u304b\u3089\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30b9\u30c8\u30a2\u3078\u306eparquet\u30d5\u30a1\u30a4\u30eb\u306e\u4f5c\u6210",children:"Vantage\u304b\u3089\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30b9\u30c8\u30a2\u3078\u306eParquet\u30d5\u30a1\u30a4\u30eb\u306e\u4f5c\u6210"}),"\n",(0,t.jsx)(n.h2,{id:"\u6982\u8981",children:"\u6982\u8981"}),"\n",(0,t.jsx)(n.p,{children:"Native Object Storage (NOS) \u306fCSV\u3001JSON\u3001Parquet\u5f62\u5f0f\u306e\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306a\u3069\u306e\u30d5\u30a1\u30a4\u30eb\u306b\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u30c7\u30fc\u30bf\u3092\u7167\u4f1a\u3059\u308b\u305f\u3081\u306eVantage \u6a5f\u80fd\u3067\u3059\u3002\n\u3053\u308c\u3089\u306fAWS S3\u3001Google GCS\u3001Azure Blob\u3084\u30aa\u30f3\u30d7\u30ec\u30df\u30b9\u306eS3\u4e92\u63db\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8 \u30b9\u30c8\u30ec\u30fc\u30b8\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002\n\u3053\u308c\u306f\u3001\u30c7\u30fc\u30bf \u30d1\u30a4\u30d7\u30e9\u30a4\u30f3\u3092\u69cb\u7bc9\u305b\u305a\u306b\u30c7\u30fc\u30bf\u3092\u63a2\u7d22\u3057\u3001Vantage \u306b\u53d6\u308a\u8fbc\u3080\u30b7\u30ca\u30ea\u30aa\u3067\u5f79\u7acb\u3061\u307e\u3059\u3002\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001Parquet \u30d5\u30a1\u30a4\u30eb\u5f62\u5f0f\u3092\u4f7f\u7528\u3057\u3066\u3001Vantage \u304b\u3089\u30aa\u30d6\u30b8\u30a7\u30af\u30c8 \u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u30c7\u30fc\u30bf\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,t.jsx)(n.p,{children:"Teradata Vantage \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002NOS \u306f\u3001\u30d0\u30fc\u30b8\u30e7\u30f3 17.10 \u4ee5\u964d\u3001Vantage Express \u304b\u3089 Developer\u3001DYI\u3001Vantage as a Service \u307e\u3067\u306e\u3059\u3079\u3066\u306e Vantage \u30a8\u30c7\u30a3\u30b7\u30e7\u30f3\u3067\u6709\u52b9\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306f\u3001S3 AWS \u30aa\u30d6\u30b8\u30a7\u30af\u30c8 \u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u57fa\u3065\u3044\u3066\u3044\u307e\u3059\u3002\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u5b8c\u4e86\u3059\u308b\u306b\u306f\u3001\u66f8\u304d\u8fbc\u307f\u6a29\u9650\u3092\u6301\u3064\u72ec\u81ea\u306e S3 \u30d0\u30b1\u30c3\u30c8\u304c\u5fc5\u8981\u3067\u3059\u3002"})}),"\n",(0,t.jsx)(s.Ay,{}),"\n",(0,t.jsx)(n.h2,{id:"write_nos-\u95a2\u6570\u3092\u4f7f\u7528\u3057\u3066-parquet-\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u307e\u3059",children:"WRITE_NOS \u95a2\u6570\u3092\u4f7f\u7528\u3057\u3066 Parquet \u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"WRITE_NOS"})," \u3092\u4f7f\u7528\u3059\u308b\u3068\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30c6\u30fc\u30d6\u30eb\u307e\u305f\u306f\u30af\u30a8\u30ea\u30fc\u306e\u7d50\u679c\u3092\u9078\u629e\u3057\u305f\u307e\u305f\u306f\u3059\u3079\u3066\u306e\u30ab\u30e9\u30e0\u3092\u4f7f\u7528\u3057\u3066Amazon S3, Azure Blob storage, Azure Data Lake Storage Gen2, Google Cloud Storage\u306a\u3069\u306e\u5916\u90e8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8 \u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u66f8\u304d\u8fbc\u3080\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u6a5f\u80fd\u306f\u30c7\u30fc\u30bf\u3092 Parquet \u5f62\u5f0f\u3067\u4fdd\u5b58\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"WRITE_NOS"}),"\u306e\u6a5f\u80fd\u306b\u95a2\u3059\u308b\u8a73\u7d30\u306a\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306f\u3001",(0,t.jsx)(n.a,{href:"https://docs.teradata.com/r/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide/June-2022/Writing-Data-to-External-Object-Store",children:"NOS\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"}),"\u306b\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"WRITE_NOS"})," \u95a2\u6570\u3092\u5b9f\u884c\u3067\u304d\u308b\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u306e\u3088\u3046\u306a\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u304c\u306a\u3044\u5834\u5408\u306f\u3001\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE USER db AS PERM=10e7, PASSWORD=db;\n\n-- Don't forget to give the proper access rights\nGRANT EXECUTE FUNCTION on TD_SYSFNLIB.READ_NOS to db;\nGRANT EXECUTE FUNCTION on TD_SYSFNLIB.WRITE_NOS to db;\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["\u30e6\u30fc\u30b6\u30fc\u3068\u305d\u306e\u6a29\u9650\u306e\u8a2d\u5b9a\u306b\u3064\u3044\u3066\u3082\u3063\u3068\u8a73\u3057\u304f\u77e5\u308a\u305f\u3044\u5834\u5408\u306f\u3001",(0,t.jsx)(n.a,{href:"https://docs.teradata.com/r/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide/June-2022/Setting-Up-Access/Setting-Access-Privileges",children:"NOS\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u307e\u305a\u3001Teradata Vantage \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u30c6\u30fc\u30d6\u30eb\u3092\u4f5c\u6210\u3057\u307e\u3057\u3087\u3046\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE SET TABLE db.parquet_table ,FALLBACK ,\n     NO BEFORE JOURNAL,\n     NO AFTER JOURNAL,\n     CHECKSUM = DEFAULT,\n     DEFAULT MERGEBLOCKRATIO,\n     MAP = TD_MAP1\n     (\n      column1 SMALLINT NOT NULL,\n      column2 DATE FORMAT 'YY/MM/DD' NOT NULL,\n      column3 DECIMAL(10,2))\nPRIMARY INDEX ( column1 );\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"\u30c6\u30fc\u30d6\u30eb\u306b\u30b5\u30f3\u30d7\u30eb\u30c7\u30fc\u30bf\u3092\u5165\u529b\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"INSERT INTO db.parquet_table (1,'2022/01/01',1.1);\nINSERT INTO db.parquet_table (2,'2022/01/02',2.2);\nINSERT INTO db.parquet_table (3,'2022/01/03',3.3);\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u30c6\u30fc\u30d6\u30eb\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"column1   column2       column3\n-------  --------  ------------\n      1  22/01/01          1.10\n      2  22/01/02          2.20\n      3  22/01/03          3.30\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"WRITE_NOS"}),"\u3092\u4f7f\u7528\u3057\u3066 parquet \u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002 ",(0,t.jsx)(n.code,{children:"<BUCKET_NAME>"})," \u3092s3 \u30d0\u30b1\u30c3\u30c8\u306e\u540d\u524d\u306b\u7f6e\u304d\u63db\u3048\u308b\u3053\u3068\u3092\u5fd8\u308c\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002\u307e\u305f\u3001 ",(0,t.jsx)(n.code,{children:"<YOUR-ACCESS-KEY-ID>"})," \u3068 ",(0,t.jsx)(n.code,{children:"<YOUR-SECRET-ACCESS-KEY>"})," \u3092\u30a2\u30af\u30bb\u30b9 \u30ad\u30fc\u3068\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u306b\u7f6e\u304d\u63db\u3048\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306e\u8a8d\u8a3c\u60c5\u5831\u306e\u4f5c\u6210\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f\u3001\u30af\u30e9\u30a6\u30c9\u30d7\u30ed\u30d0\u30a4\u30c0\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u305f\u3068\u3048\u3070\u3001AWS\u306e\u5834\u5408\u306f\u4ee5\u4e0b\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002 ",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/premiumsupport/knowledge-center/create-access-key/",children:"AWS \u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3069\u3046\u3059\u308c\u3070\u3088\u3044\u3067\u3059\u304b?"})]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM WRITE_NOS (\nON ( SELECT * FROM db.parquet_table)\nUSING\nLOCATION('/s3/<BUCKET_NAME>.s3.amazonaws.com/parquet_file_on_NOS.parquet')\nAUTHORIZATION('{\"ACCESS_ID\":\"<YOUR-ACCESS-KEY-ID>\",\n\"ACCESS_KEY\":\"<YOUR-SECRET-ACCESS-KEY>\"}')\nSTOREDAS('PARQUET')\nMAXOBJECTSIZE('16MB')\nCOMPRESSION('SNAPPY')\nINCLUDE_ORDERING('TRUE')\nINCLUDE_HASHBY('TRUE')\n) as d;\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u3053\u308c\u3067\u3001\u30aa\u30d6\u30b8\u30a7\u30af\u30c8 \u30b9\u30c8\u30ec\u30fc\u30b8 \u30d0\u30b1\u30c3\u30c8\u306b parquet \u30d5\u30a1\u30a4\u30eb\u304c\u4f5c\u6210\u3055\u308c\u307e\u3057\u305f\u3002\u30d5\u30a1\u30a4\u30eb\u306b\u5bfe\u3057\u3066\u7c21\u5358\u306b\u30af\u30a8\u30ea\u30fc\u3092\u5b9f\u884c\u3059\u308b\u306b\u306f\u3001\u624b\u9806 4 \u306b\u5f93\u3046\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["NOS \u3067\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u3055\u308c\u305f\u5916\u90e8\u30c6\u30fc\u30d6\u30eb\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002 ",(0,t.jsx)(n.code,{children:"<BUCKET_NAME>"})," \u3092s3 \u30d0\u30b1\u30c3\u30c8\u306e\u540d\u524d\u306b\u7f6e\u304d\u63db\u3048\u308b\u3053\u3068\u3092\u5fd8\u308c\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002\u307e\u305f\u3001 ",(0,t.jsx)(n.code,{children:"<YOUR-ACCESS-KEY-ID>"})," \u3068 ",(0,t.jsx)(n.code,{children:"<YOUR-SECRET-ACCESS-KEY>"})," \u3092\u30a2\u30af\u30bb\u30b9 \u30ad\u30fc\u3068\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u306b\u7f6e\u304d\u63db\u3048\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'CREATE MULTISET FOREIGN TABLE db.parquet_table_to_read_file_on_NOS\n, EXTERNAL SECURITY DEFINER TRUSTED CEPH_AUTH,\nMAP = TD_MAP1\n(\n  Location VARCHAR(2048) CHARACTER SET UNICODE CASESPECIFIC\n  , col1 SMALLINT\n  , col2 DATE\n  , col3 DECIMAL(10,2)\n\n)\nUSING (\n    LOCATION (\'/s3/<BUCKET_NAME>.s3.amazonaws.com/parquet_file_on_NOS.parquet\')\n    AUTHORIZATION(\'{"ACCESS_ID":"<YOUR-ACCESS-KEY-ID>",\n    "ACCESS_KEY":"<YOUR-SECRET-ACCESS-KEY>"}\')\n    STOREDAS (\'PARQUET\')\n)NO PRIMARY INDEX;\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"\u3053\u308c\u3067\u3001NOS \u4e0a\u306eparquet\u30d5\u30a1\u30a4\u30eb\u3092\u30af\u30a8\u30ea\u30fc\u3059\u308b\u6e96\u5099\u304c\u3067\u304d\u307e\u3057\u305f\u3002\u4ee5\u4e0b\u306e\u30af\u30a8\u30ea\u30fc\u3092\u8a66\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT col1, col2, col3 FROM db.parquet_table_to_read_file_on_NOS;\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u30af\u30a8\u30ea\u30fc\u304b\u3089\u8fd4\u3055\u308c\u308b\u30c7\u30fc\u30bf\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"  col1      col2          col3\n------  --------  ------------\n     1  22/01/01          1.10\n     2  22/01/02          2.20\n     3  22/01/03          3.30\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u307e\u3068\u3081",children:"\u307e\u3068\u3081"}),"\n",(0,t.jsx)(n.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001Native Object Storage (NOS) \u3092\u4f7f\u7528\u3057\u3066\u3001Vantage \u304b\u3089\u30aa\u30d6\u30b8\u30a7\u30af\u30c8 \u30b9\u30c8\u30ec\u30fc\u30b8\u4e0a\u306e parquet \u30d5\u30a1\u30a4\u30eb\u306b\u30c7\u30fc\u30bf\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308b\u65b9\u6cd5\u3092\u5b66\u7fd2\u3057\u307e\u3057\u305f\u3002NOS \u306f\u3001CSV\u3001JSON\u3001\u304a\u3088\u3073 Parquet \u5f62\u5f0f\u3067\u4fdd\u5b58\u3055\u308c\u305f\u30c7\u30fc\u30bf\u306e\u8aad\u307f\u53d6\u308a\u3068\u30a4\u30f3\u30dd\u30fc\u30c8\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002NOS \u306f\u3001Vantage \u304b\u3089\u30aa\u30d6\u30b8\u30a7\u30af\u30c8 \u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u30c7\u30fc\u30bf\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u3055\u3089\u306b\u8a73\u3057\u304f",children:"\u3055\u3089\u306b\u8a73\u3057\u304f"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.teradata.com/r/Teradata-VantageTM-Native-Object-Store-Getting-Started-Guide/June-2022/Writing-Data-to-External-Object-Store",children:"Teradata Vantage\u2122 - Writing Data to External Object Store"})}),"\n"]}),"\n",(0,t.jsx)(i.Ay,{})]})}function S(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>o});var t=a(96540);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
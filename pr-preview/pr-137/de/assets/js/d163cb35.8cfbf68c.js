"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[5408],{41269:(e,t,a)=>{a.d(t,{Ay:()=>o,RM:()=>s});var n=a(74848),i=a(28453);const s=[];function r(e){const t={a:"a",admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["If you have any questions or need further assistance, please visit our ",(0,n.jsx)(t.a,{href:"https://support.teradata.com/community",children:"community forum"})," where you can get support and interact with other community members."]})})}function o(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},62680:(e,t,a)=>{a.d(t,{Ay:()=>o,RM:()=>s});var n=a(74848),i=a(28453);const s=[];function r(e){const t={a:"a",admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["If you need a test instance of Vantage, you can provision one for free at ",(0,n.jsx)(t.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})})}function o(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},7212:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var n=a(74848),i=a(28453),s=a(62680),r=a(41269);const o={sidebar_position:13,author:"Jeremy Yu",email:"Jeremy.yu@teradata.com",page_last_update:"May 18th, 2022",description:"Integrate Teradata Vantage with KNIME.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics"]},c="Integrate Teradata Vantage with KNIME Analytics Platform",d={id:"analyze-data/integrate-teradata-vantage-with-knime",title:"Integrate Teradata Vantage with KNIME Analytics Platform",description:"Integrate Teradata Vantage with KNIME.",source:"@site/quickstarts/analyze-data/integrate-teradata-vantage-with-knime.md",sourceDirName:"analyze-data",slug:"/analyze-data/integrate-teradata-vantage-with-knime",permalink:"/pr-preview/pr-137/de/quickstarts/analyze-data/integrate-teradata-vantage-with-knime",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13,author:"Jeremy Yu",email:"Jeremy.yu@teradata.com",page_last_update:"May 18th, 2022",description:"Integrate Teradata Vantage with KNIME.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics"]},sidebar:"tutorialSidebar",previous:{title:"Create Vizualizations in Power BI using Vantage",permalink:"/pr-preview/pr-137/de/quickstarts/analyze-data/create-stunning-visualizations-in-power-bi-using-data-from-teradata-vantage"},next:{title:"Getting Started with VantageCloud Lake",permalink:"/pr-preview/pr-137/de/quickstarts/vantagecloud-lake/getting-started-with-vantagecloud-lake"}},l={},h=[{value:"Overview",id:"overview",level:2},{value:"About KNIME Analytics Platform",id:"about-knime-analytics-platform",level:3},{value:"Prerequisites",id:"prerequisites",level:2},...s.RM,{value:"Integration Procedure",id:"integration-procedure",level:2},{value:"Summary",id:"summary",level:2},{value:"Further reading",id:"further-reading",level:2},...r.RM];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"integrate-teradata-vantage-with-knime-analytics-platform",children:"Integrate Teradata Vantage with KNIME Analytics Platform"}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"This how-to describes how to connect to Terdata Vantage from KNIME Analytics Platform."}),"\n",(0,n.jsx)(t.h3,{id:"about-knime-analytics-platform",children:"About KNIME Analytics Platform"}),"\n",(0,n.jsx)(t.p,{children:"KNIME Analytics Platform is a data science workbench. It supports analytics on various data sources, including Teradata Vantage."}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Access to a Teradata Vantage instance, version 17.10 or higher.","\n",(0,n.jsx)(s.Ay,{}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["KNIME installed locally. See ",(0,n.jsx)(t.a,{href:"https://www.knime.com/installation",children:"KNIME installation instructions"})," for details."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"integration-procedure",children:"Integration Procedure"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Go to ",(0,n.jsx)(t.a,{href:"https://downloads.teradata.com/download/connectivity/jdbc-driver",children:"https://downloads.teradata.com/download/connectivity/jdbc-driver"})," (first time users will need to register) and download the latest version of the JDBC driver."]}),"\n",(0,n.jsxs)(t.li,{children:["Unzip the downloaded file. You will find ",(0,n.jsx)(t.code,{children:"terajdbc4.jar"})," file."]}),"\n",(0,n.jsxs)(t.li,{children:["In KNIME, click on ",(0,n.jsx)(t.code,{children:"File \u2192 Preference"}),". Under ",(0,n.jsx)(t.code,{children:"Databases"}),", click ",(0,n.jsx)(t.code,{children:"Add"}),":\n",(0,n.jsx)(t.img,{alt:"Add jar",src:a(99762).A+"",width:"889",height:"557"})]}),"\n",(0,n.jsxs)(t.li,{children:["Register a new database driver. Provide values for ",(0,n.jsx)(t.code,{children:"ID"}),", ",(0,n.jsx)(t.code,{children:"Name"})," and ",(0,n.jsx)(t.code,{children:"Description"})," like below. Click on ",(0,n.jsx)(t.code,{children:"Add file"})," and point to the .jar file you downloaded earlier. Click on the ",(0,n.jsx)(t.code,{children:"Find driver classes"})," and the ",(0,n.jsx)(t.code,{children:"Driver class:"})," should populate with the ",(0,n.jsx)(t.code,{children:"jdbc.TeraDriver"}),":\n",(0,n.jsx)(t.img,{alt:"Register driver",src:a(19597).A+"",width:"541",height:"718"})]}),"\n",(0,n.jsxs)(t.li,{children:["Click ",(0,n.jsx)(t.code,{children:"Apply and Close"}),":\n",(0,n.jsx)(t.img,{alt:"Apply and close",src:a(90616).A+"",width:"894",height:"554"})]}),"\n",(0,n.jsxs)(t.li,{children:["To test the connection, create a new KNIME workflow and add a ",(0,n.jsx)(t.code,{children:"Database Reader (legacy)"})," node by dragging it to the workspace to the right:\n",(0,n.jsx)(t.img,{alt:"Test connection step 1",src:a(87192).A+"",width:"566",height:"288"}),"\n",(0,n.jsx)(t.img,{alt:"Test connection step 2",src:a(99155).A+"",width:"1275",height:"692"})]}),"\n",(0,n.jsxs)(t.li,{children:["Right-click on the ",(0,n.jsx)(t.code,{children:"Database Reader (legacy)"})," to configure settings. Select ",(0,n.jsx)(t.code,{children:"com.teradata.jdbc.Teradriver"})," from the drop-down:\n",(0,n.jsx)(t.img,{alt:"Start configuration",src:a(43242).A+"",width:"434",height:"271"})]}),"\n",(0,n.jsxs)(t.li,{children:["Enter the name of the Vantage server and login mechanism, e.g.:\n",(0,n.jsx)(t.img,{alt:"Enter configuration",src:a(71972).A+"",width:"502",height:"382"})]}),"\n",(0,n.jsxs)(t.li,{children:["To test connection, enter SQL statement in box in lower right. For example, enter ",(0,n.jsx)(t.code,{children:"SELECT * FROM DBC.DBCInfoV"})," and click ",(0,n.jsx)(t.code,{children:"Apply"})," to close the dialog:\n",(0,n.jsx)(t.img,{alt:"Test connection apply",src:a(59485).A+"",width:"976",height:"649"})]}),"\n",(0,n.jsxs)(t.li,{children:["Execute the node to test the connection:\n",(0,n.jsx)(t.img,{alt:"Execute node",src:a(7141).A+"",width:"422",height:"571"})]}),"\n",(0,n.jsxs)(t.li,{children:["The node will show a green light when run successfully. Right-click and select ",(0,n.jsx)(t.code,{children:"Data from Database"})," to view the results:\n",(0,n.jsx)(t.img,{alt:"View results",src:a(91629).A+"",width:"427",height:"566"}),"\n",(0,n.jsx)(t.img,{alt:"View results",src:a(4454).A+"",width:"406",height:"162"})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsx)(t.p,{children:"This how-to demonstrats how to connect from KNIME Analytics Platform to Teradata Vantage."}),"\n",(0,n.jsx)(t.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/pr-preview/pr-137/de/quickstarts/analyze-data/ml",children:"Train ML models in Vantage using only SQL"})}),"\n"]}),"\n","\n",(0,n.jsx)(r.Ay,{})]})}function g(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},99762:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/add-jar-464144c4e67a78b34e67d94d6202e216.png"},90616:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/apply-and-close-26b5cf5a8e1ee18fc3d9448e3c6e5ac1.png"},71972:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/enter-configuration-410a328ec784ec518190320dc35a85d3.png"},7141:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/execute-node-38bf804bef4ebbb12eedc3a60f475fc9.png"},19597:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/register-driver-0cef2ce32655fb7cca8c4bab8864e1c9.png"},43242:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/start-configuration-c74dc09439b0b382f4b129d343252fab.png"},87192:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/test-connection-1-dfa833fb2226121a5ce7c1d13742d180.png"},99155:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/test-connection-2-9f30969ea0e28c9453a90427a57d353a.png"},59485:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/test-connection-apply-7ba7b0aa2a774f51b96fcef100ee4394.png"},4454:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/view-results-final-f282a2da70e0469b9eac6ff735daa6cc.png"},91629:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/view-results-d94c60608d94feb360a52c421fc02828.png"},28453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>o});var n=a(96540);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);
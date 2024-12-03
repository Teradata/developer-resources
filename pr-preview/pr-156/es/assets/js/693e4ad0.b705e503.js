"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[653],{41269:(e,n,t)=>{t.d(n,{Ay:()=>s,RM:()=>r});var o=t(74848),i=t(28453);const r=[];function a(e){const n={a:"a",admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["If you have any questions or need further assistance, please visit our ",(0,o.jsx)(n.a,{href:"https://support.teradata.com/community",children:"community forum"})," where you can get support and interact with other community members."]})})}function s(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},69888:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var o=t(74848),i=t(28453),r=t(41269);const a={sidebar_position:5,author:"Tan Nguyen",email:"tan.nguyen@teradata.com",page_last_update:"February 13th, 2023",description:"Use Teradata Connector for MuleSoft's Anypoint Studio.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","mule","mulesoft","teradata connector","anypoint studio."]},s="Using Anypoint Studio to Configure Teradata Connector - Mule 4",c={id:"create-applications/examples-configuration",title:"Using Anypoint Studio to Configure Teradata Connector - Mule 4",description:"Use Teradata Connector for MuleSoft's Anypoint Studio.",source:"@site/quickstarts/create-applications/examples-configuration.md",sourceDirName:"create-applications",slug:"/create-applications/examples-configuration",permalink:"/pr-preview/pr-156/es/quickstarts/create-applications/examples-configuration",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,author:"Tan Nguyen",email:"tan.nguyen@teradata.com",page_last_update:"February 13th, 2023",description:"Use Teradata Connector for MuleSoft's Anypoint Studio.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","mule","mulesoft","teradata connector","anypoint studio."]},sidebar:"tutorialSidebar",previous:{title:"Enviar consultas mediante REST API",permalink:"/pr-preview/pr-156/es/quickstarts/create-applications/send-queries-using-rest-api"},next:{title:"Teradata Connector Reference - Mule 4",permalink:"/pr-preview/pr-156/es/quickstarts/create-applications/teradata-connector-mule4-reference"}},l={},d=[{value:"Create a Mule Project",id:"create-a-mule-project",level:2},{value:"Add the Connector to Your Mule Project",id:"add-the-connector-to-your-mule-project",level:2},{value:"Configure a Source",id:"configure-a-source",level:2},{value:"Add a Connector Operation to the Flow",id:"add-a-connector-operation-to-the-flow",level:2},{value:"Configure a Global Element for the Connector",id:"configure-a-global-element-for-the-connector",level:2},{value:"View the App Log",id:"view-the-app-log",level:2},{value:"See Also",id:"see-also",level:2},...r.RM];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"using-anypoint-studio-to-configure-teradata-connector---mule-4",children:"Using Anypoint Studio to Configure Teradata Connector - Mule 4"}),"\n",(0,o.jsx)(n.p,{children:"Anypoint Studio (Studio) editors help you design and update your Mule applications, properties, and configuration files."}),"\n",(0,o.jsx)(n.p,{children:"To add and configure a connector in Studio:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#create-a-mule-project",children:"Create a Mule Project."})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#add-the-connector-to-your-mule-project",children:"Add the connector to your Mule project."})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#configure-a-source",children:"Configure a source for the connector\u2019s flow."})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#add-a-connector-operation-to-the-flow",children:"Add a connector operation to the flow."})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#configure-a-global-element-for-the-connector",children:"Configure a global element for the connector."})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["When you run the connector, you can view the app log to check for problems, as described in ",(0,o.jsx)(n.a,{href:"#view-the-app-log",children:"View the App Log"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["If you are new to configuring connectors in Studio, see ",(0,o.jsx)(n.a,{href:"https://docs.mulesoft.com/connectors/introduction/intro-config-use-studio",children:"Using Anypoint Studio to Configure a Connector"}),". If, after reading this topic, you need additional information about the connector fields, see the ",(0,o.jsx)(n.a,{href:"/pr-preview/pr-156/es/quickstarts/create-applications/teradata-connector-mule4-reference",children:"Teradata Connector Reference"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"create-a-mule-project",children:"Create a Mule Project"}),"\n",(0,o.jsx)(n.p,{children:"In Studio, create a new Mule project in which to add and configure the connector:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["In Studio, select ",(0,o.jsx)(n.em,{children:"File > New > Mule Project"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Enter a name for your Mule project and click ",(0,o.jsx)(n.em,{children:"Finish"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"add-the-connector-to-your-mule-project",children:"Add the Connector to Your Mule Project"}),"\n",(0,o.jsxs)(n.p,{children:["Add Teradata Connector to your Mule project to automatically populate the XML code with the connector's namespace and schema location and to add the required dependencies to the project's ",(0,o.jsx)(n.code,{children:"pom.xml"})," file:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["In the ",(0,o.jsx)(n.strong,{children:"Mule Palette"})," view, click ",(0,o.jsx)(n.strong,{children:"(X) Search in Exchange"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["In the ",(0,o.jsx)(n.strong,{children:"Add Dependencies to Project"})," window, type ",(0,o.jsx)(n.code,{children:"teradata"})," in the search field."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Teradata Connector"})," in ",(0,o.jsx)(n.strong,{children:"Available modules"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Add"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Finish"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Adding a connector to a Mule project in Studio does not make that connector available to other projects in your Studio workspace."}),"\n",(0,o.jsx)(n.h2,{id:"configure-a-source",children:"Configure a Source"}),"\n",(0,o.jsx)(n.p,{children:"A source initiates a flow when a specified condition is met.\nYou can configure one of these input sources to use with Teradata Connector:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Teradata > On Table Row"})," +\nInitiates a flow by selecting from a table at a regular interval and generates one message per obtained row"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"HTTP > Listener"})," +\nInitiates a flow each time it receives a request on the configured host and port"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Scheduler"})," +\nInitiates a flow when a time-based condition is met"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["For example, to configure an ",(0,o.jsx)(n.strong,{children:"On Table Row"})," source, follow these steps:"]}),"\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.strong,{children:"Mule Palette"})," view, select ",(0,o.jsx)(n.strong,{children:"Teradata > On Table Row"}),"."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Drag ",(0,o.jsx)(n.strong,{children:"On Table Row"})," to the Studio canvas."]}),"\n",(0,o.jsxs)(n.li,{children:["In the ",(0,o.jsx)(n.strong,{children:"On Table Row"})," configuration screen, optionally change the value of the ",(0,o.jsx)(n.strong,{children:"Display Name"})," field."]}),"\n",(0,o.jsxs)(n.li,{children:["Click the plus sign (",(0,o.jsx)(n.strong,{children:"+"}),") next to the ",(0,o.jsx)(n.em,{children:"Connector configuration"})," field to configure a global element that can be used by all instances of the source in the app."]}),"\n",(0,o.jsxs)(n.li,{children:["In the ",(0,o.jsx)(n.strong,{children:"Teradata Config"})," window, on the ",(0,o.jsx)(n.strong,{children:"General"})," tab, specify the database connection information for the connector."]}),"\n",(0,o.jsxs)(n.li,{children:["On the ",(0,o.jsx)(n.strong,{children:"Transactions"})," tab, optionally specify the transaction isolation, or XA transactions, when connecting to the database."]}),"\n",(0,o.jsxs)(n.li,{children:["On the ",(0,o.jsx)(n.strong,{children:"Advanced"})," tab, optionally specify connection pooling and reconnection information, including a reconnection strategy."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Test Connection"})," to confirm that Mule can connect with the specified database."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"OK"})," to close the window."]}),"\n",(0,o.jsxs)(n.li,{children:["In the ",(0,o.jsx)(n.strong,{children:"On Table Row"})," configuration screen, in ",(0,o.jsx)(n.strong,{children:"Table"}),", specify the name of the table to select from."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"add-a-connector-operation-to-the-flow",children:"Add a Connector Operation to the Flow"}),"\n",(0,o.jsx)(n.p,{children:"When you add a connector operation to your flow, you immediately define a specific operation for that connector to perform."}),"\n",(0,o.jsx)(n.p,{children:"To add an operation for Teradata Connector, follow these steps:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["In the ",(0,o.jsx)(n.strong,{children:"Mule Palette"})," view, select ",(0,o.jsx)(n.strong,{children:"Teradata Connector"})," and then select the desired operation."]}),"\n",(0,o.jsx)(n.li,{children:"Drag the operation onto the Studio canvas and to the right of the input source."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The following screenshot shows the Teradata Connector operations in the Mule Palette view of Anypoint Studio:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Teradata Connector Operations\n",(0,o.jsx)(n.img,{alt:"Teradata Connector Operations",src:t(51301).A+"",width:"812",height:"776"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"configure-a-global-element-for-the-connector",children:"Configure a Global Element for the Connector"}),"\n",(0,o.jsx)(n.p,{children:"When you configure a connector, it\u2019s best to configure a global element that all instances of that connector in the app can use."}),"\n",(0,o.jsx)(n.p,{children:"To configure the global element for Teradata Connector, follow these steps:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Select the operation in the Studio canvas."}),"\n",(0,o.jsxs)(n.li,{children:["In the configuration screen for the operation, click the plus sign (",(0,o.jsx)(n.strong,{children:"+"}),") next to the ",(0,o.jsx)(n.strong,{children:"Connector configuration"})," field to access the global element configuration fields."]}),"\n",(0,o.jsxs)(n.li,{children:["In the ",(0,o.jsx)(n.strong,{children:"Teradata Config"})," window, on the ",(0,o.jsx)(n.strong,{children:"General"})," tab, specify the database connection information for the connector."]}),"\n",(0,o.jsxs)(n.li,{children:["On the ",(0,o.jsx)(n.strong,{children:"Transactions"})," tab, optionally specify the transaction isolation, or XA transactions, when connecting to the database."]}),"\n",(0,o.jsxs)(n.li,{children:["On the ",(0,o.jsx)(n.strong,{children:"Advanced"})," tab, optionally specify connection pooling and reconnection information, including a reconnection strategy."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Test Connection"})," to confirm that Mule can connect with the specified database."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"OK"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The following screenshot shows the Teradata Connector ",(0,o.jsx)(n.strong,{children:"Global Element Configuration"})," window in Anypoint Studio:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Teradata Connector Global Element Configuration\n",(0,o.jsx)(n.img,{alt:"Teradata Connector Global Element Configuration",src:t(5091).A+"",width:"1250",height:"1242"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"view-the-app-log",children:"View the App Log"}),"\n",(0,o.jsx)(n.p,{children:"To check for problems, you can view the app log as follows:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"If you\u2019re running the app from Anypoint Platform, the output is visible in the Anypoint Studio console window."}),"\n",(0,o.jsx)(n.li,{children:"If you\u2019re running the app using Mule from the command line, the app log is visible in your OS console."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Unless the log file path is customized in the app\u2019s log file (",(0,o.jsx)(n.code,{children:"log4j2.xml"}),"), you can also view the app log in the default location ",(0,o.jsx)(n.code,{children:"MULE_HOME/logs/<app-name>.log"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"see-also",children:"See Also"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/pr-preview/pr-156/es/quickstarts/create-applications/teradata-connector-mule4-reference",children:"Teradata Connector Reference"}),"."]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://help.mulesoft.com",children:"MuleSoft Help Center"})}),"\n"]}),"\n",(0,o.jsx)(r.Ay,{})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},5091:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/teradata-global-configuration-7e7ecc0af929e6b56f5283fb7ec19e22.png"},51301:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/teradata-operations-558a48f28e04bfe6c019fc9341791092.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var o=t(96540);const i={},r=o.createContext(i);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);
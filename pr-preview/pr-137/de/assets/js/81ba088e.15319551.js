"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[5060],{28640:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var t=i(74848),r=i(28453);const s={id:"release-notes",title:"Versionshinweise",description:"Sehen Sie sich Details zur Erstver\xf6ffentlichung der kostenpflichtigen \xf6ffentlichen Vorschau an.",sidebar_label:"Versionshinweise",sidebar_position:8,pagination_prev:null,pagination_next:null},l="Versionshinweise",a={id:"whats-new/release-notes",title:"Versionshinweise",description:"Sehen Sie sich Details zur Erstver\xf6ffentlichung der kostenpflichtigen \xf6ffentlichen Vorschau an.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/whats-new/release-notes.md",sourceDirName:"whats-new",slug:"/whats-new/release-notes",permalink:"/pr-preview/pr-137/de/ai-unlimited/whats-new/release-notes",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"release-notes",title:"Versionshinweise",description:"Sehen Sie sich Details zur Erstver\xf6ffentlichung der kostenpflichtigen \xf6ffentlichen Vorschau an.",sidebar_label:"Versionshinweise",sidebar_position:8,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},o={},d=[{value:"Kostenpflichtige \xf6ffentliche Vorschau (Start) \u2013 Mai 2024",id:"kostenpflichtige-\xf6ffentliche-vorschau-start--mai-2024",level:2},{value:"Nicht unterst\xfctzt",id:"nicht-unterst\xfctzt",level:3},{value:"Bekannte Probleme",id:"bekannte-probleme",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"versionshinweise",children:"Versionshinweise"}),"\n",(0,t.jsx)(n.p,{children:"W\xe4hrend wir AI Unlimited st\xe4ndig weiterentwickeln, kann es immer Funktionen oder Probleme geben, die aktuell nicht verf\xfcgbar bzw. noch nicht bekannt sind."}),"\n",(0,t.jsxs)(n.p,{children:["Behalten Sie die ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-137/de/ai-unlimited/whats-new/",children:"Was ist neu"})," im Auge, um die neuesten Funktionen und Updates zu erhalten."]}),"\n",(0,t.jsx)(n.h2,{id:"kostenpflichtige-\xf6ffentliche-vorschau-start--mai-2024",children:"Kostenpflichtige \xf6ffentliche Vorschau (Start) \u2013 Mai 2024"}),"\n",(0,t.jsx)(n.h3,{id:"nicht-unterst\xfctzt",children:"Nicht unterst\xfctzt"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u201eUpdate\u201c und \u201eDelete\u201c mit Pr\xe4dikaten f\xfcr Open Table Format (OTF)-Abfragen"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Unbounded Array Framework (UAF)-Funktionen in SQL und teradataml"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Diese teradataml-Funktionen:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"automl"}),"\n",(0,t.jsx)(n.li,{children:"openml"}),"\n",(0,t.jsx)(n.li,{children:"map_row"}),"\n",(0,t.jsx)(n.li,{children:"map_partition"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"API_Request Benutzerdefinierte Funktion (User Defined Function, UDF)"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Vantage Analytics Library (VAL)"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"bekannte-probleme",children:"Bekannte Probleme"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Der erste Aufruf von benutzerdefinierten Funktionen (User Defined Functions, UDF) Java schl\xe4gt mit diesem Fehler fehl: ",(0,t.jsx)(n.code,{children:"Failure 7583 The secure mode processes had a set up error"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"teradataml"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Die Ausf\xfchrung von Unbounded Array Framework (UAF)-Funktionen schl\xe4gt fehl, wenn der Datenbankname Sonderzeichen wie einen Bindestrich (-) enth\xe4lt."}),"\n",(0,t.jsxs)(n.li,{children:["Einige SQLE- und UAF-Funktionen k\xf6nnen aufgrund von Problemen mit der Erstellung volatiler Tabellen nicht ausgef\xfchrt werden. Das Framework erstellt eine volatile Tabelle, wenn das Schl\xfcsselwortargument ",(0,t.jsx)(n.code,{children:"Volatile"})," auf True gesetzt ist. Auf anderen Schemata k\xf6nnen jedoch keine volatilen Tabellen erstellt werden."]}),"\n",(0,t.jsxs)(n.li,{children:["H2OPredict \u2013 Ein Fall f\xfcr Modelltyp DAI ist mit einem Fehler fehlgeschlagen: ",(0,t.jsx)(n.code,{children:"H2OPredict failed in contract: 'license' column is missing from model input table. This column is required to score driverless AI models."})]}),"\n",(0,t.jsxs)(n.li,{children:["ONNXPredict ist mit folgendem Fehler fehlgeschlagen: ",(0,t.jsx)(n.code,{children:"E teradatasql.OperationalError: [Version 20.0.0.12] [Session 2078] [Teradata Database] [Error 7825] in UDF/XSP/UDM mldb.ONNXPredict: SQLSTATE [38U01] ONNXPredict failed with error:no onnxruntime in java.library.path: [/usr/pde/lib, /usr/tdbms/lib]"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>a});var t=i(96540);const r={},s=t.createContext(r);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
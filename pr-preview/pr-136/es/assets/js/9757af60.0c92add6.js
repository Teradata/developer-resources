"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[6276],{77692:(e,a,n)=>{n.d(a,{Ay:()=>c,RM:()=>i});var t=n(74848),r=n(28453);const i=[];function s(e){const a={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,r.R)(),...e.components};return(0,t.jsxs)(a.admonition,{type:"note",children:[(0,t.jsx)(a.mdxAdmonitionTitle,{}),(0,t.jsxs)(a.p,{children:["Si tiene alguna pregunta o necesita m\xe1s ayuda, visite nuestro ",(0,t.jsx)(a.a,{href:"https://support.teradata.com/community",children:"foro de la comunidad"})," donde podr\xe1 obtener ayuda e interactuar con otros miembros de la comunidad."]})]})}function c(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},23961:(e,a,n)=>{n.d(a,{Ay:()=>c,RM:()=>i});var t=n(74848),r=n(28453);const i=[];function s(e){const a={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,r.R)(),...e.components};return(0,t.jsxs)(a.admonition,{type:"note",children:[(0,t.jsx)(a.mdxAdmonitionTitle,{}),(0,t.jsxs)(a.p,{children:["Si necesita una instancia de prueba de Vantage, puede obtener una de forma gratuita en ",(0,t.jsx)(a.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})]})}function c(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},21535:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var t=n(74848),r=n(28453),i=n(23961),s=n(77692);const c={sidebar_position:13,author:"Jeremy Yu",email:"Jeremy.yu@teradata.com",page_last_update:"18 de mayo de 2022",description:"Integrar Teradata Vantage con KNIME.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics"]},o="Integrar Teradata Vantage con KNIME Analytics Platform",d={id:"analyze-data/integrate-teradata-vantage-with-knime",title:"Integrar Teradata Vantage con KNIME Analytics Platform",description:"Integrar Teradata Vantage con KNIME.",source:"@site/i18n/es/docusaurus-plugin-content-docs-quickstarts/current/analyze-data/integrate-teradata-vantage-with-knime.md",sourceDirName:"analyze-data",slug:"/analyze-data/integrate-teradata-vantage-with-knime",permalink:"/pr-preview/pr-136/es/quickstarts/analyze-data/integrate-teradata-vantage-with-knime",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13,author:"Jeremy Yu",email:"Jeremy.yu@teradata.com",page_last_update:"18 de mayo de 2022",description:"Integrar Teradata Vantage con KNIME.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics"]},sidebar:"tutorialSidebar",previous:{title:"Crear visualizaciones en Power BI mediante Vantage",permalink:"/pr-preview/pr-136/es/quickstarts/analyze-data/create-stunning-visualizations-in-power-bi-using-data-from-teradata-vantage"},next:{title:"Use geographic reference data with Vantage",permalink:"/pr-preview/pr-136/es/quickstarts/analyze-data/geojson-to-vantage"}},l={},u=[{value:"Informaci\xf3n general",id:"informaci\xf3n-general",level:2},{value:"Acerca de KNIME Analytics Platform",id:"acerca-de-knime-analytics-platform",level:3},{value:"Prerrequisitos",id:"prerrequisitos",level:2},...i.RM,{value:"Procedimiento de integraci\xf3n",id:"procedimiento-de-integraci\xf3n",level:2},{value:"Resumen",id:"resumen",level:2},{value:"Lectura adicional",id:"lectura-adicional",level:2},...s.RM];function m(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"integrar-teradata-vantage-con-knime-analytics-platform",children:"Integrar Teradata Vantage con KNIME Analytics Platform"}),"\n",(0,t.jsx)(a.h2,{id:"informaci\xf3n-general",children:"Informaci\xf3n general"}),"\n",(0,t.jsx)(a.p,{children:"Este tutorial describe c\xf3mo conectarse a Terdata Vantage desde KNIME Analytics Platform."}),"\n",(0,t.jsx)(a.h3,{id:"acerca-de-knime-analytics-platform",children:"Acerca de KNIME Analytics Platform"}),"\n",(0,t.jsx)(a.p,{children:"KNIME Analytics Platform es un banco de trabajo de ciencia de datos. Admite an\xe1lisis de varias fuentes de datos, incluido Teradata Vantage."}),"\n",(0,t.jsx)(a.h2,{id:"prerrequisitos",children:"Prerrequisitos"}),"\n","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Acceso a una instancia de Teradata Vantage, versi\xf3n 17.10 o superior.","\n",(0,t.jsx)(i.Ay,{}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["KNIME instalado localmente. Consulte ",(0,t.jsx)(a.a,{href:"https://www.knime.com/installation",children:"Instrucciones de instalaci\xf3n de KNIME"})," para obtener m\xe1s detalles."]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"procedimiento-de-integraci\xf3n",children:"Procedimiento de integraci\xf3n"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["Vaya a ",(0,t.jsx)(a.a,{href:"https://downloads.teradata.com/download/connectivity/jdbc-driver",children:"https://downloads.teradata.com/download/connectivity/jdbc-driver"})," (los usuarios nuevos deber\xe1n registrarse) y descargue la \xfaltima versi\xf3n del controlador JDBC."]}),"\n",(0,t.jsxs)(a.li,{children:["Descomprima el archivo descargado. Encontrar\xe1 el archivo ",(0,t.jsx)(a.code,{children:"terajdbc4.jar"}),"."]}),"\n",(0,t.jsxs)(a.li,{children:["En KNIME, haga clic en ",(0,t.jsx)(a.code,{children:"File \u2192 Preference"}),". En ",(0,t.jsx)(a.code,{children:"Databases"}),", haga clic en ",(0,t.jsx)(a.code,{children:"Add"}),":\n",(0,t.jsx)(a.img,{alt:"Agregar archivo jar",src:n(49593).A+"",width:"889",height:"557"})]}),"\n",(0,t.jsxs)(a.li,{children:["Registre un nuevo controlador de base de datos. Proporcione valores para ",(0,t.jsx)(a.code,{children:"ID"}),", ",(0,t.jsx)(a.code,{children:"Name"})," y ",(0,t.jsx)(a.code,{children:"Description"})," como se muestra a continuaci\xf3n. Haga clic en ",(0,t.jsx)(a.code,{children:"Add file"})," y seleccione el archivo .jar que descarg\xf3 anteriormente. Haga clic en ",(0,t.jsx)(a.code,{children:"Find driver classes"})," y ",(0,t.jsx)(a.code,{children:"Driver class:"})," deber\xeda completarse con ",(0,t.jsx)(a.code,{children:"jdbc.TeraDriver"}),":\n",(0,t.jsx)(a.img,{alt:"Registrar controlador",src:n(83194).A+"",width:"541",height:"718"})]}),"\n",(0,t.jsxs)(a.li,{children:["Haga clic en ",(0,t.jsx)(a.code,{children:"Apply and Close"}),":\n",(0,t.jsx)(a.img,{alt:"Apply and Close",src:n(51659).A+"",width:"894",height:"554"})]}),"\n",(0,t.jsxs)(a.li,{children:["Para probar la conexi\xf3n, cree un nuevo flujo de trabajo KNIME y agregue un nodo ",(0,t.jsx)(a.code,{children:"Database Reader (legacy)"})," arrastr\xe1ndolo al espacio de trabajo de la derecha:\n",(0,t.jsx)(a.img,{alt:"Conexi\xf3n de prueba paso 1",src:n(63407).A+"",width:"566",height:"288"}),"\n",(0,t.jsx)(a.img,{alt:"Conexi\xf3n de prueba paso 2",src:n(41940).A+"",width:"1275",height:"692"})]}),"\n",(0,t.jsxs)(a.li,{children:["Haga clic derecho en ",(0,t.jsx)(a.code,{children:"Database Reader (legacy)"})," para configurar los ajustes. Seleccione ",(0,t.jsx)(a.code,{children:"com.teradata.jdbc.Teradriver"})," en el men\xfa desplegable:\n",(0,t.jsx)(a.img,{alt:"Iniciar configuraci\xf3n",src:n(97425).A+"",width:"434",height:"271"})]}),"\n",(0,t.jsxs)(a.li,{children:["Introduzca el nombre del servidor Vantage y el mecanismo de inicio de sesi\xf3n, por ejemplo:\n",(0,t.jsx)(a.img,{alt:"Introduzca la configuraci\xf3n",src:n(33519).A+"",width:"502",height:"382"})]}),"\n",(0,t.jsxs)(a.li,{children:["Para probar la conexi\xf3n, introduzca la declaraci\xf3n SQL en el cuadro en la parte inferior derecha. Por ejemplo, introduzca ",(0,t.jsx)(a.code,{children:"SELECT * FROM DBC.DBCInfoV"})," y haga clic en ",(0,t.jsx)(a.code,{children:"Apply"})," para cerrar el cuadro de di\xe1logo:\n",(0,t.jsx)(a.img,{alt:"Aplicaci\xf3n de la conexi\xf3n de prueba",src:n(27402).A+"",width:"976",height:"649"})]}),"\n",(0,t.jsxs)(a.li,{children:["Ejecute el nodo para probar la conexi\xf3n:\n",(0,t.jsx)(a.img,{alt:"Nodo de ejecuci\xf3n",src:n(58512).A+"",width:"422",height:"571"})]}),"\n",(0,t.jsxs)(a.li,{children:["El nodo mostrar\xe1 una luz verde cuando se ejecute correctamente. Haga clic derecho y seleccione ",(0,t.jsx)(a.code,{children:"Data from Database"})," para ver los resultados:\n",(0,t.jsx)(a.img,{alt:"Ver resultados",src:n(66416).A+"",width:"427",height:"566"}),"\n",(0,t.jsx)(a.img,{alt:"Ver resultados",src:n(34735).A+"",width:"406",height:"162"})]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"resumen",children:"Resumen"}),"\n",(0,t.jsx)(a.p,{children:"Este tutorial muestra c\xf3mo conectarse desde KNIME Analytics Platform a Teradata Vantage."}),"\n",(0,t.jsx)(a.h2,{id:"lectura-adicional",children:"Lectura adicional"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"/pr-preview/pr-136/es/quickstarts/analyze-data/ml",children:"Entrenar modelos de ML en Vantage usando solo SQL"})}),"\n"]}),"\n","\n",(0,t.jsx)(s.Ay,{})]})}function p(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},49593:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/add-jar-464144c4e67a78b34e67d94d6202e216.png"},51659:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/apply-and-close-26b5cf5a8e1ee18fc3d9448e3c6e5ac1.png"},33519:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/enter-configuration-410a328ec784ec518190320dc35a85d3.png"},58512:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/execute-node-38bf804bef4ebbb12eedc3a60f475fc9.png"},83194:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/register-driver-0cef2ce32655fb7cca8c4bab8864e1c9.png"},97425:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/start-configuration-c74dc09439b0b382f4b129d343252fab.png"},63407:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/test-connection-1-dfa833fb2226121a5ce7c1d13742d180.png"},41940:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/test-connection-2-9f30969ea0e28c9453a90427a57d353a.png"},27402:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/test-connection-apply-7ba7b0aa2a774f51b96fcef100ee4394.png"},34735:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/view-results-final-f282a2da70e0469b9eac6ff735daa6cc.png"},66416:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/view-results-d94c60608d94feb360a52c421fc02828.png"},28453:(e,a,n)=>{n.d(a,{R:()=>s,x:()=>c});var t=n(96540);const r={},i=t.createContext(r);function s(e){const a=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:a},e.children)}}}]);
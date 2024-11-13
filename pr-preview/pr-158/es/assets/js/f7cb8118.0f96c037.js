"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[8891],{77692:(e,n,a)=>{a.d(n,{Ay:()=>c,RM:()=>i});var t=a(74848),r=a(28453);const i=[];function o(e){const n={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,r.R)(),...e.components};return(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["Si tiene alguna pregunta o necesita m\xe1s ayuda, visite nuestro ",(0,t.jsx)(n.a,{href:"https://support.teradata.com/community",children:"foro de la comunidad"})," donde podr\xe1 obtener ayuda e interactuar con otros miembros de la comunidad."]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},23961:(e,n,a)=>{a.d(n,{Ay:()=>c,RM:()=>i});var t=a(74848),r=a(28453);const i=[];function o(e){const n={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,r.R)(),...e.components};return(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["Si necesita una instancia de prueba de Vantage, puede obtener una de forma gratuita en ",(0,t.jsx)(n.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},12549:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var t=a(74848),r=a(28453),i=a(23961),o=a(77692);const c={id:"ubuntu",title:"Ubuntu",sidebar_position:1,author:"Ad\xe1n Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"5 de enero de 2022",description:"Utilizar Vantage con ODBC en Ubuntu",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","odbc","ubuntu"]},s="Utilizar Vantage con ODBC en Ubuntu",d={id:"connect-to-vantage/configure-odbc/ubuntu",title:"Ubuntu",description:"Utilizar Vantage con ODBC en Ubuntu",source:"@site/i18n/es/docusaurus-plugin-content-docs-quickstarts/current/connect-to-vantage/configure-odbc/odbc.ubuntu.md",sourceDirName:"connect-to-vantage/configure-odbc",slug:"/connect-to-vantage/configure-odbc/ubuntu",permalink:"/pr-preview/pr-158/es/quickstarts/connect-to-vantage/configure-odbc/ubuntu",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"ubuntu",title:"Ubuntu",sidebar_position:1,author:"Ad\xe1n Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"5 de enero de 2022",description:"Utilizar Vantage con ODBC en Ubuntu",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","odbc","ubuntu"]},sidebar:"tutorialSidebar",previous:{title:"Configurar una conexi\xf3n a Teradata Vantage en DBeaver",permalink:"/pr-preview/pr-158/es/quickstarts/connect-to-vantage/configure-a-teradata-vantage-connection-in-dbeaver"},next:{title:"Consultar datos almacenados en el almacenamiento de objetos",permalink:"/pr-preview/pr-158/es/quickstarts/manage-data/nos"}},u={},l=[{value:"Informaci\xf3n general",id:"informaci\xf3n-general",level:2},{value:"Prerrequisitos",id:"prerrequisitos",level:2},...i.RM,{value:"Instalaci\xf3n",id:"instalaci\xf3n",level:2},{value:"Usar ODBC",id:"usar-odbc",level:2},{value:"Resumen",id:"resumen",level:2},{value:"Lectura adicional",id:"lectura-adicional",level:2},...o.RM];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"utilizar-vantage-con-odbc-en-ubuntu",children:"Utilizar Vantage con ODBC en Ubuntu"}),"\n",(0,t.jsx)(n.h2,{id:"informaci\xf3n-general",children:"Informaci\xf3n general"}),"\n",(0,t.jsx)(n.p,{children:"Este tutorial demuestra c\xf3mo utilizar el controlador ODBC con Teradata Vantage en Ubuntu."}),"\n",(0,t.jsx)(n.h2,{id:"prerrequisitos",children:"Prerrequisitos"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Acceso a una instancia de Teradata Vantage.","\n",(0,t.jsx)(i.Ay,{}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Acceso root a una m\xe1quina Ubuntu."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"instalaci\xf3n",children:"Instalaci\xf3n"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Instalar dependencias:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"apt update && DEBIAN_FRONTEND=noninteractive apt install -y wget unixodbc unixodbc-dev iodbc python3-pip\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Instale el controlador ODBC de Teradata para Ubuntu:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"wget https://downloads.teradata.com/download/cdn/connectivity/odbc/17.10.x.x/tdodbc1710__ubuntu_x8664.17.10.00.14-1.tar.gz \\\n    && tar -xzf tdodbc1710__ubuntu_x8664.17.10.00.14-1.tar.gz \\\n    && dpkg -i tdodbc1710/tdodbc1710-17.10.00.14-1.x86_64.deb\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Configure ODBC, creando el archivo ",(0,t.jsx)(n.code,{children:"/etc/odbcinst.ini"})," con el siguiente contenido:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"[ODBC Drivers]\nTeradata Database ODBC Driver 17.10=Installed\n\n[Teradata Database ODBC Driver 17.10]\nDescription=Teradata Database ODBC Driver 17.10\nDriver=/opt/teradata/client/17.10/odbc_64/lib/tdataodbc_sb64.so\n"})}),"\n",(0,t.jsx)(n.h2,{id:"usar-odbc",children:"Usar ODBC"}),"\n",(0,t.jsxs)(n.p,{children:["Validaremos la instalaci\xf3n con una aplicaci\xf3n Python de muestra. Cree el archivo ",(0,t.jsx)(n.code,{children:"test.py"})," con el siguiente contenido.\nReemplace ",(0,t.jsx)(n.code,{children:"DBCName=192.168.86.33;UID=dbc;PWD=dbc"})," con la direcci\xf3n IP de su instancia de Teradata Vantage, nombre de usuario y contrase\xf1a:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import pyodbc\n\nprint(pyodbc.drivers())\n\ncnxn = pyodbc.connect('DRIVER={Teradata Database ODBC Driver 17.10};DBCName=192.168.86.33;UID=dbc;PWD=dbc;')\ncursor = cnxn.cursor()\n\ncursor.execute(\"SELECT CURRENT_DATE\")\nfor row in cursor.fetchall():\n    print(row)\nEOF\n"})}),"\n",(0,t.jsx)(n.p,{children:"Ejecute la aplicaci\xf3n de prueba:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"python3 test.py\n"})}),"\n",(0,t.jsx)(n.p,{children:"Deber\xeda obtener un resultado similar a:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"['ODBC Drivers', 'Teradata Database ODBC Driver 17.10']\n(datetime.date(2022, 1, 5), )\n"})}),"\n",(0,t.jsx)(n.h2,{id:"resumen",children:"Resumen"}),"\n",(0,t.jsx)(n.p,{children:"Este tutorial demostr\xf3 c\xf3mo usar ODBC con Teradata Vantage en Ubuntu. El tutorial muestra c\xf3mo instalar el controlador ODBC de Teradata y las dependencias. Luego muestra c\xf3mo configurar ODBC y validar la conectividad con una aplicaci\xf3n Python simple."}),"\n",(0,t.jsx)(n.h2,{id:"lectura-adicional",children:"Lectura adicional"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.teradata.com/search/all?query=ODBC+Driver+for+Teradata+User+Guide&filters=ft%3AisBook~%22true%22&sort=last_update",children:"Gu\xeda del usuario del controlador ODBC para Teradata\xae"})}),"\n"]}),"\n",(0,t.jsx)(o.Ay,{})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>c});var t=a(96540);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
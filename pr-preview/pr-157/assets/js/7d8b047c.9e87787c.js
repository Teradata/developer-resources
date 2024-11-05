"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[3994],{41269:(e,t,a)=>{a.d(t,{Ay:()=>i,RM:()=>s});var n=a(74848),r=a(28453);const s=[];function o(e){const t={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["If you have any questions or need further assistance, please visit our ",(0,n.jsx)(t.a,{href:"https://support.teradata.com/community",children:"community forum"})," where you can get support and interact with other community members."]})})}function i(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},62680:(e,t,a)=>{a.d(t,{Ay:()=>i,RM:()=>s});var n=a(74848),r=a(28453);const s=[];function o(e){const t={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["If you need a test instance of Vantage, you can provision one for free at ",(0,n.jsx)(t.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})})}function i(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},60264:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=a(74848),r=a(28453),s=a(62680),o=a(41269);const i={sidebar_position:2,id:"teradatasql",author:"Krutik Pathak",email:"krutik.pathak@teradata.com",page_last_update:"August 2nd, 2023",description:"How to connect to Teradata Vantage using teradatasql Python database driver",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","teradatasql","python applications","business intelligence","enterprise analytics"]},d="Connect to Vantage using Python",c={id:"create-applications/teradatasql",title:"Connect to Vantage using Python",description:"How to connect to Teradata Vantage using teradatasql Python database driver",source:"@site/quickstarts/create-applications/teradatasql.md",sourceDirName:"create-applications",slug:"/create-applications/teradatasql",permalink:"/pr-preview/pr-157/quickstarts/create-applications/teradatasql",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"teradatasql",author:"Krutik Pathak",email:"krutik.pathak@teradata.com",page_last_update:"August 2nd, 2023",description:"How to connect to Teradata Vantage using teradatasql Python database driver",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","teradatasql","python applications","business intelligence","enterprise analytics"]},sidebar:"tutorialSidebar",previous:{title:"Connect to Vantage using JDBC",permalink:"/pr-preview/pr-157/quickstarts/create-applications/jdbc"},next:{title:"Query Teradata Vantage from a Mule service",permalink:"/pr-preview/pr-157/quickstarts/create-applications/mule-dbc-example"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},...s.RM,{value:"Code to send a query",id:"code-to-send-a-query",level:2},{value:"Summary",id:"summary",level:2},{value:"Further reading",id:"further-reading",level:2},...o.RM];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"connect-to-vantage-using-python",children:"Connect to Vantage using Python"}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:["This how-to demonstrates how to connect to Vantage using ",(0,n.jsx)(t.a,{href:"https://github.com/Teradata/python-driver",children:"teradatasql"})," Python database driver for Teradata Vantage."]}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"64-bit Python 3.4 or later."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"teradatasql"})," driver installed in your system:"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"pip install teradatasql\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"teradatasql"})," package runs on Windows, macOS (10.14 Mojave or later) and Linux. For Linux, currently only Linux x86-64 architecture is supported."]})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Access to a Teradata Vantage instance. Currently driver is supported for use with Teradata Database 16.10 and later releases."}),"\n"]}),"\n",(0,n.jsx)(s.Ay,{}),"\n",(0,n.jsx)(t.h2,{id:"code-to-send-a-query",children:"Code to send a query"}),"\n",(0,n.jsxs)(t.p,{children:["This is a simple Python code to connect to Teradata Vantage using ",(0,n.jsx)(t.code,{children:"teradatasql"}),". All that is left, is to pass connection and authentication parameters and run a query:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import teradatasql\n\nDB_URL = ""                                 #Add Host\nUSER = ""                                   #Add Username\nPASS = ""                                   #Add Password\n\ntry:\n    # Establish a connection to the Teradata database\n    with teradatasql.connect(host=DB_URL, user=USER, password=PASS) as con:\n        # Create a cursor to execute queries\n        with con.cursor() as cur:\n            try:\n                # Creating the table SampleEmployee\n                cur.execute (f"CREATE SET TABLE {USER}.SampleEmployee \\\n                            (Associate_Id     INTEGER, \\\n                            Associate_Name   CHAR(25), \\\n                            Job_Title        VARCHAR(25)) \\\n                            UNIQUE PRIMARY INDEX (Associate_Id);")\n                \n                print(f"Sample table {USER}.SampleEmployee created.")\n\n                # Adding sample data into SampleEmployee table\n                cur.execute (f"INSERT INTO {USER}.SampleEmployee VALUES (1, \'Richard Hendricks\',\'CEO\')")\n                cur.execute (f"INSERT INTO {USER}.SampleEmployee VALUES (2, \'Jared Dunn\',\'CFO\')")\n                cur.execute (f"INSERT INTO {USER}.SampleEmployee VALUES (3, \'Jian Yang\',\'Intern\')")\n\n                print(f"Sample data added to table {USER}.SampleEmployee.")\n\n                # Execute the SELECT query to get the results from SampleEmployee table \n                cur.execute(f"SELECT * FROM {USER}.SampleEmployee")\n\n                # Extract data from the result set and print it\n                for row in cur:\n                    print(f"Associate ID: {row[0]}, Associate_Name: {row[1]}, Job_Title:{row[2]}")\n\n                \n\n            except teradatasql.DatabaseError as db_err:\n                # Handle any errors that occur during query execution\n                print("Error while executing the query:", db_err)\n\nexcept teradatasql.DatabaseError as db_err:\n    # Handle any errors that occur during the database connection\n    print("Error while connecting to the Teradata database:", db_err)\n'})}),"\n",(0,n.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsxs)(t.p,{children:["This how-to demonstrated how to connect to Teradata Vantage using ",(0,n.jsx)(t.code,{children:"teradatasql"})," Python database driver. It described a sample Python code to send SQL queries to Teradata Vantage using ",(0,n.jsx)(t.code,{children:"teradatasql"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/Teradata/python-driver",children:"teradatasql Python driver reference"})}),"\n"]}),"\n",(0,n.jsx)(o.Ay,{})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>i});var n=a(96540);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);
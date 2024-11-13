"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[4706],{77692:(e,n,s)=>{s.d(n,{Ay:()=>o,RM:()=>r});var a=s(74848),i=s(28453);const r=[];function t(e){const n={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,i.R)(),...e.components};return(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsx)(n.mdxAdmonitionTitle,{}),(0,a.jsxs)(n.p,{children:["Si tiene alguna pregunta o necesita m\xe1s ayuda, visite nuestro ",(0,a.jsx)(n.a,{href:"https://support.teradata.com/community",children:"foro de la comunidad"})," donde podr\xe1 obtener ayuda e interactuar con otros miembros de la comunidad."]})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},23961:(e,n,s)=>{s.d(n,{Ay:()=>o,RM:()=>r});var a=s(74848),i=s(28453);const r=[];function t(e){const n={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,i.R)(),...e.components};return(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsx)(n.mdxAdmonitionTitle,{}),(0,a.jsxs)(n.p,{children:["Si necesita una instancia de prueba de Vantage, puede obtener una de forma gratuita en ",(0,a.jsx)(n.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},38317:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=s(74848),i=s(28453),r=s(23961),t=s(77692);const o={sidebar_position:4,author:"Sudha Vedula",email:"sudha.vedula@teradata.com",page_last_update:"29 de mayo de 2023",description:"Enviar consultas mediante REST API. Teradata\xae Query Service es un middleware que proporciona REST API para Vantage.",keywords:["query service","teradata","vantage","query","REST API"]},l="Enviar consultas mediante REST API",c={id:"create-applications/send-queries-using-rest-api",title:"Enviar consultas mediante REST API",description:"Enviar consultas mediante REST API. Teradata\xae Query Service es un middleware que proporciona REST API para Vantage.",source:"@site/i18n/es/docusaurus-plugin-content-docs-quickstarts/current/create-applications/send-queries-using-rest-api.md",sourceDirName:"create-applications",slug:"/create-applications/send-queries-using-rest-api",permalink:"/pr-preview/pr-158/es/quickstarts/create-applications/send-queries-using-rest-api",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,author:"Sudha Vedula",email:"sudha.vedula@teradata.com",page_last_update:"29 de mayo de 2023",description:"Enviar consultas mediante REST API. Teradata\xae Query Service es un middleware que proporciona REST API para Vantage.",keywords:["query service","teradata","vantage","query","REST API"]},sidebar:"tutorialSidebar",previous:{title:"Consulta Teradata Vantage desde un servicio Mule",permalink:"/pr-preview/pr-158/es/quickstarts/create-applications/mule-dbc-example"},next:{title:"Utilizar Vantage desde un Jupyter Notebook",permalink:"/pr-preview/pr-158/es/quickstarts/analyze-data/jupyter"}},d={},u=[{value:"Informaci\xf3n general",id:"informaci\xf3n-general",level:2},{value:"Prerrequisitos",id:"prerrequisitos",level:2},...r.RM,{value:"Ejemplos de API de servicio de consulta",id:"ejemplos-de-api-de-servicio-de-consulta",level:2},{value:"Conectarse a su instancia de Query Service",id:"conectarse-a-su-instancia-de-query-service",level:2},{value:"Autenticaci\xf3n b\xe1sica HTTP",id:"autenticaci\xf3n-b\xe1sica-http",level:3},{value:"Autenticaci\xf3n JWT",id:"autenticaci\xf3n-jwt",level:3},{value:"Realice una solicitud API simple con opciones b\xe1sicas",id:"realice-una-solicitud-api-simple-con-opciones-b\xe1sicas",level:2},{value:"Solicitar una respuesta en formato CSV",id:"solicitar-una-respuesta-en-formato-csv",level:3},{value:"Utilice una sesi\xf3n expl\xedcita para enviar una consulta",id:"utilice-una-sesi\xf3n-expl\xedcita-para-enviar-una-consulta",level:2},{value:"Utilizar consultas asincr\xf3nicas",id:"utilizar-consultas-asincr\xf3nicas",level:2},{value:"Obtener una lista de consultas activas o en cola",id:"obtener-una-lista-de-consultas-activas-o-en-cola",level:2},{value:"Recursos",id:"recursos",level:2},...t.RM];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"enviar-consultas-mediante-rest-api",children:"Enviar consultas mediante REST API"}),"\n",(0,a.jsx)(n.h2,{id:"informaci\xf3n-general",children:"Informaci\xf3n general"}),"\n",(0,a.jsx)(n.p,{children:"Teradata Query Service es una REST API para Vantage que puede utilizar para ejecutar declaraciones SQL est\xe1ndar sin administrar controladores del lado del cliente. Utilice el servicio de consulta si desea consultar y acceder a la base de datos de an\xe1lisis a trav\xe9s de una REST API."}),"\n",(0,a.jsx)(n.p,{children:"Este tutorial proporciona ejemplos de casos de uso comunes para ayudarlo a comenzar con Query Service API."}),"\n",(0,a.jsx)(n.h2,{id:"prerrequisitos",children:"Prerrequisitos"}),"\n",(0,a.jsx)(n.p,{children:"Antes de comenzar, aseg\xfarese de tener:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Acceso a un sistema VantageCloud donde se proporcione Query Service, o un VantageCore con conectividad habilitada para Query Service. Si es administrador y necesita instalar Query Service, consulte la ",(0,a.jsx)(n.a,{href:"https://docs.teradata.com/r/Teradata-Query-Service-Installation-Configuration-and-Usage-Guide-for-Customers/April-2022",children:"Gu\xeda de instalaci\xf3n, configuraci\xf3n y uso de Query Service"}),"."]}),"\n"]}),"\n",(0,a.jsx)(r.Ay,{}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Nombre de host del servicio de consulta y nombre del sistema"}),"\n",(0,a.jsx)(n.li,{children:"Credenciales de autorizaci\xf3n para conectarse a la base de datos"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\xbfTiene problemas con los requisitos previos? P\xf3ngase en contacto con Teradata para obtener informaci\xf3n de configuraci\xf3n."}),"\n",(0,a.jsx)(n.h2,{id:"ejemplos-de-api-de-servicio-de-consulta",children:"Ejemplos de API de servicio de consulta"}),"\n",(0,a.jsx)(n.p,{children:"Al utilizar los ejemplos, tenga en cuenta que:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Los ejemplos de este documento utilizan Python y puede utilizarlos para crear ejemplos en el idioma que elija."}),"\n",(0,a.jsxs)(n.li,{children:["Los ejemplos proporcionados aqu\xed est\xe1n completos y listos para su uso, aunque la mayor\xeda requiere un poco de personalizaci\xf3n.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Los ejemplos de este documento utilizan la URL ",(0,a.jsx)(n.code,{children:"https://<QS_HOSTNAME>:1443/"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Reemplace las siguientes variables con su propio valor:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"<QS_HOSTNAME>"}),": Servidor donde est\xe1 instalado Query Service"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"<SYSTEM_NAME>"}),": Alias \u200b\u200bpreconfigurado del sistema"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Si su instancia de Vantage se proporciona a trav\xe9s de ClearScape Analytics Experience,",(0,a.jsx)(n.code,{children:"<QS_HOSTNAME>"}),", es la URL del host de su entorno de ClearScape Analytics Experience, ",(0,a.jsx)(n.code,{children:"<SYSTEM_NAME>"}),' es "local".']})}),"\n",(0,a.jsx)(n.h2,{id:"conectarse-a-su-instancia-de-query-service",children:"Conectarse a su instancia de Query Service"}),"\n",(0,a.jsx)(n.p,{children:"Proporcione credenciales v\xe1lidas para acceder a la base de datos de Analytics de destino mediante la autenticaci\xf3n HTTP b\xe1sica o JWT."}),"\n",(0,a.jsx)(n.h3,{id:"autenticaci\xf3n-b\xe1sica-http",children:"Autenticaci\xf3n b\xe1sica HTTP"}),"\n",(0,a.jsxs)(n.p,{children:["El nombre de usuario y la contrase\xf1a de la base de datos se combinan en una cadena (",(0,a.jsx)(n.code,{children:'"username : password"'}),") que posteriormente se codifica mediante Base64. La respuesta de la API contiene el m\xe9todo de autorizaci\xf3n y las credenciales codificadas."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Solicitud"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",metastring:', id="queryservice_first_query", role="emits-gtm-events"',children:"import requests\nimport json\nimport base64\nrequests.packages.urllib3.disable_warnings()\n\n# run it from local.\n\ndb_user, db_password = 'dbc','dbc'\nauth_encoded = db_user + ':' + db_password\nauth_encoded = base64.b64encode(bytes(auth_encoded, 'utf-8'))\nauth_str = 'Basic ' + auth_encoded.decode('utf-8')\n\nprint(auth_str)\n\nheaders = {\n  'Content-Type': 'application/json',\n  'Authorization': auth_str # base 64 encoded username:password\n}\n\nprint(headers)\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Respuesta"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"Basic ZGJjOmRiYw==\n{\n  'Content-Type': 'application/json',\n  'Authorization': 'Basic ZGJjOmRiYw=='\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"autenticaci\xf3n-jwt",children:"Autenticaci\xf3n JWT"}),"\n",(0,a.jsx)(n.p,{children:"Prerequisites:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"El usuario ya debe existir en la base de datos."}),"\n",(0,a.jsx)(n.li,{children:"La base de datos debe estar habilitada para JWT."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Solicitud"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"import requests\nimport json\nrequests.packages.urllib3.disable_warnings()\n\n# run it from local. \n\nauth_encoded_jwt = \"<YOUR_JWT_HERE>\"\nauth_str = \"Bearer \" + auth_encoded_jwt\n\nheaders = {\n  'Content-Type': 'application/json',\n  'Authorization': auth_str\n}\n\nprint(headers)\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Respuesta"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"{'Content-Type': 'application/json', 'Authorization': 'Bearer <YOUR_JWT_HERE>'}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"realice-una-solicitud-api-simple-con-opciones-b\xe1sicas",children:"Realice una solicitud API simple con opciones b\xe1sicas"}),"\n",(0,a.jsx)(n.p,{children:"En el siguiente ejemplo, la solicitud incluye:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"SELECT * FROM DBC.DBCInfo"}),": la consulta al sistema con el alias ",(0,a.jsx)(n.code,{children:"<SYSTEM_NAME>"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"'format': 'OBJECT'"}),": El formato de respuesta. Los formatos admitidos son: objeto JSON, matriz JSON y CSV."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"El formato de objeto JSON crea un objeto JSON por fila donde el nombre de la columna es el nombre del campo y el valor de la columna es el valor del campo."})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"'includeColumns': true"}),": la solicitud para incluir metadatos de columna, como nombres y tipos de columnas, en la respuesta."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"'rowLimit': 4"}),": el n\xfamero de filas que se devolver\xe1n de una consulta."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Solicitud"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"url = 'https://<QS_HOSTNAME>:1443/systems/<SYSTEM_NAME>/queries'\n\npayload = {\n  'query': example_query, # 'SELECT * FROM DBC.DBCInfo;',\n  'format': 'OBJECT',\n  'includeColumns': True,\n  'rowLimit': 4\n}\n\npayload_json = json.dumps(payload)\n\nresponse = requests.request('POST', url, headers=headers, data=payload_json, verify=False)\n\nnum_rows = response.json().get('results'](0].get('rowCount')\nprint('NUMBER of ROWS', num_rows)\nprint('==========================================================')\n\nprint(response.json())\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Respuesta"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'NUMBER of ROWS 4\n==========================================================\n{\n  "queueDuration":7,\n  "queryDuration":227,\n  "results":[\n    {\n      "resultSet":True,\n      "columns":[\n        {\n          "name":"DatabaseName",\n          "type":"CHAR"\n        },\n        {\n          "name":"USEDSPACE_IN_GB",\n          "type":"FLOAT"\n        },\n        {\n          "name":"MAXSPACE_IN_GB",\n          "type":"FLOAT"\n        },\n        {\n          "name":"Percentage_Used",\n          "type":"FLOAT"\n        },\n        {\n          "name":"REMAININGSPACE_IN_GB",\n          "type":"FLOAT"\n        }\n      ],\n      "data":[\n        {\n          "DatabaseName":"DBC",\n          "USEDSPACE_IN_GB":317.76382541656494,\n          "MAXSPACE_IN_GB":1510.521079641879,\n          "Percentage_Used":21.03670247964377,\n          "REMAININGSPACE_IN_GB":1192.757254225314\n        },\n        {\n          "DatabaseName":"EM",\n          "USEDSPACE_IN_GB":0.0007491111755371094,\n          "MAXSPACE_IN_GB":11.546071618795395,\n          "Percentage_Used":0.006488017745513208,\n          "REMAININGSPACE_IN_GB":11.545322507619858\n        },\n        {\n          "DatabaseName":"user10",\n          "USEDSPACE_IN_GB":0.019153594970703125,\n          "MAXSPACE_IN_GB":9.313225746154785,\n          "Percentage_Used":0.20566016,\n          "REMAININGSPACE_IN_GB":9.294072151184082\n        },\n        {\n          "DatabaseName":"EMEM",\n          "USEDSPACE_IN_GB":0.006140708923339844,\n          "MAXSPACE_IN_GB":4.656612873077393,\n          "Percentage_Used":0.13187072,\n          "REMAININGSPACE_IN_GB":4.650472164154053\n        },\n        {\n          "DatabaseName":"EMWork",\n          "USEDSPACE_IN_GB":0.0,\n          "MAXSPACE_IN_GB":4.656612873077393,\n          "Percentage_Used":0.0,\n          "REMAININGSPACE_IN_GB":4.656612873077393\n        }\n      ],\n      "rowCount":4,\n      "rowLimitExceeded":True\n    }\n  ]\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Para conocer los par\xe1metros de respuesta, consulte la ",(0,a.jsx)(n.a,{href:"https://docs.teradata.com/r/Teradata-Query-Service-Installation-Configuration-and-Usage-Guide-for-Customers/April-2022/Using-the-Query-Service-APIs/Submitting-SQL-Statement/Request-Body",children:"Gu\xeda de instalaci\xf3n, configuraci\xf3n y uso de Query Service"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"solicitar-una-respuesta-en-formato-csv",children:"Solicitar una respuesta en formato CSV"}),"\n",(0,a.jsxs)(n.p,{children:["Para devolver una respuesta API en formato CSV, configure el campo ",(0,a.jsx)(n.code,{children:"*format*"})," en la solicitud con el valor ",(0,a.jsx)(n.code,{children:"*CSV*"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"El formato CSV contiene solo los resultados de la consulta y no los metadatos de respuesta. La respuesta contiene una l\xednea para cada fila, donde cada l\xednea contiene las columnas de la fila separadas por una coma. El siguiente ejemplo devuelve los datos como valores separados por comas."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Solicitud"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# CSV with all rows included\n\nurl = 'https://<QS_HOSTNAME>:1443/systems/<SYSTEM_NAME>/queries'\n\npayload = {\n  'query': example_query, # 'SELECT * FROM DBC.DBCInfo;',\n  'format': 'CSV',\n  'includeColumns': True\n}\n\npayload_json = json.dumps(payload)\n\nresponse = requests.request('POST', url, headers=headers, data=payload_json, verify=False)\n\nprint(response.text)\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Respuesta"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"DatabaseName,USEDSPACE_IN_GB,MAXSPACE_IN_GB,Percentage_Used,REMAININGSPACE_IN_GB\nDBC                           ,317.7634754180908,1510.521079641879,21.036679308932754,1192.7576042237881\nEM                            ,7.491111755371094E-4,11.546071618795395,0.006488017745513208,11.545322507619858\nuser10                        ,0.019153594970703125,9.313225746154785,0.20566016,9.294072151184082\nEMEM                          ,0.006140708923339844,4.656612873077393,0.13187072,4.650472164154053\nEMWork                        ,0.0,4.656612873077393,0.0,4.656612873077393\nEMJI                          ,0.0,2.3283064365386963,0.0,2.3283064365386963\nUSER_NAME                     ,0.0,2.0,0.0,2.0\nreadonly                      ,0.0,0.9313225746154785,0.0,0.9313225746154785\naug12_db                      ,7.200241088867188E-5,0.9313225746154785,0.0077312,0.9312505722045898\nSystemFe                      ,1.8024444580078125E-4,0.7450580596923828,0.024192,0.744877815246582\ndbcmngr                       ,3.814697265625E-6,0.09313225746154785,0.004096,0.09312844276428223\nEMViews                       ,0.027594566345214844,0.09313225746154785,29.62944,0.06553769111633301\ntdwm                          ,6.732940673828125E-4,0.09313225746154785,0.722944,0.09245896339416504\nCrashdumps                    ,0.0,0.06984921544790268,0.0,0.06984921544790268\nSYSLIB                        ,0.006252288818359375,0.03725290298461914,16.78336,0.031000614166259766\nSYSBAR                        ,4.76837158203125E-6,0.03725290298461914,0.0128,0.03724813461303711\nSYSUDTLIB                     ,3.5381317138671875E-4,0.029802322387695312,1.1872,0.029448509216308594\nExternal_AP                   ,0.0,0.01862645149230957,0.0,0.01862645149230957\nSysAdmin                      ,0.002307891845703125,0.01862645149230957,12.3904,0.016318559646606445\nKZXaDtQp                      ,0.0,0.009313225746154785,0.0,0.009313225746154785\ns476QJ6O                      ,0.0,0.009313225746154785,0.0,0.009313225746154785\nhTzz03i7                      ,0.0,0.009313225746154785,0.0,0.009313225746154785\nY5WYUUXj                      ,0.0,0.009313225746154785,0.0,0.009313225746154785\n"})}),"\n",(0,a.jsx)(n.h2,{id:"utilice-una-sesi\xf3n-expl\xedcita-para-enviar-una-consulta",children:"Utilice una sesi\xf3n expl\xedcita para enviar una consulta"}),"\n",(0,a.jsx)(n.p,{children:"Utilice sesiones expl\xedcitas cuando una transacci\xf3n necesite abarcar varias solicitudes o cuando utilice tablas vol\xe1tiles. Estas sesiones solo se reutilizan si hace referencia a las sesiones en una solicitud de consulta. La solicitud se pone en cola si hace referencia a una sesi\xf3n expl\xedcita que ya est\xe1 en uso."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Crear una sesi\xf3n\nEnv\xede una solicitud POST al punto final ",(0,a.jsx)(n.code,{children:"/system/<SYSTEM_NAME>/sessions"}),". La solicitud crea una nueva sesi\xf3n de base de datos y devuelve los detalles de la sesi\xf3n como respuesta."]}),"\n",(0,a.jsxs)(n.p,{children:["En el siguiente ejemplo, la solicitud incluye ",(0,a.jsx)(n.code,{children:"'auto_commit': True"}),": la solicitud para confirmar la consulta al finalizar."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Solicitud"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# first create a session\nurl = 'https://<QS_HOSTNAME>:1443/systems/<SYSTEM_NAME>/sessions'\n\npayload = {\n  'auto_commit': True\n}\n\npayload_json = json.dumps(payload)\n\nresponse = requests.request('POST', url, headers=headers, data=payload_json, verify=False)\n\nprint(response.text)\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Respuesta"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"{\n  'sessionId': 1366010,\n  'system': 'testsystem',\n  'user': 'dbc',\n  'tdSessionNo': 1626922,\n  'createMode': 'EXPLICIT',\n  'state': 'LOGGINGON',\n  'autoCommit': true\n}\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Utilice la sesi\xf3n creada en el Paso 1 para enviar consultas."}),"\n",(0,a.jsxs)(n.p,{children:["Env\xede una solicitud POST al punto final ",(0,a.jsx)(n.code,{children:"/system/<SYSTEM_NAME>/queries"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"La solicitud env\xeda consultas al sistema de destino y devuelve la versi\xf3n y el n\xfamero de versi\xf3n del sistema de destino."}),"\n",(0,a.jsx)(n.p,{children:"En el siguiente ejemplo, la solicitud incluye:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"SELECT * FROM DBC.DBCInfo"}),": la consulta al sistema con el alias ",(0,a.jsx)(n.code,{children:"<SYSTEM_NAME>"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"'format': 'OBJECT'"}),": el formato de respuesta."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"'Session' : <Session ID>"}),": el ID de sesi\xf3n devuelto en el Paso 1 para crear una sesi\xf3n expl\xedcita."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Solicitud"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# use this session to submit queries afterwards\n\nurl = 'https://<QS_HOSTNAME>:1443/systems/<SYSTEM_NAME>/queries'\n\npayload = {\n  'query': 'SELECT * FROM DBC.DBCInfo;',\n  'format': 'OBJECT',\n  'session': 1366010 # <-- sessionId\n}\npayload_json = json.dumps(payload)\n\nresponse = requests.request('POST', url, headers=headers, data=payload_json, verify=False)\n\nprint(response.text)\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Respuesta"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "queueDuration":6,\n  "queryDuration":41,\n  "results":[\n    {\n      "resultSet":true,\n      "data":[\n        {\n          "InfoKey":"LANGUAGE SUPPORT MODE",\n          "InfoData":"Standard"\n        },\n        {\n          "InfoKey":"RELEASE",\n          "InfoData":"15.10.07.02"\n        },\n        {\n          "InfoKey":"VERSION",\n          "InfoData":"15.10.07.02"\n        }\n      ],\n      "rowCount":3,\n      "rowLimitExceeded":false\n    }\n  ]\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"utilizar-consultas-asincr\xf3nicas",children:"Utilizar consultas asincr\xf3nicas"}),"\n",(0,a.jsx)(n.p,{children:"Utilice consultas asincr\xf3nicas cuando el rendimiento de un sistema o red se vea afectado por la consulta de un gran grupo de datos o consultas de larga duraci\xf3n."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Env\xede consultas asincr\xf3nicas al sistema de destino y recupere un ID de consulta\nEnv\xede una solicitud POST al punto final ",(0,a.jsx)(n.code,{children:"/system/<SYSTEM_NAME>/queries"}),".\nEn el siguiente ejemplo, la solicitud incluye:\n* ",(0,a.jsx)(n.code,{children:"SELECT * FROM DBC.DBCInfo"}),": la consulta al sistema con el alias ",(0,a.jsx)(n.code,{children:"<SYSTEM_NAME>"}),".\n* ",(0,a.jsx)(n.code,{children:"'format': 'OBJECT'"}),": el formato de respuesta.\n* ",(0,a.jsx)(n.code,{children:"'spooled_result_set': True"}),": la indicaci\xf3n de que la solicitud es asincr\xf3nica."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Solicitud"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"## Run async query .\n\nurl = 'https://<QS_HOSTNAME>:1443/systems/<SYSTEM_NAME>/queries'\n\npayload = {\n  'query': 'SELECT * FROM DBC.DBCInfo;',\n  'format': 'OBJECT',\n  'spooled_result_set': True\n}\n\npayload_json = json.dumps(payload)\nresponse = requests.request('POST', url, headers=headers, data=payload_json, verify=False)\n\nprint(response.text)\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Respuesta"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{"id":1366025}\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Obtenga los detalles de la consulta utilizando el ID recuperado en el Paso 1"}),"\n",(0,a.jsxs)(n.p,{children:["Env\xede una solicitud GET al punto final ",(0,a.jsx)(n.code,{children:"/system/<SYSTEM_NAME>/queries/<queryID>"}),", reemplazando ",(0,a.jsx)(n.code,{children:"<queryID>"})," con el ID recuperado en el Paso 1."]}),"\n",(0,a.jsxs)(n.p,{children:["La solicitud devuelve los detalles de la consulta espec\xedfica, incluidos ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"queryState"})}),", ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"queueOrder"})}),", ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"queueDuration"})}),", etc. Para obtener una lista completa de los campos de respuesta y sus descripciones, consulte la ",(0,a.jsx)(n.a,{href:"https://docs.teradata.com/r/Teradata-Query-Service-Installation-Configuration-and-Usage-Guide-for-Customers/April-2022/Using-the-Query-Service-APIs/Submitting-SQL-Statement/Request-Body",children:"Gu\xeda de instalaci\xf3n, configuraci\xf3n y uso de Query Service"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Solicitud"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"## response for async query .\n\nurl = 'https://<QS_HOSTNAME>:1443/systems/<SYSTEM_NAME>/queries/1366025'\n\npayload_json = json.dumps(payload)\nresponse = requests.request('GET', url, headers=headers, verify=False)\n\nprint(response.text)\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Respuesta"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'{\n  "queryId":1366025,\n  "query":"SELECT * FROM DBC.DBCInfo;",\n  "batch":false,\n  "system":"testsystem",\n  "user":"dbc",\n  "session":1366015,\n  "queryState":"RESULT_SET_READY",\n  "queueOrder":0,\n  "queueDuration":6,\n  "queryDuration":9,\n  "statusCode":200,\n  "resultSets":{\n\n  },\n  "counts":{\n\n  },\n  "exceptions":{\n\n  },\n  "outParams":{\n\n  }\n}\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Ver el conjunto de resultados de la consulta asincr\xf3nica"}),"\n",(0,a.jsxs)(n.p,{children:["Env\xede una solicitud GET al punto final ",(0,a.jsx)(n.code,{children:"/system/<SYSTEM_NAME>/queries/<queryID>/results"}),", reemplazando ",(0,a.jsx)(n.code,{children:"<queryID>"})," con el ID recuperado en el Paso 1."]}),"\n",(0,a.jsx)(n.p,{children:"La solicitud devuelve una matriz de los conjuntos de resultados y los recuentos de actualizaciones producidos por la consulta enviada."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Solicitud"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"url = 'https://<QS_HOSTNAME>:1443/systems/<SYSTEM_NAME>/queries/1366025/results'\n\npayload_json = json.dumps(payload)\nresponse = requests.request('GET', url, headers=headers, verify=False)\n\nprint(response.text)\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Respuesta"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "queueDuration":6,\n  "queryDuration":9,\n  "results":[\n    {\n      "resultSet":true,\n      "data":[\n        {\n          "InfoKey":"LANGUAGE SUPPORT MODE",\n          "InfoData":"Standard"\n        },\n        {\n          "InfoKey":"RELEASE",\n          "InfoData":"15.10.07.02"\n        },\n        {\n          "InfoKey":"VERSION",\n          "InfoData":"15.10.07.02"\n        }\n      ],\n      "rowCount":3,\n      "rowLimitExceeded":false\n    }\n  ]\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"obtener-una-lista-de-consultas-activas-o-en-cola",children:"Obtener una lista de consultas activas o en cola"}),"\n",(0,a.jsxs)(n.p,{children:["Env\xede una solicitud GET al punto final ",(0,a.jsx)(n.code,{children:"/system/<SYSTEM_NAME>/queries"}),". La solicitud devuelve los ID de las consultas activas."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Solicitud"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"url = 'https://<QS_HOSTNAME>:1443/systems/<SYSTEM_NAME>/queries'\n\npayload={}\n\nresponse = requests.request('GET', url, headers=headers, data=payload, verify=False)\n\nprint(response.json())\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Respuesta"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "queryId": 12516087,\n    "query": "SELECt * from dbcmgr.AlertRequest;",\n    "batch": false,\n    "system": "BasicTestSys",\n    "user": "dbc",\n    "session": 12516011,\n    "queryState": "REST_SET_READY",\n    "queueOrder": 0,\n    "queueDurayion": 3,\n    "queryDuration": 3,\n    "statusCode": 200,\n    "resultSets": {},\n    "counts": {},\n    "exceptions": {},\n    "outparams": {}\n  },\n  {\n    "queryId": 12516088,\n    "query": "SELECt * from dbc.DBQLAmpDataTbl;",\n    "batch": false,\n    "system": "BasicTestSys",\n    "user": "dbc",\n    "session": 12516011,\n    "queryState": "REST_SET_READY",\n    "queueOrder": 0,\n    "queueDurayion": 3,\n    "queryDuration": 3,\n    "statusCode": 200,\n    "resultSets": {},\n    "counts": {},\n    "exceptions": {},\n    "outparams": {}\n  }\n]\n'})}),"\n",(0,a.jsx)(n.h2,{id:"recursos",children:"Recursos"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Caracter\xedsticas, ejemplos y referencias: ",(0,a.jsx)(n.a,{href:"https://docs.teradata.com/r/Teradata-Query-Service-Installation-Configuration-and-Usage-Guide-for-Customers/April-2022",children:"Gu\xeda de instalaci\xf3n, configuraci\xf3n y uso de Query Service"})]}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://downloads.teradata.com/api/teradata_query_service",children:"Especificaci\xf3n de OpenAPI de la API del servicio de consulta"})}),"\n"]}),"\n","\n",(0,a.jsx)(t.Ay,{})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>o});var a=s(96540);const i={},r=a.createContext(i);function t(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);
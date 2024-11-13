"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[8251],{77692:(e,n,a)=>{a.d(n,{Ay:()=>s,RM:()=>o});var t=a(74848),r=a(28453);const o=[];function i(e){const n={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,r.R)(),...e.components};return(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["Si tiene alguna pregunta o necesita m\xe1s ayuda, visite nuestro ",(0,t.jsx)(n.a,{href:"https://support.teradata.com/community",children:"foro de la comunidad"})," donde podr\xe1 obtener ayuda e interactuar con otros miembros de la comunidad."]})]})}function s(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},23961:(e,n,a)=>{a.d(n,{Ay:()=>s,RM:()=>o});var t=a(74848),r=a(28453);const o=[];function i(e){const n={a:"a",admonition:"admonition",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,r.R)(),...e.components};return(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["Si necesita una instancia de prueba de Vantage, puede obtener una de forma gratuita en ",(0,t.jsx)(n.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})]})}function s(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},76155:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=a(74848),r=a(28453),o=a(23961),i=a(77692);a(56240),a(19365);const s={sidebar_position:15,id:"segment",author:"Ad\xe1n Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"18 de enero de 2022",description:"Almacene eventos de Twilio Segment en Teradata Vantage.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","customer data platform","cdp","segment"]},l="Almacenar eventos de Twilio Segment",c={id:"manage-data/segment",title:"Almacenar eventos de Twilio Segment",description:"Almacene eventos de Twilio Segment en Teradata Vantage.",source:"@site/i18n/es/docusaurus-plugin-content-docs-quickstarts/current/manage-data/segment.md",sourceDirName:"manage-data",slug:"/manage-data/segment",permalink:"/pr-preview/pr-158/es/quickstarts/manage-data/segment",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15,id:"segment",author:"Ad\xe1n Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"18 de enero de 2022",description:"Almacene eventos de Twilio Segment en Teradata Vantage.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","customer data platform","cdp","segment"]},sidebar:"tutorialSidebar",previous:{title:"Conectar Teradata Vantage a Salesforce mediante Amazon Appflow",permalink:"/pr-preview/pr-158/es/quickstarts/manage-data/integrate-teradata-vantage-to-salesforce-using-amazon-appflow"},next:{title:"Conectar Azure Data Share a Teradata Vantage",permalink:"/pr-preview/pr-158/es/quickstarts/manage-data/connect-azure-data-share-to-teradata-vantage"}},u={},d=[{value:"Informaci\xf3n general",id:"informaci\xf3n-general",level:2},{value:"Arquitectura",id:"arquitectura",level:2},{value:"Despliegue",id:"despliegue",level:2},{value:"Prerrequisitos",id:"prerrequisitos",level:3},...o.RM,{value:"Construir e implementar",id:"construir-e-implementar",level:3},{value:"Pru\xe9balo",id:"pru\xe9balo",level:2},{value:"Limitaciones",id:"limitaciones",level:2},{value:"Resumen",id:"resumen",level:2},{value:"Lectura adicional",id:"lectura-adicional",level:2},...i.RM];function m(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"almacenar-eventos-de-twilio-segment",children:"Almacenar eventos de Twilio Segment"}),"\n",(0,t.jsx)(n.h2,{id:"informaci\xf3n-general",children:"Informaci\xf3n general"}),"\n",(0,t.jsx)(n.p,{children:"Esta soluci\xf3n escucha eventos de Twilio Segment y escribe datos en una instancia de Teradata Vantage. El ejemplo utiliza Google Cloud, pero se puede traducir a cualquier plataforma en la nube."}),"\n",(0,t.jsx)(n.h2,{id:"arquitectura",children:"Arquitectura"}),"\n",(0,t.jsx)(n.p,{children:"En esta soluci\xf3n, Twilio Segment escribe datos de eventos sin procesar en Google Cloud Pub/Sub. Pub/Sub reenv\xeda eventos a una aplicaci\xf3n Cloud Run. La aplicaci\xf3n Cloud Run escribe datos en una base de datos Teradata Vantage. Es una soluci\xf3n sin servidor que no requiere asignaci\xf3n ni administraci\xf3n de ninguna m\xe1quina virtual."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Diagrama de flujo de segmentos de Google Cloud",src:a(75191).A+"",width:"933",height:"189"})}),"\n",(0,t.jsx)(n.h2,{id:"despliegue",children:"Despliegue"}),"\n",(0,t.jsx)(n.h3,{id:"prerrequisitos",children:"Prerrequisitos"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Una cuenta de Google Cloud. Si no tiene una cuenta, puede crear una en ",(0,t.jsx)(n.a,{href:"https://console.cloud.google.com/",children:"https://console.cloud.google.com/"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"gcloud"})," instalado. Consulte ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/sdk/docs/install",children:"https://cloud.google.com/sdk/docs/install"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Una instancia de Teradata Vantage con la que Google Cloud Run pueda comunicarse."}),"\n"]}),"\n",(0,t.jsx)(o.Ay,{}),"\n",(0,t.jsx)(n.h3,{id:"construir-e-implementar",children:"Construir e implementar"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Clone el repositorio de muestra:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"git clone git@github.com:Teradata/segment-integration-tutorial.git\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["El repositorio contiene el archivo ",(0,t.jsx)(n.code,{children:"segment.sql"})," que configura la base de datos, el script en su base de datos Vantage usando su IDE SQL favorito, ",(0,t.jsx)(n.a,{href:"https://downloads.teradata.com/download/tools/teradata-studio",children:"Estudio Teradata"})," o una herramienta de l\xednea de comandos llamada ",(0,t.jsx)(n.code,{children:"bteq"})," (descarga para ",(0,t.jsx)(n.a,{href:"https://downloads.teradata.com/node/7314",children:"Windows"}),", ",(0,t.jsx)(n.a,{href:"https://downloads.teradata.com/node/200442",children:"Linux"}),", ",(0,t.jsx)(n.a,{href:"https://downloads.teradata.com/node/201214",children:"macOS"}),".\nEl script SQL crear\xe1 una nueva base de datos llamada ",(0,t.jsx)(n.code,{children:"Segment"})," y un conjunto de tablas para almacenar eventos de segmento."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Establezca el proyecto y la regi\xf3n predeterminados:"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"gcloud config set project <PROJECT_ID>\ngcloud config set compute/region <REGION>\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Recupere la identificaci\xf3n del proyecto y el n\xfamero. Lo necesitaremos en pasos posteriores:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'export PROJECT_ID=$(gcloud config get-value project)\n\nexport PROJECT_NUMBER=$(gcloud projects list \\\n  --filter="$(gcloud config get-value project)" \\\n  --format="value(PROJECT_NUMBER)")\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"Habilite los servicios requeridos de Google Cloud:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"gcloud services enable cloudbuild.googleapis.com containerregistry.googleapis.com run.googleapis.com secretmanager.googleapis.com pubsub.googleapis.com\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsx)(n.li,{children:"Cree la aplicaci\xf3n:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"gcloud builds submit --tag gcr.io/$PROJECT_ID/segment-listener\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"7",children:["\n",(0,t.jsx)(n.li,{children:"Defina una clave API que compartir\xe1 con Segment. Guarde la clave API en Google Cloud Secret Manager:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"gcloud secrets create VANTAGE_USER_SECRET\necho -n 'dbc' > /tmp/vantage_user.txt\ngcloud secrets versions add VANTAGE_USER_SECRET --data-file=/tmp/vantage_user.txt\n\ngcloud secrets create VANTAGE_PASSWORD_SECRET\necho -n 'dbc' > /tmp/vantage_password.txt\ngcloud secrets versions add VANTAGE_PASSWORD_SECRET --data-file=/tmp/vantage_password.txt\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"8",children:["\n",(0,t.jsx)(n.li,{children:"La aplicaci\xf3n que escribe datos de segmento en Vantage utilizar\xe1 Cloud Run. Primero debemos permitir que Cloud Run acceda a los secretos:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"gcloud projects add-iam-policy-binding $PROJECT_ID \\\n     --member=serviceAccount:$PROJECT_NUMBER-compute@developer.gserviceaccount.com \\\n     --role=roles/secretmanager.secretAccessor\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"9",children:["\n",(0,t.jsxs)(n.li,{children:["Implemente la aplicaci\xf3n en Cloud Run (reemplace ",(0,t.jsx)(n.code,{children:"<VANTAGE_HOST>"})," con el nombre de host o IP de su base de datos Teradata Vantage). La segunda declaraci\xf3n de exportaci\xf3n guarda la URL del servicio tal como la necesitamos para comandos posteriores:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"gcloud run deploy --image gcr.io/$PROJECT_ID/segment-listener segment-listener \\\n  --region $(gcloud config get-value compute/region) \\\n  --update-env-vars VANTAGE_HOST=35.239.251.1 \\\n  --update-secrets 'VANTAGE_USER=VANTAGE_USER_SECRET:1, VANTAGE_PASSWORD=VANTAGE_PASSWORD_SECRET:1' \\\n  --no-allow-unauthenticated\n\nexport SERVICE_URL=$(gcloud run services describe segment-listener --platform managed --region $(gcloud config get-value compute/region) --format 'value(status.url)')\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"10",children:["\n",(0,t.jsx)(n.li,{children:"Crea un tema de Pub/Sub que recibir\xe1 eventos del segmento:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"gcloud pubsub topics create segment-events\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"11",children:["\n",(0,t.jsx)(n.li,{children:"Crea una cuenta de servicio que Pub/Sub utilizar\xe1 para invocar la aplicaci\xf3n Cloud Run:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'gcloud iam service-accounts create cloud-run-pubsub-invoker \\\n     --display-name "Cloud Run Pub/Sub Invoker"\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"12",children:["\n",(0,t.jsx)(n.li,{children:"Otorgue permiso a la cuenta de servicio para invocar Cloud Run:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"gcloud run services add-iam-policy-binding segment-listener \\\n  --region $(gcloud config get-value compute/region) \\\n  --member=serviceAccount:cloud-run-pubsub-invoker@$PROJECT_ID.iam.gserviceaccount.com \\\n  --role=roles/run.invoker\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"13",children:["\n",(0,t.jsx)(n.li,{children:"Permita que Pub/Sub cree tokens de autenticaci\xf3n en su proyecto:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"gcloud projects add-iam-policy-binding $PROJECT_ID \\\n  --member=serviceAccount:service-$PROJECT_NUMBER@gcp-sa-pubsub.iam.gserviceaccount.com \\\n  --role=roles/iam.serviceAccountTokenCreator\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"14",children:["\n",(0,t.jsx)(n.li,{children:"Crea una suscripci\xf3n Pub/Sub con la cuenta de servicio:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"gcloud pubsub subscriptions create segment-events-cloudrun-subscription --topic projects/$PROJECT_ID/topics/segment-events \\\n   --push-endpoint=$SERVICE_URL \\\n   --push-auth-service-account=cloud-run-pubsub-invoker@$PROJECT_ID.iam.gserviceaccount.com \\\n   --max-retry-delay 600 \\\n   --min-retry-delay 30\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"15",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Permita que Segment publique en su tema. Para hacerlo, asigne el rol ",(0,t.jsx)(n.code,{children:"pubsub@segment-integrations.iam.gserviceaccount.com"})," ",(0,t.jsx)(n.code,{children:"Pub/Sub Publisher"})," en su proyecto en ",(0,t.jsx)(n.a,{href:"https://console.cloud.google.com/cloudpubsub/topic/list",children:"https://console.cloud.google.com/cloudpubsub/topic/list"}),". Consulte el ",(0,t.jsx)(n.a,{href:"https://segment.com/docs/connections/destinations/catalog/google-cloud-pubsub/#authentication",children:"Manual de segmentos"})," para obtener m\xe1s detalles."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Configure su Google Cloud Pub/Sub como destino en Segment. Utilice el tema completo ",(0,t.jsx)(n.code,{children:"projects/<PROJECT_ID>/topics/segment-events"})," y asigne todos los tipos de eventos de segmento (usando el car\xe1cter ",(0,t.jsx)(n.code,{children:"*"}),") al tema."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"pru\xe9balo",children:"Pru\xe9balo"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Utilice la funcionalidad Probador de eventos de Segment para enviar una carga \xfatil de muestra al tema. Verifique que los datos de muestra se hayan almacenado en Vantage."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"limitaciones",children:"Limitaciones"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"El ejemplo muestra c\xf3mo implementar la aplicaci\xf3n en una sola regi\xf3n. En muchos casos, esta configuraci\xf3n no garantiza suficiente tiempo de actividad. La aplicaci\xf3n Cloud Run debe implementarse en m\xe1s de una regi\xf3n detr\xe1s de un Global Load Balancer."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"resumen",children:"Resumen"}),"\n",(0,t.jsx)(n.p,{children:"Este tutorial demuestra c\xf3mo enviar eventos de Segment a Teradata Vantage. La configuraci\xf3n reenv\xeda eventos de Segment a Google Cloud Pub/Sub y luego a una aplicaci\xf3n Cloud Run. La aplicaci\xf3n escribe datos en Teradata Vantage."}),"\n",(0,t.jsx)(n.h2,{id:"lectura-adicional",children:"Lectura adicional"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://segment.com/docs/connections/destinations/catalog/google-cloud-pubsub/",children:"Documentaci\xf3n de destino de Pub/Sub de Segment"})}),"\n"]}),"\n",(0,t.jsx)(i.Ay,{})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>i});a(96540);var t=a(34164);const r={tabItem:"tabItem_Ymn6"};var o=a(74848);function i(e){var n=e.children,a=e.hidden,i=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,i),hidden:a,children:n})}},56240:(e,n,a)=>{a.d(n,{A:()=>T});var t=a(96540),r=a(34164),o=a(23104),i=a(56347),s=a(205),l=a(57485);var c=a(89466);function u(e){var n,a;return null!=(n=null==(a=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?n:[]}function d(e){var n=e.values,a=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(a);return function(e){var n,a,t=(void 0===(a=function(e,n){return e.value===n.value})&&(a=function(e,n){return e===n}),(n=e).filter((function(e,t){return n.findIndex((function(n){return a(n,e)}))!==t})));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,a])}function m(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,a=void 0!==n&&n,r=e.groupId,o=(0,i.W6)(),s=function(e){var n=e.queryString,a=void 0!==n&&n,t=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:a,groupId:r});return[(0,l.aZ)(s),(0,t.useCallback)((function(e){if(s){var n=new URLSearchParams(o.location.search);n.set(s,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[s,o])]}function g(e){var n,a,r,o,i=e.defaultValue,l=e.queryString,u=void 0!==l&&l,g=e.groupId,h=d(e),v=(0,t.useState)((function(){return function(e){var n,a=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:h})})),b=v[0],x=v[1],f=p({queryString:u,groupId:g}),j=f[0],T=f[1],E=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:g}.groupId),a=(0,c.Dv)(n),r=a[0],o=a[1],[r,(0,t.useCallback)((function(e){n&&o.set(e)}),[n,o])]),S=E[0],A=E[1],C=function(){var e=null!=j?j:S;return m({value:e,tabValues:h})?e:null}();return(0,s.A)((function(){C&&x(C)}),[C]),{selectedValue:b,selectValue:(0,t.useCallback)((function(e){if(!m({value:e,tabValues:h}))throw new Error("Can't select invalid tab value="+e);x(e),T(e),A(e)}),[T,A,h]),tabValues:h}}var h=a(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=a(74848);function x(e){var n=e.className,a=e.block,t=e.selectedValue,i=e.selectValue,s=e.tabValues,l=[],c=(0,o.a_)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,a=l.indexOf(n),r=s[a].value;r!==t&&(c(n),i(r))},d=function(e){var n,a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var t,r=l.indexOf(e.currentTarget)+1;a=null!=(t=l[r])?t:l[0];break;case"ArrowLeft":var o,i=l.indexOf(e.currentTarget)-1;a=null!=(o=l[i])?o:l[l.length-1]}null==(n=a)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},n),children:s.map((function(e){var n=e.value,a=e.label,o=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},o,{className:(0,r.A)("tabs__item",v.tabItem,null==o?void 0:o.className,{"tabs__item--active":t===n}),children:null!=a?a:n}),n)}))})}function f(e){var n=e.lazy,a=e.children,r=e.selectedValue,o=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){var i=o.find((function(e){return e.props.value===r}));return i?(0,t.cloneElement)(i,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})}))})}function j(e){var n=g(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,b.jsx)(x,Object.assign({},e,n)),(0,b.jsx)(f,Object.assign({},e,n))]})}function T(e){var n=(0,h.A)();return(0,b.jsx)(j,Object.assign({},e,{children:u(e.children)}),String(n))}},75191:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/segment.flow.diagram-745525a22933c7b8742c25d4e961c76d.png"},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>s});var t=a(96540);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);
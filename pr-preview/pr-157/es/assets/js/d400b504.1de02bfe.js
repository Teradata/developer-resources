"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[8876],{23857:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=n(74848),t=n(28453);n(56240),n(19365);const o={id:"run-jupyter-docker",title:"Ejecutar JupyterLab usando Docker",description:"Aprenda a ejecutar JupyterLab con el AI Unlimited Jupyter Kernel en su ordenador.",sidebar_label:"Ejecutar localmente usando Docker",sidebar_position:3,pagination_prev:null,pagination_next:null},i="Ejecutar JupyterLab localmente usando Docker",u={id:"resources/jupyterlab/run-jupyter-docker",title:"Ejecutar JupyterLab usando Docker",description:"Aprenda a ejecutar JupyterLab con el AI Unlimited Jupyter Kernel en su ordenador.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/resources/jupyterlab/run-jupyterlab-docker.md",sourceDirName:"resources/jupyterlab",slug:"/resources/jupyterlab/run-jupyter-docker",permalink:"/pr-preview/pr-157/es/ai-unlimited/resources/jupyterlab/run-jupyter-docker",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"run-jupyter-docker",title:"Ejecutar JupyterLab usando Docker",description:"Aprenda a ejecutar JupyterLab con el AI Unlimited Jupyter Kernel en su ordenador.",sidebar_label:"Ejecutar localmente usando Docker",sidebar_position:3,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},l={},c=[{value:"Establecer una ubicaci\xf3n para los archivos de configuraci\xf3n de JupyterLab",id:"establecer-una-ubicaci\xf3n-para-los-archivos-de-configuraci\xf3n-de-jupyterlab",level:2},{value:"Clonar el repositorio",id:"clonar-el-repositorio",level:2},{value:"Iniciar JupyterLab",id:"iniciar-jupyterlab",level:2},{value:"Verificar el acceso a JupyterLab",id:"verificar-el-acceso-a-jupyterlab",level:2}];function s(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h1,{id:"ejecutar-jupyterlab-localmente-usando-docker",children:"Ejecutar JupyterLab localmente usando Docker"}),"\n",(0,a.jsxs)(r.p,{children:["Utilizar\xe1 ",(0,a.jsx)(r.a,{href:"https://docs.docker.com/compose/",children:"Docker Compose"})," para ejecutar JupyterLab, con el AI Unlimited Jupyter Kernel, localmente en un contenedor."]}),"\n",(0,a.jsx)(r.admonition,{type:"tip",children:(0,a.jsxs)(r.p,{children:["Para obtener ayuda con la instalaci\xf3n, env\xede un correo electr\xf3nico al ",(0,a.jsx)("a",{href:"mailto:aiunlimited.support@Teradata.com",children:"equipo de soporte"})," o pregunte a la ",(0,a.jsx)(r.a,{href:"https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa",children:"comunidad"}),"."]})}),"\n",(0,a.jsx)(r.h2,{id:"establecer-una-ubicaci\xf3n-para-los-archivos-de-configuraci\xf3n-de-jupyterlab",children:"Establecer una ubicaci\xf3n para los archivos de configuraci\xf3n de JupyterLab"}),"\n",(0,a.jsxs)(r.p,{children:["De manera opcional, configure la variable de entorno ",(0,a.jsx)(r.code,{children:"JUPYTER_HOME"})," en el directorio en el que se almacenar\xe1n los archivos de configuraci\xf3n de JupyterLab. La ubicaci\xf3n predeterminada es ",(0,a.jsx)(r.code,{children:"~/.jupyter"}),"."]}),"\n",(0,a.jsx)(r.admonition,{type:"tip",children:(0,a.jsxs)(r.p,{children:["Obtenga m\xe1s informaci\xf3n sobre las variables de entorno de ",(0,a.jsx)(r.a,{href:"https://docs.aws.amazon.com/sdkref/latest/guide/environment-variables.html",children:"AWS"})," o ",(0,a.jsx)(r.a,{href:"https://github.com/paulbouwer/terraform-azure-quickstarts-samples/blob/master/README.md#azure-authentication",children:"Azure"}),"."]})}),"\n",(0,a.jsx)(r.h2,{id:"clonar-el-repositorio",children:"Clonar el repositorio"}),"\n",(0,a.jsxs)(r.p,{children:["La carpeta ",(0,a.jsx)(r.code,{children:"deployments/docker"})," en el ",(0,a.jsx)(r.a,{href:"https://github.com/Teradata/ai-unlimited",children:"repositorio de GitHub de AI Unlimited"})," proporcionado por Teradata incluye el archivo ",(0,a.jsx)(r.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/docker/jupyter.yaml",children:"jupyter.yaml"})," que necesita para ejecutar JupyterLab."]}),"\n",(0,a.jsx)(r.p,{children:"Clone el repositorio."}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"git clone https://github.com/Teradata/ai-unlimited\n"})}),"\n",(0,a.jsx)(r.h2,{id:"iniciar-jupyterlab",children:"Iniciar JupyterLab"}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["Vaya al directorio donde se encuentra ",(0,a.jsx)(r.code,{children:"jupyter.yaml"})," e inicie JupyterLab."]}),"\n",(0,a.jsx)(r.admonition,{type:"note",children:(0,a.jsxs)(r.p,{children:["La bandera ",(0,a.jsx)(r.code,{children:"-d"})," en el comando es opcional."]})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",metastring:'title="Run the Docker Compose file in the background "',children:"docker compose -f jupyter.yaml -d up \n"})}),"\n",(0,a.jsx)(r.p,{children:"El comando descarga e inicia el contenedor JupyterLab."}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"Para recuperar el token Jupyter, enumere los contenedores que se est\xe1n ejecutando actualmente."}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"docker ps \n"})}),"\n",(0,a.jsx)(r.p,{children:"E identifique el nombre del contenedor JupyterLab."}),"\n",(0,a.jsx)(r.p,{children:"Luego, busque ocurrencias de la cadena 'Token' en los registros del contenedor."}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"docker logs <container_name> | grep 'Token'\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"verificar-el-acceso-a-jupyterlab",children:"Verificar el acceso a JupyterLab"}),"\n",(0,a.jsxs)(r.p,{children:["Cuando JupyterLab est\xe9 listo, podr\xe1 acceder a \xe9l en ",(0,a.jsx)(r.code,{children:"http://localhost:8888"})," e introducir el token."]})]})}function d(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>i});n(96540);var a=n(34164);const t={tabItem:"tabItem_Ymn6"};var o=n(74848);function i(e){var r=e.children,n=e.hidden,i=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(t.tabItem,i),hidden:n,children:r})}},56240:(e,r,n)=>{n.d(r,{A:()=>x});var a=n(96540),t=n(34164),o=n(23104),i=n(56347),u=n(205),l=n(57485);var c=n(89466);function s(e){var r,n;return null!=(r=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((r=e.props)&&"object"==typeof r&&"value"in r))return e;var r;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?r:[]}function d(e){var r=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=r?r:function(e){return s(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}(n);return function(e){var r,n,a=(void 0===(n=function(e,r){return e.value===r.value})&&(n=function(e,r){return e===r}),(r=e).filter((function(e,a){return r.findIndex((function(r){return n(r,e)}))!==a})));if(a.length>0)throw new Error('Docusaurus error: Duplicate values "'+a.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,n])}function p(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function b(e){var r=e.queryString,n=void 0!==r&&r,t=e.groupId,o=(0,i.W6)(),u=function(e){var r=e.queryString,n=void 0!==r&&r,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:t});return[(0,l.aZ)(u),(0,a.useCallback)((function(e){if(u){var r=new URLSearchParams(o.location.search);r.set(u,e),o.replace(Object.assign({},o.location,{search:r.toString()}))}}),[u,o])]}function h(e){var r,n,t,o,i=e.defaultValue,l=e.queryString,s=void 0!==l&&l,h=e.groupId,m=d(e),f=(0,a.useState)((function(){return function(e){var r,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var t=null!=(r=a.find((function(e){return e.default})))?r:a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:i,tabValues:m})})),v=f[0],j=f[1],y=b({queryString:s,groupId:h}),g=y[0],x=y[1],k=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),n=(0,c.Dv)(r),t=n[0],o=n[1],[t,(0,a.useCallback)((function(e){r&&o.set(e)}),[r,o])]),L=k[0],E=k[1],J=function(){var e=null!=g?g:L;return p({value:e,tabValues:m})?e:null}();return(0,u.A)((function(){J&&j(J)}),[J]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);j(e),x(e),E(e)}),[x,E,m]),tabValues:m}}var m=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function j(e){var r=e.className,n=e.block,a=e.selectedValue,i=e.selectValue,u=e.tabValues,l=[],c=(0,o.a_)().blockElementScrollPositionUntilNextRender,s=function(e){var r=e.currentTarget,n=l.indexOf(r),t=u[n].value;t!==a&&(c(r),i(t))},d=function(e){var r,n=null;switch(e.key){case"Enter":s(e);break;case"ArrowRight":var a,t=l.indexOf(e.currentTarget)+1;n=null!=(a=l[t])?a:l[0];break;case"ArrowLeft":var o,i=l.indexOf(e.currentTarget)-1;n=null!=(o=l[i])?o:l[l.length-1]}null==(r=n)||r.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":n},r),children:u.map((function(e){var r=e.value,n=e.label,o=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:function(e){return l.push(e)},onKeyDown:d,onClick:s},o,{className:(0,t.A)("tabs__item",f.tabItem,null==o?void 0:o.className,{"tabs__item--active":a===r}),children:null!=n?n:r}),r)}))})}function y(e){var r=e.lazy,n=e.children,t=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){var i=o.find((function(e){return e.props.value===t}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map((function(e,r){return(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==t})}))})}function g(e){var r=h(e);return(0,v.jsxs)("div",{className:(0,t.A)("tabs-container",f.tabList),children:[(0,v.jsx)(j,Object.assign({},e,r)),(0,v.jsx)(y,Object.assign({},e,r))]})}function x(e){var r=(0,m.A)();return(0,v.jsx)(g,Object.assign({},e,{children:s(e.children)}),String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>u});var a=n(96540);const t={},o=a.createContext(t);function i(e){const r=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function u(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(o.Provider,{value:r},e.children)}}}]);
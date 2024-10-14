"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[9500],{48102:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=r(74848),a=r(28453);r(56240),r(19365);const i={id:"run-jupyter-docker",title:"Ausf\xfchren von JupyterLab mit Docker",description:"Erfahren Sie, wie Sie JupyterLab mit dem AI Unlimited Jupyter Kernel auf Ihrem Computer ausf\xfchren.",sidebar_label:"Lokale Ausf\xfchrung mit Docker",sidebar_position:3,pagination_prev:null,pagination_next:null},u="F\xfchren Sie JupyterLab lokal mit Docker aus",s={id:"resources/jupyterlab/run-jupyter-docker",title:"Ausf\xfchren von JupyterLab mit Docker",description:"Erfahren Sie, wie Sie JupyterLab mit dem AI Unlimited Jupyter Kernel auf Ihrem Computer ausf\xfchren.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/resources/jupyterlab/run-jupyterlab-docker.md",sourceDirName:"resources/jupyterlab",slug:"/resources/jupyterlab/run-jupyter-docker",permalink:"/pr-preview/pr-151/de/ai-unlimited/resources/jupyterlab/run-jupyter-docker",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"run-jupyter-docker",title:"Ausf\xfchren von JupyterLab mit Docker",description:"Erfahren Sie, wie Sie JupyterLab mit dem AI Unlimited Jupyter Kernel auf Ihrem Computer ausf\xfchren.",sidebar_label:"Lokale Ausf\xfchrung mit Docker",sidebar_position:3,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},o={},l=[{value:"Festlegen eines Speicherorts f\xfcr JupyterLab-Konfigurationsdateien",id:"festlegen-eines-speicherorts-f\xfcr-jupyterlab-konfigurationsdateien",level:2},{value:"Klonen des Repository",id:"klonen-des-repository",level:2},{value:"Starten Sie JupyterLab",id:"starten-sie-jupyterlab",level:2},{value:"\xdcberpr\xfcfen des Zugriffs auf JupyterLab",id:"\xfcberpr\xfcfen-des-zugriffs-auf-jupyterlab",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"f\xfchren-sie-jupyterlab-lokal-mit-docker-aus",children:"F\xfchren Sie JupyterLab lokal mit Docker aus"}),"\n",(0,t.jsxs)(n.p,{children:["Sie verwenden ",(0,t.jsx)(n.a,{href:"https://docs.docker.com/compose/",children:"Docker Compose"}),", um JupyterLab mit dem AI Unlimited Jupyter Kernel lokal in einem Container auszuf\xfchren."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Wenn Sie Unterst\xfctzung bei der Installation ben\xf6tigen, senden Sie eine E-Mail an das ",(0,t.jsx)("a",{href:"mailto:aiunlimited.support@Teradata.com",children:"Support-Team"})," oder fragen Sie die ",(0,t.jsx)(n.a,{href:"https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa",children:"Gemeinschaft"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"festlegen-eines-speicherorts-f\xfcr-jupyterlab-konfigurationsdateien",children:"Festlegen eines Speicherorts f\xfcr JupyterLab-Konfigurationsdateien"}),"\n",(0,t.jsxs)(n.p,{children:["Legen Sie optional die Umgebungsvariable ",(0,t.jsx)(n.code,{children:"JUPYTER_HOME"})," auf das Verzeichnis fest, in dem die JupyterLab-Konfigurationsdateien gespeichert werden sollen. Der Standardspeicherort ist ",(0,t.jsx)(n.code,{children:"~/.jupyter"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Erfahren Sie mehr \xfcber die Umgebungsvariablen in ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/sdkref/latest/guide/environment-variables.html",children:"AWS"})," oder ",(0,t.jsx)(n.a,{href:"https://github.com/paulbouwer/terraform-azure-quickstarts-samples/blob/master/README.md#azure-authentication",children:"Azure"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"klonen-des-repository",children:"Klonen des Repository"}),"\n",(0,t.jsxs)(n.p,{children:["Der Ordner ",(0,t.jsx)(n.code,{children:"deployments/docker"})," im von Teradata bereitgestellten ",(0,t.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited",children:"AI Unlimited GitHub-Repository"})," enth\xe4lt die Datei ",(0,t.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/docker/jupyter.yaml",children:"jupyter.yaml"}),", die Sie zum Ausf\xfchren von JupyterLab ben\xf6tigen."]}),"\n",(0,t.jsx)(n.p,{children:"Klonen Sie das Repository."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/Teradata/ai-unlimited\n"})}),"\n",(0,t.jsx)(n.h2,{id:"starten-sie-jupyterlab",children:"Starten Sie JupyterLab"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Gehen Sie in das Verzeichnis, in dem sich ",(0,t.jsx)(n.code,{children:"jupyter.yaml"})," befindet, und starten Sie JupyterLab."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Die Kennzeichnung ",(0,t.jsx)(n.code,{children:"-d"})," im Befehl ist optional."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="Run the Docker Compose file in the background "',children:"docker compose -f jupyter.yaml -d up \n"})}),"\n",(0,t.jsx)(n.p,{children:"Der Befehl l\xe4dt den JupyterLab-Container herunter und startet ihn."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Um das Jupyter-Token abzurufen, listen Sie die aktuell ausgef\xfchrten Container auf."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker ps \n"})}),"\n",(0,t.jsx)(n.p,{children:"Und ermitteln Sie den Namen des JupyterLab-Containers."}),"\n",(0,t.jsx)(n.p,{children:"Suchen Sie dann in den Protokollen des Containers nach Vorkommen der Zeichenfolge \u201eToken\u201c."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker logs <container_name> | grep 'Token'\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\xfcberpr\xfcfen-des-zugriffs-auf-jupyterlab",children:"\xdcberpr\xfcfen des Zugriffs auf JupyterLab"}),"\n",(0,t.jsxs)(n.p,{children:["Wenn JupyterLab bereit ist, k\xf6nnen Sie unter ",(0,t.jsx)(n.code,{children:"http://localhost:8888"})," darauf zugreifen und das Token eingeben."]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>u});r(96540);var t=r(34164);const a={tabItem:"tabItem_Ymn6"};var i=r(74848);function u(e){var n=e.children,r=e.hidden,u=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,u),hidden:r,children:n})}},56240:(e,n,r)=>{r.d(n,{A:()=>x});var t=r(96540),a=r(34164),i=r(23104),u=r(56347),s=r(205),o=r(57485);var l=r(89466);function c(e){var n,r;return null!=(n=null==(r=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function d(e){var n=e.values,r=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return c(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n,r,t=(void 0===(r=function(e,n){return e.value===n.value})&&(r=function(e,n){return e===n}),(n=e).filter((function(e,t){return n.findIndex((function(n){return r(n,e)}))!==t})));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function h(e){var n=e.queryString,r=void 0!==n&&n,a=e.groupId,i=(0,u.W6)(),s=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:a});return[(0,o.aZ)(s),(0,t.useCallback)((function(e){if(s){var n=new URLSearchParams(i.location.search);n.set(s,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[s,i])]}function f(e){var n,r,a,i,u=e.defaultValue,o=e.queryString,c=void 0!==o&&o,f=e.groupId,m=d(e),b=(0,t.useState)((function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:u,tabValues:m})})),v=b[0],y=b[1],g=h({queryString:c,groupId:f}),j=g[0],x=g[1],k=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:f}.groupId),r=(0,l.Dv)(n),a=r[0],i=r[1],[a,(0,t.useCallback)((function(e){n&&i.set(e)}),[n,i])]),S=k[0],w=k[1],L=function(){var e=null!=j?j:S;return p({value:e,tabValues:m})?e:null}();return(0,s.A)((function(){L&&y(L)}),[L]),{selectedValue:v,selectValue:(0,t.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);y(e),x(e),w(e)}),[x,w,m]),tabValues:m}}var m=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(74848);function y(e){var n=e.className,r=e.block,t=e.selectedValue,u=e.selectValue,s=e.tabValues,o=[],l=(0,i.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,r=o.indexOf(n),a=s[r].value;a!==t&&(l(n),u(a))},d=function(e){var n,r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var t,a=o.indexOf(e.currentTarget)+1;r=null!=(t=o[a])?t:o[0];break;case"ArrowLeft":var i,u=o.indexOf(e.currentTarget)-1;r=null!=(i=o[u])?i:o[o.length-1]}null==(n=r)||n.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:s.map((function(e){var n=e.value,r=e.label,i=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return o.push(e)},onKeyDown:d,onClick:c},i,{className:(0,a.A)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":t===n}),children:null!=r?r:n}),n)}))})}function g(e){var n=e.lazy,r=e.children,a=e.selectedValue,i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var u=i.find((function(e){return e.props.value===a}));return u?(0,t.cloneElement)(u,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function j(e){var n=f(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,v.jsx)(y,Object.assign({},e,n)),(0,v.jsx)(g,Object.assign({},e,n))]})}function x(e){var n=(0,m.A)();return(0,v.jsx)(j,Object.assign({},e,{children:c(e.children)}),String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>u,x:()=>s});var t=r(96540);const a={},i=t.createContext(a);function u(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:u(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
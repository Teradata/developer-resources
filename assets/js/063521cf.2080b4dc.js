"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[2901],{3390:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var t=n(4848),a=n(8453);n(6240),n(9365);const o={id:"run-jupyter-docker",title:"Run JupyterLab locally using Docker",description:"Learn how to run JupyterLab with the AI Unlimited Jupyter Kernel on your computer.",sidebar_label:"Run locally using Docker",sidebar_position:3,pagination_prev:null,pagination_next:null},i="Run JupyterLab locally using Docker",l={id:"resources/jupyterlab/run-jupyter-docker",title:"Run JupyterLab locally using Docker",description:"Learn how to run JupyterLab with the AI Unlimited Jupyter Kernel on your computer.",source:"@site/docs/resources/jupyterlab/run-jupyterlab-docker.md",sourceDirName:"resources/jupyterlab",slug:"/resources/jupyterlab/run-jupyter-docker",permalink:"/ai-unlimited-docs/docs/resources/jupyterlab/run-jupyter-docker",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"run-jupyter-docker",title:"Run JupyterLab locally using Docker",description:"Learn how to run JupyterLab with the AI Unlimited Jupyter Kernel on your computer.",sidebar_label:"Run locally using Docker",sidebar_position:3,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},u={},s=[{value:"Set a location for JupyterLab configuration files",id:"set-a-location-for-jupyterlab-configuration-files",level:2},{value:"Clone the respository",id:"clone-the-respository",level:2},{value:"Start JupyterLab",id:"start-jupyterlab",level:2},{value:"Verify access to JupyterLab",id:"verify-access-to-jupyterlab",level:2}];function c(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"run-jupyterlab-locally-using-docker",children:"Run JupyterLab locally using Docker"}),"\n",(0,t.jsxs)(r.p,{children:["You'll use ",(0,t.jsx)(r.a,{href:"https://docs.docker.com/compose/",children:"Docker Compose"})," to run JupyterLab, with the AI Unlimited Jupyter Kernel, locally in a container."]}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsxs)(r.p,{children:["For installation support, ask the ",(0,t.jsx)(r.a,{href:"https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa",children:"community"}),"."]})}),"\n",(0,t.jsx)(r.h2,{id:"set-a-location-for-jupyterlab-configuration-files",children:"Set a location for JupyterLab configuration files"}),"\n",(0,t.jsxs)(r.p,{children:["Optionally, set the ",(0,t.jsx)(r.code,{children:"JUPYTER_HOME"})," environment variable to the directory in which to store the JupyterLab configuration files. The default location is ",(0,t.jsx)(r.code,{children:"~/.jupyter"}),"."]}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsxs)(r.p,{children:["Learn about ",(0,t.jsx)(r.a,{href:"https://docs.aws.amazon.com/sdkref/latest/guide/environment-variables.html",children:"AWS"})," or ",(0,t.jsx)(r.a,{href:"https://github.com/paulbouwer/terraform-azure-quickstarts-samples/blob/master/README.md#azure-authentication",children:"Azure"})," environment variables."]})}),"\n",(0,t.jsx)(r.h2,{id:"clone-the-respository",children:"Clone the respository"}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"deployments/docker/"})," folder in the ",(0,t.jsx)(r.a,{href:"https://github.com/Teradata/ai-unlimited",children:"AI Unlimited GitHub repository"})," provided by Teradata includes the ",(0,t.jsx)(r.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/docker/jupyter.yaml",children:"jupyter.yaml"})," file you need to run JupyterLab."]}),"\n",(0,t.jsx)(r.p,{children:"Clone the repository."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"git clone https://github.com/Teradata/ai-unlimited\n"})}),"\n",(0,t.jsx)(r.h2,{id:"start-jupyterlab",children:"Start JupyterLab"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Go to the directory where ",(0,t.jsx)(r.code,{children:"jupyter.yaml"})," is located, and start JupyterLab."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",metastring:'title="Run the Docker Compose file in the background "',children:"docker compose -f jupyter.yaml -d up \n"})}),"\n",(0,t.jsx)(r.p,{children:"The command downloads and starts the JupyterLab container."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"To retrieve the Jupyter token, list the currently running containers."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"docker ps \n"})}),"\n",(0,t.jsx)(r.p,{children:"And identify the name of the JupyterLab container."}),"\n",(0,t.jsx)(r.p,{children:"Then search for occurrences of the string 'Token' in the container's logs."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"docker logs <container_name> | grep 'Token'\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"verify-access-to-jupyterlab",children:"Verify access to JupyterLab"}),"\n",(0,t.jsxs)(r.p,{children:["When JupyterLab is ready, you can access it at ",(0,t.jsx)(r.code,{children:"http://localhost:8888"}),", and enter the token."]})]})}function d(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},9365:(e,r,n)=>{n.d(r,{A:()=>i});n(6540);var t=n(4164);const a={tabItem:"tabItem_Ymn6"};var o=n(4848);function i(e){var r=e.children,n=e.hidden,i=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,i),hidden:n,children:r})}},6240:(e,r,n)=>{n.d(r,{A:()=>x});var t=n(6540),a=n(4164),o=n(3104),i=n(6347),l=n(205),u=n(7485);var s=n(9466);function c(e){var r,n;return null!=(r=null==(n=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((r=e.props)&&"object"==typeof r&&"value"in r))return e;var r;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?r:[]}function d(e){var r=e.values,n=e.children;return(0,t.useMemo)((function(){var e=null!=r?r:function(e){return c(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}(n);return function(e){var r,n,t=(void 0===(n=function(e,r){return e.value===r.value})&&(n=function(e,r){return e===r}),(r=e).filter((function(e,t){return r.findIndex((function(r){return n(r,e)}))!==t})));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,n])}function p(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function h(e){var r=e.queryString,n=void 0!==r&&r,a=e.groupId,o=(0,i.W6)(),l=function(e){var r=e.queryString,n=void 0!==r&&r,t=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:a});return[(0,u.aZ)(l),(0,t.useCallback)((function(e){if(l){var r=new URLSearchParams(o.location.search);r.set(l,e),o.replace(Object.assign({},o.location,{search:r.toString()}))}}),[l,o])]}function f(e){var r,n,a,o,i=e.defaultValue,u=e.queryString,c=void 0!==u&&u,f=e.groupId,b=d(e),m=(0,t.useState)((function(){return function(e){var r,n=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(r=t.find((function(e){return e.default})))?r:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:b})})),y=m[0],v=m[1],j=h({queryString:c,groupId:f}),g=j[0],x=j[1],k=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:f}.groupId),n=(0,s.Dv)(r),a=n[0],o=n[1],[a,(0,t.useCallback)((function(e){r&&o.set(e)}),[r,o])]),w=k[0],L=k[1],J=function(){var e=null!=g?g:w;return p({value:e,tabValues:b})?e:null}();return(0,l.A)((function(){J&&v(J)}),[J]),{selectedValue:y,selectValue:(0,t.useCallback)((function(e){if(!p({value:e,tabValues:b}))throw new Error("Can't select invalid tab value="+e);v(e),x(e),L(e)}),[x,L,b]),tabValues:b}}var b=n(2303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(4848);function v(e){var r=e.className,n=e.block,t=e.selectedValue,i=e.selectValue,l=e.tabValues,u=[],s=(0,o.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var r=e.currentTarget,n=u.indexOf(r),a=l[n].value;a!==t&&(s(r),i(a))},d=function(e){var r,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var t,a=u.indexOf(e.currentTarget)+1;n=null!=(t=u[a])?t:u[0];break;case"ArrowLeft":var o,i=u.indexOf(e.currentTarget)-1;n=null!=(o=u[i])?o:u[u.length-1]}null==(r=n)||r.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},r),children:l.map((function(e){var r=e.value,n=e.label,o=e.attributes;return(0,y.jsx)("li",Object.assign({role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:function(e){return u.push(e)},onKeyDown:d,onClick:c},o,{className:(0,a.A)("tabs__item",m.tabItem,null==o?void 0:o.className,{"tabs__item--active":t===r}),children:null!=n?n:r}),r)}))})}function j(e){var r=e.lazy,n=e.children,a=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){var i=o.find((function(e){return e.props.value===a}));return i?(0,t.cloneElement)(i,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:o.map((function(e,r){return(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==a})}))})}function g(e){var r=f(e);return(0,y.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,y.jsx)(v,Object.assign({},e,r)),(0,y.jsx)(j,Object.assign({},e,r))]})}function x(e){var r=(0,b.A)();return(0,y.jsx)(g,Object.assign({},e,{children:c(e.children)}),String(r))}},8453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>l});var t=n(6540);const a={},o=t.createContext(a);function i(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);
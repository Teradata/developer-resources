"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[9354],{4546:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=n(74848),a=n(28453),u=n(56240),i=n(19365);const o={id:"docker-when-you're-done",title:"Guide de d\xe9marrage rapide | Lorsque vous avez termin\xe9",description:"D\xe9couvrez ce qu'il faut faire lorsque vous avez termin\xe9 d'utiliser le Guide de d\xe9marrage rapide.",sidebar_label:"Lorsque vous avez termin\xe9",sidebar_position:7,pagination_prev:null,pagination_next:null},s="Lorsque vous avez termin\xe9",l={id:"resources/quickstart/docker-when-you're-done",title:"Guide de d\xe9marrage rapide | Lorsque vous avez termin\xe9",description:"D\xe9couvrez ce qu'il faut faire lorsque vous avez termin\xe9 d'utiliser le Guide de d\xe9marrage rapide.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/resources/quickstart/docker-when-you-are-done.md",sourceDirName:"resources/quickstart",slug:"/resources/quickstart/docker-when-you're-done",permalink:"/pr-preview/pr-137/fr/ai-unlimited/resources/quickstart/docker-when-you're-done",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"docker-when-you're-done",title:"Guide de d\xe9marrage rapide | Lorsque vous avez termin\xe9",description:"D\xe9couvrez ce qu'il faut faire lorsque vous avez termin\xe9 d'utiliser le Guide de d\xe9marrage rapide.",sidebar_label:"Lorsque vous avez termin\xe9",sidebar_position:7,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},c={},d=[];function v(e){const r={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"lorsque-vous-avez-termin\xe9",children:"Lorsque vous avez termin\xe9"}),"\n",(0,t.jsxs)(r.p,{children:["Pour \xe9viter d'encourir des frais pour des ressources de moteur inutiles, ",(0,t.jsx)(r.a,{href:"/pr-preview/pr-137/fr/ai-unlimited/manage-ai-unlimited/suspend-and-restore-project",children:"suspendez les projets"})," sur lesquels vous ne travaillez pas. Vous pouvez toujours les restaurer."]}),"\n",(0,t.jsx)(r.p,{children:"Si vous avez termin\xe9 le Guide de d\xe9marrage rapide et que vous souhaitez lib\xe9rer des ressources sur votre ordinateur, ex\xe9cutez cette commande pour arr\xeater et supprimer tous les conteneurs et r\xe9seaux cr\xe9\xe9s."}),"\n",(0,t.jsxs)(u.A,{children:[(0,t.jsx)(i.A,{value:"aws",label:"AWS",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"docker-compose -f ai-unlimited.yaml -f aws-credentials-env-vars.yaml -f jupyter.yaml down\n"})})}),(0,t.jsx)(i.A,{value:"azure",label:"Azure",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"docker-compose -f ai-unlimited.yaml -f azure-credentials-env-vars.yaml -f jupyter.yaml down\n"})})})]}),"\n",(0,t.jsx)(r.p,{children:"Vous pouvez \xe9galement supprimer tout r\xe9pertoire ou fichier local contenant des donn\xe9es de moteur que vous avez mont\xe9 sur les conteneurs Docker."})]})}function f(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(v,{...e})}):v(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>i});n(96540);var t=n(34164);const a={tabItem:"tabItem_Ymn6"};var u=n(74848);function i(e){var r=e.children,n=e.hidden,i=e.className;return(0,u.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,i),hidden:n,children:r})}},56240:(e,r,n)=>{n.d(r,{A:()=>j});var t=n(96540),a=n(34164),u=n(23104),i=n(56347),o=n(205),s=n(57485);var l=n(89466);function c(e){var r,n;return null!=(r=null==(n=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((r=e.props)&&"object"==typeof r&&"value"in r))return e;var r;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?r:[]}function d(e){var r=e.values,n=e.children;return(0,t.useMemo)((function(){var e=null!=r?r:function(e){return c(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}(n);return function(e){var r,n,t=(void 0===(n=function(e,r){return e.value===r.value})&&(n=function(e,r){return e===r}),(r=e).filter((function(e,t){return r.findIndex((function(r){return n(r,e)}))!==t})));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,n])}function v(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function f(e){var r=e.queryString,n=void 0!==r&&r,a=e.groupId,u=(0,i.W6)(),o=function(e){var r=e.queryString,n=void 0!==r&&r,t=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:a});return[(0,s.aZ)(o),(0,t.useCallback)((function(e){if(o){var r=new URLSearchParams(u.location.search);r.set(o,e),u.replace(Object.assign({},u.location,{search:r.toString()}))}}),[o,u])]}function p(e){var r,n,a,u,i=e.defaultValue,s=e.queryString,c=void 0!==s&&s,p=e.groupId,m=d(e),h=(0,t.useState)((function(){return function(e){var r,n=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!v({value:n,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(r=t.find((function(e){return e.default})))?r:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:m})})),b=h[0],g=h[1],y=f({queryString:c,groupId:p}),x=y[0],j=y[1],w=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),n=(0,l.Dv)(r),a=n[0],u=n[1],[a,(0,t.useCallback)((function(e){r&&u.set(e)}),[r,u])]),q=w[0],k=w[1],z=function(){var e=null!=x?x:q;return v({value:e,tabValues:m})?e:null}();return(0,o.A)((function(){z&&g(z)}),[z]),{selectedValue:b,selectValue:(0,t.useCallback)((function(e){if(!v({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);g(e),j(e),k(e)}),[j,k,m]),tabValues:m}}var m=n(92303);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function g(e){var r=e.className,n=e.block,t=e.selectedValue,i=e.selectValue,o=e.tabValues,s=[],l=(0,u.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var r=e.currentTarget,n=s.indexOf(r),a=o[n].value;a!==t&&(l(r),i(a))},d=function(e){var r,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var t,a=s.indexOf(e.currentTarget)+1;n=null!=(t=s[a])?t:s[0];break;case"ArrowLeft":var u,i=s.indexOf(e.currentTarget)-1;n=null!=(u=s[i])?u:s[s.length-1]}null==(r=n)||r.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},r),children:o.map((function(e){var r=e.value,n=e.label,u=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:function(e){return s.push(e)},onKeyDown:d,onClick:c},u,{className:(0,a.A)("tabs__item",h.tabItem,null==u?void 0:u.className,{"tabs__item--active":t===r}),children:null!=n?n:r}),r)}))})}function y(e){var r=e.lazy,n=e.children,a=e.selectedValue,u=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){var i=u.find((function(e){return e.props.value===a}));return i?(0,t.cloneElement)(i,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:u.map((function(e,r){return(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==a})}))})}function x(e){var r=p(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",h.tabList),children:[(0,b.jsx)(g,Object.assign({},e,r)),(0,b.jsx)(y,Object.assign({},e,r))]})}function j(e){var r=(0,m.A)();return(0,b.jsx)(x,Object.assign({},e,{children:c(e.children)}),String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>o});var t=n(96540);const a={},u=t.createContext(a);function i(e){const r=t.useContext(u);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(u.Provider,{value:r},e.children)}}}]);
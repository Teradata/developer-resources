"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[802],{61593:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=n(74848),a=n(28453),u=n(56240),s=n(19365);const o={id:"suspend-and-restore-project",title:"Suspendre et restaurer un projet",description:"Comment suspendre et restaurer des projets pour g\xe9rer les co\xfbts.",sidebar_position:2,sidebar_label:"Suspendre et restaurer un projet",pagination_prev:null,pagination_next:null},i="Suspendre et restaurer un projet",l={id:"manage-ai-unlimited/suspend-and-restore-project",title:"Suspendre et restaurer un projet",description:"Comment suspendre et restaurer des projets pour g\xe9rer les co\xfbts.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/manage-ai-unlimited/suspend-and-restore-project.md",sourceDirName:"manage-ai-unlimited",slug:"/manage-ai-unlimited/suspend-and-restore-project",permalink:"/pr-preview/pr-158/fr/ai-unlimited/manage-ai-unlimited/suspend-and-restore-project",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"suspend-and-restore-project",title:"Suspendre et restaurer un projet",description:"Comment suspendre et restaurer des projets pour g\xe9rer les co\xfbts.",sidebar_position:2,sidebar_label:"Suspendre et restaurer un projet",pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},c={},d=[{value:"Suspendre",id:"suspendre",level:2},{value:"Restaurer (red\xe9ployer)",id:"restaurer-red\xe9ployer",level:2}];function p(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"suspendre-et-restaurer-un-projet",children:"Suspendre et restaurer un projet"}),"\n",(0,t.jsx)(r.p,{children:"Vous pouvez suspendre et restaurer un projet selon vos besoins."}),"\n",(0,t.jsx)(r.h2,{id:"suspendre",children:"Suspendre"}),"\n",(0,t.jsx)(r.p,{children:"Pour \xe9viter d'encourir des frais pour des ressources moteur inutiles, suspendez les projets sur lesquels vous ne travaillez pas."}),"\n",(0,t.jsx)(r.p,{children:"Les autorisations utilisateur, les autorisations du stockage d'objets et les objets de donn\xe9es sont enregistr\xe9s. Lorsque vous restaurez et red\xe9ployez le projet, vous pouvez reprendre l\xe0 o\xf9 vous vous \xe9tiez arr\xeat\xe9."}),"\n",(0,t.jsx)(r.p,{children:"Dans votre bloc-notes, ex\xe9cutez cette commande magique\xa0:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"%project_engine_suspend <Project_Name>\n"})}),"\n",(0,t.jsx)(r.h2,{id:"restaurer-red\xe9ployer",children:"Restaurer (red\xe9ployer)"}),"\n",(0,t.jsx)(r.p,{children:"Dans votre bloc-notes, ex\xe9cutez cette commande magique\xa0:"}),"\n",(0,t.jsxs)(u.A,{children:[(0,t.jsx)(s.A,{value:"aws1",label:"AWS",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"%project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore-<true|false>, prefixlist=<Prefix_List>, securitygroups=<Security_Group>, cidrs=<CIDR>, tags=<Tags>, iamrole=<IAM_Role>, roleprefix=<Role_Prefix>, permissionboundary=<Permission_Boundary>\n"})})}),(0,t.jsx)(s.A,{value:"azure",label:"Azure",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"%project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore=<true|false>, network=<Network>, keyvault=<Key_Vault>, keyvaultresourcegroup=<Key_Vault_Resource_Group>, networkresourcegroup=<Network_Resource_Group>\n"})})})]}),"\n",(0,t.jsx)(r.p,{children:"Si vous ne sp\xe9cifiez pas le nombre de n\u0153uds, un n\u0153ud est d\xe9ploy\xe9."}),"\n",(0,t.jsx)(r.p,{children:"Pour le param\xe8tre restore, laissez la valeur par d\xe9faut vrai. Cela restaure le projet \xe0 l'\xe9tat de la derni\xe8re validation Git."}),"\n",(0,t.jsx)(r.p,{children:"A chaque d\xe9ploiement du moteur, un nouveau mot de passe de connexion au moteur est g\xe9n\xe9r\xe9 pour chaque utilisateur."}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsxs)(r.p,{children:["En savoir plus sur les ",(0,t.jsx)(r.a,{href:"/pr-preview/pr-158/fr/ai-unlimited/explore-and-analyze-data/magic-commands",children:"commandes magiques"})," AI Unlimited."]})})]})}function m(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>s});n(96540);var t=n(34164);const a={tabItem:"tabItem_Ymn6"};var u=n(74848);function s(e){var r=e.children,n=e.hidden,s=e.className;return(0,u.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,s),hidden:n,children:r})}},56240:(e,r,n)=>{n.d(r,{A:()=>_});var t=n(96540),a=n(34164),u=n(23104),s=n(56347),o=n(205),i=n(57485);var l=n(89466);function c(e){var r,n;return null!=(r=null==(n=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((r=e.props)&&"object"==typeof r&&"value"in r))return e;var r;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?r:[]}function d(e){var r=e.values,n=e.children;return(0,t.useMemo)((function(){var e=null!=r?r:function(e){return c(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}(n);return function(e){var r,n,t=(void 0===(n=function(e,r){return e.value===r.value})&&(n=function(e,r){return e===r}),(r=e).filter((function(e,t){return r.findIndex((function(r){return n(r,e)}))!==t})));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,n])}function p(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function m(e){var r=e.queryString,n=void 0!==r&&r,a=e.groupId,u=(0,s.W6)(),o=function(e){var r=e.queryString,n=void 0!==r&&r,t=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:a});return[(0,i.aZ)(o),(0,t.useCallback)((function(e){if(o){var r=new URLSearchParams(u.location.search);r.set(o,e),u.replace(Object.assign({},u.location,{search:r.toString()}))}}),[o,u])]}function f(e){var r,n,a,u,s=e.defaultValue,i=e.queryString,c=void 0!==i&&i,f=e.groupId,v=d(e),b=(0,t.useState)((function(){return function(e){var r,n=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(r=t.find((function(e){return e.default})))?r:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:v})})),h=b[0],g=b[1],j=m({queryString:c,groupId:f}),x=j[0],_=j[1],y=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:f}.groupId),n=(0,l.Dv)(r),a=n[0],u=n[1],[a,(0,t.useCallback)((function(e){r&&u.set(e)}),[r,u])]),w=y[0],S=y[1],N=function(){var e=null!=x?x:w;return p({value:e,tabValues:v})?e:null}();return(0,o.A)((function(){N&&g(N)}),[N]),{selectedValue:h,selectValue:(0,t.useCallback)((function(e){if(!p({value:e,tabValues:v}))throw new Error("Can't select invalid tab value="+e);g(e),_(e),S(e)}),[_,S,v]),tabValues:v}}var v=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var h=n(74848);function g(e){var r=e.className,n=e.block,t=e.selectedValue,s=e.selectValue,o=e.tabValues,i=[],l=(0,u.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var r=e.currentTarget,n=i.indexOf(r),a=o[n].value;a!==t&&(l(r),s(a))},d=function(e){var r,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var t,a=i.indexOf(e.currentTarget)+1;n=null!=(t=i[a])?t:i[0];break;case"ArrowLeft":var u,s=i.indexOf(e.currentTarget)-1;n=null!=(u=i[s])?u:i[i.length-1]}null==(r=n)||r.focus()};return(0,h.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},r),children:o.map((function(e){var r=e.value,n=e.label,u=e.attributes;return(0,h.jsx)("li",Object.assign({role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:function(e){return i.push(e)},onKeyDown:d,onClick:c},u,{className:(0,a.A)("tabs__item",b.tabItem,null==u?void 0:u.className,{"tabs__item--active":t===r}),children:null!=n?n:r}),r)}))})}function j(e){var r=e.lazy,n=e.children,a=e.selectedValue,u=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){var s=u.find((function(e){return e.props.value===a}));return s?(0,t.cloneElement)(s,{className:"margin-top--md"}):null}return(0,h.jsx)("div",{className:"margin-top--md",children:u.map((function(e,r){return(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==a})}))})}function x(e){var r=f(e);return(0,h.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,h.jsx)(g,Object.assign({},e,r)),(0,h.jsx)(j,Object.assign({},e,r))]})}function _(e){var r=(0,v.A)();return(0,h.jsx)(x,Object.assign({},e,{children:c(e.children)}),String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>o});var t=n(96540);const a={},u=t.createContext(a);function s(e){const r=t.useContext(u);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(u.Provider,{value:r},e.children)}}}]);
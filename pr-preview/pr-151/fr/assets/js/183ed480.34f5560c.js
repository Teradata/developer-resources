"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[1448],{75161:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var t=n(74848),a=n(28453),o=n(56240),l=n(19365);const i={id:"collaborate-project",title:"Collaborer sur un projet",description:"D\xe9couvrez comment acc\xe9der \xe0 un projet en tant que collaborateur",sidebar_position:3,sidebar_label:"Collaborer sur un projet",pagination_prev:null,pagination_next:null},s="Collaborer sur un projet",u={id:"explore-and-analyze-data/collaborate-project",title:"Collaborer sur un projet",description:"D\xe9couvrez comment acc\xe9der \xe0 un projet en tant que collaborateur",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/explore-and-analyze-data/collaborate-project.md",sourceDirName:"explore-and-analyze-data",slug:"/explore-and-analyze-data/collaborate-project",permalink:"/pr-preview/pr-151/fr/ai-unlimited/explore-and-analyze-data/collaborate-project",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"collaborate-project",title:"Collaborer sur un projet",description:"D\xe9couvrez comment acc\xe9der \xe0 un projet en tant que collaborateur",sidebar_position:3,sidebar_label:"Collaborer sur un projet",pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},c={},d=[{value:"Avant de commencer",id:"avant-de-commencer",level:2},{value:"Acc\xe9der au projet",id:"acc\xe9der-au-projet",level:2}];function p(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"collaborer-sur-un-projet",children:"Collaborer sur un projet"}),"\n",(0,t.jsx)(r.p,{children:"Un projet est un moyen d'explorer et d'analyser les donn\xe9es \xe0 partir d'un bloc-notes Jupyter."}),"\n",(0,t.jsx)(r.admonition,{type:"note",children:(0,t.jsxs)(r.p,{children:["Chaque projet dispose d'un r\xe9f\xe9rentiel Git. ",(0,t.jsx)(r.a,{href:"/pr-preview/pr-151/fr/ai-unlimited/glossary#project-repository",children:"D\xe9couvrez pourquoi"}),"."]})}),"\n",(0,t.jsxs)(r.p,{children:["Le propri\xe9taire d'un projet peut ",(0,t.jsx)(r.a,{href:"/pr-preview/pr-151/fr/ai-unlimited/manage-ai-unlimited/add-collaborators",children:"vous ajouter \xe0 un projet"})," en tant que collaborateur. Pour contribuer, vous devez acc\xe9der au projet \xe0 partir d'un bloc-notes Jupyter."]}),"\n",(0,t.jsx)(r.h2,{id:"avant-de-commencer",children:"Avant de commencer"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"\xc0 partir du propri\xe9taire du projet, obtenez ces \xe9l\xe9ments\xa0:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["L'adresse IP ou le nom d'h\xf4te du ",(0,t.jsx)(r.a,{href:"/pr-preview/pr-151/fr/ai-unlimited/glossary#ai-unlimited-manager",children:"Gestionnaire AI Unlimited"})]}),"\n",(0,t.jsx)(r.li,{children:"Le nom du projet"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["\xc0 partir de votre profil, ",(0,t.jsx)(r.a,{href:"/pr-preview/pr-151/fr/ai-unlimited/explore-and-analyze-data/get-api-key",children:"obtenez votre cl\xe9 API"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.admonition,{type:"tip",children:[(0,t.jsxs)(r.p,{children:["Ex\xe9cutez ",(0,t.jsx)(r.code,{children:"%help"})," pour obtenir des d\xe9tails sur toutes les commandes magiques disponibles dans votre bloc-notes. Ex\xe9cutez ",(0,t.jsx)(r.code,{children:"%help <command>"})," pour obtenir des d\xe9tails sur l'une d'entre elles."]}),(0,t.jsxs)(r.p,{children:["Ou apprenez-en plus sur les ",(0,t.jsx)(r.a,{href:"/pr-preview/pr-151/fr/ai-unlimited/explore-and-analyze-data/magic-commands",children:"commandes magiques"})," sp\xe9cifiques \xe0 AI Unlimited."]})]}),"\n",(0,t.jsx)(r.h2,{id:"acc\xe9der-au-projet",children:"Acc\xe9der au projet"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Connectez-vous \xe0 JupyterLab, ouvrez un bloc-notes et s\xe9lectionnez le noyau AI Unlimited."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Connectez-vous au gestionnaire."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"%workspaces_config host=<ip_or_hostname>, apikey=<API_Key>, withtls=<T|F>\n"})}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"V\xe9rifiez si le moteur est d\xe9ploy\xe9."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"%project_engine_list project=<Project_Name>\n"})}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Si le moteur n'est pas d\xe9ploy\xe9, d\xe9ployez-le et restaurez le projet."}),"\n",(0,t.jsxs)(r.p,{children:["La taille peut \xeatre petite, moyenne, grande ou tr\xe8s grande. La taille par d\xe9faut est petite. Reportez-vous aux informations de tarification ",(0,t.jsx)(r.a,{href:"http://aws.amazon.com/marketplace/pp/prodview-2srvuo3mwqlig",children:"AWS"})," ou ",(0,t.jsx)(r.a,{href:"https://azuremarketplace.microsoft.com/en-us/marketplace/apps/teradata.ai-unlimited?tab=Overview",children:"Azure"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"Si vous ne sp\xe9cifiez pas le nombre de n\u0153uds, un seul n\u0153ud est d\xe9ploy\xe9. La valeur par d\xe9faut pour la restauration est vrai."}),"\n",(0,t.jsxs)(o.A,{children:[(0,t.jsx)(l.A,{value:"aws1",label:"AWS",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"%project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore=<true|false>, prefixlist=<Prefix_List>, securitygroups=<Security_Group>, cidrs=<CIDR>, tags=<Tags>, iamrole=<IAM_Role>, roleprefix=<Role_Prefix>, permissionboundary=<Permission_Boundary>\n"})})}),(0,t.jsx)(l.A,{value:"azure",label:"Azure",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"%project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore=<true|false>, network=<Network>, keyvault=<Key_Vault>, keyvaultresourcegroup=<Key_Vault_Resource_Group>, networkresourcegroup=<Network_Resource_Group>\n"})})})]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Obtenez votre mot de passe pour le moteur."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"%project_user_list project=<Project_Name>\n"})}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Actualisez la connexion pour inclure votre bloc-notes."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"%project_connection_add project=<Project_Name>\n"})}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Connectez-vous au projet."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"%connect <Project_Name>\n"})}),"\n",(0,t.jsx)(r.p,{children:"Une fois la connexion \xe9tablie, indiquez votre mot de passe."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Vous \xeates pr\xeat\xa0 ! Vous pouvez d\xe9sormais contribuer au projet."})]})}function h(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>l});n(96540);var t=n(34164);const a={tabItem:"tabItem_Ymn6"};var o=n(74848);function l(e){var r=e.children,n=e.hidden,l=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,l),hidden:n,children:r})}},56240:(e,r,n)=>{n.d(r,{A:()=>y});var t=n(96540),a=n(34164),o=n(23104),l=n(56347),i=n(205),s=n(57485);var u=n(89466);function c(e){var r,n;return null!=(r=null==(n=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((r=e.props)&&"object"==typeof r&&"value"in r))return e;var r;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?r:[]}function d(e){var r=e.values,n=e.children;return(0,t.useMemo)((function(){var e=null!=r?r:function(e){return c(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}(n);return function(e){var r,n,t=(void 0===(n=function(e,r){return e.value===r.value})&&(n=function(e,r){return e===r}),(r=e).filter((function(e,t){return r.findIndex((function(r){return n(r,e)}))!==t})));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,n])}function p(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function h(e){var r=e.queryString,n=void 0!==r&&r,a=e.groupId,o=(0,l.W6)(),i=function(e){var r=e.queryString,n=void 0!==r&&r,t=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:a});return[(0,s.aZ)(i),(0,t.useCallback)((function(e){if(i){var r=new URLSearchParams(o.location.search);r.set(i,e),o.replace(Object.assign({},o.location,{search:r.toString()}))}}),[i,o])]}function m(e){var r,n,a,o,l=e.defaultValue,s=e.queryString,c=void 0!==s&&s,m=e.groupId,f=d(e),j=(0,t.useState)((function(){return function(e){var r,n=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(r=t.find((function(e){return e.default})))?r:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:f})})),b=j[0],v=j[1],x=h({queryString:c,groupId:m}),g=x[0],y=x[1],_=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:m}.groupId),n=(0,u.Dv)(r),a=n[0],o=n[1],[a,(0,t.useCallback)((function(e){r&&o.set(e)}),[r,o])]),z=_[0],w=_[1],A=function(){var e=null!=g?g:z;return p({value:e,tabValues:f})?e:null}();return(0,i.A)((function(){A&&v(A)}),[A]),{selectedValue:b,selectValue:(0,t.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),w(e)}),[y,w,f]),tabValues:f}}var f=n(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function v(e){var r=e.className,n=e.block,t=e.selectedValue,l=e.selectValue,i=e.tabValues,s=[],u=(0,o.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var r=e.currentTarget,n=s.indexOf(r),a=i[n].value;a!==t&&(u(r),l(a))},d=function(e){var r,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var t,a=s.indexOf(e.currentTarget)+1;n=null!=(t=s[a])?t:s[0];break;case"ArrowLeft":var o,l=s.indexOf(e.currentTarget)-1;n=null!=(o=s[l])?o:s[s.length-1]}null==(r=n)||r.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},r),children:i.map((function(e){var r=e.value,n=e.label,o=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:function(e){return s.push(e)},onKeyDown:d,onClick:c},o,{className:(0,a.A)("tabs__item",j.tabItem,null==o?void 0:o.className,{"tabs__item--active":t===r}),children:null!=n?n:r}),r)}))})}function x(e){var r=e.lazy,n=e.children,a=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){var l=o.find((function(e){return e.props.value===a}));return l?(0,t.cloneElement)(l,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map((function(e,r){return(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==a})}))})}function g(e){var r=m(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",j.tabList),children:[(0,b.jsx)(v,Object.assign({},e,r)),(0,b.jsx)(x,Object.assign({},e,r))]})}function y(e){var r=(0,f.A)();return(0,b.jsx)(g,Object.assign({},e,{children:c(e.children)}),String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>i});var t=n(96540);const a={},o=t.createContext(a);function l(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);
"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[1372],{80304:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=r(74848),a=r(28453),i=r(56240),u=r(19365);const l={id:"suspend-and-restore-project",title:"Anhalten und Wiederherstellen eines Projekts",description:"So unterbrechen Sie Projekteund setzen diese wieder fort, um die Kosten im Griff zu behalten.",sidebar_position:2,sidebar_label:"Anhalten und Wiederherstellen eines Projekts",pagination_prev:null,pagination_next:null},s="Anhalten und Wiederherstellen eines Projekts",o={id:"manage-ai-unlimited/suspend-and-restore-project",title:"Anhalten und Wiederherstellen eines Projekts",description:"So unterbrechen Sie Projekteund setzen diese wieder fort, um die Kosten im Griff zu behalten.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/manage-ai-unlimited/suspend-and-restore-project.md",sourceDirName:"manage-ai-unlimited",slug:"/manage-ai-unlimited/suspend-and-restore-project",permalink:"/pr-preview/pr-137/de/ai-unlimited/manage-ai-unlimited/suspend-and-restore-project",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"suspend-and-restore-project",title:"Anhalten und Wiederherstellen eines Projekts",description:"So unterbrechen Sie Projekteund setzen diese wieder fort, um die Kosten im Griff zu behalten.",sidebar_position:2,sidebar_label:"Anhalten und Wiederherstellen eines Projekts",pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},d={},c=[{value:"Anhalten",id:"anhalten",level:2},{value:"Wiederherstellen (erneut bereitstellen)",id:"wiederherstellen-erneut-bereitstellen",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"anhalten-und-wiederherstellen-eines-projekts",children:"Anhalten und Wiederherstellen eines Projekts"}),"\n",(0,t.jsx)(n.p,{children:"Sie k\xf6nnen ein Projekt nach Bedarf anhalten und wiederherstellen."}),"\n",(0,t.jsx)(n.h2,{id:"anhalten",children:"Anhalten"}),"\n",(0,t.jsx)(n.p,{children:"Um Kosten f\xfcr nicht ben\xf6tigte Engine-Ressourcen zu vermeiden, halten Sie Projekte an, an denen Sie nicht arbeiten."}),"\n",(0,t.jsx)(n.p,{children:"Benutzerberechtigungen, Objektspeicherberechtigungen und Datenobjekte werden gespeichert. Wenn Sie das Projekt wiederherstellen und erneut bereitstellen, k\xf6nnen Sie dort weitermachen, wo Sie aufgeh\xf6rt haben."}),"\n",(0,t.jsx)(n.p,{children:"F\xfchren Sie in Ihrem Notebook diesen magischen Befehl aus:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"%project_engine_suspend <Project_Name>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"wiederherstellen-erneut-bereitstellen",children:"Wiederherstellen (erneut bereitstellen)"}),"\n",(0,t.jsx)(n.p,{children:"F\xfchren Sie in Ihrem Notebook diesen magischen Befehl aus:"}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(u.A,{value:"aws1",label:"AWS",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"%project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore-<true|false>, prefixlist=<Prefix_List>, securitygroups=<Security_Group>, cidrs=<CIDR>, tags=<Tags>, iamrole=<IAM_Role>, roleprefix=<Role_Prefix>, permissionboundary=<Permission_Boundary>\n"})})}),(0,t.jsx)(u.A,{value:"azure",label:"Azure",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"%project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore=<true|false>, network=<Network>, keyvault=<Key_Vault>, keyvaultresourcegroup=<Key_Vault_Resource_Group>, networkresourcegroup=<Network_Resource_Group>\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"Wenn Sie die Anzahl der Knoten nicht angeben, wird ein Knoten bereitgestellt."}),"\n",(0,t.jsx)(n.p,{children:"Belassen Sie f\xfcr den Wiederherstellungsparameter den Standardwert \u201etrue\u201c. Dadurch wird das Projekt auf den Status des letzten Git-Commits zur\xfcckgesetzt."}),"\n",(0,t.jsx)(n.p,{children:"Bei jeder Bereitstellung der Engine wird f\xfcr jeden Benutzer ein neues Passwort f\xfcr die Verbindung mit der Engine generiert."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Erfahren Sie mehr \xfcber die ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-137/de/ai-unlimited/explore-and-analyze-data/magic-commands",children:"magischen Befehle"})," von AI Unlimited."]})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>u});r(96540);var t=r(34164);const a={tabItem:"tabItem_Ymn6"};var i=r(74848);function u(e){var n=e.children,r=e.hidden,u=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,u),hidden:r,children:n})}},56240:(e,n,r)=>{r.d(n,{A:()=>_});var t=r(96540),a=r(34164),i=r(23104),u=r(56347),l=r(205),s=r(57485);var o=r(89466);function d(e){var n,r;return null!=(n=null==(r=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function c(e){var n=e.values,r=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n,r,t=(void 0===(r=function(e,n){return e.value===n.value})&&(r=function(e,n){return e===n}),(n=e).filter((function(e,t){return n.findIndex((function(n){return r(n,e)}))!==t})));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,r=void 0!==n&&n,a=e.groupId,i=(0,u.W6)(),l=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:a});return[(0,s.aZ)(l),(0,t.useCallback)((function(e){if(l){var n=new URLSearchParams(i.location.search);n.set(l,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[l,i])]}function f(e){var n,r,a,i,u=e.defaultValue,s=e.queryString,d=void 0!==s&&s,f=e.groupId,b=c(e),m=(0,t.useState)((function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:u,tabValues:b})})),v=m[0],g=m[1],j=p({queryString:d,groupId:f}),x=j[0],_=j[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:f}.groupId),r=(0,o.Dv)(n),a=r[0],i=r[1],[a,(0,t.useCallback)((function(e){n&&i.set(e)}),[n,i])]),k=w[0],y=w[1],S=function(){var e=null!=x?x:k;return h({value:e,tabValues:b})?e:null}();return(0,l.A)((function(){S&&g(S)}),[S]),{selectedValue:v,selectValue:(0,t.useCallback)((function(e){if(!h({value:e,tabValues:b}))throw new Error("Can't select invalid tab value="+e);g(e),_(e),y(e)}),[_,y,b]),tabValues:b}}var b=r(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(74848);function g(e){var n=e.className,r=e.block,t=e.selectedValue,u=e.selectValue,l=e.tabValues,s=[],o=(0,i.a_)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,r=s.indexOf(n),a=l[r].value;a!==t&&(o(n),u(a))},c=function(e){var n,r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var t,a=s.indexOf(e.currentTarget)+1;r=null!=(t=s[a])?t:s[0];break;case"ArrowLeft":var i,u=s.indexOf(e.currentTarget)-1;r=null!=(i=s[u])?i:s[s.length-1]}null==(n=r)||n.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:l.map((function(e){var n=e.value,r=e.label,i=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return s.push(e)},onKeyDown:c,onClick:d},i,{className:(0,a.A)("tabs__item",m.tabItem,null==i?void 0:i.className,{"tabs__item--active":t===n}),children:null!=r?r:n}),n)}))})}function j(e){var n=e.lazy,r=e.children,a=e.selectedValue,i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var u=i.find((function(e){return e.props.value===a}));return u?(0,t.cloneElement)(u,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function x(e){var n=f(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,v.jsx)(g,Object.assign({},e,n)),(0,v.jsx)(j,Object.assign({},e,n))]})}function _(e){var n=(0,b.A)();return(0,v.jsx)(x,Object.assign({},e,{children:d(e.children)}),String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>u,x:()=>l});var t=r(96540);const a={},i=t.createContext(a);function u(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:u(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[1775],{18199:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var t=r(74848),a=r(28453),u=r(56240),o=r(19365);const i={id:"docker-when-you're-done",title:"QuickStart | When you're done",description:"Learn what to do when you're done using the QuickStart.",sidebar_label:"When you're done",sidebar_position:7,pagination_prev:null,pagination_next:null},l="When you're done",s={id:"resources/quickstart/docker-when-you're-done",title:"QuickStart | When you're done",description:"Learn what to do when you're done using the QuickStart.",source:"@site/docs/resources/quickstart/docker-when-you-are-done.md",sourceDirName:"resources/quickstart",slug:"/resources/quickstart/docker-when-you're-done",permalink:"/pr-preview/pr-158/ai-unlimited/resources/quickstart/docker-when-you're-done",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"docker-when-you're-done",title:"QuickStart | When you're done",description:"Learn what to do when you're done using the QuickStart.",sidebar_label:"When you're done",sidebar_position:7,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},c={},d=[];function f(e){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"when-youre-done",children:"When you're done"}),"\n",(0,t.jsxs)(n.p,{children:["To avoid incurring charges for unneeded engine resources, ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-158/ai-unlimited/manage-ai-unlimited/suspend-and-restore-project",children:"suspend projects"})," you're not working on. You can always restore them."]}),"\n",(0,t.jsx)(n.p,{children:"If you are done with the QuickStart, and want to free up resources on your computer, run this command to stop and remove all of the containers and networks that were created."}),"\n",(0,t.jsxs)(u.A,{children:[(0,t.jsx)(o.A,{value:"aws",label:"AWS",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker-compose -f ai-unlimited.yaml -f aws-credentials-env-vars.yaml -f jupyter.yaml down\n"})})}),(0,t.jsx)(o.A,{value:"azure",label:"Azure",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker-compose -f ai-unlimited.yaml -f azure-credentials-env-vars.yaml -f jupyter.yaml down\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"You can also remove any local directory or files, containing engine data, that you mounted to the Docker containers."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>o});r(96540);var t=r(34164);const a={tabItem:"tabItem_Ymn6"};var u=r(74848);function o(e){var n=e.children,r=e.hidden,o=e.className;return(0,u.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,o),hidden:r,children:n})}},56240:(e,n,r)=>{r.d(n,{A:()=>k});var t=r(96540),a=r(34164),u=r(23104),o=r(56347),i=r(205),l=r(57485);var s=r(89466);function c(e){var n,r;return null!=(n=null==(r=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function d(e){var n=e.values,r=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return c(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n,r,t=(void 0===(r=function(e,n){return e.value===n.value})&&(r=function(e,n){return e===n}),(n=e).filter((function(e,t){return n.findIndex((function(n){return r(n,e)}))!==t})));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function f(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function h(e){var n=e.queryString,r=void 0!==n&&n,a=e.groupId,u=(0,o.W6)(),i=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:a});return[(0,l.aZ)(i),(0,t.useCallback)((function(e){if(i){var n=new URLSearchParams(u.location.search);n.set(i,e),u.replace(Object.assign({},u.location,{search:n.toString()}))}}),[i,u])]}function p(e){var n,r,a,u,o=e.defaultValue,l=e.queryString,c=void 0!==l&&l,p=e.groupId,v=d(e),m=(0,t.useState)((function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!f({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:v})})),b=m[0],y=m[1],g=h({queryString:c,groupId:p}),w=g[0],k=g[1],x=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),r=(0,s.Dv)(n),a=r[0],u=r[1],[a,(0,t.useCallback)((function(e){n&&u.set(e)}),[n,u])]),j=x[0],I=x[1],S=function(){var e=null!=w?w:j;return f({value:e,tabValues:v})?e:null}();return(0,i.A)((function(){S&&y(S)}),[S]),{selectedValue:b,selectValue:(0,t.useCallback)((function(e){if(!f({value:e,tabValues:v}))throw new Error("Can't select invalid tab value="+e);y(e),k(e),I(e)}),[k,I,v]),tabValues:v}}var v=r(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(74848);function y(e){var n=e.className,r=e.block,t=e.selectedValue,o=e.selectValue,i=e.tabValues,l=[],s=(0,u.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,r=l.indexOf(n),a=i[r].value;a!==t&&(s(n),o(a))},d=function(e){var n,r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var t,a=l.indexOf(e.currentTarget)+1;r=null!=(t=l[a])?t:l[0];break;case"ArrowLeft":var u,o=l.indexOf(e.currentTarget)-1;r=null!=(u=l[o])?u:l[l.length-1]}null==(n=r)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:i.map((function(e){var n=e.value,r=e.label,u=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return l.push(e)},onKeyDown:d,onClick:c},u,{className:(0,a.A)("tabs__item",m.tabItem,null==u?void 0:u.className,{"tabs__item--active":t===n}),children:null!=r?r:n}),n)}))})}function g(e){var n=e.lazy,r=e.children,a=e.selectedValue,u=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var o=u.find((function(e){return e.props.value===a}));return o?(0,t.cloneElement)(o,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:u.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function w(e){var n=p(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,b.jsx)(y,Object.assign({},e,n)),(0,b.jsx)(g,Object.assign({},e,n))]})}function k(e){var n=(0,v.A)();return(0,b.jsx)(w,Object.assign({},e,{children:c(e.children)}),String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>i});var t=r(96540);const a={},u=t.createContext(a);function o(e){const n=t.useContext(u);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(u.Provider,{value:n},e.children)}}}]);
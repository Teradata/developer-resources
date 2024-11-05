"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[5376],{20078:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(74848),a=n(28453);n(56240),n(19365);const i={id:"fabric-setup-ai-unlimited",title:"Fabric set up AI Unlimited",description:"Learn about the setup details.",sidebar_label:"Fabric Set up AI Unlimited",sidebar_position:1,pagination_prev:null,pagination_next:null,displayed_sidebar:"fabricSidebar"},u="Set up AI Unlimited",l={id:"fabric/test/fabric-setup-ai-unlimited",title:"Fabric set up AI Unlimited",description:"Learn about the setup details.",source:"@site/docs/fabric/test/test-file.md",sourceDirName:"fabric/test",slug:"/fabric/test/fabric-setup-ai-unlimited",permalink:"/pr-preview/pr-157/fr/ai-unlimited/fabric/test/fabric-setup-ai-unlimited",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"fabric-setup-ai-unlimited",title:"Fabric set up AI Unlimited",description:"Learn about the setup details.",sidebar_label:"Fabric Set up AI Unlimited",sidebar_position:1,pagination_prev:null,pagination_next:null,displayed_sidebar:"fabricSidebar"},sidebar:"fabricSidebar"},o={},s=[];function c(e){const t={a:"a",admonition:"admonition",h1:"h1",p:"p",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"set-up-ai-unlimited",children:"Set up AI Unlimited"}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"By setting up AI Unlimited, you become the AI Unlimited admin at your organization."})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["For setup help, email the ",(0,r.jsx)("a",{href:"mailto:aiunlimited.support@Teradata.com",children:"support team"})," or ask the ",(0,r.jsx)(t.a,{href:"https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa",children:"community"}),"."]})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>u});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var i=n(74848);function u(e){var t=e.children,n=e.hidden,u=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,u),hidden:n,children:t})}},56240:(e,t,n)=>{n.d(t,{A:()=>I});var r=n(96540),a=n(34164),i=n(23104),u=n(56347),l=n(205),o=n(57485);var s=n(89466);function c(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function d(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return c(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t,n,r=(void 0===(n=function(e,t){return e.value===t.value})&&(n=function(e,t){return e===t}),(t=e).filter((function(e,r){return t.findIndex((function(t){return n(t,e)}))!==r})));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,u.W6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,o.aZ)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(i.location.search);t.set(l,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[l,i])]}function b(e){var t,n,a,i,u=e.defaultValue,o=e.queryString,c=void 0!==o&&o,b=e.groupId,m=d(e),v=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:u,tabValues:m})})),h=v[0],g=v[1],y=p({queryString:c,groupId:b}),x=y[0],I=y[1],j=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:b}.groupId),n=(0,s.Dv)(t),a=n[0],i=n[1],[a,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),_=j[0],w=j[1],A=function(){var e=null!=x?x:_;return f({value:e,tabValues:m})?e:null}();return(0,l.A)((function(){A&&g(A)}),[A]),{selectedValue:h,selectValue:(0,r.useCallback)((function(e){if(!f({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);g(e),I(e),w(e)}),[I,w,m]),tabValues:m}}var m=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var h=n(74848);function g(e){var t=e.className,n=e.block,r=e.selectedValue,u=e.selectValue,l=e.tabValues,o=[],s=(0,i.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=o.indexOf(t),a=l[n].value;a!==r&&(s(t),u(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=o.indexOf(e.currentTarget)+1;n=null!=(r=o[a])?r:o[0];break;case"ArrowLeft":var i,u=o.indexOf(e.currentTarget)-1;n=null!=(i=o[u])?i:o[o.length-1]}null==(t=n)||t.focus()};return(0,h.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:l.map((function(e){var t=e.value,n=e.label,i=e.attributes;return(0,h.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return o.push(e)},onKeyDown:d,onClick:c},i,{className:(0,a.A)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var u=i.find((function(e){return e.props.value===a}));return u?(0,r.cloneElement)(u,{className:"margin-top--md"}):null}return(0,h.jsx)("div",{className:"margin-top--md",children:i.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function x(e){var t=b(e);return(0,h.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,h.jsx)(g,Object.assign({},e,t)),(0,h.jsx)(y,Object.assign({},e,t))]})}function I(e){var t=(0,m.A)();return(0,h.jsx)(x,Object.assign({},e,{children:c(e.children)}),String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>u,x:()=>l});var r=n(96540);const a={},i=r.createContext(a);function u(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:u(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);
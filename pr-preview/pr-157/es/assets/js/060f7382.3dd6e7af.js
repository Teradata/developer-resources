"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[79],{62898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(74848),r=n(28453);n(56240),n(19365);const o={id:"first-use-case",title:"Try out the data preparation use case",description:"Now that you've prepared your notebook, try out the data preparation use case.",sidebar_label:"Try out the use case",sidebar_position:4,pagination_prev:null,pagination_next:null,displayed_sidebar:"fabricSidebar"},i="Try out the use case",s={id:"fabric/first-use-case",title:"Try out the data preparation use case",description:"Now that you've prepared your notebook, try out the data preparation use case.",source:"@site/docs/fabric/Try out the data preparation use case.md",sourceDirName:"fabric",slug:"/fabric/first-use-case",permalink:"/pr-preview/pr-157/es/ai-unlimited/fabric/first-use-case",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"first-use-case",title:"Try out the data preparation use case",description:"Now that you've prepared your notebook, try out the data preparation use case.",sidebar_label:"Try out the use case",sidebar_position:4,pagination_prev:null,pagination_next:null,displayed_sidebar:"fabricSidebar"},sidebar:"fabricSidebar"},u={},l=[];function c(e){const t={h1:"h1",img:"img",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"try-out-the-use-case",children:"Try out the use case"}),"\n",(0,a.jsx)(t.p,{children:"The sample notebook has information about applying the AI Unlimited in-database functions to different stages of data preparation for a hypothetical use case. The other sample notebooks, financial customer journey and user segmentation, do the same thing. We will not cover those details here and will instead let you discover that through the notebook itself.  By default, the sample notebooks create tables in memory that are destroyed when the notebook is closed or disconnected. In this section we will look at how to:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Select tables from the Lakehouse explorer as an easy, optional way to find data"}),"\n",(0,a.jsx)(t.li,{children:"Write to the lakehouse"}),"\n",(0,a.jsx)(t.li,{children:"Find data between sessions"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"##Evaluate a table in the notebook"}),"\n",(0,a.jsx)(t.p,{children:"Scroll down to section 2.1"}),"\n",(0,a.jsx)(t.p,{children:"In this section, the sample notebook demonstrates modifying a dataset that is unique in one dimension (\u201cinvoiceno\u201d) to be unique by the desired dimension for analysis (\u201ccustomerid\u201d)."}),"\n",(0,a.jsx)(t.p,{children:"The \u201cdrop table\u201d cell simply clears the table from memory in case the user has already run the following cell with the \u201cSUM(quantity)\u201d expression."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"ImgSection21",src:n(17760).A+"",width:"1201",height:"688"})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var a=n(34164);const r={tabItem:"tabItem_Ymn6"};var o=n(74848);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:n,children:t})}},56240:(e,t,n)=>{n.d(t,{A:()=>x});var a=n(96540),r=n(34164),o=n(23104),i=n(56347),s=n(205),u=n(57485);var l=n(89466);function c(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function d(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return c(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t,n,a=(void 0===(n=function(e,t){return e.value===t.value})&&(n=function(e,t){return e===t}),(t=e).filter((function(e,a){return t.findIndex((function(t){return n(t,e)}))!==a})));if(a.length>0)throw new Error('Docusaurus error: Duplicate values "'+a.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function h(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,i.W6)(),s=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:r});return[(0,u.aZ)(s),(0,a.useCallback)((function(e){if(s){var t=new URLSearchParams(o.location.search);t.set(s,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[s,o])]}function p(e){var t,n,r,o,i=e.defaultValue,u=e.queryString,c=void 0!==u&&u,p=e.groupId,b=d(e),v=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:b})})),m=v[0],y=v[1],g=f({queryString:c,groupId:p}),w=g[0],x=g[1],j=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),n=(0,l.Dv)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),k=j[0],T=j[1],I=function(){var e=null!=w?w:k;return h({value:e,tabValues:b})?e:null}();return(0,s.A)((function(){I&&y(I)}),[I]),{selectedValue:m,selectValue:(0,a.useCallback)((function(e){if(!h({value:e,tabValues:b}))throw new Error("Can't select invalid tab value="+e);y(e),x(e),T(e)}),[x,T,b]),tabValues:b}}var b=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=n(74848);function y(e){var t=e.className,n=e.block,a=e.selectedValue,i=e.selectValue,s=e.tabValues,u=[],l=(0,o.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=u.indexOf(t),r=s[n].value;r!==a&&(l(t),i(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var a,r=u.indexOf(e.currentTarget)+1;n=null!=(a=u[r])?a:u[0];break;case"ArrowLeft":var o,i=u.indexOf(e.currentTarget)-1;n=null!=(o=u[i])?o:u[u.length-1]}null==(t=n)||t.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:s.map((function(e){var t=e.value,n=e.label,o=e.attributes;return(0,m.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return u.push(e)},onKeyDown:d,onClick:c},o,{className:(0,r.A)("tabs__item",v.tabItem,null==o?void 0:o.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function g(e){var t=e.lazy,n=e.children,r=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=o.find((function(e){return e.props.value===r}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function w(e){var t=p(e);return(0,m.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,m.jsx)(y,Object.assign({},e,t)),(0,m.jsx)(g,Object.assign({},e,t))]})}function x(e){var t=(0,b.A)();return(0,m.jsx)(w,Object.assign({},e,{children:c(e.children)}),String(t))}},17760:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/section2-1-6cc1403412517bfb043ebd82d0de9e31.svg"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var a=n(96540);const r={},o=a.createContext(r);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);
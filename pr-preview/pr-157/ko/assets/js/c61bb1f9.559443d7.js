"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[1341],{84170:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=t(74848),r=t(28453);t(56240),t(19365);const o={id:"load-data",title:"Load sample data",description:"Load sample data to your workspace.",sidebar_label:"Load sample data",sidebar_position:2,pagination_prev:null,pagination_next:null,displayed_sidebar:"fabricSidebar"},i=void 0,l={id:"fabric/get-started/load-data",title:"Load sample data",description:"Load sample data to your workspace.",source:"@site/docs/fabric/get-started/load-data.md",sourceDirName:"fabric/get-started",slug:"/fabric/get-started/load-data",permalink:"/pr-preview/pr-157/ko/ai-unlimited/fabric/get-started/load-data",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"load-data",title:"Load sample data",description:"Load sample data to your workspace.",sidebar_label:"Load sample data",sidebar_position:2,pagination_prev:null,pagination_next:null,displayed_sidebar:"fabricSidebar"},sidebar:"fabricSidebar"},u={},s=[];function c(e){const a={admonition:"admonition",img:"img",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"ImgSampleData",src:t(35171).A+"",width:"1372",height:"393"})}),"\n",(0,n.jsx)(a.p,{children:"Before using the sample notebook, you will need to load the sample data to your workspace. You do this by selecting \u201cSample data\u201d from the toolbar along the top of the notebook."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"ImgDataPreparation",src:t(11164).A+"",width:"911",height:"506"})}),"\n",(0,n.jsx)(a.p,{children:"Then, select the \u201cData preparation\u201d dataset.  The first time you load a dataset it will create a lakehouse item in Fabric named AIUnlimited_Demo. Future sample data sets will be added to that same lakehouse."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"ImgTopCell",src:t(84946).A+"",width:"922",height:"149"})}),"\n",(0,n.jsx)(a.admonition,{type:"note",children:(0,n.jsx)(a.p,{children:"If you change the name of the lakehouse, take special note of the cell at the very top of the notebook. Changing \u201cAIUnlimited_Demo\u201d here to your chosen name will allow you to easily run all of the cells in the notebook."})})]})}function d(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},19365:(e,a,t)=>{t.d(a,{A:()=>i});t(96540);var n=t(34164);const r={tabItem:"tabItem_Ymn6"};var o=t(74848);function i(e){var a=e.children,t=e.hidden,i=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,i),hidden:t,children:a})}},56240:(e,a,t)=>{t.d(a,{A:()=>x});var n=t(96540),r=t(34164),o=t(23104),i=t(56347),l=t(205),u=t(57485);var s=t(89466);function c(e){var a,t;return null!=(a=null==(t=n.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,n.isValidElement)(e)&&((a=e.props)&&"object"==typeof a&&"value"in a))return e;var a;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?a:[]}function d(e){var a=e.values,t=e.children;return(0,n.useMemo)((function(){var e=null!=a?a:function(e){return c(e).map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes,default:a.default}}))}(t);return function(e){var a,t,n=(void 0===(t=function(e,a){return e.value===a.value})&&(t=function(e,a){return e===a}),(a=e).filter((function(e,n){return a.findIndex((function(a){return t(a,e)}))!==n})));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[a,t])}function f(e){var a=e.value;return e.tabValues.some((function(e){return e.value===a}))}function p(e){var a=e.queryString,t=void 0!==a&&a,r=e.groupId,o=(0,i.W6)(),l=function(e){var a=e.queryString,t=void 0!==a&&a,n=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:r});return[(0,u.aZ)(l),(0,n.useCallback)((function(e){if(l){var a=new URLSearchParams(o.location.search);a.set(l,e),o.replace(Object.assign({},o.location,{search:a.toString()}))}}),[l,o])]}function b(e){var a,t,r,o,i=e.defaultValue,u=e.queryString,c=void 0!==u&&u,b=e.groupId,m=d(e),h=(0,n.useState)((function(){return function(e){var a,t=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(a=n.find((function(e){return e.default})))?a:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:m})})),v=h[0],g=h[1],y=p({queryString:c,groupId:b}),w=y[0],x=y[1],j=(a=function(e){return e?"docusaurus.tab."+e:null}({groupId:b}.groupId),t=(0,s.Dv)(a),r=t[0],o=t[1],[r,(0,n.useCallback)((function(e){a&&o.set(e)}),[a,o])]),k=j[0],I=j[1],_=function(){var e=null!=w?w:k;return f({value:e,tabValues:m})?e:null}();return(0,l.A)((function(){_&&g(_)}),[_]),{selectedValue:v,selectValue:(0,n.useCallback)((function(e){if(!f({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);g(e),x(e),I(e)}),[x,I,m]),tabValues:m}}var m=t(92303);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function g(e){var a=e.className,t=e.block,n=e.selectedValue,i=e.selectValue,l=e.tabValues,u=[],s=(0,o.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var a=e.currentTarget,t=u.indexOf(a),r=l[t].value;r!==n&&(s(a),i(r))},d=function(e){var a,t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var n,r=u.indexOf(e.currentTarget)+1;t=null!=(n=u[r])?n:u[0];break;case"ArrowLeft":var o,i=u.indexOf(e.currentTarget)-1;t=null!=(o=u[i])?o:u[u.length-1]}null==(a=t)||a.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},a),children:l.map((function(e){var a=e.value,t=e.label,o=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:function(e){return u.push(e)},onKeyDown:d,onClick:c},o,{className:(0,r.A)("tabs__item",h.tabItem,null==o?void 0:o.className,{"tabs__item--active":n===a}),children:null!=t?t:a}),a)}))})}function y(e){var a=e.lazy,t=e.children,r=e.selectedValue,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){var i=o.find((function(e){return e.props.value===r}));return i?(0,n.cloneElement)(i,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map((function(e,a){return(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==r})}))})}function w(e){var a=b(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",h.tabList),children:[(0,v.jsx)(g,Object.assign({},e,a)),(0,v.jsx)(y,Object.assign({},e,a))]})}function x(e){var a=(0,m.A)();return(0,v.jsx)(w,Object.assign({},e,{children:c(e.children)}),String(a))}},11164:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/data-preparation-0ff17b6d3501e5b685a339f827a9c5a4.svg"},35171:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/sample-data-66709bc6f571c08995da8427ad6aac35.svg"},84946:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/top-cell-def0f017b48311a0d58b2450bc3d7318.svg"},28453:(e,a,t)=>{t.d(a,{R:()=>i,x:()=>l});var n=t(96540);const r={},o=n.createContext(r);function i(e){const a=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:a},e.children)}}}]);
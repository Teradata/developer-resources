"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[1341],{84170:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(74848),r=a(28453);a(56240),a(19365);const o={id:"load-data",title:"Load sample data",description:"Load sample data to your workspace.",sidebar_label:"Load sample data",sidebar_position:2,pagination_prev:null,pagination_next:null,displayed_sidebar:"fabricSidebar"},i=void 0,l={id:"fabric/get-started/load-data",title:"Load sample data",description:"Load sample data to your workspace.",source:"@site/docs/fabric/get-started/load-data.md",sourceDirName:"fabric/get-started",slug:"/fabric/get-started/load-data",permalink:"/pr-preview/pr-155/ai-unlimited/fabric/get-started/load-data",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"load-data",title:"Load sample data",description:"Load sample data to your workspace.",sidebar_label:"Load sample data",sidebar_position:2,pagination_prev:null,pagination_next:null,displayed_sidebar:"fabricSidebar"},sidebar:"fabricSidebar"},u={},s=[];function c(e){const t={img:"img",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"ImgSampleData",src:a(35171).A+"",width:"1372",height:"393"})}),"\n",(0,n.jsx)(t.p,{children:"Before using the sample notebook, you'll need to load the sample data to your workspace. You do this by selecting \u201cSample data\u201d from the toolbar along the top of the notebook."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"ImgDataPreparationRev",src:a(11164).A+"",width:"1318",height:"717"})}),"\n",(0,n.jsx)(t.p,{children:"Select the \u201cData preparation\u201d dataset. This is tied to the data preparation sample notebook. Then select the \u201cAIUnlimited_Demo\u201d lakehouse you created in the earlier step. If you chose not to create a new lakehouse, select the name of the lakehouse you want to use."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"ImgTopCell",src:a(84946).A+"",width:"922",height:"149"})}),"\n",(0,n.jsx)(t.p,{children:"If you are using a pre-existing lakehouse, look at the cell at the very top of the notebook. Change \u201cAIUnlimited_Demo\u201d to the name of your chosen lakehouse to allow you to easily run all the cells in the notebook."})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>i});a(96540);var n=a(34164);const r={tabItem:"tabItem_Ymn6"};var o=a(74848);function i(e){var t=e.children,a=e.hidden,i=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,i),hidden:a,children:t})}},56240:(e,t,a)=>{a.d(t,{A:()=>w});var n=a(96540),r=a(34164),o=a(23104),i=a(56347),l=a(205),u=a(57485);var s=a(89466);function c(e){var t,a;return null!=(t=null==(a=n.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,n.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}function d(e){var t=e.values,a=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:function(e){return c(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(a);return function(e){var t,a,n=(void 0===(a=function(e,t){return e.value===t.value})&&(a=function(e,t){return e===t}),(t=e).filter((function(e,n){return t.findIndex((function(t){return a(t,e)}))!==n})));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,a=void 0!==t&&t,r=e.groupId,o=(0,i.W6)(),l=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:r});return[(0,u.aZ)(l),(0,n.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function b(e){var t,a,r,o,i=e.defaultValue,u=e.queryString,c=void 0!==u&&u,b=e.groupId,h=d(e),m=(0,n.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:h})})),v=m[0],g=m[1],y=f({queryString:c,groupId:b}),x=y[0],w=y[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:b}.groupId),a=(0,s.Dv)(t),r=a[0],o=a[1],[r,(0,n.useCallback)((function(e){t&&o.set(e)}),[t,o])]),j=k[0],I=k[1],_=function(){var e=null!=x?x:j;return p({value:e,tabValues:h})?e:null}();return(0,l.A)((function(){_&&g(_)}),[_]),{selectedValue:v,selectValue:(0,n.useCallback)((function(e){if(!p({value:e,tabValues:h}))throw new Error("Can't select invalid tab value="+e);g(e),w(e),I(e)}),[w,I,h]),tabValues:h}}var h=a(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(74848);function g(e){var t=e.className,a=e.block,n=e.selectedValue,i=e.selectValue,l=e.tabValues,u=[],s=(0,o.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,a=u.indexOf(t),r=l[a].value;r!==n&&(s(t),i(r))},d=function(e){var t,a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var n,r=u.indexOf(e.currentTarget)+1;a=null!=(n=u[r])?n:u[0];break;case"ArrowLeft":var o,i=u.indexOf(e.currentTarget)-1;a=null!=(o=u[i])?o:u[u.length-1]}null==(t=a)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t),children:l.map((function(e){var t=e.value,a=e.label,o=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:function(e){return u.push(e)},onKeyDown:d,onClick:c},o,{className:(0,r.A)("tabs__item",m.tabItem,null==o?void 0:o.className,{"tabs__item--active":n===t}),children:null!=a?a:t}),t)}))})}function y(e){var t=e.lazy,a=e.children,r=e.selectedValue,o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var i=o.find((function(e){return e.props.value===r}));return i?(0,n.cloneElement)(i,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function x(e){var t=b(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,v.jsx)(g,Object.assign({},e,t)),(0,v.jsx)(y,Object.assign({},e,t))]})}function w(e){var t=(0,h.A)();return(0,v.jsx)(x,Object.assign({},e,{children:c(e.children)}),String(t))}},11164:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/data-preparation-ffa671828956c936e5703aa1c863f40b.svg"},35171:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/sample-data-66709bc6f571c08995da8427ad6aac35.svg"},84946:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/top-cell-def0f017b48311a0d58b2450bc3d7318.svg"},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>l});var n=a(96540);const r={},o=n.createContext(r);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);
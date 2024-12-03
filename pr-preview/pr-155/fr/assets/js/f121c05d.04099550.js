"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[6109],{19799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(74848),r=n(28453);n(56240),n(19365);const i={id:"first-use-case",title:"Try the use case",description:"Now that your notebook is ready, try out the data preparation use case.",sidebar_label:"Try the use case",sidebar_position:2,pagination_prev:null,pagination_next:null,displayed_sidebar:"fabricSidebar"},o="Try the use case",s={id:"fabric/first-use-case",title:"Try the use case",description:"Now that your notebook is ready, try out the data preparation use case.",source:"@site/docs/fabric/first-use-case.md",sourceDirName:"fabric",slug:"/fabric/first-use-case",permalink:"/pr-preview/pr-155/fr/ai-unlimited/fabric/first-use-case",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"first-use-case",title:"Try the use case",description:"Now that your notebook is ready, try out the data preparation use case.",sidebar_label:"Try the use case",sidebar_position:2,pagination_prev:null,pagination_next:null,displayed_sidebar:"fabricSidebar"},sidebar:"fabricSidebar"},l={},c=[{value:"Evaluate a table in the notebook",id:"evaluate-a-table-in-the-notebook",level:2},{value:"Write to OneLake",id:"write-to-onelake",level:2},{value:"Save your work",id:"save-your-work",level:2},{value:"Pick up where we left off",id:"pick-up-where-we-left-off",level:2}];function u(e){const t={admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"try-the-use-case",children:"Try the use case"}),"\n",(0,a.jsx)(t.p,{children:"The sample notebook has information about applying the AI Unlimited in-database functions to different stages of data preparation for a hypothetical use case. The other sample notebooks, financial customer journey and user segmentation, do the same thing. We will not cover those details here and will instead let you discover that through the notebook itself."}),"\n",(0,a.jsx)(t.p,{children:"By default, the sample notebooks create tables in memory that are destroyed when the notebook is closed or disconnected."}),"\n",(0,a.jsx)(t.p,{children:"In this section we will look at how to:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Select tables from the Lakehouse explorer as an easy, optional way to find data"}),"\n",(0,a.jsx)(t.li,{children:"Write to the lakehouse"}),"\n",(0,a.jsx)(t.li,{children:"Find data between sessions"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"evaluate-a-table-in-the-notebook",children:"Evaluate a table in the notebook"}),"\n",(0,a.jsx)(t.p,{children:"Scroll down to section 2.1."}),"\n",(0,a.jsx)(t.p,{children:"In this section, the sample notebook demonstrates modifying a dataset that is unique in one dimension (\u201cinvoiceno\u201d) to be unique by the desired dimension for analysis (\u201ccustomerid\u201d)."}),"\n",(0,a.jsx)(t.p,{children:"The \u201cdrop table\u201d cell simply clears the table from memory in case the user has already run the following cell with the \u201cSUM(quantity)\u201d expression."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"ImgSection21",src:n(17760).A+"",width:"1201",height:"688"})}),"\n",(0,a.jsx)(t.p,{children:"Before the cell with \u201cCREATE OTF TABLE\u201d let\u2019s add a code cell to look at the data before it is transformed."}),"\n",(0,a.jsx)(t.p,{children:"The option to create a new cell appears above an existing cell when you select it. Select the cell with the \u201cCREATE OTF TABLE\u201d expression and select \u201c+Code.\u201d"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"ImgDragData",src:n(76706).A+"",width:"1321",height:"757"})}),"\n",(0,a.jsx)(t.p,{children:"Once the cell is created, select the \u201cuk_retail_data\u201d table from the Lakehouse explorer and drag it into the cell. This action always drops a \u201cSELECT TOP 10\u201d from the selected table expression into the cell and makes it easy to move from browsing tables to quickly adding the desired table name to a cell."}),"\n",(0,a.jsx)(t.p,{children:"Run the cell and you will see that the top ten have \u201cinvoices\u201d as a dimension with unique values. But, we want to analyze by \u201ccustomerid.\u201d"}),"\n",(0,a.jsx)(t.p,{children:"Running a cell will automatically connect the notebook to a \u201cstandard session.\u201d"}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"\u201cHigh-concurrency\u201d sessions are not available in preview."})}),"\n",(0,a.jsx)(t.h2,{id:"write-to-onelake",children:"Write to OneLake"}),"\n",(0,a.jsx)(t.p,{children:"In the next cell with \u201cSUM(quantity)\u201d you can see an expression to modify the table to aggregate invoice data by customerid. As it is written it will create this table in memory. This new table will be lost when you close the notebook or become inactive."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"ImgCellSUM",src:n(78797).A+"",width:"900",height:"299"})}),"\n",(0,a.jsx)(t.p,{children:"To write the created table to OneLake, we will append the target lakehouse name to the front of the table."}),"\n",(0,a.jsx)(t.p,{children:"Add the destination lakehouse followed by a period, \u201cAIUnlimited_Demo.\u201d, to the front of \u201cCustomer_ID_Group,\u201d the table being created.  The \u201cCREATE OTF TABLE\u201d expression is used by AI Unlimited to write a Delta lake or Iceberg table and is necessary when writing to OneLake."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"ImgNewTable",src:n(1396).A+"",width:"641",height:"632"})}),"\n",(0,a.jsx)(t.p,{children:"You should see your new table appear in the explorer."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"ImgDisconnect",src:n(80213).A+"",width:"861",height:"263"})}),"\n",(0,a.jsx)(t.p,{children:"To limit your consumption of compute while staying in the notebook, you can disconnect from the engine by selecting the stop icon to disconnect the session. This will destroy the engine along with any data created during the session unless it was explicitly written to OneLake. The table Customer_ID_Group will still be in our lakehouse."}),"\n",(0,a.jsx)(t.h2,{id:"save-your-work",children:"Save your work"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"ImgSaveWork",src:n(7810).A+"",width:"770",height:"520"})}),"\n",(0,a.jsx)(t.p,{children:"Now let\u2019s save the notebook. Any changes we made in code or markdown will persist when we reopen the notebook."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"ImgCloseNotebook",src:n(71482).A+"",width:"195",height:"522"})}),"\n",(0,a.jsx)(t.p,{children:"We can close the notebook by simply clicking the \u201cx\u201d button in the tab on the sidebar. This automatically disconnects the session and releases the engine and destroys any data that was not written to OneLake."}),"\n",(0,a.jsx)(t.h2,{id:"pick-up-where-we-left-off",children:"Pick up where we left off"}),"\n",(0,a.jsx)(t.p,{children:"Find and reopen the \u201cdata_prep\u201d table in your workspace. Connect to the AIUnlimited_Demos lakehouse in the Lakehouse explorer."}),"\n",(0,a.jsx)(t.p,{children:"Go back to section 2.1. See the Top 10 results for uk_retail_data."}),"\n",(0,a.jsx)(t.p,{children:"Beneath the cell with \u201cCREATE OTF TABLE\u201d that we edited to write to OneLake, create another code cell."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"ImgNewCell",src:n(32604).A+"",width:"1298",height:"740"})}),"\n",(0,a.jsx)(t.p,{children:"Drag our new table, \u201cCustomer_ID_Group,\u201d into the cell and run it."}),"\n",(0,a.jsx)(t.p,{children:"See that the new table with aggregated values has \u201ccustomerid\u201d as a unique value. We are now ready to create fit tables for our analysis."})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var a=n(34164);const r={tabItem:"tabItem_Ymn6"};var i=n(74848);function o(e){var t=e.children,n=e.hidden,o=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,o),hidden:n,children:t})}},56240:(e,t,n)=>{n.d(t,{A:()=>x});var a=n(96540),r=n(34164),i=n(23104),o=n(56347),s=n(205),l=n(57485);var c=n(89466);function u(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function d(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return u(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t,n,a=(void 0===(n=function(e,t){return e.value===t.value})&&(n=function(e,t){return e===t}),(t=e).filter((function(e,a){return t.findIndex((function(t){return n(t,e)}))!==a})));if(a.length>0)throw new Error('Docusaurus error: Duplicate values "'+a.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function h(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,i=(0,o.W6)(),s=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:r});return[(0,l.aZ)(s),(0,a.useCallback)((function(e){if(s){var t=new URLSearchParams(i.location.search);t.set(s,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[s,i])]}function b(e){var t,n,r,i,o=e.defaultValue,l=e.queryString,u=void 0!==l&&l,b=e.groupId,f=d(e),m=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:f})})),v=m[0],g=m[1],w=p({queryString:u,groupId:b}),y=w[0],x=w[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:b}.groupId),n=(0,c.Dv)(t),r=n[0],i=n[1],[r,(0,a.useCallback)((function(e){t&&i.set(e)}),[t,i])]),j=k[0],T=k[1],A=function(){var e=null!=y?y:j;return h({value:e,tabValues:f})?e:null}();return(0,s.A)((function(){A&&g(A)}),[A]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!h({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);g(e),x(e),T(e)}),[x,T,f]),tabValues:f}}var f=n(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function g(e){var t=e.className,n=e.block,a=e.selectedValue,o=e.selectValue,s=e.tabValues,l=[],c=(0,i.a_)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=l.indexOf(t),r=s[n].value;r!==a&&(c(t),o(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,r=l.indexOf(e.currentTarget)+1;n=null!=(a=l[r])?a:l[0];break;case"ArrowLeft":var i,o=l.indexOf(e.currentTarget)-1;n=null!=(i=l[o])?i:l[l.length-1]}null==(t=n)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:s.map((function(e){var t=e.value,n=e.label,i=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},i,{className:(0,r.A)("tabs__item",m.tabItem,null==i?void 0:i.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function w(e){var t=e.lazy,n=e.children,r=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=i.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function y(e){var t=b(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,v.jsx)(g,Object.assign({},e,t)),(0,v.jsx)(w,Object.assign({},e,t))]})}function x(e){var t=(0,f.A)();return(0,v.jsx)(y,Object.assign({},e,{children:u(e.children)}),String(t))}},78797:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/cell-sum-4f44bb85a81fcc67113c9cf4f5966845.svg"},71482:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/close-nb-82ab25a40efdf9f601e02450436cdf5a.svg"},80213:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/disconnect-629871e60395c5ec3a172cef662cf44c.svg"},76706:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/drag-data-89389ba2fc276f4a48adad2f904d3a67.svg"},32604:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/new-cell-40730a40c71b15b9b2be08fd55c6de10.svg"},1396:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/new-table-a66cb0a4335eeed59c5fbe43e9e6e43d.svg"},7810:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/save-work-0ab057378c2a8e2d5b1b925c14ca0d3e.svg"},17760:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/section2-1-6cc1403412517bfb043ebd82d0de9e31.svg"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var a=n(96540);const r={},i=a.createContext(r);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);
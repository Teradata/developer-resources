"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[8401],{8357:(e,n,t)=>{t.r(n),t.d(n,{default:()=>ie});var a=t(6540),i=t(5500),s=t(3807),r=t(4848),l=a.createContext(null);function o(e){var n=e.children,t=function(e){return(0,a.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return(0,r.jsx)(l.Provider,{value:t,children:n})}function d(){var e=(0,a.useContext)(l);if(null===e)throw new s.dV("DocProvider");return e}function c(){var e,n=d(),t=n.metadata,a=n.frontMatter,s=n.assets;return(0,r.jsx)(i.be,{title:t.title,description:t.description,keywords:a.keywords,image:null!=(e=s.image)?e:a.image})}var u=t(4164),m=t(4581),h=t(1312),v=t(9022);function p(e){var n=e.previous,t=e.next;return(0,r.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[n&&(0,r.jsx)(v.A,Object.assign({},n,{subLabel:(0,r.jsx)(h.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})})),t&&(0,r.jsx)(v.A,Object.assign({},t,{subLabel:(0,r.jsx)(h.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0}))]})}function x(){var e=d().metadata;return(0,r.jsx)(p,{previous:e.previous,next:e.next})}var b=t(4586),g=t(8774),f=t(4070),j=t(7559),A=t(5597),N=t(2252);var C={unreleased:function(e){var n=e.siteTitle,t=e.versionMetadata;return(0,r.jsx)(h.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:n,versionLabel:(0,r.jsx)("b",{children:t.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){var n=e.siteTitle,t=e.versionMetadata;return(0,r.jsx)(h.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:n,versionLabel:(0,r.jsx)("b",{children:t.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function L(e){var n=C[e.versionMetadata.banner];return(0,r.jsx)(n,Object.assign({},e))}function _(e){var n=e.versionLabel,t=e.to,a=e.onClick;return(0,r.jsx)(h.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:n,latestVersionLink:(0,r.jsx)("b",{children:(0,r.jsx)(g.A,{to:t,onClick:a,children:(0,r.jsx)(h.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function T(e){var n,t=e.className,a=e.versionMetadata,i=(0,b.A)().siteConfig.title,s=(0,f.vT)({failfast:!0}).pluginId,l=(0,A.g1)(s).savePreferredVersionName,o=(0,f.HW)(s),d=o.latestDocSuggestion,c=o.latestVersionSuggestion,m=null!=d?d:(n=c).docs.find((function(e){return e.id===n.mainDocId}));return(0,r.jsxs)("div",{className:(0,u.A)(t,j.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,r.jsx)("div",{children:(0,r.jsx)(L,{siteTitle:i,versionMetadata:a})}),(0,r.jsx)("div",{className:"margin-top--md",children:(0,r.jsx)(_,{versionLabel:c.label,to:m.path,onClick:function(){return l(c.name)}})})]})}function k(e){var n=e.className,t=(0,N.r)();return t.banner?(0,r.jsx)(T,{className:n,versionMetadata:t}):null}function y(e){var n=e.className,t=(0,N.r)();return t.badge?(0,r.jsx)("span",{className:(0,u.A)(n,j.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,r.jsx)(h.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label},children:"Version: {versionLabel}"})}):null}var H=t(2053),U=t(4336);function w(){var e=d().metadata,n=e.editUrl,t=e.lastUpdatedAt,a=e.lastUpdatedBy,i=e.tags,s=i.length>0,l=!!(n||t||a);return s||l?(0,r.jsxs)("footer",{className:(0,u.A)(j.G.docs.docFooter,"docusaurus-mt-lg"),children:[s&&(0,r.jsx)("div",{className:(0,u.A)("row margin-top--sm",j.G.docs.docFooterTagsRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(H.A,{tags:i})})}),l&&(0,r.jsx)(U.A,{className:(0,u.A)("margin-top--sm",j.G.docs.docFooterEditMetaRow),editUrl:n,lastUpdatedAt:t,lastUpdatedBy:a})]}):null}var M=t(1422),O=t(5195),I=t(8587);const E={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};var B=["collapsed"];function G(e){var n=e.collapsed,t=(0,I.A)(e,B);return(0,r.jsx)("button",Object.assign({type:"button"},t,{className:(0,u.A)("clean-btn",E.tocCollapsibleButton,!n&&E.tocCollapsibleButtonExpanded,t.className),children:(0,r.jsx)(h.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})}))}const V={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function S(e){var n=e.toc,t=e.className,a=e.minHeadingLevel,i=e.maxHeadingLevel,s=(0,M.u)({initialState:!0}),l=s.collapsed,o=s.toggleCollapsed;return(0,r.jsxs)("div",{className:(0,u.A)(V.tocCollapsible,!l&&V.tocCollapsibleExpanded,t),children:[(0,r.jsx)(G,{collapsed:l,onClick:o}),(0,r.jsx)(M.N,{lazy:!0,className:V.tocCollapsibleContent,collapsed:l,children:(0,r.jsx)(O.A,{toc:n,minHeadingLevel:a,maxHeadingLevel:i})})]})}const P={tocMobile:"tocMobile_ITEo"};function D(){var e=d(),n=e.toc,t=e.frontMatter;return(0,r.jsx)(S,{toc:n,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(j.G.docs.docTocMobile,P.tocMobile)})}var R=t(7763);function F(){var e=d(),n=e.toc,t=e.frontMatter;return(0,r.jsx)(R.A,{toc:n,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:j.G.docs.docTocDesktop})}var W=t(1107),z=t(2467);function q(e){var n,t,a,i,s=e.children,l=(n=d(),t=n.metadata,a=n.frontMatter,i=n.contentTitle,a.hide_title||void 0!==i?null:t.title);return(0,r.jsxs)("div",{className:(0,u.A)(j.G.docs.docMarkdown,"markdown"),children:[l&&(0,r.jsx)("header",{children:(0,r.jsx)(W.A,{as:"h1",children:l})}),(0,r.jsx)(z.A,{children:s})]})}var Z=t(6153),J=t(9169),K=t(6025);function Q(){var e=(0,K.A)("/");return(0,r.jsx)("li",{className:"breadcrumbs__item",children:(0,r.jsx)(g.A,{"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.home",message:"AI Unlimited",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,h.T)({id:"theme.docs.breadcrumbs.home",message:"AI Unlimited",description:"The label for the home page in the breadcrumbs"})})})}const X={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function Y(e){var n=e.children,t=e.href,a="breadcrumbs__link";return e.isLast?(0,r.jsx)("span",{className:a,itemProp:"name",children:n}):t?(0,r.jsx)(g.A,{className:a,href:t,itemProp:"item",children:(0,r.jsx)("span",{itemProp:"name",children:n})}):(0,r.jsx)("span",{className:a,children:n})}function $(e){var n=e.children,t=e.active,a=e.index,i=e.addMicrodata;return(0,r.jsxs)("li",Object.assign({},i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,u.A)("breadcrumbs__item",{"breadcrumbs__item--active":t}),children:[n,(0,r.jsx)("meta",{itemProp:"position",content:String(a+1)})]}))}function ee(){var e=(0,Z.OF)(),n=(0,J.Dt)();return e?(0,r.jsx)("nav",{className:(0,u.A)(j.G.docs.docBreadcrumbs,X.breadcrumbsContainer),"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,r.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[n&&(0,r.jsx)(Q,{}),e.map((function(n,t){var a=t===e.length-1,i="category"===n.type&&n.linkUnlisted?void 0:n.href;return(0,r.jsx)($,{active:a,index:t,addMicrodata:!!i,children:(0,r.jsx)(Y,{href:i,isLast:a,children:n.label})},t)}))]})}):null}var ne=t(996);const te={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function ae(e){var n,t,a,i,s,l,o=e.children,c=(n=d(),t=n.frontMatter,a=n.toc,i=(0,m.l)(),s=t.hide_table_of_contents,l=!s&&a.length>0,{hidden:s,mobile:l?(0,r.jsx)(D,{}):void 0,desktop:!l||"desktop"!==i&&"ssr"!==i?void 0:(0,r.jsx)(F,{})}),h=d().metadata.unlisted;return(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:(0,u.A)("col",!c.hidden&&te.docItemCol),children:[h&&(0,r.jsx)(ne.A,{}),(0,r.jsx)(k,{}),(0,r.jsxs)("div",{className:te.docItemContainer,children:[(0,r.jsxs)("article",{children:[(0,r.jsx)(ee,{}),(0,r.jsx)(y,{}),c.mobile,(0,r.jsx)(q,{children:o}),(0,r.jsx)(w,{})]}),(0,r.jsx)(x,{})]})]}),c.desktop&&(0,r.jsx)("div",{className:"col col--3",children:c.desktop})]})}function ie(e){var n="docs-doc-id-"+e.content.metadata.id,t=e.content;return(0,r.jsx)(o,{content:e.content,children:(0,r.jsxs)(i.e3,{className:n,children:[(0,r.jsx)(c,{}),(0,r.jsx)(ae,{children:(0,r.jsx)(t,{})})]})})}},4336:(e,n,t)=>{t.d(n,{A:()=>g});t(6540);var a=t(4164),i=t(1312),s=t(7559),r=t(8774),l=t(8587);const o={iconEdit:"iconEdit_Z9Sw"};var d=t(4848),c=["className"];function u(e){var n=e.className,t=(0,l.A)(e,c);return(0,d.jsx)("svg",Object.assign({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,a.A)(o.iconEdit,n),"aria-hidden":"true"},t,{children:(0,d.jsx)("g",{children:(0,d.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})}))}function m(e){var n=e.editUrl;return(0,d.jsxs)(r.A,{to:n,className:s.G.common.editThisPage,children:[(0,d.jsx)(u,{}),(0,d.jsx)(i.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var h=t(6266);function v(e){var n=e.lastUpdatedAt,t=new Date(n),a=(0,h.i)({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(t);return(0,d.jsx)(i.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,d.jsx)("b",{children:(0,d.jsx)("time",{dateTime:t.toISOString(),itemProp:"dateModified",children:a})})},children:" on {date}"})}function p(e){var n=e.lastUpdatedBy;return(0,d.jsx)(i.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,d.jsx)("b",{children:n})},children:" by {user}"})}function x(e){var n=e.lastUpdatedAt,t=e.lastUpdatedBy;return(0,d.jsxs)("span",{className:s.G.common.lastUpdated,children:[(0,d.jsx)(i.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:n?(0,d.jsx)(v,{lastUpdatedAt:n}):"",byUser:t?(0,d.jsx)(p,{lastUpdatedBy:t}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const b={lastUpdated:"lastUpdated_JAkA"};function g(e){var n=e.className,t=e.editUrl,i=e.lastUpdatedAt,s=e.lastUpdatedBy;return(0,d.jsxs)("div",{className:(0,a.A)("row",n),children:[(0,d.jsx)("div",{className:"col",children:t&&(0,d.jsx)(m,{editUrl:t})}),(0,d.jsx)("div",{className:(0,a.A)("col",b.lastUpdated),children:(i||s)&&(0,d.jsx)(x,{lastUpdatedAt:i,lastUpdatedBy:s})})]})}},9022:(e,n,t)=>{t.d(n,{A:()=>r});t(6540);var a=t(4164),i=t(8774),s=t(4848);function r(e){var n=e.permalink,t=e.title,r=e.subLabel,l=e.isNext;return(0,s.jsxs)(i.A,{className:(0,a.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:n,children:[r&&(0,s.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,s.jsx)("div",{className:"pagination-nav__label",children:t})]})}},7763:(e,n,t)=>{t.d(n,{A:()=>u});var a=t(8587),i=(t(6540),t(4164)),s=t(5195);const r={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var l=t(4848),o=["className"],d="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function u(e){var n=e.className,t=(0,a.A)(e,o);return(0,l.jsx)("div",{className:(0,i.A)(r.tableOfContents,"thin-scrollbar",n),children:(0,l.jsx)(s.A,Object.assign({},t,{linkClassName:d,linkActiveClassName:c}))})}},5195:(e,n,t)=>{t.d(n,{A:()=>g});var a=t(8587),i=t(6540),s=t(6342),r=["parentIndex"];function l(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var a=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),t[e.level]=n}));var i=[];return n.forEach((function(e){var t=e.parentIndex,s=(0,a.A)(e,r);t>=0?n[t].children.push(s):i.push(s)})),i}function o(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return n.flatMap((function(e){var n=o({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[Object.assign({},e,{children:n})]:n}))}function d(e){var n=e.getBoundingClientRect();return n.top===n.bottom?d(e.parentNode):n}function c(e,n){var t,a,i=n.anchorTopOffset,s=e.find((function(e){return d(e).top>=i}));return s?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(s))?s:null!=(a=e[e.indexOf(s)-1])?a:null:null!=(t=e[e.length-1])?t:null}function u(){var e=(0,i.useRef)(0),n=(0,s.p)().navbar.hideOnScroll;return(0,i.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function m(e){var n=(0,i.useRef)(void 0),t=u();(0,i.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,i=e.linkActiveClassName,s=e.minHeadingLevel,r=e.maxHeadingLevel;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,a=[],i=n;i<=t;i+=1)a.push("h"+i+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:s,maxHeadingLevel:r}),o=c(l,{anchorTopOffset:t.current}),d=e.find((function(e){return o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var h=t(8774),v=t(4848);function p(e){var n=e.toc,t=e.className,a=e.linkClassName,i=e.isChild;return n.length?(0,v.jsx)("ul",{className:i?void 0:t,children:n.map((function(e){return(0,v.jsxs)("li",{children:[(0,v.jsx)(h.A,{to:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,v.jsx)(p,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)}))}):null}const x=i.memo(p);var b=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function g(e){var n=e.toc,t=e.className,r=void 0===t?"table-of-contents table-of-contents__left-border":t,d=e.linkClassName,c=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,h=void 0===u?void 0:u,p=e.minHeadingLevel,g=e.maxHeadingLevel,f=(0,a.A)(e,b),j=(0,s.p)(),A=null!=p?p:j.tableOfContents.minHeadingLevel,N=null!=g?g:j.tableOfContents.maxHeadingLevel,C=function(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,i.useMemo)((function(){return o({toc:l(n),minHeadingLevel:t,maxHeadingLevel:a})}),[n,t,a])}({toc:n,minHeadingLevel:A,maxHeadingLevel:N});return m((0,i.useMemo)((function(){if(c&&h)return{linkClassName:c,linkActiveClassName:h,minHeadingLevel:A,maxHeadingLevel:N}}),[c,h,A,N])),(0,v.jsx)(x,Object.assign({toc:C,className:r,linkClassName:c},f))}},6133:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);var a=t(4164),i=t(8774);const s={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var r=t(4848);function l(e){var n=e.permalink,t=e.label,l=e.count;return(0,r.jsxs)(i.A,{href:n,className:(0,a.A)(s.tag,l?s.tagWithCount:s.tagRegular),children:[t,l&&(0,r.jsx)("span",{children:l})]})}},2053:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var a=t(4164),i=t(1312),s=t(6133);const r={tags:"tags_jXut",tag:"tag_QGVx"};var l=t(4848);function o(e){var n=e.tags;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(i.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,a.A)(r.tags,"padding--none","margin-left--sm"),children:n.map((function(e){var n=e.label,t=e.permalink;return(0,l.jsx)("li",{className:r.tag,children:(0,l.jsx)(s.A,{label:n,permalink:t})},t)}))})]})}},996:(e,n,t)=>{t.d(n,{A:()=>h});t(6540);var a=t(4164),i=t(1312),s=t(5260),r=t(4848);function l(){return(0,r.jsx)(i.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,r.jsx)(i.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function d(){return(0,r.jsx)(s.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var c=t(7559),u=t(8217);function m(e){var n=e.className;return(0,r.jsx)(u.A,{type:"caution",title:(0,r.jsx)(l,{}),className:(0,a.A)(n,c.G.common.unlistedBanner),children:(0,r.jsx)(o,{})})}function h(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d,{}),(0,r.jsx)(m,Object.assign({},e))]})}},6266:(e,n,t)=>{t.d(n,{i:()=>i});var a=t(4586);function i(e){void 0===e&&(e={});var n=(0,a.A)().i18n.currentLocale,t=function(){var e=(0,a.A)().i18n,n=e.currentLocale;return e.localeConfigs[n].calendar}();return new Intl.DateTimeFormat(n,Object.assign({calendar:t},e))}},4717:(e,n,t)=>{t.d(n,{A:()=>c});t(6540);var a=t(4164),i=t(7559);const s={admonition:"admonition_Gfwi",admonitionHeading:"admonitionHeading_f1Ed",admonitionIcon:"admonitionIcon_kpSf",admonitionContentWrapper:"admonitionContentWrapper_oDLF",admonitionContent:"admonitionContent_UjKb",admonitionWrapper:"admonitionWrapper_Mm55"};var r=t(4848);function l(e){var n=e.type,t=e.className,l=e.children;return(0,r.jsx)("div",{className:(0,a.A)(i.G.common.admonition,i.G.common.admonitionType(n),s.admonition,t),children:l})}function o(e){var n=e.icon,t=e.title;return(0,r.jsxs)("div",{className:s.admonitionHeading,children:[n&&(0,r.jsx)("span",{className:s.admonitionIcon,children:n}),t]})}function d(e){var n=e.children;return n?(0,r.jsx)("div",{className:s.admonitionContent,children:n}):null}function c(e){var n=e.type,t=e.icon,i=e.title,c=e.children,u=e.className;return(0,r.jsxs)(l,{type:n,className:(0,a.A)(u,s.admonitionWrapper),children:[(0,r.jsx)("span",{className:s.admonitionIcon,children:t}),(0,r.jsxs)("span",{className:s.admonitionContentWrapper,children:[(0,r.jsx)(o,{title:i}),(0,r.jsx)(d,{children:c})]})]})}},6334:(e,n,t)=>{t.d(n,{A:()=>u});var a=t(8587),i=t(6540),s=t(2303),r=t(6342),l=t(4291),o=t(8478),d=t(4848),c=["children"];function u(e){var n,u,m=e.children,h=(0,a.A)(e,c),v=h.className,p=void 0===v?"":v,x=h.metastring,b=h.title,g=h.language,f=(0,s.A)(),j=(u=m,i.Children.toArray(u).some((function(e){return(0,i.isValidElement)(e)}))?u:Array.isArray(u)?u.join(""):u),A=(0,r.p)().prism.defaultLanguage,N=function(e){return null==e?void 0:e.toLowerCase()}(null!=(n=null!=g?g:(0,l.Op)(p))?n:A),C=(0,l.wt)(x)||b;return(0,d.jsx)(o.A,{children:function(){var e=t(4727).z7;return(0,d.jsx)(e,{label:C,maxHeight:0,language:N||"text",content:j,hideHeader:!C},f)}})}}}]);
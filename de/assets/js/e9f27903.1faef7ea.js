"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[1546],{8821:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var t=r(4848),a=r(8453),i=r(6240),s=r(9365);const l={id:"run-ai-unlimited-jupyterlab-docker",title:"QuickStart - Run AI Unlimited and JupyterLab using Docker",description:"Learn how to run AI Unlimited and JupyterLab using Docker.",sidebar_label:"Run the manager and JupyterLab using Docker",sidebar_position:3,pagination_prev:null,pagination_next:null},o="Run the manager and JupyterLab using Docker",c={id:"resources/quickstart/run-ai-unlimited-jupyterlab-docker",title:"QuickStart - Run AI Unlimited and JupyterLab using Docker",description:"Learn how to run AI Unlimited and JupyterLab using Docker.",source:"@site/docs/resources/quickstart/docker-install-ai-unlimited-jupyter.md",sourceDirName:"resources/quickstart",slug:"/resources/quickstart/run-ai-unlimited-jupyterlab-docker",permalink:"/ai-unlimited-docs/de/docs/resources/quickstart/run-ai-unlimited-jupyterlab-docker",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"run-ai-unlimited-jupyterlab-docker",title:"QuickStart - Run AI Unlimited and JupyterLab using Docker",description:"Learn how to run AI Unlimited and JupyterLab using Docker.",sidebar_label:"Run the manager and JupyterLab using Docker",sidebar_position:3,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},d={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Set configuration file locations",id:"set-configuration-file-locations",level:2},{value:"Clone the respository",id:"clone-the-respository",level:2},{value:"Pass your cloud service provider credentials to Docker",id:"pass-your-cloud-service-provider-credentials-to-docker",level:2},{value:"Start the manager and JupyterLab",id:"start-the-manager-and-jupyterlab",level:2},{value:"Verify access",id:"verify-access",level:2},{value:"What&#39;s next",id:"whats-next",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"run-the-manager-and-jupyterlab-using-docker",children:"Run the manager and JupyterLab using Docker"}),"\n",(0,t.jsx)(n.p,{children:"The AI Unlimited manager orchestrates the engine's deployment and includes a web-based user interface for monitoring projects. And the manager is where you'll set up AI Unlimited."}),"\n",(0,t.jsx)(n.p,{children:"You'll use JupyterLab to explore and analyze data."}),"\n",(0,t.jsxs)(n.p,{children:["You'll use ",(0,t.jsx)(n.a,{href:"https://docs.docker.com/compose/",children:"Docker Compose"})," to run the AI Unlimited manager and JupyterLab, with the AI Unlimited Jupyter Kernel, locally in containers."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["For installation support, ask the ",(0,t.jsx)(n.a,{href:"https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa",children:"community"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A pay-as-you-go AWS or Azure account on which to deploy the engine from a Jupyter notebook"}),"\n",(0,t.jsxs)(n.li,{children:["A ",(0,t.jsx)(n.a,{href:"https://github.com",children:"GitHub"})," or ",(0,t.jsx)(n.a,{href:"https://gitlab.com",children:"GitLab"})," account to host each project repository for authenticating users and storing project information"]}),"\n",(0,t.jsx)(n.li,{children:"Your object storage, where your Amazon or ADLS Gen2 data lake resides."}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://www.docker.com/get-started/",children:"Docker"})," installed on your computer"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"set-configuration-file-locations",children:"Set configuration file locations"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Optionally, set the ",(0,t.jsx)(n.code,{children:"AI_UNLIMITED_HOME"})," environment variable to the directory in which to store the manager's configuration and data files. Make sure the directory exists, and that appropriate permission is granted. The default location is ",(0,t.jsx)(n.code,{children:"./volumes/ai-unlimited"}),"."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Local location"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Container location"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Usage"})})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$AI_UNLIMITED_HOME"}),(0,t.jsx)(n.td,{children:"/etc/td"}),(0,t.jsx)(n.td,{children:"Stores data and configuration"})]})})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Learn about ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/sdkref/latest/guide/environment-variables.html",children:"AWS"})," or ",(0,t.jsx)(n.a,{href:"https://github.com/paulbouwer/terraform-azure-quickstarts-samples/blob/master/README.md#azure-authentication",children:"Azure"})," environment variables."]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Optionally, set the ",(0,t.jsx)(n.code,{children:"JUPYTER_HOME"})," environment variable to the directory in which to store the JupyterLab configuration files. The default location is ",(0,t.jsx)(n.code,{children:"~/.jupyter"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"clone-the-respository",children:"Clone the respository"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"deployments/docker/"})," folder in the ",(0,t.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited",children:"AI Unlimited GitHub repository"})," provided by Teradata includes these files that you'll need to run the manager and JupyterLab:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"[AWS or Azure]-credentials-env-vars.yaml"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"ai-unlimited.yaml"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"jupyter.yaml"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Clone the repository."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/Teradata/ai-unlimited\n"})}),"\n",(0,t.jsx)(n.h2,{id:"pass-your-cloud-service-provider-credentials-to-docker",children:"Pass your cloud service provider credentials to Docker"}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsx)(n.p,{children:"You can pass the credentials two ways:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Use ",(0,t.jsx)(n.code,{children:"[AWS or Azure]-credentials-env-vars.yaml"}),", which contains environment variables for storing your credentials."]}),"\n",(0,t.jsx)(n.li,{children:"Use a local volume containing your credentials."}),"\n"]}),(0,t.jsxs)(n.p,{children:["See both methods in the ",(0,t.jsx)(n.strong,{children:"Jupyter and AI Unlimited"})," section of ",(0,t.jsx)(n.a,{href:"https://github.com/Teradata/ai-unlimited/blob/develop/deployments/docker/README.md",children:"Deploy with Docker Compose"})," in the Teradata AI Unlimited GitHub repository."]}),(0,t.jsx)(n.p,{children:"This QuickStart uses the first method."})]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Copy these environment variables from your cloud service provider's console."}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(s.A,{value:"aws",label:"AWS",default:!0,children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"AWS_ACCESS_KEY_ID"}),", ",(0,t.jsx)(n.code,{children:"AWS_SECRET_ACCESS_KEY"}),", and ",(0,t.jsx)(n.code,{children:"AWS_SESSION_TOKEN"})]})}),(0,t.jsx)(s.A,{value:"azure",label:"Azure",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ARM_SUBSCRIPTION_ID"}),", ",(0,t.jsx)(n.code,{children:"ARM_CLIENT_ID"}),", and ",(0,t.jsx)(n.code,{children:"ARM_CLIENT_SECRET"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to the directory where ",(0,t.jsx)(n.code,{children:"[AWS or Azure]-credentials-env-vars.yaml"})," is located and update the file's environment variable values."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"start-the-manager-and-jupyterlab",children:"Start the manager and JupyterLab"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["From the directory where ",(0,t.jsx)(n.code,{children:"[AWS or Azure]-credentials-env-vars.yaml"}),", ",(0,t.jsx)(n.code,{children:"ai-unlimited.yaml"}),", and ",(0,t.jsx)(n.code,{children:"jupyter.yaml"})," are located, and start the manager and JupyterLab."]}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)(s.A,{value:"aws",label:"AWS",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="Run the Docker Compose file in the background "',children:"docker compose -f ai-unlimited.yaml -f aws-credentials-env-vars.yaml -f jupyter.yaml -d up \n"})})}),(0,t.jsx)(s.A,{value:"azure",label:"Azure",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="Run the Docker Compose file in the background "',children:"docker compose -f ai-unlimited.yaml -f azure-credentials-env-vars.yaml -f jupyter.yaml -d up\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"The command downloads and starts the manager and JupyterLab containers."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"To retrieve the Jupyter token, list the currently running containers."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker ps \n"})}),"\n",(0,t.jsx)(n.p,{children:"And identify the name of the JupyterLab container."}),"\n",(0,t.jsx)(n.p,{children:"Then search for occurrences of the string 'Token' in the container's logs."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker logs <container_name> | grep 'Token'\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"verify-access",children:"Verify access"}),"\n",(0,t.jsxs)(n.p,{children:["When the manager is ready, you can access it at ",(0,t.jsx)(n.code,{children:"http://localhost:3000"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["When JupyterLab is ready, you can access it at ",(0,t.jsx)(n.code,{children:"http://localhost:8888"}),", and enter the token."]}),"\n",(0,t.jsx)(n.h2,{id:"whats-next",children:"What's next"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/resources/create-oauth-app",children:"Create an OAuth app"})," to allow authorization between AI Unlimited and your Git provider account."]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>s});r(6540);var t=r(4164);const a={tabItem:"tabItem_Ymn6"};var i=r(4848);function s(e){var n=e.children,r=e.hidden,s=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,s),hidden:r,children:n})}},6240:(e,n,r)=>{r.d(n,{A:()=>g});var t=r(6540),a=r(4164),i=r(3104),s=r(6347),l=r(205),o=r(7485);var c=r(9466);function d(e){var n,r;return null!=(n=null==(r=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function u(e){var n=e.values,r=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n,r,t=(void 0===(r=function(e,n){return e.value===n.value})&&(r=function(e,n){return e===n}),(n=e).filter((function(e,t){return n.findIndex((function(n){return r(n,e)}))!==t})));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,r=void 0!==n&&n,a=e.groupId,i=(0,s.W6)(),l=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:a});return[(0,o.aZ)(l),(0,t.useCallback)((function(e){if(l){var n=new URLSearchParams(i.location.search);n.set(l,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[l,i])]}function m(e){var n,r,a,i,s=e.defaultValue,o=e.queryString,d=void 0!==o&&o,m=e.groupId,f=u(e),j=(0,t.useState)((function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:f})})),b=j[0],x=j[1],v=p({queryString:d,groupId:m}),y=v[0],g=v[1],A=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:m}.groupId),r=(0,c.Dv)(n),a=r[0],i=r[1],[a,(0,t.useCallback)((function(e){n&&i.set(e)}),[n,i])]),k=A[0],w=A[1],I=function(){var e=null!=y?y:k;return h({value:e,tabValues:f})?e:null}();return(0,l.A)((function(){I&&x(I)}),[I]),{selectedValue:b,selectValue:(0,t.useCallback)((function(e){if(!h({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);x(e),g(e),w(e)}),[g,w,f]),tabValues:f}}var f=r(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(4848);function x(e){var n=e.className,r=e.block,t=e.selectedValue,s=e.selectValue,l=e.tabValues,o=[],c=(0,i.a_)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,r=o.indexOf(n),a=l[r].value;a!==t&&(c(n),s(a))},u=function(e){var n,r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var t,a=o.indexOf(e.currentTarget)+1;r=null!=(t=o[a])?t:o[0];break;case"ArrowLeft":var i,s=o.indexOf(e.currentTarget)-1;r=null!=(i=o[s])?i:o[o.length-1]}null==(n=r)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:l.map((function(e){var n=e.value,r=e.label,i=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return o.push(e)},onKeyDown:u,onClick:d},i,{className:(0,a.A)("tabs__item",j.tabItem,null==i?void 0:i.className,{"tabs__item--active":t===n}),children:null!=r?r:n}),n)}))})}function v(e){var n=e.lazy,r=e.children,a=e.selectedValue,i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var s=i.find((function(e){return e.props.value===a}));return s?(0,t.cloneElement)(s,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function y(e){var n=m(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",j.tabList),children:[(0,b.jsx)(x,Object.assign({},e,n)),(0,b.jsx)(v,Object.assign({},e,n))]})}function g(e){var n=(0,f.A)();return(0,b.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>l});var t=r(6540);const a={},i=t.createContext(a);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
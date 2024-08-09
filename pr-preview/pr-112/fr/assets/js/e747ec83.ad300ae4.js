"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[7051],{13340:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=a(74848),t=a(28453);const r={id:"glossary",title:"Glossary",description:"Terminology for the installation and use of AI Unlimited.",sidebar_label:"Glossary",sidebar_position:7,pagination_prev:null,pagination_next:null},o="Glossary",s={id:"glossary",title:"Glossary",description:"Terminology for the installation and use of AI Unlimited.",source:"@site/docs/glossary.md",sourceDirName:".",slug:"/glossary",permalink:"/pr-preview/pr-112/fr/ai-unlimited/glossary",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"glossary",title:"Glossary",description:"Terminology for the installation and use of AI Unlimited.",sidebar_label:"Glossary",sidebar_position:7,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},l={},d=[{value:"A",id:"a",level:2},{value:"AI Unlimited manager",id:"ai-unlimited-manager",level:3},{value:"API key",id:"api-key",level:3},{value:"application load balancer",id:"application-load-balancer",level:3},{value:"C",id:"c",level:2},{value:"Classless Inter-domain Routing",id:"classless-inter-domain-routing",level:3},{value:"cloud service provider",id:"cloud-service-provider",level:3},{value:"cluster",id:"cluster",level:3},{value:"D",id:"d",level:2},{value:"data lake",id:"data-lake",level:3},{value:"E",id:"e",level:2},{value:"engine",id:"engine",level:3},{value:"I",id:"i",level:2},{value:"IAM role",id:"iam-role",level:3},{value:"K",id:"k",level:2},{value:"kernel",id:"kernel",level:3},{value:"L",id:"l",level:2},{value:"load balancer",id:"load-balancer",level:3},{value:"M",id:"m",level:2},{value:"mounting volumes",id:"mounting-volumes",level:3},{value:"N",id:"n",level:2},{value:"network load balancer",id:"network-load-balancer",level:3},{value:"O",id:"o",level:2},{value:"OAuth app",id:"oauth-app",level:3},{value:"object storage",id:"object-storage",level:3},{value:"P",id:"p",level:2},{value:"project",id:"project",level:3},{value:"project repository",id:"project-repository",level:3},{value:"S",id:"s",level:2},{value:"systemd",id:"systemd",level:3},{value:"T",id:"t",level:2},{value:"Transport Layer Security",id:"transport-layer-security",level:3},{value:"V",id:"v",level:2},{value:"virtual machine",id:"virtual-machine",level:3}];function c(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"glossary",children:"Glossary"}),"\n",(0,i.jsx)(n.h2,{id:"a",children:"A"}),"\n",(0,i.jsx)(n.h3,{id:"ai-unlimited-manager",children:"AI Unlimited manager"}),"\n",(0,i.jsxs)(n.p,{children:["The manager is the AI Unlimited component that orchestrates the deployment of the AI/ML ",(0,i.jsx)(n.a,{href:"#engine",children:"engine"})," on your ",(0,i.jsx)(n.a,{href:"#cloud-service-provider",children:"cloud service provider"}),". It also provides a web-based user interface from which the AI Unlimited admin sets up AI Unlimited after installing it, and changes settings later as needed. From the manager, all users get their API key."]}),"\n",(0,i.jsx)(n.h3,{id:"api-key",children:"API key"}),"\n",(0,i.jsx)(n.p,{children:"Your Application Programming Interface (API) key enables you to connect your Jupyter notebook to the manager. This is the first thing you do in a new Jupyter notebook before you create or access a project."}),"\n",(0,i.jsx)(n.h3,{id:"application-load-balancer",children:"application load balancer"}),"\n",(0,i.jsx)(n.p,{children:"Load balancers distribute incoming traffic across servers. An application load balancer inspects incoming traffic content, such as HTTP headers and paths, to make routing decisions. You can use an application load balancer as a way to expose AI Unlimited manager and the engine to the public IP network."}),"\n",(0,i.jsx)(n.h2,{id:"c",children:"C"}),"\n",(0,i.jsx)(n.h3,{id:"classless-inter-domain-routing",children:"Classless Inter-domain Routing"}),"\n",(0,i.jsx)(n.p,{children:"Classless Inter-domain Routing (CIDR) is an IP address allocation method for data routing efficiency on the internet. Every computer that connects to the internet has a unique number called an IP address. IP addresses enable computers to find each other and communicate. A CIDR block is a range of IP addresses."}),"\n",(0,i.jsx)(n.h3,{id:"cloud-service-provider",children:"cloud service provider"}),"\n",(0,i.jsxs)(n.p,{children:["A cloud service provider (CSP) is a company that delivers computing resources over the internet, on demand. These resources can include Infrastructure as a Service (IaaS), Platform as a Service (PaaS), or Software as a Service (SaaS). The ",(0,i.jsx)(n.a,{href:"#ai-unlimited-manager",children:"AI Unlimited manager"})," and ",(0,i.jsx)(n.a,{href:"#engine",children:"engine"})," run on your CSP."]}),"\n",(0,i.jsx)(n.h3,{id:"cluster",children:"cluster"}),"\n",(0,i.jsxs)(n.p,{children:["A group of interconnected computers (also called nodes) that work together as a single system for enhanced processing power, scalability, and reliability. The AI Unlimited engine is deployed on a cluster on your CSP. Each node is a ",(0,i.jsx)(n.a,{href:"#virtual-machine",children:"virtual machine (VM)"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"d",children:"D"}),"\n",(0,i.jsx)(n.h3,{id:"data-lake",children:"data lake"}),"\n",(0,i.jsxs)(n.p,{children:["A central repository of data for data analytics, machine learning, and data exploration. A data lake is typically built on ",(0,i.jsx)(n.a,{href:"#object-storage",children:"object storage"})," and is designed for data accessibility for future data analysis."]}),"\n",(0,i.jsx)(n.h2,{id:"e",children:"E"}),"\n",(0,i.jsx)(n.h3,{id:"engine",children:"engine"}),"\n",(0,i.jsxs)(n.p,{children:["In cloud computing, a compute engine is an example of Infrastructure as a Service (IaaS). It enables you to create and run ",(0,i.jsx)(n.a,{href:"#virtual-machine",children:"virtual machines (VMs)"})," on your cloud service provider's infrastructure. When you deploy the AI Unlimited AI/ML compute engine from a Jupyter notebook, the ",(0,i.jsx)(n.a,{href:"#ai-unlimited-manager",children:"AI Unlimited manager"})," provisions VMs."]}),"\n",(0,i.jsx)(n.h2,{id:"i",children:"I"}),"\n",(0,i.jsx)(n.h3,{id:"iam-role",children:"IAM role"}),"\n",(0,i.jsxs)(n.p,{children:["An ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html",children:"Identity and Access Management (IAM) role"})," is a role that you or a cloud admin at your organization can create in your organization's AWS account. It has one or more attached permissions policies that determine what an entity with that role can and cannot do in AWS."]}),"\n",(0,i.jsx)(n.h2,{id:"k",children:"K"}),"\n",(0,i.jsx)(n.h3,{id:"kernel",children:"kernel"}),"\n",(0,i.jsx)(n.p,{children:"A Jupyter kernel is a language-specific program that processes the code you write in a Jupyter notebook and communicates the results back to your notebook for you to see."}),"\n",(0,i.jsx)(n.h2,{id:"l",children:"L"}),"\n",(0,i.jsx)(n.h3,{id:"load-balancer",children:"load balancer"}),"\n",(0,i.jsx)(n.p,{children:"A load balancer distributes incoming traffic evenly across servers, which improves performance, reliability, and scalability. If your organization does not allow its resources to use public IP addresses, you can use a load balancer to expose the AI Unlimited manager and engine to the public IP network."}),"\n",(0,i.jsx)(n.h2,{id:"m",children:"M"}),"\n",(0,i.jsx)(n.h3,{id:"mounting-volumes",children:"mounting volumes"}),"\n",(0,i.jsx)(n.p,{children:"A concept in containerized platforms such as Docker. You can map a directory on the machine running the containers (the host) to a directory in a container to share data and files between the host and container."}),"\n",(0,i.jsx)(n.h2,{id:"n",children:"N"}),"\n",(0,i.jsx)(n.h3,{id:"network-load-balancer",children:"network load balancer"}),"\n",(0,i.jsx)(n.p,{children:"Load balancers distribute incoming traffic across servers. A network load balancer does not inspect traffic content. It bases routing decisions on factors such as ports and IP addresses. You can use a network load balancer as a way to expose AI Unlimited and its engine to the public IP network."}),"\n",(0,i.jsx)(n.h2,{id:"o",children:"O"}),"\n",(0,i.jsx)(n.h3,{id:"oauth-app",children:"OAuth app"}),"\n",(0,i.jsx)(n.p,{children:"An OAuth app allows a user to grant access to their account on one website or service to another, without sharing their password."}),"\n",(0,i.jsxs)(n.p,{children:["An OAuth app, that you or someone at your organization creates, allows AI Unlimited to use GitHub or GitLab authentication to manage each ",(0,i.jsx)(n.a,{href:"#project-repository",children:"project repository"})," and, each time the engine is deployed, derive the engine users from the collaborators that have been added to the repository."]}),"\n",(0,i.jsx)(n.h3,{id:"object-storage",children:"object storage"}),"\n",(0,i.jsxs)(n.p,{children:["A scalable, highly effective way to store large amounts of structured, semi-structured, or unstructured data in the cloud. Amazon S3 is object storage on AWS. Azure Blob Storage is object storage on Azure. Object storage is the basis for a ",(0,i.jsx)(n.a,{href:"#data-lake",children:"data lake"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"p",children:"P"}),"\n",(0,i.jsx)(n.h3,{id:"project",children:"project"}),"\n",(0,i.jsx)(n.p,{children:"A project is a means to explore and analyze data from a Jupyter notebook. Each project has a repository in your GitHub or GitLab account."}),"\n",(0,i.jsx)(n.h3,{id:"project-repository",children:"project repository"}),"\n",(0,i.jsx)(n.p,{children:"The project owner (the user who created the project) adds project collaborators to the Git repository. From there, each time the engine is deployed, AI Unlimited derives the users authorized to connect to and use the engine."}),"\n",(0,i.jsx)(n.p,{children:"But, if the engine is already deployed, the project owner must update the engine to add those users so they can connect to and use the engine during that deployment."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Each time the engine is deployed, a new password is generated for each project user."})}),"\n",(0,i.jsx)(n.p,{children:"Each time you, or another user, suspends a project, its schema is backed up in the repository. AI Unlimited uses the stored schema to bring the project back when it's restored."}),"\n",(0,i.jsx)(n.h2,{id:"s",children:"S"}),"\n",(0,i.jsx)(n.h3,{id:"systemd",children:"systemd"}),"\n",(0,i.jsx)(n.p,{children:"Linux foundational software for system and service management. The AI Unlimited manager runs on a server instance in a container controlled by systemd."}),"\n",(0,i.jsx)(n.h2,{id:"t",children:"T"}),"\n",(0,i.jsx)(n.h3,{id:"transport-layer-security",children:"Transport Layer Security"}),"\n",(0,i.jsx)(n.p,{children:"Transport Layer Security (TLS) is a protocol that creates a secure connection between two parties communicating over the internet. TLS encrypts data during transmission, making it unreadable to anyone who intercepts it, and it verifies the identities of both parties."}),"\n",(0,i.jsx)(n.h2,{id:"v",children:"V"}),"\n",(0,i.jsx)(n.h3,{id:"virtual-machine",children:"virtual machine"}),"\n",(0,i.jsxs)(n.p,{children:["A virtual machine (VM) is a software emulation of a physical computer. Each VM operates as its own computer within a ",(0,i.jsx)(n.a,{href:"#cloud-service-provider",children:"cloud service provider's"})," infrastructure. VMs enable scalability, flexibility, easier management, and a pay-as-you-go model."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>s});var i=a(96540);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
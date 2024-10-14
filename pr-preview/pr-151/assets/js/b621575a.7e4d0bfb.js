"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[2630],{42326:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=t(74848),r=t(28453);const s={id:"teradata-vantage-engine-architecture-and-concepts",title:"Teradata Vantage Engine Architecture and Concepts",sidebar_label:"Teradata Vantage Engine Architecture and Concepts",sidebar_position:1,author:"Krutik Pathak",email:"krutik.pathak@teradata.com",page_last_update:"August 7th, 2023",description:"Teradata Vantage Architecture and Concepts.",keywords:["data warehouses","teradata vantage engine architecture","teradata","vantage","Access Module Processors (AMP)","Parsing Engines (PE)","Massively Parallel Processing (MPP)","Virtual Disk (Vdisks)","BYNET"]},i="Teradata Vantage Engine Architecture and Concepts",o={id:"introduction/teradata-vantage-engine-architecture-and-concepts",title:"Teradata Vantage Engine Architecture and Concepts",description:"Teradata Vantage Architecture and Concepts.",source:"@site/quickstarts/introduction/teradata-vantage-engine-architecture-and-concepts.md",sourceDirName:"introduction",slug:"/introduction/teradata-vantage-engine-architecture-and-concepts",permalink:"/pr-preview/pr-151/quickstarts/introduction/teradata-vantage-engine-architecture-and-concepts",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"teradata-vantage-engine-architecture-and-concepts",title:"Teradata Vantage Engine Architecture and Concepts",sidebar_label:"Teradata Vantage Engine Architecture and Concepts",sidebar_position:1,author:"Krutik Pathak",email:"krutik.pathak@teradata.com",page_last_update:"August 7th, 2023",description:"Teradata Vantage Architecture and Concepts.",keywords:["data warehouses","teradata vantage engine architecture","teradata","vantage","Access Module Processors (AMP)","Parsing Engines (PE)","Massively Parallel Processing (MPP)","Virtual Disk (Vdisks)","BYNET"]},sidebar:"tutorialSidebar",next:{title:"Run Vantage Express on VMware",permalink:"/pr-preview/pr-151/quickstarts/get-access-to-vantage/on-your-local/getting-started-vmware"}},c={},l=[{value:"Overview",id:"overview",level:3},{value:"Teradata Vantage Engine Architecture Components",id:"teradata-vantage-engine-architecture-components",level:2},{value:"Parsing Engines (PE)",id:"parsing-engines-pe",level:3},{value:"BYNET",id:"bynet",level:3},{value:"Parallel Database Extension (PDE)",id:"parallel-database-extension-pde",level:3},{value:"Access Module Processor (AMP)",id:"access-module-processor-amp",level:3},{value:"Virtual Disks (Vdisks)",id:"virtual-disks-vdisks",level:3},{value:"Node",id:"node",level:3},{value:"Teradata Vantage Architecture Concepts",id:"teradata-vantage-architecture-concepts",level:2},{value:"Linear Growth and Expandability",id:"linear-growth-and-expandability",level:3},{value:"Teradata Parallelism",id:"teradata-parallelism",level:3},{value:"Teradata Retrieval Architecture",id:"teradata-retrieval-architecture",level:3},{value:"Teradata Data Distribution",id:"teradata-data-distribution",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"Further Reading",id:"further-reading",level:2}];function d(e){const a={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"teradata-vantage-engine-architecture-and-concepts",children:"Teradata Vantage Engine Architecture and Concepts"}),"\n",(0,n.jsx)(a.h3,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(a.p,{children:"This article explains the underlying concepts of Teradata Vantage engine architecture. All editions of Vantage, including the Primary Cluster in VantageCloud Lake utilize the same engine."}),"\n",(0,n.jsx)(a.p,{children:"Teradata's architecture is designed around a Massively Parallel Processing (MPP), shared-nothing architecture, which enables high-performance data processing and analytics. The MPP architecture distributes the workload into multiple vprocs or virtual processors. The virtual processor where query processing takes place is commonly referred to as an Access Module Processor (AMP). Each AMP is isolated from other AMPs, and processes the queries in parallel allowing Teradata to process large volumes of data rapidly."}),"\n",(0,n.jsx)(a.p,{children:"The major architectural components of the Teradata Vantage engine include the Parsing Engines (PEs), BYNET, Access Module Processors (AMPs), and Virtual Disks (Vdisks). Vdisks are assigned to AMPs in enterprise platforms, and to the Primary Cluster in the case of VantageCloud Lake environments."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Teradata Vantage Major Architectural Components",src:t(95490).A+"",width:"1832",height:"1427"})}),"\n",(0,n.jsx)(a.h2,{id:"teradata-vantage-engine-architecture-components",children:"Teradata Vantage Engine Architecture Components"}),"\n",(0,n.jsx)(a.p,{children:"The Teradata Vantage engine consists of the components below:"}),"\n",(0,n.jsx)(a.h3,{id:"parsing-engines-pe",children:"Parsing Engines (PE)"}),"\n",(0,n.jsx)(a.p,{children:"When a SQL query is run in Teradata, it first reaches the Parsing Engine. The functions of the Parsing Engine are:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Manage individual user sessions (up to 120)."}),"\n",(0,n.jsx)(a.li,{children:"Check if the objects used in the SQL query exist."}),"\n",(0,n.jsx)(a.li,{children:"Check if the user has required privileges against the objects used in the SQL query."}),"\n",(0,n.jsx)(a.li,{children:"Parse and optimize the SQL queries."}),"\n",(0,n.jsx)(a.li,{children:"Prepare the execution plan to execute the SQL query and passes it to the corresponding AMPs."}),"\n",(0,n.jsx)(a.li,{children:"Receive the response from the AMPs and send it back to the requesting client."}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"bynet",children:"BYNET"}),"\n",(0,n.jsx)(a.p,{children:"BYNET is a system that enables component communication. The BYNET system provides high-speed bi-directional broadcast, multicast, and point-to-point communication and merge functions. It performs three key functions: coordinating multi-AMP queries, reading data from multiple AMPs, regulating message flow to prevent congestion, and processing platform throughput. These functions of BYNET make Vantage highly scalable and enable Massively Parallel Processing (MPP) capabilities."}),"\n",(0,n.jsx)(a.h3,{id:"parallel-database-extension-pde",children:"Parallel Database Extension (PDE)"}),"\n",(0,n.jsx)(a.p,{children:"Parallel Database Extension (PDE) is an intermediary software layer positioned between the operating system and the Teradata Vantage database. PDE enables MPP systems to use features such as BYNET and shared disks. It facilitates the parallelism that is responsible for the speed and linear scalability of the Teradata Vantage database."}),"\n",(0,n.jsx)(a.h3,{id:"access-module-processor-amp",children:"Access Module Processor (AMP)"}),"\n",(0,n.jsx)(a.p,{children:"AMPs are responsible for data storage and retrieval. Each AMP is associated with its own set of Virtual Disks (Vdisks) where the data is stored, and no other AMP can access that content in line with the shared-nothing architecture. The functions of AMP are:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Access storage using Vantage\u2019s Block File System Software"}),"\n",(0,n.jsx)(a.li,{children:"Lock management"}),"\n",(0,n.jsx)(a.li,{children:"Sorting rows"}),"\n",(0,n.jsx)(a.li,{children:"Aggregating columns"}),"\n",(0,n.jsx)(a.li,{children:"Join processing"}),"\n",(0,n.jsx)(a.li,{children:"Output conversion"}),"\n",(0,n.jsx)(a.li,{children:"Disk space management"}),"\n",(0,n.jsx)(a.li,{children:"Accounting"}),"\n",(0,n.jsx)(a.li,{children:"Recovery processing"}),"\n"]}),"\n",(0,n.jsx)(a.admonition,{type:"note",children:(0,n.jsx)(a.p,{children:"AMPs in VantageCore IntelliFlex, VantageCore VMware, VantageCloud Enterprise, and the Primary Cluster in the case of VantageCloud Lake, store data in a Block File System (BFS) format on Vdisks. AMPs in Compute Clusters and Compute Worker Nodes on VantageCloud Lake do not have BFS, they can only access data in object storage using the Object File System (OFS)."})}),"\n",(0,n.jsx)(a.h3,{id:"virtual-disks-vdisks",children:"Virtual Disks (Vdisks)"}),"\n",(0,n.jsx)(a.p,{children:"These are units of storage space owned by an AMP. Virtual Disks are used to hold user data (rows within tables). Virtual Disks map to physical space on a disk."}),"\n",(0,n.jsx)(a.h3,{id:"node",children:"Node"}),"\n",(0,n.jsx)(a.p,{children:"A node, in the context of Teradata systems, represents an individual server that functions as a hardware platform for the database software. It serves as a processing unit where database operations are executed under the control of a single operating system. When Teradata is deployed in a cloud, it follows the same MPP, shared-nothing architecture but the physical nodes are replaced with virtual machines (VMs)."}),"\n",(0,n.jsx)(a.h2,{id:"teradata-vantage-architecture-concepts",children:"Teradata Vantage Architecture Concepts"}),"\n",(0,n.jsx)(a.p,{children:"The concepts below are applicable to Teradata Vantage."}),"\n",(0,n.jsx)(a.h3,{id:"linear-growth-and-expandability",children:"Linear Growth and Expandability"}),"\n",(0,n.jsx)(a.p,{children:"Teradata is a linearly expandable RDBMS. As the workload and data volume increase, adding more hardware resources such as servers or nodes results in a proportional increase in performance and capacity. Linear Scalability allows for increased workload without decreased throughput."}),"\n",(0,n.jsx)(a.h3,{id:"teradata-parallelism",children:"Teradata Parallelism"}),"\n",(0,n.jsx)(a.p,{children:"Teradata parallelism refers to the inherent ability of the Teradata Database to perform parallel processing of data and queries across multiple nodes or components simultaneously.\xa0"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Each Parsing Engine (PE) in Teradata has the capability to handle up to 120 sessions concurrently."}),"\n",(0,n.jsx)(a.li,{children:"The BYNET in Teradata enables parallel handling of all message activity, including data redistribution for subsequent tasks."}),"\n",(0,n.jsx)(a.li,{children:"All Access Module Processors (AMPs) in Teradata can collaborate in parallel to serve any incoming request."}),"\n",(0,n.jsx)(a.li,{children:"Each AMP can work on multiple requests concurrently, allowing for efficient parallel processing."}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Teradata Parallelism",src:t(59322).A+"",width:"1613",height:"1243"})}),"\n",(0,n.jsx)(a.h3,{id:"teradata-retrieval-architecture",children:"Teradata Retrieval Architecture"}),"\n",(0,n.jsx)(a.p,{children:"The key steps involved in Teradata Retrieval Architecture are:"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"The Parsing Engine sends a request to retrieve one or more rows."}),"\n",(0,n.jsx)(a.li,{children:"The BYNET activates the relevant AMP(s) for processing."}),"\n",(0,n.jsx)(a.li,{children:"The AMP(s) concurrently locate and retrieve the desired row(s) through parallel access."}),"\n",(0,n.jsx)(a.li,{children:"The BYNET returns the retrieved row(s) to the Parsing Engine."}),"\n",(0,n.jsx)(a.li,{children:"The Parsing Engine then delivers the row(s) back to the requesting client application."}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Teradata Retrieval Architecture",src:t(53020).A+"",width:"1594",height:"1650"})}),"\n",(0,n.jsx)(a.h3,{id:"teradata-data-distribution",children:"Teradata Data Distribution"}),"\n",(0,n.jsx)(a.p,{children:"Teradata's MPP architecture requires an efficient means of distributing and retrieving data and does so using hash partitioning. Most tables in Vantage use hashing to distribute data for the tables based on the value of the row\u2019s Primary Index (PI) to disk storage in Block File System (BFS) and may scan the entire table or use indexes to access the data. This approach ensures scalable performance and efficient data access."}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"If the Primary Index is unique then the rows in the tables are automatically distributed evenly by hash partitioning."}),"\n",(0,n.jsx)(a.li,{children:"The designated Primary Index column(s) are hashed to generate consistent hash codes for the same values."}),"\n",(0,n.jsx)(a.li,{children:"No reorganization, repartitioning, or space management is required."}),"\n",(0,n.jsx)(a.li,{children:"Each AMP typically contains rows from all tables, ensuring efficient data access and processing."}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Teradata Data Distribution",src:t(49041).A+"",width:"808",height:"278"})}),"\n",(0,n.jsx)(a.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(a.p,{children:"In this article, we covered the major architectural components of Teradata Vantage, such as the Parsing Engines (PEs), BYNET, Access Module Processors (AMPs), Virtual Disk (Vdisk), other architectural components such as Parallel Database Extension (PDE), Node and the essential concepts of Teradata Vantage such as Linear Growth and Expandability, Parallelism, Data Retrieval, and Data Distribution."}),"\n",(0,n.jsx)(a.h2,{id:"further-reading",children:"Further Reading"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Database-Introduction/Vantage-Hardware-and-Software-Architecture/Virtual-Processors/Parsing-Engine",children:"Parsing Engine"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://www.teradata.com/Blogs/What-Is-the-BYNET-and-Why-Is-It-Important-to-Vantage",children:"BYNET"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Database-Introduction/Vantage-Hardware-and-Software-Architecture/Virtual-Processors/Access-Module-Processor",children:"Access Module Processor"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Database-Introduction/Vantage-Hardware-and-Software-Architecture/Parallel-Database-Extensions",children:"Parallel Database Extensions"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Database-Introduction/Data-Distribution-and-Data-Access-Methods",children:"Teradata Data Distribution and Data Access Methods"})}),"\n"]})]})}function h(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},95490:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/teradata_architecture_major_components-7765b95b61d10d943b332ebf6febe6eb.png"},49041:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/teradata_data_distribution-327311847473ff2f4912cf933490a902.png"},59322:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/teradata_parallelism-8d274f7c12f5a56401aa851c794c28b4.png"},53020:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/teradata_retrieval_architecture-6cd252bde7f84fcb85c4eedb1542174c.png"},28453:(e,a,t)=>{t.d(a,{R:()=>i,x:()=>o});var n=t(96540);const r={},s=n.createContext(r);function i(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);
"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[1032],{3441:(e,t,s)=>{s.d(t,{Ay:()=>o,RM:()=>i});var n=s(4848),r=s(8453);const i=[];function a(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"deployments"})," folder in the ",(0,n.jsx)(t.a,{href:"https://github.com/Teradata/ai-unlimited",children:"AI Unlimited GitHub repository"})," provided by Teradata contains template, parameter, and policy files for installing AI Unlimited."]}),"\n",(0,n.jsx)(t.p,{children:"Open a terminal window, and clone the repository."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/Teradata/ai-unlimited\n"})})]})}function o(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},1535:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=s(4848),r=s(8453),i=s(3441);const a={id:"deploy-jupyter-aws-console",title:"Deploy JupyterLab from the AWS Management Console",description:"Learn how to deploy JupyterLab using a Cloudformation template.",sidebar_label:"Install on AWS",sidebar_position:1,pagination_prev:null,pagination_next:null},o="Install JupyterLab on AWS",l={id:"resources/jupyterlab/deploy-jupyter-aws-console",title:"Deploy JupyterLab from the AWS Management Console",description:"Learn how to deploy JupyterLab using a Cloudformation template.",source:"@site/docs/resources/jupyterlab/install-jupyterlab-aws.md",sourceDirName:"resources/jupyterlab",slug:"/resources/jupyterlab/deploy-jupyter-aws-console",permalink:"/ai-unlimited-docs/docs/resources/jupyterlab/deploy-jupyter-aws-console",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"deploy-jupyter-aws-console",title:"Deploy JupyterLab from the AWS Management Console",description:"Learn how to deploy JupyterLab using a Cloudformation template.",sidebar_label:"Install on AWS",sidebar_position:1,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},d={},c=[{value:"Prepare your AWS account",id:"prepare-your-aws-account",level:2},{value:"Clone the repository",id:"clone-the-repository",level:2},...i.RM,{value:"Locate the Jupyter template",id:"locate-the-jupyter-template",level:2},{value:"Load the template",id:"load-the-template",level:2},{value:"Specify stack details and options",id:"specify-stack-details-and-options",level:2},{value:"Without a persistent volume",id:"without-a-persistent-volume",level:4},{value:"With a persistent volume",id:"with-a-persistent-volume",level:4},{value:"Example",id:"example",level:4},{value:"Review and create the stack",id:"review-and-create-the-stack",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"install-jupyterlab-on-aws",children:"Install JupyterLab on AWS"}),"\n",(0,n.jsx)(t.p,{children:"You'll use a CloudFormation template provided by Teradata to install JupyterLab and the AI Unlimited kernel from the AWS Management Console."}),"\n",(0,n.jsxs)(t.p,{children:["This deploys a server instance, with JupyterLab running in a container controlled by ",(0,n.jsx)(t.a,{href:"/ai-unlimited-docs/docs/glossary#glo-systemd",children:"systemd"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["For installation support, ask the ",(0,n.jsx)(t.a,{href:"https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa",children:"community"}),"."]})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"References to the AWS Management Console are accurate as of April 11, 2024."})}),"\n",(0,n.jsx)(t.h2,{id:"prepare-your-aws-account",children:"Prepare your AWS account"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Work with your cloud admin to ensure you have the ",(0,n.jsx)(t.a,{href:"https://aws.amazon.com/iam/",children:"IAM"})," permissions you need to create the cloud resources defined in the ",(0,n.jsx)(t.a,{href:"https://github.com/Teradata/ai-unlimited/tree/develop/deployments/aws/templates/jupyter",children:"JupyterLab template"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["If you'll need to access the JupyterLab instance, after it is installed, to run commands or debug, you can use a ",(0,n.jsx)(t.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html",children:"key pair"})," you generate to securely connect using Secure Shell (SSH). You will need the key pair when you ",(0,n.jsx)(t.a,{href:"#jup-aws-parms",children:"specify the stack details"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["If you plan to use an ",(0,n.jsx)(t.a,{href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancer-getting-started.html",children:"Application Load Balancer (ALB)"})," or ",(0,n.jsx)(t.a,{href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancer-getting-started.html",children:"Network Load Balancer (NLB)"}),", make sure you have permission to manage these AWS services:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://docs.aws.amazon.com/acm/",children:"AWS Certificate Manager"}),"\u2014to issue a new certificate for the hosted zone ID in Route 53."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html",children:"AWS Route 53"}),"\u2014to configure a custom domain name and route DNS queries to your load balancer."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"clone-the-repository",children:"Clone the repository"}),"\n","\n",(0,n.jsx)(i.Ay,{}),"\n",(0,n.jsx)(t.h2,{id:"locate-the-jupyter-template",children:"Locate the Jupyter template"}),"\n",(0,n.jsx)(t.p,{children:"CloudFormation templates for JupyterLab are here in the AI Unlimited GitHub repository:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"deployments/aws/templates/jupyter/"})}),"\n",(0,n.jsxs)(t.p,{children:["Choose a template based on whether you intend to use a ",(0,n.jsx)(t.a,{href:"/ai-unlimited-docs/docs/glossary#glo-load-balancer",children:"load balancer"})," and what type."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"You might want to ask a cloud admin at your organization for guidance."})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"jupyter-alb.yaml"}),"\u2014Hosts JupyterLab behind an ",(0,n.jsx)(t.a,{href:"/ai-unlimited-docs/docs/glossary#glo-application-load-balancer",children:"application load balancer"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"jupyter-with-nlb.yaml"}),"\u2014Hosts JupyterLab behind a ",(0,n.jsx)(t.a,{href:"/ai-unlimited-docs/docs/glossary#glo-network-load-balancer",children:"network load balancer"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"jupyter-without-lb.yaml"}),"\u2014No load balancer"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"load-the-template",children:"Load the template"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Sign in to the ",(0,n.jsx)(t.a,{href:"https://aws.amazon.com",children:"AWS console"}),", and select the region in which to deploy JupyterLab.\nWe recommend selecting the region closest to your primary work location."]}),"\n",(0,n.jsxs)(t.li,{children:["Search for and go to ",(0,n.jsx)(t.strong,{children:"CloudFormation"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Select ",(0,n.jsx)(t.strong,{children:"Create Stack"}),", then ",(0,n.jsx)(t.strong,{children:"With new resources (standard)"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Select ",(0,n.jsx)(t.strong,{children:"Choose an existing template"})," and ",(0,n.jsx)(t.strong,{children:"Upload a template file"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Select the template file you chose to use, and click ",(0,n.jsx)(t.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,n.jsx)("a",{id:"jup-aws-parms"}),"\n",(0,n.jsx)(t.h2,{id:"specify-stack-details-and-options",children:"Specify stack details and options"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Provide a stack name."}),"\n",(0,n.jsx)(t.li,{children:"Review the parameters. Provide values for the required ones. Your organization might require others."}),"\n"]}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"AWS and JupyterLab parameters"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Notes"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"InstanceType"}),(0,n.jsx)(t.td,{children:"The EC2 instance type that you want to use for the service."}),(0,n.jsxs)(t.td,{children:["Required with default",(0,n.jsx)("br",{}),"Default: t3.small",(0,n.jsx)("br",{}),"We recommend using the default instance type to save costs."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"RootVolumeSize"}),(0,n.jsx)(t.td,{children:"The size of the root disk you want to attach to the instance, in GB."}),(0,n.jsxs)(t.td,{children:["Required with default",(0,n.jsx)("br",{}),"Default: 8",(0,n.jsx)("br",{}),"Supports values between 8 and 1000."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"TerminationProtection"}),(0,n.jsx)(t.td,{children:"Enable instance termination protection."}),(0,n.jsxs)(t.td,{children:["Required with default",(0,n.jsx)("br",{}),"Default: false"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"IamRole"}),(0,n.jsx)(t.td,{children:"Specifies whether CloudFormation should create a new IAM role or use an existing one."}),(0,n.jsxs)(t.td,{children:["Required with default",(0,n.jsx)("br",{}),"Default: New",(0,n.jsx)("br",{}),"Supported options are: New or Existing"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"IamRoleName"}),(0,n.jsx)(t.td,{children:"The name of the IAM role to assign to the instance, either an existing IAM role or a  newly created IAM role."}),(0,n.jsxs)(t.td,{children:["Optional with default",(0,n.jsx)("br",{}),"Default:  ai-unlimited-iam-role",(0,n.jsx)("br",{}),"If naming a new IAM role, CloudFormation requires the CAPABILITY_NAMED_IAM capability. Leave this blank to use an autogenerated name."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["IamPermissions",(0,n.jsx)("br",{}),"Boundary"]}),(0,n.jsx)(t.td,{children:"The ARN of the IAM permissions boundary to associate with the IAM role assigned to the instance."}),(0,n.jsxs)(t.td,{children:["Optional",(0,n.jsx)("br",{}),"Default: NA"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"AvailabilityZone"}),(0,n.jsx)(t.td,{children:"The availability zone to which you want to deploy the instance."}),(0,n.jsxs)(t.td,{children:["Required",(0,n.jsx)("br",{}),"Default: NA",(0,n.jsx)("br",{}),"The value must match the subnet, the zone of any pre-existing volumes, and the instance type must be available in the selected zone."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"LoadBalancing"}),(0,n.jsx)(t.td,{children:"Specifies whether the instance is accessed via an NLB."}),(0,n.jsxs)(t.td,{children:["Required with default",(0,n.jsx)("br",{}),"Default: NetworkLoadBalancer",(0,n.jsx)("br",{}),"Supported options are: NetworkLoadBalancer or None"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"LoadBalancerScheme"}),(0,n.jsx)(t.td,{children:"If a load balancer is used, this field specifies whether the instance is accessible from the Internet or only from within the VPC."}),(0,n.jsxs)(t.td,{children:["Optional with default",(0,n.jsx)("br",{}),"Default: Internet-facing",(0,n.jsx)("br",{}),"The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the Internet. The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the personal IP addresses of the nodes. Therefore, internal load balancers can route requests from clients with access to the VPC for the load balancer."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Private"}),(0,n.jsx)(t.td,{children:"Specifies whether the service is deployed in a private network without public IPs."}),(0,n.jsxs)(t.td,{children:["Required",(0,n.jsx)("br",{}),"Default: false"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Session"}),(0,n.jsx)(t.td,{children:"Specifies whether you can use the AWS Session Manager to access the instance."}),(0,n.jsxs)(t.td,{children:["Required",(0,n.jsx)("br",{}),"Default: false"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Vpc"}),(0,n.jsx)(t.td,{children:"The network to which you want to deploy the instance."}),(0,n.jsxs)(t.td,{children:["Required",(0,n.jsx)("br",{}),"Default: NA"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Subnet"}),(0,n.jsx)(t.td,{children:"The subnetwork to which you want to deploy the instance."}),(0,n.jsxs)(t.td,{children:["Required",(0,n.jsx)("br",{}),"Default: NA",(0,n.jsx)("br",{}),"The subnet must reside in the selected availability zone."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"KeyName"}),(0,n.jsx)(t.td,{children:"The public/private key pair which allows you to connect securely to your instance after it launches. When you create an AWS account, this is the key pair you create in your preferred region."}),(0,n.jsxs)(t.td,{children:["Optional",(0,n.jsx)("br",{}),"Default: NA",(0,n.jsx)("br",{}),"Leave this field blank if you do not want to include the SSH keys."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"AccessCIDR"}),(0,n.jsx)(t.td,{children:"The CIDR IP address range that is permitted to access the instance."}),(0,n.jsxs)(t.td,{children:["Optional",(0,n.jsx)("br",{}),"Default: NA",(0,n.jsx)("br",{}),"We recommend setting this value to a trusted IP range. Define at least one of AccessCIDR, PrefixList, or SecurityGroup to allow inbound traffic unless you create custom security group ingress rules."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"PrefixList"}),(0,n.jsx)(t.td,{children:"The prefix list that you can use to communicate with the instance. It is a collection of CIDR blocks that define a set of IP address ranges that require the same policy enforcement."}),(0,n.jsxs)(t.td,{children:["Optional",(0,n.jsx)("br",{}),"Default: NA",(0,n.jsx)("br",{}),"Define at least one of AccessCIDR, PrefixList, or SecurityGroup to allow inbound traffic unless you create custom security group ingress rules."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SecurityGroup"}),(0,n.jsx)(t.td,{children:"The virtual firewall that controls inbound and outbound traffic to the instance."}),(0,n.jsxs)(t.td,{children:["Optional",(0,n.jsx)("br",{}),"Default: NA",(0,n.jsx)("br",{}),"Implemented as a set of rules that specify which protocols, ports, and IP addresses or CIDR blocks are allowed to access the instance. Define at least one of AccessCIDR, PrefixList, or SecurityGroup to allow inbound traffic unless you create custom security group ingress rules."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"UsePersistentVolume"}),(0,n.jsxs)(t.td,{children:["Specifies whether you want to use a persistent volume to store data. See ",(0,n.jsx)(t.em,{children:"Learn more: Why use a persistent volume?"})," below the parameters section."]}),(0,n.jsxs)(t.td,{children:["Optional with default",(0,n.jsx)("br",{}),"Default: None",(0,n.jsx)("br",{}),"Supported options are: new persistent volume, an existing one, or none, depending on your use case."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"PersistentVolumeSize"}),(0,n.jsx)(t.td,{children:"The size of the persistent volume that you can attach to the instance, in GB."}),(0,n.jsxs)(t.td,{children:["Required with default",(0,n.jsx)("br",{}),"Default: 20",(0,n.jsx)("br",{}),"Supports values between 8 and 1000"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["ExistingPersistent",(0,n.jsx)("br",{}),"VolumeId"]}),(0,n.jsx)(t.td,{children:"The ID of the existing persistent volume that you can attach to the instance."}),(0,n.jsxs)(t.td,{children:["Required if UsePersistentVolume is set to Existing",(0,n.jsx)("br",{}),"Default: NA",(0,n.jsx)("br",{}),"The persistent volume must be in the same availability zone as the AI Unlimited instance."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["PersistentVolume",(0,n.jsx)("br",{}),"DeletionPolicy"]}),(0,n.jsx)(t.td,{children:"The persistent volume behavior when you delete the CloudFormation deployment."}),(0,n.jsxs)(t.td,{children:["Required with default",(0,n.jsx)("br",{}),"Default:  Retain",(0,n.jsx)("br",{}),"Supported options are: Delete, Retain, RetainExceptOnCreate, and Snapshot."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"LatestAmiId"}),(0,n.jsx)(t.td,{children:"The ID of the image that points to the latest version of AMI. This value is used for the SSM lookup."}),(0,n.jsxs)(t.td,{children:["Required with default",(0,n.jsx)("br",{}),"Default: NA",(0,n.jsx)("br",{}),"This deployment uses the latest ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2 image available.",(0,n.jsx)("br",{}),"IMPORTANT: Changing this value may break the stack."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"JupyterHttpPort"}),(0,n.jsx)(t.td,{children:"The port to access the JupyterLab service UI."}),(0,n.jsxs)(t.td,{children:["Required with default",(0,n.jsx)("br",{}),"Default: 8888"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"JupyterVersion"}),(0,n.jsx)(t.td,{children:"The version of JupyterLab you want to deploy."}),(0,n.jsxs)(t.td,{children:["Required with default",(0,n.jsx)("br",{}),"Default: latest",(0,n.jsx)("br",{}),"The value is a container version tag, for example, latest."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"JupyterToken"}),(0,n.jsx)(t.td,{children:"The token or password used to access JupyterLab from the UI."}),(0,n.jsxs)(t.td,{children:["Required",(0,n.jsx)("br",{}),"Default: NA",(0,n.jsx)("br",{}),"The token must begin with a letter and contain only alphanumeric characters. The allowed pattern is ^[a-zA-Z][a-zA-Z0-9-]*."]})]})]})]})]}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"Learn more: Why use a persistent volume?"}),(0,n.jsx)(t.p,{children:"The JupyterLab instance runs in a container and saves its configuration data in a database in the root volume of the instance. This data persists if you shut down, restart, or snapshot and relaunch the instance."}),(0,n.jsx)(t.p,{children:"But a persistent volume stores data for a containerized application beyond the lifetime of the container, pod, or node in which it runs."}),(0,n.jsx)(t.h4,{id:"without-a-persistent-volume",children:"Without a persistent volume"}),(0,n.jsx)(t.p,{children:"If the container, pod, or node crashes or terminiates, you lose the JupyterLab configuration data. You can deploy a new JupyterLab instance, but not to the same state as the one that was lost."}),(0,n.jsx)(t.h4,{id:"with-a-persistent-volume",children:"With a persistent volume"}),(0,n.jsx)(t.p,{children:"If the container, pod, or node crashes or terminates, and the JupyterLab configuration data is stored in a persistent volume, you can deploy a new JupyterLab instance that has the same configuration as the one that was lost."}),(0,n.jsx)(t.h4,{id:"example",children:"Example"}),(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Deploy JupyterLab, and include these parameters:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"UsePersistentVolume"}),": ",(0,n.jsx)(t.strong,{children:"New"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"PersistentVolumeDeletionPolicy"}),": ",(0,n.jsx)(t.strong,{children:"Retain"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["After you create the stack, on the ",(0,n.jsx)(t.strong,{children:"Outputs"})," tab, note the ",(0,n.jsx)(t.code,{children:"volume-id"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Use JupyterLab."}),"\n",(0,n.jsxs)(t.li,{children:["If the JupyterLab instance is lost, deploy JupyterLab again, and include these parameters:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"UsePersistentVolume"}),": ",(0,n.jsx)(t.strong,{children:"New"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"PersistentVolumeDeletionPolicy"}),": ",(0,n.jsx)(t.strong,{children:"Retain"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"ExistingPersistentVolumeId"}),": the value you noted in step 2"]}),"\n"]}),"\n"]}),"\n"]}),(0,n.jsx)(t.p,{children:"The new JupyterLab instance has the same configuration as the one that was lost."})]}),"\n",(0,n.jsxs)(t.ol,{start:"4",children:["\n",(0,n.jsxs)(t.li,{children:["Select ",(0,n.jsx)(t.strong,{children:"Next"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-console-add-tags.html",children:"Configure stack options"})," per your requirements, then select ",(0,n.jsx)(t.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"review-and-create-the-stack",children:"Review and create the stack"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"Can a tester please provide a screen recording so we can verify these steps?"})})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Review the template settings."}),"\n",(0,n.jsx)(t.li,{children:"Select the check box to acknowledge that the template will create IAM resources."}),"\n",(0,n.jsxs)(t.li,{children:["Select ",(0,n.jsx)(t.strong,{children:"Submit"})," to deploy the stack.",(0,n.jsx)("br",{}),"\nOn the ",(0,n.jsx)(t.strong,{children:"Events"})," tab, you can monitor progress. When the ",(0,n.jsx)(t.strong,{children:"Status"})," is ",(0,n.jsx)(t.code,{children:"CREATE_COMPLETE"}),", the JupyterLab is ready."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Outputs"})," tab shows the URL for accessing JupyterLab."]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var n=s(6540);const r={},i=n.createContext(r);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);
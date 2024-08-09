"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[7535],{63176:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>h});var s=r(74848),t=r(28453),i=r(56240),o=r(19365);const c={id:"magic-commands",title:"Magic commands",description:"Learn about the AI Unlimited magic commands you can use in a Jupyter notebook to manage projects.",sidebar_label:"Magic commands",sidebar_position:5,pagination_prev:null,pagination_next:null},l="Magic commands",a={id:"explore-and-analyze-data/magic-commands",title:"Magic commands",description:"Learn about the AI Unlimited magic commands you can use in a Jupyter notebook to manage projects.",source:"@site/docs/explore-and-analyze-data/magic-commands.md",sourceDirName:"explore-and-analyze-data",slug:"/explore-and-analyze-data/magic-commands",permalink:"/pr-preview/pr-113/ai-unlimited/explore-and-analyze-data/magic-commands",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"magic-commands",title:"Magic commands",description:"Learn about the AI Unlimited magic commands you can use in a Jupyter notebook to manage projects.",sidebar_label:"Magic commands",sidebar_position:5,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},d={},h=[{value:"%workspaces_config",id:"workspaces_config",level:2},{value:"%project_create",id:"project_create",level:2},{value:"%project_delete",id:"project_delete",level:2},{value:"%project_list",id:"project_list",level:2},{value:"%project_auth_create",id:"project_auth_create",level:2},{value:"%project_auth_update",id:"project_auth_update",level:2},{value:"%project_auth_delete",id:"project_auth_delete",level:2},{value:"%project_auth_list",id:"project_auth_list",level:2},{value:"%project_engine_deploy",id:"project_engine_deploy",level:2},{value:"%project_engine_suspend",id:"project_engine_suspend",level:2},{value:"%project_engine_list",id:"project_engine_list",level:2},{value:"%project_user_list",id:"project_user_list",level:2},{value:"%project_backup",id:"project_backup",level:2},{value:"%project_restore",id:"project_restore",level:2},{value:"%project_engine_update_users",id:"project_engine_update_users",level:2},{value:"%project_engine_update_auth",id:"project_engine_update_auth",level:2},{value:"%project_connection_add",id:"project_connection_add",level:2},{value:"%help",id:"help",level:2}];function j(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"magic-commands",children:"Magic commands"}),"\n",(0,s.jsx)(n.p,{children:"In Jupyter notebooks, magic commands are shortcuts for common tasks. The AI Unlimited magic commands enable you to connect to the engine and manage projects."}),"\n",(0,s.jsx)(n.p,{children:"The AI Unlimited Jupyter Kernel supports the magic commands described here\u2014in addition to the standard Teradata SQL kernel magic commands."}),"\n",(0,s.jsx)(n.h2,{id:"workspaces_config",children:"%workspaces_config"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Establish communication between your notebook and the AI Unlimited manager."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Usage"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"%workspaces_config host=<ip_or_hostname>, apikey=<API_Key>, withtls=<T|F>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Where:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"host:  Name or IP address of the AI Unlimited manager."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["apikey: API key value from the AI Unlimited setup ",(0,s.jsx)(n.strong,{children:"Profile"})," page."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"[Optional]"})})," withTLS: If False (F), the default client-server communication does not use TLS."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Output"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Workspace configured for host=<ip_or_hostname>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"project_create",children:"%project_create"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Create a new project. This command also creates a new repository with the project name in your Git account. The configurations are stored in the ",(0,s.jsx)(n.strong,{children:"engine.yml"})," file."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Usage"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"%project_create project=<Project_Name>, env=<Cloud_Service_Provider>, team=<Project_Team>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Where:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"project: Name of the project to be created."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"env: Cloud environment where the project is hosted. For the current release, AWS and Azure are supported."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"[Optional]"})})," team: Name of the team collaborating on the project."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Output"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Project `Project_Name` created\n"})}),"\n",(0,s.jsx)(n.h2,{id:"project_delete",children:"%project_delete"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Delete the project. This does not remove the project repository. It removes project metadata from the manager."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Usage"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"%project_delete project=<Project_Name>, team=<Project_Team>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Where:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"project: Name of the project to be deleted."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"[Optional]"})})," team: Name of the team collaborating on the project."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Output"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Project `Project_Name` deleted\n"})}),"\n",(0,s.jsx)(n.h2,{id:"project_list",children:"%project_list"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": List the details of one or all projects."]}),"\n",(0,s.jsx)(n.p,{children:"Use the project parameter to get the details of a specific project. All the projects are listed if you run the command without any parameters."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Usage"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"%project_list project=<Project_Name>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Where:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"project: The project name."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Output"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"| NAME          | URL      | \n|---------------|----------|\n| <Project_Name>| <Git_URL>| \n\n"})}),"\n",(0,s.jsx)(n.h2,{id:"project_auth_create",children:"%project_auth_create"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Create an authorization object to store object store credentials."]}),"\n",(0,s.jsxs)(n.p,{children:["You must create the authorization object before deploying the engine. The authorization details are retained and are included while redeploying the project. Optionally, you can create authorizations manually using the ",(0,s.jsx)(n.code,{children:"CREATE AUTHORIZATION"})," SQL command after deploying the engine. In this case, the authorization details are not retained."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Usage"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"%project_auth_create project=<Project_Name>, name=<Authorization_Name>, key=<Authorization_Key>, secret=<Authorization_Secret>, region=<ObjectStore_Region>, token=<Session_Token>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Where:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"project: Name of the project."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"name:\tAuthorization name for the object store."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"key: Authorization key of the object store."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"[Optional]"})})," secret: Authorization secret access ID of the object store."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"[Optional]"})})," region: Region of the object store; local for the local object store."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"[Optional]"})})," token: Session token for the object store access."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"[Optional-AWS Only]"})})," role: IAM users or service account to access AWS resources from an AWS account by assuming a role and its entitlements. The owner of the AWS resource defines the role. For example: arn:aws:iam::00000",":role","/STSAssumeRole."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"[Optional-AWS Only]"})})," ExternalID: External ID used to access object store. This parameter is required when using the ",(0,s.jsx)(n.code,{children:"role"})," parameter."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Output"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Authorization 'name' created\n"})}),"\n",(0,s.jsx)(n.h2,{id:"project_auth_update",children:"%project_auth_update"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Update an object store authorization."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Usage"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"%project_auth_update project=<Project_Name>, name=<Authorization_Name>, key=<Authorization_Key>, secret=<Authorization_Secret>, region=<ObjectStore_Region>, token=<Session_Token>\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"Where:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"project: Name of the project."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"name: Authorization name for the object store."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"key: Authorization key of the object store."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"[Optional]"})})," secret: Authorization secret access ID of the object store."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"[Optional]"})})," region: Region of the object store; local for the local object store."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"[Optional]"})})," token: Session token for the object store access."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"[Optional-AWS Only]"})})," role: IAM users or service account to access AWS or Azure resources from a CSP account by assuming a role and its entitlements. The owner of the AWS or Azure resource defines the role. For example: arn:aws:iam::00000",":role","/STSAssumeRole."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"[Optional-AWS Only]"})})," ExternalID: External ID used to access object store. This parameter is required when using the ",(0,s.jsx)(n.code,{children:"role"})," parameter."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Output"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Authorization 'name' updated\n"})}),"\n",(0,s.jsx)(n.h2,{id:"project_auth_delete",children:"%project_auth_delete"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Remove an object store authorization."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Usage"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"%project_auth_delete project=<Project_Name>, name=<Authorization_Name>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Where:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"project: Name of the project."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"name:\tAuthorization name for the object store."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Output"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Authorization 'name' deleted\n"})}),"\n",(0,s.jsx)(n.h2,{id:"project_auth_list",children:"%project_auth_list"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": List object store authorizations that are created for a project."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Usage"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"%project_auth_list project=<Project_Name>\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"Where:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"project: Name of the project."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Output"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"| AUTH NAME           | ACCESS KEY  | SECRET  | \n|---------------------|-------------|---------|\n| <Authorization_Name>| <ACCESS_KEY>| <SECRET>| \n"})}),"\n",(0,s.jsx)(n.h2,{id:"project_engine_deploy",children:"%project_engine_deploy"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Deploy an engine for the project. The deployment process takes a few minutes to complete. On successful deployment, a password is generated."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Usage"}),":"]}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(o.A,{value:"aws1",label:"AWS",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"%project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore=<true|false>, prefixlist=<Prefix_List>, securitygroups=<Security_Group>, cidrs=<CIDR>, tags=<Tags>, iamrole=<IAM_Role>, roleprefix=<Role_Prefix>, permissionboundary=<Permission_Boundary>\n"})})}),(0,s.jsx)(o.A,{value:"azure",label:"Azure",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"%project_engine_deploy project=<Project_Name>, size=<Size_of_Engine>, node=<Number_of_Nodes>, subnet=<Subnet_id>, region=<Region>, restore=<true|false>, network=<Network>, keyvault=<Key_Vault>, keyvaultresourcegroup=<Key_Vault_Resource_Group>, networkresourcegroup=<Network_Resource_Group>\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"Where:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"project: Name of the project."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"size: Size of the engine. The value can be:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"small"}),"\n",(0,s.jsx)(n.li,{children:"medium"}),"\n",(0,s.jsx)(n.li,{children:"large"}),"\n",(0,s.jsx)(n.li,{children:"extralarge"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"[Optional]"})})," node: Number of engine nodes to be deployed. The default value is 1."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"[Optional]"})})," subnet: Subnet used for the engine if there are no default values from the AI Unlimited setup."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"[Optional]"})})," region: Region used for the engine if there are no default values from the AI Unlimited setup."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"[Optional]"})})," restore: If False (F), the engine is deployed but the project's objects are not restored, which reduces deployment time. You can manually restore them using %project_restore. The default value is True (T)."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(o.A,{value:"aws1",label:"AWS",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"[Optional]"})})," prefixlist: The collection of CIDR blocks that define a set of IP address ranges that require the same policy enforcement. It is used to specify which IP addresses can communicate with the engine."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"[Optional]"})})," securitygroups: List of security groups for the VPC in each region. If you don't specify a security group, the engine is automatically associated with the default security group for the VPC."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"[Optional]"})})," cidrs: List of CIDR addresses used for the engine."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"[Optional]"})})," tags: The key-value pairs that are assigned to the engine for quick identification."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"[Optional]"})})," iamrole: The IAM role used for the engine."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"[Optional]"})})," roleprefix: The string appended to the beginning of the IAM role assigned to the engine."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"[Optional]"})})," permissionboundary: The ARN of the IAM permissions boundary to associate with the IAM role assigned to the engine. The permissions boundary defines the maximum permissions that the role can have."]}),"\n"]}),"\n"]})}),(0,s.jsx)(o.A,{value:"azure",label:"Azure",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"[Optional]"})})," network: The network to which you want to deploy the engine."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"[Optional]"})})," keyvault: The key vault used by the engine where sensitive information such as passwords can be securely stored."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"[Optional]"})})," keyvaultresourcegroup: The resource group that contains the key vault."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"[Optional]"})})," networkresourcegroup: The resource group that contains the network."]}),"\n"]}),"\n"]})})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Output"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Started deploying.\nSuccess: Compute Engine setup, look at the connection manager\n"})}),"\n",(0,s.jsx)(n.h2,{id:"project_engine_suspend",children:"%project_engine_suspend"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Stop the engine after you're done with your work."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Usage"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"%project_engine_suspend <Project_Name>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Where:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"project: Name of the project."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Output"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Started suspend\nSuccess: Suspended Compute Engine\n"})}),"\n",(0,s.jsx)(n.h2,{id:"project_engine_list",children:"%project_engine_list"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": View the list of engines deployed for your project."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Usage"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"%project_engine_list project=<Project_Name>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Where:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"project: Name of the project."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Output"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"| IP   | STATE   | REGION  | SIZE             | NODE             |\n|------|---------|---------|------------------|------------------|\n| <IP> | Deployed| <Region>| <Size_of_Engine> | <Number_of_Nodes>|\n"})}),"\n",(0,s.jsx)(n.h2,{id:"project_user_list",children:"%project_user_list"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": View the list of collaborators assigned to the project in the Git repository."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Usage"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"%project_user_list project=<Project_Name>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Where:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"[Optional]"})})," project: Name of the project."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Output"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"| PROJECT ID   | USER  | PASSWORD  |\n|--------------|-------|-----------|\n| <Project_ID> | <User>| <Password>| \n"})}),"\n",(0,s.jsx)(n.h2,{id:"project_backup",children:"%project_backup"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Back up your project information and object definition inside the engine."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Usage"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"%project_backup project=<Project_Name>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Where:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"project:\tName of the project."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Output"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Backup of the object definitions created\n"})}),"\n",(0,s.jsx)(n.h2,{id:"project_restore",children:"%project_restore"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Restore your project information and object definition from your Git repository."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Usage"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"%project_restore project=<Project_Name>, gitref=<Git_Reference>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Where:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"project:\tName of the project."}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"[Optional]"})})," gitref: The Git reference for the commit from which to restore the project, if you don't want to restore from the latest."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Output"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Restore of the object definitions done\n"})}),"\n",(0,s.jsx)(n.h2,{id:"project_engine_update_users",children:"%project_engine_update_users"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Update users on the deployed engine. If users are added as collaborators to the Git repository after the engine is deployed, you can use this command to update and create new users for the deployed engine."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Usage"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"%project_engine_update_users project=<Project_Name>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Where:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"project:\tName of the project."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Output"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Username and password of each user on the engine\n"})}),"\n",(0,s.jsx)(n.h2,{id:"project_engine_update_auth",children:"%project_engine_update_auth"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Update or add new authorizations on the deployed engine without having to suspend and redeploy the engine."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Usage"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"%project_engine_update_auth project=<Project_Name>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Where:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"project:\tName of the project."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Output"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Authorizations updated\n"})}),"\n",(0,s.jsx)(n.h2,{id:"project_connection_add",children:"%project_connection_add"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": Refresh the connection for the deployed engine. Use this command to connect to the engine from another notebook without having to create a new connection manually."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Usage"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"%project_connection_add project=<Project_Name>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Where:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"project:\tName of the project."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Output"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"The connection manager shows the refreshed connection\n"})}),"\n",(0,s.jsx)(n.h2,{id:"help",children:"%help"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Description"}),": View the list of magic commands provided by the AI Unlimited kernel."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Usage"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"%help\n"})}),"\n",(0,s.jsx)(n.p,{children:"Additionally, you can see detailed help messages per command."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Usage"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"%help `command`\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>o});r(96540);var s=r(34164);const t={tabItem:"tabItem_Ymn6"};var i=r(74848);function o(e){var n=e.children,r=e.hidden,o=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,o),hidden:r,children:n})}},56240:(e,n,r)=>{r.d(n,{A:()=>v});var s=r(96540),t=r(34164),i=r(23104),o=r(56347),c=r(205),l=r(57485);var a=r(89466);function d(e){var n,r;return null!=(n=null==(r=s.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,s.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function h(e){var n=e.values,r=e.children;return(0,s.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n,r,s=(void 0===(r=function(e,n){return e.value===n.value})&&(r=function(e,n){return e===n}),(n=e).filter((function(e,s){return n.findIndex((function(n){return r(n,e)}))!==s})));if(s.length>0)throw new Error('Docusaurus error: Duplicate values "'+s.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function j(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function u(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId,i=(0,o.W6)(),c=function(e){var n=e.queryString,r=void 0!==n&&n,s=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=s?s:null}({queryString:r,groupId:t});return[(0,l.aZ)(c),(0,s.useCallback)((function(e){if(c){var n=new URLSearchParams(i.location.search);n.set(c,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[c,i])]}function p(e){var n,r,t,i,o=e.defaultValue,l=e.queryString,d=void 0!==l&&l,p=e.groupId,x=h(e),g=(0,s.useState)((function(){return function(e){var n,r=e.defaultValue,s=e.tabValues;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!j({value:r,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+s.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var t=null!=(n=s.find((function(e){return e.default})))?n:s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:o,tabValues:x})})),m=g[0],_=g[1],f=u({queryString:d,groupId:p}),b=f[0],v=f[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),r=(0,a.Dv)(n),t=r[0],i=r[1],[t,(0,s.useCallback)((function(e){n&&i.set(e)}),[n,i])]),A=y[0],N=y[1],w=function(){var e=null!=b?b:A;return j({value:e,tabValues:x})?e:null}();return(0,c.A)((function(){w&&_(w)}),[w]),{selectedValue:m,selectValue:(0,s.useCallback)((function(e){if(!j({value:e,tabValues:x}))throw new Error("Can't select invalid tab value="+e);_(e),v(e),N(e)}),[v,N,x]),tabValues:x}}var x=r(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=r(74848);function _(e){var n=e.className,r=e.block,s=e.selectedValue,o=e.selectValue,c=e.tabValues,l=[],a=(0,i.a_)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,r=l.indexOf(n),t=c[r].value;t!==s&&(a(n),o(t))},h=function(e){var n,r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var s,t=l.indexOf(e.currentTarget)+1;r=null!=(s=l[t])?s:l[0];break;case"ArrowLeft":var i,o=l.indexOf(e.currentTarget)-1;r=null!=(i=l[o])?i:l[l.length-1]}null==(n=r)||n.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:c.map((function(e){var n=e.value,r=e.label,i=e.attributes;return(0,m.jsx)("li",Object.assign({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:function(e){return l.push(e)},onKeyDown:h,onClick:d},i,{className:(0,t.A)("tabs__item",g.tabItem,null==i?void 0:i.className,{"tabs__item--active":s===n}),children:null!=r?r:n}),n)}))})}function f(e){var n=e.lazy,r=e.children,t=e.selectedValue,i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var o=i.find((function(e){return e.props.value===t}));return o?(0,s.cloneElement)(o,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})}))})}function b(e){var n=p(e);return(0,m.jsxs)("div",{className:(0,t.A)("tabs-container",g.tabList),children:[(0,m.jsx)(_,Object.assign({},e,n)),(0,m.jsx)(f,Object.assign({},e,n))]})}function v(e){var n=(0,x.A)();return(0,m.jsx)(b,Object.assign({},e,{children:d(e.children)}),String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>c});var s=r(96540);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);
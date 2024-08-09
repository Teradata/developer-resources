"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[3498],{41269:(e,n,a)=>{a.d(n,{Ay:()=>l,RM:()=>r});var t=a(74848),s=a(28453);const r=[];function o(e){const n={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["If you have any questions or need further assistance, please visit our ",(0,t.jsx)(n.a,{href:"https://support.teradata.com/community",children:"community forum"})," where you can get support and interact with other community members."]})})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},76532:(e,n,a)=>{a.d(n,{Ay:()=>l,RM:()=>r});var t=a(74848),s=a(28453);const r=[];function o(e){const n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE DATABASE HR\nAS PERMANENT = 60e6, -- 60MB\n    SPOOL = 120e6; -- 120MB\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Let\u2019s create a sample table and insert some data and query it. We will first create a table to hold employee information:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE SET TABLE HR.Employees (\n   GlobalID INTEGER,\n   FirstName VARCHAR(30),\n   LastName VARCHAR(30),\n   DateOfBirth DATE FORMAT 'YYYY-MM-DD',\n   JoinedDate DATE FORMAT 'YYYY-MM-DD',\n   DepartmentCode BYTEINT\n)\nUNIQUE PRIMARY INDEX ( GlobalID );\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Now, let's insert a record:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"INSERT INTO HR.Employees (\n   GlobalID,\n   FirstName,\n   LastName,\n   DateOfBirth,\n   JoinedDate,\n   DepartmentCode\n)\nVALUES (\n   101,\n   'Adam',\n   'Tworkowski',\n   '1980-01-05',\n   '2004-08-01',\n   01\n);\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Finally, let's see if we can retrieve the data:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM HR.Employees;\n"})}),"\n",(0,t.jsx)(n.p,{children:"You should get the following results:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"GlobalID  FirstName  LastName   DateOfBirth  JoinedDate  DepartmentCode\n--------  ---------  ---------- -----------  ----------  --------------\n     101  Adam       Tworkowski  1980-01-05  2004-08-01               1\n"})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},9512:(e,n,a)=>{a.d(n,{Ay:()=>i,RM:()=>o});var t=a(74848),s=a(28453),r=a(76532);const o=[{value:"Run sample queries",id:"run-sample-queries",level:2},...r.RM,{value:"Optional setup",id:"optional-setup",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Install VirtualBox and 7zip:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"apt update && apt-get install p7zip-full p7zip-rar virtualbox -y\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Retrieve the curl command to download Vantage Express."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to ",(0,t.jsx)(n.a,{href:"https://downloads.teradata.com/download/database/teradata-express-for-vmware-player",children:"Vantage Expess download page"})," (registration required)."]}),"\n",(0,t.jsxs)(n.li,{children:["Click on the latest download link, e.g. ",(0,t.jsx)(n.strong,{children:'"Vantage Express 17.20"'}),". You will see a license agreement popup. Don't accept the license yet."]}),"\n",(0,t.jsxs)(n.li,{children:["Open the network view in your browser. For example, in Chrome press ",(0,t.jsx)("kbd",{children:"F12"})," and navigate to ",(0,t.jsx)(n.code,{children:"Network"})," tab:"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Browser Network Tab",src:a(27908).A+"",width:"1172",height:"764"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Accept the license by clicking on ",(0,t.jsx)(n.code,{children:"I Agree"})," button and cancel the download."]}),"\n",(0,t.jsxs)(n.li,{children:["In the network view, find the last request that starts with ",(0,t.jsx)(n.code,{children:"VantageExpress"}),". Right click on it and select ",(0,t.jsx)(n.code,{children:"Copy -> Copy as cURL"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Browser Copy culr",src:a(69835).A+"",width:"1024",height:"928"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Head back to the ssh session and download Vantage Express by pasting the curl command. Add ",(0,t.jsx)(n.code,{children:"-o ve.7z"})," to the command to save the download to file named ",(0,t.jsx)(n.code,{children:"ve.7z"}),". You can remove all the HTTP headers, e.g.:"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -o ve.7z 'http://d289lrf5tw1zls.cloudfront.net/database/teradata-express/VantageExpress17.20_Sles12_202108300444.7z?Expires=1638719978&Signature=GKBkNvery_long_signature__&Key-Pair-Id=********************'\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Unzip the downloaded file. It will take several minutes:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"7z x ve.7z\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Start the VM in VirtualBox. The command will return immediately but the VM init process will take several minutes:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'export VM_IMAGE_DIR="/opt/downloads/VantageExpress17.20_Sles12"\nDEFAULT_VM_NAME="vantage-express"\nVM_NAME="${VM_NAME:-$DEFAULT_VM_NAME}"\nvboxmanage createvm --name "$VM_NAME" --register --ostype openSUSE_64\nvboxmanage modifyvm "$VM_NAME" --ioapic on --memory 6000 --vram 128 --nic1 nat --cpus 4\nvboxmanage storagectl "$VM_NAME" --name "SATA Controller" --add sata --controller IntelAhci\nvboxmanage storageattach "$VM_NAME" --storagectl "SATA Controller" --port 0 --device 0 --type hdd --medium  "$(find $VM_IMAGE_DIR -name \'*disk1*\')"\nvboxmanage storageattach "$VM_NAME" --storagectl "SATA Controller" --port 1 --device 0 --type hdd --medium  "$(find $VM_IMAGE_DIR -name \'*disk2*\')"\nvboxmanage storageattach "$VM_NAME" --storagectl "SATA Controller" --port 2 --device 0 --type hdd --medium  "$(find $VM_IMAGE_DIR -name \'*disk3*\')"\nvboxmanage modifyvm "$VM_NAME" --natpf1 "tdssh,tcp,,4422,,22"\nvboxmanage modifyvm "$VM_NAME" --natpf1 "tddb,tcp,,1025,,1025"\nvboxmanage startvm "$VM_NAME" --type headless\nvboxmanage controlvm "$VM_NAME" keyboardputscancode 1c 1c\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["ssh to Vantage Express VM. Use ",(0,t.jsx)(n.code,{children:"root"})," as password:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ssh -p 4422 root@localhost\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Validate that the DB is up:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pdestate -a\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If the command returns ",(0,t.jsx)(n.code,{children:"PDE state is RUN/STARTED. DBS state is 5: Logons are enabled - The system is quiescent"}),", it means that Vantage Express has started.\nIf the status is different, repeat ",(0,t.jsx)(n.code,{children:"pdestate -a"})," till you get the correct status."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Once Vantage Express is up and running, start ",(0,t.jsx)(n.code,{children:"bteq"})," client command line client. BTEQ (pronounced \u201cbee-teek\u201d) is a general-purpose, command-based client tool used to submit SQL queries to a Teradata Database."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"bteq\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Once in bteq, connect to your Vantage Express instance. When asked for the password, enter ",(0,t.jsx)(n.code,{children:"dbc"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:".logon localhost/dbc\n"})}),"\n",(0,t.jsx)(n.h2,{id:"run-sample-queries",children:"Run sample queries"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Using ",(0,t.jsx)(n.code,{children:"dbc"})," user, we will create a new database called ",(0,t.jsx)(n.code,{children:"HR"}),". Copy/paste this query and run press ",(0,t.jsx)("kbd",{children:"Enter"}),":"]}),"\n"]}),"\n",(0,t.jsx)(r.Ay,{}),"\n",(0,t.jsx)(n.h2,{id:"optional-setup",children:"Optional setup"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If you intend to stop and start the VM, you may want to add Vantage Express to autostart. ssh to your VM and run the following commands:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo -i\n\ncat <<EOF >> /etc/default/virtualbox\nVBOXAUTOSTART_DB=/etc/vbox\nVBOXAUTOSTART_CONFIG=/etc/vbox/autostart.cfg\nEOF\n\ncat <<EOF > /etc/systemd/system/vantage-express.service\n[Unit]\nDescription=vm1\nAfter=network.target virtualbox.service\nBefore=runlevel2.target shutdown.target\n[Service]\nUser=root\nGroup=root\nType=forking\nRestart=no\nTimeoutSec=5min\nIgnoreSIGPIPE=no\nKillMode=process\nGuessMainPID=no\nRemainAfterExit=yes\nExecStart=/usr/bin/VBoxManage startvm vantage-express --type headless\nExecStop=/usr/bin/VBoxManage controlvm vantage-express savestate\n[Install]\nWantedBy=multi-user.target\nEOF\n\nsystemctl daemon-reload\nsystemctl enable vantage-express\nsystemctl start vantage-express\n"})})]})}function i(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},43457:(e,n,a)=>{a.d(n,{Ay:()=>l,RM:()=>r});var t=a(74848),s=a(28453);const r=[];function o(e){const n={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["You can now get a hosted instance of Vantage for free at ",(0,t.jsx)(n.a,{href:"https://clearscape.teradata.com/",children:"https://clearscape.teradata.com"}),"."]})})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},79665:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>x,contentTitle:()=>p,default:()=>v,frontMatter:()=>h,metadata:()=>g,toc:()=>m});var t=a(74848),s=a(28453),r=a(43457),o=a(41269),l=a(9512),i=a(56240),c=a(19365);function d(e){const n={code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(i.A,{children:[(0,t.jsxs)(c.A,{value:"Windows",label:"Windows",default:!0,children:[(0,t.jsx)(n.p,{children:"Run in Powershell:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gcloud compute instances create teradata-vantage-express `\n  --zone=us-central1-a `\n  --machine-type=n2-custom-4-8192 `\n  --create-disk=boot=yes,device-name=ve-disk,image-project=ubuntu-os-cloud,image-family=ubuntu-2004-lts,size=70,type=pd-balanced `\n  --enable-nested-virtualization `\n  --tags=ve\n"})})]}),(0,t.jsx)(c.A,{value:"MacOS",label:"MacOS",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gcloud compute instances create teradata-vantage-express \\\n  --zone=us-central1-a \\\n  --machine-type=n2-custom-4-8192 \\\n  --create-disk=boot=yes,device-name=ve-disk,image-project=ubuntu-os-cloud,image-family=ubuntu-2004-lts,size=70,type=pd-balanced \\\n  --enable-nested-virtualization \\\n  --tags=ve\n"})})}),(0,t.jsx)(c.A,{value:"Linux",label:"Linux",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gcloud compute instances create teradata-vantage-express \\\n--zone=us-central1-a \\\n--machine-type=n2-custom-4-8192 \\\n--create-disk=boot=yes,device-name=ve-disk,image-project=ubuntu-os-cloud,image-family=ubuntu-2004-lts,size=70,type=pd-balanced \\\n--enable-nested-virtualization \\\n--tags=ve\n"})})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}const h={sidebar_position:2,author:"Adam Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"August 23rd, 2022",description:"Run Vantage Express on Google Cloud.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics"]},p="Run Vantage Express on Google Cloud",g={id:"get-access-to-vantage/on-your-cloud-infrastructure/vantage-express-gcp",title:"Run Vantage Express on Google Cloud",description:"Run Vantage Express on Google Cloud.",source:"@site/quickstarts/get-access-to-vantage/on-your-cloud-infrastructure/vantage-express-gcp.md",sourceDirName:"get-access-to-vantage/on-your-cloud-infrastructure",slug:"/get-access-to-vantage/on-your-cloud-infrastructure/vantage-express-gcp",permalink:"/pr-preview/pr-112/ja/quickstarts/get-access-to-vantage/on-your-cloud-infrastructure/vantage-express-gcp",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,author:"Adam Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"August 23rd, 2022",description:"Run Vantage Express on Google Cloud.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics"]},sidebar:"tutorialSidebar",previous:{title:"Run Vantage Express on AWS",permalink:"/pr-preview/pr-112/ja/quickstarts/get-access-to-vantage/on-your-cloud-infrastructure/run-vantage-express-on-aws"},next:{title:"Run Vantage Express on Azure",permalink:"/pr-preview/pr-112/ja/quickstarts/get-access-to-vantage/on-your-cloud-infrastructure/run-vantage-express-on-microsoft-azure"}},x={},m=[...r.RM,{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},...l.RM,{value:"Cleanup",id:"cleanup",level:2},{value:"Next steps",id:"next-steps",level:2},{value:"Further reading",id:"further-reading",level:2},...o.RM];function j(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"run-vantage-express-on-google-cloud",children:"Run Vantage Express on Google Cloud"}),"\n",(0,t.jsx)(r.Ay,{}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"This how-to demonstrates how to run Vantage Express in Google Cloud Platform. Vantage Express contains a fully functional Teradata SQL Engine."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["If do not wish to pay for cloud usage you can install Vantage Express locally using ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-112/ja/quickstarts/get-access-to-vantage/on-your-local/getting-started-vmware",children:"VMware"}),", ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-112/ja/quickstarts/get-access-to-vantage/on-your-local/getting-started-vbox",children:"VirtualBox"}),", ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-112/ja/quickstarts/get-access-to-vantage/on-your-local/run-vantage-express-on-utm",children:"UTM"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A Google Cloud account."}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"gcloud"})," command line utility installed on your machine. You can find installation instructions here: ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/sdk/docs/install",children:"https://cloud.google.com/sdk/docs/install"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Create a Ubuntu VM with 4 CPU's and 8GB of RAM, a 70GB balanced disk. The following command creates a VM in ",(0,t.jsx)(n.code,{children:"us-central1"})," region. For best performance, replace the  region with one that is the closest to you. For the list of supported regions see ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/compute/docs/regions-zones",children:"Google Cloud regions documentation"}),"."]}),"\n"]}),"\n",(0,t.jsx)(u,{}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"ssh to your VM:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gcloud compute ssh teradata-vantage-express --zone=us-central1-a\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Switch to ",(0,t.jsx)(n.code,{children:"root"})," user:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo -i\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Prepare the download directory for Vantage Express:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mkdir /opt/downloads\ncd /opt/downloads\n"})}),"\n",(0,t.jsx)(l.Ay,{}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If you would like to connect to Vantage Express from the Internet, you will need to open up firewall holes to your VM. You should also change the default password to ",(0,t.jsx)(n.code,{children:"dbc"})," user:"]}),"\n",(0,t.jsxs)(n.li,{children:["To change the password for ",(0,t.jsx)(n.code,{children:"dbc"})," user go to your VM and start bteq:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"bteq\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Login to your database using ",(0,t.jsx)(n.code,{children:"dbc"})," as username and password:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:".logon localhost/dbc\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Change the password for ",(0,t.jsx)(n.code,{children:"dbc"})," user:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"MODIFY USER dbc AS PASSWORD = new_password;\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"You can now open up port 1025 to the internet using gcloud command:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gcloud compute firewall-rules create vantage-express --allow=tcp:1025 --direction=IN --target-tags=ve\n"})}),"\n",(0,t.jsx)(n.h2,{id:"cleanup",children:"Cleanup"}),"\n",(0,t.jsx)(n.p,{children:"To stop incurring charges, delete the VM:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gcloud compute instances delete teradata-vantage-express --zone=us-central1-a\n"})}),"\n",(0,t.jsx)(n.p,{children:"Also, remember to remove any firewall rules that you have added, e.g.:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gcloud compute firewall-rules delete vantage-express\n"})}),"\n",(0,t.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/pr-preview/pr-112/ja/quickstarts/manage-data/nos",children:"Query data stored in object storage"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.teradata.com/r/Teradata-StudioTM-and-StudioTM-Express-Installation-Guide-17.20",children:"Teradata\xae Studio\u2122 and Studio\u2122 Express Installation Guide"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.teradata.com/r/jmAxXLdiDu6NiyjT6hhk7g/root",children:"Introduction to BTEQ"})}),"\n"]}),"\n",(0,t.jsx)(o.Ay,{})]})}function v(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>o});a(96540);var t=a(34164);const s={tabItem:"tabItem_Ymn6"};var r=a(74848);function o(e){var n=e.children,a=e.hidden,o=e.className;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,o),hidden:a,children:n})}},56240:(e,n,a)=>{a.d(n,{A:()=>y});var t=a(96540),s=a(34164),r=a(23104),o=a(56347),l=a(205),i=a(57485);var c=a(89466);function d(e){var n,a;return null!=(n=null==(a=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?n:[]}function u(e){var n=e.values,a=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(a);return function(e){var n,a,t=(void 0===(a=function(e,n){return e.value===n.value})&&(a=function(e,n){return e===n}),(n=e).filter((function(e,t){return n.findIndex((function(n){return a(n,e)}))!==t})));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,a])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,a=void 0!==n&&n,s=e.groupId,r=(0,o.W6)(),l=function(e){var n=e.queryString,a=void 0!==n&&n,t=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:a,groupId:s});return[(0,i.aZ)(l),(0,t.useCallback)((function(e){if(l){var n=new URLSearchParams(r.location.search);n.set(l,e),r.replace(Object.assign({},r.location,{search:n.toString()}))}}),[l,r])]}function g(e){var n,a,s,r,o=e.defaultValue,i=e.queryString,d=void 0!==i&&i,g=e.groupId,x=u(e),m=(0,t.useState)((function(){return function(e){var n,a=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var s=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:o,tabValues:x})})),j=m[0],v=m[1],f=p({queryString:d,groupId:g}),b=f[0],y=f[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:g}.groupId),a=(0,c.Dv)(n),s=a[0],r=a[1],[s,(0,t.useCallback)((function(e){n&&r.set(e)}),[n,r])]),A=w[0],E=w[1],V=function(){var e=null!=b?b:A;return h({value:e,tabValues:x})?e:null}();return(0,l.A)((function(){V&&v(V)}),[V]),{selectedValue:j,selectValue:(0,t.useCallback)((function(e){if(!h({value:e,tabValues:x}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),E(e)}),[y,E,x]),tabValues:x}}var x=a(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=a(74848);function v(e){var n=e.className,a=e.block,t=e.selectedValue,o=e.selectValue,l=e.tabValues,i=[],c=(0,r.a_)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,a=i.indexOf(n),s=l[a].value;s!==t&&(c(n),o(s))},u=function(e){var n,a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var t,s=i.indexOf(e.currentTarget)+1;a=null!=(t=i[s])?t:i[0];break;case"ArrowLeft":var r,o=i.indexOf(e.currentTarget)-1;a=null!=(r=i[o])?r:i[i.length-1]}null==(n=a)||n.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":a},n),children:l.map((function(e){var n=e.value,a=e.label,r=e.attributes;return(0,j.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return i.push(e)},onKeyDown:u,onClick:d},r,{className:(0,s.A)("tabs__item",m.tabItem,null==r?void 0:r.className,{"tabs__item--active":t===n}),children:null!=a?a:n}),n)}))})}function f(e){var n=e.lazy,a=e.children,s=e.selectedValue,r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){var o=r.find((function(e){return e.props.value===s}));return o?(0,t.cloneElement)(o,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})}))})}function b(e){var n=g(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,j.jsx)(v,Object.assign({},e,n)),(0,j.jsx)(f,Object.assign({},e,n))]})}function y(e){var n=(0,x.A)();return(0,j.jsx)(b,Object.assign({},e,{children:d(e.children)}),String(n))}},69835:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/browser.copy.curl-ef8d15fbb3caf4c7c5981d9e8888f5aa.png"},27908:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/browser.network-10b20cd42fc007de4c04d0c25874a866.png"},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>l});var t=a(96540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);
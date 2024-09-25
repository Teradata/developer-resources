"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[7941],{94272:(e,s,r)=>{r.d(s,{Ay:()=>l,RM:()=>t});var n=r(74848),i=r(28453);const t=[];function d(e){const s={a:"a",code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["Teradata\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 ",(0,n.jsx)(s.a,{href:"https://github.com/Teradata/ai-unlimited",children:"AI Unlimited GitHub \uc800\uc7a5\uc18c"}),"\uc758 ",(0,n.jsx)(s.code,{children:"\ubc30\uce58"})," \ud3f4\ub354\uc5d0\ub294 AI Unlimited\ub97c \uc124\uce58\ud558\uae30 \uc704\ud55c \ud15c\ud50c\ub9bf, \ub9e4\uac1c\ubcc0\uc218 \ubc0f \uc815\ucc45 \ud30c\uc77c\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,n.jsx)(s.p,{children:"\ud130\ubbf8\ub110 \ucc3d\uc744 \uc5f4\uace0 \uc800\uc7a5\uc18c\ub97c \ubcf5\uc81c\ud569\ub2c8\ub2e4."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"git clone https://github.com/Teradata/ai-unlimited\n"})})]})}function l(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28808:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var n=r(74848),i=r(28453),t=r(94272);const d={id:"deploy-jupyter-aws-console",title:"AWS\uc5d0 JupyterLab \uc124\uce58",description:"CloudFormation \ud15c\ud50c\ub9bf\uc744 \uc0ac\uc6a9\ud558\uc5ec JupyterLab\uc744 \ubc30\ud3ec\ud558\ub294 \ubc29\ubc95\uc744 \uc54c\uc544\ubcf4\uc2ed\uc2dc\uc624.",sidebar_label:"AWS\uc5d0 \uc124\uce58",sidebar_position:1,pagination_prev:null,pagination_next:null},l="AWS\uc5d0 JupyterLab \uc124\uce58",c={id:"resources/jupyterlab/deploy-jupyter-aws-console",title:"AWS\uc5d0 JupyterLab \uc124\uce58",description:"CloudFormation \ud15c\ud50c\ub9bf\uc744 \uc0ac\uc6a9\ud558\uc5ec JupyterLab\uc744 \ubc30\ud3ec\ud558\ub294 \ubc29\ubc95\uc744 \uc54c\uc544\ubcf4\uc2ed\uc2dc\uc624.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/resources/jupyterlab/install-jupyterlab-aws.md",sourceDirName:"resources/jupyterlab",slug:"/resources/jupyterlab/deploy-jupyter-aws-console",permalink:"/pr-preview/pr-140/ko/ai-unlimited/resources/jupyterlab/deploy-jupyter-aws-console",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"deploy-jupyter-aws-console",title:"AWS\uc5d0 JupyterLab \uc124\uce58",description:"CloudFormation \ud15c\ud50c\ub9bf\uc744 \uc0ac\uc6a9\ud558\uc5ec JupyterLab\uc744 \ubc30\ud3ec\ud558\ub294 \ubc29\ubc95\uc744 \uc54c\uc544\ubcf4\uc2ed\uc2dc\uc624.",sidebar_label:"AWS\uc5d0 \uc124\uce58",sidebar_position:1,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},a={},o=[{value:"AWS \uacc4\uc815\uc744 \uc900\ube44\ud569\ub2c8\ub2e4.",id:"aws-\uacc4\uc815\uc744-\uc900\ube44\ud569\ub2c8\ub2e4",level:2},{value:"\uc800\uc7a5\uc18c \ubcf5\uc81c",id:"\uc800\uc7a5\uc18c-\ubcf5\uc81c",level:2},...t.RM,{value:"Jupyter \ud15c\ud50c\ub9bf \ucc3e\uae30",id:"jupyter-\ud15c\ud50c\ub9bf-\ucc3e\uae30",level:2},{value:"\ud15c\ud50c\ub9bf\uc744 \ub85c\ub4dc\ud569\ub2c8\ub2e4.",id:"\ud15c\ud50c\ub9bf\uc744-\ub85c\ub4dc\ud569\ub2c8\ub2e4",level:2},{value:"\uc2a4\ud0dd \uc138\ubd80 \uc815\ubcf4 \ubc0f \uc635\uc158 \uc9c0\uc815",id:"\uc2a4\ud0dd-\uc138\ubd80-\uc815\ubcf4-\ubc0f-\uc635\uc158-\uc9c0\uc815",level:2},{value:"\uc2a4\ud0dd\uc744 \uac80\ud1a0\ud558\uace0 \uc0dd\uc131\ud569\ub2c8\ub2e4.",id:"\uc2a4\ud0dd\uc744-\uac80\ud1a0\ud558\uace0-\uc0dd\uc131\ud569\ub2c8\ub2e4",level:2}];function j(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Details:r}=s;return r||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"aws\uc5d0-jupyterlab-\uc124\uce58",children:"AWS\uc5d0 JupyterLab \uc124\uce58"}),"\n",(0,n.jsx)(s.p,{children:"Teradata\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 CloudFormation \ud15c\ud50c\ub9bf\uc744 \uc0ac\uc6a9\ud558\uc5ec AWS Management Console\uc5d0\uc11c JupyterLab\uacfc AI Unlimited \ucee4\ub110\uc744 \uc124\uce58\ud569\ub2c8\ub2e4."}),"\n",(0,n.jsxs)(s.p,{children:["\uc774\ub294 ",(0,n.jsx)(s.a,{href:"/pr-preview/pr-140/ko/ai-unlimited/glossary#systemd",children:"systemd"}),"\ub85c \uc81c\uc5b4\ub418\ub294 \ucee8\ud14c\uc774\ub108\uc5d0\uc11c JupyterLab\uc744 \uc2e4\ud589\ud558\uc5ec \uc11c\ubc84 \uc778\uc2a4\ud134\uc2a4\ub97c \ubc30\ud3ec\ud569\ub2c8\ub2e4."]}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsxs)(s.p,{children:["\uc124\uce58 \uc9c0\uc6d0\uc744 \ubc1b\uc73c\ub824\uba74 ",(0,n.jsx)("a",{href:"mailto:aiunlimited.support@Teradata.com",children:"\uc9c0\uc6d0 \ud300"}),"\uc5d0 \uc774\uba54\uc77c\uc744 \ubcf4\ub0b4\uac70\ub098 ",(0,n.jsx)(s.a,{href:"https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa",children:"\ucee4\ubba4\ub2c8\ud2f0"}),"\uc5d0 \ubb38\uc758\ud558\uc2ed\uc2dc\uc624."]})}),"\n",(0,n.jsx)(s.h2,{id:"aws-\uacc4\uc815\uc744-\uc900\ube44\ud569\ub2c8\ub2e4",children:"AWS \uacc4\uc815\uc744 \uc900\ube44\ud569\ub2c8\ub2e4."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["\ud074\ub77c\uc6b0\ub4dc \uad00\ub9ac\uc790\uc640 \ud611\ub825\ud558\uc5ec ",(0,n.jsx)(s.a,{href:"https://github.com/Teradata/ai-unlimited/tree/develop/deployments/aws/templates/jupyter",children:"JupyterLab \ud15c\ud50c\ub9bf"}),"\uc5d0 \uc815\uc758\ub41c \ud074\ub77c\uc6b0\ub4dc \ub9ac\uc18c\uc2a4\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\ub294 ",(0,n.jsx)(s.a,{href:"https://aws.amazon.com/iam/",children:"IAM"})," \uad8c\ud55c\uc774 \uc788\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["\uba85\ub839\uc744 \uc2e4\ud589\ud558\uac70\ub098 \ub514\ubc84\uae45\ud558\uae30 \uc704\ud574 JupyterLab \uc778\uc2a4\ud134\uc2a4\uc5d0 \uc561\uc138\uc2a4\ud574\uc57c \ud558\ub294 \uacbd\uc6b0 ",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html",children:"\ud0a4 \uc30d"}),"\uc744 \uc0ac\uc6a9\ud558\uc5ec SSH(Secure Shell)\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc548\uc804\ud558\uac8c \uc5f0\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,n.jsx)(s.a,{href:"#specify-stack-details-and-options",children:"\uc2a4\ud0dd \uc138\ubd80 \uc815\ubcf4 \uc9c0\uc815"})," \uc2dc \ud0a4 \uc30d\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancer-getting-started.html",children:"ALB(Application Load Balancer)"})," \ub610\ub294 ",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancer-getting-started.html",children:"NLB(Network Load Balancer)"}),"\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 \ub2e4\uc74c AWS \uc11c\ube44\uc2a4\ub97c \uad00\ub9ac\ud560 \uc218 \uc788\ub294 \uad8c\ud55c\uc774 \uc788\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4.\n- ",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/acm/",children:"AWS Certificate Manager"}),"\u2014 Route 53\uc758 \ud638\uc2a4\ud305 \uc601\uc5ed ID\uc5d0 \ub300\ud55c \uc0c8 \uc778\uc99d\uc11c\ub97c \ubc1c\uae09\ud569\ub2c8\ub2e4.\n- ",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html",children:"AWS Route 53"}),"\u2014\uc0ac\uc6a9\uc790 \uc9c0\uc815 \ub3c4\uba54\uc778 \uc774\ub984\uc744 \uad6c\uc131\ud558\uace0 DNS \ucffc\ub9ac\ub97c \ub85c\ub4dc \ubc38\ub7f0\uc11c\ub85c \ub77c\uc6b0\ud305\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"\uc800\uc7a5\uc18c-\ubcf5\uc81c",children:"\uc800\uc7a5\uc18c \ubcf5\uc81c"}),"\n","\n",(0,n.jsx)(t.Ay,{}),"\n",(0,n.jsx)(s.h2,{id:"jupyter-\ud15c\ud50c\ub9bf-\ucc3e\uae30",children:"Jupyter \ud15c\ud50c\ub9bf \ucc3e\uae30"}),"\n",(0,n.jsx)(s.p,{children:"JupyterLab\uc6a9 CloudFormation \ud15c\ud50c\ub9bf\uc740 AI Unlimited GitHub \uc800\uc7a5\uc18c\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"deployments/aws/templates/jupyter"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/pr-preview/pr-140/ko/ai-unlimited/glossary#load-balancer",children:"\ub85c\ub4dc \ubc38\ub7f0\uc11c"}),"\ub97c \uc0ac\uc6a9\ud560\uc9c0 \uc5ec\ubd80\uc640 \uc5b4\ub5a4 \uc720\ud615\uc744 \uc0ac\uc6a9\ud560\uc9c0\uc5d0 \ub530\ub77c \ud15c\ud50c\ub9bf\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4."]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"\uc870\uc9c1\uc758 \ud074\ub77c\uc6b0\ub4dc \uad00\ub9ac\uc790\uc5d0\uac8c \uc9c0\uce68\uc744 \uc694\uccad\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})}),"\n",(0,n.jsxs)(s.p,{children:["- ",(0,n.jsx)(s.code,{children:"jupyter-alb.yaml"}),"\u2014\ub2e4\uc74c \ub4a4\uc758 JupyterLab\uc744 \ud638\uc2a4\ud305\ud569\ub2c8\ub2e4. ",(0,n.jsx)(s.a,{href:"/pr-preview/pr-140/ko/ai-unlimited/glossary#application-load-balancer",children:"Application Load Balancer"}),"\n- ",(0,n.jsx)(s.code,{children:"jupyter-with-nlb.yaml"}),"\u2014\ub2e4\uc74c \ub4a4\uc758 JupyterLab\uc744 \ud638\uc2a4\ud305\ud569\ub2c8\ub2e4. ",(0,n.jsx)(s.a,{href:"/pr-preview/pr-140/ko/ai-unlimited/glossary#network-load-balancer",children:"Network Load Balancer"}),"\n- ",(0,n.jsx)(s.code,{children:"jupyter-without-lb.yaml"}),"\u2014\ub85c\ub4dc \ubc38\ub7f0\uc11c\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."]}),"\n",(0,n.jsx)(s.h2,{id:"\ud15c\ud50c\ub9bf\uc744-\ub85c\ub4dc\ud569\ub2c8\ub2e4",children:"\ud15c\ud50c\ub9bf\uc744 \ub85c\ub4dc\ud569\ub2c8\ub2e4."}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://aws.amazon.com",children:"AWS \ucf58\uc194"}),"\uc5d0 \ub85c\uadf8\uc778\ud569\ub2c8\ub2e4.","\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"AWS Management Console\uc5d0 \ub300\ud55c \ucc38\uc870\ub294 2024\ub144 5\uc6d4 29\uc77c \uae30\uc900\uc73c\ub85c \ucd5c\uc2e0 \uc0c1\ud0dc\uc785\ub2c8\ub2e4."})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["JupyterLab\uc744 \ubc30\ud3ec\ud560 \ub9ac\uc804\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4.",(0,n.jsx)("br",{}),"\n\uc8fc\uc694 \uadfc\ubb34\uc9c0\uc640 \uac00\uc7a5 \uac00\uae4c\uc6b4 \ub9ac\uc804\uc744 \uc120\ud0dd\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."]}),"\n",(0,n.jsxs)(s.li,{children:["\uac80\uc0c9\ud558\uc5ec ",(0,n.jsx)(s.strong,{children:"CloudFormation"}),"\uc73c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"\uc2a4\ud0dd \uc0dd\uc131"}),"\uc744 \uc120\ud0dd\ud55c \ub2e4\uc74c **\uc0c8\ub85c\uc6b4 \ub9ac\uc18c\uc2a4 \uc0ac\uc6a9(\ud45c\uc900)**\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"\uae30\uc874 \ud15c\ud50c\ub9bf \uc120\ud0dd"})," \ubc0f ",(0,n.jsx)(s.strong,{children:"\ud15c\ud50c\ub9bf \ud30c\uc77c \uc5c5\ub85c\ub4dc"}),"\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4."]}),"\n",(0,n.jsxs)(s.li,{children:["\uc0ac\uc6a9\ud560 \ud15c\ud50c\ub9bf \ud30c\uc77c\uc744 \uc120\ud0dd\ud558\uace0 ",(0,n.jsx)(s.strong,{children:"\ub2e4\uc74c"}),"\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"\uc2a4\ud0dd-\uc138\ubd80-\uc815\ubcf4-\ubc0f-\uc635\uc158-\uc9c0\uc815",children:"\uc2a4\ud0dd \uc138\ubd80 \uc815\ubcf4 \ubc0f \uc635\uc158 \uc9c0\uc815"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"\uc2a4\ud0dd \uc774\ub984\uc744 \uc785\ub825\ud569\ub2c8\ub2e4."}),"\n",(0,n.jsx)(s.li,{children:"\ub9e4\uac1c\ubcc0\uc218\ub97c \uac80\ud1a0\ud569\ub2c8\ub2e4. \ud544\uc218 \ub9e4\uac1c\ubcc0\uc218\uc5d0 \ub300\ud55c \uac12\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \uadc0\ud558\uc758 \uc870\uc9c1\uc5d0\ub294 \ub2e4\ub978 \ub9e4\uac1c\ubcc0\uc218\uac00 \ud544\uc694\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n"]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"AWS \ubc0f JupyterLab \ub9e4\uac1c\ubcc0\uc218"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"\ub9e4\uac1c\ubcc0\uc218"}),(0,n.jsx)(s.th,{children:"\uc124\uba85"}),(0,n.jsx)(s.th,{children:"\ub178\ud2b8"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"InstanceType"}),(0,n.jsx)(s.td,{children:"\uc11c\ube44\uc2a4\uc5d0 \uc0ac\uc6a9\ud558\ub824\ub294 EC2 \uc778\uc2a4\ud134\uc2a4 \uc720\ud615\uc785\ub2c8\ub2e4."}),(0,n.jsxs)(s.td,{children:["\ud544\uc218 \uc0ac\ud56d(\uae30\ubcf8\uac12 \uc81c\uacf5)",(0,n.jsx)("br",{}),"\uae30\ubcf8\uac12: t3.small",(0,n.jsx)("br",{}),"\ube44\uc6a9\uc744 \uc808\uac10\ud558\ub824\uba74 \uae30\ubcf8 \uc778\uc2a4\ud134\uc2a4 \uc720\ud615\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"RootVolumeSize"}),(0,n.jsx)(s.td,{children:"\uc778\uc2a4\ud134\uc2a4\uc5d0 \uc5f0\uacb0\ud558\ub824\ub294 \ub8e8\ud2b8 \ub514\uc2a4\ud06c\uc758 \ud06c\uae30(GB)\uc785\ub2c8\ub2e4."}),(0,n.jsxs)(s.td,{children:["\ud544\uc218 \uc0ac\ud56d(\uae30\ubcf8\uac12 \uc81c\uacf5)",(0,n.jsx)("br",{}),"\uae30\ubcf8\uac12: 8",(0,n.jsx)("br",{}),"8~1000 \uc0ac\uc774\uc758 \uac12\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"TerminationProtection"}),(0,n.jsx)(s.td,{children:"\uc778\uc2a4\ud134\uc2a4 \uc885\ub8cc \ubcf4\ud638\ub97c \ud65c\uc131\ud654\ud569\ub2c8\ub2e4."}),(0,n.jsxs)(s.td,{children:["\ud544\uc218 \uc0ac\ud56d(\uae30\ubcf8\uac12 \uc81c\uacf5)",(0,n.jsx)("br",{}),"\uae30\ubcf8\uac12: false"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"IamRole"}),(0,n.jsx)(s.td,{children:"CloudFormation\uc5d0\uc11c \uc0c8\ub85c\uc6b4 IAM \uc5ed\ud560\uc744 \ub9cc\ub4e4\uc5b4\uc57c \ud558\ub294\uc9c0 \uc544\ub2c8\uba74 \uae30\uc874 \uc5ed\ud560\uc744 \uc0ac\uc6a9\ud574\uc57c \ud558\ub294\uc9c0 \uc9c0\uc815\ud569\ub2c8\ub2e4."}),(0,n.jsxs)(s.td,{children:["\ud544\uc218 \uc0ac\ud56d(\uae30\ubcf8\uac12 \uc81c\uacf5)",(0,n.jsx)("br",{}),"\uae30\ubcf8\uac12: \uc2e0\uaddc",(0,n.jsx)("br",{}),"\uc9c0\uc6d0\ub418\ub294 \uc635\uc158\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4. \uc2e0\uaddc \ub610\ub294 \uae30\uc874"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"IamRoleName"}),(0,n.jsx)(s.td,{children:"\uc778\uc2a4\ud134\uc2a4\uc5d0 \ud560\ub2f9\ud560 IAM \uc5ed\ud560\uc758 \uc774\ub984\uc73c\ub85c, \uae30\uc874 IAM \uc5ed\ud560\uc774\uac70\ub098 \uc0c8\ub85c \uc0dd\uc131\ub41c IAM \uc5ed\ud560\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),(0,n.jsxs)(s.td,{children:["\uc120\ud0dd \uc0ac\ud56d(\uae30\ubcf8\uac12 \uc81c\uacf5)",(0,n.jsx)("br",{}),"\uae30\ubcf8\uac12: ai-unlimited-iam-role",(0,n.jsx)("br",{}),"\uc0c8 IAM \uc5ed\ud560\uc758 \uc774\ub984\uc744 \uc9c0\uc815\ud558\ub294 \uacbd\uc6b0 CloudFormation\uc5d0 CAPABILITY_NAMED_IAM \uae30\ub2a5\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. \uc790\ub3d9 \uc0dd\uc131\ub41c \uc774\ub984\uc744 \uc0ac\uc6a9\ud558\ub824\uba74 \uc774 \uac12\uc744 \ube44\uc6cc \ub461\ub2c8\ub2e4."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["IamPermissions",(0,n.jsx)("br",{}),"Boundary"]}),(0,n.jsx)(s.td,{children:"\uc778\uc2a4\ud134\uc2a4\uc5d0 \ud560\ub2f9\ub41c IAM \uc5ed\ud560\uacfc \uc5f0\uacb0\ud560 IAM \uad8c\ud55c \uacbd\uacc4\uc758 ARN\uc785\ub2c8\ub2e4."}),(0,n.jsxs)(s.td,{children:["\uc120\ud0dd \uc0ac\ud56d",(0,n.jsx)("br",{}),"\uae30\ubcf8\uac12: NA"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"AvailabilityZone"}),(0,n.jsx)(s.td,{children:"\uc778\uc2a4\ud134\uc2a4\ub97c \ubc30\ud3ec\ud560 \uac00\uc6a9\uc131 \uc601\uc5ed\uc785\ub2c8\ub2e4."}),(0,n.jsxs)(s.td,{children:["\ud544\uc218 \uc0ac\ud56d",(0,n.jsx)("br",{}),"\uae30\ubcf8\uac12: NA",(0,n.jsx)("br",{}),"\uac12\uc740 \uc11c\ube0c\ub137, \uae30\uc874 \ubcfc\ub968\uc758 \uc601\uc5ed\uacfc \uc77c\uce58\ud574\uc57c \ud558\uba70 \uc778\uc2a4\ud134\uc2a4 \uc720\ud615\uc740 \uc120\ud0dd\ud55c \uc601\uc5ed\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"LoadBalancing"}),(0,n.jsx)(s.td,{children:"\uc778\uc2a4\ud134\uc2a4\uc5d0 NLB\ub97c \ud1b5\ud574 \uc561\uc138\uc2a4\ud560\uc9c0 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4."}),(0,n.jsxs)(s.td,{children:["\ud544\uc218 \uc0ac\ud56d(\uae30\ubcf8\uac12 \uc81c\uacf5)",(0,n.jsx)("br",{}),"\uae30\ubcf8\uac12: NetworkLoadBalancer",(0,n.jsx)("br",{}),"\uc9c0\uc6d0\ub418\ub294 \uc635\uc158\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4. NetworkLoadBalancer \ub610\ub294 \uc5c6\uc74c"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"LoadBalancerScheme"}),(0,n.jsx)(s.td,{children:"\ub85c\ub4dc \ubc38\ub7f0\uc11c\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0 \uc774 \ud544\ub4dc\ub294 \uc778\uc2a4\ud134\uc2a4\uc5d0 \uc778\ud130\ub137\uc5d0\uc11c \uc561\uc138\uc2a4\ud560 \uc218 \uc788\ub294\uc9c0 \uc544\ub2c8\uba74 VPC \ub0b4\uc5d0\uc11c\ub9cc \uc561\uc138\uc2a4\ud560 \uc218 \uc788\ub294\uc9c0 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4."}),(0,n.jsxs)(s.td,{children:["\uc120\ud0dd \uc0ac\ud56d(\uae30\ubcf8\uac12 \uc81c\uacf5)",(0,n.jsx)("br",{}),"\uae30\ubcf8\uac12: Internet-facing",(0,n.jsx)("br",{})," Internet-facing \ub85c\ub4dc \ubc38\ub7f0\uc11c\uc758 DNS \uc774\ub984\uc740 \ub178\ub4dc\uc758 \uacf5\uc6a9 IP \uc8fc\uc18c\ub85c \uacf5\uac1c\uc801\uc73c\ub85c \ud655\uc778 \uac00\ub2a5\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c Internet-facing \ub85c\ub4dc \ubc38\ub7f0\uc11c\ub294 \uc778\ud130\ub137\uc744 \ud1b5\ud574 \ud074\ub77c\uc774\uc5b8\ud2b8\uc758 \uc694\uccad\uc744 \ub77c\uc6b0\ud305\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub0b4\ubd80 \ub85c\ub4dc \ubc38\ub7f0\uc11c\uc758 \ub178\ub4dc\ub294 \uac1c\uc778 IP \uc8fc\uc18c\ub9cc \uac16\uc2b5\ub2c8\ub2e4. \ub0b4\ubd80 \ub85c\ub4dc \ubc38\ub7f0\uc11c\uc758 DNS \uc774\ub984\uc740 \ub178\ub4dc\uc758 \uac1c\uc778 IP \uc8fc\uc18c\ub85c \uacf5\uac1c\uc801\uc73c\ub85c \ud655\uc778 \uac00\ub2a5\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c \ub0b4\ubd80 \ub85c\ub4dc \ubc38\ub7f0\uc11c\ub294 \ub85c\ub4dc \ubc38\ub7f0\uc11c\uc758 VPC\uc5d0 \uc561\uc138\uc2a4\ud560 \uc218 \uc788\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8\uc758 \uc694\uccad\uc744 \ub77c\uc6b0\ud305\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Private"}),(0,n.jsx)(s.td,{children:"\uc11c\ube44\uc2a4\uac00 \uacf5\uc6a9 IP\uac00 \uc5c6\ub294 \uac1c\uc778 \ub124\ud2b8\uc6cc\ud06c\uc5d0 \ubc30\ud3ec\ub418\ub294\uc9c0 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4."}),(0,n.jsxs)(s.td,{children:["\ud544\uc218 \uc0ac\ud56d",(0,n.jsx)("br",{}),"\uae30\ubcf8\uac12: false",(0,n.jsx)("br",{}),"\uad00\ub9ac\uc790\uac00 \uc788\ub294 \uc11c\ube0c\ub137\uc5d0\uc11c ",(0,n.jsx)(s.code,{children:"\uacf5\uc6a9 IPv4 \uc8fc\uc18c \uc790\ub3d9 \ud560\ub2f9 \ud65c\uc131\ud654"})," \uc635\uc158\uc744 \uc120\ud0dd\ud588\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4. \uc774 \uc635\uc158\uc744 \uc120\ud0dd\ud558\uc9c0 \uc54a\uc73c\uba74 \uc124\uce58\uac00 \uc2e4\ud328\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Session"}),(0,n.jsx)(s.td,{children:"AWS Session Manager\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc778\uc2a4\ud134\uc2a4\uc5d0 \uc561\uc138\uc2a4\ud560 \uc218 \uc788\ub294\uc9c0 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4."}),(0,n.jsxs)(s.td,{children:["\ud544\uc218 \uc0ac\ud56d",(0,n.jsx)("br",{}),"\uae30\ubcf8\uac12: false"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Vpc"}),(0,n.jsx)(s.td,{children:"\uc778\uc2a4\ud134\uc2a4\ub97c \ubc30\ud3ec\ud560 \ub124\ud2b8\uc6cc\ud06c\uc785\ub2c8\ub2e4."}),(0,n.jsxs)(s.td,{children:["\ud544\uc218 \uc0ac\ud56d",(0,n.jsx)("br",{}),"\uae30\ubcf8\uac12: NA"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Subnet"}),(0,n.jsx)(s.td,{children:"\uc778\uc2a4\ud134\uc2a4\ub97c \ubc30\ud3ec\ud558\ub824\ub294 \ud558\uc704 \ub124\ud2b8\uc6cc\ud06c\uc785\ub2c8\ub2e4."}),(0,n.jsxs)(s.td,{children:["\ud544\uc218 \uc0ac\ud56d",(0,n.jsx)("br",{}),"\uae30\ubcf8\uac12: NA",(0,n.jsx)("br",{}),"\uc11c\ube0c\ub137\uc740 \uc120\ud0dd\ud55c \uac00\uc6a9\uc131 \uc601\uc5ed\uc5d0 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"KeyName"}),(0,n.jsx)(s.td,{children:"\uc778\uc2a4\ud134\uc2a4\uac00 \uc2dc\uc791\ub41c \ud6c4 \uc778\uc2a4\ud134\uc2a4\uc5d0 \uc548\uc804\ud558\uac8c \uc5f0\uacb0\ud560 \uc218 \uc788\ub294 \uacf5\uc6a9/\uac1c\uc778 \ud0a4 \uc30d\uc785\ub2c8\ub2e4. AWS \uacc4\uc815\uc744 \ub9cc\ub4e4 \ub54c \uc120\ud638\ud558\ub294 \ub9ac\uc804\uc5d0\uc11c \ub9cc\ub4dc\ub294 \ud0a4 \uc30d\uc785\ub2c8\ub2e4."}),(0,n.jsxs)(s.td,{children:["\uc120\ud0dd \uc0ac\ud56d",(0,n.jsx)("br",{}),"\uae30\ubcf8\uac12: NA",(0,n.jsx)("br",{}),"SSH \ud0a4\ub97c \ud3ec\ud568\ud558\uc9c0 \uc54a\uc73c\ub824\uba74 \uc774 \ud544\ub4dc\ub97c \ube44\uc6cc\ub461\ub2c8\ub2e4."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"AccessCIDR"}),(0,n.jsx)(s.td,{children:"\uc778\uc2a4\ud134\uc2a4\uc5d0 \uc561\uc138\uc2a4\ud560 \uc218 \uc788\ub294 CIDR IP \uc8fc\uc18c \ubc94\uc704\uc785\ub2c8\ub2e4."}),(0,n.jsxs)(s.td,{children:["\uc120\ud0dd \uc0ac\ud56d",(0,n.jsx)("br",{}),"\uae30\ubcf8\uac12: NA",(0,n.jsx)("br",{}),"\uc774 \uac12\uc744 \uc2e0\ub8b0\ud560 \uc218 \uc788\ub294 IP \ubc94\uc704\ub85c \uc124\uc815\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. \uc0ac\uc6a9\uc790 \uc9c0\uc815 \ubcf4\uc548 \uadf8\ub8f9 \uc218\uc2e0 \uaddc\uce59\uc744 \ub9cc\ub4e4\uc9c0 \uc54a\ub294 \ud55c AccessCIDR, PrefixList \ub610\ub294 SecurityGroup \uc911 \ud558\ub098 \uc774\uc0c1\uc744 \uc815\uc758\ud558\uc5ec \uc778\ubc14\uc6b4\ub4dc \ud2b8\ub798\ud53d\uc744 \ud5c8\uc6a9\ud569\ub2c8\ub2e4."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"PrefixList"}),(0,n.jsx)(s.td,{children:"\uc778\uc2a4\ud134\uc2a4\uc640 \ud1b5\uc2e0\ud558\ub294 \ub370 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uc811\ub450\uc0ac \ubaa9\ub85d\uc785\ub2c8\ub2e4. \ub3d9\uc77c\ud55c \uc815\ucc45 \uc2dc\ud589\uc774 \ud544\uc694\ud55c IP \uc8fc\uc18c \ubc94\uc704 \uc138\ud2b8\ub97c \uc815\uc758\ud558\ub294 CIDR \ube14\ub85d\uc758 \uceec\ub809\uc158\uc785\ub2c8\ub2e4."}),(0,n.jsxs)(s.td,{children:["\uc120\ud0dd \uc0ac\ud56d",(0,n.jsx)("br",{}),"\uae30\ubcf8\uac12: NA",(0,n.jsx)("br",{}),"\uc0ac\uc6a9\uc790 \uc9c0\uc815 \ubcf4\uc548 \uadf8\ub8f9 \uc218\uc2e0 \uaddc\uce59\uc744 \ub9cc\ub4e4\uc9c0 \uc54a\ub294 \ud55c AccessCIDR, PrefixList \ub610\ub294 SecurityGroup \uc911 \ud558\ub098 \uc774\uc0c1\uc744 \uc815\uc758\ud558\uc5ec \uc778\ubc14\uc6b4\ub4dc \ud2b8\ub798\ud53d\uc744 \ud5c8\uc6a9\ud569\ub2c8\ub2e4."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"SecurityGroup"}),(0,n.jsx)(s.td,{children:"\uc778\uc2a4\ud134\uc2a4\uc5d0 \ub300\ud55c \uc778\ubc14\uc6b4\ub4dc \ubc0f \uc544\uc6c3\ubc14\uc6b4\ub4dc \ud2b8\ub798\ud53d\uc744 \uc81c\uc5b4\ud558\ub294 \uac00\uc0c1 \ubc29\ud654\ubcbd\uc785\ub2c8\ub2e4."}),(0,n.jsxs)(s.td,{children:["\uc120\ud0dd \uc0ac\ud56d",(0,n.jsx)("br",{}),"\uae30\ubcf8\uac12: NA",(0,n.jsx)("br",{}),"\uc778\uc2a4\ud134\uc2a4\uc5d0 \uc561\uc138\uc2a4\ud560 \uc218 \uc788\ub294 \ud504\ub85c\ud1a0\ucf5c, \ud3ec\ud2b8 \ubc0f IP \uc8fc\uc18c \ub610\ub294 CIDR \ube14\ub85d\uc744 \uc9c0\uc815\ud558\ub294 \uaddc\uce59 \uc138\ud2b8\ub85c \uad6c\ud604\ub429\ub2c8\ub2e4. \uc0ac\uc6a9\uc790 \uc9c0\uc815 \ubcf4\uc548 \uadf8\ub8f9 \uc218\uc2e0 \uaddc\uce59\uc744 \ub9cc\ub4e4\uc9c0 \uc54a\ub294 \ud55c AccessCIDR, PrefixList \ub610\ub294 SecurityGroup \uc911 \ud558\ub098 \uc774\uc0c1\uc744 \uc815\uc758\ud558\uc5ec \uc778\ubc14\uc6b4\ub4dc \ud2b8\ub798\ud53d\uc744 \ud5c8\uc6a9\ud569\ub2c8\ub2e4."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"UsePersistentVolume"}),(0,n.jsxs)(s.td,{children:["\ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\uae30 \uc704\ud574 \uc0c8 \uc601\uad6c \ubcfc\ub968\uc744 \uc0ac\uc6a9\ud560\uc9c0 \uae30\uc874 \uc601\uad6c \ubcfc\ub968\uc744 \uc0ac\uc6a9\ud560\uc9c0 \uc9c0\uc815\ud569\ub2c8\ub2e4. \ub9e4\uac1c\ubcc0\uc218 \uc139\uc158 \uc544\ub798\uc758 ",(0,n.jsx)(s.em,{children:"\uc790\uc138\ud788 \uc54c\uc544\ubcf4\uae30: \uc601\uad6c \ubcfc\ub968 \uc0ac\uc6a9"}),"\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."]}),(0,n.jsxs)(s.td,{children:["\uc120\ud0dd \uc0ac\ud56d(\uae30\ubcf8\uac12 \uc81c\uacf5)",(0,n.jsx)("br",{}),"\uae30\ubcf8\uac12: \uc2e0\uaddc",(0,n.jsx)("br",{}),"\uc9c0\uc6d0\ub418\ub294 \uc635\uc158\uc740 \uc0ac\uc6a9 \uc0ac\ub840\uc5d0 \ub530\ub77c \uc0c8 \uc601\uad6c \ubcfc\ub968 \ub610\ub294 \uae30\uc874 \uc601\uad6c \ubcfc\ub968\uc785\ub2c8\ub2e4."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"PersistentVolumeSize"}),(0,n.jsx)(s.td,{children:"\uc778\uc2a4\ud134\uc2a4\uc5d0 \uc5f0\uacb0\ud560 \uc218 \uc788\ub294 \uc601\uad6c \ubcfc\ub968\uc758 \ud06c\uae30(GB)\uc785\ub2c8\ub2e4."}),(0,n.jsxs)(s.td,{children:["\ud544\uc218 \uc0ac\ud56d(\uae30\ubcf8\uac12 \uc81c\uacf5)",(0,n.jsx)("br",{}),"\uae30\ubcf8\uac12: 20",(0,n.jsx)("br",{}),"8~1000 \uc0ac\uc774\uc758 \uac12\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["ExistingPersistent",(0,n.jsx)("br",{}),"VolumeId"]}),(0,n.jsx)(s.td,{children:"\uc778\uc2a4\ud134\uc2a4\uc5d0 \uc5f0\uacb0\ud560 \uc218 \uc788\ub294 \uae30\uc874 \uc601\uad6c \ubcfc\ub968\uc758 ID\uc785\ub2c8\ub2e4."}),(0,n.jsxs)(s.td,{children:["UsePersistentVolume\uc774 \uae30\uc874\uc73c\ub85c \uc124\uc815\ub41c \uacbd\uc6b0 \ud544\uc218 \uc0ac\ud56d",(0,n.jsx)("br",{}),"\uae30\ubcf8\uac12: NA",(0,n.jsx)("br",{}),"\uc601\uad6c \ubcfc\ub968\uc740 AI Unlimited \uc778\uc2a4\ud134\uc2a4\uc640 \ub3d9\uc77c\ud55c \uac00\uc6a9\uc131 \uc601\uc5ed\uc5d0 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["PersistentVolume",(0,n.jsx)("br",{}),"DeletionPolicy"]}),(0,n.jsx)(s.td,{children:"CloudFormation \ubc30\ud3ec\ub97c \uc0ad\uc81c\ud560 \ub54c\uc758 \uc601\uad6c \ubcfc\ub968 \ub3d9\uc791\uc785\ub2c8\ub2e4."}),(0,n.jsxs)(s.td,{children:["\ud544\uc218 \uc0ac\ud56d(\uae30\ubcf8\uac12 \uc81c\uacf5)",(0,n.jsx)("br",{}),"\uae30\ubcf8\uac12: \uc720\uc9c0",(0,n.jsx)("br",{}),"\uc9c0\uc6d0\ub418\ub294 \uc635\uc158\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4. \uc0ad\uc81c, \uc720\uc9c0, RetainExceptOnCreate \ubc0f \uc2a4\ub0c5\uc0f7."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"LatestAmiId"}),(0,n.jsx)(s.td,{children:"AMI\uc758 \ucd5c\uc2e0 \ubc84\uc804\uc744 \uac00\ub9ac\ud0a4\ub294 \uc774\ubbf8\uc9c0\uc758 ID\uc785\ub2c8\ub2e4. \uc774 \uac12\uc740 SSM \uc870\ud68c\uc5d0 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."}),(0,n.jsxs)(s.td,{children:["\ud544\uc218 \uc0ac\ud56d(\uae30\ubcf8\uac12 \uc81c\uacf5)",(0,n.jsx)("br",{}),"\uae30\ubcf8\uac12: NA",(0,n.jsx)("br",{}),"\uc774 \ubc30\ud3ec\ub294 \uc0ac\uc6a9 \uac00\ub2a5\ud55c \ucd5c\uc2e0 ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2 \uc774\ubbf8\uc9c0\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.",(0,n.jsx)("br",{}),"\uc911\uc694: \uc774 \uac12\uc744 \ubcc0\uacbd\ud558\uba74 \uc2a4\ud0dd\uc774 \uc190\uc0c1\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"JupyterHttpPort"}),(0,n.jsx)(s.td,{children:"JupyterLab \uc11c\ube44\uc2a4 UI\uc5d0 \uc561\uc138\uc2a4\ud558\ub294 \ud3ec\ud2b8\uc785\ub2c8\ub2e4."}),(0,n.jsxs)(s.td,{children:["\ud544\uc218 \uc0ac\ud56d(\uae30\ubcf8\uac12 \uc81c\uacf5)",(0,n.jsx)("br",{}),"\uae30\ubcf8\uac12: 8888"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"JupyterVersion"}),(0,n.jsx)(s.td,{children:"\ubc30\ud3ec\ud558\ub824\ub294 JupyterLab \ubc84\uc804\uc785\ub2c8\ub2e4."}),(0,n.jsxs)(s.td,{children:["\ud544\uc218 \uc0ac\ud56d(\uae30\ubcf8\uac12 \uc81c\uacf5)",(0,n.jsx)("br",{}),"\uae30\ubcf8\uac12: \ucd5c\uc2e0",(0,n.jsx)("br",{}),"\uac12\uc740 \ucee8\ud14c\uc774\ub108 \ubc84\uc804 \ud0dc\uadf8\uc785\ub2c8\ub2e4(\uc608: \ucd5c\uc2e0)."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"JupyterToken"}),(0,n.jsx)(s.td,{children:"UI\uc5d0\uc11c JupyterLab\uc5d0 \uc561\uc138\uc2a4\ud558\ub294 \ub370 \uc0ac\uc6a9\ub418\ub294 \ud1a0\ud070 \ub610\ub294 \ube44\ubc00\ubc88\ud638\uc785\ub2c8\ub2e4."}),(0,n.jsxs)(s.td,{children:["\ud544\uc218 \uc0ac\ud56d",(0,n.jsx)("br",{}),"\uae30\ubcf8\uac12: NA",(0,n.jsx)("br",{}),"\ud1a0\ud070\uc740 \ubb38\uc790\ub85c \uc2dc\uc791\ud574\uc57c \ud558\uba70 \uc601\uc22b\uc790\ub9cc \ud3ec\ud568\ud574\uc57c \ud569\ub2c8\ub2e4. \ud5c8\uc6a9\ub418\ub294 \ud328\ud134\uc740 ^[a-zA-Z][a-zA-Z0-9-]*\uc785\ub2c8\ub2e4."]})]})]})]})]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"\uc790\uc138\ud788 \uc54c\uc544\ubcf4\uae30: \uc601\uad6c \ubcfc\ub968 \uc0ac\uc6a9"}),(0,n.jsx)(s.p,{children:"JupyterLab \uc778\uc2a4\ud134\uc2a4\ub294 \ucee8\ud14c\uc774\ub108\uc5d0\uc11c \uc2e4\ud589\ub418\uace0 \uc778\uc2a4\ud134\uc2a4\uc758 \ub8e8\ud2b8 \ubcfc\ub968\uc5d0 \uc788\ub294 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \uad6c\uc131 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud569\ub2c8\ub2e4. \uc778\uc2a4\ud134\uc2a4\ub97c \uc885\ub8cc, \ub2e4\uc2dc \uc2dc\uc791 \ub610\ub294 \uc2a4\ub0c5\uc0f7\ud558\uace0 \ub2e4\uc2dc \uc2dc\uc791\ud574\ub3c4 \uc774 \ub370\uc774\ud130\uac00 \uc720\uc9c0\ub429\ub2c8\ub2e4."}),(0,n.jsx)(s.p,{children:"\uc601\uad6c \ubcfc\ub968\uc740 \ucee8\ud14c\uc774\ub108\ud654\ub41c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ub370\uc774\ud130\ub97c \ud574\ub2f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc2e4\ud589\ub418\ub294 \ucee8\ud14c\uc774\ub108, \ud3ec\ub4dc \ub610\ub294 \ub178\ub4dc\uc758 \uc218\uba85\uc744 \ub118\uc5b4 \uc800\uc7a5\ud569\ub2c8\ub2e4."}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"\uc601\uad6c \ubcfc\ub968 \uc5c6\uc74c"})}),(0,n.jsx)(s.p,{children:"\ucee8\ud14c\uc774\ub108, \ud3ec\ub4dc \ub610\ub294 \ub178\ub4dc\uac00 \ucda9\ub3cc\ud558\uac70\ub098 \uc885\ub8cc\ub418\uba74 JupyterLab \uad6c\uc131 \ub370\uc774\ud130\uac00 \uc190\uc2e4\ub429\ub2c8\ub2e4. \uc0c8\ub85c\uc6b4 JupyterLab \uc778\uc2a4\ud134\uc2a4\ub97c \ubc30\ud3ec\ud560 \uc218 \uc788\uc9c0\ub9cc \uc190\uc2e4\ub41c \uc778\uc2a4\ud134\uc2a4\uc640 \ub3d9\uc77c\ud55c \uc0c1\ud0dc\ub85c\ub294 \ubc30\ud3ec\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"\uc601\uad6c \ubcfc\ub968 \uc0ac\uc6a9"})}),(0,n.jsx)(s.p,{children:"\ucee8\ud14c\uc774\ub108, \ud3ec\ub4dc \ub610\ub294 \ub178\ub4dc\uac00 \ucda9\ub3cc\ud558\uac70\ub098 \uc885\ub8cc\ub418\uace0 JupyterLab \uad6c\uc131 \ub370\uc774\ud130\uac00 \uc601\uad6c \ubcfc\ub968\uc5d0 \uc800\uc7a5\ub41c \uacbd\uc6b0 \uc190\uc2e4\ub41c \uc778\uc2a4\ud134\uc2a4\uc640 \ub3d9\uc77c\ud55c \uad6c\uc131\uc744 \uac16\ub294 \uc0c8 JupyterLab \uc778\uc2a4\ud134\uc2a4\ub97c \ubc30\ud3ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"\uc608"})}),(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["JupyterLab\uc744 \ubc30\ud3ec\ud558\uace0 \ub2e4\uc74c \ub9e4\uac1c\ubcc0\uc218\ub97c \ud3ec\ud568\ud569\ub2c8\ub2e4.","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"UsePersistentVolume"}),": ",(0,n.jsx)(s.strong,{children:"\uc2e0\uaddc"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"PersistentVolumeDeletionPolicy"}),": ",(0,n.jsx)(s.strong,{children:"\uc720\uc9c0"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\uc2a4\ud0dd\uc744 \uc0dd\uc131\ud55c \ud6c4 ",(0,n.jsx)(s.strong,{children:"\ucd9c\ub825"})," \ud0ed\uc5d0\uc11c ",(0,n.jsx)(s.code,{children:"volume-id"}),"\ub97c \uae30\ub85d\ud574 \ub461\ub2c8\ub2e4."]}),"\n",(0,n.jsx)(s.li,{children:"JupyterLab\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."}),"\n",(0,n.jsxs)(s.li,{children:["JupyterLab \uc778\uc2a4\ud134\uc2a4\uac00 \uc190\uc2e4\ub41c \uacbd\uc6b0 JupyterLab\uc744 \ub2e4\uc2dc \ubc30\ud3ec\ud558\uace0 \ub2e4\uc74c \ub9e4\uac1c\ubcc0\uc218\ub97c \ud3ec\ud568\ud569\ub2c8\ub2e4.","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"UsePersistentVolume"}),": ",(0,n.jsx)(s.strong,{children:"\uc2e0\uaddc"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"PersistentVolumeDeletionPolicy"}),": ",(0,n.jsx)(s.strong,{children:"\uc720\uc9c0"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"ExistingPersistentVolumeId"}),": 2\ub2e8\uacc4\uc5d0\uc11c \uae30\ub85d\ud55c \uac12"]}),"\n"]}),"\n"]}),"\n"]}),(0,n.jsx)(s.p,{children:"\uc0c8\ub85c\uc6b4 JupyterLab \uc778\uc2a4\ud134\uc2a4\ub294 \uc190\uc2e4\ub41c \uc778\uc2a4\ud134\uc2a4\uc640 \ub3d9\uc77c\ud55c \uad6c\uc131\uc744 \uac16\uc2b5\ub2c8\ub2e4."})]}),"\n",(0,n.jsxs)(s.ol,{start:"3",children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"\ub2e4\uc74c"}),"\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4."]}),"\n",(0,n.jsxs)(s.li,{children:["\uc694\uad6c \uc0ac\ud56d\uc5d0 \ub9de\uac8c ",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-console-add-tags.html",children:"\uc2a4\ud0dd \uc635\uc158\uc744 \uad6c\uc131"}),"\ud558\uace0 ",(0,n.jsx)(s.strong,{children:"\ub2e4\uc74c"}),"\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"\uc2a4\ud0dd\uc744-\uac80\ud1a0\ud558\uace0-\uc0dd\uc131\ud569\ub2c8\ub2e4",children:"\uc2a4\ud0dd\uc744 \uac80\ud1a0\ud558\uace0 \uc0dd\uc131\ud569\ub2c8\ub2e4."}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"\ud15c\ud50c\ub9bf \uc124\uc815\uc744 \uac80\ud1a0\ud569\ub2c8\ub2e4."}),"\n",(0,n.jsx)(s.li,{children:"\ud15c\ud50c\ub9bf\uc774 IAM \ub9ac\uc18c\uc2a4\ub97c \uc0dd\uc131\ud560 \uac83\uc784\uc744 \ud655\uc778\ud558\ub824\uba74 \ud655\uc778\ub780\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4."}),"\n",(0,n.jsxs)(s.li,{children:["\uc2a4\ud0dd\uc744 \ubc30\ud3ec\ud558\ub824\uba74 ",(0,n.jsx)(s.strong,{children:"\uc81c\ucd9c"}),"\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4.",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(s.strong,{children:"\uc774\ubca4\ud2b8"})," \ud0ed\uc5d0\uc11c \uc9c4\ud589 \uc0c1\ud669\uc744 \ubaa8\ub2c8\ud130\ub9c1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubaa8\ub4e0 \ub9ac\uc18c\uc2a4\uc758 \uc0c1\ud0dc\uac00 ",(0,n.jsx)(s.code,{children:"CREATE_COMPLETE"}),"\uc774\uba74 JupyterLab\uc774 \uc900\ube44\ub41c \uac83\uc785\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\ucd9c\ub825"})," \ud0ed\uc740 JupyterLab\uc5d0 \uc561\uc138\uc2a4\ud558\uae30 \uc704\ud55c URL\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."]})]})}function x(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>d,x:()=>l});var n=r(96540);const i={},t=n.createContext(i);function d(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);
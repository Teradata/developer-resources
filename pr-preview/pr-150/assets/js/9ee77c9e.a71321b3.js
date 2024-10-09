"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[6997],{41269:(e,a,t)=>{t.d(a,{Ay:()=>c,RM:()=>i});var n=t(74848),s=t(28453);const i=[];function r(e){const a={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,n.jsx)(a.admonition,{type:"note",children:(0,n.jsxs)(a.p,{children:["If you have any questions or need further assistance, please visit our ",(0,n.jsx)(a.a,{href:"https://support.teradata.com/community",children:"community forum"})," where you can get support and interact with other community members."]})})}function c(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},62680:(e,a,t)=>{t.d(a,{Ay:()=>c,RM:()=>i});var n=t(74848),s=t(28453);const i=[];function r(e){const a={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,n.jsx)(a.admonition,{type:"note",children:(0,n.jsxs)(a.p,{children:["If you need a test instance of Vantage, you can provision one for free at ",(0,n.jsx)(a.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})})}function c(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},92244:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>g,frontMatter:()=>c,metadata:()=>l,toc:()=>h});var n=t(74848),s=t(28453),i=t(62680),r=t(41269);const c={sidebar_position:19,author:"Daniel Herrera",email:"daniel.herrera2@teradata.com",page_last_update:"March 18, 2024",description:"Ingest and catalog data from Teradata Vantage to Amazon S3",keywords:["data warehouses","object storage","teradata","vantage","cloud data platform","data engineering","enterprise analytics","aws glue","aws lake formation","aws glue catalog"]},o="Ingest and Catalog Data from Teradata Vantage to Amazon S3 with AWS Glue Scripts",l={id:"manage-data/ingest-catalog-data-teradata-s3-with-glue",title:"Ingest and Catalog Data from Teradata Vantage to Amazon S3 with AWS Glue Scripts",description:"Ingest and catalog data from Teradata Vantage to Amazon S3",source:"@site/quickstarts/manage-data/ingest-catalog-data-teradata-s3-with-glue.md",sourceDirName:"manage-data",slug:"/manage-data/ingest-catalog-data-teradata-s3-with-glue",permalink:"/pr-preview/pr-150/quickstarts/manage-data/ingest-catalog-data-teradata-s3-with-glue",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:19,frontMatter:{sidebar_position:19,author:"Daniel Herrera",email:"daniel.herrera2@teradata.com",page_last_update:"March 18, 2024",description:"Ingest and catalog data from Teradata Vantage to Amazon S3",keywords:["data warehouses","object storage","teradata","vantage","cloud data platform","data engineering","enterprise analytics","aws glue","aws lake formation","aws glue catalog"]},sidebar:"tutorialSidebar",previous:{title:"Configure a Teradata Vantage connection in DataHub",permalink:"/pr-preview/pr-150/quickstarts/manage-data/configure-a-teradata-vantage-connection-in-datahub"},next:{title:"Connect to Vantage using JDBC",permalink:"/pr-preview/pr-150/quickstarts/create-applications/jdbc"}},d={},h=[{value:"Overview",id:"overview",level:3},{value:"Prerequisites",id:"prerequisites",level:3},...i.RM,{value:"Loading of test data",id:"loading-of-test-data",level:3},{value:"Amazon AWS setup",id:"amazon-aws-setup",level:3},{value:"Create an Amazon S3 Bucket to Ingest Data",id:"create-an-amazon-s3-bucket-to-ingest-data",level:3},{value:"Create an AWS Glue Catalog Database for Storing Metadata",id:"create-an-aws-glue-catalog-database-for-storing-metadata",level:3},{value:"Store Teradata Vantage credentials in AWS Secrets Manager",id:"store-teradata-vantage-credentials-in-aws-secrets-manager",level:3},{value:"Create an AWS Glue Service Role to Assign to ETL Jobs",id:"create-an-aws-glue-service-role-to-assign-to-etl-jobs",level:3},{value:"Create a connection to a Teradata Vantage Instance in AWS Glue",id:"create-a-connection-to-a-teradata-vantage-instance-in-aws-glue",level:3},{value:"Create an AWS Glue Job",id:"create-an-aws-glue-job",level:3},{value:"Draft a script for automated ingestion and cataloging of Teradata Vantage data into Amazon S3",id:"draft-a-script-for-automated-ingestion-and-cataloging-of-teradata-vantage-data-into-amazon-s3",level:3},{value:"Checking the Results",id:"checking-the-results",level:3},{value:"Summary",id:"summary",level:3},{value:"Further reading",id:"further-reading",level:3},...r.RM];function u(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"ingest-and-catalog-data-from-teradata-vantage-to-amazon-s3-with-aws-glue-scripts",children:"Ingest and Catalog Data from Teradata Vantage to Amazon S3 with AWS Glue Scripts"}),"\n",(0,n.jsx)(a.h3,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(a.p,{children:"This quickstart details the process of ingesting and cataloging data from Teradata Vantage to Amazon S3 with AWS Glue."}),"\n",(0,n.jsx)(a.admonition,{type:"tip",children:(0,n.jsxs)(a.p,{children:["For ingesting data to Amazon S3 when cataloging is not a requirement consider ",(0,n.jsx)(a.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/SQL-Data-Manipulation-Language/Working-with-External-Data/WRITE_NOS",children:"Teradata Write NOS capabilities"}),"."]})}),"\n",(0,n.jsx)(a.h3,{id:"prerequisites",children:"Prerequisites"}),"\n","\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Access to an ",(0,n.jsx)(a.a,{href:"https://aws.amazon.com",children:"Amazon AWS account"})]}),"\n",(0,n.jsxs)(a.li,{children:["Access to a Teradata Vantage instance","\n",(0,n.jsx)(i.Ay,{}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["A database ",(0,n.jsx)(a.a,{href:"/pr-preview/pr-150/quickstarts/connect-to-vantage/configure-a-teradata-vantage-connection-in-dbeaver",children:"client"})," to send queries for loading the test data"]}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"loading-of-test-data",children:"Loading of test data"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"In your favorite database client run the following queries"}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"CREATE DATABASE teddy_retailers_inventory\nAS PERMANENT = 110e6;\n\nCREATE TABLE teddy_retailers_inventory.source_catalog AS\n(\n  SELECT product_id, product_name, product_category, price_cents\n    FROM (\n\t\tLOCATION='/s3/dev-rel-demos.s3.amazonaws.com/demo-datamesh/source_products.csv') as products\n) WITH DATA;\n\nCREATE TABLE teddy_retailers_inventory.source_stock AS\n(\n  SELECT entry_id, product_id, product_quantity, purchase_price_cents, entry_date\n    FROM (\n\t\tLOCATION='/s3/dev-rel-demos.s3.amazonaws.com/demo-datamesh/source_stock.csv') as stock\n) WITH DATA;\n"})}),"\n",(0,n.jsx)(a.h3,{id:"amazon-aws-setup",children:"Amazon AWS setup"}),"\n",(0,n.jsx)(a.p,{children:"In this section, we will cover in detail each of the steps below:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Create an Amazon S3 bucket to ingest data"}),"\n",(0,n.jsx)(a.li,{children:"Create an AWS Glue Catalog Database for storing metadata"}),"\n",(0,n.jsx)(a.li,{children:"Store Teradata Vantage credentials in AWS Secrets Manager"}),"\n",(0,n.jsx)(a.li,{children:"Create an AWS Glue Service Role to assign to ETL jobs"}),"\n",(0,n.jsx)(a.li,{children:"Create a connection to a Teradata Vantage Instance in AWS Glue"}),"\n",(0,n.jsx)(a.li,{children:"Create an AWS Glue Job"}),"\n",(0,n.jsx)(a.li,{children:"Draft a script for automated ingestion and cataloging of Teradata Vantage data into Amazon S3"}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"create-an-amazon-s3-bucket-to-ingest-data",children:"Create an Amazon S3 Bucket to Ingest Data"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["In Amazon S3, select ",(0,n.jsx)(a.code,{children:"Create bucket"}),".\n",(0,n.jsx)(a.img,{alt:"create bucket",src:t(81008).A+"",width:"1231",height:"218"})]}),"\n",(0,n.jsxs)(a.li,{children:["Assign a name to your bucket and take note of it.\n",(0,n.jsx)(a.img,{alt:"name bucket",src:t(46155).A+"",width:"812",height:"595"})]}),"\n",(0,n.jsx)(a.li,{children:"Leave all settings at their default values."}),"\n",(0,n.jsxs)(a.li,{children:["Click on ",(0,n.jsx)(a.code,{children:"Create bucket"}),".\n",(0,n.jsx)(a.img,{alt:"save bucket",src:t(45538).A+"",width:"814",height:"622"})]}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"create-an-aws-glue-catalog-database-for-storing-metadata",children:"Create an AWS Glue Catalog Database for Storing Metadata"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"In AWS Glue, select Data catalog, Databases."}),"\n",(0,n.jsxs)(a.li,{children:["Click on ",(0,n.jsx)(a.code,{children:"Add database"}),".\n",(0,n.jsx)(a.img,{alt:"add database",src:t(69405).A+"",width:"1283",height:"185"})]}),"\n",(0,n.jsxs)(a.li,{children:["Define a database name and click on ",(0,n.jsx)(a.code,{children:"Create database"}),".\n",(0,n.jsx)(a.img,{alt:"add database name",src:t(81158).A+"",width:"1280",height:"497"})]}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"store-teradata-vantage-credentials-in-aws-secrets-manager",children:"Store Teradata Vantage credentials in AWS Secrets Manager"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["In AWS Secrets Manager, select ",(0,n.jsx)(a.code,{children:"Create new secret"}),".\n",(0,n.jsx)(a.img,{alt:"create secret",src:t(96965).A+"",width:"1491",height:"156"})]}),"\n",(0,n.jsxs)(a.li,{children:["The secret should be an ",(0,n.jsx)(a.code,{children:"Other type of secret"})," with the following keys and values according to your Teradata Vantage Instance:","\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"USER"}),"\n",(0,n.jsx)(a.li,{children:"PASSWORD"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.admonition,{type:"tip",children:(0,n.jsx)(a.p,{children:'In the case of ClearScape Analytics Experience, the user is always "demo_user," and the password is the one you defined when creating your ClearScape Analytics Experience environment.'})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"secret values",src:t(87758).A+"",width:"819",height:"744"})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Assign a name to the secret."}),"\n",(0,n.jsx)(a.li,{children:"The rest of the steps can be left with the default values."}),"\n",(0,n.jsx)(a.li,{children:"Create the secret."}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"create-an-aws-glue-service-role-to-assign-to-etl-jobs",children:"Create an AWS Glue Service Role to Assign to ETL Jobs"}),"\n",(0,n.jsx)(a.p,{children:"The role you create should have access to the typical permissions of a Glue Service Role, but also access to read the secret and S3 bucket you've created."}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"In AWS, go to the IAM service."}),"\n",(0,n.jsxs)(a.li,{children:["Under Access Management, select ",(0,n.jsx)(a.code,{children:"Roles"}),"."]}),"\n",(0,n.jsxs)(a.li,{children:["In roles, click on ",(0,n.jsx)(a.code,{children:"Create role"}),".\n",(0,n.jsx)(a.img,{alt:"create role",src:t(15761).A+"",width:"1234",height:"186"})]}),"\n",(0,n.jsxs)(a.li,{children:["In select trusted entity, select ",(0,n.jsx)(a.code,{children:"AWS service"})," and pick ",(0,n.jsx)(a.code,{children:"Glue"})," from the dropdown.\n",(0,n.jsx)(a.img,{alt:"role type",src:t(33754).A+"",width:"1244",height:"671"})]}),"\n",(0,n.jsxs)(a.li,{children:["In add permissions:","\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Search for ",(0,n.jsx)(a.code,{children:"AWSGlueServiceRole"}),"."]}),"\n",(0,n.jsx)(a.li,{children:"Click the related checkbox."}),"\n",(0,n.jsxs)(a.li,{children:["Search for ",(0,n.jsx)(a.code,{children:"SecretsManagerReadWrite"}),"."]}),"\n",(0,n.jsx)(a.li,{children:"Click the related checkbox."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["In Name, review, and create:","\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Define a name for your role.\n",(0,n.jsx)(a.img,{alt:"name role",src:t(34115).A+"",width:"1188",height:"756"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["Click on ",(0,n.jsx)(a.code,{children:"Create role"}),"."]}),"\n",(0,n.jsx)(a.li,{children:"Return to Access Management, Roles, and search for the role you've just created."}),"\n",(0,n.jsx)(a.li,{children:"Select your role."}),"\n",(0,n.jsxs)(a.li,{children:["Click on ",(0,n.jsx)(a.code,{children:"Add permissions"}),", then ",(0,n.jsx)(a.code,{children:"Create inline policy"}),"."]}),"\n",(0,n.jsxs)(a.li,{children:["Click on ",(0,n.jsx)(a.code,{children:"JSON"}),"."]}),"\n",(0,n.jsx)(a.li,{children:"In the Policy editor, paste the JSON object below, substituting the name of the bucket you've created."}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-json",children:'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "FullAccessToSpecificBucket",\n            "Effect": "Allow",\n            "Action": "s3:*",\n            "Resource": [1\n                "arn:aws:s3:::<bucket-name>",\n                "arn:aws:s3:::<bucket-name>/*"\n            ]\n        }\n    ]\n}\n'})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Click ",(0,n.jsx)(a.code,{children:"Next"}),".\n",(0,n.jsx)(a.img,{alt:"inline policy",src:t(14060).A+"",width:"1297",height:"742"})]}),"\n",(0,n.jsx)(a.li,{children:"Assign a name to your policy."}),"\n",(0,n.jsxs)(a.li,{children:["Click on ",(0,n.jsx)(a.code,{children:"Create policy"}),"."]}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"create-a-connection-to-a-teradata-vantage-instance-in-aws-glue",children:"Create a connection to a Teradata Vantage Instance in AWS Glue"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["In AWS Glue, select ",(0,n.jsx)(a.code,{children:"Data connections"}),".\n",(0,n.jsx)(a.img,{alt:"connection",src:t(78382).A+"",width:"1084",height:"784"})]}),"\n",(0,n.jsxs)(a.li,{children:["Under Connectors, select ",(0,n.jsx)(a.code,{children:"Create connection"}),"."]}),"\n",(0,n.jsxs)(a.li,{children:["Search for and select the Teradata Vantage data source.\n",(0,n.jsx)(a.img,{alt:"teradata type",src:t(3941).A+"",width:"1005",height:"382"})]}),"\n",(0,n.jsx)(a.li,{children:"In the dialog box, enter the URL of your Teradata Vantage instance in JDBC format."}),"\n"]}),"\n",(0,n.jsx)(a.admonition,{type:"tip",children:(0,n.jsxs)(a.p,{children:["In the case of ClearScape Analytics Experience, the URL follows the following structure:\n",(0,n.jsx)(a.code,{children:"jdbc:teradata://<URL Host>/DATABASE=demo_user,DBS_PORT=1025"})]})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Select the AWS Secret created in the previous step."}),"\n",(0,n.jsxs)(a.li,{children:["Name your connection and finish the creation process.\n",(0,n.jsx)(a.img,{alt:"connection configuration",src:t(54268).A+"",width:"818",height:"586"})]}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"create-an-aws-glue-job",children:"Create an AWS Glue Job"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["In AWS Glue, select ",(0,n.jsx)(a.code,{children:"ETL Jobs"})," and click on ",(0,n.jsx)(a.code,{children:"Script editor"}),".\n",(0,n.jsx)(a.img,{alt:"script editor creation",src:t(91348).A+"",width:"1549",height:"277"})]}),"\n",(0,n.jsxs)(a.li,{children:["Select ",(0,n.jsx)(a.code,{children:"Spark"})," as the engine and choose to start fresh.\n",(0,n.jsx)(a.img,{alt:"script editor type",src:t(71215).A+"",width:"837",height:"355"})]}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"draft-a-script-for-automated-ingestion-and-cataloging-of-teradata-vantage-data-into-amazon-s3",children:"Draft a script for automated ingestion and cataloging of Teradata Vantage data into Amazon S3"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Copy the following script into the editor.","\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["The script requires the following modifications:","\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Substitute the name of your S3 bucket."}),"\n",(0,n.jsx)(a.li,{children:"Substitute the name of your Glue catalog database."}),"\n",(0,n.jsx)(a.li,{children:"If you are not following the example in the guide, modify the database name and the tables to be ingested and cataloged."}),"\n",(0,n.jsx)(a.li,{children:"For cataloging purposes, only the first row of each table is ingested in the example. This query can be modified to ingest the whole table or to filter selected rows."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",metastring:', id="glue-script-first-run" role="emits-gtm-events"',children:'# Import section\nimport sys\nfrom awsglue.transforms import *\nfrom awsglue.utils import getResolvedOptions\nfrom pyspark.context import SparkContext\nfrom awsglue.context import GlueContext\nfrom awsglue.job import Job\nfrom pyspark.sql import SQLContext\n\n# PySpark Config Section\nargs = getResolvedOptions(sys.argv, ["JOB_NAME"])\nsc = SparkContext()\nglueContext = GlueContext(sc)\nspark = glueContext.spark_session\njob = Job(glueContext)\njob.init(args["JOB_NAME"], args)\n\n#ETL Job Parameters Section\n# Source database\ndatabase_name = "teddy_retailers_inventory"\n\n# Source tables\ntable_names = ["source_catalog","source_stock"]\n\n# Target S3 Bucket\ntarget_s3_bucket = "s3://<your-bucket-name>"\n\n#Target catalog database \ncatalog_database_name = "<your-catalog-database-name>" \n\n\n# Job function abstraction\ndef process_table(table_name, transformation_ctx_prefix, catalog_database, catalog_table_name):\n    dynamic_frame = glueContext.create_dynamic_frame.from_options(\n        connection_type="teradata",\n        connection_options={\n            "dbtable": table_name,\n            "connectionName": "Teradata connection default",\n            "query": f"SELECT TOP 1 * FROM {table_name}", # This line can be modified to ingest the full table or rows that fulfill an specific condition\n        },\n        transformation_ctx=transformation_ctx_prefix + "_read",\n    )\n\n    s3_sink = glueContext.getSink(\n        path=target_s3_bucket,\n        connection_type="s3",\n        updateBehavior="UPDATE_IN_DATABASE",\n        partitionKeys=[],\n        compression="snappy",\n        enableUpdateCatalog=True,\n        transformation_ctx=transformation_ctx_prefix + "_s3",\n    )\n    # Dynamically set catalog table name based on function parameter\n    s3_sink.setCatalogInfo(\n        catalogDatabase=catalog_database, catalogTableName=catalog_table_name\n    )\n    s3_sink.setFormat("csv")\n    s3_sink.writeFrame(dynamic_frame)\n\n\n# Job execution section\nfor table_name in table_names:\n    full_table_name = f"{database_name}.{table_name}"  \n    transformation_ctx_prefix = f"{database_name}_{table_name}"  \n    catalog_table_name = f"{table_name}_catalog"  \n    # Call your process_table function for each table\n    process_table(full_table_name, transformation_ctx_prefix, catalog_database_name, catalog_table_name)\n\njob.commit()\n'})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Assign a name to your script\n",(0,n.jsx)(a.img,{alt:"script in editor",src:t(5606).A+"",width:"1311",height:"758"})]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"In Job details, Basic properties:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Select the IAM role you created for the ETL job."}),"\n",(0,n.jsxs)(a.li,{children:['For testing, select "2" as the Requested number of workers, this is the minimum allowed.\n',(0,n.jsx)(a.img,{alt:"script configurations",src:t(15065).A+"",width:"617",height:"725"})]}),"\n",(0,n.jsxs)(a.li,{children:["In ",(0,n.jsx)(a.code,{children:"Advanced properties"}),", ",(0,n.jsx)(a.code,{children:"Connections"})," select your connection to Teradata Vantage."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.admonition,{type:"tip",children:(0,n.jsx)(a.p,{children:"The connection created must be referenced twice, once in the job configuration, once in the script itself."})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"script configuration connection",src:t(96208).A+"",width:"829",height:"532"})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Click on ",(0,n.jsx)(a.code,{children:"Save"}),"."]}),"\n",(0,n.jsxs)(a.li,{children:["Click on ",(0,n.jsx)(a.code,{children:"Run"}),".","\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"The ETL job takes a couple of minutes to complete, most of this time is related to starting the Spark cluster."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"checking-the-results",children:"Checking the Results"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"After the job is finished:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Go to Data Catalog, Databases."}),"\n",(0,n.jsx)(a.li,{children:"Click on the catalog database you created."}),"\n",(0,n.jsxs)(a.li,{children:["In this location, you will see the tables extracted and cataloged through your Glue ETL job.\n",(0,n.jsx)(a.img,{alt:"result tables",src:t(24381).A+"",width:"1295",height:"447"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsx)(a.p,{children:"All tables ingested are also present as compressed files in S3. Rarely, these files would be queried directly. Services such as AWS Athena can be used to query the files relying on the catalog metadata."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"summary",children:"Summary"}),"\n",(0,n.jsx)(a.p,{children:"In this quick start, we learned how to ingest and catalog data in Teradata Vantage to Amazon S3 with AWS Glue Scripts."}),"\n",(0,n.jsx)(a.h3,{id:"further-reading",children:"Further reading"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"/pr-preview/pr-150/quickstarts/manage-data/integrate-teradata-vantage-with-google-cloud-data-catalog",children:"Integrate Teradata Vantage with Google Cloud Data Catalog"})}),"\n"]}),"\n","\n",(0,n.jsx)(r.Ay,{})]})}function g(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},81008:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Buckets-1-898de68879a5ef1ffeec900337a1dca3.PNG"},46155:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Buckets-2-676aa2a38d845b652f97b395e8043163.PNG"},45538:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Buckets-3-12a07fc3c5b043f47096df1666b568a5.PNG"},69405:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Cat-1-4fc905b5ac49dc3b1e141c8426aad9e0.PNG"},81158:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Cat-2-30df5221aaee67adb25c6d90dc735e31.PNG"},78382:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Glue-1-598de7057f5a9d379aa5252a0da0580d.PNG"},3941:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Glue-2-8b424cc7304d19718c5a3c35d940f892.PNG"},54268:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Glue-3-7b0f1ee87f5c9899b751d37489859752.PNG"},91348:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Glue-script-1-24cb7e70f1de30c5fcaa52dc29d4b631.PNG"},71215:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Glue-script-2-e7f628836b7232063286bec34f25bc6c.PNG"},5606:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Glue-script-3-66e1374c8a98d95a489e0a0ec635aa2a.PNG"},15065:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Glue-script-4-5382e42dfa85e3ebb441a9d7fcd6a6ba.PNG"},96208:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Glue-script-5-07a9302e3014a8acfd9fd28a4e0303c2.PNG"},24381:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Results-cf1a1dd58c3e0a900b0c75e104d35f70.PNG"},15761:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Role-1-05d727aedab96ae96afdc6c47a1f0506.PNG"},33754:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Role-2-c0d5befbdb62b8a5e02e47ed0f43c2d5.PNG"},34115:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Role-3-075be68d4664c0cf1bd919bf4a65d41e.PNG"},14060:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Role-4-a6d9e85e6ccc0168bde6e195e1883d93.PNG"},96965:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/secret-1-8e65560fa45ff42c87cc7f2c5b91489f.PNG"},87758:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/secret-2-41c84a8725cae02d8c916ebe445d63ff.PNG"},28453:(e,a,t)=>{t.d(a,{R:()=>r,x:()=>c});var n=t(96540);const s={},i=n.createContext(s);function r(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);
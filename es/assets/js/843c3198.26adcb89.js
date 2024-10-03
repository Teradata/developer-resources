"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[6178],{69342:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>d,metadata:()=>u,toc:()=>h});var n=r(74848),t=r(28453);function i(e){return(0,n.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Df8VcbWW_BM?si=4e9F9b2j4diEaK_I",title:"Reproductor de v\xeddeo de YouTube",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0})}function o(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(i,{...e})}):i()}var s=r(56240),c=r(19365);const d={sidebar_position:9,author:"Janeth Graziani",email:"Janeth.graziani@teradata.com",page_last_update:"28 de febrero de 2024",description:"Utilice Terraform para administrar las canalizaciones de datos de Teradata en Airbyte mediante Terraform.",keywords:["Terraformar","Airbyte","Teradata Vantage","data engineering","ELT","automation","data integration","CI/CD","version control"]},l="Administre las canalizaciones de ELT como c\xf3digo con Terraform y Airbyte en Teradata Vantage",u={id:"manage-data/terraform-airbyte-provider",title:"Administre las canalizaciones de ELT como c\xf3digo con Terraform y Airbyte en Teradata Vantage",description:"Utilice Terraform para administrar las canalizaciones de datos de Teradata en Airbyte mediante Terraform.",source:"@site/i18n/es/docusaurus-plugin-content-docs-quickstarts/current/manage-data/terraform-airbyte-provider.md",sourceDirName:"manage-data",slug:"/manage-data/terraform-airbyte-provider",permalink:"/es/quickstarts/manage-data/terraform-airbyte-provider",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,author:"Janeth Graziani",email:"Janeth.graziani@teradata.com",page_last_update:"28 de febrero de 2024",description:"Utilice Terraform para administrar las canalizaciones de datos de Teradata en Airbyte mediante Terraform.",keywords:["Terraformar","Airbyte","Teradata Vantage","data engineering","ELT","automation","data integration","CI/CD","version control"]},sidebar:"tutorialSidebar",previous:{title:"Utilizar Airbyte para cargar datos de fuentes externas en Teradata Vantage",permalink:"/es/quickstarts/manage-data/use-airbyte-to-load-data-from-external-sources-to-teradata-vantage"},next:{title:"Transformar datos cargados con Airbyte mediante dbt",permalink:"/es/quickstarts/manage-data/transforming-external-data-loaded-via-airbyte-in-teradata-vantage-using-dbt"}},p={},h=[{value:"Informaci\xf3n general",id:"informaci\xf3n-general",level:3},{value:"Introducci\xf3n",id:"introducci\xf3n",level:3},{value:"Prerrequisitos",id:"prerrequisitos",level:3},{value:"Instalar Terraform",id:"instalar-terraform",level:3},{value:"Preparaci\xf3n del entorno",id:"preparaci\xf3n-del-entorno",level:3},{value:"Definir una canalizaci\xf3n de datos",id:"definir-una-canalizaci\xf3n-de-datos",level:3},{value:"Configuraci\xf3n del archivo variables.tf",id:"configuraci\xf3n-del-archivo-variablestf",level:3},{value:"Comandos de ejecuci\xf3n",id:"comandos-de-ejecuci\xf3n",level:3},{value:"Recursos adicionales",id:"recursos-adicionales",level:3}];function m(e){const a={a:"a",code:"code",h1:"h1",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"administre-las-canalizaciones-de-elt-como-c\xf3digo-con-terraform-y-airbyte-en-teradata-vantage",children:"Administre las canalizaciones de ELT como c\xf3digo con Terraform y Airbyte en Teradata Vantage"}),"\n",(0,n.jsx)(a.h3,{id:"informaci\xf3n-general",children:"Informaci\xf3n general"}),"\n",(0,n.jsx)(a.p,{children:"En este inicio r\xe1pido se explica c\xf3mo usar Terraform para administrar las canalizaciones de Airbyte como c\xf3digo. En lugar de realizar configuraciones manuales a trav\xe9s de la interfaz de usuario web, usaremos c\xf3digo para crear y administrar los recursos de Airbyte. El ejemplo proporcionado ilustra un flujo de datos de ELT b\xe1sico desde Google Sheets a Teradata Vantage mediante el proveedor Terraform de Airbyte."}),"\n",(0,n.jsx)(a.p,{children:"El proveedor Terraform de Airbyte est\xe1 disponible para usuarios de Airbyte Cloud, OSS y Self-Managed Enterprise."}),"\n",(0,n.jsx)(a.p,{children:"Vea esta explicaci\xf3n concisa sobre c\xf3mo funciona esta integraci\xf3n:"}),"\n",(0,n.jsx)(o,{}),"\n",(0,n.jsx)(a.h3,{id:"introducci\xf3n",children:"Introducci\xf3n"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"https://www.terraform.io",children:"Terraformar"})," es una herramienta de c\xf3digo abierto l\xedder en el espacio de la infraestructura como c\xf3digo (IaC). Permite el aprovisionamiento y la gesti\xf3n automatizados de infraestructura, plataformas en la nube y servicios a trav\xe9s de archivos de configuraci\xf3n, en lugar de una configuraci\xf3n manual. Terraform utiliza complementos, conocidos como proveedores de Terraform, para comunicarse con hosts de infraestructura, proveedores de nube, API y plataformas SaaS."]}),"\n",(0,n.jsxs)(a.p,{children:["Airbyte, la plataforma de integraci\xf3n de datos, tiene un proveedor de Terraform que se comunica directamente con ",(0,n.jsx)(a.a,{href:"https://reference.airbyte.com/reference/start",children:"API de Airbyte"}),". Esto permite a los ingenieros de datos administrar las configuraciones de Airbyte y aplicar control de versiones y buenas pr\xe1cticas de ingenier\xeda de datos dentro de sus procesos de ELT."]}),"\n",(0,n.jsx)(a.h3,{id:"prerrequisitos",children:"Prerrequisitos"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://airbyte.com/connectors/teradata-vantage",children:"Cuenta de Airbyte Cloud"}),". Comience con una prueba gratuita de 14 d\xedas que se inicia despu\xe9s de la primera sincronizaci\xf3n exitosa."]}),"\n"]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Genere una clave de API de Airbyte iniciando sesi\xf3n en el ",(0,n.jsx)(a.a,{href:"https://portal.airbyte.com",children:"portal para desarrolladores"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Instancia de Teradata Vantage. Necesitar\xe1 una base de datos ",(0,n.jsx)(a.code,{children:"Host"}),", ",(0,n.jsx)(a.code,{children:"Username"})," y ",(0,n.jsx)(a.code,{children:"Password"})," para la configuraci\xf3n de Terraform de Airbyte."]}),"\n"]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"/es/quickstarts/get-access-to-vantage/clearscape-analytics-experience/getting-started-with-csae",children:"Crear una instancia gratuita de Teradata en ClearScape Analytics Experience"})}),"\n"]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:["Datos de origen. Para fines de demostraci\xf3n, utilizaremos una ",(0,n.jsx)(a.a,{href:"https://docs.google.com/spreadsheets/d/1XNBYUw3p7xG6ptfwjChqZ-dNXbTuVwPi7ToQfYKgJIE/edit#gid=0",children:"muestra de Google Sheets"}),". Haga una copia de este en un espacio de trabajo personal de Google."]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"https://support.google.com/googleapi/answer/6158841?hl=en%5D=",children:"API de Google Cloud Platform habilitada para su cuenta personal o de organizaci\xf3n"}),". Deber\xe1 autenticar su cuenta de Google a trav\xe9s de OAuth o mediante el Autenticador de claves de cuenta de servicio. En este ejemplo, usamos ",(0,n.jsx)(a.a,{href:"https://cloud.google.com/iam/docs/keys-create-delete",children:"Autenticador de claves de cuenta de servicio"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"instalar-terraform",children:"Instalar Terraform"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Aplique los comandos correspondientes para instalar Terraform en su sistema operativo. Encontrar\xe1 opciones adicionales en el ",(0,n.jsx)(a.a,{href:"https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli",children:"sitio de Terraform"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsxs)(c.A,{value:"MacOS",label:"MacOS",default:!0,children:[(0,n.jsxs)(a.p,{children:['Primero, instale el "tap" de HashiCorp, un repositorio de todos los paquetes [Homebrew] (',(0,n.jsx)(a.a,{href:"https://brew.sh",children:"https://brew.sh"}),")."]}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"  brew tap hashicorp/tap\n"})}),(0,n.jsx)(a.p,{children:"A continuaci\xf3n, instale Terraform con hashicorp/tap/terraform."}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"  brew install hashicorp/tap/terraform\n"})})]}),(0,n.jsxs)(c.A,{value:"Windows",label:"Windows",children:[(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"https://chocolatey.org",children:"Chocolatey"})," es un sistema de gesti\xf3n de paquetes gratuito y de c\xf3digo abierto para Windows. Instale el paquete Terraform desde la l\xednea de comandos."]}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"  choco install terraform\n"})})]}),(0,n.jsx)(c.A,{value:"Linux",label:"Linux",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'wget -O- https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg\necho "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list\nsudo apt update && sudo apt install terraform \n'})})})]}),"\n",(0,n.jsx)(a.h3,{id:"preparaci\xf3n-del-entorno",children:"Preparaci\xf3n del entorno"}),"\n",(0,n.jsxs)(a.p,{children:["Prepare el entorno creando un directorio para la configuraci\xf3n de Terraform e inicialice dos archivos: ",(0,n.jsx)(a.code,{children:"main.tf"})," y ",(0,n.jsx)(a.code,{children:"variables.tf"}),"."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"mkdir terraform_airbyte\ncd terraform_airbyte\ntouch main.tf variables.tf\n"})}),"\n",(0,n.jsx)(a.h3,{id:"definir-una-canalizaci\xf3n-de-datos",children:"Definir una canalizaci\xf3n de datos"}),"\n",(0,n.jsxs)(a.p,{children:["Defina la fuente de datos, el destino y la conexi\xf3n dentro del archivo ",(0,n.jsx)(a.code,{children:"main.tf"}),". Abra el archivo ",(0,n.jsx)(a.code,{children:"main.tf"})," reci\xe9n creado en Visual Studio Code o en cualquier otro editor de c\xf3digo que elija."]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Si utiliza Visual Studio Code, instale ",(0,n.jsx)(a.a,{href:"https://marketplace.visualstudio.com/items?itemName=HashiCorp.terraform",children:"Extensiones de Terraform de HashiCorp"})," para agregar funciones de autocompletado y resaltado de sintaxis. Tambi\xe9n puede agregar ",(0,n.jsx)(a.a,{href:"https://marketplace.visualstudio.com/items?itemName=4ops.terraform",children:"Terraform de Anton Kuliko"})," para obtener compatibilidad con el lenguaje de configuraci\xf3n."]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Extensiones de Terraform en Visual Studio Code",src:r(13051).A+"",width:"3048",height:"768"})}),"\n",(0,n.jsx)(a.p,{children:"Complete el archivo main.tf con la plantilla proporcionada."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'# Provider Configuration\nterraform {\n  required_providers {\n    airbyte = {\n      source = "airbytehq/airbyte"\n      version = "0.4.1"  // Latest Version https://registry.terraform.io/providers/airbytehq/airbyte/latest\n    }\n  }\n}\nprovider "airbyte" {\n  // If running on Airbyte Cloud, generate & save the API key from https://portal.airbyte.com\n  bearer_auth = var.api_key\n}\n# Google Sheets Source Configuration\nresource "airbyte_source_google_sheets" "my_source_gsheets" {\n  configuration = {\n    source_type = "google-sheets"\n     credentials = {\n      service_account_key_authentication = {\n        service_account_info = var.google_private_key\n      }\n    }\n    names_conversion = true,\n    spreadsheet_id = var.spreadsheet_id\n  }\n  name = "Google Sheets"\n  workspace_id = var.workspace_id\n}\n# Teradata Vantage Destination Configuration\n# For optional parameters visit https://registry.terraform.io/providers/airbytehq/airbyte/latest/docs/resources/destination_teradata \nresource "airbyte_destination_teradata" "my_destination_teradata" {\n  configuration = {\n    host            = var.host\n    password        = var.password\n    schema          = "airbyte_td_two"\n    ssl             = false\n    ssl_mode = {\n      allow = {}\n    }\n    username = var.username\n  }\n  name          = "Teradata"\n  workspace_id  = var.workspace_id\n}\n# Connection Configuration \nresource "airbyte_connection" "googlesheets_teradata" {\n  name = "Google Sheets - Teradata"\n  source_id = airbyte_source_google_sheets.my_source_gsheets.source_id\n  destination_id = airbyte_destination_teradata.my_destination_teradata.destination_id\n    schedule = {\n      schedule_type = "cron" // "manual"\n      cron_expression = "0 15 * * * ?" # This sets the data sync to run every 15 minutes of the hour\n    }\n  }\n'})}),"\n",(0,n.jsx)(a.p,{children:"Tenga en cuenta que este ejemplo utiliza una expresi\xf3n cron para programar la transferencia de datos para que se ejecute cada 15 minutos despu\xe9s de la hora."}),"\n",(0,n.jsxs)(a.p,{children:["En nuestro archivo ",(0,n.jsx)(a.code,{children:"main.tf"})," hacemos referencia a las variables que se encuentran en el archivo ",(0,n.jsx)(a.code,{children:"variables.tf"}),", incluidas la clave API, el ID del espacio de trabajo, el ID de Google Sheets, la clave privada de Google y las credenciales de Teradata Vantage. Copie la siguiente plantilla en el archivo ",(0,n.jsx)(a.code,{children:"variables.tf"})," y compl\xe9tela con los valores de configuraci\xf3n adecuados en el atributo ",(0,n.jsx)(a.code,{children:"default"}),"."]}),"\n",(0,n.jsx)(a.h3,{id:"configuraci\xf3n-del-archivo-variablestf",children:"Configuraci\xf3n del archivo variables.tf"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'#log in to https://portal.airbyte.com generate, save and populate the variable with an API key\nvariable "api_key" {\n    type = string\n    default = ""\n}\n#workspace_id is found in the url to the Airbyte Cloud account https://cloud.airbyte.com/workspaces/<workspace_id>/settings/dbt-cloud \nvariable "workspace_id" {\n    type = string\n    default = ""\n} \n\n#Google spreadsheet id and Google private key\nvariable "spreadsheet_id" {\n    type = string\n    default = ""\n}\nvariable "google_private_key" {\n  type = string\n  default =  ""\n}\n# Teradata Vantage connection credentials\nvariable "host" {\n  type = string\n  default = ""\n  }\nvariable "username" {\n  type = string\n  default = "demo_user"\n  }\n  variable "password" {\n  type = string\n  default = ""\n  }\n'})}),"\n",(0,n.jsx)(a.h3,{id:"comandos-de-ejecuci\xf3n",children:"Comandos de ejecuci\xf3n"}),"\n",(0,n.jsxs)(a.p,{children:["Ejecute el complemento del proveedor desplegable ",(0,n.jsx)(a.code,{children:"terraform init"})," desde la p\xe1gina del proveedor de Terraform e inicialice un directorio de Terraform que funcione."]}),"\n",(0,n.jsx)(a.p,{children:"Este comando solo debe ejecutarse despu\xe9s de escribir una nueva configuraci\xf3n de Terraform o clonar una existente desde el control de versiones."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Inicializar Terraform con el comando terraform init",src:r(29243).A+"",width:"2982",height:"2106"})}),"\n",(0,n.jsxs)(a.p,{children:["Ejecute ",(0,n.jsx)(a.code,{children:"terraform plan"})," para mostrar el plan de ejecuci\xf3n que Terraform utilizar\xe1 para crear recursos y realizar modificaciones en la infraestructura."]}),"\n",(0,n.jsx)(a.p,{children:"Para este ejemplo se crea un plan para 3 nuevos recursos:"}),"\n",(0,n.jsx)(a.p,{children:"Conexi\xf3n: # Se crear\xe1 airbyte_connection.googlesheets_teradata"}),"\n",(0,n.jsx)(a.p,{children:"Destino: # Se crear\xe1 airbyte_connection.googlesheets_teradata"}),"\n",(0,n.jsx)(a.p,{children:"Fuente: # Se crear\xe1 airbyte_source_google_sheets.my_source_gsheets"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Ver el plan de ejecuci\xf3n de Terraform con el comando terraform plan",src:r(57224).A+"",width:"3142",height:"2122"})}),"\n",(0,n.jsxs)(a.p,{children:["Ejecute ",(0,n.jsx)(a.code,{children:"terraform apply"})," y ",(0,n.jsx)(a.code,{children:"yes"})," para generar un plan y llevarlo a cabo."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Aplicar el plan de Terraform con el comando terraform apply",src:r(41253).A+"",width:"3114",height:"2114"})}),"\n",(0,n.jsxs)(a.p,{children:["El archivo ",(0,n.jsx)(a.code,{children:"terraform.tfstate"})," se crea despu\xe9s de ejecutar ",(0,n.jsx)(a.code,{children:"terraform apply"})," por primera vez. Este archivo rastrea el estado de todas las fuentes, destinos y conexiones administradas por Terraform. Para ejecuciones posteriores de ",(0,n.jsx)(a.code,{children:"Terraform apply"}),", Terraform compara el c\xf3digo del archivo ",(0,n.jsx)(a.code,{children:"main.tf"})," con el c\xf3digo almacenado en el archivo ",(0,n.jsx)(a.code,{children:"tfstate"}),". Si se agregan o eliminan recursos en ",(0,n.jsx)(a.code,{children:"main.tf"}),", Terraform actualiza autom\xe1ticamente tanto la implementaci\xf3n como el archivo ",(0,n.jsx)(a.code,{children:".tfstate"})," seg\xfan el momento espec\xedfico de la implementaci\xf3n. No modifique este archivo manualmente."]}),"\n",(0,n.jsx)(a.p,{children:"Ahora dispone de una fuente, un destino y una conexi\xf3n en Airbyte Cloud creados y administrados a trav\xe9s de Terraform."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Conexi\xf3n de Airbyte en la interfaz de usuario de Airbyte Cloud",src:r(28103).A+"",width:"1436",height:"354"})}),"\n",(0,n.jsx)(a.h3,{id:"recursos-adicionales",children:"Recursos adicionales"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"/es/quickstarts/manage-data/use-airbyte-to-load-data-from-external-sources-to-teradata-vantage",children:"Utilizar Airbyte para cargar datos de fuentes externas en Teradata Vantage"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"/es/quickstarts/manage-data/transforming-external-data-loaded-via-airbyte-in-teradata-vantage-using-dbt",children:"Transformar datos cargados con Airbyte mediante dbt"})}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.a,{href:"https://reference.airbyte.com/reference/createsource",children:"documentaci\xf3n de referencia de la API de Airbyte"}),"."]}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://registry.terraform.io/providers/airbytehq/airbyte/latest/docs/resources/destination_teradata#example-usage",children:"Documentaci\xf3n del proveedor de Airbyte de Terraform"})}),"\n"]})]})}function f(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},19365:(e,a,r)=>{r.d(a,{A:()=>o});r(96540);var n=r(34164);const t={tabItem:"tabItem_Ymn6"};var i=r(74848);function o(e){var a=e.children,r=e.hidden,o=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(t.tabItem,o),hidden:r,children:a})}},56240:(e,a,r)=>{r.d(a,{A:()=>y});var n=r(96540),t=r(34164),i=r(23104),o=r(56347),s=r(205),c=r(57485);var d=r(89466);function l(e){var a,r;return null!=(a=null==(r=n.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,n.isValidElement)(e)&&((a=e.props)&&"object"==typeof a&&"value"in a))return e;var a;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?a:[]}function u(e){var a=e.values,r=e.children;return(0,n.useMemo)((function(){var e=null!=a?a:function(e){return l(e).map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes,default:a.default}}))}(r);return function(e){var a,r,n=(void 0===(r=function(e,a){return e.value===a.value})&&(r=function(e,a){return e===a}),(a=e).filter((function(e,n){return a.findIndex((function(a){return r(a,e)}))!==n})));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[a,r])}function p(e){var a=e.value;return e.tabValues.some((function(e){return e.value===a}))}function h(e){var a=e.queryString,r=void 0!==a&&a,t=e.groupId,i=(0,o.W6)(),s=function(e){var a=e.queryString,r=void 0!==a&&a,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:t});return[(0,c.aZ)(s),(0,n.useCallback)((function(e){if(s){var a=new URLSearchParams(i.location.search);a.set(s,e),i.replace(Object.assign({},i.location,{search:a.toString()}))}}),[s,i])]}function m(e){var a,r,t,i,o=e.defaultValue,c=e.queryString,l=void 0!==c&&c,m=e.groupId,f=u(e),g=(0,n.useState)((function(){return function(e){var a,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var t=null!=(a=n.find((function(e){return e.default})))?a:n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:o,tabValues:f})})),b=g[0],v=g[1],x=h({queryString:l,groupId:m}),j=x[0],y=x[1],T=(a=function(e){return e?"docusaurus.tab."+e:null}({groupId:m}.groupId),r=(0,d.Dv)(a),t=r[0],i=r[1],[t,(0,n.useCallback)((function(e){a&&i.set(e)}),[a,i])]),_=T[0],A=T[1],w=function(){var e=null!=j?j:_;return p({value:e,tabValues:f})?e:null}();return(0,s.A)((function(){w&&v(w)}),[w]),{selectedValue:b,selectValue:(0,n.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),A(e)}),[y,A,f]),tabValues:f}}var f=r(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(74848);function v(e){var a=e.className,r=e.block,n=e.selectedValue,o=e.selectValue,s=e.tabValues,c=[],d=(0,i.a_)().blockElementScrollPositionUntilNextRender,l=function(e){var a=e.currentTarget,r=c.indexOf(a),t=s[r].value;t!==n&&(d(a),o(t))},u=function(e){var a,r=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":var n,t=c.indexOf(e.currentTarget)+1;r=null!=(n=c[t])?n:c[0];break;case"ArrowLeft":var i,o=c.indexOf(e.currentTarget)-1;r=null!=(i=c[o])?i:c[c.length-1]}null==(a=r)||a.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},a),children:s.map((function(e){var a=e.value,r=e.label,i=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:function(e){return c.push(e)},onKeyDown:u,onClick:l},i,{className:(0,t.A)("tabs__item",g.tabItem,null==i?void 0:i.className,{"tabs__item--active":n===a}),children:null!=r?r:a}),a)}))})}function x(e){var a=e.lazy,r=e.children,t=e.selectedValue,i=(Array.isArray(r)?r:[r]).filter(Boolean);if(a){var o=i.find((function(e){return e.props.value===t}));return o?(0,n.cloneElement)(o,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map((function(e,a){return(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==t})}))})}function j(e){var a=m(e);return(0,b.jsxs)("div",{className:(0,t.A)("tabs-container",g.tabList),children:[(0,b.jsx)(v,Object.assign({},e,a)),(0,b.jsx)(x,Object.assign({},e,a))]})}function y(e){var a=(0,f.A)();return(0,b.jsx)(j,Object.assign({},e,{children:l(e.children)}),String(a))}},28103:(e,a,r)=>{r.d(a,{A:()=>n});const n=r.p+"assets/images/airbyteconnection-3a220f634814b2764e39ba96d5206e75.png"},13051:(e,a,r)=>{r.d(a,{A:()=>n});const n=r.p+"assets/images/extensions-8ebc769b586d0c7688fb4225093a933b.png"},41253:(e,a,r)=>{r.d(a,{A:()=>n});const n=r.p+"assets/images/terraformapply-533f60b2d2a687ef55603759188c4785.png"},29243:(e,a,r)=>{r.d(a,{A:()=>n});const n=r.p+"assets/images/terraforminit-5a8d66ce341574b351bf3db2fc21f1ff.png"},57224:(e,a,r)=>{r.d(a,{A:()=>n});const n=r.p+"assets/images/terraformplan-48302b763a5c6db551ad5db88d9b2acc.png"},28453:(e,a,r)=>{r.d(a,{R:()=>o,x:()=>s});var n=r(96540);const t={},i=n.createContext(t);function o(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);
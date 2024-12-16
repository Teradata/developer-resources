---
sidebar_position: 17
author: Wenjie Tehan
email: wenjie.tehan@teradata.com
page_last_update: 14 de febrero de 2022
description: Integrar Teradata Vantage con Google Cloud Data Catalog.
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics, google cloud, google cloud data catalog.]
---

# Integrar Teradata Vantage con Google Cloud Data Catalog

### Información general

En este artículo, se describe el proceso para conectar Teradata Vantage con Google Cloud Data Catalog mediante el [Conector de Teradata para Data Catalog en GitHub](https://github.com/GoogleCloudPlatform/datacatalog-connectors-rdbms/tree/master/google-datacatalog-teradata-connector) y, luego, explorar los metadatos de las tablas de Vantage a través de Data Catalog.

![Diagrama Descripción generada automáticamente](../cloud-guides/images/integrate-teradata-vantage-with-google-cloud-data-catalog/image2.png)

* Extraer: conéctese a Teradata Vantage y recupere todos los metadatos disponibles
* Preparar: transforme los metadatos en entidades de Data Catalog y cree etiquetas
* Ingerir: envíe las entidades de Data Catalog al proyecto de Google Cloud

### Acerca de Google Cloud Data Catalog

Google Cloud Data Catalog es un servicio de gestión de metadatos y descubrimiento de datos totalmente gestionado. Data Catalog puede catalogar los metadatos nativos de los activos de datos. Data Catalog no tiene servidor y proporciona un catálogo central para capturar metadatos técnicos y comerciales en un formato estructurado.

### Acerca de Teradata Vantage

Vantage es la plataforma en la nube moderna que unifica almacenes de datos, lagos de datos y análisis en un único ecosistema conectado.

Vantage combina análisis descriptivos, predictivos y prescriptivos, toma de decisiones autónoma, funciones de aprendizaje automático y herramientas de visualización en una plataforma unificada e integrada que descubre inteligencia empresarial en tiempo real a escala, sin importar dónde residan los datos.

Vantage permite a las empresas iniciar computación o almacenamiento a pequeña escala y de manera elástica, pagando solo por lo que usan, aprovechando almacenes de objetos de bajo coste e integrando sus cargas de trabajo analíticas.

Vantage es compatible con R, Python, Teradata Studio y cualquier otra herramienta basada en SQL. Puede implementar Vantage en nubes públicas, en las instalaciones, en una infraestructura optimizada o básica, o como servicio.

Consulte la [documentación](https://docs.teradata.com/home) para obtener más información sobre Teradata Vantage.

### Prerrequisitos

* Acceso a una instancia de Teradata Vantage.

* Un [**cuenta de servicio de Google**](https://support.google.com/accounts/answer/27441?hl=en) con rol de administrador del catálogo de datos
* Un [**proyecto de consola en la nube creado**](https://cloud.google.com/resource-manager/docs/creating-managing-projects) para tu cuenta (es decir, partner-integration-lab)
* Facturación habilitada
* SDK de Google Cloud [Instalado](https://cloud.google.com/sdk/docs/install) e [inicializado](https://cloud.google.com/sdk/docs/initializing)
* [Python](https://www.python.org/downloads/) Instalado
* [Pip](https://pip.pypa.io/en/stable/installation/) Instalado

### Procedimiento

1. Habilite las API de Data Catalog
2. Instalar el conector de Data Catalog de Teradata
3. Ejecutar
4. Explorar los metadatos de Teradata Vantage con Data Catalog

### Habilitar la API de Data Catalog

* Inicie sesión en la consola de [Google](http://console.cloud.google.com/), elija **API y servicios** en el menú de navegación y, posteriormente, haga clic en _Biblioteca_. Asegúrese de que su proyecto esté seleccionado en la barra de menús superior.

  ![Interfaz gráfica de usuario](../cloud-guides/images/integrate-teradata-vantage-with-google-cloud-data-catalog/image3.png)
* Ponga _Data Catalog_ en el cuadro de búsqueda y haga clic en **API de Google Cloud Data Catalog**, haga clic en **ENABLE**

  ![Interfaz gráfica de usuario](../cloud-guides/images/integrate-teradata-vantage-with-google-cloud-data-catalog/image4.png)

### Instalar el conector de Data Catalog de Teradata

Hay un conector de Data Catalog de Teradata disponible en [GitHub](https://github.com/GoogleCloudPlatform/datacatalog-connectors-rdbms/tree/master/google-datacatalog-teradata-connector). Este conector está escrito en Python.

* Ejecute el siguiente comando para autorizar a gcloud a acceder a Cloud Platform con las credenciales de usuario de Google.

  ```bash 
  gcloud auth login
  ```
* Elija su cuenta de Google cuando se abra la página de inicio de sesión de Google y haga clic en _Permitir_ en la página siguiente.
* A continuación, configure el proyecto predeterminado si aún no lo ha hecho

  ```bash
  gcloud config set project &lt;project id>
  ```

### Instalar virtualenv

Le recomendamos instalar el conector de Data Catalog de Teradata en un entorno Python aislado. Para ello, instale primero [virtualenv](https://virtualenv.pypa.io/en/latest/):

* **Windows**

  Ejecute en Powershell como administrador:
  ``` bash
  pip install virtualenv
  virtualenv --python python3.6 &lt;your-env>
  &lt;your-env>\Scripts\activate
  ```
* **MacOS**

  ``` bash , role="content-editable emits-gtm-events"
  pip install virtualenv
  virtualenv --python python3.6 &lt;your-env>
  source &lt;your-env>/bin/activate
  ```
* **Linux**

  ``` bash , role="content-editable emits-gtm-events"
  pip install virtualenv
  virtualenv --python python3.6 &lt;your-env>
  source &lt;your-env>/bin/activate
  ```

#### Instalar el conector de Data Catalog en Teradata

* **Windows**

  ``` bash
  pip.exe install google-datacatalog-teradata-connector
  ```
* **MacOS**

  ``` bash , role="content-editable emits-gtm-events"
  pip install google-datacatalog-teradata-connector
  ```
* **Linux**

  ``` bash , role="content-editable emits-gtm-events"
  pip install google-datacatalog-teradata-connector
  ```

### Establecer variables de entorno

``` bash , id="gcp_env_var", role="content-editable emits-gtm-events"
export GOOGLE_APPLICATION_CREDENTIALS=&lt;google_credentials_file>
export TERADATA2DC_DATACATALOG_PROJECT_ID=&lt;google_cloud_project_id>
export TERADATA2DC_DATACATALOG_LOCATION_ID=&lt;google_cloud_location_id>
export TERADATA2DC_TERADATA_SERVER=&lt;teradata_server>
export TERADATA2DC_TERADATA_USERNAME=&lt;teradata_username>
export TERADATA2DC_TERADATA_PASSWORD=&lt;teradata_password>
```

Donde `<google_credential_file>` es la clave de su cuenta de servicio (archivo json).

### Ejecutar

Ejecute el comando `google-datacatalog-teradata-connector` para establecer el punto de entrada a la base de datos Vantage.

``` bash , id="gcp_data_catalog_first_run" role="content-editable emits-gtm-events"
google-datacatalog-teradata-connector \
  --datacatalog-project-id=$TERADATA2DC_DATACATALOG_PROJECT_ID \
  --datacatalog-location-id=$TERADATA2DC_DATACATALOG_LOCATION_ID \
  --teradata-host=$TERADATA2DC_TERADATA_SERVER \
  --teradata-user=$TERADATA2DC_TERADATA_USERNAME \
  --teradata-pass=$TERADATA2DC_TERADATA_PASSWORD
```

Ejemplo de salida del comando google-datacatalog-teradata-connector:

```
INFO:root:
==============Starting CLI===============
INFO:root:This SQL connector does not implement the user defined datacatalog-entry-resource-url-prefix
INFO:root:This SQL connector uses the default entry resoure URL

============Start teradata-to-datacatalog===========

==============Scrape metadata===============
INFO:root:Scrapping metadata from connection_args

1 table containers ready to be ingested...

==============Prepare metadata===============

--> database: Gcpuser
37 tables ready to be ingested...

==============Ingest metadata===============

DEBUG:google.auth._default:Checking /Users/Teradata/Apps/Cloud/GCP/teradata2dc-credentials.json for explicit credentials as part of auth process...
INFO:root:Starting to clean up the catalog...
DEBUG:google.auth.transport.requests:Making request: POST https://oauth2.googleapis.com/token
DEBUG:urllib3.connectionpool:Starting new HTTPS connection (1): oauth2.googleapis.com:443
DEBUG:urllib3.connectionpool:https://oauth2.googleapis.com:443 "POST /token HTTP/1.1" 200 None
INFO:root:0 entries that match the search query exist in Data Catalog!
INFO:root:Looking for entries to be deleted...
INFO:root:0 entries will be deleted.

Starting to ingest custom metadata...

DEBUG:google.auth._default:Checking /Users/Teradata/Apps/Cloud/GCP/teradata2dc-credentials.json for explicit credentials as part of auth process...
INFO:root:Starting the ingestion flow...
DEBUG:google.auth.transport.requests:Making request: POST https://oauth2.googleapis.com/token
DEBUG:urllib3.connectionpool:Starting new HTTPS connection (1): oauth2.googleapis.com:443
DEBUG:urllib3.connectionpool:https://oauth2.googleapis.com:443 "POST /token HTTP/1.1" 200 None
INFO:root:Tag Template created: projects/partner-integration-lab/locations/us-west1/tagTemplates/teradata_database_metadata
INFO:root:Tag Template created: projects/partner-integration-lab/locations/us-west1/tagTemplates/teradata_table_metadata
INFO:root:Tag Template created: projects/partner-integration-lab/locations/us-west1/tagTemplates/teradata_column_metadata
INFO:root:Entry Group created: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata
INFO:root:1/38
INFO:root:Entry does not exist: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata/entries/gcpuser
INFO:root:Entry created: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata/entries/gcpuser
INFO:root: ^ [database] 34.105.107.155/gcpuser
INFO:root:Starting the upsert tags step
INFO:root:Processing Tag from Template: projects/partner-integration-lab/locations/us-west1/tagTemplates/teradata_database_metadata ...
INFO:root:Tag created: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata/entries/gcpuser/tags/CWHNiGQeQmPT
INFO:root:2/38
INFO:root:Entry does not exist: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata/entries/gcpuser_Categories
INFO:root:Entry created: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata/entries/gcpuser_Categories
INFO:root: ^ [table] 34.105.107.155/gcpuser/Categories
INFO:root:Starting the upsert tags step
INFO:root:Processing Tag from Template: projects/partner-integration-lab/locations/us-west1/tagTemplates/teradata_table_metadata ...
INFO:root:Tag created: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata/entries/gcpuser_Categories/tags/Ceij5G9t915o
INFO:root:38/38
INFO:root:Entry does not exist: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata/entries/gcpuser_tablesv_instantiated_latest
INFO:root:Entry created: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata/entries/gcpuser_tablesv_instantiated_latest
INFO:root: ^ [table] 34.105.107.155/gcpuser/tablesv_instantiated_latest
INFO:root:Starting the upsert tags step
INFO:root:Processing Tag from Template: projects/partner-integration-lab/locations/us-west1/tagTemplates/teradata_table_metadata ...
INFO:root:Tag created: projects/partner-integration-lab/locations/us-west1/entryGroups/teradata/entries/gcpuser_tablesv_instantiated_latest/tags/Ceij5G9t915o
INFO:root:
============End teradata-to-datacatalog============
```

### Explorar los metadatos de Teradata Vantage con Data Catalog

* Vaya a la consola de [Data Catalog](https://console.cloud.google.com/datacatalog), haga clic en el proyecto (es decir, partner-integration-lab) en **Proyectos**. Las tablas de Teradata se muestran en el panel derecho.

  ![Interfaz gráfica de usuario](../cloud-guides/images/integrate-teradata-vantage-with-google-cloud-data-catalog/image5.png)
* Haga clic en la tabla que le interese (es decir, CITY_LEVEL_TRANS) y verá los metadatos sobre esta tabla:

  ![Interfaz gráfica de usuario](../cloud-guides/images/integrate-teradata-vantage-with-google-cloud-data-catalog/image6.png)

### Limpieza (opcional)

* Limpie los metadatos de Data Catalog. Para ello, copie https://github.com/GoogleCloudPlatform/datacatalog-connectors-rdbms/blob/master/google-datacatalog-teradata-connector/tools/cleanup_datacatalog.py en el directorio local.
* Cambie el directorio al lugar donde está el archivo y luego ejecute el siguiente comando:

  ``` bash , role="content-editable emits-gtm-events"
  python cleanup_datacatalog.py --datacatalog-project-ids=$TERADATA2DC_DATACATALOG_PROJECT_ID
  ```

---
author: Wenjie Tehan
email: wenjie.tehan@teradata.com
page_last_update: February 14th, 2022
description: Integrate Teradata Vantage with Google Cloud Data Catalog.
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics, google cloud, google cloud data catalog.]
---

# Integrate Teradata Vantage with Google Cloud Data Catalog

### Overview

This article describes the process to connect Teradata Vantage with Google Cloud Data Catalog using the [Data Catalog Teradata Connector on GitHub](https://github.com/GoogleCloudPlatform/datacatalog-connectors-rdbms/tree/master/google-datacatalog-teradata-connector), and then explore the metadata of the Vantage tables via Data Catalog.

![Diagram Description automatically generated](./images/integrate-teradata-vantage-with-google-cloud-data-catalog/image2.png)

* Scrape: Connect to Teradata Vantage and retrieve all the available metadata
* Prepare: Transform metadata in Data Catalog entities and create Tags
* Ingest: Send the Data Catalog entities to the Google Cloud project

### About Google Cloud Data Catalog

Google Cloud Data Catalog is a fully managed data discovery and metadata management service. Data Catalog can catalog the native metadata on data assets. Data Catalog is serverless, and provides a central catalog to capture both technical metadata as well as business metadata in a structured format.

### About Teradata Vantage

Vantage is the modern cloud platform that unifies data warehouses, data lakes, and analytics into a single connected ecosystem.

Vantage combines descriptive, predictive, prescriptive analytics, autonomous decision-making, ML functions, and visualization tools into a unified, integrated platform that uncovers real-time business intelligence at scale, no matter where the data resides.

Vantage enables companies to start small and elastically scale compute or storage, paying only for what they use, harnessing low-cost object stores and integrating their analytic workloads.

Vantage supports R, Python, Teradata Studio, and any other SQL-based tools. You can deploy Vantage across public clouds, on-premises, on optimized or commodity infrastructure, or as-a-service.

See the [documentation](https://docs.teradata.com/home) for more information on Teradata Vantage.

### Prerequisites

* Access to a Teradata Vantage instance.

* A **[Google Service Account](https://support.google.com/accounts/answer/27441?hl=en) **with Data Catalog Admin role
* A [**Cloud Console Project created**](https://cloud.google.com/resource-manager/docs/creating-managing-projects) for your account (i.e. partner-integration-lab)
* Billing enabled
* Google Cloud SDK [installed](https://cloud.google.com/sdk/docs/install) and [initialized](https://cloud.google.com/sdk/docs/initializing)
* [Python](https://www.python.org/downloads/) installed
* [Pip](https://pip.pypa.io/en/stable/installation/) installed

### Procedure

1. Enable Data Catalog APIs
2. Install Teradata Data Catalog Connector
3. Run
4. Explore Teradata Vantage metadata with Data Catalog

### Enable Data Catalog API

* Logon to [Google](http://console.cloud.google.com/) console, choose **APIs & Services** from the Navigation menu, then click on _Library_. Make sure your project is selected on the top menu bar.

  ![Graphical user interface](./images/integrate-teradata-vantage-with-google-cloud-data-catalog/image3.png)
* Put _Data Catalog_ in the search box and click on **Google Cloud Data Catalog API**, click **ENABLE**

  ![Graphical user interface](./images/integrate-teradata-vantage-with-google-cloud-data-catalog/image4.png)

### Install Teradata Data Catalog Connector

A Teradata Data Catalog connector is available on [GitHub](https://github.com/GoogleCloudPlatform/datacatalog-connectors-rdbms/tree/master/google-datacatalog-teradata-connector). This connector is written in Python.

* Run following command to authorize gcloud to access the Cloud Platform with Google user credentials.

  ``` bash -
  gcloud auth login
  ```
* Choose your Google account when the Google login page opens up and click _Allow_ on the next page.
* Next, set up default project if you haven’t already done so

  ``` bash
  gcloud config set project &lt;project id>
  ```

### Install virtualenv

We recommend you install the Teradata Data Catalog Connector in an isolated Python environment. To do so, install [virtualenv](https://virtualenv.pypa.io/en/latest/) first:

* **Windows**

  Run in Powershell as Administrator:
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

#### Install Data Catalog Teradata Connector

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

### Set environment variables

``` bash , id="gcp_env_var", role="content-editable emits-gtm-events"
export GOOGLE_APPLICATION_CREDENTIALS=&lt;google_credentials_file>
export TERADATA2DC_DATACATALOG_PROJECT_ID=&lt;google_cloud_project_id>
export TERADATA2DC_DATACATALOG_LOCATION_ID=&lt;google_cloud_location_id>
export TERADATA2DC_TERADATA_SERVER=&lt;teradata_server>
export TERADATA2DC_TERADATA_USERNAME=&lt;teradata_username>
export TERADATA2DC_TERADATA_PASSWORD=&lt;teradata_password>
```

Where `<google_credential_file>` is the key for your service account (json file).

### Run

Execute `google-datacatalog-teradata-connector` command to establish entry point to Vantage database.

``` bash , id="gcp_data_catalog_first_run" role="content-editable emits-gtm-events"
google-datacatalog-teradata-connector \
  --datacatalog-project-id=$TERADATA2DC_DATACATALOG_PROJECT_ID \
  --datacatalog-location-id=$TERADATA2DC_DATACATALOG_LOCATION_ID \
  --teradata-host=$TERADATA2DC_TERADATA_SERVER \
  --teradata-user=$TERADATA2DC_TERADATA_USERNAME \
  --teradata-pass=$TERADATA2DC_TERADATA_PASSWORD
```

Sample output from the google-datacatalog-teradata-connector command:

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

### Explore Teradata Vantage metadata with Data Catalog

* Go to [Data Catalog](https://console.cloud.google.com/datacatalog) console, click on the project (i.e. partner-integration-lab) under **Projects**. The Teradata tables are showing on the right panel.

  ![Graphical user interface](./images/integrate-teradata-vantage-with-google-cloud-data-catalog/image5.png)
* Click on the table to your interest (i.e. CITY_LEVEL_TRANS), and you’ll see the metadata about this table:

  ![Graphical user interface](./images/integrate-teradata-vantage-with-google-cloud-data-catalog/image6.png)

### Cleanup (optional)

* Clean up metadata from Data Catalog. To do that, copy https://github.com/GoogleCloudPlatform/datacatalog-connectors-rdbms/blob/master/google-datacatalog-teradata-connector/tools/cleanup_datacatalog.py to local directory.
* Change directory to where the file is and then run following command:

  ``` bash , role="content-editable emits-gtm-events"
  python cleanup_datacatalog.py --datacatalog-project-ids=$TERADATA2DC_DATACATALOG_PROJECT_ID
  ```

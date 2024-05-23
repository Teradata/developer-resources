---
author: Rupal Shah
email: rupal.shah@teradata.com
page_last_update: February 14th, 2022
description: Connect Azure Data Share to Teradata Vantage.
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, data cloud, data sharing]
---

# Connect Azure Data Share to Teradata Vantage

### Overview

This article describes the process to share an Azure Blob Storage dataset from one user to another using Azure Data Share service and then query it with Teradata Vantage leveraging Native Object Store (NOS) capability. We will create and use a storage account and data share account for both users.

This is a diagram of the workflow.

![](./images/connect-azure-data-share-to-teradata-vantage/image2.png)


### About Azure Data Share

[Azure Data Share](https://docs.microsoft.com/en-us/azure/data-share/overview) enables organizations to simply and securely share data with multiple customers and partners. Both the data provider and data consumer must have an Azure subscription to share and receive data. Azure Data Share currently offers snapshot-based sharing and in-place sharing. Today, Azure Data Share [supported data stores](https://docs.microsoft.com/en-us/azure/data-share/supported-data-stores) include Azure Blob Storage, Azure Data Lake Storage Gen1 and Gen2, Azure SQL Database, Azure Synapse Analytics and Azure Data Explorer. Once a dataset share has been sent using Azure Data Share, the data consumer is able to receive that data in a data store of their choice like Azure Blob Storage and then use Teradata Vantage to explore and analyze the data.

For more information see [documentation](https://docs.microsoft.com/en-us/azure/data-share).

### About Teradata Vantage

Vantage is the modern cloud platform that unifies data warehouses, data lakes, and analytics into a single connected ecosystem.

Vantage combines descriptive, predictive, prescriptive analytics, autonomous decision-making, ML functions, and visualization tools into a unified, integrated platform that uncovers real-time business intelligence at scale, no matter where the data resides.

Vantage enables companies to start small and elastically scale compute or storage, paying only for what they use, harnessing low-cost object stores and integrating their analytic workloads.

Vantage supports R, Python, Teradata Studio, and any other SQL-based tools. You can deploy Vantage across public clouds, on-premises, on optimized or commodity infrastructure, or as-a-service.

Teradata Vantage Native Object Store (NOS) can be used to explore data in external object stores, like Azure Blob Storage, using standard SQL. No special object storage-side compute infrastructure is required to use NOS. You can explore data located in an Blob Storage container by simply creating a NOS table definition that points to your container. With NOS, you can quickly import data from Blob Storage or even join it other tables in the database.

Alternatively, the Teradata Parallel Transporter (TPT) utility can be used to import data from Blob Storage to Teradata Vantage in bulk fashion. Once loaded, data can be efficiently queried within Vantage.

For more information see [*documentation*](https://docs.teradata.com/home).

### Prerequisites

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.md'

* Access to a Teradata Vantage instance.
  <ClearscapeDocsNote />
* An Azure account. You can start with a [free account](https://azure.microsoft.com/free).
* An [Azure Blob Storage](https://docs.microsoft.com/en-us/azure/storage/common/storage-quickstart-create-account?tabs=azure-portal) account to store the dataset

### Procedure

Once you have met the prerequisites, follow these steps:

1. Create a Azure Blob Storage account and container
2. Create a Data Share Account
3. Create a share
4. Accept and receive data using Data Share
5. Configure NOS access to Blob Storage
6. Query the dataset in Blob Storage
7. Load data from Blob Storage into Vantage (optional)

### Create an Azure Blob Storage Account and Container

* Open the [Azure portal](https://portal.azure.com/) in a browser (Chrome, Firefox, and Safari work well) and follow the steps in [create a storage account](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-create?tabs=azure-portal#create-a-storage-account-1) in a resource group called _myProviderStorage_rg_ in this article.

* Enter a storage name and connectivity method. We will use _myproviderstorage_ and _public endpoint_ in this article.
+
:::note
We suggest that you use the same location for all services you create.
:::

* Select *Review + create,* then *Create*.

* *Go to resource* and click *Containers* to create container.

* Click the *+ Container* button.

* Enter a container name. We will use _providerdata_ in this article.
![](./images/connect-azure-data-share-to-teradata-vantage/image3.png)

* Click *Create*.

### Create a Data Share Account

We will create a Data Share account for the provider sharing the dataset.

Follow the [Create an Azure Data Share Account](https://docs.microsoft.com/en-us/azure/data-share/share-your-data?tabs=azure-portal#create-a-data-share-account) steps to create resource in a resource group called _myDataShareProvider_rg_ in this article.

* In *Basics* tab, enter a data share account name. We will use _mydatashareprovider_ in this article.
![](./images/connect-azure-data-share-to-teradata-vantage/image4.png)
:::note
We suggest that you use the same location for all services you create.
:::

* Select *Review + create,* then *Create*.

* When the deployment is complete, select *Go to resource*.

### Create a Share

* Navigate to your Data Share Overview page and follow the steps in [Create a share](https://docs.microsoft.com/en-us/azure/data-share/share-your-data?tabs=azure-portal#create-a-share).

* Select *Start sharing your data*.

* Select + *Create*.

* In *Details* tab, enter a share name and share type. We will use _WeatherData_ and _Snapshot_ in this article.
![](./images/connect-azure-data-share-to-teradata-vantage/image5.png)

:::note Snapshot share
Choose snapshot sharing to provide copy of the data to the recipient.

Supported data store: Azure Blob Storage, Azure Data Lake Storage Gen1, Azure Data Lake Storage Gen2, Azure SQL Database, Azure Synapse Analytics (formerly SQL DW)
:::

:::note In-place share

Choose in-place sharing to provide access to data at its source.

Supported data store: Azure Data Explorer
:::

* Click *Continue*.

* In *Datasets* tab, click *Add datasets*

* Select *Azure Blob Storage*
![](./images/connect-azure-data-share-to-teradata-vantage/image6.png)

* Click *Next*.

* Enter Storage account providing the dataset. We will use _myproviderstorage_ in this article.
![](./images/connect-azure-data-share-to-teradata-vantage/image7.png)


* Click *Next*.

* Double-click container to choose the dataset. We will use _providerdata_ and _onpoint_history_postal-code_hour.csv_ file in this article.
![](./images/connect-azure-data-share-to-teradata-vantage/image8.png)

Figure 6 Select Storage container and dataset

:::note
Azure Data Share can share at the folder and file level. Use Azure Blob Storage resource to upload a file.
:::

* Click *Next*.

* Enter a Dataset name that the consumer will see for the folder and dataset. We will use the default names but delete the providerdata folder this article. Click *Add datasets*.
![](./images/connect-azure-data-share-to-teradata-vantage/image9.png)

* Click *Add datasets*.
![Dataset added to Sent Shares](./images/connect-azure-data-share-to-teradata-vantage/image10.png)

* Click *Continue*.

* In *Recipients* tab, click *Add recipient* email address to send share notification.

* Enter email address for consumer.
![Add recipient email address](./images/connect-azure-data-share-to-teradata-vantage/image11.png)

:::tip
Set Share expiration for amount of time share is valid for consumer to accept.
:::

* Click *Continue*.

* In *Settings* tab, set Snapshot schedule. We use default _unchecked_ this article.
![Set Snapshot schedule](./images/connect-azure-data-share-to-teradata-vantage/image12.png)

* Click *Continue*.

* In *Review + Create* tab, click *Create*.
![Review + Create](./images/connect-azure-data-share-to-teradata-vantage/image13.png)

* Your Azure Data Share has now been created and the recipient of your Data Share is now ready to accept your invitation.
![Data Share ready and invitation sent to recipient](./images/connect-azure-data-share-to-teradata-vantage/image14.png)

### Accept and Receive Data Using Azure Data Share

In this article, the recipient/consumer is going to receive the data into their Azure Blob storage account.

Similar to the Data Share _Provider,_ ensure that all pre-requisites are complete for the _Consumer_ before accepting a data share invitation.

* Azure Subscription: If you don't have one, create a [+++free account+++](https://azure.microsoft.com/free/) before you begin.
* Azure Blob Storage account and container: create resource group called _myConsumerStorage_rg_ and create account name _myconsumerstorage_ and container _consumerdata_.
* Azure Data Share account: create resource group called _myDataShareConsumer_rg_ and create a data share account name called _mydatashareconsumer_ to accept the data.

Follow the steps in [Accept and receive data using Azure Data Share](https://docs.microsoft.com/en-us/azure/data-share/subscribe-to-data-share?tabs=azure-portal).

#### Open invitation

* In your email, an invitation from Microsoft Azure with a subject titled "Azure Data Share invitation from *[+++yourdataprovider@domain.com+++](mailto:yourdataprovider@domain.com).* Click on the *View invitation* to see your invitation in Azure.
![Data Share email invitation to recipient](./images/connect-azure-data-share-to-teradata-vantage/image15.png)

* This action opens your browser to the list of Data Share invitations.
![Data Share invitations](./images/connect-azure-data-share-to-teradata-vantage/image16.png)

* Select the share you would like to view. We will select _WeatherData_ in this article.

#### Accept invitation

* Under _Target Data Share Account_, select the Subscription and Resource Group that you would like to deployed your Data Share into or you can create a new Data Share here.
+
:::note
if provider required a Terms of Use acceptance, a dialog box would appear and you'll be required to check the box to indicate you agree to the terms of use.
:::

* Enter the Resource group and Data share account. We will use _myDataShareConsumer_rg_ and _mydatashareconsumer_ account this article.
![Target Data Share account](./images/connect-azure-data-share-to-teradata-vantage/image17.png)

* Select *Accept and configure* and a share subscription will be created.

#### Configure received share

* Select *Datasets* tab. Check the box next to the dataset you'd like to assign a destination to. Select + *Map to target* to choose a target data store.
![Select Dataset and Map to target](./images/connect-azure-data-share-to-teradata-vantage/image18.png)

* Select a target data store type and path that you'd like the data to land in. We will use consumers Azure Blob Storage account _myconsumerstorage_ and container _consumerdata_ for our snapshot example in this article.
+
:::note
Azure Data Share provides open and flexible data sharing, including the ability to share from and to different data stores. Check [supported](https://docs.microsoft.com/en-us/azure/data-share/supported-data-stores#supported-data-stores) data sources that can accept snapshot and in place sharing.
:::
![Map datasets to target](./images/connect-azure-data-share-to-teradata-vantage/image19.png)

* Click on *Map to target*.

* Once mapping is complete, for snapshot-based sharing click on *Details* tab and click *Trigger snapshot* for _Full_ or _Incremental_. We will select full copy since this is your first time receiving data from your provider.
![Trigger full or incremental snapshot](./images/connect-azure-data-share-to-teradata-vantage/image20.png)

* When the last run status is _successful_, go to target data store to view the received data. Select *Datasets*, and click on the link in the Target Path.
![Dataset and target path to view shared data](./images/connect-azure-data-share-to-teradata-vantage/image21.png)


### Configure NOS Access to Azure Blob Storage

Native Object Store (NOS) can directly read data in Azure Blob Storage, which allows you to explore and analyze data in Blob Storage without explicitly loading the data.

#### Create a foreign table definition

A foreign table definition allows data in Blob Storage to be easily referenced within the Advanced SQL Engine and makes the data available in a structured, relational format.

:::note
NOS supports data in CSV, JSON, and Parquet formats.
:::

* Login to your Vantage system with Teradata Studio.

* Create an AUTHORIZATION object to access your Blob Storage container with the following SQL command.
+
``` sql
CREATE AUTHORIZATION DefAuth_AZ
AS DEFINER TRUSTED
USER 'myconsumerstorage' /* Storage Account Name */
PASSWORD '*****************' /* Storage Account Access Key or SAS Token */
```
+
** Replace the string for _USER_ with your Storage Account Name.
** Replace the string for _PASSWORD_ with your Storage Account Access Key or SAS Token.

* Create a foreign table definition for the CSV file on Blob Storage with the following SQL command.
+
``` sql
CREATE MULTISET FOREIGN TABLE WeatherData,
EXTERNAL SECURITY DEFINER TRUSTED DefAuth_AZ (
  Location VARCHAR(2048) CHARACTER SET UNICODE CASESPECIFIC,
  Payload DATASET INLINE LENGTH 64000 STORAGE FORMAT CSV
)
USING (
  LOCATION ('/AZ/myconsumerstorage.blob.core.windows.net/consumerdata/')
)
```
+
:::note
At a minimum, the foreign table definition must include a table name (WeatherData) and a location clause, which points to the object store data.
:::
+
The _LOCATION_ requires a storage account name and container name. You will need to replace this with your own storage account and container name.
+
If the object doesn't have a standard extension (e.g. “.json”, “.csv”, “.parquet”), then the _Location…Payload_ columns definition phrase is also needed, and the LOCATION phase need to include the file name. For example: LOCATION (`AZ/<storage account name>.blob.core.windows.net/<container>/<filename>`).
+
Foreign tables are always defined as No Primary Index (NoPI) tables.

### Query the Dataset in Azure Blob Storage

Run the following SQL command to query the dataset.

``` sql
SELECT * FROM WeatherData SAMPLE 10;
```

The foreign table only contains two columns: Location and Payload. Location is the address in the object store system. The data itself is represented in the payload column, with the payload value within each record in the foreign table representing a single CSV row.

![WeatherData table](./images/connect-azure-data-share-to-teradata-vantage/image22.png)

Run the following SQL command to focus on the data in the object.

``` sql
SELECT payload..* FROM WeatherData SAMPLE 10;
```

![WeatherData table payload](./images/connect-azure-data-share-to-teradata-vantage/image23.png)

#### Create a View

Views can simplify the names associated with the payload attributes, can make it easier to code SQL against the object data, and can hide the Location references in the foreign table.


:::note
Vantage foreign tables use the `..` (double dot or double period) operator to separate the object name from the column name.
:::

* Run the following SQL command to create a view.
+
``` sql
REPLACE VIEW WeatherData_view AS (
  SELECT
    CAST(payload..postal_code AS VARCHAR(10)) Postal_code,
    CAST(payload..country AS CHAR(2)) Country,
    CAST(payload..time_valid_utc AS TIMESTAMP(0) FORMAT 'YYYY-MM-DDBHH:MI:SS') Time_Valid_UTC,
    CAST(payload..doy_utc AS INTEGER) DOY_UTC,
    CAST(payload..hour_utc AS INTEGER) Hour_UTC,
    CAST(payload..time_valid_lcl AS TIMESTAMP(0) FORMAT 'YYYY-MM-DDBHH:MI:SS') Time_Valid_LCL,
    CAST(payload..dst_offset_minutes AS INTEGER) DST_Offset_Minutes,
    CAST(payload..temperature_air_2m_f AS DECIMAL(4,1)) Temperature_Air_2M_F,
    CAST(payload..temperature_wetbulb_2m_f AS DECIMAL(3,1)) Temperature_Wetbulb_2M_F,
    CAST(payload..temperature_dewpoint_2m_f AS DECIMAL(3,1)) Temperature_Dewpoint_2M_F,
    CAST(payload..temperature_feelslike_2m_f AS DECIMAL(4,1)) Temperature_Feelslike_2M_F,
    CAST(payload..temperature_windchill_2m_f AS DECIMAL(4,1)) Temperature_Windchill_2M_F,
    CAST(payload..temperature_heatindex_2m_f AS DECIMAL(4,1)) Temperature_Heatindex_2M_F,
    CAST(payload..humidity_relative_2m_pct AS DECIMAL(3,1)) Humidity_Relative_2M_Pct,
    CAST(payload..humidity_specific_2m_gpkg AS DECIMAL(3,1)) Humdity_Specific_2M_GPKG,
    CAST(payload..pressure_2m_mb AS DECIMAL(5,1)) Pressure_2M_Mb,
    CAST(payload..pressure_tendency_2m_mb AS DECIMAL(2,1)) Pressure_Tendency_2M_Mb,
    CAST(payload..pressure_mean_sea_level_mb AS DECIMAL(5,1)) Pressure_Mean_Sea_Level_Mb,
    CAST(payload..wind_speed_10m_mph AS DECIMAL(3,1)) Wind_Speed_10M_MPH,
    CAST(payload..wind_direction_10m_deg AS DECIMAL(4,1)) Wind_Direction_10M_Deg,
    CAST(payload..wind_speed_80m_mph AS DECIMAL(3,1)) Wind_Speed_80M_MPH,
    CAST(payload..wind_direction_80m_deg AS DECIMAL(4,1)) Wind_Direction_80M_Deg,
    CAST(payload..wind_speed_100m_mph AS DECIMAL(3,1)) Wind_Speed_100M_MPH,
    CAST(payload..wind_direction_100m_deg AS DECIMAL(4,1)) Wind_Direction_100M_Deg,
    CAST(payload..precipitation_in AS DECIMAL(3,2)) Precipitation_in,
    CAST(payload..snowfall_in AS DECIMAL(3,2)) Snowfall_in,
    CAST(payload..cloud_cover_pct AS INTEGER) Cloud_Cover_Pct,
    CAST(payload..radiation_solar_total_wpm2 AS DECIMAL(5,1)) Radiation_Solar_Total_WPM2
  FROM WeatherData
)
```

* Run the following SQL command to validate the view.
+
``` sql
SELECT * FROM WeatherData_view SAMPLE 10;
```
![WeatherData_view](./images/connect-azure-data-share-to-teradata-vantage/image24.png)

Now that you have created a view, you can easily reference the object store data in a query and combine it with other tables, both relational tables in Vantage as well as foreign tables in an object store. This allows you to leverage the full analytic capabilities of Vantage on 100% of the data, no matter where the data is located.

### Load Data from Blob Storage into Vantage (optional)

Having a persistent copy of the Blob Storage data can be useful when repetitive access of the same data is expected. NOS does not automatically make a persistent copy of the Blob Storage data. Each time you reference a foreign table, Vantage will fetch the data from Blob Storage. (Some data may be cached, but this depends on the size of the data in Blob Storage and other active workloads in Vantage.)

In addition, you may be charged network fees for data transferred from Blob Storage. If you will be referencing the data in Blob Storage multiple times, you may reduce your cost by loading it into Vantage, even temporarily.

You can select among the approaches below to load the data into Vantage.

#### Create the table and load the data in a single statement

You can use a single statement to both create the table and load the data. You can choose the desired attributes from the foreign table payload and what they will be called in the relational table.

A *CREATE TABLE AS … WITH DATA* statement can be used with the foreign table definition as the source table.

* Run the following SQL command to create the relational table and load the data.
+
``` sql
CREATE MULTISET TABLE WeatherData_temp AS (
  SELECT
    CAST(payload..postal_code AS VARCHAR(10)) Postal_code,
    CAST(payload..country AS CHAR(2)) Country,
    CAST(payload..time_valid_utc AS TIMESTAMP(0) FORMAT 'YYYY-MM-DDBHH:MI:SS') Time_Valid_UTC,
    CAST(payload..doy_utc AS INTEGER) DOY_UTC,
    CAST(payload..hour_utc AS INTEGER) Hour_UTC,
    CAST(payload..time_valid_lcl AS TIMESTAMP(0) FORMAT 'YYYY-MM-DDBHH:MI:SS') Time_Valid_LCL,
    CAST(payload..dst_offset_minutes AS INTEGER) DST_Offset_Minutes,
    CAST(payload..temperature_air_2m_f AS DECIMAL(4,1)) Temperature_Air_2M_F,
    CAST(payload..temperature_wetbulb_2m_f AS DECIMAL(3,1)) Temperature_Wetbulb_2M_F,
    CAST(payload..temperature_dewpoint_2m_f AS DECIMAL(3,1)) Temperature_Dewpoint_2M_F,
    CAST(payload..temperature_feelslike_2m_f AS DECIMAL(4,1)) Temperature_Feelslike_2M_F,
    CAST(payload..temperature_windchill_2m_f AS DECIMAL(4,1)) Temperature_Windchill_2M_F,
    CAST(payload..temperature_heatindex_2m_f AS DECIMAL(4,1)) Temperature_Heatindex_2M_F,
    CAST(payload..humidity_relative_2m_pct AS DECIMAL(3,1)) Humidity_Relative_2M_Pct,
    CAST(payload..humidity_specific_2m_gpkg AS DECIMAL(3,1)) Humdity_Specific_2M_GPKG,
    CAST(payload..pressure_2m_mb AS DECIMAL(5,1)) Pressure_2M_Mb,
    CAST(payload..pressure_tendency_2m_mb AS DECIMAL(2,1)) Pressure_Tendency_2M_Mb,
    CAST(payload..pressure_mean_sea_level_mb AS DECIMAL(5,1)) Pressure_Mean_Sea_Level_Mb,
    CAST(payload..wind_speed_10m_mph AS DECIMAL(3,1)) Wind_Speed_10M_MPH,
    CAST(payload..wind_direction_10m_deg AS DECIMAL(4,1)) Wind_Direction_10M_Deg,
    CAST(payload..wind_speed_80m_mph AS DECIMAL(3,1)) Wind_Speed_80M_MPH,
    CAST(payload..wind_direction_80m_deg AS DECIMAL(4,1)) Wind_Direction_80M_Deg,
    CAST(payload..wind_speed_100m_mph AS DECIMAL(3,1)) Wind_Speed_100M_MPH,
    CAST(payload..wind_direction_100m_deg AS DECIMAL(4,1)) Wind_Direction_100M_Deg,
    CAST(payload..precipitation_in AS DECIMAL(3,2)) Precipitation_in,
    CAST(payload..snowfall_in AS DECIMAL(3,2)) Snowfall_in,
    CAST(payload..cloud_cover_pct AS INTEGER) Cloud_Cover_Pct,
    CAST(payload..radiation_solar_total_wpm2 AS DECIMAL(5,1)) Radiation_Solar_Total_WPM2
  FROM
    WeatherData
  WHERE
    Postal_Code = '36101'
)
WITH DATA
NO PRIMARY INDEX
```

* Run the following SQL command to validate the contents of the table.
+
``` sql
SELECT * FROM WeatherData_temp SAMPLE 10;
```
![](./images/connect-azure-data-share-to-teradata-vantage/image25.png)[Weather data,width=624,height=87]

#### Create the table and load the data in multiple statements

You can also use multiple statements to first create the relational table and then load the data. An advantage of this choice is that you can perform multiple loads, possibly selecting different data or loading in smaller increments if the object is very large.

* Run the following SQL command to create the relational table.
+
``` sql
CREATE MULTISET TABLE WeatherData_temp (
  Postal_code VARCHAR(10),
  Country CHAR(2),
  Time_Valid_UTC TIMESTAMP(0) FORMAT 'YYYY-MM-DDBHH:MI:SS',
  DOY_UTC INTEGER,
  Hour_UTC INTEGER,
  Time_Valid_LCL TIMESTAMP(0) FORMAT 'YYYY-MM-DDBHH:MI:SS',
  DST_Offset_Minutes INTEGER,
  Temperature_Air_2M_F DECIMAL(4,1),
  Temperature_Wetbulb_2M_F DECIMAL(3,1),
  Temperature_Dewpoint_2M_F DECIMAL(3,1),
  Temperature_Feelslike_2M_F DECIMAL(4,1),
  Temperature_Windchill_2M_F DECIMAL(4,1),
  Temperature_Heatindex_2M_F DECIMAL(4,1),
  Humidity_Relative_2M_Pct DECIMAL(3,1),
  Humdity_Specific_2M_GPKG DECIMAL(3,1),
  Pressure_2M_Mb DECIMAL(5,1),
  Pressure_Tendency_2M_Mb DECIMAL(2,1),
  Pressure_Mean_Sea_Level_Mb DECIMAL(5,1),
  Wind_Speed_10M_MPH DECIMAL(3,1),
  Wind_Direction_10M_Deg DECIMAL(4,1),
  Wind_Speed_80M_MPH DECIMAL(3,1),
  Wind_Direction_80M_Deg DECIMAL(4,1),
  Wind_Speed_100M_MPH DECIMAL(3,1),
  Wind_Direction_100M_Deg DECIMAL(4,1),
  Precipitation_in DECIMAL(3,2),
  Snowfall_in DECIMAL(3,2),
  Cloud_Cover_Pct INTEGER,
  Radiation_Solar_Total_WPM2 DECIMAL(5,1)
)
UNIQUE PRIMARY INDEX ( Postal_Code, Time_Valid_UTC )
```

* Run the following SQL to load the data into the table.
+
``` sql
INSERT INTO WeatherData_temp
  SELECT
    CAST(payload..postal_code AS VARCHAR(10)) Postal_code,
    CAST(payload..country AS CHAR(2)) Country,
    CAST(payload..time_valid_utc AS TIMESTAMP(0) FORMAT 'YYYY-MM-DDBHH:MI:SS') Time_Valid_UTC,
    CAST(payload..doy_utc AS INTEGER) DOY_UTC,
    CAST(payload..hour_utc AS INTEGER) Hour_UTC,
    CAST(payload..time_valid_lcl AS TIMESTAMP(0) FORMAT 'YYYY-MM-DDBHH:MI:SS') Time_Valid_LCL,
    CAST(payload..dst_offset_minutes AS INTEGER) DST_Offset_Minutes,
    CAST(payload..temperature_air_2m_f AS DECIMAL (4,1)) Temperature_Air_2M_F,
    CAST(payload..temperature_wetbulb_2m_f AS DECIMAL(3,1)) Temperature_Wetbulb_2M_F,
    CAST(payload..temperature_dewpoint_2m_f AS DECIMAL(3,1)) Temperature_Dewpoint_2M_F,
    CAST(payload..temperature_feelslike_2m_f AS DECIMAL(4,1)) Temperature_Feelslike_2M_F,
    CAST(payload..temperature_windchill_2m_f AS DECIMAL(4,1)) Temperature_Windchill_2M_F,
    CAST(payload..temperature_heatindex_2m_f AS DECIMAL(4,1)) Temperature_Heatindex_2M_F,
    CAST(payload..humidity_relative_2m_pct AS DECIMAL(3,1)) Humidity_Relative_2M_Pct,
    CAST(payload..humidity_specific_2m_gpkg AS DECIMAL(3,1)) Humdity_Specific_2M_GPKG,
    CAST(payload..pressure_2m_mb AS DECIMAL(5,1)) Pressure_2M_Mb,
    CAST(payload..pressure_tendency_2m_mb AS DECIMAL(2,1)) Pressure_Tendency_2M_Mb,
    CAST(payload..pressure_mean_sea_level_mb AS DECIMAL(5,1)) Pressure_Mean_Sea_Level_Mb,
    CAST(payload..wind_speed_10m_mph AS DECIMAL(3,1)) Wind_Speed_10M_MPH,
    CAST(payload..wind_direction_10m_deg AS DECIMAL(4,1)) Wind_Direction_10M_Deg,
    CAST(payload..wind_speed_80m_mph AS DECIMAL(3,1)) Wind_Speed_80M_MPH,
    CAST(payload..wind_direction_80m_deg AS DECIMAL(4,1)) Wind_Direction_80M_Deg,
    CAST(payload..wind_speed_100m_mph AS DECIMAL(3,1)) Wind_Speed_100M_MPH,
    CAST(payload..wind_direction_100m_deg AS DECIMAL(4,1)) Wind_Direction_100M_Deg,
    CAST(payload..precipitation_in AS DECIMAL(3,2)) Precipitation_in,
    CAST(payload..snowfall_in AS DECIMAL(3,2)) Snowfall_in,
    CAST(payload..cloud_cover_pct AS INTEGER) Cloud_Cover_Pct,
    CAST(payload..radiation_solar_total_wpm2 AS DECIMAL(5,1)) Radiation_Solar_Total_WPM2
  FROM
    WeatherData
  WHERE
    Postal_Code = '30301'
```

* Run the following SQL command to validate the contents of the table.
+
``` sql
SELECT * FROM WeatherData_temp SAMPLE 10;
```
![](./images/connect-azure-data-share-to-teradata-vantage/image26.png)[WeatherData_temp,width=624,height=84]

#### READ_NOS - An alternative method to foreign tables

An alternative to defining a foreign table is to use the `READ_NOS` table operator. This table operator allows you to access data directly from an object store without first creating a foreign table, or to view a list of the keys associated with all the objects specified by a Location clause.

You can use the `READ_NOS` table operator to explore the data in an object.

* Run the following command to explore the data in an object.
+
``` sql , id="azure_data_share_first_run", role="content-editable emits-gtm-events"
SELECT
  TOP 5 payload..*
FROM
  READ_NOS (
    ON (SELECT CAST( NULL AS DATASET STORAGE FORMAT CSV))
    USING
      LOCATION ('/AZ/myconsumerstorage.blob.core.windows.net/consumerdata')
      ACCESS_ID('myconsumerstorage')
      ACCESS_KEY('*****')
  ) AS THE_TABLE
  ORDER BY 1
```
+
** The _LOCATION_ requires a storage account name and container name. This is highlighted above in yellow. You will need to replace this with your own storage account and container name.
** Replace the string for _ACCESS_ID_ with your Storage Account Name.
** Replace the string for _ACCES_KEY_ with your Storage Account Access Key or SAS Token

![](./images/connect-azure-data-share-to-teradata-vantage/image27.png)[READ_NOS,width=624,height=86]

You can also leverage the READ_NOS table operator to get the length (size) of the object.

* Run the following SQL command to view the size of the object.
+
``` sql
SELECT
  location(CHAR(120)), ObjectLength
FROM
  READ_NOS (
    ON (SELECT CAST( NULL AS DATASET STORAGE FORMAT CSV))
    USING
      LOCATION ('/AZ/myconsumerstorage.blob.core.windows.net/consumerdata')
      ACCESS_ID('myconsumerstorage')
      ACCESS_KEY('*****')
      RETURNTYPE('NOSREAD_KEYS')
  ) AS THE_TABLE
ORDER BY 1
```
** Replace the values for _LOCATION_, _ACCESS_ID_, and _ACCESS_KEY_.

![READ_NOS object length](./images/connect-azure-data-share-to-teradata-vantage/image28.png)

You can substitute the NOS_READ table operator for a foreign table definition in the above section for loading the data into a relational table.

``` sql
CREATE MULTISET TABLE WeatherData_temp AS (
  SELECT
    CAST(payload..postal_code AS VARCHAR(10)) Postal_code,
    CAST(payload..country AS CHAR(2)) Country,
    CAST(payload..time_valid_utc AS TIMESTAMP(0) FORMAT 'YYYY-MM-DDBHH:MI:SS') Time_Valid_UTC,
    CAST(payload..doy_utc AS INTEGER) DOY_UTC,
    CAST(payload..hour_utc AS INTEGER) Hour_UTC,
    CAST(payload..time_valid_lcl AS TIMESTAMP(0) FORMAT 'YYYY-MM-DDBHH:MI:SS') Time_Valid_LCL,
    CAST(payload..dst_offset_minutes AS INTEGER) DST_Offset_Minutes,
    CAST(payload..temperature_air_2m_f AS DECIMAL (4,1)) Temperature_Air_2M_F,
    CAST(payload..temperature_wetbulb_2m_f AS DECIMAL(3,1)) Temperature_Wetbulb_2M_F,
    CAST(payload..temperature_dewpoint_2m_f AS DECIMAL(3,1)) Temperature_Dewpoint_2M_F,
    CAST(payload..temperature_feelslike_2m_f AS DECIMAL(4,1)) Temperature_Feelslike_2M_F,
    CAST(payload..temperature_windchill_2m_f AS DECIMAL(4,1)) Temperature_Windchill_2M_F,
    CAST(payload..temperature_heatindex_2m_f AS DECIMAL(4,1)) Temperature_Heatindex_2M_F,
    CAST(payload..humidity_relative_2m_pct AS DECIMAL(3,1)) Humidity_Relative_2M_Pct,
    CAST(payload..humidity_specific_2m_gpkg AS DECIMAL(3,1)) Humdity_Specific_2M_GPKG,
    CAST(payload..pressure_2m_mb AS DECIMAL(5,1)) Pressure_2M_Mb,
    CAST(payload..pressure_tendency_2m_mb AS DECIMAL(2,1)) Pressure_Tendency_2M_Mb,
    CAST(payload..pressure_mean_sea_level_mb AS DECIMAL(5,1)) Pressure_Mean_Sea_Level_Mb,
    CAST(payload..wind_speed_10m_mph AS DECIMAL(3,1)) Wind_Speed_10M_MPH,
    CAST(payload..wind_direction_10m_deg AS DECIMAL(4,1)) Wind_Direction_10M_Deg,
    CAST(payload..wind_speed_80m_mph AS DECIMAL(3,1)) Wind_Speed_80M_MPH,
    CAST(payload..wind_direction_80m_deg AS DECIMAL(4,1)) Wind_Direction_80M_Deg,
    CAST(payload..wind_speed_100m_mph AS DECIMAL(3,1)) Wind_Speed_100M_MPH,
    CAST(payload..wind_direction_100m_deg AS DECIMAL(4,1)) Wind_Direction_100M_Deg,
    CAST(payload..precipitation_in AS DECIMAL(3,2)) Precipitation_in,
    CAST(payload..snowfall_in AS DECIMAL(3,2)) Snowfall_in,
    CAST(payload..cloud_cover_pct AS INTEGER) Cloud_Cover_Pct,
    CAST(payload..radiation_solar_total_wpm2 AS DECIMAL(5,1)) Radiation_Solar_Total_WPM2
  FROM
    READ_NOS (
      ON (SELECT CAST( NULL AS DATASET STORAGE FORMAT CSV))
      USING
        LOCATION ('/AZ/myconsumerstorage.blob.core.windows.net/consumerdata')
        ACCESS_ID('myconsumerstorage')
        ACCESS_KEY('*****')
    ) AS THE_TABLE
  WHERE
    Postal_Code = '36101'
)
WITH DATA
```

import CommunityLinkPartial from '../_partials/community_link.mdx';

<CommunityLinkPartial />

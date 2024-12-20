---
sidebar_position: 14
author: Rémi Turpaud
email: remi.turpaud@teradata.com
page_last_update: February 14th, 2022
description: How to load and use GeoJson documents with Teradata Vantage.
keywords: [geospatial, geojson, teradata, vantage, cloud data platform, analytics, maps, 4d analytics, open data]
---

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'
import CommunityLinkPartial from '../_partials/community_link.mdx';

# Use geographic reference data with Vantage

## Overview

This post demonstrates how you can leverage any geographic dataset in GeoJson format and use it for geospatial analytics in Teradata Vantage, with just a few lines of code.

Today we be gathering reference geographical data (official maps, points of interest, etc...) form public sources and use it to support our day to day analytics.

You will learn two methods to get your GeoJson data into Teradata Vantage:

1. Load it as a single document and use native ClearScape analytics functions to parse it into a table usable for analytics.
2. Lightly transform it in native Python as we load it into Vantage to produce an analytics ready dataset.

The first method is a straig forward ELT pattern for semi-structured format processing in Vantage with a single SQL statement, the second one involves some lightweight preparation in (pure) Python and may allow more flexibility (for example to add early quality checks or optimize the load of large documents).

## Prerequisites

You will need:

- Access to a Teradata Vantage instance.
    <ClearscapeDocsNote />
- A Python 3 interpreter
- A SQL Client

## Option 1: Load a GeoJson document into Vantage
Here we will load a GeoJson document as a single Character Large OBject (CLOB) into the Vantage Data Store and use a single SQL statement, backed by ClearScape Analytics native functions, to parse this document into a usable structure for geospatial analytics.

### Get and load the GeoJson document
The http://geojson.xyz/ website is a fantastic source for open geographical data in GeoJson format. We will load the "Populated Places" dataset that provides with a list of over 1000 significant world cities.

Open you favourite **Python 3 interpreter** and make sure you have the following packages installed:

* wget
* teradatasql
* getpass

Download and read the cities dataset:
```python
import wget
world_cities=wget.download('https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_populated_places.geojson')
with open(world_cities) as geo_json:
    jmap = jmap = geo_json.read()
```

### Load the GeoJson document in Vantage

Modify this code as needed with your Vantage host name, user name and specify an advanced login mechanism if any (eg. LDAP, Kerberos...) with the _logmech_ parameter if you need to.
All the connection parameters are documented on the teradatasql PyPi page there: https://pypi.org/project/teradatasql/

The code below simply creates a Vantage connection, and opens a cursor creating a table and loading it with our file.

```python
import teradatasql
import getpass
tdhost='<Your-Vantage-System-HostName-Here>'
tdUser='<Your-Vantage-User-Name-Here>'

# Create a connection to Teradata Vantage
con = teradatasql.connect(None, host=tdhost, user=tdUser, password=getpass.getpass())

# Create a table named geojson_src and load the JSON map into it as a single CLOB
with con.cursor () as cur:
    cur.execute ("create table geojson_src (geojson_nm VARCHAR(32), geojson_clob CLOB CHARACTER SET UNICODE);")
    r=cur.execute ("insert into geojson_src (?, ?)", ['cities',jmap])
```

### Use the map from Vantage

Now open your favourite **SQL client** and connect to your Vantage system.

We will use ClearScape analytics JSON functions to parse our GeoJson document and extract the most relevant properties and the geometry itself (the coordinates of the city) for each feature (each feature representing a city in this example).
We then use the GeomFromGeoJSON function to cast our geometry as a native Vantage geometry data type (ST_GEOMETRY).

For user convenience, will wrap all this SQL code in a view:

```python
REPLACE VIEW cities_geo AS
SEL city_name, country_name, region_name, code_country_isoa3, GeomFromGeoJSON(geom, 4326) city_coord
FROM JSON_Table
(ON (
    SEL
     geojson_nm id
    ,cast(geojson_clob as JSON) jsonCol
    FROM geojson_src where geojson_nm='cities'
)
USING rowexpr('$.features[*]')
               colexpr('[ {"jsonpath" : "$.geometry",
                           "type" : "VARCHAR(32000)"},
                          {"jsonpath" : "$.properties.NAME",
                           "type" : "VARCHAR(50)"},
                          {"jsonpath" : "$.properties.SOV0NAME",
                           "type" : "VARCHAR(50)"},
                          {"jsonpath" : "$.properties.ADM1NAME",
                           "type" : "VARCHAR(50)"},
                          {"jsonpath" : "$.properties.SOV_A3",
                           "type" : "VARCHAR(50)"}]')
) AS JT(id, geom, city_name, country_name, region_name, code_country_isoa3);
```

That's all, you can now view the prepared geometry data as a table, ready to enrich your analytics:


```sql
SEL TOP 5 * FROM cities_geo;
```

Result:


|city_name|country_name|region_name|code_country_isoa3|city_coord
|-------- | ------- |------- |------- |------- |
|Potenza|Italy|Basilicata|ITA|POINT (15.798996495640267 40.642002130098206)|
|Mariehamn|Finland|Finström|ALD|POINT (19.949004471869102 60.096996184895431) |
|Ramallah|Indeterminate||PSE|POINT (35.206209378189556 31.902944751424059) |
|Poitier|French Republic|Poitou-Charentes|FRA|POINT (0.333276528534554 46.583292255736581) |
|Clermont-Ferrand|French Republic|Auvergne|FRA|POINT (3.080008095928406 45.779982115759424) |



Calculate the distance between two cities:

```sql
SEL b.city_coord.ST_SphericalDistance(l.city_coord)
FROM
(SEL city_coord FROM cities_geo WHERE city_name='Bordeaux') b
CROSS JOIN (SEL city_coord FROM cities_geo WHERE city_name='Lvov') l
```

Result:


|city_coord.ST_SPHERICALDISTANCE(city_coord)|
|-------------|
|1.9265006861079421e+06|


## Option 2: Prepare a GeoJson document with Python and load it into Vantage

The previous example demonstrated how to load a complete document as a large object into Teradata Vantage and use built in analytic functions to parse it into a usable dataset.

This is convenient but limited: we need to parse this document every time we need to use it, as the original document is not directly usable for analytics, JSON documents are currently limited to 16MB in Vantage and it may be inconvenient to fix data quality or formatting issues within the document stored as a CLOB.

In this example, we will parse our JSON document using the Python json package and load it as a table that can be used directly and efficiently for analysis.

Python json and list manipulation functions, along with the Teradata SQL driver for Python make this process really simple and efficient.

For this example, we will use the boundaries of the world countries available on https://datahub.io.


Let's get into it.

Open you favourite **Python 3 interpreter** and make sure you have the following packages installed:

- wget
- teradatasql
- getpass

### Get and load the GeoJson document

```python
import wget
countries_geojson=wget.download('https://datahub.io/core/geo-countries/r/countries.geojson')
```

### Open the GeoJson file and type it as a dictionary
```python
import json
with open(countries_geojson) as geo_json:
    countries_json = json.load(geo_json)
```

### Optional Check the content of the file

The good thing about loading this JSON in memory, if you are using an interactive Python terminal, is that you can now explore the document to understand its structure. For example

 
```python
print(countries_json.keys())
print(countries_json['type'])
print(countries_json['features'][0]['properties'].keys())
print(countries_json['features'][0]['geometry']['coordinates'])
```

What we have here is a collection of GeoFeatures (as earlier).

We will now lightly model this data in a Vantage table, for that:

- We will load each feature as a raw.
- We will extract the properties that look interesting for immediate analysis (in our example, the country name and ISO code).
- We will extract the geometry itself and load it as a separate column.

To load a set of rows with a teradatasql cursor, we need to represent each row as an array (or tuples) of values, and the complete dataset as an array of all the row-arrays.
This is fairly easy to do as a list comprehension

For example:


```python
[(f['properties']['ADMIN'], f['properties']['ISO_A3'], f['geometry']) for f in countries_json['features'][:1]]
```

NB: Not featured here, but recommended for richer datasets, consider loading the entire and original feature payload as a separate column (this is a JSON document). This will allow you to go back to the original record and extract new properties that you may have missed during your first analysis but have become relevant, directly in SQL and without having to reload the file entirely.

### Create a Vantage connection and load our file in a staging table

Modify this code as needed with your Vantage host name, user name and specify an advanced login mechanism if any (eg. LDAP, Kerberos...) with the _logmech_ parameter if you need to.
All the connection parameters are documented on the teradatasql PyPi page there: https://pypi.org/project/teradatasql/

The code below simply creates a Vantage connection, and opens a cursor creating a table and loading it with our list.


```python
import teradatasql
import getpass
tdhost='<Your-Vantage-System-HostName-Here>'
tdUser='<Your-Vantage-User-Name-Here>'

# Create a connection to Teradata Vantage
con = teradatasql.connect(None, host=tdhost, user=tdUser, password=tdPassword)

# Create a table and load our country names, codes, and geometries.
with con.cursor () as cur:
    cur.execute ("create table stg_countries_map (country_nm VARCHAR(32), ISO_A3_cd VARCHAR(32), boundaries_geo CLOB CHARACTER SET UNICODE);")
    r=cur.execute ("insert into stg_countries_map (?, ?, ?)", [(f['properties']['ADMIN'], f['properties']['ISO_A3'], str(f['geometry'])) for f in countries_json['features']])
```

### Create and our geography refernce table

The code below performs the table creation from the Python interpreter, you can also run the _sql_ statement defined below in your prefered SQL client you might as well simply define this logic as a SQL view to avoid having to refresh this table.

We will use ClearScape analytics the GeomFromGeoJSON function to cast our geometry as a native Vantage geometry data type (ST_GEOMETRY).


```python
# Now create our final reference table, casting the geometry CLOB as a ST_GEOMETRY object
sql='''
CREATE TABLE ref_countries_map AS
(
SEL
ISO_A3_cd
,country_nm
,GeomFromGeoJSON(boundaries_geo, 4326) boundaries_geo
FROM stg_countries_map
) WITH DATA
'''

WITH con.cursor () AS cur:
    cur.execute (sql)
```

### Use your data

That's all, you may now query your tables using your favourite *SQL client* and Teradata's excellent [Geospatial data types and analytic functions](https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Teradata-VantageTM-Geospatial-Data-Types-17.20).

For example, using the two datasets we have loaded during this tutorial, check in what countries are

 
```sql
SEL cty.city_name, cty.city_coord, ctry.country_nm
FROM cities_geo cty
LEFT JOIN ref_countries_map ctry
	ON ctry.boundaries_geo.ST_Contains(cty.city_coord)=1
WHERE cty.city_name LIKE 'a%'
```

|city_name|city_coord|country_nm|
| -------- | ------- |------- |
|Acapulco|POINT (-99.915979046410712 16.849990864016206)|Mexico Aosta|
|POINT (7.315002595706176 45.737001067072299)|Italy Ancona|POINT (13.499940550397127 43.600373554552903)|
|Italy Albany|POINT (117.891604776075155 -35.016946595501224)|Australia|


## Summary

Note that none of the above code does not implement any control procedure or checks to, for example, manage the state of the target tables, manage locking, control error codes, etc... This is meant to be a demonstrations of the available features to acquire and use geospatial reference data.

Consider using [SQLAlchemy ORM](https://pypi.org/project/teradatasqlalchemy/) if you are defining your pipeline in Python, xref:dbt.adoc[dbt], or your favorite ELT and orchestration toolset to create your products you can operationalize.

You now can know how to get any open geographic dataset and use it to augment your analytics with Teradata Vantage!

<CommunityLinkPartial />
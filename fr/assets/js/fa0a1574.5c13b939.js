"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[198],{41269:(e,t,n)=>{n.d(t,{Ay:()=>s,RM:()=>r});var a=n(74848),o=n(28453);const r=[];function i(e){const t={a:"a",admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["If you have any questions or need further assistance, please visit our ",(0,a.jsx)(t.a,{href:"https://support.teradata.com/community",children:"community forum"})," where you can get support and interact with other community members."]})})}function s(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},62680:(e,t,n)=>{n.d(t,{Ay:()=>s,RM:()=>r});var a=n(74848),o=n(28453);const r=[];function i(e){const t={a:"a",admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["If you need a test instance of Vantage, you can provision one for free at ",(0,a.jsx)(t.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})})}function s(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},69261:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var a=n(74848),o=n(28453),r=n(62680),i=n(41269);const s={sidebar_position:14,author:"R\xe9mi Turpaud",email:"remi.turpaud@teradata.com",page_last_update:"February 14th, 2022",description:"How to load and use GeoJson documents with Teradata Vantage.",keywords:["geospatial","geojson","teradata","vantage","cloud data platform","analytics","maps","4d analytics","open data"]},d="Use geographic reference data with Vantage",c={id:"analyze-data/geojson-to-vantage",title:"Use geographic reference data with Vantage",description:"How to load and use GeoJson documents with Teradata Vantage.",source:"@site/quickstarts/analyze-data/geojson-to-vantage.md",sourceDirName:"analyze-data",slug:"/analyze-data/geojson-to-vantage",permalink:"/fr/quickstarts/analyze-data/geojson-to-vantage",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14,author:"R\xe9mi Turpaud",email:"remi.turpaud@teradata.com",page_last_update:"February 14th, 2022",description:"How to load and use GeoJson documents with Teradata Vantage.",keywords:["geospatial","geojson","teradata","vantage","cloud data platform","analytics","maps","4d analytics","open data"]},sidebar:"tutorialSidebar",previous:{title:"Integrate Teradata Vantage with KNIME Analytics Platform",permalink:"/fr/quickstarts/analyze-data/integrate-teradata-vantage-with-knime"},next:{title:"Getting Started with VantageCloud Lake",permalink:"/fr/quickstarts/vantagecloud-lake/getting-started-with-vantagecloud-lake"}},l={},h=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},...r.RM,{value:"Option 1: Load a GeoJson document into Vantage",id:"option-1-load-a-geojson-document-into-vantage",level:2},{value:"Get and load the GeoJson document",id:"get-and-load-the-geojson-document",level:3},{value:"Load the GeoJson document in Vantage",id:"load-the-geojson-document-in-vantage",level:3},{value:"Use the map from Vantage",id:"use-the-map-from-vantage",level:3},{value:"Option 2: Prepare a GeoJson document with Python and load it into Vantage",id:"option-2-prepare-a-geojson-document-with-python-and-load-it-into-vantage",level:2},{value:"Get and load the GeoJson document",id:"get-and-load-the-geojson-document-1",level:3},{value:"Open the GeoJson file and type it as a dictionary",id:"open-the-geojson-file-and-type-it-as-a-dictionary",level:3},{value:"Optional Check the content of the file",id:"optional-check-the-content-of-the-file",level:3},{value:"Create a Vantage connection and load our file in a staging table",id:"create-a-vantage-connection-and-load-our-file-in-a-staging-table",level:3},{value:"Create and our geography refernce table",id:"create-and-our-geography-refernce-table",level:3},{value:"Use your data",id:"use-your-data",level:3},{value:"Summary",id:"summary",level:2},...i.RM];function u(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"use-geographic-reference-data-with-vantage",children:"Use geographic reference data with Vantage"}),"\n",(0,a.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(t.p,{children:"This post demonstrates how you can leverage any geographic dataset in GeoJson format and use it for geospatial analytics in Teradata Vantage, with just a few lines of code."}),"\n",(0,a.jsx)(t.p,{children:"Today we be gathering reference geographical data (official maps, points of interest, etc...) form public sources and use it to support our day to day analytics."}),"\n",(0,a.jsx)(t.p,{children:"You will learn two methods to get your GeoJson data into Teradata Vantage:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Load it as a single document and use native ClearScape analytics functions to parse it into a table usable for analytics."}),"\n",(0,a.jsx)(t.li,{children:"Lightly transform it in native Python as we load it into Vantage to produce an analytics ready dataset."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"The first method is a straig forward ELT pattern for semi-structured format processing in Vantage with a single SQL statement, the second one involves some lightweight preparation in (pure) Python and may allow more flexibility (for example to add early quality checks or optimize the load of large documents)."}),"\n",(0,a.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsx)(t.p,{children:"You will need:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Access to a Teradata Vantage instance.","\n",(0,a.jsx)(r.Ay,{}),"\n"]}),"\n",(0,a.jsx)(t.li,{children:"A Python 3 interpreter"}),"\n",(0,a.jsx)(t.li,{children:"A SQL Client"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"option-1-load-a-geojson-document-into-vantage",children:"Option 1: Load a GeoJson document into Vantage"}),"\n",(0,a.jsx)(t.p,{children:"Here we will load a GeoJson document as a single Character Large OBject (CLOB) into the Vantage Data Store and use a single SQL statement, backed by ClearScape Analytics native functions, to parse this document into a usable structure for geospatial analytics."}),"\n",(0,a.jsx)(t.h3,{id:"get-and-load-the-geojson-document",children:"Get and load the GeoJson document"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.a,{href:"http://geojson.xyz/",children:"http://geojson.xyz/"}),' website is a fantastic source for open geographical data in GeoJson format. We will load the "Populated Places" dataset that provides with a list of over 1000 significant world cities.']}),"\n",(0,a.jsxs)(t.p,{children:["Open you favourite ",(0,a.jsx)(t.strong,{children:"Python 3 interpreter"})," and make sure you have the following packages installed:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"wget"}),"\n",(0,a.jsx)(t.li,{children:"teradatasql"}),"\n",(0,a.jsx)(t.li,{children:"getpass"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Download and read the cities dataset:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"import wget\nworld_cities=wget.download('https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_populated_places.geojson')\nwith open(world_cities) as geo_json:\n    jmap = jmap = geo_json.read()\n"})}),"\n",(0,a.jsx)(t.h3,{id:"load-the-geojson-document-in-vantage",children:"Load the GeoJson document in Vantage"}),"\n",(0,a.jsxs)(t.p,{children:["Modify this code as needed with your Vantage host name, user name and specify an advanced login mechanism if any (eg. LDAP, Kerberos...) with the ",(0,a.jsx)(t.em,{children:"logmech"})," parameter if you need to.\nAll the connection parameters are documented on the teradatasql PyPi page there: ",(0,a.jsx)(t.a,{href:"https://pypi.org/project/teradatasql/",children:"https://pypi.org/project/teradatasql/"})]}),"\n",(0,a.jsx)(t.p,{children:"The code below simply creates a Vantage connection, and opens a cursor creating a table and loading it with our file."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"import teradatasql\nimport getpass\ntdhost='<Your-Vantage-System-HostName-Here>'\ntdUser='<Your-Vantage-User-Name-Here>'\n\n# Create a connection to Teradata Vantage\ncon = teradatasql.connect(None, host=tdhost, user=tdUser, password=getpass.getpass())\n\n# Create a table named geojson_src and load the JSON map into it as a single CLOB\nwith con.cursor () as cur:\n    cur.execute (\"create table geojson_src (geojson_nm VARCHAR(32), geojson_clob CLOB CHARACTER SET UNICODE);\")\n    r=cur.execute (\"insert into geojson_src (?, ?)\", ['cities',jmap])\n"})}),"\n",(0,a.jsx)(t.h3,{id:"use-the-map-from-vantage",children:"Use the map from Vantage"}),"\n",(0,a.jsxs)(t.p,{children:["Now open your favourite ",(0,a.jsx)(t.strong,{children:"SQL client"})," and connect to your Vantage system."]}),"\n",(0,a.jsx)(t.p,{children:"We will use ClearScape analytics JSON functions to parse our GeoJson document and extract the most relevant properties and the geometry itself (the coordinates of the city) for each feature (each feature representing a city in this example).\nWe then use the GeomFromGeoJSON function to cast our geometry as a native Vantage geometry data type (ST_GEOMETRY)."}),"\n",(0,a.jsx)(t.p,{children:"For user convenience, will wrap all this SQL code in a view:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'REPLACE VIEW cities_geo AS\nSEL city_name, country_name, region_name, code_country_isoa3, GeomFromGeoJSON(geom, 4326) city_coord\nFROM JSON_Table\n(ON (\n    SEL\n     geojson_nm id\n    ,cast(geojson_clob as JSON) jsonCol\n    FROM geojson_src where geojson_nm=\'cities\'\n)\nUSING rowexpr(\'$.features[*]\')\n               colexpr(\'[ {"jsonpath" : "$.geometry",\n                           "type" : "VARCHAR(32000)"},\n                          {"jsonpath" : "$.properties.NAME",\n                           "type" : "VARCHAR(50)"},\n                          {"jsonpath" : "$.properties.SOV0NAME",\n                           "type" : "VARCHAR(50)"},\n                          {"jsonpath" : "$.properties.ADM1NAME",\n                           "type" : "VARCHAR(50)"},\n                          {"jsonpath" : "$.properties.SOV_A3",\n                           "type" : "VARCHAR(50)"}]\')\n) AS JT(id, geom, city_name, country_name, region_name, code_country_isoa3);\n'})}),"\n",(0,a.jsx)(t.p,{children:"That's all, you can now view the prepared geometry data as a table, ready to enrich your analytics:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"SEL TOP 5 * FROM cities_geo;\n"})}),"\n",(0,a.jsx)(t.p,{children:"Result:"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"city_name"}),(0,a.jsx)(t.th,{children:"country_name"}),(0,a.jsx)(t.th,{children:"region_name"}),(0,a.jsx)(t.th,{children:"code_country_isoa3"}),(0,a.jsx)(t.th,{children:"city_coord"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Potenza"}),(0,a.jsx)(t.td,{children:"Italy"}),(0,a.jsx)(t.td,{children:"Basilicata"}),(0,a.jsx)(t.td,{children:"ITA"}),(0,a.jsx)(t.td,{children:"POINT (15.798996495640267 40.642002130098206)"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Mariehamn"}),(0,a.jsx)(t.td,{children:"Finland"}),(0,a.jsx)(t.td,{children:"Finstr\xf6m"}),(0,a.jsx)(t.td,{children:"ALD"}),(0,a.jsx)(t.td,{children:"POINT (19.949004471869102 60.096996184895431)"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Ramallah"}),(0,a.jsx)(t.td,{children:"Indeterminate"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"PSE"}),(0,a.jsx)(t.td,{children:"POINT (35.206209378189556 31.902944751424059)"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Poitier"}),(0,a.jsx)(t.td,{children:"French Republic"}),(0,a.jsx)(t.td,{children:"Poitou-Charentes"}),(0,a.jsx)(t.td,{children:"FRA"}),(0,a.jsx)(t.td,{children:"POINT (0.333276528534554 46.583292255736581)"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Clermont-Ferrand"}),(0,a.jsx)(t.td,{children:"French Republic"}),(0,a.jsx)(t.td,{children:"Auvergne"}),(0,a.jsx)(t.td,{children:"FRA"}),(0,a.jsx)(t.td,{children:"POINT (3.080008095928406 45.779982115759424)"})]})]})]}),"\n",(0,a.jsx)(t.p,{children:"Calculate the distance between two cities:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"SEL b.city_coord.ST_SphericalDistance(l.city_coord)\nFROM\n(SEL city_coord FROM cities_geo WHERE city_name='Bordeaux') b\nCROSS JOIN (SEL city_coord FROM cities_geo WHERE city_name='Lvov') l\n"})}),"\n",(0,a.jsx)(t.p,{children:"Result:"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsx)(t.tr,{children:(0,a.jsx)(t.th,{children:"city_coord.ST_SPHERICALDISTANCE(city_coord)"})})}),(0,a.jsx)(t.tbody,{children:(0,a.jsx)(t.tr,{children:(0,a.jsx)(t.td,{children:"1.9265006861079421e+06"})})})]}),"\n",(0,a.jsx)(t.h2,{id:"option-2-prepare-a-geojson-document-with-python-and-load-it-into-vantage",children:"Option 2: Prepare a GeoJson document with Python and load it into Vantage"}),"\n",(0,a.jsx)(t.p,{children:"The previous example demonstrated how to load a complete document as a large object into Teradata Vantage and use built in analytic functions to parse it into a usable dataset."}),"\n",(0,a.jsx)(t.p,{children:"This is convenient but limited: we need to parse this document every time we need to use it, as the original document is not directly usable for analytics, JSON documents are currently limited to 16MB in Vantage and it may be inconvenient to fix data quality or formatting issues within the document stored as a CLOB."}),"\n",(0,a.jsx)(t.p,{children:"In this example, we will parse our JSON document using the Python json package and load it as a table that can be used directly and efficiently for analysis."}),"\n",(0,a.jsx)(t.p,{children:"Python json and list manipulation functions, along with the Teradata SQL driver for Python make this process really simple and efficient."}),"\n",(0,a.jsxs)(t.p,{children:["For this example, we will use the boundaries of the world countries available on ",(0,a.jsx)(t.a,{href:"https://datahub.io",children:"https://datahub.io"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Let's get into it."}),"\n",(0,a.jsxs)(t.p,{children:["Open you favourite ",(0,a.jsx)(t.strong,{children:"Python 3 interpreter"})," and make sure you have the following packages installed:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"wget"}),"\n",(0,a.jsx)(t.li,{children:"teradatasql"}),"\n",(0,a.jsx)(t.li,{children:"getpass"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"get-and-load-the-geojson-document-1",children:"Get and load the GeoJson document"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"import wget\ncountries_geojson=wget.download('https://datahub.io/core/geo-countries/r/countries.geojson')\n"})}),"\n",(0,a.jsx)(t.h3,{id:"open-the-geojson-file-and-type-it-as-a-dictionary",children:"Open the GeoJson file and type it as a dictionary"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"import json\nwith open(countries_geojson) as geo_json:\n    countries_json = json.load(geo_json)\n"})}),"\n",(0,a.jsx)(t.h3,{id:"optional-check-the-content-of-the-file",children:"Optional Check the content of the file"}),"\n",(0,a.jsx)(t.p,{children:"The good thing about loading this JSON in memory, if you are using an interactive Python terminal, is that you can now explore the document to understand its structure. For example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"print(countries_json.keys())\nprint(countries_json['type'])\nprint(countries_json['features'][0]['properties'].keys())\nprint(countries_json['features'][0]['geometry']['coordinates'])\n"})}),"\n",(0,a.jsx)(t.p,{children:"What we have here is a collection of GeoFeatures (as earlier)."}),"\n",(0,a.jsx)(t.p,{children:"We will now lightly model this data in a Vantage table, for that:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"We will load each feature as a raw."}),"\n",(0,a.jsx)(t.li,{children:"We will extract the properties that look interesting for immediate analysis (in our example, the country name and ISO code)."}),"\n",(0,a.jsx)(t.li,{children:"We will extract the geometry itself and load it as a separate column."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"To load a set of rows with a teradatasql cursor, we need to represent each row as an array (or tuples) of values, and the complete dataset as an array of all the row-arrays.\nThis is fairly easy to do as a list comprehension"}),"\n",(0,a.jsx)(t.p,{children:"For example:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"[(f['properties']['ADMIN'], f['properties']['ISO_A3'], f['geometry']) for f in countries_json['features'][:1]]\n"})}),"\n",(0,a.jsx)(t.p,{children:"NB: Not featured here, but recommended for richer datasets, consider loading the entire and original feature payload as a separate column (this is a JSON document). This will allow you to go back to the original record and extract new properties that you may have missed during your first analysis but have become relevant, directly in SQL and without having to reload the file entirely."}),"\n",(0,a.jsx)(t.h3,{id:"create-a-vantage-connection-and-load-our-file-in-a-staging-table",children:"Create a Vantage connection and load our file in a staging table"}),"\n",(0,a.jsxs)(t.p,{children:["Modify this code as needed with your Vantage host name, user name and specify an advanced login mechanism if any (eg. LDAP, Kerberos...) with the ",(0,a.jsx)(t.em,{children:"logmech"})," parameter if you need to.\nAll the connection parameters are documented on the teradatasql PyPi page there: ",(0,a.jsx)(t.a,{href:"https://pypi.org/project/teradatasql/",children:"https://pypi.org/project/teradatasql/"})]}),"\n",(0,a.jsx)(t.p,{children:"The code below simply creates a Vantage connection, and opens a cursor creating a table and loading it with our list."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"import teradatasql\nimport getpass\ntdhost='<Your-Vantage-System-HostName-Here>'\ntdUser='<Your-Vantage-User-Name-Here>'\n\n# Create a connection to Teradata Vantage\ncon = teradatasql.connect(None, host=tdhost, user=tdUser, password=tdPassword)\n\n# Create a table and load our country names, codes, and geometries.\nwith con.cursor () as cur:\n    cur.execute (\"create table stg_countries_map (country_nm VARCHAR(32), ISO_A3_cd VARCHAR(32), boundaries_geo CLOB CHARACTER SET UNICODE);\")\n    r=cur.execute (\"insert into stg_countries_map (?, ?, ?)\", [(f['properties']['ADMIN'], f['properties']['ISO_A3'], str(f['geometry'])) for f in countries_json['features']])\n"})}),"\n",(0,a.jsx)(t.h3,{id:"create-and-our-geography-refernce-table",children:"Create and our geography refernce table"}),"\n",(0,a.jsxs)(t.p,{children:["The code below performs the table creation from the Python interpreter, you can also run the ",(0,a.jsx)(t.em,{children:"sql"})," statement defined below in your prefered SQL client you might as well simply define this logic as a SQL view to avoid having to refresh this table."]}),"\n",(0,a.jsx)(t.p,{children:"We will use ClearScape analytics the GeomFromGeoJSON function to cast our geometry as a native Vantage geometry data type (ST_GEOMETRY)."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"# Now create our final reference table, casting the geometry CLOB as a ST_GEOMETRY object\nsql='''\nCREATE TABLE ref_countries_map AS\n(\nSEL\nISO_A3_cd\n,country_nm\n,GeomFromGeoJSON(boundaries_geo, 4326) boundaries_geo\nFROM stg_countries_map\n) WITH DATA\n'''\n\nWITH con.cursor () AS cur:\n    cur.execute (sql)\n"})}),"\n",(0,a.jsx)(t.h3,{id:"use-your-data",children:"Use your data"}),"\n",(0,a.jsxs)(t.p,{children:["That's all, you may now query your tables using your favourite ",(0,a.jsx)(t.em,{children:"SQL client"})," and Teradata's excellent ",(0,a.jsx)(t.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Teradata-VantageTM-Geospatial-Data-Types-17.20",children:"Geospatial data types and analytic functions"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"For example, using the two datasets we have loaded during this tutorial, check in what countries are"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"SEL cty.city_name, cty.city_coord, ctry.country_nm\nFROM cities_geo cty\nLEFT JOIN ref_countries_map ctry\n\tON ctry.boundaries_geo.ST_Contains(cty.city_coord)=1\nWHERE cty.city_name LIKE 'a%'\n"})}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"city_name"}),(0,a.jsx)(t.th,{children:"city_coord"}),(0,a.jsx)(t.th,{children:"country_nm"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Acapulco"}),(0,a.jsx)(t.td,{children:"POINT (-99.915979046410712 16.849990864016206)"}),(0,a.jsx)(t.td,{children:"Mexico Aosta"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"POINT (7.315002595706176 45.737001067072299)"}),(0,a.jsx)(t.td,{children:"Italy Ancona"}),(0,a.jsx)(t.td,{children:"POINT (13.499940550397127 43.600373554552903)"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Italy Albany"}),(0,a.jsx)(t.td,{children:"POINT (117.891604776075155 -35.016946595501224)"}),(0,a.jsx)(t.td,{children:"Australia"})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsx)(t.p,{children:"Note that none of the above code does not implement any control procedure or checks to, for example, manage the state of the target tables, manage locking, control error codes, etc... This is meant to be a demonstrations of the available features to acquire and use geospatial reference data."}),"\n",(0,a.jsxs)(t.p,{children:["Consider using ",(0,a.jsx)(t.a,{href:"https://pypi.org/project/teradatasqlalchemy/",children:"SQLAlchemy ORM"})," if you are defining your pipeline in Python, xref",":dbt",".adoc[dbt], or your favorite ELT and orchestration toolset to create your products you can operationalize."]}),"\n",(0,a.jsx)(t.p,{children:"You now can know how to get any open geographic dataset and use it to augment your analytics with Teradata Vantage!"}),"\n",(0,a.jsx)(i.Ay,{})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var a=n(96540);const o={},r=a.createContext(o);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);
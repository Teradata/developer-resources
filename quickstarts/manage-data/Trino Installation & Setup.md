# Getting Started with Trino CLI: Installation and Setup
1. Install Eclipse Termurin 24

2. Download the trino server file using the below command:                                                              

```
wget https://repo1.maven.org/maven2/io/trino/trino-server/474/trino-server-474.tar.gz 
```

3. Extract the contents of the file using below command

```
tar -xvzf trino-server-474.tar.gz
```

4. create etc directory in trino-server-474

5. create below mentioned files under etc directory

## config.properties  

```
coordinator=true
node-scheduler.include-coordinator=true
http-server.http.port=8080
discovery.uri=http://hostname:8080
```

## jvm.config

```
-server
-Xmx16G
-XX:InitialRAMPercentage=80
-XX:MaxRAMPercentage=80
-XX:G1HeapRegionSize=32M
-XX:+ExplicitGCInvokesConcurrent
-XX:+ExitOnOutOfMemoryError
-XX:+HeapDumpOnOutOfMemoryError
-XX:-OmitStackTraceInFastThrow
-XX:ReservedCodeCacheSize=512M
-XX:PerMethodRecompilationCutoff=10000
-XX:PerBytecodeRecompilationCutoff=10000
-Djdk.attach.allowAttachSelf=true
-Djdk.nio.maxCachedBufferSize=2000000
-Dfile.encoding=UTF-8
# Allow loading dynamic agent used by JOL
-XX:+EnableDynamicAgentLoading
```

## node.properties

```
node.environment=production
node.id=ffffffff-ffff-ffff-ffff-ffffffffffff
node.data-dir=/var/trino/data
```

## catalog directory

create a file named teradata.properties



## Teradata connector properties

```
connector.name=teradata
connection-url=jdbc:teradata://hostname/
connection-user=***
connection-password=***
```

6. Download trino-teradata zip file

7. Extract the zip file and place the folder: **trino-teradata-474** in **plugin** directory of **trino-server-474**

The structure should be as follows:

trino-server-474 → plugin → trino-teradata-474

8. Download the jar file from the given link in the trino-server-474 directory :

* https://repo1.maven.org/maven2/io/trino/trino-cli/474/trino-cli-474-executable.jar

* Make jar as executable by running ```chmod +x```

## Start Trino Server
The installation provides a ```bin/launcher``` script that can be used manually or as a daemon startup script.

```
bin/launcher start
```

## Start Trino CLI
Start Trino CLI using

```
java -jar trino-cli-*-executable.jar --version
```

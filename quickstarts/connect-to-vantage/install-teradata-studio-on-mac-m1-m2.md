---
id: install-teradata-studio-on-mac-m1-m2
sidebar_position: 1

author: Satish Chinthanippu, Janeth Graziani
email: satish.chinthanippu@teradata.com, developer.relations@teradata.com
page_last_update: July 15th, 2026
description: Run Teradata Studio on Apple Mac M1/M2/M3.
keywords: [Teradata Studio, Teradata Studio Express, teradata, vantage, Mac, Apple Mac, Apple Mac M1,Apple Mac M2, Apple Mac M3, Arm based Processor.]
---

# Use Teradata Studio/Express on Apple Mac M1/M2/M3

## Overview

This how-to goes through the installation of Teradata Studio and Teradata Studio Express on Apple Mac M1/M2/M3 machines.

## Steps to follow

1. Install Rosetta binary translator by running the following command in Terminal:
```bash 
softwareupdate --install-rosetta --agree-to-license
```

2. Download and install the x86 64-bit JDK 21 from your preferred vendor. For example, download x86 64-bit JDK 21 from [Azul](https://www.azul.com/downloads/?version=java-21&os=macos&architecture=x86-64-bit&package=jdk)
3. Download the latest [Teradata Studio](https://downloads.teradata.com/download/tools/teradata-studio) or [Teradata Studio Express](https://downloads.teradata.com/download/tools/teradata-studio-express) release:
   * Go to [Teradata Downloads](https://downloads.teradata.com/) and log in to the portal.
   * Select **MacOS** from the drop-down menu on the right-hand side box and download the latest [Teradata Studio](https://downloads.teradata.com/download/tools/teradata-studio) or [Teradata Studio Express](https://downloads.teradata.com/download/tools/teradata-studio-express) release from the Teradata Downloads page, then unzip the downloaded file.
   * Download version **20.00.00.10** or later.
   * Select the `mac_x86` zip file for macOS for Teradata Studio.
   * Accept the License Agreement by clicking **I Agree**.
   * In the File Download dialog box, click **Save**, choose a download location, and click **Save** again.
   * Unzip the downloaded file.
   :::note
   Starting from version 20.00.00.05, connections to Hadoop and Aster databases are no longer supported in Teradata Studio.
   :::
4. Install Teradata Studio via terminal:
```bash 
sudo installer -pkg ~/Downloads/TeradataStudio.pkg -target / -allowUntrusted 
```

## Summary

Apple has introduced ARM-based processors in Apple MAC M1/M2/M3 machines. Intel x64-based applications won't work by default on ARM-based processors. Teradata Studio or Teradata Studio Express also doesn't work by default as the current Studio macOS build is an intel x64-based application. This how-to demonstrates how to install Intel x64-based JDK and Teradata Studio or Teradata Studio Express on Apple Mac M1/M2/M3.
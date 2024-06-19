---
id: install-teradata-studio-on-mac-m1-m2
sidebar_position: 1

author: Satish Chinthanippu
email: satish.chinthanippu@teradata.com
page_last_update: August 14th, 2023
description: Run Teradata Studio on Apple Mac M1/M2.
keywords: [Teradata Studio, Teradata Studio Express, teradata, vantage, Mac, Apple Mac, Apple Mac M1,Apple Mac M2, Arm based Processor.]
---

import CommunityLink from '../_partials/community_link.mdx';

# Use Teradata Studio/Express on Apple Mac M1/M2

## Overview

This how-to goes through the installation of Teradata Studio and Teradata Studio Express on Apple Mac M1/M2 machines.

## Steps to follow

1. Install and enable Rosetta binary translator. Follow [the Apple Mac Rosetta Installation Guide](https://support.apple.com/en-us/HT211861).
2. Download and Install a x86 64-bit based JDK 11 from your preferred vendor. For example, you can download x86 64-bit JDK 11 from [Azul](https://www.azul.com/downloads/?version=java-11-lts&os=macos&architecture=x86-64-bit&package=jdkGet)
3. Download the latest Teradata Studio or Teradata Studio Express release from the Teradata Downloads page:
* [Teradata Studio](https://downloads.teradata.com/download/tools/teradata-studio)
* [Teradata Studio Express](https://downloads.teradata.com/download/tools/teradata-studio-express)
4. Install the Teradata Studio/Teradata Studio Express. Refer to [Teradata Studio and Teradata Studio Express Installation Guide](attachments/Studio-Express-InstallGuide.pdf) for details.

## Summary

Apple has introduced ARM-based processors in Apple MAC M1/M2 machines. Intel x64-based applications won't work by default on ARM-based processors. Teradata Studio or Teradata Studio Express also doesn't work by default as the current Studio macOS build is an intel x64-based application. This how-to demonstrates how to install Intel x64-based JDK and Teradata Studio or Teradata Studio Express on Apple Mac M1/M2.

<CommunityLink />
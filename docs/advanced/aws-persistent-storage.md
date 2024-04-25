---
id: aws-persistent-storage
title: Full Installation - AWS - Use Persistent Volumes
description: Learn how to use persistent volumes for AI Unlimited on AWS
sidebar_label: Persistent volumes on AWS
sidebar_position: 2
tags:
  - Install AI Unlimited
  - Install on AWS
  - Prerequisites to install AI Unlimited
  - Getting started
---

# Persistent volumes on AWS

***WIP***

With AI Unlimited, you can redeploy your engine for which the state needs to be persisted regardless of container, pod, or node crashes or terminations. This feature requires persistent storage, that is, storage that lives beyond the lifetime of the container, pod, or node. AI Unlimited uses the instance root volume of the instance to save data in the JupyterLab **/userdata** folder, AI Unlimited database, and configuration files. The data persists if you shut down, restart, or snapshot and relaunch the instance. However, if the instance is terminated, your JupyterLab data and AI Unlimited database are lost, and this could pose problems if running on-the-spot instances, which may be removed without warning. If you want a highly persistent instance, enable the `UsePersistentVolume` parameter to move the JupyterLab data and AI Unlimited database to a separate volume.

The following recommended persistent volume flow remounts the volume and retains the data:

1. Create a new deployment with `UsePersistentVolume` set as **New** and `PersistentVolumeDeletionPolicy` set as **Retain**.
2. In the stack outputs, note the volume-id for future use.
3. Configure and use the instance until the instance is terminated.
4. On the next deployment, use the following settings:
    * `UsePersistentVolume` set as **New**
    * `PersistentVolumeDeletionPolicy` set as **Retain** 
    * `ExistingPersistentVolumeId` set to the volume-id from the previous deployment

You can relaunch the template with the same configuration whenever you need to recreate the instance with the earlier data.


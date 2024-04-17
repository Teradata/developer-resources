---
id: docker-when-you're-done
title: When you're done
description: Prerequisites for installing Teradata AI Unlimited using Docker.
sidebar_position: 7
pagination_next: null
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# When you're done

To avoid incurring charges to your [CSP](/docs/glossary.md#glo-csp) account for engine resources used, [suspend your projects](/docs/manage-ai-unlimited/suspend-and-resume-project.md).

If you are done with the QuickStart, and want to free up resources on your computer, run this command to stop and remove all of the containers and networks that were created.

<Tabs>
<TabItem value="aws" label="AWS">
  ```bash 
docker-compose -f ai-unlimited.yaml -f aws-credentials-env-vars.yaml -f jupyter.yaml down
  ```
</TabItem>

<TabItem value="azure" label="Azure">
 ```bash
docker-compose -f ai-unlimited.yaml -f azure-credentials-env-vars.yaml -f jupyter.yaml down
  ```
</TabItem>
</Tabs> 

You can also use the `-v` option to remove the Docker volume that contains the engine data, if you do not plan to restart the engine. 

***What do we mean by "restart the engine"? Are we just talking about restoring the engine for a project? If so, then this should go after the first para? (I know... I moved it from somewhere.)***

***Jack says it's not about a Docker volume. It's a bind mount of a local directory. See his comment in Slack.***

***Does this have to do with "Set environment variables" in the "Run AIU and J topic? The "configuration and data files"?***
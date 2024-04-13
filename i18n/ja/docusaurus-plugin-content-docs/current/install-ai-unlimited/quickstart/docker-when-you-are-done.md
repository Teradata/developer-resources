---
id: docker-when-you're-done
title: 終わったら
description: Prerequisites for installing Teradata AI Unlimited using Docker.
sidebar_position: 7
pagination_next: null
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 終わったら

To avoid incurring charges to your CSP account for engine resources used, make sure you suspend the project.

Once you’ve finished working on your project, Teradata recommends running the following command to stop and remove all of the containers, and networks that were created. This can be helpful if you want to free up resources on your computer. 

If you do not plan to restart the engine, you can also use the `-v` option to remove the Docker volume that contains the engine data.

***Is this true: The first para is about suspending, the second para is about never needing the project again, and the third para is about being done with the QS?***

***Is the `-v` option something they add to the code that's shown in the block? Does it need its own block?***

***3rd para: Not planning to restart the engine sounds like the project level, as project and engine are aligned terms.***

<Tabs>
<TabItem value="aws" label="AWS">
  ```bash 
docker-compose -f ai-unlimited.yaml -f azure-credentials-env-vars.yaml -f jupyter.yaml down
  ```
</TabItem>

<TabItem value="azure" label="Azure">
 ```bash
docker-compose -f ai-unlimited.yaml -f aws-credentials-env-vars.yaml -f jupyter.yaml down
  ```
</TabItem>
</Tabs> 




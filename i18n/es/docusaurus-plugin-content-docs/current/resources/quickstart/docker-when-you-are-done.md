---
id: docker-when-you're-done
title: Inicio rápido | Cuando haya terminado
description: Aprenda qué hacer cuando haya terminado de utilizar el Inicio rápido.
sidebar_label: Cuando haya terminado
sidebar_position: 7
pagination_prev: null
pagination_next: null
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Cuando haya terminado

Para evitar incurrir en cargos por recursos del motor innecesarios, [suspenda los proyectos](../../manage-ai-unlimited/suspend-and-restore-project.md) en los que no esté trabajando. Siempre puede restaurarlos.

Si ha terminado con el inicio rápido y desea liberar recursos en su ordenador, ejecute este comando para detener y eliminar todos los contenedores y redes que se crearon.

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

También puede eliminar cualquier directorio o archivo local que contenga datos del motor y que haya montado en los contenedores Docker. 


---
id: create-oauth-app
title: Crear una aplicación OAuth
description: Permitirá que AI Unlimited utilice la autenticación de su proveedor de Git para administrar los repositorios del proyecto.
sidebar_label: Crear una aplicación OAuth
sidebar_position: 4
pagination_prev: null
pagination_next: null
---

# Crear una aplicación OAuth de GitHub o GitLab

Una aplicación OAuth permite a un usuario otorgar acceso a su cuenta en un sitio web o servicio a su cuenta en otro, sin compartir su contraseña.

Cree una aplicación [OAuth](https://oauth.net/2/) para que AI Unlimited pueda usar la autenticación de GitHub o GitLab para administrar cada [repositorio de proyectos](../glossary.md#project-repository) y, cada vez que se implemente el motor, derivar los usuarios del motor de los colaboradores que haya agregado al repositorio.

1. Inicie sesión en su cuenta de GitHub o GitLab. 

2. Cree una aplicación OAuth. Consulte [GitHub: Crear una aplicación OAuth](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app) o [GitLab: Crear una aplicación OAuth](https://docs.gitlab.com/ee/integration/oauth_provider.html).
  
    Al registrar la aplicación OAuth, utilice estas URL.

    - URL de la página de inicio: `http://[ip_or_hostname]:[port]`<br/>
      :::note
      Esta es la URL del administrador que recibió al final del proceso de instalación.
      :::

    - URL de devolución de llamada de autorización: `[Homepage URL]/auth/github/callback`
    
    Para GitLab, seleccione los **Ámbitos** de OAuth apropiados como se define en [Aplicaciones autorizadas](https://docs.gitlab.com/ee/integration/oauth_provider.html#view-all-authorized-applications).

3\. Copie y conserve el **ID de cliente** y el **Secreto de cliente**, que necesitará para configurar AI Unlimited. 

Ahora está listo para [configurar AI Unlimited](../install-ai-unlimited/setup-ai-unlimited.md).



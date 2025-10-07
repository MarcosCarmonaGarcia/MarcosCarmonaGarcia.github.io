---
title: Vulnerabilidad IDOR
excerpt: IDOR
publishDate: 'Oct 11 2025'
tags:
  - IDOR
seo:
  image:
    src: '/idor.png'
    alt: Imagen creada con Chat GPT
---

![idor](/idor.png)

***Resumen***: La vulnerabilidad IDOR trata de conseguir ver o acceder a objetos a los que no deberíamos.

***Nota***: El laboratorio es de [Portswigger](https://portswigger.net/web-security/access-control/lab-insecure-direct-object-references)

## Procedimiento

En este labnoratorio la vulnerabilidad esta en el live chat que tiene implementado desde el cual podemos enviar mensajes y descargar nuestro nuestras conversaciones.Tenemos que manipular la petición para poder descargar el char de otro usuario.

[![chat](/chat_IDOR.png)](/chat_IDOR.png)

Vemos que nuestra conversación tiene el id 2 y es un arcchivo de texto. Vamos a interceptar la perición.

Vemos en Burpsuite el campo donde se envía el número de conversación.

[![Burpsuite](/Burp_IDOR.png)](/Burp_IDOR.png)

Ahora solo tenemos que cambiar ese número en Burp y enviar la petición, así se descargará el chat de otro usuario.

[![Chat persona](/chat_persona_IDOR.png)](/chat_persona_IDOR.png)



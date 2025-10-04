---
title: Vulnerabilidad Open Redirect
excerpt: Explotación Open Redirect
publishDate: 'Oct 04 2025'
tags:
  - open redirect
seo:
  image:
    src: '/redirect.png'
    alt: Imagen creada con Chat GPT
---

![redirect](/or.png)

***Resumen***: Open Redirect es una vulnerabilidad que nos permite manipular un enlace o hipervínculo para poder llevar al usuario a donde queramos.

***Nota***: El laboratorio ha sido creado con chatGPT y desplegado en un Kali Linux.

## Open Redirect básico

Solo tenemos que poner el puntero encima del link y ver a donde nos lleva, pegarlo en el navegador y cambiar la dirección por la que queramos, si nos deja, es que es vulnerable.

[![or_basico](/or_basico.png)](/or_basico.png)
[![web_nueva](/or_web_nueva.png)](/or_web_nueva.png)

## Bypass restricciones Open Redirect

Si no nos deja redirigir el tráfico a donde queramos, tan solo tenemos que concatenar la URL con un @ a la dirección que queramos.

[![concatenar](/concatenar_or.png)](/concatenar_or.png)

También podemos reaizar el proceso de manera automática con la herramienta [Oralyzer](https://github.com/r0075h3ll/Oralyzer.git).

Con esta herramienta de facil uso comprobamos posibles redirecciones en el objetivo.

[![Oralyzer](/Oralyzer.png)](/Oralyzer.png)











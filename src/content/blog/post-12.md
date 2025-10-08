---
title: Vulnerabilidad SSRF
excerpt: SSRF
publishDate: 'Oct 12 2025'
tags:
  - ssrf
seo:
  image:
    src: '/ssrf.png'
    alt: Imagen creada con Chat GPT
---

![ssrf](/ssrf.png)

***Resumen***: En este post se muestra un pequeño ejemplo de como explotar la vulnerabilidad Server-Side Request Forgery.

***Nota***: El laboratorio usado es [Laboratorio](https://github.com/blabla1337/skf-labs/tree/master/server-side-request-forgery-ssrf)

## Procedimiento

Para explotar esta vulnerabilidad, tenemos que conseguir que el servidor ejecute acciones que nosotros deseamos y que no deberíamos poder hacerlas, como ir a una url, mostrar rutas interiores o conectarnos a nuestra máquina.

Como vemos en la imagen el laboratorio muestra un formulario donde podemos introducir una URL, ahí es donde está habilitada esta vulnerabilidad, así que vamos a probar a introducir una dirección.

[![panel](/panel_ssrf.png)](/panel_ssrf.png)

La dirección existe, así que vamos a conectarnos a nuestra máquina. Lo primero es abrir un servidor http en python por el puerto 8000 (o el que queramos) en nuestro Kali.

```bash
python3 -m http.server 8000
````
[![http](/http_ssrf.png)](/http_ssrf.png)

Ahora introducimos nuestra ip y el puerto y ya estaremos conectados. 

[![web](/web_ssrf.png)](/web_ssrf.png)

Vemos que nuestro servidor http sirve la petición.

[![servir](/servir_ssrf.png)](/servir_ssrf.png)

La vulnerabilidad ha sido explotada de manera fácil. Pero ahí no queda la cosa, podemos hacer que el servidor se conecte a su propia máquina y nos muestre rutas que de otra manera no lograríamos ver.


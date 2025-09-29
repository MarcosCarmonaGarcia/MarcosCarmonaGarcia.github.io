---
title: Hacking Wordpress con WPScan
excerpt: Enumeración y explotación de Wordpress
publishDate: 'Sep 29 2025'
tags:
  - wordpress
seo:
  image:
    src: '/wordpress.png'
    alt: Imagen creada con Chat GPT
---

***Resumen***: Wordpress es el CMS (Gestor de contenidos) más usado hoy en día. Por eso es el más susceptible de ser atacado por los malos. Su jerarquía de plsugins y themes lo hacen extremadamente vulnerable si no se actualizan todos sus comaponentes.

***Nota***: En este caso el laboratorio es una instancia de Worpress dockerizada que he conseguido en este [repo de Github](https://github.com/fsgreco/docker-wordpress).

## Identificación de wordpress
Lo primero que tenemos que hacer, es averiguar que ususarios tenemos en el sistema, para eso usaremos la herramienta WPScan, que nos listará todos los usuarios que hay en el wordpress.

```bash
 wpscan --url 'http://localhost:8000' -e u
 ````
[![Enumeración_usuarios](/usuarios_w.png)](/usuarios_w.png)

Como vemos en la imagen, nos ha encontrado el usuario **admin**, y como tenemos el Xmlrpc activo, podemos hacer la fuerza bruta mucho más rápido.

Para comprobar la existencia de ese archivo hacemos un curl teniendo que devolvernos un code 200.

```bash
curl -I https://tusitio.com/xmlrpc.php
```
[![Xmlrpc](/Xmlrpc.png)](/Xmlrpc.png)


## Fuerza bruta a login Wordpress

Ahora toca el siguiente paso, la fuerza bruta al usuario encontrado, para eso seguimos con WPScan.

```bash
 wpscan --url 'http://localhost:8000' -U admin -P diccionario
 ````

 [![Bruteforce](/Bruteforce_w.png)](/Bruteforce_w.png)

 Vemos como usando el usuario admin y un diccionario de contraseñas, nos lo encuentra rápido.

 ## Enumeración de plugins

 El siguiente paso es enumerar los plugins, para ello debemos logearnos en la web de WPScan y conseguir el token personal, de lo contrario nos dará falsos positivos.

 ```bash
  wpscan --url 'http://localhost:8123' -e u,p --api-token="tutoken" --plugins-detection aggressive -t 50
  ````

Como vemos en la siguiente imagen, nos detecta todos los plugins.

 [![plugins_w](/plugins_w.png)](/plugins_w.png)

 Ahora podemos investigar a ver si existe alguna vulnerabilidad o exploit en alguno de ellos.

 ## Intrusión al servidor

 Ya estamos dentro de nuestro Wordpress, pero lo que queremos es pasar dentro de la máquina, para eso usaremos una parte importante de Wordpress como es un editor de temas, que en este caso está fácil con el plugin **theme-editor** econtrado.

 Solo tenemos que abrir un archivo del tema y sustituir el código por el siguiente: [pentestmonkey](https://github.com/pentestmonkey/php-reverse-shell/blob/master/php-reverse-shell.php), poner en escucha nuestro nc en el puerto configurado y recargar el wordpress.

 ​​ [![plugin_word](/plugin_word.png)](/plugin_word.png)

 Y ya estamos dentro.

  [![dentro_w](/dentro_w.png)](/dentro_w.png)
















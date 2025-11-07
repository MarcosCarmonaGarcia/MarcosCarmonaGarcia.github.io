---
title: Escalada de privilegios SUID
excerpt: SUID
publishDate: 'Nov 6 2025'
tags:
  - suid
seo:
  image:
    src: '/suid.png'
    alt: Imagen creada con Chat GPT
---

![SUID](/suid.png)

***Resumen***: Una vez que hemos vulnerado un activo, necesitamos escalar privilegios a un usuario con los máximos permisos.

***Nota***: La máquina que se usa es de la plataforma [Dockerlabs](https://mega.nz/file/rZlAERjY#152uP-zS7pTC0hbPaZB7aO6_puij633u4pW-jpMuctk) y se llama Injection.

## Procedimiento

Estamos dentro de la máquina, y vemos que otras maneras de escalar privilegios no funcionan, así que tenemos que recurrir a buscar los binarios que podamos ejecutar con los máximos privilegios, así:

```bash
 find / -perm -4000 2>/dev/null
 ````



[![Find](/find_suid.png)](/find_suid.png)

Una vez que tenemos el listado de binarios, los buscamos uno por uno (siempre que ninguno nos llame la atención) en la web [GTFobins](https://gtfobins.github.io) para ver si alguno nos permite escalar privilegios. En este caso es env.

[![Env](/env_suid.png)](/env_suid.png)

Como vemos la propia página nos proporciona el comando para escalar, usando siempre la ruta completa.

```bash
 /usr/bin/env /bin/sh -p
 ````
[![Root](/root_suid.png)](/root_suid.png)

Lo ejecutamos y ya somos root.



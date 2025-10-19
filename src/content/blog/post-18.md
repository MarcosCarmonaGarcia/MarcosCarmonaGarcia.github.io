---
title: Escalada de privilegios SUDO
excerpt: SUDO
publishDate: 'Oct 19 2025'
tags:
  - Sudo
seo:
  image:
    src: '/sudo.png'
    alt: Imagen creada con Chat GPT
---

![Sudo](/sudo.png)

***Resumen***: Los scripts en Linux nos permiten escalar privilegios de manera sencilla y rápida. En este post usaremos [GTFObins](https://gtfobins.github.io), que nos dará los comandos necesarios para escalar.

***Nota***: Claramente debemos tener un usuario sin privilegios en la máquina atacada. En este caso es un laboratorio de Docker hecho solo para ello.

## Procedimiento

Una vez hecho el proceso de intrusión, y verificado que tenemos un usuario sin privilegios, procedemos a escalar  a root usando los ejecutables que nos proporcione el siguiente comando:

```bash 
sudo -l
```
 [![Vim](/vim_sudo.png)](/vim_sudo.png)

Vemos que el usuario victim puede ejecutar vim como root, así que vamos a la web [GTFobins](https://gtfobins.github.io) a ver que comando nos permite escalar privilegios.

Ponemos en el buscador Vim y accedemos a la sección SUDO.

[![GTF](/gtf_sudo.png)](/gtf_sudo.png)

Probamos el comando y vemos que ya somos root.

[![Root](/root_sudo.png)](/root_sudo.png)


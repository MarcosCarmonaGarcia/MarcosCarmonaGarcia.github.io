---
title: Vulnerabilidad Command Injection
excerpt: Commad Injection
publishDate: 'Oct 13 2025'
tags:
  - Command Injection
seo:
  image:
    src: '/ci.png'
    alt: Imagen creada con Chat GPT
---

![ci](/ci.png)

***Resumen***: Esta vulenrabilidad nos permite ejecutar código dentro de un intérprete dentro de la web, pudiendo así acceder a la máquina o visualizar usuarios y directorios.

***Nota***: El laboratorio es [Dockerlabs](https://mega.nz/file/4GtWBbQZ#HMo12GRIHABDnyRK2mO_AKuFhPrMO-oXO7hLQpmyadA)

## Procedimiento

Como podemos ver, la web nos muestra un campo input donde podemos introducir una dirección y hacer ping. Nosotros vamos a introducir un comado para ejecutarlo.
Después de varias pruebas, veo que no basta con introducir el comando por sí solo, si no que hay que concatenarlo junto con el comando que tiene que ejecutar el input, en este caso una ip donde hacer ping.

```bash
127.0.0.1 && whoami
````

Vemos como nos saca el usuario correspondiente, en este caso freddy.

[![whoami](/freddy_ci.png)](/freddy_ci.png)

Ahora vamos a ponernos a escuchar con nuestro nc en el puerto 443 y haciendo uso de la web [revshell](https://www.revshells.com/) creamos una shell reversa para entrar dentro de la máquina.

[![reverse_shell](/rs_ci.png)](/rs_ci.png)

No olvidemos encapsular el comando que nos genera dentro de comillas y precederlo de bash -c.

Una vez ejecutado el comando, ya estaremos dentro de la máquina.

[![reverse_shell](/encapsulado_ci.png)](/encapsulado_ci.png)

[![dentro](/dentro_ci.png)](/dentro_ci.png)

Así es como se explota un Command Injection.


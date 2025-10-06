---
title: noSQL Injection
excerpt: noSQL Injection
publishDate: 'Oct 10 2025'
tags:
  - noSQL injection
seo:
  image:
    src: '/nosql.png'
    alt: Imagen creada con Chat GPT
---

![nosql](/nosql.png)

***Resumen***: Podemos exploitar esta vulnerabilidad con una simple expresión regular cambiando la captura de Burpsuite.

***Nota***: El laboratorio ha sido creado con chatGPT y se trata de un panel de login en el cual haremos el bypass.

## Procedimiento

Tenemos frente a nosotros, un panel de login que es vulnerable a noSQL. 

[![Laboratorio](/laboratorio_nosql.png)](/laboratorio_nosql.png)

Probamos unas credenciales ficticias y capturamos la petición con Burpsuite.

[![Repeater](/repeater_nosql.png)](/repeater_nosql.png)

Mandamos la petición al repeater y preparamos nuestro payload, en este caso será una expresión regular que dirá que el mail NO es el que ponemos y la pass tampoco. Esto hará un bypass vocándonos todos las credenciales de la base de datos.

```bash
{"email": {"$ne": "pato"}, "password": {"$ne": "bar"}}
````
Es importante mantener los campos idénticos a los de la captura de burpsuite.

[![Bypass](/bypass_nosql.png)](/bypass_nosql.png)

Si no funciona nuestro payload, siempre podemos buscar otros en internet, hay millones.
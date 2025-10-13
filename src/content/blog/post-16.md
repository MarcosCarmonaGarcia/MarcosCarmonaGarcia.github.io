---
title: Nikto escaner de vulnerabilidades web
excerpt: Nikto
publishDate: 'Oct 16 2025'
tags:
  - Nikto
seo:
  image:
    src: '/ssti.png'
    alt: Imagen creada con Chat GPT
---

![Nikto](/nikto.png)
***Resumen***: Nikto es un escaner de vulenrabilidades web, que nos permite escanearlas de manera fácil y amigable. Este es su repositorio [Nikto](https://github.com/sullo/nikto.git)

**Nota**: Para esta demostración se ha usado [Metasploitable2](https://docs.rapid7.com/metasploit/metasploitable-2/)

## Demostración

Suponiendo que tenemos una web que queremos escanar, tan solo tenemos que poner la dirección o IP en nikto acompañado  del parámetro -h para iniciar el escaneo.

```bash
nikto -h http://192.168.1.32/mutillidae
````

Y vemos como nos encuentra vulenrabilidades.

[![Resultado](/resultado_nikto.png)](/resultado_nikto.png)

***Más parámetros***

También podemos hacer escaneos por https con los siguientes parámetros:

```bash
nikto --ssl -h <URL_del_sitio>
```

Si queremos especificar el puerto 443 lo hacemos así:

```bash
nikto -h <IP_o_dominio> -p 443 
````
Como vemos, el escaneo y detección de vulnerabilidades es muy fácil con esta herramienta.




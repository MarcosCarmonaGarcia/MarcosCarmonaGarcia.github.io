---
title: Vulnerabilidad Local File Inclusion
excerpt: Explotación Local File Inclusion
publishDate: 'Oct 07 2025'
tags:
  - Local File Inclusion
seo:
  image:
    src: '/lfi.png'
    alt: Imagen creada con Chat GPT
---

![lfi](/lfi.png)

***Resumen***: Esta vulenrabilidad nos permite leer archivos del sistema a través de un parámetro de la URL de la web.

***Nota***: Para este laboratorio se utilizó [Metasploitable2](https://docs.rapid7.com/metasploit/metasploitable-2/) en el que viene la suite vulnerable Mutiilidae.

[![Mutillidae](/Mutillidae.png)](/Mutillidae.png)

## Procedimiento

La cuestión es encontrar un parámetro vulenrable donde podamos hacer un Path Traversal para recorrer todo el arbol de directorios hasta el archivo que queramos leer. En este casi práctico es muy fácil ya que solo tenemos que ir hacia atrás el número suficiente de veces como para poder leer el archivo deseado-

```bash
192.168.1.35/mutillidae/index.php?page=arbitrary-file-inclusion.php/../../../../../etc/passwd
```
Y vemos como conseguimos leer el archivo.

[![traversal](/traversal.png)](/traversal.png)

Este es la forma más básica de hacerlo, pero no siempre nos vamos a encontrar las cosas tan fáciles.



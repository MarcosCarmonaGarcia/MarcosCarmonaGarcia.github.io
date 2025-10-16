---
title: Nuclei, escaner de vulnerabilidades web
excerpt: Nuclei
publishDate: 'Oct 17 2025'
tags:
  - Nuclei
seo:
  image:
    src: '/nuclei.png'
    alt: Imagen creada con Chat GPT
---

![Nuclei](/nuclei.png)

***Resumen***: En el post enterior, hemos tratado el tema de los escáneres de vulnerabilidades haciendo referemcia a [Nikto](https://marcoscarmonagarcia.github.io/blog/post-16/), en este caso veremos otro escaner llamado Nuclei.

***Nota***: Nuclei es mucho más amigable que Nikto, o mí, por lo menos, me gusta más.

## Nuclei

Nuclei lo podemos conseguir en el siguiente [repositorio](https://github.com/projectdiscovery/nuclei.git), aunque también podemos instalarlo con un simple:
```bash  
sudo apt install nuclei 
```

## Métodos de uso

Para usarlo tan solo hay que indicarle la URL que queremos escanear:
```bash
 nuclei -u url
 ```
 [![Nuclei](/escaner_nuclei.png)](/escaner_nuclei.png)

 Nuclei, es un modelo basado en plantillas, con lo que cada una está referida a una vulnerabilidad y nos permite crear nuestras propias plantillas.

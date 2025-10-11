---
title: Vulnerabilidad Server Side Template Injection
excerpt: Server Side Template Injection
publishDate: 'Oct 14 2025'
tags:
  - Server Side Template Injection
seo:
  image:
    src: '/ssti.png'
    alt: Imagen creada con Chat GPT
---

![ssti](/ssti.png)

***Resumen***: Esta vulnerabilidad nos permite obtener un inyección de comandos en aquelaas webs que se generen con plantillas.

***Nota***: El laboratorio que se usa en el post es este: [Laboratorio](https://github.com/Yavuzlar/VulnLab.git)

## Procedimiento

Tenemos una web en la que tenemos un input para enviar datos, así que probamos a ver si es vulnerable a SSTI. Para ello hay que comprobar si los datos que notros enviemos los trata como tales.

[![stti](/lab_ssti.png)](/lab_ssti.png)

En este caso enviamos {{2*2}} y vemos como trara estos datos, si los suma es que es vulenrable y está ejecutando comandos. Vemos que sí, que los suma.

[![suma](/suma_ssti.png)](/suma_ssti.png)

Para seguir con la inyección de comandos, debemos saber que es lo que corre por detrás de la web. En este caso es un simple boostrap al ser un entorno de pruebas, pero podría ser cualquiero otro motor de plantillas. Eso se puede saber con [Wappalyzer](https://www.wappalyzer.com).

Ahora solo tenemos que buscar o crear un payload para inyectar comandos. En Github hay muchos. 

Pero no es eso lo único que podemos hacer, si queremos, podemos inyectar una reverse shell y conseguir un shell remota.











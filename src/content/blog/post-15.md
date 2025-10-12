---
title: Hacking API
excerpt: Hacking a una API
publishDate: 'Oct 15 2025'
tags:
  - Hacking API
seo:
  image:
    src: '/ssti.png'
    alt: Imagen creada con Chat GPT
---

![Api](/api.png)

***Resumen***: Una API es un fragmento de código que se encarga de comunicar dos aplicaciones. Hace que el usuario interactúe con el Backend.

***Nota***: Para esta práctica usaremos los laboratorios de [Portswigger](https://portswigger.net/web-security/api-testing/lab-exploiting-unused-api-endpoint) y chatGPT.

## Procedimiento

[![Laboratorio](/laboratorio_API.png)](/laboratorio_API.png)

Una vez en el laboratorio, vemos una página web que tiene varios artículos a la venta, lo que haremos es modificar el comportamiento de la API para que el precio sea cero.

Abrimos nuestro Burpsuite y lo NO lo ponemos a interceptar aunque sí usaremos el proxy para que las peticiones pasen por él. 

Nos movemos al apartado **http history** después de pinchar en un producto. Ahí vemos todos los links y observamos que uno es a la API.

[![Link](/link_API.png)](/link_API.png)

Enviamos la petición al repater.

[![Producto](/producto_API.png)](/producto_API.png)

Ahora cambiamos el método por PATCH una vez autenticados en la web y cambiamos el precio por cero.

Para hacerlo solo hay que añadir los siguientes campos:

Después de HOST.

```bash 
Content-Type: application/json
````
Abajo del todo.

```bash
{"price":0}
```

[![stti](/campos_API.png)](/campos_API.png)

Al enviar la petición modificada, el precio del producto debería cambiar a cero.

[![Price](/price_API.png)](/price_API.png)

Ahora, si recargamos la página ya podemos comprar el producto a cero.

[![0](/0_API.png)](/0_API.png)

## Inyección SQL a una API

En este siguiente laboratorio, creado con chatGPT, vemos como usamos el endpoint de la API para hacer una inyección de código a la base de datos que corre por detrás.

Entramos en la dirección de nuestro [endpoint](https://www.ibm.com/es-es/think/topics/api-endpoint) enocontrado:

```bash
 http://localhost:5000/api/search?name=Alice
 ````
[![Endpoint](/endpoint_API.png)](/endpoint_API.png)

Vemos como la URL muestra el parámetro name para encontrar un usuario, ahí haremos una inyección de lo más básica.

```bash
http://localhost:5000/api/search?name='or 1=1-- -
```

Y vemos como nos muestra el contenido de la bases de datos.

[![Db](/db_API.png)](/db_API.png)









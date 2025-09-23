---
title: Las maravillas de nuestra herramienta preferida, Nmap.
excerpt: Nmap es una de las herramientas más usadas en el mundo del pentesting, por eso dispone de muchísimos parámetros que tenemos que conocer para hacer un buen uso de ella.
publishDate: 'Sep 23 2025'
tags:
  - Nmap
seo:
  image:
    src: '/Nmap.png'
    alt: Imagen creada con Chat GPT
---

![Nmap](/Nmap.png)



***Resumen***: Nmap (Network Mapper) es una herramienta de código abierto para exploración de redes y auditoría de seguridad. Permite descubrir hosts, identificar puertos y servicios, detectar versiones y sistemas operativos, ejecutar scripts de la Nmap Scripting Engine (NSE) y exportar resultados en varios formatos. Es la herramienta de referencia para pentesters y administradores de red. 

***Nota***: Nmap tiene decenas de opciones y combinaciones..

![Básico](/basico.png)

En la imagen anterior, vemos el escaneo básico y más sencillo que podemos hacer con ***Nmap***.

```bash
nmap ip_objetivo
```

Podemos escanear un subred completa con los siguientes parámetros:

```bash
nmap ip_objetivo/24
````

* Escaneo TCP Connect (completo)
````bash
nmap -sT ip_objetivo
````

* SYN Scan
```bash
nmap -sS ip_objetivo
````

* Escaneo UDP
```bash
nmap -sU ip_objetivo
````

* Detección de servicios
```bash
nmap -sV ip_objetivo
```

## Escaneo sigiloso

* Reducir velocidad
```bash
nmap -T2 ip_objetivo
```

* Fragmentar paquetes
```bash
nmap -f ip_objetivo
````

* Cambiar puerto de origen
```bash
nmap --source-port puerto ip_objetivo
```

## Lanzar scripts

* Scripts por defecto
```bash
nmap -sC ip_objetivo
````

* Script específico (ej: enumerar SMB)
```bash
nmap --script smb-enum-shares ip_objetivo
````

Estos son solo algunos de los parámetros que nos sirve Nmap, pero como es una herramienta tan completa, aquí os dejo una chuleta en PDF con los comandos más utilizados. 
[Chuleta Nmap](/Descargas/Chuleta_nmap.pdf)



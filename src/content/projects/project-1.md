---
title: "Extractor de emails de documentos PDF/TXT"
description: "Script hecho en python para la extracción de emails de diversos formatos."
publishDate: "2025"
seo:
  image:
    src: "/Extractor.png"
    alt: "Project preview"
---

![Project preview](/Extractor.png)

Claro, a continuación te presento una descripción en formato Markdown para tu script de extracción de correos electrónicos en Python:

---

# Extractor de Correos Electrónicos

Este script en Python permite extraer direcciones de correo electrónico desde documentos en formato PDF y TXT. Es útil para auditorías de seguridad, análisis forenses o recopilación de datos en proyectos de pentesting.

## 🧩 Descripción

El script escanea archivos PDF y TXT en busca de patrones que coincidan con direcciones de correo electrónico válidas. Utiliza expresiones regulares para identificar y extraer los correos electrónicos encontrados en el contenido de los documentos.

## ⚙️ Requisitos

* Python 3.x
* Bibliotecas necesarias:

  * `re` (para expresiones regulares)
  * `PyPDF2` (para leer archivos PDF)

## 🛠️ Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/MarcosCarmonaGarcia/Extractor_emails.git
   cd Extractor_emails
   ```

2. Instala las dependencias necesarias:

   ```bash
   pip install -r requirements.txt
   ```

## 📄 Uso

Ejecuta el script pasando como argumento el archivo o directorio que deseas analizar:

```bash
python extractor_emails.py archivo.pdf
```

El script procesará el archivo y mostrará en consola las direcciones de correo electrónico encontradas.

## 🔐 Aplicaciones

* Auditorías de seguridad para identificar correos electrónicos expuestos.
* Análisis forenses de documentos.
* Recopilación de datos para pruebas de penetración.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

---



# 🛠️ Toolkit_pentesting
**Herramienta multipropósito de pentesting**  
*Por Marcos Carmona García*

---

![license](https://img.shields.io/badge/license-MIT-green) ![python](https://img.shields.io/badge/python-3.x-blue) ![status](https://img.shields.io/badge/status-alpha-orange)

> Toolkit_pentesting es un script en Python diseñado como un conjunto de utilidades ligeras para tareas comunes de pentesting: reconocimiento DNS, escaneo de puertos, wrapper para `nmap`, fuerza bruta de directorios y utilidades auxiliares.  
> **Propósito:** aprendizaje y uso en entornos autorizados (hacking ético).

---

## 🧭 Contenido
- `toolkit_pentester.py` — script principal (CLI).
- `README.md` — documentación (este archivo).


---

## 🔎 Características principales
- Banner ASCII de presentación.  
- Escaneo de puertos TCP (uso de sockets).  
- Wrapper para ejecutar `nmap` con argumentos personalizados.  
- Bruteforce de directorios usando una wordlist con `curl` para comprobar códigos HTTP.  
- Lookup DNS y Reverse DNS (`dig +short`).  
- Escaneo paralelo de puertos con threads.

---

## ⚙️ Requisitos
- Python 3.x  
- Herramientas del sistema (se usan llamadas a):
  - `nmap` (si quieres usar la opción `--nmap`)
  - `curl` (para comprobación de directorios)
  - `dig` (para DNS / reverse DNS)
- Permisos: algunas funciones requieren **ejecución como root** (el script verifica `geteuid()`).

> Si instalas en Linux, usa `sudo apt install nmap dnsutils curl` (o el equivalente en tu distro).

---

## 🚀 Instalación rápida
```bash
# clona el repositorio
git clone https://github.com/MarcosCarmonaGarcia/Toolkit_pentesting.git
cd Toolkit_pentesting

# (opcional) crea entorno virtual
python3 -m venv .venv
source .venv/bin/activate

# ejecutar ayuda
python3 toolkit_pentester.py --help
```

---

## ▶️ Uso y ejemplos

> El script requiere el argumento `--target` / `-t` (IP o dominio).

### Escaneo básico de puertos (1–1024)
```bash
sudo python3 toolkit_pentester.py -t 192.168.1.10 --scan
```

### Escaneo con nmap (pasa argumentos a nmap)
```bash
sudo python3 toolkit_pentester.py -t example.com --nmap -A -sV
# o
sudo python3 toolkit_pentester.py -t example.com --nmap -p 1-1000 -sV
```

### Fuerza bruta de directorios (requiere wordlist)
```bash
sudo python3 toolkit_pentester.py -t example.com --dirb wordlist.txt
```

### Lookup DNS y Reverse DNS
```bash
sudo python3 toolkit_pentester.py -t example.com --dns
sudo python3 toolkit_pentester.py -t 8.8.8.8 --reverse
```

### Escaneo paralelo con threads (valor por defecto = 4)
```bash
sudo python3 toolkit_pentester.py -t example.com --threads 8 --scan
```

---

## 🧾 Salida esperada
El script imprime en consola resultados tipo:
- Lista de puertos abiertos (ej. `[22, 80, 443]`)  
- Salida de `nmap` (texto)  
- URLs encontradas en la fuerza bruta de directorios  
- IPs/respuestas de `dig` para DNS / reverse DNS

---



---

## 🛡️ Buenas prácticas y advertencias legales
- ⚖️ **Usa esta herramienta solo en sistemas sobre los que tengas permiso explícito.**  
- 🧪 Prueba en entornos controlados (VMs o laboratorios).  
- 🔍 Revisa el código antes de ejecutar en producción — busca llamadas a `os.system`, `subprocess`, `eval` u operaciones que modifiquen el sistema.  
- 🧰 Usa entornos virtuales (`.venv`) para gestionar dependencias.

---

## 🤝 Cómo contribuir
1. Haz fork del repositorio.  
2. Crea una branch descriptiva (`feature/xxx` o `fix/yyy`).  
3. Añade tests si modificas lógica crítica.  
4. Abre un Pull Request con descripción y pruebas realizadas.

### Ideas de contribución
- Añadir `requirements.txt` o `pyproject.toml`.  
- Reescribir `toolkit_pentester.py` en versión modular (paquetes).  
- Implementar salida JSON (`--output resultados.json`).  
- Añadir un flag `--dry-run` para acciones potencialmente destructivas.  
- Integrar con `python-nmap` o `requests` para evitar depender tanto de llamadas shell.

---

## 🧾 CHANGELOG 
- `0.1.0` — Versión inicial: `toolkit_pentester.py` con funciones básicas: scan_ports, nmap_scan, brute_directories, dns_lookup, reverse_dns, thread_scan.

---

## 📜 Licencia
Si no hay licencia en el repo, se recomienda añadir una (por ejemplo MIT).  
Ejemplo de cabecera en `LICENSE` (opcional): **MIT License**.

---



---

## ⚠️ Aviso final
Esta herramienta y documentación están pensadas con fines educativos y de hacking ético. El autor y colaboradores no se responsabilizan por el uso indebido. Utiliza siempre con permiso y responsabilidad.


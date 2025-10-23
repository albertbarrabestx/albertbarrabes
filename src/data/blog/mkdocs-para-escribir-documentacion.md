---
author: Albert Barrabés
pubDatetime: 2022-10-22T15:22:00Z
modDatetime: 2025-10-22T16:52:45.934Z
title: Documentación y manuales de usuario con Mkdocs
slug: mkdocs-para-escribir-tu-documentacion
featured: true
draft: false
tags:
  - Markdown
  - Mkdocs
description:
 Crea sitios web de documentación de forma rápida y sencilla utilizando archivos en formato Markdown.
---

# Introducción a MkDocs

MkDocs es una herramienta de código abierto escrita en Python que permite crear sitios web de documentación de forma rápida y sencilla utilizando archivos en formato Markdown. Es ideal para desarrolladores, proyectos técnicos o cualquier persona que quiera mantener una documentación clara, organizada y fácil de actualizar.

---

## 1. ¿Qué es MkDocs?

MkDocs convierte tus archivos Markdown (`.md`) en un sitio web estático.  
Su principal ventaja es la **simplicidad**: no necesitas bases de datos ni conocimientos avanzados de desarrollo web.

- Usa Markdown para el contenido.  
- Se configura con un solo archivo YAML.  
- Ofrece temas personalizables, como *Material for MkDocs*.  
- Permite desplegar la web fácilmente (por ejemplo, en GitHub Pages).

---

## 2. Instalación

### Requisitos previos

- Tener **Python** instalado (versión 3.6 o superior).  
- (Opcional pero recomendado) Crear un **entorno virtual** para el proyecto:

```bash
python -m venv .venv
.\.venv\Scripts\Activate.ps1   # En Windows PowerShell
source .venv/bin/activate      # En macOS o Linux
```

## 3. Estructura de un proyecto MkDocs

### Crear un proyecto nuevo:
```bash
mkdocs new mi-documentacion-web
cd mi-documentacion-web
```

### Estructura generada:

```bash
mi-documentacion-web/
├── mkdocs.yml
└── docs/
    └── index.md

```

- **mkdocs.yml:** configuración del sitio (título, navegación, tema, plugins).
- **docs/:** todas las páginas en Markdown.

### Ejemplo mínimo:

```bash
site_name: Documentación del Proyecto
theme:
  name: material
nav:
  - Inicio: index.md
  - Instalación: instalacion.md
  - Configuración: configuracion.md
```

## 4. Creación y edición del contenido

Cada archivo .md en docs/ es una página. Usa enlaces relativos para navegar entre páginas:

```bash
[Ir a configuración](configuracion.md)
```
### Organizacion recomendada:
```bash
docs/
├── index.md
├── instalacion.md
├── uso/
│   ├── inicio.md
│   └── opciones.md
└── images/
    └── logo.png
```

**Consejo:** añade capturas dentro de docs/images/ y referencia con rutas relativas para que mkdocs build las incluya.

## 5. Configuración y personalización

### Cambiar tema

En mkdocs.yml:
```bash
theme:
  name: material
  logo: images/logo.png
  palette:
    primary: 'indigo'
    accent: 'indigo'

```
Instala el tema si no lo has hecho:

```bash
pip install mkdocs-material
```
Extensiones útiles (Markdown)
```bash
markdown_extensions:
  - admonition
  - toc:
      permalink: true
  - codehilite
  - footnotes
```

Plugins útiles
```bash
plugins:
  - search
  - mkdocs-minify-plugin  # opcional para minificar salida
```
Personal CSS/JS
```bash
extra_css:
  - css/custom.css
extra_javascript:
  - js/custom.js
```
Coloca los archivos en docs/css/ y docs/js/ y referencia desde mkdocs.yml.

## 6. Ejecutar y desplegar

### Servidor local (desarrollo)

En mkdocs.yml:
```bash
mkdocs serve
```
Abre http://127.0.0.1:8000. El comando observa cambios y debería recargar automáticamente.

Si el live reload falla en Windows, instala watchdog:

```bash
pip install watchdog
```
### Generar sitio estático

```bash
mkdocs build
```
La carpeta site/ contendrá los archivos listos para publicar.

### Despliegue rápido a GitHub Pages

```bash
mkdocs gh-deploy
```

Esto construye el sitio y publica en la rama gh-pages del repositorio.

### Despliegue a Netlify

```bash
mkdocs gh-deploy
```
- Sube el repositorio a GitHub.
- Conecta el repositorio en Netlify.
- Build command: mkdocs build
- Publish directory: site

## 7. Buenas prácticas y consejos finales

- Mantén la navegación (nav) simple y lógica.
- Divide la doc en secciones pequeñas y claras.
- Usa ejemplos y capturas para procesos (alta de usuarios, publicación de posts, etc.).
- Versiona la documentación junto al código para tener historial.
- Si quieres traducciones, crea carpetas por idioma y configura mkdocs.yml para cada versión o usa plugins de i18n.

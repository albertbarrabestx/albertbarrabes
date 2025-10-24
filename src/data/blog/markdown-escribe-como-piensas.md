---
author: Albert Barrabés
pubDatetime: 2022-10-23T15:22:00Z
modDatetime: 2025-10-23T16:52:45.934Z
title: Markdown, escribe y no te compliques
slug: markdown-escribe-y-no-te-compliques
featured: false
draft: false
tags:
  - Markdown
description:
 Aquí van algunas reglas/recomendaciones, consejos y trucos para escribir com Markdown.
---

Hay un momento en el que todos los que trabajamos en entornos digitales —ya sea programando, diseñando o escribiendo— nos cansamos de pelear con editores como Word o con interfaces llenas de botones.

**Markdown** es la respuesta sencilla a todo eso.

Es un lenguaje de marcado ligero que te permite escribir texto con formato sin pensar en *cómo se ve*, sino en *qué estás diciendo*.  
Y eso, cuando quieres crear documentación o escribir con claridad, vale oro.

---

## La base: escribir como piensas

Con Markdown, el texto se lee igual que se escribe.  

Mira este ejemplo:

```markdown
# Título principal
## Subtítulo

Esto es un **texto en negrita** y esto un *texto en cursiva*.

- Punto 1
- Punto 2
- Punto 3

[Enlace a mi web](https://example.com)

```

### Listas: ordenadas y desordenadas

**Desordenadas** (se aceptan `-`, `*` o `+`):

```markdown
- Elemento A
- Elemento B
  - Subelemento B.1
  - Subelemento B.2
* Otro estilo con asterisco
+ También con más

1. Paso uno
2. Paso dos
   - Detalle A
     1. Subpaso 1
     2. Subpaso 2
3. Paso tres

```

### Listas de tareas (GitHub-flavored Markdown):

```markdown
- [x] Tarea completada
- [ ] Tarea pendiente
```

### Enlaces:

**Enlace inline:**
```markdown
[Texto del enlace](https://example.com)
```
**Enlace con título (tooltip):**
```markdown
[Ejemplo (abre en nueva)](https://example.com "Visitar Example")

```
**Enlaces relativos (útil en documentación MkDocs):**
```markdown
[Ir a la sección de instalación](instalacion.md)
[Ir a una subsección](docs/guia/uso.md#configuracion)
```
**Enlace por referencia (más limpio en documentos largos):**
```markdown
[Documentación oficial][doc]
[doc]: https://example.com/docs "Docs"

# ... y luego en el texto:
Consulta la [Documentación oficial][doc].
```
**Enlace mailto:**
```markdown
[Contacta conmigo](mailto:hola@example.com)

```
### Imágenes:

**Imágenes inline**
```markdown
![Texto alternativo](https://placekitten.com/400/200)
```

**Imagen local (en MkDocs: pon la imagen dentro de docs/images/):**
```markdown
![Logo del proyecto](images/logo.png "Logo")
```

**Enlazar una imagen (hacerla clicable):**
```markdown
[![Miniatura](images/thumb.png)](https://example.com/imagen-grande.png)
```

### Notas prácticas:
- Siempre rellena el alt text para accesibilidad.
- En MkDocs usa rutas relativas dentro de docs/ para que la build incluya las imágenes.
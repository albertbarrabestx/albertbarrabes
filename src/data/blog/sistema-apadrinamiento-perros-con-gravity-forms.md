---
author: Albert Barrabés
pubDatetime: 2022-10-24T15:22:00Z
modDatetime: 2025-10-24T16:52:45.934Z
title: Planteamiento para sistema de apadrinamiento de perros con Gravity Forms y pagos recurrentes
slug: apadrinamiento-de-perros-con-gravity-Forms-pagos-recurrentes
featured: true
draft: false
tags:
  - Snippet
  - Wordpress
description:
 En este proyecto teníamos un objetivo claro, permitir que cualquier persona pudiera apadrinar un perro pagando una cuota mensual.
---

En este proyecto teníamos un objetivo claro: permitir que cualquier persona pudiera apadrinar un perro pagando una cuota mensual, y que cada perro solo pudiera tener un padrino activo al mismo tiempo.

Lo principal era que todo el proceso fuese automático:

- Cuando alguien apadrina → el perro queda bloqueado.  
- Cuando la suscripción se cancela → vuelve a estar disponible.  
- Sin que el cliente tenga que hacer nada manual.

A continuación explico cómo estructuramos el sistema.

## Herramientas utilizadas

- WordPress  
- Custom Post Types (CPT) → para gestionar perros
- Advanced Custom Fields (ACF) → para guardar estado del apadrinamiento y el nombre del padrino
- Gravity Forms → para gestionar el formulario
- Plugin de pagos recurrentes para Gravity Forms (en nuestro caso Redsys Advanced, pero puede ser Stripe o PayPal)

## Estructura del contenido

Creamos un nuevo CPT llamado perros.

Este tipo de contenido es un tipo de post que representa a cada perro.

### Campos ACF añadidos al CPT:

| Campo   |      Tipo      |  Descripción |
|----------|:-------------:|------:|
| `apadrinat` |  Booleano | Indica si el perro está padrinado |
| `nom_padri` |    Texto   |   Nombre de la persona que apadrina |
| `subscription_id` | Texto |    Para guardar el ID de la suscripción |

Con esto ya podemos controlar el estado de cada perro en tiempo real.

## Flujo del sistema

1. El usuario visita la ficha de un perro.
2. Comprobamos si tiene el campo apadrinat marcado.
3. Si **NO está apadrinado**:
    - Mostramos el formulario de Gravity Forms.

4. Si **YA está apadrinado:**
    - Mostramos un mensaje y el nombre del padrino.

5. Cuando el usuario completa el formulario, el pago y se crea la suscripción:
    - Marcamos automáticamente `apadrinat` = true
    - Guardamos el campo `nom_padri`
    - Ocultamos el formulario de ese perro y, en vez de eso mostramos el nombre del padrino.

6. Si más adelante la suscripción se cancela:
    - Marcamos `apadrinat` = false
    - Vaciamos `nom_padri`
    - El perro vuelve a estar disponible.

Todo esto sucede sin intervención manual.

## Snippets que hacen que esto funcione

(No mostramos código todavía, eso lo veremos en el siguiente post.)

| Snippet   |      Qué hace      |  
|----------|:-------------:|
| `Shortcode del formulario` |  Muestra u oculta el formulario según si el perro está apadrinado | 
| `Hook al iniciar suscripción` |    Marca el perro como apadrinado y guarda el nombre del padrino   | 
| `Hook al cancelar suscripción` | Libera el perro para que pueda ser apadrinado de nuevo |   
| `Shortcode para listas` | Muestra el nombre del padrino bajo la foto del perro en los listados |   

Gracias a esto conseguimos que el sistema sea 100% autónomo.

## Conclusión

Con Gravity Forms, pagos recurrentes y un par de Snippets bien puestos, podemos construir un sistema de apadrinamiento totalmente automático, claro para el usuario y limpio para el cliente.

En el próximo post entraremos snipper por snippet, con el código completo y explicando línea por línea.
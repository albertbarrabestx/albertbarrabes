---
author: Albert Barrabés
pubDatetime: 2022-10-24T15:22:00Z
modDatetime: 2025-10-24T16:52:45.934Z
title: Cómo automatizar las donaciones con Gravity Forms y ACF
slug: como-automatizar-el-apadrinamiento-con-gravity-forms-acf
featured: true
draft: false
tags:
  - Snippet
  - Wordpress
description:
 Explicamos la parte de código y snippets para permitir que cualquier persona pudiera apadrinar un perro pagando una cuota mensual.
---

En el post anterior explicamos la estructura del sistema de apadrinamientos:
1 perro → 1 padrino → pago recurrente.

Ahora vamos al grano: el código que hace que todo esto funcione.

> Importante: esto está pensado para Gravity Forms con suscripciones, usando cualquier pasarela compatible (Stripe, Redsys, PayPal, etc.). 

El hook clave es `gform_post_subscription_started`, que se ejecuta justo cuando la suscripción queda activa.

## 1. Shortcode para mostrar el formulario solo si el perro está disponible

Este snippet se coloca en el `functions.php` o en un plugin custom. Este snippet nos permite usar el mismo formulario para todos los perros:

```php
// Shortcode que muestra el formulario solo si el perro no está apadrinado
add_shortcode('formulari_apadrinament', function() {
    $post_id = get_the_ID();
    $apadrinat = get_field('apadrinat', $post_id);

    if ($apadrinat) {
        $nom_padri = get_field('nom_padri', $post_id);
        return '<p style="color: green; font-weight: bold;">🐾 Aquest gos ja està apadrinat per <strong>' . esc_html($nom_padri) . '</strong>.</p>';
    } else {
        return do_shortcode('[gravityform id="3" field_values="post_id=' . $post_id . '"]');
    }
});
```

**Qué hace**:
- Si `apadrinat` = true muestra un mensaje con el nombre del padrino.
- Si `apadrinat` = false, muestra el formulario de Gravity Forms.

## 2. Guardar automáticamente el padrino cuando se inicia la suscripción

Este es el snippet clave: marca el perro como apadrinado.

```php
add_action('gform_post_subscription_started', function($entry, $subscription) {

    $post_id = rgar($entry, '6'); // ID del campo oculto que guarda el ID del perro
    $nom_padri = rgar($entry, '1'); // ID del campo del nombre del padrino

    // Si faltan datos, no hacemos nada
    if (!$post_id || !$nom_padri) return;

    // Solo actualizamos si el perro esta libre
    if (!get_field('apadrinat', $post_id)) {
        update_field('apadrinat', true, $post_id);
        update_field('nom_padri', $nom_padri, $post_id);
    }
}, 10, 2);

```

**Puntos clave**:
- `rgar($entry, '6')` → el ID del camp ocult on passem el ID del post
- Si `apadrinat` = false → no hacemos nada

## 3. Mostrar el nombre del padrino en listados (loop)

Ideal para las páginas donde mostramos el listado de perros y damos acceso al `single_post`

```php
add_shortcode('nom_padri_loop', function() {
    $post_id = get_the_ID();
    $apadrinat = get_field('apadrinat', $post_id);

    if ($apadrinat) {
        $nom_padri = get_field('nom_padri', $post_id);
        return '<p class="nom-padri">Apadrinat per <strong>' . esc_html($nom_padri) . '</strong></p>';
    }

    return '';
});
```
Utilizamos Elementor o gutemberg para insertar el shortcode dentro del item del loop:
```php
[nom_padri_loop]
```

## 4. Liberar un perro cuando la suscripcion se cancela

Cuando el admin cancela la suscripción  → el perro vuelve a estar disponible.
```php
add_action('gform_subscription_canceled', function($entry, $subscription) {

    $post_id = rgar($entry, '6');

    if ($post_id) {
        update_field('apadrinat', false, $post_id);
        update_field('nom_padri', '', $post_id);
    }
}, 10, 2);
```
## Resultado final

- Cuando un padrino inicia la suscripción → el perro queda bloqueado.
- Cuando admin cancela la suscripción → el perro vuelve a estar disponible.
- Sin duplicados, sin gestiones manuales y 100% automático.
- Usamos el mismo formulario para todos los perros.
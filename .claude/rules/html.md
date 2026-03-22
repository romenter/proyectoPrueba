---
description: Reglas de escritura de HTML semántico para archivos de página
paths:
  - "*.html"
  - "**/*.html"
---

# Reglas de HTML

- `index.html` solo contiene estructura semántica. Sin estilos inline, sin `<style>` embebido.

## `<title>` y meta SEO

Patrón estándar de título: `Nombre de Página – Accuat`

```html
<title>About – Accuat</title>
<meta name="description" content="Una línea descriptiva del contenido de esta página." />
```

- El separador es ` – ` (guión largo), no `-` ni `|`.
- Máximo 60 caracteres en `<title>`, máximo 155 en `description`.
- Cada página tiene su propio `<title>` y `<meta name="description">` únicos.
- Usa etiquetas semánticas: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
- Atributo `lang` en `<html lang="en">` (o el idioma real del contenido).
- Estructura de headings en orden: un solo `<h1>` por página, `<h2>` para secciones, `<h3>` para subsecciones.

## Internacionalización (i18n)

Este proyecto está en inglés (`lang="en"`) y no tiene i18n actualmente. Si se agrega soporte multiidioma:

1. **Atributo `lang`** — actualizar en `<html>` y en fragmentos de idioma distinto al del documento:
```html
<html lang="es">
  …
  <p>Texto en español con <span lang="en">some English</span> intercalado.</p>
```

2. **Dirección de texto** — agregar `dir="rtl"` para árabe, hebreo, persa:
```html
<html lang="ar" dir="rtl">
```

3. **Números, fechas y monedas** — no hardcodear formato. Usar `Intl` en JS:
```js
new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(1234.5);
// → "$1.234,50"
```

4. **Textos en HTML** — extraer todo el contenido a un objeto de traducciones antes de soportar múltiples idiomas. No mezclar strings en el HTML con lógica de idioma.

5. **`hreflang`** — si hay versiones de la misma página en distintos idiomas, indicarlo en `<head>`:
```html
<link rel="alternate" hreflang="en" href="https://accuat.com/about" />
<link rel="alternate" hreflang="es" href="https://accuat.com/es/about" />
```

## Orden de atributos HTML

Usa siempre este orden para mantener diffs limpios:

1. `id`
2. `class`
3. `type` / `role` / `for`
4. `name` / `href` / `src` / `action`
5. `value` / `placeholder` / `alt`
6. `width` / `height`
7. `loading` / `decoding`
8. `aria-*` / `data-*`
9. `disabled` / `required` / `readonly`

```html
<!-- Bien -->
<input id="email" class="form-input" type="email" name="email"
       placeholder="you@example.com" aria-describedby="email-error" required />

<!-- Mal — atributos en orden aleatorio -->
<input required placeholder="you@example.com" aria-describedby="email-error"
       name="email" class="form-input" type="email" id="email" />
```

## Imports — ver `page-template.md`

Para el orden y lista de `<link>` y `<script>` obligatorios en cada página, seguir `page-template.md`.

## Imágenes

- Toda `<img>` lleva `alt` descriptivo. Si es decorativa: `alt=""`.
- Usa `loading="lazy"` en todas las imágenes fuera del viewport inicial (todo excepto el hero).
- Especifica siempre `width` y `height` para evitar layout shift (CLS).
- Usa `<picture>` + `srcset` solo cuando necesites art direction o formatos distintos por breakpoint; para casos simples, `<img srcset="…" sizes="…">` es suficiente.

```html
<!-- Imagen de contenido -->
<img
  src="assets/img/feature.webp"
  alt="Dashboard mostrando resumen de pagos"
  width="600"
  height="400"
  loading="lazy"
/>

<!-- Imagen decorativa -->
<img src="assets/img/bg-pattern.svg" alt="" width="800" height="200" loading="lazy" />

<!-- Hero (sin lazy — está en el viewport inicial) -->
<img src="assets/img/hero.webp" alt="…" width="1200" height="800" />
```
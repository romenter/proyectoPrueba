---
description: Cómo crear nuevas páginas — plantilla, imports obligatorios, patrones de sección
paths:
  - "*.html"
  - "**/*.html"
---

# Nuevas páginas — plantilla y convenciones

Al crear cualquier página nueva, copia `components/page-template.html` como punto de partida.

## Imports obligatorios (en este orden)

```html
<script src="https://cdn.tailwindcss.com"></script>
<link rel="stylesheet" href="assets/css/shared-page.css" />
```

Añade opcionalmente si la página usa formularios:
```html
<link rel="stylesheet" href="assets/css/components/forms.css" />
```

Añade el script de JS solo si la página tiene componentes interactivos:
```html
<script src="assets/js/components/ui.js" defer></script>
```

## Nav — enlace activo

El enlace de la página actual lleva `class="text-black font-semibold"`.
El resto llevan `class="hover:text-black transition-colors"`.

## Estructura de secciones

| Zona | Clase de fondo sugerida |
|---|---|
| Hero / header | `bg-hero-gradient` |
| Sección impar | `bg-white` |
| Sección par | `bg-gray-50` |
| CTA oscuro | `bg-dark-panel` |
| Footer | `bg-gray-950` |

Alterna `bg-white` / `bg-gray-50` entre secciones consecutivas para crear separación visual sin bordes.

## Ancho máximo estándar

- Contenido general: `max-w-4xl mx-auto`
- Contenido estrecho (auth, CTAs): `max-w-xl mx-auto`
- Contenido ancho (landing): `max-w-6xl mx-auto`

## Padding de sección estándar

- Sección normal: `py-16 px-4`
- Hero: `pt-36 pb-16 px-4` (compensa el nav fijo de ~64 px)
- Footer: `py-8 px-10`
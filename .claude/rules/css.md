---
description: Reglas de CSS — variables, naming BEM, mobile-first, organización de archivos
paths:
  - "assets/css/**"
  - "**/*.css"
---

# Reglas de CSS

- Define **variables CSS** en `:root` para todos los valores del diseño:
  ```css
  :root {
    --color-primary: #3b82f6;
    --color-text: #1f2937;
    --font-base: 'Inter', sans-serif;
    --spacing-section: 5rem;
    --radius-card: 0.75rem;
  }
  ```
- Usa `main.css` para importar los archivos de componentes con `@import`.
- Cada componente visual tiene su propio archivo CSS en `assets/css/components/`.
- Metodología de naming: **BEM** (`block__element--modifier`) para clases propias.
- Unidades relativas (`rem`, `%`, `vw/vh`, `clamp()`) salvo para bordes y sombras (px está bien).
- Mobile-first: estilos base para móvil, `@media (min-width: …)` para breakpoints mayores.

## Responsive con Tailwind

Con Tailwind CDN el sistema de breakpoints es:

| Prefijo | min-width | Uso típico |
|---|---|---|
| _(sin prefijo)_ | 0px | Mobile base |
| `sm:` | 640px | Teléfonos grandes |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Laptops |
| `xl:` | 1280px | Desktops |

**Regla:** diseña primero sin prefijo (móvil), luego añade `md:` y `lg:` donde el layout cambie.

```html
<!-- Bien: columna en móvil, 3 columnas en tablet+ -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">

<!-- Bien: oculto en móvil, visible en desktop -->
<div class="hidden lg:flex items-center gap-4">
```

Para CSS custom, usa el mismo patrón:
```css
.hero__title { font-size: 2rem; }
@media (min-width: 768px) { .hero__title { font-size: 3rem; } }
```

## Tokens tipográficos

Incluye siempre una escala de texto como variables en `:root`:

```css
:root {
  --text-xs:   0.75rem;   /* 12px */
  --text-sm:   0.875rem;  /* 14px */
  --text-base: 1rem;      /* 16px */
  --text-lg:   1.125rem;  /* 18px */
  --text-xl:   1.25rem;   /* 20px */
  --text-2xl:  1.5rem;    /* 24px */
  --text-4xl:  2.25rem;   /* 36px */
  --text-5xl:  3rem;      /* 48px */

  --leading-tight:  1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;

  --font-normal:    400;
  --font-semibold:  600;
  --font-bold:      700;
  --font-extrabold: 800;
}
```

## Tailwind vs clase custom

Usa Tailwind para estilos de una sola instancia o combinaciones que no se repiten.
Extrae una clase custom en `assets/css/` cuando:

- El mismo conjunto de utilidades aparece **3 o más veces** en el proyecto.
- El bloque de clases tiene **más de 5 utilidades Tailwind** juntas (dificulta la lectura).
- El valor no existe como utilidad Tailwind (ej. `animation-delay`, `accent-color`, gradientes complejos).
- Se necesita un estado derivado (`:focus-within`, `::before`, animaciones `@keyframes`).

```html
<!-- MAL: repetido 4 veces y difícil de leer -->
<div class="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:border-gray-300 transition-colors flex gap-4 items-start">

<!-- BIEN: extraer a clase semántica -->
<div class="feature-card">
```

Nunca uses `style=""` inline; si Tailwind no cubre el valor, crea la clase en el CSS del componente correspondiente.

## Dark mode

El proyecto implementa dark mode. El sistema usa dos mecanismos:

1. `@media (prefers-color-scheme: dark)` con selector `html:not([data-theme="light"])` para respetar preferencia del OS sin bloquear el toggle manual.
2. `html[data-theme="dark"]` / `html[data-theme="light"]` para el toggle manual (persiste en `localStorage` bajo `accuat-theme`).

Cuando agregues nuevas reglas de dark mode, ponlas **en ambos bloques**: dentro del `@media` (con `:not([data-theme="light"])`) y fuera con `html[data-theme="dark"]`:

```css
@media (prefers-color-scheme: dark) {
  html:not([data-theme="light"]) .mi-clase { color: #94a3b8; }
}
html[data-theme="dark"] .mi-clase { color: #94a3b8; }
```

Con Tailwind CDN no se puede usar `dark:` prefix. Las overrides de Tailwind van en `shared-page.css`.

## Estilos de impresión

Añade al menos un bloque `@media print` básico en `main.css`:

```css
@media print {
  nav, footer, .no-print { display: none; }
  body { font-size: 12pt; color: #000; background: #fff; }
  a[href]::after { content: " (" attr(href) ")"; }
}
```
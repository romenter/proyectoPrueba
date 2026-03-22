# CLAUDE.md

Este archivo proporciona orientación a Claude Code (claude.ai/code) cuando trabaja con el código de este repositorio.

## Descripción del proyecto

Accuat es un sitio de marketing estático sin proceso de build, sin gestor de paquetes y sin test runner. Abre cualquier archivo `.html` directamente en el navegador o sírvelo con cualquier servidor estático (ej. `npx serve .` o VS Code Live Server).

## Arquitectura CSS — dos sistemas coexisten

Cada página carga **dos capas de CSS**:

1. **Tailwind CDN** (`<script src="https://cdn.tailwindcss.com">`) — clases utilitarias inline en el HTML. Sin archivo de config, por lo que el prefijo `dark:` y las features JIT no están disponibles.
2. **`assets/css/shared-page.css`** — utilidades custom cargadas en todas las páginas: clases de animación (`.floating`, `.floating-slow`), fondos degradados (`.bg-hero-gradient`, `.bg-dark-panel`), los overrides de Tailwind para dark mode y las reglas de los iconos del toggle de tema.

> **Importante:** `assets/css/main.css` existe e importa todos los archivos CSS de componentes BEM, pero **ninguna página carga `main.css`**. Los archivos BEM (`navbar.css`, `hero.css`, etc.) son artefactos de referencia/desarrollo; las páginas reales están estilizadas exclusivamente con Tailwind + `shared-page.css`.

`assets/css/components/forms.css` se carga por separado en `login.html` y `signup.html`.

## Sistema de dark mode

El dark mode usa dos mecanismos combinados:

- **Preferencia del OS:** `@media (prefers-color-scheme: dark)` en CSS, acotado a `html:not([data-theme="light"])` para que el override de forzar-claro funcione.
- **Toggle manual:** atributos `html[data-theme="dark"]` / `html[data-theme="light"]`. Se persiste en `localStorage` bajo la clave `accuat-theme`.

Los overrides de dark mode viven en tres lugares:
1. `main.css` — tokens de variables CSS (`--color-bg`, `--color-surface`, etc.)
2. `shared-page.css` — overrides de clases Tailwind (`bg-white`, `bg-gray-50`, `bg-white/80`, colores de texto, bordes)
3. Archivos CSS de componentes individuales (`cards.css`, `hero.css`, `invoice-demo.css`, `currency.css`) — overrides específicos de cada componente

Al agregar nuevas reglas de dark mode, añadirlas en **ambos** bloques: dentro del `@media` (preferencia del OS) y en el bloque `html[data-theme="dark"]` (toggle manual). Usar `html:not([data-theme="light"])` dentro del media query.

Prevención de flash: el `<head>` de cada página tiene un script inline antes de Tailwind que lee `localStorage` y setea `data-theme` de inmediato.

## JavaScript

`assets/js/main.js` — se carga al final del `<body>` en todas las páginas. Expone la función global `toggleTheme()` y agrega la clase `js-loaded` al `<html>`.

`assets/js/components/ui.js` — se carga con `defer` en páginas con formularios interactivos. Maneja: animaciones de scroll (IntersectionObserver sobre `.animate-on-scroll`), toggle de visibilidad de contraseña (`data-password-toggle="<input-id>"`), medidor de fortaleza de contraseña, formulario multi-paso de signup (`data-goto-step`) y prevención de submit en demos (`data-prevent-submit`).

Los componentes interactivos se conectan al JS mediante atributos `data-*`, no por `id` ni selectores de clase.

## Checklist para nueva página

Copiar `components/page-template.html`. Orden obligatorio en `<head>`:
1. Script inline de inicialización de tema (prevención de flash)
2. `<script src="https://cdn.tailwindcss.com">`
3. `<link rel="stylesheet" href="assets/css/shared-page.css">`
4. Opcional: `forms.css` (si la página tiene formularios)

Al final del `<body>`:
1. `<script src="assets/js/main.js">`
2. Opcional: `<script src="assets/js/components/ui.js" defer>`

Patrón de fondos por sección: `bg-hero-gradient` → alternar `bg-white` / `bg-gray-50` → `bg-dark-panel` para CTA → `bg-gray-950` para footer.

Link activo en la nav: `class="text-black font-semibold"`. Inactivo: `class="hover:text-black transition-colors"`.

## Reglas detalladas

Las reglas extendidas para cada tipo de archivo están en `.claude/rules/`:
- `css.md` — naming de tokens, decisiones Tailwind vs clase custom, patrón de dark mode
- `html.md` — formato de título (`Página – Accuat`), orden de atributos, reglas de `alt`/`loading` en imágenes
- `javascript.md` — regla de no usar handlers inline, requisitos de sincronización ARIA
- `components.md` — convenciones de atributos `data-*`, catálogo de componentes
- `accessibility.md` — contraste, visibilidad del foco, outlines en secciones oscuras
- `page-template.md` — padding de secciones, convenciones de ancho máximo
- `workflow.md` — ciclo captura → comparar → corregir (mínimo 2 rondas)
- `git.md` — estilo de mensajes de commit, requisitos del `.gitignore`

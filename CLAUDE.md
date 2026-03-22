# Website Design Replication

Tu objetivo es replicar fielmente el diseño visual de un sitio web a partir de una imagen de referencia, siguiendo buenas prácticas de estructura de proyecto, separación de responsabilidades y componentes reutilizables.

---

## Lo que el usuario puede darte

- **Imagen de referencia** (obligatorio): screenshot o foto del diseño a replicar.
- **Notas de CSS / estilo** (opcional): clases, colores hex, fuentes, espaciados concretos.
- **Sección específica** (opcional): puede pedirte que repliques solo una parte de la página.

---

## Estructura del proyecto

Crea siempre esta estructura antes de escribir código:

```
proyecto/
├── index.html              # Entrada principal — solo estructura, sin estilos inline
├── assets/
│   ├── css/
│   │   ├── main.css        # Estilos globales, variables CSS, reset
│   │   └── components/
│   │       ├── buttons.css
│   │       ├── cards.css
│   │       ├── forms.css
│   │       ├── navbar.css
│   │       └── footer.css
│   ├── js/
│   │   ├── main.js         # Inicialización y lógica global
│   │   └── components/
│   │       ├── navbar.js   # Menú hamburguesa, scroll behavior, etc.
│   │       └── ui.js       # Interacciones de UI (modales, tabs, tooltips…)
│   └── img/
│       └── placeholder/    # Imágenes de placeholder durante desarrollo
├── components/             # Fragmentos HTML reutilizables (documentados)
│   ├── navbar.html
│   ├── hero.html
│   ├── cards.html
│   ├── buttons.html
│   └── footer.html
└── CLAUDE.md
```

> Si el proyecto usa un framework (Next.js, Astro, etc.), adapta la estructura al estándar del framework manteniendo la misma separación de responsabilidades.

---

## Reglas de implementación

### HTML
- `index.html` solo contiene estructura semántica. Sin estilos inline, sin `<style>` embebido.
- Usa etiquetas semánticas: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
- Atributo `lang` en `<html>`, `alt` descriptivo en todas las imágenes, `<title>` único por página.
- Estructura de headings en orden: un solo `<h1>` por página, `<h2>` para secciones, etc.

### CSS
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

### Componentes reutilizables

Documenta cada componente en `components/` con sus variantes. Ejemplo para botones:

```html
<!-- components/buttons.html -->

<!-- Variante primaria -->
<button class="btn btn--primary">Acción principal</button>

<!-- Variante secundaria -->
<button class="btn btn--secondary">Acción secundaria</button>

<!-- Variante destructiva -->
<button class="btn btn--danger">Eliminar</button>

<!-- Estado deshabilitado -->
<button class="btn btn--primary" disabled>No disponible</button>
```

Componentes mínimos a definir según lo que aparezca en la imagen de referencia:
- **Botones**: primario, secundario, ghost, destructivo, con icono, estados (hover, focus, disabled).
- **Cards**: con imagen, sin imagen, con badge, con acciones.
- **Formularios**: inputs, selects, checkboxes, radio buttons, mensajes de error/éxito.
- **Navbar**: con logo, links de navegación, CTA, menú móvil.
- **Footer**: columnas de links, copyright, redes sociales.

### JavaScript
- Vanilla JS por defecto, salvo que el proyecto especifique un framework.
- Sin lógica en el HTML (`onclick="…"` está prohibido). Usa `addEventListener` desde los archivos JS.
- Cada componente con comportamiento interactivo tiene su módulo en `assets/js/components/`.

### Imágenes de placeholder
- Usa `https://placehold.co/{ancho}x{alto}/{color-fondo}/{color-texto}` con dimensiones exactas.
- Guarda los placeholders usados en `assets/img/placeholder/` con nombres descriptivos.

---

## Workflow de replicación

### Paso 1 — Analiza la imagen antes de escribir código

Antes de crear ningún archivo, describe en voz alta lo que ves:
- Secciones presentes (hero, features, pricing, testimonials, footer…)
- Paleta de colores (extrae los hex principales)
- Tipografía (familia, tamaños aproximados, pesos)
- Componentes reutilizables identificados (botones, cards, badges…)
- Layout general (1 columna, grid, sidebar…)

Si el usuario aportó notas de CSS, incorpóralas. Tienen prioridad sobre tu estimación visual.

### Paso 2 — Crea la estructura del proyecto

Genera todos los archivos y carpetas antes de escribir contenido. Un proyecto bien estructurado desde el inicio evita refactors costosos.

### Paso 3 — Implementa de mayor a menor escala

1. Variables CSS y estilos globales (`main.css`)
2. Layout principal (`index.html` + estructura de secciones)
3. Componentes de mayor a menor: navbar → hero → secciones de contenido → footer
4. Interacciones JS al final, cuando el HTML/CSS esté estable

### Paso 4 — Captura un screenshot del resultado

```bash
npx puppeteer screenshot index.html --fullpage
```

Si la página tiene secciones diferenciadas, captúralas también individualmente.

### Paso 5 — Compara en detalle

| Aspecto | Qué revisar |
|---|---|
| Espaciado y padding | Mide en px, sección a sección |
| Tipografía | Tamaño, peso, line-height, familia |
| Colores | Hex exactos: fondo, texto, bordes, sombras |
| Alineación | Horizontal, vertical, centrado |
| Bordes y efectos | border-radius, box-shadow, outline |
| Componentes | ¿Los botones/cards/forms coinciden con la referencia? |
| Responsive | ¿Se rompe algo al cambiar el viewport? |

### Paso 6 — Corrige y repite

- Corrige **todas** las diferencias detectadas antes de volver a capturar.
- Repite el ciclo (captura → compara → corrige) hasta cumplir el criterio de parada.

---

## Criterio de parada

Haz siempre **mínimo 2 rondas completas** de comparación. Para cuando:

- El resultado está dentro de **~2–3 px** de la referencia en toda la página, **o**
- El usuario indica explícitamente que puede detenerse.

---

## Reporte de progreso

Después de cada ronda informa con este formato:

```
Ronda N — Comparación completada
Diferencias encontradas:
  - [descripción concreta, ej: "padding del hero 48px en referencia, 32px actual"]

Correcciones aplicadas:
  - [archivo editado + cambio, ej: "main.css → --spacing-hero: 3rem → 4rem"]

Archivos modificados: [lista]
Próximo paso: [re-captura / esperando confirmación / finalizado]
```
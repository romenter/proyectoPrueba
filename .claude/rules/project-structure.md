---
description: Estructura de carpetas y archivos que debe tener todo proyecto de replicación web
---

# Estructura del proyecto

Crea siempre esta estructura antes de escribir código:

```
proyecto/
├── index.html              # Entrada principal — solo estructura, sin estilos inline
├── assets/
│   ├── css/
│   │   ├── main.css           # Variables CSS, reset, @media print
│   │   ├── shared-page.css    # Clases compartidas: gradientes, animaciones, focus, utilidades
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
│   ├── page-template.html  # Plantilla base para nuevas páginas
│   ├── navbar.html
│   ├── hero.html
│   ├── cards.html
│   ├── buttons.html
│   ├── forms.html
│   └── footer.html
└── .claude/
    └── rules/
```

> Si el proyecto usa un framework (Next.js, Astro, etc.), adapta la estructura al estándar del framework manteniendo la misma separación de responsabilidades.

## Imágenes de placeholder

- Usa `https://placehold.co/{ancho}x{alto}/{color-fondo}/{color-texto}` con dimensiones exactas.
- Guarda los placeholders en `assets/img/placeholder/` con nombres descriptivos.
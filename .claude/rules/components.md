---
description: Reglas para componentes HTML reutilizables — variantes, documentación, catálogo mínimo
paths:
  - "components/**"
  - "*.html"
  - "**/*.html"
---

# Componentes reutilizables

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

## Catálogo mínimo

Según lo que aparezca en la imagen de referencia, define al menos:

- **Botones**: primario, secundario, ghost, destructivo, con icono, estados (hover, focus, disabled).
- **Cards**: con imagen, sin imagen, con badge, con acciones.
- **Formularios**: inputs, selects, checkboxes, radio buttons, mensajes de error/éxito.
- **Navbar**: con logo, links de navegación, CTA, menú móvil.
- **Footer**: columnas de links, copyright, redes sociales.

## Atributos `data-*` para JS

Los componentes interactivos se conectan al JS mediante atributos `data-*`, nunca con `id` ni clases.

Convención de nombres: `data-<acción>` en kebab-case, describiendo **qué hace** el elemento.

| Atributo | Comportamiento |
|---|---|
| `data-password-toggle="<input-id>"` | Alterna visibilidad del campo de contraseña indicado |
| `data-goto-step="<n>"` | Navega al paso N del formulario multi-paso |
| `data-prevent-submit` | Previene el submit real del formulario (demos/prototipos) |

Al agregar un nuevo componente interactivo, documenta su `data-*` en esta tabla y en `assets/js/components/ui.js`.
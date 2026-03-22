---
description: Reglas de accesibilidad web — ARIA, foco, contraste, formularios
paths:
  - "*.html"
  - "**/*.html"
---

# Reglas de Accesibilidad

## Estructura y semántica

- Usa `role` y atributos ARIA solo cuando el HTML semántico nativo no sea suficiente.
- Todo elemento interactivo debe ser alcanzable con teclado (`Tab`, `Enter`, `Escape`).
- Los modales y menús desplegables deben atrapar el foco mientras estén abiertos y devolverlo al elemento que los abrió al cerrarse.

## Imágenes

- `alt` descriptivo en imágenes de contenido: describe lo que aporta la imagen, no su apariencia.
- Imágenes decorativas: `alt=""` para que los lectores de pantalla las ignoren.

## Formularios

- Cada `<input>` y `<select>` debe tener un `<label>` asociado (`for` + `id`) o `aria-label`.
- Los mensajes de error deben estar vinculados al campo con `aria-describedby`.
- Botones de solo icono requieren `aria-label` descriptivo.

```html
<!-- Correcto -->
<label for="email">Correo electrónico</label>
<input id="email" type="email" aria-describedby="email-error" />
<p id="email-error" role="alert">Ingresa un correo válido.</p>

<!-- Botón de icono -->
<button aria-label="Cerrar ventana">✕</button>
```

## Contraste de color

- Texto normal: relación de contraste mínima **4.5:1** (WCAG AA).
- Texto grande (≥18pt o ≥14pt bold): mínimo **3:1**.
- Nunca uses solo el color para transmitir información (añade icono o texto de apoyo).

## Navegación y foco

- No elimines el outline de foco sin reemplazarlo por un estilo visible:
  ```css
  /* Mal */
  :focus { outline: none; }

  /* Bien */
  :focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
  ```
- El orden del DOM debe coincidir con el orden visual para que la navegación por teclado sea lógica.
- En secciones con fondo oscuro (`bg-dark-panel`, `bg-auth-panel`), el outline `#111` es invisible. Usa outline claro:
  ```css
  /* En fondos oscuros */
  :focus-visible { outline: 2px solid #fff; outline-offset: 2px; }
  ```
  Aplica esto con una clase contenedora:
  ```html
  <section class="bg-dark-panel focus-light">…</section>
  ```
  ```css
  .focus-light *:focus-visible { outline-color: rgba(255,255,255,0.8); }
  ```
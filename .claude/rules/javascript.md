---
description: Reglas de JavaScript — vanilla JS, separación de lógica, sin handlers inline
paths:
  - "assets/js/**"
  - "**/*.js"
---

# Reglas de JavaScript

- Vanilla JS por defecto, salvo que el proyecto especifique un framework.
- Sin lógica en el HTML (`onclick="…"` está prohibido). Usa `addEventListener` desde los archivos JS.
- Cada componente con comportamiento interactivo tiene su módulo en `assets/js/components/`.

## Accesibilidad en JS

Al manipular componentes interactivos desde JS, mantén los atributos ARIA sincronizados con el estado visual:

```js
// Menú / dropdown
btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
menu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');

// Modal — devolver el foco al elemento que lo abrió al cerrar
const trigger = document.activeElement;
modal.addEventListener('close', () => trigger.focus());
```

- Maneja `Escape` para cerrar modales, dropdowns y menús móviles.
- Maneja `Enter` y `Space` en elementos que actúan como botones pero no son `<button>`.
- Tras abrir un modal, mueve el foco al primer elemento interactivo dentro de él.
- Nunca uses `display: none` vía JS sin actualizar `aria-hidden`.

## Service Workers

Este proyecto no usa Service Workers actualmente. Si se agrega soporte offline:

1. **Registrar solo en producción** — nunca en `file://` (falla silenciosamente):
```js
if ('serviceWorker' in navigator && location.protocol === 'https:') {
  navigator.serviceWorker.register('/sw.js');
}
```

2. **Estrategia cache recomendada para sitios estáticos** — Cache First para assets, Network First para HTML:
```js
// sw.js — Cache First para CSS/JS/imágenes
self.addEventListener('fetch', (event) => {
  if (event.request.destination === 'document') {
    // Network First: siempre intentar red, caer a cache
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
  } else {
    // Cache First: assets estáticos
    event.respondWith(
      caches.match(event.request).then(cached => cached || fetch(event.request))
    );
  }
});
```

3. **Versionar el cache** — cambiar el nombre al deployar para invalidar assets viejos:
```js
const CACHE = 'accuat-v1'; // incrementar en cada deploy
```

4. **No cachear** el archivo `sw.js` en sí — el browser lo maneja con su propio mecanismo de actualización.
5. **Agregar `sw.js` al `.gitignore`** solo si se genera automáticamente; si es manual, versionarlo.
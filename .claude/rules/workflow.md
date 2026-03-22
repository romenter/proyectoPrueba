---
description: Flujo de trabajo de replicación visual — análisis, implementación, comparación y criterio de parada
---

# Workflow de replicación

## Paso 1 — Analiza la imagen antes de escribir código

Antes de crear ningún archivo, describe en voz alta lo que ves:
- Secciones presentes (hero, features, pricing, testimonials, footer…)
- Paleta de colores (extrae los hex principales)
- Tipografía (familia, tamaños aproximados, pesos — para identificar la fuente usá WhatFont extension o inspeccioná `font-family` en DevTools → Computed)
- Componentes reutilizables identificados (botones, cards, badges…)
- Layout general (1 columna, grid, sidebar…)

Si el usuario aportó notas de CSS, incorpóralas. Tienen prioridad sobre tu estimación visual.

## Paso 2 — Crea la estructura del proyecto

Genera todos los archivos y carpetas antes de escribir contenido. Un proyecto bien estructurado desde el inicio evita refactors costosos.

## Paso 3 — Implementa de mayor a menor escala

1. Variables CSS y estilos globales (`main.css`)
2. Layout principal (`index.html` + estructura de secciones)
3. Componentes de mayor a menor: navbar → hero → secciones de contenido → footer
4. Interacciones JS al final, cuando el HTML/CSS esté estable

## Paso 4 — Captura un screenshot del resultado

Abre el archivo en el navegador y usa las DevTools para capturar:

**Chrome / Edge:**
1. `F12` → `Ctrl+Shift+P` → "Capture full size screenshot"

**Alternativa con script Node (si tenés Node instalado):**
```js
// screenshot.js
const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('file://' + process.cwd() + '/index.html');
  await page.setViewport({ width: 1440, height: 900 });
  await page.screenshot({ path: 'screenshot.png', fullPage: true });
  await browser.close();
})();
```
```bash
node screenshot.js
```

Si la página tiene secciones diferenciadas, captúralas también individualmente.

## Paso 5 — Compara en detalle

| Aspecto | Qué revisar |
|---|---|
| Espaciado y padding | Mide en px, sección a sección |
| Tipografía | Tamaño, peso, line-height, familia |
| Colores | Hex exactos: fondo, texto, bordes, sombras |
| Alineación | Horizontal, vertical, centrado |
| Bordes y efectos | border-radius, box-shadow, outline |
| Componentes | ¿Los botones/cards/forms coinciden con la referencia? |
| Responsive | ¿Se rompe algo al cambiar el viewport? |
| Accesibilidad | ¿Navegás toda la página con Tab? ¿El foco es visible en cada elemento? ¿Los `alt` son descriptivos? |

## Paso 6 — Corrige y repite

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
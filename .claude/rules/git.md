---
description: Reglas de control de versiones — qué commitear, qué ignorar, higiene de commits
---

# Reglas de Git

## .gitignore mínimo obligatorio

Todo proyecto debe tener un `.gitignore` que excluya al menos:

```gitignore
# Dependencias
node_modules/
package-lock.json
yarn.lock

# Entorno y secretos
.env
.env.*
*.env
secrets.*
credentials.*
config.local.*

# Archivos de OS
.DS_Store
Thumbs.db
desktop.ini

# Editor
.vscode/settings.json
.idea/

# Build
dist/
build/
out/

# Logs
*.log

# Capturas generadas durante desarrollo
screenshot*.png
screenshot_*.png
*.screenshot.png
```

## Qué NO commitear nunca

- Archivos de captura de pantalla generados durante el desarrollo (`screenshot*.png`).
- Credenciales, tokens de API, o archivos `.env` de ningún tipo.
- Binarios grandes no versionados (imágenes de producción van en `assets/img/`, no en la raíz).
- Archivos temporales o de caché.

## Mensajes de commit — ejemplos del dominio

```
Add guides page
Fix nav active state on blog page
Extract floating animation to shared-page.css
Add password toggle to login form
Update hero gradient to match reference
Fix form error color
Add loading="lazy" to all non-hero images
Refactor inline styles to shared-page utility classes
```

## Higiene de commits

- Verifica con `git status` antes de hacer `git add` para detectar archivos no deseados.
- Prefiere `git add <archivo>` sobre `git add .` para evitar incluir archivos accidentales.
- Si ya se committeó un archivo por error: `git rm --cached <archivo>`, actualiza `.gitignore`, haz un nuevo commit de limpieza.
- Mensajes de commit en imperativo y en inglés: `Add login page`, `Fix navbar active state`.
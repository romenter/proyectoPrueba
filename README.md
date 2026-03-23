# Accuat

Sitio de marketing para Accuat — una plataforma de facturación para freelancers y equipos.

Construido con **Vite + React + TypeScript + Tailwind CSS v3**.

---

## Stack

| Herramienta | Versión |
|---|---|
| React | 19 |
| TypeScript | 5.9 |
| Tailwind CSS | 3.4 |
| React Router | 7 |
| Vite | 8 |

---

## Inicio rápido

```bash
cd app
npm install
npm run dev
```

Abrí [http://localhost:5173](http://localhost:5173).

---

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run preview` | Vista previa del build de producción en local |
| `npm run lint` | Ejecuta ESLint |

---

## Estructura del proyecto

```
app/src/
├── main.tsx
├── App.tsx                     # Rutas + Layout (oculta Navbar/Footer en páginas de auth)
├── index.css                   # Directivas de Tailwind + utilidades custom
│
├── context/
│   └── ThemeContext.tsx        # Tema light / dark / system con persistencia en localStorage
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── Button.tsx
│       └── Card.tsx
│
└── pages/
    ├── Home.tsx
    ├── Teams.tsx
    ├── About.tsx
    ├── Blog.tsx
    ├── Guides.tsx
    ├── Login.tsx
    └── Signup.tsx
```

---

## Dark mode

El tema se alterna con un botón en la Navbar y en las páginas de auth. La preferencia se guarda en `localStorage` bajo la clave `accuat-theme` y se aplica como atributo `data-theme` en `<html>`.

Soporta tres estados: `light`, `dark` y `system` (sigue la preferencia del sistema operativo). Un script inline en `index.html` aplica el tema guardado antes de que React hidrate la página, evitando el flash de tema incorrecto.

---

## Ramas

| Rama | Descripción |
|---|---|
| `main` | Estable |
| `feat/dark-mode-toggle` | Implementación del dark mode |

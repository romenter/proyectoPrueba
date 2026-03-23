# CLAUDE.md

Este archivo proporciona orientación a Claude Code cuando trabaja con este repositorio.

## Descripción del proyecto

**Accuat** — sitio de marketing. Stack: **Vite + React + TypeScript + Tailwind CSS v3**. Sin backend propio; todas las páginas son rutas del lado del cliente con React Router.

### Setup inicial (solo una vez)

```bash
npm create vite@latest . -- --template react-ts
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install react-router-dom
```

Configurar `tailwind.config.js`:

```js
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: { extend: {} },
  plugins: [],
}
```

Arrancar: `npm run dev` · Build: `npm run build`

---

## Estructura del proyecto

```
src/
├── main.tsx                  # Entry point — monta <App /> con Router y ThemeProvider
├── App.tsx                   # Define rutas con React Router
├── index.css                 # @tailwind directives + variables CSS globales
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── ui/                   # Componentes primitivos reutilizables
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   └── Input.tsx
│   └── sections/             # Secciones de página (no rutas completas)
│       ├── Hero.tsx
│       ├── Features.tsx
│       └── CTA.tsx
│
├── pages/                    # Una carpeta = una ruta
│   ├── Home.tsx
│   ├── Teams.tsx
│   ├── About.tsx
│   ├── Blog.tsx
│   ├── Guides.tsx
│   ├── Login.tsx
│   └── Signup.tsx
│
├── hooks/
│   └── useTheme.ts           # Lee/escribe localStorage + data-theme
│
├── context/
│   └── ThemeContext.tsx      # Provee theme y toggleTheme a toda la app
│
└── assets/
    ├── css/
    │   └── shared.css        # Clases custom: .floating, .bg-hero-gradient, etc.
    └── img/
```

---

## Convenciones de componentes

### Componente UI básico

```tsx
// src/components/ui/Button.tsx
type Variant = 'primary' | 'secondary' | 'ghost' | 'danger'
type Size    = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

const styles: Record<Variant, string> = {
  primary:   'bg-gray-900 text-white hover:bg-black',
  secondary: 'border border-gray-300 text-gray-700 hover:border-gray-500',
  ghost:     'text-gray-600 hover:text-black hover:bg-gray-100',
  danger:    'bg-red-600 text-white hover:bg-red-700',
}

const sizes: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
}

export function Button({ variant = 'primary', size = 'md', className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-lg font-medium
        transition-colors focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none
        ${styles[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  )
}
```

### Reglas para todos los componentes

- Exportaciones **nombradas**, no default (facilita el refactor y los imports).
- Props tipadas con `interface`; extender `HTML*Attributes` cuando el componente envuelve un elemento nativo.
- Sin lógica de negocio en componentes UI; esa lógica va en hooks o páginas.
- Clases de Tailwind ordenadas: layout → spacing → color → tipografía → efectos.
- No usar `any`. Preferir `unknown` + narrowing o tipos exactos.

---

## Sistema de dark mode

### ThemeContext

```tsx
// src/context/ThemeContext.tsx
import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'system'

const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void } | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem('accuat-theme') as Theme) ?? 'system'
  )

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.setAttribute('data-theme', 'dark')
    else if (theme === 'light') root.setAttribute('data-theme', 'light')
    else root.removeAttribute('data-theme')
    localStorage.setItem('accuat-theme', theme)
  }, [theme])

  const toggleTheme = () =>
    setTheme(t => (t === 'dark' ? 'light' : 'dark'))

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
```

### Prevención de flash

En `index.html`, antes de cualquier script:

```html
<script>
  (function(){
    var t = localStorage.getItem('accuat-theme');
    if (t === 'dark') document.documentElement.setAttribute('data-theme','dark');
    else if (t === 'light') document.documentElement.setAttribute('data-theme','light');
  })();
</script>
```

### Reglas de CSS para dark mode

Tailwind dark mode usa el selector `[data-theme="dark"]` (configurado en `tailwind.config.js`). Para clases custom en `shared.css`, duplicar siempre en ambos bloques:

```css
/* Preferencia del OS */
@media (prefers-color-scheme: dark) {
  html:not([data-theme="light"]) .bg-hero-gradient { … }
}

/* Toggle manual */
html[data-theme="dark"] .bg-hero-gradient { … }
```

---

## Routing

```tsx
// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Home } from './pages/Home'
// … demás imports

export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/"        element={<Home />} />
            <Route path="/teams"   element={<Teams />} />
            <Route path="/about"   element={<About />} />
            <Route path="/blog"    element={<Blog />} />
            <Route path="/guides"  element={<Guides />} />
            <Route path="/login"   element={<Login />} />
            <Route path="/signup"  element={<Signup />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}
```

Links de navegación: usar `<NavLink>` de React Router, no `<a href>`. El prop `className` acepta una función que recibe `{ isActive }`.

---

## Checklist para nueva página

1. Crear `src/pages/NombrePagina.tsx` con export nombrado.
2. Agregar `<Route>` en `App.tsx`.
3. Agregar el link en `Navbar.tsx` usando `<NavLink>`.
4. Título de página con `<title>` en un `useEffect` o usando una librería como `react-helmet-async`.

Patrón de fondos por sección: `bg-hero-gradient` → alternar `bg-white` / `bg-gray-50` → `bg-dark-panel` para CTA → `bg-gray-950` para footer.

---

## CSS — qué va dónde

| Tipo de estilo | Dónde |
|---|---|
| Clases utilitarias de layout/color/spacing | Tailwind inline en el JSX |
| Animaciones custom (`.floating`, `.floating-slow`) | `src/assets/css/shared.css` |
| Gradientes custom (`.bg-hero-gradient`, `.bg-dark-panel`) | `src/assets/css/shared.css` |
| Variables CSS globales (`--color-bg`, `--font-base`) | `src/index.css` en `:root` |
| Overrides de dark mode para clases custom | `src/assets/css/shared.css` (ambos bloques) |

No usar `styled-components` ni CSS Modules salvo que el equipo lo acuerde explícitamente.

---

## Accesibilidad

- Cumplir **WCAG 2.2 AA**: tap targets ≥ 24×24 px, foco visible en todos los elementos interactivos.
- `<img>` siempre con `alt` descriptivo; decorativas con `alt=""`.
- Usar `<button>` para acciones y `<a>` para navegación; nunca al revés.
- `aria-label` en botones icon-only (ej: el toggle de tema).
- Navegar la página completa con Tab después de cada cambio significativo.

---

## Reglas de TypeScript

- `strict: true` en `tsconfig.json`. Sin excepciones.
- No usar `as` para castear salvo cuando sea imposible evitarlo; preferir type guards.
- Tipos de props en `interface`, no en `type` (salvo unions y tipos utilitarios).
- Inferir tipos cuando sea obvio; anotar explícitamente returns de funciones públicas y hooks.

---

## Reglas detalladas

Las reglas extendidas están en `.claude/rules/`:
- `css.md` — naming de tokens, patrón de dark mode
- `html.md` — formato de título, orden de atributos, reglas de `alt`/`loading`
- `javascript.md` — regla de no usar handlers inline, requisitos de sincronización ARIA
- `components.md` — convenciones de atributos `data-*`, catálogo de componentes
- `accessibility.md` — contraste, visibilidad del foco, outlines en secciones oscuras
- `workflow.md` — ciclo captura → comparar → corregir (mínimo 2 rondas)
- `git.md` — estilo de mensajes de commit, requisitos del `.gitignore`

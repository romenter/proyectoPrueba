import { NavLink } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'

const navLinks = [
  { to: '/teams',  label: 'Teams'  },
  { to: '/about',  label: 'About'  },
  { to: '/blog',   label: 'Blog'   },
  { to: '/guides', label: 'Guides' },
]

export function Navbar() {
  const { toggleTheme } = useTheme()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="flex items-center gap-10">
        <NavLink to="/" className="font-bold text-lg tracking-tight hover:opacity-80 transition-opacity text-gray-900">
          Accuat
        </NavLink>
        <div className="flex items-center gap-7 text-sm text-gray-600">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive ? 'text-black font-semibold' : 'hover:text-black transition-colors'
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          aria-label="Toggle dark mode"
        >
          <svg className="theme-toggle__icon--sun" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <circle cx="12" cy="12" r="4.5"/>
            <path strokeLinecap="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
          <svg className="theme-toggle__icon--moon" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>
        <NavLink to="/login" className="text-sm text-gray-600 hover:text-black transition-colors">
          Log in
        </NavLink>
        <NavLink to="/signup" className="text-sm bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-black transition-colors font-medium">
          Sign up for free
        </NavLink>
      </div>
    </nav>
  )
}

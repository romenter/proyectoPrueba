import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const GoogleIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

export function Login() {
  const { toggleTheme } = useTheme()
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="antialiased min-h-screen flex">
      {/* Left panel */}
      <div className="flex-1 flex flex-col justify-between px-8 py-10 min-h-screen max-w-lg mx-auto w-full">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-bold text-lg tracking-tight text-gray-900 hover:opacity-70 transition-opacity">
            Accuat
          </Link>
          <button onClick={toggleTheme} className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors" aria-label="Toggle dark mode">
            <svg className="theme-toggle__icon--sun" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="4.5"/><path strokeLinecap="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            <svg className="theme-toggle__icon--moon" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          </button>
        </div>

        <div className="w-full max-w-sm mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-1">Welcome back</h1>
          <p className="text-gray-400 text-sm mb-8">Log in to your Accuat account.</p>

          <form className="flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5" htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="you@company.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-white transition-colors hover:border-gray-300" />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-semibold text-gray-600" htmlFor="password">Password</label>
                <a href="#" className="text-xs text-gray-400 hover:text-gray-700 transition-colors">Forgot password?</a>
              </div>
              <div className="relative">
                <input id="password" type={showPassword ? 'text' : 'password'} placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-white transition-colors hover:border-gray-300" />
                <button type="button" onClick={() => setShowPassword(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors" aria-label="Toggle password visibility">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                </button>
              </div>
            </div>

            <button type="submit" className="w-full bg-gray-900 text-white font-semibold py-3 rounded-xl hover:bg-black transition-colors text-sm mt-1">
              Log in
            </button>

            <div className="flex items-center gap-3 my-1">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-xs text-gray-400">or continue with</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            <button type="button" className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 text-gray-700 font-medium py-3 rounded-xl hover:border-gray-400 transition-colors text-sm">
              <GoogleIcon />
              Continue with Google
            </button>
          </form>

          <p className="text-center text-xs text-gray-400 mt-8">
            Don't have an account?{' '}
            <Link to="/signup" className="text-gray-800 font-semibold hover:underline">Sign up free</Link>
          </p>
        </div>

        <p className="text-center text-xs text-gray-300">
          © 2024 Accuat · <a href="#" className="hover:text-gray-500 transition-colors">Privacy</a> · <a href="#" className="hover:text-gray-500 transition-colors">Terms</a>
        </p>
      </div>

      {/* Right panel */}
      <div className="hidden lg:flex flex-1 items-center justify-center relative overflow-hidden bg-auth-panel">
        <div className="absolute inset-0 bg-dot-grid"></div>
        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="floating floating--delay-0">
            <div className="bg-white rounded-2xl p-6 w-72 card-shadow-heavy">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-xs text-gray-400 mb-0.5">Invoice #0089</div>
                  <div className="font-bold text-gray-900">Marble Studio</div>
                </div>
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">Paid ✓</span>
              </div>
              <div className="border-t border-gray-100 pt-4">
                <div className="flex justify-between text-xs text-gray-400 mb-1.5"><span>Design system</span><span>$2,400</span></div>
                <div className="flex justify-between text-xs text-gray-400 mb-1.5"><span>Development</span><span>$1,800</span></div>
                <div className="flex justify-between text-sm font-bold text-gray-900 pt-2 border-t border-gray-100 mt-2"><span>Total</span><span>$4,200</span></div>
              </div>
            </div>
          </div>
          <div className="floating floating--delay-1_5">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-3 flex items-center gap-3 border border-white/10">
              <span className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center text-white text-sm font-bold">✓</span>
              <div>
                <div className="text-white text-sm font-semibold">Payment received</div>
                <div className="text-white/50 text-xs">$4,200 · just now</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 text-center px-10">
          <p className="text-white/40 text-xs leading-relaxed max-w-xs mx-auto">
            "Finally an invoice tool that my clients actually pay on time."
          </p>
          <p className="text-white/25 text-xs mt-1">— Sofia M., Freelance Designer</p>
        </div>
      </div>
    </div>
  )
}

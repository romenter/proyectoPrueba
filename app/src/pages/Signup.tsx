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

function getStrength(pwd: string) {
  let s = 0
  if (pwd.length >= 8) s++
  if (/[A-Z]/.test(pwd)) s++
  if (/[0-9]/.test(pwd)) s++
  if (/[^A-Za-z0-9]/.test(pwd)) s++
  return s
}

const strengthColor = ['bg-gray-200','bg-red-400','bg-yellow-400','bg-blue-400','bg-green-400']

export function Signup() {
  const { toggleTheme } = useTheme()
  const [step, setStep] = useState(1)
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const strength = getStrength(password)

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
          <h1 className="text-3xl font-extrabold text-gray-900 mb-1">Create your account</h1>
          <p className="text-gray-400 text-sm mb-8">Free forever. No credit card required.</p>

          {/* Steps indicator */}
          <div className="flex items-center gap-2 mb-8">
            {[1,2,3].map((s, i) => (
              <>
                <div key={s} className="flex items-center gap-1.5">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${step === s ? 'bg-gray-900 text-white' : step > s ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-400'}`}>{step > s ? '✓' : s}</div>
                  <span className={`text-xs font-semibold ${step === s ? 'text-gray-800' : step > s ? 'text-gray-500' : 'text-gray-400'}`}>{['Account','Profile','Done'][i]}</span>
                </div>
                {i < 2 && <div key={`line-${i}`} className="flex-1 h-px bg-gray-200"></div>}
              </>
            ))}
          </div>

          {/* Step 1 */}
          {step === 1 && (
            <form className="flex flex-col gap-4" onSubmit={e => { e.preventDefault(); setStep(2) }}>
              <button type="button" className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 text-gray-700 font-medium py-3 rounded-xl hover:border-gray-400 transition-colors text-sm">
                <GoogleIcon />Continue with Google
              </button>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-gray-200"></div>
                <span className="text-xs text-gray-400">or with email</span>
                <div className="flex-1 h-px bg-gray-200"></div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5" htmlFor="signup-email">Work email</label>
                <input id="signup-email" type="email" placeholder="you@company.com" required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-white transition-colors hover:border-gray-300" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5" htmlFor="signup-password">Password</label>
                <div className="relative">
                  <input id="signup-password" type={showPassword ? 'text' : 'password'} placeholder="At least 8 characters"
                    required minLength={8} value={password} onChange={e => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-white transition-colors hover:border-gray-300" />
                  <button type="button" onClick={() => setShowPassword(v => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors" aria-label="Toggle visibility">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                  </button>
                </div>
                <div className="mt-2 flex gap-1">
                  {[1,2,3,4].map(i => (
                    <div key={i} className={`h-1 flex-1 rounded-full ${i <= strength ? strengthColor[strength] : 'bg-gray-200'}`}></div>
                  ))}
                </div>
              </div>
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input type="checkbox" required className="mt-0.5 w-4 h-4 rounded border-gray-300 flex-shrink-0" style={{accentColor:'#111'}} />
                <span className="text-xs text-gray-500 leading-relaxed">
                  I agree to the <a href="#" className="text-gray-800 font-semibold hover:underline">Terms of Service</a> and <a href="#" className="text-gray-800 font-semibold hover:underline">Privacy Policy</a>
                </span>
              </label>
              <button type="submit" className="w-full bg-gray-900 text-white font-semibold py-3 rounded-xl hover:bg-black transition-colors text-sm mt-1">
                Create account →
              </button>
            </form>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <form className="flex flex-col gap-4" onSubmit={e => { e.preventDefault(); setStep(3) }}>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5" htmlFor="fullname">Full name</label>
                <input id="fullname" type="text" placeholder="Bella Garcia" required className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-white hover:border-gray-300" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5" htmlFor="company">Company / freelance name</label>
                <input id="company" type="text" placeholder="Marble Studio" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-white hover:border-gray-300" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">I mainly use Accuat for…</label>
                <div className="grid grid-cols-2 gap-2">
                  {['Freelancing','Agency','Startup','Other'].map(opt => (
                    <label key={opt} className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2.5 cursor-pointer hover:border-gray-400 transition-colors text-xs font-medium text-gray-700">
                      <input type="radio" name="use-case" value={opt.toLowerCase()} className="w-3.5 h-3.5" /> {opt}
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 mt-1">
                <button type="button" onClick={() => setStep(1)} className="flex-1 border border-gray-200 text-gray-600 font-medium py-3 rounded-xl hover:border-gray-400 transition-colors text-sm">← Back</button>
                <button type="submit" className="flex-1 bg-gray-900 text-white font-semibold py-3 rounded-xl hover:bg-black transition-colors text-sm">Continue →</button>
              </div>
            </form>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-2">You're all set!</h2>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">Your Accuat account is ready. Send your first invoice in under 2 minutes.</p>
              <Link to="/" className="block w-full bg-gray-900 text-white font-semibold py-3 rounded-xl hover:bg-black transition-colors text-sm text-center">
                Go to dashboard →
              </Link>
              <div className="mt-6 bg-gray-50 rounded-2xl p-4 text-left border border-gray-100">
                <div className="text-xs font-semibold text-gray-600 mb-3">Quick start checklist</div>
                <ul className="flex flex-col gap-2.5">
                  <li className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="w-4 h-4 rounded-full bg-green-400 flex items-center justify-center text-white text-xs">✓</span>
                    Create account
                  </li>
                  <li className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="w-4 h-4 rounded-full border-2 border-gray-300 flex items-center justify-center"></span>
                    Send your first invoice
                  </li>
                  <li className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="w-4 h-4 rounded-full border-2 border-gray-300 flex items-center justify-center"></span>
                    Connect your bank account
                  </li>
                </ul>
              </div>
            </div>
          )}

          {step < 3 && (
            <p className="text-center text-xs text-gray-400 mt-8">
              Already have an account?{' '}
              <Link to="/login" className="text-gray-800 font-semibold hover:underline">Log in</Link>
            </p>
          )}
        </div>

        <p className="text-center text-xs text-gray-300">
          © 2024 Accuat · <a href="#" className="hover:text-gray-500 transition-colors">Privacy</a> · <a href="#" className="hover:text-gray-500 transition-colors">Terms</a>
        </p>
      </div>

      {/* Right panel */}
      <div className="hidden lg:flex flex-1 items-center justify-center relative overflow-hidden bg-auth-panel">
        <div className="absolute inset-0 bg-dot-grid"></div>
        <div className="relative z-10 flex flex-col items-center gap-5 px-10">
          <div className="floating floating--delay-0">
            <div className="bg-white rounded-2xl p-5 w-64 card-shadow-heavy">
              <div className="text-xs text-gray-400 mb-3 font-medium">This month</div>
              <div className="text-3xl font-extrabold text-gray-900 mb-1">$18,400</div>
              <div className="text-xs text-green-500 font-semibold flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M7 14l5-5 5 5z"/></svg>
                +32% from last month
              </div>
              <div className="flex items-end gap-1 mt-4 h-10">
                {[40,60,50,75,55,100].map((h, i) => (
                  <div key={i} className={`flex-1 rounded-sm ${i === 5 ? 'bg-gray-900' : i % 2 === 0 ? 'bg-gray-200' : 'bg-gray-100'}`} style={{height: `${h}%`}}></div>
                ))}
              </div>
            </div>
          </div>
          <div className="floating floating--delay-1 flex flex-col gap-2 w-64">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2.5 flex items-center gap-3 border border-white/10">
              <span className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">✓</span>
              <div>
                <div className="text-white text-xs font-semibold">Marble Studio paid</div>
                <div className="text-white/40 text-xs">$4,200 · 2 min ago</div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2.5 flex items-center gap-3 border border-white/10">
              <span className="w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">↗</span>
              <div>
                <div className="text-white text-xs font-semibold">Invoice opened</div>
                <div className="text-white/40 text-xs">Charm AI · just now</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 px-10">
          <div className="flex flex-col gap-2 max-w-xs mx-auto">
            {['Free forever — pay only 1% per payment received','Multi-currency & crypto ready out of the box','Trusted by 5,000+ businesses in 100+ countries'].map(text => (
              <div key={text} className="flex items-center gap-2 text-white/50 text-xs">
                <svg className="w-3.5 h-3.5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

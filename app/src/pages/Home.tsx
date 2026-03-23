export function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-hero-gradient">
        <div className="absolute top-24 left-10 floating-slow opacity-90">
          <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/></svg>
          </div>
        </div>
        <div className="absolute top-36 right-14 floating opacity-90">
          <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center shadow-lg">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
          </div>
        </div>
        <div className="absolute top-20 right-28 floating-slow">
          <div className="w-14 h-10 rounded-lg bg-cyan-400/30 border border-cyan-300 flex items-center justify-center">
            <span className="text-xs font-bold text-cyan-700">$200</span>
          </div>
        </div>
        <div className="absolute top-28 left-32 floating opacity-80">
          <div className="bg-white rounded-xl p-3 card-shadow w-32">
            <div className="text-xs text-gray-400 mb-1">Invoice</div>
            <div className="text-xs font-semibold text-gray-800">$1,200.00</div>
            <div className="mt-1 w-full h-1.5 bg-green-100 rounded-full"><div className="h-1.5 bg-green-400 rounded-full w-3/4"></div></div>
          </div>
        </div>
        <div className="absolute top-40 right-48 floating">
          <div className="bg-white rounded-xl p-3 card-shadow w-28">
            <div className="flex items-center gap-1.5 mb-1">
              <div className="w-5 h-5 rounded-full bg-green-500"></div>
              <span className="text-xs font-semibold">Paid</span>
            </div>
            <div className="text-xs text-gray-500">$840.00</div>
          </div>
        </div>

        <div className="relative text-center max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1.5 text-xs text-gray-500 card-shadow mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            New: Multi-currency support is here
          </div>
          <h1 className="text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            Get paid<br/>same day
          </h1>
          <p className="text-lg text-gray-500 mb-8 max-w-md mx-auto">
            By sending customers the most detailed invoice in the world
          </p>
          <a href="#" className="inline-flex items-center gap-2 bg-gray-900 text-white font-semibold px-6 py-3 rounded-xl hover:bg-black transition-colors shadow-lg">
            Create Invoice in seconds
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
          </a>
          <p className="text-sm text-gray-400 mt-5">Used by 5,000+ businesses &amp; freelancers in 100+ countries</p>
          <div className="mt-10 pt-6 border-t border-gray-200/60">
            <p className="text-xs text-gray-400 mb-4 uppercase tracking-widest">Trusted by teams at</p>
            <div className="flex items-center justify-center gap-8 opacity-40">
              {['stripe','shopify','notion','figma','linear','vercel'].map(name => (
                <span key={name} className="text-sm font-bold text-gray-600">{name}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES INTRO ── */}
      <section className="py-24 bg-white text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 leading-snug mb-5">
            We help you get paid<br/>faster, easier and cheaper<br/>in any currency you want
          </h2>
          <p className="text-gray-500 text-base max-w-lg mx-auto mb-8">
            Send invoices your customers will actually open, read, and pay — without chasing them down.
          </p>
          <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-800 underline underline-offset-4 hover:text-black">
            See all features
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/></svg>
          </a>
        </div>
      </section>

      {/* ── INVOICE DEMO CARDS ── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-8 relative">
          <div className="flex items-start justify-center gap-8">
            {/* Card Left */}
            <div className="invoice-card bg-white rounded-2xl w-72 overflow-hidden invoice-tilt-left">
              <div className="px-5 pt-5 pb-3">
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">ONLINE</span>
                <h3 className="text-base font-bold text-gray-900 mt-3 mb-0.5">Marble Studio</h3>
                <p className="text-xs text-blue-500">billing@marble.studio</p>
                <div className="mt-3 text-xs text-gray-500 space-y-0.5">
                  <p>12 Park Avenue, Suite 300</p>
                  <p>Buenos Aires, Argentina</p>
                </div>
                <div className="mt-3">
                  <span className="text-xs text-gray-400 uppercase tracking-wide">Description</span>
                  <p className="text-xs text-gray-700 mt-0.5">Development</p>
                </div>
                <div className="border-t border-gray-100 mt-4 pt-3 flex justify-between items-center">
                  <span className="text-xs text-gray-400">Due</span>
                  <span className="text-sm font-bold text-gray-900">$4,200.00</span>
                </div>
              </div>
              <div className="bg-gray-50 px-5 py-3">
                <div className="w-full h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">Pay now</span>
                </div>
              </div>
            </div>

            {/* Card Right */}
            <div className="relative">
              <div className="invoice-card bg-white rounded-2xl w-72 overflow-hidden invoice-tilt-right">
                <div className="px-5 pt-5 pb-3">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4"/></svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 leading-none">Charm AI</h3>
                      <p className="text-xs text-blue-500">billing@charmAI.ai</p>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mb-1">5 Raffles Pl, Tennyson</div>
                  <div className="text-xs text-gray-500 mb-3">Bangalore, Karnataka</div>
                  <div className="flex gap-2 mb-3">
                    <div className="bg-gray-100 rounded-md px-2 py-1 text-xs text-gray-600">Prepaid</div>
                    <div className="bg-gray-100 rounded-md px-2 py-1 text-xs text-gray-600">Tech</div>
                  </div>
                  <div className="border-t border-gray-100 pt-3 flex justify-between items-center">
                    <span className="text-xs text-gray-400">Amount</span>
                    <span className="text-sm font-bold text-gray-900">₹12,800.00</span>
                  </div>
                </div>
                <div className="bg-gray-50 px-5 py-3">
                  <div className="w-full h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-semibold">Pay now</span>
                  </div>
                </div>
              </div>
              <div className="sticky-note sticky-note--right absolute -top-4 -right-6 w-28 p-3 rounded-sm z-10">
                <p className="text-xs font-medium text-yellow-900 leading-snug">Just closed this for business! 🎉✨</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 max-w-xl mx-auto">
            <p className="text-gray-500 text-sm leading-relaxed">
              Send invoices without the back-and-forth. No late fees, fine print, and ever — just a clean, professional invoice your customer is happy to pay.
            </p>
            <div className="mt-4 flex items-center justify-center gap-1 text-sm text-gray-400">
              <span>Powered by</span>
              <span className="font-semibold text-gray-600">Accuat</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-24 bg-white text-center px-4">
        <div className="max-w-md mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-10">With simple pricing</h2>
          <div className="bg-white rounded-2xl invoice-card p-8 text-left border border-gray-100">
            <div className="mb-4">
              <span className="text-3xl font-extrabold text-gray-900">1%</span>
              <span className="text-gray-500 text-sm ml-1">per payment</span>
            </div>
            <div className="mb-6">
              <span className="text-xl font-bold text-green-500">0%</span>
              <span className="text-gray-400 text-sm ml-1">everything else</span>
            </div>
            <button className="w-full bg-gray-900 text-white font-semibold py-3 rounded-xl hover:bg-black transition-colors mb-6">
              Get started
            </button>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Unlimited invoices</li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Flexible payment options</li>
              <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Automated reminders sync</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── CURRENCY ── */}
      <section className="py-24 text-center px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 leading-snug">
            Euros, Dollars, Yens, USDC, USDT…<br/>
            we <span className="underline-accent">do it all</span> and we <span className="underline-accent">do it fast.</span>
          </h2>
        </div>
      </section>

      {/* ── MAP SECTION ── */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto relative">
          <div className="flex items-center justify-center gap-10 relative">
            {/* Map Buenos Aires */}
            <div className="relative rounded-2xl overflow-hidden card-shadow border border-gray-200 map-card map-card--left">
              <svg width="320" height="220" viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg">
                <rect width="320" height="220" fill="#e8f4e8"/>
                <rect x="0" y="0" width="40" height="30" fill="#d4edda" rx="1"/><rect x="50" y="0" width="60" height="30" fill="#c8e6c9" rx="1"/><rect x="120" y="0" width="50" height="30" fill="#d4edda" rx="1"/><rect x="180" y="0" width="60" height="30" fill="#c8e6c9" rx="1"/><rect x="250" y="0" width="70" height="30" fill="#d4edda" rx="1"/>
                <rect x="0" y="40" width="40" height="40" fill="#c8e6c9" rx="1"/><rect x="50" y="40" width="60" height="40" fill="#d4edda" rx="1"/><rect x="120" y="40" width="50" height="40" fill="#c8e6c9" rx="1"/><rect x="180" y="40" width="60" height="40" fill="#d4edda" rx="1"/><rect x="250" y="40" width="70" height="40" fill="#c8e6c9" rx="1"/>
                <rect x="0" y="90" width="40" height="35" fill="#d4edda" rx="1"/><rect x="50" y="90" width="60" height="35" fill="#c8e6c9" rx="1"/><rect x="120" y="90" width="50" height="35" fill="#d4edda" rx="1"/><rect x="180" y="90" width="60" height="35" fill="#c8e6c9" rx="1"/><rect x="250" y="90" width="70" height="35" fill="#d4edda" rx="1"/>
                <rect x="0" y="135" width="40" height="40" fill="#c8e6c9" rx="1"/><rect x="50" y="135" width="60" height="40" fill="#d4edda" rx="1"/><rect x="120" y="135" width="50" height="40" fill="#c8e6c9" rx="1"/><rect x="180" y="135" width="60" height="40" fill="#d4edda" rx="1"/><rect x="250" y="135" width="70" height="40" fill="#c8e6c9" rx="1"/>
                <rect x="0" y="185" width="40" height="35" fill="#d4edda" rx="1"/><rect x="50" y="185" width="60" height="35" fill="#c8e6c9" rx="1"/><rect x="120" y="185" width="50" height="35" fill="#d4edda" rx="1"/><rect x="180" y="185" width="60" height="35" fill="#c8e6c9" rx="1"/><rect x="250" y="185" width="70" height="35" fill="#d4edda" rx="1"/>
                <rect x="0" y="30" width="320" height="10" fill="#f5f5f5"/><rect x="0" y="80" width="320" height="10" fill="#f5f5f5"/><rect x="0" y="125" width="320" height="10" fill="#f5f5f5"/><rect x="0" y="175" width="320" height="10" fill="#f5f5f5"/>
                <rect x="40" y="0" width="10" height="220" fill="#f5f5f5"/><rect x="110" y="0" width="10" height="220" fill="#f5f5f5"/><rect x="170" y="0" width="10" height="220" fill="#f5f5f5"/><rect x="240" y="0" width="10" height="220" fill="#f5f5f5"/>
                <circle cx="155" cy="105" r="8" fill="#ef4444" stroke="white" strokeWidth="2"/><circle cx="155" cy="105" r="3" fill="white"/>
              </svg>
              <div className="absolute inset-0 border-2 border-orange-300 rounded-2xl pointer-events-none"></div>
              <div className="absolute bottom-3 left-3 bg-white rounded-lg px-2.5 py-1.5 text-xs font-semibold shadow-md">📍 Buenos Aires</div>
            </div>

            <div className="flex flex-col items-center gap-1 relative w-20">
              <svg width="80" height="20" viewBox="0 0 80 20">
                <line x1="0" y1="10" x2="70" y2="10" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,4"/>
                <polygon points="70,6 80,10 70,14" fill="#94a3b8"/>
              </svg>
            </div>

            {/* Map Bangalore */}
            <div className="relative rounded-2xl overflow-hidden card-shadow border border-gray-200 map-card map-card--right">
              <svg width="320" height="220" viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg">
                <rect width="320" height="220" fill="#e8f0f8"/>
                <rect x="220" y="0" width="100" height="220" fill="#bfdbfe"/>
                <path d="M220,0 Q235,40 225,80 Q215,120 230,160 Q240,190 220,220 L320,220 L320,0 Z" fill="#93c5fd"/>
                <rect x="0" y="5" width="45" height="25" fill="#d0e8d0" rx="1"/><rect x="55" y="5" width="50" height="25" fill="#dde8dd" rx="1"/><rect x="115" y="5" width="45" height="25" fill="#d0e8d0" rx="1"/><rect x="170" y="5" width="40" height="25" fill="#dde8dd" rx="1"/>
                <rect x="0" y="40" width="45" height="40" fill="#dde8dd" rx="1"/><rect x="55" y="40" width="50" height="40" fill="#d0e8d0" rx="1"/><rect x="115" y="40" width="45" height="40" fill="#dde8dd" rx="1"/><rect x="170" y="40" width="40" height="40" fill="#d0e8d0" rx="1"/>
                <rect x="0" y="90" width="45" height="35" fill="#d0e8d0" rx="1"/><rect x="55" y="90" width="50" height="35" fill="#dde8dd" rx="1"/><rect x="115" y="90" width="45" height="35" fill="#d0e8d0" rx="1"/><rect x="170" y="90" width="40" height="35" fill="#dde8dd" rx="1"/>
                <rect x="0" y="135" width="45" height="40" fill="#dde8dd" rx="1"/><rect x="55" y="135" width="50" height="40" fill="#d0e8d0" rx="1"/><rect x="115" y="135" width="45" height="40" fill="#dde8dd" rx="1"/><rect x="170" y="135" width="40" height="40" fill="#d0e8d0" rx="1"/>
                <rect x="0" y="185" width="45" height="35" fill="#d0e8d0" rx="1"/><rect x="55" y="185" width="50" height="35" fill="#dde8dd" rx="1"/><rect x="115" y="185" width="45" height="35" fill="#d0e8d0" rx="1"/><rect x="170" y="185" width="40" height="35" fill="#dde8dd" rx="1"/>
                <rect x="0" y="30" width="215" height="10" fill="#f5f5f5"/><rect x="0" y="80" width="215" height="10" fill="#f5f5f5"/><rect x="0" y="125" width="215" height="10" fill="#f5f5f5"/><rect x="0" y="175" width="215" height="10" fill="#f5f5f5"/>
                <rect x="45" y="0" width="10" height="220" fill="#f5f5f5"/><rect x="105" y="0" width="10" height="220" fill="#f5f5f5"/><rect x="160" y="0" width="10" height="220" fill="#f5f5f5"/>
                <circle cx="100" cy="107" r="8" fill="#f97316" stroke="white" strokeWidth="2"/><circle cx="100" cy="107" r="3" fill="white"/>
              </svg>
              <div className="absolute inset-0 border-2 border-blue-300 rounded-2xl pointer-events-none"></div>
              <div className="absolute bottom-3 left-3 bg-white rounded-lg px-2.5 py-1.5 text-xs font-semibold shadow-md">📍 Bangalore</div>
              <div className="absolute top-3 right-3 bg-white rounded-xl px-2.5 py-1.5 card-shadow text-xs font-semibold text-gray-800 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                $840 received
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INVOICE FEATURES ── */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">What makes the world's<br/>most flexible invoice?</h2>
          <p className="text-gray-400 text-sm mb-12">Here's no platform exists.</p>
          <div className="grid grid-cols-3 gap-5">
            <div className="bg-gray-50 rounded-2xl p-5 text-left border border-gray-100">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center mb-3">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2l5 5h-5V4zM8 16h8v1H8zm0-3h8v1H8zm0-3h5v1H8z"/></svg>
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-1">Pay as you get paid</h3>
              <p className="text-xs text-gray-500 mb-3">Accept partial payments, subscriptions, and one-time charges in any currency.</p>
              <div className="bg-white rounded-xl p-3 border border-gray-100">
                <div className="text-xs text-gray-400 mb-1">Invoice #1042</div>
                <div className="text-sm font-bold">$2,400.00</div>
                <div className="mt-1.5 w-full h-1.5 bg-gray-100 rounded-full"><div className="h-1.5 bg-green-400 rounded-full" style={{width: '60%'}}></div></div>
                <div className="text-xs text-gray-400 mt-1">60% paid</div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-5 text-left border border-gray-100">
              <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center mb-3">
                <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z"/></svg>
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-1">Design your proposal</h3>
              <p className="text-xs text-gray-500 mb-3">Customize your invoice to match your brand. Add your logo, colors, and signature.</p>
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-400"></div>
                <div className="w-6 h-6 rounded-full bg-green-400"></div>
                <div className="w-6 h-6 rounded-full bg-red-400"></div>
                <div className="w-6 h-6 rounded-full bg-yellow-400"></div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-5 text-left border border-gray-100">
              <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center mb-3">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-1">Sender reminders</h3>
              <p className="text-xs text-gray-500 mb-3">Automated follow-ups so you never have to chase a payment again.</p>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 bg-white rounded-lg px-2 py-1.5 text-xs border border-gray-100">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span>Reminder sent · 2d ago</span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-lg px-2 py-1.5 text-xs border border-gray-100">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <span>Payment opened · 1h ago</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <a href="#" className="inline-flex items-center gap-2 bg-gray-900 text-white font-semibold px-6 py-3 rounded-xl hover:bg-black transition-colors">
              Get started
            </a>
          </div>
        </div>
      </section>

      {/* ── LETTER SECTION ── */}
      <section className="py-24 px-4 relative overflow-hidden bg-dark-gradient">
        <div className="max-w-2xl mx-auto relative">
          <div className="bg-white rounded-2xl p-10 relative invoice-card">
            <div className="text-sm text-gray-800 leading-relaxed space-y-4">
              <p className="font-semibold text-base">Dear business owner 👋</p>
              <p>Running a small business isn't for the faint of heart. Especially when you're working with people all over the world. It can be hard to get paid. You need country-specific bank accounts. Send invoices that customers sometimes they don't. They take a long time. Expensive.</p>
              <p>We wonder staying in the game is so hard. That's why Accuat is our love language.</p>
              <p className="text-gray-500 italic mt-6">Love you, pay me.</p>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-100">
              <p className="font-semibold text-sm text-gray-900 signature-font">Bella Garcia</p>
              <p className="text-xs text-gray-400 mt-0.5">Founder, Accuat</p>
            </div>
            <div className="sticky-note sticky-note--cta absolute -top-6 -right-6 w-28 p-3 rounded-sm">
              <p className="text-xs font-medium text-yellow-900 leading-snug">build for freelancers 🌟</p>
            </div>
          </div>
          <div className="text-center mt-14">
            <p className="text-white/80 text-xl font-medium leading-relaxed max-w-xl mx-auto">
              When you let people pay and get paid the way they want, the more progress gets made, faster.
            </p>
            <a href="#" className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors mt-8">
              Get started free
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

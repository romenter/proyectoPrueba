const ChevronRight = () => (
  <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
  </svg>
)

export function Guides() {
  return (
    <>
      <section className="pt-36 pb-12 px-4 bg-hero-gradient">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-3">Guides</h1>
          <p className="text-gray-500 text-lg max-w-xl">Step-by-step walkthroughs to help you get the most out of Accuat.</p>
        </div>
      </section>

      <section className="py-8 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="relative max-w-md">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <input type="text" placeholder="Search guides..." className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm bg-gray-50" />
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-gray-900 mb-6">Getting started</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { bg: 'bg-blue-100', iconColor: 'text-blue-600', readColor: 'text-blue-500', title: 'Send your first invoice', desc: 'From account setup to sending your first invoice in under 5 minutes.', time: '5 min read →',
                icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/> },
              { bg: 'bg-green-100', iconColor: 'text-green-600', readColor: 'text-green-500', title: 'Connect your bank account', desc: 'How to link your bank or crypto wallet to receive payments directly.', time: '8 min read →',
                icon: <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z"/> },
              { bg: 'bg-purple-100', iconColor: 'text-purple-600', readColor: 'text-purple-500', title: 'Add your team members', desc: 'Invite teammates, set roles, and manage permissions across your workspace.', time: '4 min read →',
                icon: <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/> },
            ].map(({ bg, iconColor, readColor, title, desc, time, icon }) => (
              <a key={title} href="#" className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-gray-300 transition-colors group">
                <div className={`w-9 h-9 rounded-xl ${bg} flex items-center justify-center mb-3`}>
                  <svg className={`w-4 h-4 ${iconColor}`} fill="currentColor" viewBox="0 0 24 24">{icon}</svg>
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1 group-hover:underline">{title}</h3>
                <p className="text-xs text-gray-400">{desc}</p>
                <div className={`mt-3 text-xs ${readColor} font-semibold`}>{time}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-gray-900 mb-6">Invoicing</h2>
          <div className="flex flex-col gap-3">
            {[
              { bg: 'bg-blue-50', icon: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>, iconColor: 'text-blue-500', title: 'How to customise your invoice template', sub: 'Logos, colors, fonts, and custom fields' },
              { bg: 'bg-green-50', icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>, iconColor: 'text-green-500', title: 'Setting up automatic payment reminders', sub: 'Schedule reminders so you never have to chase a client' },
              { bg: 'bg-yellow-50', icon: <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>, iconColor: 'text-yellow-500', title: 'Accepting partial payments and instalments', sub: 'Let clients pay in stages while you track progress' },
            ].map(({ bg, icon, iconColor, title, sub }) => (
              <a key={title} href="#" className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-gray-300 transition-colors flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-lg ${bg} flex items-center justify-center flex-shrink-0`}>
                    <svg className={`w-4 h-4 ${iconColor}`} fill="currentColor" viewBox="0 0 24 24">{icon}</svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm group-hover:underline">{title}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{sub}</div>
                  </div>
                </div>
                <ChevronRight />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-gray-900 mb-6">Payments &amp; currencies</h2>
          <div className="flex flex-col gap-3">
            {[
              { icon: '🌍', bg: 'bg-blue-50', title: 'Sending invoices in multiple currencies', sub: 'USD, EUR, GBP, INR, and 50+ more supported' },
              { icon: '₿',  bg: 'bg-orange-50', title: 'How to accept USDC and USDT payments', sub: 'Enable crypto payments for your clients in one click' },
              { icon: '⚡', bg: 'bg-green-50', title: 'Getting paid same-day: how it works', sub: 'The mechanics behind instant payouts and settlement' },
            ].map(({ icon, bg, title, sub }) => (
              <a key={title} href="#" className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-gray-300 transition-colors flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-lg ${bg} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-base">{icon}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm group-hover:underline">{title}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{sub}</div>
                  </div>
                </div>
                <ChevronRight />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 text-center bg-dark-panel">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-extrabold text-white mb-3">Can't find what you need?</h2>
          <p className="text-white/60 text-sm mb-6">Our support team is available 7 days a week to help you out.</p>
          <a href="#" className="inline-block bg-white text-gray-900 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors">
            Contact support
          </a>
        </div>
      </section>
    </>
  )
}

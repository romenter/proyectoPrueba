export function Teams() {
  return (
    <>
      <section className="pt-36 pb-20 px-4 text-center bg-hero-gradient">
        <div className="max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1.5 text-xs text-gray-500 card-shadow mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            Built for growing teams
          </span>
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-5">
            One platform,<br/>your whole team
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto mb-8">
            Accuat gives every member of your team the tools to send invoices, track payments, and collaborate — without stepping on each other's toes.
          </p>
          <div className="flex items-center justify-center gap-3">
            <a href="#" className="bg-gray-900 text-white font-semibold px-6 py-3 rounded-xl hover:bg-black transition-colors">Start for free</a>
            <a href="#" className="text-sm text-gray-600 font-medium px-6 py-3 rounded-xl border border-gray-200 hover:border-gray-400 transition-colors bg-white">Book a demo</a>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-3">Designed for every role</h2>
          <p className="text-gray-400 text-center text-sm mb-12">Everyone on your team gets exactly what they need.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { bg: 'bg-blue-100', iconColor: 'text-blue-600', title: 'Account managers', body: 'Manage client relationships, track invoice status, and ensure payments arrive on time.',
                icon: <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/> },
              { bg: 'bg-green-100', iconColor: 'text-green-600', title: 'Finance teams', body: 'Get real-time visibility into all incoming payments, export reports, and reconcile in one click.',
                icon: <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/> },
              { bg: 'bg-purple-100', iconColor: 'text-purple-600', title: 'Ops & admins', body: 'Set permissions, manage team members, and keep everything organised across your workspace.',
                icon: <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/> },
            ].map(({ bg, iconColor, title, body, icon }) => (
              <div key={title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center mb-4`}>
                  <svg className={`w-5 h-5 ${iconColor}`} fill="currentColor" viewBox="0 0 24 24">{icon}</svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                <p className="text-sm text-gray-500">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Everything your team needs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { bg: 'bg-blue-50', iconColor: 'text-blue-500', title: 'Role-based permissions', body: 'Control who can send, view, or approve invoices.', icon: <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/> },
              { bg: 'bg-green-50', iconColor: 'text-green-500', title: 'Shared client workspace', body: 'All clients, invoices, and history in one place for your whole team.', icon: <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/> },
              { bg: 'bg-yellow-50', iconColor: 'text-yellow-500', title: 'Team activity feed', body: 'See who sent what and when. Stay in sync without Slack threads.', icon: <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/> },
              { bg: 'bg-red-50', iconColor: 'text-red-500', title: 'Consolidated reporting', body: 'One dashboard to see all team revenue, pending, and overdue invoices.', icon: <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/> },
            ].map(({ bg, iconColor, title, body, icon }) => (
              <div key={title} className="bg-white rounded-2xl p-6 card-shadow flex gap-4">
                <div className={`w-8 h-8 rounded-lg ${bg} flex items-center justify-center flex-shrink-0`}>
                  <svg className={`w-4 h-4 ${iconColor}`} fill="currentColor" viewBox="0 0 24 24">{icon}</svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{title}</h4>
                  <p className="text-xs text-gray-500">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 text-center bg-dark-panel">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to bring your team?</h2>
          <p className="text-white/60 mb-8">Set up your team workspace in minutes. No credit card required.</p>
          <a href="#" className="inline-block bg-white text-gray-900 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors">
            Get started free
          </a>
        </div>
      </section>
    </>
  )
}

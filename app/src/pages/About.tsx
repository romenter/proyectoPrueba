export function About() {
  return (
    <>
      <section className="pt-36 pb-20 px-4 text-center bg-hero-gradient">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-5">
            We're on a mission to make getting paid simple
          </h1>
          <p className="text-lg text-gray-500 mb-6">
            Accuat started because we were tired of chasing payments. So we built the invoice we always wanted — and opened it to everyone.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col gap-10">
            {[
              { n: '1', bg: 'bg-blue-100', color: 'text-blue-600', title: 'The problem we lived', body: 'Freelancers and small teams were spending hours chasing clients for payments. Existing tools were either too complex or too expensive — or both. We knew there was a better way.' },
              { n: '2', bg: 'bg-green-100', color: 'text-green-600', title: 'What we built', body: 'A beautiful, flexible invoice that your clients actually want to open and pay. Multi-currency, crypto-ready, and designed with the payer\'s experience in mind — not just the sender\'s.' },
              { n: '3', bg: 'bg-purple-100', color: 'text-purple-600', title: 'Where we\'re going', body: 'We\'re building the global payment layer for independent workers. From Buenos Aires to Bangalore, Accuat makes cross-border payments feel local.' },
            ].map(({ n, bg, color, title, body }) => (
              <div key={n} className="flex gap-8 items-start">
                <div className={`flex-shrink-0 w-12 h-12 rounded-full ${bg} flex items-center justify-center ${color} font-bold text-lg`}>{n}</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
                  <p className="text-gray-500 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { val: '5K+', label: 'Businesses' },
            { val: '100+', label: 'Countries' },
            { val: '$42M', label: 'Processed' },
            { val: '1%', label: 'Only fee' },
          ].map(({ val, label }) => (
            <div key={label} className="bg-white rounded-2xl p-6 card-shadow">
              <div className="text-3xl font-extrabold text-gray-900 mb-1">{val}</div>
              <div className="text-sm text-gray-400">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">The people behind Accuat</h2>
          <p className="text-gray-400 text-sm mb-12">A small team with a big obsession: making payments painless.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { init: 'B', bg: 'bg-blue-200', color: 'text-blue-700', name: 'Bella Garcia', role: 'Founder & CEO' },
              { init: 'M', bg: 'bg-green-200', color: 'text-green-700', name: 'Marco Silva', role: 'CTO' },
              { init: 'A', bg: 'bg-purple-200', color: 'text-purple-700', name: 'Aisha Nkrumah', role: 'Head of Design' },
              { init: 'R', bg: 'bg-yellow-200', color: 'text-yellow-700', name: 'Ravi Patel', role: 'Head of Growth' },
            ].map(({ init, bg, color, name, role }) => (
              <div key={name} className="text-center">
                <div className={`w-16 h-16 rounded-full ${bg} mx-auto mb-3 flex items-center justify-center ${color} font-bold text-xl`}>{init}</div>
                <div className="font-semibold text-gray-900 text-sm">{name}</div>
                <div className="text-xs text-gray-400">{role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative overflow-hidden bg-dark-panel">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-white/80 text-xl font-medium leading-relaxed mb-8">
            "We believe that getting paid should be the easiest part of running a business."
          </p>
          <p className="text-white/40 text-sm italic">— Bella Garcia, Founder</p>
          <a href="#" className="inline-block mt-10 bg-white text-gray-900 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors">
            Join us
          </a>
        </div>
      </section>
    </>
  )
}

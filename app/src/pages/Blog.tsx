const posts = [
  { emoji: '💸', color: 'from-green-100 to-emerald-200', tag: 'Payments', tagColor: 'text-green-600', title: 'The hidden costs of international wire transfers', desc: 'SWIFT fees, FX markups, and delays that eat into your revenue. Here\'s what you can do.', date: 'Mar 10, 2025' },
  { emoji: '🧾', color: 'from-purple-100 to-violet-200', tag: 'Invoicing', tagColor: 'text-purple-600', title: 'How to write an invoice that gets paid faster', desc: 'Small wording and design changes that cut average payment time by 40%.', date: 'Feb 28, 2025' },
  { emoji: '🌍', color: 'from-yellow-100 to-amber-200', tag: 'Global', tagColor: 'text-yellow-600', title: 'Accepting crypto payments: a practical guide for freelancers', desc: 'USDC, USDT, and when it actually makes sense to accept crypto from clients.', date: 'Feb 14, 2025' },
  { emoji: '📊', color: 'from-red-100 to-rose-200', tag: 'Business', tagColor: 'text-red-500', title: 'State of freelance payments 2025: what the data says', desc: 'We surveyed 2,000 freelancers. Here\'s how, when, and where they get paid.', date: 'Jan 30, 2025' },
  { emoji: '⚡', color: 'from-cyan-100 to-sky-200', tag: 'Tips', tagColor: 'text-cyan-600', title: '5 invoice mistakes that delay your payments', desc: 'Avoid these common errors and get paid up to 3× faster on every invoice.', date: 'Jan 15, 2025' },
  { emoji: '🤝', color: 'from-orange-100 to-amber-200', tag: 'Clients', tagColor: 'text-orange-500', title: 'How to set payment terms clients actually respect', desc: 'Net-30 isn\'t your only option. Here\'s how to negotiate terms that work for you.', date: 'Jan 5, 2025' },
]

export function Blog() {
  return (
    <>
      <section className="pt-36 pb-12 px-4 bg-hero-gradient">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-3">Blog</h1>
          <p className="text-gray-500 text-lg">Insights on invoicing, payments, and running a business.</p>
        </div>
      </section>

      <section className="py-10 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl overflow-hidden card-shadow flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center min-h-48">
              <svg className="w-16 h-16 text-blue-300" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2l5 5h-5V4z"/></svg>
            </div>
            <div className="p-8 md:w-3/5">
              <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">Featured</span>
              <h2 className="text-2xl font-extrabold text-gray-900 mt-3 mb-2 leading-snug">
                Why your clients aren't paying you on time (and how to fix it)
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Late payments are the #1 killer of freelance cash flow. We analysed 10,000 invoices and found the patterns that predict whether a client pays fast — or not at all.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center text-xs font-bold text-blue-700">B</div>
                  <span className="text-xs text-gray-400">Bella Garcia · Mar 18, 2025</span>
                </div>
                <a href="#" className="text-sm font-semibold text-gray-900 hover:underline">Read →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map(({ emoji, color, tag, tagColor, title, desc, date }) => (
              <article key={title} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-300 transition-colors">
                <div className={`bg-gradient-to-br ${color} h-36 flex items-center justify-center`}>
                  <span className="text-4xl">{emoji}</span>
                </div>
                <div className="p-5">
                  <span className={`text-xs font-semibold ${tagColor}`}>{tag}</span>
                  <h3 className="font-bold text-gray-900 mt-1 mb-2 text-sm leading-snug">{title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">{desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{date}</span>
                    <a href="#" className="text-xs font-semibold text-gray-700 hover:underline">Read →</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 text-center bg-gray-50">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Get articles in your inbox</h2>
          <p className="text-gray-400 text-sm mb-6">No spam. Unsubscribe anytime.</p>
          <form className="flex gap-2" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="your@email.com" className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-sm bg-white" />
            <button type="submit" className="bg-gray-900 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-black transition-colors text-sm">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  )
}

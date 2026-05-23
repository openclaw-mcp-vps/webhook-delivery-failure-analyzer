export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          API Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Debug Why Your Webhooks Fail to Deliver
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          WebhookSpy monitors every delivery attempt, categorizes failures by type — timeout, auth, network, 5xx — and gives you actionable retry strategies so nothing gets lost.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $16/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {['Failure categorization','Retry strategies','Success rate tracking','Multi-endpoint support','Real-time alerts','Delivery logs'].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-sm px-4 py-1.5 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$16</p>
          <p className="text-[#6e7681] text-sm mb-6">/month · billed monthly</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              'Unlimited webhook endpoints',
              'Failure categorization engine',
              'Smart retry strategy suggestions',
              'Delivery success rate dashboard',
              'Email & Slack alerts',
              '90-day delivery log history',
              'API access',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#3fb950] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does WebhookSpy receive delivery reports?</h3>
            <p className="text-[#8b949e] text-sm">You send webhook delivery attempt data to our API endpoint. WebhookSpy ingests the payload, logs the attempt, and immediately runs failure categorization — no SDK required, just a simple HTTP POST.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What failure types does it detect?</h3>
            <p className="text-[#8b949e] text-sm">WebhookSpy categorizes failures into timeouts, authentication errors (401/403), network errors, server errors (5xx), malformed payloads, and rate limits — each with a tailored retry strategy recommendation.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I monitor multiple webhook endpoints?</h3>
            <p className="text-[#8b949e] text-sm">Yes. The Pro plan supports unlimited endpoints. Each endpoint gets its own success rate graph, failure breakdown, and retry queue so you can pinpoint exactly which integration is struggling.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} WebhookSpy. Built for SaaS teams and API developers.
      </footer>
    </main>
  )
}

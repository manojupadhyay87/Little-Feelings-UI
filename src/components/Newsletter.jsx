export default function Newsletter() {
  return (
    <section id="for-parents" className="px-6 md:px-12 py-20 scroll-mt-24">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-ink/40 mb-4">For Parents</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">Join our parent community.</h2>
          <p className="text-ink/60 max-w-sm leading-relaxed">
            Gentle weekly notes: parent tips, psychologist insights, story activities and invitations to our
            workshops.
          </p>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-cream-dark rounded-[1.5rem] p-8 grid grid-cols-2 gap-x-6 gap-y-5"
        >
          <label className="col-span-1 text-left">
            <span className="text-xs tracking-[0.15em] uppercase text-ink/40">Your Name</span>
            <input
              className="mt-2 w-full border-b border-ink/15 bg-transparent pb-2 text-sm focus:outline-none focus:border-[rgb(217,113,60)] transition-colors"
              placeholder="Aarti Sharma"
            />
          </label>
          <label className="col-span-1 text-left">
            <span className="text-xs tracking-[0.15em] uppercase text-ink/40">Email</span>
            <input
              type="email"
              className="mt-2 w-full border-b border-ink/15 bg-transparent pb-2 text-sm focus:outline-none focus:border-[rgb(217,113,60)] transition-colors"
              placeholder="aarti@example.com"
            />
          </label>
          <label className="col-span-2 text-left">
            <span className="text-xs tracking-[0.15em] uppercase text-ink/40">Child&apos;s Age</span>
            <input
              type="number"
              min="0"
              className="mt-2 w-full border-b border-ink/15 bg-transparent pb-2 text-sm focus:outline-none focus:border-[rgb(217,113,60)] transition-colors"
              placeholder="6"
            />
          </label>
          <div className="col-span-2 mt-2">
            <button
              type="submit"
              className="flex items-center gap-2 rounded-full bg-terracotta hover:bg-terracotta-dark text-white font-medium px-6 py-3.5 text-sm transition-colors cursor-pointer"
            >
              Join the community
              <ArrowIcon />
            </button>
            <p className="text-xs text-ink/40 mt-3">We send one quiet email a week. Unsubscribe anytime.</p>
          </div>
        </form>
      </div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

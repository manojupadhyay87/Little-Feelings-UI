import { useState } from 'react'

const topics = [
  { title: 'Emotional Intelligence', desc: 'Naming feelings, understanding them and finding calm ways to respond.' },
  { title: 'Resilience & Confidence', desc: 'Bouncing back from setbacks and believing in themselves.' },
  { title: 'Social Skills', desc: 'Sharing, listening, and building real friendships.' },
  { title: 'Life Skills', desc: 'Patience, focus, responsibility and gentle independence at home.' },
]

export default function Learning() {
  const [open, setOpen] = useState(3)
  return (
    <section id="learning-topics" className="px-6 md:px-12 py-20 scroll-mt-24">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-ink/40 mb-4">Learning Topics</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-4">What children are learning.</h2>
          <p className="text-ink/60 max-w-sm">
            Four quiet pillars guide every Little Feelings story &mdash; woven gently into characters, moments and
            conversations.
          </p>
        </div>
        <div className="divide-y divide-ink/10">
          {topics.map((t, i) => {
            const isOpen = open === i
            return (
              <button
                key={t.title}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="group w-full text-left py-5 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs text-terracotta shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="flex-1 text-lg font-serif transition-colors group-hover:text-[rgb(217,113,60)]">
                    {t.title}
                  </h3>
                  <span className="text-xl text-terracotta shrink-0 transition-transform duration-300">
                    {isOpen ? '−' : '+'}
                  </span>
                </div>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <p className="text-sm text-ink/60 overflow-hidden pl-9">{t.desc}</p>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

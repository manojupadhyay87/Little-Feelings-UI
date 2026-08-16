import { Sprout } from 'lucide-react'

const columns = [
  { title: 'Shop', links: ['Books', 'Collections', 'Activity Kits'] },
  { title: 'Learn', links: ['Topics', 'Parent Tips', 'Workshops'] },
  { title: 'About', links: ['Our Story', 'Psychology Team', 'Press'] },
  { title: 'Contact', links: ['Support', 'Schools', 'Wholesale'] },
]

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 pt-12 pb-8 border-t border-ink/10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1.5fr_repeat(4,1fr)] gap-8 pb-10">
        <div>
          <p className="font-serif text-lg mb-2 flex items-center gap-2">
            <Sprout className="w-5 h-5 text-terracotta" strokeWidth={1.75} /> Little Feelings
          </p>
          <p className="text-xs text-ink/50 max-w-xs leading-relaxed">
            Strong Hearts &amp; Calm Minds. Made with care in India.
          </p>
        </div>
        {columns.map((c) => (
          <div key={c.title} className="text-left">
            <p className="text-xs tracking-[0.15em] uppercase text-ink/40 mb-3">{c.title}</p>
            <ul className="space-y-2">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-ink/70 hover:text-terracotta transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-5xl mx-auto border-t border-ink/10 pt-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs text-ink/40">&copy; {new Date().getFullYear()} Little Feelings. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-xs text-ink/40 hover:text-terracotta transition-colors">Privacy</a>
          <a href="#" className="text-xs text-ink/40 hover:text-terracotta transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  )
}

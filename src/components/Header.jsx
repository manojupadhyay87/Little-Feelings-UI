import { Link } from 'react-router-dom'
import { Sprout, ArrowRight } from 'lucide-react'

const links = [
  { label: 'Books', href: '/#books' },
  { label: 'Learning Topics', href: '/#learning-topics' },
  { label: 'Why Little Feelings', href: '/#why-little-feelings' },
  { label: 'For Parents', href: '/#for-parents' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-cream/90 backdrop-blur border-b border-ink/10">
      <Link to="/" className="flex items-center gap-2 font-serif text-xl">
        <Sprout className="w-5 h-5 text-terracotta" strokeWidth={1.75} />
        Little Feelings
      </Link>
      <nav className="hidden md:flex items-center gap-10 text-[15px] text-ink/70">
        {links.map((l) => (
          <Link key={l.label} to={l.href} className="hover:text-ink transition-colors">{l.label}</Link>
        ))}
      </nav>
      <button className="flex items-center gap-2 rounded-full bg-terracotta hover:bg-terracotta-dark text-white text-sm font-medium px-5 py-3 transition-colors">
        Buy Books
        <ArrowRight className="w-4 h-4" strokeWidth={2} />
      </button>
    </header>
  )
}

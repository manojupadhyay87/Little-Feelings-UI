import { useEffect, useRef, useState } from 'react'
import { Users, Search, Brain, BookOpen, Compass, HeartHandshake, Palette } from 'lucide-react'

const points = [
  {
    icon: Users,
    title: 'Inclusive Characters',
    desc: 'Different personalities, emotions and experiences.',
  },
  {
    icon: Search,
    title: 'Research Informed',
    desc: 'Built using evidence-informed child development principles.',
  },
  {
    icon: Brain,
    title: 'Child Psychology Guided',
    desc: 'Every story is shaped through a child-development lens.',
  },
  {
    icon: BookOpen,
    title: 'Story-Based Learning',
    desc: 'Children learn deeply when they see themselves in the page.',
  },
  {
    icon: Compass,
    title: 'Real Childhood Situations',
    desc: 'Familiar moments — playgrounds, classrooms, friendships.',
  },
  {
    icon: HeartHandshake,
    title: 'Understanding Before Correction',
    desc: 'We help children understand emotions, not fix them.',
  },
  {
    icon: Palette,
    title: 'World-Class Illustrations',
    desc: 'Beautiful artwork children return to again and again.',
  },
]

export default function Trust() {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)

  const scrollToIndex = (index) => {
    const el = trackRef.current
    if (!el) return
    const clamped = Math.max(0, Math.min(index, points.length - 1))
    const card = el.children[clamped]
    setActive(clamped)
    if (card) {
      el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: 'smooth' })
    }
  }

  const activeRef = useRef(active)
  useEffect(() => {
    activeRef.current = active
  }, [active])

  const handlePrev = () => scrollToIndex((active - 1 + points.length) % points.length)
  const handleNext = () => scrollToIndex((active + 1) % points.length)

  useEffect(() => {
    const id = setInterval(() => {
      scrollToIndex((activeRef.current + 1) % points.length)
    }, 3500)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const onScroll = () => {
      let closest = 0
      let minDist = Infinity
      Array.from(el.children).forEach((card, i) => {
        const dist = Math.abs(card.offsetLeft - el.offsetLeft - el.scrollLeft)
        if (dist < minDist) {
          minDist = dist
          closest = i
        }
      })
      setActive(closest)
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="why-little-feelings" className="px-6 md:px-12 py-20 scroll-mt-24">
      <div className="max-w-5xl mx-auto flex items-end justify-between mb-10">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-ink/40 mb-4">Why Parents Trust Us</p>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight">
            Why parents trust <span className="italic text-terracotta">Little</span>
            <br className="hidden md:block" />
            <span className="italic text-terracotta">Feelings</span>.
          </h2>
        </div>
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous"
            className="w-10 h-10 rounded-full border border-ink/15 flex items-center justify-center text-ink/60 hover:bg-[rgb(217,113,60)] hover:text-white hover:border-[rgb(217,113,60)] transition-colors"
          >
            <ChevronIcon direction="left" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next"
            className="w-10 h-10 rounded-full border border-ink/15 flex items-center justify-center text-ink/60 hover:bg-[rgb(217,113,60)] hover:text-white hover:border-[rgb(217,113,60)] transition-colors"
          >
            <ChevronIcon direction="right" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="max-w-5xl mx-auto flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {points.map(({ icon: Icon, title, desc }, i) => {
          const isActive = i === active
          return (
            <button
              key={title}
              type="button"
              onClick={() => setActive(i)}
              className={`snap-start shrink-0 basis-[85%] sm:basis-[46%] lg:basis-[23%] rounded-2xl p-6 text-left border bg-white cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                isActive
                  ? '-translate-y-2 scale-[1.03] border-[rgb(217,113,60)]/40 shadow-[0_12px_28px_-10px_rgba(217,113,60,0.35)]'
                  : 'translate-y-0 scale-100 border-ink/10'
              }`}
            >
              <span
                className={`w-11 h-11 rounded-full flex items-center justify-center mb-5 transition-colors ${
                  isActive ? 'bg-[rgb(217,113,60)]/15 text-[rgb(217,113,60)]' : 'bg-[#e2e7d9] text-[#6b7d5a]'
                }`}
              >
                <Icon className="w-5 h-5" strokeWidth={1.5} />
              </span>
              <h3 className="font-serif text-lg mb-2">{title}</h3>
              <p className="text-sm text-ink/60 leading-relaxed">{desc}</p>
            </button>
          )
        })}
      </div>

      <div className="flex items-center justify-center gap-2 mt-10">
        {points.map((p, i) => (
          <button
            key={p.title}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => scrollToIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === active ? 'w-6 bg-terracotta' : 'w-2 bg-ink/15 hover:bg-ink/30'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

function ChevronIcon({ direction }) {
  const path = direction === 'left' ? 'M10 12L6 8L10 4' : 'M6 4L10 8L6 12'
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d={path} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

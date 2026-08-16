import { Heart, Globe2, Sprout, Sparkles } from 'lucide-react'
import heroImg from '../assets/hero.jpg'

const features = [
  { icon: Heart, label: 'Trusted by Families' },
  { icon: Globe2, label: 'Developed with Child Psychologists' },
  { icon: Sprout, label: 'SEL Aligned' },
  { icon: Sparkles, label: 'Understanding Little Feelings' },
]

export default function Hero() {
  return (
    <section className="px-6 md:px-12 py-16 md:py-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      <div className="flex flex-col justify-center">
        <p className="text-xs tracking-[0.2em] uppercase text-ink/40 mb-6">
          Strong Hearts &middot; Calm Minds
        </p>
        <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] mb-6 text-ink">
          Stories that build
          <br />
          <span className="inline-flex items-center gap-3">
            <span className="italic text-terracotta">strong hearts</span>
            <span>&</span>
          </span>
          <br />
          <span className="italic text-[#8fa377]">calm minds</span>.
        </h1>
        <p className="text-ink/60 max-w-md mb-9 leading-relaxed">
          Rooted in child psychology, our storybooks help children aged 5&ndash;8 build emotional
          intelligence, life skills and resilience &mdash; through relatable, real-life moments.
        </p>
        <div className="flex flex-wrap items-center gap-8 mb-14">
          <button className="flex items-center gap-2 rounded-full bg-terracotta hover:bg-terracotta-dark text-white font-medium px-6 py-3.5 text-sm transition-colors">
            Explore Storybooks
            <ArrowIcon />
          </button>
          <button className="flex items-center gap-2 text-sm font-medium text-ink border-b border-ink/30 pb-1 hover:border-ink transition-colors">
            Explore Learning Topics
            <ArrowIcon />
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, label }) => (
            <div key={label} className="group flex items-start gap-2.5">
              <span className="shrink-0 w-9 h-9 rounded-full bg-ink/5 flex items-center justify-center transition-colors group-hover:bg-[rgb(217,113,60)] cursor-pointer">
                <Icon className="w-4 h-4 text-ink/60 transition-colors group-hover:text-white" strokeWidth={1.5} />
              </span>
              <span className="text-xs text-ink/60 leading-snug pt-1.5 transition-colors group-hover:text-[rgb(217,113,60)]">{label}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <img
          src={heroImg}
          alt="Mother and son reading a storybook together"
          className="w-full max-w-[440px] mx-auto aspect-[4/5] object-cover rounded-[2.5rem]"
        />
      </div>
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

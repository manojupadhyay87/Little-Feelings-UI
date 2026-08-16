import finalCta from '../assets/final-cta.jpg'

export default function CTA() {
  return (
    <section className="px-6 md:px-12 pb-20">
      <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden">
        <img
          src={finalCta}
          alt="Mother and child sharing a bedtime story by lamp light"
          className="w-full h-[460px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent flex flex-col justify-center px-8 md:px-14">
          <h2 className="font-serif text-3xl md:text-5xl text-white max-w-lg leading-tight mb-8">
            Every big feeling begins with a story.
          </h2>
          <div className="flex flex-wrap items-center gap-6">
            <button className="flex items-center gap-2 rounded-full bg-terracotta hover:bg-terracotta-dark text-white font-medium px-6 py-3.5 text-sm transition-colors cursor-pointer">
              Explore Storybooks
              <ArrowIcon />
            </button>
            <button className="flex items-center gap-2 text-sm font-medium text-white border-b border-white/40 pb-1 hover:border-white transition-colors cursor-pointer">
              Get Parent Tips
              <ArrowIcon />
            </button>
          </div>
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

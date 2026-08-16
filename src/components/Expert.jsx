import psychologistImg from '../assets/psychologist.jpg'

const credentials = ['12+ years practice', 'SEL Curriculum Advisor', 'Family Therapist']

export default function Expert() {
  return (
    <section className="px-6 md:px-12 py-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[380px_1fr] gap-12 items-center">
        <img
          src={psychologistImg}
          alt="Dr. Ananya Iyer, child psychologist"
          className="rounded-[1.5rem] w-full h-[480px] object-cover"
        />
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-ink/40 mb-4">Guided By Child Psychology</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
            Reviewed through a child-development lens.
          </h2>
          <p className="text-ink/60 max-w-md mb-8 leading-relaxed">
            Stories are reviewed to ensure emotional accuracy, age appropriateness and practical
            relevance for modern Indian families.
          </p>
          <div className="border-t border-ink/10 pt-6 mb-5">
            <p className="font-serif text-xl mb-1">Dr. Ananya Iyer</p>
            <p className="text-sm text-ink/50">M.Phil Clinical Psychology &middot; Child & Adolescent Specialist</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {credentials.map((c) => (
              <span key={c} className="flex items-center gap-3 text-sm text-ink/70">
                <span className="w-px h-4 bg-terracotta/40" />
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

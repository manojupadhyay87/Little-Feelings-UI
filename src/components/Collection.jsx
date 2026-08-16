import kitFlatlay from '../assets/kit-flatlay.jpg'

const items = ['Storybooks', 'Activities', 'Parent Guides', 'Healthy Coping Tools', 'Pause & Notice Cards', 'Emotion Flash Cards']

export default function Collection() {
  return (
    <section id="books" className="px-6 md:px-12 py-20 scroll-mt-24">
      <div className="max-w-5xl mx-auto mb-10">
        <p className="text-xs tracking-[0.2em] uppercase text-ink/40 mb-4">The Collection</p>
        <h2 className="font-serif text-4xl md:text-5xl mb-4">More than a storybook.</h2>
        <p className="text-ink/60 max-w-xl">
          A complete experience for the parent and the child &mdash; designed to be opened, talked
          through and returned to, again and again.
        </p>
      </div>
      <div className="max-w-5xl mx-auto">
        <img
          src={kitFlatlay}
          alt="Storybooks, guides and activity cards flat lay"
          className="rounded-[2rem] w-full h-[560px] object-cover mb-6"
        />
        <p className="text-center italic text-ink/50 font-serif mb-10">
          A complete emotional learning experience for home.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {items.map((i) => (
            <button
              key={i}
              type="button"
              className="rounded-full border border-ink/15 px-5 py-2 text-sm text-ink/70 transition-colors hover:bg-[rgb(217,113,60)] hover:text-white hover:border-[rgb(217,113,60)] cursor-pointer"
            >
              {i}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

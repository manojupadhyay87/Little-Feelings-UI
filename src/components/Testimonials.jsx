import parent1 from '../assets/parent-1.jpg'
import parent2 from '../assets/parent-2.jpg'
import parent3 from '../assets/parent-3.jpg'

const reviews = [
  {
    name: 'Meera, mother of 6yr old',
    photo: parent1,
    text: "My daughter now names her feelings instead of melting down. The stories gave her language we didn't have.",
  },
  {
    name: 'Rohan, father of 7yr old',
    photo: parent2,
    text: "It's the first book my son asks for at bedtime. We talk more — about school, about friends, about feelings.",
  },
  {
    name: 'Sunita, grandmother of 5yr old',
    photo: parent3,
    text: "Beautifully made. It feels like a keepsake — something we'll keep on the shelf for years.",
  },
]

export default function Testimonials() {
  return (
    <section className="px-6 md:px-12 py-20">
      <div className="max-w-5xl mx-auto mb-12">
        <p className="text-xs tracking-[0.2em] uppercase text-ink/40 mb-4">From Our Families</p>
        <h2 className="font-serif text-4xl md:text-5xl">What parents are saying.</h2>
      </div>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <div key={r.name} className="bg-cream-dark rounded-2xl p-6 text-left">
            <span className="text-terracotta text-3xl font-serif leading-none">&ldquo;</span>
            <p className="text-[15px] text-ink leading-relaxed mb-6 mt-2">{r.text}</p>
            <div className="border-t border-ink/10 pt-4 flex items-center gap-3">
              <img src={r.photo} alt={r.name} className="w-9 h-9 rounded-full object-cover" />
              <p className="text-sm text-ink/70">{r.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

import { useEffect, useState } from 'react'
import childCenter from '../assets/child-center.jpg'
import momentAnger from '../assets/moment-anger.jpg'
import momentBodysafety from '../assets/moment-bodysafety.jpg'
import momentFear from '../assets/moment-fear.jpg'
import momentFriendship from '../assets/moment-friendship.jpg'
import momentLeftout from '../assets/moment-leftout.jpg'
import momentResilience from '../assets/moment-resilience.jpg'
import momentScreentime from '../assets/moment-screentime.jpg'
import momentWaiting from '../assets/moment-waiting.jpg'

const moments = [
  { img: momentAnger, tag: 'ANGER', tag2: 'SELF-CONTROL', title: 'When a call feels unfair.' },
  { img: momentScreentime, tag: 'SCREEN TIME', tag2: 'BALANCE', title: "Some adventures don't fit inside a screen." },
  { img: momentFriendship, tag: 'FRIENDSHIP', tag2: 'EMPATHY', title: 'Mending what was broken.' },
  { img: momentLeftout, tag: 'FEELING LEFT OUT', tag2: 'BELONGING', title: 'Finding your place in the circle.' },
  { img: momentFear, tag: 'FEAR', tag2: 'COURAGE', title: 'Brave doesn’t mean unafraid.' },
  { img: momentBodysafety, tag: 'BODY SAFETY', tag2: 'BOUNDARIES', title: 'Learning to say no.' },
  { img: momentResilience, tag: 'RESILIENCE', tag2: 'GROWTH', title: 'Getting back up again.' },
  { img: momentWaiting, tag: 'WAITING', tag2: 'PATIENCE', title: 'Good things take time.' },
]

const SLOTS = 4

export default function Moments() {
  const [start, setStart] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setStart((s) => (s + 1) % moments.length)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  const slotItems = Array.from({ length: SLOTS }, (_, i) => {
    const index = (start + i) % moments.length
    return { ...moments[index], index, key: `${start}-${i}` }
  })
  const left = slotItems.slice(0, 2)
  const right = slotItems.slice(2, 4)

  return (
    <section className="px-6 md:px-12 py-20">
      <div className="max-w-3xl mx-auto text-center mb-4">
        <p className="text-xs tracking-[0.2em] uppercase text-ink/40 mb-6">Everyday Childhood</p>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
          The moments that shape a child.
        </h2>
        <p className="text-ink/60">Tap any moment to see the child at the heart of the story.</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 items-center mt-16">
        <div className="grid grid-rows-2 gap-6">
          {left.map((m) => (
            <Card key={m.key} m={m} onClick={() => setStart(m.index)} />
          ))}
        </div>
        <div className="col-span-2 flex justify-center">
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl">
            <img
              src={childCenter}
              alt="Featured child portrait"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="grid grid-rows-2 gap-6">
          {right.map((m) => (
            <Card key={m.key} m={m} onClick={() => setStart(m.index)} />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center gap-1.5 mt-12">
        {moments.map((_, i) => (
          <button
            key={i}
            onClick={() => setStart(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === start ? 'w-6 bg-terracotta' : 'w-1.5 bg-ink/20'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

function Card({ m, onClick }) {
  return (
    <button onClick={onClick} className="text-left group [perspective:800px]">
      <img
        key={m.key}
        src={m.img}
        alt={m.title}
        className="animate-flip-in rounded-2xl w-full h-40 object-cover mb-3 transition-opacity group-hover:opacity-90"
      />
      <p className="text-[10px] tracking-wide uppercase text-terracotta mb-1">
        {m.tag} <span className="text-ink/30">&ndash;</span> {m.tag2}
      </p>
      <p className="text-sm font-serif text-ink">{m.title}</p>
    </button>
  )
}

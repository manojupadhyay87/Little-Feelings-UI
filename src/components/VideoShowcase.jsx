import { useRef, useState } from 'react'
import videoThumb from '../assets/video-thumb.jpg'
import sampleVideo from '../assets/sample-video.mp4'

export default function VideoShowcase() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
    requestAnimationFrame(() => {
      videoRef.current?.play()
    })
  }

  return (
    <section className="px-6 md:px-12 py-20">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <p className="text-xs tracking-[0.2em] uppercase text-ink/40 mb-4">In Action</p>
        <h2 className="font-serif text-3xl md:text-4xl">See Little Feelings in action.</h2>
      </div>
      <div className="max-w-5xl mx-auto relative">
        {isPlaying ? (
          <video
            ref={videoRef}
            src={sampleVideo}
            controls
            autoPlay
            className="rounded-2xl w-full h-96 object-cover bg-black"
          />
        ) : (
          <button
            type="button"
            onClick={handlePlay}
            aria-label="Play video"
            className="group relative block w-full rounded-2xl border border-transparent transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2 hover:scale-[1.015] hover:border-[rgb(217,113,60)]/40 hover:shadow-[0_16px_36px_-12px_rgba(217,113,60,0.35)] focus:outline-none focus-visible:-translate-y-2 focus-visible:scale-[1.015] focus-visible:border-[rgb(217,113,60)]/40 focus-visible:shadow-[0_16px_36px_-12px_rgba(217,113,60,0.35)] cursor-pointer"
          >
            <img
              src={videoThumb}
              alt="Father and daughter reading together"
              className="rounded-2xl w-full h-96 object-cover"
            />
            <span className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-all duration-200 group-hover:bg-[rgb(217,113,60)] group-hover:scale-110 group-focus-visible:bg-[rgb(217,113,60)] group-focus-visible:scale-110">
              <span className="w-0 h-0 border-y-8 border-y-transparent border-l-[14px] border-l-terracotta ml-1 transition-colors group-hover:border-l-white group-focus-visible:border-l-white" />
            </span>
          </button>
        )}
        <p className="text-center italic text-ink/60 mt-6">
          &ldquo;Stories become powerful when children see themselves inside them.&rdquo;
        </p>
      </div>
    </section>
  )
}

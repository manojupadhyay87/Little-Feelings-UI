import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Moments from '../components/Moments'
import Collection from '../components/Collection'
import Trust from '../components/Trust'
import VideoShowcase from '../components/VideoShowcase'
import Learning from '../components/Learning'
import Expert from '../components/Expert'
import Newsletter from '../components/Newsletter'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

export default function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [hash])

  return (
    <>
      <Hero />
      <Moments />
      <Collection />
      <Trust />
      <VideoShowcase />
      <Learning />
      <Expert />
      <Newsletter />
      <Testimonials />
      <CTA />
    </>
  )
}

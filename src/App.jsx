import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink max-w-[1800px] mx-auto px-3 md:px-6">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

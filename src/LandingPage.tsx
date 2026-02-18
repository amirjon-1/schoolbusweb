import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Features } from './components/Features'
import { Safety } from './components/Safety'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'

export function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Safety />
        <FAQ />
        <Footer />
      </main>
    </>
  )
}

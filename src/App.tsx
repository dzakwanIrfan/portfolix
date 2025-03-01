import { CTA } from './components/CTA'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Pricing } from './components/Pricing'
import { Templates } from './components/Templates'
import { Testimonials } from './components/Testimonials'
import { Why } from './components/Why'
import './index.css'

function App() {
  return (
    <div className="font-raleway">
      <Header />
      <Hero />
      <Why />
      <Templates />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

export default App

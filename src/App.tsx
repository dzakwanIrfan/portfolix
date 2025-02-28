import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Templates } from './components/Templates'
// import { Testimonials } from './components/Testimonials'
import { Why } from './components/Why'
import './index.css'

function App() {
  return (
    <div className="font-raleway">
      <Header />
      <Hero />
      <Why />
      <Templates />
      {/* <Testimonials /> */}
    </div>
  )
}

export default App

import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Approach from './components/Approach.jsx'
import Domains from './components/Domains.jsx'
import Finance from './components/Finance.jsx'
import Admin from './components/Admin.jsx'
import Legal from './components/Legal.jsx'
import Marketing from './components/Marketing.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Approach />
        <Domains />
        <Finance />
        <Admin />
        <Legal />
        <Marketing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

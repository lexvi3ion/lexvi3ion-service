import Cockpit from './Cockpit.jsx'
import Ticker from './Ticker.jsx'
import { useContactModal } from './ContactModalContext.jsx'

export default function Hero() {
  const { openModal } = useContactModal()
  return (
    <section className="hero" id="top">
      <div className="blob blob--navy"></div>
      <div className="blob blob--blush"></div>

      <div className="hero-inner">
        <div className="hero-badge">
          <span className="eyebrow">Copilote admin · finance · juridique</span>
        </div>

        <h1>
          <span className="lex">LEX</span> <span className="vision">VI<span className="three">3</span>ION</span>
        </h1>

        <p className="hero-sub">
          Un accompagnement sur-mesure dédié aux auto-entrepreneurs, TPE et PME.
          Je sécurise vos finances, j'allège votre charge administrative et je
          vous accompagne sur vos démarches juridiques simples — pour que vous
          gardiez toute votre énergie pour votre cœur de métier.
        </p>

        <div className="hero-actions">
          <button type="button" className="btn btn--primary" onClick={openModal}>Parlons de votre activité</button>
          <a className="btn btn--ghost" href="tel:0625244430">06 25 24 44 30</a>
        </div>
      </div>

      <Ticker />

      <div className="wrap">
        <div className="cockpit-wrap">
          <Cockpit />
        </div>
      </div>
    </section>
  )
}

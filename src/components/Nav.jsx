import ThemeToggle from './ThemeToggle.jsx'
import { useContactModal } from './ContactModalContext.jsx'

export default function Nav() {
  const { openModal } = useContactModal()
  return (
    <header className="nav">
      <div className="wrap">
        <a href="#top" className="nav-logo">
          <img src="/logo.png" alt="" className="nav-logo-img" />
          <span className="nav-logo-text">
            <span className="lex">LEX</span>
            <span className="vision">VI3ION</span>
          </span>
        </a>
        <nav className="nav-links">
          <a href="#approche">L'approche</a>
          <a href="#domaines">Expertises</a>
          <a href="#finance">Finance</a>
          <a href="#administratif">Administratif</a>
          <a href="#juridique">Juridique</a>
          <a href="#marketing">Marketing</a>
        </nav>
        <div className="nav-cta">
          <ThemeToggle />
          <button type="button" className="btn btn--primary" onClick={openModal}>Prendre contact</button>
        </div>
      </div>
    </header>
  )
}

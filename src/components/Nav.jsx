import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle.jsx'
import { useContactModal } from './ContactModalContext.jsx'

const LINKS = [
  { href: '/#approche', label: "L'approche" },
  { href: '/#domaines', label: 'Expertises' },
  { href: '/#process', label: 'Comment ça marche' },
  { href: '/#finance', label: 'Finance' },
  { href: '/#administratif', label: 'Administratif' },
  { href: '/#juridique', label: 'Juridique' },
  { href: '/#marketing', label: 'Marketing' },
  { href: '/#faq', label: 'FAQ' },
]

export default function Nav() {
  const { openModal } = useContactModal()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className="nav">
      <div className="wrap">
        <a href="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
          <img src="/logo.png" alt="" className="nav-logo-img" />
          <span className="nav-logo-text">
            <span className="lex">LEX</span>
            <span className="vision">VI3ION</span>
          </span>
        </a>

        <nav className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="nav-cta">
          <ThemeToggle />
          <button type="button" className="btn btn--primary" onClick={openModal}>Prendre contact</button>
          <button
            type="button"
            className={`nav-burger ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className={`nav-mobile ${menuOpen ? 'is-open' : ''}`}>
        <nav className="nav-mobile-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
        </nav>
        <button
          type="button"
          className="btn btn--primary nav-mobile-cta"
          onClick={() => { setMenuOpen(false); openModal() }}
        >
          Prendre contact
        </button>
      </div>
    </header>
  )
}

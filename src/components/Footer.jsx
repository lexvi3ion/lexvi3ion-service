import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <span className="footer-logo">
          LEX <span className="vision">VI3ION</span>
        </span>
        <nav className="footer-links">
          <Link to="/mentions-legales">Mentions légales</Link>
          <Link to="/confidentialite">Confidentialité</Link>
        </nav>
        <p>© {new Date().getFullYear()} LEX VI3ION — Copilote administratif, financier et juridique.</p>
      </div>
    </footer>
  )
}

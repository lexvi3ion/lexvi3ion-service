export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap">
        <a href="#top" className="nav-logo">
          <span className="lex">LEX</span>
          <span className="vision">VI3ION</span>
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
          <a className="btn btn--primary" href="#contact">Prendre contact</a>
        </div>
      </div>
    </header>
  )
}

import { Link } from 'react-router-dom'

export default function LegalPageLayout({ title, updated, children }) {
  return (
    <section className="section legal-page">
      <div className="wrap legal-page-wrap">
        <Link to="/" className="legal-back">← Retour au site</Link>
        <span className="eyebrow">LEX VI3ION</span>
        <h1 className="legal-title">{title}</h1>
        {updated && <p className="legal-updated">Dernière mise à jour : {updated}</p>}
        <div className="legal-body">{children}</div>
      </div>
    </section>
  )
}

import { CheckIcon } from './icons.jsx'
import Reveal from './Reveal.jsx'

const ITEMS = [
  { label: 'Rédaction de documents', text: 'Élaboration de courriers administratifs, attestations ou contrats standards pour sécuriser vos échanges.' },
  { label: 'Veille juridique', text: 'Suivi des évolutions réglementaires liées à votre secteur pour vous informer des changements importants.' },
  { label: 'Organisation et suivi', text: 'Classement rigoureux, numérisation et suivi des échéances de vos dossiers juridiques.' },
]

export default function Legal() {
  return (
    <section className="section pole" id="juridique">
      <div className="wrap">
        <div className="pole-grid">
          <Reveal className="pole-body">
            <span className="eyebrow">Pôle Juridique</span>
            <h2>Sécurisez vos <span className="accent">démarches</span></h2>
            <p className="pole-intro">Bénéficiez d'une assistance structurée pour vos formalités et documents courants.</p>
            <ul className="pole-list">
              {ITEMS.map((c) => (
                <li key={c.label}>
                  <span className="check"><CheckIcon /></span>
                  <p><strong>{c.label} — </strong><span>{c.text}</span></p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="pole-visual visual-legal">
            <div className="doc-card">
              <div className="doc-line"></div>
              <div className="doc-line short"></div>
              <div className="doc-line"></div>
              <div className="doc-line" style={{ width: '80%' }}></div>
              <div className="doc-stamp">Dossier à jour</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

import { CheckIcon } from './icons.jsx'

const ITEMS = [
  { label: 'Gestion commerciale complète', text: 'Devis, facturation et suivi rigoureux du recouvrement amiable.' },
  { label: 'Pré-comptabilité fluide', text: 'Transmission organisée et en lien direct avec votre expert-comptable.' },
  { label: 'Suivi du personnel', text: 'Accompagnement sur la gestion RH quotidienne.' },
  { label: 'Transition digitale', text: "Aide à l'intégration de nouveaux outils (réforme facturation électronique 2026)." },
]

export default function Admin() {
  return (
    <section className="section pole" id="administratif">
      <div className="wrap">
        <div className="pole-grid reverse">
          <div className="pole-visual visual-admin">
            <div className="folder-stack">
              <div className="folder folder--1"><div className="folder-tab"></div></div>
              <div className="folder folder--2"><div className="folder-tab"></div></div>
              <div className="folder folder--3">
                <div className="folder-tab"></div>
                <div className="folder-line" style={{ top: 34, background: 'rgba(255,255,255,0.16)' }}></div>
                <div className="folder-line" style={{ top: 52, width: '60%', background: 'rgba(255,255,255,0.16)' }}></div>
              </div>
            </div>
          </div>

          <div className="pole-body">
            <span className="eyebrow">Pôle Administratif</span>
            <h2>Un quotidien <span className="accent">allégé</span></h2>
            <p className="pole-intro">Déléguez les tâches chronophages pour gagner en efficacité, du premier devis jusqu'au dernier document classé.</p>
            <ul className="pole-list">
              {ITEMS.map((c) => (
                <li key={c.label}>
                  <span className="check"><CheckIcon /></span>
                  <p><strong>{c.label} — </strong><span>{c.text}</span></p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

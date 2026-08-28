import { CheckIcon, IconMagnifier, IconGauge, IconScale } from './icons.jsx'

const MINI = [
  {
    icon: <IconMagnifier />,
    title: 'Analyse & Diagnostics',
    desc: "Analyse approfondie des états financiers. Nous réalisons un audit interne pour identifier vos forces et faiblesses, et déterminons la rentabilité exacte de vos produits.",
  },
  {
    icon: <IconGauge />,
    title: 'Pilotage de Trésorerie',
    desc: 'Gestion proactive des liquidités pour assurer votre solvabilité. Nous planifions vos flux et gérons les relations bancaires (négociation de vos conditions).',
  },
  {
    icon: <IconScale />,
    title: 'Planification Budgétaire',
    desc: 'Élaboration de vos budgets annuels. Nous estimons vos revenus et dépenses futurs, et ajustons la stratégie en fonction des écarts constatés.',
  },
]

const CONTROL = [
  { label: 'Tableaux de bord sur-mesure', text: 'Création et suivi régulier de vos indicateurs clés de performance (KPI).' },
  { label: 'Analyse des écarts', text: 'Identification et explication des différences entre vos objectifs et la réalité.' },
  { label: 'Actions correctrices', text: 'Force de proposition pour réajuster la stratégie rapidement.' },
  { label: 'Reporting régulier', text: 'Production de rapports financiers clairs destinés à la direction.' },
]

export default function Finance() {
  return (
    <section className="section pole" id="finance">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Pôle Finance</span>
          <h2>Diagnostic <span className="accent">&amp; trésorerie</span></h2>
          <p>Garder le cap nécessite des outils de pilotage précis, de l'audit initial jusqu'au suivi mensuel de vos liquidités.</p>
        </div>

        <div className="mini-cards">
          {MINI.map((m) => (
            <div className="mini-card" key={m.title}>
              <div className="mini-icon">{m.icon}</div>
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="wrap" style={{ marginTop: 96 }}>
        <div className="pole-grid">
          <div className="pole-body">
            <span className="eyebrow">Contrôle de gestion</span>
            <h2>Des chiffres qui <span className="mark-3">éclairent</span> chaque décision</h2>
            <p className="pole-intro">Nous mettons en place des processus rigoureux pour piloter votre activité au plus près du réel.</p>
            <ul className="pole-list">
              {CONTROL.map((c) => (
                <li key={c.label}>
                  <span className="check"><CheckIcon /></span>
                  <p><strong>{c.label} — </strong><span>{c.text}</span></p>
                </li>
              ))}
            </ul>
          </div>

          <div className="pole-visual visual-finance">
            <div className="ledger">
              <div className="ledger-row">
                <span>Objectif CA</span>
                <div className="ledger-bar-track"><div className="ledger-bar-fill" style={{ width: '78%' }} /></div>
                <span>78%</span>
              </div>
              <div className="ledger-row">
                <span>Marge nette</span>
                <div className="ledger-bar-track"><div className="ledger-bar-fill" style={{ width: '64%' }} /></div>
                <span>64%</span>
              </div>
              <div className="ledger-row">
                <span>Charges fixes</span>
                <div className="ledger-bar-track"><div className="ledger-bar-fill" style={{ width: '41%' }} /></div>
                <span>41%</span>
              </div>
              <div className="ledger-row">
                <span>Trésorerie dispo.</span>
                <div className="ledger-bar-track"><div className="ledger-bar-fill" style={{ width: '92%' }} /></div>
                <span>92%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

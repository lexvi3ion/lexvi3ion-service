import { useState } from 'react'
import Reveal from './Reveal.jsx'
import HiddenCost from './simulators/HiddenCost.jsx'
import Cashflow from './simulators/Cashflow.jsx'
import Profitability from './simulators/Profitability.jsx'
import LegalQuiz from './simulators/LegalQuiz.jsx'

const TABS = [
  { id: 'cout', label: 'Coût caché', Component: HiddenCost },
  { id: 'tresorerie', label: 'Trésorerie 6 mois', Component: Cashflow },
  { id: 'rentabilite', label: 'Rentabilité produit', Component: Profitability },
  { id: 'juridique', label: 'Risques juridiques', Component: LegalQuiz },
]

export default function Simulators() {
  const [activeId, setActiveId] = useState(TABS[0].id)
  const Active = TABS.find((t) => t.id === activeId)?.Component ?? TABS[0].Component

  return (
    <section className="section simulators" id="simulateurs">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">À tester en direct</span>
          <h2>Voyez ce que le copilote <span className="accent">changerait</span> pour vous</h2>
          <p>Quatre simulateurs rapides, avec vos propres chiffres — aucune donnée n'est enregistrée, tout reste dans votre navigateur.</p>
        </Reveal>

        <Reveal className="sim-shell">
          <div className="sim-tabs" role="tablist">
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={activeId === t.id}
                className={`sim-tab ${activeId === t.id ? 'is-active' : ''}`}
                onClick={() => setActiveId(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="sim-body">
            <Active />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

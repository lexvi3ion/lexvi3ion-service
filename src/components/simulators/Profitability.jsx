import { useMemo, useState } from 'react'
import { useContactModal } from '../ContactModalContext.jsx'
import { eur, clamp } from './format.js'

export default function Profitability() {
  const { openModal } = useContactModal()
  const [price, setPrice] = useState(120)
  const [materialCost, setMaterialCost] = useState(25)
  const [timeSpent, setTimeSpent] = useState(2)
  const [targetRate, setTargetRate] = useState(35)

  const { marginEuro, marginPct, status } = useMemo(() => {
    const laborCost = timeSpent * targetRate
    const totalCost = materialCost + laborCost
    const euro = price - totalCost
    const pct = price > 0 ? (euro / price) * 100 : 0
    let level = 'ok'
    if (pct < 10) level = 'bad'
    else if (pct < 30) level = 'warn'
    return { marginEuro: euro, marginPct: pct, status: level }
  }, [price, materialCost, timeSpent, targetRate])

  const statusText = {
    ok: 'Rentable',
    warn: 'À surveiller',
    bad: 'Non rentable',
  }[status]

  const handleCta = () => {
    openModal({
      subject: 'Direction financière',
      message: `Bonjour,\n\nD'après le simulateur de rentabilité (prix ${eur(price)}, coûts matière ${eur(materialCost)}, ${timeSpent} h à ${eur(targetRate)}/h), ma marge réelle ressort à ${eur(marginEuro)} (${marginPct.toFixed(0)} %). J'aimerais qu'on regarde ça ensemble.\n\n`,
    })
  }

  return (
    <div className="sim-panel">
      <div className="sim-inputs sim-inputs--grid">
        <div className="sim-field">
          <div className="sim-field-head">
            <span>Prix de vente</span>
            <span className="sim-value">{eur(price)}</span>
          </div>
          <input type="range" min="10" max="1000" step="5" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
        </div>

        <div className="sim-field">
          <div className="sim-field-head">
            <span>Coût matière / fournitures</span>
            <span className="sim-value">{eur(materialCost)}</span>
          </div>
          <input type="range" min="0" max="500" step="5" value={materialCost} onChange={(e) => setMaterialCost(Number(e.target.value))} />
        </div>

        <div className="sim-field">
          <div className="sim-field-head">
            <span>Temps passé</span>
            <span className="sim-value">{timeSpent} h</span>
          </div>
          <input type="range" min="0" max="20" step="0.5" value={timeSpent} onChange={(e) => setTimeSpent(Number(e.target.value))} />
        </div>

        <div className="sim-field">
          <div className="sim-field-head">
            <span>Coût horaire cible de votre temps</span>
            <span className="sim-value">{eur(targetRate)}</span>
          </div>
          <input type="range" min="10" max="150" step="5" value={targetRate} onChange={(e) => setTargetRate(Number(e.target.value))} />
        </div>
      </div>

      <div className={`sim-gauge-card sim-gauge-card--${status}`}>
        <div>
          <span className="sim-result-label">Marge réelle</span>
          <span className="sim-result-big">{eur(marginEuro)}</span>
          <span className="sim-result-note">{marginPct.toFixed(0)} % du prix de vente</span>
        </div>
        <span className="sim-status-pill">{statusText}</span>
      </div>

      <div className="sim-gauge-track">
        <div className="sim-gauge-fill" style={{ width: `${clamp(marginPct, 0, 100)}%` }} />
        <span className="sim-gauge-threshold" style={{ left: '30%' }} />
      </div>
      <p className="sim-gauge-caption">Seuil de marge généralement recommandé : 30 % (repère pointillé)</p>

      <button type="button" className="btn btn--primary sim-cta" onClick={handleCta}>
        Discutons de ma tarification
      </button>
    </div>
  )
}

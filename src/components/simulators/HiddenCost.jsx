import { useState } from 'react'
import { useContactModal } from '../ContactModalContext.jsx'
import { eur, clamp } from './format.js'

export default function HiddenCost() {
  const { openModal } = useContactModal()
  const [hours, setHours] = useState(8)
  const [rate, setRate] = useState(45)

  const weekly = hours * rate
  const monthly = weekly * 4.33
  const annual = weekly * 52
  const daysPerMonth = (hours * 4.33) / 7

  const handleCta = () => {
    openModal({
      subject: 'Direction financière',
      message: `Bonjour,\n\nD'après le simulateur, je passe environ ${hours} h/semaine sur l'administratif, estimées à ${eur(annual)} par an sur la base de mon taux horaire (${eur(rate)}/h). J'aimerais échanger sur comment récupérer ce temps.\n\n`,
    })
  }

  return (
    <div className="sim-panel">
      <div className="sim-inputs">
        <div className="sim-field">
          <div className="sim-field-head">
            <span>Heures / semaine passées sur l'administratif</span>
            <span className="sim-value">{hours} h</span>
          </div>
          <input
            type="range"
            min="1"
            max="35"
            value={hours}
            onChange={(e) => setHours(clamp(Number(e.target.value), 1, 35))}
          />
        </div>

        <div className="sim-field">
          <div className="sim-field-head">
            <span>Taux horaire de votre activité</span>
            <span className="sim-value">{eur(rate)}</span>
          </div>
          <input
            type="range"
            min="15"
            max="150"
            step="5"
            value={rate}
            onChange={(e) => setRate(clamp(Number(e.target.value), 15, 150))}
          />
        </div>
      </div>

      <div className="sim-results sim-results--hero">
        <div className="sim-result-main">
          <span className="sim-result-label">Coût caché estimé, par an</span>
          <span className="sim-result-big">{eur(annual)}</span>
          <span className="sim-result-note">soit {eur(monthly)} chaque mois, non facturés à votre cœur de métier</span>
        </div>
        <div className="sim-result-side">
          <span className="sim-result-label">Temps équivalent libérable</span>
          <span className="sim-result-mid">{daysPerMonth.toFixed(1)} j / mois</span>
        </div>
      </div>

      <button type="button" className="btn btn--primary sim-cta" onClick={handleCta}>
        Discutons de comment récupérer ce temps
      </button>
    </div>
  )
}

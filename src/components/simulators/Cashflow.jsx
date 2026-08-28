import { useMemo, useState } from 'react'
import { useContactModal } from '../ContactModalContext.jsx'
import { eur, clamp } from './format.js'

function buildPoints({ ca, charges, delaiClients, delaiFournisseurs }) {
  const gapDays = delaiClients - delaiFournisseurs
  const gapImpact = (gapDays / 30) * ca
  const monthlyNet = ca - charges
  const points = [-gapImpact]
  for (let i = 1; i <= 6; i++) {
    points.push(points[i - 1] + monthlyNet)
  }
  return points
}

function CashflowChart({ points }) {
  const width = 640
  const height = 220
  const padX = 28
  const padY = 26
  const min = Math.min(0, ...points)
  const max = Math.max(0, ...points)
  const span = max - min || 1

  const toX = (i) => padX + (i / (points.length - 1)) * (width - padX * 2)
  const toY = (v) => height - padY - ((v - min) / span) * (height - padY * 2)
  const zeroY = toY(0)

  const linePath = points.map((v, i) => `${i === 0 ? 'M' : 'L'} ${toX(i)} ${toY(v)}`).join(' ')
  const areaPath = `${linePath} L ${toX(points.length - 1)} ${zeroY} L ${toX(0)} ${zeroY} Z`

  const hasNegative = points.some((v) => v < 0)
  const firstNegativeIndex = points.findIndex((v) => v < 0)

  return (
    <div className="sim-chart">
      <svg viewBox={`0 0 ${width} ${height}`} className="sim-chart-svg">
        <defs>
          <linearGradient id="cashArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={hasNegative ? 'var(--red-600)' : 'var(--navy-950)'} stopOpacity="0.35" />
            <stop offset="100%" stopColor={hasNegative ? 'var(--red-600)' : 'var(--navy-950)'} stopOpacity="0" />
          </linearGradient>
        </defs>

        <line x1={padX} y1={zeroY} x2={width - padX} y2={zeroY} stroke="var(--line-strong)" strokeDasharray="4 4" />

        <path d={areaPath} fill="url(#cashArea)" />
        <path
          d={linePath}
          fill="none"
          stroke={hasNegative ? 'var(--red-600)' : 'var(--navy-950)'}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {points.map((v, i) => (
          <circle
            key={i}
            cx={toX(i)}
            cy={toY(v)}
            r={i === firstNegativeIndex ? 5.5 : 4}
            fill={v < 0 ? 'var(--red-600)' : 'var(--navy-950)'}
            stroke="var(--surface)"
            strokeWidth="2"
          />
        ))}

        {points.map((_, i) => (
          <text key={i} x={toX(i)} y={height - 6} textAnchor="middle" className="sim-chart-label">
            {i === 0 ? 'Auj.' : `M+${i}`}
          </text>
        ))}
      </svg>
    </div>
  )
}

export default function Cashflow() {
  const { openModal } = useContactModal()
  const [ca, setCa] = useState(6000)
  const [charges, setCharges] = useState(4200)
  const [delaiClients, setDelaiClients] = useState(45)
  const [delaiFournisseurs, setDelaiFournisseurs] = useState(15)

  const points = useMemo(
    () => buildPoints({ ca, charges, delaiClients, delaiFournisseurs }),
    [ca, charges, delaiClients, delaiFournisseurs]
  )

  const monthlyNet = ca - charges
  const hasNegative = points.some((v) => v < 0)
  const finalPoint = points[points.length - 1]

  const handleCta = () => {
    openModal({
      subject: 'Direction financière',
      message: `Bonjour,\n\nD'après le simulateur de trésorerie (CA ${eur(ca)}/mois, charges ${eur(charges)}/mois, délai clients ${delaiClients} j, délai fournisseurs ${delaiFournisseurs} j), ma projection à 6 mois ${hasNegative ? 'montre une tension de trésorerie' : `atteint ${eur(finalPoint)}`}. J'aimerais en discuter.\n\n`,
    })
  }

  return (
    <div className="sim-panel">
      <div className="sim-inputs sim-inputs--grid">
        <div className="sim-field">
          <div className="sim-field-head">
            <span>Chiffre d'affaires mensuel moyen</span>
            <span className="sim-value">{eur(ca)}</span>
          </div>
          <input type="range" min="1000" max="30000" step="500" value={ca} onChange={(e) => setCa(Number(e.target.value))} />
        </div>

        <div className="sim-field">
          <div className="sim-field-head">
            <span>Charges fixes mensuelles</span>
            <span className="sim-value">{eur(charges)}</span>
          </div>
          <input type="range" min="500" max="25000" step="500" value={charges} onChange={(e) => setCharges(Number(e.target.value))} />
        </div>

        <div className="sim-field">
          <div className="sim-field-head">
            <span>Délai moyen de paiement clients</span>
            <span className="sim-value">{delaiClients} j</span>
          </div>
          <input type="range" min="0" max="90" step="5" value={delaiClients} onChange={(e) => setDelaiClients(Number(e.target.value))} />
        </div>

        <div className="sim-field">
          <div className="sim-field-head">
            <span>Délai moyen de paiement fournisseurs</span>
            <span className="sim-value">{delaiFournisseurs} j</span>
          </div>
          <input type="range" min="0" max="90" step="5" value={delaiFournisseurs} onChange={(e) => setDelaiFournisseurs(Number(e.target.value))} />
        </div>
      </div>

      <CashflowChart points={points} />

      {hasNegative ? (
        <div className="sim-alert sim-alert--warning">
          ⚠️ Cette projection montre une tension de trésorerie possible dans les 6 prochains mois.
        </div>
      ) : (
        <div className="sim-alert sim-alert--ok">
          ✓ Trajectoire saine : {eur(monthlyNet)} de solde net par mois sur cette base.
        </div>
      )}

      <button type="button" className="btn btn--primary sim-cta" onClick={handleCta}>
        Discutons de votre trésorerie
      </button>
    </div>
  )
}

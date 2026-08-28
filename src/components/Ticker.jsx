const KEYWORDS = [
  'Trésorerie', 'Facturation', 'Contrôle de gestion', 'Formalités juridiques',
  'Pré-comptabilité', 'Budgets', 'Veille réglementaire', 'Réseaux sociaux',
]

export default function Ticker() {
  const items = [...KEYWORDS, ...KEYWORDS]
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {items.map((word, i) => (
          <span className="ticker-item" key={`${word}-${i}`}>{word}</span>
        ))}
      </div>
    </div>
  )
}

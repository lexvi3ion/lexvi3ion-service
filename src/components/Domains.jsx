const DOMAINS = [
  {
    idx: 'Finance',
    title: 'Direction Financière',
    desc: 'Analyse de rentabilité, création de budgets, et suivi strict de votre trésorerie pour sécuriser la santé financière de votre entreprise.',
  },
  {
    idx: 'Admin',
    title: 'Soutien Administratif',
    desc: 'Gestion de vos ventes, pré-comptabilité, recouvrement et accompagnement dans la transition vers de nouveaux outils digitaux.',
  },
  {
    idx: 'Legal',
    title: 'Assistance Juridique',
    desc: 'Accompagnement sur vos formalités, rédaction de documents simples, organisation de dossiers et veille réglementaire.',
  },
  {
    idx: 'Marketing',
    title: 'Marketing Digital',
    desc: 'Création de contenus, publication régulière et gestion de votre image de marque en ligne pour développer votre visibilité.',
  },
]

export default function Domains() {
  return (
    <section className="section" id="domaines">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Nos domaines d'expertise</span>
          <h2>Quatre casquettes, <span className="accent">un seul interlocuteur</span></h2>
          <p>De la comptabilité à la visibilité en ligne, chaque pôle est pensé pour se répondre — vos chiffres, vos papiers et votre image avancent ensemble.</p>
        </div>

        <div className="domains-grid">
          {DOMAINS.map((d) => (
            <div className="domain-card" key={d.title}>
              <span className="domain-dot"></span>
              <span className="domain-index">{d.idx}</span>
              <h3>{d.title}</h3>
              <p>{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

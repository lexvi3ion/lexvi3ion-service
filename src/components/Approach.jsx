import Reveal from './Reveal.jsx'

export default function Approach() {
  return (
    <section className="section approach" id="approche">
      <div className="wrap">
        <div className="approach-grid">
          <Reveal>
            <img src="/logo.png" alt="Logo LEX VI3ION" className="approach-mark-img" />
          </Reveal>

          <Reveal delay={120}>
            <span className="eyebrow">L'approche</span>
            <h2 style={{ marginTop: 14, color: '#fff' }}>
              Un copilote, pas un prestataire de plus
            </h2>
            <div className="approach-copy" style={{ marginTop: 22 }}>
              <p>
                <strong>Avec LEX VI3ION, je propose un accompagnement sur-mesure.</strong>{' '}
                Mon objectif est simple : prendre en charge votre gestion externalisée
                pour vous permettre de vous concentrer pleinement sur votre cœur de métier.
              </p>
              <p>
                J'interviens comme un véritable copilote pour votre entreprise : je sécurise
                vos finances, j'allège votre charge mentale et administrative, et je vous
                accompagne sur vos démarches juridiques simples.
              </p>
              <p>
                En résumé, LEX VI3ION vous apporte la structure et la sérénité nécessaires
                pour faire grandir votre activité en toute confiance.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import Reveal from './Reveal.jsx'

const ITEMS = [
  {
    q: "Combien coûte l'accompagnement ?",
    a: "Chaque mission est chiffrée sur-mesure selon votre volume d'activité et les pôles dont vous avez besoin (finance, administratif, juridique, marketing). Un devis clair vous est proposé après l'échange initial gratuit, sans engagement.",
  },
  {
    q: "J'ai déjà un expert-comptable, à quoi ça sert en plus ?",
    a: "Votre expert-comptable produit vos comptes ; le copilote s'occupe de tout ce qu'il y a autour au quotidien — pré-comptabilité, trésorerie, facturation, dossiers juridiques — et transmet une information propre et organisée à votre comptable. Les deux rôles se complètent.",
  },
  {
    q: "Sur combien de temps je m'engage ?",
    a: "Aucun engagement long imposé. L'accompagnement démarre généralement sur une base mensuelle, ajustable selon vos besoins et la saisonnalité de votre activité.",
  },
  {
    q: "Comment ça se passe si je ne suis pas sur place ?",
    a: "L'essentiel du suivi se fait à distance : outils partagés, points réguliers en visio ou par téléphone, reporting envoyé directement. Un déplacement ponctuel reste possible si votre activité le justifie.",
  },
  {
    q: "Mes données financières sont-elles en sécurité ?",
    a: "Vos accès sont utilisés uniquement dans le cadre de la mission convenue, avec vous, jamais partagés à des tiers. Le détail est précisé dans notre politique de confidentialité.",
  },
]

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? 'is-open' : ''}`}>
      <button type="button" className="faq-question" onClick={onToggle} aria-expanded={isOpen}>
        <span>{item.q}</span>
        <span className="faq-icon" aria-hidden="true">
          <svg viewBox="0 0 16 16" fill="none">
            <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div className="faq-answer">
        <p>{item.a}</p>
      </div>
    </div>
  )
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section faq" id="faq">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Questions fréquentes</span>
          <h2>Avant de vous <span className="accent">lancer</span></h2>
          <p>Les questions qu'on nous pose le plus souvent — si la vôtre n'y est pas, écrivez-nous directement.</p>
        </Reveal>

        <Reveal className="faq-list">
          {ITEMS.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </Reveal>
      </div>
    </section>
  )
}

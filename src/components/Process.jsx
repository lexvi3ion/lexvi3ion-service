import Reveal from './Reveal.jsx'
import { useCalendly } from './useCalendly.js'

const STEPS = [
  {
    n: '01',
    title: 'Échange initial',
    text: "Un premier appel gratuit de 20 minutes pour comprendre votre activité, vos outils actuels et ce qui vous pèse le plus au quotidien.",
  },
  {
    n: '02',
    title: 'Diagnostic',
    text: "Analyse de votre gestion existante — trésorerie, facturation, dossiers en cours — pour identifier les priorités et estimer le temps que ça vous libère.",
  },
  {
    n: '03',
    title: 'Mise en place',
    text: "Le copilote se met en place autour de vos outils actuels : accès partagés, tableaux de bord, premières actions correctrices si besoin.",
  },
  {
    n: '04',
    title: 'Suivi continu',
    text: "Reporting régulier et point mensuel pour ajuster le cap — vous gardez la visibilité, sans reprendre la charge.",
  },
]

export default function Process() {
  const { openCalendly } = useCalendly()
  return (
    <section className="section process" id="process">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Comment ça marche</span>
          <h2>Quatre étapes, <span className="accent">zéro friction</span></h2>
          <p>Pas de longue procédure d'onboarding : le copilote s'installe progressivement, à votre rythme.</p>
        </Reveal>

        <div className="process-grid">
          {STEPS.map((s, i) => (
            <Reveal delay={i * 100} key={s.n} className="process-step">
              <span className="process-num">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              {i < STEPS.length - 1 && <span className="process-connector" aria-hidden="true"></span>}
            </Reveal>
          ))}
        </div>

        <Reveal delay={420} className="process-cta">
          <button type="button" className="btn btn--primary" onClick={openCalendly}>
            Démarrer par un échange gratuit
          </button>
        </Reveal>
      </div>
    </section>
  )
}

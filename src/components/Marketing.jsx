import { CheckIcon } from './icons.jsx'
import Reveal from './Reveal.jsx'

const ITEMS = [
  { label: 'Création de contenus', text: 'Conception de visuels attractifs et rédaction de textes percutants (copywriting) adaptés à votre cible.' },
  { label: 'Gestion des publications', text: 'Planification, publication régulière et animation de vos réseaux sociaux.' },
  { label: 'Stratégie digitale', text: 'Définition d\u2019une ligne éditoriale cohérente pour mettre en valeur votre expertise et votre savoir-faire.' },
]

export default function Marketing() {
  return (
    <section className="section pole" id="marketing">
      <div className="wrap">
        <div className="pole-grid reverse">
          <Reveal className="pole-visual visual-marketing">
            <div className="content-grid">
              <div className="content-tile"><span></span></div>
              <div className="content-tile hot"><span></span></div>
              <div className="content-tile"><span></span></div>
              <div className="content-tile hot2"><span></span></div>
              <div className="content-tile"><span></span></div>
              <div className="content-tile"><span></span></div>
            </div>
          </Reveal>

          <Reveal delay={120} className="pole-body">
            <span className="eyebrow">Pôle Marketing</span>
            <h2>Visibilité <span className="accent">&amp; contenus</span></h2>
            <p className="pole-intro">Dynamisez votre image de marque et attirez de nouveaux clients grâce à une communication maîtrisée.</p>
            <ul className="pole-list">
              {ITEMS.map((c) => (
                <li key={c.label}>
                  <span className="check"><CheckIcon /></span>
                  <p><strong>{c.label} — </strong><span>{c.text}</span></p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

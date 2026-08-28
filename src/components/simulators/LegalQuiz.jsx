import { useMemo, useState } from 'react'
import { useContactModal } from '../ContactModalContext.jsx'

const QUESTIONS = [
  {
    q: 'Vos mentions légales et CGV sont-elles à jour ?',
    tip: 'Des CGV à jour protègent votre activité en cas de litige client.',
  },
  {
    q: 'Tous vos contrats clients ou fournisseurs sont-ils signés ?',
    tip: 'Un accord verbal ou un devis non signé offre peu de recours en cas de désaccord.',
  },
  {
    q: 'Êtes-vous en conformité RGPD (politique de confidentialité, consentement) ?',
    tip: 'Le RGPD s\'applique dès la première donnée client collectée, quelle que soit la taille de l\'entreprise.',
  },
  {
    q: 'Avez-vous une procédure claire en cas d\'impayé ?',
    tip: 'Une procédure de relance structurée réduit fortement le délai moyen de recouvrement.',
  },
  {
    q: 'Votre statut juridique est-il encore adapté à votre activité actuelle ?',
    tip: 'Un statut qui ne suit plus la croissance de l\'activité peut coûter cher en fiscalité ou en responsabilité.',
  },
  {
    q: 'Vos documents juridiques sont-ils archivés et faciles à retrouver ?',
    tip: 'En cas de contrôle ou de litige, retrouver un document en quelques minutes fait la différence.',
  },
]

export default function LegalQuiz() {
  const { openModal } = useContactModal()
  const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(null))

  const answeredCount = answers.filter((a) => a !== null).length
  const yesCount = answers.filter((a) => a === true).length
  const allAnswered = answeredCount === QUESTIONS.length

  const level = useMemo(() => {
    if (!allAnswered) return null
    if (yesCount >= 5) return 'ok'
    if (yesCount >= 3) return 'warn'
    return 'bad'
  }, [allAnswered, yesCount])

  const levelText = {
    ok: 'Bonne maîtrise',
    warn: 'Quelques points à sécuriser',
    bad: 'Risques à traiter rapidement',
  }[level]

  const weakPoints = QUESTIONS.filter((_, i) => answers[i] === false)

  const setAnswer = (i, value) => {
    setAnswers((prev) => {
      const next = [...prev]
      next[i] = value
      return next
    })
  }

  const handleCta = () => {
    const list = weakPoints.map((w) => `- ${w.q}`).join('\n')
    openModal({
      subject: 'Assistance juridique',
      message: `Bonjour,\n\nD'après le diagnostic express, mon score est de ${yesCount}/${QUESTIONS.length}. Points à sécuriser :\n${list || '(aucun point signalé)'}\n\nJ'aimerais qu'on en discute.\n\n`,
    })
  }

  return (
    <div className="sim-panel">
      <div className="sim-quiz-list">
        {QUESTIONS.map((item, i) => (
          <div className="sim-quiz-item" key={item.q}>
            <p>{item.q}</p>
            <div className="sim-quiz-toggle">
              <button
                type="button"
                className={answers[i] === true ? 'is-active is-yes' : ''}
                onClick={() => setAnswer(i, true)}
              >
                Oui
              </button>
              <button
                type="button"
                className={answers[i] === false ? 'is-active is-no' : ''}
                onClick={() => setAnswer(i, false)}
              >
                Non
              </button>
            </div>
          </div>
        ))}
      </div>

      {allAnswered ? (
        <>
          <div className={`sim-gauge-card sim-gauge-card--${level}`}>
            <div>
              <span className="sim-result-label">Score de risque</span>
              <span className="sim-result-big">{yesCount}/{QUESTIONS.length}</span>
            </div>
            <span className="sim-status-pill">{levelText}</span>
          </div>

          {weakPoints.length > 0 && (
            <ul className="sim-recos">
              {weakPoints.map((w) => (
                <li key={w.q}>{w.tip}</li>
              ))}
            </ul>
          )}

          <button type="button" className="btn btn--primary sim-cta" onClick={handleCta}>
            Discutons de ces points
          </button>
        </>
      ) : (
        <p className="sim-quiz-progress">{answeredCount} / {QUESTIONS.length} questions répondues</p>
      )}
    </div>
  )
}

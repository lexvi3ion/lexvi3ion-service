import { useEffect, useRef, useState } from 'react'
import { useContactModal } from './ContactModalContext.jsx'

const SUBJECTS = [
  'Direction financière',
  'Soutien administratif',
  'Assistance juridique',
  'Marketing digital',
  'Autre demande',
]

const EMPTY = { name: '', email: '', subject: SUBJECTS[0], message: '' }

export default function ContactModal() {
  const { open, closeModal } = useContactModal()
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState('idle') // idle | sending | sent
  const firstFieldRef = useRef(null)
  const cardRef = useRef(null)

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', onKey)
    const t = setTimeout(() => firstFieldRef.current?.focus(), 60)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      clearTimeout(t)
    }
  }, [open, closeModal])

  useEffect(() => {
    if (open) {
      setStatus('idle')
      setForm(EMPTY)
    }
  }, [open])

  if (!open) return null

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    const subjectLine = `[LEX VI3ION — ${form.subject}] Nouveau message de ${form.name}`
    const bodyLines = [
      `Nom : ${form.name}`,
      `Email : ${form.email}`,
      `Sujet : ${form.subject}`,
      '',
      form.message,
    ]
    const mailto = `mailto:contact.lexvi3ion@gmail.com?subject=${encodeURIComponent(
      subjectLine
    )}&body=${encodeURIComponent(bodyLines.join('\n'))}`

    window.setTimeout(() => {
      setStatus('sent')
      window.location.href = mailto
      window.setTimeout(() => closeModal(), 1400)
    }, 550)
  }

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) closeModal()
  }

  return (
    <div className="modal-backdrop" onMouseDown={handleBackdrop}>
      <div
        className="modal-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        ref={cardRef}
      >
        <button
          type="button"
          className="modal-close"
          onClick={closeModal}
          aria-label="Fermer la fenêtre de contact"
        >
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>

        {status === 'sent' ? (
          <div className="modal-success">
            <div className="modal-success-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M4 12.5l5 5L20 6.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Message prêt</h3>
            <p>Votre messagerie s'ouvre pour finaliser l'envoi vers contact.lexvi3ion@gmail.com.</p>
          </div>
        ) : (
          <>
            <span className="eyebrow">Nous contacter</span>
            <h3 id="contact-modal-title">Envoyer un message</h3>
            <p className="modal-sub">Remplissez le formulaire, votre messagerie s'ouvrira avec le message déjà prêt à partir.</p>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="field-row">
                <label className="field">
                  <span>Nom</span>
                  <input
                    ref={firstFieldRef}
                    type="text"
                    required
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Votre nom"
                  />
                </label>
                <label className="field">
                  <span>Email</span>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={update('email')}
                    placeholder="vous@entreprise.fr"
                  />
                </label>
              </div>

              <label className="field">
                <span>Sujet</span>
                <select value={form.subject} onChange={update('subject')}>
                  {SUBJECTS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </label>

              <label className="field">
                <span>Message</span>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Décrivez votre activité et votre besoin en quelques lignes..."
                />
              </label>

              <button type="submit" className="btn btn--primary modal-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Préparation…' : 'Envoyer le message'}
              </button>

              <p className="modal-alt">
                ou appelez directement le <a href="tel:0625244430">06 25 24 44 30</a>
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

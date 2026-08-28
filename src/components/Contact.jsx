import Reveal from './Reveal.jsx'
import { useContactModal } from './ContactModalContext.jsx'

export default function Contact() {
  const { openModal } = useContactModal()
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <Reveal className="contact-card">
          <div className="blob blob--navy"></div>
          <div className="blob blob--red"></div>
          <div className="contact-inner">
            <h2>Prêt à structurer votre <span className="accent">croissance</span> ?</h2>
            <p>Parlons de vos besoins et construisons ensemble la réussite de votre entreprise.</p>
            <div className="contact-actions">
              <button type="button" className="btn btn--primary" onClick={openModal}>
                Envoyer un message
              </button>
              <a className="btn btn--ghost" href="tel:0625244430">
                06 25 24 44 30
              </a>
            </div>
            <a className="contact-email-link" href="mailto:contact.lexvi3ion@gmail.com">
              ou écrivez directement à contact.lexvi3ion@gmail.com
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

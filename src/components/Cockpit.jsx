import { useEffect, useRef, useState } from 'react'

const DIALS = [
  { label: 'Trésorerie pilotée', target: 98, unit: '%', bar: 98 },
  { label: 'Factures & devis suivis', target: 100, unit: '%', bar: 92 },
  { label: 'Dossiers juridiques classés', target: 100, unit: '%', bar: 88 },
  { label: 'Publications planifiées', target: 100, unit: '%', bar: 80 },
]

function useCountUp(target, active) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    let raf
    const duration = 900
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target])
  return value
}

function Dial({ label, target, unit, bar, active }) {
  const value = useCountUp(target, active)
  return (
    <div className="dial">
      <div className="dial-top">
        <span className="dial-num">{value}</span>
        <span className="dial-unit">{unit}</span>
      </div>
      <p className="dial-label">{label}</p>
      <div className="dial-bar">
        <div
          className="dial-bar-fill"
          style={{ width: active ? `${bar}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default function Cockpit() {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          io.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div className="cockpit" ref={ref}>
      <div className="cockpit-label">
        <span>Tableau de bord copilote</span>
        <span>Aperçu type d'un suivi client</span>
      </div>
      <div className="cockpit-grid">
        {DIALS.map((d) => (
          <Dial key={d.label} {...d} active={active} />
        ))}
      </div>
      <p className="cockpit-note">
        Illustration du niveau de suivi mis en place une fois votre gestion externalisée — les chiffres réels sont partagés avec vous en reporting.
      </p>
    </div>
  )
}

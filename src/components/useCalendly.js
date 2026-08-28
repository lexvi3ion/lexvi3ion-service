import { useCallback } from 'react'
import { CALENDLY_URL } from '../config.js'
import { useContactModal } from './ContactModalContext.jsx'

let scriptPromise = null

function loadCalendlyAssets() {
  if (scriptPromise) return scriptPromise
  scriptPromise = new Promise((resolve, reject) => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    document.head.appendChild(link)

    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.onload = resolve
    script.onerror = reject
    document.body.appendChild(script)
  })
  return scriptPromise
}

export function useCalendly() {
  const { openModal } = useContactModal()
  const isConfigured = Boolean(CALENDLY_URL)

  const openCalendly = useCallback(async () => {
    if (!isConfigured) {
      openModal()
      return
    }
    await loadCalendlyAssets()
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL })
    }
  }, [isConfigured, openModal])

  return { openCalendly, isConfigured }
}

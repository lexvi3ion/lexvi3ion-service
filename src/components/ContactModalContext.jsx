import { createContext, useContext, useState } from 'react'

const ContactModalContext = createContext(null)

export function ContactModalProvider({ children }) {
  const [open, setOpen] = useState(false)
  const [prefill, setPrefill] = useState(null)

  const value = {
    open,
    prefill,
    openModal: (payload) => {
      setPrefill(payload || null)
      setOpen(true)
    },
    closeModal: () => setOpen(false),
  }
  return (
    <ContactModalContext.Provider value={value}>
      {children}
    </ContactModalContext.Provider>
  )
}

export function useContactModal() {
  const ctx = useContext(ContactModalContext)
  if (!ctx) throw new Error('useContactModal must be used within ContactModalProvider')
  return ctx
}

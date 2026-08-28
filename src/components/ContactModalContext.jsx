import { createContext, useContext, useState } from 'react'

const ContactModalContext = createContext(null)

export function ContactModalProvider({ children }) {
  const [open, setOpen] = useState(false)
  const value = {
    open,
    openModal: () => setOpen(true),
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

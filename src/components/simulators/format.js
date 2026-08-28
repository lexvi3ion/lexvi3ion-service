export const eur = (n) =>
  new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(
    Number.isFinite(n) ? n : 0
  )

export const clamp = (n, min, max) => Math.min(max, Math.max(min, n))

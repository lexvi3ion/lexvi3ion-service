import LegalPageLayout from './LegalPageLayout.jsx'

export default function MentionsLegales() {
  return (
    <LegalPageLayout title="Mentions légales" updated="à compléter">
      <p className="legal-flag">
        ⚠️ Page à finaliser : remplacez les informations entre crochets par les
        coordonnées légales exactes de l'entreprise avant la mise en ligne
        publique (obligation légale en France, article 6-III de la loi n°2004-575).
      </p>

      <h2>Éditeur du site</h2>
      <p>
        Le site LEX VI3ION est édité par [Nom et prénom / raison sociale],
        [statut juridique — ex. entreprise individuelle, EURL, SASU],
        immatriculé(e) sous le numéro SIRET [numéro SIRET],
        dont le siège est situé [adresse complète].
      </p>
      <p>
        Numéro de TVA intracommunautaire (le cas échéant) : [numéro de TVA].
      </p>
      <p>
        Directeur de la publication : [Nom et prénom].
      </p>
      <p>
        Contact : <a href="mailto:contact.lexvi3ion@gmail.com">contact.lexvi3ion@gmail.com</a> — 06 25 24 44 30.
      </p>

      <h2>Hébergement</h2>
      <p>
        Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut,
        CA 91789, États-Unis — <a href="https://vercel.com" target="_blank" rel="noreferrer">vercel.com</a>.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L'ensemble des éléments présents sur ce site (textes, logo, mise en
        page, illustrations) est la propriété de LEX VI3ION, sauf mention
        contraire. Toute reproduction, même partielle, est soumise à
        autorisation préalable.
      </p>

      <h2>Responsabilité</h2>
      <p>
        LEX VI3ION s'efforce d'assurer l'exactitude des informations
        diffusées sur ce site, sans garantie d'exhaustivité. LEX VI3ION ne
        pourra être tenu responsable des erreurs, omissions ou de
        l'indisponibilité temporaire du site.
      </p>

      <h2>Droit applicable</h2>
      <p>Le présent site est soumis au droit français.</p>
    </LegalPageLayout>
  )
}

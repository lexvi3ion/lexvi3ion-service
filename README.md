# LEX VI3ION — Site vitrine

Site vitrine one-page pour LEX VI3ION, copilote administratif, financier et
juridique pour auto-entrepreneurs, TPE et PME. Construit avec React + Vite,
sans dépendance externe lourde (CSS pur, pas de Tailwind).

## À compléter avant la mise en ligne publique

Ces éléments ont été ajoutés avec des valeurs par défaut ou des
placeholders clairement signalés — à finaliser avant de partager le site
largement :

- **`src/pages/MentionsLegales.jsx`** — remplacer les `[crochets]` par les
  vraies informations légales (nom/raison sociale, statut juridique, SIRET,
  adresse). Obligatoire légalement en France dès qu'il y a un formulaire de
  contact.
- **`src/pages/Confidentialite.jsx`** — à relire/adapter si un outil
  d'analytics est ajouté plus tard.
- **`src/config.js`** — ajouter le vrai lien Calendly dans `CALENDLY_URL`
  une fois le compte créé (gratuit sur calendly.com). Tant que ce champ est
  vide, le bouton "Réserver un appel" ouvre le formulaire de contact à la
  place, donc rien n'est cassé en attendant.
- **`index.html`, `public/robots.txt`, `public/sitemap.xml`** — remplacer
  `lexvi3ion.vercel.app` par le vrai domaine une fois le déploiement
  confirmé (ou le nom de domaine personnalisé si vous en ajoutez un).

## Formulaire de contact

Le modal "Prendre contact" compose un e-mail pré-rempli et ouvre la
messagerie du visiteur (`mailto:`) — aucun serveur requis, fonctionne
partout. Pour un envoi silencieux depuis le site (sans ouvrir la
messagerie), il faudrait brancher un service comme Formspree ou EmailJS.

## Lancer le projet en local

```bash
npm install
npm run dev
```

Le site est disponible sur `http://localhost:5173`.

## Structure

```
src/
  components/   → un composant par section (Hero, Approach, Finance, Admin, Legal, Marketing, Contact...)
  App.jsx        → assemble toutes les sections
  styles.css     → tous les styles (tokens de couleur/typo en haut du fichier)
public/
  favicon.svg
```

Pour changer un texte (offre, email, téléphone...), il suffit d'éditer le
composant correspondant dans `src/components/`.

## Déployer sur GitHub

```bash
git init
git add .
git commit -m "Site LEX VI3ION"
git branch -M main
git remote add origin https://github.com/<ton-compte>/<ton-repo>.git
git push -u origin main
```

## Héberger sur Vercel

1. Va sur [vercel.com](https://vercel.com) et connecte-toi avec le compte
   GitHub qui héberge le repo.
2. Clique sur **Add New → Project**, choisis le repo `lexvi3ion` (ou le nom
   que tu lui as donné).
3. Vercel détecte automatiquement Vite : laisse les réglages par défaut
   (`Build Command: npm run build`, `Output Directory: dist`).
4. Clique sur **Deploy**. Le site sera en ligne en quelques secondes, avec
   une URL du type `lexvi3ion.vercel.app`.
5. Pour un nom de domaine perso, onglet **Settings → Domains** du projet
   Vercel.

Chaque `git push` sur `main` redéploiera automatiquement le site.

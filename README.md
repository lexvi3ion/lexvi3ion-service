# LEX VI3ION — Site vitrine

Site vitrine one-page pour LEX VI3ION, copilote administratif, financier et
juridique pour auto-entrepreneurs, TPE et PME. Construit avec React + Vite,
sans dépendance externe lourde (CSS pur, pas de Tailwind).

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

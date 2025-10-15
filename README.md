![qmweb](https://github.com/user-attachments/assets/4ea966f6-e5b5-4612-970a-3f349c86c78e)

Une landing page moderne et responsive construite avec Next.js, mettant en avant une approche de développement web rapide et efficace.

## 🚀 Stack technique

- **Framework** : Next.js 15.5.4 avec React 19
- **Styling** : Tailwind CSS v4
- **Animations** : Framer Motion
- **Linting & Formatting** : Biome
- **Git Hooks** : Lefthook + Commitlint
- **Package Manager** : Yarn 4
- **IDE** : Cursor

## 🎯 Approche & Raisonnement

Ce projet démontre une approche moderne du développement web en combinant :

- **Performance** : Utilisation de Next.js avec Turbopack pour un développement ultra-rapide
- **Qualité du code** : Intégration de Biome pour un linting et formatting automatiques
- **Workflow robuste** : Git hooks avec Lefthook et Commitlint pour garantir la cohérence des commits
- **UX moderne** : Animations fluides avec Framer Motion et design responsive avec Tailwind CSS
- **Maintenabilité** : Architecture modulaire et composants réutilisables

L'objectif est de créer une expérience utilisateur engageante tout en maintenant un code propre et performant.

## ✨ Améliorations possibles

Avec plus de temps, les améliorations suivantes pourraient être implémentées :

- **Design et animations avancées** : Interactions scroll avec les images (parallax, transformations), curseur personnalisé, scroll smooth avec Lenis, dark mode, micro-interactions sophistiquées
- **Optimisation SSR** : Migration vers le rendu côté serveur pour améliorer les performances et le référencement
- **Internationalisation** : Support multi-langues avec next-intl pour une audience internationale
- **Analytics et monitoring** : Intégration Umami/Google Analytics pour le suivi des performances
- **Pipeline CI/CD** : Automatisation du déploiement avec GitHub Actions pour un workflow robuste
- **Ajout des pages robot.ts, sitemap.ts, not-found.tsx et error.tsx** : Pages spéciales Next.js pour le SEO et la gestion d'erreurs

## 🛠️ Installation & Développement

```bash
# Configuration de Yarn à la bonne version
corepack enable
corepack prepare yarn@4.10.3 --activate

# Installation des dépendances
yarn install

# Démarrage du serveur de développement
yarn dev

# Build de production
yarn build
```

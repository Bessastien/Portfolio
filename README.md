# Portfolio - Sébastien Dabert

Portfolio personnel développé avec HTML, CSS et JavaScript vanilla. Interface moderne avec animations, système de thèmes clair/sombre, et architecture modulaire.

## Aperçu

Portfolio interactif présentant mes projets, compétences et expériences professionnelles. Design minimaliste avec une palette de couleurs inspirée de mon CV.

## Fonctionnalités

### Interface utilisateur
- **Animation de chargement** : Terminal animé avec effet Matrix au démarrage
- **Navigation smooth** : Défilement fluide entre les sections
- **Thème adaptatif** : Basculement entre mode clair et sombre
- **Design responsive** : Optimisé pour desktop, tablette et mobile

### Sections principales
1. **Hero** : Présentation avec animation de texte et bouton de téléchargement du CV
2. **Projets** : Grille de cartes interactives avec modal détaillée
3. **Compétences** : Carousel horizontal avec navigation par flèches
4. **Parcours** : Timeline verticale avec modal d'informations détaillées
5. **Contact** : Footer avec liens sociaux et informations de contact

### Interactions avancées
- **Modal projets** : Affichage détaillé des projets (technologies, fonctionnalités, liens)
- **Modal expériences** : Informations complètes sur chaque expérience (missions, réalisations, outils)
- **Effets de zoom** : Animation highlight au clic sur projets et expériences
- **Carousel** : Navigation fluide dans les compétences techniques

## Architecture

### Structure des fichiers

```
Portfolio/
├── index.html              # Point d'entrée HTML
├── README.md               # Documentation
│
├── assets/
│   └── documents/
│       └── CV_Sebastien_Dabert.pdf
│
├── css/                    # Styles modulaires
│   ├── base.css           # Variables CSS et reset
│   ├── hero.css           # Section d'accueil
│   ├── layout.css         # Mise en page générale
│   ├── modal.css          # Modales (projets et expériences)
│   ├── projects.css       # Section projets
│   ├── responsive.css     # Adaptations mobile
│   ├── sections.css       # Sections parcours et compétences
│   └── terminal.css       # Animation de chargement
│
├── data/                   # Données JSON
│   ├── experiences.json   # Expériences professionnelles
│   ├── profile.json       # Informations personnelles
│   ├── projects.json      # Portfolio de projets
│   └── skills.json        # Compétences techniques
│
└── js/                     # Scripts modulaires
    ├── carousel.js        # Carousel de compétences
    ├── data-loader.js     # Chargement et affichage des données
    ├── main.js            # Orchestration principale
    ├── matrix.js          # Effet Matrix d'arrière-plan
    ├── modal.js           # Gestion des modales
    └── terminal.js        # Animation du terminal
```

### Technologies utilisées

#### Frontend
- **HTML5** : Structure sémantique
- **CSS3** : Variables CSS, Grid, Flexbox, animations
- **JavaScript ES6+** : Modules, async/await, manipulation DOM

#### Méthodologie
- **Architecture modulaire** : Séparation des préoccupations (HTML/CSS/JS)
- **BEM-like naming** : Convention de nommage des classes CSS
- **Mobile-first** : Approche responsive avec media queries
- **Accessibilité** : Labels ARIA, navigation au clavier

## Palette de couleurs

### Thème sombre (par défaut)
```css
--color-bg: #454343           /* Fond principal (gris) */
--color-bg-alt: #3a3838       /* Fond alternatif */
--color-surface-solid: #454343 /* Surfaces (cartes, modales) */
--accent-primary: #8ca87c     /* Vert menthe */
--accent-secondary: #6e8a5d   /* Vert prairie */
--text-primary: #f5f7f0       /* Texte principal */
--text-secondary: #c5d3bf     /* Texte secondaire */
```

### Thème clair
```css
--color-bg: #f5f7f0           /* Fond principal (crème) */
--color-bg-alt: #edf1e6       /* Fond alternatif */
--color-surface-solid: #ffffff /* Surfaces blanches */
--accent-primary: #6e8a5d     /* Vert prairie */
--accent-secondary: #414b3b   /* Vert forêt */
--text-primary: #1c2318       /* Texte principal */
--text-secondary: #4c5b45     /* Texte secondaire */
```

## Déploiement

### GitHub Pages
```bash
# Pousser sur la branche main
git add .
git commit -m "Update portfolio"
git push origin main

# Activer GitHub Pages dans Settings > Pages
# Source: main branch / root
```

### Netlify
```bash
# Drag & drop du dossier dans Netlify
# Ou connecter le repo GitHub
```


## Licence

Ce portfolio est un projet personnel. Le code est libre d'utilisation pour inspiration.

## Auteur

**Sébastien Dabert**
- Portfolio : [En construction]

---

Dernière mise à jour : Novembre 2024


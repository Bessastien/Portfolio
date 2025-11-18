# 🚀 Portfolio - Sébastien Dabert

Portfolio interactif minimaliste avec animation de terminal style **edh.dev**.

> Étudiant en 2ème année de BUT Informatique

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/fr/docs/Web/JavaScript)

---

## 📋 Table des Matières

- [Aperçu](#-aperçu)
- [Structure du Projet](#-structure-du-projet)
- [Installation](#-installation)
- [Fonctionnalités](#-fonctionnalités)
- [Technologies](#-technologies)
- [Personnalisation](#-personnalisation)

---

## 🎨 Aperçu

Portfolio "Single Page" avec :
- ⚡ Animation de terminal ultra-rapide (1.5s)
- 🎯 Cercle SVG qui suit la souris
- 💼 Section projets avec micro-interactions
- 📍 Timeline du parcours professionnel
- 🔧 Tags de compétences animés
- 📱 Design 100% responsive

**Style** : Minimaliste Dark Mode inspiré de Tamal Sen, Cassie Evans et edh.dev

---

## 📁 Structure du Projet

```
Portfolio/
├── index.html              # Page principale
├── README.md               # Ce fichier
│
├── css/                    # Styles modulaires
│   ├── base.css           # Reset & styles de base
│   ├── terminal.css       # Animation du terminal
│   ├── layout.css         # Layout & navigation
│   ├── hero.css           # Section Hero
│   ├── projects.css       # Section Projets
│   ├── sections.css       # Parcours, Compétences, Footer
│   └── responsive.css     # Media queries
│
├── js/                     # Scripts modulaires
│   ├── terminal.js        # Animation du terminal
│   ├── matrix.js          # Effet matrix background
│   ├── hero.js            # Effet de suivi de souris
│   └── main.js            # Orchestration principale
│
├── docs/                   # Documentation
│   └── README_OLD.md      # Ancien README détaillé
│
└── assets/                 # Resources (vide pour l'instant)
```

---

## 🚀 Installation

### Option 1 : Ouverture Directe
```bash
# Simplement double-cliquer sur index.html
```

### Option 2 : Serveur Local (Recommandé)

**Avec Python 3 :**
```bash
cd /path/to/Portfolio
python3 -m http.server 8000
# Ouvrir http://localhost:8000
```

**Avec Node.js :**
```bash
npx http-server
```

**Avec PHP :**
```bash
php -S localhost:8000
```

---

## ✨ Fonctionnalités

### 🖥️ Animation Terminal
- Effet de boot au chargement
- 8 lignes avec couleurs dynamiques
- Vitesse de frappe : 10ms (ultra rapide)
- Effet de glitch avant disparition
- Durée totale : ~1.5-2 secondes

### 🎯 Hero Section
- Titre avec gradient animé
- Cercle SVG (50x50px) qui suit la souris
- Interpolation fluide (lerp)
- Animation de flottement

### 💼 Section Projets
**3 projets présentés :**
1. **Latice (JavaFX)** - Architecture MVC
2. **Base de Données** - Conception SQL
3. **Mini-jeux Python** - Code modulaire

**Micro-interactions :**
- Translation au survol
- Bordure illuminée
- Badges qui changent de couleur

### 📍 Timeline Parcours
- Timeline verticale avec gradient
- Focus sur les **soft skills**
- Marqueurs animés
- 3 expériences professionnelles

### 🔧 Compétences
10 tags animés : Java, Python, SQL, C++, Git, Linux, JavaFX, PostgreSQL, MVC, POO

### 📬 Footer
- Lien GitHub : [bessastien](https://github.com/bessastien)
- Email : contact@sebastiendabert.dev

---

## 🛠️ Technologies

### Front-End
- **HTML5** - Structure sémantique
- **CSS3** - Animations et transitions
- **JavaScript (Vanilla)** - Aucune dépendance externe

### Techniques CSS
- CSS Grid & Flexbox
- Custom Properties (variables)
- Animations avec `@keyframes`
- `transform` et `opacity` pour les performances
- Media queries responsive

### Techniques JavaScript
- Modules ES6 (simulés)
- `requestAnimationFrame` pour les animations
- Linear interpolation (lerp)
- Event delegation
- DOM manipulation

---

## 🎨 Personnalisation

### Modifier les Couleurs

Dans tous les fichiers CSS, recherchez et remplacez :
```css
#00ff88  /* Vert principal */
#00ccff  /* Cyan secondaire */
```

### Ajuster la Vitesse du Terminal

Dans `js/terminal.js`, ligne 17 :
```javascript
const typingSpeed = 10; // Diminuer = plus rapide
```

### Modifier le Cercle

**Taille** - Dans `index.html`, ligne ~46 :
```html
<svg width="50" height="50" viewBox="0 0 50 50">
```

**Vitesse** - Dans `js/hero.js`, ligne 32 :
```javascript
const speed = 0.2; // 0.1 = lent, 0.3 = rapide
```

### Ajouter du Contenu

Éditez `index.html` et cherchez les sections :
- `<!-- Section Hero -->`
- `<!-- Section Projets -->`
- `<!-- Section Parcours -->`
- `<!-- Section Compétences -->`
- `<!-- Footer -->`

---

## 📊 Performance

- **Taille totale** : < 40 KB
- **Aucune dépendance** externe
- **Animations GPU** optimisées
- **Score Lighthouse** : 95+ (Performance)
- **Compatible** tous navigateurs modernes

---

## 📱 Responsive

Le portfolio s'adapte à toutes les tailles d'écran :

| Device | Breakpoint | Changements |
|--------|------------|-------------|
| Desktop | > 768px | Layout complet, grille 3 colonnes |
| Tablet | 768px | Grille 2 colonnes adaptée |
| Mobile | < 768px | Layout vertical, cercle caché |

---

## 🌟 Inspirations

- **Structure minimaliste** : [Tamal Sen](https://tamalsen.dev/)
- **Micro-interactions** : [Cassie Evans](https://www.cassie.codes/)
- **Animation terminal** : [edh.dev](https://edh.dev/)

---

## 📄 Licence

Ce projet est libre d'utilisation pour un usage personnel.

---

## 👤 Auteur

**Sébastien Dabert**
- GitHub : [@bessastien](https://github.com/bessastien)
- Email : contact@sebastiendabert.dev
- Formation : BUT Informatique (2ème année)

---

## 🔄 Changelog

### v1.0.0 (2025-01-18)
- ✅ Structure modulaire (CSS + JS)
- ✅ Animation terminal ultra-rapide
- ✅ Cercle suiveur de souris
- ✅ Sections complètes
- ✅ Responsive design
- ✅ Documentation complète

---

**Fait avec ❤️ et beaucoup de ☕**


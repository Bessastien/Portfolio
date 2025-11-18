/**
 * PORTFOLIO - FICHIER PRINCIPAL
 * Orchestration de toutes les fonctionnalités du portfolio
 * @author Sébastien Dabert
 */

// Import des modules (simulé via script tags dans l'HTML)
// En production, utiliser un bundler comme Webpack ou Vite

/**
 * Initialisation au chargement de la page
 */
window.addEventListener('DOMContentLoaded', () => {
    // Créer l'effet matrix en arrière-plan
    if (window.createMatrixEffect) {
        window.createMatrixEffect();
    }

    // Démarrer l'animation du terminal
    if (window.initTerminal) {
        window.initTerminal();
    }

    // Initialiser la navigation smooth scroll
    initSmoothScroll();
});

/**
 * Initialiser le carousel après que le contenu principal soit visible
 */
window.addEventListener('contentVisible', () => {
    if (window.initSkillsCarousel) {
        window.initSkillsCarousel();
    }
});

/**
 * SMOOTH SCROLL POUR LA NAVIGATION
 */
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}


/**
 * LOG DE DÉMARRAGE
 */
console.log('%c Portfolio chargé avec succès! ', 'background: #00ff88; color: #0a0a0a; font-weight: bold; padding: 5px 10px; border-radius: 3px;');
console.log('%c Développé par Sébastien Dabert ', 'color: #00ccff; font-style: italic;');
console.log('%c Structure modulaire : 7 CSS + 4 JS ', 'color: #a0a0a0; font-size: 11px;');


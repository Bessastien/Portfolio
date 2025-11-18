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

    // Initialiser le thème
    initThemeToggle();
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
 * INITIALISATION DU THÈME
 */
function initThemeToggle() {
    const body = document.body;
    const toggle = document.getElementById('theme-toggle');
    const icon = toggle?.querySelector('.theme-toggle-icon');
    const label = toggle?.querySelector('.theme-toggle-text');
    if (!toggle || !icon || !label) return;

    const storedTheme = localStorage.getItem('theme-preference');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const defaultTheme = storedTheme || (prefersDark ? 'dark' : 'light');

    applyTheme(defaultTheme);

    toggle.addEventListener('click', () => {
        const nextTheme = body.dataset.theme === 'light' ? 'dark' : 'light';
        applyTheme(nextTheme);
        localStorage.setItem('theme-preference', nextTheme);
    });

    function applyTheme(theme) {
        body.classList.add('theme-transition');
        body.dataset.theme = theme;
        icon.textContent = theme === 'light' ? '☀' : '☾';
        label.textContent = theme === 'light' ? 'Clair' : 'Sombre';
        setTimeout(() => body.classList.remove('theme-transition'), 400);
    }
}

/**
 * LOG DE DÉMARRAGE
 */
console.log('%c Portfolio chargé avec succès! ', 'background: #00ff88; color: #0a0a0a; font-weight: bold; padding: 5px 10px; border-radius: 3px;');
console.log('%c Développé par Sébastien Dabert ', 'color: #00ccff; font-style: italic;');
console.log('%c Structure modulaire : 7 CSS + 4 JS ', 'color: #a0a0a0; font-size: 11px;');

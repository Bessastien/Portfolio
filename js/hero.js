/**
 * HERO - EFFET DE SUIVI DE SOURIS
 * Le cercle SVG suit le curseur de la souris avec interpolation fluide
 */

/**
 * Initialiser l'effet de suivi de souris sur le cercle Hero
 */
function initParallax() {
    const heroShape = document.getElementById('hero-shape');
    if (!heroShape) return;

    // Variables pour la position de la souris et du cercle
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;

    // Configuration du cercle
    const circleSize = 50;
    const offset = circleSize / 2; // 25px pour centrage parfait

    /**
     * Suivre la position de la souris en temps réel
     */
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    /**
     * Animation fluide avec interpolation linéaire (lerp)
     */
    function animate() {
        const speed = 0.2; // Vitesse de suivi (0.1 = lent, 0.3 = rapide)

        // Calculer la nouvelle position avec interpolation
        currentX += (mouseX - currentX) * speed;
        currentY += (mouseY - currentY) * speed;

        // Appliquer la transformation - cercle centré sur le curseur
        heroShape.style.transform = `translate(${currentX - offset}px, ${currentY - offset}px)`;

        // Continuer l'animation
        requestAnimationFrame(animate);
    }

    // Démarrer l'animation
    animate();
}

// Exposer la fonction globalement
window.initParallax = initParallax;


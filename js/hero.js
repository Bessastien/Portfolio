/**
 * HERO - EFFET DE SUIVI DE SOURIS
 * Le cercle SVG suit le curseur de la souris avec interpolation fluide
 * Version optimisée et sans bugs
 */

(function() {
    'use strict';

    // Variables globales pour l'effet
    let isAnimating = false;
    let animationFrameId = null;
    let heroShape = null;

    /**
     * Initialiser l'effet de suivi de souris sur le cercle Hero
     */
    function initParallax() {
        // Éviter les initialisations multiples
        if (isAnimating) {
            console.warn('Hero parallax déjà initialisé');
            return;
        }

        // Récupérer l'élément SVG
        heroShape = document.getElementById('hero-shape');
        if (!heroShape) {
            console.error('Élément hero-shape introuvable');
            return;
        }

        // Variables pour la position de la souris et du cercle
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let currentX = window.innerWidth / 2;
        let currentY = window.innerHeight / 2;

        // Configuration du cercle
        const circleSize = 50;
        const offset = circleSize / 2; // 25px pour centrage parfait
        const speed = 0.15; // Vitesse de suivi (plus c'est bas, plus c'est fluide)

        // S'assurer que le SVG est visible
        heroShape.style.opacity = '0.6';
        heroShape.style.display = 'block';
        heroShape.classList.add('active');

        /**
         * Gestionnaire de mouvement de souris optimisé
         */
        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        /**
         * Animation fluide avec interpolation linéaire (lerp)
         */
        const animate = () => {
            if (!isAnimating) return;

            // Calculer la nouvelle position avec interpolation
            const deltaX = mouseX - currentX;
            const deltaY = mouseY - currentY;

            // Appliquer le lissage
            currentX += deltaX * speed;
            currentY += deltaY * speed;

            // Arrondir pour éviter les valeurs fractionnaires inutiles
            const finalX = Math.round((currentX - offset) * 100) / 100;
            const finalY = Math.round((currentY - offset) * 100) / 100;

            // Appliquer la transformation - cercle centré sur le curseur
            if (heroShape) {
                heroShape.style.transform = `translate3d(${finalX}px, ${finalY}px, 0)`;
            }

            // Continuer l'animation
            animationFrameId = requestAnimationFrame(animate);
        };

        // Ajouter l'écouteur d'événement
        document.addEventListener('mousemove', handleMouseMove, { passive: true });

        // Démarrer l'animation
        isAnimating = true;
        animate();

        console.log('%c ✓ Hero parallax activé ', 'background: #00ff88; color: #0a0a0a; padding: 2px 5px; border-radius: 2px;');

        // Nettoyage en cas de changement de page ou désactivation
        return () => {
            isAnimating = false;
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
            }
            document.removeEventListener('mousemove', handleMouseMove);
            console.log('Hero parallax désactivé');
        };
    }

    // Exposer la fonction globalement
    window.initParallax = initParallax;

})();


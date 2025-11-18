/**
 * CAROUSEL DES COMPÉTENCES
 * Gestion du défilement horizontal avec flèches et filtrage des projets
 */

let carouselOffset = 0;
let skillsContainer = null;
let prevBtn = null;
let nextBtn = null;
let allProjects = [];
let selectedSkill = null;
let highlightTimeout = null; // Timer pour la surbrillance temporaire

/**
 * Initialiser le carousel des compétences
 */
function initSkillsCarousel() {
    skillsContainer = document.getElementById('skills-container');
    prevBtn = document.querySelector('.carousel-btn-prev');
    nextBtn = document.querySelector('.carousel-btn-next');

    if (!skillsContainer || !prevBtn || !nextBtn) {
        console.warn('Éléments du carousel non trouvés');
        return;
    }

    // Sauvegarder tous les projets
    allProjects = Array.from(document.querySelectorAll('.project-card'));

    // Initialiser immédiatement et forcer une mise à jour après un court délai
    updateCarouselButtons();
    setupCarouselEvents();
    setupSkillClickEvents();

    // Forcer la mise à jour après le rendu complet
    setTimeout(() => {
        updateCarouselButtons();
    }, 100);

    console.log('✅ Carousel activé avec filtrage des projets');
}

/**
 * Configurer les événements de clic sur les compétences
 */
function setupSkillClickEvents() {
    const skillTags = document.querySelectorAll('.skill-tag');

    skillTags.forEach(tag => {
        tag.addEventListener('click', () => {
            const skill = tag.textContent.trim();

            // Appliquer la surbrillance (elle disparaîtra automatiquement après 2 secondes)
            selectSkill(tag, skill);
            filterProjectsBySkill(skill);
        });
    });
}

/**
 * Sélectionner une compétence
 */
function selectSkill(tagElement, skill) {
    // Retirer la sélection précédente
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.classList.remove('selected');
    });

    // Ajouter la sélection
    tagElement.classList.add('selected');
    selectedSkill = skill;
}

/**
 * Désélectionner toutes les compétences
 */
function deselectSkill() {
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.classList.remove('selected');
    });
    selectedSkill = null;
}

/**
 * Filtrer les projets par compétence - Met en surbrillance les projets correspondants (2 secondes)
 */
function filterProjectsBySkill(skill) {
    let hasMatch = false;
    let firstMatchedProject = null;

    // Annuler le timer précédent s'il existe
    if (highlightTimeout) {
        clearTimeout(highlightTimeout);
        highlightTimeout = null;
    }

    // Parcourir tous les projets et mettre en surbrillance ceux qui correspondent
    allProjects.forEach(project => {
        const techBadges = Array.from(project.querySelectorAll('.tech-badge'));
        const hasTech = techBadges.some(badge =>
            badge.textContent.trim().toLowerCase() === skill.toLowerCase()
        );

        if (hasTech) {
            // Projet correspond : le mettre en surbrillance
            project.classList.add('highlighted');
            project.classList.remove('dimmed');
            hasMatch = true;

            // Sauvegarder le premier projet trouvé pour le scroll
            if (!firstMatchedProject) {
                firstMatchedProject = project;
            }
        } else {
            // Projet ne correspond pas : l'atténuer
            project.classList.add('dimmed');
            project.classList.remove('highlighted');
        }
    });

    // Si aucun projet trouvé, restaurer l'affichage normal et désélectionner
    if (!hasMatch) {
        showAllProjects();
        deselectSkill();
        return;
    }

    // Scroll vers le premier projet trouvé
    if (firstMatchedProject) {
        firstMatchedProject.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }

    // Retirer la surbrillance après 2 secondes
    highlightTimeout = setTimeout(() => {
        showAllProjects();
        deselectSkill();
        highlightTimeout = null;
    }, 800);
}

/**
 * Afficher tous les projets normalement (retirer la surbrillance)
 */
function showAllProjects() {
    allProjects.forEach(project => {
        project.classList.remove('highlighted');
        project.classList.remove('dimmed');
        project.classList.remove('filtered-in');
    });
}

/**
 * Configuration des événements du carousel
 */
function setupCarouselEvents() {
    prevBtn.addEventListener('click', () => scrollCarousel('prev'));
    nextBtn.addEventListener('click', () => scrollCarousel('next'));

    // Support du swipe tactile
    let touchStartX = 0;
    let touchEndX = 0;

    skillsContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    skillsContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            scrollCarousel('next');
        }
        if (touchEndX > touchStartX + swipeThreshold) {
            scrollCarousel('prev');
        }
    }

    // Support du clavier
    document.addEventListener('keydown', (e) => {
        if (document.activeElement.closest('.skills-carousel')) {
            if (e.key === 'ArrowLeft') scrollCarousel('prev');
            if (e.key === 'ArrowRight') scrollCarousel('next');
        }
    });
}

/**
 * Faire défiler le carousel
 */
function scrollCarousel(direction) {
    const container = skillsContainer.parentElement;
    const containerWidth = container.offsetWidth;
    const scrollAmount = containerWidth * 0.7; // Défiler 70% de la largeur visible

    if (direction === 'next') {
        carouselOffset -= scrollAmount;
    } else {
        carouselOffset += scrollAmount;
    }

    // Limiter le défilement
    const maxOffset = 0;
    const minOffset = -(skillsContainer.scrollWidth - containerWidth);

    carouselOffset = Math.max(minOffset, Math.min(maxOffset, carouselOffset));

    // Appliquer la transformation
    skillsContainer.style.transform = `translateX(${carouselOffset}px)`;

    updateCarouselButtons();
}

/**
 * Mettre à jour l'état des boutons
 */
function updateCarouselButtons() {
    if (!skillsContainer || !prevBtn || !nextBtn) return;

    const container = skillsContainer.parentElement;
    const containerWidth = container.offsetWidth;
    const contentWidth = skillsContainer.scrollWidth;

    // Désactiver les boutons si pas besoin de défiler
    if (contentWidth <= containerWidth) {
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        return;
    }

    // Bouton précédent
    prevBtn.disabled = carouselOffset >= 0;

    // Bouton suivant
    const minOffset = -(contentWidth - containerWidth);
    nextBtn.disabled = carouselOffset <= minOffset;
}

/**
 * Réinitialiser le carousel au redimensionnement
 */
window.addEventListener('resize', () => {
    if (skillsContainer) {
        carouselOffset = 0;
        skillsContainer.style.transform = 'translateX(0)';
        updateCarouselButtons();
    }
});

// Exposer la fonction globalement
window.initSkillsCarousel = initSkillsCarousel;


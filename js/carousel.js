/**
 * CAROUSEL / FILTRAGE DES COMPÉTENCES SIMPLIFIÉ
 * Sur mobile les flèches ont été retirées, on conserve seulement le filtrage + surbrillance temporaire.
 */

let allProjects = [];
let selectedSkill = null;
let highlightTimeout = null;

/**
 * Initialiser le carousel des compétences
 */
function initSkillsCarousel() {
    // Récupérer tous les projets une fois
    allProjects = Array.from(document.querySelectorAll('.project-card'));
    setupSkillClickEvents();
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

    // Durée réduite à 800ms (≈ 0.8s) pour retour rapide
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
        project.classList.remove('highlighted', 'dimmed', 'filtered-in');
    });
}

// Exposer la fonction globalement
window.initSkillsCarousel = initSkillsCarousel;

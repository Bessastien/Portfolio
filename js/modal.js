/**
 * Gestion du modal de projet
 */

// Variable globale pour stocker les données des projets
let projectsData = [];

/**
 * Initialise le modal et stocke les données des projets
 */
function initProjectModal(projects) {
    projectsData = projects;
}

/**
 * Ouvre le modal avec les informations du projet
 */
function openProjectModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) {
        console.error('Projet non trouvé:', projectId);
        return;
    }

    const modal = document.getElementById('project-modal');
    if (!modal) {
        console.error('Modal non trouvé dans le DOM');
        return;
    }

    // Remplir le contenu du modal
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-language').textContent = project.language;
    document.getElementById('modal-description').textContent = project.description;

    // Technologies
    const techContainer = document.getElementById('modal-technologies');
    techContainer.innerHTML = '';
    project.technologies.forEach(tech => {
        const badge = document.createElement('span');
        badge.className = 'modal-tech-badge';
        badge.textContent = tech;
        techContainer.appendChild(badge);
    });

    // Images
    const imagesContainer = document.getElementById('modal-images-container');
    if (project.images && project.images.length > 0) {
        imagesContainer.style.display = 'block';
        const imagesGrid = document.getElementById('modal-images');
        imagesGrid.innerHTML = '';
        project.images.forEach(imageUrl => {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = `Screenshot de ${project.title}`;
            img.className = 'modal-image';
            img.addEventListener('click', () => {
                window.open(imageUrl, '_blank');
            });
            imagesGrid.appendChild(img);
        });
    } else {
        imagesContainer.style.display = 'none';
    }

    // Fonctionnalités
    const featuresContainer = document.getElementById('modal-features-container');
    if (project.features && project.features.length > 0) {
        featuresContainer.style.display = 'block';
        const featuresList = document.getElementById('modal-features');
        featuresList.innerHTML = '';
        project.features.forEach(feature => {
            const li = document.createElement('li');
            li.className = 'modal-feature';
            li.textContent = feature;
            featuresList.appendChild(li);
        });
    } else {
        featuresContainer.style.display = 'none';
    }

    // Compétences BUT
    const competencesContainer = document.getElementById('modal-competences-container');
    if (project.competences && Object.keys(project.competences).length > 0) {
        competencesContainer.style.display = 'block';
        const competencesDiv = document.getElementById('modal-competences');
        competencesDiv.innerHTML = '';

        Object.entries(project.competences).forEach(([code, comp]) => {
            const compCard = document.createElement('div');
            compCard.className = 'competence-card';

            const compHeader = document.createElement('div');
            compHeader.className = 'competence-header';

            const compCode = document.createElement('span');
            compCode.className = 'competence-code';
            compCode.textContent = code;

            const compLevel = document.createElement('span');
            compLevel.className = `competence-level level-${comp.niveau_estime}`;
            const levelText = ['', 'Initiation', 'Maîtrise partielle', 'Autonomie', 'Maîtrise avancée'];
            compLevel.textContent = `Niveau ${comp.niveau_estime} - ${levelText[comp.niveau_estime]}`;

            compHeader.appendChild(compCode);
            compHeader.appendChild(compLevel);

            const compIndicator = document.createElement('p');
            compIndicator.className = 'competence-indicator';
            compIndicator.textContent = comp.indicateur;

            const compProof = document.createElement('p');
            compProof.className = 'competence-proof';
            compProof.innerHTML = `<strong>Preuve :</strong> ${comp.preuve_possible}`;

            compCard.appendChild(compHeader);
            compCard.appendChild(compIndicator);
            compCard.appendChild(compProof);

            competencesDiv.appendChild(compCard);
        });
    } else {
        competencesContainer.style.display = 'none';
    }

    // Liens
    const githubLink = document.getElementById('modal-github-link');

    if (project.github) {
        githubLink.href = project.github;
        githubLink.classList.remove('disabled');
    } else {
        githubLink.href = '#';
        githubLink.classList.add('disabled');
    }


    // Afficher le modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

/**
 * Ferme le modal
 */
function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Écouteurs d'événements pour fermer le modal
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('project-modal');
    if (!modal) return;

    // Bouton de fermeture
    const closeBtn = document.querySelector('.modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeProjectModal);
    }

    // Clic en dehors du contenu
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProjectModal();
        }
    });

    // Touche Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeProjectModal();
        }
    });
});

/**
 * =========================================
 * GESTION DU MODAL D'EXPÉRIENCE
 * =========================================
 */

// Variable globale pour stocker les données des expériences
let experiencesData = [];

/**
 * Initialise le modal d'expérience et stocke les données
 */
function initExperienceModal(experiences) {
    experiencesData = experiences;
}

/**
 * Ouvre le modal avec les informations de l'expérience
 */
function openExperienceModal(experienceId) {
    const experience = experiencesData.find(exp => exp.id === experienceId);
    if (!experience) {
        console.error('Expérience non trouvée:', experienceId);
        return;
    }

    const modal = document.getElementById('experience-modal');
    if (!modal) {
        console.error('Modal d\'expérience non trouvé dans le DOM');
        return;
    }

    // Remplir le contenu du modal
    document.getElementById('exp-modal-title').textContent = experience.title;
    document.getElementById('exp-modal-company').textContent = experience.company;
    document.getElementById('exp-modal-period').textContent = experience.period;
    document.getElementById('exp-modal-description').textContent = experience.description;

    // Missions
    const missionsList = document.getElementById('exp-modal-missions');
    missionsList.innerHTML = '';
    if (experience.missions && experience.missions.length > 0) {
        experience.missions.forEach(mission => {
            const li = document.createElement('li');
            li.className = 'modal-feature';
            li.textContent = mission;
            missionsList.appendChild(li);
        });
    }

    // Réalisations
    const achievementsContainer = document.getElementById('exp-modal-achievements-container');
    if (experience.achievements && experience.achievements.length > 0) {
        achievementsContainer.style.display = 'block';
        const achievementsList = document.getElementById('exp-modal-achievements');
        achievementsList.innerHTML = '';
        experience.achievements.forEach(achievement => {
            const li = document.createElement('li');
            li.textContent = achievement;
            achievementsList.appendChild(li);
        });
    } else {
        achievementsContainer.style.display = 'none';
    }

    // Technologies
    const techContainer = document.getElementById('exp-modal-technologies-container');
    if (experience.technologies && experience.technologies.length > 0) {
        techContainer.style.display = 'block';
        const techList = document.getElementById('exp-modal-technologies');
        techList.innerHTML = '';
        experience.technologies.forEach(tech => {
            const badge = document.createElement('span');
            badge.className = 'modal-tech-badge';
            badge.textContent = tech;
            techList.appendChild(badge);
        });
    } else {
        techContainer.style.display = 'none';
    }

    // Compétences
    const skillsContainer = document.getElementById('exp-modal-skills');
    skillsContainer.innerHTML = '';
    experience.skills.forEach(skill => {
        const badge = document.createElement('span');
        badge.className = 'modal-tech-badge';
        badge.textContent = skill;
        skillsContainer.appendChild(badge);
    });

    // Afficher le modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

/**
 * Ferme le modal d'expérience
 */
function closeExperienceModal() {
    const modal = document.getElementById('experience-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Écouteurs d'événements pour fermer le modal d'expérience
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('experience-modal');
    if (!modal) return;

    // Bouton de fermeture
    const closeBtn = document.getElementById('exp-modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeExperienceModal);
    }

    // Clic en dehors du contenu
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeExperienceModal();
        }
    });

    // Touche Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (modal.classList.contains('active')) {
                closeExperienceModal();
            }
        }
    });
});

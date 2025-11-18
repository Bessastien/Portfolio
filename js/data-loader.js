/**
 * CHARGEMENT DYNAMIQUE DES DONNÉES
 * Charge les données depuis les fichiers JSON et les affiche
 */

/**
 * Charger les données depuis un fichier JSON
 */
async function loadJSON(filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Erreur lors du chargement de ${filePath}:`, error);
        return null;
    }
}

/**
 * Afficher les projets
 */
async function renderProjects() {
    const data = await loadJSON('data/projects.json');
    if (!data || !data.projects) return;

    const container = document.getElementById('projects-container');
    if (!container) return;

    container.innerHTML = data.projects.map(project => `
        <article class="project-card">
            <div class="project-header">
                <h3 class="project-title">${project.title}</h3>
                <span class="project-tag">${project.language}</span>
            </div>
            <p class="project-description">
                ${project.description}
            </p>
            <div class="project-footer">
                ${project.technologies.map(tech => 
                    `<span class="tech-badge">${tech}</span>`
                ).join('')}
            </div>
        </article>
    `).join('');
}

/**
 * Afficher les expériences
 */
async function renderExperiences() {
    const data = await loadJSON('data/experiences.json');
    if (!data || !data.experiences) return;

    const container = document.getElementById('experiences-container');
    if (!container) return;

    container.innerHTML = data.experiences.map(exp => `
        <article class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="timeline-date">${exp.period}</div>
                <h3 class="timeline-title">${exp.title}</h3>
                <div class="timeline-company">${exp.company}</div>
                <p class="timeline-skill">
                    ${exp.skills.map(skill => `<strong>${skill}</strong>`).join(' & ')}
                </p>
            </div>
        </article>
    `).join('');
}

/**
 * Afficher les compétences
 */
async function renderSkills() {
    const data = await loadJSON('data/skills.json');
    if (!data || !data.skills) return;

    const container = document.getElementById('skills-container');
    if (!container) return;

    container.innerHTML = data.skills.map(skill =>
        `<span class="skill-tag">${skill}</span>`
    ).join('');
}

/**
 * Afficher les informations du profil
 */
async function renderProfile() {
    const data = await loadJSON('data/profile.json');
    if (!data || !data.personal) return;

    // Hero section
    const heroName = document.getElementById('hero-name');
    if (heroName) {
        heroName.textContent = data.personal.name.split(' ')[0]; // Prénom uniquement
    }

    const heroSubtitle = document.getElementById('hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = data.personal.hero_subtitle;
    }

    // Footer
    const footerTitle = document.getElementById('footer-title');
    if (footerTitle) {
        footerTitle.textContent = data.footer.title;
    }

    const footerSubtitle = document.getElementById('footer-subtitle');
    if (footerSubtitle) {
        footerSubtitle.textContent = data.footer.subtitle;
    }

    const githubLink = document.getElementById('github-link');
    if (githubLink) {
        githubLink.href = data.personal.github;
        githubLink.querySelector('span').textContent = data.personal.github.replace('https://', '');
    }

    const emailLink = document.getElementById('email-link');
    if (emailLink) {
        emailLink.href = `mailto:${data.personal.email}`;
        emailLink.querySelector('span').textContent = data.personal.email;
    }

    const copyright = document.getElementById('footer-copyright');
    if (copyright) {
        copyright.textContent = data.footer.copyright;
    }
}

/**
 * Initialiser toutes les données
 */
async function initData() {
    console.log('🔄 Chargement des données...');

    await Promise.all([
        renderProfile(),
        renderProjects(),
        renderExperiences(),
        renderSkills()
    ]);

    console.log('✅ Données chargées avec succès !');
}

// Exposer la fonction globalement
window.initData = initData;


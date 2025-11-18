document.addEventListener('DOMContentLoaded', () => {
    const fetchData = async () => {
        try {
            const [profileRes, projectsRes, experiencesRes, skillsRes] = await Promise.all([
                fetch('data/profile.json'),
                fetch('data/projects.json'),
                fetch('data/experiences.json'),
                fetch('data/skills.json')
            ]);

            const profile = await profileRes.json();
            const projectsData = await projectsRes.json();
            const experiencesData = await experiencesRes.json();
            const skillsData = await skillsRes.json();

            populateHero(profile);
            populateProjects(projectsData.projects);
            populateExperiences(experiencesData.experiences);
            populateSkills(skillsData.skills);
            populateFooter(profile);

        } catch (error) {
            console.error('Erreur lors du chargement des données:', error);
            // En cas d'erreur, on peut afficher un message ou charger un contenu par défaut
            document.getElementById('main-content').innerHTML = '<p style="text-align: center; color: white; padding: 50px;">Impossible de charger les données du portfolio. Veuillez réessayer plus tard.</p>';
            document.getElementById('main-content').classList.remove('hidden');
            document.getElementById('terminal-loader').style.display = 'none';
        }
    };

    const populateHero = (profile) => {
        document.getElementById('hero-name').textContent = profile.personal.name.split(' ')[0];
        document.getElementById('hero-subtitle').textContent = profile.personal.hero_subtitle;
    };

    const populateProjects = (projects) => {
        const projectsGrid = document.getElementById('projects-grid');
        projectsGrid.innerHTML = '';
        projects.forEach(project => {
            const projectCard = document.createElement('article');
            projectCard.className = 'project-card';
            projectCard.innerHTML = `
                <div class="project-header">
                    <h3 class="project-title">${escapeHTML(project.title)}</h3>
                </div>
                <p class="project-description">
                    ${escapeHTML(project.description)}
                </p>
                <div class="project-footer">
                    ${project.technologies.map(tech => `<span class="tech-badge">${escapeHTML(tech)}</span>`).join('')}
                </div>
            `;
            projectsGrid.appendChild(projectCard);
        });
    };

    const populateExperiences = (experiences) => {
        const timeline = document.getElementById('timeline');
        timeline.innerHTML = '';
        experiences.forEach(exp => {
            const timelineItem = document.createElement('article');
            timelineItem.className = 'timeline-item';
            const skillsFormatted = exp.skills.map(skill => `<strong>${escapeHTML(skill)}</strong>`).join(' & ');
            timelineItem.innerHTML = `
                <div class="timeline-date-outside">${escapeHTML(exp.period)}</div>
                <div class="timeline-content">
                    <h3 class="timeline-title">${escapeHTML(exp.title)}</h3>
                    <div class="timeline-company">${escapeHTML(exp.company)}</div>
                    <p class="timeline-skill">
                        ${skillsFormatted}
                    </p>
                </div>
            `;
            timeline.appendChild(timelineItem);
        });
    };

    const populateSkills = (skills) => {
        const skillsContainer = document.getElementById('skills-container');
        skillsContainer.innerHTML = '';
        skills.forEach(skill => {
            const skillTag = document.createElement('span');
            skillTag.className = 'skill-tag';
            skillTag.textContent = skill;
            skillsContainer.appendChild(skillTag);
        });
    };

    const populateFooter = (profile) => {
        document.getElementById('footer-title').textContent = profile.footer.title;
        document.getElementById('footer-subtitle').textContent = profile.footer.subtitle;
        document.getElementById('copyright').textContent = profile.footer.copyright;

        const githubLink = document.getElementById('github-link');
        githubLink.href = profile.personal.github;
        document.getElementById('github-text').textContent = profile.personal.github.replace('https://', '');

        const linkedinLink = document.getElementById('linkedin-link');
        linkedinLink.href = profile.personal.linkedin;
        document.getElementById('linkedin-text').textContent = profile.personal.linkedin.replace('https://', '').replace('www.', '');

        const emailLink = document.getElementById('email-link');
        emailLink.href = `mailto:${profile.personal.email}`;
        document.getElementById('email-text').textContent = profile.personal.email;
    };

    const escapeHTML = (str) => {
        const p = document.createElement('p');
        p.appendChild(document.createTextNode(str));
        return p.innerHTML;
    };

    fetchData();
});


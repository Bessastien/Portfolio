<?php
// Charger les données depuis les fichiers JSON
$projects = json_decode(file_get_contents('data/projects.json'), true)['projects'] ?? [];
$experiences = json_decode(file_get_contents('data/experiences.json'), true)['experiences'] ?? [];
$skills = json_decode(file_get_contents('data/skills.json'), true)['skills'] ?? [];
$profile = json_decode(file_get_contents('data/profile.json'), true) ?? [];
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sébastien Dabert | Développeur</title>

    <!-- Styles modulaires -->
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/terminal.css">
    <link rel="stylesheet" href="css/layout.css">
    <link rel="stylesheet" href="css/hero.css">
    <link rel="stylesheet" href="css/projects.css">
    <link rel="stylesheet" href="css/sections.css">
    <link rel="stylesheet" href="css/responsive.css">
</head>
<body>
    <!-- Écran de chargement Terminal -->
    <div id="terminal-loader" class="terminal-loader">
        <div class="terminal-wrapper">
            <div class="terminal-header">
                <span class="terminal-btn red"></span>
                <span class="terminal-btn yellow"></span>
                <span class="terminal-btn green"></span>
                <span class="terminal-title">sebastien@portfolio:~$</span>
            </div>
            <div class="terminal-content">
                <div id="terminal-text"></div>
                <span class="cursor">_</span>
            </div>
        </div>
        <div class="matrix-bg" id="matrix-bg"></div>
    </div>

    <!-- Contenu Principal (caché initialement) -->
    <div id="main-content" class="main-content hidden">
        <!-- Header Sticky -->
        <header class="header" id="header">
            <nav class="nav">
                <a href="#projects" class="nav-link">/// Projets</a>
                <a href="#parcours" class="nav-link">/// Parcours</a>
                <a href="#skills" class="nav-link">/// Compétences</a>
                <a href="#contact" class="nav-link">/// Contact</a>
            </nav>
        </header>

        <!-- Section Hero -->
        <section class="hero" id="hero">
            <div class="hero-content">
                <h1 class="hero-title">Salut, je suis <span class="highlight"><?php echo explode(' ', $profile['personal']['name'])[0]; ?></span>.</h1>
                <p class="hero-subtitle"><?php echo $profile['personal']['hero_subtitle']; ?></p>

                <a href="assets/documents/CV_Sebastien_Dabert.pdf" download class="cv-download-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Télécharger mon CV
                </a>
            </div>
        </section>

        <!-- Section Projets -->
        <section class="projects" id="projects">
            <div class="container">
                <h2 class="section-title">/// Projets</h2>
                <div class="projects-grid">
                    <?php foreach ($projects as $project): ?>
                    <article class="project-card">
                        <div class="project-header">
                            <h3 class="project-title"><?php echo htmlspecialchars($project['title']); ?></h3>
                        </div>
                        <p class="project-description">
                            <?php echo htmlspecialchars($project['description']); ?>
                        </p>
                        <div class="project-footer">
                            <?php foreach ($project['technologies'] as $tech): ?>
                            <span class="tech-badge"><?php echo htmlspecialchars($tech); ?></span>
                            <?php endforeach; ?>
                        </div>
                    </article>
                    <?php endforeach; ?>
                </div>
            </div>
        </section>

        <!-- Section Parcours -->
        <section class="parcours" id="parcours">
            <div class="container">
                <h2 class="section-title">/// Parcours</h2>
                <div class="timeline">
                    <?php foreach ($experiences as $exp): ?>
                    <article class="timeline-item">
                        <div class="timeline-date-outside"><?php echo htmlspecialchars($exp['period']); ?></div>
                        <div class="timeline-content">
                            <h3 class="timeline-title"><?php echo htmlspecialchars($exp['title']); ?></h3>
                            <div class="timeline-company"><?php echo htmlspecialchars($exp['company']); ?></div>
                            <p class="timeline-skill">
                                <?php
                                $skillsFormatted = array_map(function($skill) {
                                    return '<strong>' . htmlspecialchars($skill) . '</strong>';
                                }, $exp['skills']);
                                echo implode(' & ', $skillsFormatted);
                                ?>
                            </p>
                        </div>
                    </article>
                    <?php endforeach; ?>
                </div>
            </div>
        </section>

        <!-- Section Compétences -->
        <section class="skills" id="skills">
            <div class="container">
                <h2 class="section-title">/// Compétences</h2>

                <div class="skills-carousel">
                    <button class="carousel-btn carousel-btn-prev" aria-label="Précédent">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>

                    <div class="skills-carousel-container">
                        <div class="skills-tags" id="skills-container">
                            <?php foreach ($skills as $skill): ?>
                            <span class="skill-tag"><?php echo htmlspecialchars($skill); ?></span>
                            <?php endforeach; ?>
                        </div>
                    </div>

                    <button class="carousel-btn carousel-btn-next" aria-label="Suivant">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </section>

        <!-- Footer / Contact -->
        <footer class="footer" id="contact">
            <div class="container">
                <div class="footer-content">
                    <h2 class="footer-title"><?php echo htmlspecialchars($profile['footer']['title']); ?></h2>
                    <p class="footer-subtitle"><?php echo htmlspecialchars($profile['footer']['subtitle']); ?></p>

                    <div class="footer-links">
                        <a href="<?php echo htmlspecialchars($profile['personal']['github']); ?>" target="_blank" rel="noopener noreferrer" class="footer-link">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                            <span><?php echo str_replace('https://', '', $profile['personal']['github']); ?></span>
                        </a>

                        <a href="<?php echo htmlspecialchars($profile['personal']['linkedin']); ?>" target="_blank" rel="noopener noreferrer" class="footer-link">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                            <span><?php echo str_replace(['https://', 'www.'], '', $profile['personal']['linkedin']); ?></span>
                        </a>

                        <a href="mailto:<?php echo htmlspecialchars($profile['personal']['email']); ?>" class="footer-link">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <span><?php echo htmlspecialchars($profile['personal']['email']); ?></span>
                        </a>
                    </div>
                </div>

                <div class="footer-bottom">
                    <p><?php echo htmlspecialchars($profile['footer']['copyright']); ?></p>
                </div>
            </div>
        </footer>
    </div>

    <!-- Scripts modulaires -->
    <script src="js/carousel.js"></script>
    <script src="js/matrix.js"></script>
    <script src="js/hero.js"></script>
    <script src="js/terminal.js"></script>
    <script src="js/main.js"></script>
</body>
</html>


